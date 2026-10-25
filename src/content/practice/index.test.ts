import { describe, expect, it } from 'vitest'
import { SITE } from '../site'
import { domainOf, linkOf, questionsOf } from '.'

const both = [...questionsOf('en-US'), ...questionsOf('pt-BR')]

describe('the practice questions', () => {
  it('copy the two question types of the exam', () => {
    // Given every question in both languages

    // When the ones off the format of the exam are collected
    const offFormat = both.filter((question) => {
      const answers = new Set(question.answers)
      const inRange = question.answers.every((answer) => answer >= 0 && answer < question.options.length)
      const single = question.answers.length === 1 && question.options.length === 4
      const multiple = question.answers.length >= 2 && question.options.length >= 5
      return answers.size !== question.answers.length || !inRange || !(single || multiple)
    })

    // Then there are none
    expect(offFormat.map((question) => question.id)).toEqual([])
  })

  it('say how many responses to select when more than one is correct', () => {
    // Given the words the exam uses for two and three responses
    const counts: Record<number, RegExp> = {
      2: /\((Select TWO|Selecione DUAS)\.\)$/,
      3: /\((Select THREE|Selecione TRÊS)\.\)$/,
    }

    // When the multiple response questions that do not say it are collected
    const silent = both.filter(
      (question) => question.answers.length > 1 && !counts[question.answers.length]?.test(question.stem),
    )

    // Then there are none
    expect(silent.map((question) => question.id)).toEqual([])
  })

  it('give a reason for every response and a passage of AWS as proof of every correct one', () => {
    // Given every question in both languages

    // When the ones missing a reason or a proof are collected
    const unproven = both.filter(
      (question) =>
        question.reasons.length !== question.options.length ||
        question.reasons.some((reason) => reason.trim() === '') ||
        question.evidence.length !== question.answers.length ||
        question.evidence.some(
          (proof) =>
            !/^https:\/\/(docs\.aws\.amazon\.com|aws\.amazon\.com)\//.test(proof.url) ||
            proof.url.includes(':~:') ||
            proof.quote.trim().length < 20,
        ),
    )

    // Then there are none
    expect(unproven.map((question) => question.id)).toEqual([])
  })

  it('test a task of a domain of the exam and never repeat an identifier', () => {
    // Given the questions of one language
    const questions = questionsOf('en-US')

    // When the misplaced and the repeated ones are collected
    const misplaced = questions.filter(
      (question) =>
        !/^\d\.\d$/.test(question.task) || domainOf(question) < 1 || domainOf(question) > SITE.practice.weights.length,
    )
    const repeated = questions.map((q) => q.id).filter((id, index, ids) => ids.indexOf(id) !== index)

    // Then there are none
    expect({ misplaced: misplaced.map((q) => q.id), repeated }).toEqual({ misplaced: [], repeated: [] })
  })

  it('never repeat a response inside a question', () => {
    // Given every question in both languages

    // When the questions with two identical responses are collected
    const repeated = both.filter((question) => new Set(question.options).size !== question.options.length)

    // Then there are none
    expect(repeated.map((question) => question.id)).toEqual([])
  })
})

describe('the link of a proof', () => {
  it('highlights a short passage whole, after the section it belongs to', () => {
    // Given a short passage in a section of a page
    const proof = { url: 'https://docs.aws.amazon.com/guide/page.html#section', quote: 'Pay only for what you use.' }

    // When its link is made
    const link = linkOf(proof)

    // Then the text fragment follows the fragment of the section, with every word of the passage
    expect(link).toBe('https://docs.aws.amazon.com/guide/page.html#section:~:text=Pay%20only%20for%20what%20you%20use.')
  })

  it('matches a long passage by its first and last words and escapes the dashes', () => {
    // Given a long passage of a page without sections
    const proof = {
      url: 'https://aws.amazon.com/page/',
      quote:
        'AWS is responsible for protecting the infrastructure that runs all of the services, a pay-as-you-go model.',
    }

    // When its link is made
    const link = linkOf(proof)

    // Then the text fragment carries the first four and the last four words
    expect(link).toBe(
      'https://aws.amazon.com/page/#:~:text=AWS%20is%20responsible%20for,services%2C%20a%20pay%2Das%2Dyou%2Dgo%20model.',
    )
  })
})
