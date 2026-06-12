# Plan de despliegue en GitHub Pages
> Pasos ejecutables por un agente de IA desde VS Code

---

## Paso 1 — Verificar estructura de archivos

Confirmar que `index.html` existe en la raíz del proyecto y que las rutas a CSS, imágenes y JS son relativas.

```bash
ls -la
grep -n "src=\|href=" index.html
```

---

## Paso 2 — Verificar que Git está instalado

```bash
git --version
```

---

## Paso 3 — Inicializar el repositorio local

```bash
git init
```

---

## Paso 4 — Configurar identidad de Git (si no está configurada)

Reemplaza los valores con tu nombre y correo de GitHub.

```bash
git config user.name "Tu Nombre"
git config user.email "tu@correo.com"
```

---

## Paso 5 — Agregar todos los archivos al staging

```bash
git add .
```

---

## Paso 6 — Hacer el primer commit

```bash
git commit -m "primer commit - página personal"
```

---

## Paso 7 — Renombrar la rama principal a `main`

```bash
git branch -M main
```

---

## Paso 8 — Conectar con el repositorio remoto de GitHub

Reemplaza `tuusuario` con tu nombre de usuario real de GitHub.

```bash
git remote add origin https://github.com/tuusuario/tuusuario.github.io.git
```

---

## Paso 9 — Subir el código a GitHub

```bash
git push -u origin main
```

---

## Paso 10 — Flujo para actualizaciones futuras

Cada vez que hagas cambios, ejecutar:

```bash
git add .
git commit -m "descripción del cambio"
git push
```

---

> **Nota:** Una vez completados estos pasos, el agente ha terminado su trabajo.
> Los pasos restantes deben hacerse manualmente en el navegador (ver lista adjunta).
