import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Eyebrow } from "@/components/eyebrow"
import { articles } from "@/lib/content"

export function NewsPreview() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>News & insights</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
              Perspectives from the industry.
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            All articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href="/news" className="group flex flex-col">
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
                <span className="text-muted-foreground">{article.readingTime}</span>
              </div>
              <h3 className="mt-3 text-xl leading-snug transition-colors group-hover:text-accent">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
