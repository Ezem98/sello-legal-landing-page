import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { ServicePageContent } from "@/lib/service-pages"

export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloatButton />
      <Header />

      <section className="bg-green-700 py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Badge className="mb-6 bg-gold-100 text-green-700 border border-gold-200 px-4 py-1.5 font-medium">
            {content.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-cream-50">{content.title}</h1>
          <p className="text-lg md:text-xl text-cream-100/90 leading-relaxed">{content.intro}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-serif font-bold text-green-700 mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-charcoal/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {content.relatedPages && content.relatedPages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
              {content.relatedPages.map((page) => (
                <Link key={page.href} href={page.href} className="text-terracotta font-medium hover:underline">
                  {page.label}
                </Link>
              ))}
            </div>
          )}

          <div className="rounded-2xl border border-gold-200 bg-cream-50 p-8 text-center">
            <h3 className="text-xl font-serif font-semibold text-green-700 mb-2">
              ¿Querés resolver esto en tu negocio?
            </h3>
            <p className="text-charcoal/70 mb-6">
              Agendá una consulta y lo vemos juntas, en lenguaje claro y aplicado a tu caso.
            </p>
            <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white">
              <Link href="/#consultas">Agendar Consulta</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-green-700 mb-8 text-center">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {content.faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i + 1}`}
                className="border border-gold-200 rounded-lg px-6 bg-white"
              >
                <AccordionTrigger className="hover:text-terracotta text-charcoal font-medium text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}
