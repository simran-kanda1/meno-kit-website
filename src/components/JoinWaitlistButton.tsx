import { type ComponentProps } from "react"

import { useWaitlist } from "@/lib/waitlist-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type JoinWaitlistButtonProps = ComponentProps<typeof Button>

export function JoinWaitlistButton({ className, onClick, children = "Join Waitlist", ...props }: JoinWaitlistButtonProps) {
  const { openWaitlist } = useWaitlist()

  return (
    <Button
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) openWaitlist()
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
