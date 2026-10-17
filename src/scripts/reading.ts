/**
 * The two things on a topic page that only a running script can give: the mark on the section being read
 * in the index, and the share of the page already behind the reader.
 *
 * The page is complete without either. Each entry of the index is a link to an anchor that exists, and
 * the line across the top is hidden by the stylesheet wherever scripting is off.
 */
/**
 * Scrolls the bar of pills sideways so the lit one stays visible on a narrow screen. Only the bar moves,
 * never the page, which `scrollIntoView` would also scroll.
 */
function keepInView(link: HTMLElement): void {
  const bar = link.closest<HTMLElement>('[data-subnav]')
  if (bar === null || bar.scrollWidth <= bar.clientWidth) {
    return
  }
  const left = link.offsetLeft - (bar.clientWidth - link.offsetWidth) / 2
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  bar.scrollTo({ left, behavior: calm ? 'auto' : 'smooth' })
}

/**
 * Marks the section being read in the bar of tabs.
 *
 * The band watched is the top third of the window rather than all of it, because a long section and a
 * short one would otherwise both be intersecting and the mark would sit on whichever came last. A short
 * last section never reaches that band, so at the end of the page the mark moves to it rather than
 * staying on the one before.
 */
function markCurrentSection(): void {
  const links = new Map<string, HTMLAnchorElement>()
  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-section-link]')) {
    const target = link.dataset.sectionLink
    if (target) {
      links.set(target, link)
    }
  }

  const sections = [...links.keys()]
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null)
  if (sections.length === 0) {
    return
  }

  let current: HTMLAnchorElement | undefined
  const mark = (link: HTMLAnchorElement | undefined): void => {
    if (link && link !== current) {
      current?.removeAttribute('aria-current')
      link.setAttribute('aria-current', 'location')
      current = link
      keepInView(link)
    }
  }
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      mark(visible && links.get(visible.target.id))
    },
    { rootMargin: '0px 0px -67% 0px', threshold: 0 },
  )

  for (const section of sections) {
    observer.observe(section)
  }

  const last = [...links.values()].at(-1)
  window.addEventListener(
    'scroll',
    () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        mark(last)
      }
    },
    { passive: true },
  )
}

/** Draws how far through the page the reader is, as the scale of the line across the top. */
function drawProgress(): void {
  const progress = document.querySelector<HTMLElement>('[data-read]')
  if (progress === null) {
    return
  }

  let queued = false
  const paint = (): void => {
    queued = false
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const read = scrollable > 0 ? window.scrollY / scrollable : 0
    progress.style.setProperty('--read', String(Math.min(1, Math.max(0, read))))
  }
  const schedule = (): void => {
    if (!queued) {
      queued = true
      requestAnimationFrame(paint)
    }
  }

  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
  paint()
}

markCurrentSection()
drawProgress()

export {}
