import "../../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-text/text-overflow/overflow-hidden/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-9ma718"><div class="container svelte-9ma718"><p class="svelte-9ma718">Setting a max height with text breaking outside of the bounds looks really bad</p></div> <div class="container overflow-hidden svelte-9ma718"><p class="svelte-9ma718">Adding overflow: hidden helps a bit but is still awkward</p></div> <div class="container text-overflow svelte-9ma718"><p class="svelte-9ma718">Adding text-overflow helps visually but is very limited</p></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="container">
  <p>
    Setting a max height with text breaking outside of the bounds looks really bad
  </p>
</div>

<div class="container overflow-hidden">
  <p>Adding overflow: hidden helps a bit but is still awkward</p>
</div>

<div class="container text-overflow">
  <p>Adding text-overflow helps visually but is very limited</p>
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
  height: 3rem;
  width: 8rem;
}

p {
  color: rgb(55 65 81 / 0.8);
  font-size: 0.75rem;
  padding: 0.25rem;
  margin: 0;
  text-overflow: ellipsis;
  width: 100%;
}

.overflow-hidden {
  margin-top: 3rem;
  height: 2.875rem;
}

.overflow-hidden p {
  height: 100%;
  overflow: hidden;
}

.text-overflow {
  margin-top: 1rem;
  height: 2.875rem;
}

.text-overflow p {
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
