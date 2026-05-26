import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-text/letter-spacing/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-kqjyxo"><p class="tracking-normal svelte-kqjyxo">I am text with tracking set at "normal"</p> <p class="tracking-loose svelte-kqjyxo">I am text with tracking set at 0.025em</p> <p class="tracking-wide svelte-kqjyxo">I am text with tracking set at 0.075em</p> <p class="tracking-snug svelte-kqjyxo">I am text with tracking set at -0.0125em</p> <p class="tracking-tight svelte-kqjyxo">I am text with tracking set at -0.025em</p></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<p>I am text with a unitless <br />line-height value of 1.5</p>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `p {
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
