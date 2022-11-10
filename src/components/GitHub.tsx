import gitHubLogo from 'src/assets/images/github.png'

const GitHub = () => {
  const githubRepoLink = 'https://github.com/salihkesepara/salihkeseparacom'

  return (
    <a href={githubRepoLink}
      target="_blank"
      id="github">
      <img src={gitHubLogo}
        alt="go to github repo" />
      <span>GitHub</span>
    </a>
  )
}

export default GitHub
