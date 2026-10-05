import { profile } from '@/content/portfolio'
import { EducationContactSection } from '@/components/portfolio/education-contact-section'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { Introduction } from '@/components/portfolio/introduction'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { SiteHeader } from '@/components/portfolio/site-header'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { Text } from '@/components/portfolio/text'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-20 focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-6xl px-5 md:px-8">
        <Introduction />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationContactSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-6 text-xs text-muted-foreground md:px-8">
          <p>
            © {new Date().getFullYear()} <Text>{profile.name}</Text>
          </p>
          <a href="#top" className="underline-offset-4 hover:text-foreground hover:underline">
            Back to top
          </a>
        </div>
      </footer>
    </>
  )
}
