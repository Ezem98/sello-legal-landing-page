"use client"

import { Booking } from "@/components/sections/booking"
import { FreeConsultation } from "@/components/sections/free-consultation"
import { useFreeOffer } from "@/lib/use-free-offer"

// Fuera de la oferta, #consultas sigue existiendo como ancla justo arriba de la reserva paga.
export function Consultations() {
  const freeOfferActive = useFreeOffer()

  return (
    <>
      {freeOfferActive ? <FreeConsultation /> : <span id="consultas" className="block scroll-mt-28" />}
      <Booking />
    </>
  )
}
