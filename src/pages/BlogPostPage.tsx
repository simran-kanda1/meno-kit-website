import { Link, useParams } from "react-router-dom"

import { JoinWaitlistButton } from "@/components/JoinWaitlistButton"
import { PageSection } from "@/components/PageSection"
import { SectionLabel } from "@/components/SectionLabel"
import { getBlogPost } from "@/lib/blog-data"

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) {
    return (
      <main>
        <PageSection tone="cream" innerClassName="!py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-3xl text-primaryDark">Article not found</h1>
            <Link
              to="/blog"
              className="mt-6 inline-block text-base font-medium text-primaryDark transition-opacity hover:opacity-70"
            >
              Back to expert blog
            </Link>
          </div>
        </PageSection>
      </main>
    )
  }

  if (post.comingSoon) {
    return (
      <main>
        <PageSection tone="mesh" innerClassName="!py-20 lg:!py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Link
              to="/blog"
              className="text-sm font-medium text-primaryDark transition-opacity hover:opacity-70"
            >
              ← Back to expert blog
            </Link>
            <SectionLabel className="mt-8">{post.category}</SectionLabel>
            <h1 className="text-section-title mt-5">{post.title}</h1>
            <p className="text-body-lg mt-6">{post.excerpt}</p>
            <p className="mt-4 text-sm text-textMuted">
              {post.author} · {post.authorDetail}
            </p>
            <JoinWaitlistButton className="mt-10" size="lg">
              Notify me when it's live
            </JoinWaitlistButton>
          </div>
        </PageSection>
      </main>
    )
  }

  return (
    <main>
      <PageSection tone="white" innerClassName="!py-12 sm:!py-16">
        <article className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="text-sm font-medium text-primaryDark transition-opacity hover:opacity-70"
          >
            ← Back to expert blog
          </Link>
          <header className="mt-8 space-y-4 border-b-2 border-border pb-10">
            <div className="flex flex-wrap items-center gap-2 text-xs text-textMuted">
              <span className="rounded-full bg-lavenderPanel px-2.5 py-0.5 font-medium text-primaryDark">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-section-title">{post.title}</h1>
            <p className="text-sm font-medium text-textMuted">
              {post.author} · {post.authorDetail}
            </p>
          </header>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-textSoft">
            {post.body?.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </PageSection>
    </main>
  )
}
