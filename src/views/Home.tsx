import Terminal from 'src/components/Terminal'
import { commands, banner } from 'src/utils/constants'

const Home = () => {
  return (
    <Terminal
      initialData={banner}
      commands={commands}
    />
  )
}

export default Home
