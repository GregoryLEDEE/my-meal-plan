/* Service worker — stratégie réseau d'abord, cache en secours.
   Conséquence : en ligne tu as toujours la dernière version de catalogue.md,
   hors ligne l'application continue de fonctionner avec la dernière copie connue. */
const CACHE = 'feuille-de-route-v1';
const ASSETS = ['./', './index.html', './catalogue.md', './manifest.webmanifest',
                './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const sameOrigin = new URL(e.request.url).origin === location.origin;
  e.respondWith(
    fetch(e.request).then(res => {
      if (sameOrigin && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
