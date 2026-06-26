import { useCallback, useMemo, useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"

import { WaitlistModal } from "@/components/WaitlistModal"
import { WaitlistContext } from "@/lib/waitlist-context"

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [modalKey, setModalKey] = useState(0)
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  const openWaitlist = useCallback(() => {
    if (isHome) {
      document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }
    setModalKey((key) => key + 1)
    setOpen(true)
  }, [isHome])

  const value = useMemo(() => ({ openWaitlist, isHome }), [openWaitlist, isHome])

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <WaitlistModal
        key={modalKey}
        open={open}
        onOpenChange={setOpen}
        source={`waitlist-modal:${pathname}`}
      />
    </WaitlistContext.Provider>
  )
}
