import { useState } from 'react'

const Row1: Function = (key: string) => {
  return (
    <div key={key}>row1</div>
  )
}

const Row2: Function = (key: string) => {
  return (
    <div key={key}>row2</div>
  )
}

const Playground = () => {
  const [foo, setFoo] = useState(['bar'])

  const rows: Function[] = [
    Row1, Row2
  ]

  const handleClick = () => {
    setFoo([...foo, 'sadf'])
  }

  return (
    <div>
      {rows.map((item: Function, key: number) => item(key))}
      {foo}
      <div>
        <button onClick={handleClick}>Add Foo</button>
      </div>
    </div>
  )
}

export default Playground
