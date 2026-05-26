import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/button/role-button/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, {
		tabs: ["preview", "html"],
		$$slots: {
			preview: ($$renderer) => {
				$$renderer.push(`<div slot="preview"><div role="button" tabindex="0">click me (a div)</div></div>`);
			},
			html: ($$renderer) => {
				$$renderer.push(`<div slot="html" class="tab__code">`);
				Code($$renderer, {
					language: "html",
					code: `<div role="button" tabindex="0">click me (a div)</div>`
				});
				$$renderer.push(`<!----></div>`);
			}
		}
	});
}
//#endregion
export { _page as default };
