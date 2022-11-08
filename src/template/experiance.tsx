const experiance = (key: string) => {
  const column: string[] = ['column-200', 'column-300', 'column-400']

  return (
    <div key={key}>
      <div className="row">
        <div className={column[0]}>Huawei</div>
        <div className={column[1]}>Team Lead</div>
        <div className={column[2]}>Jun 2021 - Present  (1 year 6 months +)</div>
      </div>
      <div className="row">
        <div className={column[0]}>BilgeAdam</div>
        <div className={column[1]}>Front-end Developer</div>
        <div className={column[2]}>Jun 2020 - Jun 2021 (1 year 1 month)</div>
      </div>
      <div className="row">
        <div className={column[0]}>Ziraat Technology</div>
        <div className={column[1]}>Front-end Developer</div>
        <div className={column[2]}>Jul 2016 - Sep 2019 (3 years 3 months)</div>
      </div>
      <div className="row">
        <div className={column[0]}>Ciceksepeti.com</div>
        <div className={column[1]}>Front-end Developer</div>
        <div className={column[2]}>Nov 2015 - May 2016 (7 months)</div>
      </div>
      <div className="row">
        <div className={column[0]}>Etiya</div>
        <div className={column[1]}>Front-end Developer</div>
        <div className={column[2]}>Feb 2014 - Oct 2015 (1 year 9 months)</div>
      </div>
      <div className="row">
        <div className={column[0]}>Garanti BBVA</div>
        <div className={column[1]}>Front-end Developer</div>
        <div className={column[2]}>Dec 2011 - Jan 2014 (2 years 2 months)</div>
      </div>
      <div className="row">
        <div className={column[0]}></div>
        <div className={column[1]}></div>
        <div className={column[2]}>Total: More then 10 years</div>
      </div>
      <div className="row">
        <div className={column[0]}></div>
        <div className={column[1]}></div>
        <div className={column[2]}>
          <a href="https://www.linkedin.com/in/salihkesepara/details/experience/"
            target="_blank">See all...
          </a>
        </div>
      </div>
    </div>
  )
}

export default experiance
