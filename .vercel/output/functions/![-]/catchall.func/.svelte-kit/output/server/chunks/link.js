import { K as attr, a as bind_props, u as slot } from "./dev.js";
//#region src/components/layout/link.svelte
function Link($$renderer, $$props) {
	let href = $$props["href"];
	$$renderer.push(`<a${attr("href", href)} class="font-semibold border-b inline-block pb-0-5 transition-all duration-200 border-b-black-900 hover:text-emerald-700"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></a>`);
	bind_props($$props, { href });
}
//#endregion
export { Link as t };
