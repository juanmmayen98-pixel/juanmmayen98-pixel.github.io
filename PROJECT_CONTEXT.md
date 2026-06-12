# PROJECT_CONTEXT.md — Práctica 2

> Última actualización: Jun 2026

---

## 1. Descripción General

Sitio web personal SPA (Single Page Application) con scroll suave, modo claro/oscuro y glassmorphism. Sirve como portafolio profesional y carta de presentación.

**Stack:** HTML5 semántico + CSS3 vanilla (Custom Properties, Grid, Flexbox) + JavaScript ES6+ vanilla. Sin frameworks ni librerías externas (salvo Google Fonts).

---

## 2. Estructura de Archivos

```
├── index.html                (348 líneas)
├── css/styles.css            (1072 líneas)
├── js/app.js                 (102 líneas)
├── assets/
│   ├── images/
│   │   ├── profile.jpg       (418KB — desktop)
│   │   ├── profile-mobile.jpg (56KB — mobile)
│   │   └── yo.HEIC           (original, 2.1MB)
│   └── icons/                (pendiente de agregar SVGs)
├── UI inspiracion/
│   ├── DESIGN.md             (guía de diseño "Executive Tech Minimalist")
│   ├── code.html             (implementación de referencia con Tailwind)
│   └── screen.png            (captura visual de referencia)
├── PRD.md                    (requisitos originales del producto)
├── Agents.md                 (instrucciones de flujo de trabajo para el agente)
└── PROJECT_CONTEXT.md        (este archivo)
```

---

## 3. Secciones del Sitio

| # | Sección | ID | Contenido |
|---|---------|----|-----------|
| 1 | **Hero / Sobre mí** | `#sobre-mi` | Foto split (derecha en desktop, avatar circular en mobile), nombre + rol, subtítulo bio |
| 2 | **Trayectoria** | `#trayectoria` | Timeline vertical con tarjetas glass, línea centrada en desktop, nodos con glow |
| 3 | **Stack** | `#stack` | 5 tarjetas por categoría (Frontend, Backend, Tools, Design, DevOps) con chips de tecnologías |
| 4 | **Hobbies** | `#hobbies` | Grid 3 columnas, imágenes en grayscale, overlay con slide-up al hover |
| 5 | **Contacto** | `#contacto` | Botones glass para WhatsApp, LinkedIn, GitHub + email |
| — | **Header** | `#header` | Fijo, 80px, glass blur, logo "Indice", hamburguesa a la izquierda, toggle tema a la derecha |
| — | **WhatsApp FAB** | — | Botón flotante verde que se expande al hover (56px → 160px) |
| — | **Footer** | — | Brand, tagline, enlaces sociales |

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

### 5.3. Scroll Spy
- Detecta sección activa durante el scroll vía `requestAnimationFrame` (throttle)
- Añade clase `.active` al nav link correspondiente
- Offset de 120px para compensar header fijo

---

## 6. Decisiones de Diseño Tomadas

| Decisión | Opción elegida | Alternativa descartada |
|----------|---------------|----------------------|
| **Navegación** | Barra superior con scroll spy (Opción A) | Botones CTAs en hero (Opción B) |
| **Foto hero** | Split layout (derecha desktop / avatar circular mobile) | Circular siempre / fondo completo |
| **Stack** | Tarjetas por categoría (5 cards) | Tecnologías individuales (8 cards) |
| **Logo header** | "Indice" | Nombre completo "Juan Carlos_Macías" |
| **Hamburguesa** | A la izquierda del logo | A la derecha / agrupado con toggle |
| **Hobbies hover** | Grayscale(100%) → color + overlay slide-up | Color directo con fade |
| **Tipografía** | Manrope + Geist vía Google Fonts | System fonts / Inter + Geist |

---

## 7. Pendientes / Placeholders

- [ ] Reemplazar `[Breve extracto biográfico...]` con bio real en hero
- [ ] Reemplazar `[Cargo]`, `[Empresa / Institución]`, `[Descripción...]` en la timeline
- [ ] Reemplazar `[Nombre del Hobby]`, `[Descripción...]` en hobbies
- [ ] Agregar imágenes reales de hobbies en `assets/images/`
- [ ] Agregar SVGs de iconos en `assets/icons/` (HTML5, CSS3, JavaScript, etc.)
- [ ] Reemplazar `TU_NUMERO` con número real de WhatsApp
- [ ] Reemplazar `tu@email.com` y `tu-usuario` en GitHub/LinkedIn
- [ ] Reemplazar `https://[tu-usuario].github.io` en OG meta tags
- [ ] Reemplazar `[Tu Nombre]` en footer brand y meta tags
- [ ] Agregar `favicon.svg` en `assets/icons/`

---

## 8. Despliegue

- GitHub Pages desde rama `main`
- Sin build step (HTML/CSS/JS vanilla)
- Solo hacer push del repositorio y activar Pages en Settings

---

## 9. Archivos de Referencia

| Archivo | Propósito |
|---------|-----------|
| `PRD.md` | Requisitos originales del proyecto |
| `Agents.md` | Instrucciones de flujo de trabajo del agente |
| `UI inspiracion/DESIGN.md` | Guía de diseño "Executive Tech Minimalist" |
| `UI inspiracion/code.html` | Implementación de referencia (Tailwind + Google Fonts) |
| `UI inspiracion/screen.png` | Captura visual de referencia |
