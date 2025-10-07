
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://crawlcomply.com',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-E3KPLJ3D.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MWMUCW7W.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DDOUODUK.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LIK2OC7K.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RRDI4UCG.js"
    ],
    "route": "/org"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RHCCHCGS.js"
    ],
    "route": "/repo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VDFUWQWH.js"
    ],
    "route": "/repo_history"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J25H343L.js"
    ],
    "route": "/run_history"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 70388, hash: '9f7a7674d80cd8f2c4c36f1f9c5569271f91ca75f256e5217c1d97d652a3c26e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17867, hash: 'ec3f594bf545db57a8c52e7cb493caf797659c452462d7b60e94b7a2bc175dda', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'org/index.html': {size: 140489, hash: '01ec36b069465fd016450e68633eaf37d7f99cf464776d438e65591ed9fc1b3a', text: () => import('./assets-chunks/org_index_html.mjs').then(m => m.default)},
    'index.html': {size: 155391, hash: '1da4b1fcf6f423eb3649d707957aee1ad14f720c97072998da20d8b22b7cbcf5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 154711, hash: 'c624016c83fbda12552454b3125741b0df300ceddfe8d893a2db0a356a097b91', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'run_history/index.html': {size: 140514, hash: '08fe786d72b2aa9047ceac158c92da7024f1164e4c297835990a4a1d24cc88db', text: () => import('./assets-chunks/run_history_index_html.mjs').then(m => m.default)},
    'repo_history/index.html': {size: 140517, hash: 'c33ee47d9ee1c7320116e98eb2a0a17f9341b2cdbe544d82e1490d7bf4ba8679', text: () => import('./assets-chunks/repo_history_index_html.mjs').then(m => m.default)},
    'repo/index.html': {size: 140493, hash: 'ee933e12271e137cfbb5bc6e609fdd4b124ea2c5cb388f2982e6294c9dcb5ce2', text: () => import('./assets-chunks/repo_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 180977, hash: '25aad184599b76f2f8fb26e6f9854a32c494af5017a1a0ebb18598c7f3767f2a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-7ZQNNY2E.css': {size: 232919, hash: 'LIOUbJJIpG8', text: () => import('./assets-chunks/styles-7ZQNNY2E_css.mjs').then(m => m.default)}
  },
};
