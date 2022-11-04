import { useEffect, useState } from 'react'
import { addListeners, addLines } from 'src/components/Terminal/utils'

interface CommandProps {
  onEnter: Function
  commands: Array<{ name: string, value: any }>
}

const Command = (props: CommandProps) => {
  const {
    onEnter = () => { },
    commands = []
  } = props
  const [inputValue, setInputValue] = useState<any>('')

  useEffect(() => {
    addListeners({ onEnter: handleEnter })
  }, [])

  function handleEnter(value: string) {
    onEnter(value)
    const command = commands?.find((command) => command.name === value)
    addLines({ data: command?.value })
    setInputValue('')
  }

  return (
    <div id="command-page">
      <textarea
        id="text-area"
        className="text-area"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}>
      </textarea>
      <div id="liner">
        <span id="typer">{inputValue}</span>
        <b id="cursor" />
      </div>
    </div>
  )
}

export default Command
