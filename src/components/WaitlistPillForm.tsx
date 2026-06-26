import { type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type WaitlistPillFormProps = {
  id?: string
  email: string
  onEmailChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  loading?: boolean
  message?: string
  status?: "idle" | "success" | "error"
  className?: string
  buttonLabel?: string
}

export function WaitlistPillForm({
  id,
  email,
  onEmailChange,
  onSubmit,
  loading,
  message,
  status,
  className,
  buttonLabel = "Notify me",
}: WaitlistPillFormProps) {
  return (
    <form id={id} onSubmit={onSubmit} className={cn("w-full max-w-md", className)}>
      <div className="flex flex-col gap-2 rounded-[1.25rem] border border-border bg-surface p-2 shadow-[0_8px_28px_-14px_rgba(42,34,56,0.18)] sm:flex-row sm:items-center sm:rounded-full sm:p-1.5">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          autoComplete="email"
          required
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-text outline-none placeholder:text-textMuted sm:px-5"
        />
        <Button type="submit" disabled={loading} className="h-11 w-full shrink-0 rounded-full px-6 sm:w-auto">
          {loading ? "Saving..." : buttonLabel}
        </Button>
      </div>
      {message && (
        <p className={cn("mt-2 text-center text-sm", status === "success" ? "text-success" : "text-error")}>
          {message}
        </p>
      )}
    </form>
  )
}
