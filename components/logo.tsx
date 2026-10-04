import { siteConfig } from "@/lib/site"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "baseline" }}>
      <span
        style={{ fontFamily: "var(--font-serif)" }}
        className="text-2xl font-medium tracking-tight leading-none"
      >
        {siteConfig.shortName}
      </span>
      <span
        aria-hidden="true"
        className="ml-0.5 text-2xl leading-none text-accent"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        .
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </span>
  )
}
