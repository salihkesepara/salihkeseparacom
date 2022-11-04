export interface TerminalProps {
  commands?: Array<{ name: string, description?: string }>
  onDidMount?: function
}
