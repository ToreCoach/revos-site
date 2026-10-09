// Service worker minimo: serve solo a rendere l'app installabile.
// Non mette in cache nulla: video e dati arrivano sempre da internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
