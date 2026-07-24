"use client"

import { useState } from "react"
import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { siteConfig, whatsappUrl } from "@/lib/site-config"

type Status = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      })
      if (!res.ok) throw new Error("failed")
      setStatus("success")
      e.currentTarget.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">Contacto</h2>
          <p className="text-xl text-charcoal/70">Estamos aquí para ayudarte</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border border-gold-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-700 font-serif">Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href={siteConfig.phoneHref} className="flex items-center space-x-3 text-charcoal/80 hover:text-terracotta transition-colors">
                <Phone className="h-5 w-5 text-gold" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-3 text-charcoal/80 hover:text-terracotta transition-colors">
                <Mail className="h-5 w-5 text-gold" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-charcoal/80">
                <Clock className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  {siteConfig.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-md bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultanos por WhatsApp
              </a>
            </CardContent>
          </Card>
          <Card className="border border-gold-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-700 font-serif">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <p className="text-green-700 font-medium py-4">
                  ¡Gracias! Recibimos tu mensaje y te vamos a responder a la brevedad.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input name="name" placeholder="Tu nombre" required className="border-gold-200" />
                  <Input name="email" type="email" placeholder="Tu email" required className="border-gold-200" />
                  <Textarea name="message" placeholder="Tu mensaje" rows={4} required className="border-gold-200" />
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-terracotta hover:bg-terracotta-600 text-white"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      No pudimos enviar tu mensaje. Probá de nuevo o escribinos a {siteConfig.email}.
                    </p>
                  )}
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
