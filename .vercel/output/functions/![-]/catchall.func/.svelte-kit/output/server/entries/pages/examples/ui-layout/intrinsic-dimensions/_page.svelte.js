import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-layout/intrinsic-dimensions/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-hml5cw"><div class="container svelte-hml5cw"><p class="max-content svelte-hml5cw">The width is set to max-content, which will break the container’s bounding box</p></div> <div class="container svelte-hml5cw"><p class="min-content svelte-hml5cw">The width is set to min-content, which will shrink to the largest word</p></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="container">
  <p class="max-content">
    The width is set to max-content, which will break the container’s bounding box
  </p>
</div>

<div class="container">
  <p class="min-content">
    The width is set to min-content, which will shrink to the largest word
  </p>
</div>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `.container {
  background-color: rgb(19 78 74 / 0.1);
  padding: 0.5rem;
  width: 12rem;
}

.container p {
  color: rgb(55 65 81);
  font-size: 0.75rem;
  margin: 0;
}

p.max-content {
  width: max-content;
}

p.min-content {
  width: min-content;
}
    `
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
