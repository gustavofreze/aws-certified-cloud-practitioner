/**
 * The progress of the review: which cards the reader already knows.
 *
 * The set is kept in this browser only, under one key for both languages, because both publish the same
 * topics and sections and a card known in one is known in the other. It is a convenience, so a browser
 * that refuses storage simply starts every session from zero.
 */
const KEY = 'ccp:known'

/** Reads the cards marked as known, or none when storage is unavailable or holds something else. */
function storedKnown(): Set<string> {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(KEY) ?? '[]')
    return new Set(Array.isArray(value) ? value.filter((item) => typeof item === 'string') : [])
  } catch {
    return new Set()
  }
}

function init(): void {
  const bar = document.querySelector<HTMLElement>('[data-review]')
  const count = bar?.querySelector<HTMLElement>('[data-review-count]')
  const hide = bar?.querySelector<HTMLInputElement>('[data-review-hide]')
  const reset = bar?.querySelector<HTMLButtonElement>('[data-review-reset]')
  const cards = [...document.querySelectorAll<HTMLElement>('[data-card]')]
  if (!bar || !count || !hide || !reset) {
    return
  }

  const known = storedKnown()
  const apply = (): void => {
    for (const card of cards) {
      const isKnown = known.has(card.dataset.card ?? '')
      card.toggleAttribute('data-known', isKnown)
      card.querySelector('[data-card-known]')?.setAttribute('aria-pressed', String(isKnown))
    }
    count.textContent = (bar.dataset.progress ?? '')
      .replace('{known}', String(cards.filter((card) => card.hasAttribute('data-known')).length))
      .replace('{total}', String(cards.length))
    try {
      localStorage.setItem(KEY, JSON.stringify([...known]))
    } catch {}
  }

  for (const card of cards) {
    card.querySelector('[data-card-known]')?.addEventListener('click', () => {
      const id = card.dataset.card ?? ''
      if (!known.delete(id)) {
        known.add(id)
      }
      apply()
    })
  }
  hide.addEventListener('change', () => document.documentElement.toggleAttribute('data-hide-known', hide.checked))
  reset.addEventListener('click', () => {
    known.clear()
    apply()
  })

  document.documentElement.dataset.review = 'on'
  apply()
}

init()

export {}
