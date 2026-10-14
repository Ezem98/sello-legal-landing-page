function fireConversion(sendTo: string) {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return
  gtag("event", "conversion", { send_to: sendTo })
}

// Conversión "Contacto" de Google Ads (AW-18347516303). Se usa cuando
// alguien envía el formulario de contacto o hace clic en un botón de
// WhatsApp: contacto general, todavía sin cita confirmada.
export function reportContactConversion() {
  fireConversion("AW-18347516303/r1KKCLTY0O0cEI_D46xE")
}

// Conversión "Consulta gratuita" de Google Ads (AW-18347516303). Se dispara solo
// cuando el servidor confirma que el formulario de #consultas se recibió.
export function reportFreeConsultationConversion() {
  fireConversion("AW-18347516303/9xJeCNqu5ZUdEI_D46xE")
}

// Conversión "Agendar Consultas" de Google Ads (AW-18347516303),
// categoría "Solicitud de cita". Se dispara solo cuando se confirma
// una cita paga (página /reserva/confirmada).
export function reportBookingConversion() {
  fireConversion("AW-18347516303/GorqCNyRj-wcEI_D46xE")
}
