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
  const intro = root.querySelector<HTMLElement>('[data-practice-intro]')
  const stage = root.querySelector<HTMLElement>('[data-practice-stage]')
  const key = root.dataset.practiceKey ?? ''
  if (!intro || !stage) {
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

  const icon = (name: string): string =>
    root.querySelector<HTMLTemplateElement>(`[data-practice-icon="${name}"]`)?.innerHTML.trim() ?? ''
  const question = (): Question => byId.get(session.ids[session.index] ?? '') as Question
  const picksOf = (id: string): number[] => session.picks[id] ?? []
  const isRight = (q: Question): boolean => same(picksOf(q.id), q.answers)
  const letter = (index: number): string => String.fromCharCode(65 + index)
  const proofOf = (q: Question, position: number): string => {
    const proof = q.evidence[q.answers.indexOf(position)]
    return proof
      ? `<span class="cert-practice__evidence"><q>${proof.quote}</q><a class="cert-practice__proof" href="${proof.href}" target="_blank" rel="noopener noreferrer">${labels.proof} ${icon('arrow-right')}</a></span>`
      : ''
  }

  const reasonsHtml = (q: Question): string =>
    `<ol class="cert-practice__reasons">${(session.orders[q.id] ?? [])
      .map((position, index) => {
        const right = q.answers.includes(position)
        const chosen = picksOf(q.id).includes(position)
        const state = right ? 'is-right' : chosen ? 'is-wrong' : ''
        const mark = right ? labels.correct : chosen ? labels.incorrect : ''
        return `<li class="${state}"><span class="cert-practice__letter">${right ? icon('check') : chosen ? icon('close') : letter(index)}</span><div><p class="cert-practice__reason-head">${q.options[position] ?? ''}${mark ? ` <strong>${mark}</strong>` : ''}</p><p>${q.reasons[position] ?? ''}</p>${proofOf(q, position)}</div></li>`
      })
      .join('')}</ol>`

  const finish = (): void => {
    window.clearInterval(timer)
    save(key, null)
    const asked = session.ids.map((id) => byId.get(id) as Question)
    const right = asked.filter(isRight).length
    const share = asked.length ? right / asked.length : 0
    const score = Math.round(100 + 900 * share)
    const passed = score >= bank.exam.passing
    const domains = bank.domains
      .map((name, index) => {
        const inDomain = asked.filter((q) => q.domain === index + 1)
        if (!inDomain.length) return ''
        const hits = inDomain.filter(isRight).length
        const percent = Math.round((100 * hits) / inDomain.length)
        return `<li style="--weight:${percent}%"><span class="cert-practice__domain-number">${fill(labels.domainNumber, { number: index + 1 })}</span><strong>${hits}/${inDomain.length}</strong><span class="cert-practice__domain-name">${name}</span><span class="cert-practice__bar" aria-hidden="true"><span></span></span></li>`
      })
      .join('')
    const review = asked
      .map(
        (q, index) =>
          `<li class="cert-practice__answer ${isRight(q) ? 'is-right' : 'is-wrong'}"><details><summary><span class="cert-practice__letter">${isRight(q) ? icon('check') : icon('close')}</span><span><span class="cert-practice__answer-number">${index + 1}.</span> ${q.stem}</span></summary>${reasonsHtml(q)}</details></li>`,
      )
      .join('')
    stage.innerHTML = `<section class="cert-practice__result">
      <div class="cert-practice__panel cert-practice__summary ${passed ? 'is-right' : 'is-wrong'}">
        <div class="cert-practice__ring" style="--share:${Math.round(share * 100)}%"><strong tabindex="-1">${score}</strong><span>${labels.score}</span></div>
        <div class="cert-practice__verdict-box">
          <h2 class="cert-practice__verdict">${passed ? labels.passed : labels.failed}</h2>
          <p class="cert-practice__tally">${fill(labels.tally, { right, total: asked.length })}</p>
          <p class="cert-practice__meta">${fill(labels.scoreNote, { passing: bank.exam.passing })}</p>
          <button type="button" class="cert-button cert-button--primary" data-again>${labels.again}</button>
        </div>
      </div>
      <section class="cert-practice__panel cert-practice__domains"><h3 class="cert-block__title">${labels.byDomain}</h3><ol>${domains}</ol></section>
      <section class="cert-practice__panel"><h3 class="cert-block__title">${labels.answers}</h3><ol class="cert-practice__answers">${review}</ol></section>
    </section>`
    stage.querySelector('[data-again]')?.addEventListener('click', () => {
      stage.innerHTML = ''
      intro.hidden = false
      intro.querySelector<HTMLElement>('[data-practice-resume]')?.setAttribute('hidden', '')
      root.scrollIntoView({ block: 'start' })
    })
    stage.querySelector<HTMLElement>('.cert-practice__ring strong')?.focus()
  }

  const mapHtml = (): string => {
    const answered = session.ids.filter((id) => picksOf(id).length > 0).length
    return `<details class="cert-practice__panel cert-practice__map" data-map ${root.dataset.mapOpen === 'true' ? 'open' : ''}>
      <summary><span class="cert-practice__map-title">${icon('chevron')} ${labels.map}</span><span class="cert-practice__legend"><span class="is-answered-key">${labels.answered} <strong data-answered>${answered}</strong></span><span class="is-flagged-key">${labels.flagged} <strong data-flagged>${session.flags.length}</strong></span></span></summary>
      <ol>${session.ids
        .map(
          (id, index) =>
            `<li><button type="button" data-go="${index}" class="${index === session.index ? 'is-current' : ''} ${picksOf(id).length ? 'is-answered' : ''} ${session.flags.includes(id) ? 'is-flagged' : ''}" aria-label="${fill(labels.progress, { current: index + 1, total: session.ids.length })}">${index + 1}</button></li>`,
        )
        .join('')}</ol>
    </details>`
  }

  const render = (focus: boolean): void => {
    const q = question()
    const multiple = q.answers.length > 1
    const checked = session.checked.includes(q.id)
    const flagged = session.flags.includes(q.id)
    const unanswered = session.ids.filter((id) => picksOf(id).length === 0).length
    const answered = session.ids.length - unanswered
    const options = (session.orders[q.id] ?? [])
      .map((position, index) => {
        const right = q.answers.includes(position)
        const chosen = picksOf(q.id).includes(position)
        const state = checked ? (right ? 'is-right' : chosen ? 'is-wrong' : '') : ''
        const mark = right ? labels.correct : chosen ? labels.incorrect : ''
        const badge = checked && state ? icon(right ? 'check' : 'close') : letter(index)
        const reason = checked
          ? `${mark ? ` <strong>${mark}</strong>` : ''}<span class="cert-practice__reason">${q.reasons[position] ?? ''}</span>${proofOf(q, position)}`
          : ''
        return `<label class="cert-practice__option ${state}"><input type="${multiple ? 'checkbox' : 'radio'}" name="answer" value="${position}" ${chosen ? 'checked' : ''} ${checked ? 'disabled' : ''} /><span class="cert-practice__letter">${badge}</span><span class="cert-practice__option-text">${q.options[position] ?? ''}${reason}</span></label>`
      })
      .join('')
    const last = session.index === session.ids.length - 1
    const middle =
      session.mode === 'exam'
        ? `<button type="button" class="cert-practice__control" data-flag aria-pressed="${flagged}">${icon('flag')} ${labels.flag}</button>`
        : checked
          ? '<span></span>'
          : `<button type="button" class="cert-practice__control is-primary" data-check>${labels.check}</button>`
    stage.innerHTML = `<div class="cert-practice__head">
        <p class="cert-practice__count" tabindex="-1">${fill(labels.progress, { current: session.index + 1, total: session.ids.length })}</p>
        <div class="cert-practice__head-end">
          ${session.ends ? `<p class="cert-practice__timer" title="${labels.timeLeft}"><span class="sr-only">${labels.timeLeft}</span>${icon('clock')} <strong data-timer>${clock(session.ends - Date.now())}</strong></p>` : ''}
          <button type="button" class="cert-practice__finish" data-finish>${labels.finish}</button>
        </div>
        <span class="cert-practice__progress" aria-hidden="true"><span data-progress style="width:${Math.round((100 * answered) / session.ids.length)}%"></span></span>
      </div>
      ${confirming ? `<div class="cert-practice__confirm" role="alert"><p>${fill(labels.confirmFinish, { count: unanswered })}</p><div><button type="button" class="cert-practice__control" data-cancel>${labels.cancel}</button><button type="button" class="cert-practice__control is-primary" data-confirm>${labels.finish}</button></div></div>` : ''}
      <form class="cert-practice__panel cert-practice__question" data-question>
        ${session.mode === 'study' ? `<p class="cert-practice__domain">${fill(labels.domainNumber, { number: q.domain })} · ${bank.domains[q.domain - 1] ?? ''}</p>` : ''}
        <fieldset><legend>${q.stem}</legend><div class="cert-practice__choices">${options}</div></fieldset>
        ${checked ? `<div class="cert-practice__checked"><p class="cert-practice__verdict ${isRight(q) ? 'is-right' : 'is-wrong'}">${isRight(q) ? icon('check') : icon('close')} ${isRight(q) ? labels.correct : labels.incorrect}</p></div>` : ''}
        <div class="cert-practice__controls">
          <button type="button" class="cert-practice__control" data-move="-1" ${session.index === 0 ? 'disabled' : ''}>${icon('arrow-left')} <span>${labels.previous}</span></button>
          ${middle}
          <button type="button" class="cert-practice__control" data-move="1" ${last ? 'disabled' : ''}><span>${labels.next}</span> ${icon('arrow-right')}</button>
        </div>
      </form>${session.mode === 'exam' ? mapHtml() : ''}`
    const map = stage.querySelector<HTMLDetailsElement>('[data-map]')
    map?.addEventListener('toggle', () => {
      root.dataset.mapOpen = String(map.open)
    })
    if (focus) stage.querySelector<HTMLElement>('.cert-practice__count')?.focus()
  }

  const move = (index: number): void => {
    session.index = Math.min(Math.max(index, 0), session.ids.length - 1)
    confirming = false
    save(key, session)
    render(true)
  }

  const refresh = (): void => {
    const q = question()
    const answered = session.ids.filter((id) => picksOf(id).length > 0).length
    const cell = stage.querySelector(`[data-go="${session.index}"]`)
    cell?.classList.toggle('is-answered', picksOf(q.id).length > 0)
    cell?.classList.toggle('is-flagged', session.flags.includes(q.id))
    const progress = stage.querySelector<HTMLElement>('[data-progress]')
    if (progress) progress.style.width = `${Math.round((100 * answered) / session.ids.length)}%`
    const answeredCount = stage.querySelector('[data-answered]')
    if (answeredCount) answeredCount.textContent = String(answered)
    const flaggedCount = stage.querySelector('[data-flagged]')
    if (flaggedCount) flaggedCount.textContent = String(session.flags.length)
  }

  stage.onchange = (event) => {
    const target = event.target as HTMLInputElement
    if (target.name !== 'answer') return
    const form = stage.querySelector<HTMLFormElement>('[data-question]')
    session.picks[question().id] = form ? new FormData(form).getAll('answer').map(Number) : []
    save(key, session)
    refresh()
  }
  stage.onclick = (event) => {
    const button = (event.target as HTMLElement).closest('button')
    if (!button) return
    if (button.dataset.move) move(session.index + Number(button.dataset.move))
    else if (button.dataset.go) move(Number(button.dataset.go))
    else if (button.hasAttribute('data-flag')) {
      const id = question().id
      const flagged = !session.flags.includes(id)
      session.flags = flagged ? [...session.flags, id] : session.flags.filter((other) => other !== id)
      button.setAttribute('aria-pressed', String(flagged))
      save(key, session)
      refresh()
    } else if (button.hasAttribute('data-check')) {
      session.checked.push(question().id)
      save(key, session)
      render(false)
    } else if (button.hasAttribute('data-finish')) {
      const unanswered = session.ids.some((id) => picksOf(id).length === 0)
      if (unanswered && session.mode === 'exam') {
        confirming = true
        render(false)
        stage.querySelector<HTMLElement>('[data-cancel]')?.focus()
      } else finish()
    } else if (button.hasAttribute('data-confirm')) finish()
    else if (button.hasAttribute('data-cancel')) {
      confirming = false
      render(false)
    }
  }

  intro.hidden = true
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
