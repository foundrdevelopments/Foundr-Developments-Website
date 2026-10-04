import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Eyebrow } from "@/components/eyebrow"
import { projects } from "@/lib/content"

export function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-tight md:text-4xl">
              Homes shaped with intention and care.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Link href="/projects" className="group relative row-span-2 overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={featured[0].image || "/placeholder.svg"}
                alt={featured[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-8">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/75">
                {featured[0].category} · {featured[0].location}
              </p>
              <h3 className="mt-2 text-2xl text-primary-foreground">{featured[0].title}</h3>
            </div>
          </Link>

          <div className="flex flex-col gap-6">
            {featured.slice(1, 3).map((project) => (
              <Link
                key={project.slug}
                href="/projects"
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-6">
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/75">
                    {project.category} · {project.location}
                  </p>
                  <h3 className="mt-1.5 text-xl text-primary-foreground">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
