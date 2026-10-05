import { profile } from '@/content/portfolio'
import { Text } from './text'

export function Introduction() {
  return (
    <section id="top" aria-labelledby="intro-heading" className="py-12 md:py-20">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-9 md:col-start-4">
          <h1 id="intro-heading" className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
            <Text>{profile.name}</Text>
          </h1>
          <p className="mt-4 text-lg font-medium leading-snug text-primary md:text-xl text-pretty">
            <Text>{profile.headline}</Text>
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-foreground/85 text-pretty">
            <Text>{profile.intro}</Text>
          </p>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Based in</dt>
              <dd>
                <Text>{profile.location}</Text>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground">Status</dt>
              <dd>
                <Text>{profile.availability}</Text>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-10 items-center border border-primary bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Selected projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center border border-foreground px-5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
