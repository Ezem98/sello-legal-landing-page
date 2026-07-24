import { type NextRequest, NextResponse } from "next/server"
import { createCalendarEvent } from "@/lib/google"
import { getPayment, verifyWebhookSignature } from "@/lib/mercadopago"
import { findBookingById, updateBookingStatus } from "@/lib/bookings-sheet"
import { consultationTypes, type ConsultationTypeKey } from "@/lib/pricing"
import { slotToISO } from "@/lib/booking-availability"
import { isResendConfigured, sendEmail } from "@/lib/resend"

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

  if (process.env.MERCADOPAGO_WEBHOOK_SECRET && !validSignature) {
    return NextResponse.json({ error: "Firma inválida" }, { status: 401 })
  }

  if (body.type && body.type !== "payment") {
    return NextResponse.json({ received: true })
  }

  try {
    const payment = await getPayment(dataId)
    const booking = await findBookingById(payment.external_reference)

    if (!booking) {
      return NextResponse.json({ received: true })
    }

    if (payment.status === "approved") {
      if (booking.status !== "confirmed") {
        const plan = consultationTypes[booking.consultationType as ConsultationTypeKey] as
          | (typeof consultationTypes)[ConsultationTypeKey]
          | undefined
        const { startISO, endISO } = slotToISO(booking.date, booking.time)
        const calendarId = process.env.GOOGLE_CALENDAR_ID as string

        const event = await createCalendarEvent({
          calendarId,
          summary: `Consulta ${plan?.label ?? booking.consultationType} - ${booking.name}`,
          description: [
            `Cliente: ${booking.name}`,
            `Email: ${booking.email}`,
            `Teléfono: ${booking.phone}`,
            `Detalle: ${booking.details || "-"}`,
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
          await sendEmail({
            to: booking.email,
            subject: "Confirmamos tu consulta - Sello Legal",
            html: `<p>Hola ${booking.name},</p>
<p>Tu consulta de <strong>${plan?.label ?? booking.consultationType}</strong> quedó confirmada para el ${booking.date} a las ${booking.time} hs.</p>
${event.meetLink ? `<p>Link de Google Meet: <a href="${event.meetLink}">${event.meetLink}</a></p>` : ""}
<p>Cualquier duda, escribinos a legalsello@gmail.com.</p>
<p>Sello Legal</p>`,
          })

          await sendEmail({
            to: "legalsello@gmail.com",
            subject: `Nueva consulta confirmada: ${booking.name}`,
            html: `<p>Nueva consulta pagada y confirmada:</p>
<ul>
<li>Tipo: ${plan?.label ?? booking.consultationType}</li>
<li>Fecha: ${booking.date} ${booking.time}</li>
<li>Nombre: ${booking.name}</li>
<li>Email: ${booking.email}</li>
<li>Teléfono: ${booking.phone}</li>
<li>Detalle: ${booking.details || "-"}</li>
</ul>`,
          })
        }
      }
    } else if (payment.status === "rejected" || payment.status === "cancelled") {
      await updateBookingStatus(booking, { status: "cancelled", mpPaymentId: String(payment.id) })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error en booking/webhook:", error)
    return NextResponse.json({ error: "Error procesando el webhook" }, { status: 500 })
  }
}
