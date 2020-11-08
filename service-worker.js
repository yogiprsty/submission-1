const CACHE_NAME = 'webpwa';
const urlsToCache = [
    './',
    'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    './index.html',
    './pages/cart.html',
    './pages/home.html',
    './pages/login.html',
    './pages/order.html',
    './assets/apple.png',
    './assets/burger-logo.png',
    './assets/fb.png',
    './assets/google.png',
    './assets/hero-image.png',
    './assets/cart.svg',
    './assets/home.svg',
    './assets/loupe.svg',
    './assets/user.svg',
    './assets/burger/cheese.png',
    './assets/burger/dbl-cheese.png',
    './assets/burger/drink.png',
    './assets/burger/fries.png',
    './assets/burger/spicy.png',
    './assets/css/materialize.css',
    './assets/css/style.css',
    './assets/js/jquery.min.js',
    './assets/js/materialize.js',
    './assets/js/nav.js',
    './assets/js/script.js'
]

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(function (response) {
                if (response) {
                    console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
                    return response;
                }

                console.log(
                    "ServiceWorker: Memuat aset dari server: ",
                    event.request.url
                );
                return fetch(event.request);
            })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});