export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  author: string
  authorDetail: string
  date: string
  readTime: string
  category: string
  body?: string[]
  comingSoon?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "expert-insights-coming-soon",
    title: "Our first expert article is on the way",
    excerpt:
      "Credentialed menopause specialists, dietitians, and researchers are preparing evidence-based guidance for the Meno-Kit community. Be the first to read it when we launch.",
    author: "Meno-Kit Editorial",
    authorDetail: "Expert contributor program",
    date: "Coming soon",
    readTime: "—",
    category: "Launching soon",
    comingSoon: true,
  },
]

export const upcomingBlogTopics = [
  "Hormonal shifts in perimenopause",
  "Sleep and nutrition during menopause",
  "Brain fog — myth vs. clinical reality",
]

export const expertContributorTypes = [
  "Menopause specialists and OB-GYNs",
  "Registered dietitians and nutritionists",
  "Sleep medicine and mental health clinicians",
  "Women's health researchers and educators",
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
