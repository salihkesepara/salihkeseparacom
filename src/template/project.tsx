const project = (key: string) => {
  const column: string[] = ['column-300', 'column-300', 'column-300', 'column-200']

  return (
    <div key={key}>
      <div className="row">
        <div className={column[0]}>Petal Maps Studio</div>
        <div className={column[1]}>Huawei</div>
        <div className={column[2]}>Jul 2021 - Present</div>
      </div>
      <div className="row">
        <div className={column[0]}>MessagingApp (Demo)</div>
        <div className={column[1]}></div>
        <div className={column[2]}>Aug 2019</div>
        <div className={column[3]}>
          <a href="https://github.com/salihkesepara/MessagingApp"
            target="_blank">GitHub
          </a>
        </div>
      </div>
      <div className="row">
        <div className={column[0]}><a href="https://shaketree.salihkesepara.com" target="_blank">ShakeTree (Demo)</a></div>
        <div className={column[1]}></div>
        <div className={column[2]}>Jan 2019</div>
        <div className={column[3]}><a href="https://github.com/salihkesepara/shaketree"
          target="_blank">GitHub</a></div>
      </div>
      <div className="row">
        <div className={column[0]}>Catalyst</div>
        <div className={column[1]}>Etiya</div>
        <div className={column[2]}>Mar 2015</div>
      </div>
      <div className="row">
        <div className={column[0]}>Ciceksepeti Mobil</div>
        <div className={column[1]}>Ciceksepeti Mobil</div>
        <div className={column[2]}>Jan 2015</div>
      </div>
      <div className="row">
        <div className={column[0]}>Beggo</div>
        <div className={column[1]}>Etiya</div>
        <div className={column[2]}>Jun 2014</div>
      </div>
      <div className="row">
        <div className={column[0]}>Telaura Mobile</div>
        <div className={column[1]}>Etiya</div>
        <div className={column[2]}>Jun 2014</div>
      </div>
      <div className="row">
        <div className={column[0]}>Connecta</div>
        <div className={column[1]}>Etiya</div>
        <div className={column[2]}>Jun 2020</div>
      </div>
      <div className="row">
        <div className={column[0]}>Marvel (Demo)</div>
        <div className={column[1]}></div>
        <div className={column[2]}>Dec 2019</div>
        <div className={column[3]}>
          <a href="https://github.com/salihkesepara/marvel"
            target="_blank">GitHub</a>
        </div>
      </div>
      <div className="row">
        <div className={column[0]}>
          <a href="https://play.google.com/store/apps/details?id=com.skesepara.get" target="_blank">Get - Breaking News</a>
        </div>
        <div className={column[1]}></div>
        <div className={column[2]}>Feb 2019</div>
        <div className={column[3]}>
          <a href="https://gitlab.com/salihkesepara/get"
            target="_blank">GitLab</a>
        </div>
      </div>
      <div className="row">
        <div className={column[0]}>Money Transfer / EFT</div>
        <div className={column[1]}>Ziraat Bank</div>
        <div className={column[2]}>Jan 2017</div>
      </div>
      <div className="row">
        <div className={column[0]}>Warning Screens</div>
        <div className={column[1]}>Garanti BBVA</div>
        <div className={column[2]}>Jan 2013</div>
      </div>
      <div className="row">
        <div className={column[0]}>Sales TrackingSales</div>
        <div className={column[1]}>Garanti BBVA</div>
        <div className={column[2]}>Feb 2013</div>
      </div>
      <div className="row">
        <div className={column[0]}>FCR(First Call Resolution)</div>
        <div className={column[1]}>Garanti BBVA</div>
        <div className={column[2]}>Jun 2012</div>
      </div>
      <div className="row">
        <div className={column[0]}></div>
        <div className={column[1]}></div>
        <div className={column[2]}></div>
        <div className={column[3]}>
          <a href="https://www.linkedin.com/in/salihkesepara/details/projects/"
            target="_blank">See all...
          </a>
        </div>
      </div>
    </div>
  )
}

export default project
