// sw.js
const cacheName = 'altoregalo-cache-v1.1'; // Cambia la versión si haces cambios en el futuro

// Lista de archivos que quieres cachear al instalar (opcional, para el logo principal, etc.)
const staticAssets = [
  '/', // La página principal
  'https://blogger.googleusercontent.com/img/a/AVvXsEjIJo5anX8cOqD6ivgkoJdf8pUD3JfIabJTVFN2M4GH0FIEaCD-pVysQkwqgqnMtHPcNXV10O659KaW3ZhJfqdD6Lqy9TcyYjT_AHeSzgbInC1zoxP5EeqkHvDndhRDgXjMKUKvClGV327pkV7f7QyXcEI7uDEgt7z6Nzf0jKEOK83yRmDRbgDEhip9T6Yy=s323' // Logo
  // Puedes agregar más URLs de recursos críticos aquí si lo deseas
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Limpia cachés viejas
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', async event => {
  const req = event.request;
  const url = new URL(req.url);

  // Si la petición es para una imagen de Google, intenta servir desde caché primero
  if (url.origin === 'https://blogger.googleusercontent.com') {
    event.respondWith(cacheFirst(req));
  } else {
    // Para otras peticiones, ve a la red primero
    event.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    // No cachear peticiones POST o de otros tipos que no sean GET
    if (req.method === 'GET') {
       await cache.put(req, fresh.clone());
    }
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}