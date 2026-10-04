import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Eyebrow } from "@/components/eyebrow"
import { CtaBand } from "@/components/cta-band"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Over 30 years protecting, refining and developing South African homes. Meet the ethos and values behind Foundr Developments.",
}

const values = [
  {
    title: "Stewardship",
    body: "We treat every home as if it were our own, protecting the value our clients have worked a lifetime to build.",
  },
  {
    title: "Craftsmanship",
    body: "Honest materials, meticulous detailing and standards that endure long after the last tool is packed away.",
  },
  {
    title: "Transparency",
    body: "Clear communication and accountability at every stage, so clients always know their home is in good hands.",
  },
  {
    title: "Longevity",
    body: "We build relationships and homes designed to last for generations, not just for the transaction.",
  },
]

const timeline = [
  { year: "1994", body: "Foundr Developments is founded on a simple promise: care for people's homes as if they were our own." },
  { year: "2003", body: "Expansion into full-scale renovation and heritage-sensitive restoration across the Western Cape." },
  { year: "2014", body: "Growth into ground-up residential development and boutique multi-unit projects." },
  { year: "2026", body: "Three decades on, still driven to raise industry standards and homeowner confidence." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Thirty years of caring for people's biggest asset."
        intro={`${siteConfig.name} exists to protect, refine and develop the spaces where life happens. We are driven to build industry awareness and give buyers and sellers genuine confidence.`}
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/5] w-full">
              <Image src="/images/about-interior.png" alt="A refined interior by Foundr Developments" fill className="object-cover" />
            </div>
          </div>
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
              A family of builders, craftspeople and custodians.
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                For most South African families, a home is the single largest investment they will
                ever make. That responsibility sits at the heart of everything we do.
              </p>
              <p>
                Over three decades we have developed, refined and protected homes across the country —
                earning a reputation for care, craft and quiet reliability. Our clients return to us,
                and refer us, because they know their property is genuinely well looked after.
              </p>
              <p>
                We are equally at home on a ground-up build, a considered renovation or an ongoing
                maintenance programme. Whatever the brief, the standard never changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <Eyebrow>What we value</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
              Principles that never go out of style.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-8">
                <h3 className="font-serif text-2xl text-accent">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <Eyebrow>Our journey</Eyebrow>
          <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
            Three decades, one standard.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.year} className="bg-card p-8">
              <p className="font-serif text-3xl text-accent">{item.year}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Build with a team that thinks in decades."
        subtitle="Let's talk about how we can protect, refine or develop your home."
      />
    </>
  )
}
