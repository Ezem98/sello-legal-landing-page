import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { TikTokIcon, SubstackIcon } from "@/components/icons"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="text-cream-50 py-12 bg-green-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo-icon.png"
                alt="Sello Legal"
                width={52}
                height={36}
                className="object-contain brightness-0 invert"
              />
              <div>
                <h3 className="font-serif font-bold">SELLO LEGAL</h3>
                <p className="text-xs tracking-[0.2em] opacity-80">CONSULTORÍA</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Consultoría legal boutique especializada en soluciones jurídicas modernas.
            </p>
            <div className="flex gap-3 mt-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="opacity-80 hover:opacity-100">
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.substack} target="_blank" rel="noopener noreferrer" aria-label="Substack" className="opacity-80 hover:opacity-100">
                <SubstackIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Propiedad Intelectual</li>
              <li>Compliance</li>
              <li>Derecho del Consumidor</li>
              <li>Documentos Digitales</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Guías Especializadas</li>
              <li>Consultas Virtuales</li>
              <li>
                <Link href="/legal#faq" className="hover:underline">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/legal#terminos" className="hover:underline">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/legal#privacidad" className="hover:underline">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>{siteConfig.phoneDisplay}</p>
              <p>{siteConfig.email}</p>
              {siteConfig.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-cream-50/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Sello Legal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
