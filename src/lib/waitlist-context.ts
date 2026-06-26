import { createContext, useContext } from "react"

type WaitlistContextValue = {
  openWaitlist: () => void
  isHome: boolean
}

export const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function useWaitlist() {
  const context = useContext(WaitlistContext)
  if (!context) {
    throw new Error("useWaitlist must be used within WaitlistProvider")
  }
  return context
}
