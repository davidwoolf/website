import * as server from '../entries/pages/(app)/articles/_slug_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/articles/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/articles/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.DQhI_28J.js","_app/immutable/chunks/BjW1HMUo.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/Dc3nDKb_.js","_app/immutable/chunks/Drx39uCL.js"];
export const stylesheets = [];
export const fonts = [];
