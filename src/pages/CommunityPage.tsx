import { MessageCircle, Moon, Shield, Users } from "lucide-react"
import { Link } from "react-router-dom"

import { JoinWaitlistButton } from "@/components/JoinWaitlistButton"
import { PageSection } from "@/components/PageSection"
import { Reveal, RevealStagger } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Topic circles",
    description: "Join focused groups around sleep, hot flashes, mood, brain fog, and more.",
    icon: Users,
  },
  {
    title: "Anonymous posting",
    description: "Share honestly when you need privacy. Your comfort comes first.",
    icon: Shield,
  },
  {
    title: "What helped me",
    description: "A dedicated space for practical wins other women can learn from.",
    icon: MessageCircle,
  },
]

const circles = [
  { name: "Sleep Support", members: "12.4K", topic: "Sleep issues", icon: Moon },
  { name: "Hot Flash Help", members: "9.8K", topic: "Hot flashes", icon: MessageCircle },
  { name: "Mood & Anxiety", members: "7.2K", topic: "Mood", icon: Users },
  { name: "Brain Fog", members: "6.1K", topic: "Cognition", icon: MessageCircle },
]

const previewPosts = [
  {
    title: "Feeling overwhelmed today",
    author: "SoftHeart",
    time: "2h ago",
    excerpt: "Does anyone else feel like their emotions come in waves since perimenopause started?",
    tag: "Mood",
  },
  {
    title: "What helped my night sweats",
    author: "Anonymous",
    time: "5h ago",
    excerpt: "Sharing what finally made a difference after months of trying everything alone.",
    tag: "What helped me",
  },
  {
    title: "Brain fog at work",
    author: "Claire T.",
    time: "1d ago",
    excerpt: "Looking for practical tips from women who have navigated this professionally.",
    tag: "Brain fog",
  },
]

export default function CommunityPage() {
  return (
    <main>
      <PageSection tone="mesh" innerClassName="!py-20 lg:!py-28">
        <Reveal mode="mount">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>The community</SectionLabel>
            <h1 className="text-section-title mt-5">
              A space built for <span className="italic text-primary">real conversation.</span>
            </h1>
            <p className="text-body-lg mx-auto mt-6 max-w-2xl">
              Meno-Kit is launching a stigma-free community for women in perimenopause and post menopause. Talk openly, ask honest questions, and learn from women who understand.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <JoinWaitlistButton size="lg">Join the waitlist</JoinWaitlistButton>
              <Link to="/quiz">
                <Button variant="secondary" size="lg">Take the quiz</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </PageSection>
      
      <PageSection tone="white" innerClassName="section-inner-tight">
        <Reveal>
          <div className="text-center">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-section-title mt-5">Built for how you actually want to connect.</h2>
          </div>
        </Reveal>
        <RevealStagger
          stagger={100}
          className="mt-16 grid gap-14 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {features.map((feature) => (
            <article key={feature.title} className="border-t-2 border-border pt-8 text-center sm:text-left">
              <feature.icon className="mx-auto h-6 w-6 text-primary sm:mx-0" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl text-primaryDark">{feature.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-textSoft">{feature.description}</p>
            </article>
          ))}
        </RevealStagger>
      </PageSection>

      <PageSection tone="lavender">
        <Reveal>
          <div className="text-center">
            <SectionLabel>Your circles</SectionLabel>
            <h2 className="text-section-title mt-5">Topic groups launching with the app.</h2>
            <p className="text-body-lg mx-auto mt-5 max-w-xl">
              Join circles around the symptoms and stages that matter most to you.
            </p>
          </div>
        </Reveal>
        <RevealStagger stagger={80} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {circles.map((circle) => (
            <article
              key={circle.name}
              className="border-t-2 border-primaryDark/10 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/60">
                  <circle.icon className="h-5 w-5 text-primaryDark" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primaryDark">{circle.name}</h3>
                  <p className="text-sm text-textMuted">{circle.members} waiting</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-textSoft">{circle.topic}</p>
            </article>
          ))}
        </RevealStagger>
      </PageSection>

      <PageSection tone="cream">
        <Reveal>
          <div className="text-center">
            <SectionLabel>Preview</SectionLabel>
            <h2 className="text-section-title mt-5">The kind of support we're building.</h2>
          </div>
        </Reveal>
        <RevealStagger stagger={110} className="mt-16 mx-auto max-w-2xl space-y-0">
          {previewPosts.map((post) => (
            <article key={post.title} className="border-t-2 border-border py-8 first:pt-0 first:border-t-0 sm:first:border-t-2 sm:first:pt-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-textMuted">
                <span className="font-medium uppercase tracking-wider text-primaryDark">{post.tag}</span>
                <span>·</span>
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.time}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-primaryDark">{post.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-textSoft">{post.excerpt}</p>
            </article>
          ))}
        </RevealStagger>
        <Reveal delay={120}>
          <p className="mt-12 text-center text-base text-textMuted">
            Full community features launching soon.
          </p>
        </Reveal>
      </PageSection>

      <PageSection tone="plum" innerClassName="!py-24 sm:!py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel light>Early access</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
              Be first into the community.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Join the waitlist for early access to circles, anonymous posting, and real conversations with women who get it.
            </p>
            <JoinWaitlistButton className="mt-10" size="lg">
              Join the waitlist
            </JoinWaitlistButton>
          </div>
        </Reveal>
      </PageSection>
    </main>
  )
}
