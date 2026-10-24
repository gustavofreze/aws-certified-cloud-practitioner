/**
 * The engine of the practice exam: draws the questions, asks them, keeps the time and scores the result.
 *
 * The full exam copies test day. It draws as many questions as the exam has, from each domain in the
 * proportion of its weight, mixes them, and counts down the minutes of the exam. Nothing is scored
 * until the end, and any question can be marked to come back to. Practice draws from one domain or all
 * of them and shows, after each answer, why every response is right or wrong.
 *
 * The session is kept in this browser after every answer, so a reload or a closed tab resumes where it
 * stopped. The questions arrive already rendered by the build, which escapes the notes before applying
 * their markup, so their HTML is set as it comes.
 */
import type { Bank } from '../content/practice/bank'

type Mode = 'exam' | 'study'

export interface Choice {
  readonly saved: boolean
  readonly mode: Mode
  readonly domain: number
  readonly count: number
}

interface Session {
  readonly mode: Mode
  readonly ids: string[]
  /** The order each question shows its responses in, as positions of the authored order. */
  readonly orders: Record<string, number[]>
  picks: Record<string, number[]>
  flags: string[]
  checked: string[]
  index: number
  /** When the time of a full exam runs out, in milliseconds since the epoch. */
  readonly ends?: number
}

type Question = Bank['questions'][number]

function shuffled<T>(items: readonly T[]): T[] {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[other]] = [copy[other] as T, copy[index] as T]
  }
  return copy
}

const fill = (text: string, values: Record<string, string | number>): string =>
  text.replace(/\{(\w+)\}/g, (token, name: string) => String(values[name] ?? token))

const same = (a: readonly number[], b: readonly number[]): boolean =>
  a.length === b.length && a.every((value) => b.includes(value))

/** How many questions each domain gets in a full exam, by largest remainder so they add up exactly. */
function quotas(total: number, weights: readonly number[]): number[] {
  const exact = weights.map((weight) => (total * weight) / 100)
  const counts = exact.map(Math.floor)
  const order = exact
    .map((value, index) => ({ index, rest: value - Math.floor(value) }))
    .sort((a, b) => b.rest - a.rest)
  for (let left = total - counts.reduce((sum, count) => sum + count, 0), at = 0; left > 0; left--, at++) {
    const domain = order[at % order.length]?.index ?? 0
    counts[domain] = (counts[domain] ?? 0) + 1
  }
  return counts
}

function draw(bank: Bank, choice: Choice): Session {
  let picked: Question[]
  if (choice.mode === 'exam') {
    const counts = quotas(bank.exam.questions, bank.exam.weights)
    picked = counts.flatMap((count, index) =>
      shuffled(bank.questions.filter((question) => question.domain === index + 1)).slice(0, count),
    )
  } else {
    const pool = bank.questions.filter((question) => choice.domain === 0 || question.domain === choice.domain)
    picked = shuffled(pool).slice(0, choice.count > 0 ? choice.count : pool.length)
  }
  const ids = shuffled(picked).map((question) => question.id)
  const orders = Object.fromEntries(
    picked.map((question) => [question.id, shuffled(question.options.map((_, index) => index))]),
  )
  return {
    mode: choice.mode,
    ids,
    orders,
    picks: {},
    flags: [],
    checked: [],
    index: 0,
    ...(choice.mode === 'exam' ? { ends: Date.now() + bank.exam.minutes * 60_000 } : {}),
  }
}

function load(key: string): Session | null {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key) ?? 'null')
    return value !== null && typeof value === 'object' && Array.isArray((value as Session).ids)
      ? (value as Session)
      : null
  } catch {
    return null
  }
}

function save(key: string, session: Session | null): void {
  try {
    if (session) {
      localStorage.setItem(key, JSON.stringify(session))
    } else {
      localStorage.removeItem(key)
    }
  } catch {}
}

const clock = (milliseconds: number): string => {
  const seconds = Math.max(0, Math.round(milliseconds / 1000))
  const minutes = Math.floor(seconds / 60)
  return `${minutes}:${String(seconds % 60).padStart(2, '0')}`
}

export async function start(root: HTMLElement, choice: Choice): Promise<void> {
  const setup = root.querySelector<HTMLElement>('[data-practice-setup]')
  const stage = root.querySelector<HTMLElement>('[data-practice-stage]')
  const key = root.dataset.practiceKey ?? ''
  const domainsBox = root.querySelector<HTMLElement>('.cert-practice__domains')
  if (!setup || !stage) {
    return
  }

  let bank: Bank
  try {
    bank = (await (await fetch(root.dataset.practice ?? '')).json()) as Bank
  } catch {
    return
  }
  const labels = bank.labels
  const byId = new Map(bank.questions.map((question) => [question.id, question]))
  const stored = choice.saved ? load(key) : null
  const resumable = stored?.ids.every((id) => byId.has(id)) ?? false
  const session = resumable && stored ? stored : draw(bank, choice)
  let timer = 0
  let confirming = false

  const question = (): Question => byId.get(session.ids[session.index] ?? '') as Question
  const picksOf = (id: string): number[] => session.picks[id] ?? []
  const isRight = (q: Question): boolean => same(picksOf(q.id), q.answers)

  const reasonsHtml = (q: Question): string =>
    `<ul class="cert-practice__reasons">${(session.orders[q.id] ?? [])
      .map((position) => {
        const right = q.answers.includes(position)
        const chosen = picksOf(q.id).includes(position)
        const mark = right ? labels.correct : chosen ? labels.incorrect : ''
        return `<li class="${right ? 'is-right' : chosen ? 'is-wrong' : ''}">${mark ? `<strong>${mark}</strong> ` : ''}<span>${q.options[position] ?? ''}</span><p>${q.reasons[position] ?? ''}</p></li>`
      })
      .join(
        '',
      )}</ul><a class="cert-practice__proof" href="${q.source}" target="_blank" rel="noopener noreferrer">${labels.proof}</a>`

  const finish = (): void => {
    window.clearInterval(timer)
    save(key, null)
    const asked = session.ids.map((id) => byId.get(id) as Question)
    const right = asked.filter(isRight).length
    const share = asked.length ? right / asked.length : 0
    const score = Math.round(100 + 900 * share)
    const domains = bank.domains
      .map((name, index) => {
        const inDomain = asked.filter((q) => q.domain === index + 1)
        if (!inDomain.length) return ''
        const hits = inDomain.filter(isRight).length
        return `<li><span>${name}</span><span class="cert-practice__bar"><span style="width:${Math.round((100 * hits) / inDomain.length)}%"></span></span><span>${hits}/${inDomain.length}</span></li>`
      })
      .join('')
    const review = asked
      .map(
        (q, index) =>
          `<li class="cert-practice__answer ${isRight(q) ? 'is-right' : 'is-wrong'}"><details><summary><span>${index + 1}.</span> ${q.stem}</summary>${reasonsHtml(q)}</details></li>`,
      )
      .join('')
    stage.innerHTML = `<section class="cert-practice__result"><h2 class="cert-block__title" tabindex="-1">${labels.result}</h2>
      <p class="cert-practice__score"><span>${labels.score}</span><strong>${score}</strong><span class="cert-chip">${score >= bank.exam.passing ? labels.passed : labels.failed}</span></p>
      <p class="cert-practice__meta">${right}/${asked.length} · ${fill(labels.scoreNote, { passing: bank.exam.passing })}</p>
      <h3 class="cert-block__title">${labels.byDomain}</h3><ul class="cert-practice__by-domain">${domains}</ul>
      <h3 class="cert-block__title">${labels.answers}</h3><ol class="cert-practice__answers">${review}</ol>
      <button type="button" class="cert-button cert-button--primary" data-again>${labels.again}</button></section>`
    stage.querySelector('[data-again]')?.addEventListener('click', () => {
      stage.innerHTML = ''
      setup.hidden = false
      domainsBox?.removeAttribute('hidden')
      setup.querySelector<HTMLElement>('[data-practice-resume]')?.setAttribute('hidden', '')
      setup.scrollIntoView({ block: 'start' })
    })
    stage.querySelector<HTMLElement>('h2')?.focus()
  }

  const render = (focus: boolean): void => {
    const q = question()
    const multiple = q.answers.length > 1
    const checked = session.checked.includes(q.id)
    const unanswered = session.ids.filter((id) => picksOf(id).length === 0).length
    const navigator =
      session.mode === 'exam'
        ? `<ol class="cert-practice__map">${session.ids
            .map(
              (id, index) =>
                `<li><button type="button" data-go="${index}" class="${index === session.index ? 'is-current' : ''} ${picksOf(id).length ? 'is-answered' : ''} ${session.flags.includes(id) ? 'is-flagged' : ''}" aria-label="${fill(labels.progress, { current: index + 1, total: session.ids.length })}">${index + 1}</button></li>`,
            )
            .join('')}</ol>`
        : ''
    const options = (session.orders[q.id] ?? [])
      .map(
        (position) =>
          `<label class="cert-practice__option"><input type="${multiple ? 'checkbox' : 'radio'}" name="answer" value="${position}" ${picksOf(q.id).includes(position) ? 'checked' : ''} ${checked ? 'disabled' : ''} /><span>${q.options[position] ?? ''}</span></label>`,
      )
      .join('')
    const last = session.index === session.ids.length - 1
    stage.innerHTML = `<div class="cert-practice__head">
        <p class="cert-practice__count" tabindex="-1">${fill(labels.progress, { current: session.index + 1, total: session.ids.length })}</p>
        ${session.ends ? `<p class="cert-practice__timer"><span>${labels.timeLeft}</span> <strong data-timer>${clock(session.ends - Date.now())}</strong></p>` : ''}
      </div>
      <form class="cert-practice__question" data-question>
        <fieldset><legend>${q.stem}</legend>${options}</fieldset>
        ${checked ? `<p class="cert-practice__verdict ${isRight(q) ? 'is-right' : 'is-wrong'}">${isRight(q) ? labels.correct : labels.incorrect}</p>${reasonsHtml(q)}` : ''}
        <div class="cert-practice__controls">
          <button type="button" data-move="-1" ${session.index === 0 ? 'disabled' : ''}>${labels.previous}</button>
          ${session.mode === 'study' && !checked ? `<button type="button" data-check>${labels.check}</button>` : ''}
          ${session.mode === 'exam' ? `<label class="cert-practice__flag"><input type="checkbox" data-flag ${session.flags.includes(q.id) ? 'checked' : ''} /> ${labels.flag}</label>` : ''}
          ${last ? '' : `<button type="button" data-move="1">${labels.next}</button>`}
          <button type="button" class="cert-practice__finish" data-finish>${labels.finish}</button>
        </div>
        ${confirming ? `<p class="cert-practice__confirm">${fill(labels.confirmFinish, { count: unanswered })} <button type="button" data-confirm>${labels.finish}</button> <button type="button" data-cancel>${labels.cancel}</button></p>` : ''}
      </form>${navigator}`
    if (focus) stage.querySelector<HTMLElement>('.cert-practice__count')?.focus()
  }

  const move = (index: number): void => {
    session.index = Math.min(Math.max(index, 0), session.ids.length - 1)
    confirming = false
    save(key, session)
    render(true)
  }

  stage.onchange = (event) => {
    const target = event.target as HTMLInputElement
    const q = question()
    if (target.matches('[data-flag]')) {
      session.flags = target.checked ? [...session.flags, q.id] : session.flags.filter((id) => id !== q.id)
    } else if (target.name === 'answer') {
      const form = stage.querySelector<HTMLFormElement>('[data-question]')
      session.picks[q.id] = form ? new FormData(form).getAll('answer').map(Number) : []
    }
    save(key, session)
    const cell = stage.querySelector(`[data-go="${session.index}"]`)
    cell?.classList.toggle('is-answered', picksOf(q.id).length > 0)
    cell?.classList.toggle('is-flagged', session.flags.includes(q.id))
  }
  stage.onclick = (event) => {
    const button = (event.target as HTMLElement).closest('button')
    if (!button) return
    if (button.dataset.move) move(session.index + Number(button.dataset.move))
    else if (button.dataset.go) move(Number(button.dataset.go))
    else if (button.hasAttribute('data-check')) {
      session.checked.push(question().id)
      save(key, session)
      render(false)
    } else if (button.hasAttribute('data-finish')) {
      const unanswered = session.ids.some((id) => picksOf(id).length === 0)
      if (unanswered && session.mode === 'exam') {
        confirming = true
        render(false)
      } else finish()
    } else if (button.hasAttribute('data-confirm')) finish()
    else if (button.hasAttribute('data-cancel')) {
      confirming = false
      render(false)
    }
  }

  setup.hidden = true
  domainsBox?.setAttribute('hidden', '')
  save(key, session)
  render(true)
  if (session.ends) {
    const ends = session.ends
    timer = window.setInterval(() => {
      const left = ends - Date.now()
      const shown = stage.querySelector('[data-timer]')
      if (shown) shown.textContent = clock(left)
      if (left <= 0) finish()
    }, 1000)
  }
}
