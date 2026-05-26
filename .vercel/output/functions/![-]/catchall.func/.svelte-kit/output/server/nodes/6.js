import * as server from '../entries/pages/(app)/articles/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/articles/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/articles/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.BrlYFYuU.js","_app/immutable/chunks/BjW1HMUo.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/Dc3nDKb_.js","_app/immutable/chunks/Drx39uCL.js","_app/immutable/chunks/DG4BV_f_.js","_app/immutable/chunks/EMJdQr7v.js"];
export const stylesheets = ["_app/immutable/assets/6.Cki-SC0N.css"];
export const fonts = [];
