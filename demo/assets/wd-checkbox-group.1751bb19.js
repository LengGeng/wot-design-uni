import{d as e,v as s,o as a,c as o,w as t,x as n,n as l,y as r,i as c}from"./index-d8aee22c.js";import{S as i,q as u,b as m}from"./page-wraper.83fcb5aa.js";import{u as d}from"./useChildren.11271381.js";import{c as p,C as h}from"./wd-checkbox.cc6d4dc9.js";const b=m(e({name:"wd-checkbox-group",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:p,emits:["change","update:modelValue"],setup(e,{emit:m}){const p=e,{linkChildren:b}=d(h);return b({props:p,changeSelectState:function(e){const s=i(p.modelValue),a=s.indexOf(e);a>-1?s.splice(a,1):s.push(e);m("update:modelValue",s),m("change",{value:s})}}),s((()=>p.modelValue),(e=>{new Set(e).size!==e.length&&console.error("checkboxGroup's bound value includes same value"),e.length<p.min&&console.error("checkboxGroup's bound value's length can't be less than min"),0!==p.max&&e.length>p.max&&console.error("checkboxGroup's bound value's length can't be large than max")}),{deep:!0,immediate:!0}),s((()=>p.shape),(e=>{const s=["circle","square","button"];-1===s.indexOf(e)&&console.error(`shape must be one of ${s.toString()}`)}),{deep:!0,immediate:!0}),s((()=>p.min),(e=>{u(e,"min")}),{deep:!0,immediate:!0}),s((()=>p.max),(e=>{u(e,"max")}),{deep:!0,immediate:!0}),(e,s)=>{const i=c;return a(),o(i,{class:l(`wd-checkbox-group ${"button"===e.shape&&e.cell?"is-button":""} ${e.customClass}`),style:r(e.customStyle)},{default:t((()=>[n(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-00f36f16"]]);export{b as _};
