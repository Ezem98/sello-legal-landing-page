import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Zap } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Especialización Profunda",
    description: "Conocimiento detallado en nuestras áreas de práctica, garantizando asesoramiento experto.",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description: "Contacto directo con las socias, comunicación clara y soluciones a medida.",
  },
  {
    icon: Zap,
    title: "Enfoque Preventivo",
    description: "Ayudamos a cumplir la ley desde el inicio, evitando problemas futuros y costos adicionales.",
  },
]

export function WhyUs() {
  return (
    <section className="py-16 bg-green-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-cream-50">¿Por qué elegir Sello Legal?</h2>
          <div className="w-24 h-1 bg-terracotta mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="border-0 hover:shadow-2xl transition-all duration-300 bg-cream-50/95 backdrop-blur text-center hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-terracotta rounded-full mx-auto mb-4 flex items-center justify-center">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-green-700 font-serif">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/70">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
