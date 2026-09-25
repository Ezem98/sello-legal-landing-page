"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { freeConsultation } from "@/lib/site-config"
import { useFreeOffer } from "@/lib/use-free-offer"

export function ConsultCtaCard() {
  const freeOfferActive = useFreeOffer()

  return (
    <div className="rounded-2xl border border-gold-200 bg-cream-50 p-8 text-center">
      <h3 className="text-xl font-serif font-semibold text-green-700 mb-2">¿Querés resolver esto en tu negocio?</h3>
      <p className="text-charcoal/70 mb-6">
        {freeOfferActive
          ? `Presentanos tu caso en una consulta inicial gratuita de ${freeConsultation.minutes} minutos. Sin costo ni compromiso.`
          : "Agendá una consulta y lo vemos juntas, en lenguaje claro y aplicado a tu caso."}
      </p>
      <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white">
        <Link href="/#consultas">{freeOfferActive ? "Quiero mi consulta gratuita" : "Agendar Consulta"}</Link>
      </Button>
    </div>
  )
}
