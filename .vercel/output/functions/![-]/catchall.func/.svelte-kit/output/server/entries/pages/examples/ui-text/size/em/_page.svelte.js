import "../../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-text/size/em/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-r137v6"><p class="svelte-r137v6">I am the main body of text, set at 1rem <br/> <span class="svelte-r137v6">I am less important text, set at .75em</span></p></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<p>
  I am the main body of text, set at 1rem <br />
  <span>I am less important text, set at .75em</span>
</p>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `p {
  font-size: 1rem;
}

/* max will always take the biggest value from a list of options */
span {
  font-size: max(0.625rem, 0.75em);
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
