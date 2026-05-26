import "../../../../../chunks/index-server.js";
import { d as store_get, p as unsubscribe_stores, q as escape_html, st as getContext } from "../../../../../chunks/dev.js";
import "../../../../../chunks/client.js";
import { t as Link } from "../../../../../chunks/link.js";
import { t as Heading1 } from "../../../../../chunks/heading1.js";
//#region node_modules/.pnpm/@sveltejs+kit@2.61.1_@sveltejs+vite-plugin-svelte@7.1.2_svelte@5.55.9_vite@8.0.14_jiti@_113153021c8e9afea979d2141275aa7d/node_modules/@sveltejs/kit/src/runtime/app/stores.js
/**
* A function that returns all of the contextual stores. On the server, this must be called during component initialization.
* Only use this if you need to defer store subscription until after the component has mounted, for some reason.
*
* @deprecated Use `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
*/
var getStores = () => {
	const stores$1 = getContext("__svelte__");
	return {
		/** @type {typeof page} */
		page: { subscribe: stores$1.page.subscribe },
		/** @type {typeof navigating} */
		navigating: { subscribe: stores$1.navigating.subscribe },
		/** @type {typeof updated} */
		updated: stores$1.updated
	};
};
/**
* A readable store whose value contains page data.
*
* On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
*
* @deprecated Use `page` from `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
* @type {import('svelte/store').Readable<import('@sveltejs/kit').Page>}
*/
var page = { subscribe(fn) {
	return getStores().page.subscribe(fn);
} };
//#endregion
//#region src/routes/(app)/articles/[slug]/+error.svelte
function _error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		$$renderer.push(`<div class="h-full w-full flex flex-col gap-3 items-center justify-center text-center">`);
		Heading1($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}: ${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Link($$renderer, {
			href: "/",
			children: ($$renderer) => {
				$$renderer.push(`<!---->go home`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _error as default };
