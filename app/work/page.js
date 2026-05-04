// work/page.js — SERVER COMPONENT shell
// Exports metadata (requires Server Component).
// Delegates all rendering to WorkPageClient (Client Component).
import WorkPageClient from './WorkPageClient'

export const metadata = {
  title:       'Work & Portfolio',
  description: 'Selected editorial projects, brand identities, and campaign direction. Dark fashion creative work by NYTHERA agency.',
  alternates:  { canonical: 'https://nythera.com/work' },
}

export default function Page() {
  return <WorkPageClient />
}
