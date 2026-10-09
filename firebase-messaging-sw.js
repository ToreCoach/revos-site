// Service worker di REVOS Player: installabilità + notifiche push (Firebase Cloud Messaging).
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyCQY6lXSXed5NEhpWAVpLqQhIUCyhh-Ntg",
  authDomain: "handball-analyst-app.firebaseapp.com",
  projectId: "handball-analyst-app",
  storageBucket: "handball-analyst-app.firebasestorage.app",
  messagingSenderId: "1021442407572",
  appId: "1:1021442407572:web:af75ca6eb89a3ead104881"
});
firebase.messaging(); // gestisce da solo la notifica quando l'app è chiusa
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((l) => {
    for (const c of l) if ('focus' in c) return c.focus();
    return self.clients.openWindow('./');
  }));
});
