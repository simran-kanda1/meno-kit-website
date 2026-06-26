import { useEffect, useRef, useState } from "react"

import { splitVisualFrameClass, splitVisualOuterClass } from "@/components/split-visual"
import { cn } from "@/lib/utils"

type CommunityPhoneVisualProps = {
  className?: string
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function smoothstep(value: number) {
  const t = clamp(value, 0, 1)
  return t * t * (3 - 2 * t)
}

export function CommunityPhoneVisual({ className }: CommunityPhoneVisualProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [motion, setMotion] = useState({ rotate: -8, scale: 1, opacity: 1 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = vh * 0.5
      const isDesktop = window.innerWidth >= 1024

      const normalized = clamp((viewportCenter - elementCenter) / (vh * 0.48), -1, 1)

      if (reducedMotion) {
        setMotion({ rotate: -3, scale: 1, opacity: 1 })
        return
      }

      const absDistance = Math.abs(normalized)
      const presence = smoothstep(1 - absDistance * 0.55)

      if (!isDesktop) {
        setMotion({
          rotate: -4 + normalized * 8,
          scale: 1,
          opacity: 1,
        })
        return
      }

      setMotion({
        rotate: -3 + normalized * 24,
        scale: 0.97 + presence * 0.03,
        opacity: 0.45 + presence * 0.55,
      })
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        splitVisualOuterClass,
        "max-w-[15rem] sm:max-w-xs md:max-w-md",
        className,
      )}
    >
      <div className={cn(splitVisualFrameClass, "overflow-hidden lg:overflow-visible")}>
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[50%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primaryDark/8 blur-3xl"
        />
        <div
          className="absolute inset-0 flex items-center justify-center will-change-transform lg:overflow-visible"
          style={{
            opacity: motion.opacity,
            transform: `translateY(2%) rotate(${motion.rotate}deg) scale(${motion.scale})`,
            transition: "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease-out",
          }}
        >
          <img
            src="/community-app-phone.png"
            alt="Meno-Kit community app showing circles feed, topic recommendations, and anonymous posts"
            className="h-[112%] w-auto max-w-none object-contain object-[center_40%] drop-shadow-[0_28px_44px_-18px_rgba(42,34,56,0.38)] lg:h-[142%]"
          />
        </div>
      </div>
    </div>
  )
}
