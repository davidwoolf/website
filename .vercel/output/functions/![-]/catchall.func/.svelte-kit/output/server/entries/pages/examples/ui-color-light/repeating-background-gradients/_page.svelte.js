import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-color-light/repeating-background-gradients/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-10owzzr"><div class="repeating-radial-gradient svelte-10owzzr"></div></div>`);
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
    rgb(151 71 255 / 0.5) 0 8.3333%,
    rgb(255 255 255) 8.3333% 16.6666%
  );
  background-size: 2rem 2rem;
  border-radius: 100%;
  height: 12rem;
  margin: 0 auto;
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
