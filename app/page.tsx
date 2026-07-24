import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Mission } from "@/components/sections/mission"
import { Team } from "@/components/sections/team"
import { Services } from "@/components/sections/services"
import { WhyUs } from "@/components/sections/why-us"
import { Guides } from "@/components/sections/guides"
import { Social } from "@/components/sections/social"
import { Booking } from "@/components/sections/booking"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Contact } from "@/components/sections/contact"
import { FAQ } from "@/components/sections/faq"
import { Legal } from "@/components/sections/legal"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export default function SelloLegalLanding() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloatButton />
      <Header />
      <Hero />
      <Mission />
      <Team />
      <Services />
      <WhyUs />
      <Guides />
      <Social />
      <Booking />
      <HowItWorks />
      <Contact />
      <FAQ />
      <Legal />
      <Footer />
    </div>
  )
}
