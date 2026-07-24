import { Card, CardContent } from "@/components/ui/card"

export function Mission() {
  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gold-200 shadow-lg bg-white">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-1 mx-auto mb-4 bg-terracotta" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-green-700">Nuestra Misión</h2>
              <div className="space-y-6 text-lg leading-relaxed text-charcoal/80">
                <p className="text-xl font-medium text-charcoal">
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
  )
}
