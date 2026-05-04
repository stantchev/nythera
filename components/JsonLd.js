// components/JsonLd.js — SERVER COMPONENT
// Injects JSON-LD structured data as a <script type="application/ld+json"> tag.
// Must be a Server Component — renders into <head> via Next.js App Router.
// Never needs "use client" — pure server-side HTML output.

export default function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
