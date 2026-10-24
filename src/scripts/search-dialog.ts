/**
 * Progressive enhancement for the search. The link of the bar to the search page opens the search as a
 * dialog over the page instead, and so does Ctrl K or ⌘ K; a press outside the dialog closes it, as its
 * `closedby` asks, and so does following a result, which may lead to a section of the same page. The
 * search itself, and the index behind it, load the first time they are needed, so a page that is never
 * searched pays only for this. On the search page the form of the page is bound too, following the term
 * in the address.
 */
const control = document.querySelector('[data-search-open]')
const dialog = document.querySelector<HTMLDialogElement>('dialog[data-search-dialog]')
const page = document.querySelector('main [data-search]')

if (page) {
  void import('./search.ts').then((search) => search.bind(page.parentElement ?? document, true))
}

if (control && dialog) {
  const open = (event: Event): void => {
    event.preventDefault()
    dialog.showModal()
    void import('./search.ts').then((search) => search.bind(dialog, false))
  }
  control.addEventListener('click', open)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'k' && (event.ctrlKey || event.metaKey) && !dialog.open) {
      open(event)
    }
  })
  dialog.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) {
      dialog.close()
    }
  })
}

export {}
