import { l as assets } from "../../../chunks/environment.js";
import { K as attr, a as bind_props, c as head, f as stringify, n as attr_class, nt as fallback } from "../../../chunks/dev.js";
import "../../../chunks/paths.js";
import { t as Heading1 } from "../../../chunks/heading1.js";
//#region src/components/home/image.svelte
function Image($$renderer, $$props) {
	let src = $$props["src"];
	let alt = $$props["alt"];
	let classes = fallback($$props["classes"], "");
	$$renderer.push(`<img${attr_class(` col-start-1 row-start-1 col-span-1 row-span-1 rounded-3xl shadow-xl transition-transform duration-500 ${stringify(classes)} `)}${attr("src", src)}${attr("alt", alt)}/>`);
	bind_props($$props, {
		src,
		alt,
		classes
	});
}
//#endregion
//#region src/routes/(app)/+page.svelte
function _page($$renderer) {
	head("h7bcrl", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>David Woolf — Front-end software engineer</title>`);
		});
		$$renderer.push(`<meta name="description" content="I'm David Woolf, a front-end software engineer, building products professionally for
  over 10 years"/>`);
	});
	$$renderer.push(`<div class="page-container p-6 md:py-24 md:px-16 flex flex-col-reverse lg:grid lg:grid-cols-2 items-center svelte-h7bcrl"><div class="text-center lg:text-left">`);
	Heading1($$renderer, {
		children: ($$renderer) => {
			$$renderer.push(`<!---->Software engineer <span class="align-middle text-lg font-normal px-1 opacity-20">|</span> web`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> <p class="pt-2 text-base md:text-lg font-regular text-gray-900/60 max-w-lg">I'm David Woolf, a front-end software engineer, building products professionally for
      over 10 years. Currently living in San Diego, California with my dog Luka.</p></div> <div class="origin-top scale-50 translate-y-8 md:origin-center md:scale-75 md:-translate-y-16 lg:translate-y-0 xl:scale-100 grid grid-cols-1 grid-rows-1 place-items-center group">`);
	Image($$renderer, {
		classes: "\n          w-48\n          translate-x-32\n          translate-y-0\n          group-hover:translate-x-48\n          group-hover:-translate-y-12\n          group-hover:scale-110\n        ",
		src: `${stringify(assets)}/luka-2.jpeg`,
		alt: "Luka in nature"
	});
	$$renderer.push(`<!----> `);
	Image($$renderer, {
		classes: "\n          w-40\n          transform\n          -translate-x-2\n          translate-y-24\n          group-hover:-translate-x-6 \n          group-hover:translate-y-32\n          group-hover:scale-110\n        ",
		src: `${stringify(assets)}/luka.jpeg`,
		alt: "My dog Luka"
	});
	$$renderer.push(`<!----> `);
	Image($$renderer, {
		classes: " \n          w-56\n          transform\n          -translate-x-32\n          -translate-y-12\n          group-hover:-translate-x-56\n          group-hover:-translate-y-20\n          group-hover:scale-90\n        ",
		src: `${stringify(assets)}/profile.jpeg`,
		alt: "David Woolf"
	});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _page as default };
