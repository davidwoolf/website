import { u as slot } from "./dev.js";
//#region src/components/text/heading1.svelte
function Heading1($$renderer, $$props) {
	$$renderer.push(`<h1 class="text-gray-900 text-xl md:text-2xl font-bold tracking-tight"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></h1>`);
}
//#endregion
export { Heading1 as t };
