import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryDark/30",
  {
    variants: {
      variant: {
        default: "bg-primaryDark text-white hover:bg-[#1f1a3d]",
        secondary: "bg-white/80 text-primaryDark hover:bg-white border border-border/80",
        ghost: "bg-transparent text-textSoft hover:bg-white/50",
      },
      size: {
        default: "h-11 px-5 py-2",
        lg: "h-12 px-7 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
