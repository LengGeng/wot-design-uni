import{d as e,r as a,o as l,c as t,w as o,a as n,b as u,t as s,u as d,z as r,h as c,j as i,i as p,g as m}from"./index-d8aee22c.js";import{e as f,c as _,a as v,b as V}from"./page-wraper.83fcb5aa.js";import{_ as w}from"./wd-search.e069bf13.js";import{_ as h}from"./demo-block.4a3c27e6.js";import{_ as x}from"./wd-popover.e3dde1bf.js";import{u as g}from"./clickoutside.f4a6258f.js";import"./useTranslate.cac5ae85.js";import"./usePopover.7ad8f302.js";const j=V(e({__name:"Index",setup(e){const{closeOutside:V}=g(),j=a(""),k=a("初始文案"),b=a(""),C=a(""),U=a(""),y=a("全部"),z=a([{content:"全部"},{content:"订单号"},{content:"退款单号"}]);function I(e){r({title:"搜索"+e.value})}function M(){r({title:"清空"})}function O(){r({title:"取消"})}function P(e){console.log(e.value)}function S({item:e,index:a}){}return(e,a)=>{const r=c(i("wd-toast"),f),g=c(i("wd-search"),w),T=c(i("demo-block"),h),q=p,A=m,B=c(i("wd-icon"),_),D=c(i("wd-popover"),x),E=c(i("page-wraper"),v);return l(),t(q,{onClick:d(V)},{default:o((()=>[n(r),n(E,null,{default:o((()=>[n(T,{title:"基本用法",transparent:""},{default:o((()=>[n(g,{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),onSearch:I,onChange:P,onCancel:O,onClear:M},null,8,["modelValue"])])),_:1}),n(T,{title:"白色输入框",transparent:""},{default:o((()=>[n(g,{light:""})])),_:1}),n(T,{title:"搜索占位符居左",transparent:""},{default:o((()=>[n(g,{"placeholder-left":""})])),_:1}),n(T,{title:"禁用且隐藏取消按钮",transparent:""},{default:o((()=>[n(g,{disabled:"","hide-cancel":""})])),_:1}),n(q,{style:{margin:"15px 0",color:"#666"}},{default:o((()=>[n(q,{style:{padding:"0 15px",margin:"10px 0","font-size":"13px"}},{default:o((()=>[u("自定义左侧插槽")])),_:1}),n(g,{modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=e=>b.value=e)},{prefix:o((()=>[n(D,{mode:"menu",content:z.value,onMenuclick:S},{default:o((()=>[n(q,{class:"search-type"},{default:o((()=>[n(A,null,{default:o((()=>[u(s(y.value),1)])),_:1}),n(B,{class:"icon-arrow",name:"fill-arrow-down"})])),_:1})])),_:1},8,["content"])])),_:1},8,["modelValue"])])),_:1}),n(T,{title:"自定义右侧文案",transparent:""},{default:o((()=>[n(g,{placeholder:"请输入订单号/订单名称","cancel-txt":"搜索"})])),_:1}),n(T,{title:"设置最大长度",transparent:""},{default:o((()=>[n(g,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e),maxlength:4},null,8,["modelValue"])])),_:1}),n(T,{title:"清空后自动聚焦",transparent:""},{default:o((()=>[n(g,{modelValue:C.value,"onUpdate:modelValue":a[3]||(a[3]=e=>C.value=e),"focus-when-clear":""},null,8,["modelValue"])])),_:1}),n(T,{title:"自动聚焦",transparent:""},{default:o((()=>[n(g,{modelValue:U.value,"onUpdate:modelValue":a[4]||(a[4]=e=>U.value=e),focus:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["onClick"])}}}),[["__scopeId","data-v-6d7882c1"]]);export{j as default};
