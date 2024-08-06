import{d as a,r as s,q as t,v as e,o as l,c as d,w as n,x as o,n as u,y as f,i as r,h as p,a as c,b as _,j as i}from"./index-d8aee22c.js";import{g,m as b,h as m,b as w,a as h}from"./page-wraper.83fcb5aa.js";import{u as k}from"./useChildren.11271381.js";import{_ as v}from"./demo-block.4a3c27e6.js";const y=Symbol("wd-row"),$={...g,gutter:b(0)},x=w(a({name:"wd-col",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...g,span:b(24),offset:b(0)},setup(a){const p=a,c=s(""),{parent:_}=m(y),i=t((()=>_&&_.props.gutter||0));return e([()=>p.span,()=>p.offset],(()=>{!function(){const{span:a,offset:s}=p;(a<0||s<0)&&console.error("[wot-design] warning(wd-col): attribute span/offset must be greater than or equal to 0")}()})),e((()=>i.value),(a=>{!function(a){const s=a/2+"px",t=a>0?`padding-left: ${s}; padding-right: ${s};background-clip: content-box;`:"";t!==c.value&&(c.value=t)}(a||0)}),{deep:!0,immediate:!0}),(a,s)=>{const t=r;return l(),d(t,{class:u(["wd-col",a.span&&"wd-col__"+a.span,a.offset&&"wd-col__offset-"+a.offset,a.customClass]),style:f(c.value)},{default:n((()=>[o(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-3f71d7cf"]]),C=w(a({name:"wd-row",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:$,setup(a){const t=a,{linkChildren:p}=k(y);p({props:t});const c=s("");return e((()=>t.gutter),(()=>{!function(){const{gutter:a}=t;a<0&&console.error("[wot design] warning(wd-row): attribute gutter must be greater than or equal to 0");const s=a/2+"px",e=a?`margin-left: -${s}; margin-right: -${s};`:"";c.value=`${e}${t.customStyle}`}()}),{deep:!0,immediate:!0}),(a,s)=>{const t=r;return l(),d(t,{class:u(`wd-row ${a.customClass}`),style:f(c.value)},{default:n((()=>[o(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-9712ec04"]]);const j=w({},[["render",function(a,s){const t=r,e=p(i("wd-col"),x),o=p(i("wd-row"),C),u=p(i("demo-block"),v),f=p(i("page-wraper"),h);return l(),d(f,null,{default:n((()=>[c(u,{title:"基础用法"},{default:n((()=>[c(o,null,{default:n((()=>[c(e,{span:24},{default:n((()=>[c(t,{class:"bg-dark1"},{default:n((()=>[_("span: 24")])),_:1})])),_:1})])),_:1}),c(o,null,{default:n((()=>[c(e,{span:12},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 12")])),_:1})])),_:1}),c(e,{span:12},{default:n((()=>[c(t,{class:"bg-light"},{default:n((()=>[_("span: 12")])),_:1})])),_:1})])),_:1}),c(o,null,{default:n((()=>[c(e,{span:8},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 8")])),_:1})])),_:1}),c(e,{span:8},{default:n((()=>[c(t,{class:"bg-light"},{default:n((()=>[_("span: 8")])),_:1})])),_:1}),c(e,{span:8},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 8")])),_:1})])),_:1})])),_:1}),c(o,null,{default:n((()=>[c(e,{span:6},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 6")])),_:1})])),_:1}),c(e,{span:6},{default:n((()=>[c(t,{class:"bg-light"},{default:n((()=>[_("span: 6")])),_:1})])),_:1}),c(e,{span:6},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 6")])),_:1})])),_:1}),c(e,{span:6},{default:n((()=>[c(t,{class:"bg-light"},{default:n((()=>[_("span: 6")])),_:1})])),_:1})])),_:1})])),_:1}),c(u,{title:"分栏偏移"},{default:n((()=>[c(o,null,{default:n((()=>[c(e,{span:4},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 4")])),_:1})])),_:1}),c(e,{span:8,offset:4},{default:n((()=>[c(t,{class:"bg-light"},{default:n((()=>[_("span: 8 offset: 4")])),_:1})])),_:1})])),_:1}),c(o,null,{default:n((()=>[c(e,{span:8,offset:4},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 8 offset: 4")])),_:1})])),_:1}),c(e,{span:8,offset:4},{default:n((()=>[c(t,{class:"bg-light"},{default:n((()=>[_("span: 8 offset: 4")])),_:1})])),_:1})])),_:1})])),_:1}),c(u,{title:"分栏间隔"},{default:n((()=>[c(o,{gutter:20},{default:n((()=>[c(e,{span:8},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 8")])),_:1})])),_:1}),c(e,{span:8},{default:n((()=>[c(t,{class:"bg-light"},{default:n((()=>[_("span: 8")])),_:1})])),_:1}),c(e,{span:8},{default:n((()=>[c(t,{class:"bg-dark"},{default:n((()=>[_("span: 8")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-3e6c3d12"]]);export{j as default};
