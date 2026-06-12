# PROJECT_CONTEXT.md — Práctica 2

> Última actualización: Jun 2026 — sesión completa de desarrollo y despliegue

---

## 1. Descripción General

Sitio web personal SPA (Single Page Application) con scroll suave, modo claro/oscuro, toggle ES/EN y glassmorphism. Sirve como portafolio profesional y carta de presentación de Juan Carlos Macías.

**Stack:** HTML5 semántico + CSS3 vanilla (Custom Properties, Grid, Flexbox) + JavaScript ES6+ vanilla. Sin frameworks ni librerías externas (salvo Google Fonts).

**Sitio en vivo:** [https://juanmmayen98-pixel.github.io](https://juanmmayen98-pixel.github.io)

---

## 2. Estructura de Archivos

```
├── index.html                (~380 líneas)
├── css/styles.css            (~1100 líneas)
├── js/app.js                 (~270 líneas)
├── assets/
│   ├── images/
│   │   ├── profile.jpg           (418KB — desktop hero)
│   │   ├── profile-mobile.jpg    (56KB — mobile hero)
│   │   ├── LEGO.jpg              (123KB — hobby card 1)
│   │   ├── futbol.JPG            (107KB — hobby card 2)
│   │   └── Cine.jpg              (7KB — hobby card 3)
│   └── icons/                    (pendiente favicon.svg)
├── UI inspiracion/
│   ├── DESIGN.md                 (guía de diseño "Executive Tech Minimalist")
│   ├── code.html                 (implementación de referencia con Tailwind)
│   └── screen.png                (captura visual de referencia)
├── .gitignore
├── README.md                     (documentación del proyecto)
├── README.pdf                    (entregable académico)
├── PRD.md
├── Agents.md
└── PROJECT_CONTEXT.md            (este archivo)
```

---

## 3. Secciones del Sitio

| # | Sección | ID | Contenido |
|---|---------|----|-----------|
| 1 | **Hero / Sobre mí** | `#sobre-mi` | Foto split (derecha en desktop, avatar circular en mobile), nombre + rol, bio profesional (3 párrafos). Foto en grayscale → color al hover |
| 2 | **Trayectoria** | `#trayectoria` | Timeline vertical con 4 entradas reales: Maestría Anáhuac, PwC México, SAT, Licenciatura Iberoamericana |
| 3 | **Stack** | `#stack` | 5 tarjetas: Backend & Datos, Automatización & AI, Data & Analytics, Gestión & Estrategia, DevOps & Tools |
| 4 | **Hobbies** | `#hobbies` | Grid 3 columnas, imágenes reales en grayscale permanente, overlay siempre visible con texto blanco |
| 5 | **Contacto** | `#contacto` | Botones glass para WhatsApp (+52 55 2740 3993) y LinkedIn. Email directo. Sin GitHub |
| — | **Header** | `#header` | Fijo, 80px, glass blur, logo "Indice", hamburguesa izquierda, toggle tema + toggle idioma a la derecha |
| — | **WhatsApp FAB** | — | Botón flotante verde que se expande al hover |
| — | **Footer** | — | `Juan Carlos Macías ©`, tagline personalizado, enlace LinkedIn |

---

## 4. Diseño y Estilos

### 4.1. Sistema de Diseño

Basado en **"Executive Tech Minimalist"** (ver `UI inspiracion/DESIGN.md`).

### 4.2. Paleta de Colores

| Variable | Light | Dark |
|----------|-------|------|
| `--bg-main` | `#f8f9fb` | `#051424` (Midnight Ink) |
| `--tertiary` (acento) | `#7c3aed` (púrpura) | `#ccbeff` (lavanda) |
| `--secondary` | `#0284c7` | `#bec6e0` |
| `--on-surface` | `#1a1a2e` | `#d4e4fa` |
| `--on-surface-variant` | `#6b7280` | `#94a3b8` |
| `--glass-border` | `rgba(0,0,0,0.07)` | `rgba(255,255,255,0.06)` |

### 4.3. Tipografía

| Rol | Fuente | Weights |
|-----|--------|---------|
| Headlines | **Manrope** | 400, 600, 700, 800 |
| Body / Labels | **Geist** | 400, 600 |

Cargadas via `@import` en CSS desde Google Fonts.

### 4.4. Glassmorphism

- Clase `.glass`: `background: var(--bg-surface); backdrop-filter: blur(16px); border: 1px solid var(--glass-border)`
- Clase `.glass-hover`: hover → borde cambia a `--tertiary`, glow primary, translateY(-2px)

### 4.5. Responsive

- **Mobile-first:** estilos base para < 768px
- **Breakpoint:** 768px (tablet/desktop)
- **Container:** max-width 1100px
- **Section padding:** 4rem uniforme

### 4.6. Hobbies — Tratamiento visual

- Imágenes siempre en `grayscale(100%) contrast(1.1)`
- Overlay negro permanente: `linear-gradient(to top, rgba(0,0,0,0.88), transparent 85%)`
- Texto fijo: nombre `#ffffff`, descripción `rgba(255,255,255,0.80)`
- Foto de fútbol con `object-position: left center` para centrar al sujeto

---

## 5. Funcionalidad JS (`js/app.js`)

### 5.1. Modo Claro/Oscuro
- Atributo `data-theme` en `<html>`
- Persistencia vía `localStorage` con clave `"theme"`
- Detección de preferencia del SO (`prefers-color-scheme`) en primera carga
- Escucha cambios de preferencia del SO mientras la app está abierta
- **Anti-flash:** script inline en `<head>` aplica el tema antes de que cargue el CSS

### 5.2. Menú Móvil
- Hamburguesa con animación a X
- Menú desplegable con clase `.open` y transición CSS
- Cierre automático al hacer clic en un enlace
- `aria-label` dinámico según idioma activo

### 5.3. Scroll Spy
- Detecta sección activa durante el scroll vía `requestAnimationFrame` (throttle)
- Añade clase `.active` al nav link correspondiente
- Offset de 120px para compensar header fijo

### 5.4. Toggle de Idioma ES / EN
- Botón `#langToggle` en el header (junto al toggle de tema)
- 37 elementos con atributo `data-i18n` en el HTML
- Diccionario `translations` en `app.js` con claves para ES y EN
- Función `applyLanguage(lang, animate)`:
  - Actualiza `<html lang="">`
  - Actualiza todos los `[data-i18n]` vía `textContent`
  - Actualiza `aria-labels` de botones
  - Fade animado (150ms) en `<main>` para ocultar el reflow del DOM
- Persistencia vía `localStorage` con clave `"lang"`
- Sin animación en la carga inicial

---

## 6. Decisiones de Diseño Tomadas

| Decisión | Opción elegida | Alternativa descartada |
|----------|---------------|----------------------|
| **Navegación** | Barra superior con scroll spy | Botones CTAs en hero |
| **Foto hero** | Split layout (derecha desktop / avatar circular mobile) | Circular siempre |
| **Foto hero — efecto** | Grayscale → color al hover | Color siempre |
| **Stack** | 5 tarjetas por categoría temática (consultoría/datos) | Frontend/Backend genérico |
| **Logo header** | "Indice" | Nombre completo |
| **Hamburguesa** | A la izquierda del logo | A la derecha |
| **Hobbies overlay** | Siempre visible, texto blanco fijo | Slide-up al hover |
| **Hobbies imagen** | Grayscale permanente | Grayscale → color al hover |
| **GitHub** | Eliminado (no aplica al perfil) | Incluido junto a LinkedIn |
| **Footer año** | Solo `©` sin año | `© 2025` |
| **Tipografía** | Manrope + Geist vía Google Fonts | System fonts |
| **Idioma** | Toggle ES/EN con fade y persistencia | Solo español |

---

## 7. Contenido Real (Placeholders reemplazados)

- ✅ Bio profesional (3 párrafos)
- ✅ Trayectoria: 4 entradas (Maestría Anáhuac, PwC, SAT, Lic. Iberoamericana)
- ✅ Stack: 5 categorías con chips reales
- ✅ Hobbies: LEGO, Fútbol, Cine — con imágenes reales
- ✅ Contacto: WhatsApp `+52 55 2740 3993`, email `juan.m.mayen98@gmail.com`, LinkedIn `juancmayen`
- ✅ Meta tags SEO actualizados
- ✅ Footer: nombre real, tagline personalizado

---

## 8. Seguridad y Optimización

| Check | Estado |
|---|---|
| Sin `innerHTML` / `eval` / `document.write` | ✅ |
| Todos los `target="_blank"` con `rel="noopener noreferrer"` | ✅ |
| Sin API keys ni secretos hardcodeados | ✅ |
| Sin `console.log` | ✅ |
| `.gitignore` con `.DS_Store`, `*.HEIC` | ✅ |
| `LEGO.jpg` comprimido (2.9MB → 123KB) | ✅ |
| `LEGO.HEIC` / `yo.HEIC` excluidos del repo | ✅ |

---

## 9. Despliegue

- **Repositorio:** [github.com/juanmmayen98-pixel/juanmmayen98-pixel.github.io](https://github.com/juanmmayen98-pixel/juanmmayen98-pixel.github.io)
- **Sitio:** [https://juanmmayen98-pixel.github.io](https://juanmmayen98-pixel.github.io)
- **Rama:** `main`
- **Sin build step** — HTML/CSS/JS vanilla, despliegue directo desde raíz

### Flujo para actualizaciones futuras
```bash
git add .
git commit -m "descripción del cambio"
git push
```

---

## 10. Archivos de Referencia

| Archivo | Propósito |
|---------|-----------|
| `README.md` / `README.pdf` | Documentación y entregable académico |
| `PRD.md` | Requisitos originales del producto |
| `Agents.md` | Instrucciones de flujo de trabajo del agente |
| `UI inspiracion/DESIGN.md` | Guía de diseño "Executive Tech Minimalist" |
| `UI inspiracion/code.html` | Implementación de referencia (Tailwind + Google Fonts) |
| `UI inspiracion/screen.png` | Captura visual de referencia |
