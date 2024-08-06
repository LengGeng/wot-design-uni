import{g as e,i as a,w as l,l as s,m as r,K as o,t,M as i,h as n,p as u,c,N as d,z as h,O as p,b as f}from"./page-wraper.83fcb5aa.js";import{d as m,q as g,r as b,v as x,Q as y,h as _,j as v,o as w,c as S,w as $,n as k,u as C,y as T,x as V,p as W,a as j,b as L,t as P,i as I,g as q,a3 as B}from"./index-d8aee22c.js";import{u as H}from"./useTranslate.cac5ae85.js";const z=f(m({name:"wd-textarea",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...e,customTextareaContainerClass:a(""),customTextareaClass:a(""),customLabelClass:a(""),modelValue:l(""),placeholder:String,placeholderStyle:String,placeholderClass:a(""),disabled:s(!1),maxlength:r(-1),autoFocus:s(!1),focus:s(!1),autoHeight:s(!1),fixed:s(!1),cursorSpacing:r(0),cursor:r(-1),confirmType:a(null),confirmHold:s(!1),showConfirmBar:s(!0),selectionStart:r(-1),selectionEnd:r(-1),adjustPosition:s(!0),disableDefaultPadding:s(!1),holdKeyboard:s(!1),showPassword:s(!1),clearable:s(!1),readonly:s(!1),prefixIcon:String,usePrefixSlot:s(!1),showWordLimit:s(!1),label:String,labelWidth:a("33%"),useLabelSlot:s(!1),size:String,error:s(!1),center:s(!1),noBorder:s(!1),required:s(!1),prop:a(""),rules:o(),clearTrigger:a("always"),focusWhenClear:s(!0)},emits:["update:modelValue","clear","change","blur","focus","input","keyboardheightchange","confirm","linechange","clickprefixicon","click"],setup(e,{emit:a}){const l=e,{translate:s}=H("textarea"),r=g((()=>t(l.placeholder)?l.placeholder:s("placeholder"))),o=b(!1),f=b(!1),m=b(!1),z=b(""),K=i();x((()=>l.focus),(e=>{f.value=e}),{immediate:!0,deep:!0}),x((()=>l.modelValue),(e=>{z.value=t(e)?String(e):""}),{immediate:!0,deep:!0});const{parent:M}=n(d),F=g((()=>{const{disabled:e,readonly:a,clearable:s,clearTrigger:r}=l;return!(!s||a||e||!z.value||!("always"===r||"focus"===l.clearTrigger&&m.value))})),O=g((()=>{const{disabled:e,readonly:a,maxlength:s,showWordLimit:r}=l;return Boolean(!e&&!a&&t(s)&&s>-1&&r)})),A=g((()=>M&&l.prop&&M.errorMessages&&M.errorMessages[l.prop]?M.errorMessages[l.prop]:"")),D=g((()=>{let e=!1;if(M&&M.props.rules){const a=M.props.rules;for(const s in a)Object.prototype.hasOwnProperty.call(a,s)&&s===l.prop&&Array.isArray(a[s])&&(e=a[s].some((e=>e.required)))}return l.required||l.rules.some((e=>e.required))||e})),E=g((()=>String(l.modelValue||"").length)),G=g((()=>`wd-textarea   ${l.label||l.useLabelSlot?"is-cell":""} ${l.center?"is-center":""} ${K.border.value?"is-border":""} ${l.size?"is-"+l.size:""} ${l.error?"is-error":""} ${l.disabled?"is-disabled":""} ${l.autoHeight?"is-auto-height":""} ${E.value>0?"is-not-empty":""}  ${l.noBorder?"is-no-border":""} ${l.customClass}`)),N=g((()=>`wd-textarea__label ${l.customLabelClass} ${D.value?"is-required":""}`)),Q=g((()=>`wd-textarea__placeholder  ${l.placeholderClass}`)),U=g((()=>`${E.value>0?"wd-textarea__count-current":""} ${E.value>l.maxlength?"is-error":""}`)),J=g((()=>l.labelWidth?u({"min-width":l.labelWidth,"max-width":l.labelWidth}):""));function R(e){const{maxlength:a,showWordLimit:s}=l;return s&&-1!==a&&String(e).length>a?e.toString().substring(0,a):e}function X(){o.value=!0,m.value=!1,z.value="",l.focusWhenClear&&(f.value=!1),h((()=>{l.focusWhenClear&&(f.value=!0,m.value=!0),a("change",{value:""}),a("update:modelValue",z.value),a("clear")}))}async function Y({detail:e}){await p(150),o.value?o.value=!1:(m.value=!1,a("blur",{value:z.value,cursor:e.cursor?e.cursor:null}))}function Z({detail:e}){m.value=!0,a("focus",e)}function ee({detail:e}){z.value=R(z.value),a("update:modelValue",z.value),a("input",e)}function ae({detail:e}){a("keyboardheightchange",e)}function le({detail:e}){a("confirm",e)}function se({detail:e}){a("linechange",e)}function re(){a("clickprefixicon")}return y((()=>{z.value=R(z.value),a("update:modelValue",z.value)})),(e,a)=>{const l=_(v("wd-icon"),c),s=I,o=q,t=B;return w(),S(s,{class:k(C(G)),style:T(e.customStyle)},{default:$((()=>[e.label||e.useLabelSlot?(w(),S(s,{key:0,class:k(C(N)),style:T(C(J))},{default:$((()=>[e.prefixIcon||e.usePrefixSlot?(w(),S(s,{key:0,class:"wd-textarea__prefix"},{default:$((()=>[e.prefixIcon&&!e.usePrefixSlot?(w(),S(l,{key:0,"custom-class":"wd-textarea__icon",name:e.prefixIcon,onClick:re},null,8,["name"])):V(e.$slots,"prefix",{key:1},void 0,!0)])),_:3})):W("",!0),j(s,{class:"wd-textarea__label-inner"},{default:$((()=>[e.label?(w(),S(o,{key:0},{default:$((()=>[L(P(e.label),1)])),_:1})):V(e.$slots,"label",{key:1},void 0,!0)])),_:3})])),_:3},8,["class","style"])):W("",!0),j(s,{class:k(`wd-textarea__value ${C(F)?"is-suffix":""} ${e.customTextareaContainerClass} ${C(O)?"is-show-limit":""}`)},{default:$((()=>[j(t,{class:k(`wd-textarea__inner ${e.customTextareaClass}`),modelValue:z.value,"onUpdate:modelValue":a[0]||(a[0]=e=>z.value=e),"show-count":!1,placeholder:C(r),disabled:e.disabled,maxlength:e.maxlength,focus:f.value,"auto-focus":e.autoFocus,"placeholder-style":e.placeholderStyle,"placeholder-class":C(Q),"auto-height":e.autoHeight,"cursor-spacing":e.cursorSpacing,fixed:e.fixed,cursor:e.cursor,"show-confirm-bar":e.showConfirmBar,"selection-start":e.selectionStart,"selection-end":e.selectionEnd,"adjust-position":e.adjustPosition,"hold-keyboard":e.holdKeyboard,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"disable-default-padding":e.disableDefaultPadding,onInput:ee,onFocus:Z,onBlur:Y,onConfirm:le,onLinechange:se,onKeyboardheightchange:ae},null,8,["class","modelValue","placeholder","disabled","maxlength","focus","auto-focus","placeholder-style","placeholder-class","auto-height","cursor-spacing","fixed","cursor","show-confirm-bar","selection-start","selection-end","adjust-position","hold-keyboard","confirm-type","confirm-hold","disable-default-padding"]),C(A)?(w(),S(s,{key:0,class:"wd-textarea__error-message"},{default:$((()=>[L(P(C(A)),1)])),_:1})):W("",!0),e.readonly?(w(),S(s,{key:1,class:"wd-textarea__readonly-mask"})):W("",!0),j(s,{class:"wd-textarea__suffix"},{default:$((()=>[C(F)?(w(),S(l,{key:0,"custom-class":"wd-textarea__clear",name:"error-fill",onClick:X})):W("",!0),C(O)?(w(),S(s,{key:1,class:"wd-textarea__count"},{default:$((()=>[j(o,{class:k(C(U))},{default:$((()=>[L(P(C(E)),1)])),_:1},8,["class"]),L(" /"+P(e.maxlength),1)])),_:1})):W("",!0)])),_:1})])),_:1},8,["class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-93bbf8db"]]);export{z as _};
