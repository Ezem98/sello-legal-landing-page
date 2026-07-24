import { type NextRequest, NextResponse } from "next/server"
import { getAvailableSlots, isBookingServiceAvailable } from "@/lib/booking-availability"
import { getTimesForWeekday } from "@/lib/pricing"
import { getEnv } from "@/lib/cf-env"
import { getOptionalRequestContext } from "@cloudflare/next-on-pages"

export const runtime = "edge"

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

function debugInfo() {
  const ctx = getOptionalRequestContext()
  const env = getEnv()
  return {
    hasRequestContext: !!ctx,
    hasCtxEnv: !!ctx?.env,
    resolvedKeysPresent: {
      MERCADOPAGO_ACCESS_TOKEN: !!env.MERCADOPAGO_ACCESS_TOKEN,
      GOOGLE_SERVICE_ACCOUNT_EMAIL: !!env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: !!env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
      GOOGLE_CALENDAR_ID: !!env.GOOGLE_CALENDAR_ID,
      GOOGLE_SHEETS_BOOKINGS_ID: !!env.GOOGLE_SHEETS_BOOKINGS_ID,
    },
  }
}

export async function GET(request: NextRequest) {
  const debug = request.nextUrl.searchParams.get("debug") === "1"
  const date = request.nextUrl.searchParams.get("date")

  if (!date || !DATE_RE.test(date)) {
    if (debug) {
      return NextResponse.json({ error: "Fecha inválida", ...debugInfo() })
    }
    return NextResponse.json({ error: "Fecha inválida" }, { status: 400 })
  }

  const today = new Date().toISOString().slice(0, 10)
  if (date < today) {
    return NextResponse.json({ slots: [], degraded: !isBookingServiceAvailable() })
  }

  try {
    const { slots, degraded } = await getAvailableSlots(date)
    return NextResponse.json({ slots, degraded, ...(debug ? debugInfo() : {}) })
  } catch (error) {
    console.error("Error en availability:", error)
    const weekday = new Date(`${date}T00:00:00Z`).getUTCDay()
    return NextResponse.json({
      slots: getTimesForWeekday(weekday),
      degraded: true,
      ...(debug
        ? { errorMessage: error instanceof Error ? error.message : String(error), ...debugInfo() }
        : {}),
    })
  }
}
