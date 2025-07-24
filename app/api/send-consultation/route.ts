import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { consultationType, selectedDate, selectedTime, name, email, phone, consultationDetails } = body

    // Crear el contenido del email
    const emailContent = `
Nueva Consulta Agendada - Sello Legal

Detalles de la consulta:
- Tipo de consulta: ${consultationType}
- Fecha: ${selectedDate}
- Hora: ${selectedTime}
- Nombre: ${name}
- Email: ${email}
- Teléfono: ${phone}
- Descripción: ${consultationDetails}

---
Este email fue generado automáticamente desde el formulario web de Sello Legal.
    `

    // Crear datos para Excel (CSV format)
    const csvData = `"${new Date().toISOString()}","${consultationType}","${selectedDate}","${selectedTime}","${name}","${email}","${phone}","${consultationDetails}"`

    // Aquí integrarías con un servicio de email como Resend, SendGrid, etc.
    // Por ahora, simularemos el envío

    // Ejemplo con fetch a un servicio de email (necesitarías configurar las credenciales)
    /*
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@sellolegal.com.ar',
        to: 'legalsello@gmail.com',
        subject: 'Nueva Consulta Agendada - Sello Legal',
        text: emailContent,
        attachments: [
          {
            filename: `consulta-${Date.now()}.csv`,
            content: Buffer.from(`Fecha,Tipo,Fecha Consulta,Hora,Nombre,Email,Teléfono,Descripción\n${csvData}`).toString('base64'),
            type: 'text/csv',
          }
        ]
      }),
    })
    */

    // Simulación de respuesta exitosa
    console.log("Consulta recibida:", body)
    console.log("CSV Data:", csvData)

    return NextResponse.json({
      success: true,
      message: "Consulta agendada exitosamente. Te contactaremos pronto.",
    })
  } catch (error) {
    console.error("Error al procesar la consulta:", error)
    return NextResponse.json({ success: false, message: "Error al procesar la consulta" }, { status: 500 })
  }
}
