# Derivarium — publicar en GitHub Pages

Esta carpeta ya es un sitio estático completo (juego + app instalable). Para
ponerlo en línea con un URL propio:

1. Entra a [github.com](https://github.com) y crea un repositorio nuevo (por
   ejemplo `derivarium`). Puede ser público o privado; si es privado,
   GitHub Pages solo está disponible en algunos planes.
2. Sube los archivos de esta carpeta a la raíz del repositorio:
   - arrástralos a la página del repositorio con "Add file → Upload files",
     o
   - por línea de comandos:
     ```
     git init
     git add .
     git commit -m "Derivarium"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/derivarium.git
     git push -u origin main
     ```
3. En el repositorio, ve a **Settings → Pages**. En "Build and deployment",
   elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. Espera uno o dos minutos. GitHub te mostrará el URL, con esta forma:
   `https://TU-USUARIO.github.io/derivarium/`

Ese URL ya sirve `index.html`, `manifest.json`, `sw.js` y los íconos juntos,
así que la opción "Instalar" / "Añadir a pantalla de inicio" funciona igual
que en el enlace de Claude, y además el juego queda accesible sin depender
de esta conversación.

## Actualizarlo más adelante

Si vuelves a pedirme cambios en Derivarium, te doy un `.zip` nuevo con la
misma estructura: reemplaza los archivos en el repositorio (o vuelve a
subirlos) y haz commit; GitHub Pages se actualiza solo en un minuto.

## Archivos incluidos

- `index.html` — el juego completo (un solo archivo, sin dependencias locales).
- `manifest.json` — nombre, ícono y colores de la app instalable.
- `sw.js` — service worker: cachea el juego para que abra sin conexión.
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `icon-180.png` — íconos de la app.
