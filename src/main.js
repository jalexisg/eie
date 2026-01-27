import './style.css'
import { Header, setupHeader } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Services } from './components/Services.js'
import { About } from './components/About.js'
import { CourseTeaser } from './components/CourseTeaser.js'
import { Contact } from './components/Contact.js'
import { Footer } from './components/Footer.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${Services()}
    ${About()}
    ${CourseTeaser()}
    ${Contact()}
  </main>
  ${Footer()}
`

setupHeader();
