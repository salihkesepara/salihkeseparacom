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

  const handleOnkeydown = (event: any) => {
    if (event.key === 'Enter') {
      handleEnter(event.target.value)
    }
  }

  const handleCommandUndefined = (command: string) => {
    const commandNotFound = (key: string) => {
      return (
        <p key={key}
          className="error">-bash: {command}: not found
        </p>
      )
    }
    addLine(commandNotFound)
  }

  function handleCommand(inputCommand: string) {
    onEnter(inputCommand)
    const selectedCommand = commands?.find((command: any) => command.name === inputCommand)

    if (typeof selectedCommand === 'undefined') {
      handleCommandUndefined(inputCommand)
    } else if (selectedCommand.name === 'clear') {
      setLineList([])
    } else {
      const styledInputCommand = (key: string) => {
        return (
          <div key={key}>
            <span className="code-color">
              {prefix}
            </span>
            <span className="typer">
              {inputCommand}
            </span>
          </div>
        )
      }

      setLineList([...lineList, styledInputCommand, selectedCommand.value])
    }
  }

  const handleEnter = (inputCommand: string) => {
    handleCommand(inputCommand)
    setInputValue('')
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
