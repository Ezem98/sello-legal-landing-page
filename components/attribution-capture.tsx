"use client"

import { useEffect } from "react"

const KEYS = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term"] as const

// Guarda de dónde llegó el visitante (campaña de Ads, etc.) para poder
// asociarlo después a la consulta que complete, aunque cambie de página.
export function AttributionCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const found: Record<string, string> = {}
      for (const key of KEYS) {
        const value = params.get(key)
        if (value) found[key] = value
      }
      if (Object.keys(found).length > 0 && !sessionStorage.getItem("sello_attribution")) {
        sessionStorage.setItem("sello_attribution", JSON.stringify(found))
      }
    } catch {
      // sessionStorage no disponible: se pierde la atribución, nada más
    }
  }, [])

  return null
}
