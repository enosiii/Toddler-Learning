const cacheName = 'toddler-learning-adventure-v3';
const assetsToCache = [
    '/Toddler-Learning/',
    '/Toddler-Learning/index.html',
    '/Toddler-Learning/manifest.json',
    '/Toddler-Learning/css/styles.css',
    
    '/Toddler-Learning/js/app.js',
    '/Toddler-Learning/js/menuSounds.js',
    '/Toddler-Learning/js/hideH1.js',
    '/Toddler-Learning/js/parentalControl.js',
    
    '/Toddler-Learning/assets/icons/icon192.png',
    '/Toddler-Learning/assets/icons/icon512.png',
    
    '/Toddler-Learning/assets/images/red.png',
    '/Toddler-Learning/assets/images/blue.png',
    '/Toddler-Learning/assets/images/green.png',
    '/Toddler-Learning/assets/images/yellow.png',
    
    '/Toddler-Learning/assets/images/circle.png',
    '/Toddler-Learning/assets/images/square.png',
    '/Toddler-Learning/assets/images/triangle.png',
    '/Toddler-Learning/assets/images/star.png',
    
    '/Toddler-Learning/assets/images/rooster.png',
    '/Toddler-Learning/assets/images/cat.png',
    '/Toddler-Learning/assets/images/cow.png',
    '/Toddler-Learning/assets/images/dog.png',
    
    '/Toddler-Learning/assets/images/1.png',
    '/Toddler-Learning/assets/images/2.png',
    '/Toddler-Learning/assets/images/3.png',
    '/Toddler-Learning/assets/images/4.png',
    '/Toddler-Learning/assets/images/5.png',
    '/Toddler-Learning/assets/images/6.png',
    '/Toddler-Learning/assets/images/7.png',
    '/Toddler-Learning/assets/images/8.png',
    '/Toddler-Learning/assets/images/9.png',
    '/Toddler-Learning/assets/images/10.png',
    
    '/Toddler-Learning/assets/sounds/Red.mp3',
    '/Toddler-Learning/assets/sounds/Blue.mp3',
    '/Toddler-Learning/assets/sounds/Green.mp3',
    '/Toddler-Learning/assets/sounds/Yellow.mp3',
    
    '/Toddler-Learning/assets/sounds/Circle.mp3',
    '/Toddler-Learning/assets/sounds/Square.mp3',
    '/Toddler-Learning/assets/sounds/Triangle.mp3',
    '/Toddler-Learning/assets/sounds/Star.mp3',
    
    '/Toddler-Learning/assets/sounds/RoosterNS.mp3',
    '/Toddler-Learning/assets/sounds/CowNS.mp3',
    '/Toddler-Learning/assets/sounds/CatNS.mp3',
    '/Toddler-Learning/assets/sounds/DogNS.mp3',
    
    '/Toddler-Learning/assets/sounds/One.mp3',
    '/Toddler-Learning/assets/sounds/Two.mp3',
    '/Toddler-Learning/assets/sounds/Three.mp3',
    '/Toddler-Learning/assets/sounds/Four.mp3',
    '/Toddler-Learning/assets/sounds/Five.mp3',
    '/Toddler-Learning/assets/sounds/Six.mp3',
    '/Toddler-Learning/assets/sounds/Seven.mp3',
    '/Toddler-Learning/assets/sounds/Eight.mp3',
    '/Toddler-Learning/assets/sounds/Nine.mp3',
    '/Toddler-Learning/assets/sounds/Ten.mp3',
    
    '/Toddler-Learning/assets/sounds/Shapes.mp3',
    '/Toddler-Learning/assets/sounds/Colors.mp3',
    '/Toddler-Learning/assets/sounds/Animals.mp3',
    '/Toddler-Learning/assets/sounds/Numbers.mp3',
    '/Toddler-Learning/offline.html'
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
                    return caches.match('/Toddler-Learning/offline.html');
                }
            });
        })
    );
});
