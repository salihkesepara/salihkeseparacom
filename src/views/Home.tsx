import Terminal from 'src/components/Terminal'
import template from 'src/template'

const Home = () => {
  const commands: Array<{ name: string, value?: any }> = [
    { name: 'skill', value: template.skill },
    { name: 'summary', value: template.summary },
    { name: 'experiance', value: template.experiance },
    { name: 'education', value: template.education },
    { name: 'project', value: template.project },
    { name: 'language', value: template.language },
    { name: 'social', value: template.social },
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
