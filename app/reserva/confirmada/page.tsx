import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReservaConfirmadaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-50 px-4 py-20">
      <div className="max-w-lg text-center">
        <CheckCircle2 className="h-16 w-16 text-green-700 mx-auto mb-6" />
        <h1 className="text-3xl font-serif font-bold text-green-700 mb-4">¡Pago recibido!</h1>
        <p className="text-charcoal/70 mb-8">
          Estamos confirmando tu reserva. En unos minutos vas a recibir un email con los detalles de tu consulta y el
          link de Google Meet. Si no te llega en un rato, escribinos a legalsello@gmail.com.
        </p>
        <Button asChild className="bg-terracotta hover:bg-terracotta-600 text-white">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </main>
  )
}
