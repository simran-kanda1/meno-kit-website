import { Outlet } from "react-router-dom"

import { MobileWaitlistBar } from "@/components/MobileWaitlistBar"
import { SiteFooter } from "@/components/SiteFooter"
import { SiteNav } from "@/components/SiteNav"
import { WaitlistProvider } from "@/components/WaitlistProvider"

export default function SiteLayout() {
  return (
    <WaitlistProvider>
      <div className="flex min-h-screen flex-col overflow-x-clip bg-background">
        <SiteNav />
        <div
          className="h-[calc(4.5rem+env(safe-area-inset-top,0px))] shrink-0"
          aria-hidden
        />
        <div className="flex-1">
          <Outlet />
        </div>
        <SiteFooter />
        <MobileWaitlistBar />
      </div>
    </WaitlistProvider>
  )
}
