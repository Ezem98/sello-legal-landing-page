"use client"

import { useState } from "react"
import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Clock, Mail } from "lucide-react"

const guides = [
  {
    title: "Guía Completa de Registro de Marcas",
    description: "Todo lo que necesitas saber para proteger tu marca paso a paso",
    features: ["50+ páginas", "Formularios incluidos", "Casos prácticos", "Actualizaciones gratuitas"],
  },
  {
    title: "Manual de Compliance Digital",
    description: "Implementa un programa de cumplimiento efectivo en tu empresa",
    features: ["Plantillas legales", "Checklist de auditoría", "Políticas modelo", "Soporte por email"],
  },
  {
    title: "Kit Legal para E-commerce",
    description: "Términos, políticas y contratos esenciales para tu tienda online",
    features: ["Términos y condiciones", "Política de privacidad", "Contratos tipo", "Guía de implementación"],
  },
]

type Status = "idle" | "loading" | "success" | "error"

export function Guides() {
  const [email, setEmail] = useState("")
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/guide-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("request failed")
      setSubmittedEmail(email)
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="guias" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-gold text-white border-0 px-6 py-2">Recursos Digitales</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">Guías Especializadas</h2>
          <p className="text-xl max-w-2xl mx-auto text-charcoal/70">
            Recursos prácticos y actualizados para proteger tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide) => (
            <Card key={guide.title} className="relative border border-gold-200 bg-white overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-terracotta text-white border-0 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Próximamente
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-serif text-green-700 pr-24">{guide.title}</CardTitle>
                <CardDescription className="text-charcoal/70">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 opacity-70">
                  {guide.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-charcoal/70">
                      <CheckCircle className="h-4 w-4 mr-2 text-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border border-gold-200 bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <Mail className="h-8 w-8 text-terracotta mx-auto mb-3" />
              <h3 className="text-xl font-serif font-semibold text-green-700 mb-2">
                ¿Querés ser la primera en enterarte?
              </h3>
              <p className="text-charcoal/70 mb-6">
                Dejanos tu email y te avisamos apenas estén disponibles.
              </p>
              {status === "success" ? (
                <p className="text-green-700 font-medium">
                  ¡Listo! Te vamos a avisar a {submittedEmail} apenas estén disponibles.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-gold-200"
                  />
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-terracotta hover:bg-terracotta-600 text-white whitespace-nowrap"
                  >
                    {status === "loading" ? "Enviando..." : "Avisarme cuando estén disponibles"}
                  </Button>
                </form>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive mt-3">
                  Hubo un problema al registrar tu email. Probá de nuevo o escribinos a legalsello@gmail.com.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
