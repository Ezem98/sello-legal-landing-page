import { SignJWT, importPKCS8 } from "jose"

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token"
const SCOPES = ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/spreadsheets"]

function getCreds() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
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

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(params.calendarId)}/events?conferenceDataVersion=1&sendUpdates=all`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        summary: params.summary,
        description: params.description,
        start: { dateTime: params.startISO, timeZone: "America/Argentina/Buenos_Aires" },
        end: { dateTime: params.endISO, timeZone: "America/Argentina/Buenos_Aires" },
        attendees: [{ email: params.attendeeEmail }],
        conferenceData: {
          createRequest: { requestId: crypto.randomUUID(), conferenceSolutionKey: { type: "hangoutsMeet" } },
        },
      }),
    }
  )

  if (!res.ok) {
    throw new Error(`Google calendar insert failed: ${res.status} ${await res.text()}`)
  }

  const data = await res.json()
  return {
    eventId: data.id as string,
    meetLink: (data.hangoutLink as string | undefined) ?? null,
    htmlLink: data.htmlLink as string,
  }
}

// ---- Sheets ----

export async function appendSheetRow(spreadsheetId: string, range: string, values: (string | number)[]) {
  const token = await getAccessToken()
  if (!token) return null

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED`,
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
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`,
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
