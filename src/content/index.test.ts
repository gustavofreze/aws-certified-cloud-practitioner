import { describe, expect, it } from 'vitest'
import { topicAt, topicsOf } from '.'

describe('the notes in both languages', () => {
  it('publish the same topics and sections in the same order', () => {
    // Given the notes of each language
    const shape = (locale: 'pt-BR' | 'en-US') =>
      topicsOf(locale).map((topic) => [topic.slug, topic.group, topic.sections.map((section) => section.id)])

    // When their shapes are read
    const [portuguese, english] = [shape('pt-BR'), shape('en-US')]

    // Then they match
    expect(english).toEqual(portuguese)
  })

  it('never repeat a section inside a topic', () => {
    // Given every topic
    const topics = topicsOf('pt-BR')

    // When the sections that share an identifier are collected
    const repeated = topics.flatMap((topic) =>
      topic.sections.map((section) => section.id).filter((id, index, ids) => ids.indexOf(id) !== index),
    )

    // Then there are none
    expect(repeated).toEqual([])
  })

  it('give every section a tip and either points or links', () => {
    // Given every section in both languages
    const sections = [...topicsOf('pt-BR'), ...topicsOf('en-US')].flatMap((topic) => topic.sections)

    // When the incomplete ones are collected
    const incomplete = sections.filter(
      (section) => section.tip === '' || (section.points === undefined && section.links === undefined),
    )

    // Then there are none
    expect(incomplete).toEqual([])
  })

  it('place the first topic with no previous one', () => {
    // Given the first slug of the roadmap
    const [first] = topicsOf('en-US')

    // When it is looked up
    const neighbors = topicAt('en-US', first?.slug ?? '')

    // Then it has a next topic and no previous one
    expect({ previous: neighbors.previous, next: neighbors.next?.slug }).toEqual({
      previous: undefined,
      next: topicsOf('en-US')[1]?.slug,
    })
  })
})
