export const consultationTypes = {
  "consulta-inicial": { label: "Consulta Inicial", minutes: 45, price: 50000 },
  "propiedad-intelectual": { label: "Propiedad Intelectual", minutes: 45, price: 50000 },
  compliance: { label: "Compliance", minutes: 45, price: 50000 },
  "terminos-condiciones": { label: "Términos y Condiciones", minutes: 45, price: 50000 },
  "derecho-consumidor": { label: "Derecho del Consumidor", minutes: 45, price: 50000 },
} as const

export type ConsultationTypeKey = keyof typeof consultationTypes

export function isConsultationTypeKey(value: string): value is ConsultationTypeKey {
  return value in consultationTypes
}

const WEEKDAY_TIMES = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
const SATURDAY_TIMES = ["08:00", "09:00", "10:00", "11:00"]

export const bookingSlots = {
  timezone: "America/Argentina/Buenos_Aires",
  workDays: [1, 2, 3, 4, 5, 6] as number[], // Lun-Sáb (0=Dom)
  pendingHoldMinutes: 20,
}

export function getTimesForWeekday(weekday: number): string[] {
  if (weekday >= 1 && weekday <= 5) return WEEKDAY_TIMES
  if (weekday === 6) return SATURDAY_TIMES
  return []
}
