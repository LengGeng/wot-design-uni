import{a3 as e,t as s,g as t,x as a,l as o,i as l,b as n,d as i,e as r,a as u}from"./page-wraper.83fcb5aa.js";import{r as c,q as m,S as d,d as f,v as p,o as h,c as v,w,x as S,u as _,e as g,F as k,b as y,t as H,n as b,y as x,i as D,a as M,a7 as j,h as F,j as I}from"./index-d8aee22c.js";import{_ as C}from"./demo-block.4a3c27e6.js";import{_ as A,a as $}from"./wd-grid.b2da9877.js";import"./wd-badge.a2c9988e.js";import"./useChildren.11271381.js";const q=1e3,G=60*q,N=60*G,z=24*N;function B(e){return requestAnimationFrame(e)}function E(e){let t,a,o=null;const l=c(e.time),n=m((()=>{return{total:e=l.value,days:Math.floor(e/z),hours:Math.floor(e%z/N),minutes:Math.floor(e%N/G),seconds:Math.floor(e%G/q),milliseconds:Math.floor(e%q)};var e})),i=()=>{a=!1,cancelAnimationFrame(o)},r=()=>Math.max(t-Date.now(),0),u=t=>{l.value=t,s(e.onChange)&&e.onChange(n.value),0===t&&(i(),s(e.onFinish)&&e.onFinish())},f=()=>{o=B((()=>{a&&(u(r()),l.value>0&&f())}))},p=()=>{o=B((()=>{if(a){const t=r();e=t,s=l.value,(Math.floor(e/1e3)!==Math.floor(s/1e3)||0===t)&&u(t),l.value>0&&p()}var e,s}))};return d(i),{start:()=>{a||(t=Date.now()+l.value,a=!0,e.millisecond?f():p())},pause:i,reset:(s=e.time)=>{i(),l.value=s},current:n}}const J=n(f({name:"wd-count-down",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...t,time:a(Number),millisecond:o(!1),format:l("HH:mm:ss"),autoStart:o(!0)},emits:["change","finish"],setup(s,{expose:t,emit:a}){const o=s,{start:l,pause:n,reset:i,current:r}=E({time:o.time,millisecond:o.millisecond,onChange:e=>a("change",e),onFinish:()=>a("finish")}),u=m((()=>function(s,t){const{days:a}=t;let{hours:o,minutes:l,seconds:n,milliseconds:i}=t;if(s.includes("DD")?s=s.replace("DD",e(a)):o+=24*a,s.includes("HH")?s=s.replace("HH",e(o)):l+=60*o,s.includes("mm")?s=s.replace("mm",e(l)):n+=60*l,s.includes("ss")?s=s.replace("ss",e(n)):i+=1e3*n,s.includes("S")){const t=e(i,3);s=s.includes("SSS")?s.replace("SSS",t):s.includes("SS")?s.replace("SS",t.slice(0,2)):s.replace("S",t.charAt(0))}return s}(o.format,r.value))),c=()=>{i(o.time),o.autoStart&&l()};return p((()=>o.time),c,{immediate:!0}),t({start:l,pause:n,reset:c}),(e,s)=>{const t=D;return h(),v(t,{class:b(`wd-count-down ${e.customClass}`),style:x(e.customStyle)},{default:w((()=>[e.$slots.default?S(e.$slots,"default",{key:0,current:_(r)},void 0,!0):(h(),g(k,{key:1},[y(H(_(u)),1)],64))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-9d337e25"]]),K=n(f({__name:"Index",setup(e){const{show:s}=i(),t=c(108e6),a=c(null),o=()=>{a.value.start()},l=()=>{a.value.pause()},n=()=>{a.value.reset()},m=()=>s("倒计时结束");return(e,s)=>{const i=F(I("wd-toast"),r),c=F(I("wd-count-down"),J),d=F(I("demo-block"),C),f=F(I("wd-grid-item"),A),p=F(I("wd-grid"),$),S=F(I("page-wraper"),u);return h(),v(S,null,{default:w((()=>[M(i),M(d,{title:"基本用法"},{default:w((()=>[M(c,{time:t.value},null,8,["time"])])),_:1}),M(d,{title:"自定义格式"},{default:w((()=>[M(c,{time:t.value,format:"DD 天 HH 时 mm 分 ss 秒"},null,8,["time"])])),_:1}),M(d,{title:"毫秒级渲染"},{default:w((()=>[M(c,{time:t.value,millisecond:"",format:"HH:mm:ss:SS"},null,8,["time"])])),_:1}),M(d,{title:"自定义样式"},{default:w((()=>[M(c,{time:t.value},{default:w((({current:e})=>[j("span",{class:"custom-count-down"},H(e.hours),1),j("span",{class:"custom-count-down-colon"},":"),j("span",{class:"custom-count-down"},H(e.minutes),1),j("span",{class:"custom-count-down-colon"},":"),j("span",{class:"custom-count-down"},H(e.seconds),1)])),_:1},8,["time"])])),_:1}),M(d,{title:"手动控制"},{default:w((()=>[M(c,{ref_key:"countDown",ref:a,time:3e3,millisecond:"","auto-start":!1,format:"ss:SSS",onFinish:m},null,512),M(p,{clickable:"",border:""},{default:w((()=>[M(f,{text:"开始",icon:"play-circle-stroke",onItemclick:o}),M(f,{text:"暂停",icon:"pause-circle",onItemclick:l}),M(f,{text:"重置",icon:"refresh",onItemclick:n})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-aa320b6d"]]);export{K as default};
