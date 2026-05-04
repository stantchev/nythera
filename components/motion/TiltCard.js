'use client'

// components/motion/TiltCard.js
// ─────────────────────────────────────────────────────────────────────────────
// Wraps any card content with soft 3D tilt on mouse move.
// Adds a subtle specular highlight that moves with cursor — depth illusion.
// All transforms are GPU-composited.
//
// Usage:
//   <TiltCard maxTilt={4} scale={1.015}>
//     <article>...card content...</article>
//   </TiltCard>
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useState, useCallback } from 'react'

export default function TiltCard({
  children,
  maxTilt  = 4,
  scale    = 1.015,
  ease     = 0.1,
  style: externalStyle,
  className,
}) {
  const ref        = useRef(null)
  const frameRef   = useRef(null)
  const currentRef = useRef({ rx: 0, ry: 0, scale: 1, lx: 50, ly: 50 })
  const targetRef  = useRef({ rx: 0, ry: 0, scale: 1, lx: 50, ly: 50 })
  const [state, setState] = useState({ transform: '', light: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, transparent 60%)' })

  const lerp = (a, b, t) => a + (b - a) * t

  const animate = useCallback(() => {
    const c = currentRef.current
    const t = targetRef.current

    c.rx    = lerp(c.rx,    t.rx,    ease)
    c.ry    = lerp(c.ry,    t.ry,    ease)
    c.scale = lerp(c.scale, t.scale, ease)
    c.lx    = lerp(c.lx,    t.lx,    ease)
    c.ly    = lerp(c.ly,    t.ly,    ease)

    const dist = Math.abs(t.rx - c.rx) + Math.abs(t.ry - c.ry)

    setState({
      transform: `perspective(900px) rotateX(${c.rx.toFixed(3)}deg) rotateY(${c.ry.toFixed(3)}deg) scale(${c.scale.toFixed(4)})`,
      light: `radial-gradient(circle at ${c.lx.toFixed(1)}% ${c.ly.toFixed(1)}%, rgba(255,255,255,0.03) 0%, transparent 55%)`,
    })

    if (dist > 0.005) {
      frameRef.current = requestAnimationFrame(animate)
    } else {
      frameRef.current = null
    }
  }, [ease])

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return
    const rect  = ref.current.getBoundingClientRect()
    const normX = (e.clientX - rect.left)  / rect.width  - 0.5
    const normY = (e.clientY - rect.top)   / rect.height - 0.5

    targetRef.current = {
      rx:    -normY * maxTilt,
      ry:    normX  * maxTilt,
      scale,
      // Light follows cursor — specular highlight position
      lx: ((e.clientX - rect.left)  / rect.width)  * 100,
      ly: ((e.clientY - rect.top)   / rect.height) * 100,
    }

    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }, [maxTilt, scale, animate])

  const onMouseLeave = useCallback(() => {
    targetRef.current = { rx: 0, ry: 0, scale: 1, lx: 50, ly: 50 }
    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        ...externalStyle,
        transform:       state.transform,
        willChange:      'transform',
        transformStyle:  'preserve-3d',
        position:        'relative',
      }}
    >
      {children}
      {/* Specular highlight layer — moves with cursor */}
      <div
        aria-hidden
        style={{
          position:      'absolute',
          inset:         0,
          background:    state.light,
          pointerEvents: 'none',
          zIndex:        10,
          borderRadius:  'inherit',
          transition:    'none',
        }}
      />
    </div>
  )
}
