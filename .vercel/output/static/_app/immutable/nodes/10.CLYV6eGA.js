import{E as e,H as t,O as n,P as r,R as i,S as a,V as o,it as s,l as c,w as l,x as u}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as d,t as f}from"../chunks/Cew1FS2G.js";var p=l(`<div slot="preview"><button type="button" class="svelte-piz1pc"> </button></div>`),m=l(`<div slot="html" class="tab__code"><!></div>`),h=l(`<div slot="css" class="tab__code"><!></div>`);function g(l){let g=o(!1);f(l,{tabs:[`preview`,`html`,`css`],$$slots:{preview:(o,l)=>{var d=p(),f=i(d),m=i(f,!0);s(f),s(d),r(()=>{c(f,`aria-pressed`,n(g)),u(m,n(g)?`untoggle me`:`toggle me`)}),e(`click`,f,()=>{t(g,!n(g))}),a(o,d)},html:(e,t)=>{var n=m();d(i(n),{language:`html`,code:`<button type="button" aria-pressed="false">toggle me</button>`}),s(n),a(e,n)},css:(e,t)=>{var n=h();d(i(n),{language:`css`,code:`button {
  all: unset;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  font-size: 0.875rem;
  font-weight: 500;
  height: 2rem;
  padding: 0 1rem;
  outline: revert;
}

button[aria-pressed="true"] {
  background: #f6f6f6;
  box-shadow: inset 0 1px 4px rgb(0 0 0 / 0.1);
}`}),s(n),a(e,n)}}})}export{g as component};