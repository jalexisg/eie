# El Inversor Eficiente (Redesign)

![Deploy to GitHub Pages](https://github.com/jalexisg/eie/actions/workflows/deploy.yml/badge.svg)

> **Agent Friendly Project**: This project follows the [AGENTS.md](AGENTS.md) standard. See `skills/` for developer guides.

This is a redesign of the *El Inversor Eficiente* landing page using **Vanilla JavaScript** and **Vite**.
The goal is to have a fast, lightweight, and maintainable codebase without the overhead of heavy frameworks like React.
Repositorio oficial para el rediseño moderno del sitio web [elinversoreficiente.com](https://elinversoreficiente.com/).

Este proyecto migra la web antigua (WordPress) a un stack de **alto rendimiento** y diseño personalizado, enfocado en la **Asesoría Financiera Independiente**.

## 🚀 Tecnologías

*   **Vite**: Entorno de desarrollo ultrarrápido.
*   **Vanilla JS**: Javascript puro para máximo rendimiento sin dependencias pesadas.
*   **CSS Variables**: Sistema de diseño moderno y mantenible.
*   **Docker**: Entorno de desarrollo contenerizado y aislado.

## ✨ Funcionalidades Implementadas (Landing Page)

La página de inicio ha sido completamente rediseñada con la siguiente estructura estratégica:

1.  **Hero Section**: Propuesta de valor clara ("Maximiza tu Riqueza") enfocada en gestión patrimonial.
2.  **Servicios**:
    *   🏠 Hipotecas y Financiación.
    *   📊 Planificación Financiera.
    *   ⚖️ Gestión Patrimonial.
3.  **Autoridad (Sobre Nosotros)**: Sección para generar confianza con el perfil del asesor.
4.  **Academy (Teaser)**: Banner para derivar tráfico interesado en formación (Cursos).
5.  **Captación (Contacto)**: Formulario funcional para generar leads cualificados.

## 🛠️ Cómo ejecutar el proyecto (Local)

### Opción A: Docker (Recomendada)
No necesitas tener Node.js instalado. Solo Docker.

```bash
docker-compose up
```

Abre tu navegador en: [http://localhost:5173](http://localhost:5173)

### Opción B: Node.js
Si prefieres correrlo nativamente:

```bash
npm install
npm run dev
```

## 📂 Estructura del Proyecto

*   `src/components/`: Componentes UI modulares (Header, Hero, Services, etc.).
*   `src/style.css`: Sistema de diseño global.
*   `src/main.js`: Punto de entrada de la aplicación.
*   `.github/workflows`: Configuración de CI/CD para GitHub Actions.

## 📝 Documentación Adicional
- [BACKLOG.md](./BACKLOG.md) - Lista de tareas y hoja de ruta.
