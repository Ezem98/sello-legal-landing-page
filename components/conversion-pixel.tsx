"use client"

import { useEffect } from "react"
import { reportContactConversion, reportBookingConversion } from "@/lib/gtag"

const conversions = {
  contact: reportContactConversion,
  booking: reportBookingConversion,
} as const

// Componente invisible: dispara la conversión `type` una sola vez al
// montarse. Se usa en páginas server component que necesitan reportar
// una conversión de Google Ads apenas se cargan (ej. reserva confirmada).
// Recibe un string (no una función) para no romper la frontera
// server/client de React Server Components.
export function ConversionPixel({ type }: { type: keyof typeof conversions }) {
  useEffect(() => {
    conversions[type]()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}
