import { Badge } from "@/components/ui/badge"
import { trustedBrands } from "@/lib/trusted-brands"

export function TrustedBrands() {
  const track = [...trustedBrands, ...trustedBrands]

  return (
    <section className="py-16 bg-cream-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-6 bg-gold text-white border-0 px-6 py-2">Confían en nosotras</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">Marcas que confían en nosotras</h2>
          <p className="text-xl max-w-2xl mx-auto text-charcoal/70">
            Algunas de las marcas que ya registramos y acompañamos
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream-50 to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {track.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center mx-4 h-20 min-w-[180px] px-6 rounded-xl border border-gold-200 bg-white"
            >
              {brand.logoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={brand.logoSrc} alt={brand.name} className="max-h-10 max-w-full object-contain" />
              ) : (
                <span className="font-serif text-lg text-green-700 whitespace-nowrap">{brand.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
