import { cn } from '@/lib/utils'
import type { Period } from '@/content/portfolio'

export type TimelineEntry = {
  href: string
  label: string
  detail: string
  period: Period
}

type Lane = {
  name: string
  variant: 'solid' | 'outline'
  entries: TimelineEntry[]
}

const ROW_HEIGHT_REM = 2.25

function stripPlaceholder(value: string) {
  return value.replace(/[[\]]/g, '')
}

function assignRows(entries: TimelineEntry[], now: number) {
  const rowEnds: number[] = []
  return [...entries]
    .sort((a, b) => a.period.from - b.period.from)
    .map((entry) => {
      const end = entry.period.to ?? now
      let row = rowEnds.findIndex((rowEnd) => rowEnd <= entry.period.from)
      if (row === -1) {
        row = rowEnds.length
        rowEnds.push(end)
      } else {
        rowEnds[row] = end
      }
      return { entry, row }
    })
}

export function CareerTimeline({ lanes }: { lanes: Lane[] }) {
  const today = new Date()
  const now = today.getFullYear() + today.getMonth() / 12
  const allFrom = lanes.flatMap((lane) => lane.entries.map((entry) => entry.period.from))
  const start = Math.floor(Math.min(...allFrom))
  const end = Math.floor(now) + 1
  const span = end - start
  const toPercent = (year: number) => ((year - start) / span) * 100
  const ticks = Array.from({ length: span + 1 }, (_, i) => start + i)
  const labelEvery = span > 10 ? 2 : 1

  return (
    <figure aria-hidden="true" className="-mx-5 overflow-x-auto px-5 pt-6 pb-2 md:mx-0 md:px-0">
      <div className="min-w-[36rem] pr-4">
        <div className="relative flex flex-col gap-4">
          <div className="pointer-events-none absolute inset-y-0 left-16 right-0">
            {ticks.map((year) => (
              <span
                key={year}
                className="absolute inset-y-0 border-l border-dashed border-border"
                style={{ left: `${toPercent(year)}%` }}
              />
            ))}
            <span className="absolute inset-y-0 border-l-2 border-primary" style={{ left: `${toPercent(now)}%` }}>
              <span className="absolute -top-5 -translate-x-1/2 font-mono text-[10px] text-primary">now</span>
            </span>
          </div>

          {lanes.map((lane) => {
            const placed = assignRows(lane.entries, now)
            const rows = Math.max(1, ...placed.map((item) => item.row + 1))
            return (
              <div key={lane.name} className="flex items-start">
                <span className="w-16 shrink-0 pt-1.5 text-xs text-muted-foreground">{lane.name}</span>
                <div className="relative flex-1" style={{ height: `${rows * ROW_HEIGHT_REM}rem` }}>
                  {placed.map(({ entry, row }) => {
                    const left = toPercent(entry.period.from)
                    const width = toPercent(entry.period.to ?? now) - left
                    return (
                      <a
                        key={entry.href}
                        href={entry.href}
                        tabIndex={-1}
                        title={`${stripPlaceholder(entry.label)} — ${stripPlaceholder(entry.detail)}`}
                        className={cn(
                          'bar-grow absolute flex h-7 items-center overflow-hidden px-2 text-xs font-medium whitespace-nowrap transition-colors',
                          lane.variant === 'solid'
                            ? 'bg-primary text-primary-foreground hover:bg-foreground'
                            : 'border border-primary bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground',
                          entry.period.to === null && 'border-r-0 [mask-image:linear-gradient(to_right,black_85%,transparent)]',
                        )}
                        style={{ left: `${left}%`, width: `${width}%`, top: `${row * ROW_HEIGHT_REM}rem` }}
                      >
                        <span className="truncate">{stripPlaceholder(entry.label)}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative ml-16 mt-3 h-4 border-t border-foreground">
          {ticks.map((year, i) =>
            i % labelEvery === 0 ? (
              <span
                key={year}
                className="absolute top-1 -translate-x-1/2 font-mono text-[10px] text-muted-foreground"
                style={{ left: `${toPercent(year)}%` }}
              >
                {year}
              </span>
            ) : null,
          )}
        </div>
      </div>
    </figure>
  )
}
