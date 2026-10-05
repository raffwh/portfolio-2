import { contact, education } from '@/content/portfolio'
import { Section } from './section'
import { Text } from './text'

const linkClass = 'font-medium text-primary underline underline-offset-4 hover:no-underline break-all'

export function EducationContactSection() {
  const links = [
    { label: 'Email', href: `mailto:${contact.email}`, text: contact.email, external: false },
    { label: 'LinkedIn', href: contact.linkedin.href, text: contact.linkedin.href.replace(/^https?:\/\/(www\.)?/, ''), external: true },
    { label: 'GitHub', href: contact.github.href, text: contact.github.href.replace(/^https?:\/\//, ''), external: true },
    ...(contact.resume
      ? [{ label: 'Resume', href: contact.resume.href, text: contact.resume.label, external: true }]
      : []),
  ]

  return (
    <>
      <Section id="education" index="04" title="Education">
        <ul className="divide-y divide-border">
          {education.map((item, index) => (
            <li key={index} className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <p className="font-mono text-xs text-muted-foreground sm:pt-1">
                <Text>{item.dates}</Text>
              </p>
              <div>
                <h3 className="font-medium">
                  <Text>{item.qualification}</Text>
                  <span className="ml-2 text-xs font-normal uppercase tracking-wider text-primary">{item.status}</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Text>{item.institution}</Text>
                </p>
                {item.note && (
                  <p className="mt-1 text-sm leading-relaxed">
                    <Text>{item.note}</Text>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" index="05" title="Contact">
        <p className="max-w-xl leading-relaxed text-foreground/85">
          The best way to reach me is by email. I&apos;m glad to discuss any project in more depth,
          including work that can&apos;t be shown publicly.
        </p>
        <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
          {links.map((link) => (
            <div key={link.label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:pt-0.5">
                {link.label}
              </dt>
              <dd>
                <a
                  href={link.href}
                  className={linkClass}
                  {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {link.text}
                  {link.external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
