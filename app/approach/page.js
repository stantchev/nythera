// approach/page.js — SERVER COMPONENT shell
// Exports metadata (requires Server Component).
// Delegates all rendering to ApproachPageClient (Client Component).
import ApproachPageClient from './ApproachPageClient'

export const metadata = {
  title:       'Our Approach',
  description: 'NYTHERA creative methodology: immersion, concept architecture, production, refinement. How we build dark fashion editorial campaigns and brand identities.',
  alternates:  { canonical: 'https://nythera.com/approach' },
}

export default function Page() {
  return <ApproachPageClient />
}
