import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"

import { BrandLogo } from "@/components/BrandLogo"
import { JoinWaitlistButton } from "@/components/JoinWaitlistButton"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/community", label: "Community" },
  { to: "/shop", label: "Shop" },
  { to: "/blog", label: "Blog" },
  { to: "/quiz", label: "Quiz" },
]

function navClassName({ isActive }: { isActive: boolean }) {
  return cn(
    "text-[13px] font-medium tracking-wide transition-colors",
    isActive ? "text-primaryDark" : "text-textMuted hover:text-primaryDark",
  )
}

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
        <BrandLogo size="md" showWordmark />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <JoinWaitlistButton size="default" className="px-6 text-[13px]">
            Get notified
          </JoinWaitlistButton>
        </div>

        <button
          type="button"
          className="inline-flex text-primaryDark md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/50 bg-background/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive ? "text-primaryDark" : "text-textSoft",
                )
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    isActive ? "text-primaryDark" : "text-textSoft",
                  )
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 border-t border-border/50 pt-3">
              <JoinWaitlistButton className="w-full" onClick={() => setOpen(false)}>
                Get notified
              </JoinWaitlistButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
