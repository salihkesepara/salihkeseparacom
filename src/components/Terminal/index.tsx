import 'src/components/Terminal/style.scss'
import { TerminalProps } from 'src/components/Terminal/dts/terminalParams'
import { useEffect } from 'react'
import Board from 'src/components/Terminal/Board'
import Command from 'src/components/Terminal/Command'

const Terminal = (props: TerminalProps) => {
  const {
    // commands,
    onDidMount
  } = props

  useEffect(() => {
    onDidMount()
  }, [])

  /* ----------------------------- event listeners ---------------------------- */

  return (
    <div id="terminal">
      <Board />
      <Command />
    </div>
  )
}

export default Terminal
