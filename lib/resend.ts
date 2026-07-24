import { getEnv } from "@/lib/cf-env"

const RESEND_API = "https://api.resend.com/emails"

export function isResendConfigured() {
  return !!getEnv().RESEND_API_KEY
}

export async function sendEmail(params: { to: string | string[]; subject: string; html: string; replyTo?: string }) {
  const env = getEnv()
  const apiKey = env.RESEND_API_KEY
  const from = env.RESEND_FROM_EMAIL || "no-reply@sello.legal"
  if (!apiKey) return null

  const res = await fetch(RESEND_API, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Sello Legal <${from}>`,
      to: Array.isArray(params.to) ? params.to : [params.to],
      subject: params.subject,
      html: params.html,
      reply_to: params.replyTo,
    }),
  })

  if (!res.ok) {
    throw new Error(`Resend send failed: ${res.status} ${await res.text()}`)
  }

  return res.json()
}
