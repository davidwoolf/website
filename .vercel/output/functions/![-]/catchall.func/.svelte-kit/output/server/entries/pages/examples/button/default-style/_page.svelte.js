import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/button/default-style/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview"><div class="preview__content svelte-1kmuwpd"><p class="svelte-1kmuwpd"><button>click me</button> <span class="svelte-1kmuwpd">baseline styles</span></p> <hr class="svelte-1kmuwpd"/> <p class="svelte-1kmuwpd"><button class="button__unset svelte-1kmuwpd">click me</button> <span class="svelte-1kmuwpd">all set to "unset"</span></p> <hr class="svelte-1kmuwpd"/> <p class="svelte-1kmuwpd"><button class="button__appearance-none svelte-1kmuwpd">click me</button> <span class="svelte-1kmuwpd">appearance set to "none"</span></p> <hr class="svelte-1kmuwpd"/> <p class="svelte-1kmuwpd"><button class="button__manually-reset svelte-1kmuwpd">click me</button> <span class="svelte-1kmuwpd">individual properties reset</span></p></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<button>click me</button>
<button class="unset">click me</button>
<button class="appearance--none">click me</button>
<button class="manually--reset">click me</button>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `.unset {
  all: unset;
  outline: revert; /* keep this for keyboard focus */
}

.appearance--none {
  appearance: none;
}

.manually--reset {
  background: none;
  border: none;
  padding: 0;
}
`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
