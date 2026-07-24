import { type NextRequest, NextResponse } from "next/server"
import { isResendConfigured, sendEmail } from "@/lib/resend"

export const runtime = "edge"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = (await request.json()) as {
      name?: string
      email?: string
      message?: string
    }

    if (!name?.trim() || !email || !EMAIL_RE.test(email) || !message?.trim()) {
      return NextResponse.json({ success: false, message: "Datos incompletos" }, { status: 400 })
    }

    if (isResendConfigured()) {
      await sendEmail({
        to: "legalsello@gmail.com",
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong></p><p>${message.replace(/\n/g, "<br/>")}</p>`,
        replyTo: email,
      })
    } else {
      console.log("Mensaje de contacto (Resend no configurado):", { name, email, message })
    }

    return NextResponse.json({ success: true, message: "Mensaje enviado" })
  } catch (error) {
    console.error("Error en contact-message:", error)
    return NextResponse.json({ success: false, message: "Error al enviar el mensaje" }, { status: 500 })
  }
}
