const Row1 = (key: string) => {
  return (
    <div key={key}>row1</div>
  )
}

const Row2 = (key: string) => {
  return (
    <div key={key}>row2</div>
  )
}

const Playground = () => {
  const rows: any = [
    Row1, Row2
  ]

  return (
    <div>
      {rows.map((item: any, key: string) => item(key))}
    </div>
  )
}

export default Playground
