"use client"

import { useEffect } from "react"
import { reportContactConversion } from "@/lib/gtag"

// Componente invisible: dispara la conversión de Google Ads una vez,
// al montarse. Se usa en páginas server component que necesitan
// reportar una conversión apenas se cargan (ej. reserva confirmada).
export function ConversionPixel() {
  useEffect(() => {
    reportContactConversion()
  }, [])
  return null
}
