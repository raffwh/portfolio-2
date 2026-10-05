import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-foreground py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="font-mono text-xs text-muted-foreground" aria-hidden="true">
            {index}
          </p>
          <h2 id={headingId} className="mt-1 font-serif text-2xl font-medium tracking-tight md:text-3xl">
            {title}
          </h2>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  )
}
