import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green to-green-900 py-24 px-4">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F5F0E8 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <Badge className="mb-6 bg-gold-100 text-green-700 border border-gold-200 px-4 py-1.5 font-medium">
          Consultoría Legal Boutique
        </Badge>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight text-cream-50">
          Sello Legal
        </h1>
        <p className="text-xl md:text-2xl font-medium text-cream-100/90">
          Protegemos tus ideas, respaldamos tu negocio
        </p>
      </div>
    </section>
  )
}
