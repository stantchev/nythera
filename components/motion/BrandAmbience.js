'use client'

// components/motion/BrandAmbience.js
// ─────────────────────────────────────────────────────────────────────────────
// Renders a canvas layer with brand-specific ambient particles.
// Driven entirely by the microEmotions config — no hardcoded values.
// Uses a single rAF loop + canvas API — zero DOM nodes per particle.
// Pointer-events: none, z-index: 1 — purely atmospheric, never blocks UI.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react'
import { getMicroEmotion } from '@/lib/microEmotions'

export default function BrandAmbience({ brand, opacity = 1 }) {
  const canvasRef = useRef(null)
  const emotion   = getMicroEmotion(brand)
  const cfg       = emotion.particles

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width  = canvas.offsetWidth
    let height = canvas.offsetHeight
    let rafId  = null

    // ── Resize handler ──────────────────────────────────────────────────────
    const resize = () => {
      width  = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width  = width
      canvas.height = height
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // ── Particle factory ────────────────────────────────────────────────────
    const rand  = (min, max) => Math.random() * (max - min) + min
    const [minSize, maxSize]       = cfg.size
    const [minOpacity, maxOpacity] = cfg.opacity

    const makeParticle = () => ({
      x:    rand(0, width),
      y:    rand(0, height),
      size: rand(minSize, maxSize),
      op:   rand(minOpacity, maxOpacity),
      // Direction-specific velocity
      vx: cfg.direction === 'static'   ? 0
        : cfg.direction === 'diagonal' ? rand(-cfg.speed * 0.5, cfg.speed * 0.5) * (Math.random() > 0.5 ? 1 : -1)
        : cfg.direction === 'multi'    ? rand(-cfg.speed, cfg.speed)
        : rand(-cfg.scatter, cfg.scatter) * cfg.speed,
      vy: cfg.direction === 'up'       ? -rand(cfg.speed * 0.5, cfg.speed)
        : cfg.direction === 'down'     ? rand(cfg.speed * 0.5, cfg.speed)
        : cfg.direction === 'diagonal' ? -rand(cfg.speed * 0.3, cfg.speed * 0.8)
        : cfg.direction === 'multi'    ? rand(-cfg.speed, cfg.speed)
        : rand(-cfg.speed * 0.2, cfg.speed * 0.2),
      // Lifespan cycle for opacity fade
      life:    rand(0, Math.PI * 2),
      lifeSpd: rand(0.002, 0.006),
    })

    const particles = Array.from({ length: cfg.count }, makeParticle)

    // ── Draw loop ───────────────────────────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        // Pulse opacity via sin wave — organic feel
        p.life += p.lifeSpd
        const pulsedOp = p.op * (0.5 + 0.5 * Math.sin(p.life)) * opacity

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

        if (cfg.blur > 0) {
          // Soft glow via shadow — cheap approximation
          ctx.shadowColor  = `rgba(${cfg.color}, ${pulsedOp * 3})`
          ctx.shadowBlur   = cfg.blur * 4
          ctx.fillStyle    = `rgba(${cfg.color}, ${pulsedOp})`
        } else {
          ctx.shadowBlur   = 0
          ctx.fillStyle    = `rgba(${cfg.color}, ${pulsedOp})`
        }

        ctx.fill()

        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges — seamless
        if (p.x < -10)         p.x = width  + 10
        if (p.x > width  + 10) p.x = -10
        if (p.y < -10)         p.y = height + 10
        if (p.y > height + 10) p.y = -10
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [brand, cfg, opacity])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position:      'absolute',
        inset:         0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex:        2,
        display:       'block',
      }}
    />
  )
}
