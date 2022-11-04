import 'src/components/Terminal/style.scss'
import { createContext, useEffect, useState, useContext } from 'react'
import Command from 'src/components/Terminal/Command'
import { addLine, loopLines } from 'src/components/Terminal/utils'

// @ts-expect-error
const TerminalContext = createContext()

export interface TerminalProps {
  commands: string[]
  onDidMount: Function
  onEnter: Function
}

const Terminal = (props: TerminalProps) => {
  const {
    commands = [],
    onDidMount = () => {},
    onEnter = () => {}
  } = props
  const [state, setState] = useState({ commands })

  useEffect(() => {
    onDidMount()
  }, [])

  return (
    <TerminalContext.Provider value={{ state, setState }}>
      <div id="board" />
      <Command onEnter={onEnter} />
    </TerminalContext.Provider>
  )
}

export default Terminal

export {
  TerminalContext,
  useContext,
  addLine,
  loopLines
}
