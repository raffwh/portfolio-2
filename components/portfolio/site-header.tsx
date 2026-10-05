import { profile } from '@/content/portfolio'
import { Text } from './text'

const NAV_ITEMS = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Toolkit' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="truncate text-sm font-semibold tracking-tight">
          <Text>{profile.name}</Text>
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-4 text-sm md:gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={item.href === '#skills' ? 'hidden sm:block' : undefined}>
                <a
                  href={item.href}
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div aria-hidden="true" className="reading-progress absolute inset-x-0 -bottom-px h-0.5 bg-primary" />
    </header>
  )
}
