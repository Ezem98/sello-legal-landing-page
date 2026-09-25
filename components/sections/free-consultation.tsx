"use client"

import { useState } from "react"
import type React from "react"
import Image from "next/image"
import { CheckCircle2, Clock, Lock, ShieldCheck, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppIcon } from "@/components/icons"
import { freeConsultation, whatsappUrl } from "@/lib/site-config"
import { reportContactConversion } from "@/lib/gtag"

type Status = "idle" | "loading" | "success" | "error"

const benefits = [
  "Te escuchamos y entendemos tu situación",
  "Te orientamos sobre qué hacer y qué necesitás",
  "Te contamos cómo podemos ayudarte, si querés avanzar",
]

const chips = [
  { icon: Video, label: "100% virtual" },
  { icon: Clock, label: `${freeConsultation.minutes} minutos` },
  { icon: ShieldCheck, label: "Sin compromiso" },
]

const team = [
  { name: "Melanie Machado", role: "Agente de Propiedad Industrial", photo: "/team/melanie.jpg" },
  { name: "Agustina Lucía Serra", role: "Especialista en Compliance", photo: "/team/agustina.jpg" },
]

const interests = [
  "Propiedad Intelectual (marcas, derechos de autor)",
  "Sociedades",
  "Contratos y Marketing Legal",
  "Derecho del Consumidor",
  "Compliance",
  "Todavía no lo sé / otro tema",
]

function readAttribution() {
  try {
    const raw = sessionStorage.getItem("sello_attribution")
    if (!raw) return ""
    return Object.entries(JSON.parse(raw) as Record<string, string>)
      .map(([key, value]) => `${key}=${value}`)
      .join(" | ")
  } catch {
    return ""
  }
}

export function FreeConsultation() {
  const [status, setStatus] = useState<Status>("idle")
  const [firstName, setFirstName] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    setStatus("loading")
    try {
      const res = await fetch("/api/free-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: data.get("email"),
          phone: data.get("phone"),
          interest: data.get("interest"),
          details: data.get("details"),
          website: data.get("website"),
          source: readAttribution(),
        }),
      })
      if (!res.ok) throw new Error("failed")
      setFirstName(name.split(" ")[0])
      setStatus("success")
      reportContactConversion()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="consultas" className="relative overflow-hidden bg-green-700 py-16 px-4 scroll-mt-28">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #F5F0E8 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10 items-start">
          <div className="text-center lg:text-left lg:col-start-1 lg:row-start-1">
            <Badge className="mb-5 bg-gold-100 text-green-700 border border-gold-200 px-4 py-1.5 font-medium">
              Consulta inicial gratuita · hasta el {freeConsultation.endsLabel}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream-50 leading-tight mb-4">
              Conocenos y presentanos tu caso
            </h2>
            <p className="text-lg text-cream-100/90 mb-6 max-w-xl mx-auto lg:mx-0">
              En {freeConsultation.minutes} minutos, por videollamada, escuchamos lo que necesitás y te orientamos sobre
              los próximos pasos. Sin costo y sin compromiso.
            </p>

            <ul className="space-y-3 mb-6 max-w-xl mx-auto lg:mx-0 text-left">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-cream-50">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-gold-200 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {chips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-cream-50/30 px-3 py-1 text-sm text-cream-50"
                >
                  <Icon className="h-4 w-4 text-gold-200" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-cream-50/20 pt-6 order-3 lg:order-none lg:col-start-1 lg:row-start-2 lg:self-end">
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mb-4">
              {team.map((member) => (
                <div key={member.name} className="flex items-center gap-3 text-left justify-center lg:justify-start">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-terracotta">
                    <Image src={member.photo} alt={member.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-cream-50 leading-tight">{member.name}</p>
                    <p className="text-sm text-cream-100/80">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="italic text-sm text-terracotta-100 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              "Queremos ser las abogadas que llamás con buenas noticias porque te ayudan a impulsar tu negocio."
            </p>
          </div>

          <Card className="border-0 bg-white shadow-2xl lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center order-2 lg:order-none">
            <CardContent className="p-6 sm:p-8">
              {status === "success" ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-green-700 mb-2">
                    ¡Listo{firstName ? `, ${firstName}` : ""}! Recibimos tu consulta
                  </h3>
                  <p className="text-charcoal/80 mb-6">
                    Te escribimos por WhatsApp o mail para coordinar día y hora de tu videollamada de{" "}
                    {freeConsultation.minutes} minutos.
                  </p>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={reportContactConversion}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    ¿Preferís escribirnos ya? WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif font-bold text-green-700 mb-1">Pedí tu consulta gratuita</h3>
                  <p className="text-sm text-charcoal/70 mb-6">
                    Completá tus datos y te contactamos para coordinar día y hora.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div>
                      <Label htmlFor="fc-name" className="text-charcoal/80">
                        Nombre y apellido
                      </Label>
                      <Input id="fc-name" name="name" autoComplete="name" required className="border-gold-200" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fc-email" className="text-charcoal/80">
                          Email
                        </Label>
                        <Input
                          id="fc-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="border-gold-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fc-phone" className="text-charcoal/80">
                          WhatsApp
                        </Label>
                        <Input
                          id="fc-phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="11 2345-6789"
                          required
                          className="border-gold-200"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="fc-interest" className="text-charcoal/80">
                        ¿Sobre qué tema es tu consulta? <span className="text-charcoal/50">(opcional)</span>
                      </Label>
                      <select
                        id="fc-interest"
                        name="interest"
                        defaultValue=""
                        className="flex h-10 w-full rounded-md border border-gold-200 bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/40"
                      >
                        <option value="">Elegí una opción</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="fc-details" className="text-charcoal/80">
                        Contanos brevemente tu caso
                      </Label>
                      <Textarea
                        id="fc-details"
                        name="details"
                        rows={4}
                        required
                        placeholder="Por ejemplo: tengo una marca de ropa y quiero registrarla antes de lanzar mi tienda."
                        className="border-gold-200"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-12 text-base bg-terracotta hover:bg-terracotta-600 text-white shadow-lg"
                    >
                      {status === "loading" ? "Enviando..." : "Quiero mi consulta gratuita"}
                    </Button>
                    <p className="flex items-center justify-center gap-1.5 text-xs text-charcoal/60">
                      <Lock className="h-3.5 w-3.5" />
                      Sin costo ni compromiso. Tus datos son confidenciales.
                    </p>
                    {status === "error" && (
                      <p className="text-sm text-destructive text-center">
                        No pudimos enviar tu consulta. Probá de nuevo o escribinos por{" "}
                        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline">
                          WhatsApp
                        </a>
                        .
                      </p>
                    )}
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        <p className="text-center mt-10 text-cream-100/80">
          ¿Preferís elegir día y hora ya mismo?{" "}
          <a href="#reservar" className="text-gold-200 font-medium underline underline-offset-4 hover:text-cream-50">
            Reservá una consulta completa de 30 minutos
          </a>
        </p>
      </div>
    </section>
  )
}
