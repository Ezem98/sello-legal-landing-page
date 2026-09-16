"use client"

import { WhatsAppIcon } from "@/components/icons"
import { whatsappUrl } from "@/lib/site-config"
import { reportContactConversion } from "@/lib/gtag"

export function WhatsAppLinkItem() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={reportContactConversion}
      className="flex items-center gap-4 w-full rounded-xl border border-gold-200 bg-white px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
        <WhatsAppIcon className="h-5 w-5" />
      </span>
      <span className="text-left">
        <span className="block font-serif font-semibold text-green-700">Escribinos por WhatsApp</span>
        <span className="block text-xs text-charcoal/60">Respuesta rápida y directa</span>
      </span>
    </a>
  )
}
