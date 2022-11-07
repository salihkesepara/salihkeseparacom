import { CommandProps } from 'src/components/Terminal/dts/command'

interface TerminalProps {
  commands?: Array<{ name: string, value?: Function[], run?: Function }>
  onDidMount?: Function
  onEnter?: Function
  initialData?: string[]
}

export {
  TerminalProps,
  CommandProps
}
