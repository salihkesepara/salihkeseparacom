import npm from 'src/assets/images/npm.svg'

const Npm = () => {
  const npmLink = 'https://www.npmjs.com/package/terminal-io'
  return (
    <a href={npmLink}
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
