var OFF = 'offline-cache';
var URLS = [
	'/',
	'/index.html',
	'/css/skeleton.min.css',
	'/css/normalize.min.css',
	'/js/main.js'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(OFF)
		.then(function (cache) {
			console.log('opened cache');
			return cache.addAll(URLS);
		})
	);
	console.log('installed');
});

self.addEventListener('activated', event => {
	console.log('activated');
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			if(response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});