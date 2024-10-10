/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'my-cache-v2';

// List all the static assets to cache
const urlsToCache = [
  '/', // The root URL
  '/index.html',
  '/favicon.ico',
  '/logo192.png',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/assets/fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf',
  '/assets/fonts/Inter/Inter-VariableFont_opsz_wght.ttf',
  '/assets/images/logo.png',
  '/assets/images/hero-mobile.jpg',
  '/assets/images/hero-tab.jpg',
  '/assets/images/hero-desktop.jpg',
  '/assets/images/saudi_logo.avif',
  '/assets/images/trophy.png',
  '/assets/images/trophy1.png',
  '/assets/images/drawkit-transport-scene-4.svg',
  '/assets/images/drawkit-transport-scene-12.svg',
  '/assets/images/sam-riz.jpg',
  '/assets/images/rob-wilson.jpg',
  '/assets/images/yousef.jpg',
  '/assets/images/tunde-buremo-cebfd5BgDC8-unsplash.jpg',
  '/assets/images/ish-consul-i56w4ah3wAY-unsplash.jpg',
  '/assets/images/elimende-inagella-iDwpJIo6aq0-unsplash.jpg',
  '/assets/images/umair-dingmar-m9n8W46ZEXc-unsplash.jpg',
  '/assets/images/nicole-geri-gMJ3tFOLvnA-unsplash.jpg',
  '/assets/images/alexander-schimmeck-DSOohFTAfno-unsplash.jpg',
  '/assets/images/pngegg1.png',
  '/assets/images/pngegg2.png',
  '/assets/images/pngegg4.png',
  '/assets/images/pngegg13.png',
  '/assets/images/pngegg14.png',
  '/assets/images/pngegg6.png',
  '/assets/images/pngegg7.png',
  '/assets/images/pngegg8.png',
  '/assets/images/pngegg15.png',
  '/assets/images/pngegg16.png',
  '/assets/images/pngegg9.png',
  '/assets/images/pngegg10.png',
  '/assets/images/pngegg11.png',
  '/assets/images/pngegg12.png',
  '/assets/images/pngegg.png',
  '/assets/images/resize.png',
  '/assets/images/qatar.png',
  '/assets/images/Logo-saudi.png',
  '/assets/images/pngwing.com.png',
  '/assets/images/Air_Arabia.png',
  '/assets/images/pngegg18.png',
  '/assets/images/pngwing.png',
  '/assets/images/images.jpeg',
  '/assets/images/pngegg17.png',
];
// Install the service worker and cache the specified URLs
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch cached resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
  );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
          return Promise.resolve();
        })
      );
    })
  );
});