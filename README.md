# Página Personal — Juan Carlos Macías

Portafolio personal desarrollado como entregable de la **Práctica 2** del curso de Programación Avanzada, Maestría en Tecnologías de la Información y Análisis de Datos — Universidad Anáhuac.

---

## Sitio en vivo

[https://juanmmayen98-pixel.github.io](https://juanmmayen98-pixel.github.io)

---

## Descripción

SPA (Single Page Application) de portafolio profesional con las siguientes características:

- Modo claro / oscuro con persistencia en `localStorage`
- Toggle de idioma Español / Inglés
- Navegación con scroll suave y scroll spy activo
- Diseño responsive (Mobile-First, breakpoint 768px)
- Glassmorphism con CSS Custom Properties
- Transición animada en el cambio de idioma
- Sin frameworks ni librerías externas

---

## Stack técnico

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de la SPA |
| CSS3 Vanilla | Estilos, Grid, Flexbox, Custom Properties |
| JavaScript ES6+ Vanilla | Interactividad, i18n, tema, scroll spy |
| Google Fonts | Manrope + Geist |
| GitHub Pages | Despliegue estático |

---

## Estructura de archivos

```
├── index.html          # Estructura principal de la SPA
├── css/
│   └── styles.css      # Estilos (1100+ líneas, Mobile-First)
├── js/
│   └── app.js          # Lógica: tema, idioma, menú, scroll spy
├── assets/
│   └── images/         # Fotografías del sitio
├── .gitignore
└── README.md
```

---

## Secciones

1. **Hero / Sobre mí** — Presentación con foto y bio profesional
2. **Trayectoria** — Timeline con experiencia y formación académica
3. **Tech Stack** — Herramientas y tecnologías organizadas por categoría
4. **Hobbies** — Galería con imágenes en escala de grises
5. **Contacto** — WhatsApp, LinkedIn y email

---

## Funcionalidades implementadas

- **Dark / Light Mode** — Toggle en el header, detecta preferencia del SO, sin flash blanco al recargar (script inline en `<head>`)
- **ES / EN Toggle** — 37 elementos traducibles vía `data-i18n`, diccionario en `app.js`, persistencia en `localStorage`, transición fade de 300ms
- **Scroll Spy** — Detecta sección activa con `requestAnimationFrame` (throttle), offset de 120px por header fijo
- **Menú hamburguesa** — Animación de X, cierre automático al navegar

---

## Cómo ejecutar localmente

No requiere build. Abrir directamente en el navegador:

```bash
open index.html
```

O con cualquier servidor estático:

```bash
npx serve .
```

---

## Autor

**Juan Carlos Macías**  
Sr. Associate — PwC México  
[linkedin.com/in/juancmayen](https://linkedin.com/in/juancmayen)
