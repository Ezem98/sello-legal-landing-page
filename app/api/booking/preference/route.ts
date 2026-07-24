import { type NextRequest, NextResponse } from "next/server"
import { getAvailableSlots, isBookingServiceAvailable } from "@/lib/booking-availability"
import { appendPendingBooking } from "@/lib/bookings-sheet"
import { createPreference } from "@/lib/mercadopago"
import { consultationTypes, isConsultationTypeKey } from "@/lib/pricing"

export const runtime = "edge"

interface BookingRequestBody {
  consultationType?: string
  date?: string
  time?: string
  name?: string
  email?: string
  phone?: string
  details?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const TIME_RE = /^\d{2}:\d{2}$/

export async function POST(request: NextRequest) {
  if (!isBookingServiceAvailable()) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Las reservas online no están disponibles en este momento. Escribinos por WhatsApp y coordinamos tu consulta.",
      },
      { status: 503 }
    )
  }

  try {
    const body = (await request.json()) as BookingRequestBody
    const { consultationType, date, time, name, email, phone, details } = body

    if (
      !consultationType ||
      !isConsultationTypeKey(consultationType) ||
      !date ||
      !DATE_RE.test(date) ||
      !time ||
      !TIME_RE.test(time) ||
      !name?.trim() ||
      !email ||
      !EMAIL_RE.test(email)
    ) {
      return NextResponse.json({ success: false, message: "Datos de la reserva incompletos o inválidos" }, { status: 400 })
    }

    const { slots } = await getAvailableSlots(date)
    if (!slots.includes(time)) {
      return NextResponse.json(
        { success: false, message: "Ese horario ya no está disponible, elegí otro." },
        { status: 409 }
      )
    }

    const bookingId = crypto.randomUUID()
    const plan = consultationTypes[consultationType]
    const origin = request.nextUrl.origin

    const preference = await createPreference({
      title: `Consulta ${plan.label} - Sello Legal`,
      price: plan.price,
      externalReference: bookingId,
      payerEmail: email,
      payerName: name,
      backUrls: {
        success: `${origin}/reserva/confirmada`,
        pending: `${origin}/reserva/pendiente`,
        failure: `${origin}/reserva/error`,
      },
      notificationUrl: `${origin}/api/booking/webhook`,
    })

    await appendPendingBooking({
      bookingId,
      date,
      time,
      consultationType,
      name,
      email,
      phone: phone ?? "",
      details: details ?? "",
      mpPreferenceId: preference.id,
    })

    return NextResponse.json({ success: true, initPoint: preference.initPoint })
  } catch (error) {
    console.error("Error en booking/preference:", error)
    return NextResponse.json({ success: false, message: "Error al crear la reserva" }, { status: 500 })
  }
}
