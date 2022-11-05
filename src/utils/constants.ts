/* eslint-disable */

export const banner = [
  '<span class="index">Welcome The Personal Web Site CLI Tool.</span>',
  "         ___   ____",
  "       /' --;^/ ,-_\\     \\ | /       ",
  "      / / --o\\ o-\\ \\\\   --(_)--   ",
  "     /-/-/|o|-|\\-\\\\|\\\\   / | \\   ______                          __     __ __       _       __    __   ",
  "      '`  ` |-|   `` '          / ____/___  _____________  _____/ /_   / //_/____  (_)___ _/ /_  / /_ ",
  "            |-|                / /_  / __ \\/ ___/ ___/ _ \\/ ___/ __/  / ,<  / __ \\/ / __ `/ __ \\/ __/ ",
  "            |-|O              / __/ / /_/ / /  / /  /  __(__  ) /_   / /| |/ / / / / /_/ / / / / /_  ",
  "            |-(\\,__          /_/    \\____/_/  /_/   \\___/____/\\__/  /_/ |_/_/ /_/_/\\__, /_/ /_/\\__/ ",
  "         ...|-|\\--,\\_....                                                         /____/    © 2022",
  "      ,;;;;;;;;;;;;;;;;;;;;;;;;,.   ",
  "~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>"
];

export const banner2 = [
'<span class="index">Welcome The Personal Web Site CLI Tool.</span>',
"<span class=\"color2\">Type <span class=\"command\">'help'</span> to see all available commands.</span>"
]






export const help: Array<string> = [
  `<span class="command">summary</span>            Work experiances and technologies`,
  `<span class="command">about</span>              Get more detail about me`,
  `<span class="command">projects</span>           Get all detail about projects`,
  `<span class="command">socials</span>            Github, Linkedin, Twitter etc`,
  `<span class="command">clear</span>              Clear the terminal`
]

export const socials: Array<string> = [
  `<span class="command">gitHub</span>             <a href="https://github.com/salihkesepara" target="_blank">github.com/salihkesepara</a>`,
  `<span class="command">linkedin</span>           <a href="https://www.linkedin.com/in/salihkesepara" target="_blank">linkedin.com/in/salihkesepara</a>`,
  `<span class="command">twitter</span>            <a href="https://twitter.com/SalihKesepara" target="_blank">twitter.com/salihkesepara</a>`,
  `<span class="command">stackoverflow</span>      <a href="https://stackoverflow.com/users/5882263/salih-kesepara" target="_blank">stackoverflow/salihkesepara</a>`
]

export const commands: Array<{ name: string, value?: any, run?: Function }> = [
  {name: 'help', value: help},
  {name: 'socials', value: socials},
  {name: 'clear'}
]