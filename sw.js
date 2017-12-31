var CACHE = 'offline';
var URLS = [
	'./',
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
		})
	);
	console.log('installed');
});

self.addEventListener('activated', event => {
	console.log('activated');
});

self.addEventListener('fetch', function(event) {
	console.log('got a fetch request' + event);
	event.respondWith(fromCache(event.request));
	event.waitUntil(update(event.request));
});

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request);
    console.log('returned from cache');
  });
}

function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response.clone());
      console.log('update done ' + request);
    });
  });
}