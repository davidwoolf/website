import "../../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-layout/grid/span-tracks/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-adj3qb"><div class="grid svelte-adj3qb"><div class="svelte-adj3qb"><p class="svelte-adj3qb">column 1<br/>row 1</p></div> <div class="svelte-adj3qb"><p class="svelte-adj3qb">column 2<br/>row 1</p></div> <div class="svelte-adj3qb"><p class="svelte-adj3qb">column 3<br/>row 1</p></div> <div class="svelte-adj3qb"><p class="svelte-adj3qb">column 1<br/>row 2</p></div> <div class="svelte-adj3qb"><p class="svelte-adj3qb">column 2 &amp; 3<br/>row 2</p></div></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="grid">
<div><p>column 1<br />row 1</p></div>

<div><p>column 2<br />row 1</p></div>

<div><p>column 3<br />row 1</p></div>

<div><p>column 1<br />row 2</p></div>

<div><p>column 2 & 3<br />row 2</p></div>
</div>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.grid div {
  background-color: rgb(19 78 74 / 0.1);
  padding: 1rem;
}

.grid div:nth-child(5) {
  grid-column: 2 / span 2;
}

.grid p {
  color: rgb(55 65 81);
  margin: 0;
  font-size: 0.75rem;
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
