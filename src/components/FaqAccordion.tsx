import { useState } from "react"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const faqItems = [
  {
    question: "What is Meno-Kit?",
    answer:
      "Meno-Kit is a stigma-free community app for women in perimenopause and post menopause, plus quarterly care boxes curated around your symptoms and what you're going through.",
  },
  {
    question: "When will the app and kits launch?",
    answer:
      "We're launching soon. Join the waitlist to get early access, launch updates, and first access to our quarterly Meno Kits.",
  },
  {
    question: "How are the quarterly boxes personalized?",
    answer:
      "After you join, you can take our symptom quiz to share your stage, symptoms, and priorities. Each quarter, your box is curated around what you're experiencing — and you can update your profile as things change.",
  },
  {
    question: "Who writes the blog?",
    answer:
      "Our expert blog features credentialed contributors — menopause specialists, clinicians, dietitians, and women's health researchers. Contributors are invited and reviewed by our editorial team.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Yes. We take your privacy seriously. Community posting can be anonymous, and we never sell your personal data. See our Privacy Policy for full details.",
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_4px_20px_-12px_rgba(42,34,56,0.12)]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-primaryLight/30"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-primaryDark">{item.question}</span>
              <Plus
                className={cn(
                  "h-4 w-4 shrink-0 text-primaryDark/40 transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-base leading-relaxed text-textSoft">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
