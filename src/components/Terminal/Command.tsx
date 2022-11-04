import { useEffect, useState } from 'react'
import { addListeners } from 'src/utils'

const Command = () => {
  const [inputValue, setInputValue] = useState<any>('')

  useEffect(() => {
    addListeners({
      onEnter: (value: string) => console.log('value', value)
    })
  }, [])

  return (
    <div id="command-page">
      <textarea
        id="text-area"
        className="text-area"
        onChange={(event) => setInputValue(event.target.value)}>
      </textarea>
      <div id="liner">
        <span id="typer">{inputValue}</span>
        <b id="cursor" />
      </div>
    </div>
  )
}

export default Command
