# Backlog de Mejora y Rediseño: El Inversor Eficiente

Este documento detalla las tareas, mejoras y bugs identificados para el rediseño del sitio web [elinversoreficiente.com](https://elinversoreficiente.com/).

## 🎯 Prioridad Alta (Crítico / Quick Wins)

### 🛠️ Reparaciones Técnicas
- [ ] **Corregir contenido mixto (Mixed Content):**
    - Identificar recursos cargados vía HTTP.
    - Forzar carga HTTPS en todas las imágenes, scripts y fuentes.
    - *Impacto:* Mejora inmediata de seguridad y consistencia visual (las fuentes cargarán correctamente).

### 🎨 UX/UI Landing Page (Home)
- [ ] **Modernización del Hero Section:**
    - Reemplazar el slider/carrusel actual por un "Jumbo Hero" estático o con transición suave que comunique la propuesta de valor en < 3 segundos.
    - Mejorar contraste de textos sobre imágenes.
- [ ] **Limpieza Visual:**
    - Eliminar efectos de "resplandor" (glow) azul intenso en contenedores.
    - Reducir sombras pesadas (box-shadow) por sombras más sutiles y modernas.
    - Aumentar el espacio en blanco (whitespace) entre secciones para mejorar la legibilidad.

### 📚 Página de Ventas (Curso)
- [ ] **Auditoría de Contenido:**
    - Revisar secciones vacías o rotas identificadas durante el análisis.
- [ ] **Optimización de Conversión (CRO):**
    - Estructurar la página con: Problema -> Solución -> Autoridad -> Prueba Social -> Oferta -> CTA.
    - Añadir tabla de contenidos del curso visible y atractiva.

### 💼 Nuevos Servicios (Asesoría)
- [ ] **Sección de Asesoría Financiera (Nuevo):**
    - Crear landing específica o sección en Home para "Asesoría Financiera".
    - Incluir servicios: Hipotecas, Planificación Financiera, etc.
    - Añadir formulario de contacto específico para leads de asesoría.

## 🚀 Prioridad Media (Estructural / Performance)

### ⚡ Rendimiento (Web Vitals)
- [ ] **Optimización de Imágenes:**
    - Convertir imágenes a formato WebP.
    - Implementar Lazy Loading (carga diferida) en imágenes debajo del primer pantallazo ("below the fold").
- [ ] **Optimización de Elementor:**
    - Desactivar widgets y scripts de Elementor no utilizados.
    - Minificar CSS y JS.

### 📱 Responsividad (Mobile First)
- [ ] **Revisión de Navegación Móvil:**
    - Asegurar que el menú hamburguesa sea fluido y accesible.
- [ ] **Ajuste de Grids:**
    - Verificar que los testimonios y eventos se apilen correctamente en pantallas verticales (sin desbordamientos).

### 🎨 Sistema de Diseño (Design System)
- [ ] **Definición de Guía de Estilos:**
    - **Tipografía:** Asegurar carga correcta de *Raleway* o migrar a una combinación moderna (ej. *Inter* o *Montserrat* para títulos, *Open Sans* para cuerpo).
    - **Paleta de Colores:** Modernizar el azul corporativo hacia tonos más mate/tech, acompañados de grises neutros y un color de acento vibrante para CTAs (ej. naranja o verde menta).
    - **Botones:** Unificar estilos (bordes, padding, hover states).

## 📝 Prioridad Baja (Contenido / Mantenimiento)

### 📰 Blog
- [ ] **Rediseño de Grid de Artículos:**
    - Modernizar las tarjetas de post (imágenes más limpias, extractos claros, meta-datos legibles).
- [ ] **Mejora de Legibilidad:**
    - Aumentar tamaño de fuente base (16px -> 18px) y altura de línea.

### 👤 Footer
- [ ] **Reorganización:**
    - Simplificar enlaces.
    - Actualizar copyright automáticamente.
    - Mejorar visibilidad de redes sociales.

## 💡 Ideas de Diseño Sugeridas

> "Un diseño financiero no tiene por qué ser aburrido. Buscamos transmitir **confianza, claridad y modernidad**."

*   **Estilo:** Clean Corporate / Fintech.
*   **Referencia Visual:** Stripe, Revolut (para uso de blancos y tipografía), Morningstar (para sobriedad).
*   **Interacciones:** Micro-interacciones suaves al hacer hover en botones o tarjetas de características.
