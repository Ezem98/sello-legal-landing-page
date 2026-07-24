import Link from "next/link"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReservaPendientePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-50 px-4 py-20">
      <div className="max-w-lg text-center">
        <Clock className="h-16 w-16 text-gold mx-auto mb-6" />
        <h1 className="text-3xl font-serif font-bold text-green-700 mb-4">Tu pago está pendiente</h1>
        <p className="text-charcoal/70 mb-8">
          Recibimos tu solicitud de reserva y estamos esperando la confirmación del pago (esto puede pasar con
          transferencia, Rapipago o Pago Fácil). Apenas se acredite, te vamos a confirmar la consulta por email.
        </p>
        <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </main>
  )
}
