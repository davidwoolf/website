import "../../../../../chunks/dev.js";
import { n as Code, t as Tabs } from "../../../../../chunks/tabs.js";
//#region src/routes/examples/ui-color-light/filters/+page.svelte
function _page($$renderer) {
	Tabs($$renderer, { $$slots: {
		preview: ($$renderer) => {
			$$renderer.push(`<div slot="preview" class="tab__preview svelte-1q7re02"><div class="filters svelte-1q7re02"><div><div class="blur svelte-1q7re02"></div> <p class="svelte-1q7re02">blur</p></div> <div><div class="brightness svelte-1q7re02"></div> <p class="svelte-1q7re02">brightness</p></div> <div><div class="contrast svelte-1q7re02"></div> <p class="svelte-1q7re02">contrast</p></div> <div><div class="drop-shadows svelte-1q7re02"></div> <p class="svelte-1q7re02">drop-shadows</p></div> <div><div class="grayscale svelte-1q7re02"></div> <p class="svelte-1q7re02">grayscale</p></div> <div><div class="hue-rotate svelte-1q7re02"></div> <p class="svelte-1q7re02">hue-rotate</p></div> <div><div class="invert svelte-1q7re02"></div> <p class="svelte-1q7re02">invert</p></div> <div><div class="opacity svelte-1q7re02"></div> <p class="svelte-1q7re02">opacity</p></div> <div><div class="saturate svelte-1q7re02"></div> <p class="svelte-1q7re02">saturate</p></div> <div><div class="sepia svelte-1q7re02"></div> <p class="svelte-1q7re02">sepia</p></div></div></div>`);
		},
		html: ($$renderer) => {
			$$renderer.push(`<div slot="html" class="tab__code">`);
			Code($$renderer, {
				language: "html",
				code: `<div class="blur" />
<div class="brightness" />
<div class="contrast" />
<div class="drop-shadows" />
<div class="grayscale" />
<div class="hue-rotate" />
<div class="invert" />
<div class="opacity" />
<div class="saturate" />
<div class="sepia" />`
			});
			$$renderer.push(`<!----></div>`);
		},
		css: ($$renderer) => {
			$$renderer.push(`<div slot="css" class="tab__code">`);
			Code($$renderer, {
				language: "css",
				code: `.blur,
.brightness,
.contrast,
.drop-shadows,
.grayscale,
.hue-rotate,
.invert,
.opacity,
.saturate,
.sepia {
  aspect-ratio: 1 / 1;
  background-image: url("./picture.png");
  background-size: cover;
  border-radius: 100%;
  height: 5rem;
  width: 5rem;
}

.blur {
  filter: blur(0.25rem);
}

.brightness {
  filter: brightness(150%);
}

.contrast {
  filter: contrast(50%);
}

.drop-shadows {
  filter: drop-shadow(0 0 5px black);
}

.grayscale {
  filter: grayscale(100%);
}

.hue-rotate {
  filter: hue-rotate(35deg);
}

.invert {
  filter: invert(100%);
}

.opacity {
  filter: opacity(0.4);
}

.saturate {
  filter: saturate(300%);
}

.sepia {
  filter: sepia(100%);
}`
			});
			$$renderer.push(`<!----></div>`);
		}
	} });
}
//#endregion
export { _page as default };
