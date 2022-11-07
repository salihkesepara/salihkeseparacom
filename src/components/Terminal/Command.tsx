import { useEffect, useState } from 'react'
import { addListeners, prefix } from 'src/components/Terminal/utils'
import { CommandProps } from 'src/components/Terminal/dts'

const Command = (props: CommandProps) => {
  const {
    lineList = () => {},
    setLineList = () => {},
    onEnter = () => {},
    commands = []
  } = props
  const [inputValue, setInputValue] = useState<any>('')

  const addLine = (line: Function) => {
    setLineList([...lineList, line])
  }

  useEffect(() => {
    addListeners()
  }, [])

  function handleEnter(value: string) {
    handleCommand(value)
    setInputValue('')
  }

  function handleOnkeydown(event: any) {
    if (event.key === 'Enter') {
      handleEnter(event.target.value)
    }
  }

  function handleCommand(value: string) {
    // <span class="code-color">${prefix}</span><span class="typer">${value}</span>
    if (value !== 'clear') {
      const addCodeToBoard = (key: string) => {
        return (
          <div key={key}>
            <span className="code-color">
              {prefix}
            </span>
            <span className="typer">
              {value}
            </span>
          </div>
        )
      }
      addLine(addCodeToBoard)
    }
    onEnter(value)
    const selectedCommand = commands?.find((command: any) => command.name === value)

    console.log('selectedCommand: ', selectedCommand)

    if (typeof selectedCommand === 'undefined') {
      const commandNotFound = (key: string) => {
        return (
          <p key={key}
            className="error">-bash: {value}: not found</p>
        )
      }
      addLine(commandNotFound)
    } else if (selectedCommand?.name === 'clear') {
      setLineList([])
    }
  }

  return (
    <div id="command">
      <input id="input-command"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleOnkeydown}></input>
      <div id="liner">
        <span id="typer">{inputValue}</span>
        <b id="cursor" />
      </div>
    </div>
  )
}

export default Command
