import { WhatsAppIcon } from "@/components/icons"
import { whatsappUrl } from "@/lib/site-config"

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5a] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  )
}
