import { Eyebrow } from "@/components/eyebrow"

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl leading-[1.08] md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
