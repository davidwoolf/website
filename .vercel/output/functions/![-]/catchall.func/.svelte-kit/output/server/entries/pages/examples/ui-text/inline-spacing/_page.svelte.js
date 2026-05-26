import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-text/inline-spacing/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-m9z6mp"><div class="word-spacing-container svelte-m9z6mp"><div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div></div> <p class="svelte-m9z6mp">the boxes are inline block and the parent has word spacing set to 1rem</p> <div class="letter-spacing-container svelte-m9z6mp"><div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div></div> <p class="svelte-m9z6mp">the boxes are inline block and the parent has letter spacing set to 1rem</p> <div class="line-height-container svelte-m9z6mp"><div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div></div> <p class="svelte-m9z6mp">the boxes are inline block and the parent has the line height set to 3rem</p></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="word-spacing-container">
  <div class="box" />
  <div class="box" />
  <div class="box" />
</div>

<p>the boxes are inline block and the parent has word spacing set to 1rem</p>

<div class="letter-spacing-container">
  <div class="box" />
  <div class="box" />
  <div class="box" />
</div>

<p>the boxes are inline block and the parent has letter spacing set to 1rem</p>

<div class="line-height-container">
  <div class="box" />
  <div class="box" />
  <div class="box" />
</div>

<p>the boxes are inline block and the parent has the line height set to 3rem</p>`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `p {
  color: rgb(55 65 81 / 0.8);
  font-size: 0.75rem;
  max-width: 11rem;
  text-align: center;
}

.word-spacing-container {
  word-spacing: 1rem;
}

.letter-spacing-container {
  word-spacing: 1rem;
}

.line-height-container {
  line-height: 3;
  width: 3rem;
}

.box {
  background-color: rgb(19 78 74 / 0.1);
  display: inline-block;
  height: 3rem;
  width: 3rem;
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
