import { getBusyIntervals, isGoogleConfigured } from "@/lib/google"
import { isMercadoPagoConfigured } from "@/lib/mercadopago"
import { isSlotTaken, listBookingRows } from "@/lib/bookings-sheet"
import { bookingSlots, getTimesForWeekday } from "@/lib/pricing"
import { getEnv } from "@/lib/cf-env"

const ARG_OFFSET = "-03:00"
const SLOT_MINUTES = 30

export function isBookingServiceAvailable() {
  return isGoogleConfigured() && isMercadoPagoConfigured() && !!getEnv().GOOGLE_CALENDAR_ID
}

export function slotToISO(date: string, time: string) {
  const start = `${date}T${time}:00${ARG_OFFSET}`
  const startDate = new Date(start)
  const end = new Date(startDate.getTime() + SLOT_MINUTES * 60_000)
  return { startISO: start, endISO: end.toISOString() }
}

function overlaps(aStart: number, aEnd: number, bStart: number, bEnd: number) {
  return aStart < bEnd && bStart < aEnd
}

export async function getAvailableSlots(date: string): Promise<{ slots: string[]; degraded: boolean }> {
  const weekday = new Date(`${date}T00:00:00Z`).getUTCDay()
  const degraded = !isBookingServiceAvailable()

  const candidateTimes = getTimesForWeekday(weekday)
  if (!bookingSlots.workDays.includes(weekday) || candidateTimes.length === 0) {
    return { slots: [], degraded }
  }

  const calendarId = getEnv().GOOGLE_CALENDAR_ID

  const [busyIntervals, bookingRows] = await Promise.all([
    calendarId ? getBusyIntervals(calendarId, `${date}T00:00:00${ARG_OFFSET}`, `${date}T23:59:59${ARG_OFFSET}`) : null,
    listBookingRows(),
  ])

  const available = candidateTimes.filter((time) => {
    const { startISO, endISO } = slotToISO(date, time)
    const slotStart = new Date(startISO).getTime()
    const slotEnd = new Date(endISO).getTime()

    if (busyIntervals) {
      const clashesCalendar = busyIntervals.some((b) =>
        overlaps(slotStart, slotEnd, new Date(b.start).getTime(), new Date(b.end).getTime())
      )
      if (clashesCalendar) return false
    }

    if (bookingRows && isSlotTaken(bookingRows, date, time)) return false

    return true
  })

  return { slots: available, degraded }
}
