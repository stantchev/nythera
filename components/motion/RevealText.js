'use client'

// components/motion/RevealText.js
// ─────────────────────────────────────────────────────────────────────────────
// Splits text into words or characters and animates each with a stagger.
// Produces the "editorial reveal" effect — premium, cinematic, controlled.
// Uses clip-path + translateY — GPU composited, no layout impact.
//
// Usage:
//   <RevealText tag="h1" delay={0.5} stagger={0.04} className="hero-logo">
//     NYTHERA
//   </RevealText>
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'

const CHAR_VARIANTS = {
  hidden: {
    y:       '110%',
    opacity: 0,
  },
  visible: (i) => ({
    y:       '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      delay:    i,
      ease:     [0.16, 1, 0.3, 1],   // expo ease out — crisp editorial
    },
  }),
}

const WORD_VARIANTS = {
  hidden: {
    y:       28,
    opacity: 0,
  },
  visible: (i) => ({
    y:       0,
    opacity: 1,
    transition: {
      duration: 0.75,
      delay:    i,
      ease:     [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function RevealText({
  children,
  tag       = 'p',
  mode      = 'words',    // 'words' | 'chars'
  delay     = 0,
  stagger   = 0.06,
  className,
  style,
  animate   = true,        // false = skip animation, render plain
}) {
  const Tag = tag

  if (!animate || typeof children !== 'string') {
    return <Tag className={className} style={style}>{children}</Tag>
  }

  const units = mode === 'chars'
    ? children.split('')
    : children.split(' ')

  const variants = mode === 'chars' ? CHAR_VARIANTS : WORD_VARIANTS

  return (
    <Tag
      className={className}
      style={{
        ...style,
        display:    'flex',
        flexWrap:   'wrap',
        overflow:   mode === 'chars' ? 'hidden' : undefined,
        columnGap:  mode === 'words' ? '0.25em' : undefined,
        lineHeight: style?.lineHeight ?? 1,
      }}
      aria-label={children}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          style={{
            display:  'inline-block',
            overflow: 'hidden',
            lineHeight: 'inherit',
          }}
        >
          <motion.span
            display="inline-block"
            style={{ display: 'inline-block' }}
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={delay + i * stagger}
          >
            {unit === ' ' ? '\u00A0' : unit}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
