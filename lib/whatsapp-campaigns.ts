import { siteConfig } from "@/lib/site-config"

// ─── TABLA DE MENSAJES POR CAMPAÑA (único lugar a editar) ───────────────────
// Clave = valor de utm_campaign. Para sumar una campaña, agregá una línea.
// Terminá siempre el mensaje con "[ref: <utm_campaign>]": así sabés de qué
// campaña vino cada consulta cuando llega por WhatsApp.
export const whatsappCampaignMessages: Record<string, string> = {
  short_dualipa_nov:
    "Hola, vengo del video de Dua Lipa en YouTube. Quiero revisar un contrato con una marca (canje o campaña). [ref: short_dualipa_nov]",
  short_crocs_nov:
    "Hola, vengo del video de Crocs en YouTube. Quiero proteger el diseño de mi producto. [ref: short_crocs_nov]",
}

// Sin utm_campaign, o con uno que no está en la tabla.
export const defaultWhatsappMessage = "Hola, vengo de la web de Sello Legal y quiero hacer una consulta. [ref: web]"

const STORAGE_KEY = "sello_wa_campaign"

export interface WhatsAppCampaign {
  campaign: string | null
  source: string | null
}

export function buildWhatsAppUrl(campaign: string | null): string {
  const message =
    campaign && Object.prototype.hasOwnProperty.call(whatsappCampaignMessages, campaign)
      ? whatsappCampaignMessages[campaign]
      : defaultWhatsappMessage
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

function clean(value: unknown): string | null {
  if (typeof value !== "string") return null
  const trimmed = value.trim().slice(0, 100)
  return trimmed || null
}

// Solo en el navegador. Si la URL trae utm_campaign lo usa y lo guarda; si no,
// recupera el último guardado en esta sesión (para cuando navegan a otra página).
export function readCampaign(): WhatsAppCampaign {
  const params = new URLSearchParams(window.location.search)
  const fromUrl: WhatsAppCampaign = {
    campaign: clean(params.get("utm_campaign")),
    source: clean(params.get("utm_source")),
  }

  try {
    if (fromUrl.campaign) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl))
      return fromUrl
    }
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as Record<string, unknown>
      return { campaign: clean(parsed.campaign), source: clean(parsed.source) }
    }
  } catch {
    // sessionStorage bloqueado o dato corrupto: se usa solo lo que trae la URL
  }

  return fromUrl
}
