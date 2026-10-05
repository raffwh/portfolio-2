import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  lede?: string
  children: ReactNode
}

export function Section({ id, title, lede, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-foreground py-14 md:py-20">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-24">
            <h2 id={headingId} className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              {title}
            </h2>
            {lede && <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">{lede}</p>}
          </div>
        </div>
        <div className="reveal md:col-span-9">{children}</div>
      </div>
    </section>
  )
}
