import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Handshake, FileSignature, Users, FileText, CheckCircle } from "lucide-react"

type ServiceItem = string | { label: string; href: string }

const services: { icon: typeof Shield; title: string; description: string; items: ServiceItem[]; href?: string }[] = [
  {
    icon: Shield,
    title: "Propiedad Intelectual",
    description:
      "Tu marca, tu logo y tus creaciones son parte del valor de tu negocio. Te ayudamos a registrarlos y a defenderlos para que nadie más pueda usarlos ni copiarlos.",
    items: [
      { label: "Registro de marcas", href: "/servicios/registro-de-marcas" },
      { label: "Patentes y modelos de utilidad", href: "/servicios/propiedad-intelectual#areas" },
      { label: "Derechos de autor", href: "/servicios/derechos-de-autor" },
      { label: "Vigilancia marcaria", href: "/servicios/registro-de-marcas#vigilancia" },
    ],
    href: "/servicios/propiedad-intelectual",
  },
  {
    icon: Handshake,
    title: "Sociedades",
    description:
      "Elegimos con vos la estructura societaria correcta desde el inicio y te acompañamos en cada cambio, para que los socios estén siempre protegidos.",
    items: [
      { label: "Constitución de sociedades (SAS, SRL, S.A.)", href: "/servicios/sociedades#tipo-de-sociedad" },
      { label: "Pactos de socios", href: "/servicios/sociedades#pacto-de-socios" },
      { label: "Modificaciones societarias", href: "/servicios/sociedades#modificaciones" },
    ],
    href: "/servicios/sociedades",
  },
  {
    icon: FileSignature,
    title: "Contratos y Marketing Legal",
    description:
      "Redactamos y revisamos los contratos y las piezas de marketing que tu negocio necesita para operar sin sorpresas legales.",
    items: [
      { label: "Contratos con proveedores y creadores de contenido", href: "/servicios/contratos#proveedores" },
      { label: "Contratos de franquicia", href: "/servicios/contratos#franquicia" },
      { label: "Secreto comercial (NDA)", href: "/servicios/contratos#nda" },
      { label: "Términos y condiciones", href: "/servicios/contratos#terminos" },
      { label: "Políticas de privacidad", href: "/servicios/contratos#privacidad" },
      { label: "Revisión legal de publicidades y promociones", href: "/servicios/contratos#publicidad" },
    ],
    href: "/servicios/contratos",
  },
  {
    icon: Users,
    title: "Derecho del Consumidor",
    description:
      "Ordenamos la relación con tus clientes para que sea clara desde la compra hasta el reclamo, cumpliendo con sus derechos y evitando sanciones.",
    items: [
      { label: "Cumplimiento de la Ley de Defensa del Consumidor", href: "/servicios/derecho-del-consumidor#ley" },
      { label: "Políticas de devoluciones y reintegros", href: "/servicios/derecho-del-consumidor#devoluciones" },
      {
        label: "Botón de arrepentimiento y normativa complementaria",
        href: "/servicios/derecho-del-consumidor#boton-arrepentimiento",
      },
      { label: "Defensa ante reclamos", href: "/servicios/derecho-del-consumidor#reclamos" },
    ],
    href: "/servicios/derecho-del-consumidor",
  },
  {
    icon: FileText,
    title: "Compliance",
    description:
      "Armamos programas simples para que tu empresa cumpla la normativa vigente desde el día uno, evitando multas y conflictos antes de que aparezcan.",
    items: [
      { label: "Auditorías legales", href: "/servicios/compliance#auditoria" },
      { label: "Políticas internas", href: "/servicios/compliance#politicas-internas" },
      { label: "Capacitación de equipos", href: "/servicios/compliance#capacitacion" },
      { label: "Prevención de riesgos", href: "/servicios/compliance#prevencion" },
    ],
    href: "/servicios/compliance",
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
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.334rem)] border border-gold-200 hover:shadow-xl transition-all duration-300 bg-cream-50 hover:-translate-y-1 flex flex-col"
            >
              <CardHeader className="items-center text-center">
                <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-green-700 font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 items-center text-center">
                <p className="mb-4 text-charcoal/80 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 text-sm text-charcoal/70 mb-4">
                  {service.items.map((item) => {
                    const isLink = typeof item === "object"
                    const label = isLink ? item.label : item
                    return (
                      <li key={label} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-terracotta shrink-0" />
                        {isLink ? (
                          <Link href={item.href} className="hover:text-terracotta hover:underline">
                            {label}
                          </Link>
                        ) : (
                          label
                        )}
                      </li>
                    )
                  })}
                </ul>
                {service.href && (
                  <Link
                    href={service.href}
                    className="mt-auto text-terracotta font-medium text-sm hover:underline"
                  >
                    Ver más →
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
