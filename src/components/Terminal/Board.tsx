import { useEffect } from 'react'
import { BoardProps } from 'src/components/Terminal/dts/board'

const Board = (props: BoardProps) => {
  const { lineList } = props

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [lineList])

  return (
    <div id="board">
      {lineList.map((item: Function, key: number) => item(key))}
    </div>
  )
}

export default Board
