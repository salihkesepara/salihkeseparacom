const language = (key: string) => {
  return (
    <div key={key}>
      <div className="row">
        <div className="column-200">Turkish</div>
        <div className="column-200">Native</div>
      </div>
      <div className="row">
        <div className="column-200">English</div>
        <div className="column-200">Intermediate</div>
      </div>
    </div>
  )
}

export default language
