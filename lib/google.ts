import { SignJWT, importPKCS8 } from "jose"
import { getEnv } from "@/lib/cf-env"

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token"
const SCOPES = ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/spreadsheets"]

function getCreds() {
  const env = getEnv()
  const email = env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  if (!email || !privateKey) return null
  return { email, privateKey: privateKey.replace(/\\n/g, "\n") }
}

export function isGoogleConfigured() {
  return getCreds() !== null
}

let cachedToken: { token: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string | null> {
  const creds = getCreds()
  if (!creds) return null

  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.token
  }

  const key = await importPKCS8(creds.privateKey, "RS256")
  const now = Math.floor(Date.now() / 1000)
  const jwt = await new SignJWT({ scope: SCOPES.join(" ") })
    .setProtectedHeader({ alg: "RS256", typ: "JWT" })
    .setIssuer(creds.email)
    .setSubject(creds.email)
    .setAudience(GOOGLE_TOKEN_URL)
    .setIssuedAt(now)
    .setExpirationTime(now + 3600)
    .sign(key)

  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  })

  if (!res.ok) {
    throw new Error(`Google OAuth token exchange failed: ${res.status} ${await res.text()}`)
  }

  const data = (await res.json()) as { access_token: string; expires_in: number }
  cachedToken = { token: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 }
  return cachedToken.token
}

// ---- Calendar ----

export async function getBusyIntervals(calendarId: string, timeMinISO: string, timeMaxISO: string) {
  const token = await getAccessToken()
  if (!token) return null

  const res = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ timeMin: timeMinISO, timeMax: timeMaxISO, items: [{ id: calendarId }] }),
  })

  if (!res.ok) {
    throw new Error(`Google freebusy failed: ${res.status} ${await res.text()}`)
  }

  const data = await res.json()
  return (data.calendars?.[calendarId]?.busy ?? []) as { start: string; end: string }[]
}

export async function createCalendarEvent(params: {
  calendarId: string
  summary: string
  description: string
  startISO: string
  endISO: string
  attendeeEmail: string
}) {
  const token = await getAccessToken()
  if (!token) throw new Error("Google no está configurado")

  const base = {
    summary: params.summary,
    description: params.description,
    start: { dateTime: params.startISO, timeZone: "America/Argentina/Buenos_Aires" },
    end: { dateTime: params.endISO, timeZone: "America/Argentina/Buenos_Aires" },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 24 * 60 },
        { method: "email", minutes: 60 },
        { method: "popup", minutes: 60 },
      ],
    },
  }
  const conference = {
    conferenceData: {
      createRequest: { requestId: crypto.randomUUID(), conferenceSolutionKey: { type: "hangoutsMeet" } },
    },
  }

  // Las cuentas de servicio suelen tener prohibido invitar asistentes o crear Meet en calendarios
  // personales: si Google rechaza, reintentamos con menos funciones para no perder el evento.
  const attempts = [
    { body: { ...base, attendees: [{ email: params.attendeeEmail }], ...conference }, query: "conferenceDataVersion=1&sendUpdates=all", invited: true },
    { body: { ...base, ...conference }, query: "conferenceDataVersion=1", invited: false },
    { body: base, query: "", invited: false },
  ]

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(params.calendarId)}/events`
  let lastError = ""

  for (const attempt of attempts) {
    const res = await fetch(attempt.query ? `${url}?${attempt.query}` : url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(attempt.body),
    })

    if (res.ok) {
      const data = await res.json()
      return {
        eventId: data.id as string,
        meetLink: (data.hangoutLink as string | undefined) ?? null,
        htmlLink: (data.htmlLink as string | undefined) ?? null,
        attendeeInvited: attempt.invited,
      }
    }

    lastError = `${res.status} ${await res.text()}`
    console.error("Google calendar insert falló, se reintenta con menos opciones:", lastError)
    if (res.status !== 400 && res.status !== 403) break
  }

  throw new Error(`Google calendar insert failed: ${lastError}`)
}

// ---- Sheets ----

export async function appendSheetRow(spreadsheetId: string, range: string, values: (string | number)[]) {
  const token = await getAccessToken()
  if (!token) return null

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [values] }),
    }
  )

  if (!res.ok) {
    throw new Error(`Google sheets append failed: ${res.status} ${await res.text()}`)
  }

  return res.json()
}

export async function addSheetTab(spreadsheetId: string, title: string) {
  const token = await getAccessToken()
  if (!token) return null

  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ requests: [{ addSheet: { properties: { title } } }] }),
  })

  if (!res.ok) {
    throw new Error(`Google sheets addSheet failed: ${res.status} ${await res.text()}`)
  }

  return res.json()
}

export async function getSpreadsheetMeta(spreadsheetId: string) {
  const token = await getAccessToken()
  if (!token) return null

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=properties.title,sheets.properties(title,gridProperties)`,
    { headers: { Authorization: `Bearer ${token}` } }
  )

  if (!res.ok) {
    throw new Error(`Google sheets meta failed: ${res.status} ${await res.text()}`)
  }

  return (await res.json()) as {
    properties?: { title?: string }
    sheets?: { properties?: { title?: string; gridProperties?: { rowCount?: number; columnCount?: number } } }[]
  }
}

export async function getSheetValues(spreadsheetId: string, range: string) {
  const token = await getAccessToken()
  if (!token) return null

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}`,
    { headers: { Authorization: `Bearer ${token}` } }
  )

  if (!res.ok) {
    throw new Error(`Google sheets get failed: ${res.status} ${await res.text()}`)
  }

  const data = await res.json()
  return (data.values ?? []) as string[][]
}

export async function updateSheetRow(spreadsheetId: string, range: string, values: (string | number)[]) {
  const token = await getAccessToken()
  if (!token) return null

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=RAW`,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [values] }),
    }
  )

  if (!res.ok) {
    throw new Error(`Google sheets update failed: ${res.status} ${await res.text()}`)
  }

  return res.json()
}
