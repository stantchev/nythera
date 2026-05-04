'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

const concepts = [
  {
    id: '01',
    slug: 'nocturne',
    category: 'Editorial Series',
    title: 'Nocturne',
    subtitle: 'Between Midnight and Dawn',
    year: '2024',
    status: 'Active',
    description:
      'Nocturne was conceived in the hours that belong to no one. Shot across three consecutive nights in an abandoned 19th-century textile mill, the series interrogates the relationship between the body, fabric, and the darkness that surrounds both. Every image was captured without artificial light sources — only available darkness, punctuated by a single candle or the ambient bleed of a distant street lamp.',
    extended:
      'The resulting photographs are studies in negative space as much as they are fashion images. The garments — sourced from three independent gothic and alternative designers — become almost architectural in the low light, their silhouettes collapsing into the surrounding void and re-emerging as pure shape.',
    tags: ['Monochrome', 'Ambient', 'Night', 'Available Light', 'Silence'],
    palette: ['#0B0B0C', '#1A1A1C', '#8B0000', '#C0C0C0'],
    accent: '#8B0000',
  },
  {
    id: '02',
    slug: 'memento-mori',
    category: 'Collection Direction',
    title: 'Memento Mori',
    subtitle: 'Garments That Remember',
    year: '2024',
    status: 'Active',
    description:
      'Memento Mori begins with a single conviction: all fashion is a negotiation with time. The collection concept was developed alongside three alternative luxury brands, each asked to submit pieces that carried visible evidence of process — oxidized hardware, intentionally distressed fabric, hand-applied patina. The brief was not destruction for effect, but aging as honest craft.',
    extended:
      'The creative direction maps each piece against its material biography — where the leather was tanned, how long the lace was stored before cutting, what the oxidation process does to zinc versus brass. This is fashion as archaeology, not spectacle.',
    tags: ['Gothic', 'Tactile', 'Symbolic', 'Craft', 'Time'],
    palette: ['#141416', '#0D0D0F', '#5a0000', '#A1A1AA'],
    accent: '#5a0000',
  },
  {
    id: '03',
    slug: 'ashen-court',
    category: 'Brand Collaboration',
    title: 'Ashen Court',
    subtitle: 'Power in Grey',
    year: '2023',
    status: 'Completed',
    description:
      'Ashen Court was a collaboration language developed for alternative luxury brands that refuse the conventional vocabulary of power dressing. The directive: grey as dominance, not compromise. Tailoring with the precision of armour. Proportion used as psychological instrument.',
    extended:
      'The resulting creative framework — a set of editorial rules, colour constraints, casting guidelines, and compositional conventions — was licensed to two independent brands for their SS24 campaigns. Neither campaign references NYTHERA by name. That invisibility is intentional.',
    tags: ['Luxury', 'Power', 'Restraint', 'Tailoring', 'Grey'],
    palette: ['#111113', '#1C1C1F', '#C0C0C0', '#6A6A72'],
    accent: '#C0C0C0',
  },
  {
    id: '04',
    slug: 'ossuary',
    category: 'Full Collection',
    title: 'Ossuary',
    subtitle: 'A Taxonomy of Remains',
    year: '2023',
    status: 'Completed',
    description:
      'Ossuary was the first NYTHERA full-collection creative direction project. The concept emerged from a single image: the bone rooms of European ossuaries — spaces of profound calm, where death has been arranged into pattern and the overwhelming fact of it becomes, paradoxically, beautiful.',
    extended:
      'The collection brief called for structured silhouettes that referenced skeletal geometry without literalism. No skull prints, no bone-white garments for their own sake. Instead: the formal logic of an ossuary — everything in its correct place, every piece in relation to every other piece, the whole composing a system of quiet terror.',
    tags: ['Structure', 'Architecture', 'Dark', 'System', 'Geometry'],
    palette: ['#0C0C0E', '#181819', '#8B0000', '#E8E8E8'],
    accent: '#8B0000',
  },
  {
    id: '05',
    slug: 'sable',
    category: 'Editorial',
    title: 'Sable',
    subtitle: 'The Colour Black, Examined',
    year: '2023',
    status: 'Completed',
    description:
      'Sable was a deliberate act of restraint. The brief to every contributor: black garments only, white studio only, one model, no props. The challenge was to make twelve images that were visually distinct without breaking any of those rules. The result proved that within absolute constraint, invention becomes inevitable.',
    extended:
      'The series was subsequently published in three alternative fashion journals under a pseudonym. Its principles now inform how NYTHERA approaches any single-colour creative direction brief.',
    tags: ['Black', 'Constraint', 'Studio', 'Monochrome', 'Discipline'],
    palette: ['#0E0E10', '#050506', '#1A1A1C', '#EAEAEA'],
    accent: '#A1A1AA',
  },
  {
    id: '06',
    slug: 'the-quiet',
    category: 'Brand Identity',
    title: 'The Quiet',
    subtitle: 'Identity for the Unspoken',
    year: '2022',
    status: 'Completed',
    description:
      'The Quiet was a brand identity project for an alternative accessories label that refused to be named in this entry at their request. The brief was simple and almost impossible: build us an identity that does not speak, only implies. No taglines. No personality copy. Only visual logic.',
    extended:
      'The delivered system consisted of a mark, a typographic framework, a material palette, and a set of negative-space compositional rules. Every element of the identity is defined by what it does not include.',
    tags: ['Identity', 'Silence', 'System', 'Typography', 'NDA'],
    palette: ['#101012', '#1E1E21', '#4a4a50', '#C0C0C0'],
    accent: '#4a4a50',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function ConceptsPageClient() {
  const [active, setActive] = useState(null)

  return (
    <>
      <main className="min-h-screen bg-bg-primary pt-16 overflow-x-hidden">
        {/* ── Page Header ── */}
        <section className="relative py-32 px-6 text-center overflow-hidden border-b border-border-subtle">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #C0C0C0 0px, transparent 1px, transparent 80px)',
            }}
            aria-hidden="true"
          />
          <motion.p
            className="label-tag mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Creative Direction
          </motion.p>
          <motion.h1
            className="section-title mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Concepts
          </motion.h1>
          <motion.div
            className="mx-auto bg-accent-red"
            style={{ height: '1px' }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '60px', opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          />
          <motion.p
            className="mt-6 text-text-secondary font-inter text-sm font-light max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Each concept is a self-contained world with its own rules, palette, and
            creative logic. Explore the thinking behind the work.
          </motion.p>
        </section>

        {/* ── Concept List ── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="divide-y divide-border-subtle border-y border-border-subtle">
            {concepts.map((concept, i) => (
              <ConceptRow
                key={concept.id}
                concept={concept}
                index={i}
                isOpen={active === concept.id}
                onToggle={() => setActive(active === concept.id ? null : concept.id)}
              />
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-24 px-6 text-center border-t border-border-subtle">
          <p className="label-tag mb-6">Ready?</p>
          <h2 className="section-title mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Start a New Concept
          </h2>
          <Link href="/collaborate" className="btn-primary">
            <span>Begin Collaboration</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ConceptRow({ concept, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      custom={index * 0.05}
    >
      {/* Row header — always visible */}
      <button
        className="w-full text-left py-8 flex items-start gap-6 group cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {/* Number */}
        <span
          className="font-mono text-accent-red shrink-0 mt-1"
          style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
        >
          {concept.id}
        </span>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-5">
            <p className="label-tag mb-1">{concept.category}</p>
            <h2
              className="font-cinzel text-text-primary group-hover:text-accent-silver transition-colors duration-300"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {concept.title}
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-2 mt-1">
            {concept.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-text-secondary border border-border-dim px-2 py-0.5"
                style={{ fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="md:col-span-2 text-right hidden md:block">
            <span
              className="font-mono text-text-secondary"
              style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}
            >
              {concept.year}
            </span>
            <br />
            <span
              className="font-mono mt-1 inline-block"
              style={{
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: concept.status === 'Active' ? '#8B0000' : '#A1A1AA',
              }}
            >
              {concept.status}
            </span>
          </div>
          <div className="md:col-span-1 flex justify-end items-start pt-1">
            <span
              className="font-mono text-text-secondary group-hover:text-accent-silver transition-colors duration-300"
              style={{ fontSize: '1rem' }}
            >
              {isOpen ? '−' : '+'}
            </span>
          </div>
        </div>
      </button>

      {/* Expanded detail */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-12 pl-10 md:pl-[calc(0.6rem+1.5rem+24px)] grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Palette swatches */}
              <div className="md:col-span-2 flex gap-2">
                {concept.palette.map((color, ci) => (
                  <div
                    key={ci}
                    className="w-6 h-16 border border-border-subtle"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>

              {/* Text */}
              <div className="md:col-span-7 space-y-4">
                <p className="text-text-primary font-inter text-sm leading-relaxed font-light">
                  {concept.description}
                </p>
                <p className="text-text-secondary font-inter text-sm leading-relaxed font-light">
                  {concept.extended}
                </p>
              </div>

              {/* Tags + link */}
              <div className="md:col-span-3">
                <p className="label-tag mb-3">All Tags</p>
                <div className="flex flex-col gap-1.5">
                  {concept.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-text-secondary"
                      style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                    >
                      — {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/collaborate" className="btn-ghost" style={{ padding: '0.6rem 1.2rem', fontSize: '0.55rem' }}>
                    Inquire About This Concept
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
