import { BoardProps } from 'src/components/Terminal/dts/board'

const Board = (props: BoardProps) => {
  const { lineList } = props
  return (
    <div id="board">
      {lineList.map((item: Function, key: number) => item(key))}
    </div>
  )
}

export default Board
