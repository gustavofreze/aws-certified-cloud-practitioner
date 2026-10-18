/**
 * The words of the interface around the notes, in each language the site ships. The notes themselves
 * live in `content/`, and this table holds only the chrome: the bar, the controls, the home and the
 * labels of a topic page.
 */
import { SITE_TEXT, type SiteText } from '../content/site'

export type Locale = 'pt-BR' | 'en-US'

/** The id of the main landmark, which the skip link jumps to. */
export const MAIN_ID = 'content'

export interface SiteCopy {
  readonly meta: SiteText['meta'] & { readonly ogLocale: string }
  readonly brand: string
  readonly skipLink: string
  readonly theme: { readonly label: string; readonly light: string; readonly dark: string }
  readonly localeSwitch: { readonly ariaLabel: string; readonly names: Readonly<Record<Locale, string>> }
  readonly nav: {
    readonly home: string
    readonly toTop: string
    readonly roadmap: string
    readonly breadcrumb: string
    readonly search: string
    readonly review: string
  }
  readonly home: SiteText['home'] & { readonly start: string; readonly examGuide: string }
  readonly topic: {
    readonly onThisPage: string
    readonly previous: string
    readonly next: string
    readonly officialPage: string
    readonly keyPoints: string
    readonly examTip: string
    readonly step: (index: number, total: number) => string
  }
  readonly search: {
    readonly title: string
    readonly lede: string
    readonly label: string
    readonly placeholder: string
    readonly idle: string
    readonly loading: string
    readonly empty: string
    readonly unavailable: string
    /** How many pages matched, with `{count}` standing for the number. */
    readonly count: string
  }
  readonly review: {
    readonly title: string
    readonly lede: string
    readonly question: string
    readonly reveal: string
    readonly openSection: string
    readonly known: string
    /** How far the review has gone, with `{known}` and `{total}` standing for the numbers. */
    readonly progress: string
    readonly hideKnown: string
    readonly reset: string
  }
  readonly footer: { readonly source: string }
  readonly notFound: { readonly title: string; readonly lede: string; readonly back: string }
}

const ptBR: SiteCopy = {
  meta: { ...SITE_TEXT['pt-BR'].meta, ogLocale: 'pt_BR' },
  brand: SITE_TEXT['pt-BR'].brand,
  skipLink: 'Pular para o conteúdo',
  theme: { label: 'Tema', light: 'Tema claro', dark: 'Tema escuro' },
  localeSwitch: {
    ariaLabel: 'Idioma',
    names: { 'pt-BR': 'Português (Brasil)', 'en-US': 'English (US)' },
  },
  nav: {
    home: 'Início',
    toTop: 'Voltar ao topo',
    roadmap: 'Roteiro',
    breadcrumb: 'Você está em',
    search: 'Buscar',
    review: 'Revisar',
  },
  home: {
    ...SITE_TEXT['pt-BR'].home,
    start: 'Começar pelo roteiro',
    examGuide: 'Sobre a certificação',
  },
  topic: {
    onThisPage: 'Nesta página',
    previous: 'Anterior',
    next: 'Próximo',
    officialPage: 'Página oficial',
    keyPoints: 'Pontos-chave',
    examTip: 'Na prova',
    step: (index, total) => `${String(index).padStart(2, '0')} de ${String(total).padStart(2, '0')}`,
  },
  search: {
    title: 'Buscar nas notas',
    lede: 'Procure um serviço, um conceito ou uma palavra-chave da prova.',
    label: 'Termo de busca',
    placeholder: SITE_TEXT['pt-BR'].searchPlaceholder,
    idle: 'Digite pelo menos duas letras.',
    loading: 'Buscando...',
    empty: 'Nada encontrado. Tente outra palavra.',
    unavailable: 'A busca só funciona no site gerado pelo build.',
    count: 'Resultados: {count}',
  },
  review: {
    title: 'Revisão',
    lede: 'Leia a descrição, tente lembrar o serviço ou o conceito e abra o cartão para conferir.',
    question: 'Qual é?',
    reveal: 'Mostrar resposta',
    openSection: 'Ver a seção completa',
    known: 'Já sei',
    progress: '{known} de {total} cartões que você já sabe',
    hideKnown: 'Esconder os que já sei',
    reset: 'Recomeçar',
  },
  footer: { source: 'Código no GitHub' },
  notFound: {
    title: 'Página não encontrada',
    lede: 'O endereço não existe ou mudou de lugar.',
    back: 'Voltar ao início',
  },
}

const enUS: SiteCopy = {
  meta: { ...SITE_TEXT['en-US'].meta, ogLocale: 'en_US' },
  brand: SITE_TEXT['en-US'].brand,
  skipLink: 'Skip to content',
  theme: { label: 'Theme', light: 'Light theme', dark: 'Dark theme' },
  localeSwitch: {
    ariaLabel: 'Language',
    names: { 'pt-BR': 'Português (Brasil)', 'en-US': 'English (US)' },
  },
  nav: {
    home: 'Home',
    toTop: 'Back to top',
    roadmap: 'Roadmap',
    breadcrumb: 'You are here',
    search: 'Search',
    review: 'Review',
  },
  home: {
    ...SITE_TEXT['en-US'].home,
    start: 'Start the roadmap',
    examGuide: 'About the certification',
  },
  topic: {
    onThisPage: 'On this page',
    previous: 'Previous',
    next: 'Next',
    officialPage: 'Official page',
    keyPoints: 'Key points',
    examTip: 'On the exam',
    step: (index, total) => `${String(index).padStart(2, '0')} of ${String(total).padStart(2, '0')}`,
  },
  search: {
    title: 'Search the notes',
    lede: 'Look up a service, a concept or an exam keyword.',
    label: 'Search term',
    placeholder: SITE_TEXT['en-US'].searchPlaceholder,
    idle: 'Type at least two letters.',
    loading: 'Searching...',
    empty: 'Nothing found. Try another word.',
    unavailable: 'Search only works on the site produced by the build.',
    count: 'Results: {count}',
  },
  review: {
    title: 'Review',
    lede: 'Read the description, try to recall the service or concept, then open the card to check.',
    question: 'What is it?',
    reveal: 'Show answer',
    openSection: 'Open the full section',
    known: 'I know this',
    progress: '{known} of {total} cards you already know',
    hideKnown: 'Hide the ones I know',
    reset: 'Start over',
  },
  footer: { source: 'Source on GitHub' },
  notFound: {
    title: 'Page not found',
    lede: 'This address does not exist or has moved.',
    back: 'Back to home',
  },
}

const COPY: Readonly<Record<Locale, SiteCopy>> = { 'pt-BR': ptBR, 'en-US': enUS }

export function getCopy(locale: Locale): SiteCopy {
  return COPY[locale]
}
