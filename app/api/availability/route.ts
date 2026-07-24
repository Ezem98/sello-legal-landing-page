import { type NextRequest, NextResponse } from "next/server"
import { getAvailableSlots, isBookingServiceAvailable } from "@/lib/booking-availability"
import { getTimesForWeekday } from "@/lib/pricing"

export const runtime = "edge"

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date")

  if (!date || !DATE_RE.test(date)) {
    return NextResponse.json({ error: "Fecha inválida" }, { status: 400 })
  }

  const today = new Date().toISOString().slice(0, 10)
  if (date < today) {
    return NextResponse.json({ slots: [], degraded: !isBookingServiceAvailable() })
  }

  try {
    const { slots, degraded } = await getAvailableSlots(date)
    return NextResponse.json({ slots, degraded })
  } catch (error) {
    console.error("Error en availability:", error)
    const weekday = new Date(`${date}T00:00:00Z`).getUTCDay()
    return NextResponse.json({ slots: getTimesForWeekday(weekday), degraded: true })
  }
}
