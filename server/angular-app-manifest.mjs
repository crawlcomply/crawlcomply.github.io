
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://crawlcomply.com',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25004, hash: '0846a3ed23d937d00da7b908c22768c9b4dc859d79fbf5c1c6c34fbf5ce12b73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17459, hash: 'a5b90807ea29ce11b66d49fdfd6916a3c070c7159e05056e3f03ff4081860700', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 97175, hash: 'a6dfb55df9b79aede8a153b74b8849f5a30221d2ec0c887bca978b33e10c42ae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
