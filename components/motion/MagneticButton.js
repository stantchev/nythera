'use client'

// components/motion/MagneticButton.js
// ─────────────────────────────────────────────────────────────────────────────
// Drop-in wrapper that adds magnetic cursor tracking to any child.
// Uses the useMagneticCursor hook internally.
// Accepts strength/ease props for per-brand tuning via microEmotions.
//
// Usage:
//   <MagneticButton strength={0.2}>
//     <Link href="/studio" className="btn-primary"><span>Start</span></Link>
//   </MagneticButton>
// ─────────────────────────────────────────────────────────────────────────────

import { useMagneticCursor } from '@/hooks/useMagneticCursor'

export default function MagneticButton({
  children,
  strength = 0.22,
  ease     = 0.12,
  className,
  style: externalStyle,
}) {
  const { ref, onMouseMove, onMouseLeave, style } = useMagneticCursor({ strength, ease })

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        display: 'inline-block',
        ...externalStyle,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
