# Product Requirement Document (PRD) – Sitio Web Personal SPA

## 1. Introducción y Objetivos

El objetivo de este proyecto es el desarrollo de un sitio web personal estático bajo la arquitectura de **Single Page Application (SPA)** con navegación basada en **Scroll Suave**. El sitio servirá como portafolio profesional y carta de presentación personal, destacando por su alto rendimiento, accesibilidad, diseño limpio y adaptabilidad visual (Modo Claro/Oscuro).

### Objetivos Clave:

* **Rendimiento Óptimo:** Carga instantánea mediante el uso de HTML5, CSS3 y JavaScript Vanilla (sin frameworks).
* **Costo Cero de Infraestructura:** Arquitectura diseñada para ser desplegada y ejecutada directamente desde el almacenamiento estático de **GitHub Pages**.
* **Experiencia de Usuario (UX) Fluida:** Navegación interna sin recargas de página mediante scroll interactivo.

---

## 2. Arquitectura Tecnológica

Para garantizar la mantenibilidad y el rendimiento que un Desarrollador Senior prioriza, se descartan frameworks pesados (React, Vue, Tailwind) en favor de tecnologías nativas:

* **Frontend:** HTML5 semántico.
* **Estilos:** CSS3 nativo utilizando **CSS Custom Properties (Variables)** para la gestión de temas y **Flexbox/Grid** para el diseño responsivo.
* **Interactividad:** JavaScript Vanilla (ES6+) para la lógica del conmutador de tema y el manejo del scroll.
* **Despliegue/Hosting:** GitHub Pages con flujo de trabajo basado en Git.

---

## 3. Requisitos de Estructura y Contenido (Secciones)

El sitio se compondrá de una única página organizada en las siguientes secciones secuenciales:

### 3.1. Barra de Navegación (Header - Fixed)

* Logotipo o Nombre del propietario (lado izquierdo).
* Menú de navegación con enlaces de scroll suave a cada sección (lado derecho).
* **Toggle Switch:** Botón interactivo para cambiar entre Modo Claro y Modo Oscuro.

### 3.2. Sección 1: Sobre Mí (Hero Section)

* **Propósito:** Introducción inicial e impacto visual.
* **Elementos:** * Fondo limpio o con un patrón sutil que reaccione al cambio de tema.
* Texto principal de presentación (Título y subtítulo ejecutivo).
* Breve extracto biográfico/profesional.



### 3.3. Sección 2: Trayectoria y Formación

* **Propósito:** Mostrar la línea de tiempo profesional y educativa.
* **Elementos:**
* Diseño en formato de **Línea de Tiempo (Timeline)** vertical.
* Bloques cronológicos que diferencien hitos laborales de logros académicos.
* Contenedores preparados para albergar textos descriptivos de funciones o títulos obtenidos.



### 3.4. Sección 3: Stack Tecnológico (Habilidades)

* **Propósito:** Exponer las capacidades técnicas de forma gráfica y rápida.
* **Elementos:**
* Cuadrícula (Grid) de tarjetas independientes.
* Cada tarjeta contendrá el logotipo (SVG indexado para rendimiento) de la tecnología y su nombre.
* Efectos visuales sutiles (hover) al pasar el cursor sobre las habilidades.



### 3.5. Sección 4: Hobbies Favoritos

* **Propósito:** Mostrar la faceta humana y personal, balanceando el perfil.
* **Elementos:**
* Diseño tipo galería o tarjetas asimétricas.
* Espacios optimizados para imágenes o iconos representativos de cada pasatiempo, acompañados de una breve descripción de por qué se realiza.



### 3.6. Sección 5: Contacto (Footer / Cierre)

* **Propósito:** Permitir la conversión o contacto directo del visitante.
* **Elementos:**
* Llamado a la acción (CTA) claro.
* **Botón de WhatsApp:** Enlace directo formateado (`https://wa.me/...`) para abrir chat directo con un mensaje predefinido.
* **Enlaces a Redes Sociales:** Iconos limpios (LinkedIn, GitHub, etc.) que se abran en una pestaña nueva (`target="_blank" rel="noopener noreferrer"`).



---

## 4. Requisitos Funcionales (FR)

* **RF-01: Scroll Suave (Smooth Scrolling):** Al hacer clic en cualquier elemento del menú, la ventana del navegador debe desplazarse de forma fluida hacia la sección correspondiente mediante la propiedad CSS `scroll-behavior: smooth` o un fallback en JS.
* **RF-02: Conmutador de Temas (Dark/Light Mode):** * Debe invertir los colores del sitio web de forma instantánea sin parpadeos.
* Debe persistir la elección del usuario utilizando `localStorage` para que se mantenga el tema si el usuario recarga la página.
* Debe detectar por defecto la preferencia del sistema operativo del usuario mediante la media query `prefers-color-scheme`.


* **RF-03: Responsive Design:** El sitio debe ser 100% adaptable a dispositivos móviles, tablets y pantallas de escritorio (Mobile-First approach). El menú de navegación debe transformarse en un menú hamburguesa en pantallas pequeñas.

---

## 5. Requisitos No Funcionales (NFR)

* **RNF-01: Rendimiento (Performance):** Puntuación superior a **95/100** en Google Lighthouse (Mobile y Desktop), asegurado por la ausencia de scripts de terceros y frameworks.
* **RNF-02: Accesibilidad (a11y):** Cumplimiento de las pautas WCAG 2.1 nivel AA. Uso estricto de etiquetas `alt` en imágenes, contraste de color adecuado en ambos modos (Claro/Oscuro) y navegación por teclado accesible.
* **RNF-03: SEO Básico:** Configuración de meta-etiquetas Open Graph (para previsualizaciones en WhatsApp/LinkedIn), etiquetas de título estructuradas (`h1`, `h2`, `h3`) y archivo `robots.txt`.
* **RNF-04: Portabilidad de Datos:** Toda la información de las secciones (textos, rutas de imágenes, links de redes) debe estar centralizada u organizada de forma semántica en el HTML para facilitar que la reemplaces con tus datos sin romper la estructura.

---

## 6. Plan de Despliegue (Pipeline)

1. **Estructura del Repositorio:** Creación de un repositorio público/privado en GitHub.
2. **Organización de Archivos:**
```text
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── assets/
    ├── images/
    └── icons/

```


3. **Configuración de GitHub Pages:** Activación del despliegue automático desde la rama `main` a través de la sección *Settings > Pages* del repositorio.