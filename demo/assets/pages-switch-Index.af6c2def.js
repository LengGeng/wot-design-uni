import{u as e,_ as l}from"./wd-message-box.1bbf26f9.js";import{d as a,r as o,o as u,c as t,w as n,a as d,b as s,t as i,h as m,j as c,i as v}from"./index-d8aee22c.js";import{f as r,a as f,b as p}from"./page-wraper.83fcb5aa.js";import{_ as V}from"./demo-block.4a3c27e6.js";import"./wd-input.c521d55a.js";import"./useTranslate.cac5ae85.js";import"./wd-button.280621c4.js";const g=p(a({__name:"Index",setup(a){const p=o(!0),g=o("沃特"),_=o(!0),b=o(!0),h=o(!0),j=o(!1),w=o(!1),U=e(),x=({value:e,resolve:l})=>{U.confirm("是否切换开关").then((()=>{l(!0)})).catch((()=>{l(!1)}))};function C({value:e}){console.log(e)}function k({value:e}){console.log(e)}function I({value:e}){console.log(e)}function y({value:e}){console.log(e)}function z({value:e}){console.log(e)}return(e,a)=>{const o=m(c("wd-message-box"),l),U=m(c("wd-switch"),r),B=m(c("demo-block"),V),T=v,q=m(c("page-wraper"),f);return u(),t(q,null,{default:n((()=>[d(o),d(T,null,{default:n((()=>[d(B,{title:"基本用法"},{default:n((()=>[d(U,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e),onChange:C},null,8,["modelValue"])])),_:1}),d(B,{title:"修改值 active-value 、 inactive-value"},{default:n((()=>[d(T,{style:{"margin-bottom":"10px"}},{default:n((()=>[s(i(g.value),1)])),_:1}),d(U,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e),"active-value":"沃特","inactive-value":"商家后台",onChange:k},null,8,["modelValue"])])),_:1}),d(B,{title:"自定义颜色 active-color 、 inactive-color"},{default:n((()=>[d(U,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value=e),"active-color":"#13ce66","inactive-color":"#f00",onChange:I},null,8,["modelValue"])])),_:1}),d(B,{title:"自定义大小"},{default:n((()=>[d(U,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),size:24,onChange:y},null,8,["modelValue"])])),_:1}),d(B,{title:"选中禁用"},{default:n((()=>[d(U,{modelValue:h.value,"onUpdate:modelValue":a[4]||(a[4]=e=>h.value=e),disabled:""},null,8,["modelValue"])])),_:1}),d(B,{title:"非选中禁用"},{default:n((()=>[d(U,{modelValue:j.value,"onUpdate:modelValue":a[5]||(a[5]=e=>j.value=e),disabled:""},null,8,["modelValue"])])),_:1}),d(B,{title:"before-change 修改前钩子函数"},{default:n((()=>[d(U,{modelValue:w.value,"onUpdate:modelValue":a[6]||(a[6]=e=>w.value=e),"before-change":x,onChange:z},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-e43e34c8"]]);export{g as default};
