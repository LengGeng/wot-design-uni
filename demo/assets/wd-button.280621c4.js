import{d as e,r as a,q as s,v as o,h as t,j as n,o as i,c as r,w as l,a as d,y as c,u as p,p as g,x as u,n as m,i as f,X as h}from"./index-d8aee22c.js";import{g as v,l as b,i as y,c as w,y as k,b as S}from"./page-wraper.83fcb5aa.js";const _=S(e({name:"wd-button",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...v,plain:b(!1),round:b(!0),disabled:b(!1),hairline:b(!1),block:b(!1),type:y("primary"),size:y("medium"),icon:String,classPrefix:y("wd-icon"),loading:b(!1),loadingColor:String,openType:String,hoverStopPropagation:Boolean,lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,appParameter:String,showMessageCard:Boolean,buttonId:String},emits:["click","getuserinfo","contact","getphonenumber","error","launchapp","opensetting","chooseavatar","agreeprivacyauthorization"],setup(e,{emit:v}){const b=e,y=(e="#4D80F0",a=!0)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="a"><stop stop-color="${a?e:"#fff"}" offset="0%" stop-opacity="0"/><stop stop-color="${a?e:"#fff"}" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${a?"#fff":e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#a)" stroke-width="3.5" stroke-linecap="round"/></g></svg>`,S=a(20),_=a(70),x=a(""),C=s((()=>`background-image: url(${x.value});`));function M(e){b.disabled||b.loading||v("click",e)}function P(e){v("getuserinfo",e.detail)}function z(e){v("contact",e.detail)}function I(e){v("getphonenumber",e.detail)}function $(e){v("error",e.detail)}function G(e){v("launchapp",e.detail)}function F(e){v("opensetting",e.detail)}function T(e){v("chooseavatar",e.detail)}function j(e){v("agreeprivacyauthorization",e.detail)}return o((()=>b.loading),(()=>{!function(){const{loadingColor:e,type:a,plain:s}=b;let o=e;if(!o)switch(a){case"primary":o="#4D80F0";break;case"success":o="#34d19d";break;case"info":case"default":o="#333";break;case"warning":o="#f0883a";break;case"error":o="#fa4350"}const t=y(o,!s);x.value=`"data:image/svg+xml;base64,${k(t)}"`}()}),{deep:!0,immediate:!0}),(e,a)=>{const s=f,o=t(n("wd-icon"),w),v=h;return i(),r(v,{id:e.buttonId,"hover-class":""+(e.disabled||e.loading?"":"wd-button--active"),style:c(e.customStyle),class:m(["wd-button","is-"+e.type,"is-"+e.size,e.plain?"is-plain":"",e.disabled?"is-disabled":"",e.round?"is-round":"",e.hairline?"is-hairline":"",e.block?"is-block":"",e.loading?"is-loading":"",e.customClass]),"hover-start-time":S.value,"hover-stay-time":_.value,"open-type":e.disabled||e.loading?"":e.openType,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"app-parameter":e.appParameter,"show-message-card":e.showMessageCard,"session-from":e.sessionFrom,lang:e.lang,"hover-stop-propagation":e.hoverStopPropagation,onClick:M,onGetuserinfo:P,onContact:z,onGetphonenumber:I,onError:$,onLaunchapp:G,onOpensetting:F,onChooseavatar:T,onAgreeprivacyauthorization:j},{default:l((()=>[e.loading?(i(),r(s,{key:0,class:"wd-button__loading"},{default:l((()=>[d(s,{class:"wd-button__loading-svg",style:c(p(C))},null,8,["style"])])),_:1})):e.icon?(i(),r(o,{key:1,"custom-class":"wd-button__icon",name:e.icon,classPrefix:e.classPrefix},null,8,["name","classPrefix"])):g("",!0),d(s,{class:"wd-button__text"},{default:l((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["id","hover-class","style","class","hover-start-time","hover-stay-time","open-type","send-message-title","send-message-path","send-message-img","app-parameter","show-message-card","session-from","lang","hover-stop-propagation"])}}}),[["__scopeId","data-v-80d3124a"]]);export{_};
