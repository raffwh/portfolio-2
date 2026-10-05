'use client'

import { useState } from 'react'
import { projects } from '@/content/portfolio'
import { ProjectRow } from './project-row'
import { Section } from './section'

const FEATURED_COUNT = 3

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  const featured = projects.filter((project) => project.featured).slice(0, FEATURED_COUNT)
  const remaining = projects.filter((project) => !featured.includes(project))
  const visible = showAll ? [...featured, ...remaining] : featured

  return (
    <Section id="projects" title="Selected Projects">
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Work, personal, and academic projects. Each entry separates my own contribution from the
        team&apos;s. Work projects reflect my own account and are not endorsed by the employer.
      </p>

      <div id="project-list">
        {visible.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>

      {remaining.length > 0 && (
        <div className="mt-6 border-t border-foreground pt-6">
          <button
            type="button"
            aria-expanded={showAll}
            aria-controls="project-list"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex h-10 items-center border border-foreground px-5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            {showAll ? 'Show featured only' : `Show all projects (${projects.length})`}
          </button>
        </div>
      )}
    </Section>
  )
}
