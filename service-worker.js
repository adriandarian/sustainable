"use strict";var precacheConfig=[["/OzoneGIS/Ozone.github.io/index.html","749c3d06aa7dd5d41ecf871a59def6a3"],["/OzoneGIS/Ozone.github.io/static/css/main.87f0da10.css","82802944e6150204b34ca3c702b41883"],["/OzoneGIS/Ozone.github.io/static/js/main.64320646.js","45e5fb248db1b2c40b94a965b347d164"],["/OzoneGIS/Ozone.github.io/static/media/bg13.c9b95f45.jpg","c9b95f45e9b2f28c5b23ee95792b55d3"],["/OzoneGIS/Ozone.github.io/static/media/bg14.6cdd0e88.jpg","6cdd0e889a988dcdeeea445ac8ad13ea"],["/OzoneGIS/Ozone.github.io/static/media/bg15.1d547621.jpg","1d5476213e47699664a1641b17ba69e6"],["/OzoneGIS/Ozone.github.io/static/media/bg16.150b1c9b.jpg","150b1c9bce62ec7a525a2e4d3ae34837"],["/OzoneGIS/Ozone.github.io/static/media/eva.089c4f4e.jpg","089c4f4e55f158a69d0364c6b6339f37"],["/OzoneGIS/Ozone.github.io/static/media/image_placeholder.ebe9884b.jpg","ebe9884b2152a08a525fcd5054019532"],["/OzoneGIS/Ozone.github.io/static/media/logo-white.eec7c7f6.svg","eec7c7f60134e712ef7174c96ca7ee5a"],["/OzoneGIS/Ozone.github.io/static/media/nucleo-outline.22a0bffe.ttf","22a0bffe789c286a9d78eb52670996a7"],["/OzoneGIS/Ozone.github.io/static/media/nucleo-outline.24e2d6b4.woff","24e2d6b43b1b0f84fdfaa06a4032f154"],["/OzoneGIS/Ozone.github.io/static/media/nucleo-outline.53a1bed7.eot","53a1bed7a3ec86d010fe100873828a89"],["/OzoneGIS/Ozone.github.io/static/media/nucleo-outline.8ebec31f.woff2","8ebec31f5ce59f908db84d86aed5947f"],["/OzoneGIS/Ozone.github.io/static/media/placeholder.f771455e.jpg","f771455e07d39b0841a3f0d4a2143c5d"],["/OzoneGIS/Ozone.github.io/static/media/ryan.f217f346.jpg","f217f346c88e5fb2720ca7c28827ff72"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/OzoneGIS/Ozone.github.io/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});