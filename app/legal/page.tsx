import type { Metadata } from "next"
import { Header } from "@/components/sections/header"
import { FAQ } from "@/components/sections/faq"
import { Legal } from "@/components/sections/legal"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes y Legales | Sello Legal",
  description: "Preguntas frecuentes, Términos y Condiciones, y Política de Privacidad de Sello Legal.",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloatButton />
      <Header />
      <div className="py-8" />
      <FAQ />
      <Legal />
      <Footer />
    </div>
  )
}
