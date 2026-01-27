export function Contact() {
    return `
    <section id="contacto" class="contact-section">
      <div class="container contact-container">
        <div class="contact-header">
          <h2 class="section-title">Hablemos de tu Futuro</h2>
          <p class="section-subtitle">
            Solicita tu estudio gratuito sin compromiso. Analizaremos tu situación y te propondremos la mejor estrategia.
          </p>
        </div>
        
        <form class="contact-form" onsubmit="event.preventDefault(); alert('Gracias. En una implementación real, esto enviaría los datos a tu CRM.');">
          <div class="form-group">
            <label for="name">Nombre completo</label>
            <input type="text" id="name" name="name" placeholder="Ej. Juan Pérez" required>
          </div>
          
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" name="email" placeholder="hola@ejemplo.com" required>
          </div>
          
          <div class="form-group">
            <label for="service">¿En qué estás interesado?</label>
            <div class="select-wrapper">
              <select id="service" name="service">
                <option value="hipoteca">Mejorar mi Hipoteca</option>
                <option value="inversion">Planificación de Inversión</option>
                <option value="patrimonio">Gestión Patrimonial (>100k€)</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="message">Mensaje (Opcional)</label>
            <textarea id="message" name="message" rows="4" placeholder="Cuéntanos brevemente tu situación..."></textarea>
          </div>

          <button type="submit" class="btn btn-lg btn-primary btn-block">Solicitar Estudio &rarr;</button>
          
          <p class="form-footer">
            Tus datos están protegidos. Al enviar aceptas nuestra <a href="#">Política de Privacidad</a>.
          </p>
        </form>
      </div>
    </section>
  `;
}
