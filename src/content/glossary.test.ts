import { describe, expect, it } from 'vitest'
import { topicsOf } from '.'
import { ACRONYMS, Glossary, readingsOf } from './glossary'
import { renderInline } from './inline'

/** Words in capitals that are names, units, codes or formats, which read fine without a meaning. */
const LEFT_AS_IS = new Set(
  [
    'AAAA AI AM AMD AWS AWSEC2 C02 C03 CAA CCP CLF CNAME COPY CSV DASH DELETE DSS DT EXTERNAL GB GET',
    'GUIDE GZIP HEAD ID IOV ISO IT JSON KB LAMP LF MB MPEG MQ MX NET NS ONTAP OPTIONS ORC OSS PB PDF PHP',
    'POST PTR PUT QUIC SAA SAP SOA SPF SR SRV SUSE SYN TB TI TXT US USD VUE WA XFS YAML ZFS ZIP',
  ]
    .join(' ')
    .split(' '),
)

describe('the glossary of a page', () => {
  it('explains an acronym the first time it is read and only marks it after', () => {
    // Given a page that mentions EC2 twice
    const texts = ['**EC2** runs servers.', 'Patch **EC2** yourself.']
    const glossary = new Glossary(
      'en-US',
      texts.map((text) => ({ text, rendered: true })),
    )

    // When both texts are rendered
    const html = texts.map((text) => renderInline(text, glossary))

    // Then only the first one carries the meaning
    expect(html).toEqual([
      '<strong><abbr title="Elastic Compute Cloud">EC2</abbr> (Elastic Compute Cloud)</strong> runs servers.',
      'Patch <strong><abbr title="Elastic Compute Cloud">EC2</abbr></strong> yourself.',
    ])
  })

  it('does not explain an acronym the page already spells out', () => {
    // Given a section whose full name carries the meaning
    const glossary = new Glossary('en-US', [
      { text: 'Amazon Simple Storage Service', rendered: false },
      { text: 'S3 stores objects.', rendered: true },
    ])

    // When the text is rendered
    const html = renderInline('S3 stores objects.', glossary)

    // Then the acronym is only marked
    expect(html).toBe('<abbr title="Simple Storage Service">S3</abbr> stores objects.')
  })

  it('leaves an acronym inside a compound or a code span unexplained', () => {
    // Given texts with an acronym joined to another word and one inside code
    const texts = ['Uses OS-bypass.', 'Run `EC2` here.']
    const glossary = new Glossary(
      'en-US',
      texts.map((text) => ({ text, rendered: true })),
    )

    // When they are rendered
    const html = texts.map((text) => renderInline(text, glossary))

    // Then neither gets a meaning in the text
    expect(html).toEqual(['Uses <abbr title="operating system">OS</abbr>-bypass.', 'Run <code>EC2</code> here.'])
  })

  it('explains a plural in the language of the page', () => {
    // Given a Portuguese page that only reads AZs in the plural
    const glossary = new Glossary('pt-BR', [{ text: 'Use duas AZs.', rendered: true }])

    // When it is rendered
    const html = renderInline('Use duas AZs.', glossary)

    // Then the meaning is the Portuguese plural
    expect(html).toBe('Use duas <abbr title="Zona de Disponibilidade">AZs</abbr> (Zonas de Disponibilidade).')
  })

  it('knows every acronym the notes use', () => {
    // Given every rendered text of the notes in both languages
    const texts = [...topicsOf('pt-BR'), ...topicsOf('en-US')].flatMap((topic) => [
      topic.lede,
      ...topic.sections.flatMap(readingsOf).map((reading) => reading.text),
    ])

    // When the words in capitals that the glossary does not know are collected
    const known = new Set([...ACRONYMS.flatMap((key) => key.split(/[-/ ]/)), ...LEFT_AS_IS])
    const unknown = texts
      .map((text) => text.replace(/`[^`]+`/g, ' ').replace(/\]\([^)\s]+\)/g, ']'))
      .flatMap((text) => text.match(/\b[A-Z][A-Z0-9]*[A-Z0-9](?=s?\b)/g) ?? [])
      .filter((word) => !known.has(word))

    // Then there are none
    expect([...new Set(unknown)]).toEqual([])
  })
})
