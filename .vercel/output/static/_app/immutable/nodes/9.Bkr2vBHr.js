import{$ as e,B as t,K as n,R as r,S as i,b as a,c as o,et as s,f as c,it as l,o as u,q as d,w as f,z as p}from"../chunks/BjW1HMUo.js";import"../chunks/xihTtKlq.js";import"../chunks/Dc3nDKb_.js";import{n as m,r as h,t as g}from"../chunks/Cew1FS2G.js";var _=f(`<div></div> <div><button><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button> <h2>Dialog title</h2> <p>Dialog description</p></div>`,1),v=f(`<div slot="preview"><button>open dialog</button> <div><!></div></div>`),y=f(`<div slot="html" class="tab__code"><!></div>`),b=f(`<div slot="css" class="tab__code"><!></div>`);function x(f,x){s(x,!1);let S=()=>d(M,`$trigger`,A),C=()=>d(R,`$portalled`,A),w=()=>d(z,`$open`,A),T=()=>d(N,`$overlay`,A),E=()=>d(P,`$content`,A),D=()=>d(L,`$close`,A),O=()=>d(F,`$title`,A),k=()=>d(I,`$description`,A),[A,j]=n(),{elements:{trigger:M,overlay:N,content:P,title:F,description:I,close:L,portalled:R},states:{open:z}}=h({forceVisible:!0});u(),g(f,{tabs:[`preview`,`html`,`css`],$$slots:{preview:(e,n)=>{var s=v(),u=r(s);o(u,()=>({...S(),class:`open-dialog`}),void 0,void 0,void 0,`svelte-16rz71x`),c(u,e=>M?.(e));var d=t(u,2);o(d,()=>({...C()}),void 0,void 0,void 0,`svelte-16rz71x`);var f=r(d),m=e=>{var n=_(),a=p(n);o(a,()=>({...T(),class:`overlay`}),void 0,void 0,void 0,`svelte-16rz71x`),c(a,e=>N?.(e));var s=t(a,2);o(s,()=>({...E(),class:`content`}),void 0,void 0,void 0,`svelte-16rz71x`);var u=r(s);o(u,()=>({...D(),class:`close-dialog`,"aria-label":`close dialog`}),void 0,void 0,void 0,`svelte-16rz71x`),c(u,e=>L?.(e));var d=t(u,2);o(d,()=>({...O(),class:`title`}),void 0,void 0,void 0,`svelte-16rz71x`),c(d,e=>F?.(e));var f=t(d,2);o(f,()=>({...k(),class:`description`}),void 0,void 0,void 0,`svelte-16rz71x`),c(f,e=>I?.(e)),l(s),c(s,e=>P?.(e)),i(e,n)};a(f,e=>{w()&&e(m)}),l(d),c(d,e=>R?.(e)),l(s),i(e,s)},html:(e,t)=>{var n=y();m(r(n),{language:`html`,code:`<div>
  <button type="button" aria-haspopup="dialog" aria-controls="popup-id" aria-expanded="false">open dialog</button>
  <div id="popup-id">
    <!-- popup content goes here -->
  </div>
</div>`}),l(n),i(e,n)},css:(e,t)=>{var n=b();m(r(n),{language:`css`,code:`button {
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
}`}),l(n),i(e,n)}}}),e(),j()}export{x as component};