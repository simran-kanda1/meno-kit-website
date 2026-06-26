import { CheckCircle2 } from "lucide-react"

import { BlogComingSoonCard } from "@/components/BlogComingSoonCard"
import { JoinWaitlistButton } from "@/components/JoinWaitlistButton"
import { PageSection } from "@/components/PageSection"
import { Reveal, RevealStagger } from "@/components/Reveal"
import { SectionLabel } from "@/components/SectionLabel"
import { Button } from "@/components/ui/button"
import { blogPosts, expertContributorTypes, upcomingBlogTopics } from "@/lib/blog-data"

const featuredPost = blogPosts[0]

export default function BlogPage() {
  return (
    <main>
      <PageSection tone="mesh" innerClassName="!py-20 lg:!py-28">
        <Reveal mode="mount">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Expert blog</SectionLabel>
            <h1 className="text-section-title mt-5">
              Evidence-based guidance from our contributors
            </h1>
            <p className="text-body-lg mx-auto mt-6 max-w-2xl">
              Articles are written and reviewed by qualified professionals in menopause care, women's health, nutrition, and related fields. This is not open submission — contributors are invited by our editorial team.
            </p>
          </div>
        </Reveal>
      </PageSection>

      <PageSection tone="white">
        <Reveal>
          <BlogComingSoonCard post={featuredPost} variant="page" />
        </Reveal>
      </PageSection>

      <PageSection tone="cream">
        <Reveal>
          <div className="text-center">
            <SectionLabel>On the horizon</SectionLabel>
            <h2 className="text-section-title mt-5">Topics we're preparing</h2>
            <p className="text-body-lg mx-auto mt-5 max-w-xl">
              Our first articles are in development with credentialed experts. Here's a preview of what's coming.
            </p>
          </div>
        </Reveal>
        <RevealStagger stagger={90} className="mt-16 grid gap-6 sm:grid-cols-3">
          {upcomingBlogTopics.map((topic) => (
            <article
              key={topic}
              className="border-t-2 border-border pt-8 text-center sm:text-left"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-textMuted">Coming soon</p>
              <h3 className="mt-4 font-display text-2xl text-primaryDark">{topic}</h3>
            </article>
          ))}
        </RevealStagger>
      </PageSection>

      <PageSection tone="white">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="border-t-2 border-border pt-10">
              <h2 className="font-display text-3xl text-primaryDark">Who we feature</h2>
              <p className="text-body-lg mt-4">
                Our blog is reserved for credentialed experts whose work supports women through perimenopause and post menopause.
              </p>
              <ul className="mt-8 space-y-4">
                {expertContributorTypes.map((type) => (
                  <li key={type} className="flex items-start gap-3 text-base text-textSoft">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-t-2 border-border bg-primaryDark pt-10 lg:border-t-0 lg:rounded-[1.75rem] lg:p-10 lg:pt-10">
              <h2 className="font-display text-3xl text-white">Request to contribute</h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                If you are a qualified professional and would like to be considered for our expert contributor program, submit a request. All submissions are reviewed by our editorial team. We do not accept unsolicited personal stories or promotional content.
              </p>
              <a
                href="mailto:hello@meno-kit.com?subject=Meno-Kit%20expert%20contributor%20request"
                className="mt-8 inline-block"
              >
                <Button variant="secondary" size="lg" className="bg-white text-primaryDark hover:bg-primaryLight">
                  Request contributor access
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection tone="lavender" innerClassName="!py-20 lg:!py-24">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-section-title">Be first to read.</h2>
            <p className="text-body-lg mt-5">
              Join the waitlist and we'll let you know when our first expert articles go live.
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
