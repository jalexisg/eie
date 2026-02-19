export function Hero() {
  return `
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <span class="hero-badge">📈 Tu Patrimonio, En Manos Expertas</span>
          <h1 class="hero-title">
            Maximiza tu Riqueza con <br>
            <span class="text-gradient">Planificación Estratégica</span>
          </h1>
          <p class="hero-subtitle">
            Asesoramiento financiero independiente y gestión de hipotecas. 
            Te ayudamos a tomar las mejores decisiones para proteger y hacer crecer tu dinero.
          </p>
          <div class="hero-actions">
            <a href="#/contacto" class="btn btn-lg btn-primary">Solicitar Estudio Gratuito</a>
            <a href="#/curso" class="btn btn-lg btn-outline">Ver Formación</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">+15M€</span>
              <span class="stat-label">Patrimonio Gestionado</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Independientes</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
           <img src="assets/images/hero-abstract.png" alt="Planificación Financiera Estratégica" class="hero-main-image">
        </div>
      </div>
    </section>
  `;
}
