import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Qué tipo de servicios ofrece Sello Legal?",
    a: "Ofrecemos consultoría legal personalizada para emprendedores, startups y pymes, en temas como propiedad intelectual, compliance, derecho del consumidor y redacción de términos y condiciones. Próximamente también vamos a ofrecer guías legales digitales listas para usar.",
  },
  {
    q: "¿Las guías digitales incluyen asesoramiento?",
    a: "Las guías van a ser materiales informativos y prácticos, pero no van a sustituir una consulta legal personalizada. Si necesitás asesoramiento específico, podés agendar una consulta con nuestro equipo.",
  },
  {
    q: "¿Cuándo van a estar disponibles las guías?",
    a: "Estamos terminando de prepararlas. Dejanos tu email en la sección de Guías y te avisamos apenas estén listas para comprar.",
  },
  {
    q: "¿Cómo puedo agendar una consulta legal?",
    a: 'Completá el formulario en la sección "Consultas" de nuestro sitio: elegís tipo de consulta, día y horario, pagás con Mercado Pago para reservar el turno, y te confirmamos por email con el link de Google Meet.',
  },
  {
    q: "¿Qué pasa si mi horario ya no está disponible?",
    a: "El sitio muestra en tiempo real los horarios libres según nuestra agenda. Si alguien reserva un turno mientras lo estabas completando, te lo vamos a avisar antes de cobrarte para que elijas otro horario.",
  },
  {
    q: "¿Brindan servicios a todo el país?",
    a: "Sí. Atendemos de manera 100% remota por videollamada, correo o teléfono, para todo el territorio argentino.",
  },
  {
    q: "¿Aceptan pagos con tarjeta o transferencia?",
    a: "Sí. Las consultas se pagan a través de Mercado Pago, que admite tarjeta de crédito, débito, transferencia y dinero en cuenta.",
  },
  {
    q: "¿Puedo cancelar o reprogramar mi consulta?",
    a: "Sí, escribinos por WhatsApp o a legalsello@gmail.com con la mayor anticipación posible y coordinamos un nuevo horario.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">Preguntas Frecuentes</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i + 1}`}
                className="border border-gold-200 rounded-lg px-6 bg-cream-50"
              >
                <AccordionTrigger className="hover:text-terracotta text-charcoal font-medium text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
