export function Footer() {
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo footer-logo">
            EL INVERSOR <span class="highlight">EFICIENTE</span>
          </a>
          <p>
            Asesoramiento financiero independiente. Tu socio de confianza para hipotecas e inversiones.
          </p>
        </div>
        
        <div class="footer-links">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#">Hipotecas</a></li>
            <li><a href="#">Planificación</a></li>
            <li><a href="#">Gestión Patrimonial</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Apariciones en Prensa</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Aviso Legal</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <div class="container footer-bottom">
        <p>&copy; ${year} El Inversor Eficiente. Todos los derechos reservados.</p>
        <div class="social-links">
          <!-- Placeholder for icons -->
          <a href="#" aria-label="LinkedIn">IN</a>
          <a href="#" aria-label="Twitter">TW</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>
    </footer>
  `;
}
