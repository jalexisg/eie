import './style.css'
import { Header, setupHeader } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Services } from './components/Services.js'
import { About } from './components/About.js'
import { CourseTeaser } from './components/CourseTeaser.js'
import { Contact } from './components/Contact.js'
import { Footer } from './components/Footer.js'
import { CoursePage } from './components/CoursePage.js'

function Home() {
  return `
    <main>
      ${Hero()}
      ${Services()}
      ${About()}
      ${CourseTeaser()}
      ${Contact()}
    </main>
  `
}

// State to track current page
let currentPage = null;

function render() {
  const hash = window.location.hash || '#/';
  const app = document.querySelector('#app');

  // Determine target page based on hash
  // Routes: #/curso -> CoursePage, anything else -> Home
  const isCoursePage = hash.startsWith('#/curso');
  const targetPage = isCoursePage ? 'course' : 'home';

  // Only re-render if the page structure changes
  if (currentPage !== targetPage) {
    window.scrollTo(0, 0); // Reset scroll for new page

    let content = '';
    if (targetPage === 'course') {
      content = `
        <main>
          ${CoursePage()}
        </main>
      `;
    } else {
      content = Home();
    }

    app.innerHTML = `
      ${Header()}
      ${content}
      ${Footer()}
    `;

    setupHeader();
    currentPage = targetPage;
  }

  // Handle Internal Scrolling (Anchors)
  // If we just rendered, wait a tick for DOM. If already rendered, scroll immediately.
  setTimeout(() => {
    handleScroll(hash);
  }, 0);
}

function handleScroll(hash) {
  // If hash is empty or just #/, scroll to top
  if (!hash || hash === '#/') {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return;
  }

  let targetId = null;

  // Map hashes to Element IDs
  if (hash === '#/asesoria') targetId = 'servicios';
  if (hash === '#/contacto') targetId = 'contacto';
  // Add more mappings if needed

  if (targetId) {
    const element = document.getElementById(targetId);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }
}

// Debugging: Catch global errors
window.onerror = function (msg, url, line, col, error) {
  document.body.innerHTML += `
    <div style="color: red; padding: 20px; background: white; border: 2px solid red; margin: 20px;">
      <h3>Error Detectado:</h3>
      <p>${msg}</p>
      <p>Line: ${line}, Column: ${col}</p>
      <pre>${error?.stack || 'No stack trace'}</pre>
    </div>
  `;
  return false;
};

// Listen for hash changes
window.addEventListener('hashchange', () => {
  try {
    render();
  } catch (e) {
    console.error(e);
    document.body.innerHTML += `<div style="color:red">Render Error: ${e.message}</div>`;
  }
});

// Initial render
try {
  render();
} catch (e) {
  console.error(e);
  document.body.innerHTML += `<div style="color:red">Initial Render Error: ${e.message}</div>`;
}
