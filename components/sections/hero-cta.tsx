"use client"

import { Button } from "@/components/ui/button"
import { freeConsultation } from "@/lib/site-config"
import { useFreeOffer } from "@/lib/use-free-offer"

export function HeroCta() {
  const freeOfferActive = useFreeOffer()

  if (!freeOfferActive) {
    return (
      <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white lg:hidden">
        <a href="#consultas">Agendar Consulta</a>
      </Button>
    )
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Button asChild className="h-12 px-8 text-base bg-terracotta hover:bg-terracotta-600 text-white shadow-lg">
        <a href="#consultas">Quiero mi consulta gratuita de {freeConsultation.minutes} min</a>
      </Button>
      <p className="text-sm text-cream-100/80">Presentanos tu caso · Sin costo ni compromiso</p>
    </div>
  )
}
