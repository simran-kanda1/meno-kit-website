import { type FormEvent, useEffect, useMemo, useState } from "react"
import { CheckCircle2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/BrandLogo"
import { Input } from "@/components/ui/input"
import { submitWaitlistSignup } from "@/lib/waitlist-signup"

type WaitlistModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  source?: string
}

export function WaitlistModal({ open, onOpenChange, source = "waitlist-modal" }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const emailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false)
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onOpenChange])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailValid) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }
    setLoading(true)
    setStatus("idle")
    setMessage("")
    try {
      await submitWaitlistSignup(email, source)
      setStatus("success")
      setMessage("You're in. We will keep you updated as we launch Meno-Kit.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Could not save your signup right now. Please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-[#27214B]/40 backdrop-blur-sm"
        aria-label="Close waitlist form"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-modal-title"
        className="relative w-full max-w-md rounded-2xl border border-primary/15 bg-white p-6 shadow-[0_24px_60px_-24px_rgba(123,92,246,0.55)]"
      >
        <button
          type="button"
          className="absolute right-4 top-4 text-textMuted transition-colors hover:text-primaryDark"
          aria-label="Close"
          onClick={() => onOpenChange(false)}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex justify-center">
          <BrandLogo size="lg" link={false} />
        </div>
        <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">Coming soon</p>
        <h2 id="waitlist-modal-title" className="mt-2 text-center font-display text-2xl font-semibold text-[#27214B]">
          Join the waitlist
        </h2>
        <p className="mt-2 text-center text-sm leading-relaxed text-textSoft">
          Get early access to the community app and our first quarterly Meno Kits.
        </p>

        {status === "success" ? (
          <div className="mt-6 rounded-xl bg-primaryLight/60 p-4 text-sm text-primaryDark">
            <p className="inline-flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              {message}
            </p>
            <Button className="mt-4 w-full" onClick={() => onOpenChange(false)}>
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="h-11"
            />
            <Button type="submit" disabled={loading} className="h-11 w-full">
              {loading ? "Saving..." : "Join the Waitlist"}
            </Button>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-textMuted">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                No spam ever
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                Early access
              </span>
            </div>
            {message && (
              <p className={status === "error" ? "text-sm text-error" : "text-sm text-textSoft"}>{message}</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
