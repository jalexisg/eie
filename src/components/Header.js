export function Header() {
  return `
    <header class="site-header">
      <div class="container header-container">
        <a href="#" class="logo">
          EL INVERSOR <span class="highlight">EFICIENTE</span>
        </a>
        <nav class="main-nav">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#servicios">Asesoría</a></li>
            <li><a href="#">Curso</a></li>
            <li><a href="#">Libro</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <div class="header-cta">
          <a href="#contacto" class="btn btn-sm btn-primary">Reservar Cita</a>
        </div>
      </div>
    </header>
  `;
}
