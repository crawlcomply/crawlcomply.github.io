
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://crawlcomply.com',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-NIR62T23.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3HFLXQI4.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IYWENB4O.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OCJMEEH2.js"
    ],
    "route": "/profile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 70286, hash: '89e816433268c38a1fe10c10c52ee12f994562c550a597ed0e668cad3f53727f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17765, hash: '971464153acc2abf374c75613721194c1f948aef6a95bd43261f553470d15d33', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 180746, hash: '7d7a58ff1c3531efdc40ce5e761fcf1284b4ecdad6c55cddd6c54ecdf039d3ba', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 140352, hash: '9797f6808a2adae6c808bbb8094e2a29a374086cade4b5ded5ce3f06e1009e6a', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 154539, hash: '3eebe56c68651caf37b3bdfb5ed1665a8bfc593c4eb0c2663576ca6d2b24f8b6', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 155219, hash: 'af0b93b2833f1d044e476479d1f5a65726b8845bad3fd609e208d0a4437d1d17', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7ZQNNY2E.css': {size: 232919, hash: 'LIOUbJJIpG8', text: () => import('./assets-chunks/styles-7ZQNNY2E_css.mjs').then(m => m.default)}
  },
};
