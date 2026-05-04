// app/page.js — Server Component
import Hero from '@/components/Hero'
import About from '@/components/About'
import Concepts from '@/components/Concepts'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { routeMetadata } from '@/lib/seo'

export const metadata = {
  title:       routeMetadata.home.title,
  description: routeMetadata.home.description,
  alternates:  { canonical: routeMetadata.home.canonical },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Concepts />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  )
}
