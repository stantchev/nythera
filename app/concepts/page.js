// app/concepts/page.js — Server Component
import ConceptsPageClient from './ConceptsPageClient'

export const metadata = {
  title: 'Concepts',
  description:
    'Explore NYTHERA editorial concepts — complete creative worlds built around darkness, craft, and alternative fashion vision.',
}

export default function ConceptsPage() {
  return <ConceptsPageClient />
}
