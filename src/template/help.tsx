const help = (key: string) => {
  return (
    <div key={key}>
      <div className="row">
        <div className="column-200 code-color">Options:</div>
      </div>
      <div className="row">
        <div className="column-200 command">summary</div>
        <div className="column-500">Get summary about me</div>
      </div>
      <div className="row">
        <div className="column-200 command">skill</div>
        <div className="column-500">Get all professional and unprofessional skill</div>
      </div>
      <div className="row">
        <div className="column-200 command">experiance</div>
        <div className="column-500">Get all work experiances</div>
      </div>
      <div className="row">
        <div className="column-200 command">education</div>
        <div className="column-500">Get all completed educations</div>
      </div>
      <div className="row">
        <div className="column-200 command">project</div>
        <div className="column-500">Get all project</div>
      </div>
      <div className="row">
        <div className="column-200 command">language</div>
        <div className="column-500">Get all language</div>
      </div>
      <div className="row">
        <div className="column-200 command">social</div>
        <div className="column-500">Github, Linkedin, Twitter etc</div>
      </div>
      <div className="row">
        <div className="column-200 command">contact</div>
        <div className="column-500">Get more detail about me</div>
      </div>
      <div className="row">
        <div className="column-200 command">clear</div>
        <div className="column-500">Clear the terminal</div>
      </div>
    </div>
  )
}

export default help
