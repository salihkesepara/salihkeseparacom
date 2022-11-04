import 'src/components/Terminal/style.scss'
import { useEffect } from 'react'
import Command from 'src/components/Terminal/Command'
import { addLines } from 'src/components/Terminal/utils'

export interface TerminalProps {
  commands?: Array<{ name: string, value: any }>
  onDidMount?: Function
  onEnter?: Function
  initialData?: string[]
}

const Terminal = (props: TerminalProps) => {
  const {
    onDidMount = () => {},
    onEnter = () => { },
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
