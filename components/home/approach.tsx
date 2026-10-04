import Image from "next/image"
import { Eyebrow } from "@/components/eyebrow"

const pillars = [
  {
    title: "Three decades of craft",
    body: "Experience earned across hundreds of homes — from ground-up builds to careful heritage restoration.",
  },
  {
    title: "Confidence for buyers & sellers",
    body: "A property cared for by Foundr carries a story of stewardship that reassures everyone at the table.",
  },
  {
    title: "A single, accountable team",
    body: "One team, from first conversation to final handover, protecting your interests at every step.",
  },
]

export function Approach() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/about-craft.png"
              alt="Foundr Developments craftsmanship on site"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <Eyebrow>Why Foundr</Eyebrow>
          <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
            A trusted custodian for your most valuable asset.
          </h2>
          <p className="mt-5 text-pretty text-muted-foreground">
            We believe the best developments are built on relationships, not transactions. Our work
            raises the standard of the industry and gives South African homeowners genuine peace of
            mind.
          </p>

          <dl className="mt-10 space-y-8">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="flex gap-5">
                <span className="font-serif text-2xl leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <dt className="text-lg text-foreground">{pillar.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{pillar.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
