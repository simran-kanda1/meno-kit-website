import { CheckCircle2 } from "lucide-react"
import { Link, useSearchParams } from "react-router-dom"

import { JoinWaitlistButton } from "@/components/JoinWaitlistButton"
import { KitFlatlayVisual } from "@/components/KitFlatlayVisual"
import { PageSection } from "@/components/PageSection"
import { Reveal, RevealStagger } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"
import { Button } from "@/components/ui/button"
import { allBoxes, curatedBoxes, personalizedBox, type ShopBox } from "@/lib/shop-data"

function BoxDetail({ box, onBack }: { box: ShopBox; onBack: () => void }) {
  return (
    <PageSection tone="white" innerClassName="!py-12 sm:!py-16">
      <button
        type="button"
        onClick={onBack}
        className="text-sm font-medium text-primaryDark transition-opacity hover:opacity-70"
      >
        ← Back to all kits
      </button>

      <div className={`mt-8 grid gap-12 ${box.isPersonalized ? "lg:grid-cols-2 lg:items-center" : "max-w-2xl"}`}>
        {box.isPersonalized && (
          <Reveal>
            <KitFlatlayVisual />
          </Reveal>
        )}

        <Reveal delay={box.isPersonalized ? 100 : 0}>
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-primary/20 bg-lavenderPanel px-3 py-1 text-xs font-medium uppercase tracking-wider text-primaryDark">
              {box.isPersonalized ? "Personalized · Coming soon" : "Curated · Coming soon"}
            </span>
            <h1 className="text-section-title">{box.name}</h1>
            <p className="text-lg text-primary">{box.tagline}</p>
            <p className="text-body-lg">{box.description}</p>
            <p className="text-base text-textMuted">
              We're keeping details under wraps until launch — every kit is thoughtfully curated, never generic.
            </p>
            <div className="rounded-2xl border border-border bg-background px-5 py-4 text-sm leading-relaxed text-textSoft">
              Orders aren't open yet. Join the waitlist or take the quiz so we can shape your first box around you.
            </div>
            <div className="flex flex-wrap gap-3">
              <JoinWaitlistButton size="lg">Join the waitlist</JoinWaitlistButton>
              <Link to="/quiz">
                <Button variant="secondary" size="lg">Take the quiz</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </PageSection>
  )
}

function BoxCard({ box, onSelect }: { box: ShopBox; onSelect: () => void }) {
  return (
    <article
      className="group cursor-pointer border-t-2 border-border pt-8 transition-opacity hover:opacity-80"
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      role="button"
      tabIndex={0}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-textMuted">Curated box</p>
      <h3 className="mt-3 font-display text-2xl text-primaryDark">{box.name}</h3>
      <p className="mt-1 text-sm text-primary">{box.tagline}</p>
      <p className="mt-3 text-base leading-relaxed text-textSoft">{box.description}</p>
      <span className="mt-5 inline-block text-sm font-medium text-primaryDark opacity-70 group-hover:opacity-100">
        Learn more →
      </span>
    </article>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const boxId = searchParams.get("box")
  const selectedBox = boxId ? allBoxes.find((b) => b.id === boxId) : null

  const openBox = (box: ShopBox) => setSearchParams({ box: box.id })
  const closeBox = () => setSearchParams({})

  if (selectedBox) {
    return (
      <main>
        <BoxDetail box={selectedBox} onBack={closeBox} />
      </main>
    )
  }

  return (
    <main>
      <PageSection tone="mesh" innerClassName="!py-20 lg:!py-28">
        <Reveal mode="mount">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Coming soon</SectionLabel>
            <h1 className="text-section-title mt-5">Meno Kit boxes</h1>
            <p className="text-body-lg mx-auto mt-6 max-w-2xl">
              Quarterly boxes curated around how you're feeling — from targeted relief boxes to a kit built entirely around you. Orders open at launch.
            </p>
          </div>
        </Reveal>
      </PageSection>

      <PageSection tone="white">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wider text-textMuted">Recommended</p>
          <article
            className="mt-6 cursor-pointer rounded-[1.75rem] border border-border bg-surface p-6 transition-opacity hover:opacity-90 sm:p-10"
            onClick={() => openBox(personalizedBox)}
            onKeyDown={(e) => e.key === "Enter" && openBox(personalizedBox)}
            role="button"
            tabIndex={0}
          >
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <KitFlatlayVisual />
              <div className="space-y-4">
                <span className="inline-block rounded-full border border-primary/20 bg-lavenderPanel px-3 py-1 text-xs font-medium uppercase tracking-wider text-primaryDark">
                  Personalized · Coming soon
                </span>
                <h2 className="text-section-title">{personalizedBox.name}</h2>
                <p className="text-lg text-primary">{personalizedBox.tagline}</p>
                <p className="text-body-lg">{personalizedBox.description}</p>
                <span className="inline-block text-base font-medium text-primaryDark">Learn more →</span>
              </div>
            </div>
          </article>
        </Reveal>
      </PageSection>

      <PageSection tone="cream">
        <Reveal>
          <div className="text-center">
            <SectionLabel>Curated boxes</SectionLabel>
            <h2 className="text-section-title mt-5">Relief for what you're feeling.</h2>
            <p className="text-body-lg mx-auto mt-5 max-w-xl">
              Symptom-focused boxes — each one a starting point, not a prescription.
            </p>
          </div>
        </Reveal>
        <RevealStagger stagger={90} className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {curatedBoxes.map((box) => (
            <BoxCard key={box.id} box={box} onSelect={() => openBox(box)} />
          ))}
        </RevealStagger>
      </PageSection>

      <PageSection tone="white" innerClassName="section-inner-tight">
        <RevealStagger stagger={80} className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {["Shipped quarterly", "Cancel anytime", "Expert-vetted curation"].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 text-center text-sm text-textSoft sm:justify-start sm:text-left">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
              {item}
            </div>
          ))}
        </RevealStagger>
      </PageSection>

      <PageSection tone="plum" innerClassName="!py-20 lg:!py-24">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-4xl text-white sm:text-5xl">Be first in line.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Join the waitlist for early access when orders open.
            </p>
            <JoinWaitlistButton className="mt-8" size="lg">
              Join the waitlist
            </JoinWaitlistButton>
          </div>
        </Reveal>
      </PageSection>
    </main>
  )
}
