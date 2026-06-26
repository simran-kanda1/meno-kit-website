import { type FormEvent, useMemo, useState } from "react"
import {
  HeartHandshake,
  Package,
  TrendingUp,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"

import { CommunityPhoneVisual } from "@/components/CommunityPhoneVisual"
import { BrandLogo } from "@/components/BrandLogo"
import { FaqAccordion } from "@/components/FaqAccordion"
import { HeroBoxVisual } from "@/components/HeroBoxVisual"
import { KitFlatlayVisual } from "@/components/KitFlatlayVisual"
import { KeywordMarquee } from "@/components/KeywordMarquee"
import { PageSection, SplitSection } from "@/components/PageSection"
import { Reveal, RevealStagger } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"
import { SplitSectionCopy } from "@/components/SplitSectionCopy"
import { WaitlistPillForm } from "@/components/WaitlistPillForm"
import { Button } from "@/components/ui/button"
import { BlogComingSoonCard } from "@/components/BlogComingSoonCard"
import { blogPosts } from "@/lib/blog-data"
import { submitWaitlistSignup } from "@/lib/waitlist-signup"

const featuredBlogPost = blogPosts[0]

const pillars = [
  {
    title: "Community",
    description: "Talk openly with women who understand peri and post menopause.",
    icon: Users,
  },
  {
    title: "Relief",
    description: "Discover what actually helps — from sleep to hot flashes to brain fog.",
    icon: HeartHandshake,
  },
  {
    title: "Curation",
    description: "Quarterly boxes matched to your symptoms, delivered to your door.",
    icon: Package,
  },
  {
    title: "Clarity",
    description: "Track patterns and understand your body as it changes.",
    icon: TrendingUp,
  },
]

const howItWorksSteps = [
  {
    step: "01",
    title: "Join the waitlist",
    description: "Get early access to the community app and our first quarterly Meno Kits.",
  },
  {
    step: "02",
    title: "Tell us your story",
    description: "Take the quiz — your stage, symptoms, and what you need most right now.",
  },
  {
    step: "03",
    title: "Get real support",
    description: "Connect in circles and receive a curated box every quarter.",
  },
]

const kitStats = [
  { value: "4×", label: "Delivered yearly" },
  { value: "100%", label: "Symptom-based curation" },
]

const communityStats = [
  { value: "12K+", label: "Women on the waitlist" },
  { value: "24/7", label: "Support circles launching" },
]

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const emailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email])

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
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
      await submitWaitlistSignup(email, "coming-soon-landing")
      setStatus("success")
      setMessage("You're in. We'll keep you updated as we launch.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Could not save your signup right now. Please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      {/* Hero */}
      <PageSection tone="mesh" innerClassName="!py-14 sm:!py-20 lg:!py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-9 text-center lg:text-left">
            <Reveal mode="mount" delay={0}>
              <SectionLabel className="mt-6">Community + quarterly kits</SectionLabel>
            </Reveal>
            <Reveal mode="mount" delay={100}>
              <h1 className="text-hero mt-5">
                Menopause support
                <br />
                <span className="italic text-primary">that adapts with you.</span>
              </h1>
            </Reveal>
            <Reveal mode="mount" delay={200}>
              <p className="text-body-lg mt-6 max-w-lg">
                A stigma-free community for peri and post menopause, plus quarterly boxes curated around your symptoms, real conversations and products that actually help.
              </p>
            </Reveal>
            <Reveal mode="mount" delay={300}>
              <WaitlistPillForm
                id="waitlist"
                email={email}
                onEmailChange={setEmail}
                onSubmit={handleSignup}
                loading={loading}
                message={message}
                status={status}
                className="mx-auto max-w-lg lg:mx-0"
              />
            </Reveal>
            <Reveal mode="mount" delay={400}>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link to="/quiz">
                  <Button variant="secondary" size="lg">Take the quiz</Button>
                </Link>
                <Link to="/shop">
                  <Button variant="ghost" size="lg">Preview the kits</Button>
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal mode="mount" delay={250}>
            <HeroBoxVisual />
          </Reveal>
        </div>
      </PageSection>

      <KeywordMarquee />

      {/* Community */}
      <SplitSection
        leftTone="white"
        rightTone="lavender"
        left={
          <Reveal>
            <SplitSectionCopy
              label="The community"
              title="A space built for real conversation."
              description="Peri and post menopause can feel isolating. Meno-Kit is where you talk honestly, ask real questions, and learn from women going through the same changes — without judgment."
              stats={communityStats}
              tags="Circles · Anonymous posting · What helped me"
              linkTo="/community"
              linkLabel="Preview the community"
            />
          </Reveal>
        }
        right={<CommunityPhoneVisual />}
      />

      {/* Kit */}
      <SplitSection
        reverseOnMobile
        leftTone="lavender"
        rightTone="white"
        left={<Reveal><KitFlatlayVisual /></Reveal>}
        right={
          <Reveal>
            <SplitSectionCopy
              label="The kit"
              title="Curated for your journey."
              description="Every quarter, tell us your symptoms and what you're going through. We'll send a box of feel-good treats and practical products picked for you — supplements, relief tools, and guidance."
              stats={kitStats}
              tags="Supplements · Relief tools · Expert guidance"
              linkTo="/shop"
              linkLabel="Preview the kits"
            />
          </Reveal>
        }
      />

      {/* Pillars */}
      <PageSection tone="white" innerClassName="section-inner-tight">
        <RevealStagger
          stagger={100}
          className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
        >
          {pillars.map((item) => (
            <article key={item.title} className="space-y-4 border-t-2 border-border pt-8">
              <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="font-display text-2xl text-primaryDark">{item.title}</h3>
              <p className="text-base leading-relaxed text-textSoft">{item.description}</p>
            </article>
          ))}
        </RevealStagger>
      </PageSection>

      {/* How it works */}
      <PageSection tone="cream">
        <Reveal>
          <div className="text-center">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-section-title mt-5">
              Three steps to real support.
            </h2>
          </div>
        </Reveal>
        <RevealStagger
          stagger={130}
          className="mt-20 grid gap-14 md:grid-cols-3"
          itemClassName="h-full"
        >
          {howItWorksSteps.map((item) => (
            <article key={item.step} className="border-t-2 border-border pt-10 text-center md:text-left">
              <p className="font-display text-7xl leading-none text-primaryDark/10 sm:text-8xl">{item.step}</p>
              <h3 className="mt-4 font-display text-3xl text-primaryDark">{item.title}</h3>
              <p className="text-body-lg mt-4">{item.description}</p>
            </article>
          ))}
        </RevealStagger>
      </PageSection>

      {/* Testimonial */}
      <PageSection tone="plum" innerClassName="!py-28 sm:!py-36">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel light>What women say</SectionLabel>
            <blockquote className="mt-10 font-display text-3xl leading-snug text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              "I wish something like this existed. Every time my symptoms change, I have to research everything from scratch."
            </blockquote>
            <p className="mt-10 text-base text-white/55">— From our early community research</p>
          </div>
        </Reveal>
      </PageSection>

      {/* Expert blog */}
      <PageSection tone="white">
        <Reveal>
          <div className="text-center">
            <SectionLabel>Expert insights</SectionLabel>
            <h2 className="text-section-title mt-5">Evidence-based guidance.</h2>
            <p className="text-body-lg mx-auto mt-5 max-w-xl">
              Credentialed experts are preparing our first articles. Join the waitlist to read them when we launch.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <BlogComingSoonCard post={featuredBlogPost} variant="home" />
        </Reveal>
      </PageSection>

      {/* FAQ */}
      <PageSection tone="cream">
        <Reveal>
          <div className="text-center">
            <SectionLabel>Frequently asked</SectionLabel>
            <h2 className="text-section-title mt-5">Got questions?</h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14">
            <FaqAccordion />
          </div>
        </Reveal>
      </PageSection>

      {/* Final CTA */}
      <PageSection tone="lavender" innerClassName="section-inner-tight !pb-10 sm:!pb-14">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <BrandLogo size="md" link={false} className="mx-auto sm:hidden" />
            <BrandLogo size="lg" link={false} className="mx-auto hidden sm:block" />
            <h2 className="text-section-title mt-6 sm:mt-8">
              Be the first to know.
            </h2>
            <p className="text-body-lg mx-auto mt-4 max-w-md sm:mt-5">
              Join the waitlist for early access to the community app and our first quarterly Meno Kits.
            </p>
            <WaitlistPillForm
              email={email}
              onEmailChange={setEmail}
              onSubmit={handleSignup}
              loading={loading}
              message={message}
              status={status}
              className="mx-auto mt-8 max-w-lg sm:mt-10"
            />
          </div>
        </Reveal>
      </PageSection>
    </main>
  )
}
