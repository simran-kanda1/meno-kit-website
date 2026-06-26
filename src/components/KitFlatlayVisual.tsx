import { splitVisualFrameClass, splitVisualOuterClass } from "@/components/split-visual"
import { cn } from "@/lib/utils"

type KitFlatlayVisualProps = {
  className?: string
}

export function KitFlatlayVisual({ className }: KitFlatlayVisualProps) {
  return (
    <div className={cn(splitVisualOuterClass, className)}>
      <div
        className={cn(
          splitVisualFrameClass,
          "overflow-hidden rounded-[1.75rem] border border-white/50 shadow-[0_28px_56px_-24px_rgba(42,34,56,0.4)]",
        )}
      >
        <img
          src="/meno-kit-flatlay.png"
          alt="Meno-Kit quarterly box flat lay"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
