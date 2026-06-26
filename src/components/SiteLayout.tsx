import { Outlet } from "react-router-dom"

import { SiteFooter } from "@/components/SiteFooter"
import { SiteNav } from "@/components/SiteNav"
import { WaitlistProvider } from "@/components/WaitlistProvider"

export default function SiteLayout() {
  return (
    <WaitlistProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteNav />
        <div className="flex-1">
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </WaitlistProvider>
  )
}
