import{_ as l,a as e}from"./wd-sidebar.9b619710.js";import{d as a,r as t,m as i,o,c as s,w as n,a as r,e as u,f as c,F as d,h as m,j as p,i as b,a4 as f}from"./index-d8aee22c.js";import{H as v,c as _,_ as w,a as g,b as h}from"./page-wraper.83fcb5aa.js";import{_ as j}from"./wd-cell-group.b6f02a81.js";import"./wd-badge.a2c9988e.js";import"./useChildren.11271381.js";const y=h(a({__name:"demo3",setup(a){const h=t(1),y=t(0),x=t([]),k=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),V=t([{label:"分类一",title:"标题一",icon:"thumb-up",items:k},{label:"分类二",title:"标题二",icon:"qrcode",items:k},{label:"分类三",title:"标题三",icon:"location",items:k.slice(0,18)},{label:"分类四",title:"标题四",icon:"ie",items:k.slice(0,21)},{label:"分类五",title:"标题五",icon:"github-filled",items:k},{label:"分类六",title:"标题六",icon:"chrome",items:k.slice(0,18)},{label:"分类七",title:"标题七",icon:"android",items:k}]);function q({value:l}){h.value=l,y.value=x.value[l]}function C(l){const{scrollTop:e}=l.detail;if(e<50)return void(h.value=0);const a=x.value.findIndex((l=>l>e&&l-e<=50));a>-1&&(h.value=a)}return i((()=>{v(".category",!0).then((l=>{x.value=l.map((l=>l.top||0)),y.value=l[h.value].top||0}))})),(a,t)=>{const i=m(p("wd-sidebar-item"),l),v=m(p("wd-sidebar"),e),x=m(p("wd-icon"),_),k=m(p("wd-cell"),w),I=m(p("wd-cell-group"),j),z=b,A=f,F=m(p("page-wraper"),g);return o(),s(F,null,{default:n((()=>[r(z,{class:"wraper"},{default:n((()=>[r(v,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=l=>h.value=l),onChange:q},{default:n((()=>[(o(!0),u(d,null,c(V.value,((l,e)=>(o(),s(i,{key:e,value:e,label:l.label,icon:l.icon},null,8,["value","label","icon"])))),128))])),_:1},8,["modelValue"]),r(A,{class:"content","scroll-y":"","scroll-with-animation":"","scroll-top":y.value,throttle:!1,onScroll:C},{default:n((()=>[(o(!0),u(d,null,c(V.value,((l,e)=>(o(),s(z,{key:e,class:"category"},{default:n((()=>[r(I,{title:l.title,border:""},{default:n((()=>[(o(!0),u(d,null,c(l.items,((l,e)=>(o(),s(k,{key:e,title:l.title,label:l.label},{default:n((()=>[r(x,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["scroll-top"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-c5a50ff4"]]);export{y as default};
