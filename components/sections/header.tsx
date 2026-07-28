"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "#equipo", label: "Equipo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#guias", label: "Guías" },
  { href: "#redes", label: "Redes" },
  { href: "#consultas", label: "Consultas" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const withHome = (anchor: string) => (isHome ? anchor : `/${anchor}`)

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur border-b border-gold-200">
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
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white">
            <a href={withHome("#consultas")}>Agendar Consulta</a>
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
              <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white" onClick={() => setOpen(false)}>
                <a href={withHome("#consultas")}>Agendar Consulta</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
