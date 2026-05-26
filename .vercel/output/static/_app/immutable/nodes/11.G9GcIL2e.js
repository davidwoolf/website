import{R as e,S as t,it as n,w as r}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as i,t as a}from"../chunks/Cew1FS2G.js";var o=r(`<div slot="preview"><div class="preview__content svelte-1kmuwpd"><p class="svelte-1kmuwpd"><button>click me</button> <span class="svelte-1kmuwpd">baseline styles</span></p> <hr class="svelte-1kmuwpd"/> <p class="svelte-1kmuwpd"><button class="button__unset svelte-1kmuwpd">click me</button> <span class="svelte-1kmuwpd">all set to "unset"</span></p> <hr class="svelte-1kmuwpd"/> <p class="svelte-1kmuwpd"><button class="button__appearance-none svelte-1kmuwpd">click me</button> <span class="svelte-1kmuwpd">appearance set to "none"</span></p> <hr class="svelte-1kmuwpd"/> <p class="svelte-1kmuwpd"><button class="button__manually-reset svelte-1kmuwpd">click me</button> <span class="svelte-1kmuwpd">individual properties reset</span></p></div></div>`),s=r(`<div slot="html" class="tab__code"><!></div>`),c=r(`<div slot="css" class="tab__code"><!></div>`);function l(r){a(r,{$$slots:{preview:(e,n)=>{t(e,o())},html:(r,a)=>{var o=s();i(e(o),{language:`html`,code:`<button>click me</button>
<button class="unset">click me</button>
<button class="appearance--none">click me</button>
<button class="manually--reset">click me</button>`}),n(o),t(r,o)},css:(r,a)=>{var o=c();i(e(o),{language:`css`,code:`.unset {
  all: unset;
  outline: revert; /* keep this for keyboard focus */
}

.appearance--none {
  appearance: none;
}

.manually--reset {
  background: none;
  border: none;
  padding: 0;
}
`}),n(o),t(r,o)}}})}export{l as component};