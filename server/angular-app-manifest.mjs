
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
    'index.csr.html': {size: 69927, hash: '7dc2dc2cffd2586621ba80f481176bfd050230fa71605dcd3564f05164f16a95', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17459, hash: '527668d000657cc89ac420589763e27379dae415cee433f0b28a58b2783886b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 153483, hash: '371294ed38b50767f01b36050294d3450f86c5ef88aa0ef21563d33c54dc2119', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JAGEJZ6K.css': {size: 232712, hash: '6+lX75BFwBs', text: () => import('./assets-chunks/styles-JAGEJZ6K_css.mjs').then(m => m.default)}
  },
};
