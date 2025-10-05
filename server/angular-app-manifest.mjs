
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://crawlcomply.com',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-GTKFWRNJ.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EHB4K5LN.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UIZ2LMHK.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RKV3Q6KI.js"
    ],
    "route": "/profile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 70388, hash: 'b1c5f6d873f4f0afe2ddd2b2fff2096dbae36ee462fc8cec9927478874fb69bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17867, hash: '0b5d3452ee5cf8fae8e9274420154a1ecdbb93e7fbe183e7517d51255a0b3eee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 155391, hash: 'e27a6b5e12476111fcfc03eebc6cd89b0f554c335e2e2227d867d90295b551e2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 180977, hash: '1b37e85fb21be39c4b5a1899de200ef7f2530907cd4ac9c4000b3996f318b566', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 154711, hash: '448bc9cb57f3f67be0e9418c2b23f523ec1b3c90d50feb7712d37cc68520720c', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'styles-7ZQNNY2E.css': {size: 232919, hash: 'LIOUbJJIpG8', text: () => import('./assets-chunks/styles-7ZQNNY2E_css.mjs').then(m => m.default)}
  },
};
