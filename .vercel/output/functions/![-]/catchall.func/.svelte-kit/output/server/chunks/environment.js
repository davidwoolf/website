//#region node_modules/.pnpm/@sveltejs+kit@2.61.1_@sveltejs+vite-plugin-svelte@7.1.2_svelte@5.55.9_vite@8.0.14_jiti@_113153021c8e9afea979d2141275aa7d/node_modules/@sveltejs/kit/src/runtime/app/paths/internal/server.js
var base = "";
var assets = base;
var app_dir = "_app";
var initial = {
	base,
	assets
};
initial.base;
/**
* @param {{ base: string, assets: string }} paths
*/
function override(paths) {
	base = paths.base;
	assets = paths.assets;
}
function reset() {
	base = initial.base;
	assets = initial.assets;
}
/** @param {string} path */
function set_assets(path) {
	assets = initial.assets = path;
}
/**
* `$env/dynamic/public`
* @type {Record<string, string>}
*/
var public_env = {};
/** @type {(environment: Record<string, string>) => void} */
function set_private_env(environment) {}
/** @type {(environment: Record<string, string>) => void} */
function set_public_env(environment) {
	public_env = environment;
}
//#endregion
//#region \0virtual:__sveltekit/environment
var version = "1779815821455";
var prerendering = false;
function set_building() {}
function set_prerendering() {
	prerendering = true;
}
//#endregion
export { public_env as a, app_dir as c, override as d, reset as f, version as i, assets as l, set_building as n, set_private_env as o, set_assets as p, set_prerendering as r, set_public_env as s, prerendering as t, base as u };
