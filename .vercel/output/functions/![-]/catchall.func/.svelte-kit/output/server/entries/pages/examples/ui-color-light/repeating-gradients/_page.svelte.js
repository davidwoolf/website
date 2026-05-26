import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-color-light/repeating-gradients/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-1grgq9c"><div class="repeating-radial-gradient svelte-1grgq9c"></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="repeating-radial-gradient"></div>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `
.repeating-radial-gradient {
  background: repeating-radial-gradient(
    circle,
    rgb(245 158 11) 0 3%,
    rgb(255 255 255) 3% 6%
  );
  border-radius: 100%;
  height: 12rem;
  width: 12rem;
}
    `
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
