import Terminal from 'src/components/Terminal'
import template from 'src/template'

const Home = () => {
  const commands: Array<{ name: string, value?: any }> = [
    { name: 'skill', value: template.skill },
    { name: 'summary', value: template.summary },
    { name: 'experiance', value: template.experiance },
    { name: 'education', value: '' },
    { name: 'project', value: '' },
    { name: 'language', value: '' },
    { name: 'social', value: '' },
    { name: 'help', value: '' },
    { name: '-h', value: '' },
    { name: 'contact', value: '' },
    { name: 'clear' }
  ]

  return (
    <Terminal
      initialData={template.banner}
      commands={commands}
    />
  )
}

export default Home
