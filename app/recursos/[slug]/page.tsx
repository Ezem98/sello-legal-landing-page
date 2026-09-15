import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { blogPosts, getBlogPost } from "@/lib/blog-posts"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Sello Legal`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloatButton />
      <Header />

      <article className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Link href="/recursos" className="inline-flex items-center gap-2 text-terracotta font-medium hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Volver a Recursos
          </Link>

          <p className="text-xs uppercase tracking-wide text-gold-600 font-semibold mb-3">{post.dateDisplay}</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-green-700 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="space-y-5">
            {post.body.map((block, i) => {
              if (block.type === "h3") {
                return (
                  <h2 key={i} className="text-xl font-serif font-semibold text-green-700 pt-4">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="space-y-2 list-disc pl-5">
                    {block.items?.map((item) => (
                      <li key={item.slice(0, 30)} className="text-charcoal/80 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-charcoal/80 leading-relaxed">
                  {block.text}
                </p>
              )
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-gold-200">
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-terracotta"
            >
              Publicado originalmente en{" "}
              {post.sourceUrl.includes("linkedin.com") ? "LinkedIn" : "El Newsletter de Sello Legal (Substack)"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
