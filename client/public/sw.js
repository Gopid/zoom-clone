if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,n)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=n(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/ZoomLogo.png",revision:"112b8a41cca8c030b70d4e25bbc6fadb"},{url:"/_next/static/ai2MJFpt_Y4QiyDrZ1k_x/_buildManifest.js",revision:"eb1ef68617782024e275a7e510fa82a5"},{url:"/_next/static/ai2MJFpt_Y4QiyDrZ1k_x/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/0090a2467a293735fec76c6cbfd262323e24a007.46c74d476726bf3178fc.js",revision:"e41212977869b92a39e79aab117776ea"},{url:"/_next/static/chunks/ef0f1e2edca3f0cba65d92fed032daa166428fb1.25b125dfa7140810f648.js",revision:"68702dccd8689cd980717fd9a60afd04"},{url:"/_next/static/chunks/framework.9560630609611a3e02bc.js",revision:"b2c92abb270c241c26d0168ffd0a810f"},{url:"/_next/static/chunks/main-501014acde2c74364356.js",revision:"c9e8edfd4c8a8bbb6a02533880f18e42"},{url:"/_next/static/chunks/pages/_app-aa45517a6d6b73148deb.js",revision:"79eba1473a3cbe07b8c37df79571ce8d"},{url:"/_next/static/chunks/pages/_error-3e4743a441e01d02156e.js",revision:"44c87aa9b1ebeadf0e9ba07764900387"},{url:"/_next/static/chunks/pages/index-34549004bae0224b2ac1.js",revision:"f5bc603eac4d0077bb662a5bff97bc36"},{url:"/_next/static/chunks/pages/join-4079bcae15df5168ddb1.js",revision:"a877b1e1db73f3dca05464d9432ecee4"},{url:"/_next/static/chunks/pages/meeting/%5BmeetingId%5D-4e2b0867b746aacb278d.js",revision:"e4e98ad7dd44aef8c1a86b65761fa402"},{url:"/_next/static/chunks/polyfills-144e5fa6fafab6397d9c.js",revision:"5a24ffb4b45c1992f69bb705b3c45acd"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/4af41a7a96f6aa1c95fd.css",revision:"667494ae3b30649c5aee2c7d4c28a064"},{url:"/_next/static/media/Lato-Bold.5dd5aa0269395f0ea92763e6cb3bc07a.ttf",revision:"85d339d916479f729938d2911b85bf1f"},{url:"/_next/static/media/Lato-Regular.9919edff6283018571add043109dc20b.ttf",revision:"2d36b1a925432bae7f3c53a340868c6e"},{url:"/_next/static/media/Lato-Semibold.d585c7df44df3024c49b575d40bd0eca.ttf",revision:"3c6cfb1aebd888a0eb4c8fba94140fa6"},{url:"/favicon.ico",revision:"6216d0f486c9ce71111141b872c66b80"},{url:"/logo.png",revision:"d26593a34687892db2ffa519c5dfe34a"},{url:"/logo192.png",revision:"dc0f6e770295544cef7e4e27d1e56e8e"},{url:"/logo256.png",revision:"faa56a55450f6a0657f9be22016dd0bf"},{url:"/logo384.png",revision:"b0918a8e814cf9c9cff949fce9aa385e"},{url:"/logo512.png",revision:"c4cf4bbb9a2c5d7cc553f74f172e5ec2"},{url:"/manifest.json",revision:"8e19dd811cb39b06f21c30bd5f31b33d"},{url:"/maskableLogo128.png",revision:"0a301aa5e8167591276f968edc5bd0b2"},{url:"/maskableLogo192.png",revision:"e5e10c763a8043706dd5ae660b2d413d"},{url:"/maskableLogo384.png",revision:"286985f99606a77113ea33125874176b"},{url:"/maskableLogo48.png",revision:"0f1517091400648791defc9797fc95aa"},{url:"/maskableLogo512.png",revision:"412ce1dc28805a2be622245411228a6e"},{url:"/maskableLogo72.png",revision:"2c8fc7e640823e694799d0f0d9451cda"},{url:"/maskableLogo96.png",revision:"a6571c5fc9ae7b13d4cfe38160b8ab83"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
