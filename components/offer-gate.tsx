"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFreeOffer } from "@/lib/use-free-offer"

// Páginas que dependen de la consulta gratuita: cuando la oferta termina,
// llevan a la página permanente en vez de mostrar una promo vencida.
export function OfferGate({ fallback }: { fallback: string }) {
  const active = useFreeOffer()
  const router = useRouter()

  useEffect(() => {
    if (!active) router.replace(fallback)
  }, [active, router, fallback])

  return null
}
