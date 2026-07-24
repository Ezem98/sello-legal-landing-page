import Link from "next/link"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons"
import { whatsappUrl } from "@/lib/site-config"

export default function ReservaErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-50 px-4 py-20">
      <div className="max-w-lg text-center">
        <XCircle className="h-16 w-16 text-terracotta mx-auto mb-6" />
        <h1 className="text-3xl font-serif font-bold text-green-700 mb-4">El pago no se pudo completar</h1>
        <p className="text-charcoal/70 mb-8">
          No pudimos procesar el pago de tu consulta y el horario quedó liberado. Podés intentar de nuevo o
          escribirnos por WhatsApp para coordinar.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline" className="border-gold-200">
            <Link href="/#consultas">Intentar de nuevo</Link>
          </Button>
          <Button asChild className="bg-[#25D366] hover:bg-[#1ebe5a] text-white">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
