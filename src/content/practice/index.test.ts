import { describe, expect, it } from 'vitest'
import { SITE } from '../site'
import { domainOf, questionsOf } from '.'

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

  it('give a reason for every response and an AWS page as proof of every correct one', () => {
    // Given every question in both languages

    // When the ones missing a reason or a proof are collected
    const unproven = both.filter(
      (question) =>
        question.reasons.length !== question.options.length ||
        question.reasons.some((reason) => reason.trim() === '') ||
        question.evidence.length !== question.answers.length ||
        question.evidence.some((proof) => !/^https:\/\/(docs\.aws\.amazon\.com|aws\.amazon\.com)\//.test(proof)),
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
