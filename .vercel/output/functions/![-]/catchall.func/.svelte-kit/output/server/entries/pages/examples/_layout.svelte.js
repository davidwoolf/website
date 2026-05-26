import { u as slot } from "../../../chunks/dev.js";
//#region src/routes/examples/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.push(`<main class="main svelte-tlygdj"><div class="content svelte-tlygdj"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></div></main>`);
}
//#endregion
export { _layout as default };
