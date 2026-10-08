# Derivarium — publicar en GitHub Pages

Esta carpeta es un sitio estático completo (juego + app instalable).

## Qué se corrigió en esta versión (v7) para que se vea el ícono

- **Ícono de Android sin marco**: el ícono «maskable» tenía un marco dorado que Android recorta al ponerlo en círculo o «gota»; ahora es solo el fondo con Difo al centro.
- **Archivos nuevos con otro nombre**: el manifiesto pasó de `manifest.json` a `manifest.webmanifest` y todos los íconos se piden con `?v=7`. Así el teléfono y GitHub Pages no reutilizan copias viejas (sin ícono) guardadas antes.
- **Favicon** (`favicon.ico`, 32 y 48 px) para la pestaña del navegador y íconos de iPad (152 y 167 px) además del de iPhone (180 px).
- **El juego se actualiza al abrirlo**: antes el service worker mostraba primero la copia guardada y la versión nueva aparecía hasta la segunda vez que abrías la app; ahora la página va primero a la red y usa la copia solo sin conexión.

## Subirlo a GitHub (paso a paso)

1. Entra a [github.com](https://github.com) y abre tu repositorio de Derivarium (o crea uno nuevo, por ejemplo `derivarium`).
2. **Borra `manifest.json`** del repositorio (ya no se usa; el nuevo es `manifest.webmanifest`). Es un archivo suelto: ábrelo → botón «…» → *Delete file*.
3. Sube **todos** los archivos de esta carpeta a la raíz con «Add file → Upload files» (reemplaza los que tengan el mismo nombre) y confirma con *Commit changes*.
4. En **Settings → Pages**: *Deploy from a branch*, rama `main`, carpeta `/ (root)`. Espera uno o dos minutos.
5. Tu enlace será `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Para que aparezca el ícono en el teléfono (importante)

El teléfono guarda el ícono **en el momento en que se crea el acceso directo**; si el que tienes en la pantalla de inicio se creó antes, no se actualiza solo.

**Android (Chrome)**
1. Mantén pulsado el acceso directo viejo → *Desinstalar* / *Eliminar*.
2. En Chrome abre el enlace de GitHub Pages y recárgalo dos veces (la segunda carga ya usa la versión v7).
3. Menú ⋮ → **Instalar aplicación** (o *Añadir a la pantalla de inicio*). Debe aparecer Difo.

**iPhone / iPad (Safari, no Chrome)**
1. Borra el acceso directo viejo de la pantalla de inicio.
2. Cierra Safari por completo (desliza hacia arriba) y vuelve a abrir el enlace.
3. Compartir → **Añadir a pantalla de inicio**. iOS toma `apple-touch-icon.png` en ese momento.

Si sigues viendo una letra o una captura de pantalla en lugar del ícono, casi siempre es porque el sitio todavía no terminó de publicarse en GitHub Pages o porque no se subió algún archivo `.png`: abre `https://TU-USUARIO.github.io/NOMBRE/apple-touch-icon.png` en el navegador; si ves a Difo, el archivo está bien publicado.

## Archivos incluidos

- `index.html` — el juego completo (un solo archivo).
- `manifest.webmanifest` — nombre, colores e íconos de la app instalable.
- `sw.js` — service worker (funciona sin conexión; caché `derivarium-v7`).
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` — íconos de Android/Chrome.
- `apple-touch-icon.png` (180), `apple-touch-icon-167.png`, `apple-touch-icon-152.png`, `icon-180.png` — íconos de iPhone y iPad.
- `favicon.ico`, `favicon-32.png`, `favicon-48.png` — ícono de la pestaña.
