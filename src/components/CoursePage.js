export function CoursePage() {
  return `
    <div class="course-page">
      <section class="course-hero">
        <div class="container">
          <span class="badge badge-light">Academia EIE</span>
          <h1>Fundamentos de Inversión Bursátil</h1>
          <p class="lead">Deja de perder ahorros por la inflación. Aprende un sistema probado para gestionar tu patrimonio con seguridad y rentabilidad a largo plazo.</p>
          <div class="hero-actions">
             <button onclick="document.getElementById('temario').scrollIntoView({behavior: 'smooth'})" class="btn btn-primary">Ver Temario</button>
             <button onclick="document.getElementById('precio').scrollIntoView({behavior: 'smooth'})" class="btn btn-outline-white">Inscribirse Ahora</button>
          </div>
        </div>
      </section>

      <section class="course-benefits">
        <div class="container">
          <h2 class="section-title text-center">¿Qué vas a conseguir?</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="icon">🧠</div>
              <h3>Mentalidad Correcta</h3>
              <p>Elimina el ruido del mercado y aprende a pensar como un propietario de negocios, no como un especulador.</p>
            </div>
            <div class="benefit-card">
              <div class="icon">🔍</div>
              <h3>Análisis Fundamental</h3>
              <p>Aprende a leer balances y cuentas de resultados para saber si una empresa es sólida antes de poner un euro.</p>
            </div>
            <div class="benefit-card">
              <div class="icon">🛡️</div>
              <h3>Gestión del Riesgo</h3>
              <p>Diversificación inteligente. Cómo proteger tu capital ante crisis y caídas del mercado.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="temario" class="course-syllabus">
        <div class="container">
           <h2 class="section-title">Temario del Programa</h2>
           <div class="syllabus-grid">
             <div class="syllabus-column">
               <details>
                 <summary>Módulo 1: Sistema Financiero</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Introducción al sistema Financiero / Conociendo el sistema financiero</li>
                     <li>Unidades económicas / Economía ¿Qué es esto?</li>
                     <li>Estructura del sistema financiero / ¿Cómo funciona la Economía?</li>
                     <li>Activos y pasivos financieros / Self Financiero</li>
                     <li>Mercados financieros / Las finanzas y el Mercado</li>
                     <li>Instituciones e instrucciones financieras / Guía en las finanzas</li>
                     <li>Formación de precios / Oferta y demanda</li>
                   </ul>
                 </div>
               </details>
               <details>
                 <summary>Módulo 2: Conceptos Claves de Inversión</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Gestión del riesgo / Binomio rentabilidad riesgo</li>
                     <li>Interés compuesto y diversificación</li>
                     <li>Clasificación de los productos financieros / Medula de las Finanzas</li>
                     <li>Renta fija</li>
                     <li>Renta variable</li>
                   </ul>
                 </div>
               </details>
               <details>
                 <summary>Módulo 3: Coaching Financiero</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>¿Confiar o no confiar?</li>
                     <li>¿Por qué no gano igual que el vecino?</li>
                     <li>¿Qué hago cuando Pierdo?</li>
                     <li>Tips para saber que estas gestionando bien tu dinero</li>
                   </ul>
                 </div>
               </details>
               <details>
                 <summary>Módulo 4: Productos de Inversión</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Introducción</li>
                     <li>Acciones</li>
                     <li>Fondos de inversión</li>
                     <li>Ventajas/ desventajas fondos VS acciones</li>
                   </ul>
                 </div>
               </details>
               <details>
                 <summary>Módulo 5: Planificación Financiera</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Introducción</li>
                     <li>Análisis financiero</li>
                     <li>Plataformas de inversión</li>
                     <li>Tipos de órdenes en renta variable</li>
                   </ul>
                 </div>
               </details>
             </div>
             
             <div class="syllabus-column">
               <details>
                 <summary>Módulo 6: Estrategias de Inversión</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Introducción</li>
                     <li>La importancia del análisis y la diversificación antes de invertir</li>
                     <li>Tipos de estrategias de inversión</li>
                     <li>Un punto diferenciador: estrategias sostenibles</li>
                     <li>Pasos para establecer una estrategia de inversión sólida</li>
                   </ul>
                 </div>
               </details>
               <details>
                 <summary>Módulo 7: Análisis Técnico (Gráficos)</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Teoría Dow – Principios Básicos</li>
                     <li>Premisas</li>
                     <li>Tipos de gráficos y de Gaps</li>
                     <li>Tendencia (Direcciones, fases y categorías)</li>
                     <li>Niveles de resistencia y soporte</li>
                   </ul>
                 </div>
               </details>
               <details>
                 <summary>Módulo 8: Análisis Técnico (Patrones)</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Patrones de Velas</li>
                     <li>Modelos de continuación</li>
                     <li>Modelos de cambio</li>
                     <li>Introducción a los indicadores técnicos</li>
                     <li>Ondas de Elliot</li>
                   </ul>
                 </div>
               </details>
               <details>
                 <summary>Módulo 9: Introducción al Análisis Fundamental</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Definición y objetivos del análisis fundamental.</li>
                     <li>Diferencias entre el análisis fundamental y el técnico.</li>
                     <li>Inversión y especulación</li>
                     <li>¿Por qué es importante el análisis fundamental?</li>
                     <li>Conociendo los estados financieros principales</li>
                     <li>Valoración de empresas</li>
                     <li>Analizando el sector.</li>
                     <li>La macroeconomía y su impacto en las inversiones.</li>
                     <li>Análisis Top Down y Bottom Up.</li>
                     <li>Riesgos asociados a la inversión</li>
                   </ul>
                 </div>
               </details>
               <details>
                 <summary>Módulo 10: Herramientas del Análisis Fundamental</summary>
                 <div class="details-content">
                   <ul class="syllabus-detail-list">
                     <li>Ratios financieros ¿Por qué son importantes?</li>
                     <li>PER o RPG, Precio/Valor Contable, Rentabilidad por dividendo</li>
                     <li>EBITDA, Margen EBITDA, EV/EBITDA</li>
                     <li>Indicadores de Rentabilidad y Endeudamiento</li>
                     <li>Estilos de inversión</li>
                     <li>Inversión en tiempos de crisis</li>
                     <li>Hacia dónde van los mercados</li>
                     <li>Inversiones alternativas</li>
                     <li>Gestión de riesgo en las inversiones</li>
                     <li>Recursos para ampliar conceptos</li>
                   </ul>
                 </div>
               </details>
             </div>
           </div>
        </div>
      </section>

      <section id="precio" class="course-pricing">
        <div class="container">
          <div class="pricing-card">
            <h3>Edición 2026</h3>
            <div class="price">327€ <span class="period">+ impuestos</span></div>
            <ul class="check-list">
              <li>Acceso de por vida al contenido</li>
              <li>Soporte directo por email</li>
              <li>Plantillas de valoración en Excel</li>
              <li>Comunidad privada de alumnos</li>
            </ul>
            <a href="https://pay.hotmart.com/P92256652Q?bid=1712671933489" target="_blank" rel="noopener noreferrer" class="btn btn-lg btn-primary btn-block">Apuntarme al Curso</a>
            <p class="guarantee">Garantía de devolución de 15 días.</p>
          </div>
        </div>
      </section>
    </div>
  `;
}
