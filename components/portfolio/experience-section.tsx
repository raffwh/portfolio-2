import { education, experience } from '@/content/portfolio'
import { CareerTimeline } from './career-timeline'
import { Section } from './section'
import { Text } from './text'

const entryClass =
  'grid scroll-mt-24 gap-3 border-l-2 border-transparent py-6 pl-4 transition-colors target:border-primary target:bg-accent/50 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-8 -ml-4.5'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      lede="Work and study, drawn to scale. Select a bar to jump to the details."
    >
      <CareerTimeline
        lanes={[
          {
            name: 'Work',
            variant: 'solid',
            entries: experience.map((item, i) => ({
              href: `#exp-${i}`,
              label: item.role,
              detail: item.organization,
              period: item.period,
            })),
          },
          {
            name: 'Study',
            variant: 'outline',
            entries: education.map((item, i) => ({
              href: `#edu-${i}`,
              label: item.qualification,
              detail: item.institution,
              period: item.period,
            })),
          },
        ]}
      />

      <h3 className="mt-14 text-sm font-semibold">Work</h3>
      <ol className="mt-2 divide-y divide-border border-t border-border">
        {experience.map((item, i) => (
          <li key={i} id={`exp-${i}`} className={entryClass}>
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                <Text>{item.start}</Text> – <Text>{item.end}</Text>
              </p>
              <h4 className="mt-2 font-serif text-xl font-medium leading-snug tracking-tight">
                <Text>{item.role}</Text>
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <Text>{item.organization}</Text>, <Text>{item.location}</Text>
              </p>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed sm:pt-6">
              {item.highlights.map((highlight, j) => (
                <li key={j} className="flex gap-3">
                  <span aria-hidden="true" className="text-primary">
                    {'—'}
                  </span>
                  <span>
                    <Text>{highlight}</Text>
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="mt-12 text-sm font-semibold">Study</h3>
      <ol className="mt-2 divide-y divide-border border-t border-border">
        {education.map((item, i) => (
          <li key={i} id={`edu-${i}`} className={entryClass}>
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                <Text>{item.dates}</Text>
                <span className="text-primary">{` · ${item.status}`}</span>
              </p>
              <h4 className="mt-2 font-serif text-xl font-medium leading-snug tracking-tight">
                <Text>{item.qualification}</Text>
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <Text>{item.institution}</Text>
              </p>
            </div>
            {item.note && (
              <p className="text-sm leading-relaxed sm:pt-6">
                <Text>{item.note}</Text>
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
