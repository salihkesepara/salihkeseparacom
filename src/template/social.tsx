const social = (key: string) => {
  return (
    <div key={key}>
      <div className="row">
        <div className="column-200">GitHub</div>
        <div className="column-300">
          <a href="https://github.com/salihkesepara"
            target="_blank">github.com/salihkesepara</a>
        </div>
      </div>
      <div className="row">
        <div className="column-200">LinkedIn</div>
        <div className="column-300">
          <a href="https://www.linkedin.com/in/salihkesepara"
            target="_blank">linkedin.com/in/salihkesepara</a>
        </div>
      </div>
      <div className="row">
        <div className="column-200">Twitter</div>
        <div className="column-300">
          <a href="https://twitter.com/SalihKesepara"
            target="_blank">twitter.com/salihkesepara</a>
        </div>
      </div>
      <div className="row">
        <div className="column-200">Stackoverflow</div>
        <div className="column-300">
          <a href="https://twitter.com/SalihKesepara"
            target="_blank"><a href="https://stackoverflow.com/users/5882263/salih-kesepara"
              target="_blank">stackoverflow/salihkesepara</a></a>
        </div>
      </div>
    </div>
  )
}

export default social
