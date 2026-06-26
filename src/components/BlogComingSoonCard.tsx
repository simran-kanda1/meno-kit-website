import { Link } from "react-router-dom"

import { JoinWaitlistButton } from "@/components/JoinWaitlistButton"
import { type BlogPost } from "@/lib/blog-data"

type BlogComingSoonCardProps = {
  post: BlogPost
  variant?: "home" | "page"
}

export function BlogComingSoonCard({ post, variant = "page" }: BlogComingSoonCardProps) {
  const isHome = variant === "home"

  return (
    <article
      className={
        isHome
          ? "mx-auto max-w-2xl border-t-2 border-border pt-10 text-center"
          : "border-t-2 border-border pt-10"
      }
    >
      <div className={isHome ? undefined : "max-w-2xl"}>
        <span className="inline-block rounded-full border border-primary/15 bg-lavenderPanel px-3 py-1 text-xs font-medium uppercase tracking-wider text-primaryDark">
          {post.category}
        </span>
        <h3 className={`font-display text-primaryDark ${isHome ? "mt-6 text-3xl sm:text-4xl" : "mt-5 text-3xl sm:text-4xl"}`}>
          {post.title}
        </h3>
        <p className={`text-body-lg text-textSoft ${isHome ? "mx-auto mt-4 max-w-lg" : "mt-4"}`}>
          {post.excerpt}
        </p>
        <p className="mt-4 text-sm text-textMuted">
          {post.author} · {post.authorDetail}
        </p>
        <div className={`flex flex-wrap gap-3 ${isHome ? "mt-8 justify-center" : "mt-8"}`}>
          <JoinWaitlistButton size="lg">
            Get notified when we publish
          </JoinWaitlistButton>
          {isHome && (
            <Link
              to="/blog"
              className="inline-flex h-11 items-center rounded-full border border-border px-6 text-base font-medium text-primaryDark transition-opacity hover:opacity-70"
            >
              Contributor program
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
