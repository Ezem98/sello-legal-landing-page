import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

export function Legal() {
  return (
    <>
      <section id="terminos" className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-green-700">
              Términos y Condiciones de Uso
            </h2>
            <Card className="border border-gold-200 bg-white">
              <CardContent className="p-8">
                <div className="space-y-6 text-charcoal/80">
                  <p>
                    Este sitio web [www.sellolegal.com.ar] es operado por Sello Legal. Al utilizar nuestro sitio y/o
                    contratar nuestros servicios, aceptás los presentes Términos y Condiciones.
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">1. SERVICIOS OFRECIDOS</h4>
                    <p>
                      Ofrecemos servicios de consultoría legal y, próximamente, productos digitales (guías
                      descargables). Toda contratación se realiza conforme a las condiciones detalladas en esta web.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">2. USO DEL CONTENIDO</h4>
                    <p>
                      El contenido del sitio y de nuestras guías es propiedad intelectual de Sello Legal. Está
                      prohibida su reproducción total o parcial sin autorización previa y por escrito.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">3. RESERVA Y PAGO DE CONSULTAS</h4>
                    <p>
                      Las consultas se reservan a través del sistema de agenda de esta web y se confirman una vez
                      acreditado el pago mediante Mercado Pago. Si el pago no se acredita, el horario queda liberado
                      automáticamente.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">4. DERECHO DE ARREPENTIMIENTO</h4>
                    <p>
                      De acuerdo a la Ley de Defensa del Consumidor (Ley 24.240), el comprador podrá ejercer su
                      derecho de arrepentimiento dentro de los 10 días corridos desde la compra, en la medida en que
                      el servicio contratado no haya sido efectivamente prestado.
                    </p>
                    <p>Para ejercerlo, escribinos a {siteConfig.email} con el asunto "Arrepentimiento de compra".</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">5. LIMITACIÓN DE RESPONSABILIDAD</h4>
                    <p>
                      El uso del contenido es bajo responsabilidad exclusiva del usuario. No garantizamos resultados
                      específicos por la aplicación de la información contenida en las guías.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">6. MODIFICACIONES</h4>
                    <p>
                      Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Se
                      informará en esta misma sección.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">7. CONTACTO</h4>
                    <p>Para dudas o reclamos, podés escribirnos a: {siteConfig.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="privacidad" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-green-700">Política de Privacidad</h2>
            <Card className="border border-gold-200 bg-cream-50">
              <CardContent className="p-8">
                <p className="text-sm mb-4 text-charcoal/60">
                  <strong>Última actualización:</strong> 23/07/2026
                </p>
                <div className="space-y-4 text-charcoal/80">
                  <p>
                    Sello Legal se compromete a proteger la privacidad de los usuarios. La información personal
                    recopilada (incluyendo los datos de reserva de consultas) será utilizada únicamente para procesar
                    reservas y pagos, brindar soporte y enviar novedades, si así lo autoriza el usuario.
                  </p>
                  <p>
                    No compartimos tus datos con terceros, salvo obligación legal o los proveedores estrictamente
                    necesarios para prestar el servicio (por ejemplo, Mercado Pago para procesar el pago y Google
                    Calendar para coordinar la videollamada). Podés solicitar la eliminación de tus datos escribiendo
                    a{" "}
                    <a href="mailto:legalsello@gmail.com" className="text-terracotta hover:underline">
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
    </>
  )
}
