import{R as e,S as t,it as n,w as r}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as i,t as a}from"../chunks/Cew1FS2G.js";var o=r(`<div slot="preview" class="tab__preview svelte-r137v6"><p class="svelte-r137v6">I am the main body of text, set at 1rem <br/> <span class="svelte-r137v6">I am less important text, set at .75em</span></p></div>`),s=r(`<div slot="html" class="tab__code"><!></div>`),c=r(`<div slot="css" class="tab__code"><!></div>`);function l(r){a(r,{$$slots:{preview:(e,n)=>{t(e,o())},html:(r,a)=>{var o=s();i(e(o),{language:`html`,code:`<p>
  I am the main body of text, set at 1rem <br />
  <span>I am less important text, set at .75em</span>
</p>`}),n(o),t(r,o)},css:(r,a)=>{var o=c();i(e(o),{language:`css`,code:`p {
  font-size: 1rem;
}

/* max will always take the biggest value from a list of options */
span {
  font-size: max(0.625rem, 0.75em);
}`}),n(o),t(r,o)}}})}export{l as component};