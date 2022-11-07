import { CommandProps } from 'src/components/Terminal/dts/command'

interface TerminalProps {
  commands?: Array<{ name: string, value?: Function[] }>
  onDidMount?: Function
  onEnter?: Function
  initialData: any
}

export {
  TerminalProps,
  CommandProps
}
