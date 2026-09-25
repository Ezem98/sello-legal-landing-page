"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { freeConsultation } from "@/lib/site-config"
import { useFreeOffer } from "@/lib/use-free-offer"

const navLinks = [
  { href: "#equipo", label: "Equipo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#guias", label: "Guías" },
  { href: "#redes", label: "Redes" },
  { href: "#consultas", label: "Consultas" },
  { href: "#contacto", label: "Contacto" },
]

const recursosLink = { href: "/recursos", label: "Recursos" }

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const freeOfferActive = useFreeOffer()
  const isHome = pathname === "/"
  const withHome = (anchor: string) => (isHome ? anchor : `/${anchor}`)
  const ctaLabel = freeOfferActive ? "Consulta gratuita" : "Agendar Consulta"

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur border-b border-gold-200">
      {freeOfferActive && (
        <a
          href={withHome("#consultas")}
          className="block bg-terracotta hover:bg-terracotta-600 transition-colors text-white text-center text-xs sm:text-sm px-3 py-1.5 sm:py-2"
        >
          <span className="font-semibold">
            Consulta <span className="hidden sm:inline">inicial </span>gratuita de {freeConsultation.minutes} min
          </span>
          <span className="hidden sm:inline"> · hasta el {freeConsultation.endsLabel}</span>
          <span className="underline underline-offset-2 ml-1.5 sm:ml-2">Presentanos tu caso →</span>
        </a>
      )}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-icon.png" alt="Sello Legal" width={64} height={44} className="object-contain" />
          <div className="whitespace-nowrap">
            <h1 className="text-lg font-serif font-bold tracking-wide text-green-700">SELLO LEGAL</h1>
            <p className="text-xs tracking-[0.2em] text-gold-600">CONSULTORÍA</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={withHome(link.href)}
              className="text-sm font-medium text-charcoal/80 hover:text-terracotta transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href={recursosLink.href}
            className="text-sm font-medium text-charcoal/80 hover:text-terracotta transition-colors whitespace-nowrap"
          >
            {recursosLink.label}
          </a>
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white">
            <a href={withHome("#consultas")}>{ctaLabel}</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu className="h-6 w-6 text-green-700" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream-50">
            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={withHome(link.href)}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-charcoal hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={recursosLink.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-charcoal hover:text-terracotta transition-colors"
              >
                {recursosLink.label}
              </a>
              <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white" onClick={() => setOpen(false)}>
                <a href={withHome("#consultas")}>{ctaLabel}</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
