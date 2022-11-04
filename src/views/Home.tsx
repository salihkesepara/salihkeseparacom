import Terminal from 'src/components/Terminal'
import { commands } from 'src/utils/constants'

const Home = () => {
  const handleTerminalDidMount = () => {}

  return (
    <Terminal
      commands={commands}
      onDidMount={handleTerminalDidMount}
    />
  )
}

export default Home
