const stats = [
  { value: "30+", label: "Years of experience" },
  { value: "250+", label: "Homes developed & refined" },
  { value: "3", label: "Provinces served" },
  { value: "100%", label: "Client-first stewardship" },
]

export function Stats() {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-serif text-4xl text-accent md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
