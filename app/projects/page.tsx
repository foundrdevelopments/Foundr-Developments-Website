import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { projects } from "@/lib/content"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of homes developed, refined and protected by Foundr Developments across South Africa.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Homes we are proud to have shaped."
        intro="A selection of developments, renovations and restorations from across South Africa — each one a home cared for as if it were our own."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <article key={project.slug} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <div className="group relative overflow-hidden rounded-2xl">
                <div className={`relative w-full ${i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-accent">
                    <span>{project.category}</span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                    <span className="text-muted-foreground">{project.location}</span>
                  </div>
                  <h2 className="mt-3 text-2xl leading-snug">{project.title}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <span className="shrink-0 font-serif text-lg text-muted-foreground/60">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Imagine what we could do with your home."
        subtitle="Every project starts with a conversation. We'd love to hear your vision."
      />
    </>
  )
}
