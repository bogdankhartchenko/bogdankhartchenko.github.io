import{n as e,t}from"./rolldown-runtime.CsN_8e7u.mjs";import{A as n,C as r,I as i,L as a,P as o,R as s,b as c,j as l,l as u,o as d,p as f,s as p,w as m,y as h}from"./react.ClY5B17n.mjs";import{A as g,C as _,Ct as v,D as y,E as b,K as x,M as S,R as C,_t as w,a as T,b as E,d as ee,dt as te,ft as ne,gt as re,h as ie,i as D,j as ae,lt as O,mt as oe,nt as se,o as k,p as A,yt as ce,z as le}from"./framer.BmupEzXp.mjs";import{T as ue,a as de,r as fe,t as pe}from"./motion.D5QkUeIm.mjs";import{a as me,i as he}from"./gsap@3.13.CpjkR_Ft.mjs";import{n as ge,t as _e}from"./UnfoldText.BvVtUl6c.mjs";import{n as ve,r as ye}from"./jo9Xuyb7V.pD9V4yEs.mjs";var be=/* @__PURE__ */ e({Children:()=>Me,Component:()=>Ne,Fragment:()=>Pe,Profiler:()=>Fe,PureComponent:()=>Ie,StrictMode:()=>Le,Suspense:()=>Re,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>ze,act:()=>Be,cloneElement:()=>Ve,createContext:()=>He,createElement:()=>Ue,createFactory:()=>We,createRef:()=>Ge,default:()=>pt,forwardRef:()=>Ke,isValidElement:()=>qe,lazy:()=>Je,memo:()=>j,startTransition:()=>Ye,unstable_act:()=>Xe,useCallback:()=>Ze,useContext:()=>Qe,useDebugValue:()=>$e,useDeferredValue:()=>et,useEffect:()=>tt,useId:()=>nt,useImperativeHandle:()=>rt,useInsertionEffect:()=>it,useLayoutEffect:()=>at,useMemo:()=>ot,useReducer:()=>st,useRef:()=>ct,useState:()=>lt,useSyncExternalStore:()=>ut,useTransition:()=>dt,version:()=>ft}),xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,j,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt;function mt(){return(mt=t((()=>{xe=Object.create,Se=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,we=Object.getOwnPropertyNames,Te=Object.getPrototypeOf,Ee=Object.prototype.hasOwnProperty,De=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Oe=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of we(t))!Ee.call(e,i)&&i!==n&&Se(e,i,{get:()=>t[i],enumerable:!(r=Ce(t,i))||r.enumerable});return e},ke=(e,t,n)=>(n=e==null?{}:xe(Te(e)),Oe(t||!e||!e.__esModule?Se(n,`default`,{value:e,enumerable:!0}):n,e)),Ae=De(e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+re(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ne,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+re(s,l);c+=ie(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+re(s,l++),c+=ie(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function D(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O={current:null},oe={transition:null},se={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:oe,ReactCurrentOwner:C};function k(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,e.act=k,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=oe.transition;oe.transition={};try{e()}finally{oe.transition=t}},e.unstable_act=k,e.useCallback=function(e,t){return O.current.useCallback(e,t)},e.useContext=function(e){return O.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return O.current.useDeferredValue(e)},e.useEffect=function(e,t){return O.current.useEffect(e,t)},e.useId=function(){return O.current.useId()},e.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return O.current.useMemo(e,t)},e.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},e.useRef=function(e){return O.current.useRef(e)},e.useState=function(e){return O.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return O.current.useTransition()},e.version=`18.3.1`}),je=ke(De((e,t)=>{t.exports=Ae()})()),{Children:Me,Component:Ne,Fragment:Pe,Profiler:Fe,PureComponent:Ie,StrictMode:Le,Suspense:Re,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ze,act:Be,cloneElement:Ve,createContext:He,createElement:Ue,createFactory:We,createRef:Ge,forwardRef:Ke,isValidElement:qe,lazy:Je,memo:j,startTransition:Ye,unstable_act:Xe,useCallback:Ze,useContext:Qe,useDebugValue:$e,useDeferredValue:et,useEffect:tt,useId:nt,useImperativeHandle:rt,useInsertionEffect:it,useLayoutEffect:at,useMemo:ot,useReducer:st,useRef:ct,useState:lt,useSyncExternalStore:ut,useTransition:dt,version:ft}=je,pt=je.default??je})))()}
/*! Bundled license information:

react/cjs/react.production.min.js:
(**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
function ht(){return(ht=t((()=>{mt()})))()}var gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt;function Jt(){return(Jt=t((()=>{i(),gt=(e,...t)=>({$t:setTimeout(e,0,...t),[Symbol.dispose](){clearTimeout(this.t)}}),_t=Object.create,vt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,bt=Object.getOwnPropertyNames,xt=Object.getPrototypeOf,St=Object.prototype.hasOwnProperty,Ct=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),wt=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of bt(t))!St.call(e,i)&&i!==n&&vt(e,i,{get:()=>t[i],enumerable:!(r=yt(t,i))||r.enumerable});return e},Tt=(e,t,n)=>(n=e==null?{}:_t(xt(e)),wt(t||!e||!e.__esModule?vt(n,`default`,{value:e,enumerable:!0}):n,e)),Et=Ct(e=>{function t(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}typeof performance==`object`&&typeof performance.now==`function`?(o=performance,e.unstable_now=function(){return o.now()}):(s=Date,c=s.now(),e.unstable_now=function(){return s.now()-c});var o,s,c,l=[],u=[],d=1,f=null,p=3,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof gt<`u`?gt:null;typeof a<`u`&&a.scheduling!==void 0&&a.scheduling.isInputPending!==void 0&&a.scheduling.isInputPending.bind(a.scheduling);function b(e){for(var i=n(u);i!==null;){if(i.callback===null)r(u);else if(i.startTime<=e)r(u),i.sortIndex=i.expirationTime,t(l,i);else break;i=n(u)}}function x(e){if(g=!1,b(e),!h){if(n(l)!==null)h=!0,ae(S);else{var t=n(u);t!==null&&O(x,t.startTime-e)}}}function S(t,i){h=!1,g&&(g=!1,v(T),T=-1),m=!0;var a=p;try{for(b(i),f=n(l);f!==null&&(!(f.expirationTime>i)||t&&!te());){var o=f.callback;if(typeof o==`function`){f.callback=null,p=f.priorityLevel;var s=o(f.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?f.callback=s:f===n(l)&&r(l),b(i)}else r(l);f=n(l)}if(f!==null)var c=!0;else{var d=n(u);d!==null&&O(x,d.startTime-i),c=!1}return c}finally{f=null,p=a,m=!1}}var C=!1,w=null,T=-1,E=5,ee=-1;function te(){return!(e.unstable_now()-ee<E)}function ne(){if(w!==null){var t=e.unstable_now();ee=t;var n=!0;try{n=w(!0,t)}finally{n?re():(C=!1,w=null)}}else C=!1}var re;typeof y==`function`?re=function(){y(ne)}:typeof MessageChannel<`u`?(ie=new MessageChannel,D=ie.port2,ie.port1.onmessage=ne,re=function(){D.postMessage(null)}):re=function(){_(ne,0)};var ie,D;function ae(e){w=e,C||(C=!0,re())}function O(t,n){T=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){h||m||(h=!0,ae(S))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):E=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:d++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(u,r),n(l)===null&&r===n(u)&&(g?(v(T),T=-1):g=!0,O(x,a-o))):(r.sortIndex=s,t(l,r),h||m||(h=!0,ae(S))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}}),Dt=Tt(Ct((e,t)=>{t.exports=Et()})()),{unstable_now:Ot,unstable_IdlePriority:kt,unstable_ImmediatePriority:At,unstable_LowPriority:jt,unstable_NormalPriority:Mt,unstable_Profiling:Nt,unstable_UserBlockingPriority:Pt,unstable_cancelCallback:Ft,unstable_continueExecution:It,unstable_forceFrameRate:Lt,unstable_getCurrentPriorityLevel:Rt,unstable_getFirstCallbackNode:zt,unstable_next:Bt,unstable_pauseExecution:Vt,unstable_requestPaint:Ht,unstable_runWithPriority:Ut,unstable_scheduleCallback:Wt,unstable_shouldYield:Gt,unstable_wrapCallback:Kt}=Dt,qt=Dt.default??Dt})))()}
/*! Bundled license information:

scheduler/cjs/scheduler.production.min.js:
(**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
var M=/* @__PURE__ */ e({default:()=>qt,unstable_IdlePriority:()=>kt,unstable_ImmediatePriority:()=>At,unstable_LowPriority:()=>jt,unstable_NormalPriority:()=>Mt,unstable_Profiling:()=>Nt,unstable_UserBlockingPriority:()=>Pt,unstable_cancelCallback:()=>Ft,unstable_continueExecution:()=>It,unstable_forceFrameRate:()=>Lt,unstable_getCurrentPriorityLevel:()=>Rt,unstable_getFirstCallbackNode:()=>zt,unstable_next:()=>Bt,unstable_now:()=>Ot,unstable_pauseExecution:()=>Vt,unstable_requestPaint:()=>Ht,unstable_runWithPriority:()=>Ut,unstable_scheduleCallback:()=>Wt,unstable_shouldYield:()=>Gt,unstable_wrapCallback:()=>Kt});function Yt(){return(Yt=t((()=>{Jt()})))()}var Xt=/* @__PURE__ */ e({__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>dn,createPortal:()=>fn,createRoot:()=>pn,default:()=>Cn,findDOMNode:()=>mn,flushSync:()=>hn,hydrate:()=>gn,hydrateRoot:()=>_n,render:()=>vn,unmountComponentAtNode:()=>yn,unstable_batchedUpdates:()=>bn,unstable_renderSubtreeIntoContainer:()=>xn,version:()=>Sn}),Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn;function wn(){return(wn=t((()=>{i(),mt(),Yt(),Zt=e=>{let t=e=>typeof e.default<`u`?e.default:e;switch(e){case`react`:return t(be);case`scheduler`:return t(M);default:return console.error(`module "`+e+`" not found`),null}},Qt=Object.create,$t=Object.defineProperty,en=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyNames,nn=Object.getPrototypeOf,rn=Object.prototype.hasOwnProperty,an=(e=>typeof Zt<`u`?Zt:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof Zt<`u`?Zt:e)[t]}):e)(function(e){if(typeof Zt<`u`)return Zt.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),on=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),sn=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of tn(t))!rn.call(e,i)&&i!==n&&$t(e,i,{get:()=>t[i],enumerable:!(r=en(t,i))||r.enumerable});return e},cn=(e,t,n)=>(n=e==null?{}:Qt(nn(e)),sn(t||!e||!e.__esModule?$t(n,`default`,{value:e,enumerable:!0}):n,e)),ln=on(e=>{var t=an(`react`),n=an(`scheduler`);function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=/* @__PURE__ */ new Set,a={};function o(e,t){c(e,t),c(e+`Capture`,t)}function c(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var l=typeof s<`u`&&typeof s.document<`u`&&typeof s.document.createElement<`u`,u=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},p={};function m(e){return u.call(p,e)?!0:u.call(f,e)?!1:d.test(e)?p[e]=!0:(f[e]=!0,!1)}function h(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function g(e,t,n,r){if(t===null||typeof t>`u`||h(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var v={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){v[e]=new _(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];v[t]=new _(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){v[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){v[e]=new _(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){v[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){v[e]=new _(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){v[e]=new _(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){v[e]=new _(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){v[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(y,b);v[t]=new _(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(y,b);v[t]=new _(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(y,b);v[t]=new _(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){v[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),v.xlinkHref=new _(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){v[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function x(e,t,n,r){var i=v.hasOwnProperty(t)?v[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(g(t,n,i,r)&&(n=null),r||i===null?m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var S=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for(`react.element`),w=Symbol.for(`react.portal`),T=Symbol.for(`react.fragment`),E=Symbol.for(`react.strict_mode`),ee=Symbol.for(`react.profiler`),te=Symbol.for(`react.provider`),ne=Symbol.for(`react.context`),re=Symbol.for(`react.forward_ref`),ie=Symbol.for(`react.suspense`),D=Symbol.for(`react.suspense_list`),ae=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),oe=Symbol.for(`react.offscreen`),se=Symbol.iterator;function k(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Object.assign,ce;function le(e){if(ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ce=t&&t[1]||``}return`
`+ce+e}var ue=!1;function de(e,t){if(!e||ue)return``;ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?le(e):``}function fe(e){switch(e.tag){case 5:return le(e.type);case 16:return le(`Lazy`);case 13:return le(`Suspense`);case 19:return le(`SuspenseList`);case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return``}}function pe(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case T:return`Fragment`;case w:return`Portal`;case ee:return`Profiler`;case E:return`StrictMode`;case ie:return`Suspense`;case D:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ne:return(e.displayName||`Context`)+`.Consumer`;case te:return(e._context.displayName||`Context`)+`.Provider`;case re:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ae:return t=e.displayName||null,t===null?pe(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return pe(t);case 8:return t===E?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function he(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:case`object`:return e;default:return``}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function _e(e){var t=ge(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&typeof n<`u`&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ve(e){e._valueTracker||=_e(e)}function ye(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ge(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function be(e){if(e||=typeof document<`u`?document:void 0,typeof e>`u`)return null;try{return e.activeElement||e.body}catch{return e.body}}function xe(e,t){return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t.checked??e._wrapperState.initialChecked})}function Se(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=he(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Ce(e,t){t=t.checked,t!=null&&x(e,`checked`,t,!1)}function we(e,t){Ce(e,t);var n=he(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ee(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ee(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Te(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ee(e,t,n){(t!==`number`||be(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var De=Array.isArray;function Oe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+he(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ke(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return A({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Ae(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(De(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:he(n)}}function je(e,t){var n=he(t.value),r=he(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Me(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Ne(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Pe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Ne(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Fe,Ie=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Fe||=document.createElement(`div`),Fe.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Le(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Re).forEach(function(e){ze.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Re[t]=Re[e]})});function Be(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Re.hasOwnProperty(e)&&Re[e]?(``+t).trim():t+`px`}function Ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Be(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var He=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ue(e,t){if(t){if(He[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function We(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ge=null;function Ke(e){return e=e.target||e.srcElement||s,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qe=null,Je=null,j=null;function Ye(e){if(e=qi(e)){if(typeof qe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Yi(t),qe(e.stateNode,e.type,t))}}function Xe(e){Je?j?j.push(e):j=[e]:Je=e}function Ze(){if(Je){var e=Je,t=j;if(j=Je=null,Ye(e),t)for(e=0;e<t.length;e++)Ye(t[e])}}function Qe(e,t){return e(t)}function $e(){}var et=!1;function tt(e,t,n){if(et)return e(t,n);et=!0;try{return Qe(e,t,n)}finally{et=!1,(Je!==null||j!==null)&&($e(),Ze())}}function nt(e,t){var n=e.stateNode;if(n===null)return null;var i=Yi(n);if(i===null)return null;switch(n=i[t],t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var rt=!1;if(l)try{it={},Object.defineProperty(it,"passive",{get:function(){rt=!0}}),s.addEventListener(`test`,it,it),s.removeEventListener(`test`,it,it)}catch{rt=!1}var it;function at(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ot=!1,st=null,ct=!1,lt=null,ut={onError:function(e){ot=!0,st=e}};function dt(e,t,n,r,i,a,o,s,c){ot=!1,st=null,at.apply(ut,arguments)}function ft(e,t,n,i,a,o,s,c,l){if(dt.apply(this,arguments),ot){if(ot){var u=st;ot=!1,st=null}else throw Error(r(198));ct||(ct=!0,lt=u)}}function pt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ht(e){if(pt(e)!==e)throw Error(r(188))}function gt(e){var t=e.alternate;if(!t){if(t=pt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ht(a),e;if(o===i)return ht(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function _t(e){return e=gt(e),e===null?null:vt(e)}function vt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vt(e);if(t!==null)return t;e=e.sibling}return null}var yt=n.unstable_scheduleCallback,bt=n.unstable_cancelCallback,xt=n.unstable_shouldYield,St=n.unstable_requestPaint,Ct=n.unstable_now,wt=n.unstable_getCurrentPriorityLevel,Tt=n.unstable_ImmediatePriority,Et=n.unstable_UserBlockingPriority,Dt=n.unstable_NormalPriority,Ot=n.unstable_LowPriority,kt=n.unstable_IdlePriority,At=null,jt=null;function Mt(e){if(jt&&typeof jt.onCommitFiberRoot==`function`)try{jt.onCommitFiberRoot(At,e,void 0,(e.current.flags&128)==128)}catch{}}var Nt=Math.clz32?Math.clz32:It,Pt=Math.log,Ft=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(Pt(e)/Ft|0)|0}var Lt=64,Rt=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&0x7c00000;case 0x8000000:return 0x8000000;case 268435456:return 268435456;case 536870912:return 536870912;case 0x40000000:return 0x40000000;default:return e}}function Bt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&0xfffffff;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=zt(a))):r=zt(s)}else o=n&~i,o===0?a!==0&&(r=zt(a)):r=zt(o);if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Vt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ht(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),s=1<<o,c=i[o];c===-1?(!(s&n)||s&r)&&(i[o]=Vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ut(e){return e=e.pendingLanes&-0x40000001,e===0?e&0x40000000?0x40000000:0:e}function Wt(){var e=Lt;return Lt<<=1,!(Lt&4194240)&&(Lt=64),e}function Gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function qt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Jt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Yt(e){return e&=-e,1<e?4<e?e&0xfffffff?16:536870912:4:1}var Xt,Zt,Qt,$t,en,tn=!1,nn=[],rn=null,on=null,sn=null,cn=/* @__PURE__ */ new Map,ln=/* @__PURE__ */ new Map,un=[],dn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function fn(e,t){switch(e){case`focusin`:case`focusout`:rn=null;break;case`dragenter`:case`dragleave`:on=null;break;case`mouseover`:case`mouseout`:sn=null;break;case`pointerover`:case`pointerout`:cn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:ln.delete(t.pointerId)}}function pn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=qi(t),t!==null&&Zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mn(e,t,n,r,i){switch(t){case`focusin`:return rn=pn(rn,e,t,n,r,i),!0;case`dragenter`:return on=pn(on,e,t,n,r,i),!0;case`mouseover`:return sn=pn(sn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return cn.set(a,pn(cn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,ln.set(a,pn(ln.get(a)||null,e,t,n,r,i)),!0}return!1}function hn(e){var t=Ki(e.target);if(t!==null){var n=pt(t);if(n!==null){if(t=n.tag,t===13){if(t=mt(n),t!==null){e.blockedOn=t,en(e.priority,function(){Qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ge=r,n.target.dispatchEvent(r),Ge=null}else return t=qi(n),t!==null&&Zt(t),e.blockedOn=n,!1;t.shift()}return!0}function _n(e,t,n){gn(e)&&n.delete(t)}function vn(){tn=!1,rn!==null&&gn(rn)&&(rn=null),on!==null&&gn(on)&&(on=null),sn!==null&&gn(sn)&&(sn=null),cn.forEach(_n),ln.forEach(_n)}function yn(e,t){e.blockedOn===t&&(e.blockedOn=null,tn||(tn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,vn)))}function bn(e){function t(t){return yn(t,e)}if(0<nn.length){yn(nn[0],e);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&yn(rn,e),on!==null&&yn(on,e),sn!==null&&yn(sn,e),cn.forEach(t),ln.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)hn(n),n.blockedOn===null&&un.shift()}var xn=S.ReactCurrentBatchConfig,Sn=!0;function Cn(e,t,n,r){var i=M,a=xn.transition;xn.transition=null;try{M=1,Tn(e,t,n,r)}finally{M=i,xn.transition=a}}function wn(e,t,n,r){var i=M,a=xn.transition;xn.transition=null;try{M=4,Tn(e,t,n,r)}finally{M=i,xn.transition=a}}function Tn(e,t,n,r){if(Sn){var i=Dn(e,t,n,r);if(i===null)yi(e,t,r,En,n),fn(e,r);else if(mn(i,e,t,n,r))r.stopPropagation();else if(fn(e,r),t&4&&-1<dn.indexOf(e)){for(;i!==null;){var a=qi(i);if(a!==null&&Xt(a),a=Dn(e,t,n,r),a===null&&yi(e,t,r,En,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else yi(e,t,r,null,n)}}var En=null;function Dn(e,t,n,r){if(En=null,e=Ke(r),e=Ki(e),e!==null){if(t=pt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return En=e,null}function On(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(wt()){case Tt:return 1;case Et:return 4;case Dt:case Ot:return 16;case kt:return 536870912;default:return 16}default:return 16}}var kn=null,An=null,jn=null;function Mn(){if(jn)return jn;var e,t=An,n=t.length,r,i=`value`in kn?kn.value:kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return jn=i.slice(e,1<r?1-r:void 0)}function Nn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Fn(){return!1}function In(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?i.returnValue===!1:i.defaultPrevented)?Pn:Fn,this.isPropagationStopped=Fn,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=In(Ln),zn=A({},Ln,{view:0,detail:0}),Bn=In(zn),Vn,Hn,Un,Wn=A({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Un&&(Un&&e.type===`mousemove`?(Vn=e.screenX-Un.screenX,Hn=e.screenY-Un.screenY):Hn=Vn=0,Un=e),Vn)},movementY:function(e){return`movementY`in e?e.movementY:Hn}}),Gn=In(Wn),Kn=In(A({},Wn,{dataTransfer:0})),qn=In(A({},zn,{relatedTarget:0})),Jn=In(A({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0})),Yn=In(A({},Ln,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:s.clipboardData}})),Xn=In(A({},Ln,{data:0})),Zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Qn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},$n={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function N(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$n[e])?!!t[e]:!1}function er(){return N}var tr=In(A({},zn,{key:function(e){if(e.key){var t=Zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Nn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Qn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Nn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Nn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=In(A({},Wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=In(A({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=In(A({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=In(A({},Wn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=l&&`CompositionEvent`in s,cr=null;l&&`documentMode`in document&&(cr=document.documentMode);var P=l&&`TextEvent`in s&&!cr,F=l&&(!sr||cr&&8<cr&&11>=cr),I=` `,lr=!1;function ur(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function dr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var fr=!1;function pr(e,t){switch(e){case`compositionend`:return dr(t);case`keypress`:return t.which===32?(lr=!0,I):null;case`textInput`:return e=t.data,e===I&&lr?null:e;default:return null}}function mr(e,t){if(fr)return e===`compositionend`||!sr&&ur(e,t)?(e=Mn(),jn=An=kn=null,fr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return F&&t.locale!==`ko`?null:t.data;default:return null}}var hr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!hr[e.type]:t===`textarea`}function _r(e,t,n,r){Xe(r),t=xi(t,`onChange`),0<t.length&&(n=new Rn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var vr=null,yr=null;function br(e){pi(e,0)}function xr(e){if(ye(Ji(e)))return e}function Sr(e,t){if(e===`change`)return t}var Cr=!1;l&&(l?(Tr=`oninput`in document,Tr||=(Er=document.createElement(`div`),Er.setAttribute(`oninput`,`return;`),typeof Er.oninput==`function`),wr=Tr):wr=!1,Cr=wr&&(!document.documentMode||9<document.documentMode));var wr,Tr,Er;function Dr(){vr&&(vr.detachEvent(`onpropertychange`,Or),yr=vr=null)}function Or(e){if(e.propertyName===`value`&&xr(yr)){var t=[];_r(t,yr,e,Ke(e)),tt(br,t)}}function kr(e,t,n){e===`focusin`?(Dr(),vr=t,yr=n,vr.attachEvent(`onpropertychange`,Or)):e===`focusout`&&Dr()}function Ar(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return xr(yr)}function jr(e,t){if(e===`click`)return xr(t)}function Mr(e,t){if(e===`input`||e===`change`)return xr(t)}function Nr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Pr=typeof Object.is==`function`?Object.is:Nr;function Fr(e,t){if(Pr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!u.call(t,i)||!Pr(e[i],t[i]))return!1}return!0}function Ir(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lr(e,t){var n=Ir(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ir(n)}}function Rr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zr(){for(var e=s,t=be();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=be(e.document)}return t}function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Vr(e){var t=zr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rr(n.ownerDocument.documentElement,n)){if(r!==null&&Br(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||s,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Lr(n,a);var o=Lr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hr=l&&`documentMode`in document&&11>=document.documentMode,Ur=null,Wr=null,Gr=null,Kr=!1;function qr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kr||Ur==null||Ur!==be(r)||(r=Ur,`selectionStart`in r&&Br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||s).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Fr(Gr,r)||(Gr=r,r=xi(Wr,`onSelect`),0<r.length&&(t=new Rn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Yr={animationend:Jr(`Animation`,`AnimationEnd`),animationiteration:Jr(`Animation`,`AnimationIteration`),animationstart:Jr(`Animation`,`AnimationStart`),transitionend:Jr(`Transition`,`TransitionEnd`)},Xr={},Zr={};l&&(Zr=document.createElement(`div`).style,`AnimationEvent`in s||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),`TransitionEvent`in s||delete Yr.transitionend.transition);function Qr(e){if(Xr[e])return Xr[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zr)return Xr[e]=t[n];return e}var $r=Qr(`animationend`),ei=Qr(`animationiteration`),ti=Qr(`animationstart`),ni=Qr(`transitionend`),ri=/* @__PURE__ */ new Map,ii=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ai(e,t){ri.set(e,t),o(t,[e])}for(li=0;li<ii.length;li++)oi=ii[li],si=oi.toLowerCase(),ci=oi[0].toUpperCase()+oi.slice(1),ai(si,`on`+ci);var oi,si,ci,li;ai($r,`onAnimationEnd`),ai(ei,`onAnimationIteration`),ai(ti,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai(ni,`onTransitionEnd`),c(`onMouseEnter`,[`mouseout`,`mouseover`]),c(`onMouseLeave`,[`mouseout`,`mouseover`]),c(`onPointerEnter`,[`pointerout`,`pointerover`]),c(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ui=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),di=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ui));function fi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,ft(r,t,void 0,e),e.currentTarget=null}function pi(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break e;fi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break e;fi(i,s,l),a=c}}}if(ct)throw e=lt,ct=!1,lt=null,e}function mi(e,t){var n=t[Wi];n===void 0&&(n=t[Wi]=/* @__PURE__ */ new Set);var r=e+`__bubble`;n.has(r)||(vi(t,e,2,!1),n.add(r))}function hi(e,t,n){var r=0;t&&(r|=4),vi(n,e,r,t)}var gi=`_reactListening`+Math.random().toString(36).slice(2);function _i(e){if(!e[gi]){e[gi]=!0,i.forEach(function(t){t!==`selectionchange`&&(di.has(t)||hi(t,!1,e),hi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,hi(`selectionchange`,!1,t))}}function vi(e,t,n,r){switch(On(t)){case 1:var i=Cn;break;case 4:i=wn;break;default:i=Tn}n=i.bind(null,t,n,e),i=void 0,!rt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function yi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;c!==null;){if(o=Ki(c),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}c=c.parentNode}}r=r.return}tt(function(){var r=a,i=Ke(n),o=[];e:{var c=ri.get(e);if(c!==void 0){var l=Rn,u=e;switch(e){case`keypress`:if(Nn(n)===0)break e;case`keydown`:case`keyup`:l=tr;break;case`focusin`:u=`focus`,l=qn;break;case`focusout`:u=`blur`,l=qn;break;case`beforeblur`:case`afterblur`:l=qn;break;case`click`:if(n.button===2)break e;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Gn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=rr;break;case $r:case ei:case ti:l=Jn;break;case ni:l=ir;break;case`scroll`:l=Bn;break;case`wheel`:l=ar;break;case`copy`:case`cut`:case`paste`:l=Yn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=nr}var d=!!(t&4),f=!d&&e===`scroll`,p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){h=m;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,p!==null&&(g=nt(m,p),g!=null&&d.push(bi(m,g,h)))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),o.push({event:c,listeners:d}))}}if(!(t&7)){e:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Ge&&(u=n.relatedTarget||n.fromElement)&&(Ki(u)||u[Ui]))break e;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:s,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ki(u):null,u!==null&&(f=pt(u),u!==f||u.tag!==5&&u.tag!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Gn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=nr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ji(l),h=u==null?c:Ji(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ki(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)t:{for(d=l,p=u,m=0,h=d;h;h=Si(h))m++;for(h=0,g=p;g;g=Si(g))h++;for(;0<m-h;)d=Si(d),m--;for(;0<h-m;)p=Si(p),h--;for(;m--;){if(d===p||p!==null&&d===p.alternate)break t;d=Si(d),p=Si(p)}d=null}else d=null;l!==null&&Ci(o,c,l,d,!1),u!==null&&f!==null&&Ci(o,f,u,d,!0)}}e:{if(c=r?Ji(r):s,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Sr;else if(gr(c)){if(Cr)_=Mr;else{_=Ar;var v=kr}}else(l=c.nodeName)&&l.toLowerCase()===`input`&&(c.type===`checkbox`||c.type===`radio`)&&(_=jr);if(_&&=_(e,r)){_r(o,_,n,i);break e}v&&v(e,c,r),e===`focusout`&&(v=c._wrapperState)&&v.controlled&&c.type===`number`&&Ee(c,`number`,c.value)}switch(v=r?Ji(r):s,e){case`focusin`:(gr(v)||v.contentEditable===`true`)&&(Ur=v,Wr=r,Gr=null);break;case`focusout`:Gr=Wr=Ur=null;break;case`mousedown`:Kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Kr=!1,qr(o,n,i);break;case`selectionchange`:if(Hr)break;case`keydown`:case`keyup`:qr(o,n,i)}var y;if(sr)e:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break e;case`compositionend`:b=`onCompositionEnd`;break e;case`compositionupdate`:b=`onCompositionUpdate`;break e}b=void 0}else fr?ur(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(F&&n.locale!==`ko`&&(fr||b!==`onCompositionStart`?b===`onCompositionEnd`&&fr&&(y=Mn()):(kn=i,An=`value`in kn?kn.value:kn.textContent,fr=!0)),v=xi(r,b),0<v.length&&(b=new Xn(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=dr(n),y!==null&&(b.data=y)))),(y=P?pr(e,n):mr(e,n))&&(r=xi(r,`onBeforeInput`),0<r.length&&(i=new Xn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=y))}pi(o,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=nt(e,n),a!=null&&r.unshift(bi(e,a,i)),a=nt(e,t),a!=null&&r.push(bi(e,a,i))),e=e.return}return r}function Si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ci(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=nt(n,a),c!=null&&o.unshift(bi(n,c,s))):i||(c=nt(n,a),c!=null&&o.push(bi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var wi=/\r\n?/g,Ti=/\u0000|\uFFFD/g;function Ei(e){return(typeof e==`string`?e:``+e).replace(wi,`
`).replace(Ti,``)}function Di(e,t,n){if(t=Ei(t),Ei(e)!==t&&n)throw Error(r(425))}function Oi(){}var ki=null,Ai=null;function ji(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout==`function`?setTimeout:void 0,Ni=typeof clearTimeout==`function`?clearTimeout:void 0,Pi=typeof Promise==`function`?Promise:void 0,Fi=typeof queueMicrotask==`function`?queueMicrotask:typeof Pi<`u`?function(e){return Pi.resolve(null).then(e).catch(Ii)}:Mi;function Ii(e){setTimeout(function(){throw e})}function Li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),bn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);bn(t)}function Ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function zi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),Vi=`__reactFiber$`+Bi,Hi=`__reactProps$`+Bi,Ui=`__reactContainer$`+Bi,Wi=`__reactEvents$`+Bi,L=`__reactListeners$`+Bi,Gi=`__reactHandles$`+Bi;function Ki(e){var t=e[Vi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ui]||n[Vi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zi(e);e!==null;){if(n=e[Vi])return n;e=zi(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[Vi]||e[Ui],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ji(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Yi(e){return e[Hi]||null}var Xi=[],Zi=-1;function Qi(e){return{current:e}}function R(e){0>Zi||(e.current=Xi[Zi],Xi[Zi]=null,Zi--)}function z(e,t){Zi++,Xi[Zi]=e.current,e.current=t}var $i={},B=Qi($i),V=Qi(!1),ea=$i;function ta(e,t){var n=e.type.contextTypes;if(!n)return $i;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function na(e){return e=e.childContextTypes,e!=null}function ra(){R(V),R(B)}function ia(e,t,n){if(B.current!==$i)throw Error(r(168));z(B,t),z(V,n)}function aa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,me(e)||`Unknown`,a));return A({},n,i)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$i,ea=B.current,z(B,e),z(V,V.current),!0}function sa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=aa(e,t,ea),i.__reactInternalMemoizedMergedChildContext=e,R(V),R(B),z(B,e)):R(V),z(V,n)}var ca=null,la=!1,ua=!1;function da(e){ca===null?ca=[e]:ca.push(e)}function fa(e){la=!0,da(e)}function pa(){if(!ua&&ca!==null){ua=!0;var e=0,t=M;try{var n=ca;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ca=null,la=!1}catch(t){throw ca!==null&&(ca=ca.slice(e+1)),yt(Tt,pa),t}finally{M=t,ua=!1}}return null}var ma=[],ha=0,H=null,ga=0,U=[],W=0,G=null,K=1,_a=``;function va(e,t){ma[ha++]=ga,ma[ha++]=H,H=e,ga=t}function q(e,t,n){U[W++]=K,U[W++]=_a,U[W++]=G,G=e;var r=K;e=_a;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,K=1<<32-Nt(t)+i|n<<i|r,_a=a+e}else K=1<<a|n<<i|r,_a=e}function ya(e){e.return!==null&&(va(e,1),q(e,1,0))}function ba(e){for(;e===H;)H=ma[--ha],ma[ha]=null,ga=ma[--ha],ma[ha]=null;for(;e===G;)G=U[--W],U[W]=null,_a=U[--W],U[W]=null,K=U[--W],U[W]=null}var xa=null,Sa=null,J=!1,Ca=null;function wa(e,t){var n=Jl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,xa=e,Sa=Ri(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,xa=e,Sa=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=G===null?null:{id:K,overflow:_a},e.memoizedState={dehydrated:t,treeContext:n,retryLane:0x40000000},n=Jl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xa=e,Sa=null,!0);default:return!1}}function Ea(e){return!!(e.mode&1)&&!(e.flags&128)}function Y(e){if(J){var t=Sa;if(t){var n=t;if(!Ta(e,t)){if(Ea(e))throw Error(r(418));t=Ri(n.nextSibling);var i=xa;t&&Ta(e,t)?wa(i,n):(e.flags=e.flags&-4097|2,J=!1,xa=e)}}else{if(Ea(e))throw Error(r(418));e.flags=e.flags&-4097|2,J=!1,xa=e}}}function Da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xa=e}function Oa(e){if(e!==xa)return!1;if(!J)return Da(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!ji(e.type,e.memoizedProps)),t&&=Sa){if(Ea(e))throw ka(),Error(r(418));for(;t;)wa(e,t),t=Ri(t.nextSibling)}if(Da(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Sa=Ri(e.nextSibling);break e}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Sa=null}}else Sa=xa?Ri(e.stateNode.nextSibling):null;return!0}function ka(){for(var e=Sa;e;)e=Ri(e.nextSibling)}function Aa(){Sa=xa=null,J=!1}function ja(e){Ca===null?Ca=[e]:Ca.push(e)}var Ma=S.ReactCurrentBatchConfig;function Na(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Pa(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Fa(e){return(0,e._init)(e._payload)}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=/* @__PURE__ */ new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Zl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===T?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Fa(i)===t.type)?(r=a(t,n.props),r.ref=Na(e,t,n),r.return=e,r):(r=Ql(n.type,n.key,n.props,null,e.mode,r),r.ref=Na(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=nu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=$l(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=tu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case C:return n=Ql(t.type,t.key,t.props,null,e.mode,n),n.ref=Na(e,null,t),n.return=e,n;case w:return t=nu(t,e.mode,n),t.return=e,t;case O:return f(e,(0,t._init)(t._payload),n)}if(De(t)||k(t))return t=$l(t,e.mode,n,null),t.return=e,t;Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case C:return n.key===i?l(e,t,n,r):null;case w:return n.key===i?u(e,t,n,r):null;case O:return i=n._init,p(e,t,i(n._payload),r)}if(De(n)||k(n))return i===null?d(e,t,n,r,null):null;Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case C:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case w:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:var a=r._init;return m(e,t,n,a(r._payload),i)}if(De(r)||k(r))return e=e.get(n)||null,d(t,e,r,i,null);Pa(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),J&&va(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return J&&va(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),J&&va(r,h),l}function g(a,s,c,l){var u=k(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),J&&va(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return J&&va(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),J&&va(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===T&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case C:e:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===T){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break e}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===O&&Fa(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Na(e,l,i),r.return=e,e=r;break e}n(e,l);break}t(e,l),l=l.sibling}i.type===T?(r=$l(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Ql(i.type,i.key,i.props,null,e.mode,o),o.ref=Na(e,r,i),o.return=e,e=o)}return s(e);case w:e:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}r=nu(i,e.mode,o),r.return=e,e=r}return s(e);case O:return l=i._init,_(e,r,l(i._payload),o)}if(De(i))return h(e,r,i,o);if(k(i))return g(e,r,i,o);Pa(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=tu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var La=Ia(!0),Ra=Ia(!1),za=Qi(null),Ba=null,Va=null,Ha=null;function Ua(){Ha=Va=Ba=null}function Wa(e){var t=za.current;R(za),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ka(e,t){Ba=e,Ha=Va=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ps=!0),e.firstContext=null)}function qa(e){var t=e._currentValue;if(Ha!==e){if(e={context:e,memoizedValue:t,next:null},Va===null){if(Ba===null)throw Error(r(308));Va=e,Ba.dependencies={lanes:0,firstContext:e}}else Va=Va.next=e}return t}var Ja=null;function Ya(e){Ja===null?Ja=[e]:Ja.push(e)}function Xa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ya(t)):(n.next=i.next,i.next=n),t.interleaved=n,Za(e,r)}function Za(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qa=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function eo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function to(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Za(e,n)}return i=r.interleaved,i===null?(t.next=t,Ya(r)):(t.next=i.next,i.next=t),r.interleaved=t,Za(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}function ro(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var i=e.updateQueue;Qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break e;d=A({},d,f);break e;case 2:Qa=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Xc|=o,e.lanes=o,e.memoizedState=d}}function ao(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var oo={},so=Qi(oo),co=Qi(oo),lo=Qi(oo);function uo(e){if(e===oo)throw Error(r(174));return e}function fo(e,t){switch(z(lo,t),z(co,e),z(so,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pe(t,e)}R(so),z(so,t)}function po(){R(so),R(co),R(lo)}function mo(e){uo(lo.current);var t=uo(so.current),n=Pe(t,e.type);t!==n&&(z(co,e),z(so,n))}function ho(e){co.current===e&&(R(so),R(co))}var go=Qi(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=[];function yo(){for(var e=0;e<vo.length;e++)vo[e]._workInProgressVersionPrimary=null;vo.length=0}var bo=S.ReactCurrentDispatcher,xo=S.ReactCurrentBatchConfig,So=0,Z=null,Co=null,wo=null,To=!1,Eo=!1,Do=0,Oo=0;function ko(){throw Error(r(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pr(e[n],t[n]))return!1;return!0}function jo(e,t,n,i,a,o){if(So=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bo.current=e===null||e.memoizedState===null?ms:hs,e=n(i,a),Eo){o=0;do{if(Eo=!1,Do=0,25<=o)throw Error(r(301));o+=1,wo=Co=null,t.updateQueue=null,bo.current=gs,e=n(i,a)}while(Eo)}if(bo.current=ps,t=Co!==null&&Co.next!==null,So=0,wo=Co=Z=null,To=!1,t)throw Error(r(300));return e}function Mo(){var e=Do!==0;return Do=0,e}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wo===null?Z.memoizedState=wo=e:wo=wo.next=e,wo}function Po(){if(Co===null){var e=Z.alternate;e=e===null?null:e.memoizedState}else e=Co.next;var t=wo===null?Z.memoizedState:wo.next;if(t!==null)wo=t,Co=e;else{if(e===null)throw Error(r(310));Co=e,e={memoizedState:Co.memoizedState,baseState:Co.baseState,baseQueue:Co.baseQueue,queue:Co.queue,next:null},wo===null?Z.memoizedState=wo=e:wo=wo.next=e}return wo}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){var t=Po(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Co,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((So&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,Z.lanes|=d,Xc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Pr(i,t.memoizedState)||(Ps=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Z.lanes|=o,Xc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Lo(e){var t=Po(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Pr(o,t.memoizedState)||(Ps=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Ro(){}function zo(e,t){var n=Z,i=Po(),a=t(),o=!Pr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ps=!0),i=i.queue,Zo(Ho.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||wo!==null&&wo.memoizedState.tag&1){if(n.flags|=2048,Ko(9,Vo.bind(null,n,i,a,t),void 0,null),Uc===null)throw Error(r(349));So&30||Bo(n,t,a)}return a}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pr(e,n)}catch{return!0}}function Wo(e){var t=Za(e,1);t!==null&&gl(t,e,1,-1)}function Go(e){var t=No();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t.queue=e,e=e.dispatch=ls.bind(null,Z,e),[t.memoizedState,e]}function Ko(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qo(){return Po().memoizedState}function Jo(e,t,n,r){var i=No();Z.flags|=e,i.memoizedState=Ko(1|t,n,void 0,r===void 0?null:r)}function Yo(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=void 0;if(Co!==null){var o=Co.memoizedState;if(a=o.destroy,r!==null&&Ao(r,o.deps)){i.memoizedState=Ko(t,n,a,r);return}}Z.flags|=e,i.memoizedState=Ko(1|t,n,a,r)}function Xo(e,t){return Jo(8390656,8,e,t)}function Zo(e,t){return Yo(2048,8,e,t)}function Qo(e,t){return Yo(4,2,e,t)}function $o(e,t){return Yo(4,4,e,t)}function es(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ts(e,t,n){return n=n==null?null:n.concat([e]),Yo(4,4,es.bind(null,t,e),n)}function ns(){}function rs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function is(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function as(e,t,n){return So&21?(Pr(n,t)||(n=Wt(),Z.lanes|=n,Xc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ps=!0),e.memoizedState=n)}function os(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=xo.transition;xo.transition={};try{e(!1),t()}finally{M=n,xo.transition=r}}function ss(){return Po().memoizedState}function cs(e,t,n){var r=hl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},us(e))ds(t,n);else if(n=Xa(e,t,n,r),n!==null){var i=ml();gl(n,e,r,i),fs(n,t,r)}}function ls(e,t,n){var r=hl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))ds(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Pr(s,o)){var c=t.interleaved;c===null?(i.next=i,Ya(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Xa(e,t,i,r),n!==null&&(i=ml(),gl(n,e,r,i),fs(n,t,r))}}function us(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function ds(e,t){Eo=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}var ps={readContext:qa,useCallback:ko,useContext:ko,useEffect:ko,useImperativeHandle:ko,useInsertionEffect:ko,useLayoutEffect:ko,useMemo:ko,useReducer:ko,useRef:ko,useState:ko,useDebugValue:ko,useDeferredValue:ko,useTransition:ko,useMutableSource:ko,useSyncExternalStore:ko,useId:ko,unstable_isNewReconciler:!1},ms={readContext:qa,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:qa,useEffect:Xo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Jo(4194308,4,es.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=No();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=No();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cs.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:Go,useDebugValue:ns,useDeferredValue:function(e){return No().memoizedState=e},useTransition:function(){var e=Go(!1),t=e[0];return e=os.bind(null,e[1]),No().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Z,a=No();if(J){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Uc===null)throw Error(r(349));So&30||Bo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Xo(Ho.bind(null,i,o,e),[e]),i.flags|=2048,Ko(9,Vo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=No(),t=Uc.identifierPrefix;if(J){var n=_a,r=K;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Do++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Oo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},hs={readContext:qa,useCallback:rs,useContext:qa,useEffect:Zo,useImperativeHandle:ts,useInsertionEffect:Qo,useLayoutEffect:$o,useMemo:is,useReducer:Io,useRef:qo,useState:function(){return Io(Fo)},useDebugValue:ns,useDeferredValue:function(e){return as(Po(),Co.memoizedState,e)},useTransition:function(){return[Io(Fo)[0],Po().memoizedState]},useMutableSource:Ro,useSyncExternalStore:zo,useId:ss,unstable_isNewReconciler:!1},gs={readContext:qa,useCallback:rs,useContext:qa,useEffect:Zo,useImperativeHandle:ts,useInsertionEffect:Qo,useLayoutEffect:$o,useMemo:is,useReducer:Lo,useRef:qo,useState:function(){return Lo(Fo)},useDebugValue:ns,useDeferredValue:function(e){var t=Po();return Co===null?t.memoizedState=e:as(t,Co.memoizedState,e)},useTransition:function(){return[Lo(Fo)[0],Po().memoizedState]},useMutableSource:Ro,useSyncExternalStore:zo,useId:ss,unstable_isNewReconciler:!1};function _s(e,t){if(e&&e.defaultProps){for(var n in t=A({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?pt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=eo(r,i);a.payload=t,n!=null&&(a.callback=n),t=to(e,a,i),t!==null&&(gl(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=eo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=to(e,a,i),t!==null&&(gl(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ml(),r=hl(e),i=eo(n,r);i.tag=2,t!=null&&(i.callback=t),t=to(e,i,r),t!==null&&(gl(t,e,r,n),no(t,e,r))}};function bs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,a):!0}function xs(e,t,n){var r=!1,i=$i,a=t.contextType;return typeof a==`object`&&a?a=qa(a):(i=na(t)?ea:B.current,r=t.contextTypes,a=(r=r!=null)?ta(e,i):$i),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ss(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$a(e);var a=t.contextType;typeof a==`object`&&a?i.context=qa(a):(a=na(t)?ea:B.current,i.context=ta(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(vs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&ys.enqueueReplaceState(i,i.state,null),io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function ws(e,t){try{var n=``,r=t;do n+=fe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Es(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ds=typeof WeakMap==`function`?WeakMap:Map;function Os(e,t,n){n=eo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,al=r),Es(e,t)},n}function ks(e,t,n){n=eo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Es(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Es(e,t),typeof r!=`function`&&(ol===null?ol=/* @__PURE__ */ new Set([this]):ol.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function As(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ds;var i=/* @__PURE__ */ new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=/* @__PURE__ */ new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vl.bind(null,e,t,n),t.then(e,e))}function js(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ms(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=eo(-1,1),t.tag=2,to(n,t,1))),n.lanes|=1),e)}var Ns=S.ReactCurrentOwner,Ps=!1;function Fs(e,t,n,r){t.child=e===null?Ra(t,null,n,r):La(t,e.child,n,r)}function Is(e,t,n,r,i){n=n.render;var a=t.ref;return Ka(t,i),r=jo(e,t,n,r,a,i),n=Mo(),e!==null&&!Ps?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nc(e,t,i)):(J&&n&&ya(t),t.flags|=1,Fs(e,t,r,i),t.child)}function Ls(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Yl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Rs(e,t,a,r,i)):(e=Ql(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Fr:n,n(o,r)&&e.ref===t.ref)return nc(e,t,i)}return t.flags|=1,e=Zl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Rs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Fr(a,r)&&e.ref===t.ref){if(Ps=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ps=!0);else return t.lanes=e.lanes,nc(e,t,i)}}return Vs(e,t,n,r,i)}function zs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(qc,Kc),Kc|=n;else{if(!(n&0x40000000))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=0x40000000,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(qc,Kc),Kc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,z(qc,Kc),Kc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),z(qc,Kc),Kc|=r;return Fs(e,t,i,n),t.child}function Bs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vs(e,t,n,r,i){var a=na(n)?ea:B.current;return a=ta(t,a),Ka(t,i),n=jo(e,t,n,r,a,i),r=Mo(),e!==null&&!Ps?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nc(e,t,i)):(J&&r&&ya(t),t.flags|=1,Fs(e,t,n,i),t.child)}function Hs(e,t,n,r,i){if(na(n)){var a=!0;oa(t)}else a=!1;if(Ka(t,i),t.stateNode===null)tc(e,t),xs(t,n,r),Cs(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=qa(l):(l=na(n)?ea:B.current,l=ta(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ss(t,o,r,l),Qa=!1;var f=t.memoizedState;o.state=f,io(t,r,o,i),c=t.memoizedState,s!==r||f!==c||V.current||Qa?(typeof u==`function`&&(vs(t,n,u,r),c=t.memoizedState),(s=Qa||bs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,X(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:_s(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=qa(c):(c=na(n)?ea:B.current,c=ta(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ss(t,o,r,c),Qa=!1,f=t.memoizedState,o.state=f,io(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||V.current||Qa?(typeof p==`function`&&(vs(t,n,p,r),m=t.memoizedState),(l=Qa||bs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Us(e,t,n,r,a,i)}function Us(e,t,n,r,i,a){Bs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&sa(t,n,!1),nc(e,t,a);r=t.stateNode,Ns.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=La(t,e.child,null,a),t.child=La(t,null,s,a)):Fs(e,t,s,a),t.memoizedState=r.state,i&&sa(t,n,!0),t.child}function Ws(e){var t=e.stateNode;t.pendingContext?ia(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ia(e,t.context,!1),fo(e,t.containerInfo)}function Gs(e,t,n,r,i){return Aa(),ja(i),t.flags|=256,Fs(e,t,n,r),t.child}var Ks={dehydrated:null,treeContext:null,retryLane:0};function qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Js(e,t,n){var r=t.pendingProps,i=go.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(go,i&1),e===null)return Y(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:0x40000000:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=eu(o,r,0,null),e=$l(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=qs(n),t.memoizedState=Ks,e):Ys(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Zs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Zl(i,c),r.subtreeFlags=i.subtreeFlags&0xe00000),s===null?(a=$l(a,o,n,null),a.flags|=2):a=Zl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?qs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ks,r}return a=e.child,e=a.sibling,r=Zl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ys(e,t){return t=eu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Xs(e,t,n,r){return r!==null&&ja(r),La(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Ts(Error(r(422))),Xs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=eu({mode:`visible`,children:i.children},a,0,null),o=$l(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&La(t,e.child,null,s),t.child.memoizedState=qs(s),t.memoizedState=Ks,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Xs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Ts(o,i,void 0),Xs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ps||c){if(i=Uc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Za(e,a),gl(i,e,a,-1))}return Al(),i=Ts(Error(r(421))),Xs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Ul.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Sa=Ri(a.nextSibling),xa=t,J=!0,Ca=null,e!==null&&(U[W++]=K,U[W++]=_a,U[W++]=G,K=e.id,_a=e.overflow,G=t),t=Ys(t,i.children),t.flags|=4096,t)}function Qs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ga(e.return,t,n)}function $s(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Fs(e,t,r.children,n),r=go.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qs(e,n,t);else if(e.tag===19)Qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(go,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$s(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$s(t,!0,n,null,a);break;case`together`:$s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xc|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Zl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rc(e,t,n){switch(t.tag){case 3:Ws(t),Aa();break;case 5:mo(t);break;case 1:na(t.type)&&oa(t);break;case 4:fo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(za,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?n&t.child.childLanes?Js(e,t,n):(z(go,go.current&1),e=nc(e,t,n),e===null?null:e.sibling):(z(go,go.current&1),t.flags|=128,null);z(go,go.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(go,go.current),r)break;return null;case 22:case 23:return t.lanes=0,zs(e,t,n)}return nc(e,t,n)}var ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ac=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,uo(so.current);var o=null;switch(n){case`input`:i=xe(e,i),r=xe(e,r),o=[];break;case`select`:i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),o=[];break;case`textarea`:i=ke(e,i),r=ke(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Oi)}Ue(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&mi(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function sc(e,t){if(!J)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function cc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&0xe00000,r|=i.flags&0xe00000,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lc(e,t,n){var i=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cc(t),null;case 1:return na(t.type)&&ra(),cc(t),null;case 3:return i=t.stateNode,po(),R(V),R(B),yo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Oa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ca!==null&&(bl(Ca),Ca=null))),cc(t),null;case 5:ho(t);var o=uo(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)ac(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return cc(t),null}if(e=uo(so.current),Oa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Vi]=t,i[Hi]=s,e=!!(t.mode&1),n){case`dialog`:mi(`cancel`,i),mi(`close`,i);break;case`iframe`:case`object`:case`embed`:mi(`load`,i);break;case`video`:case`audio`:for(o=0;o<ui.length;o++)mi(ui[o],i);break;case`source`:mi(`error`,i);break;case`img`:case`image`:case`link`:mi(`error`,i),mi(`load`,i);break;case`details`:mi(`toggle`,i);break;case`input`:Se(i,s),mi(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},mi(`invalid`,i);break;case`textarea`:Ae(i,s),mi(`invalid`,i)}for(var c in Ue(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&Di(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(s.suppressHydrationWarning!==!0&&Di(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&mi(`scroll`,i)}switch(n){case`input`:ve(i),Te(i,s,!0);break;case`textarea`:ve(i),Me(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Oi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Ne(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Vi]=t,e[Hi]=i,ic(e,t,!1,!1),t.stateNode=e;e:{switch(c=We(n,i),n){case`dialog`:mi(`cancel`,e),mi(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:mi(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ui.length;o++)mi(ui[o],e);o=i;break;case`source`:mi(`error`,e),o=i;break;case`img`:case`image`:case`link`:mi(`error`,e),mi(`load`,e),o=i;break;case`details`:mi(`toggle`,e),o=i;break;case`input`:Se(e,i),o=xe(e,i),mi(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=A({},i,{value:void 0}),mi(`invalid`,e);break;case`textarea`:Ae(e,i),o=ke(e,i),mi(`invalid`,e);break;default:o=i}for(s in Ue(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ve(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ie(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Le(e,u):typeof u==`number`&&Le(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&mi(`scroll`,e):u!=null&&x(e,s,u,c))}switch(n){case`input`:ve(e),Te(e,i,!1);break;case`textarea`:ve(e),Me(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+he(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Oe(e,!!i.multiple,i.defaultValue,!0):Oe(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Oi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break e;case`img`:i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return cc(t),null;case 6:if(e&&t.stateNode!=null)oc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=uo(lo.current),uo(so.current),Oa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Vi]=t,(s=i.nodeValue!==n)&&(e=xa,e!==null))switch(e.tag){case 3:Di(i.nodeValue,n,!!(e.mode&1));break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Vi]=t,t.stateNode=i}return cc(t),null;case 13:if(R(go),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Sa!==null&&t.mode&1&&!(t.flags&128))ka(),Aa(),t.flags|=98560,s=!1;else if(s=Oa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Vi]=t}else Aa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;cc(t),s=!1}else Ca!==null&&(bl(Ca),Ca=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||go.current&1?Jc===0&&(Jc=3):Al())),t.updateQueue!==null&&(t.flags|=4),cc(t),null);case 4:return po(),e===null&&_i(t.stateNode.containerInfo),cc(t),null;case 10:return Wa(t.type._context),cc(t),null;case 17:return na(t.type)&&ra(),cc(t),null;case 19:if(R(go),s=t.memoizedState,s===null)return cc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)sc(s,!1);else{if(Jc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=_o(e),c!==null){for(t.flags|=128,sc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=0xe00002,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(go,go.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ct()>nl&&(t.flags|=128,i=!0,sc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=_o(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!J)return cc(t),null}else 2*Ct()-s.renderingStartTime>nl&&n!==0x40000000&&(t.flags|=128,i=!0,sc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(cc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ct(),t.sibling=null,n=go.current,z(go,i?n&1|2:n&1),t);case 22:case 23:return El(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Kc&0x40000000&&(cc(t),t.subtreeFlags&6&&(t.flags|=8192)):cc(t),null;case 24:case 25:return null}throw Error(r(156,t.tag))}function uc(e,t){switch(ba(t),t.tag){case 1:return na(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return po(),R(V),R(B),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(R(go),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(go),null;case 4:return po(),null;case 10:return Wa(t.type._context),null;case 22:case 23:return El(),null;default:return null}}var dc=!1,fc=!1,pc=typeof WeakSet==`function`?WeakSet:Set,Q=null;function mc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Bl(e,t,n)}else n.current=null}}function hc(e,t,n){try{n()}catch(n){Bl(e,t,n)}}var gc=!1;function _c(e,t){if(ki=Sn,e=zr(),Br(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||s;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var c=0,l=-1,u=-1,d=0,f=0,p=e,m=null;t:for(;;){for(var h;p!==n||a!==0&&p.nodeType!==3||(l=c+a),p!==o||i!==0&&p.nodeType!==3||(u=c+i),p.nodeType===3&&(c+=p.nodeValue.length),(h=p.firstChild)!==null;)m=p,p=h;for(;;){if(p===e)break t;if(m===n&&++d===a&&(l=c),m===o&&++f===i&&(u=c),(h=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=h}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n||={start:0,end:0}}else n=null;for(Ai={focusedElem:e,selectionRange:n},Sn=!1,Q=t;Q!==null;)if(t=Q,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,v=g.memoizedState,y=t.stateNode;y.__reactInternalSnapshotBeforeUpdate=y.getSnapshotBeforeUpdate(t.elementType===t.type?_:_s(t.type,_),v)}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent=``:b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Bl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return g=gc,gc=!1,g}function vc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&hc(t,n,a)}i=i.next}while(i!==r)}}function yc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bc(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t==`function`?t(e):t.current=e}}function xc(e){var t=e.alternate;t!==null&&(e.alternate=null,xc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vi],delete t[Hi],delete t[Wi],delete t[L],delete t[Gi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sc(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}var Ec=null,Dc=!1;function Oc(e,t,n){for(n=n.child;n!==null;)kc(e,t,n),n=n.sibling}function kc(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount==`function`)try{jt.onCommitFiberUnmount(At,n)}catch{}switch(n.tag){case 5:fc||mc(n,t);case 6:var r=Ec,i=Dc;Ec=null,Oc(e,t,n),Ec=r,Dc=i,Ec!==null&&(Dc?(e=Ec,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ec.removeChild(n.stateNode));break;case 18:Ec!==null&&(Dc?(e=Ec,n=n.stateNode,e.nodeType===8?Li(e.parentNode,n):e.nodeType===1&&Li(e,n),bn(e)):Li(Ec,n.stateNode));break;case 4:r=Ec,i=Dc,Ec=n.stateNode.containerInfo,Dc=!0,Oc(e,t,n),Ec=r,Dc=i;break;case 0:case 11:case 14:case 15:if(!fc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&hc(n,t,o),i=i.next}while(i!==r)}Oc(e,t,n);break;case 1:if(!fc&&(mc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Bl(n,t,e)}Oc(e,t,n);break;case 21:Oc(e,t,n);break;case 22:n.mode&1?(fc=(r=fc)||n.memoizedState!==null,Oc(e,t,n),fc=r):Oc(e,t,n);break;default:Oc(e,t,n)}}function Ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pc),t.forEach(function(t){var r=Wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function jc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Ec=c.stateNode,Dc=!1;break e;case 3:case 4:Ec=c.stateNode.containerInfo,Dc=!0;break e}c=c.return}if(Ec===null)throw Error(r(160));kc(o,s,a),Ec=null,Dc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Bl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jc(t,e),Nc(e),i&4){try{vc(3,e,e.return),yc(3,e)}catch(t){Bl(e,e.return,t)}try{vc(5,e,e.return)}catch(t){Bl(e,e.return,t)}}break;case 1:jc(t,e),Nc(e),i&512&&n!==null&&mc(n,n.return);break;case 5:if(jc(t,e),Nc(e),i&512&&n!==null&&mc(n,n.return),e.flags&32){var a=e.stateNode;try{Le(a,``)}catch(t){Bl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Ce(a,o),We(c,s);var u=We(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ve(a,f):d===`dangerouslySetInnerHTML`?Ie(a,f):d===`children`?Le(a,f):x(a,d,f,u)}switch(c){case`input`:we(a,o);break;case`textarea`:je(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Oe(a,!!o.multiple,o.multiple?[]:``,!1):Oe(a,!!o.multiple,o.defaultValue,!0)):Oe(a,!!o.multiple,m,!1)}a[Hi]=o}catch(t){Bl(e,e.return,t)}}break;case 6:if(jc(t,e),Nc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Bl(e,e.return,t)}}break;case 3:if(jc(t,e),Nc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(t){Bl(e,e.return,t)}break;case 4:jc(t,e),Nc(e);break;case 13:jc(t,e),Nc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(tl=Ct())),i&4&&Ac(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(fc=(u=fc)||d,jc(t,e),fc=u):jc(t,e),Nc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(f=Q=d;Q!==null;){switch(p=Q,m=p.child,p.tag){case 0:case 11:case 14:case 15:vc(4,p,p.return);break;case 1:mc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Bl(i,n,e)}}break;case 5:mc(p,p.return);break;case 22:if(p.memoizedState!==null){Lc(f);continue}}m===null?Lc(f):(m.return=p,Q=m)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Be(`display`,s))}catch(t){Bl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Bl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jc(t,e),Nc(e),i&4&&Ac(e);break;case 21:break;default:jc(t,e),Nc(e)}}function Nc(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sc(n)){var i=n;break e}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Le(a,``),i.flags&=-33),Tc(e,Cc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;wc(e,Cc(e),o);break;default:throw Error(r(161))}}catch(t){Bl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pc(e,t,n){Q=e,Fc(e,t,n)}function Fc(e,t,n){for(var r=!!(e.mode&1);Q!==null;){var i=Q,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||fc;s=dc;var l=fc;if(dc=o,(fc=c)&&!l)for(Q=i;Q!==null;)o=Q,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Rc(i):(c.return=o,Q=c);for(;a!==null;)Q=a,Fc(a,t,n),a=a.sibling;Q=i,dc=s,fc=l}Ic(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Ic(e,t,n)}}function Ic(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fc||yc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!fc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:_s(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&ao(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}ao(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&bn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}fc||t.flags&512&&bc(t)}catch(e){Bl(t,t.return,e)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Lc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Rc(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yc(4,t)}catch(e){Bl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Bl(t,i,e)}}var a=t.return;try{bc(t)}catch(e){Bl(t,a,e)}break;case 5:var o=t.return;try{bc(t)}catch(e){Bl(t,o,e)}}}catch(e){Bl(t,t.return,e)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var zc=Math.ceil,Bc=S.ReactCurrentDispatcher,Vc=S.ReactCurrentOwner,Hc=S.ReactCurrentBatchConfig,$=0,Uc=null,Wc=null,Gc=0,Kc=0,qc=Qi(0),Jc=0,Yc=null,Xc=0,Zc=0,Qc=0,$c=null,el=null,tl=0,nl=1/0,rl=null,il=!1,al=null,ol=null,sl=!1,cl=null,ll=0,ul=0,dl=null,fl=-1,pl=0;function ml(){return $&6?Ct():fl===-1?fl=Ct():fl}function hl(e){return e.mode&1?$&2&&Gc!==0?Gc&-Gc:Ma.transition===null?(e=M,e!==0||(e=s.event,e=e===void 0?16:On(e.type)),e):(pl===0&&(pl=Wt()),pl):1}function gl(e,t,n,i){if(50<ul)throw ul=0,dl=null,Error(r(185));Kt(e,n,i),$&2&&e===Uc||(e===Uc&&(!($&2)&&(Zc|=n),Jc===4&&Sl(e,Gc)),_l(e,i),n===1&&$===0&&!(t.mode&1)&&(nl=Ct()+500,la&&pa()))}function _l(e,t){var n=e.callbackNode;Ht(e,t);var r=Bt(e,e===Uc?Gc:0);if(r===0)n!==null&&bt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bt(n),t===1)e.tag===0?fa(Cl.bind(null,e)):da(Cl.bind(null,e)),Fi(function(){!($&6)&&pa()}),n=null;else{switch(Yt(r)){case 1:n=Tt;break;case 4:n=Et;break;case 16:n=Dt;break;case 536870912:n=kt;break;default:n=Dt}n=Kl(n,vl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vl(e,t){if(fl=-1,pl=0,$&6)throw Error(r(327));var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var i=Bt(e,e===Uc?Gc:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=jl(e,i);else{t=i;var a=$;$|=2;var o=kl();(Uc!==e||Gc!==t)&&(rl=null,nl=Ct()+500,Dl(e,t));do try{Nl();break}catch(t){Ol(e,t)}while(1);Ua(),Bc.current=o,$=a,Wc===null?(Uc=null,Gc=0,t=Jc):t=0}if(t!==0){if(t===2&&(a=Ut(e),a!==0&&(i=a,t=yl(e,a))),t===1)throw n=Yc,Dl(e,0),Sl(e,i),_l(e,Ct()),n;if(t===6)Sl(e,i);else{if(a=e.current.alternate,!(i&30)&&!xl(a)&&(t=jl(e,i),t===2&&(o=Ut(e),o!==0&&(i=o,t=yl(e,o))),t===1))throw n=Yc,Dl(e,0),Sl(e,i),_l(e,Ct()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Il(e,el,rl);break;case 3:if(Sl(e,i),(i&0x7c00000)===i&&(t=tl+500-Ct(),10<t)){if(Bt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){ml(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Mi(Il.bind(null,e,el,rl),t);break}Il(e,el,rl);break;case 4:if(Sl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Nt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zc(i/1960))-i,10<i){e.timeoutHandle=Mi(Il.bind(null,e,el,rl),i);break}Il(e,el,rl);break;case 5:Il(e,el,rl);break;default:throw Error(r(329))}}}return _l(e,Ct()),e.callbackNode===n?vl.bind(null,e):null}function yl(e,t){var n=$c;return e.current.memoizedState.isDehydrated&&(Dl(e,t).flags|=256),e=jl(e,t),e!==2&&(t=el,el=n,t!==null&&bl(t)),e}function bl(e){el===null?el=e:el.push.apply(el,e)}function xl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Pr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t){for(t&=~Qc,t&=~Zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if($&6)throw Error(r(327));Rl();var t=Bt(e,0);if(!(t&1))return _l(e,Ct()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var i=Ut(e);i!==0&&(t=i,n=yl(e,i))}if(n===1)throw n=Yc,Dl(e,0),Sl(e,t),_l(e,Ct()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Il(e,el,rl),_l(e,Ct()),null}function wl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(nl=Ct()+500,la&&pa())}}function Tl(e){cl!==null&&cl.tag===0&&!($&6)&&Rl();var t=$;$|=1;var n=Hc.transition,r=M;try{if(Hc.transition=null,M=1,e)return e()}finally{M=r,Hc.transition=n,$=t,!($&6)&&pa()}}function El(){Kc=qc.current,R(qc)}function Dl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ni(n)),Wc!==null)for(n=Wc.return;n!==null;){var r=n;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:po(),R(V),R(B),yo();break;case 5:ho(r);break;case 4:po();break;case 13:case 19:R(go);break;case 10:Wa(r.type._context);break;case 22:case 23:El()}n=n.return}if(Uc=e,Wc=e=Zl(e.current,null),Gc=Kc=t,Jc=0,Yc=null,Qc=Zc=Xc=0,el=$c=null,Ja!==null){for(t=0;t<Ja.length;t++)if(n=Ja[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ja=null}return e}function Ol(e,t){do{var n=Wc;try{if(Ua(),bo.current=ps,To){for(var i=Z.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}To=!1}if(So=0,wo=Co=Z=null,Eo=!1,Do=0,Vc.current=null,n===null||n.return===null){Jc=1,Yc=t,Wc=null;break}e:{var o=e,s=n.return,c=n,l=t;if(t=Gc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=js(s);if(m!==null){m.flags&=-257,Ms(m,s,c,o,t),m.mode&1&&As(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=/* @__PURE__ */ new Set;g.add(l),t.updateQueue=g}else h.add(l);break e}if(!(t&1)){As(o,u,t),Al();break e}l=Error(r(426))}else if(J&&c.mode&1){var _=js(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ms(_,s,c,o,t),ja(ws(l,c));break e}}o=l=ws(l,c),Jc!==4&&(Jc=2),$c===null?$c=[o]:$c.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Os(o,l,t);ro(o,v);break e;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ol===null||!ol.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ks(o,c,t);ro(o,x);break e}}o=o.return}while(o!==null)}Fl(n)}catch(e){t=e,Wc===n&&n!==null&&(Wc=n=n.return);continue}break}while(1)}function kl(){var e=Bc.current;return Bc.current=ps,e===null?ps:e}function Al(){(Jc===0||Jc===3||Jc===2)&&(Jc=4),Uc===null||!(Xc&0xfffffff)&&!(Zc&0xfffffff)||Sl(Uc,Gc)}function jl(e,t){var n=$;$|=2;var i=kl();(Uc!==e||Gc!==t)&&(rl=null,Dl(e,t));do try{Ml();break}catch(t){Ol(e,t)}while(1);if(Ua(),$=n,Bc.current=i,Wc!==null)throw Error(r(261));return Uc=null,Gc=0,Jc}function Ml(){for(;Wc!==null;)Pl(Wc)}function Nl(){for(;Wc!==null&&!xt();)Pl(Wc)}function Pl(e){var t=Gl(e.alternate,e,Kc);e.memoizedProps=e.pendingProps,t===null?Fl(e):Wc=t,Vc.current=null}function Fl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uc(n,t),n!==null){n.flags&=32767,Wc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Jc=6,Wc=null;return}}else if(n=lc(n,t,Kc),n!==null){Wc=n;return}if(t=t.sibling,t!==null){Wc=t;return}Wc=t=e}while(t!==null);Jc===0&&(Jc=5)}function Il(e,t,n){var r=M,i=Hc.transition;try{Hc.transition=null,M=1,Ll(e,t,n,r)}finally{Hc.transition=i,M=r}return null}function Ll(e,t,n,i){do Rl();while(cl!==null);if($&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qt(e,o),e===Uc&&(Wc=Uc=null,Gc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Kl(Dt,function(){return Rl(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Hc.transition,Hc.transition=null;var s=M;M=1;var c=$;$|=4,Vc.current=null,_c(e,n),Mc(n,e),Vr(Ai),Sn=!!ki,Ai=ki=null,e.current=n,Pc(n,e,a),St(),$=c,M=s,Hc.transition=o}else e.current=n;if(sl&&(sl=!1,cl=e,ll=a),o=e.pendingLanes,o===0&&(ol=null),Mt(n.stateNode,i),_l(e,Ct()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(il)throw il=!1,e=al,al=null,e;return ll&1&&e.tag!==0&&Rl(),o=e.pendingLanes,o&1?e===dl?ul++:(ul=0,dl=e):ul=0,pa(),null}function Rl(){if(cl!==null){var e=Yt(ll),t=Hc.transition,n=M;try{if(Hc.transition=null,M=16>e?16:e,cl===null)var i=!1;else{if(e=cl,cl=null,ll=0,$&6)throw Error(r(331));var a=$;for($|=4,Q=e.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:vc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var p=d.sibling,m=d.return;if(xc(d),d===u){Q=null;break}if(p!==null){p.return=m,Q=p;break}Q=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Q=v;break}Q=o.return}}var y=e.current;for(Q=y;Q!==null;){s=Q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Q=b;else for(s=y;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:yc(9,c)}}catch(e){Bl(c,c.return,e)}if(c===s){Q=null;break}var x=c.sibling;if(x!==null){x.return=c.return,Q=x;break}Q=c.return}}if($=a,pa(),jt&&typeof jt.onPostCommitFiberRoot==`function`)try{jt.onPostCommitFiberRoot(At,e)}catch{}i=!0}return i}finally{M=n,Hc.transition=t}}return!1}function zl(e,t,n){t=ws(n,t),t=Os(e,t,1),e=to(e,t,1),t=ml(),e!==null&&(Kt(e,1,t),_l(e,t))}function Bl(e,t,n){if(e.tag===3)zl(e,e,n);else for(;t!==null;){if(t.tag===3){zl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ol===null||!ol.has(r))){e=ws(n,e),e=ks(t,e,1),t=to(t,e,1),e=ml(),t!==null&&(Kt(t,1,e),_l(t,e));break}}t=t.return}}function Vl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ml(),e.pingedLanes|=e.suspendedLanes&n,Uc===e&&(Gc&n)===n&&(Jc===4||Jc===3&&(Gc&0x7c00000)===Gc&&500>Ct()-tl?Dl(e,0):Qc|=n),_l(e,t)}function Hl(e,t){t===0&&(e.mode&1?(t=Rt,Rt<<=1,!(Rt&0x7c00000)&&(Rt=4194304)):t=1);var n=ml();e=Za(e,t),e!==null&&(Kt(e,t,n),_l(e,n))}function Ul(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hl(e,n)}function Wl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Hl(e,n)}var Gl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||V.current)Ps=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ps=!1,rc(e,t,n);Ps=!!(e.flags&131072)}}else Ps=!1,J&&t.flags&1048576&&q(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;tc(e,t),e=t.pendingProps;var a=ta(t,B.current);Ka(t,n),a=jo(null,t,i,e,a,n);var o=Mo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,na(i)?(o=!0,oa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,$a(t),a.updater=ys,t.stateNode=a,a._reactInternals=t,Cs(t,i,e,n),t=Us(null,t,i,!0,o,n)):(t.tag=0,J&&o&&ya(t),Fs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;e:{switch(tc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Xl(i),e=_s(i,e),a){case 0:t=Vs(null,t,i,e,n);break e;case 1:t=Hs(null,t,i,e,n);break e;case 11:t=Is(null,t,i,e,n);break e;case 14:t=Ls(null,t,i,_s(i.type,e),n);break e}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Vs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Hs(e,t,i,a,n);case 3:e:{if(Ws(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,X(e,t),io(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ws(Error(r(423)),t),t=Gs(e,t,i,n,a);break e}if(i!==a){a=ws(Error(r(424)),t),t=Gs(e,t,i,n,a);break e}for(Sa=Ri(t.stateNode.containerInfo.firstChild),xa=t,J=!0,Ca=null,n=Ra(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Aa(),i===a){t=nc(e,t,n);break e}Fs(e,t,i,n)}t=t.child}return t;case 5:return mo(t),e===null&&Y(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,ji(i,a)?s=null:o!==null&&ji(i,o)&&(t.flags|=32),Bs(e,t),Fs(e,t,s,n),t.child;case 6:return e===null&&Y(t),null;case 13:return Js(e,t,n);case 4:return fo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=La(t,null,i,n):Fs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Is(e,t,i,a,n);case 7:return Fs(e,t,t.pendingProps,n),t.child;case 8:case 12:return Fs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,z(za,i._currentValue),i._currentValue=s,o!==null){if(Pr(o.value,s)){if(o.children===a.children&&!V.current){t=nc(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=eo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ga(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ga(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Fs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ka(t,n),a=qa(a),i=i(a),t.flags|=1,Fs(e,t,i,n),t.child;case 14:return i=t.type,a=_s(i,t.pendingProps),a=_s(i.type,a),Ls(e,t,i,a,n);case 15:return Rs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),tc(e,t),t.tag=1,na(i)?(e=!0,oa(t)):e=!1,Ka(t,n),xs(t,i,a),Cs(t,i,a,n),Us(null,t,i,!0,e,n);case 19:return ec(e,t,n);case 22:return zs(e,t,n)}throw Error(r(156,t.tag))};function Kl(e,t){return yt(e,t)}function ql(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jl(e,t,n,r){return new ql(e,t,n,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xl(e){if(typeof e==`function`)return+!!Yl(e);if(e!=null){if(e=e.$$typeof,e===re)return 11;if(e===ae)return 14}return 2}function Zl(e,t){var n=e.alternate;return n===null?(n=Jl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&0xe00000,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ql(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Yl(e)&&(s=1);else if(typeof e==`string`)s=5;else e:switch(e){case T:return $l(n.children,a,o,t);case E:s=8,a|=8;break;case ee:return e=Jl(12,n,t,a|2),e.elementType=ee,e.lanes=o,e;case ie:return e=Jl(13,n,t,a),e.elementType=ie,e.lanes=o,e;case D:return e=Jl(19,n,t,a),e.elementType=D,e.lanes=o,e;case oe:return eu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break e;case ne:s=9;break e;case re:s=11;break e;case ae:s=14;break e;case O:s=16,i=null;break e}throw Error(r(130,e==null?e:typeof e,``))}return t=Jl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function $l(e,t,n,r){return e=Jl(7,e,r,t),e.lanes=n,e}function eu(e,t,n,r){return e=Jl(22,e,r,t),e.elementType=oe,e.lanes=n,e.stateNode={isHidden:!1},e}function tu(e,t,n){return e=Jl(6,e,null,t),e.lanes=n,e}function nu(e,t,n){return t=Jl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ru(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function iu(e,t,n,r,i,a,o,s,c){return e=new ru(e,t,n,s,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Jl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(a),e}function au(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function ou(e){if(!e)return $i;e=e._reactInternals;e:{if(pt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(na(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(na(n))return aa(e,n,t)}return t}function su(e,t,n,r,i,a,o,s,c){return e=iu(n,r,!0,e,i,a,o,s,c),e.context=ou(null),n=e.current,r=ml(),i=hl(n),a=eo(r,i),a.callback=t??null,to(n,a,i),e.current.lanes=i,Kt(e,i,r),_l(e,r),e}function cu(e,t,n,r){var i=t.current,a=ml(),o=hl(i);return n=ou(n),t.context===null?t.context=n:t.pendingContext=n,t=eo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=to(i,t,o),e!==null&&(gl(e,i,o,a),no(e,i,o)),o}function lu(e){return e=e.current,e.child?(e.child.tag,e.child.stateNode):null}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function du(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function fu(){return null}var pu=typeof reportError==`function`?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}hu.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));cu(e,t,null,null)},hu.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tl(function(){cu(null,e,null,null)}),t[Ui]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&hn(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function vu(){}function yu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=lu(o);a.call(e)}}var o=su(t,r,e,0,null,!1,!1,``,vu);return e._reactRootContainer=o,e[Ui]=o.current,_i(e.nodeType===8?e.parentNode:e),Tl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=lu(c);s.call(e)}}var c=iu(e,0,!1,null,null,!1,!1,``,vu);return e._reactRootContainer=c,e[Ui]=c.current,_i(e.nodeType===8?e.parentNode:e),Tl(function(){cu(t,c,n,r)}),c}function bu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=lu(o);s.call(e)}}cu(t,o,e,i)}else o=yu(n,t,e,i,r);return lu(o)}Xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zt(t.pendingLanes);n!==0&&(Jt(t,n|1),_l(t,Ct()),!($&6)&&(nl=Ct()+500,pa()))}break;case 13:Tl(function(){var t=Za(e,1);t!==null&&gl(t,e,1,ml())}),du(e,1)}},Zt=function(e){if(e.tag===13){var t=Za(e,0x8000000);t!==null&&gl(t,e,0x8000000,ml()),du(e,0x8000000)}},Qt=function(e){if(e.tag===13){var t=hl(e),n=Za(e,t);n!==null&&gl(n,e,t,ml()),du(e,t)}},$t=function(){return M},en=function(e,t){var n=M;try{return M=e,t()}finally{M=n}},qe=function(e,t,n){switch(t){case`input`:if(we(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Yi(i);if(!a)throw Error(r(90));ye(i),we(i,a)}}}break;case`textarea`:je(e,n);break;case`select`:t=n.value,t!=null&&Oe(e,!!n.multiple,t,!1)}},Qe=wl,$e=Tl;var xu={usingClientEntryPoint:!1,Events:[qi,Ji,Yi,Xe,Ze,wl]},Su={findFiberByHostInstance:Ki,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Cu={bundleType:Su.bundleType,version:Su.version,rendererPackageName:Su.rendererPackageName,rendererConfig:Su.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:S.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_t(e),e===null?null:e.stateNode},findFiberByHostInstance:Su.findFiberByHostInstance||fu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&(wu=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wu.isDisabled&&wu.supportsFiber))try{At=wu.inject(Cu),jt=wu}catch{}var wu;e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(r(200));return au(e,t,null,n)},e.createRoot=function(e,t){if(!gu(e))throw Error(r(299));var n=!1,i=``,a=pu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=iu(e,1,!1,null,null,n,!1,i,a),e[Ui]=t.current,_i(e.nodeType===8?e.parentNode:e),new mu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=_t(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Tl(e)},e.hydrate=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!gu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=pu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=su(t,null,e,1,n??null,a,!1,o,s),e[Ui]=t.current,_i(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new hu(t)},e.render=function(e,t,n){if(!_u(t))throw Error(r(200));return bu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!_u(e))throw Error(r(40));return e._reactRootContainer?(Tl(function(){bu(null,null,e,!1,function(){e._reactRootContainer=null,e[Ui]=null})}),!0):!1},e.unstable_batchedUpdates=wl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!_u(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return bu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`}),un=cn(on((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=ln()})()),{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:dn,createPortal:fn,createRoot:pn,findDOMNode:mn,flushSync:hn,hydrate:gn,hydrateRoot:_n,render:vn,unmountComponentAtNode:yn,unstable_batchedUpdates:bn,unstable_renderSubtreeIntoContainer:xn,version:Sn}=un,Cn=un.default??un})))()}
/*! Bundled license information:

react-dom/cjs/react-dom.production.min.js:
(**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
var Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn;function zn(){return(zn=t((()=>{wn(),Tn=e=>{let t=e=>typeof e.default<`u`?e.default:e;switch(e){case`react-dom`:return t(Xt);default:return console.error(`module "`+e+`" not found`),null}},En=Object.create,Dn=Object.defineProperty,On=Object.getOwnPropertyDescriptor,kn=Object.getOwnPropertyNames,An=Object.getPrototypeOf,jn=Object.prototype.hasOwnProperty,Mn=(e=>typeof Tn<`u`?Tn:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof Tn<`u`?Tn:e)[t]}):e)(function(e){if(typeof Tn<`u`)return Tn.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),Nn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Pn=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of kn(t))!jn.call(e,i)&&i!==n&&Dn(e,i,{get:()=>t[i],enumerable:!(r=On(t,i))||r.enumerable});return e},Fn=(e,t,n)=>(n=e==null?{}:En(An(e)),Pn(t||!e||!e.__esModule?Dn(n,`default`,{value:e,enumerable:!0}):n,e)),In=Fn(Nn(e=>{var t=Mn(`react-dom`);e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})()),{createRoot:Ln,hydrateRoot:Rn}=In,In.default})))()}function Bn(){return(Bn=t((()=>{wn(),zn()})))()}function Vn(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error(`An error occurred compiling the shaders: `+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function Hn(e,t,n){let r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=r?r.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,`precision highp float;`),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,`precision highp float`).replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,`$1 highp $3`));let a=Vn(e,e.VERTEX_SHADER,t),o=Vn(e,e.FRAGMENT_SHADER,n);if(!a||!o)return null;let s=e.createProgram();return s?(e.attachShader(s,a),e.attachShader(s,o),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS)?(e.detachShader(s,a),e.detachShader(s,o),e.deleteShader(a),e.deleteShader(o),s):(console.error(`Unable to initialize the shader program: `+e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(a),e.deleteShader(o),null)):null}function Un(){let e=a.userAgent.toLowerCase();return e.includes(`safari`)&&!e.includes(`chrome`)&&!e.includes(`android`)}function Wn(e){let t=visualViewport?.scale??1,n=visualViewport?.width??s.innerWidth,r=s.innerWidth-e.documentElement.clientWidth,i=t*n+r,a=outerWidth/i,o=Math.round(100*a);return o%5==0?o/100:o===33?1/3:o===67?2/3:o===133?4/3:a}function Gn(e){let t=document.createElement(`canvas`),n=1e3;return new Promise((r,i)=>{let a=new Image;a.crossOrigin=`anonymous`,a.addEventListener(`load`,()=>{(typeof e==`string`?e.endsWith(`.svg`):e.type===`image/svg+xml`)&&(a.width=n,a.height=n);let o=a.naturalWidth/a.naturalHeight,s=n,c=n;o>1?c=Math.floor(n/o):s=Math.floor(n*o),t.width=s+750,t.height=c+750;let l=t.getContext(`2d`,{willReadFrequently:!0});if(!l)throw Error(`Failed to get canvas 2d context`);l.fillStyle=`white`,l.fillRect(0,0,t.width,t.height),l.drawImage(a,375,375,s,c);let{width:u,height:d}=t,f=l.getImageData(0,0,u,d).data,p=u*d,m=new Uint8ClampedArray(p);for(let e=0;e<p;e++){let t=e*4,n=f[t]??0,r=f[t+1]??0,i=f[t+2]??0;m[e]=.299*n+.587*r+.114*i|0}let h=qn(m,u,d,150,3),g=qn(m,u,d,18,3),_=qn(m,u,d,5,1),v=l.createImageData(u,d),y=v.data;for(let e=0;e<p;e++){let t=e*4;y[t]=_[e]??0,y[t+1]=h[e]??0,y[t+2]=g[e]??0,y[t+3]=255}l.putImageData(v,0,0),t.toBlob(e=>{e?r({blob:e}):i(/* @__PURE__ */ Error(`Failed to create PNG blob`))},`image/png`)}),a.addEventListener(`error`,()=>{i(/* @__PURE__ */ Error(`Failed to load image`))}),a.src=typeof e==`string`?e:URL.createObjectURL(e)})}function Kn(e,t,n,r){if(r<=0)return e.slice();let i=new Uint8ClampedArray(t*n),a=new Uint32Array(t*n);for(let r=0;r<n;r++){let n=0;for(let i=0;i<t;i++){let o=r*t+i,s=e[o]??0;n+=s,a[o]=n+(r>0?a[o-t]??0:0)}}for(let e=0;e<n;e++){let o=Math.max(0,e-r),s=Math.min(n-1,e+r);for(let n=0;n<t;n++){let c=Math.max(0,n-r),l=Math.min(t-1,n+r),u=s*t+l,d=s*t+(c-1),f=(o-1)*t+l,p=(o-1)*t+(c-1),m=a[u]??0,h=c>0?a[d]??0:0,g=o>0?a[f]??0:0,_=c>0&&o>0?a[p]??0:0,v=m-h-g+_,y=(l-c+1)*(s-o+1);i[e*t+n]=Math.round(v/y)}}return i}function qn(e,t,n,r,i){if(r<=0||i<=1)return Kn(e,t,n,r);let a=e,o=e;for(let e=0;e<i;e++)o=Kn(a,t,n,r),a=o;return o}function Jn(e){let t=document.createElement(`canvas`),n=t.getContext(`2d`),r=typeof e==`string`&&e.startsWith(`blob:`);return new Promise((i,a)=>{if(!e||!n){a(/* @__PURE__ */ Error(`Invalid file or canvas context`));return}let o=r&&fetch(e).then(e=>e.headers.get(`Content-Type`)),s=new Image;s.crossOrigin=`anonymous`;let c=performance.now();s.onload=async()=>{let r,l=await o;r=l?l===`image/svg+xml`:typeof e==`string`?e.endsWith(`.svg`)||e.startsWith(`data:image/svg+xml`):e.type===`image/svg+xml`;let u=s.width||s.naturalWidth,d=s.height||s.naturalHeight;if(r){let e=u/d;u>d?(u=4096,d=4096/e):(d=4096,u=4096*e),s.width=u,s.height=d}let f=Math.min(u,d),p=gi.workingSize/f,m=Math.round(u*p),h=Math.round(d*p);gi.measurePerformance&&(console.log(`[Processing Mode]`),console.log(`  Original: ${u}\xD7${d}`),console.log(`  Working: ${m}\xD7${h} (${(p*100).toFixed(1)}% scale)`),p<1&&console.log(`  Speedup: ~${Math.round(1/(p*p))}\xD7`)),t.width=u,t.height=d;let g=document.createElement(`canvas`);g.width=m,g.height=h;let _=g.getContext(`2d`);_.drawImage(s,0,0,m,h);let v=performance.now(),y=_.getImageData(0,0,m,h).data,b=new Uint8Array(m*h),x=new Uint8Array(m*h),S=0;for(let e=0,t=0;e<y.length;e+=4,t++){let n=y[e+3]===0?0:1;b[t]=n,S+=n}let C=[],w=[];for(let e=0;e<h;e++)for(let t=0;t<m;t++){let n=e*m+t;if(!b[n])continue;let r=!1;r=t===0||t===m-1||e===0||e===h-1||!b[n-1]||!b[n+1]||!b[n-m]||!b[n+m]||!b[n-m-1]||!b[n-m+1]||!b[n+m-1]||!b[n+m+1],r?(x[n]=1,C.push(n)):w.push(n)}gi.measurePerformance&&(console.log(`[Mask Building] Time: ${(performance.now()-v).toFixed(2)}ms`),console.log(`  Shape pixels: ${S} / ${m*h} (${(S/(m*h)*100).toFixed(1)}%)`),console.log(`  Interior pixels: ${w.length}`),console.log(`  Boundary pixels: ${C.length}`));let T=Yn(b,x,new Uint32Array(w),new Uint32Array(C),m,h),E=performance.now(),ee=Xn(T,b,x,m,h);gi.measurePerformance&&console.log(`[Poisson Solve] Time: ${(performance.now()-E).toFixed(2)}ms`);let te=0,ne;for(let e=0;e<w.length;e++){let t=w[e];ee[t]>te&&(te=ee[t])}let re=document.createElement(`canvas`);re.width=m,re.height=h;let ie=re.getContext(`2d`),D=ie.createImageData(m,h);for(let e=0;e<h;e++)for(let t=0;t<m;t++){let n=e*m+t,r=n*4;if(!b[n])D.data[r]=255,D.data[r+1]=255,D.data[r+2]=255,D.data[r+3]=0;else{let e=255*(1-ee[n]/te);D.data[r]=e,D.data[r+1]=e,D.data[r+2]=e,D.data[r+3]=255}}ie.putImageData(D,0,0),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality=`high`,n.drawImage(re,0,0,m,h,0,0,u,d);let ae=n.getImageData(0,0,u,d),O=document.createElement(`canvas`);O.width=u,O.height=d;let oe=O.getContext(`2d`);oe.drawImage(s,0,0,u,d);let se=oe.getImageData(0,0,u,d);for(let e=0;e<ae.data.length;e+=4){let t=se.data[e+3],n=ae.data[e+3];t===0?(ae.data[e]=255,ae.data[e+1]=0):(ae.data[e]=n===0?0:ae.data[e],ae.data[e+1]=t),ae.data[e+2]=255,ae.data[e+3]=255}n.putImageData(ae,0,0),ne=ae,t.toBlob(e=>{if(!e)a(/* @__PURE__ */ Error(`Failed to create PNG blob`));else{if(gi.measurePerformance){let e=performance.now()-c;if(console.log(`[Total Processing Time] ${e.toFixed(2)}ms`),p<1){let t=e*(u*d/(m*h))**1.5;console.log(`[Estimated time at full resolution] ~${t.toFixed(0)}ms`),console.log(`[Time saved] ~${(t-e).toFixed(0)}ms (${Math.round(t/e)}\xD7 faster)`)}}i({imageData:ne,pngBlob:e})}},`image/png`)},s.onerror=()=>a(/* @__PURE__ */ Error(`Failed to load image`)),s.src=typeof e==`string`?e:URL.createObjectURL(e)})}function Yn(e,t,n,r,i,a){let o=n.length,s=new Int32Array(o*4);for(let t=0;t<o;t++){let r=n[t],o=r%i,c=Math.floor(r/i);s[t*4+0]=o<i-1&&e[r+1]?r+1:-1,s[t*4+1]=o>0&&e[r-1]?r-1:-1,s[t*4+2]=c>0&&e[r-i]?r-i:-1,s[t*4+3]=c<a-1&&e[r+i]?r+i:-1}return{interiorPixels:n,boundaryPixels:r,pixelCount:o,neighborIndices:s}}function Xn(e,t,n,r,i){let a=gi.iterations,o=.01,s=new Float32Array(r*i),{interiorPixels:c,neighborIndices:l,pixelCount:u}=e,d=performance.now(),f=1.9,p=[],m=[];for(let e=0;e<u;e++){let t=c[e];(t%r+Math.floor(t/r))%2==0?p.push(e):m.push(e)}for(let e=0;e<a;e++){for(let e of p){let t=c[e],n=l[e*4+0],r=l[e*4+1],i=l[e*4+2],a=l[e*4+3],u=0;n>=0&&(u+=s[n]),r>=0&&(u+=s[r]),i>=0&&(u+=s[i]),a>=0&&(u+=s[a]),s[t]=f*((o+u)/4)+-.8999999999999999*s[t]}for(let e of m){let t=c[e],n=l[e*4+0],r=l[e*4+1],i=l[e*4+2],a=l[e*4+3],u=0;n>=0&&(u+=s[n]),r>=0&&(u+=s[r]),i>=0&&(u+=s[i]),a>=0&&(u+=s[a]),s[t]=f*((o+u)/4)+-.8999999999999999*s[t]}}if(gi.measurePerformance){let e=performance.now()-d;console.log(`[Optimized Poisson Solver (SOR \u03C9=${f})]`),console.log(`  Working size: ${r}\xD7${i}`),console.log(`  Iterations: ${a}`),console.log(`  Time: ${e.toFixed(2)}ms`),console.log(`  Interior pixels processed: ${u}`),console.log(`  Speed: ${(a*u/(e*1e3)).toFixed(2)} Mpixels/sec`)}return s}function Zn(e){let t=document.createElement(`canvas`),n=t.getContext(`2d`),r=typeof e==`string`&&e.startsWith(`blob:`);return new Promise((i,a)=>{if(!e||!n){a(/* @__PURE__ */ Error(`Invalid file or canvas context`));return}let o=r&&fetch(e).then(e=>e.headers.get(`Content-Type`)),s=new Image;s.crossOrigin=`anonymous`;let c=performance.now();s.onload=async()=>{let r,l=await o;r=l?l===`image/svg+xml`:typeof e==`string`?e.endsWith(`.svg`)||e.startsWith(`data:image/svg+xml`):e.type===`image/svg+xml`;let u=s.width||s.naturalWidth,d=s.height||s.naturalHeight;if(r){let e=u/d;u>d?(u=4096,d=4096/e):(d=4096,u=4096*e),s.width=u,s.height=d}let f=Math.min(u,d),p=Ti.workingSize/f,m=Math.round(u*p),h=Math.round(d*p);Ti.measurePerformance&&(console.log(`[Processing Mode]`),console.log(`  Original: ${u}\xD7${d}`),console.log(`  Working: ${m}\xD7${h} (${(p*100).toFixed(1)}% scale)`),p<1&&console.log(`  Speedup: ~${Math.round(1/(p*p))}\xD7`)),t.width=u,t.height=d;let g=.025,_=Math.ceil(m*g),v=Math.ceil(h*g),y=m-2*_,b=h-2*v,x=document.createElement(`canvas`);x.width=m,x.height=h;let S=x.getContext(`2d`);S.drawImage(s,_,v,y,b);let C=performance.now(),w=S.getImageData(0,0,m,h).data,T=new Uint8Array(m*h),E=new Uint8Array(m*h),ee=0;for(let e=0,t=0;e<w.length;e+=4,t++){let n=w[e+3]===0?0:1;T[t]=n,ee+=n}let te=[],ne=[];for(let e=0;e<h;e++)for(let t=0;t<m;t++){let n=e*m+t;if(!T[n])continue;let r=!1;r=t===0||t===m-1||e===0||e===h-1||!T[n-1]||!T[n+1]||!T[n-m]||!T[n+m]||!T[n-m-1]||!T[n-m+1]||!T[n+m-1]||!T[n+m+1],r?(E[n]=1,te.push(n)):ne.push(n)}Ti.measurePerformance&&(console.log(`[Mask Building] Time: ${(performance.now()-C).toFixed(2)}ms`),console.log(`  Shape pixels: ${ee} / ${m*h} (${(ee/(m*h)*100).toFixed(1)}%)`),console.log(`  Interior pixels: ${ne.length}`),console.log(`  Boundary pixels: ${te.length}`));let re=Qn(T,E,new Uint32Array(ne),new Uint32Array(te),m,h),ie=performance.now(),D=$n(re,T,E,m,h);Ti.measurePerformance&&console.log(`[Poisson Solve] Time: ${(performance.now()-ie).toFixed(2)}ms`);let ae=0,O;for(let e=0;e<ne.length;e++){let t=ne[e];D[t]>ae&&(ae=D[t])}let oe=document.createElement(`canvas`);oe.width=m,oe.height=h;let se=oe.getContext(`2d`),k=se.createImageData(m,h);for(let e=0;e<h;e++)for(let t=0;t<m;t++){let n=e*m+t,r=n*4;if(!T[n])k.data[r]=255,k.data[r+1]=255,k.data[r+2]=255,k.data[r+3]=0;else{let e=255*(1-D[n]/ae);k.data[r]=e,k.data[r+1]=e,k.data[r+2]=e,k.data[r+3]=255}}se.putImageData(k,0,0),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality=`high`,n.drawImage(oe,0,0,m,h,0,0,u,d);let A=n.getImageData(0,0,u,d),ce=Math.ceil(u*g),le=Math.ceil(d*g),ue=document.createElement(`canvas`);ue.width=u,ue.height=d;let de=ue.getContext(`2d`);de.drawImage(s,ce,le,u-2*ce,d-2*le);let fe=de.getImageData(0,0,u,d);for(let e=0;e<A.data.length;e+=4){let t=fe.data[e+3],n=A.data[e+3];t===0?(A.data[e]=255,A.data[e+1]=0):(A.data[e]=n===0?0:A.data[e],A.data[e+1]=t),A.data[e+2]=255,A.data[e+3]=255}n.putImageData(A,0,0),O=A,t.toBlob(e=>{if(!e)a(/* @__PURE__ */ Error(`Failed to create PNG blob`));else{if(Ti.measurePerformance){let e=performance.now()-c;if(console.log(`[Total Processing Time] ${e.toFixed(2)}ms`),p<1){let t=e*(u*d/(m*h))**1.5;console.log(`[Estimated time at full resolution] ~${t.toFixed(0)}ms`),console.log(`[Time saved] ~${(t-e).toFixed(0)}ms (${Math.round(t/e)}\xD7 faster)`)}}i({imageData:O,pngBlob:e})}},`image/png`)},s.onerror=()=>a(/* @__PURE__ */ Error(`Failed to load image`)),s.src=typeof e==`string`?e:URL.createObjectURL(e)})}function Qn(e,t,n,r,i,a){let o=n.length,s=new Int32Array(o*4);for(let t=0;t<o;t++){let r=n[t],o=r%i,c=Math.floor(r/i);s[t*4+0]=o<i-1&&e[r+1]?r+1:-1,s[t*4+1]=o>0&&e[r-1]?r-1:-1,s[t*4+2]=c>0&&e[r-i]?r-i:-1,s[t*4+3]=c<a-1&&e[r+i]?r+i:-1}return{interiorPixels:n,boundaryPixels:r,pixelCount:o,neighborIndices:s}}function $n(e,t,n,r,i){let a=Ti.iterations,o=.01,s=new Float32Array(r*i),{interiorPixels:c,neighborIndices:l,pixelCount:u}=e,d=performance.now(),f=1.9,p=[],m=[];for(let e=0;e<u;e++){let t=c[e];(t%r+Math.floor(t/r))%2==0?p.push(e):m.push(e)}for(let e=0;e<a;e++){for(let e of p){let t=c[e],n=l[e*4+0],r=l[e*4+1],i=l[e*4+2],a=l[e*4+3],u=0;n>=0&&(u+=s[n]),r>=0&&(u+=s[r]),i>=0&&(u+=s[i]),a>=0&&(u+=s[a]),s[t]=f*((o+u)/4)+-.8999999999999999*s[t]}for(let e of m){let t=c[e],n=l[e*4+0],r=l[e*4+1],i=l[e*4+2],a=l[e*4+3],u=0;n>=0&&(u+=s[n]),r>=0&&(u+=s[r]),i>=0&&(u+=s[i]),a>=0&&(u+=s[a]),s[t]=f*((o+u)/4)+-.8999999999999999*s[t]}}let h=new Float32Array(r*i);for(let e=0;e<3;e++){h.set(s);for(let e=0;e<u;e++){let t=c[e],n=l[e*4+0],r=l[e*4+1],i=l[e*4+2],a=l[e*4+3],o=0,u=0;n>=0&&(o+=h[n],u++),r>=0&&(o+=h[r],u++),i>=0&&(o+=h[i],u++),a>=0&&(o+=h[a],u++),s[t]=u>0?(h[t]+o/u)*.5:h[t]}}if(Ti.measurePerformance){let e=performance.now()-d;console.log(`[Optimized Poisson Solver (SOR \u03C9=${f})]`),console.log(`  Working size: ${r}\xD7${i}`),console.log(`  Iterations: ${a}`),console.log(`  Time: ${e.toFixed(2)}ms`),console.log(`  Interior pixels processed: ${u}`),console.log(`  Speed: ${(a*u/(e*1e3)).toFixed(2)} Mpixels/sec`)}return s}function N(e){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:Oi;if(typeof e!=`string`)return Oi;let t,n,r,i=1;if(e.startsWith(`#`))[t,n,r,i]=er(e);else if(e.startsWith(`rgb`)){let a=tr(e);if(a===null)return Oi;[t,n,r,i]=a}else if(e.startsWith(`hsl`)){let a=nr(e);if(a===null)return Oi;[t,n,r,i]=rr(a)}else return console.error(`Unsupported color format`,e),Oi;return[Di(t,0,1),Di(n,0,1),Di(r,0,1),Di(i,0,1)]}function er(e){return e=e.replace(/^#/,``),(e.length===3||e.length===4)&&(e=e.split(``).map(e=>e+e).join(``)),e.length===6&&(e+=`ff`),/^[0-9a-f]{8}$/i.test(e)?[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255,parseInt(e.slice(6,8),16)/255]:(console.warn(`Invalid hex color`),Oi)}function tr(e){let t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`)/255,parseInt(t[2]??`0`)/255,parseInt(t[3]??`0`)/255,t[4]===void 0?1:parseFloat(t[4])]:null}function nr(e){let t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`),parseInt(t[2]??`0`),parseInt(t[3]??`0`),t[4]===void 0?1:parseFloat(t[4])]:null}function rr(e){let[t,n,r,i]=e,a=t/360,o=n/100,s=r/100,c,l,u;if(n===0)c=l=u=s;else{let e=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<.16666666666666666?e+(t-e)*6*n:n<.5?t:n<.6666666666666666?e+(t-e)*(.6666666666666666-n)*6:e),t=s<.5?s*(1+o):s+o-s*o,n=2*s-t;c=e(n,t,a+1/3),l=e(n,t,a),u=e(n,t,a-1/3)}return[c,l,u,i]}function ir(){if(typeof s>`u`)return;let e=new Image;return e.src=ki,e}var ar,or,sr,cr,P,F,I,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki;function Ai(){return(Ai=t((()=>{i(),ar=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,or=8294400,sr=class{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=/* @__PURE__ */ new Map;minPixelRatio;maxPixelCount;isSafari=Un();uniformCache={};textureUnitMap=/* @__PURE__ */ new Map;ownerDocument;constructor(e,t,n,r,i=0,a=0,o=2,s=or,c=[]){if(e?.nodeType===1)this.parentElement=e;else throw Error(`Paper Shaders: parent element must be an HTMLElement`);if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector(`style[data-paper-shader]`)){let e=this.ownerDocument.createElement(`style`);e.innerHTML=cr,e.setAttribute(`data-paper-shader`,``),this.ownerDocument.head.prepend(e)}let l=this.ownerDocument.createElement(`canvas`);this.canvasElement=l,this.parentElement.prepend(l),this.fragmentShader=t,this.providedUniforms=n,this.mipmaps=c,this.currentFrame=a,this.minPixelRatio=o,this.maxPixelCount=s;let u=l.getContext(`webgl2`,{antialias:!1,depth:!1,stencil:!1,...r});if(!u)throw Error(`Paper Shaders: WebGL is not supported in this browser`);this.gl=u,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener(`resize`,this.handleVisualViewportChange),this.setupIntersectionObserver(),this.setSpeed(i),this.parentElement.setAttribute(`data-paper-shader`,``),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener(`visibilitychange`,this.handleDocumentVisibilityChange)}initProgram=()=>{let e=Hn(this.gl,ar,this.fragmentShader);e&&(this.program=e,this.gl.useProgram(e))};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,`a_position`),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,`u_time`),u_pixelRatio:this.gl.getUniformLocation(this.program,`u_pixelRatio`),u_resolution:this.gl.getUniformLocation(this.program,`u_resolution`)};Object.entries(this.providedUniforms).forEach(([t,n])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),n instanceof HTMLImageElement){let n=`${t}AspectRatio`;e[n]=this.gl.getUniformLocation(this.program,n)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;intersectionObserver=null;isInViewport=!0;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];t!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};setupIntersectionObserver=()=>{let e=this.ownerDocument.defaultView;e?.IntersectionObserver&&(this.intersectionObserver=new e.IntersectionObserver(([e])=>{this.isInViewport=e?.isIntersecting??!0,this.updateCurrentSpeed()}),this.intersectionObserver.observe(this.parentElement))};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,n=Math.max(1,s.devicePixelRatio),r=visualViewport?.scale??1;if(this.devicePixelsSupported){let i=Math.max(1,this.minPixelRatio/n);e=this.parentDevicePixelWidth*i*r,t=this.parentDevicePixelHeight*i*r}else{let i=Math.max(n,this.minPixelRatio)*r;if(this.isSafari){let e=Wn(this.ownerDocument);i*=Math.max(1,e)}e=Math.round(this.parentWidth)*i,t=Math.round(this.parentHeight)*i}let i=Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t),a=Math.min(1,i),o=Math.round(e*a),c=Math.round(t*a),l=o/Math.round(this.parentWidth);(this.canvasElement.width!==o||this.canvasElement.height!==c||this.renderScale!==l)&&(this.renderScale=l,this.canvasElement.width=o,this.canvasElement.height=c,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn(`Tried to render before program or gl was initialized`);return}let t=e-this.lastRenderTime;this.lastRenderTime=e,this.currentSpeed!==0&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&=(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed===0?this.rafId=null:this.requestRender()};requestRender=()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||t.naturalWidth===0)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let n=this.textures.get(e);n&&this.gl.deleteTexture(n),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let r=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+r);let i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let a=this.gl.getError();if(a!==this.gl.NO_ERROR||i===null){console.error(`Paper Shaders: WebGL error when uploading texture:`,a);return}this.textures.set(e,i);let o=this.uniformLocations[e];if(o){this.gl.uniform1i(o,r);let n=`${e}AspectRatio`,i=this.uniformLocations[n];if(i){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(i,e)}}};areUniformValuesEqual=(e,t)=>e===t?!0:Array.isArray(e)&&Array.isArray(t)&&e.length===t.length?e.every((e,n)=>this.areUniformValuesEqual(e,t[n])):!1;setUniformValues=e=>{Object.entries(e).forEach(([e,t])=>{let n=t;if(t instanceof HTMLImageElement&&(n=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],n))return;this.uniformCache[e]=n;let r=this.uniformLocations[e];if(!r)console.warn(`Uniform location for ${e} not found`);else if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let n=null,i=null;if(t[0]!==void 0&&Array.isArray(t[0])){let r=t[0].length;if(t.every(e=>e.length===r))n=t.flat(),i=r;else{console.warn(`All child arrays must be the same length for ${e}`);return}}else n=t,i=n.length;switch(i){case 2:this.gl.uniform2fv(r,n);break;case 3:this.gl.uniform3fv(r,n);break;case 4:this.gl.uniform4fv(r,n);break;case 9:this.gl.uniformMatrix3fv(r,!1,n);break;case 16:this.gl.uniformMatrix4fv(r,!1,n);break;default:console.warn(`Unsupported uniform array length: ${i}`)}}else typeof t==`number`?this.gl.uniform1f(r,t):typeof t==`boolean`?this.gl.uniform1i(r,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.renderUnlessAnimating()};setSpeed=(e=1)=>{this.speed=e,this.updateCurrentSpeed()};updateCurrentSpeed=()=>{this.setCurrentSpeed(this.ownerDocument.hidden||!this.isInViewport?0:this.speed)};setCurrentSpeed=e=>{this.currentSpeed=e,this.rafId===null&&e!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=or)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.renderUnlessAnimating()};renderUnlessAnimating=()=>{this.rafId===null&&this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.updateCurrentSpeed()};dispose=()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.gl.getExtension(`WEBGL_lose_context`)?.loseContext(),this.resizeObserver&&=(this.resizeObserver.disconnect(),null),this.intersectionObserver&&=(this.intersectionObserver.disconnect(),null),visualViewport?.removeEventListener(`resize`,this.handleVisualViewportChange),this.ownerDocument.removeEventListener(`visibilitychange`,this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}},cr=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`,P={fit:`contain`,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},F={fit:`none`,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},I={none:0,contain:1,cover:2},lr=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,ur=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,dr=`
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`,fr=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,pr=`
  vec2 hash22(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p.yx + 19.19);
    return fract(vec2(p.x * p.y, p.x + p.y));
  }
`,mr=`
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`,hr=`
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`,gr=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,_r=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,vr={maxColorCount:10},yr=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${vr.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${lr}
${ur}
${fr}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float mixerGrain = 0.;
  if (u_grainMixer > 0.) {
    mixerGrain = .4 * u_grainMixer * (noise(grainUV, vec2(0.)) - .5);
  }

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., uv.y));
    uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec2 uvRotated = uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < ${vr.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  if (u_grainOverlay > 0.) {
    float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
    grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
    grainOverlay = pow(grainOverlay, 1.3);

    float grainOverlayV = grainOverlay * 2. - 1.;
    vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
    float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
    grainOverlayStrength = pow(grainOverlayStrength, .8);
    color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

    opacity += .5 * grainOverlayStrength;
  }
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,br={maxColorCount:10,maxNoiseIterations:8},xr=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${br.maxColorCount}];
uniform float u_colorsCount;

uniform float u_thickness;
uniform float u_radius;
uniform float u_innerShape;
uniform float u_noiseScale;
uniform float u_noiseIterations;

in vec2 v_objectUV;

out vec4 fragColor;

${lr}
${mr}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
vec2 fbm(vec2 n0, vec2 n1) {
  vec2 total = vec2(0.0);
  float amplitude = .4;
  for (int i = 0; i < ${br.maxNoiseIterations}; i++) {
    if (i >= int(u_noiseIterations)) break;
    total.x += valueNoise(n0) * amplitude;
    total.y += valueNoise(n1) * amplitude;
    n0 *= 1.99;
    n1 *= 1.99;
    amplitude *= 0.65;
  }
  return total;
}

float getNoise(vec2 uv, vec2 pUv, float t) {
  vec2 pUvLeft = pUv + .03 * t;
  float period = max(abs(u_noiseScale * TWO_PI), 1e-6);
  vec2 pUvRight = vec2(fract(pUv.x / period) * period, pUv.y) + .03 * t;
  vec2 noise = fbm(pUvLeft, pUvRight);
  return mix(noise.y, noise.x, smoothstep(-.25, .25, uv.x));
}

float getRingShape(vec2 uv) {
  float radius = u_radius;
  float thickness = u_thickness;

  float distance = length(uv);
  float ringValue = 1. - smoothstep(radius, radius + thickness, distance);
  ringValue *= smoothstep(radius - pow(u_innerShape, 3.) * thickness, radius, distance);

  return ringValue;
}

void main() {
  vec2 shape_uv = v_objectUV;

  float t = u_time;

  float cycleDuration = 3.;
  float period2 = 2.0 * cycleDuration;
  float localTime1 = fract((0.1 * t + cycleDuration) / period2) * period2;
  float localTime2 = fract((0.1 * t) / period2) * period2;
  float timeBlend = .5 + .5 * sin(.1 * t * PI / cycleDuration - .5 * PI);

  float atg = atan(shape_uv.y, shape_uv.x) + .001;
  float l = length(shape_uv);
  float radialOffset = .5 * l - inversesqrt(max(1e-4, l));
  vec2 polar_uv1 = vec2(atg, localTime1 - radialOffset) * u_noiseScale;
  vec2 polar_uv2 = vec2(atg, localTime2 - radialOffset) * u_noiseScale;
  
  float noise1 = getNoise(shape_uv, polar_uv1, t);
  float noise2 = getNoise(shape_uv, polar_uv2, t);

  float noise = mix(noise1, noise2, timeBlend);

  shape_uv *= (.8 + 1.2 * noise);

  float ringShape = getRingShape(shape_uv);

  float mixer = ringShape * ringShape * (u_colorsCount - 1.);
  int idxLast = int(u_colorsCount) - 1;
  vec4 gradient = u_colors[idxLast];
  gradient.rgb *= gradient.a;
  for (int i = ${br.maxColorCount} - 2; i >= 0; i--) {
    float localT = clamp(mixer - float(idxLast - i - 1), 0., 1.);
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  vec3 color = gradient.rgb * ringShape;
  float opacity = gradient.a * ringShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,Sr=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorFront;
uniform vec4 u_colorMid;
uniform vec4 u_colorBack;
uniform float u_brightness;
uniform float u_contrast;

in vec2 v_patternUV;

out vec4 fragColor;

${ur}

float neuroShape(vec2 uv, float t) {
  vec2 sine_acc = vec2(0.);
  vec2 res = vec2(0.);
  float scale = 8.;

  for (int j = 0; j < 15; j++) {
    uv = rotate(uv, 1.);
    sine_acc = rotate(sine_acc, 1.);
    vec2 layer = uv * scale + float(j) + sine_acc - t;
    sine_acc += sin(layer);
    res += (.5 + .5 * cos(layer)) / scale;
    scale *= (1.2);
  }
  return res.x + res.y;
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= .13;

  float t = .5 * u_time;

  float noise = neuroShape(shape_uv, t);

  noise = (1. + u_brightness) * noise * noise;
  noise = pow(noise, .7 + 6. * u_contrast);
  noise = min(1.4, noise);

  float blend = smoothstep(0.7, 1.4, noise);

  vec4 frontC = u_colorFront;
  frontC.rgb *= frontC.a;
  vec4 midC = u_colorMid;
  midC.rgb *= midC.a;
  vec4 blendFront = mix(midC, frontC, blend);

  float safeNoise = max(noise, 0.0);
  vec3 color = blendFront.rgb * safeNoise;
  float opacity = clamp(blendFront.a * safeNoise, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,Cr={maxColorCount:10},wr=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Cr.maxColorCount}];
uniform float u_colorsCount;
uniform float u_stepsPerColor;
uniform float u_size;
uniform float u_sizeRange;
uniform float u_spreading;

in vec2 v_patternUV;

out vec4 fragColor;

${lr}
${ur}
${mr}
${hr}


vec3 voronoiShape(vec2 uv, float time) {
  vec2 i_uv = floor(uv);
  vec2 f_uv = fract(uv);

  float spreading = .25 * clamp(u_spreading, 0., 1.);

  float minDist = 1.;
  vec2 randomizer = vec2(0.);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 tileOffset = vec2(float(x), float(y));
      vec2 rand = randomGB(i_uv + tileOffset);
      vec2 cellCenter = vec2(.5 + 1e-4);
      cellCenter += spreading * cos(time + TWO_PI * rand);
      cellCenter -= .5;
      cellCenter = rotate(cellCenter, randomR(vec2(rand.x, rand.y)) + .1 * time);
      cellCenter += .5;
      float dist = length(tileOffset + cellCenter - f_uv);
      if (dist < minDist) {
        minDist = dist;
        randomizer = rand;
      }
    }
  }

  return vec3(minDist, randomizer);
}

void main() {

  vec2 shape_uv = v_patternUV;
  shape_uv *= 1.5;

  const float firstFrameOffset = -10.;
  float t = u_time + firstFrameOffset;

  vec3 voronoi = voronoiShape(shape_uv, t) + 1e-4;

  float radius = .25 * clamp(u_size, 0., 1.) - .5 * clamp(u_sizeRange, 0., 1.) * voronoi[2];
  float dist = voronoi[0];
  float edgeWidth = fwidth(dist);
  float dots = 1. - smoothstep(radius - edgeWidth, radius + edgeWidth, dist);

  float shape = voronoi[1];

  float mixer = shape * (u_colorsCount - 1.);
  mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${Cr.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;
    float localT = clamp(mixer - float(i - 1), 0.0, 1.0);
    localT = round(localT * steps) / steps;
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
    float localT = mixer + 1.;
    if (mixer > (u_colorsCount - 1.)) {
      localT = mixer - (u_colorsCount - 1.);
    }
    localT = round(localT * steps) / steps;
    vec4 cFst = u_colors[0];
    cFst.rgb *= cFst.a;
    vec4 cLast = u_colors[int(u_colorsCount - 1.)];
    cLast.rgb *= cLast.a;
    gradient = mix(cLast, cFst, localT);
  }

  vec3 color = gradient.rgb * dots;
  float opacity = gradient.a * dots;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,Tr=`#version 300 es
precision mediump float;

uniform vec4 u_colorBack;
uniform vec4 u_colorFill;
uniform vec4 u_colorStroke;
uniform float u_dotSize;
uniform float u_gapX;
uniform float u_gapY;
uniform float u_strokeWidth;
uniform float u_sizeRange;
uniform float u_opacityRange;
uniform float u_shape;

in vec2 v_patternUV;

out vec4 fragColor;

${lr}
${_r}

float polygon(vec2 p, float N, float rot) {
  float a = atan(p.x, p.y) + rot;
  float r = TWO_PI / float(N);

  return cos(floor(.5 + a / r) * r - a) * length(p);
}

void main() {

  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  vec2 shape_uv = 100. * v_patternUV;

  vec2 gap = max(abs(vec2(u_gapX, u_gapY)), vec2(1e-6));
  vec2 grid = fract(shape_uv / gap) + 1e-4;
  vec2 grid_idx = floor(shape_uv / gap);
  float sizeRandomizer = .5 + .8 * snoise(2. * vec2(grid_idx.x * 100., grid_idx.y));
  float opacity_randomizer = .5 + .7 * snoise(2. * vec2(grid_idx.y, grid_idx.x));

  vec2 center = vec2(0.5) - 1e-3;
  vec2 p = (grid - center) * vec2(u_gapX, u_gapY);

  float baseSize = u_dotSize * (1. - sizeRandomizer * u_sizeRange);
  float strokeWidth = u_strokeWidth * (1. - sizeRandomizer * u_sizeRange);

  float dist;
  if (u_shape < 0.5) {
    // Circle
    dist = length(p);
  } else if (u_shape < 1.5) {
    // Diamond
    strokeWidth *= 1.5;
    dist = polygon(1.5 * p, 4., .25 * PI);
  } else if (u_shape < 2.5) {
    // Square
    dist = polygon(1.03 * p, 4., 1e-3);
  } else {
    // Triangle
    strokeWidth *= 1.5;
    p = p * 2. - 1.;
    p *= .9;
    p.y = 1. - p.y;
    p.y -= .75 * baseSize;
    dist = polygon(p, 3., 1e-3);
  }

  float edgeWidth = fwidth(dist);
  float shapeOuter = 1. - smoothstep(baseSize - edgeWidth, baseSize + edgeWidth, dist - strokeWidth);
  float shapeInner = 1. - smoothstep(baseSize - edgeWidth, baseSize + edgeWidth, dist);
  float stroke = shapeOuter - shapeInner;

  float dotOpacity = max(0., 1. - opacity_randomizer * u_opacityRange);
  stroke *= dotOpacity;
  shapeInner *= dotOpacity;

  stroke *= u_colorStroke.a;
  shapeInner *= u_colorFill.a;

  vec3 color = vec3(0.);
  color += stroke * u_colorStroke.rgb;
  color += shapeInner * u_colorFill.rgb;
  color += (1. - shapeInner - stroke) * u_colorBack.rgb * u_colorBack.a;

  float opacity = 0.;
  opacity += stroke;
  opacity += shapeInner;
  opacity += (1. - opacity) * u_colorBack.a;

  fragColor = vec4(color, opacity);
}
`,Er={circle:0,diamond:1,square:2,triangle:3},Dr={maxColorCount:10},Or=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${Dr.maxColorCount}];
uniform float u_colorsCount;
uniform float u_stepsPerColor;
uniform float u_softness;

in vec2 v_patternUV;

out vec4 fragColor;

${_r}

float getNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));

  return noise;
}

float steppedSmooth(float m, float steps, float softness) {
  float stepT = floor(m * steps) / steps;
  float f = m * steps - floor(m * steps);
  float fw = steps * fwidth(m);
  float smoothed = smoothstep(.5 - softness, min(1., .5 + softness + fw), f);
  return stepT + smoothed / steps;
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= .1;

  float t = .2 * u_time;

  float shape = .5 + .5 * getNoise(shape_uv, t);

  float mixer = (shape - .5 / u_colorsCount) * u_colorsCount;

  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${Dr.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    float localM = clamp(mixer - float(i - 1), 0., 1.);
    localM = steppedSmooth(localM, steps, .5 * u_softness);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localM);
  }

  if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
    float localM = mixer + 1.;
    if (mixer > (u_colorsCount - 1.)) {
      localM = mixer - (u_colorsCount - 1.);
    }
    localM = steppedSmooth(localM, steps, .5 * u_softness);
    vec4 cFst = u_colors[0];
    cFst.rgb *= cFst.a;
    vec4 cLast = u_colors[int(u_colorsCount - 1.)];
    cLast.rgb *= cLast.a;
    gradient = mix(cLast, cFst, localM);
  }

  vec3 color = gradient.rgb;
  float opacity = gradient.a;

  ${gr}

  fragColor = vec4(color, opacity);
}
`,kr={maxColorCount:8,maxBallsCount:20},Ar=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${kr.maxColorCount}];
uniform float u_colorsCount;
uniform float u_size;
uniform float u_count;

in vec2 v_objectUV;

out vec4 fragColor;

${lr}
${mr}
float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  vec2 p0 = vec2(i, 0.0);
  vec2 p1 = vec2(i + 1.0, 0.0);
  return mix(randomR(p0), randomR(p1), u);
}

float getBallShape(vec2 uv, vec2 c, float p) {
  float s = .5 * length(uv - c);
  s = 1. - clamp(s, 0., 1.);
  s = pow(s, p);
  return s;
}

void main() {
  vec2 shape_uv = v_objectUV;

  shape_uv += .5;

  const float firstFrameOffset = 2503.4;
  float t = .2 * (u_time + firstFrameOffset);

  vec3 totalColor = vec3(0.);
  float totalShape = 0.;
  float totalOpacity = 0.;

  for (int i = 0; i < ${kr.maxBallsCount}; i++) {
    if (i >= int(ceil(u_count))) break;

    float idxFract = float(i) / float(${kr.maxBallsCount});
    float angle = TWO_PI * idxFract;

    float speed = 1. - .2 * idxFract;
    float noiseX = noise(angle * 10. + float(i) + t * speed);
    float noiseY = noise(angle * 20. + float(i) - t * speed);

    vec2 pos = vec2(.5) + 1e-4 + .9 * (vec2(noiseX, noiseY) - .5);

    int safeIndex = i % int(u_colorsCount + 0.5);
    vec4 ballColor = u_colors[safeIndex];
    ballColor.rgb *= ballColor.a;

    float sizeFrac = 1.;
    if (float(i) > floor(u_count - 1.)) {
      sizeFrac *= fract(u_count);
    }

    float shape = getBallShape(shape_uv, pos, 45. - 30. * u_size * sizeFrac);
    shape *= pow(u_size, .2);
    shape = smoothstep(0., 1., shape);

    totalColor += ballColor.rgb * shape;
    totalShape += shape;
    totalOpacity += ballColor.a * shape;
  }

  totalColor /= max(totalShape, 1e-4);
  totalOpacity /= max(totalShape, 1e-4);

  float edge_width = fwidth(totalShape);
  float finalShape = smoothstep(.4, .4 + edge_width, totalShape);

  vec3 color = totalColor * finalShape;
  float opacity = totalOpacity * finalShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,jr=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_proportion;
uniform float u_softness;
uniform float u_octaveCount;
uniform float u_persistence;
uniform float u_lacunarity;

in vec2 v_patternUV;

out vec4 fragColor;

${lr}
${dr}
${fr}

float hash31(vec3 p) {
  p = fract(p * 0.3183099) + 0.1;
  p += dot(p, p.yzx + 19.19);
  return fract(p.x * (p.y + p.z));
}

vec3 gradientPredefined(float hash) {
  int idx = int(hash * 12.0) % 12;

  if (idx == 0) return vec3(1, 1, 0);
  if (idx == 1) return vec3(-1, 1, 0);
  if (idx == 2) return vec3(1, -1, 0);
  if (idx == 3) return vec3(-1, -1, 0);
  if (idx == 4) return vec3(1, 0, 1);
  if (idx == 5) return vec3(-1, 0, 1);
  if (idx == 6) return vec3(1, 0, -1);
  if (idx == 7) return vec3(-1, 0, -1);
  if (idx == 8) return vec3(0, 1, 1);
  if (idx == 9) return vec3(0, -1, 1);
  if (idx == 10) return vec3(0, 1, -1);
  return vec3(0, -1, -1);// idx == 11
}

float interpolateSafe(float v000, float v001, float v010, float v011,
float v100, float v101, float v110, float v111, vec3 t) {
  t = clamp(t, 0.0, 1.0);

  float v00 = mix(v000, v100, t.x);
  float v01 = mix(v001, v101, t.x);
  float v10 = mix(v010, v110, t.x);
  float v11 = mix(v011, v111, t.x);

  float v0 = mix(v00, v10, t.y);
  float v1 = mix(v01, v11, t.y);

  return mix(v0, v1, t.z);
}

vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float perlinNoise(vec3 position, float seed) {
  position += vec3(seed * 127.1, seed * 311.7, seed * 74.7);

  vec3 i = floor(position);
  vec3 f = fract(position);
  float h000 = hash31(i);
  float h001 = hash31(i + vec3(0, 0, 1));
  float h010 = hash31(i + vec3(0, 1, 0));
  float h011 = hash31(i + vec3(0, 1, 1));
  float h100 = hash31(i + vec3(1, 0, 0));
  float h101 = hash31(i + vec3(1, 0, 1));
  float h110 = hash31(i + vec3(1, 1, 0));
  float h111 = hash31(i + vec3(1, 1, 1));
  vec3 g000 = gradientPredefined(h000);
  vec3 g001 = gradientPredefined(h001);
  vec3 g010 = gradientPredefined(h010);
  vec3 g011 = gradientPredefined(h011);
  vec3 g100 = gradientPredefined(h100);
  vec3 g101 = gradientPredefined(h101);
  vec3 g110 = gradientPredefined(h110);
  vec3 g111 = gradientPredefined(h111);
  float v000 = dot(g000, f - vec3(0, 0, 0));
  float v001 = dot(g001, f - vec3(0, 0, 1));
  float v010 = dot(g010, f - vec3(0, 1, 0));
  float v011 = dot(g011, f - vec3(0, 1, 1));
  float v100 = dot(g100, f - vec3(1, 0, 0));
  float v101 = dot(g101, f - vec3(1, 0, 1));
  float v110 = dot(g110, f - vec3(1, 1, 0));
  float v111 = dot(g111, f - vec3(1, 1, 1));

  vec3 u = fade(f);
  return interpolateSafe(v000, v001, v010, v011, v100, v101, v110, v111, u);
}

float p_noise(vec3 position, int octaveCount, float persistence, float lacunarity) {
  float value = 0.0;
  float amplitude = 1.0;
  float frequency = 10.0;
  octaveCount = clamp(octaveCount, 1, 8);

  for (int i = 0; i < octaveCount; i++) {
    float seed = float(i) * 0.7319;
    value += perlinNoise(position * frequency, seed) * amplitude;
    amplitude *= persistence;
    frequency *= lacunarity;
  }
  return value;
}

float get_max_amp(float persistence, float octaveCount) {
  persistence = clamp(persistence * 0.999, 0.0, 0.999);
  octaveCount = clamp(octaveCount, 1.0, 8.0);

  return (1.0 - pow(persistence, octaveCount)) / max(1e-4, (1.0 - persistence));
}

void main() {
  vec2 uv = v_patternUV;
  uv *= .5;

  float t = .2 * u_time;

  vec3 p = vec3(uv, t);

  float octCount = floor(u_octaveCount);
  float noise = p_noise(p, int(octCount), u_persistence, u_lacunarity);

  float max_amp = get_max_amp(u_persistence, octCount);
  float noise_normalized = clamp((noise + max_amp) / max(1e-4, (2. * max_amp)) + (u_proportion - .5), 0.0, 1.0);
  float sharpness = clamp(u_softness, 0., 1.);
  float smooth_w = 0.5 * max(fwidth(noise_normalized), 0.001);
  float res = smoothstep(
  .5 - .5 * sharpness - smooth_w,
  .5 + .5 * sharpness + smooth_w,
  noise_normalized
  );

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,Mr={maxColorCount:5},Nr=`#version 300 es
precision mediump float;

uniform float u_time;

uniform float u_scale;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${Mr.maxColorCount}];
uniform float u_colorsCount;

uniform float u_stepsPerColor;
uniform vec4 u_colorGlow;
uniform vec4 u_colorGap;
uniform float u_distortion;
uniform float u_gap;
uniform float u_glow;

in vec2 v_patternUV;

out vec4 fragColor;

${lr}
${hr}

vec4 voronoi(vec2 x, float t) {
  vec2 ip = floor(x);
  vec2 fp = fract(x);

  vec2 mg, mr;
  float md = 8.;
  float rand = 0.;

  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = randomGB(ip + g);
      float raw_hash = o.x;
      o = .5 + u_distortion * sin(t + TWO_PI * o);
      vec2 r = g + o - fp;
      float d = dot(r, r);

      if (d < md) {
        md = d;
        mr = r;
        mg = g;
        rand = raw_hash;
      }
    }
  }

  md = 8.;
  for (int j = -2; j <= 2; j++) {
    for (int i = -2; i <= 2; i++) {
      vec2 g = mg + vec2(float(i), float(j));
      vec2 o = randomGB(ip + g);
      o = .5 + u_distortion * sin(t + TWO_PI * o);
      vec2 r = g + o - fp;
      if (dot(mr - r, mr - r) > .00001) {
        md = min(md, dot(.5 * (mr + r), normalize(r - mr)));
      }
    }
  }

  return vec4(md, mr, rand);
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= 1.25;

  float t = u_time;

  vec4 voronoiRes = voronoi(shape_uv, t);

  float shape = clamp(voronoiRes.w, 0., 1.);
  float mixer = shape * (u_colorsCount - 1.);
  mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${Mr.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;
    float localT = clamp(mixer - float(i - 1), 0.0, 1.0);
    localT = round(localT * steps) / steps;
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
    float localT = mixer + 1.;
    if (mixer > (u_colorsCount - 1.)) {
      localT = mixer - (u_colorsCount - 1.);
    }
    localT = round(localT * steps) / steps;
    vec4 cFst = u_colors[0];
    cFst.rgb *= cFst.a;
    vec4 cLast = u_colors[int(u_colorsCount - 1.)];
    cLast.rgb *= cLast.a;
    gradient = mix(cLast, cFst, localT);
  }

  vec3 cellColor = gradient.rgb;
  float cellOpacity = gradient.a;

  float glows = length(voronoiRes.yz * u_glow);
  glows = pow(glows, 1.5);

  vec3 color = mix(cellColor, u_colorGlow.rgb * u_colorGlow.a, u_colorGlow.a * glows);
  float opacity = cellOpacity + u_colorGlow.a * glows;

  float edge = voronoiRes.x;
  float smoothEdge = .02 / (2. * u_scale) * (1. + .5 * u_gap);
  edge = smoothstep(u_gap - smoothEdge, u_gap + smoothEdge, edge);

  color = mix(u_colorGap.rgb * u_colorGap.a, color, edge);
  opacity = mix(u_colorGap.a, opacity, edge);

  fragColor = vec4(color, opacity);
}
`,Pr=`#version 300 es
precision mediump float;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_shape;
uniform float u_frequency;
uniform float u_amplitude;
uniform float u_spacing;
uniform float u_proportion;
uniform float u_softness;

in vec2 v_patternUV;

out vec4 fragColor;

${lr}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= 4.;

  float wave = .5 * cos(shape_uv.x * u_frequency * TWO_PI);
  float zigzag = 2. * abs(fract(shape_uv.x * u_frequency) - .5);
  float irregular = sin(shape_uv.x * .25 * u_frequency * TWO_PI) * cos(shape_uv.x * u_frequency * TWO_PI);
  float irregular2 = .75 * (sin(shape_uv.x * u_frequency * TWO_PI) + .5 * cos(shape_uv.x * .5 * u_frequency * TWO_PI));

  float offset = mix(zigzag, wave, smoothstep(0., 1., u_shape));
  offset = mix(offset, irregular, smoothstep(1., 2., u_shape));
  offset = mix(offset, irregular2, smoothstep(2., 3., u_shape));
  offset *= 2. * u_amplitude;

  float spacing = (.001 + u_spacing);
  float shape = .5 + .5 * sin((shape_uv.y + offset) * PI / spacing);

  float aa = .0001 + fwidth(shape);
  float dc = 1. - clamp(u_proportion, 0., 1.);
  float e0 = dc - u_softness - aa;
  float e1 = dc + u_softness + aa;
  float res = smoothstep(min(e0, e1), max(e0, e1), shape);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,Fr={maxColorCount:10},Ir=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${Fr.maxColorCount}];
uniform float u_colorsCount;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

in vec2 v_patternUV;

out vec4 fragColor;

${lr}
${ur}
float randomG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomG(i);
  float b = randomG(i + vec2(1.0, 0.0));
  float c = randomG(i + vec2(0.0, 1.0));
  float d = randomG(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}


void main() {
  vec2 uv = v_patternUV;
  uv *= .5;

  const float firstFrameOffset = 118.;
  float t = 0.0625 * (u_time + firstFrameOffset);

  float n1 = valueNoise(uv * 1. + t);
  float n2 = valueNoise(uv * 2. - t);
  float angle = n1 * TWO_PI;
  uv.x += 4. * u_distortion * n2 * cos(angle);
  uv.y += 4. * u_distortion * n2 * sin(angle);

  float swirl = u_swirl;
  for (int i = 1; i <= 20; i++) {
    if (i >= int(u_swirlIterations)) break;
    float iFloat = float(i);
    uv.x += swirl / iFloat * cos(t + iFloat * 1.5 * uv.y);
    uv.y += swirl / iFloat * cos(t + iFloat * 1. * uv.x);
  }

  float proportion = clamp(u_proportion, 0., 1.);

  float shape = 0.;
  if (u_shape < .5) {
    vec2 checksShape_uv = uv * (.5 + 3.5 * u_shapeScale);
    shape = .5 + .5 * sin(checksShape_uv.x) * cos(checksShape_uv.y);
    shape += .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else if (u_shape < 1.5) {
    vec2 stripesShape_uv = uv * (2. * u_shapeScale);
    float f = fract(stripesShape_uv.y);
    shape = smoothstep(.0, .55, f) * (1.0 - smoothstep(.45, 1., f));
    shape += .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else {
    float shapeScaling = 5. * (1. - u_shapeScale);
    float e0 = 0.45 - shapeScaling;
    float e1 = 0.55 + shapeScaling;
    shape = smoothstep(min(e0, e1), max(e0, e1), 1.0 - uv.y + 0.3 * (proportion - 0.5));
  }

  float mixer = shape * (u_colorsCount - 1.);
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float aa = fwidth(shape);
  for (int i = 1; i < ${Fr.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0.0, 1.0);

    float localMixerStart = floor(m);
    float softness = .5 * u_softness + fwidth(m);
    float smoothed = smoothstep(max(0., .5 - softness - aa), min(1., .5 + softness + aa), m - localMixerStart);
    float stepped = localMixerStart + smoothed;

    m = mix(stepped, m, u_softness);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb;
  float opacity = gradient.a;

  ${gr}

  fragColor = vec4(color, opacity);
}
`,Lr={checks:0,stripes:1,edge:2},Rr={maxColorCount:5},zr=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colorBloom;
uniform vec4 u_colors[${Rr.maxColorCount}];
uniform float u_colorsCount;

uniform float u_density;
uniform float u_spotty;
uniform float u_midSize;
uniform float u_midIntensity;
uniform float u_intensity;
uniform float u_bloom;

in vec2 v_objectUV;

out vec4 fragColor;

${lr}
${ur}
${mr}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

${dr}

float raysShape(vec2 uv, float r, float freq, float intensity, float radius) {
  float a = atan(uv.y, uv.x);
  vec2 left = vec2(a * freq, r);
  vec2 right = vec2(fract(a / TWO_PI) * TWO_PI * freq, r);
  float n_left = pow(valueNoise(left), intensity);
  float n_right = pow(valueNoise(right), intensity);
  float shape = mix(n_right, n_left, smoothstep(-.15, .15, uv.x));
  return shape;
}

void main() {
  vec2 shape_uv = v_objectUV;

  float t = .2 * u_time;

  float radius = length(shape_uv);
  float spots = 6.5 * abs(u_spotty);

  float intensity = 4. - 3. * clamp(u_intensity, 0., 1.);

  float delta = 1. - smoothstep(0., 1., radius);

  float midSize = 10. * abs(u_midSize);
  float ms_lo = 0.02 * midSize;
  float ms_hi = max(midSize, 1e-6);
  float middleShape = pow(u_midIntensity, 0.3) * (1. - smoothstep(ms_lo, ms_hi, 3.0 * radius));
  middleShape = pow(middleShape, 5.0);

  vec3 accumColor = vec3(0.0);
  float accumAlpha = 0.0;

  for (int i = 0; i < ${Rr.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 rotatedUV = rotate(shape_uv, float(i) + 1.0);

    float r1 = radius * (1.0 + 0.4 * float(i)) - 3.0 * t;
    float r2 = 0.5 * radius * (1.0 + spots) - 2.0 * t;
    float density = 6. * u_density + step(.5, u_density) * pow(4.5 * (u_density - .5), 4.);
    float f = mix(1.0, 3.0 + 0.5 * float(i), hash11(float(i) * 15.)) * density;

    float ray = raysShape(rotatedUV, r1, 5.0 * f, intensity, radius);
    ray *= raysShape(rotatedUV, r2, 4.0 * f, intensity, radius);
    ray += (1. + 4. * ray) * middleShape;
    ray = clamp(ray, 0.0, 1.0);

    float srcAlpha = u_colors[i].a * ray;
    vec3 srcColor = u_colors[i].rgb * srcAlpha;

    vec3 alphaBlendColor = accumColor + (1.0 - accumAlpha) * srcColor;
    float alphaBlendAlpha = accumAlpha + (1.0 - accumAlpha) * srcAlpha;

    vec3 addBlendColor = accumColor + srcColor;
    float addBlendAlpha = accumAlpha + srcAlpha;

    accumColor = mix(alphaBlendColor, addBlendColor, u_bloom);
    accumAlpha = mix(alphaBlendAlpha, addBlendAlpha, u_bloom);
  }

  float overlayAlpha = u_colorBloom.a;
  vec3 overlayColor = u_colorBloom.rgb * overlayAlpha;

  vec3 colorWithOverlay = accumColor + accumAlpha * overlayColor;
  accumColor = mix(accumColor, colorWithOverlay, u_bloom);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;

  vec3 color = accumColor + (1. - accumAlpha) * bgColor;
  float opacity = accumAlpha + (1. - accumAlpha) * u_colorBack.a;
  color = clamp(color, 0., 1.);
  opacity = clamp(opacity, 0., 1.);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,Br=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_density;
uniform float u_distortion;
uniform float u_strokeWidth;
uniform float u_strokeCap;
uniform float u_strokeTaper;
uniform float u_noise;
uniform float u_noiseFrequency;
uniform float u_softness;

in vec2 v_patternUV;

out vec4 fragColor;

${lr}
${_r}

void main() {
  vec2 uv = 2. * v_patternUV;

  float t = u_time;
  float l = length(uv);
  float density = clamp(u_density, 0., 1.);
  l = pow(max(l, 1e-6), density);
  float angle = atan(uv.y, uv.x) - t;
  float angleNormalised = angle / TWO_PI;

  if (u_noise > 0.) {
    angleNormalised += .125 * u_noise * snoise(16. * pow(u_noiseFrequency, 3.) * uv);
  }

  float offset = l + angleNormalised;
  offset -= u_distortion * (sin(4. * l - .5 * t) * cos(PI + l + .5 * t));
  float stripe = fract(offset);

  float shape = 2. * abs(stripe - .5);
  float width = 1. - clamp(u_strokeWidth, .005 * u_strokeTaper, 1.);


  float wCap = mix(width, (1. - stripe) * (1. - step(.5, stripe)), (1. - clamp(l, 0., 1.)));
  width = mix(width, wCap, u_strokeCap);
  width *= (1. - clamp(u_strokeTaper, 0., 1.) * l);

  float fw = fwidth(offset);
  float fwMult = 4. - 3. * (smoothstep(.05, .4, 2. * u_strokeWidth) * smoothstep(.05, .4, 2. * (1. - u_strokeWidth)));
  float pixelSize = mix(fwMult * fw, fwidth(shape), clamp(fw, 0., 1.));
  pixelSize = mix(pixelSize, .002, u_strokeCap * (1. - clamp(l, 0., 1.)));

  float res = smoothstep(width - pixelSize - u_softness, width + pixelSize + u_softness, shape);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,Vr={maxColorCount:10},Hr=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Vr.maxColorCount}];
uniform float u_colorsCount;
uniform float u_bandCount;
uniform float u_twist;
uniform float u_center;
uniform float u_proportion;
uniform float u_softness;
uniform float u_noise;
uniform float u_noiseFrequency;

in vec2 v_objectUV;

out vec4 fragColor;

${lr}
${_r}
${ur}

void main() {
  vec2 shape_uv = v_objectUV;

  float l = length(shape_uv);
  l = max(1e-4, l);

  float t = u_time;

  float angle = ceil(u_bandCount) * atan(shape_uv.y, shape_uv.x) + t;
  float angle_norm = angle / TWO_PI;

  float twist = 3. * clamp(u_twist, 0., 1.);
  float offset = pow(l, -twist) + angle_norm;

  float shape = fract(offset);
  shape = 1. - abs(2. * shape - 1.);
  if (u_noise > 0.) {
    shape += u_noise * snoise(15. * pow(u_noiseFrequency, 2.) * shape_uv);
  }

  float mid = smoothstep(.2, .2 + .8 * u_center, pow(l, twist));
  shape = mix(0., shape, mid);

  float proportion = clamp(u_proportion, 0., 1.);
  float exponent = mix(.25, 1., proportion * 2.);
  exponent = mix(exponent, 10., max(0., proportion * 2. - 1.));
  shape = pow(shape, exponent);

  float mixer = shape * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;

  float outerShape = 0.;
  for (int i = 1; i < ${Vr.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;

    float m = clamp(mixer - float(i - 1), 0., 1.);
    float aa = fwidth(m);
    m = smoothstep(.5 - .5 * u_softness - aa, .5 + .5 * u_softness + aa, m);

    if (i == 1) {
      outerShape = m;
    }

    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  float midAA = .1 * fwidth(pow(l, -twist));
  float outerMid = smoothstep(.2, .2 + midAA, pow(l, twist));
  outerShape = mix(0., outerShape, outerMid);

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,Ur=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform float u_pxSize;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_shape;
uniform float u_type;

out vec4 fragColor;

${_r}
${lr}
${dr}
${fr}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));

  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {
  float t = .5 * u_time;

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec2 shapeUV = normalizedUV;

  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 boxSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  
  if (u_shape > 3.5) {
    vec2 objectBoxSize = vec2(0.);
    // fit = none
    objectBoxSize.x = min(boxSize.x, boxSize.y);
    if (u_fit == 1.) { // fit = contain
      objectBoxSize.x = min(u_resolution.x, u_resolution.y);
    } else if (u_fit == 2.) { // fit = cover
      objectBoxSize.x = max(u_resolution.x, u_resolution.y);
    }
    objectBoxSize.y = objectBoxSize.x;
    vec2 objectWorldScale = u_resolution.xy / objectBoxSize;

    shapeUV *= objectWorldScale;
    shapeUV += boxOrigin * (objectWorldScale - 1.);
    shapeUV += vec2(-u_offsetX, u_offsetY);
    shapeUV /= u_scale;
    shapeUV = graphicRotation * shapeUV;
  } else {
    vec2 patternBoxSize = vec2(0.);
    // fit = none
    patternBoxSize.x = patternBoxRatio * min(boxSize.x / patternBoxRatio, boxSize.y);
    float patternWorldNoFitBoxWidth = patternBoxSize.x;
    if (u_fit == 1.) { // fit = contain
      patternBoxSize.x = patternBoxRatio * min(u_resolution.x / patternBoxRatio, u_resolution.y);
    } else if (u_fit == 2.) { // fit = cover
      patternBoxSize.x = patternBoxRatio * max(u_resolution.x / patternBoxRatio, u_resolution.y);
    }
    patternBoxSize.y = patternBoxSize.x / patternBoxRatio;
    vec2 patternWorldScale = u_resolution.xy / patternBoxSize;

    shapeUV += vec2(-u_offsetX, u_offsetY) / patternWorldScale;
    shapeUV += boxOrigin;
    shapeUV -= boxOrigin / patternWorldScale;
    shapeUV *= u_resolution.xy;
    shapeUV /= u_pixelRatio;
    if (u_fit > 0.) {
      shapeUV *= (patternWorldNoFitBoxWidth / patternBoxSize.x);
    }
    shapeUV /= u_scale;
    shapeUV = graphicRotation * shapeUV;
    shapeUV += boxOrigin / patternWorldScale;
    shapeUV -= boxOrigin;
    shapeUV += .5;
  }

  float shape = 0.;
  if (u_shape < 1.5) {
    // Simplex noise
    shapeUV *= .001;

    shape = 0.5 + 0.5 * getSimplexNoise(shapeUV, t);
    shape = smoothstep(0.3, 0.9, shape);

  } else if (u_shape < 2.5) {
    // Warp
    shapeUV *= .003;

    for (float i = 1.0; i < 6.0; i++) {
      shapeUV.x += 0.6 / i * cos(i * 2.5 * shapeUV.y + t);
      shapeUV.y += 0.6 / i * cos(i * 1.5 * shapeUV.x + t);
    }

    shape = .15 / max(0.001, abs(sin(t - shapeUV.y - shapeUV.x)));
    shape = smoothstep(0.02, 1., shape);

  } else if (u_shape < 3.5) {
    // Dots
    shapeUV *= .05;

    float stripeIdx = floor(2. * shapeUV.x / TWO_PI);
    float rand = hash11(stripeIdx * 10.);
    rand = sign(rand - .5) * pow(.1 + abs(rand), .4);
    shape = sin(shapeUV.x) * cos(shapeUV.y - 5. * rand * t);
    shape = pow(abs(shape), 6.);

  } else if (u_shape < 4.5) {
    // Sine wave
    shapeUV *= 4.;

    float wave = cos(.5 * shapeUV.x - 2. * t) * sin(1.5 * shapeUV.x + t) * (.75 + .25 * cos(3. * t));
    shape = 1. - smoothstep(-1., 1., shapeUV.y + wave);

  } else if (u_shape < 5.5) {
    // Ripple

    float dist = length(shapeUV);
    float waves = sin(pow(dist, 1.7) * 7. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {
    // Swirl

    float l = length(shapeUV);
    float angle = 6. * atan(shapeUV.y, shapeUV.x) + 4. * t;
    float twist = 1.2;
    float offset = 1. / pow(max(l, 1e-6), twist) + angle / TWO_PI;
    float mid = smoothstep(0., 1., pow(l, twist));
    shape = mix(0., fract(offset), mid);

  } else {
    // Sphere
    shapeUV *= 2.;

    float d = 1. - pow(length(shapeUV), 2.);
    vec3 pos = vec3(shapeUV, sqrt(max(0., d)));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }


  int type = int(floor(u_type));
  float dithering = 0.0;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), shape);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  dithering -= .5;
  float res = step(.5, shape + dithering);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,Wr={simplex:1,warp:2,dots:3,wave:4,ripple:5,swirl:6,sphere:7},Gr={random:1,"2x2":2,"4x4":3,"8x8":4},Kr={maxColorCount:7},qr=`#version 300 es
precision lowp float;

uniform mediump float u_time;
uniform mediump vec2 u_resolution;
uniform mediump float u_pixelRatio;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Kr.maxColorCount}];
uniform float u_colorsCount;
uniform float u_softness;
uniform float u_intensity;
uniform float u_noise;
uniform float u_shape;

uniform mediump float u_worldWidth;
uniform mediump float u_worldHeight;
uniform mediump float u_fit;

uniform mediump float u_scale;
uniform mediump float u_rotation;
uniform mediump float u_offsetX;
uniform mediump float u_offsetY;

in vec2 v_objectUV;
in vec2 v_patternUV;
in vec2 v_objectBoxSize;
in vec2 v_patternBoxSize;

out vec4 fragColor;

${lr}
${_r}
${ur}
${mr}

float valueNoiseR(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
vec4 fbmR(vec2 n0, vec2 n1, vec2 n2, vec2 n3) {
  float amplitude = 0.2;
  vec4 total = vec4(0.);
  for (int i = 0; i < 3; i++) {
    n0 = rotate(n0, 0.3);
    n1 = rotate(n1, 0.3);
    n2 = rotate(n2, 0.3);
    n3 = rotate(n3, 0.3);
    total.x += valueNoiseR(n0) * amplitude;
    total.y += valueNoiseR(n1) * amplitude;
    total.z += valueNoiseR(n2) * amplitude;
    total.z += valueNoiseR(n3) * amplitude;
    n0 *= 1.99;
    n1 *= 1.99;
    n2 *= 1.99;
    n3 *= 1.99;
    amplitude *= 0.6;
  }
  return total;
}

${dr}

vec2 truchet(vec2 uv, float idx){
  idx = fract(((idx - .5) * 2.));
  if (idx > 0.75) {
    uv = vec2(1.0) - uv;
  } else if (idx > 0.5) {
    uv = vec2(1.0 - uv.x, uv.y);
  } else if (idx > 0.25) {
    uv = 1.0 - vec2(1.0 - uv.x, uv.y);
  }
  return uv;
}

void main() {

  const float firstFrameOffset = 7.;
  float t = .1 * (u_time + firstFrameOffset);

  vec2 shape_uv = vec2(0.);
  vec2 grain_uv = vec2(0.);

  float r = u_rotation * PI / 180.;
  float cr = cos(r);
  float sr = sin(r);
  mat2 graphicRotation = mat2(cr, sr, -sr, cr);
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  if (u_shape > 3.5) {
    shape_uv = v_objectUV;
    grain_uv = shape_uv;

    // apply inverse transform to grain_uv so it respects the originXY
    grain_uv = transpose(graphicRotation) * grain_uv;
    grain_uv *= u_scale;
    grain_uv -= graphicOffset;
    grain_uv *= v_objectBoxSize;
    grain_uv *= .7;
  } else {
    shape_uv = .5 * v_patternUV;
    grain_uv = 100. * v_patternUV;

    // apply inverse transform to grain_uv so it respects the originXY
    grain_uv = transpose(graphicRotation) * grain_uv;
    grain_uv *= u_scale;
    if (u_fit > 0.) {
      vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
      givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
      float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
      vec2 patternBoxGivenSize = vec2(
      (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
      (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
      );
      patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;
      float patternBoxNoFitBoxWidth = patternBoxRatio * min(patternBoxGivenSize.x / patternBoxRatio, patternBoxGivenSize.y);
      grain_uv /= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
    }
    vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;
    grain_uv -= graphicOffset / patternBoxScale;
    grain_uv *= 1.6;
  }


  float shape = 0.;

  if (u_shape < 1.5) {
    // Sine wave

    float wave = cos(.5 * shape_uv.x - 4. * t) * sin(1.5 * shape_uv.x + 2. * t) * (.75 + .25 * cos(6. * t));
    shape = 1. - smoothstep(-1., 1., shape_uv.y + wave);

  } else if (u_shape < 2.5) {
    // Grid (dots)

    float stripeIdx = floor(2. * shape_uv.x / TWO_PI);
    float rand = hash11(stripeIdx * 100.);
    rand = sign(rand - .5) * pow(4. * abs(rand), .3);
    shape = sin(shape_uv.x) * cos(shape_uv.y - 5. * rand * t);
    shape = pow(abs(shape), 4.);

  } else if (u_shape < 3.5) {
    // Truchet pattern

    float n2 = valueNoiseR(shape_uv * .4 - 3.75 * t);
    shape_uv.x += 10.;
    shape_uv *= .6;

    vec2 tile = truchet(fract(shape_uv), randomR(floor(shape_uv)));

    float distance1 = length(tile);
    float distance2 = length(tile - vec2(1.));

    n2 -= .5;
    n2 *= .1;
    shape = smoothstep(.2, .55, distance1 + n2) * (1. - smoothstep(.45, .8, distance1 - n2));
    shape += smoothstep(.2, .55, distance2 + n2) * (1. - smoothstep(.45, .8, distance2 - n2));

    shape = pow(shape, 1.5);

  } else if (u_shape < 4.5) {
    // Corners

    shape_uv *= .6;
    vec2 outer = vec2(.5);

    vec2 bl = smoothstep(vec2(0.), outer, shape_uv + vec2(.1 + .1 * sin(3. * t), .2 - .1 * sin(5.25 * t)));
    vec2 tr = smoothstep(vec2(0.), outer, 1. - shape_uv);
    shape = 1. - bl.x * bl.y * tr.x * tr.y;

    shape_uv = -shape_uv;
    bl = smoothstep(vec2(0.), outer, shape_uv + vec2(.1 + .1 * sin(3. * t), .2 - .1 * cos(5.25 * t)));
    tr = smoothstep(vec2(0.), outer, 1. - shape_uv);
    shape -= bl.x * bl.y * tr.x * tr.y;

    shape = 1. - smoothstep(0., 1., shape);

  } else if (u_shape < 5.5) {
    // Ripple

    shape_uv *= 2.;
    float dist = length(.4 * shape_uv);
    float waves = sin(pow(dist, 1.2) * 5. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {
    // Blob

    t *= 2.;

    vec2 f1_traj = .25 * vec2(1.3 * sin(t), .2 + 1.3 * cos(.6 * t + 4.));
    vec2 f2_traj = .2 * vec2(1.2 * sin(-t), 1.3 * sin(1.6 * t));
    vec2 f3_traj = .25 * vec2(1.7 * cos(-.6 * t), cos(-1.6 * t));
    vec2 f4_traj = .3 * vec2(1.4 * cos(.8 * t), 1.2 * sin(-.6 * t - 3.));

    shape = .5 * pow(1. - clamp(0., 1., length(shape_uv + f1_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f2_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f3_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f4_traj)), 5.);

    shape = smoothstep(.0, .9, shape);
    float edge = smoothstep(.25, .3, shape);
    shape = mix(.0, shape, edge);

  } else {
    // Sphere

    shape_uv *= 2.;
    float d = 1. - pow(length(shape_uv), 2.);
    vec3 pos = vec3(shape_uv, sqrt(max(d, 0.)));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }

  float baseNoise = snoise(grain_uv * .5);
  vec4 fbmVals = fbmR(
  .002 * grain_uv + 10.,
  .003 * grain_uv,
  .001 * grain_uv,
  rotate(.4 * grain_uv, 2.)
  );
  float grainDist = baseNoise * snoise(grain_uv * .2) - fbmVals.x - fbmVals.y;
  float rawNoise = .75 * baseNoise - fbmVals.w - fbmVals.z;
  float noise = clamp(rawNoise, 0., 1.);

  shape += u_intensity * 2. / u_colorsCount * (grainDist + .5);
  shape += u_noise * 10. / u_colorsCount * noise;

  float aa = fwidth(shape);

  shape = clamp(shape - .5 / u_colorsCount, 0., 1.);
  float totalShape = smoothstep(0., u_softness + 2. * aa, clamp(shape * u_colorsCount, 0., 1.));
  float mixer = shape * (u_colorsCount - 1.);

  int cntStop = int(u_colorsCount) - 1;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${Kr.maxColorCount}; i++) {
    if (i > cntStop) break;

    float localT = clamp(mixer - float(i - 1), 0., 1.);
    localT = smoothstep(.5 - .5 * u_softness - aa, .5 + .5 * u_softness + aa, localT);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  vec3 color = gradient.rgb * totalShape;
  float opacity = gradient.a * totalShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  fragColor = vec4(color, opacity);
}
`,Jr={wave:1,dots:2,truchet:3,corners:4,ripple:5,blob:6,sphere:7},Yr={maxColorCount:5,maxSpots:4},Xr=`#version 300 es
precision lowp float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Yr.maxColorCount}];
uniform float u_colorsCount;
uniform float u_roundness;
uniform float u_thickness;
uniform float u_marginLeft;
uniform float u_marginRight;
uniform float u_marginTop;
uniform float u_marginBottom;
uniform float u_aspectRatio;
uniform float u_softness;
uniform float u_intensity;
uniform float u_bloom;
uniform float u_spotSize;
uniform float u_spots;
uniform float u_pulse;
uniform float u_smoke;
uniform float u_smokeSize;

uniform sampler2D u_noiseTexture;

in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_patternUV;

out vec4 fragColor;

${lr}

float beat(float time) {
  float first = pow(abs(sin(time * TWO_PI)), 10.);
  float second = pow(abs(sin((time - .15) * TWO_PI)), 10.);

  return clamp(first + 0.6 * second, 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float roundedBox(vec2 uv, vec2 halfSize, float distance, float cornerDistance, float thickness, float softness) {
  float borderDistance = abs(distance);
  float aa = 2. * fwidth(distance);
  float border = 1. - sst(min(mix(thickness, -thickness, softness), thickness + aa), max(mix(thickness, -thickness, softness), thickness + aa), borderDistance);
  float cornerFadeCircles = 0.;
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv + halfSize) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - vec2(-halfSize.x, halfSize.y)) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - vec2(halfSize.x, -halfSize.y)) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - halfSize) / thickness)));
  aa = fwidth(cornerDistance);
  float cornerFade = sst(0., mix(aa, thickness, softness), cornerDistance);
  cornerFade *= cornerFadeCircles;
  border += cornerFade;
  return border;
}

${hr}

float randomG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomG(i);
  float b = randomG(i + vec2(1.0, 0.0));
  float c = randomG(i + vec2(0.0, 1.0));
  float d = randomG(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

void main() {
  const float firstFrameOffset = 109.;
  float t = 1.2 * (u_time + firstFrameOffset);

  vec2 borderUV = v_responsiveUV;
  float pulse = u_pulse * beat(.18 * u_time);

  float canvasRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 halfSize = vec2(.5);
  borderUV.x *= max(canvasRatio, 1.);
  borderUV.y /= min(canvasRatio, 1.);
  halfSize.x *= max(canvasRatio, 1.);
  halfSize.y /= min(canvasRatio, 1.);

  float mL = u_marginLeft;
  float mR = u_marginRight;
  float mT = u_marginTop;
  float mB = u_marginBottom;
  float mX = mL + mR;
  float mY = mT + mB;

  if (u_aspectRatio > 0.) {
    float shapeRatio = canvasRatio * (1. - mX) / max(1. - mY, 1e-6);
    float freeX = shapeRatio > 1. ? (1. - mX) * (1. - 1. / max(abs(shapeRatio), 1e-6)) : 0.;
    float freeY = shapeRatio < 1. ? (1. - mY) * (1. - shapeRatio) : 0.;
    mL += freeX * 0.5;
    mR += freeX * 0.5;
    mT += freeY * 0.5;
    mB += freeY * 0.5;
    mX = mL + mR;
    mY = mT + mB;
  }

  float thickness = .5 * u_thickness * min(halfSize.x, halfSize.y);

  halfSize.x *= (1. - mX);
  halfSize.y *= (1. - mY);

  vec2 centerShift = vec2(
  (mL - mR) * max(canvasRatio, 1.) * 0.5,
  (mB - mT) / min(canvasRatio, 1.) * 0.5
  );

  borderUV -= centerShift;
  halfSize -= mix(thickness, 0., u_softness);

  float radius = mix(0., min(halfSize.x, halfSize.y), u_roundness);
  vec2 d = abs(borderUV) - halfSize + radius;
  float outsideDistance = length(max(d, .0001)) - radius;
  float insideDistance = min(max(d.x, d.y), .0001);
  float cornerDistance = abs(min(max(d.x, d.y) - .45 * radius, .0));
  float distance = outsideDistance + insideDistance;

  float borderThickness = mix(thickness, 3. * thickness, u_softness);
  float border = roundedBox(borderUV, halfSize, distance, cornerDistance, borderThickness, u_softness);
  border = pow(border, 1. + u_softness);

  vec2 smokeUV = .3 * u_smokeSize * v_patternUV;
  float smoke = clamp(3. * valueNoise(2.7 * smokeUV + .5 * t), 0., 1.);
  smoke -= valueNoise(3.4 * smokeUV - .5 * t);
  float smokeThickness = thickness + .2;
  smokeThickness = min(.4, max(smokeThickness, .1));
  smoke *= roundedBox(borderUV, halfSize, distance, cornerDistance, smokeThickness, 1.);
  smoke = 30. * smoke * smoke;
  smoke *= mix(0., .5, pow(u_smoke, 2.));
  smoke *= mix(1., pulse, u_pulse);
  smoke = clamp(smoke, 0., 1.);
  border += smoke;

  border = clamp(border, 0., 1.);

  vec3 blendColor = vec3(0.);
  float blendAlpha = 0.;
  vec3 addColor = vec3(0.);
  float addAlpha = 0.;

  float bloom = 4. * u_bloom;
  float intensity = 1. + (1. + 4. * u_softness) * u_intensity;

  float angle = atan(borderUV.y, borderUV.x) / TWO_PI;

  for (int colorIdx = 0; colorIdx < ${Yr.maxColorCount}; colorIdx++) {
    if (colorIdx >= int(u_colorsCount)) break;
    float colorIdxF = float(colorIdx);

    vec3 c = u_colors[colorIdx].rgb * u_colors[colorIdx].a;
    float a = u_colors[colorIdx].a;

    for (int spotIdx = 0; spotIdx < ${Yr.maxSpots}; spotIdx++) {
      if (spotIdx >= int(u_spots)) break;
      float spotIdxF = float(spotIdx);

      vec2 randVal = randomGB(vec2(spotIdxF * 10. + 2., 40. + colorIdxF));

      float time = (.1 + .15 * abs(sin(spotIdxF * (2. + colorIdxF)) * cos(spotIdxF * (2. + 2.5 * colorIdxF)))) * t + randVal.x * 3.;
      time *= mix(1., -1., step(.5, randVal.y));

      float mask = .5 + .5 * mix(
      sin(t + spotIdxF * (5. - 1.5 * colorIdxF)),
      cos(t + spotIdxF * (3. + 1.3 * colorIdxF)),
      step(mod(colorIdxF, 2.), .5)
      );

      float p = clamp(2. * u_pulse - randVal.x, 0., 1.);
      mask = mix(mask, pulse, p);

      float atg1 = fract(angle + time);
      float spotSize = .05 + .6 * pow(u_spotSize, 2.) + .05 * randVal.x;
      spotSize = mix(spotSize, .1, p);
      float sector = sst(.5 - spotSize, .5, atg1) * (1. - sst(.5, .5 + spotSize, atg1));

      sector *= mask;
      sector *= border;
      sector *= intensity;
      sector = clamp(sector, 0., 1.);

      vec3 srcColor = c * sector;
      float srcAlpha = a * sector;

      blendColor += ((1. - blendAlpha) * srcColor);
      blendAlpha = blendAlpha + (1. - blendAlpha) * srcAlpha;
      addColor += srcColor;
      addAlpha += srcAlpha;
    }
  }

  vec3 accumColor = mix(blendColor, addColor, bloom);
  float accumAlpha = mix(blendAlpha, addAlpha, bloom);
  accumAlpha = clamp(accumAlpha, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  vec3 color = accumColor + (1. - accumAlpha) * bgColor;
  float opacity = accumAlpha + (1. - accumAlpha) * u_colorBack.a;

  ${gr}

  fragColor = vec4(color, opacity);
}`,Zr={auto:0,square:1},Qr={maxColorCount:7},$r=`#version 300 es
precision lowp float;

uniform float u_time;
uniform mediump float u_scale;

uniform vec4 u_colors[${Qr.maxColorCount}];
uniform float u_colorsCount;
uniform vec4 u_colorBack;
uniform float u_density;
uniform float u_angle1;
uniform float u_angle2;
uniform float u_length;
uniform bool u_edges;
uniform float u_blur;
uniform float u_fadeIn;
uniform float u_fadeOut;
uniform float u_gradient;

in vec2 v_objectUV;

out vec4 fragColor;

${lr}

const float zLimit = .5;

vec2 getPanel(float angle, vec2 uv, float invLength, float aa) {
  float sinA = sin(angle);
  float cosA = cos(angle);

  float denom = sinA - uv.y * cosA;
  if (abs(denom) < .01) return vec2(0.);

  float z = uv.y / denom;

  if (z <= 0. || z > zLimit) return vec2(0.);

  float zRatio = z / zLimit;
  float panelMap = 1. - zRatio;
  float x = uv.x * (cosA * z + 1.) * invLength;

  float zOffset = zRatio - .5;
  float left = -.5 + zOffset * u_angle1;
  float right = .5 - zOffset * u_angle2;
  float blurX = aa + 2. * panelMap * u_blur;

  float leftEdge1 = left - blurX;
  float leftEdge2 = left + .25 * blurX;
  float rightEdge1 = right - .25 * blurX;
  float rightEdge2 = right + blurX;

  float panel = smoothstep(leftEdge1, leftEdge2, x) * (1.0 - smoothstep(rightEdge1, rightEdge2, x));
  panel *= mix(0., panel, smoothstep(0., .01 / u_scale, panelMap));

  float midScreen = abs(sinA);
  if (u_edges == true) {
    panelMap = mix(.99, panelMap, panel * clamp(panelMap / (.15 * (1. - pow(midScreen, .1))), 0.0, 1.0));
  } else if (midScreen < .07) {
    panel *= (midScreen * 15.);
  }

  return vec2(panel, panelMap);
}

vec4 blendColor(vec4 colorA, float panelMask, float panelMap) {
  float fade = 1. - smoothstep(.97 - .97 * u_fadeIn, 1., panelMap);

  fade *= smoothstep(-.2 * (1. - u_fadeOut), u_fadeOut, panelMap);

  vec3 blendedRGB = mix(vec3(0.), colorA.rgb, fade);
  float blendedAlpha = mix(0., colorA.a, fade);

  return vec4(blendedRGB, blendedAlpha) * panelMask;
}

void main() {
  vec2 uv = v_objectUV;
  uv *= 1.25;

  float t = .02 * u_time;
  t = fract(t);
  bool reverseTime = (t < 0.5);

  vec3 color = vec3(0.);
  float opacity = 0.;

  float aa = .005 / u_scale;
  int colorsCount = int(u_colorsCount);

  vec4 premultipliedColors[${Qr.maxColorCount}];
  for (int i = 0; i < ${Qr.maxColorCount}; i++) {
    if (i >= colorsCount) break;
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    premultipliedColors[i] = c;
  }

  float invLength = 1.5 / max(u_length, .001);

  float totalColorWeight = 0.;
  int panelsNumber = 12;

  float densityNormalizer = 1.;
  if (colorsCount == 4) {
    panelsNumber = 16;
    densityNormalizer = 1.34;
  } else if (colorsCount == 5) {
    panelsNumber = 20;
    densityNormalizer = 1.67;
  } else if (colorsCount == 7) {
    panelsNumber = 14;
    densityNormalizer = 1.17;
  }

  float fPanelsNumber = float(panelsNumber);

  float totalPanelsShape = 0.;
  float panelGrad = 1. - clamp(u_gradient, 0., 1.);

  for (int set = 0; set < 2; set++) {
    bool isForward = (set == 0 && !reverseTime) || (set == 1 && reverseTime);
    if (!isForward) continue;

    for (int i = 0; i <= 20; i++) {
      if (i >= panelsNumber) break;

      int idx = panelsNumber - 1 - i;

      float offset = float(idx) / fPanelsNumber;
      if (set == 1) {
        offset += .5;
      }

      float densityFract = densityNormalizer * fract(t + offset);
      float angleNorm = densityFract / u_density;
      if (densityFract >= .5 || angleNorm >= .3) continue;

      float smoothDensity = clamp((.5 - densityFract) / .1, 0., 1.) * clamp(densityFract / .01, 0., 1.);
      float smoothAngle = clamp((.3 - angleNorm) / .05, 0., 1.);
      if (smoothDensity * smoothAngle < .001) continue;

      if (angleNorm > .5) {
        angleNorm = 0.5;
      }
      vec2 panel = getPanel(angleNorm * TWO_PI + PI, uv, invLength, aa);
      if (panel[0] <= .001) continue;
      float panelMask = panel[0] * smoothDensity * smoothAngle;
      float panelMap = panel[1];

      int colorIdx = idx % colorsCount;
      int nextColorIdx = (idx + 1) % colorsCount;

      vec4 colorA = premultipliedColors[colorIdx];
      vec4 colorB = premultipliedColors[nextColorIdx];

      colorA = mix(colorA, colorB, max(0., smoothstep(.0, .45, panelMap) - panelGrad));
      vec4 blended = blendColor(colorA, panelMask, panelMap);
      color = blended.rgb + color * (1. - blended.a);
      opacity = blended.a + opacity * (1. - blended.a);
    }


    for (int i = 0; i <= 20; i++) {
      if (i >= panelsNumber) break;

      int idx = panelsNumber - 1 - i;

      float offset = float(idx) / fPanelsNumber;
      if (set == 0) {
        offset += .5;
      }

      float densityFract = densityNormalizer * fract(-t + offset);
      float angleNorm = -densityFract / u_density;
      if (densityFract >= .5 || angleNorm < -.3) continue;

      float smoothDensity = clamp((.5 - densityFract) / .1, 0., 1.) * clamp(densityFract / .01, 0., 1.);
      float smoothAngle = clamp((angleNorm + .3) / .05, 0., 1.);
      if (smoothDensity * smoothAngle < .001) continue;

      vec2 panel = getPanel(angleNorm * TWO_PI + PI, uv, invLength, aa);
      float panelMask = panel[0] * smoothDensity * smoothAngle;
      if (panelMask <= .001) continue;
      float panelMap = panel[1];

      int colorIdx = (colorsCount - (idx % colorsCount)) % colorsCount;
      if (colorIdx < 0) colorIdx += colorsCount;
      int nextColorIdx = (colorIdx + 1) % colorsCount;

      vec4 colorA = premultipliedColors[colorIdx];
      vec4 colorB = premultipliedColors[nextColorIdx];

      colorA = mix(colorA, colorB, max(0., smoothstep(.0, .45, panelMap) - panelGrad));
      vec4 blended = blendColor(colorA, panelMask, panelMap);
      color = blended.rgb + color * (1. - blended.a);
      opacity = blended.a + opacity * (1. - blended.a);
    }
  }

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,ei={maxColorCount:10},ti=`#version 300 es
precision mediump float;

uniform vec4 u_colors[${ei.maxColorCount}];
uniform float u_colorsCount;

uniform float u_positions;
uniform float u_waveX;
uniform float u_waveXShift;
uniform float u_waveY;
uniform float u_waveYShift;
uniform float u_mixing;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${lr}
${ur}
${fr}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + mod(float(i), 3.) * .3;
  float c = .8 + mod(float(i + 1), 4.) * 0.25;

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float mixerGrain = 0.;
  if (u_grainMixer > 0.) {
    mixerGrain = .4 * u_grainMixer * (noise(grainUV, vec2(0.)) - .5);
  }

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_waveX * center / i * cos(TWO_PI * u_waveXShift + i * 2. * smoothstep(.0, 1., uv.y));
    uv.y += u_waveY * center / i * cos(TWO_PI * u_waveYShift + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;
  float positionSeed = 25. + .33 * u_positions;

  for (int i = 0; i < ${ei.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, positionSeed) + mixerGrain;
    float dist = length(uv - pos);

    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float mixing = pow(u_mixing, .7);
    float power = mix(2., 1., mixing);
    dist = pow(dist, power);

    float w = 1. / (dist + 1e-3);
    float baseSharpness = mix(.0, 8., clamp(w, 0., 1.));
    float sharpness = mix(baseSharpness, 1., mixing);
    w = pow(w, sharpness);
    color += colorFraction * w;
    opacity += opacityFraction * w;
    totalWeight += w;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  if (u_grainOverlay > 0.) {
    float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
    grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
    grainOverlay = pow(grainOverlay, 1.3);

    float grainOverlayV = grainOverlay * 2. - 1.;
    vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
    float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
    grainOverlayStrength = pow(grainOverlayStrength, .8);
    color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

    opacity += .5 * grainOverlayStrength;
  }
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,ni={maxColorCount:10},ri=`#version 300 es
precision mediump float;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${ni.maxColorCount}];
uniform float u_colorsCount;

uniform float u_radius;
uniform float u_focalDistance;
uniform float u_focalAngle;
uniform float u_falloff;
uniform float u_mixing;
uniform float u_distortion;
uniform float u_distortionShift;
uniform float u_distortionFreq;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${lr}
${ur}
${fr}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + mod(float(i), 3.) * .3;
  float c = .8 + mod(float(i + 1), 4.) * 0.25;

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = 2. * v_objectUV;
  vec2 grainUV = uv * 1000.;

  vec2 center = vec2(0.);
  float angleRad = -radians(u_focalAngle + 90.);
  vec2 focalPoint = vec2(cos(angleRad), sin(angleRad)) * u_focalDistance;
  float radius = u_radius;

  vec2 c_to_uv = uv - center;
  vec2 f_to_uv = uv - focalPoint;
  vec2 f_to_c = center - focalPoint;
  float r = length(c_to_uv);

  float fragAngle = atan(c_to_uv.y, c_to_uv.x);
  float angleDiff = fract((fragAngle - angleRad + PI) / TWO_PI) * TWO_PI - PI;

  float halfAngle = acos(clamp(radius / max(u_focalDistance, 1e-4), 0.0, 1.0));
  float e0 = 0.6 * PI, e1 = halfAngle;
  float lo = min(e0, e1), hi = max(e0, e1);
  float s  = smoothstep(lo, hi, abs(angleDiff));
  float isInSector = (e1 >= e0) ? (1.0 - s) : s;

  float a = dot(f_to_uv, f_to_uv);
  float b = -2.0 * dot(f_to_uv, f_to_c);
  float c = dot(f_to_c, f_to_c) - radius * radius;

  float discriminant = b * b - 4.0 * a * c;
  float t = 1.0;

  if (discriminant >= 0.0) {
    float sqrtD = sqrt(discriminant);
    float div = max(1e-4, 2.0 * a);
    float t0 = (-b - sqrtD) / div;
    float t1 = (-b + sqrtD) / div;
    t = max(t0, t1);
    if (t < 0.0) t = 0.0;
  }

  float dist = length(f_to_uv);
  float normalized = dist / max(1e-4, length(f_to_uv * t));
  float shape = clamp(normalized, 0.0, 1.0);

  float falloffMapped = mix(.2 + .8 * max(0., u_falloff + 1.), mix(1., 15., u_falloff * u_falloff), step(.0, u_falloff));

  float falloffExp = mix(falloffMapped, 1., shape);
  shape = pow(shape, falloffExp);
  shape = 1. - clamp(shape, 0., 1.);


  float outerMask = .002;
  float outer = 1.0 - smoothstep(radius - outerMask, radius + outerMask, r);
  outer = mix(outer, 1., isInSector);

  shape = mix(0., shape, outer);
  shape *= 1. - smoothstep(radius - .01, radius, r);

  float angle = atan(f_to_uv.y, f_to_uv.x);
  shape -= pow(u_distortion, 2.) * shape * pow(abs(sin(PI * clamp(length(f_to_uv) - 0.2 + u_distortionShift, 0.0, 1.0))), 4.0) * (sin(u_distortionFreq * angle) + cos(floor(0.65 * u_distortionFreq) * angle));

  float mixerGrain = 0.;
  if (u_grainMixer > 0.) {
    mixerGrain = .4 * u_grainMixer * (noise(grainUV, vec2(0.)) - .5);
  }

  float mixer = shape * u_colorsCount + mixerGrain;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;

  float outerShape = 0.;
  for (int i = 1; i < ${ni.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;
    float mLinear = clamp(mixer - float(i - 1), 0.0, 1.0);

    float aa = fwidth(mLinear);
    float width = min(u_mixing, 0.5);
    float t = clamp((mLinear - (0.5 - width - aa)) / (2. * width + 2. * aa), 0., 1.);
    float p = mix(2., 1., clamp((u_mixing - 0.5) * 2., 0., 1.));
    float m = t < 0.5
      ? 0.5 * pow(2. * t, p)
      : 1. - 0.5 * pow(2. * (1. - t), p);

    float quadBlend = clamp((u_mixing - 0.5) * 2., 0., 1.);
    m = mix(m, m * m, 0.5 * quadBlend);
    
    if (i == 1) {
      outerShape = m;
    }

    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  if (u_grainOverlay > 0.) {
    float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
    grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
    grainOverlay = pow(grainOverlay, 1.3);

    float grainOverlayV = grainOverlay * 2. - 1.;
    vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
    float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
    grainOverlayStrength = pow(grainOverlayStrength, .8);
    color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

    opacity += .5 * grainOverlayStrength;
  }
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,ii={maxCrumpleCount:15},ai=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform bool u_isImage;
uniform float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colorPaper;
uniform vec4 u_colorShadow;

uniform float u_blending;
uniform float u_distortion;
uniform bool u_clip;
uniform float u_angle;
uniform float u_seed;

uniform float u_roughness;
uniform float u_roughnessSize;
uniform float u_roughnessRows;
uniform float u_fiber;
uniform float u_fiberSize;
uniform float u_folds;
uniform float u_foldSizeX;
uniform float u_foldSizeY;
uniform float u_foldOffsetX;
uniform float u_foldOffsetY;
uniform float u_wrinkles;
uniform float u_wrinkleSize;
uniform float u_crumples;
uniform float u_crumpleCount;
uniform float u_drops;

uniform sampler2D u_noiseTexture;

in vec2 v_imageUV;
out vec4 fragColor;

float getUvFrame(vec2 uv) {
  vec2 invAA = .5 / clamp(fwidth(uv), 1e-5, .02);
  vec2 lo = clamp(uv * invAA + .5, 0., 1.);
  vec2 hi = clamp((1. - uv) * invAA + .5, 0., 1.);
  return lo.x * hi.x * lo.y * hi.y;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

${lr}
${fr}
${pr}

float getRoughness(vec2 p, vec2 lightDir, vec2 seedShift, float basePixel) {
  vec2 u = p / vec2(2, 4);
  float w = 100. * basePixel;
  float eps = 4. * w;

  float size = mix(3.2, .8, u_roughnessSize);
  float logLac = log2(2.1);
  float level = -log2(w + 1e-8) / logLac;
  float baseLevel = floor(level) - 2.;
  float fade = fract(level);

  vec2 px = (u.x + vec2(eps, -eps)) * .1;
  float py = u.y * .1;

  vec2 sum = vec2(0.);
  float norm = 0., amp = .5;
  float freq = exp2(baseLevel * logLac);
  for (int i = 0; i < 4; i++) {
    float absIdx = baseLevel + float(i);
    vec2 qx = size * px * freq;
    float qy = size * py * freq;

    float wi = 1.;
    if (i == 0) wi = 1. - fade;
    if (i == 3) wi = fade;

    vec2 fx = fract(qx);
    float fy = fract(qy);
    vec2 shift = .5 + absIdx * .3 + seedShift;
    float uvY = floor(qy) / 50. + shift.y;
    vec2 s0a = textureLod(u_noiseTexture, fract(vec2(floor(qx.x) / 50. + shift.x, uvY)), 0.).rg;
    vec2 s1a = textureLod(u_noiseTexture, fract(vec2( ceil(qx.x) / 50. + shift.x, uvY)), 0.).rg;
    vec2 s0b = textureLod(u_noiseTexture, fract(vec2(floor(qx.y) / 50. + shift.x, uvY)), 0.).rg;
    vec2 s1b = textureLod(u_noiseTexture, fract(vec2( ceil(qx.y) / 50. + shift.x, uvY)), 0.).rg;
    vec2 ny0 = mix(vec2(s0a.r, s0b.r), vec2(s0a.g, s0b.g), fy);
    vec2 ny1 = mix(vec2(s1a.r, s1b.r), vec2(s1a.g, s1b.g), fy);
    vec2 n = mix(ny0, ny1, fx);

    sum += amp * wi * n;
    norm += amp * wi;
    amp *= .8;
    freq *= 2.1;
  }

  vec2 r = sum / norm;
  float dx = .5 + r.x - r.y;
  float grain = 3. * dx * dx - .7;

  float rowBand = fract(dot(p, lightDir) * .05 * size);
  return grain + .6 * u_roughnessRows * (rowBand - .5);
}

float getFiber(vec2 p, vec2 seedShift, float basePixel) {
  float size = mix(4., 1., u_fiberSize);
  float w = 50. * basePixel;
  float level = -log2(w + 1e-8);
  float baseLevel = floor(level) - 3.;
  float fade = fract(level);

  vec2 grad = vec2(0.);
  float scale = 1.;
  float amp = 1.;
  float freq = pow(1.7, baseLevel);
  for (int i = 0; i < 5; i++) {
    float absIdx = baseLevel + float(i);
    vec2 q = size * p * freq;

    float an = absIdx * .8;
    float rc = cos(an), rs = sin(an);
    q = vec2(rc * q.x - rs * q.y, rs * q.x + rc * q.y);

    float wi = 1.;
    if (i == 0) wi = 1. - fade;
    if (i == 4) wi = fade;

    vec2 iq = floor(q);
    vec2 fq = fract(q);
    float shift = absIdx * .3;
    vec4 uv = fract(vec4(iq, iq + 1.) / 50. + .5 + shift + seedShift.xyxy);
    float aF = textureLod(u_noiseTexture, uv.xy, 0.).b;
    float bF = textureLod(u_noiseTexture, uv.zy, 0.).b;
    float cF = textureLod(u_noiseTexture, uv.xw, 0.).b;
    float dF = textureLod(u_noiseTexture, uv.zw, 0.).b;
    vec2 u = fq * fq * (3. - 2. * fq);
    vec2 du = 8. * fq * (1. - fq);
    float dx = du.x * mix(bF - aF, dF - cF, u.y);
    float dy = du.y * mix(cF - aF, dF - bF, u.x);
    grad += wi * amp * scale * vec2(rc * dx + rs * dy, -rs * dx + rc * dy);
    scale *= 1.7;
    amp *= .5;
    freq *= 1.7;
  }

  return clamp(.333 * length(grad), 0., 1.);
}

vec2 smoothNoise(vec2 p) {
  vec2 t = p * 50. - .5;
  vec2 i = floor(t);
  vec2 f = fract(t);
  f = f * f * (3. - 2. * f);
  return textureLod(u_noiseTexture, fract((i + f + .5) / vec2(50.)), 0.).rg;
}

float getDrops(vec2 uv, vec2 seedShift) {
  vec2 iDropsUV = floor(uv);
  vec2 fDropsUV = fract(uv);
  float dropsMinDist = 1.;
  for (int y = -1; y < 2; y += 1) {
    for (int x = -1; x < 2; x += 1) {
      vec2 neighbor = vec2(float(y), float(x));
      vec2 offset = hash22(iDropsUV + neighbor + 50. * seedShift);
      vec2 pos = neighbor + offset - fDropsUV;
      dropsMinDist *= min(1., dot(pos, pos));
    }
  }
  return .5 * lst(.09, .08, sqrt(sqrt(dropsMinDist)));
}

vec2 getCellTilt(float idx, float radius) {
  vec2 rand = hash22(vec2(idx + 31., idx * u_seed + 17.));
  float an = rand.x * TWO_PI;
  return vec2(cos(an), sin(an)) * mix(.3, 1.7, rand.y * rand.y) * mix(.7, 1., radius);
}

vec2 getCrumpleDetail(vec2 uv, float freq, float shift, float basePixel, out float depth) {
  depth = 0.;
  vec2 v = uv * freq;
  float pixel = .9 * freq * basePixel;
  vec2 base = floor(v);
  float n1 = 9., n2 = 9.;
  vec2 s1 = vec2(0.), s2 = vec2(0.), q1 = vec2(0.), q2 = vec2(0.);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 cell = base + vec2(float(x), float(y));
      vec2 q = hash22(vec2(cell.y * 1.9 + 3.1 + shift, cell.x * 1.3 + .11 * u_seed));
      float keep = .8;
      if (q.y > keep) continue;

      vec2 r = hash22(vec2(cell.x + .37 * u_seed + shift + 11.1, cell.y - .21 * u_seed + 5.7));
      vec2 s = cell + .06 + .88 * r;

      vec2 d = v - s;
      float dsq = dot(d, d);
      if (dsq < n1) {
        n2 = n1;
        s2 = s1;
        q2 = q1;
        n1 = dsq;
        s1 = s;
        q1 = q;
      } else if (dsq < n2) {
        n2 = dsq;
        s2 = s;
        q2 = q;
      }
    }
  }

  if (n1 > 8.) return vec2(0.);

  float an1 = q1.x * TWO_PI, mag1 = q1.y / .8;
  vec2 t1 = vec2(cos(an1), sin(an1)) * mix(.3, 1.7, mag1 * mag1);
  float an2 = q2.x * TWO_PI, mag2 = q2.y / .8;
  vec2 t2 = vec2(cos(an2), sin(an2)) * mix(.3, 1.7, mag2 * mag2);

  vec2 span = s1 - s2;
  float spanLen = max(length(span), 1e-4);
  float toEdge = (n2 - n1) / (2. * spanLen);

  float pair = hash21(s1 + s2 + 1.7 * abs(s1 - s2));
  float pairSoft = .05 + .1 * step(pair, .4);
  float b = clamp(toEdge / max(1.5 * pixel, .5 * pairSoft), 0., 1.);
  b = b * b * (3. - 2. * b);
  float d1 = max(sqrt(n1), 1e-4);
  depth = .2 * d1;
  float shoulderAmt = max(0., 1. - toEdge / .42) * b;
  vec2 shoulder = vec2(0.);
  if (shoulderAmt > 0.) {
    float d2 = max(sqrt(n2), 1e-4);
    shoulder = shoulderAmt * ((v - s2) / d2 - (v - s1) / d1);
  }

  vec2 mid = .5 * (t1 + t2);
  return mid + (t1 - mid) * b + .9 * shoulder;
}

vec4 getCrumples(vec2 uv) {
  float crumpleN = max(2., floor(u_crumpleCount + .5));
  float near = 60000., nearB = 60000.;
  float idx = 0., rad = 0.;
  vec2 nearP = vec2(0.), nearPb = vec2(0.);
  vec4 seeds[${ii.maxCrumpleCount}];
  for (int i = 0; i < ${ii.maxCrumpleCount}; i++) {
    if (float(i) >= crumpleN) break;
    vec2 rand = hash22(vec2(float(i), float(i) * u_seed));
    float an = rand.x * TWO_PI;
    vec2 p = vec2(cos(an), sin(an)) * rand.y;
    seeds[i] = vec4(p, rand);

    vec2 d = uv - p;
    float dsq = dot(d, d);
    if (dsq < near) {
      nearB = near;
      nearPb = nearP;
      near = dsq;
      idx = float(i);
      rad = rand.y;
      nearP = p;
    } else if (dsq < nearB) {
      nearB = dsq;
      nearPb = p;
    }
  }
  float l = sqrt(near), lb = sqrt(nearB);
  vec2 dir = (uv - nearP) / max(l, 1e-4);
  float edge = lst(0., .5, lb - l);

  float shoulderLimit = l + .5;

  vec2 tilt = getCellTilt(idx, rad);
  float tiltSum = 1.;
  vec2 wide = vec2(0.);
  float wideSum = 0.;
  float toEdge = 9., edgeSoft = 0.;

  for (int i = 0; i < ${ii.maxCrumpleCount}; i++) {
    if (float(i) >= crumpleN) break;
    if (float(i) == idx) continue;
    vec4 seed = seeds[i];
    vec2 p = seed.xy;
    vec2 rand = seed.zw;

    vec2 d = uv - p;
    float dsq = dot(d, d);

    if (dsq < shoulderLimit * shoulderLimit) {
      float di = sqrt(dsq);
      float shoulder = lst(.5, 0., di - l);
      wide += shoulder * (d / max(di, 1e-4) - dir);
      wideSum += shoulder;
    }

    float pairSoft = .01 + .05 * step(.2, rand.x) + .3 * rand.y;
    float toBisector = (dsq - near) / (.2 * max(length(p - nearP), 1e-4));
    if (toBisector < toEdge) {
      toEdge = toBisector;
      edgeSoft = pairSoft;
    }

    float w = 1. - toBisector / pairSoft;
    if (w > 0.) {
      w *= w;
      tilt += w * getCellTilt(float(i), rand.y);
      tiltSum += w;
    }
  }

  float blend = clamp(toEdge / edgeSoft, 0., 1.);
  vec2 sharp = (1. - edge) * ((uv - nearPb) / max(lb, 1e-4) - dir);
  vec2 rounding = mix(sharp, wide / max(wideSum, 1.), min(2. * edgeSoft, 1.));
  float radial = l / max(l + toEdge, 1e-4);

  return vec4(tilt / tiltSum + rounding * blend * radial, .2 * l, edge);
}

void getFolds(vec2 coord, vec2 offset, vec2 count, vec2 noise, vec2 baseFwidth, out vec2 slope, out vec2 dark, out vec2 lift) {
  vec2 g = coord * count + .5 * offset + noise;
  vec2 dx = fract(g) - .5;
  vec2 adx = abs(dx);
  float foldRadius = .3;
  vec2 t = clamp(adx / foldRadius, 0., 1.);
  dark = t * t * (3. - 2. * t);
  lift = 1. - t;
  lift *= lift;

  vec2 crease = clamp(dx / max(count * baseFwidth, 1e-5), -1., 1.);
  slope = crease * (1. - dark);

  vec2 lineWidth = .02 * count * mix(vec2(2.5), vec2(.8), dark.yx) + .1 * noise;
  slope -= 1. - smoothstep(vec2(0.), lineWidth, adx);
}

void main() {

  vec2 patternUV = (v_imageUV - .5) * vec2(u_imageAspectRatio, 1.);
  float basePixel = max(length(dFdx(patternUV)), length(dFdy(patternUV)));
  vec2 baseFwidth = fwidth(patternUV);

  float pattern = 0.;

  float crumpleDepth = 0.;
  float wrinkleDepth = 0.;
  float foldDepth = 0.;
  float roughness = 0.;
  float fiber = 0.;
  float drops = 0.;

  float grazing = 0.7;
  float lightRad = radians(u_angle);
  vec2 lightDir = vec2(sin(lightRad), -cos(lightRad));
  float foldAngleInSector = mod(u_angle, 90.);
  float foldLightRad = radians(u_angle - foldAngleInSector + mix(12., 78., foldAngleInSector / 90.));
  vec2 foldLightDir = vec2(sin(foldLightRad), -cos(foldLightRad));
  vec2 relief = vec2(0.);
  vec2 foldSlope = vec2(0.);
  float reliefAmount = 0.;
  float foldInk = 1.;
  vec2 crumpleFlow = vec2(0.);

  vec2 warpNoise = vec2(0.);
  if (u_crumples > 0. || u_folds > 0. || u_wrinkles > 0.) {
    warpNoise = smoothNoise(patternUV * .1 + .2 + .6 * fract(.017 * u_seed)) - .5;
  }
  vec2 crumplesUV = (patternUV * .9) + .012 * warpNoise;

  if (u_crumples > 0.) {
    vec4 crumples = getCrumples(crumplesUV);

    vec2 crumpleTilt = .5 * u_crumples * crumples.xy;
    crumpleTilt -= .1 * max(dot(crumpleTilt, lightDir), 0.) * lightDir;
    relief += crumpleTilt;
    reliefAmount += .6 * u_crumples;
    crumpleFlow = crumples.w * crumpleTilt;

    crumpleDepth = clamp(5. * crumples.z, 0., 1.);
  }

  if (u_wrinkles > 0.) {
    float detailFreq = mix(10., 1., u_wrinkleSize);
    float detailAmp = .2;
    vec2 detailGrad = vec2(0.);
    float detailDepth = 0., depthSum = 0.;
    for (int i = 0; i < 3; i++) {
      float layerDepth;
      detailGrad += detailAmp * getCrumpleDetail(crumplesUV, detailFreq, 31. * float(i), basePixel, layerDepth);
      detailDepth += detailAmp * layerDepth;
      depthSum += detailAmp;
      detailAmp *= (.5 + .2 * detailGrad.x);
      detailFreq *= 2.1;
    }

    vec2 detailTilt = 1.5 * u_wrinkles * detailGrad;
    detailTilt -= .65 * max(dot(detailTilt, lightDir), 0.) * lightDir;
    relief += detailTilt;
    reliefAmount += .6 * u_wrinkles;

    wrinkleDepth = clamp(5. * detailDepth / max(depthSum, 1e-4), 0., 1.);
  }

  if (u_folds > 0.) {
    vec2 foldOffset = vec2(1. - 2. * u_foldOffsetX, 1. - 2. * u_foldOffsetY);
    vec2 foldCount = vec2(mix(3., .5, u_foldSizeX), mix(3., .5, u_foldSizeY));
    vec2 foldNoise = .005 * warpNoise * foldCount;
    vec2 uv = patternUV + .03 * crumpleFlow;

    vec2 slope, dark, lift;
    getFolds(uv, foldOffset, foldCount, foldNoise, baseFwidth, slope, dark, lift);

    foldSlope = u_folds * slope;
    reliefAmount += 1. * u_folds;
    vec2 ink = mix(vec2(.96), vec2(1.), dark);
    float flatness = dark.x * dark.y;
    foldInk *= mix(1., ink.x * ink.y * mix(.5, .3, flatness), u_folds);

    foldDepth = u_folds * (lift.y * foldLightDir.y - lift.x * foldLightDir.x);
  }

  float unlit = cos(grazing);
  float lit = unlit;

  if (reliefAmount > 0.) {
    float lightFalloff = clamp(.5 + dot(v_imageUV - .5, lightDir), 0., 1.);
    float lightPower = mix(.5, 1., lightFalloff);
    float slope = clamp(dot(relief, lightDir) + dot(foldSlope, foldLightDir), -1.2, 1.2);
    lit = max(cos(slope + grazing), 0.);

    pattern += (clamp(reliefAmount, 0., 1.) * unlit + (lit - unlit)) * foldInk * lightPower;
  }

  patternUV += .04 * crumpleFlow;

  vec2 seedShift = floor(fract(u_seed * vec2(.7548776662, .5698402909)) * 50.) / 50.;

  if (u_roughness > 0.) {
    roughness = u_roughness * getRoughness(1000. * patternUV, lightDir, seedShift, basePixel);
    pattern += roughness;
  }

  if (u_fiber > 0.) {
    fiber = u_fiber * getFiber(50. * patternUV, seedShift, basePixel);
    pattern += fiber;
  }

  if (u_drops > 0.) {
    drops = u_drops * getDrops(patternUV * 10., seedShift);
  }

  pattern = clamp(pattern, 0., 1.);

  vec3 backColor = u_colorBack.rgb * u_colorBack.a;
  float backOpacity = u_colorBack.a;
  vec3 baseColor = u_colorPaper.rgb * u_colorPaper.a;
  float baseOpacity = u_colorPaper.a;
  vec3 shadowColor = u_colorShadow.rgb * u_colorShadow.a;
  float shadowOpacity = u_colorShadow.a;

  float notClipped = u_clip ? .1 : 1.;
  vec2 imageCenteredUV = v_imageUV - .5;
  float edgeDist = 2. * max(abs(imageCenteredUV.x), abs(imageCenteredUV.y));
  float wrinkleDistortion = mix(.38, .0175, smoothstep(0., 1., edgeDist));
  float scaleDistortion = .15 * u_crumples * (crumpleDepth - .5) + wrinkleDistortion * u_wrinkles * (wrinkleDepth - .5) + .05 * foldDepth;
  vec2 linearDistortion = notClipped * .002 * lightDir * drops;
  float radialDistortion = notClipped * .02 * (roughness + fiber);
  vec2 centeredUV = imageCenteredUV * (1. - u_distortion * scaleDistortion);
  centeredUV -= u_distortion * linearDistortion;
  vec2 imageUV = .5 + centeredUV * (1. - abs(u_distortion) * radialDistortion * dot(centeredUV, centeredUV));

  vec3 color = shadowColor * pattern;
  float opacity = shadowOpacity * pattern;
  color += baseColor * (1. - opacity);
  opacity += baseOpacity * (1. - opacity);

  if (u_isImage) {
    float frame = getUvFrame(imageUV);
    vec4 image = texture(u_image, imageUV);
    frame *= image.a;

    float maxC = max(max(image.r, image.g), image.b);
    float minC = min(min(image.r, image.g), image.b);
    float sat = maxC > 0. ? (maxC - minC) / maxC : 0.;
    float midC = image.r + image.g + image.b - maxC - minC;
    float secondaryness = maxC > minC ? (midC - minC) / (maxC - minC) : 0.;
    float satDampen = sat * (1. - .5 * secondaryness);
    float darkDampen = 1. - dot(vec3(.2126, .7152, .0722), image.rgb);
    float dampen = mix(0., .7, u_blending) * max(satDampen, darkDampen);

    vec3 paper = vec3(1.) - opacity + color;
    vec3 pic = image.rgb * paper * u_blending + image.rgb * (1. - u_blending);
    pic = mix(pic, vec3(1.), .6 * pow(dampen, 2. + 3. * pattern));

    color = mix(color, pic, frame);
    opacity = frame + opacity * (1. - frame);

    if (u_clip) {
      color *= frame;
      opacity *= frame;
    }
  }

  color *= mix(vec3(1.), .5 * u_colorShadow.rgb, drops * shadowOpacity);

  color += backColor * (1. - opacity);
  opacity += backOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,oi=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_highlights;
uniform float u_layering;
uniform float u_edges;
uniform float u_caustic;
uniform float u_waves;

in vec2 v_imageUV;

out vec4 fragColor;

${lr}
${ur}
${_r}

float getUvFrame(vec2 uv) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);

  float left   = smoothstep(0., aax, uv.x);
  float right = 1.0 - smoothstep(1. - aax, 1., uv.x);
  float bottom = smoothstep(0., aay, uv.y);
  float top = 1.0 - smoothstep(1. - aay, 1., uv.y);

  return left * right * bottom * top;
}

mat2 rotate2D(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

float getCausticNoise(vec2 uv, float t, float scale) {
  vec2 n = vec2(.1);
  vec2 N = vec2(.1);
  mat2 m = rotate2D(.5);
  for (int j = 0; j < 6; j++) {
    uv *= m;
    n *= m;
    vec2 q = uv * scale + float(j) + n + (.5 + .5 * float(j)) * (mod(float(j), 2.) - 1.) * t;
    n += sin(q);
    N += cos(q) / scale;
    scale *= 1.1;
  }
  return (N.x + N.y + 1.);
}

void main() {
  vec2 imageUV = v_imageUV;
  vec2 patternUV = v_imageUV - .5;
  patternUV = (patternUV * vec2(u_imageAspectRatio, 1.));
  patternUV /= (.01 + .09 * u_size);

  float t = u_time;

  float wavesNoise = snoise((.3 + .1 * sin(t)) * .1 * patternUV + vec2(0., .4 * t));

  float causticNoise = getCausticNoise(patternUV + u_waves * vec2(1., -1.) * wavesNoise, 2. * t, 1.5);

  if (u_layering > 0.) {
    causticNoise += u_layering * getCausticNoise(patternUV + 2. * u_waves * vec2(1., -1.) * wavesNoise, 1.5 * t, 2.);
  }
  causticNoise = causticNoise * causticNoise;

  float edgesDistortion = smoothstep(0., .1, imageUV.x);
  edgesDistortion *= smoothstep(0., .1, imageUV.y);
  edgesDistortion *= (smoothstep(1., 1.1, imageUV.x) + (1.0 - smoothstep(.8, .95, imageUV.x)));
  edgesDistortion *= (1.0 - smoothstep(.9, 1., imageUV.y));
  edgesDistortion = mix(edgesDistortion, 1., u_edges);

  float causticNoiseDistortion = .02 * causticNoise * edgesDistortion;

  float wavesDistortion = .1 * u_waves * wavesNoise;

  imageUV += vec2(wavesDistortion, -wavesDistortion);
  imageUV += (u_caustic * causticNoiseDistortion);

  float frame = getUvFrame(imageUV);

  vec4 image = texture(u_image, imageUV);
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;

  vec3 color = mix(backColor.rgb, image.rgb, image.a * frame);
  float opacity = backColor.a + image.a * frame;

  causticNoise = max(-.2, causticNoise);

  float hightlight = .025 * u_highlights * causticNoise;
  hightlight *= u_colorHighlight.a;
  color = mix(color, u_colorHighlight.rgb, .05 * u_highlights * causticNoise * u_colorHighlight.a);
  opacity += hightlight;

  color += hightlight * (.5 + .5 * wavesNoise);
  opacity += hightlight * (.5 + .5 * wavesNoise);

  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,si=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colorShadow;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_shadows;
uniform float u_angle;
uniform float u_stretch;
uniform float u_shape;
uniform float u_distortion;
uniform float u_highlights;
uniform float u_distortionShape;
uniform float u_shift;
uniform float u_blur;
uniform float u_edges;
uniform float u_marginLeft;
uniform float u_marginRight;
uniform float u_marginTop;
uniform float u_marginBottom;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_imageUV;

out vec4 fragColor;

${lr}
${ur}
${fr}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float getUvFrame(vec2 uv, float softness) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);
  float left   = smoothstep(0., aax + softness, uv.x);
  float right  = 1. - smoothstep(1. - softness - aax, 1., uv.x);
  float bottom = smoothstep(0., aay + softness, uv.y);
  float top    = 1. - smoothstep(1. - softness - aay, 1., uv.y);
  return left * right * bottom * top;
}

const int MAX_RADIUS = 50;
vec4 samplePremultiplied(sampler2D tex, vec2 uv) {
  vec4 c = texture(tex, uv);
  c.rgb *= c.a;
  return c;
}
vec4 getBlur(sampler2D tex, vec2 uv, vec2 texelSize, vec2 dir, float sigma) {
  if (sigma <= .5) return texture(tex, uv);
  int radius = int(min(float(MAX_RADIUS), ceil(3.0 * sigma)));

  float twoSigma2 = 2.0 * sigma * sigma;
  float gaussianNorm = 1.0 / sqrt(TWO_PI * sigma * sigma);

  vec4 sum = samplePremultiplied(tex, uv) * gaussianNorm;
  float weightSum = gaussianNorm;

  for (int i = 1; i <= MAX_RADIUS; i++) {
    if (i > radius) break;

    float x = float(i);
    float w = exp(-(x * x) / twoSigma2) * gaussianNorm;

    vec2 offset = dir * texelSize * x;
    vec4 s1 = samplePremultiplied(tex, uv + offset);
    vec4 s2 = samplePremultiplied(tex, uv - offset);

    sum += (s1 + s2) * w;
    weightSum += 2.0 * w;
  }

  vec4 result = sum / weightSum;
  if (result.a > 0.) {
    result.rgb /= result.a;
  }

  return result;
}

vec2 rotateAspect(vec2 p, float a, float aspect) {
  p.x *= aspect;
  p = rotate(p, a);
  p.x /= aspect;
  return p;
}

float smoothFract(float x) {
  float f = fract(x);
  float w = fwidth(x);

  float edge = abs(f - 0.5) - 0.5;
  float band = smoothstep(-w, w, edge);

  return mix(f, 1.0 - f, band);
}

void main() {

  float patternRotation = -u_angle * PI / 180.;
  float patternSize = mix(200., 5., u_size);

  vec2 uv = v_imageUV;

  vec2 uvMask = gl_FragCoord.xy / u_resolution.xy;
  vec2 sw = vec2(.005);
  vec4 margins = vec4(u_marginLeft, u_marginTop, u_marginRight, u_marginBottom);
  float mask =
  smoothstep(margins[0], margins[0] + sw.x, uvMask.x + sw.x) *
  smoothstep(margins[2], margins[2] + sw.x, 1.0 - uvMask.x + sw.x) *
  smoothstep(margins[1], margins[1] + sw.y, uvMask.y + sw.y) *
  smoothstep(margins[3], margins[3] + sw.y, 1.0 - uvMask.y + sw.y);
  float maskOuter =
  smoothstep(margins[0] - sw.x, margins[0], uvMask.x + sw.x) *
  smoothstep(margins[2] - sw.x, margins[2], 1.0 - uvMask.x + sw.x) *
  smoothstep(margins[1] - sw.y, margins[1], uvMask.y + sw.y) *
  smoothstep(margins[3] - sw.y, margins[3], 1.0 - uvMask.y + sw.y);
  float maskStroke = maskOuter - mask;
  float maskInner =
  smoothstep(margins[0] - 2. * sw.x, margins[0], uvMask.x) *
  smoothstep(margins[2] - 2. * sw.x, margins[2], 1.0 - uvMask.x) *
  smoothstep(margins[1] - 2. * sw.y, margins[1], uvMask.y) *
  smoothstep(margins[3] - 2. * sw.y, margins[3], 1.0 - uvMask.y);
  float maskStrokeInner = maskInner - mask;

  uv -= .5;
  uv *= patternSize;
  uv = rotateAspect(uv, patternRotation, u_imageAspectRatio);

  float curve = 0.;
  float patternY = uv.y / u_imageAspectRatio;
  if (u_shape > 4.5) {
    // pattern
    curve = .5 + .5 * sin(.5 * PI * uv.x) * cos(.5 * PI * patternY);
  } else if (u_shape > 3.5) {
    // zigzag
    curve = 10. * abs(fract(.1 * patternY) - .5);
  } else if (u_shape > 2.5) {
    // wave
    curve = 4. * sin(.23 * patternY);
  } else if (u_shape > 1.5) {
    // lines irregular
    curve = .5 + .5 * sin(.5 * uv.x) * sin(1.7 * uv.x);
  } else {
    // lines
  }

  vec2 UvToFract = uv + curve;
  vec2 fractOrigUV = fract(uv);
  vec2 floorOrigUV = floor(uv);

  float x = smoothFract(UvToFract.x);
  float xNonSmooth = fract(UvToFract.x) + .0001;

  float highlightsWidth = 2. * max(.001, fwidth(UvToFract.x));
  highlightsWidth += 2. * maskStrokeInner;
  float highlights = smoothstep(0., highlightsWidth, xNonSmooth);
  highlights *= smoothstep(1., 1. - highlightsWidth, xNonSmooth);
  highlights = 1. - highlights;
  highlights *= u_highlights;
  highlights = clamp(highlights, 0., 1.);
  highlights *= mask;

  float shadows = pow(x, 1.3);
  float distortion = 0.;
  float fadeX = 1.;
  float frameFade = 0.;

  float aa = fwidth(xNonSmooth);
  aa = max(aa, fwidth(uv.x));
  aa = max(aa, fwidth(UvToFract.x));
  aa = max(aa, .0001);

  if (u_distortionShape == 1.) {
    distortion = -pow(1.5 * x, 3.);
    distortion += (.5 - u_shift);

    frameFade = pow(1.5 * x, 3.);
    aa = max(.2, aa);
    aa += mix(.2, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion = mix(.5, distortion, fadeX);
  } else if (u_distortionShape == 2.) {
    distortion = 2. * pow(x, 2.);
    distortion -= (.5 + u_shift);

    frameFade = pow(abs(x - .5), 4.);
    aa = max(.2, aa);
    aa += mix(.2, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion = mix(.5, distortion, fadeX);
    frameFade = mix(1., frameFade, .5 * fadeX);
  } else if (u_distortionShape == 3.) {
    distortion = pow(2. * (xNonSmooth - .5), 6.);
    distortion -= .25;
    distortion -= u_shift;

    frameFade = 1. - 2. * pow(abs(x - .4), 2.);
    aa = .15;
    aa += mix(.1, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    frameFade = mix(1., frameFade, fadeX);

  } else if (u_distortionShape == 4.) {
    x = xNonSmooth;
    distortion = sin((x + .25) * TWO_PI);
    shadows = .5 + .5 * asin(distortion) / (.5 * PI);
    distortion *= .5;
    distortion -= u_shift;
    frameFade = .5 + .5 * sin(x * TWO_PI);
  } else if (u_distortionShape == 5.) {
    distortion -= pow(abs(x), .2) * x;
    distortion += .33;
    distortion -= 3. * u_shift;
    distortion *= .33;

    frameFade = .3 * (smoothstep(.0, 1., x));
    shadows = pow(x, 2.5);

    aa = max(.1, aa);
    aa += mix(.1, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion *= fadeX;
  }

  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec2 grainUV = v_imageUV - .5;
  grainUV *= (.8 / vec2(length(dudx), length(dudy)));
  grainUV += .5;
  if (u_grainMixer > 0.) {
    float grain = valueNoise(grainUV);
    grain = smoothstep(.4, .7, grain);
    grain *= u_grainMixer;
    distortion = mix(distortion, 0., grain);
  }

  shadows = min(shadows, 1.);
  shadows += maskStrokeInner;
  shadows *= mask;
  shadows = min(shadows, 1.);
  shadows *= pow(u_shadows, 2.);
  shadows = clamp(shadows, 0., 1.);

  distortion *= 3. * u_distortion;
  frameFade *= u_distortion;

  fractOrigUV.x += distortion;
  floorOrigUV = rotateAspect(floorOrigUV, -patternRotation, u_imageAspectRatio);
  fractOrigUV = rotateAspect(fractOrigUV, -patternRotation, u_imageAspectRatio);

  uv = (floorOrigUV + fractOrigUV) / patternSize;
  uv += pow(maskStroke, 4.);

  uv += vec2(.5);

  uv = mix(v_imageUV, uv, smoothstep(0., .7, mask));
  float blur = mix(0., 50., u_blur);
  blur = mix(0., blur, smoothstep(.5, 1., mask));

  float edgeDistortion = mix(.0, .04, u_edges);
  edgeDistortion += .06 * frameFade * u_edges;
  edgeDistortion *= mask;
  float frame = getUvFrame(uv, edgeDistortion);

  float stretch = 1. - smoothstep(0., .5, xNonSmooth) * smoothstep(1., 1. - .5, xNonSmooth);
  stretch = pow(stretch, 2.);
  stretch *= mask;
  stretch *= getUvFrame(uv, .1 + .05 * mask * frameFade);
  uv.y = mix(uv.y, .5, u_stretch * stretch);

  vec4 image = getBlur(u_image, uv, 1. / u_resolution / u_pixelRatio, vec2(0., 1.), blur);
  image.rgb *= image.a;
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;
  vec4 highlightColor = u_colorHighlight;
  highlightColor.rgb *= highlightColor.a;
  vec4 shadowColor = u_colorShadow;

  vec3 color = highlightColor.rgb * highlights;
  float opacity = highlightColor.a * highlights;

  shadows = mix(shadows * shadowColor.a, 0., highlights);
  color = mix(color, shadowColor.rgb * shadowColor.a, .5 * shadows);
  color += .5 * pow(shadows, .5) * shadowColor.rgb;
  opacity += shadows;
  color = clamp(color, vec3(0.), vec3(1.));
  opacity = clamp(opacity, 0., 1.);

  color += image.rgb * (1. - opacity) * frame;
  opacity += image.a * (1. - opacity) * frame;

  color += backColor.rgb * (1. - opacity);
  opacity += backColor.a * (1. - opacity);

  if (u_grainOverlay > 0.) {
    float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
    grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
    grainOverlay = pow(grainOverlay, 1.3);

    float grainOverlayV = grainOverlay * 2. - 1.;
    vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
    float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
    grainOverlayStrength = pow(grainOverlayStrength, .8);
    grainOverlayStrength *= mask;
    color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

    opacity += .5 * grainOverlayStrength;
  }
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,ci={lines:1,linesIrregular:2,wave:3,zigzag:4,pattern:5},li={prism:1,lens:2,contour:3,cascade:4,flat:5},ui=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_type;
uniform float u_pxSize;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_colorSteps;

out vec4 fragColor;


${fr}
${lr}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

vec2 getImageUV(vec2 uv) {
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  vec2 imageUV = uv;
  imageUV *= imageBoxScale;
  imageUV += boxOrigin * (imageBoxScale - 1.);
  imageUV += graphicOffset;
  imageUV /= u_scale;
  imageUV.x *= u_imageAspectRatio;
  imageUV = graphicRotation * imageUV;
  imageUV.x /= u_imageAspectRatio;

  imageUV += .5;
  imageUV.y = 1. - imageUV.y;

  return imageUV;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 imageUV = getImageUV(normalizedUV);
  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec4 image = texture(u_image, imageUV);
  float frame = getUvFrame(imageUV, pxSize / u_resolution);

  int type = int(floor(u_type));
  float dithering = 0.0;

  float lum = dot(vec3(.2126, .7152, .0722), image.rgb);
  lum = u_inverted ? (1. - lum) : lum;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), lum);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  float colorSteps = max(floor(u_colorSteps), 1.);
  vec3 color = vec3(0.0);
  float opacity = 1.;

  dithering -= .5;
  float brightness = clamp(lum + dithering / colorSteps, 0.0, 1.0);
  brightness = mix(0.0, brightness, frame);
  brightness = mix(0.0, brightness, image.a);
  float quantLum = floor(brightness * colorSteps + 0.5) / colorSteps;
  quantLum = mix(0.0, quantLum, frame);

  if (u_originalColors == true) {
    vec3 normColor = image.rgb / max(lum, 0.001);
    color = normColor * quantLum;

    float quantAlpha = floor(image.a * colorSteps + 0.5) / colorSteps;
    opacity = mix(quantLum, 1., quantAlpha);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;
    vec3 hlColor = u_colorHighlight.rgb * u_colorHighlight.a;
    float hlOpacity = u_colorHighlight.a;

    fgColor = mix(fgColor, hlColor, step(1.02 - .02 * u_colorSteps, brightness));
    fgOpacity = mix(fgOpacity, hlOpacity, step(1.02 - .02 * u_colorSteps, brightness));

    color = fgColor * quantLum;
    opacity = fgOpacity * quantLum;
    color += bgColor * (1.0 - opacity);
    opacity += bgOpacity * (1.0 - opacity);
  }

  fragColor = vec4(color, opacity);
}
`,di={maxSamples:50},fi=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;
uniform float u_spread;
uniform float u_bias;
uniform float u_angle;
uniform float u_perspective;
uniform float u_count;
uniform float u_dispersion;
uniform float u_dispersionShift;
uniform float u_dispersionColor;
uniform float u_focusCenter;
uniform float u_focusEdges;
uniform float u_swirl;
uniform float u_noise;
uniform float u_noiseFrequency;
uniform float u_noiseOffset;
uniform float u_lensBulge;
uniform float u_lensCircle;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_imageX;
uniform float u_imageY;

in vec2 v_imageUV;

out vec4 fragColor;

${lr}
${fr}
${ur}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1., 0.));
  float c = hash21(i + vec2(0., 1.));
  float d = hash21(i + vec2(1., 1.));
  vec2 u = f * f * (3. - 2. * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float getUvFrame(vec2 uv) {
  vec2 invAA = 1. / clamp(fwidth(uv), 1e-5, .02);
  vec2 lo = clamp(uv * invAA + .5, 0., 1.);
  vec2 hi = clamp((1. - uv) * invAA + .5, 0., 1.);
  return lo.x * hi.x * lo.y * hi.y;
}

vec4 sampleOverWhite(vec2 uv) {
  vec4 img = texture(u_image, uv);
  float cover = img.a * getUvFrame(uv);
  vec3 colorOverWhite = mix(vec3(1.), img.rgb, cover);
  return vec4(colorOverWhite, cover);
}

vec3 hueColor(float hue) {
  vec3 rgb = clamp(abs(mod(hue * 6. + vec3(0., 4., 2.), 6.) - 3.) - 1., 0., 1.);
  rgb = rgb * rgb * (3. - 2. * rgb);
  return rgb;
}
                                            
float boxInradius() {
  return .5 * min(u_imageAspectRatio, 1.);
}

float boxOutradius() {
  return .5 * length(vec2(u_imageAspectRatio, 1.));
}

float spreadReach() {
  return .7 * pow(u_spread, 1.3 + 2.7 * u_spread);
}

float innerCircleMask(float radius, float inradius) {
  return 1. - smoothstep(.5 * inradius, 1.1 * inradius, radius);
}

float dispersionCurve(float t, float biasPow) {
  float mirroredT = u_bias < 0. ? 1. - t : t;
  float curved = pow(mirroredT, biasPow);
  return u_bias < 0. ? 1. - curved : curved;
}

vec2 getSpread(vec2 fromCenter, float radius, vec2 warpedUV, float edgeAA, float inradius, float outradius, float reach, out float outStrength) {
  float angleRad = radians(u_angle);
  vec2 uniformDir = vec2(cos(angleRad), sin(angleRad));

  float invInradius = 1. / inradius;
  vec2 radialDir = fromCenter * invInradius;
  float maxLen = (outradius + reach) * invInradius;
  float radialLen = radius * invInradius;
  if (radialLen > maxLen) radialDir *= maxLen / radialLen;
  vec2 spreadDir = mix(uniformDir, radialDir, u_perspective);

  float bandProximity = smoothstep(inradius * .8, inradius, radius);
  float lensCircleMaxing = bandProximity * u_lensCircle * u_lensCircle * u_lensCircle;
  spreadDir = mix(spreadDir, radialDir, lensCircleMaxing);

  vec2 warpedAbs = abs(warpedUV - .5);
  float inner = mix(1., smoothstep(0., mix(inradius, outradius, u_focusCenter), radius), u_focusCenter);
  float boxDist = max(warpedAbs.x, warpedAbs.y) * 2.;
  float outer = mix(1., 1. - min(boxDist, 1.), u_focusEdges);
  float strength = inner * outer;

  strength *= mix(1., mix(.15, .03, max(-u_lensBulge, 0.)), lensCircleMaxing);

  vec2 outside = max(warpedAbs - .5, 0.);
  float margin = max(reach * length(spreadDir) * (1. - u_lensCircle), edgeAA);
  strength *= 1. - smoothstep(0., margin, length(outside));

  outStrength = strength;
  vec2 axis = spreadDir * (reach * strength);

  if (u_noise > 0.) {
    float turn = (valueNoise(fromCenter * u_noiseFrequency * 18. + u_noiseOffset * 30.) - .5) * 2. * u_noise;
    float cs = cos(turn), sn = sin(turn);
    axis = mat2(cs, -sn, sn, cs) * axis;
  }

  axis.x /= u_imageAspectRatio;
  return axis;
}

vec2 lensWarp(vec2 fromCenter, float radius, float inradius, out float bulgeFade) {
  bulgeFade = 1.;
  if (u_lensBulge == 0. && u_lensCircle <= 0.) return fromCenter;
  if (radius < 1e-5) return fromCenter;
  
  float r = radius;

  if (u_lensBulge != 0.) {
    float rn = radius / inradius;
    float bulge = abs(u_lensBulge) * (u_lensBulge > 0. ? 1.4 : 1.2);
    if (u_lensBulge > 0.) bulgeFade = 1. - smoothstep(1.45, 1.53, rn * bulge);
    float map = u_lensBulge > 0.
      ? tan(min(rn * bulge, 1.53)) / tan(bulge)
      : atan(rn * tan(bulge)) / bulge;
    float bulgeScale = map / rn;
    fromCenter *= bulgeScale;
    r *= bulgeScale;
  }

  if (u_lensCircle > 0.) {
    vec2 dir = fromCenter / max(r, 1e-5);
    vec2 halfBox = vec2(u_imageAspectRatio, 1.) * .5;
    float rBox = min(halfBox.x / max(abs(dir.x), 1e-4), halfBox.y / max(abs(dir.y), 1e-4));
    float band = inradius * mix(.03, .2, .5 * (u_lensBulge + 1.));
    float innerEdge = inradius - band;
    float over = smoothstep(0., 1., (r - innerEdge) / band);
    float g = r + (rBox - inradius) * pow(over, 14.);
    fromCenter = dir * mix(r, g, u_lensCircle);
  }

  return fromCenter;
}

void main() {
  vec2 uv = v_imageUV;

  float invAspect = 1. / u_imageAspectRatio;
  float inradius = boxInradius();
  float outradius = boxOutradius();
  float reach = spreadReach();

  vec2 fromCenter = uv - .5;
  fromCenter.x *= u_imageAspectRatio;
  float radius = length(fromCenter);

  float bulgeFade;
  vec2 warpedFromCenter = lensWarp(fromCenter, radius, inradius, bulgeFade);
  vec2 baseUV = vec2(warpedFromCenter.x * invAspect, warpedFromCenter.y) + .5;

  vec2 baseDerivative = fwidth(baseUV);
  float edgeAA = clamp(2. * max(baseDerivative.x, baseDerivative.y), .001, .02);

  float spreadStrength;
  vec2 spreadAxis = getSpread(fromCenter, radius, baseUV, edgeAA, inradius, outradius, reach, spreadStrength);

  vec2 grainUV = vec2(0.);
  if (u_grainMixer > 0. || u_grainOverlay > 0.) {
    vec2 dudx = dFdx(v_imageUV);
    vec2 dudy = dFdy(v_imageUV);
    grainUV = (v_imageUV - .5) * (.8 / vec2(length(dudx), length(dudy))) + .5;
  }

  if (u_grainMixer > 0.) {
    float grainSeed = valueNoise(grainUV);
    vec2 jit = fract(grainSeed * vec2(157.31, 113.57)) * 2. - 1.;
    spreadAxis += jit * .3 * u_grainMixer * length(spreadAxis);
  }

  float count = floor(u_count);
  int countInteger = int(count);

  float invCount = 1. / count;
  float invSpan = 1. / max(count - 1., 1.);
  float hueBase = u_dispersionColor + .5;
  float biasPower = 1. + 2. * abs(u_bias);
  vec2 tapBias = .5 - vec2(u_imageX, u_imageY);

  float centerAmount = clamp(1. - u_dispersionShift, 0., 1.);
  float edgesAmount = clamp(1. + u_dispersionShift, 0., 1.);
  float dispersion = u_dispersion * mix(edgesAmount, centerAmount, innerCircleMask(radius, inradius));
  float dispersionPower = pow(dispersion, .8);

  float warpedRadius = length(warpedFromCenter);
  float swirlAngle = u_swirl * .4 * PI * spreadStrength * u_spread * min(1., inradius / max(warpedRadius, 1e-4));

  vec3 colorSum = vec3(0.);
  vec3 weightSum = vec3(0.);
  float coverSum = 0.;

  for (int i = 0; i < ${di.maxSamples}; i++) {
    if (i >= countInteger) break;

    float layer = float(i);
    float hue = hueBase + layer * invCount;

    float spread = layer * invSpan;
    if (u_bias != 0.) spread = dispersionCurve(spread, biasPower);

    // mix(axis, -axis, spread) is axis scaled by the signed position along the fan
    float fanPos = 1. - 2. * spread;
    vec2 tapUV = baseUV + spreadAxis * fanPos - .5;

    if (u_swirl != 0.) {
      tapUV.x *= u_imageAspectRatio;
      tapUV = rotate(tapUV, swirlAngle * fanPos);
      tapUV.x *= invAspect;
    }

    vec4 tap = sampleOverWhite(tapUV + tapBias);
    vec3 weight = 1. - dispersionPower * hueColor(hue);

    colorSum += tap.rgb * weight;
    weightSum += weight;
    coverSum += tap.a;
  }

  vec3 color = colorSum / max(weightSum, 1e-4);
  float coverAvg = coverSum * invCount;

  float ground = min(color.r, min(color.g, color.b));
  float alpha = max(coverAvg, 1. - ground);
  vec3 premult = max(color - (1. - alpha), 0.);
  fragColor = vec4(premult, alpha) * bulgeFade;

  if (u_grainOverlay > 0.) {
    float grain = valueNoise(rotate(grainUV, 1.) + vec2(3.));
    grain = mix(grain, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
    grain = pow(grain, 1.3);
    float grainV = grain * 2. - 1.;
    float grainStrength = pow(u_grainOverlay * abs(grainV), .8) * fragColor.a;
    fragColor.rgb = mix(fragColor.rgb, vec3(step(0., grainV)) * fragColor.a, .35 * grainStrength);
  }
}
`,pi={maxColorCount:10},mi=`#version 300 es
precision highp float;

in mediump vec2 v_imageUV;
in mediump vec2 v_objectUV;
out vec4 fragColor;

uniform sampler2D u_image;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${pi.maxColorCount}];
uniform float u_colorsCount;

uniform float u_angle;
uniform float u_noise;
uniform float u_innerGlow;
uniform float u_outerGlow;
uniform float u_contour;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1. - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1. - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float circle(vec2 uv, vec2 c, vec2 r) {
  return 1. - smoothstep(r[0], r[1], length(uv - c));
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float shadowShape(vec2 uv, float t, float contour) {
  vec2 scaledUV = uv;

  // base shape tranjectory
  float posY = mix(-1., 2., t);

  // scaleX when it's moving down
  scaledUV.y -= .5;
  float mainCircleScale = sst(0., .8, posY) * lst(1.4, .9, posY);
  scaledUV *= vec2(1., 1. + 1.5 * mainCircleScale);
  scaledUV.y += .5;

  // base shape
  float innerR = .4;
  float outerR = 1. - .3 * (sst(.1, .2, t) * (1. - sst(.2, .5, t)));
  float s = circle(scaledUV, vec2(.5, posY - .2), vec2(innerR, outerR));
  float shapeSizing = sst(.2, .3, t) * sst(.6, .3, t);
  s = pow(s, 1.4);
  s *= 1.2;

  // flat gradient to take over the shadow shape
  float topFlattener = 0.;
  {
    float pos = posY - uv.y;
    float edge = 1.2;
    topFlattener = lst(-.4, 0., pos) * (1. - sst(.0, edge, pos));
    topFlattener = pow(topFlattener, 3.);
    float topFlattenerMixer = (1. - sst(.0, .3, pos));
    s = mix(topFlattener, s, topFlattenerMixer);
  }

  // apple right circle
  {
    float visibility = sst(.6, .7, t) * (1. - sst(.8, .9, t));
    float angle = -2. -t * TWO_PI;
    float rightCircle = circle(uv, vec2(.95 - .2 * cos(angle), .4 - .1 * sin(angle)), vec2(.15, .3));
    rightCircle *= visibility;
    s = mix(s, 0., rightCircle);
  }

  // apple top circle
  {
    float topCircle = circle(uv, vec2(.5, .19), vec2(.05, .25));
    topCircle += 2. * contour * circle(uv, vec2(.5, .19), vec2(.2, .5));
    float visibility = .55 * sst(.2, .3, t) * (1. - sst(.3, .45, t));
    topCircle *= visibility;
    s = mix(s, 0., topCircle);
  }

  float leafMask = circle(uv, vec2(.53, .13), vec2(.08, .19));
  leafMask = mix(leafMask, 0., 1. - sst(.4, .54, uv.x));
  leafMask = mix(0., leafMask, sst(.0, .2, uv.y));
  leafMask *= (sst(.5, 1.1, posY) * sst(1.5, 1.3, posY));
  s += leafMask;

  // apple bottom circle
  {
    float visibility = sst(.0, .4, t) * (1. - sst(.6, .8, t));
    s = mix(s, 0., visibility * circle(uv, vec2(.52, .92), vec2(.09, .25)));
  }

  // random balls that are invisible if apple logo is selected
  {
    float pos = sst(.0, .6, t) * (1. - sst(.6, 1., t));
    s = mix(s, .5, circle(uv, vec2(.0, 1.2 - .5 * pos), vec2(.1, .3)));
    s = mix(s, .0, circle(uv, vec2(1., .5 + .5 * pos), vec2(.1, .3)));

    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * sst(.7, .5, t)), vec2(.07, .22)));
    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * (1. - sst(.5, .7, t))), vec2(.07, .22)));
    s /= max(1e-4, sst(1., .85, uv.y));
  }

  s = clamp(0., 1., s);
  return s;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).g;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).g;

  return sum / norm;
}

void main() {
  vec2 uv = v_objectUV + .5;
  uv.y = 1. - uv.y;

  vec2 imgUV = v_imageUV;
  imgUV -= .5;
  imgUV *= 0.5714285714285714;
  imgUV += .5;
  float imgSoftFrame = getImgFrame(imgUV, .03);

  vec4 img = texture(u_image, imgUV);
  vec2 dudx = dFdx(imgUV);
  vec2 dudy = dFdy(imgUV);

  if (img.a == 0.) {
    fragColor = u_colorBack;
    return;
  }

  float t = .1 * u_time;
  t -= .3;

  float tCopy = t + 1. / 3.;
  float tCopy2 = t + 2. / 3.;

  t = mod(t, 1.);
  tCopy = mod(tCopy, 1.);
  tCopy2 = mod(tCopy2, 1.);

  vec2 animationUV = imgUV - vec2(.5);
  float angle = -u_angle * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  animationUV = vec2(
  animationUV.x * cosA - animationUV.y * sinA,
  animationUV.x * sinA + animationUV.y * cosA
  ) + vec2(.5);

  float shape = img[0];

  img[1] = blurEdge3x3(u_image, imgUV, dudx, dudy, 8., img[1]);

  float outerBlur = 1. - mix(1., img[1], shape);
  float innerBlur = mix(img[1], 0., shape);
  float contour = mix(img[2], 0., shape);

  outerBlur *= imgSoftFrame;

  float shadow = shadowShape(animationUV, t, innerBlur);
  float shadowCopy = shadowShape(animationUV, tCopy, innerBlur);
  float shadowCopy2 = shadowShape(animationUV, tCopy2, innerBlur);

  float inner = .8 + .8 * innerBlur;
  inner = mix(inner, 0., shadow);
  inner = mix(inner, 0., shadowCopy);
  inner = mix(inner, 0., shadowCopy2);

  inner *= mix(0., 2., u_innerGlow);

  inner += (u_contour * 2.) * contour;
  inner = min(1., inner);
  inner *= (1. - shape);

  float outer = 0.;
  {
    t *= 3.;
    t = mod(t - .1, 1.);

    outer = .9 * pow(outerBlur, .8);
    float y = mod(animationUV.y - t, 1.);
    float animatedMask = sst(.3, .65, y) * (1. - sst(.65, 1., y));
    animatedMask = .5 + animatedMask;
    outer *= animatedMask;
    outer *= mix(0., 5., pow(u_outerGlow, 2.));
    outer *= imgSoftFrame;
  }

  inner = pow(inner, 1.2);
  float heat = clamp(inner + outer, 0., 1.);

  heat += (.005 + .35 * u_noise) * (fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  float mixer = heat * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float outerShape = 0.;
  for (int i = 1; i < ${pi.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0., 1.);
    if (i == 1) {
      outerShape = m;
    }
    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  color += .02 * (fract(sin(dot(uv + 1., vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  fragColor = vec4(color, opacity);
}
`,hi=`#version 300 es
precision mediump float;

uniform sampler2D u_image;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;

${lr}
${ur}
${_r}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  // u_contour is applied in 2 separate ranges:
  // - 0 to .4 sets the edge hardness, saturated above .4 (both branches below)
  // - .5 to 1 warps the stripes direction along the edges, inactive below .5 (see u_contour range 2)
  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  // u_contour range 2
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${gr}

  fragColor = vec4(color, opacity);
}
`,gi={measurePerformance:!1,workingSize:512,iterations:40},_i={none:0,circle:1,daisy:2,diamond:3,metaballs:4},vi=`#version 300 es
precision mediump float;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_radius;
uniform float u_contrast;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_grainSize;
uniform float u_grid;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_type;

in vec2 v_imageUV;

out vec4 fragColor;

${lr}
${ur}
${fr}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float getCircle(vec2 uv, float r, float baseR) {
  r = mix(.25 * baseR, 0., r);
  float d = length(uv - .5);
  float aa = fwidth(d);
  return 1. - smoothstep(r - aa, r + aa, d);
}

float getCell(vec2 uv) {
  float insideX = step(0.0, uv.x) * (1.0 - step(1.0, uv.x));
  float insideY = step(0.0, uv.y) * (1.0 - step(1.0, uv.y));
  return insideX * insideY;
}

float getCircleWithHole(vec2 uv, float r, float baseR) {
  float cell = getCell(uv);

  r = mix(.75 * baseR, 0., r);
  float rMod = mod(r, .5);

  float d = length(uv - .5);
  float aa = fwidth(d);
  float circle = 1. - smoothstep(rMod - aa, rMod + aa, d);
  if (r < .5) {
    return circle;
  } else {
    return cell - circle;
  }
}

float getGooeyBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = .3;
  if (u_grid == 1.) {
    sizeRadius = .42;
  }
  sizeRadius = mix(sizeRadius * baseR, 0., r);
  d = 1. - sst(0., sizeRadius, d);

  d = pow(d, 2. + baseR);
  return d;
}

float getSoftBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = clamp(baseR, 0., 1.);
  sizeRadius = mix(.5 * sizeRadius, 0., r);
  d = 1. - lst(0., sizeRadius, d);
  float powRadius = 1. - lst(0., 2., baseR);
  d = pow(d, 4. + 3. * powRadius);
  return d;
}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

float sigmoid(float x, float k) {
  return 1.0 / (1.0 + exp(-k * (x - 0.5)));
}

float getLumAtPx(vec2 uv, float contrast) {
  vec4 tex = texture(u_image, uv);
  vec3 color = vec3(
  sigmoid(tex.r, contrast),
  sigmoid(tex.g, contrast),
  sigmoid(tex.b, contrast)
  );
  float lum = dot(vec3(0.2126, 0.7152, 0.0722), color);
  lum = mix(1., lum, tex.a);
  lum = u_inverted ? (1. - lum) : lum;
  return lum;
}

float getLumBall(vec2 p, vec2 pad, vec2 inCellOffset, float contrast, float baseR, float stepSize, out vec4 ballColor) {
  p += inCellOffset;
  vec2 uv_i = floor(p);
  vec2 uv_f = fract(p);
  vec2 samplingUV = (uv_i + .5 - inCellOffset) * pad + vec2(.5);
  float outOfFrame = getUvFrame(samplingUV, pad * stepSize);

  float lum = getLumAtPx(samplingUV, contrast);
  ballColor = texture(u_image, samplingUV);
  ballColor.rgb *= ballColor.a;
  ballColor *= outOfFrame;

  float ball = 0.;
  if (u_type == 0.) {
    // classic
    ball = getCircle(uv_f, lum, baseR);
  } else if (u_type == 1.) {
    // gooey
    ball = getGooeyBall(uv_f, lum, baseR);
  } else if (u_type == 2.) {
    // holes
    ball = getCircleWithHole(uv_f, lum, baseR);
  } else if (u_type == 3.) {
    // soft
    ball = getSoftBall(uv_f, lum, baseR);
  }

  return ball * outOfFrame;
}


void main() {

  float stepMultiplier = 1.;
  if (u_type == 0.) {
    // classic
    stepMultiplier = 2.;
  } else if (u_type == 1. || u_type == 3.) {
    // gooey & soft
    stepMultiplier = 6.;
  }

  float cellsPerSide = mix(300., 7., pow(u_size, .7));
  cellsPerSide /= stepMultiplier;
  float cellSizeY = 1. / cellsPerSide;
  vec2 pad = cellSizeY * vec2(1. / u_imageAspectRatio, 1.);
  if (u_type == 1. && u_grid == 1.) {
    // gooey diagonal grid works differently
    pad *= .7;
  }

  vec2 uv = v_imageUV;
  uv -= vec2(.5);
  uv /= pad;

  float contrast = mix(0., 15., pow(u_contrast, 1.5));
  float baseRadius = u_radius;
  if (u_originalColors == true) {
    contrast = mix(.1, 4., pow(u_contrast, 2.));
    baseRadius = 2. * pow(.5 * u_radius, .3);
  }

  float totalShape = 0.;
  vec3 totalColor = vec3(0.);
  float totalOpacity = 0.;

  vec4 ballColor;
  float shape;
  float stepSize = 1. / stepMultiplier;
  for (float x = -0.5; x < 0.5; x += stepSize) {
    for (float y = -0.5; y < 0.5; y += stepSize) {
      vec2 offset = vec2(x, y);

      if (u_grid == 1.) {
        float rowIndex = floor((y + .5) / stepSize);
        float colIndex = floor((x + .5) / stepSize);
        if (stepSize == 1.) {
          rowIndex = floor(uv.y + y + 1.);
          if (u_type == 1.) {
            colIndex = floor(uv.x + x + 1.);
          }
        }
        if (u_type == 1.) {
          if (mod(rowIndex + colIndex, 2.) == 1.) {
            continue;
          }
        } else {
          if (mod(rowIndex, 2.) == 1.) {
            offset.x += .5 * stepSize;
          }
        }
      }

      shape = getLumBall(uv, pad, offset, contrast, baseRadius, stepSize, ballColor);
      totalColor   += ballColor.rgb * shape;
      totalShape   += shape;
      totalOpacity += shape;
    }
  }

  const float eps = 1e-4;

  totalColor /= max(totalShape, eps);
  totalOpacity /= max(totalShape, eps);

  float finalShape = 0.;
  if (u_type == 0.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 1.) {
    float aa = fwidth(totalShape);
    float th = .5;
    finalShape = smoothstep(th - aa, th + aa, totalShape);
  } else if (u_type == 2.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 3.) {
    finalShape = totalShape;
  }

  vec2 grainSize = mix(2000., 200., u_grainSize) * vec2(1., 1. / u_imageAspectRatio);
  vec2 grainUV = v_imageUV - .5;
  grainUV *= grainSize;
  grainUV += .5;
  if (u_grainMixer > 0.) {
    float grain = valueNoise(grainUV);
    grain = smoothstep(.55, .7 + .2 * u_grainMixer, grain);
    grain *= u_grainMixer;
    finalShape = mix(finalShape, 0., grain);
  }

  vec3 color = vec3(0.);
  float opacity = 0.;

  if (u_originalColors == true) {
    color = totalColor * finalShape;
    opacity = totalOpacity * finalShape;

    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    color = color + bgColor * (1. - opacity);
    opacity = opacity + u_colorBack.a * (1. - opacity);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;

    color = fgColor * finalShape;
    opacity = fgOpacity * finalShape;
    color += bgColor * (1. - opacity);
    opacity += bgOpacity * (1. - opacity);
  }

  if (u_grainOverlay > 0.) {
    float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
    grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
    grainOverlay = pow(grainOverlay, 1.3);

    float grainOverlayV = grainOverlay * 2. - 1.;
    vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
    float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
    grainOverlayStrength = pow(grainOverlayStrength, .8);
    color = mix(color, grainOverlayColor, .5 * grainOverlayStrength);

    opacity += .5 * grainOverlayStrength;
  }
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,yi={classic:0,gooey:1,holes:2,soft:3},bi={square:0,hex:1},xi=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colorC;
uniform vec4 u_colorM;
uniform vec4 u_colorY;
uniform vec4 u_colorK;
uniform float u_size;
uniform float u_contrast;
uniform float u_grainSize;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_gridNoise;
uniform float u_softness;
uniform float u_floodC;
uniform float u_floodM;
uniform float u_floodY;
uniform float u_floodK;
uniform float u_gainC;
uniform float u_gainM;
uniform float u_gainY;
uniform float u_gainK;
uniform float u_type;
uniform sampler2D u_noiseTexture;

in vec2 v_imageUV;
out vec4 fragColor;

const float shiftC = -.5;
const float shiftM = -.25;
const float shiftY = .2;
const float shiftK = 0.;

// Precomputed sin/cos for rotation angles (15\xB0, 75\xB0, 0\xB0, 45\xB0)
const float cosC = 0.9659258;  const float sinC = 0.2588190;   // 15\xB0
const float cosM = 0.2588190;  const float sinM = 0.9659258;   // 75\xB0
const float cosY = 1.0;        const float sinY = 0.0;         // 0\xB0
const float cosK = 0.7071068;  const float sinK = 0.7071068;   // 45\xB0

${lr}

vec2 randomRG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).rg;
}
vec3 hash23(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.3183099, 0.3678794, 0.3141592)) + 0.1;
  p3 += dot(p3, p3.yzx + 19.19);
  return fract(vec3(p3.x * p3.y, p3.y * p3.z, p3.z * p3.x));
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

vec3 valueNoise3(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec3 a = hash23(i);
  vec3 b = hash23(i + vec2(1.0, 0.0));
  vec3 c = hash23(i + vec2(0.0, 1.0));
  vec3 d = hash23(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  vec3 x1 = mix(a, b, u.x);
  vec3 x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float getUvFrame(vec2 uv, vec2 pad) {
  float left   = smoothstep(-pad.x, 0., uv.x);
  float right  = smoothstep(1. + pad.x, 1., uv.x);
  float bottom = smoothstep(-pad.y, 0., uv.y);
  float top    = smoothstep(1. + pad.y, 1., uv.y);

  return left * right * bottom * top;
}

vec4 RGBAtoCMYK(vec4 rgba) {
  float k = 1. - max(max(rgba.r, rgba.g), rgba.b);
  float denom = 1. - k;
  vec3 cmy = vec3(0.);
  if (denom > 1e-5) {
    cmy = (1. - rgba.rgb - vec3(k)) / denom;
  }
  return vec4(cmy, k) * rgba.a;
}

vec3 applyContrast(vec3 rgb) {
  return clamp((rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
}

// Single-component CMYK extractors with contrast built-in, alpha-aware
float getCyan(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.r) / maxRGB : 0.) * rgba.a;
}
float getMagenta(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.g) / maxRGB : 0.) * rgba.a;
}
float getYellow(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.b) / maxRGB : 0.) * rgba.a;
}
float getBlack(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  return (1. - max(max(c.r, c.g), c.b)) * rgba.a;
}

vec2 cellCenterPos(vec2 uv, vec2 cellOffset, float channelIdx) {
  vec2 cellCenter = floor(uv) + .5 + cellOffset;
  return cellCenter + (randomRG(cellCenter + channelIdx * 50.) - .5) * u_gridNoise;
}

vec2 gridToImageUV(vec2 cellCenter, float cosA, float sinA, float shift, vec2 pad) {
  vec2 uvGrid = mat2(cosA, -sinA, sinA, cosA) * (cellCenter - shift);
  return uvGrid * pad + 0.5;
}

void colorMask(vec2 pos, vec2 cellCenter, float rad, float transparency, float grain, float channelAddon, float channelgain, float generalComp, bool isJoined, inout float outMask) {
  float dist = length(pos - cellCenter);

  float radius = rad;
  radius *= (1. + generalComp);
  radius += (.15 + channelgain * radius);
  radius = max(0., radius);
  radius = mix(0., radius, transparency);
  radius += channelAddon;
  radius *= (1. - grain);

  float mask = 1. - sst(0., radius, dist);
  if (isJoined) {
    // ink or sharp (joined)
    mask = pow(mask, 1.2);
  } else {
    // dots (separate)
    mask = sst(.5 - .5 * u_softness, .51 + .49 * u_softness, mask);
  }

  mask *= mix(1., mix(.5, 1., 1.5 * radius), u_softness);
  outMask += mask;
}

vec3 applyInk(vec3 paper, vec3 inkColor, float cov) {
  vec3 inkEffect = mix(vec3(1.0), inkColor, clamp(cov, 0.0, 1.0));
  return paper * inkEffect;
}

void main() {
  vec2 uv = v_imageUV;

  float cellsPerSide = mix(400.0, 7.0, pow(u_size, 0.7));
  float cellSizeY = 1.0 / cellsPerSide;
  vec2 pad = cellSizeY * vec2(1.0 / u_imageAspectRatio, 1.0);
  vec2 uvGrid = (uv - .5) / pad;
  float insideImageBox = getUvFrame(uv, pad);

  float generalComp = .1 * u_softness + .1 * u_gridNoise + .1 * (1. - step(0.5, u_type)) * (1.5 - u_softness);

  vec2 uvC = mat2(cosC, sinC, -sinC, cosC) * uvGrid + shiftC;
  vec2 uvM = mat2(cosM, sinM, -sinM, cosM) * uvGrid + shiftM;
  vec2 uvY = mat2(cosY, sinY, -sinY, cosY) * uvGrid + shiftY;
  vec2 uvK = mat2(cosK, sinK, -sinK, cosK) * uvGrid + shiftK;

  vec2 grainSize = mix(2000., 200., u_grainSize) * vec2(1., 1. / u_imageAspectRatio);
  vec2 grainUV = (v_imageUV - .5) * grainSize + .5;
  // shared by the grain mixer and the grain overlay, skip it when neither is on
  vec3 noiseValues = vec3(0.);
  if (u_grainMixer > 0. || u_grainOverlay > 0.) {
    noiseValues = valueNoise3(grainUV);
  }
  float grain = sst(.55, 1., noiseValues.r);
  grain *= u_grainMixer;

  vec4 outMask = vec4(0.);
  bool isJoined = u_type > 0.5;

  if (u_type < 1.5) {
    // dots or ink: per-cell color sampling
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        vec2 cellOffset = vec2(float(dx), float(dy));

        vec2 cellCenterC = cellCenterPos(uvC, cellOffset, 0.);
        vec4 texC = texture(u_image, gridToImageUV(cellCenterC, cosC, sinC, shiftC, pad));
        colorMask(uvC, cellCenterC, getCyan(texC), insideImageBox * texC.a, grain, u_floodC, u_gainC, generalComp, isJoined, outMask[0]);

        vec2 cellCenterM = cellCenterPos(uvM, cellOffset, 1.);
        vec4 texM = texture(u_image, gridToImageUV(cellCenterM, cosM, sinM, shiftM, pad));
        colorMask(uvM, cellCenterM, getMagenta(texM), insideImageBox * texM.a, grain, u_floodM, u_gainM, generalComp, isJoined, outMask[1]);

        vec2 cellCenterY = cellCenterPos(uvY, cellOffset, 2.);
        vec4 texY = texture(u_image, gridToImageUV(cellCenterY, cosY, sinY, shiftY, pad));
        colorMask(uvY, cellCenterY, getYellow(texY), insideImageBox * texY.a, grain, u_floodY, u_gainY, generalComp, isJoined, outMask[2]);

        vec2 cellCenterK = cellCenterPos(uvK, cellOffset, 3.);
        vec4 texK = texture(u_image, gridToImageUV(cellCenterK, cosK, sinK, shiftK, pad));
        colorMask(uvK, cellCenterK, getBlack(texK), insideImageBox * texK.a, grain, u_floodK, u_gainK, generalComp, isJoined, outMask[3]);
      }
    }
  } else {
    // sharp: direct px color sampling
    vec4 tex = texture(u_image, uv);
    tex.rgb = applyContrast(tex.rgb);
    insideImageBox *= tex.a;
    vec4 cmykOriginal = RGBAtoCMYK(tex);
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        vec2 cellOffset = vec2(float(dx), float(dy));

        colorMask(uvC, cellCenterPos(uvC, cellOffset, 0.), cmykOriginal.x, insideImageBox, grain, u_floodC, u_gainC, generalComp, isJoined, outMask[0]);
        colorMask(uvM, cellCenterPos(uvM, cellOffset, 1.), cmykOriginal.y, insideImageBox, grain, u_floodM, u_gainM, generalComp, isJoined, outMask[1]);
        colorMask(uvY, cellCenterPos(uvY, cellOffset, 2.), cmykOriginal.z, insideImageBox, grain, u_floodY, u_gainY, generalComp, isJoined, outMask[2]);
        colorMask(uvK, cellCenterPos(uvK, cellOffset, 3.), cmykOriginal.w, insideImageBox, grain, u_floodK, u_gainK, generalComp, isJoined, outMask[3]);
      }
    }
  }

  float shape;

  float C = outMask[0];
  float M = outMask[1];
  float Y = outMask[2];
  float K = outMask[3];

  if (isJoined) {
    // ink or sharp: apply threshold for joined dots
    float th = .5;
    float sLeft = th * u_softness;
    float sRight = (1. - th) * u_softness + .01;
    C = smoothstep(th - sLeft - fwidth(C), th + sRight, C);
    M = smoothstep(th - sLeft - fwidth(M), th + sRight, M);
    Y = smoothstep(th - sLeft - fwidth(Y), th + sRight, Y);
    K = smoothstep(th - sLeft - fwidth(K), th + sRight, K);
  }

  C *= u_colorC.a;
  M *= u_colorM.a;
  Y *= u_colorY.a;
  K *= u_colorK.a;

  vec3 ink = vec3(1.);
  ink = applyInk(ink, u_colorK.rgb, K);
  ink = applyInk(ink, u_colorC.rgb, C);
  ink = applyInk(ink, u_colorM.rgb, M);
  ink = applyInk(ink, u_colorY.rgb, Y);

  shape = clamp(max(max(C, M), max(Y, K)), 0., 1.);

  vec3 color = u_colorBack.rgb * u_colorBack.a;

  float opacity = u_colorBack.a;
  color = mix(color, ink, shape);
  opacity += shape;
  opacity = clamp(opacity, 0., 1.);

  float grainOverlay = mix(noiseValues.g, noiseValues.b, .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .5 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,Si={dots:0,ink:1,sharp:2},Ci={maxColorCount:6},wi=`#version 300 es
precision mediump float;

in mediump vec2 v_imageUV;
in mediump vec2 v_objectUV;
in mediump vec2 v_responsiveUV;
in mediump vec2 v_responsiveBoxGivenSize;
                                               
out vec4 fragColor;

uniform sampler2D u_image;
uniform float u_shape;
uniform bool u_isImage;

uniform float u_time;
uniform vec4 u_colors[${Ci.maxColorCount}];
uniform float u_colorsCount;
uniform vec4 u_colorBack;
uniform vec4 u_colorInner;
uniform float u_innerDistortion;
uniform float u_outerDistortion;
uniform float u_outerGlow;
uniform float u_innerGlow;
uniform float u_offset;
uniform float u_angle;
uniform float u_size;

${lr}
${ur}

// 9x9 Gaussian blur on R and G channels
vec2 gaussBlur9x9RG(sampler2D tex, vec2 uv, float radius) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = max(radius, 0.0) * texel;
  // Pascal's row 8: sum = 256, 2D norm = 65536
  const float k[9] = float[9](1.0, 8.0, 28.0, 56.0, 70.0, 56.0, 28.0, 8.0, 1.0);
  vec2 sum = vec2(0.0);

  for (int j = -4; j <= 4; ++j) {
    float wy = k[j + 4];
    for (int i = -4; i <= 4; ++i) {
      float w = k[i + 4] * wy;
      vec2 off = vec2(float(i) * r.x, float(j) * r.y);
      sum += w * texture(tex, uv + off).rg;
    }
  }

  return sum / 65536.0;
}

float sst(float a, float b, float x) {
  return smoothstep(a, b, x);
}

void main() {
  float time = u_time;

  float roundness = 0.;
  float imgAlpha = 0.;

  if (u_isImage == true) {
    // Image sampling (UV scaled inward to account for padding)
    vec2 imageUV = v_imageUV;
    imageUV -= .5;
    imageUV *= .95;
    imageUV += .5;

    // Blurred image: x = roundness, y = alpha
    vec2 blurred = gaussBlur9x9RG(u_image, imageUV, 10.);
    roundness = 1. - blurred.x;
    vec2 texelA = 1.0 / vec2(textureSize(u_image, 0));
    const float k3[3] = float[3](1.0, 2.0, 1.0);
    for (int j = -1; j <= 1; ++j) {
      for (int i = -1; i <= 1; ++i) {
        imgAlpha += k3[i + 1] * k3[j + 1] * texture(u_image, imageUV + vec2(float(i) * texelA.x, float(j) * texelA.y)).g;
      }
    }
    imgAlpha /= 16.0;
  } else {
    vec2 uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
    float edge = 0.;

    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * time));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;
    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(time * speed + fi * 1.23) + dir2 * cos(time * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    imgAlpha = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    roundness = 1. - edge;
  }

// Smoke UV setup
  vec2 smokeUV = v_objectUV;
  smokeUV = rotate(smokeUV, u_angle * PI / 180.);
  smokeUV *= mix(4., 1., u_size);

  // Two swirl paths: inner (shape-masked) and outer (free), each with independent distortion
  vec2 innerUV = smokeUV;
  vec2 outerUV = smokeUV;

  // Vertical displacement \u2014 applied independently to inner and outer
  innerUV.y += u_innerDistortion * (1. - sst(0., 1., length(.4 * innerUV)));
  innerUV.y -= .4 * u_innerDistortion;
  innerUV.y += .7 * u_offset * roundness;

  outerUV.y += u_outerDistortion * (1. - sst(0., 1., length(.4 * outerUV)));
  outerUV.y -= .4 * u_outerDistortion;

  float innerSwirl = u_innerDistortion * roundness;
  float outerSwirl = u_outerDistortion;

  for (int i = 1; i < 5; i++) {
    float fi = float(i);

    float stretchIn = max(length(dFdx(innerUV)), length(dFdy(innerUV)));
    float dampenIn = 1. / (1. + stretchIn * 8.);
    float sIn = innerSwirl * dampenIn;
    innerUV.x += sIn / fi * cos(time + fi * 2.9 * innerUV.y);
    innerUV.y += sIn / fi * cos(time + fi * 1.5 * innerUV.x);

    float stretchOut = max(length(dFdx(outerUV)), length(dFdy(outerUV)));
    float dampenOut = 1. / (1. + stretchOut * 8.);
    float sOut = outerSwirl * dampenOut;
    outerUV.x += sOut / fi * cos(time + fi * 2.9 * outerUV.y);
    outerUV.y += sOut / fi * cos(time + fi * 1.5 * outerUV.x);
  }

  // Smoke shapes from swirl fields
  float innerShape = exp(-1.5 * dot(innerUV, innerUV));
  float outerShape = exp(-1.5 * dot(outerUV, outerUV));

  // Visibility masks
  float outerMask = pow(u_outerGlow, 2.) * (1. - imgAlpha);
  float innerMask = (.01 + .99 * u_innerGlow) * imgAlpha;

  innerShape *= innerMask;
  outerShape *= outerMask;

  // Color gradient
  float mixer = (innerShape + outerShape) * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;

  float smokeMask = 0.;
  for (int i = 1; i < ${Ci.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;

    float m = sst(0., 1., clamp(mixer - float(i - 1), 0., 1.));
    if (i == 1) smokeMask = m;

    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  // Compositing (premultiplied alpha, front-to-back)
  vec3 color = gradient.rgb * smokeMask;
  float opacity = gradient.a * smokeMask;

  float innerOpacity = u_colorInner.a * imgAlpha;
  vec3 innerColor = u_colorInner.rgb * innerOpacity;
  color += innerColor * (1.0 - opacity);
  opacity += innerOpacity * (1.0 - opacity);

  vec3 backColor = u_colorBack.rgb * u_colorBack.a;
  color += backColor * (1.0 - opacity);
  opacity += u_colorBack.a * (1.0 - opacity);

  fragColor = vec4(color, opacity);
}
`,Ti={measurePerformance:!1,workingSize:512,iterations:32},Ei={none:0,circle:1,daisy:2,diamond:3,metaballs:4},Di=(e,t,n)=>Math.min(Math.max(e,t),n),Oi=[.5,.5,.5,1],ki=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUCAQMBAf7/AgMD/wID//7+/wT+A/4FAmYIAqIKnw7+//4EAisEAUgGBIYIewkFVhEJjAoFAuEFA8GWAv6T/gz+AzER/25z/wu1/w1nAggL/049BQUC/y39BrckAQQp/wr+AZYNOvx9AQkN/pELUvMFaAZTBAgIRgsO/7cJNQT+YgkLwRELIf5O/wlP/v79/q4IGAYLK4+kAQ1tAv4IdMpc/4xNMBF2/lQN2vTFAws9BLf9/3kJJgsMRF3+HwkLxfv9BVL8BHEN/9gMsg7cA/13/vv9OAqWA0sOofP9TAsIe/4FQqoF4Q/aAgsQwnKQAwa5BP0JW21NqgmY/f3Z/wkI7whGjAr7oAkLrGGf/JH8jg4zAj4R0Qr+xQ8VZv1Y/8O6//wfA/5bAT79/lQ1AGn8egkKdom0BgYOsfjtBAVDBoz9/zG0A238P/tsbQ/+A9rIig/HCEtvIgrM/1lwBWgIlmr62Q5qA5FndnEIXa+PthUMrqiRfw6SAodE/0cQm6UOirP5swuMCrEOjvo/dBVSA/79KvCgSBL9M1E/TwjUag/e//2WdPZ2TQ9ZMvfPxRD7aPpmOFqXSPu3pww5B/wR00wTgVf3y6dXW137ffv3c7GNj/icJG+4xvYQ61++CZOVll8p//uXzgyTKg6m/1L47w3cAY8EI1T7xvgKbkr7UsGBJPNsB7xL2wuvd5z3svmDmgipcGT8jez8oP0R6bNYuVpUxRn9LZVkqIijYxK7K/dZBtjH/71ZT/1myfz52fVm2WBfk0vxUFj+Vfv9/9plbfz3yl6VUl+flbNijrpfpfz5TZSGRKAI15X14pSt4vwQKMHOTQlKifz1sKW6A9u2A7R65waprffGcfeY/8iyUsFh3rn4lGERMUHJolveAs+PBdb5iZFuX8S8SH7Ekfe8Lwy0t5cLwsD3s2TzbHXa/478nLtNQ6NtstW15QvaKgr25FJm4vyXwFlPInIPId79dUr77fmr18BGdLHIS/mGx6dKw64L7v6k32XMJrWl8ELA3C70AAAgAElEQVR42gTBCTyUeQMA4P97zIx3ZjDvHGaMYQxjhhm33BGTY8h95sodkaNkXVGhKGdUri+SIxQ6nG36VUhS0rnZ6tsVfR2ibKlta7/d5wH7kMaTxlOVozEoHgU29/ayNC9YlrZdyVT+Lf/dAsDDc/xfzX+MLBa2LK23goK0aXhCxZ8qIAdXYj+c8zviDOtRkhEtRxNajHWLuCtdcfQqV2mgRlpDD6wJpKpBrGON27qa4nNeQOU8ViU0pZ2eCMN5mWO7bfR17Q9ItpsqgZJNJcJSq6cSWiV4q1zIDMmkqzAdpqT8gI5G3qm3YEyliPPG9kiwF7P99ghNn7zLs9EXFvFdLmlOdKBAp2ZyGTcI4JuBPYrWyGCYwgFwOhTmHeYC0zEDSp1iX3W71cqoW332M++OAYJUrEySVX0c5lzmDgLcAQ1yFVVOgQ5l+j1k6TEBidTUek7OF4T2kDYo2eVGwOrglKyGBXYyBrxFv9ptR16B+BJ0IFCsryJve0ZEuzNjLeEcw/0aK/kyku6JW0BiicnCBFptKAQRRNRrtmUV/YOn6GNMHXddsFf1YZCHMnFWgcyp2gnLOWTTBcVQVvM/FTgJAHl0NWHHzL0eqzuRXTDCEO03DoThV3kezhrtpNqKW0Bb3MSSAJMmmVnLEpexS8JrmYOr4KXz1cUmByty3N/sbEzBSP8tfGSCJ3caYDhymsPdGbwO4HAl/+PYDCZNf+H6kofkNk4N4Zn6NM4y1lJD7Tt2gyklnrR48dgbfHXgd9uzHvpamm3wKhcaLcawXWxL5T97dL7MeW3aZ7NDWksVZyZv8VQyjm94CDU7UjtbedqOCvB2DdE+wFC6a5JcEIgkKRJ8cfTGmW/2jMS5LEWWKiGY0BFaDNQ++2+sOifPMQ7CcHeFx+PPpcbzRoy4IKmVwHg/1842BwoGc2qlRVoNjCF59oXsrcBgVEP4u1GIX7jshIMqqPdbGTRJzMXcyyyiNG5fr5qFrUVntrktt4QdJugkr1kzNJCK1roWpTraix9JVMpZcsxGYsJlGiSyEgOFZzHy6YVlilnicmxUVkdX/PetzMBk92PNJNkIaLhmA30XPCrMuncWxOZK9kpLnqpYOOsLFFmaf2Mk8OH+BbwPH7HBX2KGI0Ns80gleH+Y6k0YZcF0sWgpoJA30BBbG59XaKyBHoxFtc2p9sFvyXqo2v2aRKN+1HLPshCibfZESAESYsLXmz3tT4wNMp0Wali+VPN93JIJaQ0AcXGrNMnSS0YASPcaNh32NhO0sWHKPhrNVpCBzyk4EWR/PnmKE+3s2cDO+YF6OddPNx7G4AIrZBPldw6tcss4bqzb6hBy6ccf3YaBSNRBFELueRFp7DXWNMFVAT9J1LNTntEyEI2gJS64oyKMKvSRrbpPQGE0rEEmHyqCl2oQravq51FwJXG0m/pPdRA6Xp3sSLdwGwNytaLg3g3VEE2eFESy/GijQPwmYPjwJT+bH/ax0dNT0NZAFQxyIqKzET00vUDuJ+T25QGCclaGZiJBxsjtz3YMZ0PPsq751h0ldwbZstMgHfnauk/7n1eZxEmYIPf5wPt0KJvg2V9bcYWGgua/Lvn/xG5q98tPLcGzHaac2+Cbs3niyPtGgfYgBT2OHgxvhGxzApoPxPoCOtUNCXX+ojW0ug7DOuyrOOG5GkWhaAzx6ZyGE8qbCPS1oxzPjcWSrG/ICNaNMKsra8bIlQVvmRQ/FY4WiHhnrVz/VfdOiOu6u66gG3NKogJ/0rGdbC+iPN1pbZ4HQAZODS+mC2z9dNBqSzd6mTQWKq+EI3fXgJQdqfqz6jY6Fbs4sWT/QkaLUOBnMhWRmSdrpTy769BcCql1UOmaqtFbDA9d7qEox8Lpa+TPXX+xm40jrB7EBK1lwu6IMud9xh7NBZCbq6PNN/QdTu0BVa2neF+s8b1dGns5tMGxQIP/+fiY60jZNp9n5D9MLm4NLWO2gXVG4xwDXHeHXMFEAITOVUGJRoBUwOV3miiTEPPzLrwDm74zFsW9zkfCASQvPi2RaF9qJ2HHWMJNxCHzDym6tNfXiEe28ZnjmHVGwlSvfgBo4afqcoTh4NNq7QQ1KrPJW+1uHEK1VvTghGa0DAePo8D6D1NCYgEPY239D/RQSUMxWJsAIi5KEp/3/9LH1wSTwl8/mfekwWyIhAwMPErzWxVSL7sFnFT1NqJ+Zb8hX4cqwyucXdUVkaqNeVL7abNtJV++aASn/d+Fw9qlVwplz4SqpVw5CBK7nq483nxbZ8p/8TtFwr8oD5uhq+lxfovd0x4+MHo1Wv14SJzqBo9Un1KCZ8NWfbA7jLeoMjnCcS8bjtKuxii0+0RPZlLS6NdhNKHeN2NSdCswa+K+aGFUTD9MLW9R7mhPT5i88TZvV5rWtuek07W/vBev9eJznPGkM8FrCZ53AB8+Ig7vKms99yRb5fpyoQssijTwz0i22O+HvjsjyGXpqseb4t4j6YW86PfJF2cnjmy8EKVF8sIomGUdVGBquOIDIlHsrgPkJEzw7KovqHB/kS+NPgs9nG9FkG1MJiA0GNwTyj5dRS0uiWTfSLf7jpL0ioLExajL/OJPkUbA6CIdKjpU6XrSY/6mE5Z1IDBoHX7tGx9fFkJZQPrPIW49pj9oUEykkiolzaein8mBh/C/0eAzYoFXHWJxYZWrv/ayPmcWsjfWyDy8ndnmPTldcJ05MaxOoIHWPcND2SOan44Wc1Oxyk59KHbiXwbrxB3qvAEA+Pd3zc3MkDFmxjG3K4ZxjHHfFXKNI691kyRLjmRCUmTQWnQo6XS8JNFBsTkqiRQpijalraTe1VPbpa1394/4PM+naUIl5jb9OQw4tXHsFyAoD/x8vmlYJu23hfowcTnJOXSMUdKum4IqKUd4HJguRiprd/Etw9K/NJ+UKE+T2v39ms2JRGhtNDxShw6kmZEdsr6fwVSzZUCgj/xK8CaD46MMqjtVmEE0DTPS7yo7so402lkAAr5A9TA8YbapYO+4tLHK+uBAqCsdrmkNB/tSNQxgrZRiBjhVSt904TQbBmEDW36UhZEwZN9TbWh1vtrLVYdkQKayJHgjO5aVftyaOhbtIVFjq0gImWcFJbXqPp+aGTaOzHzPptvWbli/tEz5BHs2WdU4y01sOWIdG+CPWbxSDnQ/KbYgddG1ggtPPUFvXeLdNH2EoslAveJl8GUVaLs6WWsoo3G2Q8KnvSkrNV13rJm4fF2jG2NKE3FMgjWPyCyVVZXDxk0WKQyzIcdGvhovfXwvS237WZN3PvX9Dh50V1CMuemc5AkPWBJzzlg8giqz/M3mICBajNsO3PSuByw3zV51gCTybHlfu/R+zXwVekhzN1C0gZCgqc3x8EUR5Mt8LndPRv3AbLnf2ZMLJ2TZBapthY8hSsIET5/vpH1T7/l1IKZl4pTp2eMVFT8J+1JyElnizM32GmBQTaTDJOwuvPCV3QDonD/6xjwgR6SA92MF+v+Xlo/BDyOZJpkM7QFh73uKxzX9hlDol/x5HVESyPM/HNyF6MwCg866UWXm9Jd2xsjrXyEKgjl11K41nEwzFzjyP0V9T87dStAustB/MkOwBaQoOCNG0+6dfSw2YIL2d+aAFbtewoPIATWJC+6il2nDFDx8Vlxg2a22oZG4My48gnrQEcDxOuE71wz51mkfvC3B8gjF04baNRpg6SGoHIAc+zB2Qqqn9yEzCXfpmpdN2kxdkiMQ/W/X7iT/RzkpBGvlGrx2Bs4pl3s8Akl3mRTsubk3x+CQH47r1ZNgECzf7IP0nV8lRUj1XqsW9+wNI0+oAx/lOGVsHcmalqdAqT/Rb+rp3wthEPxjXI6irxhTZc9U20OHSbYAJCX6MKHYW/P8XRlyam7KHfk5VTu8Tmebd889NmQ7hiuPb6bQu8inM/FOXkO7iEWd9hgyBVEErR+8P+Om2lFcXGp8DGe734LHfS2Pk7/pzSwPvdrkd7/NgVo0V8s5ir4NYME0CzGbOVoiygQKh+vexBN5PkUBa1bYInKhFqBi7f3FP9xdy5wmH5ByEL6YmlsN4H+lvQJBG8TSvwBmhcGUafV9uPlIYlkx7S81YuG+rzfC3Eb07PGLSnvKO1ujlkiGMoliWkYJ6XYpHzhP4z5odeImZqKxZT1hFN+arPz5Dw2e00ODXsBCGrf4jB+45ZT7UrN7VBRUYgrUJx0WkxNyMCSxRCIYwgyqxP8Zv9VC+6aiUgB0eIt08YI0fh2ZFRqSilUuRRvmt5jejdoSCjfaRFSca6RXh9kVAjX/OeC8Fbgdo+Ffx9K0zF8p4sLEk27kG2vWNThL82M/h1BScI2Kr8fOKkYdh+WXxAYVPhsD11sx5SDIEyx5CGwE1cQ3osdYdlEP3/AZPwvH8oc1WdqXU/OM6fdPELtY9JRSNHEepmC3ZWgsLZss2H2qwq00xxA81SAexVdwbL1ektQlJeVMZAGObIMXLK5lkb95dhjMzkc/Lq17iiAPa1uAovfIZZLe/kaNzRCUCr39gjN5YW18DwBEKdQkVriaJc5BKEHi5s3DEMukQIe9bStXDHyciJ0Xv84FSgb6OW6WuhFqtyjdjWTw/jt87MnpqzC9LTP5d6vqhMo3Y4u6dwfNAzL++6ah0G8ahltlcWiZPeGtcG104UJ67f4QMwOqq/jMIFw8leQ9VsbOhuOtjYqx9cXIaiBcng3fueAQPIz7hl+NJ2ltWAECQIyl81LAaRwlbECUyuuxtH/i/nb25kFilIsdm9q0qzIVxbO2/dyBPwsOdwI/A1NIhXctIgDDfKCMOLIhEHXE0TYiDRDEMkzWtQ9aBbO3WRIhTdI8MGpPh+xE3SEvZM3TsaSkSwo8aIp7vcBPSpNIUWc9dx2ihGIUfcCMA6h6H0sgzlYo2LzwzsSBG/vPLUKBRAIDClNo2hylJMPNHUF6/FyCi7vsPpUBU5f1Zryco/9dyqeIEYzdzRL4fhRqyDTW1lv0jlQjuBtfaUaKBPI7Hr/G7RcawKWd8xytCCHq0tGrABFlLf+tFnXvcFRUS9SdsaU+DOI67yy47KiS86yVHnkbvbnhw7R5+QMX6efQ0ueOVdVkKZ5o+0GzRYPc72WXnZ220/EEPvQ2mJs9umccvaJ9JQDlWujkWdH+bCuOl6OBriPwtt/6D57aofIHy0JVbraWRZDo7xiUeThF4JL+APjur4ftrBDOoDbMmJGGRvnl0iv71YPgcPgMSa8PT1ZvFkRgx3zPM6BFff0dTJbRNIHNd92hlQTTuYNVd2W6Pu7Myx+NgVOiFPeih7aHHc/Dn2tVtPIQZTLWhr1BSVJzNpZo72uzoDQW1D6KG7aCPz+193FdMxFtZ/hYE8idJqfsq7jHo6USnTep5tp8D4LWtSPqIJS9+U4cc8Ym8lJ94wuv8uj5DlIsflhtItJUoeNhAnkdEmUMIsLbGt6thjaw5suLGIwXg96aII8ttrigpcKpcdmqmOegLraj5h8AAQj+90zF3YhqscELTAFaWZuUAQMThYiUb/FNHAlDUttdbQAyP0iCmwvBlXj3bwwGkEZxh7Y8fY1TB+UUdVfjDXKAaoLYaWGWCmVzzxQxUQK7wSFq7btNyjcmKx2vXgKNSocDI3W0q3gacABoST1YfO0NC0OZ3VJ2PUAwXIcsOj7fJ6GGGw3hkT0GAMOIASUuHGB1NI2BNAAuhQtFj2vT4FWOBwA8AZQCJQw8v+fPYq97G8tFNng/7Ieg+y8KHAcI5wACkQOUMBG9bgUsiYNGzPHqgpWonRw8Fzw7aDForw4oGUkSvQQ4H18ev2sHhEVc+aMCAykFFh8LmGKQVJKhIlOdALmkAKIDBkf5txoCxwKdUAz0ToWOJaUGAeneA3pOjwFyZwApO7V3akpwjkl8oyOFoQqEjYfUC0cBHVCoAzuMMH42EggBKSJqxhsQWwBEu1doBqQKAktnbzMzwTSck8w4yPZwGjYeKiAjDxSHIz0HE3EjHAUOAk5RLXQHqIsOrysqUAHM8BmGZRVNw6Mi1QOeAQRaLLABABIkQAM0yABTbYCxYAC+HWBJ00xdN0r3YZU7ubbjAi0CrjFHxLMzaNEjFLz+4ScStCg4r358a5kbAtifbaHcTY18qVrMIdEEISdanHgWFdkBnM8/SEkTKfoHaS1aNTmZvNwAflsqqgZLAjBXyAMFyrIpbAVGV6oAKrCcPqAr45KYS/sfi9mObGiSlB0D+wALckOOCGOriDK83ywNfxUfTw5tHzwDGiJaJ4SU9holF5fx3X6qZhsRAQeNjT8E/kvHIKvUY1sAUZAea4Onlj9sE68EoEUB458HLCDmAB8MIw6JSiQAN73SPLEOfGU31KMYEYrTousmiyRtBTQ7ClaT3ANP6uFYKL84ahsIP6ssogAAK2ks+AYESgB6V3UYAypGWgKVqngClwwJ4MMim9fqCAHJWh0U5DQ7OVAdSk8dtdOMDCrNkgSBo/c0qyIuBDEFbkh0SUHxE+47GQEo0sga4YD6zesDkgAXwjKzLArVShiyFFWSYXkS3iSlNQsBUb4kAQKUESNv4bFLCMoBtfxJAAAACsmEpW4PjIM0DDK2ZbpZmBCz6FoZBgXsbtnLKab9EAxgAVmSeUimBgihp8IvMSfWAwTyz2AE0IhEJxVzmmrwNT0PncoCGQXQtXwua50xk3uPDI1DfqKHdklTBVYAioGcInu/CGIX1GcrkE1cTAHQHxBAprY2Ib/AxT4WBxZveQAd5CwBQsaMPgkdmgYbVQpqCW6JAP29BmFQDW+aDAMuXCMvfT9WrGXn00cmaaaXZvgDOV/4nwXQKgfTiEmisC6eemBCMrpfiElpnHRef3auBiVEA0qLWeFLEAUBBa5BCblqmQV/CgAZ1UEFS2EgCvpyuAMpGyc9BVooZsCBADmIoACXkboDAEwGNNmnABevAQcGNhceIVFDux3uWIIEPQAsjr5l1g8ClQpMAwJsOVsOFi0Uvq4cDl8PEVl0AAdaC6mFaVQiDNeeA9ECv47hpTZ7Qk1VRRwbdRax8vFXryTiYolAIwprBlZ0pa+KKl5wBU1lQRMCjFIw0l0YdXYDC6i9MgDUC6kp3+A48fLH86hBDQILLQBhZJ5hWwInm3QIHgYZEWvbV70xWqoFLAPERDLK4HM5/cWVKbX8bAMEE7o/Am2aue5ZF6OcLqqvVu8EC6f8aJbYBZOWXW5xKyBANEqjA6AskyIoAf5MBQGnKBpoPTABR+0/oFUHAU1VAKsOqV5NYgBBHwZZh1rUncwDCp7sSWwDQTYKBQdpCzmIrMgNN5QDEbEvW2QFgmmkKFOns0WDQamWLPHDNVGTniIfRQ5HqfKsg8Uue/ER8pZHd+ebUSOm7KgF63WiTIhrWg6oJYgEMYc0LhWELTvncXdcgScC3S+BnrjLYYsZK1PXQ4GJZugCuQAClGncjGcMCJwGMHx8c7mRwoVCQAMJPQO/MQBbcs68Zz2lDQgs/R85PVvPAzRJwGkC7MYIF/UDBRoHd1GhwYuAEoXDO6sFqIIUr3wOHGmZFK1zH11Bh8iGFWc8HgEoQwXvQRxHJDEUBTF/AplEfWUmWSMJpiEUvAcghlFGEQtETwA/BxQAeDBBt1IYKa4cADo6WpUuAAMg0w4DBroB1hgTiAJ/RN9REX0qcIM3Fb7b2AEEm+mOawIEXgFg1ne8ByE6fvMKVpI3IjdsAQETBiWUmjZGDQhjQTF8FgldAgNRNiACM16kCBXhkWoUp+4SP+hEEghL9k9wZjlmc6scT6cUqAASj5U5aTAbAwOEl3ICCG25JR4ffsEKYfUNKIkoY2UMcAkXDqEhrGQ2b2RrqaXjAx81CAUWeXVrAI4mGDm6bXtoAwYVMi4GSk5PUVtclscH8gIhvXQ9UiUA1unQH3gHBwkwq/5SRAaUD0GYbE0QL2MAiQbzlasuGxcYAwE0vhmvfgAe3CW/9BQfAiZ8Tnxx5COM3BRtf6U+K/tpYA+lJQO+LQPteW4WmCHRYyCQALcpWAIX8w0S5CQPI1seMBmCcEAegczCb/8FJpCzbAWD3H5NorMaMENXbcyM+SqnzMa1KAA9KRESUQB+C5mbhqFe5lVYhRtCGAK/a7AxcRIgu2O0PwDuLixjUViaEgz3FA0zqDci2tBRCSARPgRBM/NkGRlZeCFnHlEiyaQrgIgQyl66REcXNJslVzwimlyANCOKfrhClEyKOdFL7hiibMlFBQQg1jaLPAADCPz3BFXbRsbE1+oiTTkKCl8XnvRMQbUbRUgqR+ICSw/lJnACx3kIAhaIfB8W/BnkAGo4MoPAYEEA7RTnB5Sg3RinVnQRBQYS8wR+CaYzXT07BdYMDs8Gu44ABtULIyJHDl9wejIEAGo6jg0VoCpEOI0/YewzCgIzcEmGYDY8+rhtRfEyZQblSwUeDSI/X7sFhPM8FQbc4nCqKe0BtEIkeVqJcscyajxYOUfpyk2ANDYfAOmZD6zJTRSBDpgL/N5wnUqyClKcYB05MI1UBooALCvUhuAcyf9sJiv8GyJRzX/IQQCyC3ZBSzwcO9sXB4AIlRE2vh0HBpcF5grsAQPnqAA7obcALildiZ92TM224bdMmAwPQINWrPd+RCgHJxgDfwMv0YKRlEBHJnpxkJytDXXpANUtIEdWWmUSBAcJCSPkZZ0GEy8MDKof72cdh+oTQjqaLH0McSmDa3cQnJ6lQ0N/+aitLGabIwgrEzCvmmp/o49p5V0GNlRLPRbu2UehI31oa8rgCQhEB6mYuZpU0KMCA2URBW47L4EFCEEgFz8IC8xlQBN3t0iRJY+oxFKsIMEPAMBxbQZ5ChYjF24zfKVBA5UGcHmAAsQ3Zgwn9mMueQ53L9/rahkcB2PJEpl5AIasYhP/UBsSETYp00xgawArAIQDBEgPegICAY7xP353eEuT/Ty9fCWnKMRFNQQACMlLA661MINMsM2jlS7bJr8GyFo0bmasanYGCDqsgIONKQqkAGeBYAkHowDYzhhEM59lCAFQLOH9SCzwQAl9AQZI8AdUPFsoFXJbAAEoFp1vvyL6CQ8nDsdymYQNX0B+FM0EBi+IBmIX5R0i5ed+S0/eRBB2EQBmGBUDWLTLNyEHJKJOPiJaTmkSDpwQNgYCGQqA1LUHqtAwOYMi/of0CMIHTBipAIYEO2MKkkC1BQPDFD4Ax8nmll9bNkZ7bmwv1wIH6qkQQndEHQYPeXxUrLUnE28cVsctUWoZGjYVKWe9VAI7RFHZnmsoBWVmYD4xTWNtGZ9wFawr+wAASdAIf6sAjAbfucWuRAx4jNliQHDSAII30QYUYqZ4xSGTct2+WT1bCnw+AJcbNXKKSE8ZFR+fPATWLFkeHQcVH4CxT9sDtA1cAFADBk8ZBBaRRpJovyFHBAEoMwPaXYvvOh8bfQxDvxShtHKe4KQeeg/AXhcIJKBkjxwgXgB+PCAtPifdTwusJGdXJibqGQzCPyySkBZJpz9En7iGYiCX83wDeQbt1TdkV6IAAGxhL0wERTmBBzESBRUdFRMctnmVblQLazgBAsJXtHhcHCclXRoeywgpDynhVqyFWAZBYTWCEviIXzaHwMxdN05xDT5FAwDkBC0TbBYFo2ssKCNOTQkodAEG0uYMXix5sMvSBZxfQ3Egc5k+AjwvJQOEN9rFpuYXv4oFPCULWRr5AKprOYWuCATtAAlKBrcGkIICAd6cnwxqtl0lfz/5+hUR6q/mHdbFA68Qz8syO8Gibp8LetHFNF8tRAV0bEYORkJhTRQFxAMdPwUJMicmXlQKBmMsZwKoAMA1DGAAEQEnMhcBtQZgNggLxcHiAoCFFYEMAd91E7K+4vHKXBbOfJrOAG1E1YEkqxGsNwUr0w0pR2MitIQ5BlqXAA1atwMCSgBYnTuUtAxxNg0ApC4fgrhL7D5sQQM+pLcGg2RmHwIZNZPGC/cI+3Dbb8WlBSCJ/uO2txmjCBULLyHgqeRjEBLnACxYAkBvBQE2owNsMXy0kzWqADm6Oh7HbSK2kQ53AIoKAFWwN02IAuhiBIQgP30OBTUCcpQr5T2fJjB+bUd/2g5Go9sMv5CrnFlpfAWsi+mamCLtIz5VFsBrbb4AM42rGna4cyoQ2eMO3z8NN8BeNKCKBQp3jFrOL+zqP9WWCQukQGBjmPsTAChybv4zgnVctaQ+ynQlaFQJtTPSxEAsRLwRAK0pStgs2M0EBQtIBmKomNWHKHU1uDIsAg2kEHvlUc5/AgICJ34VcpskFZHSgGFydLhFCo6nCXFfWXgIGgY6R9CKIkFdswK6euK1SRkYAxdXV1Z+9UWpQQOzIqloZy0FIoAZfxX7FAEasEKHC04pAAbnGP4CkFFkEZniWC3xBD13ADNArAFjkW8nICQKAOvmzBI8y+QwMBUgcrY0WJdtSxl0hFiiptgP3hDTlmpdVwDTCwZ0BDrZS0eTQt5GALQLQQJcPsQNOkguZZwCIMTEeadTAyR+ijoz4Qo4VzZZAAAlkSVs6VUcZJepUq0Svzx14BNIbWLpMC7XFJGvfVpoWr+cAI4twmWi2I9wqgwAaiwDPtB9E7z2SlYSA4hvaKQ1nAZ/MnZ2kRZ5P60FIq16lCYDVwVsKAx1BqPRgzsOZvKTPIoBn9kCKTDuDtMFqtp2nRYWNRw6ZBc0MvZ2DYu0CLhiWBeCK9jSZwBQ2CySAafnVwKo3rdJXGWGUQv5gHlWsQQUAFUmWXi4AQNX/oqvEnkEUKG6tlZ9QkzDT1jLpmR9fWCg4wByAi0AWeNCBgYJ12ItvmMCNwrVZkYzcU5GBs8aT0XcqZ04IN6FTgQuL9dZDbIa1W0ER64dUb07oB0eE80fZ8/do84xBFGBcwGbppkJq530TW9GuGMsjLJLNAWrBU0KAKYedUoDH3QB0iGTAE7OOxuOVL8BIAMPUxKLA7HUBjHBHEQvFD87HYE40ZqAAXEF3+EI/FQAACAASURBVAA5VAcYSqwlTR4TFY8AFHwtHQXQhYMABwj490xjbrxCQRY1FA0MBmQdfy8KK5JQK5jIhiNb0AgjOAP7zB0TqcsihQUwRXSdVE4CD0RhWQx6EEYLhhYAeoE3P05iEwbgIiTEHEUiq1SOJcmGFl7Xv0dlavCgAliw5QDiemOUAuaucf5lhTXGhc5AoiqoZFu0WZDr+oQYAoJy3YAB2FsNETiWuCXLoc1tIQasfWYAMgQUTgYARFslHwpiRDUs1hBRoB0bQ7+s0NKTRd1E/RCeHiCeUK9JN5EAdJfznAEq8htHb5ADuUQCf8tY/UgQKaRCDSYrhAiA7UateS9WPksK2cYTfUrVpCTmA0SUrFBkXh0Am/veTf7P7Lb4DU8aKbKXz0zdwW3XchzRimAwkx59hHaKO2GnMbYaFW0YBYkNxWp1SEXiNNCm5g3DNIMgtw+ShZNpOpYq/Q8AswmkIiOEHX99N+JMMAC+JKYI7yrXvJWhZgcNbtz2wQA+bk7APAHTMxnOjSWcrcbzX+OZWahITJEaSlVq6X0QGs2kD7jsDlU8ixd3KQOKAgHdAVMANmNMOIuMjEusSjd7Aw4HHBUmlmJgCkxWYk4Veq5jVQ9CFDiuddoVjHF4dDYARDwtTkEhkSROFdWSdDsWaCj4BExuaA8OTiCxBNJIORyAAoMOTk1iT5wDLiZJBrs7VV4uAKKQCxESEKAfymPGhzOP0pVhBGA8ol5iCxpyOoZZFCJJRRXFTm8sA7PfEnuAEgFx0kBskwNQZhyzMLaesB4SdgBuQAKmhMetRhYAICQAP7EL9S9J8rk7xDAYgIxMIlDWBG0DAW8BYAdGkayHGwwrAi4b/r5sA0rCezgdXjtnijaFR5eSBAz/aVQ+mggCDxmYem6hDQtN369pqjuUEgAYD0BSUCT2CaA0BkkSSiDM6jOEQDOFjTDiIQAVX1TPI7bMwK6hF1sFT16bBoFTnVAAFcgndTYODzc/52xpHRZyNxDDkQBPhGMNhklGAbYDJLs3NFGGnC8lCpbuAl06ZWbRM0QQJgfnBAVVCyqR6L9SLIHQDAVNGpYiAIc1AJk8AIAA0TfDOzNArLrhf7hEtVMnMAEBCT81VCmAL7wJ+AKFpQS0Xx0tbQDcQgEJZzcdBW4AOQB2yAAFEeGWwhWAatIHABBbsCfCPlQAikYBjxdYEHgjNAUNL8OWdGkAXgMfOQDJ05gDZyTItT4pIibKF7+xXSp4Shfkxy9Vylsra8P4h50uKHAGw0KZJbkH2GZs1xvMPI3ddzg1sNxcsWHdA6IsCN0GeRJtVDCuDUWwaQAlQj0Ad2Ca6wMJA8+cfEoKOwP0EoXGHg6EdQUZaed7cUveOVMeswMfGy++GDwFsSsb6S9ehSIqVZF71JbZh6LBFLIRDiAACUrQGh3yN1sIIYIkUOeTKl1MTeQYCiMBFATQgh+ynTsCSAOav9AxNUF/AClE0gY7BIsUJiVNABBFJRT2FwgAslkF4mtM9lMDI6AGHrsDBEMhcPQBAnwmdg8o7YkIzxJYkJ77A35vQ2M8AOfeGivv6N1CumQj+RUGPQOXLeEAqgIp1Ig6o3nGdRl8PTUJyQFDEAJ/KNdr3gkIBywcNHDoiAfNW0CHClyw+AbbsU+ruOwbBAncmpU0WePmFgtJd4UAHD+zLgBSQQAugirUKWA8ERwyAjfDPLchDh3EdJRQgbHANWS4bDX2QWzJ2mJZh18YFTBxVgJsBe9gFSoE7VZXKLlzBo5G6q7l1hLxmQMMA6MLWH9PJUb3QgGZC4SBAx0BINreFj822QBjNwMgk00EK/kAtPUvcwxhc8cPRQBSsLgAbRwSGiMBLa5gDN0OekNWCnc1aV9sqeReuiznCC+PLMjJAh4xhq9iAwgOI3IvvyBg2TibaC5IlpM0Lkp8BdcGL9/LB3D9u3oJVwBZDSkkPQIITsjVS5NtqzukBoSUItLaLUeGQlRph9bxmRwAOCK8upGsTd/aP9AhFkwjBnErDQYAAT28k+5LG8IaPTLcvCciEHIbDW8PS3F7ZABuCV2xjgQ+9MHk5jktIvwbTCddCpWOGVBD4QIOfa+MURkdX70FKoRNAA08ttApUKfTq7tHm6YZAJYNRtEWHxgn4AKWIzQrKipAgSK8tk9aOQpky24DUkQGZnVQoRUBP0NDRI/UwgIAMfAoEBSLZDEgLRO1Br6SV38EF7rXIx/JAQ8E3EALBQcSgN0AFFDXMM+Lcw4EFpWDb2knRW/mRYYdfAUdfQLwWhkUCJQyms1ksgTMpHhbAHil+gEBS7anHDTwiRpCrmULHlgkaWl2VL1GDsrg1apysgeLQcKytiGpZUOcDMqz7zAAQwIiuAc+MjjuBK+JmoanK95NcXD4JyZd2Nh5dmU8IRLLDQdeCTYLvtBn6g+P6dw9JTYeVpoGi4ogu1N/K1HYkQC/YBpZAtrEZABeIfY1qIPPzFLFqQ4DDANRwxLNOQFjDca2WfiWsYh/pDePNz8H8AwduiJsSFkTWQRoen8WGw4Ahh81nyQBP5AGhR0E26ZwQ6DHcrwHTrJhA8yogTgLH9PiAFsgFGUJZgB2SLsyWzN9ASa5CB0yXwEJCam2WKEPNT54YlMBn+0OZwAdDwgEA9SnqxNDFoEDQT0NGaOFEHRADFm8F23JWUQQGhMCArWvLhNCfHChBBcNC6QNK40boQEAO+lRHA2CUxLhZyStpJ7pkDc/Cj5S9VMYHgC1PkR/KyVZmwEdKqJACDEcjSYbdxq+AKHVJUhxUMLPdHUdbAACCP33H9UAA8AELkYySGs1NZFvoAsnLu86CBTGMDtrpS3xOIHVHOVVSwUjxA3XFS3diDMPLbOzB9k7Wc9QwVJ5rhsB6E8S1AAGLXom2BIGMhblrl1bFXIYjQSmRiUtBVEKRbNsx4GKS0NiJC+HPpi9LQ76mjyf6OVwqBcGUmYEXgMTd2A6HWqzv7eGEQxBjkcBU/NVLCeshKpDLHJlq2tKGXeSSwFCJS0yAwEd0QEQYULiWW5o1uMgCv2UbVQVInoFKCv7FzYEEgB+31t4HjUs6mheCcGtRwxkMsMlBBHf1b0ADh8dZLtXOJM2kDUSjgxbWZmpAjISVgRbC4sCJugEjdR31gAp7hMAnkgTM5YXSQOZPGsHOAKwefkwknwPEBMqfn0NhJUI15ICbM0TWmmseAWuYeBQiaoWCRAA1AKbxAo92wPXEUQw7wDfnSIrnG4CGV3YXaBnPavwW4OXApQBfZxDwQ1iC6MENCEJAOKZqDFUARg48iFDTDLhNwWjqH4WHAE7PALJFQV7EwMBmYl4Mx4WDqsCAVgA3AQC/Ncp2LMA2aotBnxeNApPDKe9EVSiGS9JMEtKwJUIlwMUDac5oIEPRnapEikLMwAhzQUgJ3QiA/CiOgqWe23hYA0ZAglKDSQZOAEOC72KBJoavjfOPF3IWRciaEYtEzhLKwC2bklkNZgpRwI6WBtPAw+npsDsD6wU0TJ18JCbBy4aNIHPCstFAhRbFzkDOiYSlyULWoWJuUmHMaMPQhe5B3kbXkVL5bZfW0cOMzb+WAAAkGLfDwBkZAAVpGI4umrpsOchSIGKAzcBIjSXoBNokAlDLAFxFpsCbPTQTw5xswgtiyR9QVUGBDzWTAaVDqEAbCsATiO9za1IUezkU2NfcW/LHFaJ0Z8ACSpJVAV9AnL57hOjBs+jBFaPVyvne8dqLUfbF8GOEKVCDVsBLgxdJgBoClkAqUMmZS9cZrUUCgko/DTSHhYGPC75Dm1CIhnzGV44TgJ57DncEMTOEBWMAIEzFCASqi8BMQDtz2WwAChwVFEFYF5qEVJU837Uyx7fUGxE1YBGgu1N0nEsGiYBARCJGiv7nw4CCctmfyoGrnruhwzdwJUyHQMCWypq8T6caAAE20uVHZAlymbvOgSEAwDthEIcfAVjEQBvBRkXkhxrAm2ikI8RNt45FNuOoFokRRdegaaQOtexKJK1HiUAJWEDJgZz22IINjqFaReWG/QEzfsCRBPGyDdYRgcCrzIksE9ZRSXiAdKtH2VYAuzuqgMa3rADi5QGUH9vDzLeOQIEWwAJV4ubXVPDh5EkEzIVBjBkdMcxmAdVxQcDjxzkZr7HeTUzAQ3p9AaLaZGNHWb007EKkvOzc+9NfzgpIllL5myLFbQLygM4XgYF1J2Tvk0uFwIOEtlkSmFFA/yLJ80NAoMAXcbeHgxwl1jcouxbixCh2lPHTFx3qtaG2fp20wrwOgAL5yMrCgRJvQQtg38vXwf6doIW284PZBpHpsBJPzedw5AHCAEMS7YabRQzbkW6L7ndADPqNCkhAZiLdAMYfiZIPOYjGAwGD9Y6vGuiItqzLShPPJ6nT1V7ZoqepyOwL/dvFVxifBwAiHaMARYTQUxgAgACKxRvBh4kjk4AAwUq3gAAEeZC8yAMw5i22C0+GDtgBDwBXg98AwkROUA8S8YCBF903leViZjUa90cdTEOBrwDXHw1Bg8SIAD9EsSgIQwFDEcasGfBcl/3AGhtMD6YjLVaO7gLSl0BA32wU8o5AecqKYOtbh4BdQNIjo0geknWgXWS7wGzHxZ0A3NqHQEBcwCtNqlyt+c0AOkASngGAApBSYNSsGARwxoqz0NA/ggLh2AmkXEAlkauySUDu3QbBNpQUzkdYm+uYokbAjUmTZkCjHh5Zg4uAQ1OY2Z3mUl9vCwNoKYnFjSlbmiP4RmPUKK7eZ0DPgnn0ZqDmJDuA98yAQ+aL1PCSm9NBjcyE3BMmwCmEOyvBOilD8z03gZJS04dEK5yxwBKUnLULgA795xy0+1MXWEPe0MSTWdOSllnH4JfHofxViJmgMVAnbIMYSY+wAUMGScQ1g8AYqARnwEBAwBI5pMFeFOj84MHBNMeuweIjvkDExPKh9omslGCSVgAiN7YEB44Qpp2LiBjPdarEADOBIQdaOdMeA1XMJ8TpvwQ2tGMe61kiAcdEAoCrtBNJ2/Rhs5WfILCBiM/lIG64B5EVH5MfuQS8x03Za2ACu7cEw7NMQ8fIgA9EhYzJYmjV4svwhdqDI+guRTTWvBAXB1UdpDG1QI4DIY3NMjq48cHAg/PbAeQEFlY8rE5ClIACwBx5RxSJp0jQxFhGENVSjUQBQw2iMOKTHxkGjWS9SnbArELcrY0rwyMZT8ShykQV+FwUJMuUgaIWSeyRBZdbRACRCCiiSAml2AEGGImDUh7HGwsHG5KaxaGKsADQ18qC6KJsaYtDUsAATMPnDFfNa8EAH09YH2HsN5GykhFWAxNkwAGCSh0Vh/nMSOlhmUY7RVMBADQmDc6QPpXOVQoBbAMOyECuunUyxPgsQ0ETnBwRXQBAD4Z9IYX3tRMpbUBBbEOtydiCAIYue+9ssJjHgR/2AeVIIGbAmlLYUymQyRwZQTXBlCWmgNl48hVM7QSIL0CdJNSu2lFnk8fiZUZPRFODQCEH0ExjxJKSHJHTWlhSvJmIZZqczI+ADBfRQ6D4Q78UtkAAwsBw2I4MWsZlxhDLwD/BwD4WAUGCne4shiGGyeronSUAQXP5UkAOZ+BfwIRRANQS2eyNSEDcP67cPQAAA5dPwTl5Eg5FHSFGiQZF6BZBxttv2GoyEQFB0xSNBUW/EssG1aRABX0L0oXTk9w9P/nm+ZVMmhBQhcIGxhYOHHoHwNzJldxFQB0KHapYgBDkY+WKIQBBS3cJQYOvmYAR0qKAE8GApuhVQDTKawrE0mPBQG0gt28GoU0YHBDwfqHHhjbkDpoSWVWA6kEs0e1jAIvmkyegpM6G1IBXUzELwUOM2kAISwmADRsQ0MwYxeYL/A6RQABzliwKBgSK4MIxgogDTzGA86dDMa+XUMCLkazOuVDGApvbCfg4CQac2iJU8SvkQMoMrD+PQICV+oinEEdBm0iJT4MyAhTZgFYEnkWnG9xn0y74ilvXe25Jbli4UIJQAJDDjXiA4QDDSiVdiMi/rXIbh7VAPAPxA4UU/bFj9kDQwQKkZtHAlmRGwAt1n4c5uKmg4kORgd5WBq/V17bNiFuAu4AXIauVmwyb1tJ3gLMkljMvYJpCGEM79RBkhofAX06o1gaLwLwTDaMDQEFuzw6UlE9ASVc4VhyijlwMBC8q5TXBwY+MsgHe0VJoAJjlgAUvh8zAAcyNgUYl0e7u2JdGR5GbEOPBQRZBIQBZnrZAvJGzYKVQg8nTwskXgRp1hvgBRwEizz0V35fMqtosBADNwJ5EsGJBAriES8rADV+1ohgBwcBL3YBFAiISgIAAaiaHtpdDgh2Oj1Dg8G1gzdxdGkYQwW7CQCTNDW1GGtT5qJptqfhAAM2bhqP/YwZCWvDU8wVZmt9qQ2yMo6+KHLZ/dslAgWy5BanAIcBnb5hcjI7WBZ6AqTuASP9LHZRiHh0WQ1dJzgqMXGNqSWF7duSohXEqt3EAck4ZwUVVX45ChZEIBYeFnpOC5wPIwA/Gt0cIcKsoqTJPZ1UTRMBWA9OMqWcK8/YAIvfnzBhEwXifwgthgYgEecXBAsQZSVfVQ0ER3w4TgE8iE6ZEIwoFTYzUwGwt2El03Wp4Q2IALsOJnVYBGZdKCUBwQAqAFqlQEZJRbtrwqcgXlIIUx2NcEShuvIBbgq0XVCNBAKhUT4JQB/OBgqIf3FzY6V7OyKAOAoBASg2GU9GAA4AfSMKojG0m5gyqAe3MXWTUgDAAgxFtBcbx3gCmAYBRCEIaWdBmXYDgQdPhQMSeVkjt+IFTuC6Ij8N8+cIOhMxFvN0DJU7rf6eCTpJ9QNR1LoQQQMgEY26fApxVC5HOGr9sKU9GORpdSRjAW4rUEs3GgRFo9IJvYmKIxn3EuAwADMMjc+dCqyePSGpQbkhEXoVHwb9SJ5eMR3zbXZ4JW2BqZVw2l7pIXRrAhSAEAVRS84yK4rNO2l2wNVcCFW7FQwbADpohDhH+ALV5AgD4rQpGReMQ9tkmLIzbxPPHStlIdXCbS1hCEj4yktcH8cO9QspuSFFc2sfFMjhw8WBfwH4AL00SwUDOthSQB54xEsG0i0ACE7WuddaHtLJZxcCSUEYrDRF7xRceFE3AC2x0k8HnShj+8mn1AICDQvHh7yrNLLpdSMBOF7XG0MIKTpg3XePZSgxj4EUDQW6ERczAmkHACMqRzp7jwLBHE1J+9rgGE0jMKR9eAC3iUeONakBJAvMALJ5jyVnHDpo4HcqIQQqJDKFNBhoGQpAAb6m34tpMCwA0p2et1pv9wIkr2yOkSgpxQLKc1IqDDsWJgQWiFnICOdG5B2pQ1FQEqBk2k0FSQ8oLkFGe38tCE61lDAABt0AMaACES7m5uDMWkOQJp0/Hg41dp5mhRNyv+xrYjkRExpXAACXB7ToUYIOVBcRGpltVbe8OYgfXFsByY4hGhkpkyoB7hcF6K0uvEqfZ3griUwBA1c/lD66CQFPcuK8UwRxQHrjeyZEa4w1vRQqYTgxzxgQEhpdGRUUHRNnf4vqR4ObYGCWlrtDMwhWI0ZhExohPDYcfbYDowruYrcukRU+j0IGABZOTatOWA6DbwRHWnODFRc4PImVa24k7ATGb0kbQpcSsL4YFbkgARWhBHl6vFpBPRSyVmOdTmIXefPQCLgLUWUpNV+MAwdW3p10p0eu5BxC504BVIXy9c4JWFeJA2BjBxPZAnIBVQAZhQU1ADH4DjnMGeNHLOhzGY0L6yQtbYoXAJyb6u1PF7UZ5yAt4JwGYldYBd0VembYLQBnVTpvhSA/ckID5KwqDCHKBp0YAiR0oOcfXFD5GQY+oUJH5JqHAR8UBB9QqIcTPwQDE/cukJsaOVIbAuUBaxEVKvd3i2+Q8BAfV8nGOwKY/DtMAgkLMOnoHpCTARcGXgIUhPyYDnVrAExDQSJ1gGIMGgtYAytm5mAuUxtoB58TXTtv6wUAa0NdRSmbkMUEc15QPzEmWRQCSiw5cA1VoRQfWtxc+T0F03kr1T9b7QirrbwAXiw9TpIQLwMRz1BPIlLVz2C9KLQez0US9jMGnUkwCDWWKKWkjQlmXDZjQFxL7nsoey5VQwonAARTHV+7T2o2FlIjAghKc4pLVFWlP5YBH+iWBrccMUpWvxfLgF2Uc3GlpxBgKSA1C26DD6lECOuPBZ1vBhzxaoJkOfOGBXEfH4SpqLmcqQgHLqpA2FJvoLGFBTTtEVwPgIAWD5czgF1YKwbKK0omhid9pnsG3sdBFgMCnWEwrAt/AAxsDcl3PWYuBXYZt/VAEHZFRyu9ERMlZA7aGdcCBgAJCPb3D2AtAxKrHCcRQEh3PMxxSgZzhpKkABTYngRSabRPLwAEwOdIZ7q4CXUDSQBW4y0NAs3GAJEzApI+A3ch8L5wJxDHl31utHwtomsfuOkYFHczQFQ9YpEkspI90XQaQREGQDYArfYUTT1n+WnEVRlkMK0YFEehewNFXB9Qf7NnPPRJozTB8ggFWhokACEeqsVTFD4NFOtfQSlGkYutE1BndA5zBjM1zCAsKWfDYBYCKsZanqqU8mgF3ANrEAI/HOsHDjgi8oycUYmlahbDEym+E2RZoJ7CuZQvFIZ+Jo+CNsk+dvgAXSsCovgCRS0tyH+aFYaA2V8ApQLIFAW2ZfgiAlIEuwIO4Ap2I1xnL9wAdig3UgIGf6YE6DbBBHsBdxUYPHjSAHNWkIRV4yToTJo9fHKeIa32X0luKS0KMxP3Ko1eRBJCWkIMxCT0QmGFVau4JCE8fyjMBrtGXRFQD0ey3ylvRggAFQMds0jrARM9SsnGPBPwES6Nxm00yQBywllTABaqCdwPMUoO5Qd85Skqddq+OgvwnB0cAXVO92EWHA4IdbRkNjHKtgz1P9igRVKWJTcjwZrR8wLfBG0HCOFOoHq8bxdTQkAxKg8nE1DGHtA3kQgro0sY9PUYwjnZqgN5FQeHiEMAFRkElNIELGVYpCzs7psuagceOx6VnFMNPy/MDQe9BwEqPVUNBAhc0tpXAFewAxZ+AKsGSriss+52JIsIOj6JVHuNtiQnblFpaV8ED8LHvw4EmBgHL1UP5gNrBQ0SQdz+AxUBqnMDNuBtmgbCMweoGxIq9AbOQIyvOd0DVEUOXzQAcJCuFF52j5Jz5aHRQ5YwMny8QQJcFYgAF1sGkRMQBTDDzDdfK4SKytaorCm44gSOswA1lc1IVWqFuh+6x3LnBSUAE2QIWigFHb3YC1BVDwWdb4eIFzrNRimjqSKpwzltIIWEdI49Mh06XQYKBw41oWjUAHwgEoKXEKItKQEDAAsANWhxAN8K2QR2g1UjAts3mDkh2jA/LHK7BM5OEQ6oBqLLHj0aA3U3MX2Kb1wEBNIHNul/ogAnOGEERQWVVxvZA01dshtiBA9sUJqjJEs0APzrxA5TLhld+ImbOIIBSAJ5CsWQ9nwDE4EAmwYAFsoF28p6D1uFMYMFfgYtE6qkNwAATiwqvE9QADoAAQBqF4wG3QAumBeeN0klpFMCJGmFA9QrBAiYUiAsAFvNnm/HCXOBHKIZXyFlQikDC34xeT4IqQES+kh8NAMYAUEAvgB0HiVoCiMIbI4DGSYNQndiOymW01MRHDwWzs/FkmNBosBbZlMJj0LSAQJUiguvPQAHSxcATgAEbkceKlAmA966PQGGvYaul2NcZG64cOS55stIjxIVAZyuYlwBAVoJLrV6cSQeOwLpDQQb3gMFBUOMOKCAHgTAJd/0fsZGRCZz9eoBhQZ9Lx+BmQgjUNWgNZEbkzIzJz7Kn22XMHV5p49UihqXk6EAeqS6kDqzQcAcjElhAwsAIw4bkjXuBXHmkwJFAT8NLgCQSA9fAmoWAII8yBinKIFM5qNFDVITCBY3q1P2BKNnIPIJoA1wSGtOVkMVL0wuW3qGmRItFEJdIwMNRwI4VlZyFA5ntqYu3bk8FuzvX73m+0e8MiSObrkfXIS3PqwgW30csgKb+sNWNAqkAUAHHBcAHisPF8KyNVwdjib4CQEEqB8BBk3RmxoOcAYqEdnBQnikHk+GCzazSTmuSQXIjV1IPVWWBJEz61wSEA0AQA89r+DVIWexHfEtWzwaxWhXkAxh4jFolqsEVsMROEk9ijfAAR5jTmj6exsBtYRyIiMoZ/4tVhPlPMTKWBfLMQIxUwEAmQxJGCMFSwPjJwj2GUxYFhcWg5u0ntEASB9dCwNnhlcp7wADVo2t9ZEqG8wJWw3bW4IBpoWxDiGWcPxTjgYaN78JGGW0oA4BFsFpqTAKAAQ80REueg8DlcPFnx1jXTAK5NnxwgEb60cNmUb1gDo4IDUGyQgCAW8uBE8AClg+kQEACiJyVT5uW8RBG87AFApFlOwHAicmhoIYJ5YKAQzVZCfCeuuSnEUSeZckEiordDgJUX3LlPazKnfNjiIeqMxVZAZZADTEEkZ8EXGL+gFGwrjaTHyCEb//H6AY7NQKJgsWLAEZPFuLZnZGRnQtp1EuJRVuJTGdca2pHwCthB51+ZgAuXp+lRMyJ2SAgrYB6m0Q+/4YDM6aKGi/fSuVCQVuWtMBKztbqWEoa85PVdo7zihmsFxiXjnaYQAUn5bbKOh6s08RBhjdaU82QD8htgUalV8OGmIHAFTgUJyiMgTgxg8fON4ZAaBIgnxJeaqd1gRvBBMITAdGJWRKWx0lAVHR0j4AdvYAdQNaQJUDRHlHml5cSLMjaYxAqHmbAaTZAZcZ5s6JLJGip7sCXaw2LCRnK1YMO4sFRAgVWgfXMfc+zt038JeI6lkCDQU5yCGeZRBOA9aMG3e0AZ7cmQmKjgeCWvmJnn7yAwY8uoEEL1wLBADizps1VFIzm5UYtBHFT5Qy46UAsQTBZCwPgljNPekNGEwdic0FR1JmP5AAhShTl4MCWwq2By1NKlUqzQQGAidkywDoSgYGtQ8JRdefJLqPjw5YsD85GiBWlRsDZ2GzVDkCvRSyUzIq16YUXEBLd2kGn+rLIwAAAK1JREFUf54DD3C0WwmGPi9OSjpCA0A7fFwUZTm0ktDZLl5VXmbFDDQACl7+QSry5QCM2bfNC+WAFj1LAzLsiwEBaQCW/1EGcMN/tG8OViQtylulBUxRADYm5SEBRAcAARkeMC5iRNgZhOoxnz4oHApa6gD3ASdbmF188wxpDZVKUL4RUhTSSRvrQAZLDcgauImabgJzkXIaALePAXot1j6Bdwe3AXoQAnXMFVuCApGWbjuRvTu7AAAAAElFTkSuQmCC`})))()}var ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,L,Gi;function Ki(){return(Ki=t((()=>{mt(),ji=e=>{let t=e=>typeof e.default<`u`?e.default:e;switch(e){case`react`:return t(be);default:return console.error(`module "`+e+`" not found`),null}},Mi=Object.create,Ni=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyNames,Ii=Object.getPrototypeOf,Li=Object.prototype.hasOwnProperty,Ri=(e=>typeof ji<`u`?ji:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof ji<`u`?ji:e)[t]}):e)(function(e){if(typeof ji<`u`)return ji.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),zi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Bi=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of Fi(t))!Li.call(e,i)&&i!==n&&Ni(e,i,{get:()=>t[i],enumerable:!(r=Pi(t,i))||r.enumerable});return e},Vi=(e,t,n)=>(n=e==null?{}:Mi(Ii(e)),Bi(t||!e||!e.__esModule?Ni(n,`default`,{value:e,enumerable:!0}):n,e)),Hi=zi(e=>{var t=Ri(`react`),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s}),Ui=Vi(zi((e,t)=>{t.exports=Hi()})()),{Fragment:Wi,jsx:L,jsxs:Gi}=Ui,Ui.default})))()}
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.min.js:
(**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
function qi(e){let t=ct(void 0),n=Ze(t=>{let n=e.map(e=>{if(e!=null){if(typeof e==`function`){let n=e,r=n(t);return typeof r==`function`?r:()=>{n(null)}}return e.current=t,()=>{e.current=null}}});return()=>{n.forEach(e=>e?.())}},e);return ot(()=>e.every(e=>e==null)?null:e=>{t.current&&=(t.current(),void 0),e!=null&&(t.current=n(e))},e)}function Ji(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;let t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}async function Yi(e){let t={},n=[],r=e=>{try{return e.startsWith(`/`)||new URL(e),!0}catch{return!1}},i=e=>{try{return!e.startsWith(`/`)&&new URL(e,s.location.origin).origin!==s.location.origin}catch{return!1}};return Object.entries(e).forEach(([e,a])=>{if(typeof a==`string`){let o=a||`data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`;if(!r(o)){console.warn(`Uniform "${e}" has invalid URL "${o}". Skipping image loading.`);return}let s=new Promise((n,r)=>{let a=new Image;i(o)&&(a.crossOrigin=`anonymous`),a.onload=()=>{Ji(a),t[e]=a,n()},a.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${o}`),r()},a.src=o});n.push(s)}else if(a instanceof HTMLImageElement){let r=a.decode().then(()=>{Ji(a),t[e]=a});n.push(r)}else t[e]=a}),await Promise.all(n),t}function Xi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(n===`colors`){let n=Array.isArray(e.colors),r=Array.isArray(t.colors);if(!n||!r){if(Object.is(e.colors,t.colors)===!1)return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,n)=>e===t.colors?.[n]))return!1}else if(Object.is(e[n],t[n])===!1)return!1;return!0}function Zi(e,t){if(e===t)return!0;if(!e||!t)return!1;let n=e.length;if(t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Qi(e,t=null){t===null&&(t=[e]);for(let e of xa)if(Zi(t,e.keys)){if(Object.prototype.hasOwnProperty.call(e,`error`))throw e.error;if(Object.prototype.hasOwnProperty.call(e,`response`))return e.response;throw e.promise}let n={keys:t,promise:(ba(e)?e:e(...t)).then(e=>{n.response=e}).catch(e=>n.error=e)};throw xa.push(n),n.promise}var R,z,$i,B,V,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,H,ga,U,W,G,K,_a,va,q,ya,ba,xa,Sa,J,Ca,wa,Ta,Ea,Y,Da,Oa;function ka(){return(ka=t((()=>{i(),mt(),Ai(),Ki(),R=Ke(function({fragmentShader:e,uniforms:t,webGlContextAttributes:n,speed:r=0,frame:i=0,width:a,height:o,minPixelRatio:s,maxPixelCount:c,mipmaps:l,style:u,...d},f){let[p,m]=lt(!1),h=ct(null),g=ct(null),_=ct(n);tt(()=>((async()=>{let n=await Yi(t);h.current&&!g.current&&(g.current=new sr(h.current,e,n,_.current,r,i,s,c,l),m(!0))})(),()=>{g.current?.dispose(),g.current=null}),[e]),tt(()=>{let e=!1;return(async()=>{let n=await Yi(t);e||g.current?.setUniforms(n)})(),()=>{e=!0}},[t,p]),tt(()=>{g.current?.setSpeed(r)},[r,p]),tt(()=>{g.current?.setMaxPixelCount(c)},[c,p]),tt(()=>{g.current?.setMinPixelRatio(s)},[s,p]),tt(()=>{g.current?.setFrame(i)},[i,p]);let v=qi([h,f]);return L(`div`,{ref:v,style:a!==void 0||o!==void 0?{width:typeof a==`string`&&isNaN(+a)===!1?+a:a,height:typeof o==`string`&&isNaN(+o)===!1?+o:o,...u}:u,...d})}),R.displayName=`ShaderMount`,z={name:`Default`,params:{...P,speed:1,frame:0,colors:[`#e0eaff`,`#241d9a`,`#f75092`,`#9f50d3`],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}},{...P},{...P},{...P},$i=j(function({speed:e=z.params.speed,frame:t=z.params.frame,colors:n=z.params.colors,distortion:r=z.params.distortion,swirl:i=z.params.swirl,grainMixer:a=z.params.grainMixer,grainOverlay:o=z.params.grainOverlay,fit:s=z.params.fit,rotation:c=z.params.rotation,scale:l=z.params.scale,originX:u=z.params.originX,originY:d=z.params.originY,offsetX:f=z.params.offsetX,offsetY:p=z.params.offsetY,worldWidth:m=z.params.worldWidth,worldHeight:h=z.params.worldHeight,...g}){let _={u_colors:n.map(N),u_colorsCount:n.length,u_distortion:r,u_swirl:i,u_grainMixer:a,u_grainOverlay:o,u_fit:I[s],u_rotation:c,u_scale:l,u_offsetX:f,u_offsetY:p,u_originX:u,u_originY:d,u_worldWidth:m,u_worldHeight:h};return L(R,{...g,speed:e,frame:t,fragmentShader:yr,uniforms:_})},Xi),B={name:`Default`,params:{...P,speed:.5,frame:0,colorBack:`#000000`,colors:[`#ffffff`],noiseScale:3,noiseIterations:8,radius:.25,thickness:.65,innerShape:.7,scale:.8}},{...P},{...P},{...P},j(function({speed:e=B.params.speed,frame:t=B.params.frame,colorBack:n=B.params.colorBack,colors:r=B.params.colors,noiseScale:i=B.params.noiseScale,thickness:a=B.params.thickness,radius:o=B.params.radius,innerShape:s=B.params.innerShape,noiseIterations:c=B.params.noiseIterations,fit:l=B.params.fit,scale:u=B.params.scale,rotation:d=B.params.rotation,originX:f=B.params.originX,originY:p=B.params.originY,offsetX:m=B.params.offsetX,offsetY:h=B.params.offsetY,worldWidth:g=B.params.worldWidth,worldHeight:_=B.params.worldHeight,...v}){let y={u_colorBack:N(n),u_colors:r.map(N),u_colorsCount:r.length,u_noiseScale:i,u_thickness:a,u_radius:o,u_innerShape:s,u_noiseIterations:c,u_noiseTexture:ir(),u_fit:I[l],u_scale:u,u_rotation:d,u_offsetX:m,u_offsetY:h,u_originX:f,u_originY:p,u_worldWidth:g,u_worldHeight:_};return L(R,{...v,speed:e,frame:t,fragmentShader:xr,uniforms:y})},Xi),V={name:`Default`,params:{...F,speed:1,frame:0,colorFront:`#ffffff`,colorMid:`#47a6ff`,colorBack:`#000000`,brightness:.05,contrast:.3}},{...F},{...F},{...F},j(function({speed:e=V.params.speed,frame:t=V.params.frame,colorFront:n=V.params.colorFront,colorMid:r=V.params.colorMid,colorBack:i=V.params.colorBack,brightness:a=V.params.brightness,contrast:o=V.params.contrast,fit:s=V.params.fit,scale:c=V.params.scale,rotation:l=V.params.rotation,originX:u=V.params.originX,originY:d=V.params.originY,offsetX:f=V.params.offsetX,offsetY:p=V.params.offsetY,worldWidth:m=V.params.worldWidth,worldHeight:h=V.params.worldHeight,...g}){let _={u_colorFront:N(n),u_colorMid:N(r),u_colorBack:N(i),u_brightness:a,u_contrast:o,u_fit:I[s],u_scale:c,u_rotation:l,u_offsetX:f,u_offsetY:p,u_originX:u,u_originY:d,u_worldWidth:m,u_worldHeight:h};return L(R,{...g,speed:e,frame:t,fragmentShader:Sr,uniforms:_})},Xi),ea={name:`Default`,params:{...F,speed:1.5,frame:0,colorBack:`#000000`,colors:[`#ffc96b`,`#ff6200`,`#ff2f00`,`#421100`,`#1a0000`],size:1,sizeRange:0,spreading:1,stepsPerColor:4}},{...F},{...F},{...F},j(function({speed:e=ea.params.speed,frame:t=ea.params.frame,colorBack:n=ea.params.colorBack,colors:r=ea.params.colors,size:i=ea.params.size,sizeRange:a=ea.params.sizeRange,spreading:o=ea.params.spreading,stepsPerColor:s=ea.params.stepsPerColor,fit:c=ea.params.fit,scale:l=ea.params.scale,rotation:u=ea.params.rotation,originX:d=ea.params.originX,originY:f=ea.params.originY,offsetX:p=ea.params.offsetX,offsetY:m=ea.params.offsetY,worldWidth:h=ea.params.worldWidth,worldHeight:g=ea.params.worldHeight,..._}){let v={u_colorBack:N(n),u_colors:r.map(N),u_colorsCount:r.length,u_size:i,u_sizeRange:a,u_spreading:o,u_stepsPerColor:s,u_noiseTexture:ir(),u_fit:I[c],u_scale:l,u_rotation:u,u_offsetX:p,u_offsetY:m,u_originX:d,u_originY:f,u_worldWidth:h,u_worldHeight:g};return L(R,{..._,speed:e,frame:t,fragmentShader:wr,uniforms:v})},Xi),ta={name:`Default`,params:{...F,colorBack:`#000000`,colorFill:`#ffffff`,colorStroke:`#ffaa00`,size:2,gapX:32,gapY:32,strokeWidth:0,sizeRange:0,opacityRange:0,shape:`circle`}},{...F},{...F},{...F},j(function({colorBack:e=ta.params.colorBack,colorFill:t=ta.params.colorFill,colorStroke:n=ta.params.colorStroke,size:r=ta.params.size,gapX:i=ta.params.gapX,gapY:a=ta.params.gapY,strokeWidth:o=ta.params.strokeWidth,sizeRange:s=ta.params.sizeRange,opacityRange:c=ta.params.opacityRange,shape:l=ta.params.shape,fit:u=ta.params.fit,scale:d=ta.params.scale,rotation:f=ta.params.rotation,originX:p=ta.params.originX,originY:m=ta.params.originY,offsetX:h=ta.params.offsetX,offsetY:g=ta.params.offsetY,worldWidth:_=ta.params.worldWidth,worldHeight:v=ta.params.worldHeight,maxPixelCount:y=20358144,...b}){let x={u_colorBack:N(e),u_colorFill:N(t),u_colorStroke:N(n),u_dotSize:r,u_gapX:i,u_gapY:a,u_strokeWidth:o,u_sizeRange:s,u_opacityRange:c,u_shape:Er[l],u_fit:I[u],u_scale:d,u_rotation:f,u_offsetX:h,u_offsetY:g,u_originX:p,u_originY:m,u_worldWidth:_,u_worldHeight:v};return L(R,{...b,maxPixelCount:y,fragmentShader:Tr,uniforms:x})},Xi),na={name:`Default`,params:{...F,scale:.6,speed:.5,frame:0,colors:[`#4449CF`,`#FFD1E0`,`#F94446`,`#FFD36B`,`#FFFFFF`],stepsPerColor:2,softness:0}},{...F},{...F},{...F},j(function({speed:e=na.params.speed,frame:t=na.params.frame,colors:n=na.params.colors,stepsPerColor:r=na.params.stepsPerColor,softness:i=na.params.softness,fit:a=na.params.fit,scale:o=na.params.scale,rotation:s=na.params.rotation,originX:c=na.params.originX,originY:l=na.params.originY,offsetX:u=na.params.offsetX,offsetY:d=na.params.offsetY,worldWidth:f=na.params.worldWidth,worldHeight:p=na.params.worldHeight,...m}){let h={u_colors:n.map(N),u_colorsCount:n.length,u_stepsPerColor:r,u_softness:i,u_fit:I[a],u_scale:o,u_rotation:s,u_offsetX:u,u_offsetY:d,u_originX:c,u_originY:l,u_worldWidth:f,u_worldHeight:p};return L(R,{...m,speed:e,frame:t,fragmentShader:Or,uniforms:h})},Xi),ra={name:`Default`,params:{...P,scale:1,speed:1,frame:0,colorBack:`#000000`,colors:[`#6e33cc`,`#ff5500`,`#ffc105`,`#ffc800`,`#f585ff`],count:10,size:.83}},{...P},{...P},{...P},j(function({speed:e=ra.params.speed,frame:t=ra.params.frame,colorBack:n=ra.params.colorBack,colors:r=ra.params.colors,size:i=ra.params.size,count:a=ra.params.count,fit:o=ra.params.fit,rotation:s=ra.params.rotation,scale:c=ra.params.scale,originX:l=ra.params.originX,originY:u=ra.params.originY,offsetX:d=ra.params.offsetX,offsetY:f=ra.params.offsetY,worldWidth:p=ra.params.worldWidth,worldHeight:m=ra.params.worldHeight,...h}){let g={u_colorBack:N(n),u_colors:r.map(N),u_colorsCount:r.length,u_size:i,u_count:a,u_noiseTexture:ir(),u_fit:I[o],u_rotation:s,u_scale:c,u_offsetX:d,u_offsetY:f,u_originX:l,u_originY:u,u_worldWidth:p,u_worldHeight:m};return L(R,{...h,speed:e,frame:t,fragmentShader:Ar,uniforms:g})},Xi),ia={name:`Default`,params:{...F,scale:.6,colorFront:`#ffbb00`,colorBack:`#000000`,shape:0,frequency:.5,amplitude:.5,spacing:1.2,proportion:.1,softness:0}},{...F},{...F},{...F},j(function({colorFront:e=ia.params.colorFront,colorBack:t=ia.params.colorBack,shape:n=ia.params.shape,frequency:r=ia.params.frequency,amplitude:i=ia.params.amplitude,spacing:a=ia.params.spacing,proportion:o=ia.params.proportion,softness:s=ia.params.softness,fit:c=ia.params.fit,scale:l=ia.params.scale,rotation:u=ia.params.rotation,offsetX:d=ia.params.offsetX,offsetY:f=ia.params.offsetY,originX:p=ia.params.originX,originY:m=ia.params.originY,worldWidth:h=ia.params.worldWidth,worldHeight:g=ia.params.worldHeight,maxPixelCount:_=20358144,...v}){let y={u_colorFront:N(e),u_colorBack:N(t),u_shape:n,u_frequency:r,u_amplitude:i,u_spacing:a,u_proportion:o,u_softness:s,u_fit:I[c],u_scale:l,u_rotation:u,u_offsetX:d,u_offsetY:f,u_originX:p,u_originY:m,u_worldWidth:h,u_worldHeight:g};return L(R,{...v,fragmentShader:Pr,uniforms:y})},Xi),aa={name:`Default`,params:{...F,speed:.5,frame:0,colorBack:`#632ad5`,colorFront:`#fccff7`,proportion:.35,softness:.1,octaveCount:1,persistence:1,lacunarity:1.5}},{...F},{...F},{...F},j(function({speed:e=aa.params.speed,frame:t=aa.params.frame,colorFront:n=aa.params.colorFront,colorBack:r=aa.params.colorBack,proportion:i=aa.params.proportion,softness:a=aa.params.softness,octaveCount:o=aa.params.octaveCount,persistence:s=aa.params.persistence,lacunarity:c,fit:l=aa.params.fit,worldWidth:u=aa.params.worldWidth,worldHeight:d=aa.params.worldHeight,scale:f=aa.params.scale,rotation:p=aa.params.rotation,originX:m=aa.params.originX,originY:h=aa.params.originY,offsetX:g=aa.params.offsetX,offsetY:_=aa.params.offsetY,...v}){let y={u_colorBack:N(r),u_colorFront:N(n),u_proportion:i,u_softness:a??aa.params.softness,u_octaveCount:o??aa.params.octaveCount,u_persistence:s??aa.params.persistence,u_lacunarity:c??aa.params.lacunarity,u_fit:I[l],u_scale:f,u_rotation:p,u_offsetX:g,u_offsetY:_,u_originX:m,u_originY:h,u_worldWidth:u,u_worldHeight:d};return L(R,{...v,speed:e,frame:t,fragmentShader:jr,uniforms:y})},Xi),oa={name:`Default`,params:{...F,speed:.5,frame:0,colors:[`#ff8247`,`#ffe53d`],stepsPerColor:3,colorGlow:`#ffffff`,colorGap:`#2e0000`,distortion:.4,gap:.04,glow:0,scale:.5}},{...F},{...F},{...F},j(function({speed:e=oa.params.speed,frame:t=oa.params.frame,colors:n=oa.params.colors,stepsPerColor:r=oa.params.stepsPerColor,colorGlow:i=oa.params.colorGlow,colorGap:a=oa.params.colorGap,distortion:o=oa.params.distortion,gap:s=oa.params.gap,glow:c=oa.params.glow,fit:l=oa.params.fit,scale:u=oa.params.scale,rotation:d=oa.params.rotation,originX:f=oa.params.originX,originY:p=oa.params.originY,offsetX:m=oa.params.offsetX,offsetY:h=oa.params.offsetY,worldWidth:g=oa.params.worldWidth,worldHeight:_=oa.params.worldHeight,...v}){let y={u_colors:n.map(N),u_colorsCount:n.length,u_stepsPerColor:r,u_colorGlow:N(i),u_colorGap:N(a),u_distortion:o,u_gap:s,u_glow:c,u_noiseTexture:ir(),u_fit:I[l],u_scale:u,u_rotation:d,u_offsetX:m,u_offsetY:h,u_originX:f,u_originY:p,u_worldWidth:g,u_worldHeight:_};return L(R,{...v,speed:e,frame:t,fragmentShader:Nr,uniforms:y})},Xi),sa={name:`Default`,params:{...F,rotation:0,speed:1,frame:0,colors:[`#121212`,`#9470ff`,`#121212`,`#8838ff`],proportion:.45,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shapeScale:.1,shape:`checks`}},{...F},{...F},{...F},{...F},{...F},ca=j(function({speed:e=sa.params.speed,frame:t=sa.params.frame,colors:n=sa.params.colors,proportion:r=sa.params.proportion,softness:i=sa.params.softness,distortion:a=sa.params.distortion,swirl:o=sa.params.swirl,swirlIterations:s=sa.params.swirlIterations,shapeScale:c=sa.params.shapeScale,shape:l=sa.params.shape,fit:u=sa.params.fit,scale:d=sa.params.scale,rotation:f=sa.params.rotation,originX:p=sa.params.originX,originY:m=sa.params.originY,offsetX:h=sa.params.offsetX,offsetY:g=sa.params.offsetY,worldWidth:_=sa.params.worldWidth,worldHeight:v=sa.params.worldHeight,...y}){let b={u_colors:n.map(N),u_colorsCount:n.length,u_proportion:r,u_softness:i,u_distortion:a,u_swirl:o,u_swirlIterations:s,u_shapeScale:c,u_shape:Lr[l],u_noiseTexture:ir(),u_scale:d,u_rotation:f,u_fit:I[u],u_offsetX:h,u_offsetY:g,u_originX:p,u_originY:m,u_worldWidth:_,u_worldHeight:v};return L(R,{...y,speed:e,frame:t,fragmentShader:Ir,uniforms:b})},Xi),la={name:`Default`,params:{...P,offsetX:0,offsetY:-.55,colorBack:`#000000`,colorBloom:`#0000ff`,colors:[`#a600ff6e`,`#6200fff0`,`#ffffff`,`#33fff5`],density:.3,spotty:.3,midIntensity:.4,midSize:.2,intensity:.8,bloom:.4,speed:.75,frame:0}},{...P},{...P},{...P},j(function({speed:e=la.params.speed,frame:t=la.params.frame,colorBloom:n=la.params.colorBloom,colorBack:r=la.params.colorBack,colors:i=la.params.colors,density:a=la.params.density,spotty:o=la.params.spotty,midIntensity:s=la.params.midIntensity,midSize:c=la.params.midSize,intensity:l=la.params.intensity,bloom:u=la.params.bloom,fit:d=la.params.fit,scale:f=la.params.scale,rotation:p=la.params.rotation,originX:m=la.params.originX,originY:h=la.params.originY,offsetX:g=la.params.offsetX,offsetY:_=la.params.offsetY,worldWidth:v=la.params.worldWidth,worldHeight:y=la.params.worldHeight,...b}){let x={u_colorBloom:N(n),u_colorBack:N(r),u_colors:i.map(N),u_colorsCount:i.length,u_density:a,u_spotty:o,u_midIntensity:s,u_midSize:c,u_intensity:l,u_bloom:u,u_noiseTexture:ir(),u_fit:I[d],u_scale:f,u_rotation:p,u_offsetX:g,u_offsetY:_,u_originX:m,u_originY:h,u_worldWidth:v,u_worldHeight:y};return L(R,{...b,speed:e,frame:t,fragmentShader:zr,uniforms:x})},Xi),ua={name:`Default`,params:{...F,scale:1,colorBack:`#001429`,colorFront:`#79D1FF`,density:1,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:0,noiseFrequency:0,softness:0,speed:1,frame:0}},{...F},{...F},{...F},j(function({speed:e=ua.params.speed,frame:t=ua.params.frame,colorBack:n=ua.params.colorBack,colorFront:r=ua.params.colorFront,density:i=ua.params.density,distortion:a=ua.params.distortion,strokeWidth:o=ua.params.strokeWidth,strokeTaper:s=ua.params.strokeTaper,strokeCap:c=ua.params.strokeCap,noiseFrequency:l=ua.params.noiseFrequency,noise:u=ua.params.noise,softness:d=ua.params.softness,fit:f=ua.params.fit,rotation:p=ua.params.rotation,scale:m=ua.params.scale,originX:h=ua.params.originX,originY:g=ua.params.originY,offsetX:_=ua.params.offsetX,offsetY:v=ua.params.offsetY,worldWidth:y=ua.params.worldWidth,worldHeight:b=ua.params.worldHeight,...x}){let S={u_colorBack:N(n),u_colorFront:N(r),u_density:i,u_distortion:a,u_strokeWidth:o,u_strokeTaper:s,u_strokeCap:c,u_noiseFrequency:l,u_noise:u,u_softness:d,u_fit:I[f],u_scale:m,u_rotation:p,u_offsetX:_,u_offsetY:v,u_originX:h,u_originY:g,u_worldWidth:y,u_worldHeight:b};return L(R,{...x,speed:e,frame:t,fragmentShader:Br,uniforms:S})},Xi),da={name:`Default`,params:{...P,speed:.32,frame:0,colorBack:`#330000`,colors:[`#ffd1d1`,`#ff8a8a`,`#660000`],bandCount:4,twist:.1,center:.2,proportion:.5,softness:0,noiseFrequency:.4,noise:.2}},{...P},{...P},{...P},j(function({speed:e=da.params.speed,frame:t=da.params.frame,colorBack:n=da.params.colorBack,colors:r=da.params.colors,bandCount:i=da.params.bandCount,twist:a=da.params.twist,center:o=da.params.center,proportion:s=da.params.proportion,softness:c=da.params.softness,noiseFrequency:l=da.params.noiseFrequency,noise:u=da.params.noise,fit:d=da.params.fit,rotation:f=da.params.rotation,scale:p=da.params.scale,originX:m=da.params.originX,originY:h=da.params.originY,offsetX:g=da.params.offsetX,offsetY:_=da.params.offsetY,worldWidth:v=da.params.worldWidth,worldHeight:y=da.params.worldHeight,...b}){let x={u_colorBack:N(n),u_colors:r.map(N),u_colorsCount:r.length,u_bandCount:i,u_twist:a,u_center:o,u_proportion:s,u_softness:c,u_noiseFrequency:l,u_noise:u,u_fit:I[d],u_scale:p,u_rotation:f,u_offsetX:g,u_offsetY:_,u_originX:m,u_originY:h,u_worldWidth:v,u_worldHeight:y};return L(R,{...b,speed:e,frame:t,fragmentShader:Hr,uniforms:x})},Xi),fa={name:`Default`,params:{...F,speed:1,frame:0,scale:.6,colorBack:`#000000`,colorFront:`#00b2ff`,shape:`sphere`,type:`4x4`,size:2}},{...F},{...F},{...P},{...P},{...P},pa=j(function({speed:e=fa.params.speed,frame:t=fa.params.frame,colorBack:n=fa.params.colorBack,colorFront:r=fa.params.colorFront,shape:i=fa.params.shape,type:a=fa.params.type,pxSize:o,size:s=o===void 0?fa.params.size:o,fit:c=fa.params.fit,scale:l=fa.params.scale,rotation:u=fa.params.rotation,originX:d=fa.params.originX,originY:f=fa.params.originY,offsetX:p=fa.params.offsetX,offsetY:m=fa.params.offsetY,worldWidth:h=fa.params.worldWidth,worldHeight:g=fa.params.worldHeight,..._}){let v={u_colorBack:N(n),u_colorFront:N(r),u_shape:Wr[i],u_type:Gr[a],u_pxSize:s,u_fit:I[c],u_scale:l,u_rotation:u,u_offsetX:p,u_offsetY:m,u_originX:d,u_originY:f,u_worldWidth:h,u_worldHeight:g};return L(R,{..._,speed:e,frame:t,fragmentShader:Ur,uniforms:v})}),ma={name:`Default`,params:{...P,speed:1,frame:0,colorBack:`#000000`,colors:[`#7300ff`,`#eba8ff`,`#00bfff`,`#2a00ff`],softness:.5,intensity:.5,noise:.25,shape:`corners`}},{...F},{...F},{...F},{...P},{...P},ha=j(function({speed:e=ma.params.speed,frame:t=ma.params.frame,colorBack:n=ma.params.colorBack,colors:r=ma.params.colors,softness:i=ma.params.softness,intensity:a=ma.params.intensity,noise:o=ma.params.noise,shape:s=ma.params.shape,fit:c=ma.params.fit,scale:l=ma.params.scale,rotation:u=ma.params.rotation,originX:d=ma.params.originX,originY:f=ma.params.originY,offsetX:p=ma.params.offsetX,offsetY:m=ma.params.offsetY,worldWidth:h=ma.params.worldWidth,worldHeight:g=ma.params.worldHeight,..._}){let v={u_colorBack:N(n),u_colors:r.map(N),u_colorsCount:r.length,u_softness:i,u_intensity:a,u_noise:o,u_shape:Jr[s],u_noiseTexture:ir(),u_fit:I[c],u_scale:l,u_rotation:u,u_offsetX:p,u_offsetY:m,u_originX:d,u_originY:f,u_worldWidth:h,u_worldHeight:g};return L(R,{..._,speed:e,frame:t,fragmentShader:qr,uniforms:v})}),H={name:`Default`,params:{...P,speed:1,frame:0,scale:.6,colorBack:`#000000`,colors:[`#0dc1fd`,`#d915ef`,`#ff3f2ecc`],roundness:.25,thickness:.1,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,aspectRatio:`auto`,softness:.75,intensity:.2,bloom:.25,spots:4,spotSize:.5,pulse:.25,smoke:.3,smokeSize:.6}},{...P},{...P},{...P},j(function({speed:e=H.params.speed,frame:t=H.params.frame,colors:n=H.params.colors,colorBack:r=H.params.colorBack,roundness:i=H.params.roundness,thickness:a=H.params.thickness,aspectRatio:o=H.params.aspectRatio,softness:s=H.params.softness,bloom:c=H.params.bloom,intensity:l=H.params.intensity,spots:u=H.params.spots,spotSize:d=H.params.spotSize,pulse:f=H.params.pulse,smoke:p=H.params.smoke,smokeSize:m=H.params.smokeSize,margin:h,marginLeft:g=h??H.params.marginLeft,marginRight:_=h??H.params.marginRight,marginTop:v=h??H.params.marginTop,marginBottom:y=h??H.params.marginBottom,fit:b=H.params.fit,rotation:x=H.params.rotation,scale:S=H.params.scale,originX:C=H.params.originX,originY:w=H.params.originY,offsetX:T=H.params.offsetX,offsetY:E=H.params.offsetY,worldWidth:ee=H.params.worldWidth,worldHeight:te=H.params.worldHeight,...ne}){let re={u_colorBack:N(r),u_colors:n.map(N),u_colorsCount:n.length,u_roundness:i,u_thickness:a,u_marginLeft:g,u_marginRight:_,u_marginTop:v,u_marginBottom:y,u_aspectRatio:Zr[o],u_softness:s,u_intensity:l,u_bloom:c,u_spots:u,u_spotSize:d,u_pulse:f,u_smoke:p,u_smokeSize:m,u_noiseTexture:ir(),u_fit:I[b],u_rotation:x,u_scale:S,u_offsetX:T,u_offsetY:E,u_originX:C,u_originY:w,u_worldWidth:ee,u_worldHeight:te};return L(R,{...ne,speed:e,frame:t,fragmentShader:Xr,uniforms:re})},Xi),ga={name:`Default`,params:{...P,speed:.5,frame:0,colors:[`#ff9d00`,`#fd4f30`,`#809bff`,`#6d2eff`,`#333aff`,`#f15cff`,`#ffd557`],colorBack:`#000000`,angle1:0,angle2:0,length:1.1,edges:!1,blur:0,fadeIn:1,fadeOut:.3,gradient:0,density:3,scale:.8}},{...P},{...P},{...P},j(function({speed:e=ga.params.speed,frame:t=ga.params.frame,colors:n=ga.params.colors,colorBack:r=ga.params.colorBack,angle1:i=ga.params.angle1,angle2:a=ga.params.angle2,length:o=ga.params.length,edges:s=ga.params.edges,blur:c=ga.params.blur,fadeIn:l=ga.params.fadeIn,fadeOut:u=ga.params.fadeOut,density:d=ga.params.density,gradient:f=ga.params.gradient,fit:p=ga.params.fit,scale:m=ga.params.scale,rotation:h=ga.params.rotation,originX:g=ga.params.originX,originY:_=ga.params.originY,offsetX:v=ga.params.offsetX,offsetY:y=ga.params.offsetY,worldWidth:b=ga.params.worldWidth,worldHeight:x=ga.params.worldHeight,...S}){let C={u_colors:n.map(N),u_colorsCount:n.length,u_colorBack:N(r),u_angle1:i,u_angle2:a,u_length:o,u_edges:s,u_blur:c,u_fadeIn:l,u_fadeOut:u,u_density:d,u_gradient:f,u_fit:I[p],u_scale:m,u_rotation:h,u_offsetX:v,u_offsetY:y,u_originX:g,u_originY:_,u_worldWidth:b,u_worldHeight:x};return L(R,{...S,speed:e,frame:t,fragmentShader:$r,uniforms:C})},Xi),U={name:`Default`,params:{...P,rotation:270,speed:0,frame:0,colors:[`#ffad0a`,`#6200ff`,`#e2a3ff`,`#ff99fd`],positions:2,waveX:1,waveXShift:.6,waveY:1,waveYShift:.21,mixing:.93,grainMixer:0,grainOverlay:0}},{...P},{...P},{...P},j(function({speed:e=U.params.speed,frame:t=U.params.frame,colors:n=U.params.colors,positions:r=U.params.positions,waveX:i=U.params.waveX,waveXShift:a=U.params.waveXShift,waveY:o=U.params.waveY,waveYShift:s=U.params.waveYShift,mixing:c=U.params.mixing,grainMixer:l=U.params.grainMixer,grainOverlay:u=U.params.grainOverlay,fit:d=U.params.fit,rotation:f=U.params.rotation,scale:p=U.params.scale,originX:m=U.params.originX,originY:h=U.params.originY,offsetX:g=U.params.offsetX,offsetY:_=U.params.offsetY,worldWidth:v=U.params.worldWidth,worldHeight:y=U.params.worldHeight,...b}){let x={u_colors:n.map(N),u_colorsCount:n.length,u_positions:r,u_waveX:i,u_waveXShift:a,u_waveY:o,u_waveYShift:s,u_mixing:c,u_grainMixer:l,u_grainOverlay:u,u_fit:I[d],u_rotation:f,u_scale:p,u_offsetX:g,u_offsetY:_,u_originX:m,u_originY:h,u_worldWidth:v,u_worldHeight:y};return L(R,{...b,speed:e,frame:t,fragmentShader:ti,uniforms:x})},Xi),W={name:`Default`,params:{...P,scale:1,speed:0,frame:0,colorBack:`#000000`,colors:[`#00bbff`,`#00ffe1`,`#ffffff`],radius:.8,focalDistance:.99,focalAngle:0,falloff:.24,mixing:.5,distortion:0,distortionShift:0,distortionFreq:12,grainMixer:0,grainOverlay:0}},{...P},{...P},{...P},j(function({speed:e=W.params.speed,frame:t=W.params.frame,colorBack:n=W.params.colorBack,colors:r=W.params.colors,radius:i=W.params.radius,focalDistance:a=W.params.focalDistance,focalAngle:o=W.params.focalAngle,falloff:s=W.params.falloff,grainMixer:c=W.params.grainMixer,mixing:l=W.params.mixing,distortion:u=W.params.distortion,distortionShift:d=W.params.distortionShift,distortionFreq:f=W.params.distortionFreq,grainOverlay:p=W.params.grainOverlay,fit:m=W.params.fit,rotation:h=W.params.rotation,scale:g=W.params.scale,originX:_=W.params.originX,originY:v=W.params.originY,offsetX:y=W.params.offsetX,offsetY:b=W.params.offsetY,worldWidth:x=W.params.worldWidth,worldHeight:S=W.params.worldHeight,...C}){let w={u_colorBack:N(n),u_colors:r.map(N),u_colorsCount:r.length,u_radius:i,u_focalDistance:a,u_focalAngle:o,u_falloff:s,u_mixing:l,u_distortion:u,u_distortionShift:d,u_distortionFreq:f,u_grainMixer:c,u_grainOverlay:p,u_fit:I[m],u_rotation:h,u_scale:g,u_offsetX:y,u_offsetY:b,u_originX:_,u_originY:v,u_worldWidth:x,u_worldHeight:S};return L(R,{...C,speed:e,frame:t,fragmentShader:ri,uniforms:w})},Xi),G={name:`Default`,params:{...P,fit:`contain`,scale:.9,speed:0,frame:0,colorBack:`#d3d2ab`,colorPaper:`#ffffff`,colorShadow:`#cccccc`,blending:1,distortion:.75,clip:!1,angle:300,seed:4,roughness:.4,roughnessSize:.5,roughnessRows:0,fiber:.4,fiberSize:.5,folds:.5,foldSizeX:1,foldSizeY:1,foldOffsetX:0,foldOffsetY:0,wrinkles:1,wrinkleSize:.65,crumples:0,crumpleCount:6,drops:.4}},{...P},{...P},{...P},j(function({speed:e=G.params.speed,frame:t=G.params.frame,image:n=``,colorBack:r=G.params.colorBack,colorPaper:i=G.params.colorPaper,colorShadow:a=G.params.colorShadow,blending:o=G.params.blending,distortion:c=G.params.distortion,clip:l=G.params.clip,angle:u=G.params.angle,seed:d=G.params.seed,roughness:f=G.params.roughness,roughnessSize:p=G.params.roughnessSize,roughnessRows:m=G.params.roughnessRows,fiber:h=G.params.fiber,fiberScale:g,fiberSize:_=g===void 0?G.params.fiberSize:.2/g,folds:v=G.params.folds,foldSizeX:y=G.params.foldSizeX,foldSizeY:b=G.params.foldSizeY,foldOffsetX:x=G.params.foldOffsetX,foldOffsetY:S=G.params.foldOffsetY,wrinkles:C=G.params.wrinkles,wrinkleSize:w=G.params.wrinkleSize,crumples:T=G.params.crumples,foldsNumber:E,crumpleCount:ee=E===void 0?G.params.crumpleCount:E,drops:te=G.params.drops,fit:ne=G.params.fit,scale:re=G.params.scale,rotation:ie=G.params.rotation,originX:D=G.params.originX,originY:ae=G.params.originY,offsetX:O=G.params.offsetX,offsetY:oe=G.params.offsetY,worldWidth:se=G.params.worldWidth,worldHeight:k=G.params.worldHeight,...A}){let ce=typeof s<`u`&&{u_noiseTexture:ir()},le={u_image:n,u_isImage:!!n,u_colorBack:N(r),u_colorPaper:N(i),u_colorShadow:N(a),u_blending:o,u_distortion:c,u_clip:l,u_angle:u,u_seed:d,u_roughness:f,u_roughnessSize:p,u_roughnessRows:m,u_fiber:h,u_fiberSize:_,u_folds:v,u_foldSizeX:y,u_foldSizeY:b,u_foldOffsetX:x,u_foldOffsetY:S,u_wrinkles:C,u_wrinkleSize:w,u_crumples:T,u_crumpleCount:ee,u_drops:te,...ce,u_fit:I[ne],u_scale:re,u_rotation:ie,u_offsetX:O,u_offsetY:oe,u_originX:D,u_originY:ae,u_worldWidth:se,u_worldHeight:k};return L(R,{...A,speed:e,frame:t,fragmentShader:ai,mipmaps:[`u_image`],uniforms:le})},Xi),K={name:`Default`,params:{...P,fit:`cover`,speed:0,frame:0,colorBack:`#00000000`,colorShadow:`#000000`,colorHighlight:`#ffffff`,shadows:.25,size:.5,angle:0,distortionShape:`prism`,highlights:.1,shape:`lines`,distortion:.5,shift:0,blur:0,edges:.25,stretch:0,margin:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:0,grainOverlay:0}},{...P},{...P},{...P},j(function({speed:e=K.params.speed,frame:t=K.params.frame,colorBack:n=K.params.colorBack,colorShadow:r=K.params.colorShadow,colorHighlight:i=K.params.colorHighlight,image:a=``,shadows:o=K.params.shadows,angle:s=K.params.angle,distortion:c=K.params.distortion,distortionShape:l=K.params.distortionShape,highlights:u=K.params.highlights,shape:d=K.params.shape,shift:f=K.params.shift,blur:p=K.params.blur,edges:m=K.params.edges,margin:h,marginLeft:g=h??K.params.marginLeft,marginRight:_=h??K.params.marginRight,marginTop:v=h??K.params.marginTop,marginBottom:y=h??K.params.marginBottom,grainMixer:b=K.params.grainMixer,grainOverlay:x=K.params.grainOverlay,stretch:S=K.params.stretch,count:C,size:w=C===void 0?K.params.size:(1/(C*1.6))**(1/6)/.7-.5,fit:T=K.params.fit,scale:E=K.params.scale,rotation:ee=K.params.rotation,originX:te=K.params.originX,originY:ne=K.params.originY,offsetX:re=K.params.offsetX,offsetY:ie=K.params.offsetY,worldWidth:D=K.params.worldWidth,worldHeight:ae=K.params.worldHeight,...O}){let oe={u_image:a,u_colorBack:N(n),u_colorShadow:N(r),u_colorHighlight:N(i),u_shadows:o,u_size:w,u_angle:s,u_distortion:c,u_shift:f,u_blur:p,u_edges:m,u_stretch:S,u_distortionShape:li[l],u_highlights:u,u_shape:ci[d],u_marginLeft:g,u_marginRight:_,u_marginTop:v,u_marginBottom:y,u_grainMixer:b,u_grainOverlay:x,u_fit:I[T],u_scale:E,u_rotation:ee,u_offsetX:re,u_offsetY:ie,u_originX:te,u_originY:ne,u_worldWidth:D,u_worldHeight:ae};return L(R,{...O,speed:e,frame:t,fragmentShader:si,mipmaps:[`u_image`],uniforms:oe})}),_a={name:`Default`,params:{...P,scale:.8,speed:1,frame:0,colorBack:`#909090`,colorHighlight:`#ffffff`,highlights:.07,layering:.5,edges:.8,waves:.3,caustic:.1,size:1}},{...P},{...P},{...P},j(function({speed:e=_a.params.speed,frame:t=_a.params.frame,colorBack:n=_a.params.colorBack,colorHighlight:r=_a.params.colorHighlight,image:i=``,highlights:a=_a.params.highlights,layering:o=_a.params.layering,waves:s=_a.params.waves,edges:c=_a.params.edges,caustic:l=_a.params.caustic,effectScale:u,size:d=u===void 0?_a.params.size:10/9/u-1/9,fit:f=_a.params.fit,scale:p=_a.params.scale,rotation:m=_a.params.rotation,originX:h=_a.params.originX,originY:g=_a.params.originY,offsetX:_=_a.params.offsetX,offsetY:v=_a.params.offsetY,worldWidth:y=_a.params.worldWidth,worldHeight:b=_a.params.worldHeight,...x}){let S={u_image:i,u_colorBack:N(n),u_colorHighlight:N(r),u_highlights:a,u_layering:o,u_waves:s,u_edges:c,u_caustic:l,u_size:d,u_fit:I[f],u_rotation:m,u_scale:p,u_offsetX:_,u_offsetY:v,u_originX:h,u_originY:g,u_worldWidth:y,u_worldHeight:b};return L(R,{...x,speed:e,frame:t,fragmentShader:oi,mipmaps:[`u_image`],uniforms:S})},Xi),va={name:`Default`,params:{...P,fit:`cover`,speed:0,frame:0,colorFront:`#94ffaf`,colorBack:`#000c38`,colorHighlight:`#eaff94`,type:`8x8`,size:2,colorSteps:2,originalColors:!1,inverted:!1}},{...P},{...P},{...P},j(function({speed:e=va.params.speed,frame:t=va.params.frame,colorFront:n=va.params.colorFront,colorBack:r=va.params.colorBack,colorHighlight:i=va.params.colorHighlight,image:a=``,type:o=va.params.type,colorSteps:s=va.params.colorSteps,originalColors:c=va.params.originalColors,inverted:l=va.params.inverted,pxSize:u,size:d=u===void 0?va.params.size:u,fit:f=va.params.fit,scale:p=va.params.scale,rotation:m=va.params.rotation,originX:h=va.params.originX,originY:g=va.params.originY,offsetX:_=va.params.offsetX,offsetY:v=va.params.offsetY,worldWidth:y=va.params.worldWidth,worldHeight:b=va.params.worldHeight,...x}){let S={u_image:a,u_colorFront:N(n),u_colorBack:N(r),u_colorHighlight:N(i),u_type:Gr[o],u_pxSize:d,u_colorSteps:s,u_originalColors:c,u_inverted:l,u_fit:I[f],u_rotation:m,u_scale:p,u_offsetX:_,u_offsetY:v,u_originX:h,u_originY:g,u_worldWidth:y,u_worldHeight:b};return L(R,{...x,speed:e,frame:t,fragmentShader:ui,uniforms:S})},Xi),q={name:`Default`,params:{...P,scale:1,fit:`contain`,speed:0,frame:0,spread:.6,bias:1,angle:0,perspective:.1,count:35,dispersion:1,dispersionShift:0,dispersionColor:.6,focusCenter:.8,focusEdges:1,swirl:.35,noise:0,noiseFrequency:.25,noiseOffset:0,lensBulge:0,lensCircle:0,grainMixer:0,grainOverlay:0,imageX:0,imageY:0}},{...P},{...P},{...P},j(function({speed:e=q.params.speed,frame:t=q.params.frame,image:n=``,spread:r=q.params.spread,bias:i=q.params.bias,angle:a=q.params.angle,perspective:o=q.params.perspective,count:s=q.params.count,dispersion:c=q.params.dispersion,dispersionShift:l=q.params.dispersionShift,dispersionColor:u=q.params.dispersionColor,focusCenter:d=q.params.focusCenter,focusEdges:f=q.params.focusEdges,swirl:p=q.params.swirl,noise:m=q.params.noise,noiseFrequency:h=q.params.noiseFrequency,noiseOffset:g=q.params.noiseOffset,lensBulge:_=q.params.lensBulge,lensCircle:v=q.params.lensCircle,grainMixer:y=q.params.grainMixer,grainOverlay:b=q.params.grainOverlay,imageX:x=q.params.imageX,imageY:S=q.params.imageY,fit:C=q.params.fit,scale:w=q.params.scale,rotation:T=q.params.rotation,originX:E=q.params.originX,originY:ee=q.params.originY,offsetX:te=q.params.offsetX,offsetY:ne=q.params.offsetY,worldWidth:re=q.params.worldWidth,worldHeight:ie=q.params.worldHeight,...D}){let ae={u_image:n,u_spread:r,u_bias:i,u_angle:a,u_perspective:o,u_count:s,u_dispersion:c,u_dispersionShift:l,u_dispersionColor:u,u_focusCenter:d,u_focusEdges:f,u_swirl:p,u_noise:m,u_noiseFrequency:h,u_noiseOffset:g,u_lensBulge:_,u_lensCircle:v,u_grainMixer:y,u_grainOverlay:b,u_imageX:x,u_imageY:S,u_fit:I[C],u_rotation:T,u_scale:w,u_offsetX:te,u_offsetY:ne,u_originX:E,u_originY:ee,u_worldWidth:re,u_worldHeight:ie};return L(R,{...D,speed:e,frame:t,fragmentShader:fi,mipmaps:[`u_image`],uniforms:ae})},Xi),ya=`data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`,ba=e=>typeof e==`object`&&typeof e.then==`function`,xa=[],Sa=(e,t)=>Qi(e,t),J={name:`Default`,params:{...P,scale:.75,speed:1,frame:0,contour:.5,angle:0,noise:0,innerGlow:.5,outerGlow:.5,colorBack:`#000000`,colors:[`#11206a`,`#1f3ba2`,`#2f63e7`,`#6bd7ff`,`#ffe679`,`#ff991e`,`#ff4c00`]}},{...P},Ca=j(function({speed:e=J.params.speed,frame:t=J.params.frame,image:n=``,contour:r=J.params.contour,angle:i=J.params.angle,noise:a=J.params.noise,innerGlow:o=J.params.innerGlow,outerGlow:c=J.params.outerGlow,colorBack:l=J.params.colorBack,colors:u=J.params.colors,suspendWhenProcessingImage:d=!1,fit:f=J.params.fit,offsetX:p=J.params.offsetX,offsetY:m=J.params.offsetY,originX:h=J.params.originX,originY:g=J.params.originY,rotation:_=J.params.rotation,scale:v=J.params.scale,worldHeight:y=J.params.worldHeight,worldWidth:b=J.params.worldWidth,...x}){let S=typeof n==`string`?n:n.src,[C,w]=lt(ya),T;T=d&&typeof s<`u`?Sa(()=>Gn(S).then(e=>URL.createObjectURL(e.blob)),[S,`heatmap`]):C,at(()=>{if(d)return;if(!S){w(ya);return}let e,t=!0;return Gn(S).then(n=>{t&&(e=URL.createObjectURL(n.blob),w(e))}),()=>{t=!1}},[S,d]);let E=ot(()=>({u_image:T,u_contour:r,u_angle:i,u_noise:a,u_innerGlow:o,u_outerGlow:c,u_colorBack:N(l),u_colors:u.map(N),u_colorsCount:u.length,u_fit:I[f],u_offsetX:p,u_offsetY:m,u_originX:h,u_originY:g,u_rotation:_,u_scale:v,u_worldHeight:y,u_worldWidth:b}),[e,t,r,i,a,o,c,u,l,T,f,p,m,h,g,_,v,y,b]);return L(R,{...x,speed:e,frame:t,fragmentShader:mi,mipmaps:[`u_image`],uniforms:E})},Xi),wa={name:`Default`,params:{...P,scale:.6,speed:1,frame:0,colorBack:`#AAAAAC`,colorTint:`#ffffff`,distortion:.07,repetition:2,shiftRed:.3,shiftBlue:.3,contour:.4,softness:.1,angle:70,shape:`diamond`}},{...P},{...P},{...P},Ta=j(function({colorBack:e=wa.params.colorBack,colorTint:t=wa.params.colorTint,speed:n=wa.params.speed,frame:r=wa.params.frame,image:i=``,contour:a=wa.params.contour,distortion:o=wa.params.distortion,softness:c=wa.params.softness,repetition:l=wa.params.repetition,shiftRed:u=wa.params.shiftRed,shiftBlue:d=wa.params.shiftBlue,angle:f=wa.params.angle,shape:p=wa.params.shape,suspendWhenProcessingImage:m=!1,fit:h=wa.params.fit,scale:g=wa.params.scale,rotation:_=wa.params.rotation,originX:v=wa.params.originX,originY:y=wa.params.originY,offsetX:b=wa.params.offsetX,offsetY:x=wa.params.offsetY,worldWidth:S=wa.params.worldWidth,worldHeight:C=wa.params.worldHeight,...w}){let T=typeof i==`string`?i:i.src,[E,ee]=lt(ya),te;te=m&&typeof s<`u`&&T?Sa(()=>Jn(T).then(e=>URL.createObjectURL(e.pngBlob)),[T,`liquid-metal`]):E,at(()=>{if(m)return;if(!T){ee(ya);return}let e,t=!0;return Jn(T).then(n=>{t&&(e=URL.createObjectURL(n.pngBlob),ee(e))}),()=>{t=!1}},[T,m]);let ne={u_colorBack:N(e),u_colorTint:N(t),u_image:te,u_contour:a,u_distortion:o,u_softness:c,u_repetition:l,u_shiftRed:u,u_shiftBlue:d,u_angle:f,u_isImage:!!i,u_shape:_i[p],u_fit:I[h],u_scale:g,u_rotation:_,u_offsetX:b,u_offsetY:x,u_originX:v,u_originY:y,u_worldWidth:S,u_worldHeight:C};return L(R,{...w,speed:n,frame:r,fragmentShader:hi,mipmaps:[`u_image`],uniforms:ne})}),Ea={name:`Default`,params:{...P,fit:`cover`,speed:0,frame:0,colorBack:`#f2f1e8`,colorFront:`#2b2b2b`,size:.5,radius:1.25,contrast:.4,originalColors:!1,inverted:!1,grainMixer:.2,grainOverlay:.2,grainSize:.5,grid:`hex`,type:`gooey`}},{...P},{...P},{...P},j(function({speed:e=Ea.params.speed,frame:t=Ea.params.frame,colorFront:n=Ea.params.colorFront,colorBack:r=Ea.params.colorBack,image:i=``,size:a=Ea.params.size,radius:o=Ea.params.radius,contrast:s=Ea.params.contrast,originalColors:c=Ea.params.originalColors,inverted:l=Ea.params.inverted,grainMixer:u=Ea.params.grainMixer,grainOverlay:d=Ea.params.grainOverlay,grainSize:f=Ea.params.grainSize,grid:p=Ea.params.grid,type:m=Ea.params.type,fit:h=Ea.params.fit,scale:g=Ea.params.scale,rotation:_=Ea.params.rotation,originX:v=Ea.params.originX,originY:y=Ea.params.originY,offsetX:b=Ea.params.offsetX,offsetY:x=Ea.params.offsetY,worldWidth:S=Ea.params.worldWidth,worldHeight:C=Ea.params.worldHeight,...w}){let T={u_image:i,u_colorFront:N(n),u_colorBack:N(r),u_size:a,u_radius:o,u_contrast:s,u_originalColors:c,u_inverted:l,u_grainMixer:u,u_grainOverlay:d,u_grainSize:f,u_grid:bi[p],u_type:yi[m],u_fit:I[h],u_rotation:_,u_scale:g,u_offsetX:b,u_offsetY:x,u_originX:v,u_originY:y,u_worldWidth:S,u_worldHeight:C};return L(R,{...w,speed:e,frame:t,fragmentShader:vi,uniforms:T})},Xi),Y={name:`Default`,params:{...P,scale:1,fit:`cover`,speed:0,frame:0,colorBack:`#fbfaf5`,colorC:`#00b4ff`,colorM:`#fc519f`,colorY:`#ffd800`,colorK:`#231f20`,size:.2,contrast:1,softness:1,grainSize:.5,grainMixer:0,grainOverlay:0,gridNoise:.2,floodC:.15,floodM:0,floodY:0,floodK:0,gainC:.3,gainM:0,gainY:.2,gainK:0,type:`ink`}},{...P},{...P},{...P},j(function({speed:e=Y.params.speed,frame:t=Y.params.frame,colorBack:n=Y.params.colorBack,colorC:r=Y.params.colorC,colorM:i=Y.params.colorM,colorY:a=Y.params.colorY,colorK:o=Y.params.colorK,image:s=``,size:c=Y.params.size,contrast:l=Y.params.contrast,softness:u=Y.params.softness,grainSize:d=Y.params.grainSize,grainMixer:f=Y.params.grainMixer,grainOverlay:p=Y.params.grainOverlay,gridNoise:m=Y.params.gridNoise,floodC:h=Y.params.floodC,floodM:g=Y.params.floodM,floodY:_=Y.params.floodY,floodK:v=Y.params.floodK,gainC:y=Y.params.gainC,gainM:b=Y.params.gainM,gainY:x=Y.params.gainY,gainK:S=Y.params.gainK,type:C=Y.params.type,fit:w=Y.params.fit,scale:T=Y.params.scale,rotation:E=Y.params.rotation,originX:ee=Y.params.originX,originY:te=Y.params.originY,offsetX:ne=Y.params.offsetX,offsetY:re=Y.params.offsetY,worldWidth:ie=Y.params.worldWidth,worldHeight:D=Y.params.worldHeight,...ae}){let O={u_image:s,u_noiseTexture:ir(),u_colorBack:N(n),u_colorC:N(r),u_colorM:N(i),u_colorY:N(a),u_colorK:N(o),u_size:c,u_contrast:l,u_softness:u,u_grainSize:d,u_grainMixer:f,u_grainOverlay:p,u_gridNoise:m,u_floodC:h,u_floodM:g,u_floodY:_,u_floodK:v,u_gainC:y,u_gainM:b,u_gainY:x,u_gainK:S,u_type:Si[C],u_fit:I[w],u_rotation:E,u_scale:T,u_offsetX:ne,u_offsetY:re,u_originX:ee,u_originY:te,u_worldWidth:ie,u_worldHeight:D};return L(R,{...ae,speed:e,frame:t,fragmentShader:xi,uniforms:O})},Xi),Da={name:`Default`,params:{...P,scale:.6,speed:1,frame:0,colorBack:`#f0efea`,colorInner:`#fafaf5`,colors:[`#333333`,`#e7e6df`],outerGlow:.55,innerGlow:1,innerDistortion:.8,outerDistortion:.6,offset:0,angle:0,size:.8,shape:`diamond`}},{...P},{...P},{...P},Oa=j(function({colorBack:e=Da.params.colorBack,colors:t=Da.params.colors,speed:n=Da.params.speed,frame:r=Da.params.frame,image:i=``,innerDistortion:a=Da.params.innerDistortion,outerDistortion:o=Da.params.outerDistortion,outerGlow:c=Da.params.outerGlow,innerGlow:l=Da.params.innerGlow,colorInner:u=Da.params.colorInner,offset:d=Da.params.offset,angle:f=Da.params.angle,size:p=Da.params.size,shape:m=Da.params.shape,suspendWhenProcessingImage:h=!1,fit:g=Da.params.fit,scale:_=Da.params.scale,rotation:v=Da.params.rotation,originX:y=Da.params.originX,originY:b=Da.params.originY,offsetX:x=Da.params.offsetX,offsetY:S=Da.params.offsetY,worldWidth:C=Da.params.worldWidth,worldHeight:w=Da.params.worldHeight,...T}){let E=typeof i==`string`?i:i.src,[ee,te]=lt(ya),ne;ne=h&&typeof s<`u`&&E?Sa(()=>Zn(E).then(e=>URL.createObjectURL(e.pngBlob)),[E,`gemSmoke`]):ee,at(()=>{if(h)return;if(!E){te(ya);return}let e,t=!0;return Zn(E).then(n=>{t&&(e=URL.createObjectURL(n.pngBlob),te(e))}),()=>{t=!1}},[E,h]);let re={u_colors:t.map(N),u_colorsCount:t.length,u_colorBack:N(e),u_image:ne,u_innerDistortion:a,u_outerDistortion:o,u_outerGlow:c,u_innerGlow:l,u_colorInner:N(u),u_offset:d,u_angle:f,u_size:p,u_isImage:!!i,u_shape:Ei[m],u_fit:I[g],u_scale:_,u_rotation:v,u_offsetX:x,u_offsetY:S,u_originX:y,u_originY:b,u_worldWidth:C,u_worldHeight:w};return L(R,{...T,speed:n,frame:r,fragmentShader:wi,mipmaps:[`u_image`],uniforms:re})},Xi)})))()}function Aa(){return(Aa=t((()=>{Ai(),Ki(),mt(),ka()})))()}function ja(e){let t=String(e).match(/rgba?\(([^)]+)\)/);if(t)return t[1].split(`,`).slice(0,3).map(e=>parseFloat(e));let n=String(e).replace(`#`,``),r=parseInt(n.length===3?n.replace(/./g,`$&$&`):n.slice(0,6),16);return[r>>16&255,r>>8&255,r&255]}function Ma(e){let t={style:{width:`100%`,height:`100%`},speed:e.run?e.speed:0,frame:e.seed*700},n=La(e.colorA),r=La(e.colorB),i=La(e.colorC);return e.material===`grain`?Pa(ha,{...t,colorBack:Ra(n,`#000000`,.78),colors:[n,r,i],softness:.6,intensity:.55,noise:.5,shape:`wave`,scale:1,fit:`cover`}):e.material===`mesh`?Pa($i,{...t,colors:[n,r,i,Ra(n,`#000000`,.5)],distortion:.85,swirl:.35,grainMixer:.25,grainOverlay:.2}):e.material===`warp`?Pa(ca,{...t,colors:[n,Ra(n,`#000000`,.7),r,i],proportion:.42,softness:.85,distortion:.3,swirl:.85,swirlIterations:10,shapeScale:.12,shape:`edge`,scale:.6,fit:`cover`}):Pa(R,{...t,webGlContextAttributes:void 0,fragmentShader:Ia,uniforms:{u_c1:Fa(e.colorA),u_c2:Fa(e.colorB),u_c3:Fa(e.colorC),u_flutes:e.flutes,u_vertical:+(e.direction===`vertical`),u_seed:e.seed%23}})}function Na(e){let{style:t,...n}=e,r=c(null),i=c(null),a=c(!0),o=()=>{let e=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches;i.current?.render(Pa(Ma,{...n,run:a.current&&!e}))};return h(()=>{if(!r.current)return;let e=Ln(r.current);i.current=e;let t=new IntersectionObserver(([e])=>{a.current=e.isIntersecting,o()},{rootMargin:`15%`});return t.observe(r.current),()=>{t.disconnect(),i.current=null,e.unmount()}},[]),h(o),/*#__PURE__*/ d(`div`,{ref:r,"aria-hidden":`true`,style:{...t,width:`100%`,height:`100%`,pointerEvents:`none`,backgroundColor:e.colorA}})}var Pa,Fa,Ia,La,Ra;function za(){return(za=t((()=>{p(),x(),m(),ht(),Bn(),Aa(),Pa=Ue,Fa=e=>{let[t,n,r]=ja(e);return[t/255,n/255,r/255,1]},Ia=`#version 300 es
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec4 u_c1;
uniform vec4 u_c2;
uniform vec4 u_c3;
uniform float u_flutes;
uniform float u_vertical;
uniform float u_seed;
out vec4 fragColor;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec3 field(vec2 p, float t) {
  vec3 col = u_c1.rgb * 0.5;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float k = fi * 1.7 + u_seed;
    vec2 c = 0.5 + 0.6 * vec2(sin(t * (0.31 + 0.07 * fi) + k * 2.4), cos(t * (0.23 + 0.05 * fi) + k * 1.7));
    float r = 0.5 + 0.18 * sin(k * 3.1);
    float w = smoothstep(r, 0.0, distance(p, c));
    vec3 cc = u_c1.rgb;
    if (i % 3 == 1) cc = u_c2.rgb;
    if (i % 3 == 2) cc = u_c3.rgb;
    if (i == 5) cc = vec3(1.0);
    col = mix(col, cc, w * 0.92);
  }
  return col;
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float ratio = u_resolution.x / u_resolution.y;
  float count = u_flutes;
  if (u_vertical < 0.5) { uv = uv.yx; } else { count *= max(1.0, ratio); }
  float x = uv.x * count;
  float id = floor(x);
  float f = fract(x);
  float l = f - 0.5;
  float bend = sign(l) * pow(abs(l) * 2.0, 1.7) * 0.5;
  vec2 p = vec2((id + 0.5 - bend * 2.4) / count, uv.y + bend * 0.08);
  vec3 col = field(p, u_time * 0.9);
  col *= 1.0 - 0.3 * smoothstep(0.4, 1.0, f);
  col += 0.2 * smoothstep(0.07, 0.0, f);
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.06;
  fragColor = vec4(col, 1.0);
}`,La=e=>`#`+ja(e).map(e=>Math.round(e).toString(16).padStart(2,`0`)).join(``),Ra=(e,t,n)=>`#`+ja(e).map((e,r)=>Math.round(e+(ja(t)[r]-e)*n).toString(16).padStart(2,`0`)).join(``),y(Na,{material:{type:k.Enum,title:`Material`,options:[`glass`,`grain`,`mesh`,`warp`],optionTitles:[`Fluted Glass`,`Grain Gradient`,`Mesh Gradient`,`Warp`],defaultValue:`glass`},colorA:{type:k.Color,title:`Colour 1`,defaultValue:`#7B4DFF`},colorB:{type:k.Color,title:`Colour 2`,defaultValue:`#FF86C8`},colorC:{type:k.Color,title:`Colour 3`,defaultValue:`#2F52FF`},flutes:{type:k.Number,title:`Flutes`,defaultValue:5,min:2,max:16,step:1,displayStepper:!0,hidden:e=>e.material!==`glass`,description:`How many ribs across the shorter side.`},direction:{type:k.Enum,title:`Direction`,options:[`vertical`,`horizontal`],optionTitles:[`Vertical`,`Horizontal`],defaultValue:`vertical`},speed:{type:k.Number,title:`Speed`,defaultValue:1,min:0,max:3,step:.1},seed:{type:k.Number,title:`Seed`,defaultValue:3,min:0,max:99,step:1}})})))()}function Ba(e){let t=e*0x9e3779b1>>>0;return()=>{t=t+0x6d2b79f5>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Va(e,t,n,r){let i=[];for(let a=0;a<e;a++){let e=[0,0],a=-1;for(let o=0;o<12;o++){let o=[t()*n,t()*r],s=1/0;for(let e of i)s=Math.min(s,Math.hypot(e[0]-o[0],e[1]-o[1]));s>a&&(a=s,e=o)}i.push(e)}return i}function Ha(e,t,n,r,i){let a=t.filter(t=>t[0]>=e.x&&t[0]<e.x+e.s&&t[1]>=e.y&&t[1]<e.y+e.s);if(n>=r||a.length===0){i.push(e);return}let o=e.s/2;for(let[t,s]of[[0,0],[1,0],[0,1],[1,1]])Ha({x:e.x+t*o,y:e.y+s*o,s:o},a,n+1,r,i)}function Ua(e,t,n,r,i,a,o){let s=Va(t,Ba(e),r,i),c=[];for(let e=0;e<i;e++)for(let t=0;t<r;t++)Ha({x:t,y:e,s:1},s,0,n,c);let l=Ba(e+7919),u=eo.map((e,t)=>t).filter(e=>a[e]),d=c.map(e=>{let t=u.length?u[Math.floor(l()*u.length)]:-1,n=to[Math.floor(l()*to.length)],r=no[Math.floor(l()*no.length)];return{...e,shape:t,turn:n,color:r,mat:``,cols:[],n:0}});if(o.length){let t=Ba(e*31+104729),n=Math.max(...d.map(e=>e.s)),r=d.filter(e=>e.s===n&&e.shape>=0),i=r.length===d.length&&r.length>2,a=0;r.forEach((e,n)=>{let s=o[Math.floor(t()*o.length)],c=ro.length,l=Math.floor(t()*c),u=[ro[l],ro[(l+1+Math.floor(t()*(c-1)))%c],ro[Math.floor(t()*c)]],d=Math.floor(t()*1e3);i&&t()<.5&&(a!==0||n!==r.length-1)||a>=ao||(e.mat=s,e.cols=u,e.n=d,a++)})}return d}function Wa(e){let t=e.replace(`#`,``),n=parseInt(t.slice(0,6),16);return[n>>16&255,n>>8&255,n&255]}function Ga(e,t,n){let r=Wa(e),i=Wa(t);return`#`+r.map((e,t)=>Math.round(e+(i[t]-e)*n).toString(16).padStart(2,`0`)).join(``)}function Ka(e,t,n){let r=eo[e];return(r.c?`<mask id="${n}" maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1"><rect width="1" height="1" fill="#fff"/><path d="${r.c}" fill="#000"/></mask>`:``)+`<path d="${r.b}" fill="${t}"${r.c?` mask="url(#${n})"`:``}/>`}function qa(e,t,n=`#000`,r=512,i=0){return`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}" viewBox="0 0 1 1"><g transform="translate(${i} ${i}) scale(${1-i*2}) rotate(${t} .5 .5)">${Ka(e,n,`m`)}</g></svg>`}function Ja(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e})}function Ya(e,t){let n=e+`/`+t;return po.has(n)||po.set(n,Ja(lo(qa(e,t,`#000`,512,fo))).then(e=>{let t=document.createElement(`canvas`);return t.width=t.height=512,t.getContext(`2d`).drawImage(e,0,0,512,512),t.toDataURL(`image/png`)})),po.get(n)}function Xa(e,t){let[n,r]=lt(``);return tt(()=>{let n=!0;return Ya(e,t).then(e=>n&&r(e)),()=>{n=!1}},[e,t]),n}function Za({cell:e,speed:t}){let[n,r,i]=e.cols,a=e.n,o=Xa(e.shape,e.turn),s={style:vo,webGlContextAttributes:_o,speed:t,frame:a*40},c=e=>e[a%e.length];switch(e.mat){case`metal`:return o?X(Ta,{...s,image:o,shape:`none`,fit:`contain`,scale:yo,colorBack:go,colorTint:so(n,.6),repetition:4+a%3,softness:.3,shiftRed:.3,shiftBlue:.3,distortion:.14,contour:.7,angle:70+a%4*30}):null;case`heat`:return o?X(Ca,{...s,image:o,fit:`contain`,scale:yo,colorBack:co(n,.82),colors:[co(n,.6),n,r,so(i,.3),`#ffffff`],contour:.5,angle:a%4*90,noise:.3,innerGlow:.8,outerGlow:.4}):null;case`smoke`:return o?X(Oa,{...s,image:o,shape:`none`,fit:`contain`,scale:yo,colorBack:co(n,.8),colorInner:so(r,.75),colors:[n,r,so(i,.2)],outerGlow:.5,innerGlow:1,innerDistortion:.85,outerDistortion:.6,offset:0,angle:a%6*60,size:.8}):null;case`grain`:return X(ha,{...s,colorBack:co(n,.75),colors:[n,so(r,.15),i],softness:.55,intensity:.6,noise:.45,shape:c([`corners`,`wave`,`ripple`]),scale:1});case`mesh`:return X($i,{...s,colors:[n,r,so(i,.35),co(n,.45)],distortion:.85,swirl:.35,grainMixer:.25,grainOverlay:.2});case`glass`:return X(R,{...s,frame:a*700,fragmentShader:ho,uniforms:{u_c1:mo(n),u_c2:mo(r),u_c3:mo(i),u_flutes:4+a%3,u_vertical:a%2,u_seed:a%23}});case`warp`:return X(ca,{...s,colors:[n,co(n,.7),r,so(i,.3)],proportion:.42,softness:.85,distortion:.3,swirl:.85,swirlIterations:10,shapeScale:.12,shape:c([`checks`,`stripes`,`edge`]),scale:.6,fit:`cover`});default:return X(pa,{...s,colorBack:co(n,.82),colorFront:so(n,.1),shape:c([`swirl`,`ripple`,`warp`,`wave`,`simplex`]),type:c([`4x4`,`8x8`,`2x2`]),size:3,scale:1,fit:`cover`})}}function Qa(e){let[t,n]=lt(e.seed),[r,i]=lt(e.points),[a,o]=lt(e.depth),[s,c]=lt(eo.map(()=>!0)),l=e=>io.map(t=>e===`mix`||!e||e===t.id),[u,d]=lt(()=>l(e.materials)),[f,p]=lt(!0);tt(()=>n(e.seed),[e.seed]),tt(()=>i(e.points),[e.points]),tt(()=>o(e.depth),[e.depth]),tt(()=>d(l(e.materials)),[e.materials]);let m=ct(null),h=e.showInterface?2:e.columns,g=e.showInterface?2:e.rows,_=[e.colorA,e.colorB,e.colorC,e.colorD],v=io.filter((e,t)=>u[t]).map(e=>e.id),y=ot(()=>Ua(t,r,a,h,g,s,v),[t,r,a,h,g,s.join(),v.join()]),b=y.map(t=>{if(t.shape<0||t.mat)return``;let n=t.s*oo;return`<g transform="translate(${t.x*oo} ${t.y*oo}) rotate(${t.turn} ${n/2} ${n/2}) scale(${n})">${Ka(t.shape,_[no.indexOf(t.color)]||t.color,e.uid+`f`+t.shape)}</g>`}).join(``),x=`0 0 ${h*oo} ${g*oo}`,S=()=>n(e=>(e+1)%1e3),C=ct(S);C.current=S;let w=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),S())},T=(e,t)=>String(e).padStart(t,`0`),E=e.motion&&f&&!e.still?1:0;tt(()=>{if(!e.triggerId)return;let t=document.getElementById(e.triggerId);if(!t)return;let n=e=>{e.preventDefault(),C.current()},r=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),C.current())};return t.setAttribute(`role`,`button`),t.setAttribute(`tabindex`,`0`),t.style.cursor=`pointer`,t.addEventListener(`click`,n),t.addEventListener(`keydown`,r),()=>{t.removeEventListener(`click`,n),t.removeEventListener(`keydown`,r)}},[e.triggerId]);let ee=async()=>{let e=2400,t=Math.round(e*g/h),n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);r.drawImage(await Ja(lo(`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}" viewBox="${x}">${b}</svg>`)),0,0,e,t);for(let n of m.current.querySelectorAll(`.brosh-cell`)){let i=n.querySelector(`canvas`);if(!i)continue;let a=n.dataset.x*e/h,o=+n.dataset.y*t/g,s=n.dataset.s*e/h,c=document.createElement(`canvas`);c.width=c.height=Math.round(s);let l=c.getContext(`2d`);l.drawImage(i,0,0,c.width,c.height),l.globalCompositeOperation=`destination-in`,l.drawImage(await Ja(uo(+n.dataset.shape,+n.dataset.turn)),0,0,c.width,c.height),r.drawImage(c,a,o,s,s)}n.toBlob(e=>e&&te(e,`png`),`image/png`)},te=(e,n)=>{let r=document.createElement(`a`);r.href=URL.createObjectURL(e),r.download=`bro-composition-${T(t,3)}.${n}`,r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),1e3)},ne=()=>{let t=``,n=b,r=0;for(let i of m.current.querySelectorAll(`.brosh-cell`)){let a=i.querySelector(`canvas`);if(!a)continue;let o=Math.max(64,Math.min(1024,a.width)),s=document.createElement(`canvas`);s.width=s.height=o,s.getContext(`2d`).drawImage(a,0,0,o,o);let c=s.toDataURL(`image/png`),l=eo[+i.dataset.shape],u=+i.dataset.x*oo,d=+i.dataset.y*oo,f=+i.dataset.s*oo,p=`translate(${u} ${d}) rotate(${+i.dataset.turn} ${f/2} ${f/2}) scale(${f})`,m=e.uid+`x`+r++,h;l.c?(t+=`<mask id="${m}" maskUnits="userSpaceOnUse" x="${u}" y="${d}" width="${f}" height="${f}"><g transform="${p}"><path d="${l.b}" fill="#fff"/><path d="${l.c}" fill="#000"/></g></mask>`,h=`mask="url(#${m})"`):(t+=`<clipPath id="${m}"><path d="${l.b}" transform="${p}"/></clipPath>`,h=`clip-path="url(#${m})"`),n+=`<image x="${u}" y="${d}" width="${f}" height="${f}" preserveAspectRatio="none" href="${c}" xlink:href="${c}" ${h}/>`}let i=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${h*oo}" height="${g*oo}" viewBox="${x}"><defs>${t}</defs>${n}</svg>`;te(new Blob([i],{type:`image/svg+xml`}),`svg`)},re=y.filter(e=>e.mat),ie=X(`div`,{ref:m,className:`brosh-sheet`,role:`button`,tabIndex:0,"aria-label":e.label,onClick:S,onKeyDown:w,style:{aspectRatio:`${h} / ${g}`,"--brosh-ratio":h/g}},X(`svg`,{viewBox:x,"aria-hidden":!0,dangerouslySetInnerHTML:{__html:b}}),re.map((e,n)=>{let i=`url("${uo(e.shape,e.turn)}")`;return X(`div`,{key:[t,r,a,h,g,n,e.mat,e.shape,e.turn].join(`-`),className:`brosh-cell`,"data-x":e.x,"data-y":e.y,"data-s":e.s,"data-shape":e.shape,"data-turn":e.turn,style:{left:e.x/h*100+`%`,top:e.y/g*100+`%`,width:e.s/h*100+`%`,height:e.s/g*100+`%`,WebkitMaskImage:i,maskImage:i}},X(Za,{cell:e,speed:E}))})),D={"--brosh-ink":e.ink,"--brosh-panel":e.panel,"--brosh-ground":e.background};if(!e.showInterface)return X(`div`,{className:`brosh-wrap brosh-bare brosh-`+e.fit,style:D},X(`style`,null,bo),ie);let ae={metal:`Metal`,grain:`Grain`,mesh:`Mesh`,glass:`Glass`,heat:`Heat`,warp:`Warp`,smoke:`Smoke`,dither:`Dither`},O=(e,t,n,r,i,a)=>X(`label`,{className:`brosh-control brosh-label`},X(`span`,null,e),X(`input`,{type:`range`,min:n,max:r,step:1,value:t,"aria-label":e,onChange:e=>i(+e.target.value)}),X(`output`,null,T(t,a)));return X(`div`,{className:`brosh-wrap`,style:D},X(`style`,null,bo),X(`div`,{className:`brosh`},X(`div`,{className:`brosh-result`},ie),X(`div`,{className:`brosh-interface`},X(`div`,{className:`brosh-top`},X(`div`,{className:`brosh-kicker brosh-label`},X(`span`,null,`BRO generator`),X(`span`,null,`Quad tree`)),e.title&&e.title.trim()?X(`h3`,{className:`brosh-title`},e.title):null,X(`button`,{type:`button`,className:`brosh-btn brosh-fill brosh-label`,onClick:S},`Next composition`),X(`div`,{className:`brosh-controls`},O(`Seed`,t,0,999,n,3),O(`Points`,r,0,12,i,2),O(`Depth`,a,1,4,o,2)),X(`div`,{className:`brosh-group`},X(`div`,{className:`brosh-grouphead brosh-label`},X(`span`,null,`Shapes`),X(`output`,null,s.filter(Boolean).length+` / `+eo.length)),X(`div`,{className:`brosh-tiles`},eo.map((t,n)=>X(`button`,{key:n,type:`button`,className:`brosh-tile`,"aria-pressed":s[n],"aria-label":`Shape `+(n+1),onClick:()=>c(e=>e.map((e,t)=>t===n?!e:e))},X(`svg`,{viewBox:`0 0 1 1`,"aria-hidden":!0,dangerouslySetInnerHTML:{__html:Ka(n,`currentColor`,e.uid+`t`+n)}}))))),X(`div`,{className:`brosh-group`},X(`div`,{className:`brosh-grouphead brosh-label`},X(`span`,null,`Materials`),X(`output`,null,v.length+` / `+io.length)),X(`div`,{className:`brosh-pills`},io.map((e,t)=>X(`button`,{key:e.id,type:`button`,className:`brosh-pill brosh-label`,"aria-pressed":u[t],"aria-label":e.name,onClick:()=>d(e=>e.map((e,n)=>n===t?!e:e))},ae[e.id]))))),X(`div`,{className:`brosh-saves`},X(`button`,{type:`button`,className:`brosh-btn brosh-label`,"aria-pressed":f,onClick:()=>p(e=>!e)},f?`Pause`:`Play`),X(`button`,{type:`button`,className:`brosh-btn brosh-label`,"aria-label":`Save as PNG`,onClick:ee},`PNG`),X(`button`,{type:`button`,className:`brosh-btn brosh-label`,"aria-label":`Save as SVG`,onClick:ne},`SVG`)))))}function $a(e){let{style:t,...n}=e,i=c(null),a=c(null),o=`brosh`+r().replace(/[^a-zA-Z0-9]/g,``);h(()=>{if(!i.current)return;let e=Ln(i.current);return a.current=e,()=>{a.current=null,e.unmount()}},[]),h(()=>{let e=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches;a.current?.render(X(Qa,{...n,uid:o,still:e}))});let s=e.showInterface||e.fit===`width`;return/*#__PURE__*/ d(`div`,{ref:i,style:{...t,width:`100%`,height:s?`auto`:`100%`}})}var X,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo;function xo(){return(xo=t((()=>{p(),x(),m(),ht(),Bn(),Aa(),X=Ue,eo=[{b:`M0.8989 0C0.9547 0 1 0.0452 1 0.1011C1 0.1011 1 1 1 1C1 1 0 1 0 1C0 1 0 0.1011 0 0.1011C0 0.0452 0.0453 0 0.1011 0C0.1569 0 0.2022 0.0452 0.2022 0.1011C0.2022 0.0452 0.2474 0 0.3032 0C0.3591 0 0.4043 0.0452 0.4043 0.1011C0.4043 0.0452 0.4496 0 0.5054 0C0.5612 0 0.6065 0.0452 0.6065 0.1011C0.6065 0.1011 0.6065 0.0993 0.6065 0.0993C0.6065 0.0444 0.6509 0 0.7058 0C0.7517 0 0.7903 0.0311 0.8017 0.0734C0.8137 0.031 0.8527 0 0.8989 0Z`,c:``},{b:`M0 0C0 0 1 0 1 0C1 0 1 1 1 1C1 1 0 1 0 1C0 1 0 0 0 0Z`,c:`M0.5067 0.5068C0.4109 0.4102 0.2556 0.4102 0.1598 0.5068C0.1598 0.5068 0.1578 0.5088 0.1578 0.5088C0.062 0.6053 0.062 0.7618 0.1578 0.8584C0.1578 0.8584 0.1598 0.8603 0.1598 0.8603C0.2556 0.9569 0.4109 0.9569 0.5067 0.8603C0.5067 0.8603 0.5087 0.8584 0.5087 0.8584C0.6045 0.7618 0.6045 0.6053 0.5087 0.5088C0.5087 0.5088 0.5067 0.5068 0.5067 0.5068ZM0.5055 0.51C0.4097 0.6066 0.4097 0.7631 0.5055 0.8596C0.5055 0.8596 0.5075 0.8616 0.5075 0.8616C0.6033 0.9581 0.7586 0.9581 0.8544 0.8616C0.8544 0.8616 0.8564 0.8596 0.8564 0.8596C0.9522 0.7631 0.9522 0.6066 0.8564 0.51C0.8564 0.51 0.8544 0.5081 0.8544 0.5081C0.7586 0.4115 0.6033 0.4115 0.5075 0.5081C0.5075 0.5081 0.5055 0.51 0.5055 0.51ZM0.8557 0.1552C0.7599 0.0587 0.6045 0.0587 0.5087 0.1552C0.5087 0.1552 0.5067 0.1572 0.5067 0.1572C0.4109 0.2537 0.4109 0.4103 0.5067 0.5068C0.5067 0.5068 0.5087 0.5088 0.5087 0.5088C0.6045 0.6053 0.7599 0.6053 0.8557 0.5088C0.8557 0.5088 0.8577 0.5068 0.8577 0.5068C0.9535 0.4103 0.9535 0.2537 0.8577 0.1572C0.8577 0.1572 0.8557 0.1552 0.8557 0.1552ZM0.1565 0.1585C0.0607 0.255 0.0607 0.4115 0.1565 0.5081C0.1565 0.5081 0.1585 0.51 0.1585 0.51C0.2543 0.6066 0.4097 0.6066 0.5055 0.51C0.5055 0.51 0.5075 0.5081 0.5075 0.5081C0.6033 0.4115 0.6033 0.255 0.5075 0.1585C0.5075 0.1585 0.5055 0.1565 0.5055 0.1565C0.4097 0.0599 0.2543 0.0599 0.1585 0.1565C0.1585 0.1565 0.1565 0.1585 0.1565 0.1585Z`},{b:`M0.5 0C0.7761 0 1 0.221 1 0.4937C1 0.4937 1 0.5063 1 0.5063C1 0.779 0.7761 1 0.5 1C0.5 1 0.5 0.5063 0.5 0.5063C0.5 0.779 0.2761 1 0 1C0 1 0 0 0 0C0.2761 0 0.5 0.221 0.5 0.4937C0.5 0.4937 0.5 0 0.5 0Z`,c:``},{b:`M0 0.7026C0 0.8669 0.1347 1 0.3008 1C0.3008 1 0.6992 1 0.6992 1C0.8653 1 1 0.8669 1 0.7026C1 0.7026 1 0.2974 1 0.2974C1 0.1331 0.8653 0 0.6992 0C0.6992 0 0.3008 0 0.3008 0C0.1347 0 0 0.1331 0 0.2974C0 0.2974 0 0.7026 0 0.7026Z`,c:``},{b:`M1 0.409C1 0.409 0.7196 0.409 0.7196 0.409C0.7196 0.409 0.9179 0.2108 0.9179 0.2108C0.9179 0.2108 0.7892 0.0821 0.7892 0.0821C0.7892 0.0821 0.591 0.2804 0.591 0.2804C0.591 0.2804 0.591 0 0.591 0C0.591 0 0.409 0 0.409 0C0.409 0 0.409 0.2804 0.409 0.2804C0.409 0.2804 0.2108 0.0821 0.2108 0.0821C0.2108 0.0821 0.0821 0.2108 0.0821 0.2108C0.0821 0.2108 0.2804 0.409 0.2804 0.409C0.2804 0.409 0 0.409 0 0.409C0 0.409 0 0.591 0 0.591C0 0.591 0.2804 0.591 0.2804 0.591C0.2804 0.591 0.0821 0.7892 0.0821 0.7892C0.0821 0.7892 0.2108 0.9179 0.2108 0.9179C0.2108 0.9179 0.409 0.7196 0.409 0.7196C0.409 0.7196 0.409 1 0.409 1C0.409 1 0.591 1 0.591 1C0.591 1 0.591 0.7196 0.591 0.7196C0.591 0.7196 0.7892 0.9179 0.7892 0.9179C0.7892 0.9179 0.9179 0.7892 0.9179 0.7892C0.9179 0.7892 0.7196 0.591 0.7196 0.591C0.7196 0.591 1 0.591 1 0.591C1 0.591 1 0.409 1 0.409Z`,c:``},{b:`M0 0C0 0 1 0 1 0C1 0 1 0.4275 1 0.4275C1 0.7437 0.7427 1 0.4254 1C0.4254 1 0 1 0 1C0 1 0 0 0 0Z`,c:``},{b:`M1 0.4982C1 0.5911 0.9248 0.6664 0.8321 0.6664C0.8321 0.6664 0.6904 0.6664 0.6904 0.6664C0.863 0.6793 0.999 0.8238 0.999 1C0.999 1 0.001 1 0.001 1C0.001 0.8238 0.137 0.6793 0.3096 0.6664C0.3096 0.6664 0.1679 0.6664 0.1679 0.6664C0.0752 0.6664 0 0.5911 0 0.4982C0 0.4053 0.0752 0.33 0.1679 0.33C0.1679 0.33 0.2796 0.33 0.2796 0.33C0.1215 0.3036 0.001 0.1659 0.001 0C0.001 0 0.999 0 0.999 0C0.999 0.1659 0.8785 0.3036 0.7204 0.33C0.7204 0.33 0.8321 0.33 0.8321 0.33C0.9248 0.33 1 0.4053 1 0.4982Z`,c:``},{b:`M0.5 0.5C0.5 0.5 0.5001 0.7453 0.5001 0.7453C0.5 0.8387 0.5503 0.9218 0.6257 0.9661C0.6615 0.9872 0.7029 0.9995 0.7473 1C0.7639 1.0001 0.7803 0.9987 0.796 0.9958C0.8484 0.986 0.9019 0.9877 0.9545 0.9962C0.9694 0.9986 0.9844 0.9999 0.9999 0.9998C0.9999 0.9998 1 0.9998 1 0.9998C1 0.9841 0.9987 0.9688 0.9963 0.9538C0.9878 0.9017 0.986 0.8485 0.9957 0.7963C0.9988 0.7802 1.0002 0.7635 1 0.7465C0.9982 0.609 0.8828 0.5 0.7453 0.5C0.7453 0.5 0.5 0.5 0.5 0.5ZM0.5 0.5C0.5 0.5 0.2547 0.5 0.2547 0.5C0.1613 0.5 0.0782 0.5503 0.0339 0.6257C0.0128 0.6614 0.0005 0.7028 0 0.7472C-0.0001 0.7639 0.0013 0.7802 0.0043 0.796C0.014 0.8483 0.0123 0.9018 0.0038 0.9544C0.0014 0.9693 0.0001 0.9843 0.0002 0.9998C0.0002 0.9998 0.0002 0.9999 0.0002 0.9999C0.0159 0.9999 0.0312 0.9986 0.0462 0.9963C0.0983 0.9877 0.1515 0.9859 0.2037 0.9957C0.2198 0.9987 0.2365 1.0001 0.2535 0.9999C0.391 0.9981 0.5 0.8827 0.5 0.7452C0.5 0.7452 0.5 0.5 0.5 0.5ZM0.5 0C0.5 0 0.5001 0.2453 0.5001 0.2453C0.5 0.3387 0.5503 0.4218 0.6257 0.4662C0.6615 0.4872 0.7029 0.4995 0.7473 0.5C0.7639 0.5001 0.7803 0.4988 0.796 0.4958C0.8484 0.4861 0.9019 0.4878 0.9545 0.4963C0.9694 0.4986 0.9844 0.4999 0.9999 0.4998C0.9999 0.4998 1 0.4998 1 0.4998C1 0.4842 0.9987 0.4689 0.9963 0.4538C0.9878 0.4017 0.986 0.3485 0.9957 0.2964C0.9988 0.2802 1.0002 0.2636 1 0.2465C0.9982 0.109 0.8828 0.0001 0.7453 0.0001C0.7453 0.0001 0.5 0 0.5 0ZM0.5 0C0.5 0 0.2547 0.0001 0.2547 0.0001C0.1613 0 0.0782 0.0503 0.0339 0.1257C0.0128 0.1615 0.0005 0.2029 0 0.2472C-0.0001 0.2639 0.0013 0.2802 0.0043 0.296C0.014 0.3483 0.0123 0.4018 0.0038 0.4544C0.0014 0.4693 0.0001 0.4844 0.0002 0.4998C0.0002 0.4998 0.0002 0.5 0.0002 0.5C0.0159 0.5 0.0312 0.4987 0.0462 0.4963C0.0983 0.4878 0.1515 0.4859 0.2037 0.4957C0.2198 0.4987 0.2365 0.5002 0.2535 0.5C0.391 0.4981 0.5 0.3827 0.5 0.2453C0.5 0.2453 0.5 0 0.5 0Z`,c:``}],to=[90,180,270,0],no=[`#2B2B2B`,`#D9D9D9`,`#646464`,`#999999`],ro=[`#FF4B1F`,`#2F52FF`,`#C8F03C`,`#FF86C8`,`#7B4DFF`,`#FFC533`,`#12B5A5`],io=[{id:`metal`,name:`Liquid Metal`},{id:`grain`,name:`Grain Gradient`},{id:`mesh`,name:`Mesh Gradient`},{id:`glass`,name:`Fluted Glass`},{id:`heat`,name:`Heatmap`},{id:`warp`,name:`Warp`},{id:`smoke`,name:`Gem Smoke`},{id:`dither`,name:`Dithering`}],ao=6,oo=1e3,so=(e,t)=>Ga(e,`#ffffff`,t),co=(e,t)=>Ga(e,`#000000`,t),lo=e=>`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(e),uo=(e,t)=>lo(qa(e,t)),fo=.06,po=/* @__PURE__ */ new Map,mo=e=>{let[t,n,r]=Wa(e);return[t/255,n/255,r/255,1]},ho=`#version 300 es
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec4 u_c1;
uniform vec4 u_c2;
uniform vec4 u_c3;
uniform float u_flutes;
uniform float u_vertical;
uniform float u_seed;
out vec4 fragColor;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec3 field(vec2 p, float t) {
  vec3 col = u_c1.rgb * 0.5;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float k = fi * 1.7 + u_seed;
    vec2 c = 0.5 + 0.6 * vec2(sin(t * (0.31 + 0.07 * fi) + k * 2.4), cos(t * (0.23 + 0.05 * fi) + k * 1.7));
    float r = 0.5 + 0.18 * sin(k * 3.1);
    float w = smoothstep(r, 0.0, distance(p, c));
    vec3 cc = u_c1.rgb;
    if (i % 3 == 1) cc = u_c2.rgb;
    if (i % 3 == 2) cc = u_c3.rgb;
    if (i == 5) cc = vec3(1.0);
    col = mix(col, cc, w * 0.92);
  }
  return col;
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float ratio = u_resolution.x / u_resolution.y;
  float count = u_flutes;
  if (u_vertical < 0.5) { uv = uv.yx; } else { count *= max(1.0, ratio); }
  float x = uv.x * count;
  float id = floor(x);
  float f = fract(x);
  float l = f - 0.5;
  float bend = sign(l) * pow(abs(l) * 2.0, 1.7) * 0.5;
  vec2 p = vec2((id + 0.5 - bend * 2.4) / count, uv.y + bend * 0.08);
  vec3 col = field(p, u_time * 0.9);
  col *= 1.0 - 0.3 * smoothstep(0.4, 1.0, f);
  col += 0.2 * smoothstep(0.07, 0.0, f);
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.06;
  fragColor = vec4(col, 1.0);
}`,go=`#00000000`,_o={preserveDrawingBuffer:!0,premultipliedAlpha:!0,alpha:!0},vo={width:`100%`,height:`100%`},yo=1.045/(1-fo*2),bo=`
.brosh-wrap { container-type: inline-size; width: 100%; height: 100%; }
.brosh-wrap *, .brosh-wrap *::before, .brosh-wrap *::after { box-sizing: border-box; }
.brosh-bare { container-type: size; position: relative; overflow: hidden; background: var(--brosh-ground); }
.brosh-sheet { position: relative; overflow: hidden; cursor: pointer; outline-offset: 3px; }
.brosh-sheet > svg { display: block; position: absolute; inset: 0; width: 100%; height: 100%; }
.brosh-bare .brosh-sheet { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); outline: none; }
.brosh-cover .brosh-sheet { width: max(100cqw, calc(100cqh * var(--brosh-ratio))); }
.brosh-contain .brosh-sheet { width: min(100cqw, calc(100cqh * var(--brosh-ratio))); }
.brosh-bare.brosh-width { container-type: normal; height: auto; }
.brosh-width .brosh-sheet { position: relative; left: auto; top: auto; transform: none; width: 100%; }
.brosh-cell { position: absolute; -webkit-mask-size: 100% 100%; mask-size: 100% 100%; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; }
.brosh-cell > div { width: 100%; height: 100%; }
.brosh { height: 100%; display: grid; grid-template-columns: 1fr; color: var(--brosh-ink); font: 400 13px/1.5 "Martian Mono", ui-monospace, Consolas, monospace; }
.brosh-result { background: var(--brosh-ground); min-width: 0; }
.brosh-result .brosh-sheet { width: 100%; }
.brosh-interface { background: var(--brosh-panel); padding: 24px; display: flex; flex-direction: column; gap: 16px; min-width: 0; }
.brosh-top { display: flex; flex-direction: column; gap: 16px; }
.brosh-label { font-weight: 500; font-stretch: 112.5%; font-size: 11px; line-height: 1.3; letter-spacing: 0.08em; text-transform: uppercase; }
.brosh-kicker { display: flex; justify-content: space-between; gap: 12px; }
.brosh-title { margin: 0; font: 400 28px/1 "Oswald", "Arial Narrow", sans-serif; text-transform: uppercase; }
.brosh-btn { font-family: inherit; color: var(--brosh-ink); min-height: 44px; padding: 0 16px; border: 2px solid var(--brosh-ink); border-radius: 999px; background: transparent; cursor: pointer; transition: background-color .15s, color .15s; }
.brosh-btn:hover, .brosh-fill { background: var(--brosh-ink); color: var(--brosh-panel); }
.brosh-fill:hover { background: transparent; color: var(--brosh-ink); }
.brosh :focus-visible { outline: 2px solid var(--brosh-ink); outline-offset: 3px; }
.brosh-controls { display: grid; grid-template-columns: 1fr; padding-top: 8px; border-top: 2px solid var(--brosh-ink); }
.brosh-control { display: grid; grid-template-columns: 58px 1fr 30px; align-items: center; column-gap: 12px; min-height: 36px; }
.brosh-control output { text-align: right; }
.brosh-control output, .brosh-grouphead output { font-variant-numeric: tabular-nums; }
.brosh-control input { -webkit-appearance: none; appearance: none; width: 100%; height: 36px; margin: 0; background: transparent; cursor: pointer; }
.brosh-control input::-webkit-slider-runnable-track { height: 2px; background: var(--brosh-ink); }
.brosh-control input::-moz-range-track { height: 2px; background: var(--brosh-ink); }
.brosh-control input::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; margin-top: -7px; border-radius: 50%; background: var(--brosh-ink); border: 0; }
.brosh-control input::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: var(--brosh-ink); border: 0; }
.brosh-group { display: flex; flex-direction: column; gap: 10px; padding-top: 12px; border-top: 2px solid var(--brosh-ink); }
.brosh-grouphead { display: flex; justify-content: space-between; gap: 12px; }
.brosh-tiles { display: grid; grid-template-columns: repeat(8, 1fr); gap: 6px; }
.brosh-tile { aspect-ratio: 1; padding: 16%; border: 2px solid var(--brosh-ink); background: transparent; color: var(--brosh-ink); cursor: pointer; }
.brosh-tile[aria-pressed=false] { border-color: transparent; color: #999999; }
.brosh-tile svg { display: block; width: 100%; height: 100%; }
.brosh-pills { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
.brosh-pill { font-family: inherit; min-height: 36px; padding: 0 4px; border: 2px solid var(--brosh-ink); border-radius: 999px; background: var(--brosh-ink); color: var(--brosh-panel); cursor: pointer; font-size: 10px; letter-spacing: 0.04em; }
.brosh-pill[aria-pressed=false] { background: transparent; border-color: #999999; color: #666666; }
.brosh-saves { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; }
.brosh-saves .brosh-btn { padding: 0 8px; }
@container (min-width: 640px) {
  .brosh { grid-template-columns: min(46cqw, 560px) minmax(0, 1fr); }
  .brosh-interface { padding: 28px 32px; }
  .brosh-controls { grid-template-columns: 1fr; }
  .brosh-pills { grid-template-columns: repeat(4, 1fr); }
  .brosh-saves { margin-top: auto; }
}
@container (min-width: 1000px) {
  .brosh-interface { padding: 36px 40px; }
  .brosh-pills { grid-template-columns: repeat(8, 1fr); }
}
@media (prefers-reduced-motion: reduce) { .brosh-btn { transition: none; } }
`,y($a,{showInterface:{type:k.Boolean,title:`Interface`,defaultValue:!1,enabledTitle:`Show`,disabledTitle:`Hide`,description:`Show = the picture with its controls. Hide = the picture only.`},columns:{type:k.Number,title:`Columns`,defaultValue:2,min:1,max:6,step:1,displayStepper:!0,hidden:e=>e.showInterface},rows:{type:k.Number,title:`Rows`,defaultValue:1,min:1,max:4,step:1,displayStepper:!0,hidden:e=>e.showInterface},points:{type:k.Number,title:`Points`,defaultValue:3,min:0,max:12,step:1,displayStepper:!0},depth:{type:k.Number,title:`Depth`,defaultValue:2,min:1,max:4,step:1,displayStepper:!0},seed:{type:k.Number,title:`Start Seed`,defaultValue:23,min:0,max:999,step:1},materials:{type:k.Enum,title:`Materials`,options:[`off`,`mix`,`metal`,`grain`,`mesh`,`glass`,`heat`,`warp`,`smoke`,`dither`],optionTitles:[`Off`,`Mix`,`Liquid Metal`,`Grain Gradient`,`Mesh Gradient`,`Fluted Glass`,`Heatmap`,`Warp`,`Gem Smoke`,`Dithering`],defaultValue:`mix`,description:`The biggest shapes of each layout are drawn as a live shader.`},motion:{type:k.Boolean,title:`Motion`,defaultValue:!0,enabledTitle:`Play`,disabledTitle:`Still`},fit:{type:k.Enum,title:`Fit`,options:[`width`,`cover`,`contain`],optionTitles:[`Full width, no crop`,`Cover`,`Contain`],defaultValue:`width`,description:`Full width sets the height from the columns and rows, so nothing is cut.`,hidden:e=>e.showInterface},background:{type:k.Color,title:`Background`,defaultValue:`rgba(255,255,255,0)`,description:`Behind the picture. Leave clear to let the page show through.`},panel:{type:k.Color,title:`Panel`,defaultValue:`#FFFFFF`,hidden:e=>!e.showInterface},ink:{type:k.Color,title:`Ink`,defaultValue:`#2B2B2B`,hidden:e=>!e.showInterface},colorA:{type:k.Color,title:`Grey 1`,defaultValue:`#2B2B2B`},colorB:{type:k.Color,title:`Grey 2`,defaultValue:`#D9D9D9`},colorC:{type:k.Color,title:`Grey 3`,defaultValue:`#646464`},colorD:{type:k.Color,title:`Grey 4`,defaultValue:`#999999`},title:{type:k.String,title:`Title`,defaultValue:``,hidden:e=>!e.showInterface},triggerId:{type:k.String,title:`Trigger ID`,defaultValue:``,description:`Element id that also shows the next composition on click`},label:{type:k.String,title:`Label`,defaultValue:`BRO composition generator. Activate to show the next composition`}})})))()}function So(e){let{mode:t,sectionId:n,hint:i,tileWidth:a,touchOnly:o,bandHeight:l,style:f}=e,p=c(null),m=`bropat`+r().replace(/[^a-zA-Z0-9]/g,``);return h(()=>{if(t!==`tile`||!n||!p.current)return;let e=p.current,r=document.getElementById(n);if(!r)return;let i=matchMedia(ko),a=matchMedia(`(prefers-reduced-motion: reduce)`).matches,o=document.createElement(`style`),c=`#`+CSS.escape(n);o.textContent=`
${c} > :not(.bropat-over) { z-index: 1; }
${c} .bropat-over { position: absolute; inset: 0; z-index: 0; pointer-events: none; background-repeat: repeat; visibility: hidden; will-change: clip-path; transition: clip-path ${a?0:.7}s ${Ao}, visibility 0s linear ${a?0:.7}s; }
${c} .bropat-over.bropat-open { visibility: visible; transition: clip-path ${a?0:.7}s ${Ao}, visibility 0s; }
${c}.bropat-on :is(p, h1, h2, h3, h4, h5, h6, span, a, li) { --framer-text-color: #fff !important; color: #fff !important; }
${c}.bropat-on :not(.bropat-keep, .bropat-keep *) { --border-color: #fff !important; border-color: #fff !important; }
${c}.bropat-on .bropat-hint { opacity: 0; }`,document.head.appendChild(o);let l=document.createElement(`div`);l.className=`bropat-over`,l.setAttribute(`aria-hidden`,`true`),l.style.backgroundImage=Do,r.insertBefore(l,r.firstChild),getComputedStyle(r).position===`static`&&(r.style.position=`relative`);let u=0,d=(e,t)=>{let n=Math.round(e);if(u===n||e<8)return;u=n;let r=Math.min(2,s.devicePixelRatio||1),i=Math.round(e*r),a=Math.round(t*3*r),o=new Image;o.onload=()=>{if(u!==n)return;let e=document.createElement(`canvas`);e.width=i,e.height=a,e.getContext(`2d`).drawImage(o,0,0,i,a),e.toBlob(e=>{e&&u===n&&(l.style.backgroundImage=`url("${URL.createObjectURL(e)}")`)},`image/png`)},o.src=`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(Oo(i,a))},f=()=>{let t=r.getBoundingClientRect(),n=e.getBoundingClientRect();return l.style.backgroundSize=`${n.width}px ${n.height*3}px`,l.style.backgroundPosition=`${n.left-t.left}px ${n.top-t.top}px`,d(n.width,n.height),`inset(${n.top-t.top}px ${t.right-n.right}px ${t.bottom-n.bottom}px ${n.left-t.left}px)`},m=!1,h=()=>{m||!i.matches||e.getBoundingClientRect().width<8||(m=!0,l.style.transition=`none`,l.style.clipPath=f(),l.getBoundingClientRect(),l.style.transition=``,r.classList.add(`bropat-on`),l.classList.add(`bropat-open`),l.style.clipPath=`inset(0px)`)},g=()=>{m&&(m=!1,l.style.clipPath=f(),l.classList.remove(`bropat-open`),r.classList.remove(`bropat-on`))},_=setTimeout(()=>{i.matches&&f()},1200);return e.addEventListener(`pointerenter`,h),e.addEventListener(`pointerleave`,g),e.addEventListener(`focus`,h),e.addEventListener(`blur`,g),i.addEventListener(`change`,g),()=>{e.removeEventListener(`pointerenter`,h),e.removeEventListener(`pointerleave`,g),e.removeEventListener(`focus`,h),e.removeEventListener(`blur`,g),i.removeEventListener(`change`,g),clearTimeout(_),r.classList.remove(`bropat-on`),l.remove(),o.remove()}},[t,n]),t===`fill`?/*#__PURE__*/ d(`div`,{className:m,"aria-hidden":`true`,style:{...f,width:`100%`,height:l,backgroundImage:Do,backgroundRepeat:`repeat`,backgroundSize:`${a}px ${a*Co*3/Z}px`,backgroundPosition:`center top`},children:o&&/*#__PURE__*/ d(`style`,{children:`@media ${ko} { .${m} { display: none !important; } }`})}):/*#__PURE__*/ u(`div`,{ref:p,className:`bropat-keep `+m,tabIndex:0,role:`img`,"aria-label":`BRO pattern tile`,style:{...f,position:`relative`,width:`100%`,aspectRatio:`${Z} / ${Co}`,backgroundImage:Eo,backgroundSize:`100% 100%`,outlineOffset:3},children:[/*#__PURE__*/ d(`style`,{children:`.${m} .bropat-hint { display: none; transition: opacity .25s; } @media ${ko} { .${m} .bropat-hint { display: inline-flex; } }`}),i&&i.trim()?/*#__PURE__*/ u(`span`,{className:`bropat-hint bropat-keep`,style:{position:`absolute`,left:12,bottom:12,alignItems:`center`,gap:10,padding:`8px 14px 8px 12px`,borderRadius:999,background:`#FFFFFF`,color:`#2B2B2B`,font:`500 12px/1.3 "Martian Mono", ui-monospace, monospace`,fontStretch:`112.5%`,letterSpacing:`0.08em`,textTransform:`uppercase`,pointerEvents:`none`,whiteSpace:`nowrap`},children:[/*#__PURE__*/ d(`span`,{style:{color:`#2B2B2B`},children:i}),/*#__PURE__*/ d(`span`,{"aria-hidden":`true`,style:{color:`#2B2B2B`},children:`↗`})]}):null]})}var Z,Co,wo,To,Eo,Do,Oo,ko,Ao;function jo(){return(jo=t((()=>{i(),p(),x(),m(),Z=412,Co=271,wo=`<rect width="274" height="271" fill="#C8C8C8"/><rect y="135" width="138" height="136" fill="#2A2A29"/><rect x="274" width="138" height="271" fill="#999998"/><path d="M0 0H67.8C105.21 0 135.59 30.38 135.59 67.8C135.59 105.22 105.21 135.6 67.79 135.6H0V0Z" fill="#2A2A29"/><path d="M0 135.55H67.8C105.22 135.55 135.6 165.93 135.6 203.35C135.6 240.77 105.22 271.15 67.8 271.15H0V135.55Z" fill="#999998"/><path d="M138.13 271.01V203.21C138.13 165.79 168.51 135.41 205.93 135.41C243.35 135.41 273.73 165.79 273.73 203.21V271.01H138.13Z" fill="#2A2A29"/><path d="M344.05 0C306.61 0 276.25 30.35 276.25 67.8V203.22C276.25 240.66 306.6 271.02 344.05 271.02C381.49 271.02 411.85 240.67 411.85 203.22V67.8C411.85 30.36 381.5 0 344.05 0Z" fill="#999998"/>`,To=e=>`url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}")`,Eo=To(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Z} ${Co}" preserveAspectRatio="none">${wo}</svg>`),Do=To(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Z} ${Co*3}" preserveAspectRatio="none">${[0,1,2].map(e=>{let t=Z*2*e/3%Z;return`<g transform="translate(${t} ${e*Co})">${wo}</g><g transform="translate(${t-Z} ${e*Co})">${wo}</g>`}).join(``)}</svg>`),Oo=(e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${e}" height="${t}" viewBox="0 0 ${Z} ${Co*3}" preserveAspectRatio="none">${[0,1,2].map(e=>{let t=Z*2*e/3%Z;return`<g transform="translate(${t} ${e*Co})">${wo}</g><g transform="translate(${t-Z} ${e*Co})">${wo}</g>`}).join(``)}</svg>`,ko=`(hover: hover) and (pointer: fine) and (min-width: 810px)`,Ao=`cubic-bezier(0.16, 1, 0.3, 1)`,y(So,{mode:{type:k.Enum,title:`Mode`,options:[`tile`,`fill`],optionTitles:[`Tile`,`Fill`],defaultValue:`tile`,description:`Tile = one tile that opens over its section on hover. Fill = a band of the pattern.`},sectionId:{type:k.String,title:`Section ID`,defaultValue:`project`,description:`Element id of the section the pattern opens over.`,hidden:e=>e.mode!==`tile`},hint:{type:k.String,title:`Hint`,defaultValue:`Hover to fill the section`,hidden:e=>e.mode!==`tile`},tileWidth:{type:k.Number,title:`Tile Width`,defaultValue:206,min:60,max:824,step:1,unit:`px`,hidden:e=>e.mode!==`fill`},bandHeight:{type:k.Number,title:`Height`,defaultValue:272,min:40,max:1200,step:1,unit:`px`,hidden:e=>e.mode!==`fill`},touchOnly:{type:k.Boolean,title:`Touch Only`,defaultValue:!1,enabledTitle:`Yes`,disabledTitle:`No`,description:`Hide the band where the hover version works (mouse, 810px and wider).`,hidden:e=>e.mode!==`fill`}})})))()}var Mo,No,Po;function Fo(){return(Fo=t((()=>{x(),ae.loadFonts([`FS;Oswald-regular`,`FS;Oswald-bold`]),Mo=[{explicitInter:!0,fonts:[{cssFamilyName:`Oswald`,openType:!0,source:`fontshare`,style:`normal`,uiFamilyName:`Oswald`,url:`/fonts/t/fontshare_wf_PYCLPQS6HZBLJGMCPKBPEXQKWPKQ7OHE_TPDXSFLT6F2DLRHVAQNPEX367ZCFB6CP_OF7M536OVLRNXVSLVYIW3HQVUIUZ56CU.woff2`,weight:`400`},{cssFamilyName:`Oswald`,openType:!0,source:`fontshare`,style:`normal`,uiFamilyName:`Oswald`,url:`/fonts/t/fontshare_wf_4BEU2H62BE4J563L6WLMVQKHOL2QMEWK_KH4J4NPLOSGQTTA3TD7LQA62CQTZ5NMO_J6GZW3TVVNILH7PYSPMC3JPNPGFXNPSF.woff2`,weight:`700`}]}],No=[`.framer-3vzVz .framer-styles-preset-1036fe5:not(.rich-text-wrapper), .framer-3vzVz .framer-styles-preset-1036fe5.rich-text-wrapper p { --framer-font-family: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-family-bold: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 88px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,`@media (max-width: 1483px) and (min-width: 1224px) { .framer-3vzVz .framer-styles-preset-1036fe5:not(.rich-text-wrapper), .framer-3vzVz .framer-styles-preset-1036fe5.rich-text-wrapper p { --framer-font-family: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-family-bold: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 76px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,`@media (max-width: 1223px) and (min-width: 810px) { .framer-3vzVz .framer-styles-preset-1036fe5:not(.rich-text-wrapper), .framer-3vzVz .framer-styles-preset-1036fe5.rich-text-wrapper p { --framer-font-family: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-family-bold: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 72px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,`@media (max-width: 809px) and (min-width: 0px) { .framer-3vzVz .framer-styles-preset-1036fe5:not(.rich-text-wrapper), .framer-3vzVz .framer-styles-preset-1036fe5.rich-text-wrapper p { --framer-font-family: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-family-bold: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`],Po=`framer-3vzVz`})))()}var Io,Lo,Ro;function zo(){return(zo=t((()=>{x(),ae.loadFonts([`FS;Oswald-regular`,`FS;Oswald-bold`]),Io=[{explicitInter:!0,fonts:[{cssFamilyName:`Oswald`,openType:!0,source:`fontshare`,style:`normal`,uiFamilyName:`Oswald`,url:`/fonts/t/fontshare_wf_PYCLPQS6HZBLJGMCPKBPEXQKWPKQ7OHE_TPDXSFLT6F2DLRHVAQNPEX367ZCFB6CP_OF7M536OVLRNXVSLVYIW3HQVUIUZ56CU.woff2`,weight:`400`},{cssFamilyName:`Oswald`,openType:!0,source:`fontshare`,style:`normal`,uiFamilyName:`Oswald`,url:`/fonts/t/fontshare_wf_4BEU2H62BE4J563L6WLMVQKHOL2QMEWK_KH4J4NPLOSGQTTA3TD7LQA62CQTZ5NMO_J6GZW3TVVNILH7PYSPMC3JPNPGFXNPSF.woff2`,weight:`700`}]}],Lo=[`.framer-3ffQT .framer-styles-preset-18g8ivp:not(.rich-text-wrapper), .framer-3ffQT .framer-styles-preset-18g8ivp.rich-text-wrapper h3 { --framer-font-family: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-family-bold: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on, 'tnum' on; --framer-font-size: 128px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,`@media (max-width: 1483px) and (min-width: 1224px) { .framer-3ffQT .framer-styles-preset-18g8ivp:not(.rich-text-wrapper), .framer-3ffQT .framer-styles-preset-18g8ivp.rich-text-wrapper h3 { --framer-font-family: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-family-bold: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on, 'tnum' on; --framer-font-size: 104px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,`@media (max-width: 1223px) and (min-width: 810px) { .framer-3ffQT .framer-styles-preset-18g8ivp:not(.rich-text-wrapper), .framer-3ffQT .framer-styles-preset-18g8ivp.rich-text-wrapper h3 { --framer-font-family: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-family-bold: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on, 'tnum' on; --framer-font-size: 88px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`,`@media (max-width: 809px) and (min-width: 0px) { .framer-3ffQT .framer-styles-preset-18g8ivp:not(.rich-text-wrapper), .framer-3ffQT .framer-styles-preset-18g8ivp.rich-text-wrapper h3 { --framer-font-family: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-family-bold: "Oswald", "Oswald Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on, 'tnum' on; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`],Ro=`framer-3ffQT`})))()}var Bo,Vo,Ho,Uo;function Wo(){return(Wo=t((()=>{x(),ae.loadFonts([`GF;Martian Mono-variable-regular`]),Bo=[{defaultValue:400,maxValue:800,minValue:100,name:`Weight`,tag:`wght`},{defaultValue:112.5,maxValue:112.5,minValue:75,name:`Width`,tag:`wdth`}],Vo=[{explicitInter:!0,fonts:[{cssFamilyName:`Martian Mono Variable`,openType:!0,source:`google`,style:`normal`,uiFamilyName:`Martian Mono`,url:`/fonts/g/s_martianmono_v6_2V0aKIcADoYhV6w87xrTKjsiB6PJZ2Xx8w.woff2`,variationAxes:Bo,weight:`400`}]}],Ho=[`.framer-grPmy .framer-styles-preset-15mkcj0:not(.rich-text-wrapper), .framer-grPmy .framer-styles-preset-15mkcj0.rich-text-wrapper p { --framer-font-family: "Martian Mono Variable", "Martian Mono Variable Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500, "wdth" 112.5; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,`@media (max-width: 1483px) and (min-width: 1224px) { .framer-grPmy .framer-styles-preset-15mkcj0:not(.rich-text-wrapper), .framer-grPmy .framer-styles-preset-15mkcj0.rich-text-wrapper p { --framer-font-family: "Martian Mono Variable", "Martian Mono Variable Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500, "wdth" 112.5; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 1223px) and (min-width: 810px) { .framer-grPmy .framer-styles-preset-15mkcj0:not(.rich-text-wrapper), .framer-grPmy .framer-styles-preset-15mkcj0.rich-text-wrapper p { --framer-font-family: "Martian Mono Variable", "Martian Mono Variable Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500, "wdth" 112.5; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 809px) and (min-width: 0px) { .framer-grPmy .framer-styles-preset-15mkcj0:not(.rich-text-wrapper), .framer-grPmy .framer-styles-preset-15mkcj0.rich-text-wrapper p { --framer-font-family: "Martian Mono Variable", "Martian Mono Variable Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 500, "wdth" 112.5; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`],Uo=`framer-grPmy`})))()}var Go,Ko,qo,Jo;function Yo(){return(Yo=t((()=>{x(),ae.loadFonts([`GF;Martian Mono-variable-regular`]),Go=[{defaultValue:400,maxValue:800,minValue:100,name:`Weight`,tag:`wght`},{defaultValue:112.5,maxValue:112.5,minValue:75,name:`Width`,tag:`wdth`}],Ko=[{explicitInter:!0,fonts:[{cssFamilyName:`Martian Mono Variable`,openType:!0,source:`google`,style:`normal`,uiFamilyName:`Martian Mono`,url:`/fonts/g/s_martianmono_v6_2V0aKIcADoYhV6w87xrTKjsiB6PJZ2Xx8w.woff2`,variationAxes:Go,weight:`400`}]}],qo=[`.framer-fWMuK .framer-styles-preset-1fyrg7p:not(.rich-text-wrapper), .framer-fWMuK .framer-styles-preset-1fyrg7p.rich-text-wrapper p { --framer-font-family: "Martian Mono Variable", "Martian Mono Variable Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 400, "wdth" 100; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,`@media (max-width: 1483px) and (min-width: 1224px) { .framer-fWMuK .framer-styles-preset-1fyrg7p:not(.rich-text-wrapper), .framer-fWMuK .framer-styles-preset-1fyrg7p.rich-text-wrapper p { --framer-font-family: "Martian Mono Variable", "Martian Mono Variable Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 400, "wdth" 100; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 1223px) and (min-width: 810px) { .framer-fWMuK .framer-styles-preset-1fyrg7p:not(.rich-text-wrapper), .framer-fWMuK .framer-styles-preset-1fyrg7p.rich-text-wrapper p { --framer-font-family: "Martian Mono Variable", "Martian Mono Variable Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 400, "wdth" 100; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,`@media (max-width: 809px) and (min-width: 0px) { .framer-fWMuK .framer-styles-preset-1fyrg7p:not(.rich-text-wrapper), .framer-fWMuK .framer-styles-preset-1fyrg7p.rich-text-wrapper p { --framer-font-family: "Martian Mono Variable", "Martian Mono Variable Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 400, "wdth" 100; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`],Jo=`framer-fWMuK`})))()}var Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms;function hs(){return(hs=t((()=>{p(),x(),pe(),m(),me(),za(),xo(),jo(),ge(),Fo(),zo(),Wo(),Yo(),ve(),Xo=C(he),Zo=C($a),Qo=C(Na),$o=C(So),es=C(_e),ts={A0IQ_z76s:`(min-width: 1484px)`,OtjKsgyMk:`(min-width: 1224px) and (max-width: 1483.98px)`,rmv4JHGBy:`(min-width: 810px) and (max-width: 1223.98px)`,XV2fc68Ib:`(max-width: 809.98px)`},ns=()=>typeof document<`u`,rs=[],is=`framer-L8nVi`,as={A0IQ_z76s:`framer-v-1c005mn`,OtjKsgyMk:`framer-v-1a45oad`,rmv4JHGBy:`framer-v-1hi6c0a`,XV2fc68Ib:`framer-v-1aobl6h`},os=(e,t,n)=>e&&t?`position`:n,ss=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},cs={"Smaller desktop":`OtjKsgyMk`,Desktop:`A0IQ_z76s`,Phone:`XV2fc68Ib`,Tablet:`rmv4JHGBy`},ls=({value:e})=>oe()?null:/*#__PURE__*/ d(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),us=({height:e,id:t,width:n,...r})=>({...r,variant:cs[r.variant]??r.variant??`A0IQ_z76s`}),ds=/*#__PURE__*/ f(function(e,t){let i=c(null),a=t??i;r();let{activeLocale:s,contentLocale:f,setLocale:p}=re(),m=O(),{style:h,className:v,layoutId:y,variant:b,...x}=us(e),S=l(()=>ye({},f),[f]);w(S);let[C,ae]=ne(b,ts,!1),oe=g(is,Uo,Jo,Ro,Po),se=n(ee)?.isLayoutTemplate,k=!!n(de)?.transition?.layout,le=os(se,k),pe=ce(`MXVLDAuhd`),me=c(null),ge=ce(`VdmqJRHFt`),ve=c(null),be=ce(`BMwQbeKCS`),xe=c(null),Se=ce(`kTWzdHHmI`),Ce=c(null),we=ce(`xBaU1aJ4k`),Te=c(null),Ee=ce(`V4oS8XBsj`),De=c(null),Oe=ce(`uVjMeYupC`),ke=c(null),Ae=ce(`LANiczcO_`),je=c(null),Me=ce(`Tu_24S1xO`),Ne=c(null),Pe=ce(`mOpWcKZJA`),Fe=c(null),Ie=ce(`eMcrgTBFu`),Le=c(null),Re=()=>!ns()||C!==`XV2fc68Ib`,ze=()=>!ns()||C===`OtjKsgyMk`,Be=()=>!ns()||C!==`OtjKsgyMk`,Ve=ce(`Mq8zL7lgc`),He=c(null),Ue=ce(`ynUi0BlNF`),We=c(null),Ge=ce(`e8kmuRy2R`),Ke=c(null),qe=ce(`jc4_Fv7y7`),Je=c(null),j=ce(`Cea1CBONr`),Ye=c(null);return te({}),/*#__PURE__*/ d(ee.Provider,{value:{activeVariantId:C,humanReadableVariantMap:cs,primaryVariantId:`A0IQ_z76s`,variantClassNames:as},children:/*#__PURE__*/ u(fe,{id:y??`jo9Xuyb7V`,children:[/*#__PURE__*/ d(ls,{value:`html body { background: var(--token-77673ccd-cc49-40fe-a65e-de36307fb730); }`}),/*#__PURE__*/ u(ue.div,{...x,className:g(oe,`framer-1c005mn`,v),ref:a,style:{...h},children:[/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{width:`min(${m?.width||`100vw`} * 0.84, 77.965vw)`},rmv4JHGBy:{width:`min(${m?.width||`100vw`} * 0.86, 77.965vw)`},XV2fc68Ib:{width:`min(${m?.width||`100vw`} * 0.9, 77.965vw)`}},children:/*#__PURE__*/ d(D,{height:64,width:`min(${m?.width||`100vw`} * 0.78, 77.965vw)`,y:0,children:/*#__PURE__*/ d(T,{className:`framer-xax67u-container`,layout:le,layoutScroll:!0,nodeId:`pvDC0fc58`,scopeId:`jo9Xuyb7V`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{rmv4JHGBy:{variant:ss(`LQiwxNAx9`)},XV2fc68Ib:{variant:ss(`LQiwxNAx9`)}},children:/*#__PURE__*/ d(he,{height:`100%`,id:`pvDC0fc58`,layoutId:`pvDC0fc58`,style:{maxWidth:`100%`,width:`100%`},variant:ss(`qj6fCTNGD`),width:`100%`})})})})}),/*#__PURE__*/ d(ue.section,{className:`framer-euayji`,"data-framer-name":`00 Cover`,layout:le,children:/*#__PURE__*/ u(`div`,{className:`framer-1lw0wwi`,"data-framer-name":`Column`,children:[/*#__PURE__*/ u(`div`,{className:`framer-aitbim`,"data-framer-name":`Meta`,children:[/*#__PURE__*/ d(`div`,{className:`framer-edqiql`,"data-border":!0,"data-framer-name":`Pill BRO`,children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`BRO`})}),className:`framer-d2d79t`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ d(`div`,{className:`framer-i0ash7`,"data-border":!0,"data-framer-name":`Pill Naming & identity`,children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Naming & identity`})}),className:`framer-njlbzb`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ d(`div`,{className:`framer-1cz40ru`,"data-border":!0,"data-framer-name":`Pill 3 weeks, fast-tracked`,children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Senior Visual Designer`})}),className:`framer-1ga8lau`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ u(`div`,{className:`framer-1mu2amv`,"data-framer-name":`Cover Stage`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`h1`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-size":`354.6345629514541px`,"--framer-line-height":`1em`,"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`IDENTITY`})}),className:`framer-k5lpkb`,"data-framer-name":`Title`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,viewBox:`0 0 1158 355`,withExternalLayout:!0}),/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO's building blocks rendered as soft 3D objects`,fit:`fill`,pixelHeight:1044,pixelWidth:1600,sizes:`820px`,src:`https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?width=1600&height=1044`,srcSet:`https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?scale-down-to=512&width=1600&height=1044 512w,https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?scale-down-to=1024&width=1600&height=1044 1024w,https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?width=1600&height=1044 1600w`}},rmv4JHGBy:{background:{alt:`BRO's building blocks rendered as soft 3D objects`,fit:`fill`,pixelHeight:1044,pixelWidth:1600,sizes:`632px`,src:`https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?width=1600&height=1044`,srcSet:`https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?scale-down-to=512&width=1600&height=1044 512w,https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?scale-down-to=1024&width=1600&height=1044 1024w,https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?width=1600&height=1044 1600w`}},XV2fc68Ib:{background:{alt:`BRO's building blocks rendered as soft 3D objects`,fit:`fill`,pixelHeight:1044,pixelWidth:1600,sizes:`calc(${m?.width||`100vw`} * 0.9 + 90px)`,src:`https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?width=1600&height=1044`,srcSet:`https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?scale-down-to=512&width=1600&height=1044 512w,https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?scale-down-to=1024&width=1600&height=1044 1024w,https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?width=1600&height=1044 1600w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO's building blocks rendered as soft 3D objects`,fit:`fill`,pixelHeight:1044,pixelWidth:1600,sizes:`910px`,src:`https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?width=1600&height=1044`,srcSet:`https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?scale-down-to=512&width=1600&height=1044 512w,https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?scale-down-to=1024&width=1600&height=1044 1024w,https://framerusercontent.com/images/YMyS1fWUcOTRwk8JxyWDNDw08VE.png?width=1600&height=1044 1600w`},className:`framer-hsayjj`,"data-framer-name":`3D Blocks`})}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Furniture manufacturer`})}),className:`framer-s3rru7`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-ot1h64`,"data-border":!0,"data-framer-name":`Intro`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1ul5aao`,"data-framer-name":`Left`,children:/*#__PURE__*/ u(`div`,{className:`framer-193hmsw`,"data-border":!0,"data-framer-name":`Pill Opening`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`00`})}),className:`framer-ax1c4a`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Opening`})}),className:`framer-c070h`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`→`})}),className:`framer-a2g7v1`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})}),/*#__PURE__*/ u(`div`,{className:`framer-1hgghm8`,"data-framer-name":`Right`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`A furniture maker that supplies Nova Poshta and Carlsberg had a name people struggled to read. I renamed it BRO and built the identity: the mark, the guideline and a generator that draws its layouts. Eight weeks, solo. Three years on, the company still uses the name and the mark`})}),className:`framer-16aptv`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Naming, identity and a layout generator for a Kyiv commercial furniture manufacturer, 2023`})}),className:`framer-13odrjo`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]}),/*#__PURE__*/ u(`div`,{className:`framer-sflydj`,"data-framer-name":`Figure`,children:[/*#__PURE__*/ d(`div`,{className:`framer-5i53b7`,"data-framer-name":`Generator Box`,children:/*#__PURE__*/ d(D,{children:/*#__PURE__*/ d(T,{className:`framer-1ixdrx1-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`BRO Paper Generator`,isAuthoredByUser:!0,name:`BRO Paper Generator`,nodeId:`EfbDx44Bw`,scopeId:`jo9Xuyb7V`,children:/*#__PURE__*/ d($a,{background:`rgba(255, 255, 255, 0)`,colorA:`rgb(43, 43, 43)`,colorB:`rgb(255, 255, 255)`,colorC:`rgb(100, 100, 100)`,colorD:`rgb(153, 153, 153)`,columns:2,depth:1,fit:`width`,height:`100%`,id:`EfbDx44Bw`,ink:`rgb(43, 43, 43)`,label:`BRO composition generator. Activate to show the next composition`,layoutId:`EfbDx44Bw`,materials:`mix`,motion:!0,name:`BRO Paper Generator`,panel:`rgb(255, 255, 255)`,points:2,rows:1,seed:21,showInterface:!1,style:{width:`100%`},title:``,triggerId:`bro-generator-next`,width:`100%`})})})}),/*#__PURE__*/ u(`div`,{className:`framer-1drjai6`,"data-framer-name":`Caption`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea, rgb(153, 153, 153))`},children:`Fig. 01  Composition generator, live shaders`})}),className:`framer-1ogapip`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Click for the next layout`})}),className:`framer-hqi0d3`,fonts:[`Inter`],id:pe,ref:me,verticalAlignment:`top`,withExternalLayout:!0})]})]})]})}),/*#__PURE__*/ d(ue.section,{className:`framer-19j6fj1`,"data-framer-name":`01 Results`,id:ge,layout:le,ref:ve,children:/*#__PURE__*/ u(`div`,{className:`framer-16l85tv`,"data-framer-name":`Column`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1xufxza`,"data-framer-name":`Head`,children:/*#__PURE__*/ u(`div`,{className:`framer-9xrbg6`,"data-framer-name":`Title`,children:[/*#__PURE__*/ u(`div`,{className:`framer-98tkhh`,"data-border":!0,"data-framer-name":`Pill Results`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`01`})}),className:`framer-1s1ab2v`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`Numbers`})}),className:`framer-1nbvlk2`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`→`})}),className:`framer-1iqdn8y`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`h3`,{className:`framer-styles-preset-18g8ivp`,"data-styles-preset":`q5FbbJ5Kw`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`Results`})}),className:`framer-1rhq2un`,"data-framer-name":`Heading`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})}),/*#__PURE__*/ u(`div`,{className:`framer-zlf4cy`,"data-framer-name":`Readings`,children:[/*#__PURE__*/ u(`div`,{className:`framer-1lurhep`,"data-framer-name":`Reading 2`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`01`})}),className:`framer-10z8umt`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`+35%`})}),className:`framer-11m71aw`,"data-framer-name":`Figure`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Requests in 6 months`})}),className:`framer-ki7qbw`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-ue97mb`,"data-framer-name":`Reading 1`,children:[/*#__PURE__*/ d(D,{children:/*#__PURE__*/ d(T,{className:`framer-1oasv4o-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Glass`,isAuthoredByUser:!0,name:`Glass`,nodeId:`ImhAagoGJ`,scopeId:`jo9Xuyb7V`,children:/*#__PURE__*/ d(Na,{colorA:`rgb(123, 77, 255)`,colorB:`rgb(255, 134, 200)`,colorC:`rgb(47, 82, 255)`,direction:`vertical`,flutes:5,height:`100%`,id:`ImhAagoGJ`,layoutId:`ImhAagoGJ`,material:`grain`,name:`Glass`,seed:3,speed:1,style:{height:`100%`,width:`100%`},width:`100%`})})}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`02`})}),className:`framer-1qlb4fx`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`3yr`})}),className:`framer-afg5jp`,"data-framer-name":`Figure`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`In daily use`})}),className:`framer-1fs4hbd`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-s22ds7`,"data-framer-name":`Reading 3`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`03`})}),className:`framer-1yag3im`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`+16`})}),className:`framer-1uk6je9`,"data-framer-name":`Figure`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Huge clients`})}),className:`framer-1llfsmh`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-p3hibf`,"data-border":!0,"data-framer-name":`Reading 4`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`04`})}),className:`framer-1yo9amu`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`150+`})}),className:`framer-8v5f82`,"data-framer-name":`Figure`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`Names written`})}),className:`framer-1x8s89a`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})}),/*#__PURE__*/ d(ue.nav,{className:`framer-12o0ec`,"data-framer-name":`Contents`,id:be,layout:le,ref:xe,children:/*#__PURE__*/ u(`div`,{className:`framer-n9gjdi`,"data-framer-name":`Sheet`,children:[/*#__PURE__*/ d(ie,{href:{hash:`:VdmqJRHFt`,webPageId:`jo9Xuyb7V`},motionChild:!0,nodeId:`CJCl6prv5`,scopeId:`jo9Xuyb7V`,smoothScroll:!0,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:``,fit:`fill`,pixelHeight:800,pixelWidth:1200,sizes:`342px`,src:`https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?width=1200&height=800`,srcSet:`https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?scale-down-to=512&width=1200&height=800 512w,https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?scale-down-to=1024&width=1200&height=800 1024w,https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?width=1200&height=800 1200w`}},rmv4JHGBy:{background:{alt:``,fit:`fill`,pixelHeight:800,pixelWidth:1200,sizes:`345px`,src:`https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?width=1200&height=800`,srcSet:`https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?scale-down-to=512&width=1200&height=800 512w,https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?scale-down-to=1024&width=1200&height=800 1024w,https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?width=1200&height=800 1200w`}},XV2fc68Ib:{background:{alt:``,fit:`fill`,pixelHeight:800,pixelWidth:1200,sizes:`351px`,src:`https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?width=1200&height=800`,srcSet:`https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?scale-down-to=512&width=1200&height=800 512w,https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?scale-down-to=1024&width=1200&height=800 1024w,https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?width=1200&height=800 1200w`}}},children:/*#__PURE__*/ d(A,{as:`a`,background:{alt:``,fit:`fill`,pixelHeight:800,pixelWidth:1200,sizes:`385px`,src:`https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?width=1200&height=800`,srcSet:`https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?scale-down-to=512&width=1200&height=800 512w,https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?scale-down-to=1024&width=1200&height=800 1024w,https://framerusercontent.com/images/Ros0Ps4PgJU4LAZ10SrUyPJQk.webp?width=1200&height=800 1200w`},className:`framer-1sbh8si framer-1sbydyu`,"data-framer-name":`Item Results`,children:/*#__PURE__*/ u(`div`,{className:`framer-40cknt`,"data-framer-name":`Text`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`40px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`,"--framer-text-transform":`uppercase`},children:`01`})}),className:`framer-1phpgsg`,"data-framer-name":`Number`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`Results`})}),className:`framer-e8cick`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-r0163z`,"data-framer-name":`Arrow`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1boi9bz`,"data-framer-name":`Line`}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`→`})}),className:`framer-1loibw0`,"data-framer-name":`Head`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})})})}),/*#__PURE__*/ d(ie,{href:{hash:`:kTWzdHHmI`,webPageId:`jo9Xuyb7V`},motionChild:!0,nodeId:`RBtZ96prU`,scopeId:`jo9Xuyb7V`,smoothScroll:!0,children:/*#__PURE__*/ u(ue.a,{className:`framer-2n0ztd framer-1sbydyu`,"data-framer-name":`Item Project`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`40px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`,"--framer-text-transform":`uppercase`},children:`02`})}),className:`framer-1kew9wn`,"data-framer-name":`Number`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-1g7pywz`,"data-framer-name":`Text`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Project`})}),className:`framer-dworik`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-14u4za4`,"data-framer-name":`Arrow`,children:[/*#__PURE__*/ d(`div`,{className:`framer-ops8mx`,"data-framer-name":`Line`}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`→`})}),className:`framer-bl6xmw`,"data-framer-name":`Head`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})}),/*#__PURE__*/ d(ie,{href:{hash:`:xBaU1aJ4k`,webPageId:`jo9Xuyb7V`},motionChild:!0,nodeId:`j2QMXEERH`,scopeId:`jo9Xuyb7V`,smoothScroll:!0,children:/*#__PURE__*/ d(ue.a,{className:`framer-7dg86j framer-1sbydyu`,"data-framer-name":`Item Brief`,children:/*#__PURE__*/ u(`div`,{className:`framer-13zmxrw`,"data-framer-name":`Text`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`40px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`,"--framer-text-transform":`uppercase`},children:`03`})}),className:`framer-rgz61`,"data-framer-name":`Number`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`Brief`})}),className:`framer-ibzf2w`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-1pxnuqo`,"data-framer-name":`Arrow`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`←`})}),className:`framer-1w1esh`,"data-framer-name":`Head`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(`div`,{className:`framer-1fx4y71`,"data-framer-name":`Line`})]})]})})}),/*#__PURE__*/ d(ie,{href:{hash:`:V4oS8XBsj`,webPageId:`jo9Xuyb7V`},motionChild:!0,nodeId:`But6fWjbp`,scopeId:`jo9Xuyb7V`,smoothScroll:!0,children:/*#__PURE__*/ d(ue.a,{className:`framer-113e0j8 framer-1sbydyu`,"data-framer-name":`Item Research`,children:/*#__PURE__*/ u(`div`,{className:`framer-4golsx`,"data-framer-name":`Text`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`40px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`,"--framer-text-transform":`uppercase`},children:`04`})}),className:`framer-1uowduu`,"data-framer-name":`Number`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Research`})}),className:`framer-10lug9c`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-6phssd`,"data-framer-name":`Arrow`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`←`})}),className:`framer-ymxt74`,"data-framer-name":`Head`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(`div`,{className:`framer-1uwx8bd`,"data-framer-name":`Line`})]})]})})}),/*#__PURE__*/ d(ie,{href:{hash:`:Mq8zL7lgc`,webPageId:`jo9Xuyb7V`},motionChild:!0,nodeId:`nKCvvGuJa`,scopeId:`jo9Xuyb7V`,smoothScroll:!0,children:/*#__PURE__*/ u(ue.a,{className:`framer-1b1rbo0 framer-1sbydyu`,"data-border":!0,"data-framer-name":`Item Principles`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`40px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`,"--framer-text-transform":`uppercase`},children:`05`})}),className:`framer-1os4y5f`,"data-framer-name":`Number`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-z7pqmk`,"data-framer-name":`Text`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Principles`})}),className:`framer-1nzxqzp`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-npf4zv`,"data-framer-name":`Arrow`,children:[/*#__PURE__*/ d(`div`,{className:`framer-jatvqm`,"data-framer-name":`Line`}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`→`})}),className:`framer-1dr58h5`,"data-framer-name":`Head`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})}),/*#__PURE__*/ d(ie,{href:{hash:`:eMcrgTBFu`,webPageId:`jo9Xuyb7V`},motionChild:!0,nodeId:`PZZ733t6Q`,scopeId:`jo9Xuyb7V`,smoothScroll:!0,children:/*#__PURE__*/ u(ue.a,{className:`framer-1600tfv framer-1sbydyu`,"data-border":!0,"data-framer-name":`Item Process`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`40px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`,"--framer-text-transform":`uppercase`},children:`06`})}),className:`framer-ldu6bh`,"data-framer-name":`Number`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-7aobca`,"data-framer-name":`Text`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Process`})}),className:`framer-ww5a3r`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-1pvyv4k`,"data-framer-name":`Arrow`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1agg53b`,"data-framer-name":`Line`}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`→`})}),className:`framer-d62ox2`,"data-framer-name":`Head`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})}),/*#__PURE__*/ d(ie,{href:{hash:`:Cea1CBONr`,webPageId:`jo9Xuyb7V`},motionChild:!0,nodeId:`rCk14TZYs`,scopeId:`jo9Xuyb7V`,smoothScroll:!0,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:``,fit:`fill`,pixelHeight:702,pixelWidth:702,sizes:`213px`,src:`https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?width=702&height=702`,srcSet:`https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?scale-down-to=512&width=702&height=702 512w,https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?width=702&height=702 702w`}},rmv4JHGBy:{background:{alt:``,fit:`fill`,pixelHeight:702,pixelWidth:702,sizes:`217px`,src:`https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?width=702&height=702`,srcSet:`https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?scale-down-to=512&width=702&height=702 512w,https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?width=702&height=702 702w`}},XV2fc68Ib:{background:{alt:``,fit:`fill`,pixelHeight:702,pixelWidth:702,sizes:`186px`,src:`https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?width=702&height=702`,srcSet:`https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?scale-down-to=512&width=702&height=702 512w,https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?width=702&height=702 702w`}}},children:/*#__PURE__*/ d(A,{as:`a`,background:{alt:``,fit:`fill`,pixelHeight:702,pixelWidth:702,sizes:`240px`,src:`https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?width=702&height=702`,srcSet:`https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?scale-down-to=512&width=702&height=702 512w,https://framerusercontent.com/images/nvf2Hpcx4wxZl7q23urUwbEr6E.png?width=702&height=702 702w`},className:`framer-ydgkci framer-1sbydyu`,"data-framer-name":`Item Generator`,children:/*#__PURE__*/ u(`div`,{className:`framer-edkerr`,"data-framer-name":`Text`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`40px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`,"--framer-text-transform":`uppercase`},children:`07`})}),className:`framer-ltol30`,"data-framer-name":`Number`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`Generator`})}),className:`framer-itw98y`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-5olru9`,"data-framer-name":`Arrow`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`←`})}),className:`framer-1hvfeti`,"data-framer-name":`Head`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(`div`,{className:`framer-1q81c4s`,"data-framer-name":`Line`})]})]})})})})]})}),/*#__PURE__*/ d(ue.section,{className:`framer-1iapi6r`,"data-framer-name":`02 Project`,id:Se,layout:le,ref:Ce,children:/*#__PURE__*/ u(`div`,{className:`framer-x2i07n`,"data-framer-name":`Column`,children:[/*#__PURE__*/ u(`div`,{className:`framer-m13bcr`,"data-framer-name":`Project`,children:[/*#__PURE__*/ u(`div`,{className:`framer-6tic7w`,"data-border":!0,"data-framer-name":`Pill Project data`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`02`})}),className:`framer-c2p5j4`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Project data`})}),className:`framer-9mbj9a`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`→`})}),className:`framer-aq23q7`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`h3`,{className:`framer-styles-preset-18g8ivp`,"data-styles-preset":`q5FbbJ5Kw`,dir:`auto`,children:`Project`})}),className:`framer-auqxpk`,"data-framer-name":`Heading`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-n8figq`,"data-border":!0,"data-framer-name":`Spec Sheet`,children:[/*#__PURE__*/ u(`div`,{className:`framer-1sj2m5v`,"data-border":!0,"data-framer-name":`Row Company`,children:[/*#__PURE__*/ u(`div`,{className:`framer-v9o9ay`,"data-framer-name":`Key`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`01`})}),className:`framer-1h7u08u`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Company`})}),className:`framer-rjwc0a`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(E,{breakpoint:C,overrides:{XV2fc68Ib:{children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`BRO, commercial furniture manufacturer`})})}},children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`BRO, commercial furniture manufacturer`})}),className:`framer-1g798tp`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ u(`div`,{className:`framer-19jm9q4`,"data-border":!0,"data-framer-name":`Row My role`,children:[/*#__PURE__*/ u(`div`,{className:`framer-x66dyo`,"data-framer-name":`Key`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`02`})}),className:`framer-1cilcki`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`My role`})}),className:`framer-v57brq`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(E,{breakpoint:C,overrides:{XV2fc68Ib:{children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Senior Visual Designer and Copywriter. Naming and identity`})})}},children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Senior Visual Designer and Copywriter. Naming and identity`})}),className:`framer-l7vawp`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ u(`div`,{className:`framer-m30h6n`,"data-border":!0,"data-framer-name":`Row Timeline`,children:[/*#__PURE__*/ u(`div`,{className:`framer-xgsb7x`,"data-framer-name":`Key`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`03`})}),className:`framer-1x0s4le`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Timeline`})}),className:`framer-8yci86`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(E,{breakpoint:C,overrides:{XV2fc68Ib:{children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`8 weeks`})})}},children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`8 weeks`})}),className:`framer-bec7b6`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]})]})]}),/*#__PURE__*/ u(`div`,{className:`framer-1ixvdsa`,"data-framer-name":`Pattern`,children:[/*#__PURE__*/ u(`div`,{className:`framer-1ybyqbo`,"data-border":!0,"data-framer-name":`Pill Pattern tile`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Fig. 02`})}),className:`framer-4f9bk6`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Pattern tile`})}),className:`framer-hft2j3`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(D,{children:/*#__PURE__*/ d(T,{className:`framer-i6diz2-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Pattern Tile`,isAuthoredByUser:!0,name:`Pattern Tile`,nodeId:`V_Ujpmwjf`,scopeId:`jo9Xuyb7V`,children:/*#__PURE__*/ d(So,{bandHeight:272,height:`100%`,hint:`Hover to fill the section`,id:`V_Ujpmwjf`,layoutId:`V_Ujpmwjf`,mode:`tile`,name:`Pattern Tile`,sectionId:`project`,style:{width:`100%`},tileWidth:206,touchOnly:!1,width:`100%`})})})]})]})}),/*#__PURE__*/ d(ue.div,{className:`framer-h6gqhr`,"data-framer-name":`Pattern Band`,layout:le,children:/*#__PURE__*/ d(D,{children:/*#__PURE__*/ d(T,{className:`framer-1b0z3de-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Pattern Fill`,isAuthoredByUser:!0,name:`Pattern Fill`,nodeId:`PEmrdCRyU`,scopeId:`jo9Xuyb7V`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{XV2fc68Ib:{bandHeight:348,tileWidth:176}},children:/*#__PURE__*/ d(So,{bandHeight:344,height:`100%`,hint:`Hover to fill the section`,id:`PEmrdCRyU`,layoutId:`PEmrdCRyU`,mode:`fill`,name:`Pattern Fill`,sectionId:`project`,style:{width:`100%`},tileWidth:260,touchOnly:!0,width:`100%`})})})})}),/*#__PURE__*/ d(ue.section,{className:`framer-q3mr00`,"data-framer-name":`03 Brief`,id:we,layout:le,ref:Te,children:/*#__PURE__*/ u(`div`,{className:`framer-1eki9ie`,"data-framer-name":`Column`,children:[/*#__PURE__*/ d(`div`,{className:`framer-qz2s2y`,"data-framer-name":`Head`,children:/*#__PURE__*/ u(`div`,{className:`framer-6ezjos`,"data-border":!0,"data-framer-name":`Pill Brief`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`03`})}),className:`framer-ix8xe0`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Brief`})}),className:`framer-u5ug05`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})}),/*#__PURE__*/ u(`div`,{className:`framer-mkedcv`,"data-framer-name":`Asked`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`Asked for`})}),className:`framer-io1pzf`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`76px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`,"--framer-text-decoration-thickness":`4px`,"--framer-text-decoration":`line-through`,"--framer-text-transform":`uppercase`},children:`A new name and logo`})})},rmv4JHGBy:{children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`72px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`,"--framer-text-decoration-thickness":`4px`,"--framer-text-decoration":`line-through`,"--framer-text-transform":`uppercase`},children:`A new name and logo`})})},XV2fc68Ib:{children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`52px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`,"--framer-text-decoration-thickness":`4px`,"--framer-text-decoration":`line-through`,"--framer-text-transform":`uppercase`},children:`A new name and logo`})})}},children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{dir:`auto`,style:{"--font-selector":`RlM7T3N3YWxkLXJlZ3VsYXI=`,"--framer-font-family":`"Oswald", "Oswald Placeholder", sans-serif`,"--framer-font-open-type-features":`'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,"--framer-font-size":`88px`,"--framer-line-height":`1em`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`,"--framer-text-decoration-thickness":`4px`,"--framer-text-decoration":`line-through`,"--framer-text-transform":`uppercase`},children:`A new name and logo`})}),className:`framer-qhzjlu`,"data-framer-name":`Original Brief`,fonts:[`FS;Oswald-regular`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ u(`div`,{className:`framer-p768pk`,"data-framer-name":`Reframe`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Solved for`})}),className:`framer-1yv5sya`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`A name that fits - from small businesses to enterprises`})}),className:`framer-kzsdx2`,"data-framer-name":`Question`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-1vx3pht`,"data-border":!0,"data-framer-name":`Reasoning`,children:[/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`BRO sells to a one-office business and a whole-floor corporate client, and a clearer generic name would still lose both`})})}},children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Readability was the symptom. BRO sells to a one-office business and a whole-floor corporate client, and a clearer generic name would still lose both`})}),className:`framer-d7cppm`,"data-framer-name":`Why`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ d(`div`,{className:`framer-n98itl`,"data-framer-name":`Consequences`,children:/*#__PURE__*/ u(`div`,{className:`framer-svsq89`,"data-framer-name":`The test`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`The test`})}),className:`framer-uhni9z`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ u(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:[/*#__PURE__*/ d(`span`,{style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Pass for both buyers.`}),/*#__PURE__*/ d(`br`,{}),/*#__PURE__*/ d(`span`,{style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`150+ names, one left`})]})})}},children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Pass for both buyers. Be remembered after one hearing. 150+ names, one left`})}),className:`framer-mozai3`,"data-framer-name":`Body`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]})})]})]})}),/*#__PURE__*/ d(A,{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,sizes:m?.width||`100vw`,src:`https://framerusercontent.com/images/A3ucDL6VH3SW8k1Xl9uYkkzfoqM.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/A3ucDL6VH3SW8k1Xl9uYkkzfoqM.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/A3ucDL6VH3SW8k1Xl9uYkkzfoqM.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/A3ucDL6VH3SW8k1Xl9uYkkzfoqM.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/A3ucDL6VH3SW8k1Xl9uYkkzfoqM.png?width=3840&height=2160 3840w`},className:`framer-1eahm62`,"data-framer-name":`14`,layout:le}),/*#__PURE__*/ u(ue.section,{className:`framer-1el28y3`,"data-framer-name":`04 Research`,id:Ee,layout:le,ref:De,children:[/*#__PURE__*/ u(`div`,{className:`framer-2bsint`,"data-framer-name":`Column`,children:[/*#__PURE__*/ u(`div`,{className:`framer-5u7ht3`,"data-framer-name":`Head`,children:[/*#__PURE__*/ u(`div`,{className:`framer-1qb9c6f`,"data-border":!0,"data-framer-name":`Pill Research`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`04`})}),className:`framer-javhcj`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`Research`})}),className:`framer-1o44fzi`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`h3`,{className:`framer-styles-preset-18g8ivp`,"data-styles-preset":`q5FbbJ5Kw`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`Research`})}),className:`framer-mj7kwg`,"data-framer-name":`Heading`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-x1of6`,"data-framer-name":`Findings`,children:[/*#__PURE__*/ u(`div`,{className:`framer-ci0x73`,"data-border":!0,"data-framer-name":`Finding 1 Names in the category`,id:Oe,ref:ke,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`The name`})}),className:`framer-1k3v49a`,"data-framer-name":`Topic`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`12/21`})}),className:`framer-1wkbcz3`,"data-framer-name":`Figure`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`competitors name themselves after the category. None uses an everyday word`})}),className:`framer-di4fli`,"data-framer-name":`Result`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`→ No descriptive name. BRO is an everyday word in English and Ukrainian`})}),className:`framer-9gxx8n`,"data-framer-name":`Decision`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`Audit of 21 Ukrainian furniture makers, 2023. No competitor has a three-letter, one-syllable real word. Real words are recalled better than invented ones (Lerman and Garbarino, 2002), and a name that describes one benefit makes later, unrelated claims harder to remember (Keller, Heckler and Houston, 1998)`})}),className:`framer-4kub1b`,"data-framer-name":`Detail`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-pwoo5v`,"data-border":!0,"data-framer-name":`Finding 4 Two audiences`,id:Ae,ref:je,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`The audience`})}),className:`framer-1k9e7e6`,"data-framer-name":`Topic`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`71%`})}),className:`framer-1vzee7o`,"data-framer-name":`Figure`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`of B2B buyers who see personal value in a supplier buy from it. Without it, 23%`})}),className:`framer-w477rd`,"data-framer-name":`Result`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`→ A name that sounds like an ally, open to a small business and fit for a corporate one`})}),className:`framer-1h3nhhs`,"data-framer-name":`Decision`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`Google and CEB, From Promotion to Emotion, 2013, a survey of 3,000 B2B buyers. BRO sells B2B and B2C at once, from Nova Poshta, Carlsberg and Miele to a single clinic, a school and a restaurant`})}),className:`framer-1qzc3sm`,"data-framer-name":`Detail`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-or0l51`,"data-border":!0,"data-framer-name":`Finding 5 Symbols`,id:Me,ref:Ne,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`The logo`})}),className:`framer-8fix19`,"data-framer-name":`Topic`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`10/21`})}),className:`framer-1cy14e1`,"data-framer-name":`Figure`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`competitor logos add a symbol. At least 4 draw a chair or a sofa, and every one is a static mark`})}),className:`framer-1g4y400`,"data-framer-name":`Result`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`→ No furniture in the logo. Letters, pattern and generator share two blocks`})}),className:`framer-a7j6xe`,"data-framer-name":`Decision`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`Audit of 21 Ukrainian furniture makers, 2023. In a sofa-ad experiment, a round logo made the product seem more comfortable and an angular one more durable (Jiang, Gorn, Galli and Chattopadhyay, 2016). BRO’s letters use both`})}),className:`framer-1n847kz`,"data-framer-name":`Detail`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-14qztsh`,"data-border":!0,"data-framer-name":`Finding 7 Colour`,id:Pe,ref:Fe,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`The colour`})}),className:`framer-dlpjty`,"data-framer-name":`Topic`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`17/21`})}),className:`framer-13yps5w`,"data-framer-name":`Figure`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`competitors use an accent colour, most often red. Only 4 are black and white`})}),className:`framer-1e2sl48`,"data-framer-name":`Result`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`→ Keep the client’s mono palette and put the difference into shape`})}),className:`framer-a5zv8s`,"data-framer-name":`Decision`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea)`},children:`Audit of 21 Ukrainian furniture makers, 2023. Research on distinctive brand assets ranks colour as the asset least likely to be both unique and famous, and logos and fonts as the most likely (Romaniuk, 2018)`})}),className:`framer-1q25hfl`,"data-framer-name":`Detail`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]}),/*#__PURE__*/ d(D,{children:/*#__PURE__*/ d(T,{className:`framer-1dmjjzy-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Unfold Text`,isAuthoredByUser:!0,name:`Unfold Text`,nodeId:`kfsvf7rQC`,scopeId:`jo9Xuyb7V`,children:/*#__PURE__*/ d(_e,{cue:`chevron`,cueLift:.05,duration:.5,enabled:!0,height:`100%`,id:`kfsvf7rQC`,layoutId:`kfsvf7rQC`,lessText:`Close`,moreText:`Read more`,name:`Unfold Text`,peekLines:2,style:{height:`100%`,width:`100%`},targets:`bro-r1, bro-r4, bro-r5, bro-r7`,width:`100%`})})})]}),/*#__PURE__*/ d(ue.div,{className:`framer-175thri`,layout:le,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,sizes:`calc(${m?.width||`100vw`} + 219px)`,src:`https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?width=3840&height=2160 3840w`}},rmv4JHGBy:{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,sizes:`calc(${m?.width||`100vw`} + 777px)`,src:`https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?width=3840&height=2160 3840w`}},XV2fc68Ib:{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,sizes:`calc(${m?.width||`100vw`} + 1157px)`,src:`https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?width=3840&height=2160 3840w`}}},children:/*#__PURE__*/ d(A,{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,sizes:`calc(${m?.width||`100vw`} + 138px)`,src:`https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/o5orsbmqibKdo3vjh7rwvIxk.png?width=3840&height=2160 3840w`},className:`framer-c08i3t`,"data-framer-name":`Hoodie`})})}),/*#__PURE__*/ d(ue.section,{className:`framer-17n8uwh`,"data-framer-name":`06 Process`,id:Ie,layout:le,ref:Le,children:/*#__PURE__*/ u(`div`,{className:`framer-17hshus`,"data-framer-name":`Column`,children:[/*#__PURE__*/ u(`div`,{className:`framer-qy6fbg`,"data-framer-name":`Head`,children:[/*#__PURE__*/ u(`div`,{className:`framer-6wt2en`,"data-border":!0,"data-framer-name":`Pill Process`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`06`})}),className:`framer-17tmd77`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Process`})}),className:`framer-193gxu9`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`h3`,{className:`framer-styles-preset-18g8ivp`,"data-styles-preset":`q5FbbJ5Kw`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`Process`})}),className:`framer-q1lr3u`,"data-framer-name":`Heading`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Three routes went into the presentation, with 30 marks`})}),className:`framer-unpeon`,"data-framer-name":`Intro`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-7q7iiu`,"data-framer-name":`Routes`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Three routes presented`})}),className:`framer-1ag4mfb`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-1oprocd`,"data-framer-name":`Route Row`,children:[/*#__PURE__*/ u(`div`,{className:`framer-9a4u5c`,"data-framer-name":`Route 1`,children:[/*#__PURE__*/ d(`div`,{className:`framer-13tiyss`,"data-framer-name":`Tile`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`Rejected BRO logo route 1, italic serif`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.84 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?width=900&height=360 900w`}},rmv4JHGBy:{background:{alt:`Rejected BRO logo route 1, italic serif`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.86 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?width=900&height=360 900w`}},XV2fc68Ib:{background:{alt:`Rejected BRO logo route 1, italic serif`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`calc(${m?.width||`100vw`} * 0.9)`,src:`https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?width=900&height=360 900w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`Rejected BRO logo route 1, italic serif`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.78 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/0XczXcMt8qi9cku5ovstUWU0ko.png?width=900&height=360 900w`},className:`framer-ur7hgy`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea, rgb(153, 153, 153))`},children:`Route 01  Italic serif`})}),className:`framer-ioaqlf`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-1llkfi5`,"data-framer-name":`Route 2`,children:[/*#__PURE__*/ d(`div`,{className:`framer-mmwwpo`,"data-framer-name":`Tile`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`Rejected BRO logo route 2, lowercase geometric`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.84 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?width=900&height=360 900w`}},rmv4JHGBy:{background:{alt:`Rejected BRO logo route 2, lowercase geometric`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.86 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?width=900&height=360 900w`}},XV2fc68Ib:{background:{alt:`Rejected BRO logo route 2, lowercase geometric`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`calc(${m?.width||`100vw`} * 0.9)`,src:`https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?width=900&height=360 900w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`Rejected BRO logo route 2, lowercase geometric`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.78 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/2M5Nxz116hnYrAdXa9cHBcub8g.png?width=900&height=360 900w`},className:`framer-1vfzvej`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea, rgb(153, 153, 153))`},children:`Route 02  Lowercase geometric`})}),className:`framer-xno9cr`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-i2lgk7`,"data-framer-name":`Route 3`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1wck37l`,"data-framer-name":`Tile`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`Rejected BRO logo route 3, cut display`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.84 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?width=900&height=360 900w`}},rmv4JHGBy:{background:{alt:`Rejected BRO logo route 3, cut display`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.86 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?width=900&height=360 900w`}},XV2fc68Ib:{background:{alt:`Rejected BRO logo route 3, cut display`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`calc(${m?.width||`100vw`} * 0.9)`,src:`https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?width=900&height=360 900w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`Rejected BRO logo route 3, cut display`,fit:`fill`,pixelHeight:360,pixelWidth:900,sizes:`max((${m?.width||`100vw`} * 0.78 - 32px) / 3, 1px)`,src:`https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?width=900&height=360`,srcSet:`https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?scale-down-to=512&width=900&height=360 512w,https://framerusercontent.com/images/vvGR3Bb38CUzss6zvk3RBBzS5x0.png?width=900&height=360 900w`},className:`framer-99nwtq`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea, rgb(153, 153, 153))`},children:`Route 03  Cut display`})}),className:`framer-eodupt`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]}),/*#__PURE__*/ u(`div`,{className:`framer-1bhg27y`,"data-framer-name":`Other Marks`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Other marks`})}),className:`framer-1gcf2ch`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ u(`div`,{className:`framer-1enzrhd`,"data-framer-name":`Marks Grid`,children:[/*#__PURE__*/ d(`div`,{className:`framer-mocoti`,"data-framer-name":`Mark 01`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 01`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 01`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 01`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 01`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/xOKF0YYhPVEhDTnX3wA0jZvsnY.png?width=640&height=480 640w`},className:`framer-1y7yhd0`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1ws3e6z`,"data-framer-name":`Mark 03`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 04`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 04`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 04`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 04`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/Brn8uBYTGoVK1DDAbA27w0hBpps.png?width=640&height=480 640w`},className:`framer-l4k5t7`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1yhu0c7`,"data-framer-name":`Mark 05`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 06`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 06`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 06`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 06`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/xDbCHi3ZaOxRFiLsTZG8vglgE.png?width=640&height=480 640w`},className:`framer-lagm6n`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-yaed3g`,"data-border":!0,"data-framer-name":`Mark 04 Final`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 05`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 05`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 05`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 05`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/5PsGtPzn536yLqN646uyMlZZU.png?width=640&height=480 640w`},className:`framer-kv7yae`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1d01sky`,"data-framer-name":`Mark 06`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 09`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 09`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 09`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 09`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/Pd8Xus2iuSN6Nh2Dgtg6Ha2hY.png?width=640&height=480 640w`},className:`framer-1ge9ocb`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1xgcfqg`,"data-framer-name":`Mark 07`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 11`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 11`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 11`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 11`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/7ABhOtutFOJ6SI3Tny9RGcG2YE.png?width=640&height=480 640w`},className:`framer-kwncmn`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1wwrrbu`,"data-framer-name":`Mark 08`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 13`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 13`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 13`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 13`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/hxFvD8paL9aSRsqohOdxoSttAcI.png?width=640&height=480 640w`},className:`framer-tsan4k`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1pmzx02`,"data-framer-name":`Mark 09`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 14`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 14`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 14`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 14`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/oie3yLSR0YrUUltcVW7wkRnaoBY.png?width=640&height=480 640w`},className:`framer-gkx3mf`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-s4tx59`,"data-framer-name":`Mark 10`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 16`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 16`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 16`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 16`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/h0oxWGYLAsgSWAdnqnhcFpSkLM.png?width=640&height=480 640w`},className:`framer-170kbzf`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-rcmm0x`,"data-framer-name":`Mark 11`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 19`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 19`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 19`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 19`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/BdTZLRahZAQEOJbeP8Id08LZA.png?width=640&height=480 640w`},className:`framer-4dlt7x`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1t7igfr`,"data-framer-name":`Mark 12`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 20`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 20`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 20`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 20`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/5SeRTWUvKKxTvXvXZCTjC5kG8.png?width=640&height=480 640w`},className:`framer-bhpsbb`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-uhfjep`,"data-framer-name":`Mark 13`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 21`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 21`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 21`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 21`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/koA7IzQwycC2cypfRne5MEzKGZg.png?width=640&height=480 640w`},className:`framer-1g42v4c`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-9of49c`,"data-framer-name":`Mark 15`,children:/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`BRO logo exploration 23`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.12, 50px) * 0.66)`,src:`https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?width=640&height=480 640w`}},rmv4JHGBy:{background:{alt:`BRO logo exploration 23`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.1395, 50px) * 0.66)`,src:`https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?width=640&height=480 640w`}},XV2fc68Ib:{background:{alt:`BRO logo exploration 23`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} * 0.45, 50px) * 0.66)`,src:`https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?width=640&height=480 640w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`BRO logo exploration 23`,fit:`fill`,pixelHeight:480,pixelWidth:640,sizes:`calc(max(${m?.width||`100vw`} / 8.9744, 50px) * 0.66)`,src:`https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?width=640&height=480`,srcSet:`https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?scale-down-to=512&width=640&height=480 512w,https://framerusercontent.com/images/KqKt3gCcgaZa8AlxH7fvLuEYso.png?width=640&height=480 640w`},className:`framer-dhtd2i`,"data-framer-name":`Mark`,fitImageDimension:`height`})})}),/*#__PURE__*/ d(`div`,{className:`framer-ild71f`,"data-framer-name":`Count`,children:Re()&&/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a)`},children:`30`})}),className:`framer-15mrqqe hidden-1aobl6h`,"data-framer-name":`Label`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]})]})]})}),ze()&&/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,sizes:m?.width||`100vw`,src:`https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?width=3840&height=2160 3840w`}}},children:/*#__PURE__*/ d(A,{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,src:`https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?width=3840&height=2160 3840w`},className:`framer-1w35uk6 hidden-1c005mn hidden-1hi6c0a hidden-1aobl6h`,"data-framer-name":`14`,layout:le})}),Be()&&/*#__PURE__*/ d(A,{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,sizes:m?.width||`100vw`,src:`https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/U3YoStJsFxvEEbqYTe6NmzE9LY.png?width=3840&height=2160 3840w`},className:`framer-mllaif hidden-1a45oad`,"data-framer-name":`14`,layout:le}),/*#__PURE__*/ u(ue.section,{className:`framer-n4wlht`,"data-framer-name":`05 Principles`,id:Ve,layout:le,ref:He,children:[/*#__PURE__*/ u(`div`,{className:`framer-1yxbqx1`,"data-framer-name":`Column`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1hzekhn`,"data-framer-name":`Head`,children:/*#__PURE__*/ u(`div`,{className:`framer-1yqo2mc`,"data-border":!0,"data-framer-name":`Pill Principles`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`05`})}),className:`framer-1ozlnr`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Principles`})}),className:`framer-18xudwj`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})}),/*#__PURE__*/ u(`div`,{className:`framer-pxru75`,"data-framer-name":`Principles Row`,children:[/*#__PURE__*/ u(`div`,{className:`framer-1u434jq`,"data-framer-name":`Principle Blocks`,id:Ue,ref:We,children:[/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`The eight BRO blocks in black, white and grey`,fit:`fill`,pixelHeight:600,pixelWidth:1200,sizes:`max((${m?.width||`100vw`} * 0.84 - 128px) / 3, 1px)`,src:`https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?width=1200&height=600`,srcSet:`https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?scale-down-to=512&width=1200&height=600 512w,https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?scale-down-to=1024&width=1200&height=600 1024w,https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?width=1200&height=600 1200w`}},rmv4JHGBy:{background:{alt:`The eight BRO blocks in black, white and grey`,fit:`fill`,pixelHeight:600,pixelWidth:1200,sizes:`calc(${m?.width||`100vw`} * 0.86)`,src:`https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?width=1200&height=600`,srcSet:`https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?scale-down-to=512&width=1200&height=600 512w,https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?scale-down-to=1024&width=1200&height=600 1024w,https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?width=1200&height=600 1200w`}},XV2fc68Ib:{background:{alt:`The eight BRO blocks in black, white and grey`,fit:`fill`,pixelHeight:600,pixelWidth:1200,sizes:`calc(${m?.width||`100vw`} * 0.9)`,src:`https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?width=1200&height=600`,srcSet:`https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?scale-down-to=512&width=1200&height=600 512w,https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?scale-down-to=1024&width=1200&height=600 1024w,https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?width=1200&height=600 1200w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`The eight BRO blocks in black, white and grey`,fit:`fill`,pixelHeight:600,pixelWidth:1200,sizes:`max((${m?.width||`100vw`} * 0.78 - 128px) / 3, 1px)`,src:`https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?width=1200&height=600`,srcSet:`https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?scale-down-to=512&width=1200&height=600 512w,https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?scale-down-to=1024&width=1200&height=600 1024w,https://framerusercontent.com/images/eFPSpITelBkBqfoPKOamqhpS08.png?width=1200&height=600 1200w`},className:`framer-5s7oa6`,"data-framer-name":`Block set`,fitImageDimension:`height`})}),/*#__PURE__*/ d(`div`,{className:`framer-o8lj7u`,"data-framer-name":`Head`,children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`BuilT simple`})}),className:`framer-91rbnk`,"data-framer-name":`Statement`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`No templates. Every layout is drawn new from the same blocks, the way BRO builds each interior for one client`})}),className:`framer-1pu2h99`,"data-framer-name":`Body`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-9z5jv4`,"data-framer-name":`Principle Mono`,id:Ge,ref:Ke,children:[/*#__PURE__*/ d(`div`,{className:`framer-2kzk6y`,"data-framer-name":`Gradient`}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Mono rigor`})}),className:`framer-hsvpgr`,"data-framer-name":`Statement`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Black, white and grey only. The palette makes a casual name read as serious`})}),className:`framer-1p1oq9b`,"data-framer-name":`Body`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ u(`div`,{className:`framer-z6y1nl`,"data-framer-name":`Principle Name`,id:qe,ref:Je,children:[/*#__PURE__*/ d(`div`,{className:`framer-ybo5g4`,"data-framer-name":`Logo and rules`,children:/*#__PURE__*/ u(`div`,{"aria-label":`BRO logo`,className:`framer-mtpa5v`,"data-framer-name":`BRO logo`,children:[/*#__PURE__*/ d(`div`,{className:`framer-8nl3ue`,"data-framer-name":`B top`}),/*#__PURE__*/ d(`div`,{className:`framer-1yzw0k5`,"data-framer-name":`B bottom`}),/*#__PURE__*/ d(`div`,{className:`framer-of28dj`,"data-framer-name":`R top`}),/*#__PURE__*/ d(`div`,{className:`framer-15y06iu`,"data-framer-name":`R bottom`}),/*#__PURE__*/ d(`div`,{className:`framer-1odizgs`,"data-framer-name":`O`})]})}),/*#__PURE__*/ d(`div`,{className:`framer-gsshto`,"data-framer-name":`Head`,children:/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1036fe5`,"data-styles-preset":`bqgZhs0Mj`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Friendly name`})}),className:`framer-16mz69l`,"data-framer-name":`Statement`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Of 21 Ukrainian furniture brands, none has an everyday word for a name. BRO does`})}),className:`framer-1wnrvwr`,"data-framer-name":`Body`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]}),/*#__PURE__*/ d(D,{children:/*#__PURE__*/ d(T,{className:`framer-1bceqt5-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Unfold Text`,isAuthoredByUser:!0,name:`Unfold Text`,nodeId:`BvvS57CLr`,scopeId:`jo9Xuyb7V`,children:/*#__PURE__*/ d(_e,{cue:`chevron`,cueLift:.12,duration:.5,enabled:!0,height:`100%`,id:`BvvS57CLr`,layoutId:`BvvS57CLr`,lessText:`Close`,moreText:`Read more`,name:`Unfold Text`,peekLines:2,style:{height:`100%`,width:`100%`},targets:`bro-p1, bro-p2, bro-p3`,width:`100%`})})})]}),/*#__PURE__*/ d(ue.section,{className:`framer-1vkp29c`,"data-framer-name":`07 Generator`,id:j,layout:le,ref:Ye,children:/*#__PURE__*/ u(`div`,{className:`framer-axyrnj`,"data-framer-name":`Column`,children:[/*#__PURE__*/ u(`div`,{className:`framer-1nfw6fv`,"data-framer-name":`Head`,children:[/*#__PURE__*/ u(`div`,{className:`framer-1u4a4qk`,"data-border":!0,"data-framer-name":`Pill Generator`,children:[/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`07`})}),className:`framer-1bfwuhf`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Generator`})}),className:`framer-iccoba`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`h3`,{className:`framer-styles-preset-18g8ivp`,"data-styles-preset":`q5FbbJ5Kw`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`Generator`})}),className:`framer-h1nqdx`,"data-framer-name":`Heading`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-1fyrg7p`,"data-styles-preset":`vTo9mwIa1`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`The Cavalry generator, rebuilt to run in the browser. Change the seed, the points or the depth and it draws a new composition`})}),className:`framer-3nwhu3`,"data-framer-name":`Intro`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-1i7oi2v`,"data-framer-name":`App`,children:/*#__PURE__*/ d(D,{children:/*#__PURE__*/ d(T,{className:`framer-1ogn7h4-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`BRO Paper Generator App`,isAuthoredByUser:!0,name:`BRO Paper Generator App`,nodeId:`jNZSyovxP`,scopeId:`jo9Xuyb7V`,children:/*#__PURE__*/ d($a,{background:`rgb(255, 255, 255)`,colorA:`rgb(43, 43, 43)`,colorB:`rgb(217, 217, 217)`,colorC:`rgb(100, 100, 100)`,colorD:`rgb(153, 153, 153)`,columns:2,depth:1,fit:`width`,height:`100%`,id:`jNZSyovxP`,ink:`rgb(43, 43, 43)`,label:`BRO composition generator. Activate to show the next composition`,layoutId:`jNZSyovxP`,materials:`mix`,motion:!0,name:`BRO Paper Generator App`,panel:`rgb(255, 255, 255)`,points:0,rows:1,seed:191,showInterface:!0,style:{width:`100%`},title:``,triggerId:``,width:`100%`})})})}),/*#__PURE__*/ u(`div`,{className:`framer-lf6wz1`,"data-framer-name":`Figure Cavalry`,children:[/*#__PURE__*/ d(E,{breakpoint:C,overrides:{OtjKsgyMk:{background:{alt:`The BRO composition generator scene in Cavalry: Quad Tree shape, duplicator and colour array`,fit:`fill`,pixelHeight:980,pixelWidth:1904,sizes:`calc(${m?.width||`100vw`} * 0.84)`,src:`https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?width=1904&height=980`,srcSet:`https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?scale-down-to=512&width=1904&height=980 512w,https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?scale-down-to=1024&width=1904&height=980 1024w,https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?width=1904&height=980 1904w`}},rmv4JHGBy:{background:{alt:`The BRO composition generator scene in Cavalry: Quad Tree shape, duplicator and colour array`,fit:`fill`,pixelHeight:980,pixelWidth:1904,sizes:`calc(${m?.width||`100vw`} * 0.86)`,src:`https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?width=1904&height=980`,srcSet:`https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?scale-down-to=512&width=1904&height=980 512w,https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?scale-down-to=1024&width=1904&height=980 1024w,https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?width=1904&height=980 1904w`}},XV2fc68Ib:{background:{alt:`The BRO composition generator scene in Cavalry: Quad Tree shape, duplicator and colour array`,fit:`fill`,pixelHeight:980,pixelWidth:1904,sizes:`calc(${m?.width||`100vw`} * 0.9)`,src:`https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?width=1904&height=980`,srcSet:`https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?scale-down-to=512&width=1904&height=980 512w,https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?scale-down-to=1024&width=1904&height=980 1024w,https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?width=1904&height=980 1904w`}}},children:/*#__PURE__*/ d(A,{background:{alt:`The BRO composition generator scene in Cavalry: Quad Tree shape, duplicator and colour array`,fit:`fill`,pixelHeight:980,pixelWidth:1904,sizes:`calc(${m?.width||`100vw`} * 0.78)`,src:`https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?width=1904&height=980`,srcSet:`https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?scale-down-to=512&width=1904&height=980 512w,https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?scale-down-to=1024&width=1904&height=980 1024w,https://framerusercontent.com/images/COULw5jahHp5yHXKQhbh2eg4aak.webp?width=1904&height=980 1904w`},className:`framer-1sjbr5b`,"data-border":!0,"data-framer-name":`Cavalry Scene`,fitImageDimension:`height`})}),/*#__PURE__*/ d(_,{__fromCanvasComponent:!0,children:/*#__PURE__*/ d(o,{children:/*#__PURE__*/ d(`p`,{className:`framer-styles-preset-15mkcj0`,"data-styles-preset":`qmXede8G9`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be)`},children:`Fig. 03  The Cavalry scene the generator was rebuilt from`})}),className:`framer-10urrp8`,"data-framer-name":`Caption`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})}),/*#__PURE__*/ d(A,{background:{alt:``,fit:`fill`,intrinsicHeight:2160,intrinsicWidth:3840,pixelHeight:2160,pixelWidth:3840,sizes:m?.width||`100vw`,src:`https://framerusercontent.com/images/1P2J27r97NWXAQrnMeg6XY7uI.png?width=3840&height=2160`,srcSet:`https://framerusercontent.com/images/1P2J27r97NWXAQrnMeg6XY7uI.png?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/1P2J27r97NWXAQrnMeg6XY7uI.png?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/1P2J27r97NWXAQrnMeg6XY7uI.png?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/1P2J27r97NWXAQrnMeg6XY7uI.png?width=3840&height=2160 3840w`},className:`framer-ewbp66`,"data-framer-name":`14`,layout:le})]}),/*#__PURE__*/ d(`div`,{id:`overlay`})]})})}),fs=[`.framer-L8nVi.framer-1sbydyu, .framer-L8nVi .framer-1sbydyu { display: block; }`,`.framer-L8nVi.framer-1c005mn { align-content: center; align-items: center; background-color: var(--token-77673ccd-cc49-40fe-a65e-de36307fb730); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1484px; }`,`.framer-L8nVi .framer-xax67u-container { flex: none; height: auto; left: 50%; max-width: 78%; mix-blend-mode: difference; position: fixed; top: 0px; transform: translateX(-50%); width: 78%; z-index: 6; }`,`.framer-L8nVi .framer-euayji { align-content: center; align-items: center; background-color: var(--token-77673ccd-cc49-40fe-a65e-de36307fb730); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 0px 124px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1lw0wwi, .framer-L8nVi .framer-16l85tv, .framer-L8nVi .framer-17hshus { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 78%; }`,`.framer-L8nVi .framer-aitbim { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-edqiql, .framer-L8nVi .framer-i0ash7, .framer-L8nVi .framer-1cz40ru, .framer-L8nVi .framer-193hmsw, .framer-L8nVi .framer-6tic7w, .framer-L8nVi .framer-1ybyqbo, .framer-L8nVi .framer-6ezjos, .framer-L8nVi .framer-6wt2en, .framer-L8nVi .framer-1yqo2mc, .framer-L8nVi .framer-1u4a4qk { --border-bottom-width: 2px; --border-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 9px 20px 9px 18px; position: relative; width: min-content; }`,`.framer-L8nVi .framer-d2d79t, .framer-L8nVi .framer-njlbzb, .framer-L8nVi .framer-1ga8lau, .framer-L8nVi .framer-ax1c4a, .framer-L8nVi .framer-c070h, .framer-L8nVi .framer-a2g7v1, .framer-L8nVi .framer-1ogapip, .framer-L8nVi .framer-1s1ab2v, .framer-L8nVi .framer-1nbvlk2, .framer-L8nVi .framer-1iqdn8y, .framer-L8nVi .framer-1rhq2un, .framer-L8nVi .framer-10z8umt, .framer-L8nVi .framer-1qlb4fx, .framer-L8nVi .framer-1yag3im, .framer-L8nVi .framer-1yo9amu, .framer-L8nVi .framer-1phpgsg, .framer-L8nVi .framer-e8cick, .framer-L8nVi .framer-1loibw0, .framer-L8nVi .framer-1kew9wn, .framer-L8nVi .framer-dworik, .framer-L8nVi .framer-bl6xmw, .framer-L8nVi .framer-rgz61, .framer-L8nVi .framer-ibzf2w, .framer-L8nVi .framer-1w1esh, .framer-L8nVi .framer-1uowduu, .framer-L8nVi .framer-10lug9c, .framer-L8nVi .framer-ymxt74, .framer-L8nVi .framer-1os4y5f, .framer-L8nVi .framer-1nzxqzp, .framer-L8nVi .framer-1dr58h5, .framer-L8nVi .framer-ldu6bh, .framer-L8nVi .framer-ww5a3r, .framer-L8nVi .framer-d62ox2, .framer-L8nVi .framer-ltol30, .framer-L8nVi .framer-itw98y, .framer-L8nVi .framer-1hvfeti, .framer-L8nVi .framer-c2p5j4, .framer-L8nVi .framer-9mbj9a, .framer-L8nVi .framer-aq23q7, .framer-L8nVi .framer-auqxpk, .framer-L8nVi .framer-1h7u08u, .framer-L8nVi .framer-rjwc0a, .framer-L8nVi .framer-1cilcki, .framer-L8nVi .framer-v57brq, .framer-L8nVi .framer-1x0s4le, .framer-L8nVi .framer-8yci86, .framer-L8nVi .framer-4f9bk6, .framer-L8nVi .framer-hft2j3, .framer-L8nVi .framer-ix8xe0, .framer-L8nVi .framer-u5ug05, .framer-L8nVi .framer-io1pzf, .framer-L8nVi .framer-1yv5sya, .framer-L8nVi .framer-javhcj, .framer-L8nVi .framer-1o44fzi, .framer-L8nVi .framer-mj7kwg, .framer-L8nVi .framer-17tmd77, .framer-L8nVi .framer-193gxu9, .framer-L8nVi .framer-q1lr3u, .framer-L8nVi .framer-1ozlnr, .framer-L8nVi .framer-18xudwj, .framer-L8nVi .framer-1bfwuhf, .framer-L8nVi .framer-iccoba, .framer-L8nVi .framer-h1nqdx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-L8nVi .framer-1mu2amv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 640px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-k5lpkb { flex: none; height: auto; position: relative; white-space: pre; width: 100%; z-index: 0; }`,`.framer-L8nVi .framer-hsayjj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 594px; justify-content: flex-start; left: calc(49.913644214162375% - 910px / 2); padding: 0px; position: absolute; top: 0px; width: 910px; z-index: 1; }`,`.framer-L8nVi .framer-s3rru7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,`.framer-L8nVi .framer-ot1h64 { --border-bottom-width: 0px; --border-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1ul5aao { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-1hgghm8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-16aptv, .framer-L8nVi .framer-mozai3, .framer-L8nVi .framer-di4fli, .framer-L8nVi .framer-4kub1b, .framer-L8nVi .framer-w477rd, .framer-L8nVi .framer-1qzc3sm, .framer-L8nVi .framer-1g4y400, .framer-L8nVi .framer-1n847kz, .framer-L8nVi .framer-1e2sl48, .framer-L8nVi .framer-1q25hfl, .framer-L8nVi .framer-1pu2h99, .framer-L8nVi .framer-1p1oq9b, .framer-L8nVi .framer-1wnrvwr { --framer-text-wrap-override: pretty; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-L8nVi .framer-13odrjo, .framer-L8nVi .framer-11m71aw, .framer-L8nVi .framer-ki7qbw, .framer-L8nVi .framer-afg5jp, .framer-L8nVi .framer-1fs4hbd, .framer-L8nVi .framer-1uk6je9, .framer-L8nVi .framer-1llfsmh, .framer-L8nVi .framer-8v5f82, .framer-L8nVi .framer-1x8s89a, .framer-L8nVi .framer-uhni9z, .framer-L8nVi .framer-1k3v49a, .framer-L8nVi .framer-1wkbcz3, .framer-L8nVi .framer-9gxx8n, .framer-L8nVi .framer-1k9e7e6, .framer-L8nVi .framer-1vzee7o, .framer-L8nVi .framer-1h3nhhs, .framer-L8nVi .framer-8fix19, .framer-L8nVi .framer-1cy14e1, .framer-L8nVi .framer-a7j6xe, .framer-L8nVi .framer-dlpjty, .framer-L8nVi .framer-13yps5w, .framer-L8nVi .framer-a5zv8s, .framer-L8nVi .framer-1ag4mfb, .framer-L8nVi .framer-ioaqlf, .framer-L8nVi .framer-xno9cr, .framer-L8nVi .framer-eodupt, .framer-L8nVi .framer-1gcf2ch, .framer-L8nVi .framer-hsvpgr, .framer-L8nVi .framer-10urrp8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-L8nVi .framer-sflydj, .framer-L8nVi .framer-lf6wz1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-5i53b7, .framer-L8nVi .framer-h6gqhr, .framer-L8nVi .framer-13tiyss, .framer-L8nVi .framer-mmwwpo, .framer-L8nVi .framer-1wck37l, .framer-L8nVi .framer-1i7oi2v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1ixdrx1-container, .framer-L8nVi .framer-1b0z3de-container, .framer-L8nVi .framer-5s7oa6, .framer-L8nVi .framer-1ogn7h4-container { flex: none; height: auto; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1drjai6, .framer-L8nVi .framer-1xufxza { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-hqi0d3 { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-L8nVi .framer-19j6fj1, .framer-L8nVi .framer-1el28y3 { align-content: center; align-items: center; background-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 124px 0px 124px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-9xrbg6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,`.framer-L8nVi .framer-98tkhh, .framer-L8nVi .framer-1qb9c6f { --border-bottom-width: 2px; --border-color: var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 9px 20px 9px 18px; position: relative; width: min-content; }`,`.framer-L8nVi .framer-zlf4cy { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1lurhep { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea); border-bottom-left-radius: 64px; border-bottom-right-radius: 64px; border-top-left-radius: 64px; border-top-right-radius: 64px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 100%; justify-content: flex-end; justify-self: start; padding: 112px 32px 48px 32px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-ue97mb { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-0d546115-b929-485f-b640-f74dad62d7d0); border-bottom-left-radius: 64px; border-bottom-right-radius: 64px; border-top-left-radius: 64px; border-top-right-radius: 64px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 100%; justify-content: flex-end; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 112px 32px 48px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,`.framer-L8nVi .framer-1oasv4o-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,`.framer-L8nVi .framer-s22ds7 { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a); border-bottom-left-radius: 64px; border-bottom-right-radius: 64px; border-top-left-radius: 64px; border-top-right-radius: 64px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 100%; justify-content: flex-end; justify-self: start; padding: 112px 32px 48px 32px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-p3hibf { --border-bottom-width: 2px; --border-color: var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: flex-start; align-items: flex-start; align-self: start; border-bottom-left-radius: 64px; border-bottom-right-radius: 64px; border-top-left-radius: 64px; border-top-right-radius: 64px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 100%; justify-content: flex-end; justify-self: start; padding: 112px 32px 48px 32px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-12o0ec { align-content: center; align-items: center; background-color: var(--token-0d546115-b929-485f-b640-f74dad62d7d0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 124px 0px 124px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-n9gjdi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 609px; justify-content: center; padding: 0px; position: relative; width: 1157px; }`,`.framer-L8nVi .framer-1sbh8si { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 241px; justify-content: center; left: 279px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 92px; position: absolute; text-decoration: none; top: 125px; width: 385px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,`.framer-L8nVi .framer-40cknt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,`.framer-L8nVi .framer-r0163z, .framer-L8nVi .framer-14u4za4, .framer-L8nVi .framer-1pxnuqo, .framer-L8nVi .framer-6phssd, .framer-L8nVi .framer-npf4zv, .framer-L8nVi .framer-1pvyv4k, .framer-L8nVi .framer-5olru9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 112px; }`,`.framer-L8nVi .framer-1boi9bz, .framer-L8nVi .framer-1fx4y71, .framer-L8nVi .framer-1q81c4s { background-color: var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a); flex: 1 0 0px; height: 2px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-2n0ztd { align-content: center; align-items: center; background-color: var(--token-77673ccd-cc49-40fe-a65e-de36307fb730); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: 122px; justify-content: center; left: 654px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; text-decoration: none; top: 125px; width: 289px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,`.framer-L8nVi .framer-1g7pywz, .framer-L8nVi .framer-z7pqmk, .framer-L8nVi .framer-7aobca { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,`.framer-L8nVi .framer-ops8mx, .framer-L8nVi .framer-1uwx8bd, .framer-L8nVi .framer-jatvqm, .framer-L8nVi .framer-1agg53b { background-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); flex: 1 0 0px; height: 2px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-7dg86j { align-content: center; align-items: center; background-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); border-bottom-left-radius: 89px; border-bottom-right-radius: 89px; border-top-left-radius: 89px; border-top-right-radius: 89px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 247px; justify-content: center; left: 940px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; text-decoration: none; top: 0px; width: 217px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,`.framer-L8nVi .framer-13zmxrw, .framer-L8nVi .framer-4golsx, .framer-L8nVi .framer-edkerr { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,`.framer-L8nVi .framer-113e0j8 { align-content: center; align-items: center; background-color: var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea); border-bottom-left-radius: 89px; border-bottom-right-radius: 89px; border-top-left-radius: 89px; border-top-right-radius: 89px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 242px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; text-decoration: none; top: 366px; width: 217px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,`.framer-L8nVi .framer-1b1rbo0 { --border-bottom-width: 2px; --border-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: 122px; justify-content: center; left: 214px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; text-decoration: none; top: 366px; width: 427px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,`.framer-L8nVi .framer-1600tfv { --border-bottom-width: 2px; --border-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: 122px; justify-content: center; left: 634px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; text-decoration: none; top: 487px; width: 436px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,`.framer-L8nVi .framer-ydgkci { align-content: center; align-items: center; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 240px; justify-content: center; left: 631px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; text-decoration: none; top: 247px; width: 240px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,`.framer-L8nVi .framer-1iapi6r { align-content: center; align-items: center; background-color: var(--token-77673ccd-cc49-40fe-a65e-de36307fb730); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 124px 0px 124px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-x2i07n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 96px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 78%; }`,`.framer-L8nVi .framer-m13bcr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-n8figq { --border-bottom-width: 2px; --border-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1sj2m5v, .framer-L8nVi .framer-19jm9q4, .framer-L8nVi .framer-m30h6n { --border-bottom-width: 0px; --border-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; padding: 22px 0px 26px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-v9o9ay, .framer-L8nVi .framer-x66dyo, .framer-L8nVi .framer-xgsb7x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 4px 0px 0px 0px; position: relative; width: 180px; }`,`.framer-L8nVi .framer-1g798tp, .framer-L8nVi .framer-l7vawp, .framer-L8nVi .framer-bec7b6 { --framer-text-wrap-override: pretty; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,`.framer-L8nVi .framer-1ixvdsa { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 8px 0px 0px 0px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-i6diz2-container { flex: none; height: auto; position: relative; width: 260px; }`,`.framer-L8nVi .framer-q3mr00, .framer-L8nVi .framer-n4wlht { align-content: center; align-items: center; background-color: var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 124px 0px 124px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1eki9ie, .framer-L8nVi .framer-axyrnj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 78%; }`,`.framer-L8nVi .framer-qz2s2y, .framer-L8nVi .framer-5u7ht3, .framer-L8nVi .framer-1hzekhn, .framer-L8nVi .framer-1nfw6fv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-mkedcv, .framer-L8nVi .framer-p768pk, .framer-L8nVi .framer-7q7iiu, .framer-L8nVi .framer-1bhg27y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-qhzjlu { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-L8nVi .framer-kzsdx2 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1vx3pht { --border-bottom-width: 0px; --border-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 28px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-d7cppm { --framer-text-wrap-override: pretty; flex: 1.3 0 0px; height: auto; position: relative; width: 1px; }`,`.framer-L8nVi .framer-n98itl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-svsq89 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1eahm62, .framer-L8nVi .framer-1w35uk6, .framer-L8nVi .framer-mllaif, .framer-L8nVi .framer-ewbp66 { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,`.framer-L8nVi .framer-2bsint { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 78%; }`,`.framer-L8nVi .framer-x1of6 { display: grid; flex: none; gap: 64px 64px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-ci0x73, .framer-L8nVi .framer-pwoo5v, .framer-L8nVi .framer-or0l51, .framer-L8nVi .framer-14qztsh { --border-bottom-width: 0px; --border-color: var(--token-bb73f0f5-3be2-4b99-bb50-6d45f14a22ea); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; justify-self: start; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1dmjjzy-container, .framer-L8nVi .framer-1bceqt5-container { flex: none; height: 32px; left: 0px; position: absolute; top: 0px; width: 32px; }`,`.framer-L8nVi .framer-175thri { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 835px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-c08i3t { aspect-ratio: 1.7777777777777777 / 1; bottom: -78px; flex: none; height: auto; left: -68px; overflow: visible; position: absolute; right: -70px; z-index: 1; }`,`.framer-L8nVi .framer-17n8uwh { align-content: center; align-items: center; background-color: var(--token-77673ccd-cc49-40fe-a65e-de36307fb730, #d9d9d9); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 124px 0px 124px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-qy6fbg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-unpeon { --framer-text-wrap-override: pretty; flex: none; height: auto; max-width: 720px; position: relative; width: 39%; }`,`.framer-L8nVi .framer-1oprocd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-9a4u5c, .framer-L8nVi .framer-1llkfi5, .framer-L8nVi .framer-i2lgk7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-ur7hgy, .framer-L8nVi .framer-1vfzvej, .framer-L8nVi .framer-99nwtq { flex: none; height: auto; mix-blend-mode: multiply; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1enzrhd { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(7, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-mocoti, .framer-L8nVi .framer-1ws3e6z, .framer-L8nVi .framer-1yhu0c7, .framer-L8nVi .framer-1d01sky, .framer-L8nVi .framer-1xgcfqg, .framer-L8nVi .framer-1wwrrbu, .framer-L8nVi .framer-1pmzx02, .framer-L8nVi .framer-s4tx59, .framer-L8nVi .framer-rcmm0x, .framer-L8nVi .framer-1t7igfr, .framer-L8nVi .framer-uhfjep, .framer-L8nVi .framer-9of49c { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 18px 0px 18px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1y7yhd0, .framer-L8nVi .framer-l4k5t7, .framer-L8nVi .framer-lagm6n, .framer-L8nVi .framer-kv7yae, .framer-L8nVi .framer-1ge9ocb, .framer-L8nVi .framer-kwncmn, .framer-L8nVi .framer-tsan4k, .framer-L8nVi .framer-gkx3mf, .framer-L8nVi .framer-170kbzf, .framer-L8nVi .framer-4dlt7x, .framer-L8nVi .framer-bhpsbb, .framer-L8nVi .framer-1g42v4c, .framer-L8nVi .framer-dhtd2i { flex: none; height: auto; position: relative; width: 66%; }`,`.framer-L8nVi .framer-yaed3g { --border-bottom-width: 2px; --border-color: var(--token-ead35b5e-4f61-4117-ae4f-f35f89292c64, rgba(43, 43, 43, 0.24)); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 18px 0px 18px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-ild71f { align-content: center; align-items: center; align-self: center; background-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; justify-self: center; padding: 10px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-15mrqqe { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100px; word-break: break-word; word-wrap: break-word; }`,`.framer-L8nVi .framer-1yxbqx1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 78%; }`,`.framer-L8nVi .framer-pxru75 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1u434jq, .framer-L8nVi .framer-9z5jv4, .framer-L8nVi .framer-z6y1nl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,`.framer-L8nVi .framer-o8lj7u, .framer-L8nVi .framer-gsshto { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-91rbnk, .framer-L8nVi .framer-16mz69l { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,`.framer-L8nVi .framer-2kzk6y { align-content: flex-start; align-items: flex-start; background: linear-gradient(90deg, #ffffff 0%, rgb(43, 43, 43) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 182px; justify-content: center; padding: 16px 8px 16px 16px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-ybo5g4 { align-content: flex-start; align-items: flex-start; background-color: var(--token-94cba2ae-c87e-45a1-bb7d-719c2bb79d7a); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-mtpa5v { flex: none; height: 180px; position: relative; width: 270px; }`,`.framer-L8nVi .framer-8nl3ue { background-color: #424242; border-bottom-right-radius: 45px; border-top-right-radius: 45px; flex: none; height: 90px; left: 0px; position: absolute; top: 0px; width: 90px; }`,`.framer-L8nVi .framer-1yzw0k5 { background-color: #929393; border-bottom-right-radius: 45px; border-top-right-radius: 45px; flex: none; height: 90px; left: 0px; position: absolute; top: 90px; width: 90px; }`,`.framer-L8nVi .framer-of28dj { background-color: #c2c1c0; border-bottom-right-radius: 45px; border-top-right-radius: 45px; flex: none; height: 90px; left: 90px; position: absolute; top: 0px; width: 90px; }`,`.framer-L8nVi .framer-15y06iu { background-color: #424242; border-top-left-radius: 45px; border-top-right-radius: 45px; flex: none; height: 90px; left: 90px; position: absolute; top: 90px; width: 90px; }`,`.framer-L8nVi .framer-1odizgs { background-color: #929393; border-bottom-left-radius: 45px; border-bottom-right-radius: 45px; border-top-left-radius: 45px; border-top-right-radius: 45px; flex: none; height: 180px; left: 180px; position: absolute; top: 0px; width: 90px; }`,`.framer-L8nVi .framer-1vkp29c { align-content: center; align-items: center; background-color: var(--token-0d546115-b929-485f-b640-f74dad62d7d0, #c8c7c7); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 124px 0px 124px 0px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-3nwhu3 { --framer-text-wrap-override: pretty; flex: none; height: auto; max-width: 720px; position: relative; width: 100%; }`,`.framer-L8nVi .framer-1sjbr5b { --border-bottom-width: 2px; --border-color: var(--token-ad9a4849-4718-40d1-b1e7-d04448b9c8be); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; -webkit-filter: grayscale(1); filter: grayscale(1); flex: none; height: auto; position: relative; width: 100%; }`,...Ho,...qo,...Lo,...No,`.framer-L8nVi[data-border="true"]::after, .framer-L8nVi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,`@media (min-width: 1224px) and (max-width: 1483.98px) { .framer-L8nVi.framer-1c005mn { width: 1224px; } .framer-L8nVi .framer-xax67u-container { max-width: 84%; order: 0; } .framer-L8nVi .framer-euayji { order: 1; padding: 128px 0px 100px 0px; } .framer-L8nVi .framer-1lw0wwi, .framer-L8nVi .framer-16l85tv, .framer-L8nVi .framer-x2i07n { gap: 56px; width: 84%; } .framer-L8nVi .framer-1mu2amv { height: 560px; } .framer-L8nVi .framer-hsayjj { bottom: -1px; height: 536px; left: calc(50.00000000000002% - 820px / 2); top: unset; width: 820px; } .framer-L8nVi .framer-19j6fj1 { order: 3; padding: 100px 0px 100px 0px; } .framer-L8nVi .framer-1lurhep, .framer-L8nVi .framer-ue97mb, .framer-L8nVi .framer-s22ds7, .framer-L8nVi .framer-p3hibf { padding: 120px 24px 28px 24px; } .framer-L8nVi .framer-12o0ec { order: 2; padding: 100px 0px 100px 0px; } .framer-L8nVi .framer-n9gjdi { height: 541px; width: 1028px; } .framer-L8nVi .framer-1sbh8si { height: 214px; left: 248px; padding: 0px 0px 0px 82px; top: 111px; width: 342px; } .framer-L8nVi .framer-2n0ztd { height: 108px; left: 581px; top: 111px; width: 257px; } .framer-L8nVi .framer-7dg86j { border-bottom-left-radius: 79px; border-bottom-right-radius: 79px; border-top-left-radius: 79px; border-top-right-radius: 79px; height: 219px; left: 835px; width: 193px; } .framer-L8nVi .framer-113e0j8 { border-bottom-left-radius: 79px; border-bottom-right-radius: 79px; border-top-left-radius: 79px; border-top-right-radius: 79px; height: 215px; top: 325px; width: 193px; } .framer-L8nVi .framer-1b1rbo0 { height: 108px; left: 190px; top: 325px; width: 379px; } .framer-L8nVi .framer-1600tfv { height: 108px; left: 563px; top: 433px; width: 387px; } .framer-L8nVi .framer-ydgkci { height: 213px; left: 561px; top: 219px; width: 213px; } .framer-L8nVi .framer-1iapi6r { order: 4; padding: 100px 0px 100px 0px; } .framer-L8nVi .framer-h6gqhr { order: 5; } .framer-L8nVi .framer-q3mr00 { order: 6; padding: 100px 0px 100px 0px; } .framer-L8nVi .framer-1eki9ie, .framer-L8nVi .framer-axyrnj { gap: 48px; width: 84%; } .framer-L8nVi .framer-1eahm62 { order: 7; } .framer-L8nVi .framer-1el28y3 { order: 9; padding: 100px 0px 100px 0px; } .framer-L8nVi .framer-2bsint { width: 84%; } .framer-L8nVi .framer-175thri { order: 10; } .framer-L8nVi .framer-c08i3t { bottom: unset; left: -108px; right: -111px; top: 0px; } .framer-L8nVi .framer-17n8uwh { order: 11; padding: 100px 0px 100px 0px; } .framer-L8nVi .framer-17hshus { gap: 40px; width: 84%; } .framer-L8nVi .framer-15mrqqe { white-space: pre; width: auto; } .framer-L8nVi .framer-1w35uk6 { order: 12; } .framer-L8nVi .framer-n4wlht { order: 13; padding: 100px 0px 100px 0px; } .framer-L8nVi .framer-1yxbqx1 { gap: 64px; width: 84%; } .framer-L8nVi .framer-1vkp29c { order: 14; padding: 100px 0px 100px 0px; } .framer-L8nVi .framer-ewbp66 { order: 15; }}`,`@media (min-width: 810px) and (max-width: 1223.98px) { .framer-L8nVi.framer-1c005mn { width: 810px; } .framer-L8nVi .framer-xax67u-container { max-width: 86%; } .framer-L8nVi .framer-euayji { padding: 120px 0px 80px 0px; } .framer-L8nVi .framer-1lw0wwi, .framer-L8nVi .framer-16l85tv, .framer-L8nVi .framer-1eki9ie, .framer-L8nVi .framer-axyrnj { gap: 48px; width: 86%; } .framer-L8nVi .framer-1mu2amv { height: 420px; } .framer-L8nVi .framer-hsayjj { bottom: -9px; height: 412px; left: calc(50.00000000000002% - 632px / 2); top: unset; width: 632px; } .framer-L8nVi .framer-ot1h64 { flex-direction: column; gap: 24px; padding: 32px 0px 0px 0px; } .framer-L8nVi .framer-1ul5aao, .framer-L8nVi .framer-1hgghm8, .framer-L8nVi .framer-m13bcr, .framer-L8nVi .framer-1ixvdsa, .framer-L8nVi .framer-d7cppm, .framer-L8nVi .framer-n98itl, .framer-L8nVi .framer-1u434jq, .framer-L8nVi .framer-91rbnk, .framer-L8nVi .framer-9z5jv4, .framer-L8nVi .framer-z6y1nl, .framer-L8nVi .framer-16mz69l { flex: none; width: 100%; } .framer-L8nVi .framer-19j6fj1, .framer-L8nVi .framer-12o0ec, .framer-L8nVi .framer-1iapi6r, .framer-L8nVi .framer-q3mr00, .framer-L8nVi .framer-1el28y3, .framer-L8nVi .framer-17n8uwh, .framer-L8nVi .framer-n4wlht, .framer-L8nVi .framer-1vkp29c { padding: 80px 0px 80px 0px; } .framer-L8nVi .framer-zlf4cy { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-L8nVi .framer-1lurhep, .framer-L8nVi .framer-ue97mb, .framer-L8nVi .framer-s22ds7, .framer-L8nVi .framer-p3hibf { padding: 150px 32px 48px 32px; } .framer-L8nVi .framer-n9gjdi { height: 544px; width: 696px; } .framer-L8nVi .framer-1sbh8si { height: 217px; left: 0px; padding: 0px 0px 0px 84px; top: 0px; width: 345px; } .framer-L8nVi .framer-2n0ztd { height: 110px; left: 345px; top: 0px; width: 260px; } .framer-L8nVi .framer-7dg86j { border-bottom-left-radius: 72px; border-bottom-right-radius: 72px; border-top-left-radius: 72px; border-top-right-radius: 72px; height: 222px; left: 501px; top: 110px; width: 195px; } .framer-L8nVi .framer-113e0j8 { border-bottom-left-radius: 72px; border-bottom-right-radius: 72px; border-top-left-radius: 72px; border-top-right-radius: 72px; height: 218px; top: 217px; width: 194px; } .framer-L8nVi .framer-1b1rbo0 { height: 109px; left: 0px; top: 435px; width: 383px; } .framer-L8nVi .framer-1600tfv { height: 109px; left: 383px; top: 435px; width: 313px; } .framer-L8nVi .framer-ydgkci { height: 217px; left: 284px; top: 217px; width: 217px; } .framer-L8nVi .framer-x2i07n { flex-direction: column; gap: 48px; width: 86%; } .framer-L8nVi .framer-1vx3pht { flex-direction: column; gap: 32px; } .framer-L8nVi .framer-2bsint { width: 86%; } .framer-L8nVi .framer-x1of6 { gap: 40px 32px; } .framer-L8nVi .framer-c08i3t { bottom: -57px; left: -387px; right: -390px; } .framer-L8nVi .framer-17hshus { gap: 40px; width: 86%; } .framer-L8nVi .framer-yaed3g { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; } .framer-L8nVi .framer-1yxbqx1 { gap: 56px; width: 86%; } .framer-L8nVi .framer-pxru75 { flex-direction: column; gap: 48px; } .framer-L8nVi .framer-o8lj7u, .framer-L8nVi .framer-gsshto { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 12px; }}`,`@media (max-width: 809.98px) { .framer-L8nVi.framer-1c005mn { width: 390px; } .framer-L8nVi .framer-xax67u-container { max-width: 90%; } .framer-L8nVi .framer-euayji { padding: 104px 0px 56px 0px; } .framer-L8nVi .framer-1lw0wwi, .framer-L8nVi .framer-16l85tv, .framer-L8nVi .framer-17hshus { gap: 32px; width: 90%; } .framer-L8nVi .framer-1mu2amv { height: 300px; } .framer-L8nVi .framer-hsayjj { height: 288px; left: -45px; right: -45px; top: calc(50.00000000000002% - 288px / 2); width: unset; } .framer-L8nVi .framer-ot1h64 { flex-direction: column; gap: 20px; padding: 24px 0px 0px 0px; } .framer-L8nVi .framer-1ul5aao, .framer-L8nVi .framer-1g798tp, .framer-L8nVi .framer-l7vawp, .framer-L8nVi .framer-bec7b6, .framer-L8nVi .framer-1ixvdsa, .framer-L8nVi .framer-d7cppm, .framer-L8nVi .framer-n98itl, .framer-L8nVi .framer-9a4u5c, .framer-L8nVi .framer-1llkfi5, .framer-L8nVi .framer-i2lgk7, .framer-L8nVi .framer-1u434jq, .framer-L8nVi .framer-91rbnk, .framer-L8nVi .framer-9z5jv4, .framer-L8nVi .framer-z6y1nl, .framer-L8nVi .framer-16mz69l { flex: none; width: 100%; } .framer-L8nVi .framer-1hgghm8 { flex: none; gap: 20px; width: 100%; } .framer-L8nVi .framer-1drjai6 { flex-direction: column; gap: 8px; justify-content: flex-start; } .framer-L8nVi .framer-1ogapip { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-L8nVi .framer-19j6fj1, .framer-L8nVi .framer-12o0ec, .framer-L8nVi .framer-1iapi6r, .framer-L8nVi .framer-q3mr00, .framer-L8nVi .framer-1el28y3, .framer-L8nVi .framer-17n8uwh, .framer-L8nVi .framer-n4wlht, .framer-L8nVi .framer-1vkp29c { padding: 56px 0px 56px 0px; } .framer-L8nVi .framer-1xufxza { flex-direction: column; gap: 16px; justify-content: flex-start; } .framer-L8nVi .framer-zlf4cy { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-L8nVi .framer-1lurhep, .framer-L8nVi .framer-ue97mb, .framer-L8nVi .framer-s22ds7, .framer-L8nVi .framer-p3hibf { gap: 10px; height: 1fr; padding: 96px 48px 20px 48px; } .framer-L8nVi .framer-n9gjdi { height: 762px; width: 351px; } .framer-L8nVi .framer-1sbh8si { gap: 6px; height: 200px; left: 0px; padding: 0px 0px 0px 86px; top: 0px; width: 351px; } .framer-L8nVi .framer-r0163z, .framer-L8nVi .framer-14u4za4, .framer-L8nVi .framer-1pxnuqo, .framer-L8nVi .framer-6phssd, .framer-L8nVi .framer-npf4zv, .framer-L8nVi .framer-1pvyv4k, .framer-L8nVi .framer-5olru9 { width: 80px; } .framer-L8nVi .framer-2n0ztd { gap: 16px; height: 96px; left: 0px; top: 200px; width: 351px; } .framer-L8nVi .framer-7dg86j { border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; gap: 6px; height: 190px; left: 0px; top: 296px; width: 165px; } .framer-L8nVi .framer-113e0j8 { border-bottom-left-radius: 60px; border-bottom-right-radius: 60px; border-top-left-radius: 60px; border-top-right-radius: 60px; gap: 6px; height: 180px; top: 582px; width: 150px; } .framer-L8nVi .framer-1b1rbo0 { gap: 16px; height: 96px; left: 0px; top: 486px; width: 351px; } .framer-L8nVi .framer-1600tfv { gap: 16px; height: 96px; left: 150px; top: 582px; width: 201px; } .framer-L8nVi .framer-ydgkci { gap: 6px; height: 186px; left: 165px; top: 298px; width: 186px; } .framer-L8nVi .framer-x2i07n { flex-direction: column; gap: 40px; width: 90%; } .framer-L8nVi .framer-m13bcr { flex: none; gap: 28px; width: 100%; } .framer-L8nVi .framer-1sj2m5v, .framer-L8nVi .framer-19jm9q4, .framer-L8nVi .framer-m30h6n { flex-direction: column; gap: 10px; padding: 18px 0px 22px 0px; } .framer-L8nVi .framer-v9o9ay, .framer-L8nVi .framer-x66dyo, .framer-L8nVi .framer-xgsb7x { padding: 0px; width: 100%; } .framer-L8nVi .framer-1eki9ie, .framer-L8nVi .framer-2bsint, .framer-L8nVi .framer-axyrnj { gap: 40px; width: 90%; } .framer-L8nVi .framer-1vx3pht { flex-direction: column; gap: 32px; } .framer-L8nVi .framer-x1of6 { gap: 36px 0px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-L8nVi .framer-c08i3t { bottom: -35px; left: -681px; right: -476px; } .framer-L8nVi .framer-1oprocd { flex-direction: column; } .framer-L8nVi .framer-1enzrhd { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-L8nVi .framer-yaed3g { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; } .framer-L8nVi .framer-1yxbqx1 { gap: 48px; width: 90%; } .framer-L8nVi .framer-pxru75 { flex-direction: column; gap: 48px; } .framer-L8nVi .framer-o8lj7u, .framer-L8nVi .framer-gsshto { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 12px; }}`],ps=v(ds,fs,`framer-L8nVi`),ps.displayName=`BRO`,ps.defaultProps={height:13276,width:1484},b(ps,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`},{cssFamilyName:`Oswald`,openType:!0,source:`fontshare`,style:`normal`,uiFamilyName:`Oswald`,url:`/fonts/t/fontshare_wf_PYCLPQS6HZBLJGMCPKBPEXQKWPKQ7OHE_TPDXSFLT6F2DLRHVAQNPEX367ZCFB6CP_OF7M536OVLRNXVSLVYIW3HQVUIUZ56CU.woff2`,weight:`400`}]},...Xo,...Zo,...Qo,...$o,...es,...le(Vo),...le(Ko),...le(Io),...le(Mo)],{supportsExplicitInterCodegen:!0}),ps.loader={load:(e,t)=>se([()=>S(he,{},t)],t)},ms={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`Framerjo9Xuyb7V`,slots:[],annotations:{framerContractVersion:`1`,framerIntrinsicHeight:`13276`,framerComponentViewportWidth:`true`,framerAutoSizeImages:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"OtjKsgyMk":{"layout":["fixed","auto"]},"rmv4JHGBy":{"layout":["fixed","auto"]},"XV2fc68Ib":{"layout":["fixed","auto"]}}}`,framerLayoutTemplateFlowEffect:`true`,framerScrollSections:`{"MXVLDAuhd":{"pattern":":MXVLDAuhd","name":"bro-generator-next"},"VdmqJRHFt":{"pattern":":VdmqJRHFt","name":"results"},"BMwQbeKCS":{"pattern":":BMwQbeKCS","name":"contents"},"kTWzdHHmI":{"pattern":":kTWzdHHmI","name":"project"},"xBaU1aJ4k":{"pattern":":xBaU1aJ4k","name":"brief"},"V4oS8XBsj":{"pattern":":V4oS8XBsj","name":"research"},"uVjMeYupC":{"pattern":":uVjMeYupC","name":"bro-r1"},"LANiczcO_":{"pattern":":LANiczcO_","name":"bro-r4"},"Tu_24S1xO":{"pattern":":Tu_24S1xO","name":"bro-r5"},"mOpWcKZJA":{"pattern":":mOpWcKZJA","name":"bro-r7"},"eMcrgTBFu":{"pattern":":eMcrgTBFu","name":"process"},"Mq8zL7lgc":{"pattern":":Mq8zL7lgc","name":"principles"},"ynUi0BlNF":{"pattern":":ynUi0BlNF","name":"bro-p1"},"e8kmuRy2R":{"pattern":":e8kmuRy2R","name":"bro-p2"},"jc4_Fv7y7":{"pattern":":jc4_Fv7y7","name":"bro-p3"},"Cea1CBONr":{"pattern":":Cea1CBONr","name":"generator"}}`,framerAcceptsLayoutTemplate:`true`,framerResponsiveScreen:`true`,framerDisplayContentsDiv:`false`,framerImmutableVariables:`true`,framerColorSyntax:`true`,framerIntrinsicWidth:`1484`}},__FramerMetadata__:{type:`variable`}}}})))()}hs();export{ms as __FramerMetadata__,ps as default,rs as queryParamNames};
//# sourceMappingURL=xJct13nX7foyGs70K_7G1n5r3H5fx8FYbDeOTOLhgIg.DSnpLO7y.mjs.map