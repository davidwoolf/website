import { K as attr, a as bind_props, c as head, f as stringify, q as escape_html, s as ensure_array_like, u as slot } from "../../../../chunks/dev.js";
import { t as Link } from "../../../../chunks/link.js";
import { t as Heading1 } from "../../../../chunks/heading1.js";
import { t as Container } from "../../../../chunks/container.js";
//#region src/components/text/heading2.svelte
function Heading2($$renderer, $$props) {
	$$renderer.push(`<h2 class="text-lg md:text-xl font-semibold tracking-snug leading-tight"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></h2>`);
}
//#endregion
//#region src/routes/(app)/articles/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let data = $$props["data"];
		head("f3bzsp", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Articles — David Woolf</title>`);
			});
		});
		Container($$renderer, {
			children: ($$renderer) => {
				Heading1($$renderer, {
					children: ($$renderer) => {
						$$renderer.push(`<!---->Articles`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> <div class="divide-y"><!--[-->`);
				const each_array = ensure_array_like(data.items);
				for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
					let article = each_array[$$index_1];
					$$renderer.push(`<article class="py-8">`);
					Heading2($$renderer, {
						children: ($$renderer) => {
							$$renderer.push(`<a class="hover:underline"${attr("href", `/articles/${stringify(article?.slug)}`)}>${escape_html(article?.title)}</a>`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <p class="font-regular opacity-60 text-base pt-2">${escape_html(article?.excerpt)}</p> <div class="flex items-center mt-4">`);
					Link($$renderer, {
						href: `/articles/${stringify(article?.slug)}`,
						children: ($$renderer) => {
							$$renderer.push(`<!---->Read more`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <ul class="flex items-center ml-auto gap-2"><!--[-->`);
					const each_array_1 = ensure_array_like(article?.tags);
					for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
						let tag = each_array_1[index];
						$$renderer.push(`<li class="tag text-emerald-800 bg-orange-50 rounded-md p-1 px-2 text-xs font-medium svelte-f3bzsp">${escape_html(tag)}</li>`);
					}
					$$renderer.push(`<!--]--></ul></div></article>`);
				}
				$$renderer.push(`<!--]--></div>`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, { data });
	});
}
//#endregion
export { _page as default };
