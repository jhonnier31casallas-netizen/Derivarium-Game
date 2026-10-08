/* Derivarium · service worker: deja la app instalada disponible sin conexión. */
const CACHE = 'derivarium-v7';
const SHELL = ['./', './manifest.webmanifest?v=7', './icon-192.png?v=7', './icon-512.png?v=7', './icon-512-maskable.png?v=7',
  './favicon.ico?v=7', './favicon-32.png?v=7', './favicon-48.png?v=7', './apple-touch-icon.png?v=7', './apple-touch-icon-152.png?v=7', './apple-touch-icon-167.png?v=7'];

self.addEventListener('install', e => {
  self.skipWaiting();
  /* Cada archivo por separado: si uno falla, los demás igual se guardan */
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* La página (navegación): primero la red, así una versión nueva se ve al abrir; sin conexión, usa la copia guardada.
   El resto del mismo origen (íconos, manifiesto): sirve la copia al instante y la refresca en segundo plano.
   Otros orígenes (fuentes, MathJax): no se intervienen. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => {
        if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./', copy)).catch(() => {}); }
        return res;
      }).catch(() => caches.match('./').then(r => r || caches.match(req)))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
