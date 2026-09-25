import { addSheetTab, appendSheetRow, updateSheetRow } from "@/lib/google"
import { getEnv } from "@/lib/cf-env"

const LEADS_TAB = "Leads"
const HEADERS = ["fecha", "nombre", "email", "telefono", "interes", "caso", "origen", "estado"]

export interface FreeLead {
  name: string
  email: string
  phone: string
  interest: string
  details: string
  source: string
}

function toRow(lead: FreeLead) {
  return [new Date().toISOString(), lead.name, lead.email, lead.phone, lead.interest, lead.details, lead.source, "nuevo"]
}

export async function appendFreeLead(lead: FreeLead): Promise<{ updatedRange: string }> {
  const spreadsheetId = getEnv().GOOGLE_SHEETS_BOOKINGS_ID
  if (!spreadsheetId) throw new Error("GOOGLE_SHEETS_BOOKINGS_ID no está configurado")

  const range = `${LEADS_TAB}!A:H`
  let result

  try {
    result = await appendSheetRow(spreadsheetId, range, toRow(lead))
  } catch (error) {
    // La pestaña "Leads" no existe todavía: se crea con encabezados y se reintenta una vez.
    if (!String(error).includes("Unable to parse range")) throw error
    await addSheetTab(spreadsheetId, LEADS_TAB)
    await updateSheetRow(spreadsheetId, `${LEADS_TAB}!A1:H1`, HEADERS)
    result = await appendSheetRow(spreadsheetId, range, toRow(lead))
  }

  if (!result) throw new Error("Google no está configurado")
  return { updatedRange: (result.updates?.updatedRange as string | undefined) ?? "" }
}
