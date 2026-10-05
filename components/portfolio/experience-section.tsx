import { experience } from '@/content/portfolio'
import { Section } from './section'
import { Text } from './text'

export function ExperienceSection() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="divide-y divide-border">
        {experience.map((item, index) => (
          <li key={index} className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <p className="font-mono text-xs text-muted-foreground sm:pt-1">
              <Text>{item.start}</Text> – <Text>{item.end}</Text>
            </p>
            <div>
              <h3 className="font-medium">
                <Text>{item.role}</Text>
              </h3>
              <p className="text-sm text-muted-foreground">
                <Text>{item.organization}</Text> · <Text>{item.location}</Text>
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed marker:text-muted-foreground">
                {item.highlights.map((highlight, i) => (
                  <li key={i}>
                    <Text>{highlight}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
