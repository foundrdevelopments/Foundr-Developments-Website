import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-home.png"
          alt="A refined contemporary South African home at golden hour"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/20" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-28">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
          Est. 1994 · South Africa
        </span>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl leading-[1.05] text-primary-foreground md:text-6xl lg:text-7xl">
          Protecting the spaces that hold a life.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
          For over 30 years, {siteConfig.name} has protected, refined and developed South African
          homes — the single biggest asset most families will ever own.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm font-medium text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View our work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  )
}
