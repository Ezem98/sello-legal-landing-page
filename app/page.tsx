import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { TrustedBrands } from "@/components/sections/trusted-brands"
import { Team } from "@/components/sections/team"
import { Services } from "@/components/sections/services"
import { WhyUs } from "@/components/sections/why-us"
import { Guides } from "@/components/sections/guides"
import { Social } from "@/components/sections/social"
import { Booking } from "@/components/sections/booking"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export default function SelloLegalLanding() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloatButton />
      <Header />
      <Hero />
      <TrustedBrands />
      <Team />
      <Services />
      <WhyUs />
      <Guides />
      <Social />
      <Booking />
      <Contact />
      <Footer />
    </div>
  )
}
