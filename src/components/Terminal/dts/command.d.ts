interface CommandProps {
  lineList?: Function[]
  setLineList?: Function
  onEnter: Function
  commands: Array<{ name: string, value: any }>
}
