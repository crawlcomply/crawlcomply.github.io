
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://crawlcomply.com',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YW5IWX2O.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6SF6P7E.js"
    ],
    "route": "/faq"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 70080, hash: '79b3b4cd5903f652a948d4d6a7327ee6763a2ca838534d48f00519e2c19f287c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17612, hash: 'e9eba2982e6ec137891847bb41c9c729ba4ad558e1a70c9f7eab75e0787340d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 154512, hash: 'f18e1bbedb567e04bff64406323e31d3895422a74f43caca5f645bd0abf952fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 153832, hash: '271fb873f8fa4bad30a37eebb8a99546e6c575dc32d17669f24f10e4a1d1992e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'styles-KPVTUMJ5.css': {size: 232865, hash: '2lRaXna3U5U', text: () => import('./assets-chunks/styles-KPVTUMJ5_css.mjs').then(m => m.default)}
  },
};
