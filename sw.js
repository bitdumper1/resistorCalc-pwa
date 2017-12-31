var CACHE = 'offline-cache';
var URLS = [
	'./index.html',
	'./css/skeleton.min.css',
	'./css/normalize.min.css',
	'./js/main.js'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE)
		.then(function (cache) {
			return cache.addAll(URLS);
		}).then(function () {
			return self.skipWaiting();
		})
	);
	
});

self.addEventListener('activated', event => {
});

self.addEventListener('fetch', function(event) {
	event.respondWith(fromCache(event.request));
	event.waitUntil(
    	update(event.request)
    );
});

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request);
  });
}

function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response.clone()).then(function () {
        return response;
      });
    });
  });
}