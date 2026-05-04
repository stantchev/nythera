// app/collaborate/page.js — Server Component
import CollaboratePageClient from './CollaboratePageClient'

export const metadata = {
  title: 'Collaborate',
  description:
    'Begin a creative collaboration with NYTHERA. We work with a limited number of alternative fashion brands each season.',
}

export default function CollaboratePage() {
  return <CollaboratePageClient />
}
