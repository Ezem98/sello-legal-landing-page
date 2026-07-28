import type { Metadata } from "next"
import { Header } from "@/components/sections/header"
import { Mission } from "@/components/sections/mission"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export const metadata: Metadata = {
  title: "Nuestra Misión | Sello Legal",
  description: "Conocé la misión de Sello Legal: ayudar a los emprendedores a profesionalizar sus negocios y proteger sus bienes intangibles.",
}

export default function NuestraMisionPage() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloatButton />
      <Header />
      <div className="py-8" />
      <Mission />
      <Footer />
    </div>
  )
}
