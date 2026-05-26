import "../../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-layout/aspect-ratio/flex/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-tfwmpx"><div class="row svelte-tfwmpx"><div class="box portrait svelte-tfwmpx"><p class="svelte-tfwmpx">1 / 2</p></div> <div class="box square svelte-tfwmpx"><div></div> <p class="svelte-tfwmpx">1 / 1</p></div> <div class="box landscape svelte-tfwmpx"><p class="svelte-tfwmpx">2 / 1</p></div></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="row">
  <div class="box portrait">
    <p>1 / 2</p>
  </div>

  <div class="box square">
    <div />
    <p>1 / 1</p>
  </div>

  <div class="box landscape">
    <p>2 / 1</p>
  </div>
</div>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `.row {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.box {
  align-items: center;
  background-color: rgb(19 78 74 / 0.1);
  display: flex;
  justify-content: center;
  width: 6rem;
}

.portrait {
  aspect-ratio: 1 / 2;
}

.square {
  aspect-ratio: 1 / 1;
}

.landscape {
  aspect-ratio: 2 / 1;
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
