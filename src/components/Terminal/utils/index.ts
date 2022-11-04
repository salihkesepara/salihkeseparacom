interface addLineParams {
  text: string
  style?: string
  time?: number
}

interface addListenersParams {
  onEnter: Function
}

export function addLine(params: addLineParams) {
  const { text, style = '', time = 0 } = params
  const boardHTML = document.getElementById('board')
  let t = ''
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === ' ' && text.charAt(i + 1) === ' ') {
      t += '&nbsp;&nbsp;'
      i++
    } else {
      t += text.charAt(i)
    }
  }
  setTimeout(() => {
    const next = document.createElement('p')
    next.innerHTML = t
    next.className = style

    // boardHTML.parentNode.insertBefore(next, boardHTML)
    boardHTML?.appendChild(next)

    window.scrollTo(0, document.body.offsetHeight)
  }, time)
}

interface loopLinesParams {
  data: any[]
  style?: string
  time?: number
}

export function loopLines(params: loopLinesParams) {
  const { data, style = '', time = 0 } = params
  data.forEach((item, index) => {
    // addLine(item, style, index * time)
    addLine({
      text: item,
      style,
      time: index * time
    })
  })
}

export function addListeners(params: addListenersParams) {
  focusInput()
  const input = getInputHTML()
  input?.addEventListener('keypress', (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      params.onEnter(event?.target?.value)
    }
  })
  window.addEventListener('click', focusInput)
}

function getInputHTML() {
  return document.getElementById('text-area')
}

function focusInput() {
  const input: any = getInputHTML()
  input.focus()
}
