import{_ as l,a as e}from"./wd-sidebar.9b619710.js";import{d as a,r as t,m as s,o as i,c as o,w as r,a as u,e as d,f as n,F as c,h as m,j as p,i as b,a4 as f}from"./index-d8aee22c.js";import{H as v,c as _,_ as w,a as g,b as h}from"./page-wraper.83fcb5aa.js";import{_ as j}from"./wd-cell-group.b6f02a81.js";import"./wd-badge.a2c9988e.js";import"./useChildren.11271381.js";const y=h(a({__name:"demo1",setup(a){const h=t(1),y=t(0),x=t([]),k=new Array(24).fill({title:"标题文字",label:"这是描述这是描述"},0,24),V=t([{label:"分类一",title:"标题一",items:k},{label:"分类二",title:"标题二",items:k},{label:"分类三",title:"标题三",items:k.slice(0,18)},{label:"分类四",title:"标题四",items:k.slice(0,21)},{label:"分类五",title:"标题五",items:k},{label:"分类六",title:"标题六",items:k.slice(0,18)},{label:"分类七",title:"标题七",items:k}]);function C({value:l}){h.value=l,y.value=x.value[l]}function I(l){const{scrollTop:e}=l.detail;if(e<50)return void(h.value=0);const a=x.value.findIndex((l=>l>e&&l-e<=50));a>-1&&(h.value=a)}return s((()=>{v(".category",!0).then((l=>{x.value=l.map((l=>l.top||0)),y.value=l[h.value].top||0}))})),(a,t)=>{const s=m(p("wd-sidebar-item"),l),v=m(p("wd-sidebar"),e),x=m(p("wd-icon"),_),k=m(p("wd-cell"),w),q=m(p("wd-cell-group"),j),z=b,A=f,F=m(p("page-wraper"),g);return i(),o(F,null,{default:r((()=>[u(z,{class:"wraper"},{default:r((()=>[u(v,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=l=>h.value=l),onChange:C},{default:r((()=>[(i(!0),d(c,null,n(V.value,((l,e)=>(i(),o(s,{key:e,value:e,label:l.label},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),u(A,{class:"content","scroll-y":"","scroll-with-animation":"","scroll-top":y.value,throttle:!1,onScroll:I},{default:r((()=>[(i(!0),d(c,null,n(V.value,((l,e)=>(i(),o(z,{key:e,class:"category"},{default:r((()=>[u(q,{title:l.title,border:""},{default:r((()=>[(i(!0),d(c,null,n(l.items,((l,e)=>(i(),o(k,{key:e,title:l.title,label:l.label},{default:r((()=>[u(x,{name:"github-filled",size:"24px"})])),_:2},1032,["title","label"])))),128))])),_:2},1032,["title"])])),_:2},1024)))),128))])),_:1},8,["scroll-top"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-9ffe2939"]]);export{y as default};
