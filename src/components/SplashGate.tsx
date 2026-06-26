import { type ReactNode, useEffect, useState } from "react"

import { MeshGradient } from "@/components/MeshGradient"
import { BRAND_LOGO_SRC, BRAND_NAME, SPLASH_SESSION_KEY } from "@/lib/brand"
import { cn } from "@/lib/utils"

const SPLASH_HOLD_MS = 1000
const SPLASH_FADE_MS = 450

function shouldShowSplash() {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  return !sessionStorage.getItem(SPLASH_SESSION_KEY)
}

type SplashGateProps = {
  children: ReactNode
}

export function SplashGate({ children }: SplashGateProps) {
  const [visible, setVisible] = useState(shouldShowSplash)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (!visible) return

    const exitTimer = window.setTimeout(() => setExiting(true), SPLASH_HOLD_MS)
    const hideTimer = window.setTimeout(() => {
      sessionStorage.setItem(SPLASH_SESSION_KEY, "1")
      setVisible(false)
    }, SPLASH_HOLD_MS + SPLASH_FADE_MS)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(hideTimer)
    }
  }, [visible])

  return (
    <>
      {children}
      {visible && (
        <div
          className={cn(
            "splash-screen fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-background",
            exiting && "splash-screen-exit",
          )}
          aria-hidden={exiting}
        >
          <MeshGradient variant="subtle" />
          <img
            src={BRAND_LOGO_SRC}
            alt={BRAND_NAME}
            className="splash-logo relative z-10 h-28 w-28 object-contain sm:h-32 sm:w-32"
          />
        </div>
      )}
    </>
  )
}
