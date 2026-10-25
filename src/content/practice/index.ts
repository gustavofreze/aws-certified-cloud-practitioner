/**
 * The bank of practice questions in each language, and what the practice page receives from it.
 *
 * Both languages are checked against each other when the site is built, as the notes are: the same
 * identifiers in the same order, each with the same task, the same number of responses, the same
 * correct ones and one proof for each of them.
 */
import type { Locale } from '../../i18n/strings'
import { Glossary } from '../glossary'
import { escapeHtml, renderInline } from '../inline'
import type { Evidence, Question, QuestionFile } from './types'

const FILES = import.meta.glob<QuestionFile>('./questions/*.ts', { eager: true })
const files = Object.keys(FILES)
  .sort()
  .map((path) => FILES[path] as QuestionFile)

const QUESTIONS: Readonly<Record<Locale, readonly Question[]>> = {
  'en-US': files.flatMap((file) => file.enUS),
  'pt-BR': files.flatMap((file) => file.ptBR),
}

function shapeOf(questions: readonly Question[]): string {
  return questions
    .map((q) => `${q.id}:${q.task}:${q.options.length}:${q.answers.join(',')}:${q.evidence.length}`)
    .join('|')
}

if (shapeOf(QUESTIONS['pt-BR']) !== shapeOf(QUESTIONS['en-US'])) {
  throw new Error(
    'The pt-BR and en-US practice questions must share identifiers, tasks, responses, answers and proofs.',
  )
}

export function questionsOf(locale: Locale): readonly Question[] {
  return QUESTIONS[locale]
}

/** The domain of a question: the first digit of its task, counted from one. */
export function domainOf(question: Question): number {
  return Number(question.task.split('.')[0])
}

/**
 * The address that opens the page on the passage and highlights it, through a text fragment after the
 * fragment of the section. A long passage is matched by its first and last words, so markup inside it
 * cannot break the match, and the section stays as the place to land if AWS rewords the passage.
 */
export function linkOf(evidence: Evidence): string {
  const encode = (text: string): string => encodeURIComponent(text).replace(/-/g, '%2D')
  const words = evidence.quote.trim().split(/\s+/)
  const text =
    words.length <= 8
      ? encode(words.join(' '))
      : `${encode(words.slice(0, 4).join(' '))},${encode(words.slice(-4).join(' '))}`
  return `${evidence.url}${evidence.url.includes('#') ? '' : '#'}:~:text=${text}`
}

/**
 * A question as the practice page reads it, its markup already rendered. Only the reasons explain their
 * acronyms: a meaning beside a response would hand over the answer, which the exam never does.
 */
export interface RenderedQuestion {
  readonly id: string
  readonly domain: number
  readonly answers: readonly number[]
  readonly stem: string
  readonly options: readonly string[]
  readonly reasons: readonly string[]
  readonly evidence: readonly { readonly href: string; readonly quote: string }[]
}

export function renderedQuestionsOf(locale: Locale): RenderedQuestion[] {
  return QUESTIONS[locale].map((question) => {
    const glossary = new Glossary(
      locale,
      question.reasons.map((text) => ({ text, rendered: true })),
    )
    return {
      id: question.id,
      domain: domainOf(question),
      answers: question.answers,
      stem: renderInline(question.stem),
      options: question.options.map((option) => renderInline(option)),
      reasons: question.reasons.map((reason) => renderInline(reason, glossary)),
      evidence: question.evidence.map((proof) => ({ href: linkOf(proof), quote: escapeHtml(proof.quote) })),
    }
  })
}
