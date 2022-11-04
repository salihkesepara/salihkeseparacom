import 'src/components/Terminal/style.scss'
import { useEffect } from 'react'
import Command from 'src/components/Terminal/Command'
import { addLines } from 'src/components/Terminal/utils'
import { TerminalProps } from 'src/components/Terminal/dts'

const Terminal = (props: TerminalProps) => {
  const {
    onDidMount = () => {},
    onEnter = () => {},
    initialData = [],
    commands = []
  } = props

  useEffect(() => {
    onDidMount()
    addLines({ data: initialData, time: 100 })
  }, [])

  return (
    <div id="terminal">
      <div id="board" />
      <Command
        onEnter={onEnter}
        commands={commands}
      />
    </div>
  )
}

export default Terminal

export { addLines }
