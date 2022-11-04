import Terminal from 'terminal-in-react'

const Home = () => {
  const commands: object = {
    'open-google': () => window.open('https://www.google.com/', '_blank'),
    showmsg: () => 'Hello World',
    test: (print: any) => print('asdfd')
  }

  return (
    <div className="Terminal">
      <Terminal
        hideTopBar={true}
        allowTabs={false}
        color="white"
        prompt="white"
        backgroundColor="black"
        barColor="black"
        startState="maximised"
        style={{ fontWeight: 'bold', fontSize: '1em' }}
        commands={{ ...commands }}
        description={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          alert: 'alert',
          popup: 'alert',
          test: 'test message'
        }}
        msg="Press ENTER to continue..."
      />
    </div>
  )
}

export default Home
