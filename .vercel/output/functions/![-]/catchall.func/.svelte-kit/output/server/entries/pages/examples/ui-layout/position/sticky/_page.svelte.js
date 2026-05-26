import "../../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-layout/position/sticky/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-4ct8z0"><div class="container svelte-4ct8z0"><div class="box sticky svelte-4ct8z0"><p>sticky header</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div> <div class="box svelte-4ct8z0"><p>item</p></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="container">
<div class="box sticky">
  <p>sticky header</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>

<div class="box">
  <p>item</p>
</div>
</div>

<div class="box">
<p>item</p>
</div>

<div class="box">
<p>item</p>
</div>

<div class="box">
<p>item</p>
</div>

<div class="box">
<p>item</p>
</div>

<div class="box">
<p>item</p>
</div>

<div class="box">
<p>item</p>
</div>

<div class="box">
<p>item</p>
</div>

<div class="box">
<p>item</p>
</div>
<div class="box">
<p>item</p>
</div>
<div class="box">
<p>item</p>
</div>
<div class="box">
<p>item</p>
</div>
<div class="box">
<p>item</p>
</div>
<div class="box">
<p>item</p>
</div>
<div class="box">
<p>item</p>
</div>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `.container {
  border: 1px solid rgb(19 78 74 / 0.1);
}

.box {
  align-items: center;
  background-color: white;
  border-bottom: 1px solid rgb(19 78 74 / 0.1);
  color: rgb(55 65 81);
  display: flex;
  font-size: 0.75rem;
  justify-content: center;
}

.box.sticky {
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 10;
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
