import Terminal from 'terminal-io'
import template from 'src/template'
import VersionSticker from 'src/components/VersionSticker'
import GitHub from 'src/components/GitHub'
import Npm from 'src/components/Npm'

const Home = () => {
  const commands: Array<{ name: string, value?: any }> = [
    { name: 'skill', value: template.skill },
    { name: 'summary', value: template.summary },
    { name: 'experience', value: template.experience },
    { name: 'education', value: template.education },
    { name: 'project', value: template.project },
    { name: 'language', value: template.language },
    { name: 'social', value: template.social },
    { name: 'help', value: template.help },
    { name: '-h', value: template.help },
    { name: 'contact', value: template.contact },
    { name: 'clear' }
  ]

  return (
    <>
      <Terminal
        initialData={template.banner}
        commands={commands} />
      <VersionSticker />
      <Npm />
      <GitHub />
    </>
  )
}

export default Home
