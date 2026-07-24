import { appendSheetRow, getSheetValues, updateSheetRow } from "@/lib/google"
import { bookingSlots } from "@/lib/pricing"

const SHEET_TAB = "Reservas"
const COLUMNS = [
  "booking_id",
  "status",
  "date",
  "time",
  "consultation_type",
  "name",
  "email",
  "phone",
  "details",
  "created_at",
  "mp_preference_id",
  "mp_payment_id",
  "meet_link",
] as const

export interface BookingRow {
  bookingId: string
  status: "pending" | "confirmed" | "cancelled"
  date: string
  time: string
  consultationType: string
  name: string
  email: string
  phone: string
  details: string
  createdAt: string
  mpPreferenceId: string
  mpPaymentId: string
  meetLink: string
  rowIndex: number // 1-based sheet row (including header offset)
}

function getSpreadsheetId() {
  return process.env.GOOGLE_SHEETS_BOOKINGS_ID ?? null
}

function rowToBooking(row: string[], rowIndex: number): BookingRow {
  return {
    bookingId: row[0] ?? "",
    status: (row[1] as BookingRow["status"]) ?? "pending",
    date: row[2] ?? "",
    time: row[3] ?? "",
    consultationType: row[4] ?? "",
    name: row[5] ?? "",
    email: row[6] ?? "",
    phone: row[7] ?? "",
    details: row[8] ?? "",
    createdAt: row[9] ?? "",
    mpPreferenceId: row[10] ?? "",
    mpPaymentId: row[11] ?? "",
    meetLink: row[12] ?? "",
    rowIndex,
  }
}

export async function listBookingRows(): Promise<BookingRow[] | null> {
  const spreadsheetId = getSpreadsheetId()
  if (!spreadsheetId) return null

  const values = await getSheetValues(spreadsheetId, `${SHEET_TAB}!A2:M`)
  if (!values) return null

  return values.map((row, i) => rowToBooking(row, i + 2))
}

export function isSlotTaken(rows: BookingRow[], date: string, time: string): boolean {
  const now = Date.now()
  return rows.some((row) => {
    if (row.date !== date || row.time !== time) return false
    if (row.status === "confirmed") return true
    if (row.status === "pending") {
      const createdAt = new Date(row.createdAt).getTime()
      const ageMinutes = (now - createdAt) / 60_000
      return ageMinutes < bookingSlots.pendingHoldMinutes
    }
    return false
  })
}

export async function appendPendingBooking(params: {
  bookingId: string
  date: string
  time: string
  consultationType: string
  name: string
  email: string
  phone: string
  details: string
  mpPreferenceId: string
}) {
  const spreadsheetId = getSpreadsheetId()
  if (!spreadsheetId) return null

  return appendSheetRow(spreadsheetId, `${SHEET_TAB}!A:M`, [
    params.bookingId,
    "pending",
    params.date,
    params.time,
    params.consultationType,
    params.name,
    params.email,
    params.phone,
    params.details,
    new Date().toISOString(),
    params.mpPreferenceId,
    "",
    "",
  ])
}

export async function findBookingById(bookingId: string): Promise<BookingRow | null> {
  const rows = await listBookingRows()
  if (!rows) return null
  return rows.find((r) => r.bookingId === bookingId) ?? null
}

export async function updateBookingStatus(
  booking: BookingRow,
  updates: Partial<Pick<BookingRow, "status" | "mpPaymentId" | "meetLink">>
) {
  const spreadsheetId = getSpreadsheetId()
  if (!spreadsheetId) return null

  const merged = { ...booking, ...updates }
  return updateSheetRow(spreadsheetId, `${SHEET_TAB}!A${booking.rowIndex}:M${booking.rowIndex}`, [
    merged.bookingId,
    merged.status,
    merged.date,
    merged.time,
    merged.consultationType,
    merged.name,
    merged.email,
    merged.phone,
    merged.details,
    merged.createdAt,
    merged.mpPreferenceId,
    merged.mpPaymentId,
    merged.meetLink,
  ])
}

export const bookingSheetColumns = COLUMNS
