import { type NextRequest, NextResponse } from "next/server"
import { appendSheetRow, isGoogleConfigured } from "@/lib/google"
import { isResendConfigured, sendEmail } from "@/lib/resend"

export const runtime = "edge"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as { email?: string }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_WAITLIST_ID

    if (isGoogleConfigured() && spreadsheetId) {
      await appendSheetRow(spreadsheetId, "Lista de Espera!A:B", [email, new Date().toISOString()])
    }

    if (isResendConfigured()) {
      await sendEmail({
        to: "legalsello@gmail.com",
        subject: "Nuevo interesado en Guías - Sello Legal",
        html: `<p>Nuevo email en la lista de espera de guías: <strong>${email}</strong></p>`,
      })
    }

    return NextResponse.json({ success: true, message: "Listo, te vamos a avisar." })
  } catch (error) {
    console.error("Error en guide-waitlist:", error)
    return NextResponse.json({ success: false, message: "Error al registrar el email" }, { status: 500 })
  }
}
