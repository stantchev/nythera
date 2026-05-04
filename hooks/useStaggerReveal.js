'use client'

// hooks/useStaggerReveal.js
// ─────────────────────────────────────────────────────────────────────────────
// Returns Framer Motion variant configs for a container + each child.
// Produces natural stagger reveals with eased timing — not uniform delays.
// The "natural" feel comes from an ease curve on the stagger itself.
//
// Usage:
//   const { container, item } = useStaggerReveal({ stagger: 0.12, duration: 0.75 })
//   <motion.ul variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//     {items.map(i => <motion.li variants={item}>...</motion.li>)}
//   </motion.ul>
// ─────────────────────────────────────────────────────────────────────────────

export function useStaggerReveal({
  stagger  = 0.1,
  duration = 0.75,
  y        = 24,
  ease     = [0.25, 0.46, 0.45, 0.94],
  delayChildren = 0,
} = {}) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren:  stagger,
        delayChildren,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease },
    },
  }

  // Headline variant — slightly slower, more emphasis
  const headline = {
    hidden: { opacity: 0, y: y * 1.4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration * 1.15, ease },
    },
  }

  // Fade-only variant — for supporting text
  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: duration * 0.9, ease: 'easeOut' },
    },
  }

  // Scale-in variant — for rules, decorative elements
  const scaleIn = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: duration * 1.1, ease },
    },
  }

  return { container, item, headline, fade, scaleIn }
}
