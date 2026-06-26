export type ShopBox = {
  id: string
  name: string
  tagline: string
  description: string
  isPersonalized?: boolean
}

export const curatedBoxes: ShopBox[] = [
  {
    id: "calm",
    name: "Calm & Balance",
    tagline: "For steadier days",
    description:
      "A curated box focused on easing stress, mood swings, and the emotional ups and downs of menopause.",
  },
  {
    id: "hotflash",
    name: "Hot Flash Relief",
    tagline: "For cooler comfort",
    description:
      "Targeted relief for hot flashes, night sweats, and the discomfort that can follow you through the day.",
  },
  {
    id: "sleep",
    name: "Sleep Support",
    tagline: "For better rest",
    description:
      "Tools and treats selected to support deeper, more restorative sleep during hormonal transition.",
  },
  {
    id: "gut",
    name: "Digestive Wellness",
    tagline: "For everyday comfort",
    description:
      "A gentle approach to digestive changes — bloating, sensitivity, and the shifts that often go unspoken.",
  },
]

export const personalizedBox: ShopBox = {
  id: "personalized",
  name: "Personalized Meno Kit",
  tagline: "Built around you",
  description:
    "A quarterly box shaped by your symptoms, your stage, and what you need most right now — updated as you change.",
  isPersonalized: true,
}

export const allBoxes = [...curatedBoxes, personalizedBox]
