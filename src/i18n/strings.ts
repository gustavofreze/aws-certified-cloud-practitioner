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
    readonly certifications: string
    readonly search: string
    readonly review: string
    readonly practice: string
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
    /** What the structured data calls a topic page. */
    readonly resourceType: string
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
    readonly close: string
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
  /**
   * The practice exam. In the texts of the page, `{name}` stands for a value the page fills in: the number
   * of questions, the minutes, a count or a score.
   */
  readonly practice: {
    readonly title: string
    readonly lede: string
    readonly notice: string
    readonly examMode: string
    readonly examModeDetail: string
    readonly studyMode: string
    readonly studyModeDetail: string
    readonly domain: string
    readonly allDomains: string
    readonly count: string
    readonly allQuestions: string
    readonly domains: string
    readonly start: string
    readonly resume: string
    readonly facts: {
      readonly questions: string
      readonly minutes: string
      readonly passing: string
      readonly bank: string
    }
    readonly progress: string
    readonly domainNumber: string
    readonly map: string
    readonly answered: string
    readonly flagged: string
    readonly checked: string
    readonly tally: string
    readonly timeLeft: string
    readonly previous: string
    readonly next: string
    readonly check: string
    readonly flag: string
    readonly finish: string
    readonly confirmFinish: string
    readonly cancel: string
    readonly correct: string
    readonly incorrect: string
    readonly proof: string
    readonly result: string
    readonly score: string
    readonly scoreNote: string
    readonly passed: string
    readonly failed: string
    readonly byDomain: string
    readonly answers: string
    readonly again: string
    readonly unavailable: string
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
    certifications: 'Certificações',
    search: 'Buscar',
    review: 'Revisar',
    practice: 'Simulado',
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
    resourceType: 'Notas de estudo',
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
    close: 'Fechar a busca',
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
  practice: {
    title: 'Simulado',
    lede: 'Questões no formato da prova, com o motivo de cada alternativa e o trecho da AWS que comprova cada resposta certa.',
    notice:
      'As questões são originais, escritas a partir das tarefas do exam guide oficial. Não são questões da prova, que a AWS mantém em sigilo.',
    examMode: 'Prova completa',
    examModeDetail: '{questions} questões em {minutes} minutos, na proporção de cada domínio, com a nota só no fim.',
    studyMode: 'Treino',
    studyModeDetail: 'Escolha um domínio e confira cada resposta na hora.',
    domain: 'Domínio',
    allDomains: 'Todos os domínios',
    count: 'Questões',
    allQuestions: 'Todas',
    domains: 'Domínios da prova',
    start: 'Começar',
    resume: 'Continuar de onde parou',
    facts: { questions: 'Questões', minutes: 'Minutos', passing: 'Para passar', bank: 'No banco' },
    progress: 'Questão {current} de {total}',
    domainNumber: 'Domínio {number}',
    map: 'Mapa das questões',
    answered: 'Respondidas',
    flagged: 'Marcadas',
    checked: 'Conferidas',
    tally: '{right} de {total} corretas',
    timeLeft: 'Tempo restante',
    previous: 'Anterior',
    next: 'Próxima',
    check: 'Conferir',
    flag: 'Marcar',
    finish: 'Encerrar',
    confirmFinish: 'Encerrar agora? {count} sem resposta contam como erradas.',
    cancel: 'Voltar',
    correct: 'Correta',
    incorrect: 'Incorreta',
    proof: 'Comprovação na AWS',
    result: 'Resultado',
    score: 'Nota estimada',
    scoreNote:
      'A prova usa uma nota escalonada de 100 a 1.000. Esta estimativa projeta a fração de acertos nessa escala. Mínimo para aprovação: {passing}.',
    passed: 'Aprovado',
    failed: 'Ainda não',
    byDomain: 'Acertos por domínio',
    answers: 'Suas respostas',
    again: 'Fazer outro',
    unavailable: 'O simulado precisa de JavaScript.',
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
    certifications: 'Certifications',
    search: 'Search',
    review: 'Review',
    practice: 'Practice exam',
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
    resourceType: 'Study notes',
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
    close: 'Close search',
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
  practice: {
    title: 'Practice exam',
    lede: 'Questions in the format of the exam, with the reason behind every response and the passage of AWS that proves every correct one.',
    notice:
      'The questions are original, written from the task statements of the official exam guide. They are not questions from the exam, which AWS keeps confidential.',
    examMode: 'Full exam',
    examModeDetail: '{questions} questions in {minutes} minutes, weighted by domain, scored only at the end.',
    studyMode: 'Practice',
    studyModeDetail: 'Pick a domain and check each answer as you go.',
    domain: 'Domain',
    allDomains: 'All domains',
    count: 'Questions',
    allQuestions: 'All',
    domains: 'Exam domains',
    start: 'Start',
    resume: 'Resume where you left off',
    facts: { questions: 'Questions', minutes: 'Minutes', passing: 'To pass', bank: 'In the bank' },
    progress: 'Question {current} of {total}',
    domainNumber: 'Domain {number}',
    map: 'Question map',
    answered: 'Answered',
    flagged: 'Marked',
    checked: 'Checked',
    tally: '{right} of {total} correct',
    timeLeft: 'Time left',
    previous: 'Previous',
    next: 'Next',
    check: 'Check',
    flag: 'Mark',
    finish: 'Finish',
    confirmFinish: 'Finish now? {count} unanswered count as wrong.',
    cancel: 'Go back',
    correct: 'Correct',
    incorrect: 'Incorrect',
    proof: 'Proof at AWS',
    result: 'Result',
    score: 'Estimated score',
    scoreNote:
      'The exam reports a scaled score from 100 to 1,000. This estimate maps the share of correct answers onto that scale. Passing score: {passing}.',
    passed: 'Passed',
    failed: 'Not yet',
    byDomain: 'Correct by domain',
    answers: 'Your answers',
    again: 'Take another',
    unavailable: 'The practice exam needs JavaScript.',
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
