const contact = (key: string) => {
  const column: string[] = ['column-200', 'column-300']

  return (
    <div key={key}>
      <div className="row">
        <div className={column[0]}>Location</div>
        <div className={column[1]}>Esenler, Istanbul, Turkey</div>
      </div>
      <div className="row">
        <div className={column[0]}>Email</div>
        <div className={column[1]}>salihkesepara@gmail.com</div>
      </div>
    </div>
  )
}

export default contact
