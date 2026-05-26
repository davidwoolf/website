import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-color-light/backdrop-filters/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-npupt7"><div class="container"><header class="header svelte-npupt7"><p>header</p></header> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div> <div class="box svelte-npupt7"><p>row item</p></div></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<header class="header">
  <p>header</p>
</header>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `.box,
.header {
  align-items: center;
  background-color: white;
  border-bottom: 1px solid rgb(19 78 74 / 0.1);
  color: rgb(55 65 81);
  display: flex;
  font-size: 0.75rem;
  justify-content: center;
}

.header {
  background-color: rgb(255 255 255 / .5);
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 10;

  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
