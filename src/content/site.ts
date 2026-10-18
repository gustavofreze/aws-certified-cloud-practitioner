/**
 * What sets this certification apart from the other study sites built from the same code: its names, its
 * exam, the groups of its roadmap and the words of its home. Every other file of the site is shared.
 */
import type { Locale } from '../i18n/strings'

export const SITE = {
  /** Prefixes what the site keeps in the browser, which every site under the same domain shares. */
  id: 'ccp',
  repository: 'aws-certified-cloud-practitioner',
  exam: 'CLF-C02',
  level: 'Foundational',
  /** The name of the certification as the home and the preview card draw it, the second part highlighted. */
  name: { lead: 'AWS Certified', highlight: 'Cloud Practitioner' },
  certification: {
    'en-US': 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    'pt-BR': 'https://aws.amazon.com/pt/certification/certified-cloud-practitioner/',
  },
  /** The groups of the roadmap, in the order the home lists them. */
  groups: ['foundations', 'services', 'support'],
} as const

export type TopicGroup = (typeof SITE.groups)[number]

export interface SiteText {
  readonly meta: { readonly title: string; readonly description: string }
  readonly brand: string
  readonly home: {
    readonly eyebrow: string
    readonly title: string
    readonly lede: string
    readonly groups: Readonly<Record<TopicGroup, { readonly title: string; readonly lede: string }>>
  }
  readonly searchPlaceholder: string
}

export const SITE_TEXT: Readonly<Record<Locale, SiteText>> = {
  'en-US': {
    meta: {
      title: 'AWS Certified Cloud Practitioner (CLF-C02) · Study notes',
      description:
        'Free study notes for the AWS Certified Cloud Practitioner (CLF-C02) exam: cloud concepts, security, billing and AWS services, with search and review cards.',
    },
    brand: 'Cloud Practitioner',
    home: {
      eyebrow: 'Foundational · CLF-C02',
      title: 'AWS Certified Cloud Practitioner',
      lede: 'A compilation of what I studied in courses, articles, practice exams and other material while preparing for the certification.',
      groups: {
        foundations: { title: 'Foundations', lede: 'What the cloud is, where it runs and how to design on it.' },
        services: { title: 'Services', lede: 'The services that show up most on the exam, grouped by category.' },
        support: { title: 'Support and resources', lede: 'Support plans and what to study with.' },
      },
    },
    searchPlaceholder: 'E.g. Spot, multi-AZ, CloudTrail',
  },
  'pt-BR': {
    meta: {
      title: 'AWS Certified Cloud Practitioner (CLF-C02) · Notas de estudo',
      description:
        'Notas de estudo gratuitas para o exame AWS Cloud Practitioner (CLF-C02): nuvem, segurança, cobrança e serviços da AWS, com busca e cartões de revisão.',
    },
    brand: 'Cloud Practitioner',
    home: {
      eyebrow: 'Foundational · CLF-C02',
      title: 'AWS Certified Cloud Practitioner',
      lede: 'Um compilado do conteúdo estudado em cursos, artigos, simulados e outros materiais que ajudaram na preparação para a certificação.',
      groups: {
        foundations: { title: 'Fundamentos', lede: 'O que é a nuvem, onde ela roda e como projetar sobre ela.' },
        services: { title: 'Serviços', lede: 'Os serviços que mais aparecem no exame, agrupados por categoria.' },
        support: { title: 'Suporte e materiais', lede: 'Planos de suporte e o que usar para estudar.' },
      },
    },
    searchPlaceholder: 'Ex.: Spot, multi-AZ, CloudTrail',
  },
}
