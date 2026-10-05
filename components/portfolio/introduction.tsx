import { profile } from '@/content/portfolio'
import { Text } from './text'

export function Introduction() {
  return (
    <section id="top" aria-labelledby="intro-heading" className="relative isolate pb-16 pt-14 md:pb-24 md:pt-24">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-y-0 -inset-x-5 -z-10 md:-inset-x-8" />

      <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        <Text>{profile.availability}</Text>
      </p>

      <h1
        id="intro-heading"
        className="mt-6 font-serif text-5xl font-medium leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-8xl"
      >
        <Text>{profile.name}</Text>
      </h1>

      <div className="mt-10 grid gap-8 border-t border-border pt-8 md:mt-14 md:grid-cols-12">
        <p className="font-serif text-2xl leading-snug text-pretty md:col-span-7 md:text-3xl">
          <Text>{profile.headline}</Text>
        </p>

        <div className="md:col-span-5">
          <p className="leading-relaxed text-foreground/80 text-pretty">
            <Text>{profile.intro}</Text>
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <Text>{profile.location}</Text>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-10 items-center border border-primary bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Selected projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center border border-foreground bg-background px-5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
