import{d as e,r as l,o as a,c as u,w as d,a as t,b as o,g as f,i as v,h as _,j as s}from"./index-d8aee22c.js";import{_ as m,a as n}from"./wd-radio-group.3a85a612.js";import{_ as i}from"./demo-block.4a3c27e6.js";import{a as r,b as V}from"./page-wraper.83fcb5aa.js";import"./useChildren.11271381.js";const p=V(e({__name:"Index",setup(e){l(1);const V=l(1),p=l(1),c=l(1),h=l(1),g=l(1),b=l(1),U=l(1),k=l(1),C=l(1),j=l(1),w=l(1),x=l(1);function y(e){console.log(e)}return(e,l)=>{const z=f,I=v,G=_(s("wd-radio"),m),K=_(s("wd-radio-group"),n),q=_(s("demo-block"),i),A=_(s("page-wraper"),r);return a(),u(A,null,{default:d((()=>[t(q,{title:"基本用法"},{default:d((()=>[t(I,null,{default:d((()=>[o(" 1、内容项在3项以内，且有比较重要的信息备选（如付款类型选择等）可考虑采用圆形组件。因为会跟圆形复选框容易混淆，且会造成当前表单页页面结构不统一， "),t(z,{style:{color:"#f0883a"}},{default:d((()=>[o("一般情况不建议使用点状单选。")])),_:1})])),_:1}),t(I,{style:{"margin-bottom":"10px"}},{default:d((()=>[o(" 2、单选框基本使用未对高度进行扩充， "),t(z,{style:{color:"#f0883a"}},{default:d((()=>[o("一般情况建议使用表单--单选组。")])),_:1})])),_:1}),t(K,{modelValue:V.value,"onUpdate:modelValue":l[0]||(l[0]=e=>V.value=e),onChange:y},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("单选框1")])),_:1}),t(G,{value:2},{default:d((()=>[o("单选框2")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"修改形状--button"},{default:d((()=>[t(K,{shape:"button",modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=e=>p.value=e),onChange:y},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("沃特")])),_:1}),t(G,{value:2},{default:d((()=>[o("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"修改形状--dot"},{default:d((()=>[t(K,{shape:"dot",modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=e=>c.value=e),onChange:y},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("沃特")])),_:1}),t(G,{value:2},{default:d((()=>[o("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"表单---单选组",transparent:""},{default:d((()=>[t(K,{cell:"",modelValue:h.value,"onUpdate:modelValue":l[3]||(l[3]=e=>h.value=e),onChange:y},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("沃特")])),_:1}),t(G,{value:2},{default:d((()=>[o("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"表单--单选按钮组",transparent:""},{default:d((()=>[t(K,{modelValue:g.value,"onUpdate:modelValue":l[4]||(l[4]=e=>g.value=e),cell:"",shape:"button"},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("选项一")])),_:1}),t(G,{value:2},{default:d((()=>[o("选项二")])),_:1}),t(G,{value:3},{default:d((()=>[o("选项三")])),_:1}),t(G,{value:4},{default:d((()=>[o("选项四")])),_:1}),t(G,{value:5},{default:d((()=>[o("选项五")])),_:1}),t(G,{value:6},{default:d((()=>[o("选项六")])),_:1}),t(G,{value:7},{default:d((()=>[o("选项七")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"同行展示"},{default:d((()=>[t(K,{modelValue:b.value,"onUpdate:modelValue":l[5]||(l[5]=e=>b.value=e),inline:""},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("单选框1")])),_:1}),t(G,{value:2},{default:d((()=>[o("单选框2")])),_:1})])),_:1},8,["modelValue"]),t(I,{class:"divider"}),t(K,{modelValue:U.value,"onUpdate:modelValue":l[6]||(l[6]=e=>U.value=e),inline:"",shape:"dot"},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("单选框1")])),_:1}),t(G,{value:2},{default:d((()=>[o("单选框2")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"修改选中颜色"},{default:d((()=>[t(K,{modelValue:k.value,"onUpdate:modelValue":l[7]||(l[7]=e=>k.value=e),onChange:y},{default:d((()=>[t(G,{value:1,"checked-color":"#fa4350"},{default:d((()=>[o("沃特")])),_:1}),t(G,{value:2,"checked-color":"#fa4350"},{default:d((()=>[o("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"禁用"},{default:d((()=>[t(K,{modelValue:p.value,"onUpdate:modelValue":l[8]||(l[8]=e=>p.value=e),disabled:"",shape:"dot"},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("沃特")])),_:1}),t(G,{value:2},{default:d((()=>[o("商家后台")])),_:1})])),_:1},8,["modelValue"]),t(I,{class:"divider"}),t(K,{modelValue:p.value,"onUpdate:modelValue":l[9]||(l[9]=e=>p.value=e),disabled:""},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("沃特")])),_:1}),t(G,{value:2},{default:d((()=>[o("商家后台")])),_:1})])),_:1},8,["modelValue"]),t(I,{class:"divider"}),t(K,{modelValue:p.value,"onUpdate:modelValue":l[10]||(l[10]=e=>p.value=e),disabled:"",shape:"button"},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("沃特")])),_:1}),t(G,{value:2},{default:d((()=>[o("商家后台")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"大尺寸"},{default:d((()=>[t(K,{modelValue:C.value,"onUpdate:modelValue":l[11]||(l[11]=e=>C.value=e),size:"large"},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("单选框1")])),_:1}),t(G,{value:2},{default:d((()=>[o("单选框2")])),_:1})])),_:1},8,["modelValue"]),t(I,{class:"divider"}),t(K,{modelValue:j.value,"onUpdate:modelValue":l[12]||(l[12]=e=>j.value=e),size:"large",shape:"dot"},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("单选框1")])),_:1}),t(G,{value:2},{default:d((()=>[o("单选框2")])),_:1})])),_:1},8,["modelValue"]),t(I,{class:"divider"}),t(K,{modelValue:w.value,"onUpdate:modelValue":l[13]||(l[13]=e=>w.value=e),size:"large",inline:"","custom-class":"group"},{default:d((()=>[t(G,{value:1},{default:d((()=>[o("单选框1")])),_:1}),t(G,{value:2},{default:d((()=>[o("单选框2")])),_:1})])),_:1},8,["modelValue"])])),_:1}),t(q,{title:"radio的props比radioGroup的优先级高"},{default:d((()=>[t(K,{hape:"button",disabled:"","checked-color":"#fa4350",modelValue:x.value,"onUpdate:modelValue":l[14]||(l[14]=e=>x.value=e),onChange:y},{default:d((()=>[t(G,{value:1,"checked-color":"#000",disabled:!1},{default:d((()=>[o("商家前端")])),_:1}),t(G,{value:2,disabled:!1},{default:d((()=>[o("沃特")])),_:1}),t(G,{value:3},{default:d((()=>[o("商家智能")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-938a830d"]]);export{p as default};
