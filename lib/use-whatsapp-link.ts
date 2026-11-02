"use client"

import { useEffect, useState } from "react"
import { buildWhatsAppUrl, readCampaign, type WhatsAppCampaign } from "@/lib/whatsapp-campaigns"

// El HTML estático sale con el mensaje por defecto; al montar en el navegador
// se lee la campaña (URL o sesión) y el link se actualiza antes de cualquier clic.
export function useWhatsAppLink() {
  const [campaign, setCampaign] = useState<WhatsAppCampaign>({ campaign: null, source: null })

  useEffect(() => {
    setCampaign(readCampaign())
  }, [])

  return { href: buildWhatsAppUrl(campaign.campaign), ...campaign }
}
