import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Eyebrow } from "@/components/eyebrow"
import { CtaBand } from "@/components/cta-band"
import { services } from "@/lib/content"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Develop, refine and protect — the three pillars of how Foundr Developments cares for South African homes.",
}

const process = [
  { step: "01", title: "Listen", body: "We begin with your goals, your home and your budget — understanding the full picture before anything else." },
  { step: "02", title: "Plan", body: "Feasibility, design direction, timelines and transparent costing, agreed together before we break ground." },
  { step: "03", title: "Build", body: "A single accountable team executes with craft, communicating clearly at every milestone." },
  { step: "04", title: "Care", body: "Handover is the beginning of a relationship — we stay on to protect the value we help create." },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Develop. Refine. Protect."
        intro="Three complementary services that cover the full life of a home — from the first foundation to decades of ongoing care."
      />

      <div className="mx-auto max-w-6xl px-6">
        {services.map((service, i) => (
          <section
            key={service.slug}
            className="grid items-center gap-12 border-b border-border/60 py-20 lg:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/11] w-full">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <span className="font-serif text-5xl text-accent/30">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{service.title}</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{service.summary}</p>
              <ul className="mt-8 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
              A calm, considered process from first call to lasting care.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="bg-card p-8">
                <p className="font-serif text-3xl text-accent">{item.step}</p>
                <h3 className="mt-4 text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        subtitle="Tell us about your home and we'll point you in the right direction — no obligation."
      />
    </>
  )
}
