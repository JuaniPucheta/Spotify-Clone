import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Cs2zmHno.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CwbL7o18.mjs');
const _page1 = () => import('./chunks/get-info-playlist_DJvJ1evD.mjs');
const _page2 = () => import('./chunks/_id__DP7JqCLq.mjs');
const _page3 = () => import('./chunks/index_B8X7f67F.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.3.7_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/get-info-playlist.json.js", _page1],
    ["src/pages/playlist/[id].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "eafe418f-90e2-465e-975a-b9b05f44a190"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
