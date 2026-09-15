import type { Metadata } from "next"
import { ServicePage } from "@/components/sections/service-page"
import { servicePages } from "@/lib/service-pages"

const content = servicePages["derechos-de-autor"]

export const metadata: Metadata = {
  title: `${content.title} | Sello Legal`,
  description: content.metaDescription,
}

export default function DerechosDeAutorPage() {
  return <ServicePage content={content} />
}
