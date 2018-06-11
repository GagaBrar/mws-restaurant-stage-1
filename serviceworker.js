self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('cachename').then(function (cache) {
      return cache.addAll(
        [
          '/',
          '/css/styles.css',
          '/data/restaurants.json',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/index.html',
          '/restaurant.html',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg',
          '/Ggagan.html'
        ]

      );
    })
  );
});



self.addEventListener('activate', function (event) {
  console.log("ohh! Its activated.") // Perform some task
});


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
        
      }
      return fetch(event.request).then(function (response) {
        if (response.status === 404) {
          return caches.match('/Ggagan.html');
        }
        return response
      });
    }).catch(function () {
      // If both fail, show a generic fallback:
      return caches.match('/Ggagan.html');
    })
  );
});