"use client"

import type { ReactNode } from "react"
import { WhatsAppIcon } from "@/components/icons"
import { reportContactConversion, trackWhatsAppClick } from "@/lib/gtag"
import { useWhatsAppLink } from "@/lib/use-whatsapp-link"

// CTA grande para usar dentro de una página. El texto grande y en negrita cumple
// contraste AA (blanco sobre terracota); altura mínima 56 px para el pulgar.
export function WhatsAppButton({ children = "Consultanos por WhatsApp" }: { children?: ReactNode }) {
  const { href, campaign, source } = useWhatsAppLink()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onClick={() => {
        trackWhatsAppClick({ campaign, source })
        reportContactConversion()
      }}
      className="inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-terracotta px-6 py-3 text-[1.175rem] font-bold text-white sm:px-8 sm:text-xl shadow-lg transition-colors hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold focus-visible:ring-offset-2 sm:w-auto"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      {children}
    </a>
  )
}
