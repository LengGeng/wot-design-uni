import{g as e,i as a,l as t,H as l,b as s,d as u,e as o,_ as n,a as c}from"./page-wraper.83fcb5aa.js";import{d,N as i,r,v as f,Q as b,m as _,S as p,o as v,c as k,w as m,a as h,y as g,x as w,n as y,T as C,J as $,i as V,b as j,u as x,h as T,j as Q}from"./index-d8aee22c.js";import{p as z,r as I,q as F,c as M,u as O}from"./clickoutside.f4a6258f.js";import{u as S}from"./useTouch.d283360b.js";import{_ as H}from"./demo-block.4a3c27e6.js";import{_ as P}from"./wd-button.280621c4.js";const q=s(d({name:"wd-swipe-action",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,modelValue:a("close"),disabled:t(!1),beforeClose:Function},emits:["click","update:modelValue"],setup(e,{expose:a,emit:t}){const s=e,u=i(F,null),o=r(""),n=r(0),c=r(0),d=r(!1),j=S(),{proxy:x}=$();function T(e,a){s.disabled||Q().then((([t,l])=>{switch(e){case"close":if(0===c.value)return;G("value",a);break;case"left":O(t);break;case"right":O(-l)}}))}function Q(){return Promise.all([l(".wd-swipe-action__left",!1,x).then((e=>e.width?e.width:0)),l(".wd-swipe-action__right",!1,x).then((e=>e.width?e.width:0))])}function O(e=0){const a=`translate3d(${e}px, 0, 0)`,t=d.value?"none":".6s cubic-bezier(0.18, 0.89, 0.32, 1)";o.value=`\n        -webkit-transform: ${a};\n        -webkit-transition: ${t};\n        transform: ${a};\n        transition: ${t};\n      `,c.value=e}function H(e){s.disabled||0===c.value||(G("click",e=e||"inside"),t("click",{value:e}))}function P(e){s.disabled||(n.value=c.value,j.touchStart(e),u&&u.closeOther?u.closeOther(x):M(x))}function q(e){if(s.disabled)return;if(j.touchMove(e),"vertical"===j.direction.value)return;e.preventDefault(),e.stopPropagation(),d.value=!0;const a=n.value+j.deltaX.value;Q().then((([t,l])=>0===t&&a>0||0===l&&a<0?(O(0),P(e)):0!==t&&a>=t?(O(t),P(e)):0!==l&&-a>=l?(O(-l),P(e)):void O(a)))}function D(){if(s.disabled)return;const e=.3;d.value=!1,Q().then((([a,l])=>{n.value<0&&c.value<0&&c.value-n.value<l*e?(O(-l),t("update:modelValue","right")):n.value>0&&c.value>0&&n.value-c.value<a*e?(O(a),t("update:modelValue","left")):l>0&&n.value>=0&&c.value<0&&Math.abs(c.value)>l*e?(O(-l),t("update:modelValue","right")):a>0&&n.value<=0&&c.value>0&&Math.abs(c.value)>a*e?(O(a),t("update:modelValue","left")):G("swipe")}))}function G(e,a){if("swipe"===e&&0===n.value)return O(0);"swipe"===e&&n.value>0?a="left":"swipe"===e&&n.value<0&&(a="right"),e&&a&&s.beforeClose&&s.beforeClose(e,a),O(0),"close"!==s.modelValue&&t("update:modelValue","close")}return f((()=>s.modelValue),((e,a)=>{T(e,a)}),{deep:!0}),b((()=>{u&&u.pushToQueue?u.pushToQueue(x):z(x),n.value=0,c.value=0,d.value=!1})),_((()=>{d.value=!0,T(s.modelValue),d.value=!1})),p((()=>{u&&u.removeFromQueue?u.removeFromQueue(x):I(x)})),a({close:G}),(e,a)=>{const t=V;return v(),k(t,{class:y(`wd-swipe-action ${e.customClass}`),style:g(e.customStyle),onClick:a[2]||(a[2]=C((e=>H()),["stop"])),onTouchstart:P,onTouchmove:q,onTouchend:D,onTouchcancel:D},{default:m((()=>[h(t,{class:"wd-swipe-action__wrapper",style:g(o.value)},{default:m((()=>[h(t,{class:"wd-swipe-action__left",onClick:a[0]||(a[0]=e=>H("left"))},{default:m((()=>[w(e.$slots,"left",{},void 0,!0)])),_:3}),w(e.$slots,"default",{},void 0,!0),h(t,{class:"wd-swipe-action__right",onClick:a[1]||(a[1]=e=>H("right"))},{default:m((()=>[w(e.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-4e3986a8"]]),D=s(d({__name:"Index",setup(e){const{closeOutside:a}=O(),t=u(),l=r("close"),s=(e,a)=>{"click"===e?t.show(`${e} ${a}导致滑动按钮关闭`):t.show(`${e}导致${a}滑动按钮关闭`)};function d(e){l.value=e}function i({value:e}){t.show(`点击${e}关闭操作按钮`)}function f(e){t.show(`点击了${e}`)}function b(){}return(e,t)=>{const u=T(Q("wd-toast"),o),r=T(Q("wd-cell"),n),_=V,p=T(Q("wd-swipe-action"),q),g=T(Q("demo-block"),H),w=T(Q("wd-button"),P),y=T(Q("page-wraper"),c);return v(),k(y,null,{default:m((()=>[h(u),h(_,{onClick:C(x(a),["stop"])},{default:m((()=>[h(g,{transparent:"",title:"基本用法"},{default:m((()=>[h(p,null,{right:m((()=>[h(_,{class:"action"},{default:m((()=>[h(_,{class:"button",style:{background:"#fa4350"},onClick:t[0]||(t[0]=e=>f("操作1"))},{default:m((()=>[j("操作1")])),_:1}),h(_,{class:"button",style:{background:"#f0883a"},onClick:t[1]||(t[1]=e=>f("操作2"))},{default:m((()=>[j("操作2")])),_:1}),h(_,{class:"button",style:{background:"#4d80f0"},onClick:t[2]||(t[2]=e=>f("操作3"))},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),default:m((()=>[h(r,{title:"标题文字",value:"内容"})])),_:1})])),_:1}),h(g,{transparent:"",title:"左右滑动"},{default:m((()=>[h(p,null,{left:m((()=>[h(_,{class:"action"},{default:m((()=>[h(_,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作1")])),_:1}),h(_,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作2")])),_:1}),h(_,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),right:m((()=>[h(_,{class:"action"},{default:m((()=>[h(_,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作4")])),_:1}),h(_,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作5")])),_:1}),h(_,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作6")])),_:1})])),_:1})])),default:m((()=>[h(r,{title:"标题文字",value:"内容"})])),_:1})])),_:1}),h(g,{transparent:"",title:"切换按钮"},{default:m((()=>[h(p,{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=e=>l.value=e),"before-close":s},{left:m((()=>[h(_,{class:"action"},{default:m((()=>[h(_,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作1")])),_:1}),h(_,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作2")])),_:1}),h(_,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),right:m((()=>[h(_,{class:"action"},{default:m((()=>[h(_,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作4")])),_:1}),h(_,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作5")])),_:1}),h(_,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作6")])),_:1})])),_:1})])),default:m((()=>[h(r,{title:"标题文字",value:"内容"})])),_:1},8,["modelValue"])])),_:1}),h(_,{class:"button-group"},{default:m((()=>[h(_,{onClick:C(b,["stop"])},{default:m((()=>[h(w,{size:"small",onClick:t[4]||(t[4]=e=>d("left"))},{default:m((()=>[j("打开左边")])),_:1})])),_:1},8,["onClick"]),h(_,{onClick:C(b,["stop"])},{default:m((()=>[h(w,{size:"small",onClick:t[5]||(t[5]=e=>d("close"))},{default:m((()=>[j("关闭所有")])),_:1})])),_:1},8,["onClick"]),h(_,{onClick:C(b,["stop"])},{default:m((()=>[h(w,{size:"small",onClick:t[6]||(t[6]=e=>d("right"))},{default:m((()=>[j("打开右边")])),_:1})])),_:1},8,["onClick"])])),_:1}),h(g,{transparent:"",title:"点击事件"},{default:m((()=>[h(p,{onClick:i},{right:m((()=>[h(_,{class:"action"},{default:m((()=>[h(_,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作1")])),_:1}),h(_,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作2")])),_:1}),h(_,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),default:m((()=>[h(r,{title:"标题文字",value:"内容"})])),_:1})])),_:1}),h(g,{transparent:"",title:"禁用滑动按钮"},{default:m((()=>[h(p,{disabled:""},{right:m((()=>[h(_,{class:"action"},{default:m((()=>[h(_,{class:"button",style:{background:"#fa4350"}},{default:m((()=>[j("操作1")])),_:1}),h(_,{class:"button",style:{background:"#f0883a"}},{default:m((()=>[j("操作2")])),_:1}),h(_,{class:"button",style:{background:"#4d80f0"}},{default:m((()=>[j("操作3")])),_:1})])),_:1})])),default:m((()=>[h(r,{title:"标题文字",value:"内容"})])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-cbf249d3"]]);export{D as default};
