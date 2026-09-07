// Dispara la conversión "Contacto" de Google Ads (AW-18347516303).
// Se usa en los 3 puntos que cuentan como esta conversión: reserva pagada,
// envío del formulario de contacto, y clic en cualquier botón de WhatsApp.
export function reportContactConversion() {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return
  gtag("event", "conversion", { send_to: "AW-18347516303/r1KKCLTY0O0cEI_D46xE" })
}
