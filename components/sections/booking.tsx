"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, AlertTriangle } from "lucide-react"
import { consultationTypes, type ConsultationTypeKey } from "@/lib/pricing"
import { whatsappUrl } from "@/lib/site-config"

const priceFormatter = new Intl.NumberFormat("es-AR")

const howItWorksSteps = [
  { number: 1, title: "Agenda", description: "Selecciona fecha, hora y tipo de consulta" },
  {
    number: 2,
    title: "Pagás y Confirmamos",
    description: "Pagás con Mercado Pago y te enviamos el link de Google Meet por email",
  },
  { number: 3, title: "Nos Conectamos", description: "Resolvemos tus dudas legales en tiempo real" },
]

export function Booking() {
  const [consultationType, setConsultationType] = useState<ConsultationTypeKey | "">("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [slots, setSlots] = useState<string[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [degraded, setDegraded] = useState(false)
  const [checkedDegraded, setCheckedDegraded] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const minDate = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    fetch(`/api/availability?date=${minDate}`)
      .then((r) => r.json())
      .then((data) => setDegraded(!!data.degraded))
      .catch(() => setDegraded(true))
      .finally(() => setCheckedDegraded(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!date) {
      setSlots([])
      return
    }
    setLoadingSlots(true)
    setTime("")
    fetch(`/api/availability?date=${date}`)
      .then((r) => r.json())
      .then((data) => {
        setSlots(data.slots ?? [])
        setDegraded(!!data.degraded)
      })
      .catch(() => setErrorMessage("No pudimos cargar los horarios disponibles."))
      .finally(() => setLoadingSlots(false))
  }, [date])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage("")

    if (!consultationType || !date || !time) {
      setErrorMessage("Completá tipo de consulta, fecha y horario.")
      return
    }

    const formData = new FormData(e.currentTarget)
    setSubmitting(true)
    try {
      const res = await fetch("/api/booking/preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          consultationType,
          date,
          time,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          details: formData.get("consultation-details"),
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        setErrorMessage(data.message || "No pudimos crear la reserva. Probá de nuevo.")
        setSubmitting(false)
        return
      }
      window.location.href = data.initPoint
    } catch {
      setErrorMessage("Error de conexión. Probá de nuevo.")
      setSubmitting(false)
    }
  }

  return (
    <section id="consultas" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-terracotta text-white border-0 px-6 py-2">Reserva tu Cita</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">Agenda tu Consulta</h2>
          <p className="text-xl max-w-2xl mx-auto text-charcoal/70">
            Elegí el día, hora y tipo de consulta. Todas nuestras reuniones son 100% virtuales vía Google Meet.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {howItWorksSteps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-serif font-bold bg-green-700 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-lg font-serif font-semibold mb-1 text-green-700">{step.title}</h3>
              <p className="text-sm text-charcoal/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {checkedDegraded && degraded && (
            <Card className="mb-6 border border-terracotta/40 bg-terracotta-50">
              <CardContent className="p-6 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal">Las reservas online no están disponibles por el momento.</p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    Escribinos por WhatsApp y coordinamos tu consulta directamente.{" "}
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-terracotta font-medium"
                    >
                      Abrir WhatsApp
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border border-gold-200 bg-white shadow-xl">
            <CardHeader className="bg-green-50 border-b border-gold-200">
              <CardTitle className="flex items-center text-green-700 font-serif">
                <CalendarDays className="mr-2 h-5 w-5" />
                Reservar Consulta
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="consultation-type" className="text-charcoal/80">
                      Tipo de Consulta
                    </Label>
                    <Select value={consultationType} onValueChange={(v) => setConsultationType(v as ConsultationTypeKey)}>
                      <SelectTrigger id="consultation-type" className="border-gold-200">
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(consultationTypes).map(([key, plan]) => (
                          <SelectItem key={key} value={key}>
                            {plan.label} ({plan.minutes} min) - ${priceFormatter.format(plan.price)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-charcoal/80">
                      Fecha Preferida
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={minDate}
                      className="border-gold-200"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="time" className="text-charcoal/80">
                    Horario Preferido
                  </Label>
                  <Select value={time} onValueChange={setTime} disabled={!date || loadingSlots}>
                    <SelectTrigger id="time" className="border-gold-200">
                      <SelectValue
                        placeholder={
                          !date
                            ? "Elegí primero una fecha"
                            : loadingSlots
                              ? "Buscando horarios..."
                              : slots.length === 0
                                ? "Sin horarios disponibles ese día"
                                : "Selecciona el horario"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {slots.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t} hs
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="name" className="text-charcoal/80">
                    Nombre Completo
                  </Label>
                  <Input id="name" name="name" placeholder="Tu nombre completo" required className="border-gold-200" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-charcoal/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="border-gold-200"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-charcoal/80">
                    Teléfono
                  </Label>
                  <Input id="phone" name="phone" placeholder="1123456789" className="border-gold-200" />
                </div>
                <div>
                  <Label htmlFor="consultation-details" className="text-charcoal/80">
                    Describe tu consulta
                  </Label>
                  <Textarea
                    id="consultation-details"
                    name="consultation-details"
                    placeholder="Cuéntanos brevemente sobre tu situación legal..."
                    rows={4}
                    className="border-gold-200"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting || degraded}
                  className="w-full bg-terracotta hover:bg-terracotta-600 text-white shadow-lg disabled:opacity-60"
                >
                  {submitting ? "Redirigiendo a Mercado Pago..." : "Reservar y Pagar"}
                </Button>
                {errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
