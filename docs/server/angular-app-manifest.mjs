
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 764, hash: 'd5a6260405245eea61bff26b13c4ae75311e4536bb59ca989678b096833b1975', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 890, hash: '1641cdff21d35ce782bdc825adb40a6243f889ec3e8ea48bdbc62cc74206a57d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZVVYA5G5.css': {size: 262, hash: 'O93fcQV/BnU', text: () => import('./assets-chunks/styles-ZVVYA5G5_css.mjs').then(m => m.default)}
  },
};
