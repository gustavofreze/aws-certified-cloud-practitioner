/**
 * Renders the small markup the notes are written in into HTML.
 *
 * The text is escaped first and the markup applied after, so nothing in the notes can reach the page as
 * markup of its own. Code spans are lifted out before the other rules run, so an asterisk or a bracket
 * inside one stays literal. Given the glossary of the page, the acronyms are marked last (see `glossary.ts`).
 */
import type { Glossary } from './glossary'
import type { Inline } from './types'

const ESCAPES: Readonly<Record<string, string>> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (char) => ESCAPES[char] ?? char)
}

export function renderInline(text: Inline, glossary?: Glossary): string {
  const codes: string[] = []
  const lifted = escapeHtml(text).replace(/`([^`]+)`/g, (_, code: string) => {
    codes.push(`<code>${code}</code>`)
    return `\uE000${codes.length - 1}\uE000`
  })

  const html = lifted
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\uE000(\d+)\uE000/g, (_, index: string) => codes[Number(index)] ?? '')
  return glossary ? glossary.mark(text, html) : html
}
