import Terminal from 'src/components/Terminal'
import { commands, banner2 } from 'src/utils/constants'

const Home = () => {
  return (
    <Terminal
      initialData={banner2}
      commands={commands}
    />
  )
}

export default Home
