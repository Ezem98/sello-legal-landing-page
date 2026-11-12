import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FreeConsultation } from "@/components/sections/free-consultation"
import { OfferGate } from "@/components/offer-gate"
import { RegistrationTimeline, type TimelineStep } from "@/components/registration-timeline"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { freeConsultation } from "@/lib/site-config"

const title = "Registrá tu marca: el camino paso a paso | Sello Legal"
const description = `Consulta inicial gratuita de ${freeConsultation.minutes} minutos hasta el ${freeConsultation.endsLabel}. Mirá el camino paso a paso hasta tener tu marca registrada.`

export const metadata: Metadata = {
  metadataBase: new URL("https://sello.legal"),
  title,
  description,
  // Página de oferta temporal: por ahora NO se indexa en Google.
  // Para indexarla, borrá la línea `robots` de abajo (o poné `robots: { index: true }`).
  robots: { index: false },
  openGraph: {
    title,
    description,
    locale: "es_AR",
    type: "website",
    url: "/registra-tu-marca",
    images: [{ url: "/logo-sello-legal.png", width: 500, height: 500, alt: "Sello Legal" }],
  },
}

// Titular de la oferta. Si preferís la versión sin matiz, cambiá "apuntá a tener" por "tené".
const headline = "Empezá hoy y apuntá a tener tu marca registrada en el primer trimestre de 2027"

// Mismo recorrido y textos que el carrusel animado de redes (carrusel_animado_registro).
const steps: TimelineStep[] = [
  {
    badge: "Hoy",
    eyebrow: `Consulta gratuita de ${freeConsultation.minutes} min`,
    title: "Nos contás tu caso",
    text: "Te escuchamos y te orientamos sobre los próximos pasos. Sin costo y sin compromiso.",
  },
  {
    badge: "≈ 7 días",
    eyebrow: "En una semana, aprox.",
    title: "Tu análisis de viabilidad",
    text: "Te enviamos nuestra matriz de riesgos: qué tan viable es tu marca y en qué clases. Con eso, decidís.",
  },
  {
    badge: "Día de la carga",
    eyebrow: "Cuando decidís",
    title: "Presentamos tu solicitud",
    text: "Cargamos tu marca en el INPI, en las clases que definimos juntas.",
  },
  {
    badge: "+ 1 a 2 semanas",
    eyebrow: "1 a 2 semanas después",
    title: "Se publica",
    text: "Tu solicitud sale en el Boletín de Marcas. Desde ahí, cualquiera puede verla.",
  },
  {
    badge: "+ 30 días",
    eyebrow: "30 días más",
    title: "Plazo de oposición",
    text: "Si nadie se opone en ese plazo, tu marca sigue su camino.",
  },
  {
    badge: "≈ 3 meses",
    eyebrow: "≈ 3 meses desde que la presentamos",
    title: "Tu marca, registrada",
    text: "Todo el trámite lleva aproximadamente 3 meses desde la presentación, según los tiempos del INPI.",
    final: true,
  },
]

export default function RegistraTuMarcaPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal">
      <OfferGate fallback="/servicios/registro-de-marcas" />
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

          <p className="mt-8 inline-block rounded-full border border-gold-200 bg-gold-100 px-4 py-1.5 text-sm font-medium text-green">
            Consulta inicial gratuita · hasta el {freeConsultation.endsLabel}
          </p>
          <h1 className="mt-5 font-serif text-[1.9rem] font-bold leading-tight sm:text-5xl">{headline}</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-cream/90">
            Primero una consulta gratuita de {freeConsultation.minutes} minutos para que nos presentes tu caso. Después,
            te acompañamos en cada paso.
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href="#consulta-gratuita"
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-terracotta px-6 py-3 text-[1.175rem] font-bold text-white shadow-lg transition-colors hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold focus-visible:ring-offset-2 sm:w-auto sm:px-8 sm:text-xl"
            >
              Quiero mi consulta gratuita
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-700">Hoy</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-green sm:text-3xl">
            Vendés con tu nombre… pero todavía no es tuyo
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Sin registro, otro puede pedirlo antes que vos. Te mostramos el camino, paso a paso.
          </p>
        </div>

        <div className="mt-12">
          <RegistrationTimeline steps={steps} />
        </div>

        <p className="mx-auto mt-2 max-w-md text-center text-sm leading-relaxed text-charcoal/80">
          Plazos estimados: dependen del INPI y de cada caso.
        </p>
      </section>

      <FreeConsultation
        id="consulta-gratuita"
        headline="¿Arrancamos el camino con tu marca?"
        intro={`Te acompañamos desde el análisis hasta el registro. Empezá con una consulta gratuita de ${freeConsultation.minutes} minutos: nos contás tu caso y te orientamos sobre los próximos pasos.`}
        paidHref="/#reservar"
        timelineHref={null}
        origin="registra-tu-marca"
        defaultInterest="Propiedad Intelectual (marcas, derechos de autor)"
      />

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
