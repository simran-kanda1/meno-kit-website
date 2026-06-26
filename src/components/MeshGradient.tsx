import { cn } from "@/lib/utils"

type MeshGradientProps = {
  className?: string
  variant?: "full" | "subtle"
}

export function MeshGradient({ className, variant = "full" }: MeshGradientProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "absolute inset-0",
          variant === "full" ? "bg-background" : "opacity-80",
        )}
      />
      <div className="mesh-blob mesh-blob-1 absolute -left-[12%] top-[-10%] h-[58%] w-[58%] rounded-full bg-[#c9b3e8]/55 blur-[80px]" />
      <div className="mesh-blob mesh-blob-2 absolute right-[-8%] top-[0%] h-[52%] w-[52%] rounded-full bg-[#b8a0dc]/45 blur-[72px]" />
      <div className="mesh-blob mesh-blob-3 absolute bottom-[-12%] left-[20%] h-[54%] w-[54%] rounded-full bg-[#d4c2ed]/50 blur-[76px]" />
      <div className="mesh-blob mesh-blob-4 absolute bottom-[8%] right-[15%] h-[38%] w-[38%] rounded-full bg-[#e2d4f4]/60 blur-[64px]" />
    </div>
  )
}
