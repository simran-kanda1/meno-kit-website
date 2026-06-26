import { useLocation } from "react-router-dom"

import { JoinWaitlistButton } from "@/components/JoinWaitlistButton"

export function MobileWaitlistBar() {
  const { pathname } = useLocation()
  const showOnHome = pathname === "/"

  if (!showOnHome) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden"
      aria-hidden={false}
    >
      <JoinWaitlistButton className="h-12 w-full" size="lg">
        Get notified
      </JoinWaitlistButton>
    </div>
  )
}
