import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import { SectionLabel } from "@/components/SectionLabel"

type SplitStat = {
  value: string
  label: string
}

type SplitSectionCopyProps = {
  label: string
  title: string
  description: string
  stats: SplitStat[]
  tags: string
  linkTo: string
  linkLabel: string
}

export function SplitSectionCopy({
  label,
  title,
  description,
  stats,
  tags,
  linkTo,
  linkLabel,
}: SplitSectionCopyProps) {
  return (
    <>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-section-title mt-5">{title}</h2>
      <p className="text-body-lg mt-6">{description}</p>
      <div className="mt-8 grid grid-cols-2 gap-6 border-t-2 border-border pt-8 sm:mt-12 sm:gap-10 sm:pt-10">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-stat">{stat.value}</p>
            <p className="mt-1.5 text-sm text-textMuted sm:mt-2 sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-balance text-sm text-textMuted sm:mt-10 sm:text-base">{tags}</p>
      <Link
        to={linkTo}
        className="mt-8 inline-flex items-center gap-1.5 text-base font-medium text-primaryDark transition-opacity hover:opacity-70"
      >
        {linkLabel}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </>
  )
}
