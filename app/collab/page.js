// app/collab/page.js — SERVER COMPONENT
// Hub page: curated space for all brand conceptual studies.
// Positioned as a gallery of ideas, not a services menu.
import CollabHubClient from './CollabHubClient'
import { BASE_URL } from '@/lib/seo'

export const metadata = {
  title: 'Concepts',
  description:
    'Selected conceptual explorations for fashion brands. Visual direction studies in motion, identity, and editorial language — by NYTHERA studio.',
  alternates: { canonical: `${BASE_URL}/collab` },
  openGraph: {
    title: 'Concepts — NYTHERA',
    description:
      'A curated space of brand-specific conceptual explorations. Visual direction, motion studies, identity research.',
    url: `${BASE_URL}/collab`,
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: 'NYTHERA Concepts' }],
  },
}

export default function CollabHubPage() {
  return <CollabHubClient />
}
