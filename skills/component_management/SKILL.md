---
name: Component Management
description: Instructions for creating, registering, and using UI components in the Vanilla JS architecture.
---

# Component Management

This project uses a simple Functional Component architecture based on Template Literals.

## 🧩 Component Structure

All components live in `src/components/`.
Each component is a standard JavaScript module exporting a function that returns an HTML string.

### Template
```javascript
// src/components/MyComponent.js
import './MyComponent.css'; // Optional: component-specific styles

export function MyComponent(props = {}) {
  // Logic goes here
  const { title = 'Default Title' } = props;

  return `
    <section class="my-component">
      <h2>${title}</h2>
      <div class="content">
        <!-- Component content -->
      </div>
    </section>
  `;
}
```

## 📝 Registration

To use a new component in the main application, you must import it in `src/main.js` and add it to the render logic.

1.  **Import**:
    ```javascript
    import { MyComponent } from './components/MyComponent.js';
    ```

2.  **Usage**:
    Add the function call inside the template literal in `Home()` or `render()`.
    ```javascript
    function Home() {
      return `
        <main>
          ${Hero()}
          ${MyComponent({ title: 'New Section' })}
          ${Footer()}
        </main>
      `;
    }
    ```

## 🎨 Styling
*   Prefer global styles in `src/style.css` for common elements.
*   For specific component styles, create `src/components/MyComponent.css` and import it at the top of the component file.
