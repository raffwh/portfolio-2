import { ArrowUpRight } from 'lucide-react'
import { contact } from '@/content/portfolio'
import { Section } from './section'

export function ContactSection() {
  const links = [
    { label: contact.linkedin.label, href: contact.linkedin.href },
    { label: contact.github.label, href: contact.github.href },
    ...(contact.resume ? [{ label: contact.resume.label, href: contact.resume.href }] : []),
  ]

  return (
    <Section
      id="contact"
      title="Contact"
      lede="Glad to go deeper on any project, including work that can't be shown publicly."
    >
      <p className="text-sm text-muted-foreground">Email is the fastest way to reach me.</p>
      <a
        href={`mailto:${contact.email}`}
        className="link-draw mt-3 inline-block pb-1 font-serif text-3xl font-medium tracking-tight break-all sm:text-5xl lg:text-6xl"
      >
        {contact.email}
      </a>

      <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-6 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 font-medium hover:text-primary"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
