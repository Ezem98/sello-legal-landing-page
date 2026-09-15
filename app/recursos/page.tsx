import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Recursos | Sello Legal",
  description:
    "Artículos sobre propiedad intelectual, marcas, derechos de autor y derecho para emprendedores, escritos por el equipo de Sello Legal.",
}

export default function RecursosPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloatButton />
      <Header />

      <section className="py-16 px-4 bg-cream-50">
        <div className="container mx-auto text-center max-w-2xl">
          <Badge className="mb-6 bg-gold text-white border-0 px-6 py-2">Recursos</Badge>
          <h1 className="text-4xl font-serif font-bold mb-4 text-green-700">El Newsletter de Sello Legal</h1>
          <p className="text-xl text-charcoal/70">
            Derecho explicado en criollo, para emprendedores y empresas digitales.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl grid gap-6">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/recursos/${post.slug}`} className="group">
              <Card className="border border-gold-200 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wide text-gold-600 font-semibold">
                      {post.dateDisplay}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-charcoal/40 group-hover:text-terracotta transition-colors" />
                  </div>
                  <h2 className="text-xl font-serif font-semibold text-green-700 mb-2">{post.title}</h2>
                  <p className="text-charcoal/70">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
