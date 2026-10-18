/**
 * The study sites built from this same code, one per certification, in the order a learner takes them.
 * Every site lists all of them in the strip on top of each page, so the reader can move from one set of
 * notes to another. The file is the same in every repository.
 */
export interface Certification {
  /** Matches the `id` of the site configuration of that repository. */
  readonly id: string
  readonly name: string
  readonly exam: string
  readonly repository: string
}

export const CERTIFICATIONS: readonly Certification[] = [
  { id: 'ccp', name: 'Cloud Practitioner', exam: 'CLF-C02', repository: 'aws-certified-cloud-practitioner' },
  {
    id: 'saa',
    name: 'Solutions Architect',
    exam: 'SAA-C03',
    repository: 'aws-certified-solutions-architect-associate',
  },
]
