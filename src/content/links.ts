/**
 * The addresses of AWS pages in each language. A page in Portuguese links to the Portuguese edition of
 * the same page, which AWS publishes under its own prefix.
 */
export const en = {
  aws: (path: string): string => `https://aws.amazon.com/${path}`,
  docs: (path: string): string => `https://docs.aws.amazon.com/${path}`,
}

export const pt = {
  aws: (path: string): string => `https://aws.amazon.com/pt/${path}`,
  docs: (path: string): string => `https://docs.aws.amazon.com/pt_br/${path}`,
}
