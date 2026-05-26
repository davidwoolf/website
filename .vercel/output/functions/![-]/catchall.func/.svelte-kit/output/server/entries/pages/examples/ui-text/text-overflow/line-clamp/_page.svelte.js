import "../../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-text/text-overflow/line-clamp/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-1mbqb8d"><div class="container svelte-1mbqb8d"><p class="svelte-1mbqb8d">Using line clamps provides more flexibility with text overflow but isn't based on
        the container height</p></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="container">
  <p>Using line clamps provides more flexibility with text overflow but isn't based on the container height</p>
</div>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `.container {
  border: 1px solid rgb(19 78 74 / 0.5);
  flex: none;
  padding: 0.25rem;
  width: 8rem;
}

p {
  color: rgb(55 65 81 / 0.8);
  font-size: 0.75rem;
  margin: 0;
  overflow: hidden;
  width: 100%;

  /* line clamp specific requirements */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
