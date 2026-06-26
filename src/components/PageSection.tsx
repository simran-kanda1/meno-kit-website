import { type ReactNode } from "react"

import { MeshGradient } from "@/components/MeshGradient"
import { cn } from "@/lib/utils"

export type SectionTone = "cream" | "white" | "lavender" | "plum" | "mesh"

const toneClasses: Record<SectionTone, string> = {
  cream: "bg-background text-text",
  white: "bg-surface text-text",
  lavender: "bg-lavenderPanel text-text",
  plum: "bg-primaryDark text-white",
  mesh: "bg-background text-text",
}

type PageSectionProps = {
  tone?: SectionTone
  children: ReactNode
  className?: string
  innerClassName?: string
  id?: string
  mesh?: boolean
}

export function PageSection({
  tone = "cream",
  children,
  className,
  innerClassName,
  id,
  mesh = false,
}: PageSectionProps) {
  const showMesh = mesh || tone === "mesh"

  return (
    <section
      id={id}
      className={cn("relative w-full overflow-hidden", toneClasses[tone], className)}
    >
      {showMesh && <MeshGradient variant={tone === "mesh" ? "full" : "subtle"} />}
      <div className={cn("section-inner relative", innerClassName)}>{children}</div>
    </section>
  )
}

type SplitSectionProps = {
  left: ReactNode
  right: ReactNode
  leftTone?: SectionTone
  rightTone?: SectionTone
  leftPanelClassName?: string
  rightPanelClassName?: string
  className?: string
  reverseOnMobile?: boolean
}

export function SplitSection({
  left,
  right,
  leftTone = "white",
  rightTone = "lavender",
  leftPanelClassName,
  rightPanelClassName,
  className,
  reverseOnMobile = false,
}: SplitSectionProps) {
  return (
    <section className={cn("w-full", className)}>
      <div
        className={cn(
          "grid lg:grid-cols-2 lg:items-stretch",
          reverseOnMobile && "[&>*:first-child]:order-2 [&>*:last-child]:order-1 lg:[&>*:first-child]:order-1 lg:[&>*:last-child]:order-2",
        )}
      >
        <div
          className={cn(
            "relative flex flex-col justify-center overflow-visible",
            toneClasses[leftTone],
            "px-4 py-16 sm:px-8 lg:px-12 lg:py-20",
            leftPanelClassName,
          )}
        >
          <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center lg:mx-0">{left}</div>
        </div>
        <div
          className={cn(
            "relative flex items-center justify-center overflow-visible",
            toneClasses[rightTone],
            "px-4 py-16 sm:px-8 lg:px-12 lg:py-20",
            rightPanelClassName,
          )}
        >
          <div className="mx-auto flex h-full w-full max-w-xl items-center justify-center lg:mx-0">{right}</div>
        </div>
      </div>
    </section>
  )
}
