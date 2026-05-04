// lib/microEmotions.js
// ─────────────────────────────────────────────────────────────────────────────
// Per-brand micro-emotion layer. Each brand has a distinct motion personality
// expressed through: particle behaviour, transition timing, hover feel, and
// ambient animation character.
//
// These configs are consumed by:
//   - BrandAmbience.js   (ambient particle / atmosphere layer)
//   - BrandPageClient.js (transition + hover overrides)
//   - MagneticButton.js  (per-brand magnetic strength)
// ─────────────────────────────────────────────────────────────────────────────

export const microEmotions = {

  // ── Killstar: floating dust / slow occult drift ───────────────────────────
  killstar: {
    label:        'slow drift',
    // Particle system
    particles: {
      count:      18,
      speed:      0.18,        // very slow upward drift
      size:       [1, 2.5],    // px range
      opacity:    [0.08, 0.22],
      color:      '110, 0, 255',
      blur:       1,
      direction:  'up',        // drift direction
      scatter:    0.3,         // horizontal wander
    },
    // Transition feel
    transition: {
      ease:       [0.16, 1, 0.3, 1],   // slow start, float in
      duration:   1.1,
      stagger:    0.15,
    },
    // Hover
    hover: {
      magnetStrength: 0.2,
      tiltMax:        4,
      tiltEase:       0.07,    // very slow, floaty
      scale:          1.018,
    },
    // Ambient pulse on accent elements
    pulse: {
      opacity:    [0.04, 0.12, 0.04],
      duration:   5,
      ease:       'easeInOut',
    },
  },

  // ── Demonia: tension / snap anticipation ─────────────────────────────────
  demonia: {
    label:        'tension snap',
    particles: {
      count:      8,
      speed:      0.08,
      size:       [0.8, 1.8],
      opacity:    [0.06, 0.16],
      color:      '139, 0, 0',
      blur:       0,
      direction:  'static',    // particles hold position, barely move
      scatter:    0,
    },
    transition: {
      ease:       [0.87, 0, 0.13, 1],  // cubic-bezier snap — builds tension, releases hard
      duration:   0.65,
      stagger:    0.06,                 // tight stagger — snaps in quick succession
    },
    hover: {
      magnetStrength: 0.12,
      tiltMax:        3,
      tiltEase:       0.18,    // snappy tilt — resists then gives
      scale:          1.025,
    },
    pulse: {
      opacity:    [0.05, 0.18, 0.05],
      duration:   2.8,
      ease:       [0.87, 0, 0.13, 1],  // same snap ease — branded consistency
    },
  },

  // ── Dr. Martens: cinematic calm ───────────────────────────────────────────
  drmartens: {
    label:        'cinematic calm',
    particles: {
      count:      6,
      speed:      0.06,
      size:       [2, 4],      // larger, fewer — like dust motes in film light
      opacity:    [0.04, 0.1],
      color:      '255, 212, 0',
      blur:       2,
      direction:  'diagonal',
      scatter:    0.15,
    },
    transition: {
      ease:       [0.25, 0.46, 0.45, 0.94],  // textbook editorial ease
      duration:   1.4,         // slow, deliberate — nothing rushes
      stagger:    0.22,        // wide stagger — each element breathes
    },
    hover: {
      magnetStrength: 0.15,
      tiltMax:        2.5,     // very subtle tilt — restrained
      tiltEase:       0.06,    // extremely slow response
      scale:          1.012,
    },
    pulse: {
      opacity:    [0.03, 0.08, 0.03],
      duration:   7,           // long, slow breath
      ease:       'easeInOut',
    },
  },

  // ── Vans: quick energy bursts ─────────────────────────────────────────────
  vans: {
    label:        'quick energy',
    particles: {
      count:      24,
      speed:      0.55,        // fast — skate energy
      size:       [0.6, 1.4],  // small, rapid
      opacity:    [0.06, 0.18],
      color:      '204, 0, 0',
      blur:       0,
      direction:  'multi',     // scatter in all directions
      scatter:    0.8,
    },
    transition: {
      ease:       [0.34, 1.56, 0.64, 1],  // spring overshoot — lively
      duration:   0.5,
      stagger:    0.05,        // rapid cascade
    },
    hover: {
      magnetStrength: 0.35,    // strong magnetic — responsive
      tiltMax:        7,
      tiltEase:       0.2,     // quick response
      scale:          1.03,
    },
    pulse: {
      opacity:    [0.05, 0.2, 0.05],
      duration:   1.8,         // fast pulse — energy
      ease:       [0.34, 1.56, 0.64, 1],
    },
  },

  // ── New Rock: mechanical resistance ──────────────────────────────────────
  newrock: {
    label:        'mechanical resistance',
    particles: {
      count:      10,
      speed:      0.12,
      size:       [1.5, 3],    // heavier particles — metal filings feel
      opacity:    [0.05, 0.14],
      color:      '90, 90, 90',
      blur:       0,
      direction:  'down',      // gravity — weight
      scatter:    0.1,
    },
    transition: {
      ease:       [0.76, 0, 0.24, 1],  // mechanical — fast out, abrupt stop
      duration:   0.7,
      stagger:    0.09,
    },
    hover: {
      magnetStrength: 0.08,    // low magnetic — resists movement
      tiltMax:        5,
      tiltEase:       0.04,    // heavy, resistant
      scale:          1.02,
    },
    pulse: {
      opacity:    [0.04, 0.1, 0.04],
      duration:   3.5,
      ease:       [0.76, 0, 0.24, 1],
    },
  },
}

// Helper: get emotion config with fallback to demonia defaults
export function getMicroEmotion(brand) {
  return microEmotions[brand] ?? microEmotions.demonia
}
