import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Instagram } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { siteConfig } from "@/lib/site-config"

const title = "Contratos para creadores de contenido | Sello Legal"
const description =
  "Antes de grabar un canje o una campaña con una marca, dejá por escrito qué puede hacer con tu imagen y tu contenido. Consultanos por WhatsApp."

export const metadata: Metadata = {
  metadataBase: new URL("https://sello.legal"),
  title,
  description,
  // Página de campaña: por ahora NO se indexa en Google.
  // Para indexarla, borrá la línea `robots` de abajo (o poné `robots: { index: true }`).
  robots: { index: false },
  openGraph: {
    title,
    description,
    locale: "es_AR",
    type: "website",
    url: "/contratos-creadores",
    images: [{ url: "/logo-sello-legal.png", width: 500, height: 500, alt: "Sello Legal" }],
  },
}

const agreementItems: { text: string; hint?: string }[] = [
  { text: "Qué entregás y en qué plazo." },
  { text: "Dónde y por cuánto tiempo la marca puede usar tu contenido y tu imagen." },
  { text: "Si puede pautarlo como anuncio.", hint: "Pautar es pagar para mostrarlo como publicidad." },
  { text: "Cómo se aclara que es publicidad." },
  { text: "Qué pasa si una de las partes no cumple." },
]

const steps = [
  { title: "Nos escribís", text: "Contanos por WhatsApp qué te propuso la marca." },
  { title: "Revisamos tu caso", text: "Miramos tu situación y qué conviene dejar por escrito." },
  { title: "Armamos el contrato", text: "Te proponemos el contrato, o la revisión del que te mandó la marca." },
]

export default function ContratosCreadoresPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal">
      <WhatsAppFloatButton />

      <section className="bg-green text-cream">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-4 text-center sm:pb-16">
          <div className="flex justify-center sm:justify-start">
            <Link href="/" className="inline-flex min-h-[44px] items-center gap-3">
              <Image
                src="/logo-icon.png"
                alt=""
                width={52}
                height={36}
                className="object-contain brightness-0 invert"
              />
              <span className="text-left leading-tight">
                <span className="block font-serif text-lg font-bold tracking-wide">SELLO LEGAL</span>
                <span className="block text-xs tracking-[0.2em]">CONSULTORÍA</span>
              </span>
            </Link>
          </div>

          <h1 className="mt-8 font-serif text-[1.9rem] font-bold leading-tight sm:text-5xl">
            ¿Vas a hacer un canje o una campaña con una marca?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-cream/90">
            Antes de grabar, dejá por escrito qué puede hacer la marca con tu imagen y tu contenido, y por cuánto
            tiempo.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton />
          </div>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/80">
            Un canje es cuando la marca te da productos o servicios a cambio de contenido, en lugar de plata.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-2xl font-bold text-green sm:text-3xl">
            Lo que un buen acuerdo deja claro
          </h2>
          <ul className="mt-8 space-y-3">
            {agreementItems.map((item) => (
              <li key={item.text} className="flex items-start gap-4 rounded-2xl border border-gold/40 bg-white p-4 shadow-sm">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green text-cream">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-medium leading-snug">{item.text}</span>
                  {item.hint && <span className="mt-1 block text-sm text-charcoal/80">{item.hint}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-12 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-2xl font-bold text-green sm:text-3xl">Cómo trabajamos</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 sm:flex-col sm:items-center sm:text-center">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green font-serif text-xl font-bold text-cream"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-green">{step.title}</h3>
                  <p className="mt-1 text-base leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold/40 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="font-serif text-lg leading-relaxed text-green sm:text-xl">
            Sello Legal acompaña a emprendedores, fundadores y creadores de contenido de Argentina a crecer sin perder
            lo que construyen: su marca, sus contratos y su sociedad.
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-medium text-green underline underline-offset-4 hover:text-green-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            @legal_sello en Instagram
          </a>
        </div>
      </section>

      <section className="bg-green px-5 py-12 text-center text-cream sm:py-16">
        <div className="mx-auto max-w-xl">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">Antes de grabar, escribinos.</h2>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <footer className="px-5 pb-28 pt-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-charcoal/80">
          La información de esta página es general. Cada situación amerita su propio análisis.
        </p>
        <p className="mt-2 text-xs text-charcoal/80">
          <Link href="/legal#terminos" className="inline-block px-2 py-3 underline underline-offset-2">
            Términos y condiciones
          </Link>
          <Link href="/legal#privacidad" className="inline-block px-2 py-3 underline underline-offset-2">
            Política de privacidad
          </Link>
        </p>
      </footer>
    </div>
  )
}
