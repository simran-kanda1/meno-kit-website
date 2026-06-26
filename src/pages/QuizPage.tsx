import { useEffect, useMemo, useState } from "react"
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { CheckCircle2, Loader2 } from "lucide-react"
import { Link } from "react-router-dom"

import { BrandLogo } from "@/components/BrandLogo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db } from "@/lib/firebase"
import { emailToDocId, QUIZ_EMAIL_KEY } from "@/lib/quiz-utils"

const stages = ["Not sure", "Perimenopause", "Menopause", "Postmenopause"]
const ageRanges = ["Under 40", "40-45", "46-50", "51-55", "56+"]
const symptoms = [
  "Hot flashes", "Night sweats", "Sleep problems", "Anxiety", "Brain fog",
  "Fatigue", "Mood swings", "Weight changes", "Joint pain", "Low libido",
]
const interestOptions = [
  "Yes, very interested in quarterly kits",
  "Interested in the community app",
  "Interested in both",
  "Just curious for now",
]

type StepId = "email" | "stage" | "age" | "symptoms" | "interest"

const steps: { id: StepId; title: string; subtitle?: string }[] = [
  { id: "email", title: "Let's start with your email", subtitle: "We'll save your progress so you can return anytime." },
  { id: "stage", title: "What stage are you in?", subtitle: "Help us understand where you are in your journey." },
  { id: "age", title: "What's your age range?", subtitle: "This helps us personalize recommendations." },
  { id: "symptoms", title: "Which symptoms are you experiencing?", subtitle: "Select all that apply." },
  { id: "interest", title: "What are you most excited about?", subtitle: "Community, kits, or both." },
]

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState(() => localStorage.getItem(QUIZ_EMAIL_KEY) ?? "")
  const [stage, setStage] = useState("")
  const [ageRange, setAgeRange] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [interest, setInterest] = useState("")
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [resuming, setResuming] = useState(() => !!localStorage.getItem(QUIZ_EMAIL_KEY))
  const [submitted, setSubmitted] = useState(false)

  const current = steps[step]
  const progress = ((step + 1) / steps.length) * 100
  const emailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email])

  useEffect(() => {
    const savedEmail = localStorage.getItem(QUIZ_EMAIL_KEY)
    if (!savedEmail) return

    let active = true
    const docId = emailToDocId(savedEmail)

    getDoc(doc(db, "quiz_progress", docId))
      .then((snap) => {
        if (!active || !snap.exists()) return
        const data = snap.data()
        if (data.email) setEmail(data.email as string)
        if (data.stage) setStage(data.stage as string)
        if (data.ageRange) setAgeRange(data.ageRange as string)
        if (data.symptoms) setSelectedSymptoms(data.symptoms as string[])
        if (data.interest) setInterest(data.interest as string)
        if (typeof data.currentStep === "number" && data.currentStep >= 0 && data.currentStep < steps.length) {
          setStep(data.currentStep)
        }
      })
      .catch(console.error)
      .finally(() => {
        if (active) setResuming(false)
      })

    return () => {
      active = false
    }
  }, [])

  const saveProgress = async (nextStep: number) => {
    if (!emailValid) return
    setSaving(true)
    try {
      const docId = emailToDocId(email)
      localStorage.setItem(QUIZ_EMAIL_KEY, email.trim().toLowerCase())
      await setDoc(
        doc(db, "quiz_progress", docId),
        {
          email: email.trim().toLowerCase(),
          stage,
          ageRange,
          symptoms: selectedSymptoms,
          interest,
          currentStep: nextStep,
          progress: ((nextStep + 1) / steps.length) * 100,
          isComplete: false,
          lastUpdated: serverTimestamp(),
        },
        { merge: true },
      )
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom],
    )
  }

  const canContinue = () => {
    switch (current.id) {
      case "email": return emailValid
      case "stage": return !!stage
      case "age": return !!ageRange
      case "symptoms": return selectedSymptoms.length > 0
      case "interest": return !!interest
      default: return false
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const normalizedEmail = email.trim().toLowerCase()
      const docId = emailToDocId(normalizedEmail)
      await addDoc(collection(db, "quiz_submissions"), {
        email: normalizedEmail,
        stage,
        ageRange,
        symptoms: selectedSymptoms,
        interest,
        source: "coming-soon-quiz",
        createdAt: serverTimestamp(),
      })
      await addDoc(collection(db, "waitlist_signups"), {
        email: normalizedEmail,
        source: "quiz-completion",
        createdAt: serverTimestamp(),
      })
      await setDoc(
        doc(db, "quiz_progress", docId),
        {
          email: normalizedEmail,
          stage,
          ageRange,
          symptoms: selectedSymptoms,
          interest,
          currentStep: steps.length - 1,
          progress: 100,
          isComplete: true,
          completedAt: serverTimestamp(),
          lastUpdated: serverTimestamp(),
        },
        { merge: true },
      )
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      console.error(error)
      alert("Could not save your responses. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleNext = async () => {
    if (step < steps.length - 1) {
      const nextStep = step + 1
      if (current.id === "email") {
        localStorage.setItem(QUIZ_EMAIL_KEY, email.trim().toLowerCase())
      }
      await saveProgress(nextStep)
      setStep(nextStep)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      void handleSubmit()
    }
  }

  const handleBack = async () => {
    const prev = Math.max(0, step - 1)
    await saveProgress(prev)
    setStep(prev)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="font-display text-3xl font-semibold text-[#27214B]">You are on the list</h1>
          <p className="mt-3 text-textSoft">
            Thank you for sharing your journey. We will notify you at <strong>{email}</strong> when we launch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/shop"><Button>Preview the Kits</Button></Link>
            <Link to="/community"><Button variant="secondary">Community Preview</Button></Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border/80 bg-lavender/30 px-4 py-10 text-center sm:px-8">
        <BrandLogo size="lg" link={false} className="mx-auto" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Symptom profile</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-[#27214B] sm:text-4xl">
          Help us build your Meno-Kit
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-textSoft">
          Five minutes. No commitment. Your progress is saved automatically.
        </p>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        {resuming ? (
          <div className="flex items-center justify-center gap-2 py-20 text-sm text-textMuted">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading your saved progress...
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="mb-2 flex justify-between text-xs text-textMuted">
                <span>Step {step + 1} of {steps.length}</span>
                <span className="inline-flex items-center gap-2">
                  {saving && (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Saving
                    </>
                  )}
                  {!saving && `${Math.round(progress)}%`}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-primaryLight">
                <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(123,92,246,0.45)] sm:p-8">
              <h2 className="text-xl font-semibold text-[#27214B]">{current.title}</h2>
              {current.subtitle && <p className="mt-1 text-sm text-textSoft">{current.subtitle}</p>}

              <div className="mt-6 space-y-3">
                {current.id === "email" && (
                  <Input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12" />
                )}
                {current.id === "stage" && stages.map((s) => (
                  <button key={s} type="button" onClick={() => setStage(s)} className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors ${stage === s ? "border-primary bg-primaryLight font-medium text-primaryDark" : "border-border hover:border-primary/30"}`}>{s}</button>
                ))}
                {current.id === "age" && ageRanges.map((a) => (
                  <button key={a} type="button" onClick={() => setAgeRange(a)} className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors ${ageRange === a ? "border-primary bg-primaryLight font-medium text-primaryDark" : "border-border hover:border-primary/30"}`}>{a}</button>
                ))}
                {current.id === "symptoms" && (
                  <div className="flex flex-wrap gap-2">
                    {symptoms.map((s) => (
                      <button key={s} type="button" onClick={() => toggleSymptom(s)} className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${selectedSymptoms.includes(s) ? "border-primary bg-chipActive text-white" : "border-border bg-chipBg text-primaryDark hover:border-primary/30"}`}>{s}</button>
                    ))}
                  </div>
                )}
                {current.id === "interest" && interestOptions.map((o) => (
                  <button key={o} type="button" onClick={() => setInterest(o)} className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors ${interest === o ? "border-primary bg-primaryLight font-medium text-primaryDark" : "border-border hover:border-primary/30"}`}>{o}</button>
                ))}
              </div>

              <div className="mt-8 flex justify-between gap-3">
                <Button variant="ghost" onClick={() => void handleBack()} disabled={step === 0}>Back</Button>
                <Button onClick={() => void handleNext()} disabled={!canContinue() || loading || saving}>
                  {step === steps.length - 1 ? (loading ? "Submitting..." : "Complete") : "Continue"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
