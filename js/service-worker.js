const cacheName = 'toddler-learning-adventure-v4';
const assetsToCache = [
    '/Toddler-Learning/',
    '/Toddler-Learning/index.html',
    '/Toddler-Learning/manifest.json',
    '/Toddler-Learning/offline.html',
    
    '/Toddler-Learning/css/',
    '/Toddler-Learning/css/styles.css',
    
    '/Toddler-Learning/js/',
    '/Toddler-Learning/js/app.js',
    '/Toddler-Learning/js/hideH1.js',
    '/Toddler-Learning/js/install.js',
    '/Toddler-Learning/js/menuSounds.js',
    '/Toddler-Learning/js/parentalControl.js',
    '/Toddler-Learning/js/service-worker.js',
    
    '/Toddler-Learning/assets/',
    '/Toddler-Learning/assets/icons/',
    '/Toddler-Learning/assets/icons/icon192.png',
    '/Toddler-Learning/assets/icons/icon512.png',
    
    '/Toddler-Learning/assets/images/',
    '/Toddler-Learning/assets/images/colors/red.png',
    '/Toddler-Learning/assets/images/colors/blue.png',
    '/Toddler-Learning/assets/images/colors/green.png',
    '/Toddler-Learning/assets/images/colors/yellow.png',
    '/Toddler-Learning/assets/images/colors/orange.png',
    '/Toddler-Learning/assets/images/colors/purple.png',
    '/Toddler-Learning/assets/images/colors/pink.png',
    '/Toddler-Learning/assets/images/colors/brown.png',
    '/Toddler-Learning/assets/images/colors/black.png',
    '/Toddler-Learning/assets/images/colors/white.png',
    
    '/Toddler-Learning/assets/images/shapes/circle.png',
    '/Toddler-Learning/assets/images/shapes/square.png',
    '/Toddler-Learning/assets/images/shapes/triangle.png',
    '/Toddler-Learning/assets/images/shapes/star.png',
    '/Toddler-Learning/assets/images/shapes/rectangle.png',
    '/Toddler-Learning/assets/images/shapes/rhombus.png',
    '/Toddler-Learning/assets/images/shapes/hexagon.png',
    '/Toddler-Learning/assets/images/shapes/pentagon.png',
    '/Toddler-Learning/assets/images/shapes/heart.png',
    '/Toddler-Learning/assets/images/shapes/hexagram.png',
    
    '/Toddler-Learning/assets/images/numbers/1.png',
    '/Toddler-Learning/assets/images/numbers/2.png',
    '/Toddler-Learning/assets/images/numbers/3.png',
    '/Toddler-Learning/assets/images/numbers/4.png',
    '/Toddler-Learning/assets/images/numbers/5.png',
    '/Toddler-Learning/assets/images/numbers/6.png',
    '/Toddler-Learning/assets/images/numbers/7.png',
    '/Toddler-Learning/assets/images/numbers/8.png',
    '/Toddler-Learning/assets/images/numbers/9.png',
    '/Toddler-Learning/assets/images/numbers/10.png',
    
    '/Toddler-Learning/assets/images/animals/rooster.png',
    '/Toddler-Learning/assets/images/animals/cat.png',
    '/Toddler-Learning/assets/images/animals/cow.png',
    '/Toddler-Learning/assets/images/animals/dog.png',
    '/Toddler-Learning/assets/images/animals/duck.png',
    '/Toddler-Learning/assets/images/animals/goat.png',
    '/Toddler-Learning/assets/images/animals/elephant.png',
    '/Toddler-Learning/assets/images/animals/lion.png',
    '/Toddler-Learning/assets/images/animals/bird.png',
    '/Toddler-Learning/assets/images/animals/monkey.png',
    
    '/Toddler-Learning/assets/images/msRachel/TWOTB.png',
    '/Toddler-Learning/assets/images/msRachel/IYHAYKI.png',
    '/Toddler-Learning/assets/images/msRachel/WW.png',
    '/Toddler-Learning/assets/images/msRachel/ABC.png',
    '/Toddler-Learning/assets/images/msRachel/IBS.png',
    '/Toddler-Learning/assets/images/msRachel/TMWGT.png',
    '/Toddler-Learning/assets/images/msRachel/RRRYB.png',
    '/Toddler-Learning/assets/images/msRachel/BPYPO.png',
    '/Toddler-Learning/assets/images/msRachel/1to20.png',
    '/Toddler-Learning/assets/images/msRachel/FT .png',
    
    '/Toddler-Learning/assets/sounds/',
    '/Toddler-Learning/assets/sounds/Shapes.mp3',
    '/Toddler-Learning/assets/sounds/Colors.mp3',
    '/Toddler-Learning/assets/sounds/Animals.mp3',
    '/Toddler-Learning/assets/sounds/Numbers.mp3',
    '/Toddler-Learning/assets/sounds/msRachel.mp3',
    
    '/Toddler-Learning/assets/sounds/colors/Red.mp3',
    '/Toddler-Learning/assets/sounds/colors/Blue.mp3',
    '/Toddler-Learning/assets/sounds/colors/Green.mp3',
    '/Toddler-Learning/assets/sounds/colors/Yellow.mp3',
    '/Toddler-Learning/assets/sounds/colors/Orange.mp3',
    '/Toddler-Learning/assets/sounds/colors/Purple.mp3',
    '/Toddler-Learning/assets/sounds/colors/Pink.mp3',
    '/Toddler-Learning/assets/sounds/colors/Brown.mp3',
    '/Toddler-Learning/assets/sounds/colors/Black.mp3',
    '/Toddler-Learning/assets/sounds/colors/White.mp3',
    
    '/Toddler-Learning/assets/sounds/shapes/Circle.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Square.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Triangle.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Star.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Rectangle.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Rhombus.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Hexagon.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Pentagon.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Heart.mp3',
    '/Toddler-Learning/assets/sounds/shapes/Hexagram.mp3',
    
    '/Toddler-Learning/assets/sounds/numbers/One.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Two.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Three.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Four.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Five.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Six.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Seven.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Eight.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Nine.mp3',
    '/Toddler-Learning/assets/sounds/numbers/Ten.mp3',
    
    '/Toddler-Learning/assets/sounds/animals/RoosterNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/CatNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/CowNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/DogNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/DuckNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/GoatNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/ElephantNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/LionNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/BirdNS.mp3',
    '/Toddler-Learning/assets/sounds/animals/MonkeyNS.mp3',
    
    '/Toddler-Learning/assets/sounds/msRachel/TWOTB.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/IYHAYKI.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/WW.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/ABC.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/IBS.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/TMWGT.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/RRRYB.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/BPYPO.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/1to20.mp3',
    '/Toddler-Learning/assets/sounds/msRachel/FT .mp3'

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
