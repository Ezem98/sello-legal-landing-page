function fireConversion(sendTo: string) {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return
  gtag("event", "conversion", { send_to: sendTo })
}

// Evento "whatsapp_click" con campaign y page_path. Usa window.gtag si existe.
// Hoy el sitio solo tiene la etiqueta de Google Ads (AW-...): para verlo en
// reportes hace falta sumar una propiedad GA4 (gtag('config', 'G-XXXX')) en layout.tsx.
export function trackWhatsAppClick(params: { campaign: string | null; source: string | null }) {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== "function") return
  gtag("event", "whatsapp_click", {
    campaign: params.campaign ?? "(not set)",
    source: params.source ?? "(direct)",
    page_path: window.location.pathname,
  })
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
