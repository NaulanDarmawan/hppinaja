const CACHE_NAME = 'hppinaja-cache-v7'; // Versi cache diubah agar browser memuat ulang
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './logo.jpg',          // Ikon utama untuk PWA
  './logo-192.jpg',
  './logo-512.jpg',
  './iconstimata.png',   // Ikon untuk footer
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});