# TODO — Práctica 2

> Estado actual: HTML + CSS + JS funcionales (modo oscuro, menú móvil, scroll spy).
> Pendiente: contenido real, assets visuales, verificación y despliegue.

---

## Fase A — Contenido textual (reemplazar placeholders)

### Hero / Sobre mí (`index.html`)
- [ ] `[Breve extracto biográfico...]` (L74) → párrafo biográfico real (~3 líneas)

### Trayectoria (`index.html`)
Actualmente 4 entradas en la timeline:
| Línea | Placeholders |
|-------|-------------|
| L99-107 (Ene 2025 — Presente) | `[Cargo]`, `[Empresa / Institución]`, `[Descripción...]` |
| L110-118 (Sep 2024 — Dic 2024) | `[Cargo]`, `[Empresa / Institución]`, `[Descripción...]` |
| L121-129 (Ene 2023 — Ago 2024) | `[Título / Formación]`, `[Institución Educativa]`, `[Descripción...]` |
| L132-140 (Sep 2021 — Dic 2022) | `[Cargo / Formación]`, `[Empresa / Institución]`, `[Descripción...]` |
- [ ] Reemplazar `[Cargo]` / `[Título / Formación]` por títulos reales
- [ ] Reemplazar `[Empresa / Institución]` / `[Institución Educativa]` por nombres reales
- [ ] Reemplazar `[Descripción...]` por descripciones reales del rol

### Hobbies (`index.html`)
Actualmente 3 tarjetas (L241-263) apuntan a `hobby-coding.jpg`, `hobby-music.jpg`, `hobby-travel.jpg`:
- [ ] Reemplazar `[Nombre del Hobby]` (×3) por nombres reales
- [ ] Reemplazar `[Descripción...]` (×3) por descripciones breves reales
- [ ] Reemplazar `alt="[Descripción del hobby]"` con alt texts descriptivos reales

### Stack tecnológico (`index.html` L163-227)
- [ ] Revisar que los 5 chips por categoría reflejen las tecnologías reales que dominás (Frontend, Backend, Tools, Design, DevOps)

### Contacto (`index.html`)
- [ ] Reemplazar `TU_NUMERO` (L277, L321) por número real de WhatsApp (formato internacional, ej. `521234567890`)
- [ ] Reemplazar `tu@email.com` (L312) por email real
- [ ] Reemplazar `tu-usuario` (L288, L299, L340-341) por usuario real de GitHub y LinkedIn

### Meta / SEO (`index.html` — dentro de `<head>`)
- [ ] `[Tu Nombre]` (L6-7, L11-12) → nombre completo real
- [ ] `[Tu Rol]` (L7, L11-12) → rol real
- [ ] `https://[tu-usuario].github.io` (L14-15) → URL real de GitHub Pages
- [ ] `preview.jpg` (L15) → ruta a imagen de preview social real

### Footer (`index.html`)
- [ ] `[Tu Nombre]` (L337) → nombre completo real

---

## Fase B — Assets visuales

- [ ] Agregar iconos SVG del stack en `assets/icons/` (HTML5, CSS3, JS, React, Node, Git, Figma, TypeScript, etc.)
- [ ] Agregar `favicon.svg` en `assets/icons/`
- [ ] Agregar imágenes reales de hobbies (600×750px, aspect 4/5) en `assets/images/`:
  - `assets/images/hobby-coding.jpg`
  - `assets/images/hobby-music.jpg`
  - `assets/images/hobby-travel.jpg`

---

## Fase C — Verificación y validación

- [ ] **Responsive:** probar en 320px de ancho mínimo (sin overflow-x, menú legible)
- [ ] **Consola JS:** cero errores al cargar, cambiar tema, abrir/cerrar menú, scrollear
- [ ] **Modo oscuro:** persistencia vía `localStorage`, sin flash blanco al recargar
- [ ] **Scroll spy:** enlaces del nav se marcan correctamente al scrollear (offset 120px)
- [ ] **Accesibilidad:** botones con `aria-label`, enlaces externos con `rel="noopener noreferrer"`
- [ ] **HTML válido:** verificar etiquetas semánticas, atributos correctos

---

## Fase D — Despliegue (GitHub Pages)

- [ ] Crear repositorio en GitHub (recomendado: `usuario.github.io` para user site, o `portfolio` para project site)
- [ ] Subir archivos a rama `main`
- [ ] Activar GitHub Pages en Settings → Pages (Source: `Deploy from branch`, rama `main`, raíz `/`)
- [ ] Verificar que el sitio funciona online y no hay errores de consola
