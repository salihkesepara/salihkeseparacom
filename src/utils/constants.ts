/* eslint-disable */

export const banner = [
`<span class="index">Welcome The Personal Web Site CLI Tool.</span>`,
`<span class="text-color">Type <span class="command">'help'</span> or <span class="command">'-h'</span> to see all available commands.</span>`
]

export const help: Array<string> = [
  `<span class="code-color">Options: </span>`,
  `<span class="command">  summary</span>             Get summary about me`,
  `<span class="command">  skill</span>               Get all professional and unprofessional skill`,
  `<span class="command">  experiance</span>          Get all work experiances`,
  `<span class="command">  education</span>           Get all completed educations`,
  `<span class="command">  project</span>             Get all project`,
  `<span class="command">  language</span>            Get all language`,
  `<span class="command">  social</span>              Github, Linkedin, Twitter etc`,
  `<span class="command">  contact</span>             Get more detail about me`,
  `<span class="command">  clear</span>               Clear the terminal`
]

export const skill: Array<string> =[
  `
  Professional Skills: React Library, Redux Library, HTML5, CSS3, Sass, Babel, Webpack, Eslint, Git, Material UI, Javascript, TypeScript, Vue Framework, Vuex, npm, Agile methodologies, Jira, Scram master.<br/><br/>
  Unprofessional Skills: Amazon Web Services (AWS), DevOps, Pipelines, MongoDB, Node.js, AngularJS Framework, Ionic Framework, Cordova / Phonegap, jQuery, JAVA, Android Studio.
  `
]

export const summary: Array<string> = [
  `
  Team Lead / Senior Front-end Developer <br/>
  I have worked at Huawei Turkey R&D Center, Arcelik, Ziraat Bank Technology, Ciceksepeti, Etiya and Garanti Bank Turkey for more than 10 years.<br/><br/>
  During this time, I took part in the development of web and mobile project.
  `,
]

export const experiance: Array<string> = [
  `Huawei                Team Lead                Jun 2021 - Present  (1 year 6 months +)`,
  `BilgeAdam             Front-end Developer      Jun 2020 - Jun 2021 (1 year 1 month)`,
  `Ziraat Technology     Front-end Developer      Jul 2016 - Sep 2019 (3 years 3 months)`,
  `Ciceksepeti.com       Front-end Developer      Nov 2015 - May 2016 (7 months)`,
  `Etiya                 Front-end Developer      Feb 2014 - Oct 2015 (1 year 9 months)`,
  `Garanti BBVA          Front-end Developer      Dec 2011 - Jan 2014 (2 years 2 months)`,
  `                                               Total: More then 10 years`,
  `                                                                           <a href="https://www.linkedin.com/in/salihkesepara/details/experience/" target="_blank">See all...</a>`
]

export const education: Array<string> = [
  `Selcuk Uni.           Software Programming       2008 - 2010`,
  `Anadolu Uni.          Managament                 2010 - 2018`
]

export const project: Array<string> = [
  `Petal Maps Studio              Huawei                     Jul 2021 - Present`,
  `MessagingApp (Demo)                                       Aug 2019                     <a href="https://github.com/salihkesepara/MessagingApp" target="_blank">GitHub</a>`,
  `ShakeTree (Demo)                                          Jan 2019                     <a href="https://github.com/salihkesepara/shaketree" target="_blank">GitHub</a>`,
  `Catalyst                       Etiya                      Mar 2015`,
  `Ciceksepeti Mobil              Ciceksepeti Mobil          Jan 2015`,
  `Beggo                          Etiya                      Jun 2014`,
  `Telaura Mobile                 Etiya                      Jun 2014`,
  `Connecta                       Etiya                      Jun 2020`,
  `Marvel (Demo)                                             Dec 2019                     <a href="https://github.com/salihkesepara/marvel" target="_blank">GitHub</a>`,
  `<a href="https://play.google.com/store/apps/details?id=com.skesepara.get" target="_blank">Get - Breaking News</a>                                       Feb 2019                     <a href="https://gitlab.com/salihkesepara/get" target="_blank">GitLab</a>`,
  `Money Transfer / EFT           Ziraat Bank                Jan 2017`,
  `Warning Screens                Garanti BBVA               Jan 2013`,
  `Sales TrackingSales            Garanti BBVA               Feb 2013`,
  `FCR(First Call Resolution)     Garanti BBVA               Jun 2012`,
  `                                                                                   <a href="https://www.linkedin.com/in/salihkesepara/details/projects/" target="_blank">See all...</a>`
]

export const language: Array<string> = [
  `Turkish               Native`,
  `English               Intermediate`
]

export const social: Array<string> = [
  `<span class="command">gitHub</span>                <a href="https://github.com/salihkesepara" target="_blank">github.com/salihkesepara</a>`,
  `<span class="command">linkedin</span>              <a href="https://www.linkedin.com/in/salihkesepara" target="_blank">linkedin.com/in/salihkesepara</a>`,
  `<span class="command">twitter</span>               <a href="https://twitter.com/SalihKesepara" target="_blank">twitter.com/salihkesepara</a>`,
  `<span class="command">stackoverflow</span>         <a href="https://stackoverflow.com/users/5882263/salih-kesepara" target="_blank">stackoverflow/salihkesepara</a>`
]

export const contact: Array<string> = [
  `Location              Esenler, Istanbul, Turkey`,
  `Email                 salihkesepara@gmail.com`
]

export const commands: Array<{ name: string, value?: any, run?: Function }> = [
  {name: 'skill', value: skill},
  {name: 'summary', value: summary},
  {name: 'experiance', value: experiance},
  {name: 'education', value: education},
  {name: 'project', value: project},
  {name: 'language', value: language},
  {name: 'social', value: social},
  {name: 'help', value: help},
  {name: '-h', value: help},
  {name: 'contact', value: contact},
  {name: 'clear'}
]