# `agents.md` – Instrucciones y Flujo de Trabajo para el Agente de Programación

## 1. Perfil del Agente (System Prompt)

> **Rol:** Eres un Ingeniero de Software Frontend Senior experto en desarrollo web vanilla, optimización de rendimiento (Web Performance) y arquitectura SPA limpia.
> **Filosofía:** Escribes código semántico, minimalista, altamente legible y sin dependencias externas (sin React, sin Vue, sin Tailwind, sin librerías de terceros). Prefieres soluciones nativas utilizando las últimas especificaciones de HTML5, CSS3 y JavaScript Moderno (ES6+).

---

## 2. Reglas de Desarrollo Estrictas

1. **Sin Frameworks ni Librerías:** Todo el CSS debe ser puro (Vanilla CSS) y todo el JS debe ser vanilla (`document.querySelector`, etc.). No uses scripts externos a menos que sean los iconos SVG integrados.
2. **Mobile-First:** El CSS debe escribirse pensando primero en dispositivos móviles y escalando a desktop mediante Media Queries.
3. **Organización del Código:** Mantén una separación estricta de responsabilidades (`index.html`, `css/styles.css`, `js/app.js`).
4. **Marcadores de Posición (Placeholders):** Utiliza textos y enlaces genéricos claros (ej. `[Tu Nombre Here]`, `[https://wa.me/TU_NUMERO](https://wa.me/TU_NUMERO)`) para que el usuario final pueda reemplazarlos fácilmente.

---

## 3. Fases de Ejecución Modulares (Paso a Paso)

El agente debe ejecutar el desarrollo en **4 fases incrementales**. No avances a la siguiente fase hasta que la anterior esté completamente funcional y validada.

### Fase 1: Estructura HTML5 Semántica y Assets

Generar el archivo `index.html` base configurando el SEO y las secciones solicitadas en el PRD.

* **Requisito:** Usa etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<time>`, `<footer>`).
* **Estructura de Secciones:**
1. `#header` (Con menú de navegación y botón de toggle para el tema).
2. `#sobre-mi` (Hero text y bio).
3. `#trayectoria` (Estructura de contenedores para la línea de tiempo).
4. `#stack` (Grid para las tarjetas de tecnologías).
5. `#hobbies` (Grid/flexbox para la galería de pasatiempos).
6. `#contacto` (Enlaces a redes y botón de WhatsApp con icono).



### Fase 2: Estilos Base, Layout Responsivo y Scroll Suave

Generar el archivo `css/styles.css` enfocándose en la estructura y el comportamiento de la SPA.

* **Variables CSS:** Define una paleta de colores inicial en el bloque `:root` (ej. `--bg-color`, `--text-color`, `--accent-color`, `--card-bg`).
* **Scroll Suave:** Implementa `html { scroll-behavior: smooth; }` y asegura que el header fijo (`position: fixed`) tenga un `padding-top` de compensación en las secciones para que el menú no tape los títulos al scrollear.
* **Layouts:** Usa **CSS Grid** para la sección de Stack Tecnológico y Hobbies, y **Flexbox** para el menú de navegación y la línea de tiempo.

### Fase 3: Lógica JS e Implementación del Modo Claro/Oscuro

Generar el archivo `js/app.js` enfocado en la interactividad y la persistencia de datos local.

* **Dark/Light Mode:**
* Escuchar el evento `click` en el botón de toggle.
* Intercambiar una clase en el `<body>` (ej. `document.body.classList.toggle('dark-theme')`) o cambiar un atributo `data-theme`.
* Guardar la preferencia en `localStorage` del navegador.
* **Bonus:** Añadir lógica para leer `window.matchMedia('(prefers-color-scheme: dark)')` en la primera carga si no hay historial en `localStorage`.


* **Menú Móvil:** Añadir la lógica básica para abrir/cerrar el menú hamburguesa en entornos móviles.

### Fase 4: Refactorización y Auditoría de Rendimiento

Revisar el código generado para cumplir con los estándares de un desarrollador Senior.

* **Accesibilidad (a11y):** Asegurar que todos los botones tengan atributos `aria-label` (especialmente el toggle del modo oscuro y el menú hamburguesa) y que los enlaces externos tengan `rel="noopener noreferrer"`.
* **Variables CSS Temáticas:** Asegurar que el cambio de modo oscuro modifique los valores de las variables CSS de manera limpia:
```css
/* Ejemplo de comportamiento esperado */
:root {
    --bg-color: #ffffff;
    --text-color: #1a1a1a;
}
[data-theme="dark"] {
    --bg-color: #121212;
    --text-color: #f5f5f5;
}

```



```

---

## 4. Criterios de Aceptación para el Agente
Antes de dar la tarea por terminada, el código debe cumplir con:
*   [ ] Ningún error en la consola de JavaScript al interactuar con el sitio o cambiar de tema.
*   [ ] El diseño no se rompe ni genera scroll horizontal (`overflow-x: hidden`) en pantallas de 320px de ancho.
*   [ ] Al recargar la página en Modo Oscuro, el sitio web permanece en Modo Oscuro sin dar un "parpadeo" blanco inicial.
*   [ ] Los enlaces de la barra de navegación dirigen exactamente al inicio de cada sección correspondiente.

```