// app/collab/[brand]/page.js — SERVER COMPONENT
// generateStaticParams → Vercel pre-renders all 5 brand pages at build time.
// generateMetadata → unique SEO metadata per brand from lib/seo.js
// JSON-LD → CreativeWork schema injected per brand page
import { notFound } from 'next/navigation'
import { brandThemes, getBrandSlugs } from '@/lib/brandThemes'
import { buildBrandMetadata, brandCollabSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import BrandPageClient from './BrandPageClient'

export async function generateStaticParams() {
  return getBrandSlugs().map(brand => ({ brand }))
}

export async function generateMetadata({ params }) {
  const { brand } = await params
  const theme = brandThemes[brand]
  if (!theme) return {}
  return buildBrandMetadata(brand, theme)
}

export default async function BrandPage({ params }) {
  const { brand } = await params
  const theme = brandThemes[brand]
  if (!theme) notFound()

  return (
    <>
      <JsonLd schema={brandCollabSchema(brand, theme)} />
      <BrandPageClient brand={brand} theme={theme} />
    </>
  )
}
