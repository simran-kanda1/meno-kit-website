import { Children, useEffect, useRef, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Animate once when scrolled into view (default) or on mount for hero */
  mode?: "scroll" | "mount"
}

export function Reveal({ children, className, delay = 0, mode = "scroll" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (mode === "mount") {
      const timer = window.setTimeout(() => setVisible(true), 60)
      return () => window.clearTimeout(timer)
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [mode])

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

type RevealStaggerProps = {
  children: ReactNode
  className?: string
  itemClassName?: string
  stagger?: number
  mode?: "scroll" | "mount"
}

export function RevealStagger({
  children,
  className,
  itemClassName,
  stagger = 90,
  mode = "scroll",
}: RevealStaggerProps) {
  const items = Children.toArray(children)

  return (
    <div className={className}>
      {items.map((child, index) => (
        <Reveal key={index} delay={index * stagger} mode={mode} className={itemClassName}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
