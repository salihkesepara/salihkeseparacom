import { useEffect, useState } from 'react'

const Command = () => {
  const [inputValue, setInputValue] = useState('')

  const getInputHTML = () => {
    return document.getElementById('text-area')
  }

  const focusInput = () => {
    const input: any = getInputHTML()
    input.focus()
  }

  useEffect(() => {
    focusInput()
    const input = getInputHTML()
    input?.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        setInputValue('')
      }
    })
  }, [])

  window.addEventListener('click', focusInput)

  const handleInputChange = (event: any) => {
    setInputValue(event?.target?.value)
  }

  return (
    <div id="command">
      <textarea
        id="text-area"
        className="text-area"
        onChange={handleInputChange}
        value={inputValue}>
      </textarea>
      <div id="liner">
        <span id="typer">{inputValue}</span>
        <b id="cursor" />
      </div>
    </div>
  )
}

export default Command
