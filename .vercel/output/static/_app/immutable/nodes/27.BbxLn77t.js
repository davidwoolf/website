import{R as e,S as t,it as n,w as r}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as i,t as a}from"../chunks/Cew1FS2G.js";var o=r(`<div slot="preview" class="tab__preview svelte-m9z6mp"><div class="word-spacing-container svelte-m9z6mp"><div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div></div> <p class="svelte-m9z6mp">the boxes are inline block and the parent has word spacing set to 1rem</p> <div class="letter-spacing-container svelte-m9z6mp"><div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div></div> <p class="svelte-m9z6mp">the boxes are inline block and the parent has letter spacing set to 1rem</p> <div class="line-height-container svelte-m9z6mp"><div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div> <div class="box svelte-m9z6mp"></div></div> <p class="svelte-m9z6mp">the boxes are inline block and the parent has the line height set to 3rem</p></div>`),s=r(`<div slot="html" class="tab__code"><!></div>`),c=r(`<div slot="css" class="tab__code"><!></div>`);function l(r){a(r,{$$slots:{preview:(e,n)=>{t(e,o())},html:(r,a)=>{var o=s();i(e(o),{language:`html`,code:`<div class="word-spacing-container">
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

<p>the boxes are inline block and the parent has the line height set to 3rem</p>`}),n(o),t(r,o)},css:(r,a)=>{var o=c();i(e(o),{language:`css`,code:`p {
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
}`}),n(o),t(r,o)}}})}export{l as component};