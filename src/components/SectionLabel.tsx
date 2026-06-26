type SectionLabelProps = {
  children: string
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <p
      className={`text-sm font-medium uppercase tracking-[0.16em] ${light ? "text-white/60" : "text-textMuted"} ${className}`}
    >
      <span className={light ? "text-white/40" : "text-primary/60"}>—</span> {children}
    </p>
  )
}
