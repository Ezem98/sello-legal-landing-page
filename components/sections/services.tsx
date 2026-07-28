import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Users, Globe, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Propiedad Intelectual",
    description:
      "Tu marca, tu logo y tus creaciones son parte del valor de tu negocio. Te ayudamos a registrarlos y a defenderlos para que nadie más pueda usarlos ni copiarlos.",
    items: ["Registro de marcas", "Patentes y modelos de utilidad", "Derechos de autor", "Vigilancia marcaria"],
  },
  {
    icon: FileText,
    title: "Compliance",
    description:
      "Armamos programas simples para que tu empresa cumpla la normativa vigente desde el día uno, evitando multas y conflictos antes de que aparezcan.",
    items: ["Auditorías legales", "Políticas internas", "Capacitación de equipos", "Prevención de riesgos"],
  },
  {
    icon: Users,
    title: "Derecho del Consumidor",
    description:
      "Ordenamos la relación con tus clientes para que sea clara desde la compra hasta el reclamo, cumpliendo con sus derechos y evitando sanciones.",
    items: ["Términos y condiciones", "Políticas de privacidad", "Defensa ante reclamos", "Publicidad y promociones"],
  },
  {
    icon: Globe,
    title: "Documentos Digitales",
    description:
      "Redactamos los papeles legales que tu sitio, app o tienda online necesitan para operar de forma segura y profesional.",
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
          <Badge className="mb-6 bg-terracotta text-white border-0">Áreas de Práctica</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">En qué te podemos ayudar</h2>
          <p className="text-xl max-w-2xl mx-auto text-charcoal/70">
            Acompañamos a emprendedores y empresas digitales en cada etapa legal de su negocio, con un lenguaje claro
            y sin vueltas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
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
                <p className="mb-4 text-charcoal/80 leading-relaxed">{service.description}</p>
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
