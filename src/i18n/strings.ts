/**
 * The words of the interface around the notes, in each language the site ships. The notes themselves
 * live in `content/`, and this table holds only the chrome: the bar, the controls, the home and the
 * labels of a topic page.
 */
import type { TopicGroup } from '../content/types'

export type Locale = 'pt-BR' | 'en-US'

/** The id of the main landmark, which the skip link jumps to. */
export const MAIN_ID = 'conteudo'

export interface SiteCopy {
  readonly meta: { readonly title: string; readonly description: string; readonly ogLocale: string }
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
  readonly home: {
    readonly eyebrow: string
    readonly title: string
    readonly lede: string
    readonly start: string
    readonly examGuide: string
    readonly groups: Readonly<Record<TopicGroup, { readonly title: string; readonly lede: string }>>
  }
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
  }
  readonly footer: { readonly source: string }
  readonly notFound: { readonly title: string; readonly lede: string; readonly back: string }
}

const ptBR: SiteCopy = {
  meta: {
    title: 'AWS Certified Cloud Practitioner · Notas de estudo',
    description:
      'Notas de estudo para a certificação AWS Certified Cloud Practitioner: computação em nuvem, infraestrutura global, Well-Architected e os principais serviços da AWS.',
    ogLocale: 'pt_BR',
  },
  brand: 'Cloud Practitioner',
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
    eyebrow: 'Notas de estudo',
    title: 'AWS Certified Cloud Practitioner',
    lede: 'Um compilado do conteúdo estudado em cursos, artigos, simulados e outros materiais que ajudaram na preparação para a certificação.',
    start: 'Começar pelo roteiro',
    examGuide: 'Sobre a certificação',
    groups: {
      foundations: { title: 'Fundamentos', lede: 'O que é a nuvem, onde ela roda e como projetar sobre ela.' },
      services: { title: 'Serviços', lede: 'Os serviços que mais aparecem no exame, agrupados por categoria.' },
      support: { title: 'Suporte e materiais', lede: 'Planos de suporte e o que usar para estudar.' },
    },
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
    placeholder: 'Ex.: Spot, multi-AZ, CloudTrail',
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
  },
  footer: { source: 'Código no GitHub' },
  notFound: {
    title: 'Página não encontrada',
    lede: 'O endereço não existe ou mudou de lugar.',
    back: 'Voltar ao início',
  },
}

const enUS: SiteCopy = {
  meta: {
    title: 'AWS Certified Cloud Practitioner · Study notes',
    description:
      'Study notes for the AWS Certified Cloud Practitioner certification: cloud computing, global infrastructure, Well-Architected and the core AWS services.',
    ogLocale: 'en_US',
  },
  brand: 'Cloud Practitioner',
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
    eyebrow: 'Study notes',
    title: 'AWS Certified Cloud Practitioner',
    lede: 'A compilation of what I studied in courses, articles, practice exams and other material while preparing for the certification.',
    start: 'Start the roadmap',
    examGuide: 'About the certification',
    groups: {
      foundations: { title: 'Foundations', lede: 'What the cloud is, where it runs and how to design on it.' },
      services: { title: 'Services', lede: 'The services that show up most on the exam, grouped by category.' },
      support: { title: 'Support and resources', lede: 'Support plans and what to study with.' },
    },
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
    placeholder: 'E.g. Spot, multi-AZ, CloudTrail',
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
