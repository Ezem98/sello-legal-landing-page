import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Users, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Propiedad Intelectual",
    description: "Protección integral de marcas, patentes, derechos de autor y secretos comerciales.",
    items: ["Registro de marcas", "Patentes y modelos de utilidad", "Derechos de autor"],
  },
  {
    icon: FileText,
    title: "Compliance",
    description: "Programas de cumplimiento normativo y gestión de riesgos legales.",
    items: ["Auditorías legales", "Políticas internas", "Capacitación"],
  },
  {
    icon: Users,
    title: "Derecho del Consumidor",
    description: "Asesoría especializada en relaciones comerciales y protección al consumidor.",
    items: ["Términos y condiciones", "Políticas de privacidad", "Defensa del consumidor"],
  },
  {
    icon: FileText,
    title: "Términos y Condiciones",
    description: "Documentos legales para entornos digitales",
    items: [
      "Términos y Condiciones web/app",
      "Políticas de Privacidad (GDPR)",
      "Contratos electrónicos",
      "Documentos para e-commerce",
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-terracotta text-white border-0">Nuestras Especialidades</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">Servicios Especializados</h2>
          <p className="text-xl max-w-2xl mx-auto text-charcoal/70">
            Servicios jurídicos especializados para emprendedores y empresas digitales
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border border-gold-200 hover:shadow-xl transition-all duration-300 bg-cream-50 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-green-700 font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-charcoal/80">{service.description}</p>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-terracotta shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
