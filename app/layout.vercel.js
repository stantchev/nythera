// app/layout.vercel.js — VERCEL PRODUCTION VERSION (next/font)
// Copy to app/layout.js before deploying: cp app/layout.vercel.js app/layout.js
import { Cinzel, Inter, JetBrains_Mono } from 'next/font/google'
import Nav from '@/components/Nav'
import JsonLd from '@/components/JsonLd'
import { globalMetadata, organizationSchema, websiteSchema } from '@/lib/seo'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cinzel-var',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter-var',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-jetbrains-var',
  display: 'swap',
})

export const metadata = globalMetadata

export const viewport = {
  themeColor:   '#0B0B0C',
  width:        'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd schema={organizationSchema()} />
        <JsonLd schema={websiteSchema()} />
      </head>
      <body suppressHydrationWarning>
        <Nav />
        {children}
      </body>
    </html>
  )
}
