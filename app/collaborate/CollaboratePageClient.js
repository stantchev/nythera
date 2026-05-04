'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const collaborationTypes = [
  {
    id: 'editorial',
    num: '01',
    title: 'Editorial Direction',
    description:
      'Full creative direction for your editorial campaign. Concept development, casting brief, location scouting, shoot direction, post-production oversight.',
    deliverables: ['Concept Document', 'Shot List', 'Creative Brief', 'Post Direction'],
    timeline: '8–12 weeks',
  },
  {
    id: 'collection',
    num: '02',
    title: 'Collection Concept',
    description:
      'A complete conceptual framework for an upcoming collection. Mood, material direction, silhouette language, colour constraints, and narrative architecture.',
    deliverables: ['Concept Deck', 'Material Palette', 'Silhouette Direction', 'Narrative Document'],
    timeline: '6–10 weeks',
  },
  {
    id: 'identity',
    num: '03',
    title: 'Brand Identity',
    description:
      'Visual identity systems for alternative fashion brands that refuse conventional aesthetics. Mark, typography, colour, compositional rules, and usage guidelines.',
    deliverables: ['Mark System', 'Type Framework', 'Colour Palette', 'Usage Guide'],
    timeline: '10–16 weeks',
  },
  {
    id: 'campaign',
    num: '04',
    title: 'Campaign Strategy',
    description:
      'Campaign architecture for brands entering new markets or repositioning. Platform-agnostic strategy built around visual language, not algorithmic convenience.',
    deliverables: ['Strategy Document', 'Visual Direction', 'Content Framework', 'Channel Guide'],
    timeline: '4–8 weeks',
  },
]

export default function CollaboratePageClient() {
  const [selectedType, setSelectedType] = useState(null)
  const [formState, setFormState] = useState({
    brand: '',
    contact: '',
    email: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production: send to API route or form service
    // For now: simulate submission
    setSubmitted(true)
  }

  return (
    <>
      <main className="min-h-screen bg-bg-primary pt-16 overflow-x-hidden">
        {/* ── Page Header ── */}
        <section className="relative py-32 px-6 text-center border-b border-border-subtle overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #C0C0C0 0px, transparent 1px, transparent 80px)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,0,0,0.05) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <motion.p className="label-tag mb-5" {...fadeUp(0)}>
            Limited Engagements
          </motion.p>
          <motion.h1
            className="section-title mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            {...fadeUp(0.1)}
          >
            Collaborate
          </motion.h1>
          <motion.div
            className="mx-auto bg-accent-red"
            style={{ height: '1px' }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '60px', opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          />
          <motion.p
            className="mt-6 text-text-secondary font-inter text-sm font-light max-w-lg mx-auto leading-relaxed"
            {...fadeUp(0.45)}
          >
            We accept a limited number of new collaborations per season. Every
            engagement is bespoke — no templates, no packages, no compromises.
          </motion.p>
        </section>

        {/* ── Collaboration Types ── */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <motion.div className="mb-14 text-center" {...fadeUp(0)}>
            <p className="label-tag mb-3">What We Offer</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              Engagement Types
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle">
            {collaborationTypes.map((type, i) => (
              <motion.div key={type.id} {...fadeUp(i * 0.1)}>
                <button
                  className={`card-hover w-full text-left p-8 min-h-[280px] flex flex-col justify-between border transition-colors duration-300 ${
                    selectedType === type.id
                      ? 'bg-bg-secondary border-accent-red'
                      : 'bg-bg-secondary border-transparent hover:border-border-dim'
                  }`}
                  onClick={() =>
                    setSelectedType(selectedType === type.id ? null : type.id)
                  }
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="font-mono text-accent-red"
                        style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
                      >
                        {type.num}
                      </span>
                      <div
                        className={`flex-1 h-px transition-colors duration-500 ${
                          selectedType === type.id ? 'bg-accent-red' : 'bg-border-dim'
                        }`}
                      />
                    </div>
                    <h3
                      className="font-cinzel text-text-primary mb-3"
                      style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                    >
                      {type.title}
                    </h3>
                    <p className="text-text-secondary font-inter text-sm font-light leading-relaxed">
                      {type.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {type.deliverables.map((d) => (
                      <span
                        key={d}
                        className="font-mono text-text-secondary border border-border-dim px-2 py-0.5"
                        style={{ fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                      >
                        {d}
                      </span>
                    ))}
                    <span
                      className="font-mono text-accent-red ml-auto self-end"
                      style={{ fontSize: '0.55rem', letterSpacing: '0.12em' }}
                    >
                      {type.timeline}
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Inquiry Form ── */}
        <section className="max-w-4xl mx-auto px-6 py-12 pb-32">
          <motion.div className="mb-14 text-center" {...fadeUp(0)}>
            <p className="label-tag mb-3">Step Forward</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              Begin an Inquiry
            </h2>
            <div className="mt-4 w-12 h-px bg-accent-red opacity-70 mx-auto" />
          </motion.div>

          {submitted ? (
            <motion.div
              className="text-center py-20 border border-border-subtle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-8 h-px bg-accent-red mx-auto mb-8" />
              <p className="font-cinzel text-text-primary mb-3" style={{ fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Inquiry Received
              </p>
              <p className="text-text-secondary font-inter text-sm font-light max-w-sm mx-auto leading-relaxed">
                We review every inquiry personally. If your work aligns with our current
                direction, you will hear from us within 7–10 business days.
              </p>
              <p className="mt-6 label-tag opacity-50">studio@nythera.com</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-0 border border-border-subtle divide-y divide-border-subtle"
              {...fadeUp(0.15)}
              noValidate
            >
              <FormField label="Brand Name" name="brand" value={formState.brand} onChange={handleChange} required />
              <FormField label="Contact Name" name="contact" value={formState.contact} onChange={handleChange} required />
              <FormField label="Email Address" name="email" type="email" value={formState.email} onChange={handleChange} required />

              {/* Collaboration type select */}
              <div className="flex flex-col md:flex-row">
                <label
                  htmlFor="type"
                  className="label-tag px-6 py-5 md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-border-subtle flex items-start pt-5"
                >
                  Collaboration Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formState.type}
                  onChange={handleChange}
                  className="flex-1 bg-transparent px-6 py-5 text-text-primary font-inter text-sm font-light focus:outline-none focus:bg-bg-secondary transition-colors duration-200 appearance-none"
                  style={{ color: formState.type ? '#EAEAEA' : '#A1A1AA' }}
                >
                  <option value="" disabled style={{ backgroundColor: '#141416' }}>Select a type</option>
                  {collaborationTypes.map((t) => (
                    <option key={t.id} value={t.id} style={{ backgroundColor: '#141416' }}>
                      {t.num} — {t.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col md:flex-row">
                <label
                  htmlFor="message"
                  className="label-tag px-6 py-5 md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-border-subtle flex items-start pt-5"
                >
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Describe your brand, the collaboration you have in mind, and what you're trying to say with your work."
                  className="flex-1 bg-transparent px-6 py-5 text-text-primary font-inter text-sm font-light focus:outline-none focus:bg-bg-secondary transition-colors duration-200 resize-none placeholder:text-text-secondary placeholder:opacity-40"
                  required
                />
              </div>

              {/* Submit */}
              <div className="px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p
                  className="font-mono text-text-secondary opacity-40"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  All inquiries reviewed personally. NDA available on request.
                </p>
                <button type="submit" className="btn-primary shrink-0">
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </motion.form>
          )}

          {/* Direct contact note */}
          <motion.p
            className="mt-10 text-center font-mono text-text-secondary opacity-30"
            style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            {...fadeUp(0.4)}
          >
            Prefer direct contact?{' '}
            <a
              href="mailto:studio@nythera.com"
              className="underline-reveal opacity-100 hover:text-text-primary transition-colors"
              style={{ opacity: 1 }}
            >
              studio@nythera.com
            </a>
          </motion.p>
        </section>
      </main>
      <Footer />
    </>
  )
}

function FormField({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div className="flex flex-col md:flex-row">
      <label
        htmlFor={name}
        className="label-tag px-6 py-5 md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-border-subtle flex items-center"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="flex-1 bg-transparent px-6 py-5 text-text-primary font-inter text-sm font-light focus:outline-none focus:bg-bg-secondary transition-colors duration-200 placeholder:text-text-secondary placeholder:opacity-30"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  )
}
