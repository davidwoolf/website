import { u as slot } from "../../../chunks/dev.js";
//#region src/routes/(app)/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.push(`<div class="min-h-screen grid grid-cols-1 grid-rows-[4rem_1fr_8rem]"><header class="flex items-center h-16 md:h-20 px-6 md:px-16 justify-between bg-white"><span class="font-semibold text-lg"><a href="/">David Woolf</a></span> <nav class="flex items-center gap-8"><a class="border-b" href="/articles">articles</a> <a class="border-b" href="https://github.com/davidwoolf" target="_blank">github</a> <a class="border-b" href="https://bsky.app/profile/davidwoolf.me" target="_blank">bluesky</a></nav></header> <div><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></div> <footer class="flex flex-col justify-center items-between text-center text-xs leading-loose"><span class="opacity-60">Made in San Diego</span> <span class="opacity-60">Built with <a href="http://svelte.dev/" class="hover:underline">Svelte</a> | Hosted
      on <a href="http://vercel.com/" class="hover:underline">Vercel</a></span> <span class="block">🏳️‍🌈 🐶 🏖️</span></footer></div>`);
}
//#endregion
export { _layout as default };
