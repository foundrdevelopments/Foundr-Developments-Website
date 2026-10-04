export type Service = {
  slug: string
  title: string
  summary: string
  points: string[]
  image: string
}

export type Project = {
  slug: string
  title: string
  location: string
  category: string
  year: string
  summary: string
  image: string
}

export type Article = {
  slug: string
  title: string
  category: string
  date: string
  readingTime: string
  excerpt: string
  image: string
}

export const services: Service[] = [
  {
    slug: "develop",
    title: "Develop",
    summary:
      "Ground-up residential development and considered extensions that add lasting value and elevate how a home lives.",
    points: [
      "New residential builds & multi-unit developments",
      "Extensions, additions & structural reconfiguration",
      "Feasibility, planning & council approvals",
      "Turnkey project management",
    ],
    image: "/images/service-develop.png",
  },
  {
    slug: "refine",
    title: "Refine",
    summary:
      "Renovation and refinement that respects the character of a home while introducing modern comfort and craft.",
    points: [
      "Full-home renovations & remodels",
      "Kitchens, bathrooms & bespoke joinery",
      "Heritage-sensitive restoration",
      "Interior finishes & material curation",
    ],
    image: "/images/service-refine.png",
  },
  {
    slug: "protect",
    title: "Protect",
    summary:
      "Proactive maintenance and stewardship that safeguard your investment and keep every detail performing beautifully.",
    points: [
      "Preventative maintenance programmes",
      "Property condition assessments & reporting",
      "Waterproofing, weatherproofing & repairs",
      "Ongoing care for resale confidence",
    ],
    image: "/images/service-protect.png",
  },
]

export const projects: Project[] = [
  {
    slug: "atlantic-seaboard-villa",
    title: "Atlantic Seaboard Villa",
    location: "Cape Town, Western Cape",
    category: "New Build",
    year: "2024",
    summary:
      "A contemporary villa framing ocean and mountain views, built with natural stone, timber and expansive glazing.",
    image: "/images/project-1.png",
  },
  {
    slug: "heritage-house-restoration",
    title: "Heritage House Restoration",
    location: "Parktown, Johannesburg",
    category: "Restoration",
    year: "2023",
    summary:
      "A sensitive restoration pairing original brickwork with a light-filled contemporary extension and garden.",
    image: "/images/project-2.png",
  },
  {
    slug: "courtyard-townhouses",
    title: "Courtyard Townhouses",
    location: "Stellenbosch, Western Cape",
    category: "Development",
    year: "2023",
    summary:
      "A boutique cluster of townhouses arranged around landscaped courtyards with warm timber detailing.",
    image: "/images/project-3.png",
  },
  {
    slug: "double-volume-family-home",
    title: "Double-Volume Family Home",
    location: "Sandton, Gauteng",
    category: "Renovation",
    year: "2022",
    summary:
      "A dramatic interior reimagining centred on a double-volume living space, statement staircase and oak floors.",
    image: "/images/project-4.png",
  },
]

export const articles: Article[] = [
  {
    slug: "material-choices-that-age-well",
    title: "Material choices that age well",
    category: "Craft",
    date: "12 August 2026",
    readingTime: "5 min read",
    excerpt:
      "Why we specify natural stone, solid timber and honest brass — and how the right materials reward patience over decades.",
    image: "/images/news-1.png",
  },
  {
    slug: "sa-property-value-through-care",
    title: "Protecting property value through care",
    category: "Market",
    date: "28 July 2026",
    readingTime: "6 min read",
    excerpt:
      "A well-maintained home commands buyer and seller confidence. Here is how proactive stewardship protects your asset.",
    image: "/images/news-2.png",
  },
  {
    slug: "warmth-in-modern-interiors",
    title: "Bringing warmth to modern interiors",
    category: "Design",
    date: "9 July 2026",
    readingTime: "4 min read",
    excerpt:
      "Minimalism does not have to feel cold. We explore texture, tone and light in the homes we refine.",
    image: "/images/news-3.png",
  },
]
