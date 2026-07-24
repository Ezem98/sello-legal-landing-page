"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const team = [
  {
    firstName: "Agustina",
    lastName: "Lucía Serra",
    role: "Abogada · Especialista en Compliance",
    areas: [
      "Prevención de riesgos legales",
      "Derecho corporativo",
      "Compliance",
      "Propiedad Intelectual",
      "Industrias creativas",
      "Nuevas tecnologías",
    ],
    quote: "Queremos ser las abogadas que llamás con buenas noticias porque te ayudan a impulsar tu negocio.",
    photo: "/team/agustina.jpg",
    placeholder: "/team/agustina-placeholder.svg",
  },
  {
    firstName: "Melanie",
    lastName: "Machado",
    role: "Abogada · Agente de Propiedad Industrial",
    areas: [
      "Propiedad Intelectual",
      "Contratos",
      "Derecho Societario",
      "Derecho del Consumidor aplicado a empresas",
      "Publicidad y legales de páginas web",
      "Devoluciones y legales de etiquetas y empaques",
    ],
    quote: "Queremos ayudarte a hacer crecer tu negocio y que empieces a ver al derecho como tu aliado.",
    photo: "/team/melanie.jpg",
    placeholder: "/team/melanie-placeholder.svg",
  },
]

function TeamPhoto({ src, placeholder, alt }: { src: string; placeholder: string; alt: string }) {
  const [errored, setErrored] = useState(false)
  return (
    <Image
      src={errored ? placeholder : src}
      alt={alt}
      fill
      onError={() => setErrored(true)}
      className="object-cover rounded-full border-4 border-terracotta"
    />
  )
}

export function Team() {
  return (
    <section id="equipo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-gold text-white border-0 px-6 py-2">El Equipo</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">Quiénes Somos</h2>
          <p className="text-xl max-w-2xl mx-auto text-charcoal/70">
            Dos abogadas, un mismo objetivo: que lo legal deje de ser una traba para tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.firstName}
              className="rounded-2xl overflow-hidden border border-gold-200 bg-green-700 grid grid-rows-[auto_1fr]"
            >
              <div className="relative aspect-square w-full max-w-[220px] mx-auto mt-8">
                <TeamPhoto src={member.photo} placeholder={member.placeholder} alt={`${member.firstName} ${member.lastName}`} />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-3xl font-serif font-bold text-cream-50 leading-none">{member.firstName}</h3>
                <p className="text-lg font-serif text-gold-200 mb-3">{member.lastName}</p>
                <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
                <p className="font-semibold text-cream-50 mb-3">{member.role}</p>
                <p className="text-sm text-cream-100/80 leading-relaxed mb-5">{member.areas.join(" · ")}</p>
                <p className="italic text-terracotta-100 text-sm leading-relaxed">"{member.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
