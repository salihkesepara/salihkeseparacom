import npm from 'src/assets/images/npm.svg'

const Npm = () => {
  return (
    <a href="https://github.com/salihkesepara/salihkeseparacom"
      target="_blank"
      id="npm">
      <div className="img-box">
        <img src={npm}
          alt="go to github repo" />
      </div>
      <span>Npm</span>
    </a>
  )
}

export default Npm
