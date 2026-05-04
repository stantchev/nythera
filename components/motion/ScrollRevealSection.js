'use client'

// components/motion/ScrollRevealSection.js
// ─────────────────────────────────────────────────────────────────────────────
// Wraps any section with natural stagger scroll reveals.
// Uses the useStaggerReveal hook internally.
// Children tagged with data-reveal="item|headline|fade|scaleIn"
// are automatically animated as their variant type.
//
// Usage — declarative (child variants):
//   <ScrollRevealSection stagger={0.12}>
//     <motion.h2 variants={headline}>Title</motion.h2>
//     <motion.p  variants={item}>Body</motion.p>
//   </ScrollRevealSection>
//
// Usage — passthrough (just the container + viewport trigger):
//   <ScrollRevealSection as="article" margin="-60px">
//     {children}
//   </ScrollRevealSection>
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'

export default function ScrollRevealSection({
  children,
  as            = 'section',
  stagger       = 0.1,
  duration      = 0.75,
  y             = 24,
  delayChildren = 0,
  margin        = '-80px',
  style,
  className,
  ...rest
}) {
  const { container } = useStaggerReveal({ stagger, duration, y, delayChildren })

  const Tag = motion[as] ?? motion.section

  return (
    <Tag
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// ── Named exports of variant types for use alongside ScrollRevealSection ──
// import { ScrollRevealSection, itemVariant, headlineVariant } from '...'
export function itemVariant(overrides = {}) {
  return {
    hidden:  { opacity: 0, y: overrides.y ?? 24 },
    visible: {
      opacity: 1,
      y:       0,
      transition: {
        duration: overrides.duration ?? 0.75,
        ease:     overrides.ease ?? [0.25, 0.46, 0.45, 0.94],
      },
    },
  }
}

export function headlineVariant(overrides = {}) {
  return {
    hidden:  { opacity: 0, y: overrides.y ?? 34 },
    visible: {
      opacity: 1,
      y:       0,
      transition: {
        duration: overrides.duration ?? 0.9,
        ease:     overrides.ease ?? [0.16, 1, 0.3, 1],
      },
    },
  }
}

export function fadeVariant(overrides = {}) {
  return {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: overrides.duration ?? 0.7,
        ease:     'easeOut',
      },
    },
  }
}

export function scaleInVariant(overrides = {}) {
  return {
    hidden:  { opacity: 0, scaleX: 0, transformOrigin: overrides.origin ?? 'left' },
    visible: {
      opacity: 1,
      scaleX:  1,
      transition: {
        duration: overrides.duration ?? 0.9,
        ease:     overrides.ease ?? [0.25, 0.46, 0.45, 0.94],
      },
    },
  }
}
