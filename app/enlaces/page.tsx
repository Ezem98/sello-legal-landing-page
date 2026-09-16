import type { Metadata } from "next"
import { LinkHub } from "@/components/sections/link-hub"

export const metadata: Metadata = {
  title: "Enlaces | Sello Legal",
  description: "Todos los enlaces de Sello Legal: agendá una consulta, contactanos y conocé nuestros servicios.",
}

export default function EnlacesPage() {
  return <LinkHub />
}
