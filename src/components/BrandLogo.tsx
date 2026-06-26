import { Link } from "react-router-dom"

import { BRAND_LOGO_SRC, BRAND_NAME } from "@/lib/brand"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  imageClassName?: string
  size?: "sm" | "md" | "lg"
  link?: boolean
  showWordmark?: boolean
  wordmarkClassName?: string
  variant?: "default" | "light"
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
}

export function BrandLogo({
  className,
  imageClassName,
  size = "md",
  link = true,
  showWordmark = false,
  wordmarkClassName,
  variant = "default",
}: BrandLogoProps) {
  const content = (
    <>
      <img
        src={BRAND_LOGO_SRC}
        alt={showWordmark ? "" : BRAND_NAME}
        aria-hidden={showWordmark}
        className={cn("object-contain", sizeClasses[size], imageClassName)}
      />
      {showWordmark && (
        <span
          className={cn(
            "font-display text-lg font-semibold uppercase leading-none tracking-[0.18em] transition-colors duration-200",
            variant === "light"
              ? "text-white group-hover:text-white/85"
              : "text-lavenderDeep group-hover:text-primary",
            wordmarkClassName,
          )}
        >
          {BRAND_NAME}
        </span>
      )}
    </>
  )

  const layoutClass = cn(
    "inline-flex shrink-0 items-center gap-2.5",
    className,
  )

  if (!link) {
    return <span className={layoutClass}>{content}</span>
  }

  return (
    <Link to="/" className={cn(layoutClass, "group")}>
      {content}
    </Link>
  )
}
