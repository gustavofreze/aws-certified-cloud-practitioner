/**
 * Progressive enhancement for the native <details> language menu: close it on Escape and on an outside
 * click, returning focus to the summary on Escape. The menu works without this.
 *
 * It also carries the section being read across the switch. Both languages publish the same section
 * identifiers, so the anchor in the address lands on the same section in the other language.
 */
function init(): void {
  const menus = [...document.querySelectorAll<HTMLDetailsElement>('details.locale-menu')]
  if (menus.length === 0) {
    return
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
      return
    }
    for (const menu of menus) {
      if (menu.open) {
        menu.open = false
        menu.querySelector('summary')?.focus()
      }
    }
  })

  document.addEventListener('click', (event) => {
    for (const menu of menus) {
      if (menu.open && !menu.contains(event.target as Node)) {
        menu.open = false
      }
    }
  })

  for (const link of document.querySelectorAll<HTMLAnchorElement>('a[data-locale-link]')) {
    link.addEventListener('click', () => {
      if (window.location.hash !== '' && window.location.hash !== '#top') {
        link.hash = window.location.hash
      }
    })
  }
}

init()

export {}
