"use client"

import { WhatsAppIcon } from "@/components/icons"
import { reportContactConversion, trackWhatsAppClick } from "@/lib/gtag"
import { useWhatsAppLink } from "@/lib/use-whatsapp-link"

export function WhatsAppFloatButton() {
  const { href, campaign, source } = useWhatsAppLink()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Escribinos por WhatsApp"
      onClick={() => {
        trackWhatsAppClick({ campaign, source })
        reportContactConversion()
      }}
      style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
      className="fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1DA851] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#168F44] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
