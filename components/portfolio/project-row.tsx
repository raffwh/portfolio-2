import type { Project } from '@/content/portfolio'
import { Text } from './text'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:pt-0.5">{label}</dt>
      <dd className="leading-relaxed">{children}</dd>
    </div>
  )
}

export function ProjectRow({ project }: { project: Project }) {
  const headingId = `${project.id}-title`

  return (
    <article aria-labelledby={headingId} className="border-b border-border py-8 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="border border-primary px-1.5 py-0.5 text-xs font-medium uppercase tracking-wider text-primary">
          {project.category}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          <Text>{project.date}</Text>
        </span>
      </div>

      <h3 id={headingId} className="mt-3 font-serif text-xl font-medium tracking-tight md:text-2xl">
        <Text>{project.title}</Text>
      </h3>

      <p className="mt-2 max-w-2xl leading-relaxed text-foreground/85">
        <Text>{project.context}</Text>
      </p>

      <dl className="mt-5 grid gap-3 text-sm">
        <Field label="My role">
          <Text>{project.role}</Text>
        </Field>
        <Field label="I did">
          <Text>{project.myContribution}</Text>
        </Field>
        <Field label="Team did">
          {project.teamContribution ? (
            <Text>{project.teamContribution}</Text>
          ) : (
            <span className="text-muted-foreground">Solo project</span>
          )}
        </Field>
        <Field label="Outcome">
          <Text>{project.outcome}</Text>
        </Field>
      </dl>

      <details className="group mt-5 border-t border-border">
        <summary className="flex cursor-pointer list-none items-center gap-2 py-3 text-sm font-medium text-primary hover:underline underline-offset-4 [&::-webkit-details-marker]:hidden">
          <span aria-hidden="true" className="inline-block w-3 font-mono transition-transform group-open:rotate-90">
            {'>'}
          </span>
          <span className="group-open:hidden">Show actions, tools &amp; evidence</span>
          <span className="hidden group-open:inline">Hide details</span>
        </summary>

        <dl className="grid gap-4 pb-2 text-sm">
          <Field label="Actions taken">
            <ol className="list-decimal space-y-1.5 pl-5 marker:text-muted-foreground">
              {project.actions.map((action, index) => (
                <li key={index}>
                  <Text>{action}</Text>
                </li>
              ))}
            </ol>
          </Field>
          <Field label="Tools">
            <ul className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, index) => (
                <li key={index} className="border border-border bg-muted px-2 py-0.5 font-mono text-xs">
                  <Text>{tool}</Text>
                </li>
              ))}
            </ul>
          </Field>
          <Field label="Evidence">
            {project.evidence ? (
              <a
                href={project.evidence.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:no-underline"
              >
                {project.evidence.label}
                <span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            ) : (
              <span className="text-muted-foreground">
                <Text>{project.evidenceNote ?? 'No public artifacts available.'}</Text>
              </span>
            )}
          </Field>
        </dl>
      </details>
    </article>
  )
}
