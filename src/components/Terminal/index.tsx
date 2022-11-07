import 'src/components/Terminal/style.scss'
import { useEffect, useState } from 'react'
import Command from 'src/components/Terminal/Command'
// import { addLines } from 'src/components/Terminal/utils'
import { TerminalProps } from 'src/components/Terminal/dts'
import Board from 'src/components/Terminal/Board'

const Terminal = (props: TerminalProps) => {
  const [lineList, setLineList] = useState([])
  const {
    onDidMount = () => {},
    onEnter = () => {},
    // initialData = [],
    commands = []
  } = props

  useEffect(() => {
    onDidMount()
    // addLines({ data: initialData, time: 100 })
  }, [])

  return (
    <div id="terminal">
      {/* <div id="board" /> */}
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
