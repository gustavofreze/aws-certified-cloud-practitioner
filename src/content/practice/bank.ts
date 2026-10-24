/**
 * What the practice page fetches when the reader starts: the shape of the exam, the names of its
 * domains, the words of the page and every question already rendered. It is published as JSON beside
 * the page rather than inside it, so the page stays light until someone starts.
 */
import { getCopy, type Locale } from '../../i18n/strings'
import { SITE, SITE_TEXT } from '../site'
import { renderedQuestionsOf } from '.'

export function bankOf(locale: Locale) {
  return {
    exam: SITE.practice,
    domains: SITE_TEXT[locale].domains,
    labels: getCopy(locale).practice,
    questions: renderedQuestionsOf(locale),
  }
}

export type Bank = ReturnType<typeof bankOf>
