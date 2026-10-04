import Link from "next/link"
import { Clock, Mail, Phone } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/site"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.3fr]">
          <div>
            <Logo className="h-8 w-auto text-primary-foreground" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.description}
            </p>
            <p className="mt-6 font-serif text-lg text-primary-foreground/90">{siteConfig.tagline}</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <ul className="space-y-1.5">
                  {siteConfig.contact.people.map((person) => (
                    <li key={person.name}>
                      <a href={`tel:${person.tel}`} className="hover:text-accent">
                        <span className="text-primary-foreground">{person.name}</span>{" "}
                        <span>{person.phone}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <ul className="space-y-1.5">
                  {siteConfig.contact.hours.map((entry) => (
                    <li key={entry.days}>
                      <span className="text-primary-foreground">{entry.days}</span>{" "}
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/55 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {siteConfig.social.map((s) => (
              <a key={s.label} href={s.href} className="transition-colors hover:text-accent">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
