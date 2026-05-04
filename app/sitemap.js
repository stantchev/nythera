// app/sitemap.js — SERVER COMPONENT
// Next.js App Router automatically serves this as /sitemap.xml
// Vercel edge CDN caches it. Zero runtime cost.
import { getBrandSlugs } from '@/lib/brandThemes'
import { BASE_URL } from '@/lib/seo'

export default function sitemap() {
  const brandSlugs = getBrandSlugs()
  const now = new Date().toISOString()

  const staticRoutes = [
    {
      url:              BASE_URL,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         1.0,
    },
    {
      url:              `${BASE_URL}/collab`,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         0.95,
    },
    {
      url:              `${BASE_URL}/work`,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         0.9,
    },
    {
      url:              `${BASE_URL}/studio`,
      lastModified:     now,
      changeFrequency:  'yearly',
      priority:         0.8,
    },
    {
      url:              `${BASE_URL}/approach`,
      lastModified:     now,
      changeFrequency:  'yearly',
      priority:         0.7,
    },
  ]

  const brandRoutes = brandSlugs.map(brand => ({
    url:              `${BASE_URL}/collab/${brand}`,
    lastModified:     now,
    changeFrequency:  'yearly',
    priority:         0.75,
  }))

  return [...staticRoutes, ...brandRoutes]
}
