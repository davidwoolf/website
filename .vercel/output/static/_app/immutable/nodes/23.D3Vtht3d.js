import{R as e,S as t,it as n,w as r}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as i,t as a}from"../chunks/Cew1FS2G.js";var o=r(`<div slot="preview" class="tab__preview svelte-tfwmpx"><div class="row svelte-tfwmpx"><div class="box portrait svelte-tfwmpx"><p class="svelte-tfwmpx">1 / 2</p></div> <div class="box square svelte-tfwmpx"><div></div> <p class="svelte-tfwmpx">1 / 1</p></div> <div class="box landscape svelte-tfwmpx"><p class="svelte-tfwmpx">2 / 1</p></div></div></div>`),s=r(`<div slot="html" class="tab__code"><!></div>`),c=r(`<div slot="css" class="tab__code"><!></div>`);function l(r){a(r,{$$slots:{preview:(e,n)=>{t(e,o())},html:(r,a)=>{var o=s();i(e(o),{language:`html`,code:`<div class="row">
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
</div>`}),n(o),t(r,o)},css:(r,a)=>{var o=c();i(e(o),{language:`css`,code:`.row {
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
}`}),n(o),t(r,o)}}})}export{l as component};