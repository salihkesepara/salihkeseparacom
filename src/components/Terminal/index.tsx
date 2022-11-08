import 'src/components/Terminal/style.scss'
import { useEffect, useState } from 'react'
import Command from 'src/components/Terminal/Command'
import { TerminalProps } from 'src/components/Terminal/dts'
import Board from 'src/components/Terminal/Board'

const Terminal = (props: TerminalProps) => {
  const [lineList, setLineList] = useState([() => {}])
  const {
    onDidMount = () => {},
    onEnter = () => {},
    initialData = () => {},
    commands = [],
    className = ''
  } = props

  useEffect(() => {
    onDidMount()
    setLineList([initialData])
  }, [])

  return (
    <div id="terminal"
      className={className}>
      <Board lineList={lineList} />
      <Command
        lineList={lineList}
        setLineList={setLineList}
        onEnter={onEnter}
        commands={commands}
      />
    </div>
  )
}

export default Terminal
