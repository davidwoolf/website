import { u as slot } from "./dev.js";
//#region src/components/layout/container.svelte
function Container($$renderer, $$props) {
	$$renderer.push(`<div class="max-w-3xl mx-auto p-6 md:py-24 md:px-16"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
export { Container as t };
