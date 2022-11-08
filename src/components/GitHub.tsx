import gitHubLogo from 'src/assets/images/github.png'

const GitHub = () => {
  return (
    <a href="https://github.com/salihkesepara/salihkeseparacom"
      target="_blank"
      id="github">
      <img src={gitHubLogo}
        alt="go to github repo" />
      <span>GitHub</span>
    </a>
  )
}

export default GitHub
