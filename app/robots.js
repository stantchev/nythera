// app/robots.js — SERVER COMPONENT
// Next.js App Router serves this as /robots.txt automatically.
import { BASE_URL } from '@/lib/seo'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow:     '/',
        disallow:  [],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host:    BASE_URL,
  }
}
