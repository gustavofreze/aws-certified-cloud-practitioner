/**
 * Scroll reveals for cards. Nothing is hidden until this script marks the root, so a page whose script
 * never arrived stays fully visible. Each element is revealed once and then left alone.
 */
function init(): void {
  const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]
  if (targets.length === 0 || !('IntersectionObserver' in window)) {
    return
  }

  document.documentElement.dataset.reveal = 'on'

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  )

  for (const target of targets) {
    observer.observe(target)
  }
}

init()

export {}
