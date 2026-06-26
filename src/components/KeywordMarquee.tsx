const keywords = [
  "Perimenopause",
  "Hot Flashes",
  "Night Sweats",
  "Brain Fog",
  "Sleep Support",
  "Mood Swings",
  "Community",
  "Quarterly Kits",
  "Symptom Relief",
  "Real Conversations",
  "Self Care",
  "Hormone Health",
  "What Helped Me",
  "Anonymous Posting",
]

export function KeywordMarquee() {
  const items = [...keywords, ...keywords]

  return (
    <section
      aria-label="Topics we support"
      className="overflow-hidden border-y border-primaryDark/10 bg-surface py-8 sm:py-10"
    >
      <div className="marquee-row relative flex">
        <div className="marquee-track flex w-max items-center gap-16 px-8 sm:gap-20">
          {items.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex shrink-0 items-center gap-16 whitespace-nowrap font-display text-3xl text-primaryDark sm:gap-20 sm:text-4xl lg:text-5xl"
            >
              {word}
              <span className="text-primaryDark/25" aria-hidden>
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
