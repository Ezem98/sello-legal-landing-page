import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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
      <div className="container mx-auto px-4 pt-8">
        <Link href="/#equipo" className="inline-flex items-center gap-2 text-terracotta font-medium hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Volver a Quiénes Somos
        </Link>
      </div>
      <Mission />
      <Footer />
    </div>
  )
}
