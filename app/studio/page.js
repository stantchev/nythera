// studio/page.js — SERVER COMPONENT shell
// Exports metadata (requires Server Component).
// Delegates all rendering to StudioPageClient (Client Component).
import StudioPageClient from './StudioPageClient'

export const metadata = {
  title:       'Start a Project',
  description: 'Start a brand collaboration with NYTHERA. Editorial direction, brand identity, and campaign architecture for alternative fashion. Limited engagements per season.',
  alternates:  { canonical: 'https://nythera.com/studio' },
}

export default function Page() {
  return <StudioPageClient />
}
