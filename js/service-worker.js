const cacheName = 'toddler-learning-adventure-v2';
const assetsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/css/styles.css',
    '/js/app.js',
    '/js/menuSounds.js',
    '/js/hideH1.js',
    '/assets/icons/icon192.png',
    '/assets/icons/icon512.png',
    '/assets/images/red.png',
    '/assets/images/blue.png',
    '/assets/images/green.png',
    '/assets/images/yellow.png',
    '/assets/images/circle.png',
    '/assets/images/square.png',
    '/assets/images/triangle.png',
    '/assets/images/star.png',
    '/assets/images/rooster.png',
    '/assets/images/cat.png',
    '/assets/images/cow.png', // Corrected from 'com.png'
    '/assets/images/dog.png',
    '/assets/images/1.png',
    '/assets/images/2.png',
    '/assets/images/3.png',
    '/assets/images/4.png',
    '/assets/images/5.png',
    '/assets/images/6.png',
    '/assets/images/7.png',
    '/assets/images/8.png',
    '/assets/images/9.png',
    '/assets/images/10.png',
    '/assets/sounds/Red.mp3',
    '/assets/sounds/Blue.mp3',
    '/assets/sounds/Green.mp3',
    '/assets/sounds/Yellow.mp3',
    '/assets/sounds/Circle.mp3',
    '/assets/sounds/Square.mp3',
    '/assets/sounds/Triangle.mp3',
    '/assets/sounds/Star.mp3',
    '/assets/sounds/Rooster.mp3',
    '/assets/sounds/Cow.mp3',
    '/assets/sounds/Cat.mp3',
    '/assets/sounds/Dog.mp3',
    '/assets/sounds/One.mp3',
    '/assets/sounds/Two.mp3',
    '/assets/sounds/Three.mp3',
    '/assets/sounds/Four.mp3', // Corrected syntax
    '/assets/sounds/Five.mp3',
    '/assets/sounds/Six.mp3',
    '/assets/sounds/Seven.mp3',
    '/assets/sounds/Eight.mp3',
    '/assets/sounds/Nine.mp3',
    '/assets/sounds/Ten.mp3', // Added missing comma
    '/assets/sounds/Shapes.mp3',
    '/assets/sounds/Colors.mp3',
    '/assets/sounds/Animals.mp3',
    '/assets/sounds/Numbers.mp3',
    '/offline.html' // Ensure this page exists and is cached
];

// Install event: caching files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(assetsToCache))
            .catch(error => console.error('Failed to cache assets during install:', error))
    );
});

// Activate event: clearing old caches
self.addEventListener('activate', event => {
    const cacheAllowlist = [cacheName];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (!cacheAllowlist.includes(cache)) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch event: serving cached content when available
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then(networkResponse => {
                return caches.open(cacheName).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => {
                // Fallback logic for navigation requests
                if (event.request.mode === 'navigate') {
                    return caches.match('/offline.html');
                }
            });
        })
    );
});