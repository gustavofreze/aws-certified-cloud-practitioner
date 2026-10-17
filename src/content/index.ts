/**
 * The topics of the notes in each language, in the order the roadmap walks them.
 *
 * Both languages are checked against each other when the site is built: the same slugs in the same
 * order, and the same section identifiers inside each topic. A page in one language always has its
 * twin, so the language menu never leads nowhere, and an anchor kept across the switch still lands on
 * the same section.
 */
import type { Locale } from '../i18n/strings'
import { topics as enUS } from './en-US'
import { topics as ptBR } from './pt-BR'
import type { Topic } from './types'

const TOPICS: Readonly<Record<Locale, readonly Topic[]>> = {
  'pt-BR': ptBR,
  'en-US': enUS,
}

function shapeOf(topics: readonly Topic[]): string {
  return topics.map((topic) => `${topic.slug}:${topic.group}:${topic.sections.map((s) => s.id).join(',')}`).join('|')
}

if (shapeOf(ptBR) !== shapeOf(enUS)) {
  throw new Error('The pt-BR and en-US notes must publish the same topics, groups and sections, in the same order.')
}

export function topicsOf(locale: Locale): readonly Topic[] {
  return TOPICS[locale]
}

/** The topic at a slug, with the ones before and after it on the roadmap. */
export function topicAt(
  locale: Locale,
  slug: string,
): { readonly topic: Topic; readonly previous?: Topic; readonly next?: Topic } {
  const topics = TOPICS[locale]
  const index = topics.findIndex((topic) => topic.slug === slug)
  const topic = topics[index]
  if (topic === undefined) {
    throw new Error(`No topic at "${slug}" in ${locale}.`)
  }
  const previous = topics[index - 1]
  const next = topics[index + 1]
  return { topic, ...(previous ? { previous } : {}), ...(next ? { next } : {}) }
}
