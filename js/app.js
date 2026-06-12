(function () {
  "use strict";

  var html = document.documentElement;

  /* ============================================ */
  /* TRADUCCIONES                                 */
  /* ============================================ */

  var translations = {
    es: {
      "nav.home": "Inicio",
      "nav.career": "Trayectoria",
      "nav.contact": "Contacto",

      "hero.bio1": "Soy consultor de servicios financieros con más de 4 años de experiencia ayudando a bancos y aseguradoras en México a operar mejor, con más orden y menos fricción. En PwC he liderado proyectos que van desde la reingeniería de procesos hasta la implementación de plataformas digitales — siempre buscando que la tecnología resuelva lo que el talento humano no debería estar haciendo manualmente.",
      "hero.bio2": "Tengo la capacidad de traducir la complejidad del negocio en soluciones técnicas concretas: entiendo los procesos, identifico los puntos de quiebre y construyo mejoras que realmente se implementan. Automatizo con IA Generativa, trabajo con datos y disfruto desarrollar esa misma mentalidad en los equipos con los que colaboro.",
      "hero.bio3": "Actualmente curso una Maestría en Tecnologías de la Información y Análisis de Datos — porque creo que el siguiente nivel en consultoría financiera lo van a definir quienes sepan combinar criterio de negocio con capacidad técnica.",

      "timeline.label": "Evolución Profesional",
      "timeline.title": "Trayectoria",
      "timeline.1.date": "Sep 2025 — En curso",
      "timeline.1.role": "Maestría en Tecnologías de la Información y Análisis de Datos",
      "timeline.1.desc": "Formación avanzada en análisis de datos, tecnologías de la información y toma de decisiones basada en evidencia, complementando la experiencia en consultoría financiera con capacidades técnicas de alto nivel.",
      "timeline.2.date": "Nov 2022 — Presente",
      "timeline.2.place": "PwC México — Financial Services",
      "timeline.2.desc": "Más de 4 años liderando proyectos de mejora operativa, gestión de riesgos e implementación de controles para bancos y aseguradoras en México. Proyectos destacados: implementación de onboarding digital que incrementó la capacidad de procesamiento de clientes en un 20%, y reingeniería de procesos que redujo el cierre contable de una aseguradora de 27 a 20 días.",
      "timeline.3.role": "Analista Desconcentrado",
      "timeline.3.place": "SAT — Servicio de Administración Tributaria",
      "timeline.3.desc": "Atención a contribuyentes, cálculo y distribución de sanciones fiscales, auditoría de comprobantes digitales y apoyo a empresas en el cumplimiento de sus obligaciones fiscales.",
      "timeline.4.role": "Licenciatura en Economía",
      "timeline.4.desc": "Formación integral en teoría económica, econometría, finanzas y política pública, con enfoque en análisis cuantitativo y toma de decisiones basada en evidencia.",

      "stack.label": "Habilidades & Herramientas",
      "stack.cat1": "Backend & Datos",
      "stack.cat2": "Automatización & AI",
      "stack.cat4": "Gestión & Estrategia",
      "stack.tag.rest": "APIs REST",
      "stack.tag.ai": "IA Generativa",
      "stack.tag.pmo": "Herramientas PMO",

      "hobbies.label": "Fuera de la Oficina",
      "hobbies.1.name": "Armado de Sets LEGO",
      "hobbies.1.desc": "Hay algo muy satisfactorio en construir algo complejo pieza por pieza. Mi favorito hasta ahora es el set de la Copa del Mundo — un regalo de mi novia que sigo construyendo con calma.",
      "hobbies.2.name": "Fútbol",
      "hobbies.2.desc": "Lo juego, lo veo y lo disfruto en todas sus formas. Me apasiona tanto su historia como su actualidad — es un deporte que siempre tiene algo nuevo que contar.",
      "hobbies.3.name": "Cine",
      "hobbies.3.desc": "De culto, animadas, acción, comedia, arte... no tengo género favorito porque disfruto lo que cada película tiene para decir. Ver una buena historia bien contada es de mis placeres favoritos.",

      "contact.title": "Contacto",
      "contact.cta": "¿Quieres trabajar conmigo o simplemente charlar? Estoy a un clic de distancia.",
      "contact.email.text": "O escríbeme a:",

      "fab.label": "Contactar",
      "footer.tagline": "Cada proyecto es una oportunidad de hacer algo bien hecho.",

      "menu.open": "Abrir menú de navegación",
      "menu.close": "Cerrar menú de navegación",
      "theme.aria": "Cambiar modo claro/oscuro",
      "lang.switch": "EN",
      "lang.aria": "Cambiar a inglés"
    },
    en: {
      "nav.home": "Home",
      "nav.career": "Career",
      "nav.contact": "Contact",

      "hero.bio1": "I'm a financial services consultant with over 4 years of experience helping banks and insurance companies in Mexico operate more efficiently, with greater structure and less friction. At PwC, I've led projects ranging from process reengineering to the implementation of digital platforms — always focused on letting technology handle what human talent shouldn't be doing manually.",
      "hero.bio2": "I have the ability to translate business complexity into concrete technical solutions: I understand processes, identify breaking points, and build improvements that actually get implemented. I automate with Generative AI, work with data, and enjoy developing that same mindset in the teams I work with.",
      "hero.bio3": "I'm currently pursuing a Master's degree in Information Technology and Data Analytics — because I believe the next level in financial consulting will be defined by those who can combine business judgment with technical capability.",

      "timeline.label": "Career Path",
      "timeline.title": "Career",
      "timeline.1.date": "Sep 2025 — Ongoing",
      "timeline.1.role": "Master's in Information Technology and Data Analytics",
      "timeline.1.desc": "Advanced training in data analytics, information technology, and evidence-based decision making, complementing financial consulting experience with high-level technical capabilities.",
      "timeline.2.date": "Nov 2022 — Present",
      "timeline.2.place": "PwC Mexico — Financial Services",
      "timeline.2.desc": "Over 4 years leading operational improvement, risk management, and controls implementation projects for banks and insurance companies in Mexico. Key projects include: a digital onboarding implementation that increased client processing capacity by 20%, and a process reengineering initiative that reduced an insurance company's financial close from 27 to 20 days.",
      "timeline.3.role": "Decentralized Analyst",
      "timeline.3.place": "SAT — Mexico's Tax Administration Service",
      "timeline.3.desc": "Taxpayer services, calculation and distribution of tax penalties, digital invoice auditing, and support to companies in meeting their tax obligations.",
      "timeline.4.role": "Bachelor's in Economics",
      "timeline.4.desc": "Comprehensive training in economic theory, econometrics, finance, and public policy, with a focus on quantitative analysis and evidence-based decision making.",

      "stack.label": "Skills & Tools",
      "stack.cat1": "Backend & Data",
      "stack.cat2": "Automation & AI",
      "stack.cat4": "Management & Strategy",
      "stack.tag.rest": "REST APIs",
      "stack.tag.ai": "Generative AI",
      "stack.tag.pmo": "PMO Tools",

      "hobbies.label": "Outside the Office",
      "hobbies.1.name": "LEGO Building",
      "hobbies.1.desc": "There's something deeply satisfying about building something complex piece by piece. My favorite set so far is the World Cup — a gift from my girlfriend that I'm still working on, no rush.",
      "hobbies.2.name": "Soccer",
      "hobbies.2.desc": "I play it, watch it, and enjoy it in every form. I'm passionate about both its history and what's happening today — it's a sport that always has something new to say.",
      "hobbies.3.name": "Movies",
      "hobbies.3.desc": "Cult classics, animation, action, comedy, art house... I don't have a favorite genre because I enjoy what each film has to say. There's nothing quite like a great story told well.",

      "contact.title": "Contact",
      "contact.cta": "Want to work together or simply chat? I'm just one click away.",
      "contact.email.text": "Or reach me at:",

      "fab.label": "Contact",
      "footer.tagline": "Every project is an opportunity to do something right.",

      "menu.open": "Open navigation menu",
      "menu.close": "Close navigation menu",
      "theme.aria": "Toggle light/dark mode",
      "lang.switch": "ES",
      "lang.aria": "Cambiar a español"
    }
  };

  /* ============================================ */
  /* MODO CLARO / OSCURO                         */
  /* ============================================ */

  var themeToggle = document.getElementById("themeToggle");
  var STORAGE_KEY = "theme";

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = html.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? "dark" : "light");
      }
    });

  /* ============================================ */
  /* MENÚ MÓVIL                                   */
  /* ============================================ */

  var menuToggle = document.getElementById("menuToggle");
  var mainNav = document.getElementById("mainNav");
  var navLinks = document.querySelectorAll(".header__nav-link");

  function toggleMenu(open) {
    var isOpen = open !== undefined ? open : !mainNav.classList.contains("open");
    mainNav.classList.toggle("open", isOpen);
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      translations[currentLang][isOpen ? "menu.close" : "menu.open"]
    );
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      toggleMenu();
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      toggleMenu(false);
    });
  });

  /* ============================================ */
  /* SCROLL SPY                                   */
  /* ============================================ */

  var sections = document.querySelectorAll("section[id]");

  function updateActiveNav() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var current = "";

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  }

  // Throttled scroll listener
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateActiveNav();

  /* ============================================ */
  /* IDIOMA (ES / EN)                             */
  /* ============================================ */

  var langToggle = document.getElementById("langToggle");
  var mainContent = document.querySelector("main");
  var LANG_KEY = "lang";
  var currentLang = localStorage.getItem(LANG_KEY) || "es";

  function applyLanguage(lang, animate) {
    var t = translations[lang];

    function doUpdate() {
      // Actualizar atributo lang en <html>
      html.setAttribute("lang", lang);

      // Actualizar todos los elementos data-i18n
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) {
          el.textContent = t[key];
        }
      });

      // Actualizar botón de idioma
      if (langToggle) {
        langToggle.textContent = t["lang.switch"];
        langToggle.setAttribute("aria-label", t["lang.aria"]);
      }

      // Actualizar aria-label del toggle de tema
      if (themeToggle) {
        themeToggle.setAttribute("aria-label", t["theme.aria"]);
      }

      // Actualizar aria-label del menú hamburguesa
      if (menuToggle && mainNav) {
        var isMenuOpen = mainNav.classList.contains("open");
        menuToggle.setAttribute(
          "aria-label",
          t[isMenuOpen ? "menu.close" : "menu.open"]
        );
      }

      // Guardar preferencia
      localStorage.setItem(LANG_KEY, lang);
      currentLang = lang;
    }

    if (animate && mainContent) {
      // Fade out → actualizar → fade in
      mainContent.classList.add("lang-switching");
      setTimeout(function () {
        doUpdate();
        mainContent.classList.remove("lang-switching");
      }, 150);
    } else {
      doUpdate();
    }
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLanguage(currentLang === "es" ? "en" : "es", true);
    });
  }

  // Aplicar idioma guardado al cargar (sin animación)
  applyLanguage(currentLang, false);
})();
