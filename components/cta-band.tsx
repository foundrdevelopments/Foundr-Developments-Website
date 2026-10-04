import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBand({
  title = "Let's protect what matters most.",
  subtitle = "Whether you are building, refining or safeguarding your home, we would love to hear about your project.",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-pretty text-accent-foreground/85">{subtitle}</p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
