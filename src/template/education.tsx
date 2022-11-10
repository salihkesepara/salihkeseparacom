const education = (key: string) => {
  const column: string[] = ['column-200', 'column-300', 'column-200']

  return (
    <div key={key}>
      <div className="row">
        <div className={column[0]}>Selcuk University</div>
        <div className={column[1]}>Software Programming</div>
        <div className={column[2]}>2008 - 2010</div>
      </div>
      <div className="row">
        <div className={column[0]}>Anadolu University</div>
        <div className={column[1]}>Managament</div>
        <div className={column[2]}>2010 - 2018</div>
      </div>
    </div>
  )
}

export default education
