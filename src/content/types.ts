/**
 * The shape of the study notes. Each language publishes the same topics, under the same slugs, with the
 * same sections in the same order, so a page in one language always has its twin in the other.
 *
 * Every section has the same anatomy, which is what keeps the pages symmetric: a summary, the points that
 * matter, and the way the subject shows up on the exam. A table or a list of links is added only where
 * the subject calls for one.
 *
 * Running text is written as `Inline`, a small markup the renderer in `inline.ts` understands:
 * `**bold**`, `` `code` `` and `[label](address)`.
 */
import type { IconName } from '../components/icons'

export type Inline = string

export interface Table {
  readonly title: string
  readonly head: readonly [string, string]
  readonly rows: readonly { readonly key: string; readonly cells: readonly Inline[] }[]
}

export interface Link {
  readonly label: string
  readonly href: string
}

export interface Section {
  readonly id: string
  readonly name: string
  readonly fullName?: string
  /** The page of the subject at AWS. */
  readonly link?: string
  readonly summary: Inline
  /** The points that matter. A section of links lists them instead. */
  readonly points?: readonly Inline[]
  readonly links?: readonly Link[]
  /** How the subject shows up on the exam. */
  readonly tip: Inline
  readonly table?: Table
}

import type { TopicGroup } from './site'

export type { TopicGroup }

export interface Topic {
  readonly slug: string
  readonly group: TopicGroup
  readonly icon: IconName
  readonly title: string
  /** One sentence, for the card on the home and for the description of the page. */
  readonly summary: string
  /** What the cover says under the title. */
  readonly lede: Inline
  readonly sections: readonly Section[]
}
