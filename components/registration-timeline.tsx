"use client"

import { useEffect, useRef, useState } from "react"

export interface TimelineStep {
  badge: string
  eyebrow: string
  title: string
  text: string
  final?: boolean
}

// Centro del nodo respecto del borde superior de cada paso (top-5 = 1.25rem).
const NODE_OFFSET = 20
// Punto de lectura: el recorrido se "llena" hasta el 60 % de la altura de la pantalla.
const READING_LINE = 0.6

export function RegistrationTimeline({ steps }: { steps: TimelineStep[] }) {
  // Sin JS, o con "reducir movimiento", todo se muestra completo y sin animar.
  const [armed, setArmed] = useState(false)
  const [reached, setReached] = useState(-1)
  const items = useRef<(HTMLLIElement | null)[]>([])
  const fills = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    setArmed(true)
    let frame = 0

    const update = () => {
      frame = 0
      const reading = window.innerHeight * READING_LINE
      let last = -1

      items.current.forEach((li, i) => {
        if (!li) return
        const rect = li.getBoundingClientRect()
        const nodeY = rect.top + NODE_OFFSET
        if (nodeY <= reading) last = i

        const fill = fills.current[i]
        if (fill) {
          const progress = Math.min(1, Math.max(0, (reading - nodeY) / rect.height))
          fill.style.transform = `scaleY(${progress})`
        }
      })

      setReached((prev) => (last > prev ? last : prev))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <ol className="relative mx-auto max-w-2xl md:max-w-5xl">
      {steps.map((step, i) => {
        const on = !armed || i <= reached
        const onLeft = i % 2 === 0
        const isLast = i === steps.length - 1
        const side = onLeft ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0"

        return (
          <li
            key={step.title}
            ref={(el) => {
              items.current[i] = el
            }}
            data-step
            className={`relative pb-10 pl-14 md:w-1/2 md:pb-14 ${
              onLeft ? "md:pl-0 md:pr-14" : "md:ml-auto md:pl-14"
            }`}
          >
            {!isLast && (
              <span
                aria-hidden="true"
                className={`absolute left-5 top-5 h-full w-0.5 -translate-x-1/2 bg-gold/40 ${side}`}
              >
                <span
                  ref={(el) => {
                    fills.current[i] = el
                  }}
                  className={`block h-full w-full origin-top bg-terracotta will-change-transform ${
                    armed ? "" : "scale-y-100"
                  }`}
                />
              </span>
            )}

            <span
              aria-hidden="true"
              className={`absolute left-5 top-5 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 transition-all duration-500 motion-reduce:transition-none ${side} ${
                step.final
                  ? `h-12 w-12 font-serif text-xl font-bold ${
                      on ? "scale-100 border-gold bg-green text-gold" : "scale-75 border-gold/60 bg-cream text-gold/60"
                    }`
                  : `h-6 w-6 ${
                      on
                        ? "scale-100 border-terracotta bg-terracotta ring-4 ring-terracotta/20"
                        : "scale-75 border-gold/60 bg-cream"
                    }`
              }`}
            >
              {step.final ? "®" : null}
            </span>

            <div
              className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className={`mb-2 flex ${onLeft ? "md:justify-end" : ""}`}>
                <span className="rounded-full border border-gold/60 bg-white px-3 py-1 text-sm font-semibold text-green">
                  {step.badge}
                </span>
              </div>
              <div className="rounded-2xl border border-gold/40 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta-700">{step.eyebrow}</p>
                <h3 className="mt-1 font-serif text-xl font-bold text-green">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal">{step.text}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
