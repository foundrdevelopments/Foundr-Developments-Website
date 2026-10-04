import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { articles } from "@/lib/content"

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Perspectives on property, craft and care from the team at Foundr Developments.",
}

export default function NewsPage() {
  const [lead, ...rest] = articles

  return (
    <>
      <PageHero
        eyebrow="News & insights"
        title="Perspectives on property, craft and care."
        intro="Thinking from our team on building well, protecting value and raising the standard of the South African property industry."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <article className="group grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={lead.image || "/placeholder.svg"}
                alt={lead.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-accent">
              <span>Featured</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span className="text-muted-foreground">{lead.date}</span>
            </div>
            <h2 className="mt-4 text-balance text-3xl leading-tight md:text-4xl">{lead.title}</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{lead.excerpt}</p>
            <p className="mt-6 text-sm text-muted-foreground/70">{lead.readingTime}</p>
          </div>
        </article>

        <hr className="my-16 border-border/60" />

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <article key={article.slug} className="group flex flex-col">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-accent">
                <span>{article.category}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span className="text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="mt-3 text-xl leading-snug transition-colors group-hover:text-accent">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
              <p className="mt-4 text-sm text-muted-foreground/70">{article.readingTime}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want to stay in the loop?"
        subtitle="Get in touch to receive our occasional notes on property, craft and care."
      />
    </>
  )
}
