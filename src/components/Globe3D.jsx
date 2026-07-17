import { useEffect, useRef } from 'react'

const DOTS   = 420
const CONNS  = 70
const COLORS = [
  [0, 240, 255],   // cyan
  [121, 40, 202],  // purple
  [255, 0, 128],   // pink
  [255, 255, 255], // white
]

const SPHERE = Array.from({ length: DOTS }, (_, i) => {
  const phi   = Math.acos(1 - 2 * (i + 0.5) / DOTS)
  const theta = Math.PI * (1 + Math.sqrt(5)) * i
  return {
    x:     Math.sin(phi) * Math.cos(theta),
    y:     Math.sin(phi) * Math.sin(theta),
    z:     Math.cos(phi),
    color: COLORS[i % COLORS.length],
    size:  0.7 + (i % 4) * 0.35,
  }
})

const PAIRS = Array.from({ length: CONNS }, (_, i) => [
  (i * 11 + 5)  % DOTS,
  (i * 17 + 29) % DOTS,
])

function bezier(t, x0, y0, cpx, cpy, x1, y1) {
  const mt = 1 - t
  return {
    x: mt * mt * x0 + 2 * mt * t * cpx + t * t * x1,
    y: mt * mt * y0 + 2 * mt * t * cpy + t * t * y1,
  }
}

export default function Globe3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let rot     = 0
    let logW    = 0
    let logH    = 0
    let dpr     = 1
    let visible = true

    const waves = PAIRS.map((_, i) => ({
      t:     (i * 0.141) % 1,
      speed: 0.0042 + (i % 6) * 0.0007,
      color: COLORS[i % COLORS.length],
    }))

    const resize = () => {
      dpr           = window.devicePixelRatio || 1
      logW          = canvas.offsetWidth
      logH          = canvas.offsetHeight
      canvas.width  = logW * dpr
      canvas.height = logH * dpr
    }

    function draw() {
      if (!visible) { animId = null; return }
      const W = logW
      const H = logH
      if (!W || !H) { animId = requestAnimationFrame(draw); return }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)

      const cx = W / 2
      const cy = H / 2

      // Radius: fills well on all breakpoints, caps on large screens
      const radius = Math.min(W * 0.38, H * 0.44, 310)

      const cosR = Math.cos(rot)
      const sinR = Math.sin(rot)

      const pts = SPHERE.map(d => {
        const rx  = d.x * cosR - d.z * sinR
        const rz  = d.x * sinR + d.z * cosR
        const fov = 900
        const sc  = fov / (fov + rz * radius * 0.28)
        return {
          ...d,
          sx:  cx + rx * radius * sc,
          sy:  cy + d.y * radius * sc,
          rz,
          vis: (rz + 1) / 2,
        }
      })

      // Arc connections + travelling waves
      PAIRS.forEach(([a, b], i) => {
        const p1  = pts[a]
        const p2  = pts[b]
        const vis = (p1.vis + p2.vis) / 2
        if (vis < 0.12) return

        const dist = Math.hypot(p2.sx - p1.sx, p2.sy - p1.sy)
        if (dist > radius * 1.1) return

        const cpx = (p1.sx + p2.sx) / 2
        const cpy = (p1.sy + p2.sy) / 2 - dist * 0.18

        // Arc line
        ctx.beginPath()
        ctx.moveTo(p1.sx, p1.sy)
        ctx.quadraticCurveTo(cpx, cpy, p2.sx, p2.sy)
        ctx.strokeStyle = `rgba(0,240,255,${(vis * 0.25).toFixed(2)})`
        ctx.lineWidth   = 0.7
        ctx.stroke()

        // Advance wave
        waves[i].t += waves[i].speed
        if (waves[i].t > 1) waves[i].t = 0

        const wt           = waves[i].t
        const [wr, wg, wb] = waves[i].color

        // Trail + head
        for (let k = 4; k >= 0; k--) {
          const tt             = Math.max(0, wt - k * 0.035)
          const { x: wx, y: wy } = bezier(tt, p1.sx, p1.sy, cpx, cpy, p2.sx, p2.sy)

          if (k === 0) {
            // Outer glow
            ctx.beginPath()
            ctx.arc(wx, wy, 5.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${wr},${wg},${wb},${(vis * 0.12).toFixed(2)})`
            ctx.fill()
            // Mid glow
            ctx.beginPath()
            ctx.arc(wx, wy, 3, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${wr},${wg},${wb},${(vis * 0.45).toFixed(2)})`
            ctx.fill()
            // Core
            ctx.beginPath()
            ctx.arc(wx, wy, 1.6, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${wr},${wg},${wb},${(vis * 0.95).toFixed(2)})`
            ctx.fill()
          } else {
            const alpha = Math.max(0, vis * (0.35 - k * 0.07))
            const size  = Math.max(0.3, 1.4 - k * 0.25)
            ctx.beginPath()
            ctx.arc(wx, wy, size, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${wr},${wg},${wb},${alpha.toFixed(2)})`
            ctx.fill()
          }
        }
      })

      // Dots — back to front
      pts
        .slice()
        .sort((a, b) => a.rz - b.rz)
        .forEach(d => {
          if (d.vis < 0.04) return
          const [r, g, b] = d.color
          const alpha = d.vis * 0.95
          const size  = d.size * (0.35 + d.vis * 0.65)

          if (d.vis > 0.65) {
            ctx.beginPath()
            ctx.arc(d.sx, d.sy, size * 3, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${r},${g},${b},${(d.vis * 0.07).toFixed(2)})`
            ctx.fill()
          }

          ctx.beginPath()
          ctx.arc(d.sx, d.sy, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(2)})`
          ctx.fill()
        })

      rot    += 0.0022
      animId  = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    window.addEventListener('resize', resize)

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && animId == null) animId = requestAnimationFrame(draw)
    }, { threshold: 0 })
    io.observe(canvas)

    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'absolute',
        inset:         0,
        width:         '100%',
        height:        '100%',
        zIndex:        1,
        pointerEvents: 'none',
        opacity:       0.75,
      }}
    />
  )
}
