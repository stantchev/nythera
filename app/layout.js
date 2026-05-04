// app/layout.js — FINAL PRODUCTION VERSION
// ─────────────────────────────────────────────────────────────────────────────
// SEO: globalMetadata from lib/seo.js (title template, OG, Twitter, robots)
// JSON-LD: Organization + WebSite schema on every page
// Fonts: <link> tags (sandbox-safe). Swap to layout.vercel.js for next/font.
// Viewport: mobile-first, no user-scalable lock (accessibility requirement)
// ─────────────────────────────────────────────────────────────────────────────
import Nav from '@/components/Nav'
import JsonLd from '@/components/JsonLd'
import { globalMetadata, organizationSchema, websiteSchema } from '@/lib/seo'
import './globals.css'

export const metadata = globalMetadata

export const viewport = {
  themeColor:    '#0B0B0C',
  width:         'device-width',
  initialScale:  1,
  // Do NOT set maximumScale:1 — breaks accessibility (pinch-zoom)
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to font origin — reduces TTFB for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
        {/* Structured data — injected server-side, zero JS cost */}
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
