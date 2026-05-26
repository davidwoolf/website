import{R as e,S as t,it as n,w as r}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as i,t as a}from"../chunks/Cew1FS2G.js";var o=r(`<div slot="preview" class="tab__preview svelte-1mbqb8d"><div class="container svelte-1mbqb8d"><p class="svelte-1mbqb8d">Using line clamps provides more flexibility with text overflow but isn't based on
        the container height</p></div></div>`),s=r(`<div slot="html" class="tab__code"><!></div>`),c=r(`<div slot="css" class="tab__code"><!></div>`);function l(r){a(r,{$$slots:{preview:(e,n)=>{t(e,o())},html:(r,a)=>{var o=s();i(e(o),{language:`html`,code:`<div class="container">
  <p>Using line clamps provides more flexibility with text overflow but isn't based on the container height</p>
</div>`}),n(o),t(r,o)},css:(r,a)=>{var o=c();i(e(o),{language:`css`,code:`.container {
  border: 1px solid rgb(19 78 74 / 0.5);
  flex: none;
  padding: 0.25rem;
  width: 8rem;
}

p {
  color: rgb(55 65 81 / 0.8);
  font-size: 0.75rem;
  margin: 0;
  overflow: hidden;
  width: 100%;

  /* line clamp specific requirements */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}`}),n(o),t(r,o)}}})}export{l as component};