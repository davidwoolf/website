import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-text/labels/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview"><label class="label"><span>First name</span> <input class="input" name="first_name" placeholder="John..." required="" type="text"/></label></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<label class="label">
  <span>First name</span>
  <input class="input" name="first_name" placeholder="John..." required type="text" />
</label>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label > span {
  color: rgb(55 65 81);
  font-weight: 500;
  font-size: 0.875rem;
}

input {
  border: 1px solid rgb(19 78 74 / 0.1);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  height: 2rem;
  padding: 0.5rem;
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
