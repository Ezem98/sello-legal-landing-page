import { Instagram, Linkedin, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TikTokIcon, SubstackIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site-config"

const follows = [
  { name: "Instagram", href: siteConfig.social.instagram, icon: Instagram, handle: "@legal_sello" },
  { name: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon, handle: "@sello.legal3" },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin, handle: "Sello Legal" },
  { name: "Substack", href: siteConfig.social.substack, icon: SubstackIcon, handle: "Sello Legal Journal" },
]

const highlights = [
  {
    platform: "Instagram",
    icon: Instagram,
    title: "¡Viernes de celebración! 🎉",
    excerpt: "Repasamos las marcas que lograron su registro oficial este mes. Cada nombre, un proyecto protegido.",
    href: "https://www.instagram.com/p/DYqCV4_EZD9/",
  },
  {
    platform: "Instagram · Reel",
    icon: Instagram,
    title: "¿Ya tenés tu marca registrada?",
    excerpt: "Registrarla es el primer paso: vigilancia marcaria, declaración de uso y renovación son las obligaciones para no perderla.",
    href: "https://www.instagram.com/reel/DXsKMSRkXmu/",
  },
  {
    platform: "TikTok",
    icon: TikTokIcon,
    title: "Los 3 errores más comunes al armar una sociedad",
    excerpt: "La confianza no alcanza. El error que menos se nota es el que más rompe sociedades.",
    href: "https://www.tiktok.com/@sello.legal3/video/7662135038749838600",
  },
  {
    platform: "Substack",
    icon: SubstackIcon,
    title: "¿Registrar la marca o esperar a tener más ventas?",
    excerpt: "En Argentina rige \"primero en registrar, primero en el derecho\". Esperar puede salir caro.",
    href: "https://open.substack.com/pub/sellolegal/p/registrar-la-marca-o-esperar-a-tener",
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    title: "INPI reescribió cómo se tramitan la nulidad y la caducidad de marcas",
    excerpt: "Qué cambia con la Resolución INPI 215/2026 y qué implica para quien maneja una cartera marcaria.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7482445524768415744/",
  },
]

export function Social() {
  return (
    <section id="redes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-6 bg-gold text-white border-0 px-6 py-2">Comunidad</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">Nos encontrás en redes</h2>
          <p className="text-xl max-w-2xl mx-auto text-charcoal/70">
            Contenido legal para tu negocio, todas las semanas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {follows.map((f) => (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-200 bg-cream-50 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors text-charcoal font-medium"
            >
              <f.icon className="h-4 w-4" />
              {f.name}
            </a>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <a key={h.href} href={h.href} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full border border-gold-200 bg-cream-50 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600">
                      <h.icon className="h-3.5 w-3.5" />
                      {h.platform}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-charcoal/40 group-hover:text-terracotta transition-colors" />
                  </div>
                  <h3 className="font-serif font-semibold text-green-700 mb-2 leading-snug">{h.title}</h3>
                  <p className="text-sm text-charcoal/70">{h.excerpt}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
