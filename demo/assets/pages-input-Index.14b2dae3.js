import{_ as e}from"./wd-input.c521d55a.js";import{d as l,r as a,o,c as u,w as t,a as n,b as d,h as p,j as m,g as r}from"./index-d8aee22c.js";import{_ as s}from"./demo-block.4a3c27e6.js";import{_ as V}from"./wd-button.280621c4.js";import{_ as c}from"./wd-cell-group.b6f02a81.js";import{a as i,b as v}from"./page-wraper.83fcb5aa.js";import"./useTranslate.cac5ae85.js";import"./useChildren.11271381.js";const f=v(l({__name:"Index",setup(l){const v=a(""),f=a("这是禁用状态"),b=a("这是只读状态"),x=a("123456"),_=a("支持清空"),h=a("password"),g=a(""),I=a("1234"),y=a(""),U=a(null),w=a(""),j=a("该输入框禁用"),C=a("12345678"),k=a(""),q=a(""),z=a(""),B=a(""),T=a(""),A=a(""),D=a("");function E(e){console.log(e)}function F(e){console.log(e)}function G(e){console.log(e)}function H(e){console.log(e)}function J(e){console.log("失焦",e)}function K(e){console.log(e)}return(l,a)=>{const L=p(m("wd-input"),e),M=p(m("demo-block"),s),N=r,O=p(m("wd-button"),V),P=p(m("wd-cell-group"),c),Q=p(m("page-wraper"),i);return o(),u(Q,null,{default:t((()=>[n(M,{title:"基本用法"},{default:t((()=>[n(L,{type:"text",onInput:K,modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),placeholder:"请输入用户名",onChange:E,onBlur:J},null,8,["modelValue"])])),_:1}),n(M,{title:"禁用状态"},{default:t((()=>[n(L,{type:"text",onInput:K,modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e),disabled:""},null,8,["modelValue"])])),_:1}),n(M,{title:"只读状态"},{default:t((()=>[n(L,{type:"text",onInput:K,modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),readonly:""},null,8,["modelValue"])])),_:1}),n(M,{title:"错误状态"},{default:t((()=>[n(L,{type:"text",onInput:K,modelValue:x.value,"onUpdate:modelValue":a[3]||(a[3]=e=>x.value=e),placeholder:"请输入用户名",error:""},null,8,["modelValue"])])),_:1}),n(M,{title:"清空按钮"},{default:t((()=>[n(L,{type:"text",onInput:K,modelValue:_.value,"onUpdate:modelValue":a[4]||(a[4]=e=>_.value=e),clearable:"",onChange:F},null,8,["modelValue"])])),_:1}),n(M,{title:"有值且聚焦时展示清空按钮"},{default:t((()=>[n(L,{type:"text","clear-trigger":"focus",onInput:K,modelValue:A.value,"onUpdate:modelValue":a[5]||(a[5]=e=>A.value=e),clearable:"",onChange:F},null,8,["modelValue"])])),_:1}),n(M,{title:"点击清除按钮时不自动聚焦"},{default:t((()=>[n(L,{type:"text","focus-when-clear":!1,onInput:K,modelValue:D.value,"onUpdate:modelValue":a[6]||(a[6]=e=>D.value=e),clearable:"",onChange:F},null,8,["modelValue"])])),_:1}),n(M,{title:"密码框"},{default:t((()=>[n(L,{type:"text",onInput:K,modelValue:h.value,"onUpdate:modelValue":a[7]||(a[7]=e=>h.value=e),clearable:"","show-password":"",onChange:G},null,8,["modelValue"])])),_:1}),n(M,{title:"数字类型"},{default:t((()=>[n(L,{type:"number",onInput:K,modelValue:U.value,"onUpdate:modelValue":a[8]||(a[8]=e=>U.value=e)},null,8,["modelValue"])])),_:1}),n(M,{title:"设置前后Icon"},{default:t((()=>[n(L,{type:"text",modelValue:g.value,"onUpdate:modelValue":a[9]||(a[9]=e=>g.value=e),onInput:K,"prefix-icon":"dong","suffix-icon":"list",clearable:"",onChange:H},null,8,["modelValue"])])),_:1}),n(M,{title:"字数限制"},{default:t((()=>[n(L,{type:"text",modelValue:I.value,"onUpdate:modelValue":a[10]||(a[10]=e=>I.value=e),onInput:K,maxlength:20,"show-word-limit":""},null,8,["modelValue"])])),_:1}),n(M,{title:"取消底部边框，自定义使用"},{default:t((()=>[n(L,{modelValue:y.value,"onUpdate:modelValue":a[11]||(a[11]=e=>y.value=e),onInput:K,"no-border":"",placeholder:"请输入价格","custom-style":"display: inline-block; width: 70px; vertical-align: middle;"},null,8,["modelValue"]),n(N,{class:"custom-txt"},{default:t((()=>[d("元")])),_:1})])),_:1}),n(M,{title:"cell 类型",transparent:""},{default:t((()=>[n(P,{border:""},{default:t((()=>[n(L,{type:"text",label:"基本用法",modelValue:w.value,"onUpdate:modelValue":a[12]||(a[12]=e=>w.value=e),onInput:K,placeholder:"请输入..."},null,8,["modelValue"]),n(L,{type:"text",label:"禁用",modelValue:j.value,"onUpdate:modelValue":a[13]||(a[13]=e=>j.value=e),onInput:K,disabled:"",placeholder:"用户名"},null,8,["modelValue"]),n(L,{type:"text",label:"清除、密码",modelValue:C.value,"onUpdate:modelValue":a[14]||(a[14]=e=>C.value=e),onInput:K,placeholder:"密码",clearable:"","show-password":""},null,8,["modelValue"]),n(L,{type:"text",label:"错误状态",modelValue:k.value,"onUpdate:modelValue":a[15]||(a[15]=e=>k.value=e),onInput:K,placeholder:"请输入用户名",error:""},null,8,["modelValue"]),n(L,{type:"text",label:"必填",modelValue:q.value,"onUpdate:modelValue":a[16]||(a[16]=e=>q.value=e),onInput:K,placeholder:"请输入用户名",required:""},null,8,["modelValue"]),n(L,{type:"text",label:"图标",modelValue:z.value,"onUpdate:modelValue":a[17]||(a[17]=e=>z.value=e),onInput:K,placeholder:"请输入...","prefix-icon":"dong","suffix-icon":"list"},null,8,["modelValue"]),n(L,{type:"text",label:"自定义插槽",center:"",modelValue:B.value,"onUpdate:modelValue":a[18]||(a[18]=e=>B.value=e),onInput:K,placeholder:"请输入...",clearable:""},{suffix:t((()=>[n(O,{size:"small","custom-class":"button"},{default:t((()=>[d("获取验证码")])),_:1})])),_:1},8,["modelValue"]),n(L,{type:"text",label:"大尺寸",clearable:"",size:"large",modelValue:T.value,"onUpdate:modelValue":a[19]||(a[19]=e=>T.value=e),onInput:K,placeholder:"请输入..."},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-902f3b16"]]);export{f as default};
