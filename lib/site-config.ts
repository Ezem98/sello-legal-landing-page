export const siteConfig = {
  phoneDisplay: "+54 9 11 5181-7706",
  phoneHref: "tel:+5491151817706",
  whatsappNumber: "5491151817706",
  whatsappMessage: "Hola! Quiero hacer una consulta con Sello Legal",
  email: "legalsello@gmail.com",
  hours: ["Lun - Vie: 8:00 AM - 6:00 PM", "Sáb: 8:00 AM - 12:00 PM"],
  social: {
    instagram: "https://www.instagram.com/legal_sello/",
    tiktok: "https://www.tiktok.com/@sello.legal3",
    linkedin: "https://www.linkedin.com/in/sello-legal/",
    substack: "https://substack.com/@sellolegal",
  },
} as const

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
