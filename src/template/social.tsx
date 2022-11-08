const social = (key: string) => {
  const column: string[] = ['column-200', 'column-300']

  return (
    <div key={key}>
      <div className="row">
        <div className={column[0]}>GitHub</div>
        <div className={column[1]}>
          <a href="https://github.com/salihkesepara"
            target="_blank">github.com/salihkesepara
          </a>
        </div>
      </div>
      <div className="row">
        <div className={column[0]}>LinkedIn</div>
        <div className={column[1]}>
          <a href="https://www.linkedin.com/in/salihkesepara"
            target="_blank">linkedin.com/in/salihkesepara
          </a>
        </div>
      </div>
      <div className="row">
        <div className={column[0]}>Twitter</div>
        <div className={column[1]}>
          <a href="https://twitter.com/SalihKesepara"
            target="_blank">twitter.com/salihkesepara
          </a>
        </div>
      </div>
      <div className="row">
        <div className={column[0]}>Stackoverflow</div>
        <div className={column[1]}>
          <a href="https://stackoverflow.com/users/5882263/salih-kesepara"
            target="_blank">stackoverflow/salihkesepara
          </a>
        </div>
      </div>
    </div>
  )
}

export default social
