import type { Metadata } from 'next'
import { Lora, Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sello Legal | Consultoría Legal Boutique',
  description:
    'Consultoría legal boutique para emprendedores y empresas digitales. Propiedad intelectual, compliance, derecho del consumidor y términos y condiciones.',
  generator: 'v0.dev',
  openGraph: {
    title: 'Sello Legal | Consultoría Legal Boutique',
    description:
      'Protegemos tus ideas, respaldamos tu negocio. Consultoría legal boutique para emprendedores.',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${lora.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
      {/* Google tag (gtag.js) - seguimiento de conversiones de Google Ads */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18347516303" strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18347516303');
        `}
      </Script>
    </html>
  )
}
