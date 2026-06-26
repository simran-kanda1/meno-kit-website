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

const splitPanelPadding =
  "px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20"

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
    <section className={cn("w-full overflow-hidden", className)}>
      <div
        className={cn(
          "grid lg:grid-cols-2 lg:items-stretch",
          reverseOnMobile && "[&>*:first-child]:order-2 [&>*:last-child]:order-1 lg:[&>*:first-child]:order-1 lg:[&>*:last-child]:order-2",
        )}
      >
        <div
          className={cn(
            "relative flex flex-col justify-center overflow-hidden lg:overflow-visible",
            toneClasses[leftTone],
            splitPanelPadding,
            leftPanelClassName,
          )}
        >
          <div className="mx-auto w-full max-w-xl lg:mx-0">{left}</div>
        </div>
        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden lg:overflow-visible",
            toneClasses[rightTone],
            splitPanelPadding,
            rightPanelClassName,
          )}
        >
          <div className="mx-auto flex w-full max-w-xl items-center justify-center lg:mx-0">
            {right}
          </div>
        </div>
      </div>
    </section>
  )
}
