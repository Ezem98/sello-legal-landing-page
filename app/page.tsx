"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  Shield,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Zap,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"

export default function SelloLegalLanding() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [consultationType, setConsultationType] = useState("")

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const consultationData = {
      consultationType,
      selectedDate,
      selectedTime,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      consultationDetails: formData.get("consultation-details"),
    }

    try {
      const response = await fetch("/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultationData),
      })

      const result = await response.json()

      if (result.success) {
        alert(result.message)
        // Limpiar formulario
        setSelectedDate("")
        setSelectedTime("")
        setConsultationType("")
        ;(e.target as HTMLFormElement).reset()
      } else {
        alert("Error al agendar la consulta. Por favor, intenta nuevamente.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al agendar la consulta. Por favor, intenta nuevamente.")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5491160598350"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageSquare className="h-6 w-6" />
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm border-b" style={{ borderColor: "#F0F0D8" }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo-sello-legal.png" alt="Sello Legal" width={60} height={60} className="object-contain" />
            <div>
              <h1 className="text-xl font-bold" style={{ color: "#967C52" }}>
                SELLO LEGAL
              </h1>
              <p className="text-sm" style={{ color: "#967C52" }}>
                CONSULTORÍA
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#servicios" className="hover:opacity-75 transition-opacity" style={{ color: "#967C52" }}>
              Servicios
            </a>
            <a href="#guias" className="hover:opacity-75 transition-opacity" style={{ color: "#967C52" }}>
              Guías
            </a>
            <a href="#consultas" className="hover:opacity-75 transition-opacity" style={{ color: "#967C52" }}>
              Consultas
            </a>
            <a href="#contacto" className="hover:opacity-75 transition-opacity" style={{ color: "#967C52" }}>
              Contacto
            </a>
          </nav>
          <Button className="text-white hover:opacity-90" style={{ backgroundColor: "#967C52" }}>
            Agendar Consulta
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-teal-50 to-cream-100">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/hero-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge
            className="mb-6 border"
            style={{ backgroundColor: "#F0F0D8", color: "#967C52", borderColor: "#CFCFCF" }}
          >
            Consultoría Legal Boutique
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "#967C52" }}>
            Sello Legal
          </h1>
          <p className="text-2xl mb-8 font-medium" style={{ color: "#967C52" }}>
            Protegemos tus ideas, respaldamos tu negocio
          </p>
        </div>
      </section>

      {/* Nuestra Misión Section */}
      <section className="py-16" style={{ backgroundColor: "#FFFAEB" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-xl bg-white">
              <CardContent className="p-12 text-center">
                <div className="mb-6">
                  <div className="w-16 h-1 mx-auto mb-4 bg-teal-500" />
                  <h2 className="text-4xl font-bold mb-8 text-teal-600">Nuestra Misión</h2>
                </div>
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#4E3F30" }}>
                  <p className="text-xl font-medium">
                    Ayudar a los emprendedores a profesionalizar sus negocios, al igual que proteger sus bienes
                    intangibles.
                  </p>
                  <p>
                    Nuestro diferencial es pensar legal y hablar emprendedor. Lo legal no tiene que ser complicado. Te
                    lo explicamos, lo resolvemos y lo alineamos a tu visión.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-gradient-to-b from-sage-50 to-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-teal-500 text-white border-0">Nuestras Especialidades</Badge>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#4E3F30" }}>
              Servicios Especializados
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#967C52" }}>
              Servicios jurídicos especializados para emprendedores y empresas digitales
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Services Section - Unificar todos los cards */}
            <Card className="border-2 border-teal-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-teal-700">Propiedad Intelectual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4" style={{ color: "#4E3F30" }}>
                  Protección integral de marcas, patentes, derechos de autor y secretos comerciales.
                </p>
                <ul className="space-y-2 text-sm" style={{ color: "#967C52" }}>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Registro de marcas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Patentes y modelos de utilidad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Derechos de autor
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Aplicar el mismo formato a los otros 3 cards, cambiando solo el icono y contenido */}
            <Card className="border-2 border-teal-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-teal-700">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4" style={{ color: "#4E3F30" }}>
                  Programas de cumplimiento normativo y gestión de riesgos legales.
                </p>
                <ul className="space-y-2 text-sm" style={{ color: "#967C52" }}>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Auditorías legales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Políticas internas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Capacitación
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-teal-700">Derecho del Consumidor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4" style={{ color: "#4E3F30" }}>
                  Asesoría especializada en relaciones comerciales y protección al consumidor.
                </p>
                <ul className="space-y-2 text-sm" style={{ color: "#967C52" }}>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Términos y condiciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Políticas de privacidad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Defensa del consumidor
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-teal-700">Términos y Condiciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4" style={{ color: "#4E3F30" }}>
                  Documentos legales para entornos digitales
                </p>
                <ul className="space-y-2 text-sm" style={{ color: "#967C52" }}>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Términos y Condiciones web/app
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Políticas de Privacidad (GDPR)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Contratos electrónicos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                    Documentos para e-commerce
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Sello Legal Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">¿Por qué elegir Sello Legal?</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur text-center hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle style={{ color: "#4E3F30" }}>Especialización Profunda</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: "#967C52" }}>
                  Conocimiento detallado en nuestras áreas de práctica, garantizando asesoramiento experto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur text-center hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle style={{ color: "#4E3F30" }}>Atención Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: "#967C52" }}>
                  Contacto directo con las socias, comunicación clara y soluciones a medida.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur text-center hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle style={{ color: "#4E3F30" }}>Enfoque Preventivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: "#967C52" }}>
                  Ayudamos a cumplir la ley desde el inicio, evitando problemas futuros y costos adicionales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guias" className="py-16 bg-gradient-to-b from-cream-100 to-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white border-0 px-6 py-2">
              Recursos Digitales
            </Badge>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#4E3F30" }}>
              Guías Especializadas
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#967C52" }}>
              Recursos prácticos y actualizados para proteger tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guides Section - Unificar todos los cards */}
            {[
              {
                title: "Guía Completa de Registro de Marcas",
                description: "Todo lo que necesitas saber para proteger tu marca paso a paso",
                price: "$18,000",
                features: ["50+ páginas", "Formularios incluidos", "Casos prácticos", "Actualizaciones gratuitas"],
              },
              {
                title: "Manual de Compliance Digital",
                description: "Implementa un programa de cumplimiento efectivo en tu empresa",
                price: "$18,000",
                features: ["Plantillas legales", "Checklist de auditoría", "Políticas modelo", "Soporte por email"],
              },
              {
                title: "Kit Legal para E-commerce",
                description: "Términos, políticas y contratos esenciales para tu tienda online",
                price: "$18,000",
                features: [
                  "Términos y condiciones",
                  "Política de privacidad",
                  "Contratos tipo",
                  "Guía de implementación",
                ],
              },
            ].map((guide, index) => (
              <Card
                key={index}
                className="border-2 border-teal-200 hover:shadow-xl transition-all duration-300 bg-white hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg" style={{ color: "#4E3F30" }}>
                      {guide.title}
                    </CardTitle>
                    <Badge className="text-white bg-teal-500">{guide.price}</Badge>
                  </div>
                  <CardDescription style={{ color: "#967C52" }}>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {guide.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm" style={{ color: "#967C52" }}>
                        <CheckCircle className="h-4 w-4 mr-2 text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full text-white bg-teal-500 hover:bg-teal-600">
                    Comprar Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <section id="consultas" className="py-16 bg-gradient-to-br from-white to-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-teal-500 text-white border-0 px-6 py-2">Reserva tu Cita</Badge>
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#4E3F30" }}>
              Agenda tu Consulta
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#967C52" }}>
              Elige el día, hora y tipo de consulta que mejor se adapte a tus necesidades. Todas nuestras reuniones son
              100% virtuales vía Zoom o Google Meet.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-teal-200 bg-white shadow-xl">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-sage-50">
                <CardTitle className="flex items-center text-teal-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  Reservar Consulta
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleConsultationSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="consultation-type" style={{ color: "#967C52" }}>
                        Tipo de Consulta
                      </Label>
                      <Select value={consultationType} onValueChange={setConsultationType}>
                        <SelectTrigger style={{ borderColor: "#F0F0D8" }}>
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulta-inicial">Consulta Inicial (45 min) - $20,000</SelectItem>
                          <SelectItem value="propiedad-intelectual">
                            Propiedad Intelectual (45 min) - $25,000
                          </SelectItem>
                          <SelectItem value="compliance">Compliance (45 min) - $25,000</SelectItem>
                          <SelectItem value="terminos-condiciones">
                            Términos y Condiciones (45 min) - $25,000
                          </SelectItem>
                          <SelectItem value="derecho-consumidor">Derecho del Consumidor (45 min) - $25,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date" style={{ color: "#967C52" }}>
                        Fecha Preferida
                      </Label>
                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        style={{ borderColor: "#F0F0D8" }}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="time" style={{ color: "#967C52" }}>
                      Horario Preferido
                    </Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger style={{ borderColor: "#F0F0D8" }}>
                        <SelectValue placeholder="Selecciona el horario" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16:00">04:00 PM</SelectItem>
                        <SelectItem value="17:00">05:00 PM</SelectItem>
                        <SelectItem value="18:00">06:00 PM</SelectItem>
                        <SelectItem value="19:00">07:00 PM</SelectItem>
                        <SelectItem value="20:00">08:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="name" style={{ color: "#967C52" }}>
                      Nombre Completo
                    </Label>
                    <Input id="name" placeholder="Tu nombre completo" required style={{ borderColor: "#F0F0D8" }} />
                  </div>
                  <div>
                    <Label htmlFor="email" style={{ color: "#967C52" }}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      style={{ borderColor: "#F0F0D8" }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" style={{ color: "#967C52" }}>
                      Teléfono
                    </Label>
                    <Input id="phone" placeholder="1160598350" style={{ borderColor: "#F0F0D8" }} />
                  </div>
                  <div>
                    <Label htmlFor="consultation-details" style={{ color: "#967C52" }}>
                      Describe tu consulta
                    </Label>
                    <Textarea
                      id="consultation-details"
                      placeholder="Cuéntanos brevemente sobre tu situación legal..."
                      rows={4}
                      style={{ borderColor: "#F0F0D8" }}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg"
                  >
                    Agendar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Virtual Consultation Works Section */}
      <section className="py-16 bg-gradient-to-r from-sage-100 to-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#4E3F30" }}>
              ¿Cómo funciona la consulta virtual?
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          {/* How Virtual Consultation Works Section - Unificar números */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#4E3F30" }}>
                Agenda
              </h3>
              <p style={{ color: "#967C52" }}>Selecciona fecha, hora y tipo de consulta</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#4E3F30" }}>
                Confirmamos
              </h3>
              <p style={{ color: "#967C52" }}>Te enviamos el enlace de Zoom/Meet por email</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#4E3F30" }}>
                Nos Conectamos
              </h3>
              <p style={{ color: "#967C52" }}>Resolvemos tus dudas legales en tiempo real</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#967C52" }}>
              Contacto
            </h2>
            <p className="text-xl" style={{ color: "#967C52" }}>
              Estamos aquí para ayudarte
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border bg-white" style={{ borderColor: "#F0F0D8" }}>
              <CardHeader>
                <CardTitle style={{ color: "#967C52" }}>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" style={{ color: "#967C52" }} />
                  <span style={{ color: "#967C52" }}>1160598350</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" style={{ color: "#967C52" }} />
                  <span style={{ color: "#967C52" }}>legalsello@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5" style={{ color: "#967C52" }} />
                  <span style={{ color: "#967C52" }}>Lun - Vie: 4:00 PM - 8:00 PM</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border bg-white" style={{ borderColor: "#F0F0D8" }}>
              <CardHeader>
                <CardTitle style={{ color: "#967C52" }}>Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Tu nombre" style={{ borderColor: "#F0F0D8" }} />
                  <Input type="email" placeholder="Tu email" style={{ borderColor: "#F0F0D8" }} />
                  <Textarea placeholder="Tu mensaje" rows={4} style={{ borderColor: "#F0F0D8" }} />
                  <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: "#967C52" }}>
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: "#FFFAEB" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#967C52" }}>
              Preguntas Frecuentes (FAQ)
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border rounded-lg px-6 bg-white"
                style={{ borderColor: "#F0F0D8" }}
              >
                <AccordionTrigger className="hover:opacity-75" style={{ color: "#967C52" }}>
                  📌 ¿Qué tipo de servicios ofrece Sello Legal?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#967C52" }}>
                  Ofrecemos consultoría legal personalizada para emprendedores, startups y pymes, en temas como
                  propiedad intelectual, compliance, derecho del consumidor y redacción de términos y condiciones.
                  También vendemos guías legales digitales listas para usar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border rounded-lg px-6 bg-white"
                style={{ borderColor: "#F0F0D8" }}
              >
                <AccordionTrigger className="hover:opacity-75" style={{ color: "#967C52" }}>
                  📌 ¿Las guías digitales incluyen asesoramiento?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#967C52" }}>
                  Las guías son materiales informativos y prácticos, pero no sustituyen una consulta legal
                  personalizada. Si necesitás asesoramiento específico, podés agendar una consulta con nuestro equipo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border rounded-lg px-6 bg-white"
                style={{ borderColor: "#F0F0D8" }}
              >
                <AccordionTrigger className="hover:opacity-75" style={{ color: "#967C52" }}>
                  📌 ¿Cómo recibo mi guía después de comprarla?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#967C52" }}>
                  Una vez realizado el pago, recibirás un enlace de descarga o un correo electrónico con el archivo
                  adjunto. En caso de no recibirlo, escribinos a contacto@sellolegal.com.ar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border rounded-lg px-6 bg-white"
                style={{ borderColor: "#F0F0D8" }}
              >
                <AccordionTrigger className="hover:opacity-75" style={{ color: "#967C52" }}>
                  📌 ¿Puedo arrepentirme de la compra de una guía?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#967C52" }}>
                  Sí. Según la Ley 24.240, tenés 10 días corridos desde la compra para ejercer el derecho de
                  arrepentimiento. Podés hacerlo haciendo clic en el Botón de Arrepentimiento o escribiéndonos por
                  email. ⚠️ No aplica si ya descargaste el archivo o accediste al contenido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border rounded-lg px-6 bg-white"
                style={{ borderColor: "#F0F0D8" }}
              >
                <AccordionTrigger className="hover:opacity-75" style={{ color: "#967C52" }}>
                  📌 ¿Puedo compartir las guías con otras personas?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#967C52" }}>
                  No. Las guías están protegidas por derechos de autor. Su uso es exclusivo de quien realizó la compra.
                  Está prohibida su reproducción o distribución sin autorización de Sello Legal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border rounded-lg px-6 bg-white"
                style={{ borderColor: "#F0F0D8" }}
              >
                <AccordionTrigger className="hover:opacity-75" style={{ color: "#967C52" }}>
                  📌 ¿Cómo puedo agendar una consulta legal?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#967C52" }}>
                  Podés solicitar una cita escribiéndonos a contacto@sellolegal.com.ar o completando el formulario en la
                  sección "Consultas" de nuestro sitio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-7"
                className="border rounded-lg px-6 bg-white"
                style={{ borderColor: "#F0F0D8" }}
              >
                <AccordionTrigger className="hover:opacity-75" style={{ color: "#967C52" }}>
                  📌 ¿Brindan servicios a todo el país?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#967C52" }}>
                  Sí. Atendemos de manera 100% remota por videollamada, correo o teléfono, para todo el territorio
                  argentino.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-8"
                className="border rounded-lg px-6 bg-white"
                style={{ borderColor: "#F0F0D8" }}
              >
                <AccordionTrigger className="hover:opacity-75" style={{ color: "#967C52" }}>
                  📌 ¿Aceptan pagos con tarjeta o transferencia?
                </AccordionTrigger>
                <AccordionContent style={{ color: "#967C52" }}>
                  Sí. Podés pagar con tarjeta de crédito, débito, transferencia o plataformas como Mercado Pago, según
                  disponibilidad al momento del pago.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: "#967C52" }}>
              Términos y Condiciones de Uso
            </h2>
            <Card className="border bg-white" style={{ borderColor: "#F0F0D8" }}>
              <CardContent className="p-8">
                <div className="space-y-6" style={{ color: "#967C52" }}>
                  <p>
                    Este sitio web [www.sellolegal.com.ar] es operado por Sello Legal. Al utilizar nuestro sitio y/o
                    contratar nuestros servicios, aceptás los presentes Términos y Condiciones.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">1. SERVICIOS OFRECIDOS</h4>
                    <p>
                      Ofrecemos servicios de consultoría legal y productos digitales (guías descargables). Toda
                      contratación se realiza conforme a las condiciones detalladas en esta web.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. USO DEL CONTENIDO</h4>
                    <p>
                      El contenido del sitio y de nuestras guías es propiedad intelectual de Sello Legal. Está prohibida
                      su reproducción total o parcial sin autorización previa y por escrito.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. PROCESO DE COMPRA Y DESCARGA</h4>
                    <p>
                      Las guías digitales pueden adquirirse mediante el sistema de pago provisto en esta web. Luego del
                      pago, el cliente recibe acceso al contenido de forma automática o vía email.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. DERECHO DE ARREPENTIMIENTO</h4>
                    <p>
                      De acuerdo a la Ley de Defensa del Consumidor (Ley 24.240), el comprador podrá ejercer su derecho
                      de arrepentimiento dentro de los 10 días corridos desde la compra.
                    </p>
                    <p>
                      Para ejercer este derecho, deberá hacer clic en el [Botón de Arrepentimiento] o escribirnos a
                      contacto@sellolegal.com.ar con el asunto "Arrepentimiento de compra".
                    </p>
                    <p>
                      <strong>IMPORTANTE:</strong> El derecho de arrepentimiento no será aplicable si el archivo fue
                      descargado o accedido digitalmente con anterioridad.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">5. LIMITACIÓN DE RESPONSABILIDAD</h4>
                    <p>
                      El uso del contenido es bajo responsabilidad exclusiva del usuario. No garantizamos resultados
                      específicos por la aplicación de la información contenida en las guías.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">6. MODIFICACIONES</h4>
                    <p>
                      Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Se
                      informará en esta misma sección.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">7. CONTACTO</h4>
                    <p>Para dudas o reclamos, podés escribirnos a: contacto@sellolegal.com.ar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-16" style={{ backgroundColor: "#FFFAEB" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: "#967C52" }}>
              Política de Privacidad
            </h2>
            <Card className="border bg-white" style={{ borderColor: "#F0F0D8" }}>
              <CardContent className="p-8">
                <p className="text-sm mb-4" style={{ color: "#967C52" }}>
                  <strong>Última actualización:</strong> 13/07/2025
                </p>
                <div className="space-y-4" style={{ color: "#967C52" }}>
                  <p>
                    Sello Legal se compromete a proteger la privacidad de los usuarios. La información personal
                    recopilada será utilizada únicamente para procesar compras, brindar soporte y enviar novedades, si
                    así lo autoriza el usuario.
                  </p>
                  <p>
                    No compartimos tus datos con terceros, salvo obligación legal. Podés solicitar la eliminación de tus
                    datos escribiendo a{" "}
                    <a href="mailto:legalsello@gmail.com" className="hover:underline" style={{ color: "#967C52" }}>
                      legalsello@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: "#967C52" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo-sello-legal.png"
                  alt="Sello Legal"
                  width={40}
                  height={40}
                  className="object-contain filter brightness-0 invert"
                />
                <div>
                  <h3 className="font-bold">SELLO LEGAL</h3>
                  <p className="text-sm opacity-80">CONSULTORÍA</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Consultoría legal boutique especializada en soluciones jurídicas modernas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Propiedad Intelectual</li>
                <li>Compliance</li>
                <li>Derecho del Consumidor</li>
                <li>Términos y Condiciones</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Guías Especializadas</li>
                <li>Consultas Virtuales</li>
                <li>Preguntas Frecuentes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>📞 1160598350</p>
                <p>✉️ legalsello@gmail.com</p>
                <p>🕒 Lun - Vie: 4:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-opacity-20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 Sello Legal. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
