import { NextResponse } from "next/server"
import { getSpreadsheetMeta, isGoogleConfigured } from "@/lib/google"
import { listBookingRows } from "@/lib/bookings-sheet"
import { isBookingServiceAvailable } from "@/lib/booking-availability"
import { isResendConfigured } from "@/lib/resend"
import { getEnv } from "@/lib/cf-env"

export const runtime = "edge"

// TEMPORAL: diagnóstico sin datos personales. Se elimina después de revisar.
export async function GET() {
  const env = getEnv()
  const out: Record<string, unknown> = {
    googleConfigured: isGoogleConfigured(),
    sheetsIdConfigured: !!env.GOOGLE_SHEETS_BOOKINGS_ID,
    calendarIdConfigured: !!env.GOOGLE_CALENDAR_ID,
    resendConfigured: isResendConfigured(),
    serviceAvailable: isBookingServiceAvailable(),
  }

  try {
    if (env.GOOGLE_SHEETS_BOOKINGS_ID) {
      const meta = await getSpreadsheetMeta(env.GOOGLE_SHEETS_BOOKINGS_ID)
      out.tabs = meta?.sheets?.map((s) => ({
        title: s.properties?.title,
        rows: s.properties?.gridProperties?.rowCount,
        cols: s.properties?.gridProperties?.columnCount,
      }))
      const rows = await listBookingRows()
      out.totalRows = rows?.length ?? null
      out.lastRows = rows?.slice(-8).map((r) => ({
        row: r.rowIndex,
        status: r.status,
        date: r.date,
        time: r.time,
        createdAt: r.createdAt,
        hasPhone: !!r.phone,
        hasDetails: !!r.details,
      }))
    }
  } catch (error) {
    out.error = error instanceof Error ? error.message.slice(0, 300) : String(error)
  }

  return NextResponse.json(out)
}
