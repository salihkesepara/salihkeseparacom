import Terminal, { addLine, loopLines } from 'src/components/Terminal'
import { commands, banner } from 'src/utils/constants'

const Home = () => {
  const handleTerminalDidMount = () => {
    loopLines({
      data: banner,
      time: 100
    })
  }
  const handleEnter = (value: any) => {
    console.log('value: ', value)
    addLine({ text: 'test' })
  }

  return (
    <Terminal
      commands={commands}
      onEnter={handleEnter}
      onDidMount={handleTerminalDidMount}
    />
  )
}

export default Home
