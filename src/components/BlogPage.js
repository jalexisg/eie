export function BlogPage() {
  const posts = [
    {
      id: 'sQEcU5tw67Q',
      title: 'La Unión Europea por dentro: estructura, poder y defectos del bloque',
      date: 'Febrero 2026',
      excerpt: 'Analizamos cómo funciona realmente la UE, quién manda de verdad y cuáles son las grietas de un sistema que afecta directamente a tu bolsillo y soberanía.'
    },
    {
      id: 'fUPu0JGuvJ4',
      title: 'La guerra como negocio: por qué la paz mundial no le conviene a muchos',
      date: 'Enero 2026',
      excerpt: 'Detrás de los conflictos geopolíticos hay una industria masiva. Descubre quiénes son los verdaderos beneficiarios económicos de la inestabilidad global.'
    },
    {
      id: 'cOwXMK7cQ40',
      title: '¿Qué pasaría si los bancos desaparecieran mañana?',
      date: 'Enero 2026',
      excerpt: 'Exploramos el escenario de un colapso del sistema bancario tradicional. ¿Estamos preparados para una economía sin intermediarios financieros?'
    },
    {
      id: 'TapplbZNQUo',
      title: 'Francia: El gigante enfermo de Europa',
      date: 'Diciembre 2025',
      excerpt: 'El análisis definitivo sobre la situación económica de Francia: sus ventajas competitivas frente a sus debilidades estructurales y lo que el futuro le depara.'
    }
  ];

  const blogPostsHtml = posts.map(post => `
    <article class="blog-card">
      <div class="video-container">
        <iframe 
          src="https://www.youtube.com/embed/${post.id}" 
          title="${post.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="blog-card-content">
        <span class="blog-date">${post.date}</span>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="https://www.youtube.com/watch?v=${post.id}" target="_blank" class="text-link">Ver en YouTube &rarr;</a>
      </div>
    </article>
  `).join('');

  return `
    <div class="blog-page">
      <section class="blog-hero">
        <div class="container">
          <span class="badge badge-light">Blog & Análisis</span>
          <h1>Perspectiva Económica y Geopolítica</h1>
          <p class="lead">Entiende el mundo más allá de los titulares. Análisis profundo con el rigor de El Inversor Eficiente.</p>
        </div>
      </section>

      <section class="blog-content">
        <div class="container">
          <div class="blog-grid">
            ${blogPostsHtml}
          </div>
        </div>
      </section>
    </div>
  `;
}
