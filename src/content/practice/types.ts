/**
 * The shape of the practice questions.
 *
 * Every question copies the two types the exam guide describes. A multiple choice question has one
 * correct response out of four. A multiple response question has two or more correct responses out of
 * five or more, and its stem ends saying how many to select, as the exam does. The wrong responses are
 * distractors: plausible answers that a candidate with incomplete knowledge would choose.
 *
 * Each language publishes the same questions under the same identifiers, with the same task, the same
 * number of responses and the same correct ones, so a question read in one language is the same
 * question in the other. Every response carries the reason it is right or wrong, and every correct
 * response quotes the passage of the AWS documentation that states it, linked to where the page says
 * it, so the answer rests on what AWS publishes rather than on the word of the notes.
 */
import type { Inline } from '../types'

/** A passage of an AWS page that proves a correct response. */
export interface Evidence {
  /** The page, with the fragment of the section that holds the passage when it has one. */
  readonly url: string
  /** The passage, copied word for word from the page, in the language of the page. */
  readonly quote: string
}

export interface Question {
  /** Stable across languages and across edits, such as `d2-014`. */
  readonly id: string
  /** The task statement of the exam guide the question tests, such as `2.3`. Its first digit is the domain. */
  readonly task: string
  readonly stem: Inline
  readonly options: readonly Inline[]
  /** The positions of the correct responses in `options`, starting at zero. */
  readonly answers: readonly number[]
  /** Why each response is right or wrong, in the order of `options`. */
  readonly reasons: readonly Inline[]
  /** The passage of AWS that proves each correct response, in the order of `answers`. */
  readonly evidence: readonly Evidence[]
}

/** One file of questions per domain, each publishing them in both languages. */
export interface QuestionFile {
  readonly enUS: readonly Question[]
  readonly ptBR: readonly Question[]
}
