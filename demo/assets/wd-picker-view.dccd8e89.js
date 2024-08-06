import{g as e,l as a,i as l,m as n,K as t,r as s,R as o,s as u,o as i,Q as r,t as c,S as d,T as m,b as v}from"./page-wraper.83fcb5aa.js";import{d as g,r as h,v as p,h as f,j as y,o as w,c as b,w as k,a as _,p as x,y as C,e as K,F as $,f as S,n as I,b as E,t as P,a6 as V,i as O,a8 as j,a9 as D,J as H}from"./index-d8aee22c.js";function T(e,a,l){let n=s(e)?e:[e];const t=new Set(e.map(o));if(1!==t.size&&t.has("object"))throw Error("The columns are correct");s(e[0])||(n=[n]);return n.map((e=>e.map((e=>{if(!u(e))return{[a]:e,[l]:e};if(!e.hasOwnProperty(a)&&!e.hasOwnProperty(l))throw Error("Can't find valueKey and labelKey in columns");return e.hasOwnProperty(l)||(e[l]=e[a]),e.hasOwnProperty(a)||(e[a]=e[l]),e}))))}const A=v(g({name:"wd-picker-view",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...e,loading:a(!1),loadingColor:l("#4D80F0"),columnsHeight:n(217),valueKey:l("value"),labelKey:l("label"),immediateChange:a(!1),modelValue:{type:[String,Number,Boolean,Array,Array,Array],default:"",required:!0},columns:t(),columnChange:Function},emits:["change","pickstart","pickend","update:modelValue"],setup(e,{expose:a,emit:l}){const n=e,t=h([]),u=h(35),v=h([]);p([()=>n.modelValue,()=>n.columns],((e,a)=>{r(a[1],e[1])||(t.value=T(e[1],n.valueKey,n.labelKey)),!r(a[0],e[0])&&c(e[0])&&function(e){if(0===t.value.length)return;(""===e||!c(e)||s(e)&&0===e.length)&&(e=t.value.map((e=>e[0][n.valueKey])));const a=o(e),l=["string","number","boolean","array"];-1===l.indexOf(a)&&console.error(`value must be one of ${l.toString()}`);e=(e=s(e)?e:[e]).slice(0,t.value.length);let u=d(v.value);e.forEach(((e,a)=>{let l=t.value[a].findIndex((a=>a[n.valueKey].toString()===e.toString()));l=-1===l?0:l,u=A(a,l,u)})),v.value=u.slice(0,e.length)}(e[0])}),{deep:!0,immediate:!0});const{proxy:g}=H();function A(e,a,l){const n=t.value[e];if(!n||!n[a])throw Error(`The value to select with Col:${e} Row:${a} is incorrect`);const s=d(l);if(s[e]=a,n[a].disabled){const l=n.slice(0,a).reverse().findIndex((e=>!e.disabled)),t=n.slice(a+1).findIndex((e=>!e.disabled));-1!==l?s[e]=a-1-l:-1!==t?s[e]=a+1+t:void 0===s[e]&&(s[e]=0)}return s}function F({detail:{value:e}}){const a=function(e){e=e.slice(0,t.value.length);const a=d(v.value);let l=d(v.value);e.forEach(((e,n)=>{(e=m(e,0,t.value[n].length-1))!==a[n]&&(l=A(n,e,l))}));const n=function(e,a){if(!e||!a)return-1;const l=e.findIndex(((e,l)=>e!==a[l]));return l}(l,a);if(-1===n)return;const s=l[n];return 1===l.length?s:n}(e=e.map((e=>Number(e||0))));v.value=d(e),V((()=>{v.value=function(e){let a=d(e);return e.forEach(((e,l)=>{e=m(e,0,t.value[l].length-1),a=A(l,e,a)})),a}(e),n.columnChange?n.columnChange.length<4?(n.columnChange(g.$.exposed,R(),a||0,(()=>{})),N(a||0)):n.columnChange(g.$.exposed,R(),a||0,(()=>{N(a||0)})):N(a||0)}))}function N(e){const a=q();r(a,n.modelValue)||(l("update:modelValue",a),setTimeout((()=>{l("change",{picker:g.$.exposed,value:a,index:e})}),0))}function R(){const e=v.value.map(((e,a)=>t.value[a][e]));return 1===e.length?e[0]:e}function q(){const{valueKey:e}=n,a=v.value.map(((a,l)=>t.value[l][a][e]));return 1===a.length?a[0]:a}function z(){l("pickstart")}function B(){l("pickend")}return a({getSelects:R,getValues:q,setColumnData:function(e,a,l=0){t.value[e]=T(a,n.valueKey,n.labelKey).reduce(((e,a)=>e.concat(a)),[]),v.value=A(e,l,v.value)},getColumnsData:function(){return d(t.value)},getColumnData:function(e){return t.value[e]},getColumnIndex:function(e){return v.value[e]},getLabels:function(){const{labelKey:e}=n;return v.value.map(((a,l)=>t.value[l][a][e]))},getSelectedIndex:function(){return v.value}}),(e,a)=>{const l=f(y("wd-loading"),i),n=O,s=j,o=D;return w(),b(n,{class:I(`wd-picker-view ${e.customClass}`),style:C(e.customStyle)},{default:k((()=>[e.loading?(w(),b(n,{key:0,class:"wd-picker-view__loading"},{default:k((()=>[_(l,{color:e.loadingColor},null,8,["color"])])),_:1})):x("",!0),_(n,{style:C(`height: ${e.columnsHeight-20}px;`)},{default:k((()=>[_(o,{"mask-class":"wd-picker-view__mask","indicator-class":"wd-picker-view__roller","indicator-style":`height: ${u.value}px;`,style:C(`height: ${e.columnsHeight-20}px;`),value:v.value,"immediate-change":e.immediateChange,onChange:F,onPickstart:z,onPickend:B},{default:k((()=>[(w(!0),K($,null,S(t.value,((a,l)=>(w(),b(s,{key:l,class:"wd-picker-view-column"},{default:k((()=>[(w(!0),K($,null,S(a,((a,t)=>(w(),b(n,{key:t,class:I(`wd-picker-view-column__item ${a.disabled?"wd-picker-view-column__item--disabled":""}  ${v.value[l]==t?"wd-picker-view-column__item--active":""}`),style:C(`line-height: ${u.value}px;`)},{default:k((()=>[E(P(a[e.labelKey]),1)])),_:2},1032,["class","style"])))),128))])),_:2},1024)))),128))])),_:1},8,["indicator-style","style","value","immediate-change"])])),_:1},8,["style"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-1c10d614"]]);export{A as _,T as f};
