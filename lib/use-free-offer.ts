"use client"

import { useEffect, useState } from "react"
import { isFreeConsultationActive } from "@/lib/site-config"

// Arranca en true para que el HTML del servidor incluya la oferta y, ya en el
// navegador, la oculta si la fecha de fin pasó (las páginas se generan estáticas).
export function useFreeOffer() {
  const [active, setActive] = useState(true)
  useEffect(() => {
    setActive(isFreeConsultationActive())
  }, [])
  return active
}
