import { type NextRequest, NextResponse } from "next/server"
import { appendFreeLead } from "@/lib/leads-sheet"
import { isResendConfigured, sendEmail } from "@/lib/resend"
import { buildFreeLeadEmail, type SheetSaveResult } from "@/lib/email-templates"
import { siteConfig } from "@/lib/site-config"

export const runtime = "edge"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX = { name: 120, email: 200, phone: 40, interest: 80, details: 3000, source: 300 }

interface Body {
  name?: string
  email?: string
  phone?: string
  interest?: string
  details?: string
  source?: string
  website?: string
}

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "")

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body

    // Campo trampa para bots: si viene completo, se responde OK sin procesar nada.
    if (body.website) return NextResponse.json({ success: true })

    const lead = {
      name: clean(body.name, MAX.name),
      email: clean(body.email, MAX.email),
      phone: clean(body.phone, MAX.phone),
      interest: clean(body.interest, MAX.interest),
      details: clean(body.details, MAX.details),
      source: clean(body.source, MAX.source),
    }

    if (!lead.name || !EMAIL_RE.test(lead.email) || lead.phone.replace(/\D/g, "").length < 8 || !lead.details) {
      return NextResponse.json({ success: false, message: "Completá todos los datos para continuar." }, { status: 400 })
    }

    let sheet: SheetSaveResult
    try {
      const { updatedRange } = await appendFreeLead(lead)
      sheet = { saved: true, range: updatedRange }
    } catch (sheetError) {
      console.error("No se pudo guardar el lead en la planilla:", sheetError)
      sheet = { saved: false, error: sheetError instanceof Error ? sheetError.message.slice(0, 300) : String(sheetError) }
    }

    let emailed = false
    if (isResendConfigured()) {
      try {
        await sendEmail({ to: siteConfig.email, replyTo: lead.email, ...buildFreeLeadEmail(lead, sheet) })
        emailed = true
      } catch (mailError) {
        console.error("No se pudo enviar el aviso de consulta gratuita:", mailError)
      }
    }

    // El lead se considera recibido si quedó en la planilla o llegó por mail.
    if (!sheet.saved && !emailed) {
      return NextResponse.json({ success: false, message: "No pudimos registrar tu consulta." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error en free-consultation:", error)
    return NextResponse.json({ success: false, message: "No pudimos registrar tu consulta." }, { status: 500 })
  }
}
