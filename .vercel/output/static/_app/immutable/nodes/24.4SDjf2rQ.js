import{R as e,S as t,it as n,w as r}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as i,t as a}from"../chunks/Cew1FS2G.js";var o=r(`<div slot="preview" class="tab__preview svelte-adj3qb"><div class="grid svelte-adj3qb"><div class="svelte-adj3qb"><p class="svelte-adj3qb">column 1<br/>row 1</p></div> <div class="svelte-adj3qb"><p class="svelte-adj3qb">column 2<br/>row 1</p></div> <div class="svelte-adj3qb"><p class="svelte-adj3qb">column 3<br/>row 1</p></div> <div class="svelte-adj3qb"><p class="svelte-adj3qb">column 1<br/>row 2</p></div> <div class="svelte-adj3qb"><p class="svelte-adj3qb">column 2 & 3<br/>row 2</p></div></div></div>`),s=r(`<div slot="html" class="tab__code"><!></div>`),c=r(`<div slot="css" class="tab__code"><!></div>`);function l(r){a(r,{$$slots:{preview:(e,n)=>{t(e,o())},html:(r,a)=>{var o=s();i(e(o),{language:`html`,code:`<div class="grid">
<div><p>column 1<br />row 1</p></div>

<div><p>column 2<br />row 1</p></div>

<div><p>column 3<br />row 1</p></div>

<div><p>column 1<br />row 2</p></div>

<div><p>column 2 & 3<br />row 2</p></div>
</div>`}),n(o),t(r,o)},css:(r,a)=>{var o=c();i(e(o),{language:`css`,code:`.grid {
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
}`}),n(o),t(r,o)}}})}export{l as component};