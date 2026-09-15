import type { Metadata } from "next"
import { ServicePage } from "@/components/sections/service-page"
import { servicePages } from "@/lib/service-pages"

const content = servicePages["registro-de-marcas"]

export const metadata: Metadata = {
  title: `${content.title} | Sello Legal`,
  description: content.metaDescription,
}

export default function RegistroDeMarcasPage() {
  return <ServicePage content={content} />
}
