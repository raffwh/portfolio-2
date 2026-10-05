import { skills } from '@/content/portfolio'
import { Section } from './section'
import { Text } from './text'

export function SkillsSection() {
  return (
    <Section id="skills" title="Toolkit" lede="Grouped by the kind of problem each one helps me solve.">
      <dl className="divide-y divide-border border-y border-border">
        {skills.map((group, index) => (
          <div key={index} className="grid items-baseline gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8">
            <dt className="text-sm text-muted-foreground">
              <Text>{group.category}</Text>
            </dt>
            <dd className="font-serif text-xl leading-snug md:text-2xl">
              {group.skills.map((skill, i) => (
                <span key={i}>
                  <Text>{skill}</Text>
                  {i < group.skills.length - 1 && (
                    <span aria-hidden="true" className="mx-2 font-sans font-light text-primary/50">
                      /
                    </span>
                  )}
                  {i < group.skills.length - 1 && <span className="sr-only">,</span>}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
