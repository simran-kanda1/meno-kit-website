import { cn } from "@/lib/utils"

type HeroBoxVisualProps = {
  className?: string
  imageClassName?: string
  panelClassName?: string
}

export function HeroBoxVisual({ className, imageClassName, panelClassName }: HeroBoxVisualProps) {
  return (
    <div className={cn("relative mx-auto w-full", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-[1.75rem] bg-lavenderPanel px-6 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] sm:px-10 sm:py-12",
          panelClassName,
        )}
      >
        <img
          src="/boxMain.png"
          alt="Open Meno-Kit quarterly wellness box with curated sleep, relief, and self-care products"
          className={cn(
            "relative z-10 w-full max-w-[20rem] object-contain drop-shadow-[0_28px_48px_-20px_rgba(42,34,56,0.4)] sm:max-w-[24rem]",
            imageClassName,
          )}
        />
      </div>
    </div>
  )
}
