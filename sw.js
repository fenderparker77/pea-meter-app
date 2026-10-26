const CACHE_NAME = 'pea-meter-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './1000002294.png'
];

// ติดตั้ง Service Worker และบันทึกไฟล์แคช
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// ดึงข้อมูลจากแคชมาใช้เพื่อให้แอปโหลดเร็วขึ้น
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
