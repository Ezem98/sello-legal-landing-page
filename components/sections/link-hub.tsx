import Image from "next/image"
import Link from "next/link"
import { CalendarDays, UserRound, Briefcase, BookOpen, Share2 } from "lucide-react"
import { Instagram, Linkedin } from "lucide-react"
import { TikTokIcon, SubstackIcon } from "@/components/icons"
import { WhatsAppLinkItem } from "@/components/sections/whatsapp-link-item"
import { siteConfig } from "@/lib/site-config"

const links: { href: string; icon: typeof CalendarDays; title: string; subtitle: string }[] = [
  {
    href: "/#consultas",
    icon: CalendarDays,
    title: "Agendar una Consulta",
    subtitle: "Reservá tu videollamada y pagá online",
  },
  {
    href: "/#equipo",
    icon: UserRound,
    title: "Sobre Nosotras",
    subtitle: "Conocé al equipo",
  },
  {
    href: "/#servicios",
    icon: Briefcase,
    title: "Nuestros Servicios",
    subtitle: "Propiedad intelectual, compliance y más",
  },
  {
    href: "/recursos",
    icon: BookOpen,
    title: "Recursos y Blog",
    subtitle: "Artículos y guías legales",
  },
  {
    href: "/#redes",
    icon: Share2,
    title: "Nuestras Redes",
    subtitle: "Seguinos para más contenido",
  },
]

const socialIcons = [
  { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  { href: siteConfig.social.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.social.substack, label: "Substack", Icon: SubstackIcon },
]

export function LinkHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-700 to-cream-50 flex flex-col items-center px-4 py-14">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <div className="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-5 p-3">
          <Image src="/logo-icon.png" alt="Sello Legal" width={72} height={50} className="object-contain" />
        </div>
        <h1 className="text-2xl font-serif font-bold text-cream-50 mb-1">Sello Legal</h1>
        <p className="text-cream-100/90 mb-8 max-w-sm">
          Consultoría legal boutique para emprendedores y empresas digitales
        </p>

        <div className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex items-center gap-4 w-full rounded-xl border border-gold-200 bg-white px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
                <link.icon className="h-5 w-5" />
              </span>
              <span className="text-left">
                <span className="block font-serif font-semibold text-green-700">{link.title}</span>
                <span className="block text-xs text-charcoal/60">{link.subtitle}</span>
              </span>
            </Link>
          ))}
          <WhatsAppLinkItem />
        </div>

        <div className="flex items-center gap-5 mt-10">
          {socialIcons.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cream-50/90 hover:text-cream-50"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <p className="text-charcoal/70 text-xs mt-10 font-medium">
          &copy; {new Date().getFullYear()} Sello Legal
        </p>
      </div>
    </div>
  )
}
