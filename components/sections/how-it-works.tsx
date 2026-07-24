const steps = [
  { number: 1, title: "Agenda", description: "Selecciona fecha, hora y tipo de consulta" },
  { number: 2, title: "Pagás y Confirmamos", description: "Pagás con Mercado Pago y te enviamos el link de Google Meet por email" },
  { number: 3, title: "Nos Conectamos", description: "Resolvemos tus dudas legales en tiempo real" },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-green-700">¿Cómo funciona la consulta virtual?</h2>
          <div className="w-24 h-1 bg-terracotta mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-serif font-bold bg-green-700 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-green-700">{step.title}</h3>
              <p className="text-charcoal/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
