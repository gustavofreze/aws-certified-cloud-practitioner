/**
 * Locale routing helpers. Astro's native i18n owns the routing (see astro.config.ts): pt-BR is the
 * default locale at the root with no prefix, en-US lives under `en/`. Every address is built on the base
 * the site is served under, because GitHub Pages publishes it below the name of the repository.
 */
import type { Locale } from './strings'

export const DEFAULT_LOCALE: Locale = 'pt-BR'

/** The locales the site ships, in the order the language menu offers them. */
export const LOCALES: readonly Locale[] = ['pt-BR', 'en-US']

const PREFIX: Readonly<Record<Locale, string>> = { 'pt-BR': '', 'en-US': 'en/' }

const BASE = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`

/** The address of a page in a locale: the home with no slug, a topic with one. */
export function pageHref(locale: Locale, slug?: string): string {
  return `${BASE}${PREFIX[locale]}${slug ? `${slug}/` : ''}`
}

/** The address of the same page in every locale, which is what the language menu and the alternates use. */
export function pagePaths(slug?: string): Record<Locale, string> {
  return { 'pt-BR': pageHref('pt-BR', slug), 'en-US': pageHref('en-US', slug) }
}

/** The address of a file published from `public/`. */
export function assetHref(path: string): string {
  return `${BASE}${path}`
}

/** The official page of the certification, in the language being read. */
export const CERTIFICATION_HREF: Readonly<Record<Locale, string>> = {
  'pt-BR': 'https://aws.amazon.com/pt/certification/certified-cloud-practitioner/',
  'en-US': 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
}

export const REPOSITORY_HREF = 'https://github.com/gustavofreze/aws-certified-cloud-practitioner'
