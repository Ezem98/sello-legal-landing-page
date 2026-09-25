import { consultationTypes, type ConsultationTypeKey } from "./pricing"

export interface BookingContact {
  name: string
  email: string
  phone: string
  details: string
  consultationType: string
  date: string
  time: string
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-")
  return y && m && d ? `${d}/${m}/${y}` : iso
}

function planLabel(type: string) {
  const plan = consultationTypes[type as ConsultationTypeKey] as { label: string } | undefined
  return plan?.label ?? type
}

function whatsappLink(phone: string, name: string) {
  let digits = phone.replace(/\D/g, "").replace(/^0+/, "")
  if (digits.length < 8) return null
  if (!digits.startsWith("54")) digits = `549${digits.replace(/^15/, "")}`
  const text = `Hola ${name}! Te escribimos de Sello Legal por tu consulta.`
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
}

function contactList(b: BookingContact) {
  const wa = b.phone ? whatsappLink(b.phone, b.name.split(" ")[0]) : null
  return `<ul>
<li><strong>Nombre:</strong> ${escapeHtml(b.name)}</li>
<li><strong>Email:</strong> <a href="mailto:${escapeHtml(b.email)}">${escapeHtml(b.email)}</a></li>
<li><strong>Teléfono:</strong> ${escapeHtml(b.phone || "-")}${wa ? ` — <a href="${wa}">escribirle por WhatsApp</a>` : ""}</li>
<li><strong>Consulta:</strong> ${escapeHtml(planLabel(b.consultationType))}</li>
<li><strong>Fecha y hora elegidas:</strong> ${escapeHtml(formatDate(b.date))} a las ${escapeHtml(b.time)} hs</li>
<li><strong>Detalle:</strong> ${escapeHtml(b.details || "-").replace(/\n/g, "<br/>")}</li>
</ul>`
}

export interface SheetSaveResult {
  saved: boolean
  range?: string
  error?: string
}

export function buildPendingLeadEmail(b: BookingContact, sheet: SheetSaveResult) {
  const sheetNote = sheet.saved
    ? `<p style="color:#555">Guardada en la planilla de reservas${sheet.range ? ` (${escapeHtml(sheet.range)})` : ""}.</p>`
    : `<p><strong>ATENCIÓN: esta reserva NO se guardó en la planilla</strong> (${escapeHtml(sheet.error ?? "error desconocido")}). Copiá estos datos a mano y no la mandamos a pagar.</p>`
  return {
    subject: `${sheet.saved ? "" : "NO GUARDADA EN PLANILLA - "}Nueva reserva sin pagar: ${b.name}`,
    html: `<p>Alguien completó el formulario de reserva${sheet.saved ? " y fue redirigido a Mercado Pago. <strong>Todavía no hay pago confirmado</strong> — si no paga, es una buena oportunidad para contactarlo/a" : ""}:</p>
${contactList(b)}
${sheetNote}
${sheet.saved ? '<p>Si el pago se completa, te llega otro mail de "consulta confirmada" y se agenda en el calendario.</p>' : ""}`,
  }
}

export function buildFreeLeadEmail(
  lead: { name: string; email: string; phone: string; interest: string; details: string; source: string },
  sheet: SheetSaveResult
) {
  const wa = whatsappLink(lead.phone, lead.name.split(" ")[0])
  const sheetNote = sheet.saved
    ? `<p style="color:#555">Guardado en la hoja "Leads"${sheet.range ? ` (${escapeHtml(sheet.range)})` : ""}.</p>`
    : `<p><strong>ATENCIÓN: este lead NO se guardó en la planilla</strong> (${escapeHtml(sheet.error ?? "error desconocido")}). Copialo a mano.</p>`
  return {
    subject: `${sheet.saved ? "" : "NO GUARDADO EN PLANILLA - "}Nueva consulta gratuita: ${lead.name}`,
    html: `<p>Alguien pidió la <strong>consulta inicial gratuita de 15 minutos</strong>. Contactalo/a para coordinar día y hora:</p>
<ul>
<li><strong>Nombre:</strong> ${escapeHtml(lead.name)}</li>
<li><strong>Email:</strong> <a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></li>
<li><strong>Teléfono:</strong> ${escapeHtml(lead.phone)}${wa ? ` — <a href="${wa}">escribirle por WhatsApp</a>` : ""}</li>
<li><strong>Le interesa:</strong> ${escapeHtml(lead.interest || "-")}</li>
<li><strong>Su caso:</strong> ${escapeHtml(lead.details).replace(/\n/g, "<br/>")}</li>
<li><strong>Origen:</strong> ${escapeHtml(lead.source || "directo / orgánico")}</li>
</ul>
${sheetNote}`,
  }
}

export function buildClientConfirmationEmail(b: BookingContact, meetLink: string | null) {
  return {
    subject: "Confirmamos tu consulta - Sello Legal",
    html: `<p>Hola ${escapeHtml(b.name)},</p>
<p>Tu consulta de <strong>${escapeHtml(planLabel(b.consultationType))}</strong> quedó confirmada para el ${escapeHtml(formatDate(b.date))} a las ${escapeHtml(b.time)} hs.</p>
${
  meetLink
    ? `<p>Link de Google Meet: <a href="${escapeHtml(meetLink)}">${escapeHtml(meetLink)}</a></p>`
    : "<p>Te enviamos el link de la videollamada por este medio antes de la reunión.</p>"
}
<p>Cualquier duda, escribinos a legalsello@gmail.com.</p>
<p>Sello Legal</p>`,
  }
}

export function buildAdminConfirmationEmail(
  b: BookingContact,
  event: { meetLink: string | null; htmlLink: string | null; attendeeInvited: boolean }
) {
  const warnings: string[] = []
  if (!event.attendeeInvited) {
    warnings.push("Google no permitió enviar la invitación de calendario al cliente; solo recibió el mail de confirmación.")
  }
  if (!event.meetLink) {
    warnings.push("No se pudo generar el link de Google Meet: hay que enviárselo manualmente al cliente.")
  }
  return {
    subject: `Nueva consulta confirmada y pagada: ${b.name}`,
    html: `<p>Nueva consulta <strong>pagada y confirmada</strong>. Ya está agendada en el calendario con recordatorios (1 día y 1 hora antes).</p>
${contactList(b)}
${event.meetLink ? `<p>Meet: <a href="${escapeHtml(event.meetLink)}">${escapeHtml(event.meetLink)}</a></p>` : ""}
${event.htmlLink ? `<p><a href="${escapeHtml(event.htmlLink)}">Ver evento en Google Calendar</a></p>` : ""}
${warnings.length ? `<p><strong>Atención:</strong></p><ul>${warnings.map((w) => `<li>${escapeHtml(w)}</li>`).join("")}</ul>` : ""}`,
  }
}

export function buildAdminFailureEmail(b: BookingContact, errorMessage: string) {
  return {
    subject: `URGENTE: pago recibido pero no se pudo agendar - ${b.name}`,
    html: `<p><strong>Mercado Pago aprobó el pago pero falló el agendado automático.</strong> Hay que agendar y avisar al cliente manualmente (el sistema va a reintentar solo unas veces).</p>
${contactList(b)}
<p><strong>Error técnico:</strong> ${escapeHtml(errorMessage)}</p>`,
  }
}
