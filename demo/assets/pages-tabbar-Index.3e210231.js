import{g as e,w as a,l as t,i as o,m as l,D as s,h as i,X as n,Y as r,t as d,p as u,c,Z as m,b as p,v,H as h,d as f,e as b,a as _}from"./page-wraper.83fcb5aa.js";import{d as g,q as V,h as w,j as x,o as y,c as C,w as I,a as $,an as j,ao as S,u as U,x as k,p as B,y as A,n as z,b as D,t as H,g as N,i as P,r as G,v as q,m as J,a6 as O,J as X}from"./index-d8aee22c.js";import{_ as Y}from"./wd-badge.a2c9988e.js";import{u as Z}from"./useChildren.11271381.js";import{_ as E}from"./demo-block.4a3c27e6.js";import{_ as F}from"./wd-img.471759f7.js";const K=Symbol("wd-tabbar"),L={...e,modelValue:a(0),fixed:t(!1),bordered:t(!0),safeAreaInsetBottom:t(!1),shape:o("default"),activeColor:String,inactiveColor:String,placeholder:t(!1),zIndex:l(99)},M=p(g({name:"wd-tabbar-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,title:String,name:s,icon:String,value:{type:[Number,String,null],default:null},isDot:{type:Boolean,default:void 0},max:Number,badgeProps:Object},setup(e){const a=e,{parent:t,index:o}=i(K),l=V((()=>{const e=n(d(a.badgeProps)?r(a.badgeProps,m):{},r({max:a.max,isDot:a.isDot,modelValue:a.value},m));return d(e.max)||(e.max=99),e})),s=V((()=>{const e={};return t&&(p.value&&t.props.activeColor&&(e.color=t.props.activeColor),!p.value&&t.props.inactiveColor&&(e.color=t.props.inactiveColor)),`${u(e)}`})),p=V((()=>{const e=d(a.name)?a.name:o.value;return!!t&&t.props.modelValue===e}));function v(){const e=d(a.name)?a.name:o.value;t&&t.setChange({name:e})}return(e,a)=>{const t=w(x("wd-icon"),c),o=N,i=P,n=w(x("wd-badge"),Y);return y(),C(i,{class:z(`wd-tabbar-item ${e.customClass}`),style:A(e.customStyle),onClick:v},{default:I((()=>[$(n,j(S(U(l))),{default:I((()=>[$(i,{class:"wd-tabbar-item__body"},{default:I((()=>[k(e.$slots,"icon",{active:U(p)},void 0,!0),!e.$slots.icon&&e.icon?(y(),C(t,{key:0,name:e.icon,"custom-style":U(s),"custom-class":"wd-tabbar-item__body-icon "+(U(p)?"is-active":"is-inactive")},null,8,["name","custom-style","custom-class"])):B("",!0),e.title?(y(),C(o,{key:1,style:A(U(s)),class:z("wd-tabbar-item__body-title "+(U(p)?"is-active":"is-inactive"))},{default:I((()=>[D(H(e.title),1)])),_:1},8,["style","class"])):B("",!0)])),_:3})])),_:3},16)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-7505d18d"]]),Q=p(g({name:"wd-tabbar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:L,emits:["change","update:modelValue"],setup(e,{emit:a}){const t=e,o=G(""),{proxy:l}=X(),{linkChildren:s}=Z(K);s({props:t,setChange:function(e){let t=e.name;a("update:modelValue",t),a("change",{value:t})}});const i=V((()=>{const e={};return d(t.zIndex)&&(e["z-index"]=t.zIndex),`${u(e)};${t.customStyle}`}));function n(){t.fixed&&t.placeholder&&h(".wd-tabbar",!1,l).then((e=>{o.value=Number(e.height)}))}return q([()=>t.fixed,()=>t.placeholder],(()=>{n()}),{deep:!0,immediate:!1}),J((()=>{t.fixed&&t.placeholder&&O((()=>{n()}))})),(e,a)=>{const t=P;return y(),C(t,{class:z({"wd-tabbar__placeholder":e.fixed&&e.placeholder&&e.safeAreaInsetBottom&&"round"===e.shape}),style:A({height:U(v)(o.value)})},{default:I((()=>[$(t,{class:z(`wd-tabbar wd-tabbar--${e.shape} ${e.customClass} ${e.fixed?"is-fixed":""} ${e.safeAreaInsetBottom?"is-safe":""} ${e.bordered?"is-border":""}`),style:A(U(i))},{default:I((()=>[k(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-2ae6eb08"]]),R=p(g({__name:"Index",setup(e){const{show:a}=f(),t=G(1),o=G("home"),l=G(2),s=G(2),i=G(1),n=G(1),r=G(1),d=G(1);function u(e){console.log(e)}function c({value:e}){a(`选中标签:${e}`)}return(e,a)=>{const m=w(x("wd-toast"),b),p=w(x("wd-tabbar-item"),M),v=w(x("wd-tabbar"),Q),h=w(x("demo-block"),E),f=w(x("wd-img"),F),g=w(x("page-wraper"),_);return y(),C(g,{safeAreaInsetBottom:!1},{default:I((()=>[$(m),$(h,{hor:"0",title:"基础用法",transparent:""},{default:I((()=>[$(v,{bordered:"",onChange:u,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},{default:I((()=>[$(p,{title:"首页",icon:"home"}),$(p,{title:"分类",icon:"cart"}),$(p,{title:"我的",icon:"user"})])),_:1},8,["modelValue"])])),_:1}),$(h,{hor:"0",title:"通过名称匹配",transparent:""},{default:I((()=>[$(v,{bordered:"",onChange:u,modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e)},{default:I((()=>[$(p,{name:"home",title:"首页",icon:"home"}),$(p,{name:"cart",title:"分类",icon:"cart"}),$(p,{name:"setting",title:"设置",icon:"setting"}),$(p,{name:"user",title:"我的",icon:"user"})])),_:1},8,["modelValue"])])),_:1}),$(h,{hor:"0",title:"徽标提示",transparent:""},{default:I((()=>[$(v,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value=e),onChange:u},{default:I((()=>[$(p,{"is-dot":"",value:2,title:"点状",icon:"home"}),$(p,{value:2,icon:"cart",title:"分类"}),$(p,{value:30,title:"我的",icon:"user"}),$(p,{value:200,title:"最大值",icon:"user"})])),_:1},8,["modelValue"])])),_:1}),$(h,{hor:"0",title:"悬浮标签栏",transparent:""},{default:I((()=>[$(v,{shape:"round",modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=e=>s.value=e),onChange:u},{default:I((()=>[$(p,{title:"首页","is-dot":"",value:2,icon:"home"}),$(p,{title:"分类",value:2,icon:"cart"}),$(p,{title:"相册",value:30,icon:"photo"}),$(p,{title:"我的",value:200,icon:"user"})])),_:1},8,["modelValue"])])),_:1}),$(h,{hor:"0",title:"自定义图标",transparent:""},{default:I((()=>[$(v,{modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=e=>i.value=e),onChange:u},{default:I((()=>[$(p,{value:2,title:"首页",icon:"home"}),$(p,{value:2,icon:"cart",title:"分类"},{icon:I((()=>[$(f,{round:"",height:"40rpx",width:"40rpx",src:"https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg"})])),_:1}),$(p,{value:3,title:"我的",icon:"user"})])),_:1},8,["modelValue"])])),_:1}),$(h,{hor:"0",title:"自定义颜色",transparent:""},{default:I((()=>[$(v,{modelValue:n.value,"onUpdate:modelValue":a[5]||(a[5]=e=>n.value=e),onChange:u,"active-color":"#ee0a24","inactive-color":"#7d7e80"},{default:I((()=>[$(p,{"is-dot":"",value:2,title:"点状",icon:"home"}),$(p,{value:2,icon:"cart",title:"分类"}),$(p,{value:30,title:"我的",icon:"user"}),$(p,{value:200,title:"最大值",icon:"photo"}),$(p,{value:10,title:"客服",icon:"chat"})])),_:1},8,["modelValue"])])),_:1}),$(h,{hor:"0",title:"监听切换事件",transparent:""},{default:I((()=>[$(v,{modelValue:r.value,"onUpdate:modelValue":a[6]||(a[6]=e=>r.value=e),onChange:c,"active-color":"#ee0a24","inactive-color":"#7d7e80"},{default:I((()=>[$(p,{title:"首页",icon:"home"}),$(p,{title:"分类",icon:"cart"}),$(p,{title:"我的",icon:"user"}),$(p,{title:"相册",icon:"photo"}),$(p,{title:"客服",icon:"chat"})])),_:1},8,["modelValue"])])),_:1}),$(h,{hor:"0",title:"固定底部",transparent:""},{default:I((()=>[$(v,{fixed:"",shape:"round",modelValue:d.value,"onUpdate:modelValue":a[7]||(a[7]=e=>d.value=e),onChange:u,bordered:"",safeAreaInsetBottom:"",placeholder:""},{default:I((()=>[$(p,{value:2,"is-dot":"",title:"首页",icon:"home"}),$(p,{title:"分类",icon:"cart"}),$(p,{title:"我的",icon:"user"}),$(p,{value:200,title:"相册",icon:"photo"}),$(p,{value:10,title:"客服",icon:"chat"})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-1e3acd37"]]);export{R as default};
