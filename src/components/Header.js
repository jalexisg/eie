export function Header() {
  return `
    <header class="site-header">
      <div class="container header-container">
        <a href="#" class="logo">
          EL INVERSOR <span class="highlight">EFICIENTE</span>
        </a>
        <nav class="main-nav">
          <ul>
            <li><a href="#/">Inicio</a></li>
            <li><a href="#/asesoria">Asesoría</a></li>
            <li><a href="#/curso">Curso</a></li>
            <li><a href="#">Libro</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <div class="header-cta desktop-only">
            <a href="#/contacto" class="btn btn-sm btn-primary">Reservar Cita</a>
          </div>
          <button class="menu-toggle" aria-label="Abrir menú">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function setupHeader() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('nav-open');
    toggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
