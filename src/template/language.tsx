const language = (key: string) => {
  const column: string[] = ['column-200', 'column-200']

  return (
    <div key={key}>
      <div className="row">
        <div className={column[0]}>Turkish</div>
        <div className={column[1]}>Native</div>
      </div>
      <div className="row">
        <div className={column[0]}>English</div>
        <div className={column[1]}>Intermediate</div>
      </div>
    </div>
  )
}

export default language
