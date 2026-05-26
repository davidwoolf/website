import { K as attr, q as escape_html } from "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/button/aria-pressed/+page.svelte
function _page($$renderer) {
	let pressed = false;
	Tabs($$renderer, {
		tabs: [
			"preview",
			"html",
			"css"
		],
		$$slots: {
			preview: ($$renderer) => {
				$$renderer.push(`<div slot="preview"><button type="button"${attr("aria-pressed", pressed)} class="svelte-piz1pc">${escape_html("toggle me")}</button></div>`);
			},
			html: ($$renderer) => {
				$$renderer.push(`<div slot="html" class="tab__code">`);
				Code($$renderer, {
					language: "html",
					code: `<button type="button" aria-pressed="false">toggle me</button>`
				});
				$$renderer.push(`<!----></div>`);
			},
			css: ($$renderer) => {
				$$renderer.push(`<div slot="css" class="tab__code">`);
				Code($$renderer, {
					language: "css",
					code: `button {
  all: unset;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  font-size: 0.875rem;
  font-weight: 500;
  height: 2rem;
  padding: 0 1rem;
  outline: revert;
}

button[aria-pressed="true"] {
  background: #f6f6f6;
  box-shadow: inset 0 1px 4px rgb(0 0 0 / 0.1);
}`
				});
				$$renderer.push(`<!----></div>`);
			}
		}
	});
}
//#endregion
export { _page as default };
