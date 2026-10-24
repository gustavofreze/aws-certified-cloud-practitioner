/**
 * The setup of the practice exam: the choice of mode and the way back to a session left halfway.
 *
 * The engine that asks the questions is imported only when the reader starts, together with the
 * questions, so the page carries no more script than the others until then.
 */
function init(): void {
  const root = document.querySelector<HTMLElement>('[data-practice]')
  const setup = root?.querySelector<HTMLFormElement>('[data-practice-setup]')
  const study = root?.querySelector<HTMLElement>('[data-practice-study]')
  const resume = root?.querySelector<HTMLButtonElement>('[data-practice-resume]')
  if (!root || !setup || !study || !resume) {
    return
  }

  const showStudy = (): void => {
    study.hidden = new FormData(setup).get('mode') !== 'study'
  }
  setup.addEventListener('change', showStudy)
  showStudy()

  try {
    resume.hidden = !localStorage.getItem(root.dataset.practiceKey ?? '')
  } catch {}

  const start = async (saved: boolean): Promise<void> => {
    const data = new FormData(setup)
    const engine = await import('./practice-engine')
    engine.start(root, {
      saved,
      mode: data.get('mode') === 'study' ? 'study' : 'exam',
      domain: Number(data.get('domain') ?? 0),
      count: Number(data.get('count') ?? 0),
    })
  }
  setup.addEventListener('submit', (event) => {
    event.preventDefault()
    void start(false)
  })
  resume.addEventListener('click', () => void start(true))
}

init()
