import { useEffect } from 'react'
import { banner } from 'src/utils/constants'
import { loopLines } from 'src/utils'

const Board = () => {
  useEffect(() => {
    loopLines({
      data: banner,
      time: 100
    })
  }, [])

  return (
    <div id="board" />
  )
}

export default Board
