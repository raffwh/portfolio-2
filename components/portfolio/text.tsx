const PLACEHOLDER_PATTERN = /(\[[^\]]+\])/g

/**
 * Renders text from the content file. Segments in [square brackets] are
 * highlighted so unfinished placeholders are easy to find before publishing.
 */
export function Text({ children }: { children: string }) {
  const parts = children.split(PLACEHOLDER_PATTERN).filter(Boolean)

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('[') && part.endsWith(']') ? (
          <span
            key={index}
            className="border border-dashed border-primary/40 bg-accent/60 px-1 text-foreground/70 [box-decoration-break:clone]"
          >
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  )
}
