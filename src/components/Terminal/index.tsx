import 'src/components/Terminal/style.scss'
import { createContext, useEffect, useState, useContext } from 'react'
import { TerminalProps } from 'src/components/Terminal/dts/terminalParams'
import Board from 'src/components/Terminal/Board'
import Command from 'src/components/Terminal/Command'

// @ts-expect-error
const TerminalContext = createContext()

const Terminal = (props: TerminalProps) => {
  const {
    commands,
    onDidMount
  } = props
  const [state, setState] = useState({ commands })

  useEffect(() => {
    onDidMount()
  }, [])

  return (
    <TerminalContext.Provider value={{ state, setState }}>
      <Board />
      <Command />
    </TerminalContext.Provider>
  )
}

export default Terminal

export {
  TerminalContext,
  useContext
}
