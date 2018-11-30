importScripts("/precache-manifest.39a865dde518a54bc17844f4c7c1e028.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);
    workbox.precaching.precacheAndRoute(self.__precacheManifest);
}
else {
    console.log(`Workbox didn't load`);
}

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');
  console.log(event.notification);

  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});

