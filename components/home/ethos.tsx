import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Eyebrow } from "@/components/eyebrow"
import { services } from "@/lib/content"

export function Ethos() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <Eyebrow>Our philosophy</Eyebrow>
        <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
          Three commitments that guide every home we touch.
        </h2>
        <p className="mt-5 text-pretty text-muted-foreground">
          A home is more than a building. It is where life happens and where value is quietly built
          over decades. Everything we do falls into three enduring commitments.
        </p>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href="/services"
            className="group flex flex-col bg-card p-8 transition-colors hover:bg-secondary"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-accent">{service.title}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
