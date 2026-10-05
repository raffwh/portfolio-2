/**
 * PORTFOLIO CONTENT — edit this file to update the site.
 *
 * Every visible word, date, and link on the page comes from here.
 * Any string wrapped in [square brackets] is a placeholder: it renders
 * with a dashed outline on the page so you can spot what still needs
 * replacing. Remove the brackets once you've written real content.
 *
 * Only include facts you can stand behind. Leave optional fields as
 * `null` rather than inventing metrics, links, or outcomes.
 */

export type ProjectCategory = 'Work' | 'Personal' | 'Academic'

export type Link = {
  label: string
  href: string
}

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  date: string
  /** Shown in the first three slots on page load. */
  featured: boolean
  /** One or two sentences: the situation and the problem being solved. */
  context: string
  /** Your title or function on this project. */
  role: string
  /** What you personally did. Be specific. */
  myContribution: string
  /** What others did. Use null for solo projects. */
  teamContribution: string | null
  /** Concrete steps you took. Shown inside the expandable details. */
  actions: string[]
  tools: string[]
  /** What actually happened. Only real, verifiable results. */
  outcome: string
  /** Public link to code, demo, write-up, or paper. Null if none. */
  evidence: Link | null
  /** Explains the evidence situation when there is no public link. */
  evidenceNote: string | null
}

/**
 * Decimal years used only to draw the timeline chart.
 * 2023 = January 2023, 2023.5 = July 2023. Use `to: null` for ongoing.
 */
export type Period = {
  from: number
  to: number | null
}

export type ExperienceItem = {
  role: string
  organization: string
  location: string
  start: string
  end: string
  period: Period
  highlights: string[]
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export type EducationItem = {
  qualification: string
  institution: string
  dates: string
  status: string
  period: Period
  note: string | null
}

export const profile = {
  name: '[Your Name]',
  headline: '[Professional headline — e.g., Data analyst with X years in operations, now studying for an MSc in Y]',
  intro:
    '[Two or three sentences about the kind of problems you work on, the experience you bring from your previous roles, and what you are studying now. Write in first person and keep it concrete.]',
  location: '[City, Country]',
  availability: '[Current status — e.g., Open to full-time roles from June 2027]',
}

export const contact = {
  email: 'you@example.com',
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' },
  github: { label: 'GitHub', href: 'https://github.com/your-username' },
  /** Set to null to hide the resume link. Place the PDF in /public. */
  resume: { label: 'Resume (PDF)', href: '/resume.pdf' } as Link | null,
}

export const projects: Project[] = [
  {
    id: 'work-project-1',
    title: '[Work project title]',
    category: 'Work',
    date: '[Month Year – Month Year]',
    featured: true,
    context:
      '[Describe the business problem in plain terms. What was not working, and who was affected?]',
    role: '[Your role on the project]',
    myContribution:
      '[What you personally owned — the analysis, design, code, or decisions that were yours.]',
    teamContribution:
      '[What colleagues or other teams contributed — e.g., engineering implemented the pipeline I specified.]',
    actions: [
      '[First concrete action you took]',
      '[Second concrete action you took]',
      '[Third concrete action you took]',
    ],
    tools: ['[Tool]', '[Tool]', '[Tool]'],
    outcome:
      '[The real result. Use a number only if you can verify it; otherwise describe the qualitative change.]',
    evidence: null,
    evidenceNote:
      '[Internal work — code and data are confidential. Happy to walk through the approach in conversation.]',
  },
  {
    id: 'personal-project-1',
    title: '[Personal project title]',
    category: 'Personal',
    date: '[Year]',
    featured: true,
    context: '[Why you started this project and what question or need it addresses.]',
    role: '[Sole developer / designer / author]',
    myContribution: '[Everything you built, written in one or two sentences.]',
    teamContribution: null,
    actions: [
      '[Key step in building or researching the project]',
      '[Key technical or design decision and why you made it]',
    ],
    tools: ['[Tool]', '[Tool]'],
    outcome: '[Current state — e.g., in use by me weekly, published, or paused with lessons learned.]',
    evidence: { label: 'View repository', href: 'https://github.com/your-username/project' },
    evidenceNote: null,
  },
  {
    id: 'academic-project-1',
    title: '[Academic project title]',
    category: 'Academic',
    date: '[Term Year]',
    featured: true,
    context: '[Course or research context and the question the project investigated.]',
    role: '[e.g., Team lead in a group of four]',
    myContribution: '[The sections, models, or analysis you were responsible for.]',
    teamContribution: '[What the rest of the group delivered.]',
    actions: [
      '[Method or approach you applied]',
      '[How you validated or tested the work]',
    ],
    tools: ['[Tool]', '[Tool]', '[Tool]'],
    outcome: '[Grade, feedback, or finding — only if you are comfortable sharing it.]',
    evidence: { label: 'Read the report', href: '#' },
    evidenceNote: null,
  },
  {
    id: 'work-project-2',
    title: '[Second work project title]',
    category: 'Work',
    date: '[Month Year]',
    featured: false,
    context: '[Problem statement.]',
    role: '[Your role]',
    myContribution: '[Your specific contribution.]',
    teamContribution: '[Team contribution, or null if solo.]',
    actions: ['[Action]', '[Action]'],
    tools: ['[Tool]', '[Tool]'],
    outcome: '[Outcome.]',
    evidence: null,
    evidenceNote: '[No public artifacts — describe what you can share on request.]',
  },
  {
    id: 'personal-project-2',
    title: '[Second personal project title]',
    category: 'Personal',
    date: '[Year]',
    featured: false,
    context: '[Problem statement.]',
    role: '[Your role]',
    myContribution: '[Your specific contribution.]',
    teamContribution: null,
    actions: ['[Action]', '[Action]'],
    tools: ['[Tool]'],
    outcome: '[Outcome.]',
    evidence: { label: 'View demo', href: '#' },
    evidenceNote: null,
  },
]

export const experience: ExperienceItem[] = [
  {
    role: '[Most recent job title]',
    organization: '[Organization name]',
    location: '[City / Remote]',
    start: '[Mon Year]',
    end: '[Mon Year or Present]',
    period: { from: 2023, to: 2025.6 },
    highlights: [
      '[Main responsibility relevant to the roles you are targeting]',
      '[Second responsibility — scope, stakeholders, or systems you owned]',
    ],
  },
  {
    role: '[Previous job title]',
    organization: '[Organization name]',
    location: '[City / Remote]',
    start: '[Mon Year]',
    end: '[Mon Year]',
    period: { from: 2021.5, to: 2023 },
    highlights: ['[Main responsibility]', '[Second responsibility]'],
  },
  {
    role: '[Earlier role, internship, or part-time position]',
    organization: '[Organization name]',
    location: '[City / Remote]',
    start: '[Mon Year]',
    end: '[Mon Year]',
    period: { from: 2020.5, to: 2021.3 },
    highlights: ['[Main responsibility]'],
  },
]

export const skills: SkillGroup[] = [
  { category: '[Core domain — e.g., Analysis]', skills: ['[Skill]', '[Skill]', '[Skill]', '[Skill]'] },
  { category: '[Technical — e.g., Languages & Tools]', skills: ['[Skill]', '[Skill]', '[Skill]', '[Skill]'] },
  { category: '[Methods — e.g., Research & Delivery]', skills: ['[Skill]', '[Skill]', '[Skill]'] },
  { category: '[Collaboration]', skills: ['[Skill]', '[Skill]', '[Skill]'] },
]

export const education: EducationItem[] = [
  {
    qualification: '[Current degree — e.g., MSc Data Science]',
    institution: '[University name]',
    dates: '[Year – Year]',
    status: 'In progress',
    period: { from: 2025.7, to: null },
    note: '[Relevant modules or thesis topic — optional]',
  },
  {
    qualification: '[Previous degree]',
    institution: '[University name]',
    dates: '[Year – Year]',
    status: 'Completed',
    period: { from: 2017.7, to: 2021.5 },
    note: null,
  },
]
