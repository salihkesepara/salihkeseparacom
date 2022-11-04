import { useEffect, useState } from 'react'
import { addListeners, addLines, clearBoard, prefix } from 'src/components/Terminal/utils'
import { CommandProps } from 'src/components/Terminal/dts'

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
    handleCommand(value)
    setInputValue('')
  }

  function handleCommand(value: string) {
    if (value !== 'clear') {
      addLines({ data: [`${prefix}<span class="typer">${value}</span>`], style: 'no-animation' })
    }
    onEnter(value)
    const selectedCommand = commands?.find((command: any) => command.name === value)

    switch (selectedCommand?.name) {
      case 'clear':
        clearBoard()
        break

      default:
        typeof selectedCommand === 'undefined'
          ? addLines({ data: [`${prefix}<span class="error">command not found</span>`] })
          : addLines({ data: selectedCommand?.value })
        break
    }
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
