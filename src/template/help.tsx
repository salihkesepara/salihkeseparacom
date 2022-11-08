const help = (key: string) => {
  const column: string[] = ['column-200 command', 'column-500']

  return (
    <div key={key}>
      <div className="row">
        <div className="column-200 code-color">Options:</div>
      </div>
      <div className="row">
        <div className={column[0]}>summary</div>
        <div className={column[1]}>Get summary about me</div>
      </div>
      <div className="row">
        <div className={column[0]}>skill</div>
        <div className={column[1]}>Get all professional and unprofessional skill</div>
      </div>
      <div className="row">
        <div className={column[0]}>experiance</div>
        <div className={column[1]}>Get all work experiances</div>
      </div>
      <div className="row">
        <div className={column[0]}>education</div>
        <div className={column[1]}>Get all completed educations</div>
      </div>
      <div className="row">
        <div className={column[0]}>project</div>
        <div className={column[1]}>Get all project</div>
      </div>
      <div className="row">
        <div className={column[0]}>language</div>
        <div className={column[1]}>Get all language</div>
      </div>
      <div className="row">
        <div className={column[0]}>social</div>
        <div className={column[1]}>Github, Linkedin, Twitter etc</div>
      </div>
      <div className="row">
        <div className={column[0]}>contact</div>
        <div className={column[1]}>Get more detail about me</div>
      </div>
      <div className="row">
        <div className={column[0]}>clear</div>
        <div className={column[1]}>Clear the terminal</div>
      </div>
    </div>
  )
}

export default help
