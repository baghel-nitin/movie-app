"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[800],{800:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var s=l(791),a=l(434),n=l(294),c=l(748);const o=(e,t)=>async l=>{l((0,c.K4)(!0));try{let s=(await n.Z.get("https://test.create.diagnal.com/data/page".concat(e,".json"))).data.page;l((0,c.bp)(s)),t((e=>e+1))}catch(s){l((0,c.K4)(!1)),console.log(s)}l((0,c.K4)(!1))};var r=l(184);const i=(0,s.lazy)((()=>l.e(577).then(l.bind(l,577)))),d=(0,s.lazy)((()=>l.e(246).then(l.bind(l,246)))),u=(0,s.lazy)((()=>l.e(605).then(l.bind(l,605)))),f=()=>{const[e,t]=(0,s.useState)(1),[l,n]=(0,s.useState)("");const[f,h]=(0,s.useState)([]),m=(0,a.I0)(),{data:p,totalRecords:v,title:g,loading:x}=(0,a.v9)((e=>e.movies)),w=(0,s.useCallback)((async()=>{m(o(e,t))}),[e,m]);(0,s.useEffect)((()=>(m(o(e,t)),()=>{(0,c.Nk)()})),[]),(0,s.useEffect)((()=>{h(p)}),[p]),(0,s.useEffect)((()=>{const e=()=>{if(p.length===+v)return;const{scrollTop:e,clientHeight:t,scrollHeight:l}=document.documentElement;e+t>=l-20&&w()};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[p.length,w,v]);return(0,r.jsx)("div",{className:"flex w-full flex-col self-center",children:(0,r.jsxs)("div",{className:"flex w-full flex-col justify-center",children:[(0,r.jsx)(i,{title:g,searchValue:l,handleSearch:e=>{const{value:t}=e.target;if(n(t),!t.length)return void h(p);const l=[...p].filter((e=>e.name.toLowerCase().includes(t.toLowerCase())));h(l)}}),(0,r.jsxs)("div",{className:"mx-1 mt-10 flex flex-wrap justify-center gap-2 self-center md:mx-8 y9:gap-5 ",children:[null===f||void 0===f?void 0:f.map(((e,t)=>(0,r.jsx)(d,{item:e},t))),x&&(0,r.jsx)(u,{})]})]})})}}}]);
//# sourceMappingURL=800.7a308018.chunk.js.map