import { getEnv } from "@/lib/cf-env"

const MP_API = "https://api.mercadopago.com"

function getAccessToken() {
  return getEnv().MERCADOPAGO_ACCESS_TOKEN ?? null
}

export function isMercadoPagoConfigured() {
  return !!getAccessToken()
}

export async function createPreference(params: {
  title: string
  price: number
  externalReference: string
  payerEmail: string
  payerName: string
  backUrls: { success: string; pending: string; failure: string }
  notificationUrl: string
}) {
  const token = getAccessToken()
  if (!token) throw new Error("Mercado Pago no está configurado")

  const res = await fetch(`${MP_API}/checkout/preferences`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      items: [{ title: params.title, quantity: 1, currency_id: "ARS", unit_price: params.price }],
      payer: { email: params.payerEmail, name: params.payerName },
      external_reference: params.externalReference,
      back_urls: params.backUrls,
      auto_return: "approved",
      notification_url: params.notificationUrl,
    }),
  })

  if (!res.ok) {
    throw new Error(`Mercado Pago preference failed: ${res.status} ${await res.text()}`)
  }

  const data = await res.json()
  return { id: data.id as string, initPoint: data.init_point as string }
}

export async function getPayment(paymentId: string) {
  const token = getAccessToken()
  if (!token) throw new Error("Mercado Pago no está configurado")

  const res = await fetch(`${MP_API}/v1/payments/${paymentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!res.ok) {
    throw new Error(`Mercado Pago get payment failed: ${res.status} ${await res.text()}`)
  }

  return res.json() as Promise<{
    id: number
    status: string
    external_reference: string
    transaction_amount: number
    payer: { email: string }
  }>
}

// https://www.mercadopago.com.ar/developers/es/docs/your-integrations/notifications/webhooks#editor_5
export async function verifyWebhookSignature(params: {
  xSignature: string | null
  xRequestId: string | null
  dataId: string
}) {
  const secret = getEnv().MERCADOPAGO_WEBHOOK_SECRET
  if (!secret || !params.xSignature || !params.xRequestId) return false

  const parts = Object.fromEntries(
    params.xSignature.split(",").map((p) => {
      const [k, v] = p.split("=")
      return [k?.trim(), v?.trim()]
    })
  )
  const ts = parts.ts
  const hash = parts.v1
  if (!ts || !hash) return false

  const manifest = `id:${params.dataId};request-id:${params.xRequestId};ts:${ts};`

  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
  ])
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(manifest))
  const computedHex = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")

  return computedHex === hash
}
