import { skills } from '@/content/portfolio'
import { Section } from './section'
import { Text } from './text'

export function SkillsSection() {
  return (
    <Section id="skills" index="03" title="Skills">
      <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {skills.map((group, index) => (
          <div key={index} className="bg-background p-5">
            <dt className="text-xs font-medium uppercase tracking-wider text-primary">
              <Text>{group.category}</Text>
            </dt>
            <dd className="mt-2 text-sm leading-relaxed">
              {group.skills.map((skill, i) => (
                <span key={i}>
                  <Text>{skill}</Text>
                  {i < group.skills.length - 1 && <span className="text-muted-foreground">{' · '}</span>}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
