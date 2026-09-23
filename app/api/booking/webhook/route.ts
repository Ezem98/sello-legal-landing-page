import { type NextRequest, NextResponse } from "next/server"
import { createCalendarEvent } from "@/lib/google"
import { getPayment, verifyWebhookSignature } from "@/lib/mercadopago"
import { findBookingById, updateBookingStatus, type BookingRow } from "@/lib/bookings-sheet"
import { consultationTypes, type ConsultationTypeKey } from "@/lib/pricing"
import { slotToISO } from "@/lib/booking-availability"
import { isResendConfigured, sendEmail } from "@/lib/resend"
import {
  buildAdminConfirmationEmail,
  buildAdminFailureEmail,
  buildClientConfirmationEmail,
} from "@/lib/email-templates"
import { siteConfig } from "@/lib/site-config"
import { getEnv } from "@/lib/cf-env"

export const runtime = "edge"

interface MPWebhookBody {
  type?: string
  action?: string
  data?: { id?: string }
}

export async function POST(request: NextRequest) {
  let body: MPWebhookBody = {}
  try {
    body = (await request.json()) as MPWebhookBody
  } catch {
    // algunos pings de MP no traen body
  }

  const dataId = body?.data?.id ?? request.nextUrl.searchParams.get("data.id") ?? request.nextUrl.searchParams.get("id")

  if (!dataId) {
    return NextResponse.json({ received: true })
  }

  const validSignature = await verifyWebhookSignature({
    xSignature: request.headers.get("x-signature"),
    xRequestId: request.headers.get("x-request-id"),
    dataId,
  })

  if (getEnv().MERCADOPAGO_WEBHOOK_SECRET && !validSignature) {
    return NextResponse.json({ error: "Firma inválida" }, { status: 401 })
  }

  if (body.type && body.type !== "payment") {
    return NextResponse.json({ received: true })
  }

  let paidBooking: BookingRow | null = null

  try {
    const payment = await getPayment(dataId)
    const booking = await findBookingById(payment.external_reference)

    if (!booking) {
      return NextResponse.json({ received: true })
    }

    if (payment.status === "approved") {
      if (booking.status !== "confirmed") {
        paidBooking = booking
        const plan = consultationTypes[booking.consultationType as ConsultationTypeKey] as
          | (typeof consultationTypes)[ConsultationTypeKey]
          | undefined
        const { startISO, endISO } = slotToISO(booking.date, booking.time)
        const calendarId = getEnv().GOOGLE_CALENDAR_ID as string

        const event = await createCalendarEvent({
          calendarId,
          summary: `Consulta ${plan?.label ?? booking.consultationType} - ${booking.name}`,
          description: [
            `Cliente: ${booking.name}`,
            `Email: ${booking.email}`,
            `Teléfono: ${booking.phone}`,
            `Detalle: ${booking.details || "-"}`,
            `Pago Mercado Pago #${payment.id}`,
          ].join("\n"),
          startISO,
          endISO,
          attendeeEmail: booking.email,
        })

        await updateBookingStatus(booking, {
          status: "confirmed",
          mpPaymentId: String(payment.id),
          meetLink: event.meetLink ?? "",
        })

        if (isResendConfigured()) {
          const clientMail = buildClientConfirmationEmail(booking, event.meetLink)
          const adminMail = buildAdminConfirmationEmail(booking, event)
          await Promise.all([
            sendEmail({ to: booking.email, ...clientMail }).catch((e) =>
              console.error("No se pudo enviar el mail de confirmación al cliente:", e)
            ),
            sendEmail({ to: siteConfig.email, replyTo: booking.email, ...adminMail }).catch((e) =>
              console.error("No se pudo enviar el aviso de reserva confirmada:", e)
            ),
          ])
        }
      }
    } else if (payment.status === "rejected" || payment.status === "cancelled") {
      await updateBookingStatus(booking, { status: "cancelled", mpPaymentId: String(payment.id) })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error en booking/webhook:", error)

    if (paidBooking && isResendConfigured()) {
      const alert = buildAdminFailureEmail(paidBooking, error instanceof Error ? error.message : String(error))
      await sendEmail({ to: siteConfig.email, replyTo: paidBooking.email, ...alert }).catch((e) =>
        console.error("No se pudo enviar la alerta de fallo de agendado:", e)
      )
    }

    return NextResponse.json({ error: "Error procesando el webhook" }, { status: 500 })
  }
}
