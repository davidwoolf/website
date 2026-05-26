import { K as attr, a as bind_props, c as head, m as html, q as escape_html, s as ensure_array_like } from "../../../../../chunks/dev.js";
import { t as Container } from "../../../../../chunks/container.js";
//#region src/routes/(app)/articles/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let data = $$props["data"];
		head("zecjhv", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(data.title)} — David Woolf</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", data.excerpt)}/>`);
		});
		Container($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<article class="prose max-w-none prose-h1:m-0 prose-h1:text-xl prose-h1:md:text-2xl prose-h1:font-bold prose-h1:tracking-tight prose-h2:m-0 prose-h2:pt-8 prose-h2:text-lg prose-h2:md:text-xl prose-h2:font-semibold prose-h2:tracking-snug prose-h3:m-0 prose-h3:pt-6 prose-h3:text-base prose-h3:md:text-lg prose-h4:m-0 prose-h4:-mb-3 prose-h4:pt-4 prose-h4:font-semibold prose-h4:text-base prose-h4:md:text-base prose-img:mx-auto prose-img:my-0 prose-img:rounded-lg prose-p:m-0 prose-p:text-base prose-p:text-gray-900 prose-p:text-opacity-70 prose-p:leading-normal prose-a:text-opacity-100 prose-ul:m-0 prose-ul:pt-3 prose-li:m-0 prose-li:pt-1 prose-li:text-base prose-li:text-gray-900 prose-li:text-opacity-70 prose-li:leading-normal prose-pre:bg-white prose-pre:border prose-pre:border-slate-200 prose-pre:rounded-lg prose-pre:font-medium prose-pre:m-0 prose-pre:max-w-full prose-pre:mb-2 prose-pre:md:text-sm prose-pre:mt-6 prose-pre:overflow-scroll prose-pre:shadow-sm prose-pre:text-gray-900 prose-pre:text-sm prose-pre:w-full prose-table:mb-0 prose-table:mt-4 prose-figure:m-0 prose-figure:pt-6 prose-figure:pb-2 prose-hr:mt-8 prose-hr:mb-0">${html(data.post)} `);
				if (data.references.length) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<hr/> <h2>References</h2> <ul class="not-prose text-sm"><!--[-->`);
					const each_array = ensure_array_like(data.references);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let reference = each_array[$$index];
						$$renderer.push(`<li><a class="break-words hover:underline opacity-80"${attr("href", reference)} target="_blank">${escape_html(reference)}</a></li>`);
					}
					$$renderer.push(`<!--]--></ul>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></article>`);
			},
			$$slots: { default: true }
		});
		bind_props($$props, { data });
	});
}
//#endregion
export { _page as default };
