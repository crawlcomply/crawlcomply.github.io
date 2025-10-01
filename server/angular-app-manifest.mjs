
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://crawlcomply.com',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-AHPFW3G5.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M6A55QVO.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7H4LY4DY.js"
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
    'index.csr.html': {size: 70286, hash: '2b457caa53e32e6e4f2390f747581711f63791ddd00f80a92cbcb10b85626500', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17765, hash: '67a0dbc3865c5a2d38106af2723138fc38e6fd9dbac6a3eef69889dc747189b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 154539, hash: 'd546e1bc4a73d5d56329ba1d8d7407cf0ba7d7cd26a73eb1d0ad417229be7138', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 140352, hash: 'c780c72e1108ff0bfd704049dba2566fff4d16c98fe06dcdeebacd516f685050', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 180746, hash: '9821c7ae536068030a6ca26cc5e5457fe18af45e255f4ddde234d50155f47c99', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 155219, hash: 'c8b5abb387ec7b750a2f6b820df2f4ca7b3c79ed4f56062585f69cd0c620b778', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7ZQNNY2E.css': {size: 232919, hash: 'LIOUbJJIpG8', text: () => import('./assets-chunks/styles-7ZQNNY2E_css.mjs').then(m => m.default)}
  },
};
