importScripts("/precache-manifest.daf7870ad0f95ce5657ae8204bea9a36.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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

