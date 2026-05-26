import{R as e,S as t,it as n,w as r}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as i,t as a}from"../chunks/Cew1FS2G.js";var o=r(`<div slot="preview" class="tab__preview svelte-hml5cw"><div class="container svelte-hml5cw"><p class="max-content svelte-hml5cw">The width is set to max-content, which will break the container’s bounding box</p></div> <div class="container svelte-hml5cw"><p class="min-content svelte-hml5cw">The width is set to min-content, which will shrink to the largest word</p></div></div>`),s=r(`<div slot="html" class="tab__code"><!></div>`),c=r(`<div slot="css" class="tab__code"><!></div>`);function l(r){a(r,{$$slots:{preview:(e,n)=>{t(e,o())},html:(r,a)=>{var o=s();i(e(o),{language:`html`,code:`<div class="container">
  <p class="max-content">
    The width is set to max-content, which will break the container’s bounding box
  </p>
</div>

<div class="container">
  <p class="min-content">
    The width is set to min-content, which will shrink to the largest word
  </p>
</div>`}),n(o),t(r,o)},css:(r,a)=>{var o=c();i(e(o),{language:`css`,code:`.container {
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
    `}),n(o),t(r,o)}}})}export{l as component};