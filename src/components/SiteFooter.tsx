import { Link } from "react-router-dom"

import { BrandLogo } from "@/components/BrandLogo"
import { JoinWaitlistButton } from "@/components/JoinWaitlistButton"
import { BRAND_EMAIL } from "@/lib/brand"

const footerLinks = [
  { label: "Community", to: "/community" },
  { label: "Shop", to: "/shop" },
  { label: "Quiz", to: "/quiz" },
  { label: "Blog", to: "/blog" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <BrandLogo size="md" />
          <p className="max-w-xs text-sm leading-relaxed text-textMuted">
            A stigma-free community and quarterly care boxes for women navigating perimenopause and post menopause.
          </p>
          <a
            href={`mailto:${BRAND_EMAIL}`}
            className="inline-block text-sm text-textMuted transition-colors hover:text-primaryDark"
          >
            {BRAND_EMAIL}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm text-textMuted transition-colors hover:text-primaryDark"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-textMuted sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Meno-Kit. All rights reserved.</p>
          <JoinWaitlistButton variant="ghost" className="h-auto p-0 text-xs text-textMuted hover:bg-transparent hover:text-primaryDark">
            Join the waitlist
          </JoinWaitlistButton>
        </div>
      </div>
    </footer>
  )
}
