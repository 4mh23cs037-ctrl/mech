(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function f0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sm={exports:{}},bl={},am={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),p0=Symbol.for("react.portal"),m0=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),x0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),S0=Symbol.for("react.suspense"),b0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),mh=Symbol.iterator;function w0(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lm=Object.assign,cm={};function As(t,e,n){this.props=t,this.context=e,this.refs=cm,this.updater=n||om}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function um(){}um.prototype=As.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=cm,this.updater=n||om}var ad=sd.prototype=new um;ad.constructor=sd;lm(ad,As.prototype);ad.isPureReactComponent=!0;var gh=Array.isArray,dm=Object.prototype.hasOwnProperty,od={current:null},hm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dm.call(e,i)&&!hm.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:Aa,type:t,key:s,ref:o,props:r,_owner:od.current}}function E0(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function T0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xh=/\/+/g;function Kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?T0(""+t.key):e.toString(36)}function No(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case p0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Kl(o,0):i,gh(r)?(n="",t!=null&&(n=t.replace(xh,"$&/")+"/"),No(r,e,n,"",function(u){return u})):r!=null&&(ld(r)&&(r=E0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(xh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gh(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+Kl(s,l);o+=No(s,e,n,c,r)}else if(c=w0(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+Kl(s,l++),o+=No(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function za(t,e,n){if(t==null)return t;var i=[],r=0;return No(t,i,"","",function(s){return e.call(n,s,r++)}),i}function A0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ro={transition:null},C0={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:od};function pm(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=As;We.Fragment=m0;We.Profiler=x0;We.PureComponent=sd;We.StrictMode=g0;We.Suspense=S0;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;We.act=pm;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=lm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)dm.call(e,c)&&!hm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:Aa,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:y0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:v0,_context:t},t.Consumer=t};We.createElement=fm;We.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:_0,render:t}};We.isValidElement=ld;We.lazy=function(t){return{$$typeof:M0,_payload:{_status:-1,_result:t},_init:A0}};We.memo=function(t,e){return{$$typeof:b0,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};We.unstable_act=pm;We.useCallback=function(t,e){return qt.current.useCallback(t,e)};We.useContext=function(t){return qt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};We.useEffect=function(t,e){return qt.current.useEffect(t,e)};We.useId=function(){return qt.current.useId()};We.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return qt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};We.useRef=function(t){return qt.current.useRef(t)};We.useState=function(t){return qt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return qt.current.useTransition()};We.version="18.3.1";am.exports=We;var re=am.exports;const N0=f0(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0=re,P0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),D0=Object.prototype.hasOwnProperty,I0=R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function mm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)D0.call(e,i)&&!U0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:P0,type:t,key:s,ref:o,props:r,_owner:I0.current}}bl.Fragment=L0;bl.jsx=mm;bl.jsxs=mm;sm.exports=bl;var a=sm.exports,iu={},gm={exports:{}},fn={},xm={exports:{}},vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,K){var X=U.length;U.push(K);e:for(;0<X;){var J=X-1>>>1,_e=U[J];if(0<r(_e,K))U[J]=K,U[X]=_e,X=J;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var K=U[0],X=U.pop();if(X!==K){U[0]=X;e:for(var J=0,_e=U.length,Re=_e>>>1;J<Re;){var G=2*(J+1)-1,te=U[G],pe=G+1,ce=U[pe];if(0>r(te,X))pe<_e&&0>r(ce,te)?(U[J]=ce,U[pe]=X,J=pe):(U[J]=te,U[G]=X,J=G);else if(pe<_e&&0>r(ce,X))U[J]=ce,U[pe]=X,J=pe;else break e}}return K}function r(U,K){var X=U.sortIndex-K.sortIndex;return X!==0?X:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],h=1,p=null,f=3,g=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=U)i(u),K.sortIndex=K.expirationTime,e(c,K);else break;K=n(u)}}function b(U){if(_=!1,v(U),!y)if(n(c)!==null)y=!0,W(R);else{var K=n(u);K!==null&&Z(b,K.startTime-U)}}function R(U,K){y=!1,_&&(_=!1,d(P),P=-1),g=!0;var X=f;try{for(v(K),p=n(c);p!==null&&(!(p.expirationTime>K)||U&&!N());){var J=p.callback;if(typeof J=="function"){p.callback=null,f=p.priorityLevel;var _e=J(p.expirationTime<=K);K=t.unstable_now(),typeof _e=="function"?p.callback=_e:p===n(c)&&i(c),v(K)}else i(c);p=n(c)}if(p!==null)var Re=!0;else{var G=n(u);G!==null&&Z(b,G.startTime-K),Re=!1}return Re}finally{p=null,f=X,g=!1}}var A=!1,T=null,P=-1,E=5,S=-1;function N(){return!(t.unstable_now()-S<E)}function H(){if(T!==null){var U=t.unstable_now();S=U;var K=!0;try{K=T(!0,U)}finally{K?F():(A=!1,T=null)}}else A=!1}var F;if(typeof x=="function")F=function(){x(H)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,$=q.port2;q.port1.onmessage=H,F=function(){$.postMessage(null)}}else F=function(){m(H,0)};function W(U){T=U,A||(A=!0,F())}function Z(U,K){P=m(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,W(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var X=f;f=K;try{return U()}finally{f=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=f;f=U;try{return K()}finally{f=X}},t.unstable_scheduleCallback=function(U,K,X){var J=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?J+X:J):X=J,U){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=X+_e,U={id:h++,callback:K,priorityLevel:U,startTime:X,expirationTime:_e,sortIndex:-1},X>J?(U.sortIndex=X,e(u,U),n(c)===null&&U===n(u)&&(_?(d(P),P=-1):_=!0,Z(b,X-J))):(U.sortIndex=_e,e(c,U),y||g||(y=!0,W(R))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var K=f;return function(){var X=f;f=K;try{return U.apply(this,arguments)}finally{f=X}}}})(vm);xm.exports=vm;var k0=xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=re,hn=k0;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ym=new Set,ca={};function Er(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(ca[t]=e,t=0;t<e.length;t++)ym.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,F0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vh={},yh={};function O0(t){return ru.call(yh,t)?!0:ru.call(vh,t)?!1:F0.test(t)?yh[t]=!0:(vh[t]=!0,!1)}function z0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B0(t,e,n,i){if(e===null||typeof e>"u"||z0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var cd=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cd,ud);kt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cd,ud);kt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cd,ud);kt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B0(e,n,r,i)&&(n=null),i||r===null?O0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),Sm=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),bm=Symbol.for("react.offscreen"),_h=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Zl;function $s(t){if(Zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var Ql=!1;function Jl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,l=s.length-1;1<=o&&0<=l&&r[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==s[l]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function H0(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Jl(t.type,!1),t;case 11:return t=Jl(t.type.render,!1),t;case 1:return t=Jl(t.type,!0),t;default:return""}}function lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case su:return"Profiler";case hd:return"StrictMode";case au:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sm:return(t.displayName||"Context")+".Consumer";case _m:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pd:return e=t.displayName||null,e!==null?e:lu(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return lu(t(e))}catch{}}return null}function V0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lu(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G0(t){var e=Mm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=G0(t))}function wm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Em(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function uu(t,e){Em(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?du(t,e.type,n):e.hasOwnProperty("defaultValue")&&du(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function du(t,e,n){(e!=="number"||Ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ks(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function Tm(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,Cm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W0=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){W0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function Nm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function Rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Nm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var X0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(t,e){if(e){if(X0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xu=null,ss=null,as=null;function Eh(t){if(t=Ra(t)){if(typeof xu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Al(e),xu(t.stateNode,t.type,e))}}function Pm(t){ss?as?as.push(t):as=[t]:ss=t}function Lm(){if(ss){var t=ss,e=as;if(as=ss=null,Eh(t),e)for(t=0;t<e.length;t++)Eh(e[t])}}function Dm(t,e){return t(e)}function Im(){}var ec=!1;function Um(t,e,n){if(ec)return t(e,n);ec=!0;try{return Dm(t,e,n)}finally{ec=!1,(ss!==null||as!==null)&&(Im(),Lm())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var i=Al(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var vu=!1;if(hi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){vu=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{vu=!1}function q0(t,e,n,i,r,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ta=!1,Vo=null,Go=!1,yu=null,Y0={onError:function(t){ta=!0,Vo=t}};function $0(t,e,n,i,r,s,o,l,c){ta=!1,Vo=null,q0.apply(Y0,arguments)}function K0(t,e,n,i,r,s,o,l,c){if($0.apply(this,arguments),ta){if(ta){var u=Vo;ta=!1,Vo=null}else throw Error(ae(198));Go||(Go=!0,yu=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Th(t){if(Tr(t)!==t)throw Error(ae(188))}function Z0(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Th(r),t;if(s===i)return Th(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function jm(t){return t=Z0(t),t!==null?Fm(t):null}function Fm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fm(t);if(e!==null)return e;t=t.sibling}return null}var Om=hn.unstable_scheduleCallback,Ah=hn.unstable_cancelCallback,Q0=hn.unstable_shouldYield,J0=hn.unstable_requestPaint,vt=hn.unstable_now,ev=hn.unstable_getCurrentPriorityLevel,gd=hn.unstable_ImmediatePriority,zm=hn.unstable_UserBlockingPriority,Wo=hn.unstable_NormalPriority,tv=hn.unstable_LowPriority,Bm=hn.unstable_IdlePriority,Ml=null,$n=null;function nv(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:sv,iv=Math.log,rv=Math.LN2;function sv(t){return t>>>=0,t===0?32:31-(iv(t)/rv|0)|0}var Ga=64,Wa=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?i=Zs(l):(s&=o,s!==0&&(i=Zs(s)))}else o=n&~r,o!==0?i=Zs(o):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function av(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ov(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),l=1<<o,c=r[o];c===-1?(!(l&n)||l&i)&&(r[o]=av(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function _u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hm(){var t=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),t}function tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function lv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Vm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gm,vd,Wm,Xm,qm,Su=!1,Xa=[],Di=null,Ii=null,Ui=null,ha=new Map,fa=new Map,Ai=[],cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ch(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ra(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function uv(t,e,n,i,r){switch(e){case"focusin":return Di=js(Di,t,e,n,i,r),!0;case"dragenter":return Ii=js(Ii,t,e,n,i,r),!0;case"mouseover":return Ui=js(Ui,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,js(ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fa.set(s,js(fa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ym(t){var e=hr(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=km(n),e!==null){t.blockedOn=e,qm(t.priority,function(){Wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Po(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gu=i,n.target.dispatchEvent(i),gu=null}else return e=Ra(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Nh(t,e,n){Po(t)&&n.delete(e)}function dv(){Su=!1,Di!==null&&Po(Di)&&(Di=null),Ii!==null&&Po(Ii)&&(Ii=null),Ui!==null&&Po(Ui)&&(Ui=null),ha.forEach(Nh),fa.forEach(Nh)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Su||(Su=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,dv)))}function pa(t){function e(r){return Fs(r,t)}if(0<Xa.length){Fs(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Fs(Di,t),Ii!==null&&Fs(Ii,t),Ui!==null&&Fs(Ui,t),ha.forEach(e),fa.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&Ai.shift()}var os=gi.ReactCurrentBatchConfig,qo=!0;function hv(t,e,n,i){var r=Je,s=os.transition;os.transition=null;try{Je=1,yd(t,e,n,i)}finally{Je=r,os.transition=s}}function fv(t,e,n,i){var r=Je,s=os.transition;os.transition=null;try{Je=4,yd(t,e,n,i)}finally{Je=r,os.transition=s}}function yd(t,e,n,i){if(qo){var r=bu(t,e,n,i);if(r===null)dc(t,e,i,Yo,n),Ch(t,i);else if(uv(r,t,e,n,i))i.stopPropagation();else if(Ch(t,i),e&4&&-1<cv.indexOf(t)){for(;r!==null;){var s=Ra(r);if(s!==null&&Gm(s),s=bu(t,e,n,i),s===null&&dc(t,e,i,Yo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else dc(t,e,i,null,n)}}var Yo=null;function bu(t,e,n,i){if(Yo=null,t=md(i),t=hr(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yo=t,null}function $m(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ev()){case gd:return 1;case zm:return 4;case Wo:case tv:return 16;case Bm:return 536870912;default:return 16}default:return 16}}var Ri=null,_d=null,Lo=null;function Km(){if(Lo)return Lo;var t,e=_d,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Lo=r.slice(t,1<i?1-i:void 0)}function Do(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Rh(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Rh,this.isPropagationStopped=Rh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=pn(Cs),Na=ht({},Cs,{view:0,detail:0}),pv=pn(Na),nc,ic,Os,wl=ht({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(nc=t.screenX-Os.screenX,ic=t.screenY-Os.screenY):ic=nc=0,Os=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Ph=pn(wl),mv=ht({},wl,{dataTransfer:0}),gv=pn(mv),xv=ht({},Na,{relatedTarget:0}),rc=pn(xv),vv=ht({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=pn(vv),_v=ht({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sv=pn(_v),bv=ht({},Cs,{data:0}),Lh=pn(bv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ev[t])?!!e[t]:!1}function bd(){return Tv}var Av=ht({},Na,{key:function(t){if(t.key){var e=Mv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Do(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?Do(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Do(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cv=pn(Av),Nv=ht({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=pn(Nv),Rv=ht({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),Pv=pn(Rv),Lv=ht({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dv=pn(Lv),Iv=ht({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uv=pn(Iv),kv=[9,13,27,32],Md=hi&&"CompositionEvent"in window,na=null;hi&&"documentMode"in document&&(na=document.documentMode);var jv=hi&&"TextEvent"in window&&!na,Zm=hi&&(!Md||na&&8<na&&11>=na),Ih=" ",Uh=!1;function Qm(t,e){switch(t){case"keyup":return kv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function Fv(t,e){switch(t){case"compositionend":return Jm(e);case"keypress":return e.which!==32?null:(Uh=!0,Ih);case"textInput":return t=e.data,t===Ih&&Uh?null:t;default:return null}}function Ov(t,e){if(qr)return t==="compositionend"||!Md&&Qm(t,e)?(t=Km(),Lo=_d=Ri=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zm&&e.locale!=="ko"?null:e.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zv[t.type]:e==="textarea"}function eg(t,e,n,i){Pm(i),e=$o(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ia=null,ma=null;function Bv(t){dg(t,0)}function El(t){var e=Kr(t);if(wm(e))return t}function Hv(t,e){if(t==="change")return e}var tg=!1;if(hi){var sc;if(hi){var ac="oninput"in document;if(!ac){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),ac=typeof jh.oninput=="function"}sc=ac}else sc=!1;tg=sc&&(!document.documentMode||9<document.documentMode)}function Fh(){ia&&(ia.detachEvent("onpropertychange",ng),ma=ia=null)}function ng(t){if(t.propertyName==="value"&&El(ma)){var e=[];eg(e,ma,t,md(t)),Um(Bv,e)}}function Vv(t,e,n){t==="focusin"?(Fh(),ia=e,ma=n,ia.attachEvent("onpropertychange",ng)):t==="focusout"&&Fh()}function Gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(ma)}function Wv(t,e){if(t==="click")return El(e)}function Xv(t,e){if(t==="input"||t==="change")return El(e)}function qv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:qv;function ga(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ru.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zh(t,e){var n=Oh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rg(){for(var t=window,e=Ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ho(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yv(t){var e=rg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ig(n.ownerDocument.documentElement,n)){if(i!==null&&wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zh(n,s);var o=zh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $v=hi&&"documentMode"in document&&11>=document.documentMode,Yr=null,Mu=null,ra=null,wu=!1;function Bh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wu||Yr==null||Yr!==Ho(i)||(i=Yr,"selectionStart"in i&&wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ra&&ga(ra,i)||(ra=i,i=$o(Mu,"onSelect"),0<i.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Yr)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},oc={},sg={};hi&&(sg=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Tl(t){if(oc[t])return oc[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sg)return oc[t]=e[n];return t}var ag=Tl("animationend"),og=Tl("animationiteration"),lg=Tl("animationstart"),cg=Tl("transitionend"),ug=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){ug.set(t,e),Er(e,[t])}for(var lc=0;lc<Hh.length;lc++){var cc=Hh[lc],Kv=cc.toLowerCase(),Zv=cc[0].toUpperCase()+cc.slice(1);Yi(Kv,"on"+Zv)}Yi(ag,"onAnimationEnd");Yi(og,"onAnimationIteration");Yi(lg,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(cg,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function Vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,K0(i,e,void 0,t),t.currentTarget=null}function dg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var l=i[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;Vh(r,l,u),s=c}else for(o=0;o<i.length;o++){if(l=i[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;Vh(r,l,u),s=c}}}if(Go)throw t=yu,Go=!1,yu=null,t}function at(t,e){var n=e[Nu];n===void 0&&(n=e[Nu]=new Set);var i=t+"__bubble";n.has(i)||(hg(e,t,2,!1),n.add(i))}function uc(t,e,n){var i=0;e&&(i|=4),hg(n,t,i,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[$a]){t[$a]=!0,ym.forEach(function(n){n!=="selectionchange"&&(Qv.has(n)||uc(n,!1,t),uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,uc("selectionchange",!1,e))}}function hg(t,e,n,i){switch($m(e)){case 1:var r=hv;break;case 4:r=fv;break;default:r=yd}n=r.bind(null,e,n,t),r=void 0,!vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function dc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;l!==null;){if(o=hr(l),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}l=l.parentNode}}i=i.return}Um(function(){var u=s,h=md(n),p=[];e:{var f=ug.get(t);if(f!==void 0){var g=Sd,y=t;switch(t){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":g=Cv;break;case"focusin":y="focus",g=rc;break;case"focusout":y="blur",g=rc;break;case"beforeblur":case"afterblur":g=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Pv;break;case ag:case og:case lg:g=yv;break;case cg:g=Dv;break;case"scroll":g=pv;break;case"wheel":g=Uv;break;case"copy":case"cut":case"paste":g=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Dh}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var x=u,v;x!==null;){v=x;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,d!==null&&(b=da(x,d),b!=null&&_.push(va(x,b,v)))),m)break;x=x.return}0<_.length&&(f=new g(f,y,null,n,h),p.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==gu&&(y=n.relatedTarget||n.fromElement)&&(hr(y)||y[fi]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?hr(y):null,y!==null&&(m=Tr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Ph,b="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Dh,b="onPointerLeave",d="onPointerEnter",x="pointer"),m=g==null?f:Kr(g),v=y==null?f:Kr(y),f=new _(b,x+"leave",g,n,h),f.target=m,f.relatedTarget=v,b=null,hr(h)===u&&(_=new _(d,x+"enter",y,n,h),_.target=v,_.relatedTarget=m,b=_),m=b,g&&y)t:{for(_=g,d=y,x=0,v=_;v;v=Ar(v))x++;for(v=0,b=d;b;b=Ar(b))v++;for(;0<x-v;)_=Ar(_),x--;for(;0<v-x;)d=Ar(d),v--;for(;x--;){if(_===d||d!==null&&_===d.alternate)break t;_=Ar(_),d=Ar(d)}_=null}else _=null;g!==null&&Gh(p,f,g,_,!1),y!==null&&m!==null&&Gh(p,m,y,_,!0)}}e:{if(f=u?Kr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var R=Hv;else if(kh(f))if(tg)R=Xv;else{R=Gv;var A=Vv}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=Wv);if(R&&(R=R(t,u))){eg(p,R,n,h);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&du(f,"number",f.value)}switch(A=u?Kr(u):window,t){case"focusin":(kh(A)||A.contentEditable==="true")&&(Yr=A,Mu=u,ra=null);break;case"focusout":ra=Mu=Yr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Bh(p,n,h);break;case"selectionchange":if($v)break;case"keydown":case"keyup":Bh(p,n,h)}var T;if(Md)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else qr?Qm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Zm&&n.locale!=="ko"&&(qr||P!=="onCompositionStart"?P==="onCompositionEnd"&&qr&&(T=Km()):(Ri=h,_d="value"in Ri?Ri.value:Ri.textContent,qr=!0)),A=$o(u,P),0<A.length&&(P=new Lh(P,t,null,n,h),p.push({event:P,listeners:A}),T?P.data=T:(T=Jm(n),T!==null&&(P.data=T)))),(T=jv?Fv(t,n):Ov(t,n))&&(u=$o(u,"onBeforeInput"),0<u.length&&(h=new Lh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=T))}dg(p,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $o(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=da(t,n),s!=null&&i.unshift(va(t,s,r)),s=da(t,e),s!=null&&i.push(va(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=da(n,s),c!=null&&o.unshift(va(n,c,l))):r||(c=da(n,s),c!=null&&o.push(va(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jv=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(Jv,`
`).replace(ey,"")}function Ka(t,e,n){if(e=Wh(e),Wh(t)!==e&&n)throw Error(ae(425))}function Ko(){}var Eu=null,Tu=null;function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(iy)}:Cu;function iy(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Ns,ya="__reactProps$"+Ns,fi="__reactContainer$"+Ns,Nu="__reactEvents$"+Ns,ry="__reactListeners$"+Ns,sy="__reactHandles$"+Ns;function hr(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qh(t);t!==null;){if(n=t[Gn])return n;t=qh(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[Gn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Al(t){return t[ya]||null}var Ru=[],Zr=-1;function $i(t){return{current:t}}function lt(t){0>Zr||(t.current=Ru[Zr],Ru[Zr]=null,Zr--)}function rt(t,e){Zr++,Ru[Zr]=t.current,t.current=e}var Gi={},Ht=$i(Gi),Jt=$i(!1),yr=Gi;function ps(t,e){var n=t.type.contextTypes;if(!n)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function Zo(){lt(Jt),lt(Ht)}function Yh(t,e,n){if(Ht.current!==Gi)throw Error(ae(168));rt(Ht,e),rt(Jt,n)}function fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,V0(t)||"Unknown",r));return ht({},n,i)}function Qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,yr=Ht.current,rt(Ht,t),rt(Jt,Jt.current),!0}function $h(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=fg(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,lt(Jt),lt(Ht),rt(Ht,t)):lt(Jt),rt(Jt,n)}var ai=null,Cl=!1,fc=!1;function pg(t){ai===null?ai=[t]:ai.push(t)}function ay(t){Cl=!0,pg(t)}function Ki(){if(!fc&&ai!==null){fc=!0;var t=0,e=Je;try{var n=ai;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Cl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Om(gd,Ki),r}finally{Je=e,fc=!1}}return null}var Qr=[],Jr=0,Jo=null,el=0,xn=[],vn=0,_r=null,li=1,ci="";function ar(t,e){Qr[Jr++]=el,Qr[Jr++]=Jo,Jo=t,el=e}function mg(t,e,n){xn[vn++]=li,xn[vn++]=ci,xn[vn++]=_r,_r=t;var i=li;t=ci;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,li=1<<32-In(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Ed(t){t.return!==null&&(ar(t,1),mg(t,1,0))}function Td(t){for(;t===Jo;)Jo=Qr[--Jr],Qr[Jr]=null,el=Qr[--Jr],Qr[Jr]=null;for(;t===_r;)_r=xn[--vn],xn[vn]=null,ci=xn[--vn],xn[vn]=null,li=xn[--vn],xn[vn]=null}var un=null,cn=null,ct=!1,Ln=null;function gg(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,cn=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,cn=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(ct){var e=cn;if(e){var n=e;if(!Kh(t,e)){if(Pu(t))throw Error(ae(418));e=ki(n.nextSibling);var i=un;e&&Kh(t,e)?gg(i,n):(t.flags=t.flags&-4097|2,ct=!1,un=t)}}else{if(Pu(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ct=!1,un=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function Za(t){if(t!==un)return!1;if(!ct)return Zh(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Au(t.type,t.memoizedProps)),e&&(e=cn)){if(Pu(t))throw xg(),Error(ae(418));for(;e;)gg(t,e),e=ki(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=un?ki(t.stateNode.nextSibling):null;return!0}function xg(){for(var t=cn;t;)t=ki(t.nextSibling)}function ms(){cn=un=null,ct=!1}function Ad(t){Ln===null?Ln=[t]:Ln.push(t)}var oy=gi.ReactCurrentBatchConfig;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=r.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qh(t){var e=t._init;return e(t._payload)}function vg(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=zi(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,x,v,b){return x===null||x.tag!==6?(x=_c(v,d.mode,b),x.return=d,x):(x=r(x,v),x.return=d,x)}function c(d,x,v,b){var R=v.type;return R===Xr?h(d,x,v.props.children,b,v.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ei&&Qh(R)===x.type)?(b=r(x,v.props),b.ref=zs(d,x,v),b.return=d,b):(b=zo(v.type,v.key,v.props,null,d.mode,b),b.ref=zs(d,x,v),b.return=d,b)}function u(d,x,v,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Sc(v,d.mode,b),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function h(d,x,v,b,R){return x===null||x.tag!==7?(x=vr(v,d.mode,b,R),x.return=d,x):(x=r(x,v),x.return=d,x)}function p(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=_c(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ba:return v=zo(x.type,x.key,x.props,null,d.mode,v),v.ref=zs(d,null,x),v.return=d,v;case Wr:return x=Sc(x,d.mode,v),x.return=d,x;case Ei:var b=x._init;return p(d,b(x._payload),v)}if(Ks(x)||Us(x))return x=vr(x,d.mode,v,null),x.return=d,x;Qa(d,x)}return null}function f(d,x,v,b){var R=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:l(d,x,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:return v.key===R?c(d,x,v,b):null;case Wr:return v.key===R?u(d,x,v,b):null;case Ei:return R=v._init,f(d,x,R(v._payload),b)}if(Ks(v)||Us(v))return R!==null?null:h(d,x,v,b,null);Qa(d,v)}return null}function g(d,x,v,b,R){if(typeof b=="string"&&b!==""||typeof b=="number")return d=d.get(v)||null,l(x,d,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ba:return d=d.get(b.key===null?v:b.key)||null,c(x,d,b,R);case Wr:return d=d.get(b.key===null?v:b.key)||null,u(x,d,b,R);case Ei:var A=b._init;return g(d,x,v,A(b._payload),R)}if(Ks(b)||Us(b))return d=d.get(v)||null,h(x,d,b,R,null);Qa(x,b)}return null}function y(d,x,v,b){for(var R=null,A=null,T=x,P=x=0,E=null;T!==null&&P<v.length;P++){T.index>P?(E=T,T=null):E=T.sibling;var S=f(d,T,v[P],b);if(S===null){T===null&&(T=E);break}t&&T&&S.alternate===null&&e(d,T),x=s(S,x,P),A===null?R=S:A.sibling=S,A=S,T=E}if(P===v.length)return n(d,T),ct&&ar(d,P),R;if(T===null){for(;P<v.length;P++)T=p(d,v[P],b),T!==null&&(x=s(T,x,P),A===null?R=T:A.sibling=T,A=T);return ct&&ar(d,P),R}for(T=i(d,T);P<v.length;P++)E=g(T,d,P,v[P],b),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?P:E.key),x=s(E,x,P),A===null?R=E:A.sibling=E,A=E);return t&&T.forEach(function(N){return e(d,N)}),ct&&ar(d,P),R}function _(d,x,v,b){var R=Us(v);if(typeof R!="function")throw Error(ae(150));if(v=R.call(v),v==null)throw Error(ae(151));for(var A=R=null,T=x,P=x=0,E=null,S=v.next();T!==null&&!S.done;P++,S=v.next()){T.index>P?(E=T,T=null):E=T.sibling;var N=f(d,T,S.value,b);if(N===null){T===null&&(T=E);break}t&&T&&N.alternate===null&&e(d,T),x=s(N,x,P),A===null?R=N:A.sibling=N,A=N,T=E}if(S.done)return n(d,T),ct&&ar(d,P),R;if(T===null){for(;!S.done;P++,S=v.next())S=p(d,S.value,b),S!==null&&(x=s(S,x,P),A===null?R=S:A.sibling=S,A=S);return ct&&ar(d,P),R}for(T=i(d,T);!S.done;P++,S=v.next())S=g(T,d,P,S.value,b),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?P:S.key),x=s(S,x,P),A===null?R=S:A.sibling=S,A=S);return t&&T.forEach(function(H){return e(d,H)}),ct&&ar(d,P),R}function m(d,x,v,b){if(typeof v=="object"&&v!==null&&v.type===Xr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:e:{for(var R=v.key,A=x;A!==null;){if(A.key===R){if(R=v.type,R===Xr){if(A.tag===7){n(d,A.sibling),x=r(A,v.props.children),x.return=d,d=x;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ei&&Qh(R)===A.type){n(d,A.sibling),x=r(A,v.props),x.ref=zs(d,A,v),x.return=d,d=x;break e}n(d,A);break}else e(d,A);A=A.sibling}v.type===Xr?(x=vr(v.props.children,d.mode,b,v.key),x.return=d,d=x):(b=zo(v.type,v.key,v.props,null,d.mode,b),b.ref=zs(d,x,v),b.return=d,d=b)}return o(d);case Wr:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Sc(v,d.mode,b),x.return=d,d=x}return o(d);case Ei:return A=v._init,m(d,x,A(v._payload),b)}if(Ks(v))return y(d,x,v,b);if(Us(v))return _(d,x,v,b);Qa(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=_c(v,d.mode,b),x.return=d,d=x),o(d)):n(d,x)}return m}var gs=vg(!0),yg=vg(!1),tl=$i(null),nl=null,es=null,Cd=null;function Nd(){Cd=es=nl=null}function Rd(t){var e=tl.current;lt(tl),t._currentValue=e}function Du(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){nl=t,Cd=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Cd!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(nl===null)throw Error(ae(308));es=t,nl.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var fr=null;function Pd(t){fr===null?fr=[t]:fr.push(t)}function _g(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}function Jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;o=0,h=u=c=null,l=s;do{var f=l.lane,g=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,_=l;switch(f=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(g,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(g,p,f):y,f==null)break e;p=ht({},p,f);break e;case 2:Ti=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=g,c=p):h=h.next=g,o|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=p}}function ef(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Pa={},Kn=$i(Pa),_a=$i(Pa),Sa=$i(Pa);function pr(t){if(t===Pa)throw Error(ae(174));return t}function Dd(t,e){switch(rt(Sa,e),rt(_a,t),rt(Kn,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fu(e,t)}lt(Kn),rt(Kn,e)}function xs(){lt(Kn),lt(_a),lt(Sa)}function bg(t){pr(Sa.current);var e=pr(Kn.current),n=fu(e,t.type);e!==n&&(rt(_a,t),rt(Kn,n))}function Id(t){_a.current===t&&(lt(Kn),lt(_a))}var ut=$i(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pc=[];function Ud(){for(var t=0;t<pc.length;t++)pc[t]._workInProgressVersionPrimary=null;pc.length=0}var Uo=gi.ReactCurrentDispatcher,mc=gi.ReactCurrentBatchConfig,Sr=0,dt=null,Mt=null,Rt=null,sl=!1,sa=!1,ba=0,ly=0;function jt(){throw Error(ae(321))}function kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function jd(t,e,n,i,r,s){if(Sr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Uo.current=t===null||t.memoizedState===null?hy:fy,t=n(i,r),sa){s=0;do{if(sa=!1,ba=0,25<=s)throw Error(ae(301));s+=1,Rt=Mt=null,e.updateQueue=null,Uo.current=py,t=n(i,r)}while(sa)}if(Uo.current=al,e=Mt!==null&&Mt.next!==null,Sr=0,Rt=Mt=dt=null,sl=!1,e)throw Error(ae(300));return t}function Fd(){var t=ba!==0;return ba=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function En(){if(Mt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?dt.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ae(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Ma(t,e){return typeof e=="function"?e(t):e}function gc(t){var e=En(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=o=null,c=null,u=s;do{var h=u.lane;if((Sr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=i):c=c.next=p,dt.lanes|=h,br|=h}u=u.next}while(u!==null&&u!==s);c===null?o=i:c.next=l,kn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=En(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mg(){}function wg(t,e){var n=dt,i=En(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Od(Ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,wa(9,Tg.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ae(349));Sr&30||Eg(n,e,r)}return r}function Eg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tg(t,e,n,i){e.value=n,e.getSnapshot=i,Cg(e)&&Ng(t)}function Ag(t,e,n){return n(function(){Cg(e)&&Ng(t)})}function Cg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Ng(t){var e=pi(t,1);e!==null&&Un(e,t,1,-1)}function tf(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=dy.bind(null,dt,t),[e.memoizedState,t]}function wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rg(){return En().memoizedState}function ko(t,e,n,i){var r=Bn();dt.flags|=t,r.memoizedState=wa(1|e,n,void 0,i===void 0?null:i)}function Nl(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&kd(i,o.deps)){r.memoizedState=wa(e,n,s,i);return}}dt.flags|=t,r.memoizedState=wa(1|e,n,s,i)}function nf(t,e){return ko(8390656,8,t,e)}function Od(t,e){return Nl(2048,8,t,e)}function Pg(t,e){return Nl(4,2,t,e)}function Lg(t,e){return Nl(4,4,t,e)}function Dg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ig(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,Dg.bind(null,e,t),n)}function zd(){}function Ug(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kg(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function jg(t,e,n){return Sr&21?(kn(n,e)||(n=Hm(),dt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function cy(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=mc.transition;mc.transition={};try{t(!1),e()}finally{Je=n,mc.transition=i}}function Fg(){return En().memoizedState}function uy(t,e,n){var i=Oi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Og(t))zg(e,n);else if(n=_g(t,e,n,i),n!==null){var r=Xt();Un(n,t,i,r),Bg(n,e,i)}}function dy(t,e,n){var i=Oi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Og(t))zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(r.hasEagerState=!0,r.eagerState=l,kn(l,o)){var c=e.interleaved;c===null?(r.next=r,Pd(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=_g(t,e,r,i),n!==null&&(r=Xt(),Un(n,t,i,r),Bg(n,e,i))}}function Og(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function zg(t,e){sa=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}var al={readContext:wn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},hy={readContext:wn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:nf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,Dg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Bn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uy.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:tf,useDebugValue:zd,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=tf(!1),e=t[0];return t=cy.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Bn();if(ct){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Lt===null)throw Error(ae(349));Sr&30||Eg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,nf(Ag.bind(null,i,s,t),[t]),i.flags|=2048,wa(9,Tg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=Lt.identifierPrefix;if(ct){var n=ci,i=li;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fy={readContext:wn,useCallback:Ug,useContext:wn,useEffect:Od,useImperativeHandle:Ig,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:kg,useReducer:gc,useRef:Rg,useState:function(){return gc(Ma)},useDebugValue:zd,useDeferredValue:function(t){var e=En();return jg(e,Mt.memoizedState,t)},useTransition:function(){var t=gc(Ma)[0],e=En().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:wg,useId:Fg,unstable_isNewReconciler:!1},py={readContext:wn,useCallback:Ug,useContext:wn,useEffect:Od,useImperativeHandle:Ig,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:kg,useReducer:xc,useRef:Rg,useState:function(){return xc(Ma)},useDebugValue:zd,useDeferredValue:function(t){var e=En();return Mt===null?e.memoizedState=t:jg(e,Mt.memoizedState,t)},useTransition:function(){var t=xc(Ma)[0],e=En().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:wg,useId:Fg,unstable_isNewReconciler:!1};function Rn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Oi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Un(e,t,r,i),Io(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Oi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Un(e,t,r,i),Io(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Oi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Un(e,t,i,n),Io(e,t,i))}};function rf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function Hg(t,e,n){var i=!1,r=Gi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=en(e)?yr:Ht.current,i=e.contextTypes,s=(i=i!=null)?ps(t,r):Gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function Uu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=en(e)?yr:Ht.current,r.context=ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Iu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rl.enqueueReplaceState(r,r.state,null),il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",i=e;do n+=H0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var my=typeof WeakMap=="function"?WeakMap:Map;function Vg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ll||(ll=!0,Xu=i),ku(t,e)},n}function Gg(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ku(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function af(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new my;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ny.bind(null,t,e,n),e.then(t,t))}function of(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var gy=gi.ReactCurrentOwner,Qt=!1;function Wt(t,e,n,i){e.child=t===null?yg(e,null,n,i):gs(e,t.child,n,i)}function cf(t,e,n,i,r){n=n.render;var s=e.ref;return ls(e,r),i=jd(t,e,n,i,s,r),n=Fd(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ct&&n&&Ed(e),e.flags|=1,Wt(t,e,i,r),e.child)}function uf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wg(t,e,s,i,r)):(t=zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return ju(t,e,n,i,r)}function Xg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ns,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ns,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ns,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ns,ln),ln|=i;return Wt(t,e,r,n),e.child}function qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ju(t,e,n,i,r){var s=en(n)?yr:Ht.current;return s=ps(e,s),ls(e,r),n=jd(t,e,n,i,s,r),i=Fd(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ct&&i&&Ed(e),e.flags|=1,Wt(t,e,n,r),e.child)}function df(t,e,n,i,r){if(en(n)){var s=!0;Qo(e)}else s=!1;if(ls(e,r),e.stateNode===null)jo(t,e),Hg(e,n,i),Uu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=en(n)?yr:Ht.current,u=ps(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||c!==u)&&sf(e,o,i,u),Ti=!1;var f=e.memoizedState;o.state=f,il(e,i,o,r),c=e.memoizedState,l!==i||f!==c||Jt.current||Ti?(typeof h=="function"&&(Iu(e,n,h,i),c=e.memoizedState),(l=Ti||rf(e,n,l,i,f,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=u,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Sg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Rn(e.type,l),o.props=u,p=e.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=wn(c):(c=en(n)?yr:Ht.current,c=ps(e,c));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||f!==c)&&sf(e,o,i,c),Ti=!1,f=e.memoizedState,o.state=f,il(e,i,o,r);var y=e.memoizedState;l!==p||f!==y||Jt.current||Ti?(typeof g=="function"&&(Iu(e,n,g,i),y=e.memoizedState),(u=Ti||rf(e,n,u,i,f,y,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=c,i=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Fu(t,e,n,i,s,r)}function Fu(t,e,n,i,r,s){qg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$h(e,n,!1),mi(t,e,s);i=e.stateNode,gy.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,l,s)):Wt(t,e,l,s),e.memoizedState=i.state,r&&$h(e,n,!0),e.child}function Yg(t){var e=t.stateNode;e.pendingContext?Yh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yh(t,e.context,!1),Dd(t,e.containerInfo)}function hf(t,e,n,i,r){return ms(),Ad(r),e.flags|=256,Wt(t,e,n,i),e.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function $g(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ut,r&1),t===null)return Lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,i,0,null),t=vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zu(n),e.memoizedState=Ou,t):Bd(e,o));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return xy(t,e,o,i,l,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=zi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=zi(l,s):(s=vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?zu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ou,i}return s=t.child,t=s.sibling,i=zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bd(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,i){return i!==null&&Ad(i),gs(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vc(Error(ae(422))),Ja(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=zu(o),e.memoizedState=Ou,s);if(!(e.mode&1))return Ja(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ae(419)),i=vc(s,i,void 0),Ja(t,e,o,i)}if(l=(o&t.childLanes)!==0,Qt||l){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),Un(i,t,r,-1))}return qd(),i=vc(Error(ae(421))),Ja(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=ki(r.nextSibling),un=e,ct=!0,Ln=null,t!==null&&(xn[vn++]=li,xn[vn++]=ci,xn[vn++]=_r,li=t.id,ci=t.overflow,_r=e),e=Bd(e,i.children),e.flags|=4096,e)}function ff(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Du(t.return,e,n)}function yc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Kg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ff(t,n,e);else if(t.tag===19)ff(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yc(e,!0,n,null,s);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vy(t,e,n){switch(e.tag){case 3:Yg(e),ms();break;case 5:bg(e);break;case 1:en(e.type)&&Qo(e);break;case 4:Dd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?$g(t,e,n):(rt(ut,ut.current&1),t=mi(t,e,n),t!==null?t.sibling:null);rt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Kg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Xg(t,e,n)}return mi(t,e,n)}var Zg,Bu,Qg,Jg;Zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};Qg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Kn.current);var s=null;switch(n){case"input":r=cu(t,r),i=cu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=hu(t,r),i=hu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ko)}pu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ca.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&at("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Jg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yy(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return en(e.type)&&Zo(),Ft(e),null;case 3:return i=e.stateNode,xs(),lt(Jt),lt(Ht),Ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&($u(Ln),Ln=null))),Bu(t,e),Ft(e),null;case 5:Id(e);var r=pr(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Qg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Ft(e),null}if(t=pr(Kn.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Gn]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Qs.length;r++)at(Qs[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Sh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Mh(i,s),at("invalid",i)}pu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,l,t),r=["children",""+l]):ca.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":Ha(i),bh(i,s,!0);break;case"textarea":Ha(i),wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ko)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Gn]=e,t[ya]=i,Zg(t,e,!1,!1),e.stateNode=t;e:{switch(o=mu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qs.length;r++)at(Qs[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Sh(t,i),r=cu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),at("invalid",t);break;case"textarea":Mh(t,i),r=hu(t,i),at("invalid",t);break;default:r=i}pu(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Rm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ua(t,c):typeof c=="number"&&ua(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?c!=null&&s==="onScroll"&&at("scroll",t):c!=null&&dd(t,s,c,o))}switch(n){case"input":Ha(t),bh(t,i,!1);break;case"textarea":Ha(t),wh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Jg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=pr(Sa.current),pr(Kn.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[Gn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Gn]=e,e.stateNode=i}return Ft(e),null;case 13:if(lt(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&cn!==null&&e.mode&1&&!(e.flags&128))xg(),ms(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Gn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Ln!==null&&($u(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?wt===0&&(wt=3):qd())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return xs(),Bu(t,e),t===null&&xa(e.stateNode.containerInfo),Ft(e),null;case 10:return Rd(e.type._context),Ft(e),null;case 17:return en(e.type)&&Zo(),Ft(e),null;case 19:if(lt(ut),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bs(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=128,Bs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>ys&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304)}else{if(!i)if(t=rl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Ft(e),null}else 2*vt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,rt(ut,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Xd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function _y(t,e){switch(Td(e),e.tag){case 1:return en(e.type)&&Zo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),lt(Jt),lt(Ht),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if(lt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ut),null;case 4:return xs(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var eo=!1,Bt=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,xe=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Hu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var pf=!1;function by(t,e){if(Eu=qo,t=rg(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(l=o+r),p!==s||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===n&&++u===r&&(l=o),f===s&&++h===i&&(c=o),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:t,selectionRange:n},qo=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Rn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(b){mt(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return y=pf,pf=!1,y}function aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hu(e,n,s)}r=r.next}while(r!==i)}}function Pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ex(t){var e=t.alternate;e!==null&&(t.alternate=null,ex(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[ya],delete e[Nu],delete e[ry],delete e[sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tx(t){return t.tag===5||t.tag===3||t.tag===4}function mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ko));else if(i!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Dt=null,Pn=!1;function vi(t,e,n){for(n=n.child;n!==null;)nx(t,e,n),n=n.sibling}function nx(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Bt||ts(n,e);case 6:var i=Dt,r=Pn;Dt=null,vi(t,e,n),Dt=i,Pn=r,Dt!==null&&(Pn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Pn?(t=Dt,n=n.stateNode,t.nodeType===8?hc(t.parentNode,n):t.nodeType===1&&hc(t,n),pa(t)):hc(Dt,n.stateNode));break;case 4:i=Dt,r=Pn,Dt=n.stateNode.containerInfo,Pn=!0,vi(t,e,n),Dt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hu(n,e,o),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Bt&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){mt(n,e,l)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,vi(t,e,n),Bt=i):vi(t,e,n);break;default:vi(t,e,n)}}function gf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sy),e.forEach(function(i){var r=Py.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Dt=l.stateNode,Pn=!1;break e;case 3:Dt=l.stateNode.containerInfo,Pn=!0;break e;case 4:Dt=l.stateNode.containerInfo,Pn=!0;break e}l=l.return}if(Dt===null)throw Error(ae(160));nx(s,o,r),Dt=null,Pn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ix(e,t),e=e.sibling}function ix(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),zn(t),i&4){try{aa(3,t,t.return),Pl(3,t)}catch(_){mt(t,t.return,_)}try{aa(5,t,t.return)}catch(_){mt(t,t.return,_)}}break;case 1:Tn(e,t),zn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(Tn(e,t),zn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{ua(r,"")}catch(_){mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Em(r,s),mu(l,o);var u=mu(l,s);for(o=0;o<c.length;o+=2){var h=c[o],p=c[o+1];h==="style"?Rm(r,p):h==="dangerouslySetInnerHTML"?Cm(r,p):h==="children"?ua(r,p):dd(r,h,p,u)}switch(l){case"input":uu(r,s);break;case"textarea":Tm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?rs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?rs(r,!!s.multiple,s.defaultValue,!0):rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(_){mt(t,t.return,_)}}break;case 6:if(Tn(e,t),zn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){mt(t,t.return,_)}}break;case 3:if(Tn(e,t),zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(_){mt(t,t.return,_)}break;case 4:Tn(e,t),zn(t);break;case 13:Tn(e,t),zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gd=vt())),i&4&&gf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||h,Tn(e,t),Bt=u):Tn(e,t),zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(p=xe=h;xe!==null;){switch(f=xe,g=f.child,f.tag){case 0:case 11:case 14:case 15:aa(4,f,f.return);break;case 1:ts(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){mt(i,n,_)}}break;case 5:ts(f,f.return);break;case 22:if(f.memoizedState!==null){vf(p);continue}}g!==null?(g.return=f,xe=g):vf(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nm("display",o))}catch(_){mt(t,t.return,_)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){mt(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Tn(e,t),zn(t),i&4&&gf(t);break;case 21:break;default:Tn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tx(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ua(r,""),i.flags&=-33);var s=mf(t);Wu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=mf(t);Gu(t,l,o);break;default:throw Error(ae(161))}}catch(c){mt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function My(t,e,n){xe=t,rx(t)}function rx(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||eo;if(!o){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Bt;l=eo;var u=Bt;if(eo=o,(Bt=c)&&!u)for(xe=r;xe!==null;)o=xe,c=o.child,o.tag===22&&o.memoizedState!==null?yf(r):c!==null?(c.return=o,xe=c):yf(r);for(;s!==null;)xe=s,rx(s),s=s.sibling;xe=r,eo=l,Bt=u}xf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):xf(t)}}function xf(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Pl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ef(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ef(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&pa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Bt||e.flags&512&&Vu(e)}catch(f){mt(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function vf(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function yf(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pl(4,e)}catch(c){mt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){mt(e,r,c)}}var s=e.return;try{Vu(e)}catch(c){mt(e,s,c)}break;case 5:var o=e.return;try{Vu(e)}catch(c){mt(e,o,c)}}}catch(c){mt(e,e.return,c)}if(e===t){xe=null;break}var l=e.sibling;if(l!==null){l.return=e.return,xe=l;break}xe=e.return}}var wy=Math.ceil,ol=gi.ReactCurrentDispatcher,Hd=gi.ReactCurrentOwner,bn=gi.ReactCurrentBatchConfig,qe=0,Lt=null,bt=null,It=0,ln=0,ns=$i(0),wt=0,Ea=null,br=0,Ll=0,Vd=0,oa=null,Kt=null,Gd=0,ys=1/0,si=null,ll=!1,Xu=null,Fi=null,to=!1,Pi=null,cl=0,la=0,qu=null,Fo=-1,Oo=0;function Xt(){return qe&6?vt():Fo!==-1?Fo:Fo=vt()}function Oi(t){return t.mode&1?qe&2&&It!==0?It&-It:oy.transition!==null?(Oo===0&&(Oo=Hm()),Oo):(t=Je,t!==0||(t=window.event,t=t===void 0?16:$m(t.type)),t):1}function Un(t,e,n,i){if(50<la)throw la=0,qu=null,Error(ae(185));Ca(t,n,i),(!(qe&2)||t!==Lt)&&(t===Lt&&(!(qe&2)&&(Ll|=n),wt===4&&Ci(t,It)),tn(t,i),n===1&&qe===0&&!(e.mode&1)&&(ys=vt()+500,Cl&&Ki()))}function tn(t,e){var n=t.callbackNode;ov(t,e);var i=Xo(t,t===Lt?It:0);if(i===0)n!==null&&Ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ah(n),e===1)t.tag===0?ay(_f.bind(null,t)):pg(_f.bind(null,t)),ny(function(){!(qe&6)&&Ki()}),n=null;else{switch(Vm(i)){case 1:n=gd;break;case 4:n=zm;break;case 16:n=Wo;break;case 536870912:n=Bm;break;default:n=Wo}n=hx(n,sx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sx(t,e){if(Fo=-1,Oo=0,qe&6)throw Error(ae(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var i=Xo(t,t===Lt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ul(t,i);else{e=i;var r=qe;qe|=2;var s=ox();(Lt!==t||It!==e)&&(si=null,ys=vt()+500,xr(t,e));do try{Ay();break}catch(l){ax(t,l)}while(!0);Nd(),ol.current=s,qe=r,bt!==null?e=0:(Lt=null,It=0,e=wt)}if(e!==0){if(e===2&&(r=_u(t),r!==0&&(i=r,e=Yu(t,r))),e===1)throw n=Ea,xr(t,0),Ci(t,i),tn(t,vt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ey(r)&&(e=ul(t,i),e===2&&(s=_u(t),s!==0&&(i=s,e=Yu(t,s))),e===1))throw n=Ea,xr(t,0),Ci(t,i),tn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:or(t,Kt,si);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Gd+500-vt(),10<e)){if(Xo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cu(or.bind(null,t,Kt,si),e);break}or(t,Kt,si);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wy(i/1960))-i,10<i){t.timeoutHandle=Cu(or.bind(null,t,Kt,si),i);break}or(t,Kt,si);break;case 5:or(t,Kt,si);break;default:throw Error(ae(329))}}}return tn(t,vt()),t.callbackNode===n?sx.bind(null,t):null}function Yu(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=ul(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&$u(e)),t}function $u(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function Ey(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Vd,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function _f(t){if(qe&6)throw Error(ae(327));cs();var e=Xo(t,0);if(!(e&1))return tn(t,vt()),null;var n=ul(t,e);if(t.tag!==0&&n===2){var i=_u(t);i!==0&&(e=i,n=Yu(t,i))}if(n===1)throw n=Ea,xr(t,0),Ci(t,e),tn(t,vt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,Kt,si),tn(t,vt()),null}function Wd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(ys=vt()+500,Cl&&Ki())}}function Mr(t){Pi!==null&&Pi.tag===0&&!(qe&6)&&cs();var e=qe;qe|=1;var n=bn.transition,i=Je;try{if(bn.transition=null,Je=1,t)return t()}finally{Je=i,bn.transition=n,qe=e,!(qe&6)&&Ki()}}function Xd(){ln=ns.current,lt(ns)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ty(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zo();break;case 3:xs(),lt(Jt),lt(Ht),Ud();break;case 5:Id(i);break;case 4:xs();break;case 13:lt(ut);break;case 19:lt(ut);break;case 10:Rd(i.type._context);break;case 22:case 23:Xd()}n=n.return}if(Lt=t,bt=t=zi(t.current,null),It=ln=e,wt=0,Ea=null,Vd=Ll=br=0,Kt=oa=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}fr=null}return t}function ax(t,e){do{var n=bt;try{if(Nd(),Uo.current=al,sl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sl=!1}if(Sr=0,Rt=Mt=dt=null,sa=!1,ba=0,Hd.current=null,n===null||n.return===null){wt=1,Ea=e,bt=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=It,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=of(o);if(g!==null){g.flags&=-257,lf(g,o,l,s,e),g.mode&1&&af(s,u,e),e=g,c=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(c),e.updateQueue=_}else y.add(c);break e}else{if(!(e&1)){af(s,u,e),qd();break e}c=Error(ae(426))}}else if(ct&&l.mode&1){var m=of(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),lf(m,o,l,s,e),Ad(vs(c,l));break e}}s=c=vs(c,l),wt!==4&&(wt=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Vg(s,c,e);Jh(s,d);break e;case 1:l=c;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fi===null||!Fi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Gg(s,l,e);Jh(s,b);break e}}s=s.return}while(s!==null)}cx(n)}catch(R){e=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function ox(){var t=ol.current;return ol.current=al,t===null?al:t}function qd(){(wt===0||wt===3||wt===2)&&(wt=4),Lt===null||!(br&268435455)&&!(Ll&268435455)||Ci(Lt,It)}function ul(t,e){var n=qe;qe|=2;var i=ox();(Lt!==t||It!==e)&&(si=null,xr(t,e));do try{Ty();break}catch(r){ax(t,r)}while(!0);if(Nd(),qe=n,ol.current=i,bt!==null)throw Error(ae(261));return Lt=null,It=0,wt}function Ty(){for(;bt!==null;)lx(bt)}function Ay(){for(;bt!==null&&!Q0();)lx(bt)}function lx(t){var e=dx(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?cx(t):bt=e,Hd.current=null}function cx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_y(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,bt=null;return}}else if(n=yy(n,e,ln),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);wt===0&&(wt=5)}function or(t,e,n){var i=Je,r=bn.transition;try{bn.transition=null,Je=1,Cy(t,e,n,i)}finally{bn.transition=r,Je=i}return null}function Cy(t,e,n,i){do cs();while(Pi!==null);if(qe&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lv(t,s),t===Lt&&(bt=Lt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,hx(Wo,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=Je;Je=1;var l=qe;qe|=4,Hd.current=null,by(t,n),ix(n,t),Yv(Tu),qo=!!Eu,Tu=Eu=null,t.current=n,My(n),J0(),qe=l,Je=o,bn.transition=s}else t.current=n;if(to&&(to=!1,Pi=t,cl=r),s=t.pendingLanes,s===0&&(Fi=null),nv(n.stateNode),tn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ll)throw ll=!1,t=Xu,Xu=null,t;return cl&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===qu?la++:(la=0,qu=t):la=0,Ki(),null}function cs(){if(Pi!==null){var t=Vm(cl),e=bn.transition,n=Je;try{if(bn.transition=null,Je=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,cl=0,qe&6)throw Error(ae(331));var r=qe;for(qe|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(xe=u;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:aa(8,h,s)}var p=h.child;if(p!==null)p.return=h,xe=p;else for(;xe!==null;){h=xe;var f=h.sibling,g=h.return;if(ex(h),h===u){xe=null;break}if(f!==null){f.return=g,xe=f;break}xe=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:aa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break e}xe=s.return}}var x=t.current;for(xe=x;xe!==null;){o=xe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,xe=v;else e:for(o=x;xe!==null;){if(l=xe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pl(9,l)}}catch(R){mt(l,l.return,R)}if(l===o){xe=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,xe=b;break e}xe=l.return}}if(qe=r,Ki(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Ml,t)}catch{}i=!0}return i}finally{Je=n,bn.transition=e}}return!1}function Sf(t,e,n){e=vs(n,e),e=Vg(t,e,1),t=ji(t,e,1),e=Xt(),t!==null&&(Ca(t,1,e),tn(t,e))}function mt(t,e,n){if(t.tag===3)Sf(t,t,n);else for(;e!==null;){if(e.tag===3){Sf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=vs(n,t),t=Gg(e,t,1),e=ji(e,t,1),t=Xt(),e!==null&&(Ca(e,1,t),tn(e,t));break}}e=e.return}}function Ny(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(It&n)===n&&(wt===4||wt===3&&(It&130023424)===It&&500>vt()-Gd?xr(t,0):Vd|=n),tn(t,e)}function ux(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=Xt();t=pi(t,e),t!==null&&(Ca(t,e,n),tn(t,n))}function Ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ux(t,n)}function Py(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),ux(t,n)}var dx;dx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,vy(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ct&&e.flags&1048576&&mg(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jo(t,e),t=e.pendingProps;var r=ps(e,Ht.current);ls(e,n),r=jd(null,e,i,t,r,n);var s=Fd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,Qo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ld(e),r.updater=Rl,e.stateNode=r,r._reactInternals=e,Uu(e,i,t,n),e=Fu(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Ed(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Dy(i),t=Rn(i,t),r){case 0:e=ju(null,e,i,t,n);break e;case 1:e=df(null,e,i,t,n);break e;case 11:e=cf(null,e,i,t,n);break e;case 14:e=uf(null,e,i,Rn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),ju(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),df(t,e,i,r,n);case 3:e:{if(Yg(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sg(t,e),il(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=vs(Error(ae(423)),e),e=hf(t,e,i,n,r);break e}else if(i!==r){r=vs(Error(ae(424)),e),e=hf(t,e,i,n,r);break e}else for(cn=ki(e.stateNode.containerInfo.firstChild),un=e,ct=!0,Ln=null,n=yg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),i===r){e=mi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return bg(e),t===null&&Lu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Au(i,r)?o=null:s!==null&&Au(i,s)&&(e.flags|=32),qg(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Lu(e),null;case 13:return $g(t,e,n);case 4:return Dd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=gs(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),cf(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(tl,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!Jt.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=di(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Du(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Du(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ls(e,n),r=wn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Rn(i,e.pendingProps),r=Rn(i.type,r),uf(t,e,i,r,n);case 15:return Wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),jo(t,e),e.tag=1,en(i)?(t=!0,Qo(e)):t=!1,ls(e,n),Hg(e,i,r),Uu(e,i,r,n),Fu(null,e,i,!0,t,n);case 19:return Kg(t,e,n);case 22:return Xg(t,e,n)}throw Error(ae(156,e.tag))};function hx(t,e){return Om(t,e)}function Ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new Ly(t,e,n,i)}function Yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dy(t){if(typeof t=="function")return Yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===pd)return 14}return 2}function zi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zo(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return vr(n.children,r,s,e);case hd:o=8,r|=8;break;case su:return t=_n(12,n,e,r|2),t.elementType=su,t.lanes=s,t;case au:return t=_n(13,n,e,r),t.elementType=au,t.lanes=s,t;case ou:return t=_n(19,n,e,r),t.elementType=ou,t.lanes=s,t;case bm:return Dl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _m:o=10;break e;case Sm:o=9;break e;case fd:o=11;break e;case pd:o=14;break e;case Ei:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=_n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vr(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function Dl(t,e,n,i){return t=_n(22,t,i,e),t.elementType=bm,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Sc(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Iy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tc(0),this.expirationTimes=tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,i,r,s,o,l,c){return t=new Iy(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function Uy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fx(t){if(!t)return Gi;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(en(n))return fg(t,n,e)}return e}function px(t,e,n,i,r,s,o,l,c){return t=$d(n,i,!0,t,r,s,o,l,c),t.context=fx(null),n=t.current,i=Xt(),r=Oi(n),s=di(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,Ca(t,r,i),tn(t,i),t}function Il(t,e,n,i){var r=e.current,s=Xt(),o=Oi(r);return n=fx(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,o),t!==null&&(Un(t,r,o,s),Io(t,r,o)),o}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kd(t,e){bf(t,e),(t=t.alternate)&&bf(t,e)}function ky(){return null}var mx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}Ul.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Il(t,e,null,null)};Ul.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Il(null,t,null,null)}),e[fi]=null}};function Ul(t){this._internalRoot=t}Ul.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Ym(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mf(){}function jy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=dl(o);s.call(u)}}var o=px(e,i,t,0,null,!1,!1,"",Mf);return t._reactRootContainer=o,t[fi]=o.current,xa(t.nodeType===8?t.parentNode:t),Mr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=dl(c);l.call(u)}}var c=$d(t,0,!1,null,null,!1,!1,"",Mf);return t._reactRootContainer=c,t[fi]=c.current,xa(t.nodeType===8?t.parentNode:t),Mr(function(){Il(e,c,n,i)}),c}function jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var l=r;r=function(){var c=dl(o);l.call(c)}}Il(e,o,t,r)}else o=jy(n,e,t,r,i);return dl(o)}Gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(xd(e,n|1),tn(e,vt()),!(qe&6)&&(ys=vt()+500,Ki()))}break;case 13:Mr(function(){var i=pi(t,1);if(i!==null){var r=Xt();Un(i,t,1,r)}}),Kd(t,1)}};vd=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Xt();Un(e,t,134217728,n)}Kd(t,134217728)}};Wm=function(t){if(t.tag===13){var e=Oi(t),n=pi(t,e);if(n!==null){var i=Xt();Un(n,t,e,i)}Kd(t,e)}};Xm=function(){return Je};qm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};xu=function(t,e,n){switch(e){case"input":if(uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Al(i);if(!r)throw Error(ae(90));wm(i),uu(i,r)}}}break;case"textarea":Tm(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};Dm=Wd;Im=Mr;var Fy={usingClientEntryPoint:!1,Events:[Ra,Kr,Al,Pm,Lm,Wd]},Hs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jm(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Ml=no.inject(Oy),$n=no}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(ae(200));return Uy(t,e,null,n)};fn.createRoot=function(t,e){if(!Qd(t))throw Error(ae(299));var n=!1,i="",r=mx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,xa(t.nodeType===8?t.parentNode:t),new Zd(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=jm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Mr(t)};fn.hydrate=function(t,e,n){if(!kl(e))throw Error(ae(200));return jl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=mx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=px(e,null,t,1,n??null,r,!1,s,o),t[fi]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ul(e)};fn.render=function(t,e,n){if(!kl(e))throw Error(ae(200));return jl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!kl(t))throw Error(ae(40));return t._reactRootContainer?(Mr(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};fn.unstable_batchedUpdates=Wd;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kl(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return jl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gx)}catch(t){console.error(t)}}gx(),gm.exports=fn;var zy=gm.exports,wf=zy;iu.createRoot=wf.createRoot,iu.hydrateRoot=wf.hydrateRoot;/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xx=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...l},c)=>re.createElement("svg",{ref:c,...Hy,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:xx("lucide",r),...l},[...o.map(([u,h])=>re.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(t,e)=>{const n=re.forwardRef(({className:i,...r},s)=>re.createElement(Vy,{ref:s,iconNode:e,className:xx(`lucide-${By(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ye("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=ye("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ye("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ye("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=ye("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=ye("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=ye("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ye("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=ye("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=ye("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=ye("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=ye("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=ye("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=ye("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=ye("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ye("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=ye("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=ye("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=ye("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=ye("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=ye("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=ye("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=ye("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=ye("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=ye("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=ye("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=ye("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=ye("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=ye("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=ye("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=ye("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=ye("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=ye("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=ye("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=ye("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=ye("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=ye("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=ye("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=ye("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=ye("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=ye("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=ye("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=ye("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=ye("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=ye("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=ye("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),__=({onRequestClick:t,onTrackClick:e,onAdminClick:n})=>{const[i,r]=re.useState(!1),[s,o]=re.useState(!1);re.useEffect(()=>{const c=()=>{r(window.scrollY>30)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const l=[{name:"Home",href:"#home",active:!0},{name:"About Department",href:"#about"},{name:"Facility",href:"#facility"},{name:"Faculty",href:"#faculty"},{name:"Technologies",href:"#technologies"},{name:"Services",href:"#services"},{name:"Materials",href:"#materials"},{name:"Projects",href:"#projects"},{name:"Track Status",href:"#track",isSpecial:!0},{name:"Contact us",href:"#contact"}];return a.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 shadow-sm bg-white",children:[a.jsx("div",{className:"bg-white border-b border-gray-100 py-2 px-4 sm:px-6 lg:px-8 text-xs text-gray-700",children:a.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[a.jsxs("a",{href:"tel:+919894733117",className:"flex items-center gap-2 hover:text-[#f15a24] transition font-medium",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-[#f15a24] flex items-center justify-center text-white",children:a.jsx(Ku,{className:"w-3.5 h-3.5"})}),a.jsx("span",{children:"+91 98947 33117"})]}),a.jsxs("a",{href:"tel:+918122322022",className:"hidden sm:flex items-center gap-2 hover:text-[#f15a24] transition font-medium",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-[#f15a24] flex items-center justify-center text-white",children:a.jsx(Ku,{className:"w-3.5 h-3.5"})}),a.jsx("span",{children:"+91 81223 22022"})]}),a.jsxs("a",{href:"mailto:mechanical@mitmysore.in",className:"hidden md:flex items-center gap-2 hover:text-[#f15a24] transition font-medium",children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-[#f15a24] flex items-center justify-center text-white",children:a.jsx(Ta,{className:"w-3.5 h-3.5"})}),a.jsx("span",{children:"mechanical@mitmysore.in"})]})]}),a.jsxs("div",{className:"flex items-center gap-3 ml-auto",children:[a.jsxs("button",{onClick:t,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#f15a24] hover:bg-[#ea580c] text-white font-semibold text-xs tracking-wide shadow-sm transition",children:[a.jsx(Ta,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Get a Free Quote"})]}),a.jsxs("button",{onClick:t,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#f15a24] hover:bg-[#ea580c] text-white font-semibold text-xs tracking-wide shadow-sm transition",children:[a.jsx(Da,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Build Your Quote"})]}),a.jsx("button",{onClick:n,className:"p-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-[#f15a24] transition",title:"Faculty / Admin Dashboard",children:a.jsx(Ol,{className:"w-4 h-4"})})]})]})}),a.jsx("div",{className:`transition-all duration-200 ${i?"py-2.5 shadow-md":"py-3.5"} bg-white`,children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[a.jsxs("a",{href:"#home",className:"flex items-center gap-3 group",children:[a.jsx("div",{className:"w-11 h-11 rounded-full bg-white p-0.5 border-2 border-orange-200 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform",children:a.jsx("img",{src:"/images/mit_logo.png",alt:"Maharaja Institute of Technology Mysore College Logo",className:"w-full h-full object-contain",onError:c=>{c.currentTarget.src="/mit_logo.png"}})}),a.jsxs("div",{className:"flex flex-col",children:[a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"text-xl font-black tracking-tight text-gray-900 font-['Rajdhani'] uppercase",children:"RAPID 3D"}),a.jsx("span",{className:"text-xs font-bold text-[#f15a24] uppercase font-mono",children:"• MIT MYSORE"})]}),a.jsx("span",{className:"text-[10px] text-gray-500 font-medium tracking-wide uppercase",children:"Dept. of Mechanical Engineering • VTU Center"})]})]}),a.jsx("nav",{className:"hidden xl:flex items-center gap-4 2xl:gap-5 text-[13px] font-semibold text-gray-700",children:l.map(c=>a.jsx("a",{href:c.href,className:`transition-colors py-1 ${c.active?"text-[#f15a24] border-b-2 border-[#f15a24]":c.isSpecial?"text-[#f15a24] hover:text-[#ea580c] flex items-center gap-1":"hover:text-[#f15a24]"}`,children:a.jsx("span",{children:c.name})},c.name))}),a.jsxs("div",{className:"xl:hidden flex items-center gap-2",children:[a.jsx("button",{onClick:t,className:"px-3 py-1.5 rounded bg-[#f15a24] text-white text-xs font-bold",children:"Quote"}),a.jsx("button",{onClick:()=>o(!s),className:"p-2 text-gray-700 hover:text-[#f15a24]",children:s?a.jsx(Wn,{className:"w-6 h-6"}):a.jsx(f_,{className:"w-6 h-6"})})]})]})}),s&&a.jsx("div",{className:"xl:hidden bg-white border-b border-gray-200 px-6 py-4 shadow-xl",children:a.jsxs("div",{className:"flex flex-col gap-2",children:[l.map(c=>a.jsx("a",{href:c.href,onClick:()=>o(!1),className:`py-2 text-sm font-semibold ${c.active?"text-[#f15a24]":"text-gray-700 hover:text-[#f15a24]"}`,children:c.name},c.name)),a.jsxs("div",{className:"pt-3 border-t border-gray-200 flex flex-col gap-2",children:[a.jsx("button",{onClick:()=>{o(!1),e()},className:"w-full py-2 rounded bg-gray-100 text-gray-800 font-bold text-xs",children:"Track 3D Print Request"}),a.jsx("button",{onClick:()=>{o(!1),t()},className:"w-full py-2.5 rounded bg-[#f15a24] text-white font-bold text-xs",children:"Build Your Quote / Request Print"})]})]})})]})},S_=({onRequestClick:t,onTrackClick:e})=>{const[n,i]=re.useState(0),r=[{badge:"3D SCANNING",ribbon:"ENABLING DIGITAL SOLUTIONS",titleHighlight:"3D",titleRest:"S C A N N I N G",desc:"High-precision structured blue-light optical scanning, reverse engineering, and CAD inspection with 0.02mm resolution at MIT Mysore.",ctaPrimary:"Build Your Quote",ctaSecondary:"Explore Technologies",image:"/images/mit/cad_lab1.jpg"},{badge:"ADDITIVE MANUFACTURING",ribbon:"INDUSTRIAL RAPID PROTOTYPING",titleHighlight:"3D",titleRest:"P R I N T I N G",desc:"Fused Deposition Modeling (FDM) and Stereolithography (SLA) printing delivering functional prototypes in engineering thermoplastics and resins.",ctaPrimary:"Request 3D Print",ctaSecondary:"View Materials",image:"/images/mit/research_lab.jpg"},{badge:"MECHANICAL ENGINEERING",ribbon:"INNOVATION & STUDENT CAPSTONE",titleHighlight:"RAPID",titleRest:"P R O T O T Y P I N G",desc:"Transforming theoretical mechanical CAD models into tangible working mechanisms, planetary gearboxes, and automotive manifolds.",ctaPrimary:"Submit CAD Model",ctaSecondary:"Student Projects",image:"/images/mit/cad_lab2.jpg"}];re.useEffect(()=>{const o=setInterval(()=>{i(l=>(l+1)%r.length)},6e3);return()=>clearInterval(o)},[r.length]);const s=r[n];return a.jsxs("section",{id:"home",className:"relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-gray-50 via-white to-orange-50/40 overflow-hidden border-b border-gray-200",children:[a.jsx("div",{className:"absolute top-1/2 right-[10%] -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-orange-300/40 via-orange-200/50 to-transparent blur-2xl pointer-events-none"}),a.jsx("div",{className:"absolute inset-0 hero-speedlines opacity-40 pointer-events-none"}),a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[460px]",children:[a.jsxs("div",{className:"lg:col-span-6 relative flex items-center justify-center",children:[a.jsxs("div",{className:"relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group",children:[a.jsx("img",{src:s.image,alt:"3D Scanning and Printing Hardware Setup",onError:o=>{o.currentTarget.src="/images/mit/cad_lab1.jpg"},className:"w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"}),a.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-5",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"px-3 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-orange-400 font-bold border border-orange-500/30",children:"OPTICAL 3D SCANNER // ACTIVE"}),a.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-white font-bold text-sm font-mono mb-1",children:"CAD INSPECTION & REVERSE ENGINEERING"}),a.jsxs("div",{className:"text-xs text-gray-300 font-light flex items-center gap-3",children:[a.jsx("span",{children:"Resolution: 0.02mm"}),a.jsx("span",{children:"•"}),a.jsx("span",{children:"Turntable: 360° Automated"})]})]})]})]}),a.jsxs("div",{className:"absolute -bottom-4 -left-2 sm:left-4 bg-white p-3 rounded-2xl shadow-xl border border-orange-200 flex items-center gap-3",children:[a.jsx("div",{className:"w-11 h-11 rounded-full bg-white p-0.5 border border-orange-300 flex items-center justify-center shrink-0 shadow-sm",children:a.jsx("img",{src:"/images/mit_logo.png",alt:"MIT Mysore College Logo",className:"w-full h-full object-contain",onError:o=>{o.currentTarget.src="/mit_logo.png"}})}),a.jsxs("div",{children:[a.jsx("div",{className:"text-xs font-bold text-gray-900",children:"MIT Mysore Additive Lab"}),a.jsx("div",{className:"text-[11px] text-gray-500",children:"Industry 4.0 Prototyping Facility"})]})]})]}),a.jsxs("div",{className:"lg:col-span-6 flex flex-col items-start justify-center",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-4",children:[a.jsx(vx,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Maharaja Institute of Technology Mysore"})]}),a.jsx("div",{className:"flex items-baseline gap-4 mb-2",children:a.jsx("span",{className:"text-6xl sm:text-7xl lg:text-8xl font-black text-[#f15a24] font-['Rajdhani'] leading-none tracking-tight",children:s.titleHighlight})}),a.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-[0.25em] font-mono uppercase mb-4",children:s.titleRest}),a.jsx("div",{className:"relative inline-block mb-6",children:a.jsx("div",{className:"orange-ribbon px-5 py-2.5 rounded-sm shadow-md text-white font-bold text-xs sm:text-sm tracking-widest uppercase font-mono",children:s.ribbon})}),a.jsx("p",{className:"text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-xl font-normal",children:s.desc}),a.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-8",children:[a.jsxs("button",{onClick:t,className:"px-6 py-3.5 rounded bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 transition flex items-center gap-2",children:[a.jsx(Da,{className:"w-4 h-4"}),a.jsx("span",{children:s.ctaPrimary})]}),a.jsxs("a",{href:"#technologies",className:"px-6 py-3.5 rounded bg-gray-900 hover:bg-black text-white font-bold text-sm tracking-wide transition flex items-center gap-2",children:[a.jsx(th,{className:"w-4 h-4 text-orange-400"}),a.jsx("span",{children:s.ctaSecondary})]}),a.jsxs("button",{onClick:e,className:"px-5 py-3.5 rounded border-2 border-gray-300 hover:border-[#f15a24] text-gray-700 hover:text-[#f15a24] font-semibold text-sm transition flex items-center gap-1.5",children:[a.jsx(Fl,{className:"w-4 h-4"}),a.jsx("span",{children:"Track Order"})]})]}),a.jsx("div",{className:"flex items-center gap-2.5",children:r.map((o,l)=>a.jsx("button",{onClick:()=>i(l),className:`transition-all rounded-full ${n===l?"w-8 h-2.5 bg-[#f15a24]":"w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"}`,title:`Go to slide ${l+1}`},l))})]})]}),a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200",children:[a.jsxs("div",{className:"bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f15a24]",children:a.jsx(_s,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("div",{className:"text-base font-bold text-gray-900 font-mono",children:"6+ PRINTERS"}),a.jsx("div",{className:"text-xs text-gray-500",children:"FDM & SLA Stations"})]})]}),a.jsxs("div",{className:"bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f15a24]",children:a.jsx(Ax,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("div",{className:"text-base font-bold text-gray-900 font-mono",children:"0.02 mm"}),a.jsx("div",{className:"text-xs text-gray-500",children:"3D Scanning Precision"})]})]}),a.jsxs("div",{className:"bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f15a24]",children:a.jsx(Jd,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("div",{className:"text-base font-bold text-gray-900 font-mono",children:"7+ MATERIALS"}),a.jsx("div",{className:"text-xs text-gray-500",children:"PLA, ABS, PETG, Resin, CF"})]})]}),a.jsxs("div",{className:"bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f15a24]",children:a.jsx(ih,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("div",{className:"text-base font-bold text-gray-900 font-mono",children:"24 – 48 HRS"}),a.jsx("div",{className:"text-xs text-gray-500",children:"Rapid Turnaround"})]})]})]})]})]})},b_=()=>a.jsx("section",{id:"about",className:"py-20 bg-white relative border-b border-gray-200",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(Ef,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Maharaja Institute of Technology Mysore"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Department of Mechanical Engineering"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base leading-relaxed",children:"Estd. 2007 • Affiliated to Visvesvaraya Technological University (VTU) Belagavi • AICTE Approved • NAAC Accredited • Autonomous Institution"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16",children:[a.jsxs("div",{className:"lg:col-span-6 flex flex-col gap-4",children:[a.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group",children:[a.jsx("img",{src:"/images/mit/mit_campus_front.webp",alt:"Maharaja Institute of Technology Mysore Campus Building",className:"w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"}),a.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-5",children:[a.jsx("span",{className:"text-xs font-mono text-orange-400 font-bold uppercase",children:"MIT MYSORE CAMPUS • BELAWADI, SRIRANGAPATNA"}),a.jsx("h4",{className:"text-base font-bold text-white",children:"Main Academic Block & Mechanical Engineering Department"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{className:"relative rounded-xl overflow-hidden shadow-md border border-gray-200 h-40 group",children:[a.jsx("img",{src:"/images/mit/cad_lab1.jpg",alt:"MIT Mysore CAD/CAM Modeling Laboratory",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3",children:a.jsx("span",{className:"text-xs font-semibold text-white",children:"CAD/CAM Simulation Lab"})})]}),a.jsxs("div",{className:"relative rounded-xl overflow-hidden shadow-md border border-gray-200 h-40 group",children:[a.jsx("img",{src:"/images/mit/research_lab.jpg",alt:"MIT Mysore Additive Manufacturing & Research Lab",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3",children:a.jsx("span",{className:"text-xs font-semibold text-white",children:"Research & Additive Lab"})})]})]})]}),a.jsxs("div",{className:"lg:col-span-6 flex flex-col gap-6",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-white border border-gray-200 shadow-sm",children:[a.jsxs("h3",{className:"text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 font-['Rajdhani']",children:[a.jsx(_x,{className:"w-5 h-5 text-[#f15a24]"}),a.jsx("span",{children:"Departmental Profile & Leadership"})]}),a.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed mb-4",children:["The Department of Mechanical Engineering at MIT Mysore is guided by ",a.jsx("strong",{children:"Dr. Mohamed Khaisar (Professor & HOD)"}),", along with experienced faculty coordinators including ",a.jsx("strong",{children:"Prof. B. Harish"})," (Associate Professor & ISHRAE Coordinator),",a.jsx("strong",{children:"Dr. Y. D. Chethan"})," (Associate Professor & Design/CAE Incharge), and ",a.jsx("strong",{children:"Dr. Ravikumar K. S."})," (Assistant Professor & Fluid Machinery Lab)."]}),a.jsxs("p",{className:"text-gray-600 text-sm leading-relaxed",children:["The department fosters active student professional engagement through the ",a.jsx("strong",{children:"Mechismos Club"}),", the ",a.jsx("strong",{children:"ISHRAE Student Chapter"}),", and its bi-annual technical publication ",a.jsx("strong",{children:a.jsx("em",{children:"Mech-Times"})}),", providing regular industrial tours to Automotive Axles, Bhoruka Extrusions, and ACREX India."]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"p-4 rounded-xl bg-orange-50/60 border border-orange-200",children:[a.jsxs("div",{className:"flex items-center gap-2 text-[#f15a24] font-bold text-xs font-mono uppercase mb-1.5",children:[a.jsx(x_,{className:"w-4 h-4"}),a.jsx("span",{children:"DEPARTMENT VISION"})]}),a.jsx("p",{className:"text-xs text-gray-700 leading-relaxed",children:"To excel in technical education by producing Mechanical Engineers who are competitive, contributing, and sustainable in the global socio-technological front."})]}),a.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 border border-gray-200",children:[a.jsxs("div",{className:"flex items-center gap-2 text-gray-800 font-bold text-xs font-mono uppercase mb-1.5",children:[a.jsx(Mx,{className:"w-4 h-4 text-[#f15a24]"}),a.jsx("span",{children:"MISSION"})]}),a.jsx("p",{className:"text-xs text-gray-700 leading-relaxed",children:"To provide quality education through outcome-based curriculum, modern laboratories, and research-driven additive manufacturing facilities."})]})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[a.jsxs("div",{className:"p-3 bg-white border border-gray-200 rounded-xl text-center shadow-sm",children:[a.jsx("div",{className:"text-lg font-bold text-[#f15a24] font-mono",children:"B.E. & M.Tech"}),a.jsx("div",{className:"text-[11px] text-gray-500 uppercase font-medium",children:"Thermal Power Engg"})]}),a.jsxs("div",{className:"p-3 bg-white border border-gray-200 rounded-xl text-center shadow-sm",children:[a.jsx("div",{className:"text-lg font-bold text-gray-900 font-mono",children:"KSCST"}),a.jsx("div",{className:"text-[11px] text-gray-500 uppercase font-medium",children:"Project Awards"})]}),a.jsxs("div",{className:"p-3 bg-white border border-gray-200 rounded-xl text-center shadow-sm",children:[a.jsx("div",{className:"text-lg font-bold text-gray-900 font-mono",children:"Mech-Times"}),a.jsx("div",{className:"text-[11px] text-gray-500 uppercase font-medium",children:"Official Publication"})]})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[a.jsxs("div",{className:"p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f15a24] mb-4",children:a.jsx(Jd,{className:"w-6 h-6"})}),a.jsx("h4",{className:"text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase",children:"Design, Modeling & CAE Lab"}),a.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"Equipped with high-performance workstations for SolidWorks CAD modeling, ANSYS topological optimization, and dynamic simulations."})]}),a.jsxs("div",{className:"p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f15a24] mb-4",children:a.jsx(Ef,{className:"w-6 h-6"})}),a.jsx("h4",{className:"text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase",children:"Additive & 3D Prototyping Lab"}),a.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"Industrial dual-extrusion FDM printers, stereolithography (SLA) resin units, and 0.02mm structured optical 3D scanners."})]}),a.jsxs("div",{className:"p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f15a24] mb-4",children:a.jsx(Tx,{className:"w-6 h-6"})}),a.jsx("h4",{className:"text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase",children:"Heat Transfer & ISHRAE Lab"}),a.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"Experimental convection, radiation, and refrigeration test apparatus driving student research in thermal power and decarbonization."})]}),a.jsxs("div",{className:"p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f15a24] mb-4",children:a.jsx(Cx,{className:"w-6 h-6"})}),a.jsx("h4",{className:"text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase",children:"Metrology & Material Testing Lab"}),a.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"Universal Testing Machines (UTM), optical profile projectors, and hardness testers verifying strength of 3D printed components."})]})]})]})}),M_=({onRequestClick:t})=>{const[e,n]=re.useState("fdm"),i=[{id:"fdm",name:"Fused Deposition Modeling",acronym:"FDM",fullTitle:"Fused Deposition Modeling (FDM / FFF)",badge:"Cost-Effective & Functional",tagline:"Continuous extrusion of thermoplastic filaments layer-by-layer onto a heated build platform.",workingPrinciple:"A spool of thermoplastic filament is fed into a heated extruder nozzle (190°C - 300°C) which liquefies the polymer. A precision CNC gantry deposits the molten material in 2D slices along the X and Y axes. As each slice solidifies rapidly, the Z-stage shifts down, bonding successive layers into a robust 3D object.",accuracy:"± 0.15 mm",layerHeight:"0.10 – 0.35 mm (100–350 microns)",maxVolume:"300 × 300 × 400 mm",equipmentModel:"MITM Dual-Extrusion Industrial FDM-300",advantages:["Extremely economical material cost per gram for student capstone budgets","Large build envelope for full-scale mechanical and automotive components","Wide material palette: PLA, ABS, PETG, TPU, and Carbon Fiber composites","Dual-extrusion soluble PVA support capability for complex interior cavities"],applications:["End-use mechanical brackets & motor mountings","Formula student racing air intake manifolds","Robotic chassis & gear linkage mechanisms","Educational kinematic cutaways & foundry patterns"],materials:["PLA","ABS","PETG","TPU 95A","Nylon PA12","Carbon Fiber PLA"]},{id:"sla",name:"Stereolithography",acronym:"SLA",fullTitle:"Stereolithography Laser Photopolymerization (SLA)",badge:"Ultra-High Precision & Smooth Finish",tagline:"Selective laser curing of liquid photopolymer resin to achieve micron-level surface accuracy.",workingPrinciple:"A high-precision ultraviolet (UV) solid-state laser (405nm) is steered across a vat of liquid photocurable resin using dual galvanometer mirrors. The laser cross-links and polymerizes the liquid resin into a solid plastic cross-section down to 25-micron layers before post-washing in IPA and UV oven curing.",accuracy:"± 0.05 mm (50 microns)",layerHeight:"0.025 – 0.10 mm (25–100 microns)",maxVolume:"145 × 145 × 175 mm",equipmentModel:"FormLabs Form 3+ Equivalent SLA Precision Station",advantages:["Mirror-smooth injection-mold quality surface finish requiring minimal post-processing","Exceptional dimensional accuracy down to 25-micron layers","Isotropic mechanical strength in all orientations (X, Y, Z)","Water-tight microfluidic channels and crisp threads"],applications:["Centrifugal pump impellers & fluid mechanics test parts","Miniature precision gear trains & watch escapements","Biomechanical surgical guides & dental prosthetics","Master patterns for investment casting & silicone molds"],materials:["Standard Resin","Tough 2000 Resin","Clear Resin","High-Temp Resin (300°C)"]},{id:"sls",name:"Selective Laser Sintering",acronym:"SLS",fullTitle:"Selective Laser Sintering (SLS)",badge:"Industrial Grade & Support-Free",tagline:"High-power CO2 laser sintering of powdered nylon polymer particles into durable end-use components.",workingPrinciple:"A thin layer of fine polymer powder (Nylon PA12) is spread across a heated build chamber. A computer-guided CO2 laser fuses the powder particles together at their melting boundary. Because loose un-sintered powder acts as natural support, complex interior geometries, trapped balls, and living hinges can be printed without support structures.",accuracy:"± 0.20 mm",layerHeight:"0.08 – 0.12 mm (80–120 microns)",maxVolume:"200 × 200 × 300 mm",equipmentModel:"MIT Mysore Powder Bed Laser Sintering Unit",advantages:["Zero support structures needed (loose powder acts as support)","Complex internal conduits, interlocking joints & monolithic hinges","High impact resistance and fatigue strength with true isotropic density","Excellent chemical resistance against oils, greases, and fuels"],applications:["Automotive functional ducts, bellows & fluid reservoirs","Durable snap-fit enclosures and industrial drone arms","Custom prosthetics & ergonomic wearable devices","High-torque planetary gearboxes"],materials:["Nylon PA12 Powder","Glass-Filled Nylon (PA-GF)","TPU Powder"]},{id:"dlp",name:"Digital Light Processing",acronym:"DLP",fullTitle:"Digital Light Processing (DLP)",badge:"High-Speed Micro Fabrication",tagline:"Digital micromirror projector projecting full-layer UV cross-sections simultaneously.",workingPrinciple:"Similar to SLA, DLP cures liquid photopolymer resin, but projects the entire 2D cross-section at once using an optical Digital Micromirror Device (DMD). Since entire layers cure simultaneously, print times are uniform regardless of how many items are placed on the platform.",accuracy:"± 0.04 mm (40 microns)",layerHeight:"0.02 – 0.08 mm (20–80 microns)",maxVolume:"130 × 75 × 150 mm",equipmentModel:"High-Speed DLP Digital Photopolymer Station",advantages:["Rapid print speed: cures entire layer cross-sections in seconds","Crisp edge definition and microscopic surface features","High batch repeatability for small mechanical fixtures"],applications:["Micro-electromechanical systems (MEMS) packaging","Sensor enclosures & fine jewelry patterns","Precision optical lens holders and alignment jigs"],materials:["High-Resolution Standard Resin","Flexible Resin","Castable Wax Resin"]}],r=i.find(s=>s.id===e)||i[0];return a.jsx("section",{id:"technologies",className:"py-20 bg-gray-50 border-b border-gray-200",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(Jd,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Industrial Additive Technologies"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Our 3D Printing Technologies"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Explore the core additive manufacturing technologies available in our mechanical engineering laboratory."})]}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-8",children:i.map(s=>a.jsxs("button",{onClick:()=>n(s.id),className:`p-4 rounded-xl text-left border transition-all ${e===s.id?"bg-white border-[#f15a24] shadow-md ring-2 ring-orange-200":"bg-white border-gray-200 hover:border-gray-300 text-gray-600"}`,children:[a.jsx("div",{className:"text-2xl font-black font-['Rajdhani'] text-gray-900 mb-1",children:s.acronym}),a.jsx("div",{className:"text-xs font-bold text-[#f15a24] mb-1",children:s.name}),a.jsx("div",{className:"text-[11px] text-gray-500 line-clamp-1",children:s.badge})]},s.id))}),a.jsx("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-sm relative overflow-hidden",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[a.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-6",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[a.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-orange-100 text-[#f15a24] font-bold",children:r.badge}),a.jsxs("span",{className:"text-xs text-gray-500 font-medium",children:["Station: ",r.equipmentModel]})]}),a.jsx("h3",{className:"text-2xl font-black text-gray-900 font-['Rajdhani'] uppercase tracking-wide",children:r.fullTitle}),a.jsxs("p",{className:"text-gray-600 text-sm mt-1 italic",children:['"',r.tagline,'"']})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-gray-50 border border-gray-200",children:[a.jsxs("h4",{className:"text-xs font-mono text-[#f15a24] uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5",children:[a.jsx(g_,{className:"w-4 h-4"}),a.jsx("span",{children:"WORKING PRINCIPLE & KINEMATICS"})]}),a.jsx("p",{className:"text-gray-700 text-xs sm:text-sm leading-relaxed",children:r.workingPrinciple})]}),a.jsxs("div",{children:[a.jsxs("h4",{className:"text-xs font-mono text-gray-900 uppercase tracking-wider mb-3 font-bold flex items-center gap-1.5",children:[a.jsx(Rs,{className:"w-4 h-4 text-[#f15a24]"}),a.jsx("span",{children:"KEY ADVANTAGES"})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:r.advantages.map((s,o)=>a.jsxs("div",{className:"flex items-start gap-2 text-xs text-gray-700",children:[a.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#f15a24] mt-1.5 flex-shrink-0"}),a.jsx("span",{children:s})]},o))})]})]}),a.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-5",children:[a.jsxs("div",{className:"p-5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col gap-3 font-mono",children:[a.jsx("div",{className:"text-xs text-[#f15a24] font-bold tracking-wider uppercase border-b border-gray-200 pb-2",children:"PROCESS SPECIFICATIONS"}),a.jsxs("div",{className:"flex justify-between items-center text-xs",children:[a.jsx("span",{className:"text-gray-600",children:"Layer Resolution:"}),a.jsx("span",{className:"text-gray-900 font-bold",children:r.layerHeight})]}),a.jsxs("div",{className:"flex justify-between items-center text-xs",children:[a.jsx("span",{className:"text-gray-600",children:"Tolerance:"}),a.jsx("span",{className:"text-[#f15a24] font-bold",children:r.accuracy})]}),a.jsxs("div",{className:"flex justify-between items-center text-xs",children:[a.jsx("span",{className:"text-gray-600",children:"Max Build Volume:"}),a.jsx("span",{className:"text-gray-900 font-bold",children:r.maxVolume})]})]}),a.jsxs("div",{className:"p-5 rounded-xl bg-white border border-gray-200 shadow-sm",children:[a.jsxs("h4",{className:"text-xs font-mono text-gray-900 uppercase tracking-wider mb-3 font-bold flex items-center gap-1.5",children:[a.jsx(a_,{className:"w-4 h-4 text-orange-500"}),a.jsx("span",{children:"SUPPORTED MATERIALS"})]}),a.jsx("div",{className:"flex flex-wrap gap-1.5",children:r.materials.map((s,o)=>a.jsx("span",{className:"px-2.5 py-1 rounded-md text-xs font-medium bg-orange-50 text-[#ea580c] border border-orange-200",children:s},o))})]}),a.jsx("div",{className:"pt-2",children:a.jsxs("a",{href:"#request-printing",className:"w-full py-3 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs uppercase font-mono tracking-wider transition flex items-center justify-center gap-2 shadow-md",children:[a.jsx(Da,{className:"w-4 h-4"}),a.jsxs("span",{children:["Build Quote For ",r.acronym]})]})})]})]})})]})})},w_=({onRequestService:t})=>{const e=[{id:"3d-printing",title:"3D Printing & Additive Fabrication",icon:_s,badge:"Core Service",shortDesc:"Multi-technology additive manufacturing covering FDM thermoplastics, high-detail SLA photopolymers, and laser sintering.",features:["Layer resolution from 25 to 350 microns","Large build volume up to 300 × 300 × 400 mm","Dual-extrusion PVA water-soluble support printing","High-temperature engineering polymers"],turnaround:"24 – 48 Hours"},{id:"3d-scanning",title:"3D Scanning & Reverse Engineering",icon:Ax,badge:"0.02mm Precision",shortDesc:"Structured-light optical 3D scanning to digitize legacy physical parts, impellers, and broken tooling into CAD surfaces.",features:["Contactless high-resolution structured light scanning","Polygon mesh to parametric NURBS / STEP CAD","Inspection against original CAD with chromatic heatmaps","Automotive & broken machinery spare replacement"],turnaround:"2 – 3 Days"},{id:"cad-modelling",title:"CAD Modelling & Topology Optimization",icon:yx,badge:"Design for AM",shortDesc:"Parametric mechanical design in SolidWorks, Fusion 360, and ANSYS topological lightweight optimization.",features:["FEA-driven material reduction (up to 45% lighter)","Compliant living hinge and flexure mechanism design","Generative design with organic load-path distribution","Design for Additive Manufacturing (DFAM) rule checks"],turnaround:"3 – 5 Days"},{id:"rapid-prototyping",title:"Rapid Prototyping & Iteration",icon:ih,badge:"Fast Turnaround",shortDesc:"Accelerated engineering development lifecycle allowing students and clients to iterate physical assemblies overnight.",features:["Validation of snap fits, clearances, and tolerances","Physical ergonomic feel and hand-grip evaluation","Multi-iteration proof-of-concept for capstone project juries","Overnight express slicing and print queuing"],turnaround:"12 – 24 Hours"},{id:"mechanical-design",title:"Mechanical Component Design",icon:n_,badge:"Kinematics & Gears",shortDesc:"Engineering design and simulation of spur, helical, planetary gearboxes, cams, and 4-bar linkages.",features:["Kinematic motion study and interference checking","Custom gear tooth involute profile calculation","Integrated bearing journals, press-fit bosses, and keyways","Vibration dampening elastomer mounts"],turnaround:"3 – 4 Days"},{id:"product-development",title:"End-to-End Product Development",icon:Mx,badge:"Idea to Reality",shortDesc:"Comprehensive engineering guidance from student sketch to fully functional, market-ready physical hardware.",features:["Aesthetic industrial enclosure styling and PCB integration","Fastener selection, threaded brass heat-set insert sizing","Draft angle verification and split-line parting optimization","Bill of Materials (BOM) and assembly guide"],turnaround:"1 – 2 Weeks"},{id:"functional-prototyping",title:"Functional Prototyping & Load Testing",icon:Ol,badge:"Structural Validation",shortDesc:"Fabrication of load-bearing structural parts with fiber reinforcement for real wind tunnel and dynamometer testing.",features:["Continuous chopped carbon fiber reinforcement","Hydrodynamic impellers balanced for up to 3,000 RPM","Tensile and compressive coupon yield testing","Thermal endurance validation up to 140°C"],turnaround:"3 – 5 Days"},{id:"custom-manufacturing",title:"Custom Component Manufacturing",icon:Rf,badge:"Batch Production",shortDesc:"Short-run batch production of specialized jigs, robotic end-effectors, drone arms, and customized lab fixtures.",features:["Low-to-medium batch runs (10 – 100 units) without tooling costs","Custom drill jigs, assembly fixtures, and quality gauges","Direct digital manufacturing on demand","Subsidized internal student pricing"],turnaround:"3 – 6 Days"}],n=[{name:"Automotive & Racing",icon:Zy,desc:"Intake manifolds, aerodynamic fairings, Formula Student chassis."},{name:"Aerospace & Drones",icon:p_,desc:"Lightweight carbon fiber drone arms, camera gimbals, turbine nozzles."},{name:"Medical & Biomechanics",icon:c_,desc:"Orthotic braces, bionic prosthetic hands, anatomical study models."},{name:"Robotics & Automation",icon:$y,desc:"Quadruped leg linkages, robotic grippers, sensor housings."}];return a.jsx("section",{id:"services",className:"py-20 bg-white border-b border-gray-200",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(Rf,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Industrial Engineering Solutions"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Our Prototyping & Manufacturing Services"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Professional digital fabrication, CAD reverse engineering, and low-volume additive manufacturing for Mysore region."})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",children:e.map(i=>{const r=i.icon;return a.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#f15a24] hover:shadow-xl transition-all group relative overflow-hidden",children:[a.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-[#f15a24] opacity-0 group-hover:opacity-100 transition-opacity"}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#f15a24] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f15a24] group-hover:text-white transition-all shadow-sm",children:a.jsx(r,{className:"w-6 h-6"})}),a.jsx("span",{className:"text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700",children:i.badge})]}),a.jsx("h3",{className:"text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase tracking-wide group-hover:text-[#f15a24] transition-colors",children:i.title}),a.jsx("p",{className:"text-xs text-gray-600 leading-relaxed mb-4",children:i.shortDesc}),a.jsx("div",{className:"border-t border-gray-100 pt-3 mb-4",children:a.jsx("ul",{className:"flex flex-col gap-1.5",children:i.features.slice(0,3).map((s,o)=>a.jsxs("li",{className:"flex items-start gap-1.5 text-[11px] text-gray-600",children:[a.jsx(Rs,{className:"w-3.5 h-3.5 text-[#f15a24] mt-0.5 flex-shrink-0"}),a.jsx("span",{children:s})]},o))})})]}),a.jsxs("div",{className:"border-t border-gray-100 pt-3 flex items-center justify-between mt-2",children:[a.jsxs("div",{className:"text-[11px] font-mono text-gray-500",children:["Est: ",a.jsx("span",{className:"text-gray-900 font-bold",children:i.turnaround})]}),a.jsxs("button",{onClick:()=>t(i.title),className:"flex items-center gap-1 text-xs font-bold font-mono text-[#f15a24] hover:text-[#ea580c] group/btn",children:[a.jsx("span",{children:"Request"}),a.jsx(Wy,{className:"w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform"})]})]})]},i.id)})}),a.jsxs("div",{id:"industries",className:"pt-8 border-t border-gray-200",children:[a.jsxs("div",{className:"text-center max-w-xl mx-auto mb-10",children:[a.jsx("span",{className:"text-xs font-mono font-bold text-[#f15a24] uppercase tracking-wider",children:"APPLICATIONS ACROSS DOMAINS"}),a.jsx("h3",{className:"text-2xl font-bold text-gray-900 font-['Rajdhani'] uppercase mt-1",children:"Industries We Serve"})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:n.map((i,r)=>{const s=i.icon;return a.jsxs("div",{className:"p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-orange-300 transition",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-orange-100 text-[#f15a24] flex items-center justify-center mb-3",children:a.jsx(s,{className:"w-5 h-5"})}),a.jsx("h4",{className:"text-sm font-bold text-gray-900 mb-1",children:i.name}),a.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:i.desc})]},r)})})]})]})})},E_="https://mech-fisd.onrender.com",Pf=E_,yt=Pf.replace(/\/$/,"")?`${Pf.replace(/\/$/,"")}/api`:"/api",St={async getStats(){const t=await fetch(`${yt}/stats`);if(!t.ok)throw new Error("Failed to fetch statistics");return t.json()},async getMaterials(){const t=await fetch(`${yt}/materials`);if(!t.ok)throw new Error("Failed to fetch materials");return t.json()},async updateMaterial(t,e){const n=await fetch(`${yt}/materials/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error("Failed to update material");return n.json()},async getProjects(t){const e=t&&t!=="All"?`${yt}/projects?category=${encodeURIComponent(t)}`:`${yt}/projects`,n=await fetch(e);if(!n.ok)throw new Error("Failed to fetch projects");return n.json()},async createProject(t){const e=await fetch(`${yt}/projects`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Failed to create project");return e.json()},async deleteProject(t){const e=await fetch(`${yt}/projects/${t}`,{method:"DELETE"});if(!e.ok)throw new Error("Failed to delete project");return e.json()},async getGallery(t){const e=t&&t!=="All"?`${yt}/gallery?category=${encodeURIComponent(t)}`:`${yt}/gallery`,n=await fetch(e);if(!n.ok)throw new Error("Failed to fetch gallery");return n.json()},async createGalleryItem(t){const e=await fetch(`${yt}/gallery`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Failed to create gallery item");return e.json()},async deleteGalleryItem(t){const e=await fetch(`${yt}/gallery/${t}`,{method:"DELETE"});if(!e.ok)throw new Error("Failed to delete gallery item");return e.json()},async updateGalleryItem(t,e){const n=await fetch(`${yt}/gallery/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error("Failed to update gallery item");return n.json()},async uploadGalleryImage(t){const e=new FormData;e.append("file",t);const n=await fetch(`${yt}/gallery/upload`,{method:"POST",body:e});if(!n.ok){const i=await n.json().catch(()=>({detail:"Image upload failed"}));throw new Error(i.detail||"Image upload failed")}return n.json()},async createRequest(t){const e=await fetch(`${yt}/requests`,{method:"POST",body:t});if(!e.ok){const n=await e.json().catch(()=>({detail:"Request submission failed"}));throw new Error(n.detail||"Request submission failed")}return e.json()},async getRequests(t,e){const n=new URLSearchParams;t&&t!=="All"&&n.append("status",t),e&&n.append("search",e);const i=await fetch(`${yt}/requests?${n.toString()}`);if(!i.ok)throw new Error("Failed to fetch requests");return i.json()},async trackRequest(t){const e=await fetch(`${yt}/requests/track/${encodeURIComponent(t)}`);if(!e.ok){const n=await e.json().catch(()=>({detail:"No requests found"}));throw new Error(n.detail||"No requests found matching this ID or USN")}return e.json()},async updateRequestStatus(t,e,n,i){const r=await fetch(`${yt}/requests/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e,admin_notes:n,estimated_completion:i})});if(!r.ok)throw new Error("Failed to update request");return r.json()},async submitContact(t){const e=await fetch(`${yt}/contact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Failed to send message");return e.json()},async getContacts(){const t=await fetch(`${yt}/contact`);if(!t.ok)throw new Error("Failed to fetch contacts");return t.json()},async adminLogin(t,e){const n=await fetch(`${yt}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})});if(!n.ok){const i=await n.json().catch(()=>({detail:"Invalid credentials"}));throw new Error(i.detail||"Login failed")}return n.json()}},T_=[{id:"abs",name:"ABS (Acrylonitrile Butadiene Styrene)",category:"Engineering Polymer",density:1.04,tensile_strength:"40 - 50 MPa",heat_deflection:"98°C",print_temp:"230°C - 250°C",bed_temp:"95°C - 110°C",is_available:!0,stock_status:"In Stock",price_per_gram:2.8,colors:"Industrial Black, Bone White, Cool Gray",applications:"Automotive trim components, functional enclosures, snap-fit joints, thermal resistance assemblies",description:"Tough, impact-resistant engineering polymer capable of enduring elevated temperatures and mechanical wear.",image_url:"/images/mit/material_testing_lab.jpg"},{id:"carbon_pla",name:"Carbon Fiber PLA (CF-PLA)",category:"Composite",density:1.3,tensile_strength:"65 - 75 MPa",heat_deflection:"60°C",print_temp:"205°C - 225°C",bed_temp:"55°C - 65°C",is_available:!0,stock_status:"In Stock",price_per_gram:5,colors:"Matte Charcoal Black",applications:"Drone frame arms, RC chassis, high-rigidity structural brackets, aerodynamic fairings",description:"Standard PLA reinforced with 15% high-modulus chopped carbon fiber strands, resulting in lightweight structural rigidity.",image_url:"/images/mit/research_lab.jpg"},{id:"nylon",name:"Nylon PA12",category:"High-Performance Polyamide",density:1.01,tensile_strength:"48 - 55 MPa",heat_deflection:"135°C",print_temp:"240°C - 260°C",bed_temp:"80°C - 90°C",is_available:!0,stock_status:"Low Stock",price_per_gram:6.5,colors:"Natural Off-White, Dyed Black",applications:"Durable gears, aerodynamic ducts, heavy-load brackets, functional kinematics",description:"Exceptional fatigue resistance, low friction coefficient, and high impact strength for high-demand engineering components.",image_url:"/images/mit/mmm_lab5.jpg"},{id:"petg",name:"PETG (Polyethylene Terephthalate Glycol)",category:"Co-Polyester",density:1.27,tensile_strength:"50 MPa",heat_deflection:"75°C",print_temp:"220°C - 245°C",bed_temp:"70°C - 80°C",is_available:!0,stock_status:"In Stock",price_per_gram:3,colors:"Clear Translucent, Black, Royal Blue, Signal Orange",applications:"Liquid-tight containers, mechanical brackets, outdoor tooling, chemical-resistant housings",description:"Combines the user-friendly printability of PLA with the durability and weather resistance of ABS.",image_url:"/images/mit/design_lab2.jpg"},{id:"pla",name:"PLA (Polylactic Acid)",category:"Standard Thermoplastic",density:1.24,tensile_strength:"50 - 65 MPa",heat_deflection:"55°C",print_temp:"190°C - 215°C",bed_temp:"50°C - 60°C",is_available:!0,stock_status:"In Stock",price_per_gram:2,colors:"White, Black, Signal Blue, Crimson Red, Silver, Forest Green",applications:"Educational prototypes, architectural models, non-functional casings, concept validation",description:"Biodegradable thermoplastic derived from renewable resources like corn starch. Excellent dimensional accuracy with minimal warping.",image_url:"/images/mit/cad_lab1.jpg"},{id:"tpu",name:"TPU 95A (Thermoplastic Polyurethane)",category:"Flexible Elastomer",density:1.21,tensile_strength:"35 MPa",heat_deflection:"60°C",print_temp:"215°C - 235°C",bed_temp:"40°C - 50°C",is_available:!0,stock_status:"In Stock",price_per_gram:4.5,colors:"Jet Black, High-Vis Yellow, Clear",applications:"Vibration dampers, robotic end-effectors, gaskets, protective bumpers, flexible couplings",description:"Shore 95A rubber-like flexibility with high tear resistance, abrasion resilience, and elongation at break up to 580%.",image_url:"/images/mit/training_plc_scada.png"},{id:"resin",name:"Tough Photopolymer Resin",category:"Photocurable Resin (SLA/DLP)",density:1.15,tensile_strength:"55 - 65 MPa",heat_deflection:"65°C",print_temp:"405nm UV Curing",bed_temp:"Room Temp",is_available:!0,stock_status:"In Stock",price_per_gram:6,colors:"Translucent Gray, Ceramic White, Ultra-Clear",applications:"High-precision fluidic channels, miniature gearboxes, medical device prototypes, micro-mechanics",description:"Ultra-high resolution SLA/DLP photopolymer resin providing mirror-smooth surface finish and 25-micron layer resolution.",image_url:"/images/mit/fm_lab.jpg"}],A_=({onSelectMaterial:t})=>{const[e,n]=re.useState(T_),[i,r]=re.useState("All");re.useEffect(()=>{(async()=>{try{const u=await St.getMaterials();if(u&&u.length>0){const h={abs:"/images/mit/material_testing_lab.jpg",carbon_pla:"/images/mit/research_lab.jpg",nylon:"/images/mit/mmm_lab5.jpg",pla:"/images/mit/cad_lab1.jpg",petg:"/images/mit/design_lab2.jpg",resin:"/images/mit/fm_lab.jpg",tpu:"/images/mit/training_plc_scada.png"},p=u.map(f=>!f.image_url||f.image_url.includes("unsplash.com")?{...f,image_url:h[f.id]||"/images/mit/material_testing_lab.jpg"}:f);n(p)}}catch{console.warn("API loading fallback to default MIT materials")}})()},[]);const s=["All","Standard Thermoplastic","Engineering Polymer","Co-Polyester","Flexible Elastomer","Photocurable Resin (SLA/DLP)","Composite"],o=i==="All"?e:e.filter(c=>c.category.toLowerCase().includes(i.toLowerCase())),l=(c,u)=>!u||c==="Out of Stock"?a.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-red-100 text-red-700",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-red-500"}),"Out of Stock"]}):c==="Low Stock"?a.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-100 text-amber-700",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-500"}),"Low Stock"]}):a.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-100 text-emerald-700",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"}),"In Stock"]});return a.jsx("section",{id:"materials",className:"py-20 bg-gray-50 border-b border-gray-200",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(th,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Industrial Material Inventory"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Engineering Materials Matrix"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"High-grade thermoplastics, photopolymers, elastomers, and composites stocked for laboratory and student projects."})]}),a.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-10",children:s.map(c=>a.jsx("button",{onClick:()=>r(c),className:`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${i===c?"bg-[#f15a24] text-white shadow-sm":"bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300"}`,children:c},c))}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.map(c=>a.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between group",children:[a.jsxs("div",{className:"relative h-44 overflow-hidden bg-gray-100",children:[a.jsx("img",{src:c.image_url,alt:c.name,onError:u=>{const h=u.currentTarget;h.onerror=null,h.src="/images/mit/material_testing_lab.jpg"},className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),a.jsxs("div",{className:"absolute top-3 left-3 right-3 flex items-center justify-between",children:[a.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-black/75 text-white font-medium",children:c.category}),l(c.stock_status,c.is_available)]})]}),a.jsxs("div",{className:"p-6 flex-1 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold text-gray-900 font-['Rajdhani'] mb-1",children:c.name}),a.jsx("p",{className:"text-xs text-gray-600 leading-relaxed mb-4",children:c.description}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-[11px] font-mono mb-4",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block",children:"Tensile Strength:"}),a.jsx("span",{className:"text-gray-900 font-bold",children:c.tensile_strength})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block",children:"Heat Deflection:"}),a.jsx("span",{className:"text-[#ea580c] font-bold",children:c.heat_deflection})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block",children:"Density:"}),a.jsxs("span",{className:"text-gray-800",children:[c.density," g/cm³"]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block",children:"Nozzle Temp:"}),a.jsx("span",{className:"text-gray-800",children:c.print_temp})]})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx("span",{className:"text-[11px] font-mono text-gray-500 uppercase font-semibold block mb-0.5",children:"Lab Stock Colors:"}),a.jsx("p",{className:"text-xs text-gray-700 italic",children:c.colors})]})]}),a.jsxs("div",{className:"pt-3 border-t border-gray-100 flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-[10px] font-mono text-gray-500 block",children:"Recovery Rate:"}),a.jsxs("span",{className:"text-xs font-mono font-bold text-[#f15a24]",children:["₹",c.price_per_gram,"/g"]})]}),a.jsx("a",{href:"#request-printing",onClick:()=>t&&t(c.name),className:"px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-orange-50 hover:bg-[#f15a24] text-[#ea580c] hover:text-white border border-orange-200 transition",children:"Select For Quote"})]})]})]},c.id))})]})})},C_=()=>{const t=[{id:"proj-01",title:"Epicyclic Planetary Gearbox Speed Reducer (4:1)",category:"Gear Systems",students:"Arjun Rao, Bhavana K, Chethan Gowda",usn_list:"4MH21ME012, 4MH21ME028, 4MH21ME041",guide:"Dr. Mohamed Khaisar (Professor & HOD)",academic_year:"2025-2026",technology:"FDM",material:"Nylon PA12 & PETG",print_time_hours:14.5,dimensions:"160 x 160 x 95 mm",description:"Design, parametric slicing, and functional prototyping of an industrial planetary gear speed reduction assembly showcased at the department MECHISMOS project expo.",features:"Integrated sun, planet, and internal ring gear printed with compliant clearances. Tested up to 18 Nm torque transmission in department workshops.",image_url:"/images/mit/mechismos_tech_expo.jpg",featured:1,created_at:"2026-02-20"},{id:"proj-02",title:"Centrifugal Water Pump Impeller with NACA Airfoil Blades",category:"Mechanical",students:"Sudeep K, Tejas Gowda, Varun R",usn_list:"4MH21ME102, 4MH21ME114, 4MH21ME125",guide:"Dr. Ravikumar K. S. (Associate Professor)",academic_year:"2025-2026",technology:"SLA",material:"Tough Photopolymer Resin",print_time_hours:9.5,dimensions:"110 x 110 x 42 mm",description:"High-efficiency closed shrouded impeller with backward-curved 3D blade geometry calibrated and tested in MIT Mysore Fluid Mechanics Laboratory.",features:"50-micron SLA optical finish, dynamically balanced at 2800 RPM in the department hydraulic test rig with zero cavitation.",image_url:"/images/mit/fm_lab.jpg",featured:1,created_at:"2026-03-01"},{id:"proj-03",title:"Formula Student Lightweight Aerodynamic Air Intake Manifold",category:"Automotive",students:"Darshan M S, Ganesh K, Harsha V",usn_list:"4MH21ME053, 4MH21ME067, 4MH21ME079",guide:"Dr. B. Harish (Associate Professor)",academic_year:"2025-2026",technology:"FDM",material:"Carbon Fiber Reinforced PLA",print_time_hours:26,dimensions:"280 x 180 x 140 mm",description:"CFD-optimized aerodynamic air intake plenum and runner system modeled in MIT Mysore CAD/CAM studio for collegiate racing prototype.",features:"32% mass reduction compared to aluminum casting, ultra-smooth internal boundary layer flow, integrated MAP sensor bungs.",image_url:"/images/mit/cad_lab1.jpg",featured:1,created_at:"2026-02-18"},{id:"proj-04",title:"Autonomous Agriculture Drone Gimbal & Aerodynamic Chassis",category:"Industrial",students:"Vidyashree C, Yashwanth M, Nithin Kumar",usn_list:"4MH22ME110, 4MH22ME132, 4MH22ME085",guide:"Dr. Chethan Y. D. (Associate Professor)",academic_year:"2025-2026",technology:"FDM",material:"Carbon Fiber PLA & TPU",print_time_hours:11,dimensions:"135 x 115 x 75 mm",description:"2-Axis brushless motor camera stabilization gimbal and lightweight frame fabricated in the department Additive Research Laboratory.",features:"TPU elastomer vibration damping isolation grommets, conformal internal wiring conduits, and aerodynamic cooling vents.",image_url:"/images/mit/research_lab.jpg",featured:0,created_at:"2026-02-05"},{id:"proj-05",title:"Quadruped Robot Leg Actuation Kinematic Linkage",category:"Robotics",students:"Karthik Prasad, Manoj Kumar, Nithin R",usn_list:"4MH22ME034, 4MH22ME049, 4MH22ME082",guide:"Prof. Yogesh Kumar K. J. (Assistant Professor)",academic_year:"2025-2026",technology:"FDM & SLA",material:"ABS & Tough Resin",print_time_hours:18,dimensions:"210 x 95 x 65 mm",description:"3-DOF parallel leg linkage mechanism for biomimetic quadruped robot designed and tested in MIT Mysore Mechanical Design Laboratory.",features:"High impact shock absorption with dual-durometer TPU foot contacts, embedded ball-bearing mounts, 4.5 kg load support per leg.",image_url:"/images/mit/design_lab2.jpg",featured:1,created_at:"2026-01-25"},{id:"proj-06",title:"Bionic Myoelectric Prosthetic Hand with Compliant Grippers",category:"Final-Year Capstone",students:"Pooja N, Rakshith Gowda, Shreyas M S",usn_list:"4MH20ME061, 4MH20ME074, 4MH20ME092",guide:"Dr. Mohamed Khaisar & Dr. Godfrey Devaputra",academic_year:"2024-2025",technology:"FDM & SLA",material:"TPU 95A & Tough Resin",print_time_hours:22,dimensions:"190 x 90 x 55 mm",description:"Multi-articulated bionic prosthesis utilizing compliant living hinges for finger tendon actuation, measured in MIT Mysore Metrology Lab.",features:"Monolithic 3D printed finger linkages eliminating mechanical pin wear, tactile silicone/TPU fingertips for conformable grasp.",image_url:"/images/mit/mmm_lab5.jpg",featured:1,created_at:"2025-11-12"},{id:"proj-07",title:"Solar Photovoltaic Dual-Axis Tracking Mechanism Mount",category:"Mechanical",students:"Prajwal Gowda, Sanjana M, Chandan K",usn_list:"4MH21ME077, 4MH21ME089, 4MH21ME033",guide:"Dr. Godfrey Devaputra (Associate Professor)",academic_year:"2025-2026",technology:"FDM",material:"PETG & Carbon Fiber PLA",print_time_hours:16,dimensions:"220 x 140 x 85 mm",description:"Dual-axis tracking elevation bracket and worm-drive housing validated in MIT Mysore Material Testing Laboratory for wind shear resilience.",features:"Weather-resistant UV-stabilized PETG shell, high torsional stiffness, tested to withstand 60 km/h wind gusts.",image_url:"/images/mit/material_testing_lab.jpg",featured:0,created_at:"2026-02-12"},{id:"proj-08",title:"Automated Industrial Sorting Gripper with PLC Integration",category:"Robotics",students:"Vinay Kumar, Divya R, Kiran B",usn_list:"4MH22ME140, 4MH22ME025, 4MH22ME063",guide:"Dr. Chethana G. D. (Associate Professor)",academic_year:"2025-2026",technology:"FDM",material:"Tough PLA & TPU",print_time_hours:12.5,dimensions:"175 x 105 x 60 mm",description:"Automated pneumatic-assist mechanical end-effector integrated with PLC and proximity sensors in the technical automation workshop.",features:"Quick-change modular jaw inserts, soft non-marring TPU contact pads, rapid 0.4s actuation cycle.",image_url:"/images/mit/training_plc_scada.png",featured:0,created_at:"2026-01-30"}],[e,n]=re.useState(t),[i,r]=re.useState("All"),[s,o]=re.useState(""),[l,c]=re.useState(null);re.useEffect(()=>{(async()=>{try{const f=await St.getProjects();f&&f.length>0&&n(f)}catch(f){console.warn("Using default authentic MIT Mysore student projects:",f)}})()},[]);const u=["All","Mechanical","Automotive","Gear Systems","Robotics","Industrial","Final-Year Capstone"],h=e.filter(p=>{const f=i==="All"||p.category.toLowerCase()===i.toLowerCase(),g=p.title.toLowerCase().includes(s.toLowerCase())||p.students.toLowerCase().includes(s.toLowerCase())||p.usn_list.toLowerCase().includes(s.toLowerCase())||p.material.toLowerCase().includes(s.toLowerCase());return f&&g});return a.jsxs("section",{id:"projects",className:"py-20 bg-gray-50 border-b border-gray-200 scroll-mt-20",children:[a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(Cx,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"MIT Mysore Student Capstone Prototyping"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Student Project Showcase"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base leading-relaxed",children:"Real mechanical engineering mechanisms, automotive components, and robotics prototypes designed and 3D printed by undergraduate students of MIT Mysore."})]}),a.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4 mb-10",children:[a.jsx("div",{className:"flex flex-wrap items-center gap-2",children:u.map(p=>a.jsx("button",{onClick:()=>r(p),className:`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${i===p?"bg-[#f15a24] text-white shadow-sm font-bold":"bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300"}`,children:p},p))}),a.jsxs("div",{className:"relative w-full md:w-72",children:[a.jsx(Fl,{className:"w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"text",placeholder:"Search title, student USN, material...",value:s,onChange:p=>o(p.target.value),className:"w-full bg-white border border-gray-200 focus:border-[#f15a24] pl-9 pr-4 py-2 rounded-xl text-xs text-gray-900 placeholder-gray-400 focus:outline-none transition shadow-sm"})]})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:h.map(p=>a.jsxs("div",{onClick:()=>c(p),className:"bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-xl hover:border-orange-300 transition-all",children:[a.jsxs("div",{className:"relative h-52 overflow-hidden bg-slate-900",children:[a.jsx("img",{src:p.image_url,alt:p.title,onError:f=>{f.currentTarget.src="/images/mit/mechismos_tech_expo.jpg"},className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),a.jsxs("div",{className:"absolute top-3 left-3 flex items-center gap-2",children:[a.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-white font-bold border border-white/20",children:p.category}),p.featured?a.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-[#f15a24] text-white font-bold shadow-sm",children:"★ Featured"}):null]}),a.jsx("div",{className:"absolute bottom-3 right-3",children:a.jsxs("span",{className:"text-[10px] font-mono px-2.5 py-1 rounded bg-black/80 text-white flex items-center gap-1 border border-white/10",children:[a.jsx(bx,{className:"w-3 h-3 text-orange-400"}),a.jsxs("span",{children:[p.print_time_hours,"h Print"]})]})})]}),a.jsxs("div",{className:"p-6 flex-1 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase tracking-wide group-hover:text-[#f15a24] transition-colors line-clamp-2",children:p.title}),a.jsx("p",{className:"text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4",children:p.description}),a.jsxs("div",{className:"p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs mb-4",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-gray-800 font-medium mb-1",children:[a.jsx(y_,{className:"w-3.5 h-3.5 text-[#f15a24] flex-shrink-0"}),a.jsx("span",{className:"truncate",children:p.students})]}),a.jsx("div",{className:"text-[11px] font-mono text-[#ea580c] truncate",children:p.usn_list})]})]}),a.jsxs("div",{className:"pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-gray-600",children:[a.jsx("span",{className:"text-gray-900 font-bold",children:p.technology}),a.jsx("span",{children:"•"}),a.jsx("span",{className:"text-[#f15a24] truncate max-w-[120px]",children:p.material})]}),a.jsxs("span",{className:"flex items-center gap-1 text-[#f15a24] font-bold group-hover:translate-x-1 transition-transform",children:[a.jsx("span",{children:"Details"}),a.jsx(Ex,{className:"w-3.5 h-3.5"})]})]})]})]},p.id))})]}),l&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm",onClick:()=>c(null),children:a.jsxs("div",{className:"relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",onClick:p=>p.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded bg-orange-100 text-[#f15a24] font-bold",children:l.category}),a.jsxs("span",{className:"text-xs font-mono text-gray-500 font-semibold",children:["ACADEMIC YEAR: ",l.academic_year]})]}),a.jsx("button",{onClick:()=>c(null),className:"p-1.5 rounded-lg text-gray-400 hover:text-gray-800 hover:bg-gray-200 transition",children:a.jsx(Wn,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"overflow-y-auto p-6 flex flex-col gap-5",children:[a.jsxs("div",{className:"relative rounded-2xl overflow-hidden h-64 bg-slate-900",children:[a.jsx("img",{src:l.image_url,alt:l.title,onError:p=>{p.currentTarget.src="/images/mit/mechismos_tech_expo.jpg"},className:"w-full h-full object-cover"}),a.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-5",children:[a.jsx("span",{className:"text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold",children:"MIT MYSORE MECHANICAL PROJECT CASE STUDY"}),a.jsx("h3",{className:"text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide",children:l.title})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-400 mb-1",children:"Project Description"}),a.jsx("p",{className:"text-sm text-gray-700 leading-relaxed",children:l.description})]}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[a.jsxs("div",{className:"p-3 rounded-xl bg-gray-50 border border-gray-100 font-mono",children:[a.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"Technology"}),a.jsx("span",{className:"text-xs font-bold text-gray-900",children:l.technology})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-gray-50 border border-gray-100 font-mono",children:[a.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"Material"}),a.jsx("span",{className:"text-xs font-bold text-[#f15a24]",children:l.material})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-gray-50 border border-gray-100 font-mono",children:[a.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"Print Time"}),a.jsxs("span",{className:"text-xs font-bold text-gray-900",children:[l.print_time_hours," Hours"]})]}),a.jsxs("div",{className:"p-3 rounded-xl bg-gray-50 border border-gray-100 font-mono",children:[a.jsx("span",{className:"text-[10px] text-gray-500 block uppercase",children:"Dimensions"}),a.jsx("span",{className:"text-xs font-bold text-gray-900",children:l.dimensions})]})]}),a.jsxs("div",{className:"p-4 rounded-xl bg-orange-50/70 border border-orange-200",children:[a.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-1.5 flex items-center gap-1.5",children:[a.jsx(nh,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Key Engineering Innovations"})]}),a.jsx("p",{className:"text-xs text-gray-700 leading-relaxed font-mono",children:l.features})]}),a.jsxs("div",{className:"p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block text-[11px]",children:"Student Capstone Authors:"}),a.jsx("span",{className:"font-bold text-gray-900",children:l.students}),a.jsx("span",{className:"text-[#ea580c] font-mono block text-[11px]",children:l.usn_list})]}),a.jsxs("div",{className:"text-left sm:text-right",children:[a.jsx("span",{className:"text-gray-500 block text-[11px]",children:"Faculty Project Guide:"}),a.jsx("span",{className:"font-bold text-[#f15a24]",children:l.guide})]})]})]})]})})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="165",N_=0,Lf=1,R_=2,Nx=1,P_=2,ri=3,Wi=0,nn=1,oi=2,Bi=0,us=1,Df=2,If=3,Uf=4,L_=5,ur=100,D_=101,I_=102,U_=103,k_=104,j_=200,F_=201,O_=202,z_=203,Zu=204,Qu=205,B_=206,H_=207,V_=208,G_=209,W_=210,X_=211,q_=212,Y_=213,$_=214,K_=0,Z_=1,Q_=2,fl=3,J_=4,e1=5,t1=6,n1=7,Rx=0,i1=1,r1=2,Hi=0,s1=1,a1=2,o1=3,l1=4,c1=5,u1=6,d1=7,Px=300,Ss=301,bs=302,Ju=303,ed=304,zl=306,td=1e3,mr=1001,nd=1002,Sn=1003,h1=1004,io=1005,Dn=1006,bc=1007,gr=1008,Xi=1009,f1=1010,p1=1011,pl=1012,Lx=1013,Ms=1014,Li=1015,Bl=1016,Dx=1017,Ix=1018,ws=1020,m1=35902,g1=1021,x1=1022,qn=1023,v1=1024,y1=1025,ds=1026,Es=1027,_1=1028,Ux=1029,S1=1030,kx=1031,jx=1033,Mc=33776,wc=33777,Ec=33778,Tc=33779,kf=35840,jf=35841,Ff=35842,Of=35843,zf=36196,Bf=37492,Hf=37496,Vf=37808,Gf=37809,Wf=37810,Xf=37811,qf=37812,Yf=37813,$f=37814,Kf=37815,Zf=37816,Qf=37817,Jf=37818,ep=37819,tp=37820,np=37821,Ac=36492,ip=36494,rp=36495,b1=36283,sp=36284,ap=36285,op=36286,M1=3200,w1=3201,Fx=0,E1=1,Ni="",Hn="srgb",Zi="srgb-linear",sh="display-p3",Hl="display-p3-linear",ml="linear",ot="srgb",gl="rec709",xl="p3",Cr=7680,lp=519,T1=512,A1=513,C1=514,Ox=515,N1=516,R1=517,P1=518,L1=519,cp=35044,up="300 es",ui=2e3,vl=2001;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,id=180/Math.PI;function Ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function D1(t,e){return(t%e+e)%e}function Nc(t,e,n){return(1-n)*t+n*e}function Vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,l,c,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,c,u)}set(e,n,i,r,s,o,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[3],c=i[6],u=i[1],h=i[4],p=i[7],f=i[2],g=i[5],y=i[8],_=r[0],m=r[3],d=r[6],x=r[1],v=r[4],b=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*_+l*x+c*R,s[3]=o*m+l*v+c*A,s[6]=o*d+l*b+c*T,s[1]=u*_+h*x+p*R,s[4]=u*m+h*v+p*A,s[7]=u*d+h*b+p*T,s[2]=f*_+g*x+y*R,s[5]=f*m+g*v+y*A,s[8]=f*d+g*b+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return n*o*h-n*l*u-i*s*h+i*l*c+r*s*u-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=h*o-l*u,f=l*c-h*s,g=u*s-o*c,y=n*p+i*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=p*_,e[1]=(r*u-h*i)*_,e[2]=(l*i-r*o)*_,e[3]=f*_,e[4]=(h*n-r*c)*_,e[5]=(r*s-l*n)*_,e[6]=g*_,e[7]=(i*c-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*o+u*l)+o+e,-r*u,r*c,-r*(-u*o+c*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new Ve;function zx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function I1(){const t=yl("canvas");return t.style.display="block",t}const dp={};function Bx(t){t in dp||(dp[t]=!0,console.warn(t))}function U1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const hp=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[Zi]:{transfer:ml,primaries:gl,toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:ot,primaries:gl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hl]:{transfer:ml,primaries:xl,toReference:t=>t.applyMatrix3(fp),fromReference:t=>t.applyMatrix3(hp)},[sh]:{transfer:ot,primaries:xl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(fp),fromReference:t=>t.applyMatrix3(hp).convertLinearToSRGB()}},k1=new Set([Zi,Hl]),Qe={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!k1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ro[e].toReference,r=ro[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ro[t].primaries},getTransfer:function(t){return t===Ni?ml:ro[t].transfer}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class j1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=yl("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F1=0;class Hx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(Lc(r[o].image)):s.push(Lc(r[o]))}else s=Lc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Lc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?j1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O1=0;class rn extends Ps{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=mr,r=mr,s=Dn,o=gr,l=qn,c=Xi,u=rn.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=Ia(),this.name="",this.source=new Hx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Px;rn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],g=c[5],y=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,b=(g+1)/2,R=(d+1)/2,A=(h+f)/4,T=(p+_)/4,P=(y+m)/4;return v>b&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-y)*(m-y)+(p-_)*(p-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-y)/x,this.y=(p-_)/x,this.z=(f-h)/x,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z1 extends Ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Hx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends z1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vx extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class B1 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,l){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const f=s[o+0],g=s[o+1],y=s[o+2],_=s[o+3];if(l===0){e[n+0]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(l===1){e[n+0]=f,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(p!==_||c!==f||u!==g||h!==y){let m=1-l;const d=c*f+u*g+h*y+p*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,d*x);m=Math.sin(m*A)/R,l=Math.sin(l*A)/R}const b=l*x;if(c=c*m+f*b,u=u*m+g*b,h=h*m+y*b,p=p*m+_*b,m===1-l){const R=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=R,u*=R,h*=R,p*=R}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[o],f=s[o+1],g=s[o+2],y=s[o+3];return e[n]=l*y+h*p+c*g-u*f,e[n+1]=c*y+h*f+u*p-l*g,e[n+2]=u*y+h*g+l*f-c*p,e[n+3]=h*y-l*p-c*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),p=l(s/2),f=c(i/2),g=c(r/2),y=c(s/2);switch(o){case"XYZ":this._x=f*h*p+u*g*y,this._y=u*g*p-f*h*y,this._z=u*h*y+f*g*p,this._w=u*h*p-f*g*y;break;case"YXZ":this._x=f*h*p+u*g*y,this._y=u*g*p-f*h*y,this._z=u*h*y-f*g*p,this._w=u*h*p+f*g*y;break;case"ZXY":this._x=f*h*p-u*g*y,this._y=u*g*p+f*h*y,this._z=u*h*y+f*g*p,this._w=u*h*p-f*g*y;break;case"ZYX":this._x=f*h*p-u*g*y,this._y=u*g*p+f*h*y,this._z=u*h*y-f*g*p,this._w=u*h*p+f*g*y;break;case"YZX":this._x=f*h*p+u*g*y,this._y=u*g*p+f*h*y,this._z=u*h*y-f*g*p,this._w=u*h*p-f*g*y;break;case"XZY":this._x=f*h*p-u*g*y,this._y=u*g*p-f*h*y,this._z=u*h*y+f*g*p,this._w=u*h*p+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],l=n[5],c=n[9],u=n[2],h=n[6],p=n[10],f=i+l+p;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>l&&i>p){const g=2*Math.sqrt(1+i-l-p);this._w=(h-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(l>p){const g=2*Math.sqrt(1+l-i-p);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+p-i-l);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+o*l+r*u-s*c,this._y=r*h+o*c+s*l-i*u,this._z=s*h+o*u+i*c-r*l,this._w=o*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,l),p=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=o*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*r-l*i),h=2*(l*n-s*r),p=2*(s*i-o*n);return this.x=n+c*u+o*p-l*h,this.y=i+c*h+l*u-s*p,this.z=r+c*p+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*o-i*c,this.z=i*l-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new O,pp=new Ua;class Ls{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),ao.subVectors(this.max,Gs),Rr.subVectors(e.a,Gs),Pr.subVectors(e.b,Gs),Lr.subVectors(e.c,Gs),yi.subVectors(Pr,Rr),_i.subVectors(Lr,Pr),er.subVectors(Rr,Lr);let n=[0,-yi.z,yi.y,0,-_i.z,_i.y,0,-er.z,er.y,yi.z,0,-yi.x,_i.z,0,-_i.x,er.z,0,-er.x,-yi.y,yi.x,0,-_i.y,_i.x,0,-er.y,er.x,0];return!Ic(n,Rr,Pr,Lr,ao)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,Rr,Pr,Lr,ao))?!1:(oo.crossVectors(yi,_i),n=[oo.x,oo.y,oo.z],Ic(n,Rr,Pr,Lr,ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new O,new O,new O,new O,new O,new O,new O,new O],An=new O,so=new Ls,Rr=new O,Pr=new O,Lr=new O,yi=new O,_i=new O,er=new O,Gs=new O,ao=new O,oo=new O,tr=new O;function Ic(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){tr.fromArray(t,s);const l=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),c=e.dot(tr),u=n.dot(tr),h=i.dot(tr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const H1=new Ls,Ws=new O,Uc=new O;class Vl{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):H1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Uc)),this.expandByPoint(Ws.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new O,kc=new O,lo=new O,Si=new O,jc=new O,co=new O,Fc=new O;class Gx{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){kc.copy(e).add(n).multiplyScalar(.5),lo.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(kc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(lo),l=Si.dot(this.direction),c=-Si.dot(lo),u=Si.lengthSq(),h=Math.abs(1-o*o);let p,f,g,y;if(h>0)if(p=o*c-l,f=o*l-c,y=s*h,p>=0)if(f>=-y)if(f<=y){const _=1/h;p*=_,f*=_,g=p*(p+o*f+2*l)+f*(o*p+f+2*c)+u}else f=s,p=Math.max(0,-(o*f+l)),g=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(o*f+l)),g=-p*p+f*(f+2*c)+u;else f<=-y?(p=Math.max(0,-(-o*s+l)),f=p>0?-s:Math.min(Math.max(-s,-c),s),g=-p*p+f*(f+2*c)+u):f<=y?(p=0,f=Math.min(Math.max(-s,-c),s),g=f*(f+2*c)+u):(p=Math.max(0,-(o*s+l)),f=p>0?s:Math.min(Math.max(-s,-c),s),g=-p*p+f*(f+2*c)+u);else f=o>0?-s:s,p=Math.max(0,-(o*f+l)),g=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(kc).addScaledVector(lo,f),g}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,l,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(l=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){jc.subVectors(n,e),co.subVectors(i,e),Fc.crossVectors(jc,co);let o=this.direction.dot(Fc),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Si.subVectors(this.origin,e);const c=l*this.direction.dot(co.crossVectors(Si,co));if(c<0)return null;const u=l*this.direction.dot(jc.cross(Si));if(u<0||c+u>o)return null;const h=-l*Si.dot(Fc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,l,c,u,h,p,f,g,y,_,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,l,c,u,h,p,f,g,y,_,m)}set(e,n,i,r,s,o,l,c,u,h,p,f,g,y,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=l,d[13]=c,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=g,d[7]=y,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=o*h,g=o*p,y=l*h,_=l*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=g+y*u,n[5]=f-_*u,n[9]=-l*c,n[2]=_-f*u,n[6]=y+g*u,n[10]=o*c}else if(e.order==="YXZ"){const f=c*h,g=c*p,y=u*h,_=u*p;n[0]=f+_*l,n[4]=y*l-g,n[8]=o*u,n[1]=o*p,n[5]=o*h,n[9]=-l,n[2]=g*l-y,n[6]=_+f*l,n[10]=o*c}else if(e.order==="ZXY"){const f=c*h,g=c*p,y=u*h,_=u*p;n[0]=f-_*l,n[4]=-o*p,n[8]=y+g*l,n[1]=g+y*l,n[5]=o*h,n[9]=_-f*l,n[2]=-o*u,n[6]=l,n[10]=o*c}else if(e.order==="ZYX"){const f=o*h,g=o*p,y=l*h,_=l*p;n[0]=c*h,n[4]=y*u-g,n[8]=f*u+_,n[1]=c*p,n[5]=_*u+f,n[9]=g*u-y,n[2]=-u,n[6]=l*c,n[10]=o*c}else if(e.order==="YZX"){const f=o*c,g=o*u,y=l*c,_=l*u;n[0]=c*h,n[4]=_-f*p,n[8]=y*p+g,n[1]=p,n[5]=o*h,n[9]=-l*h,n[2]=-u*h,n[6]=g*p+y,n[10]=f-_*p}else if(e.order==="XZY"){const f=o*c,g=o*u,y=l*c,_=l*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=f*p+_,n[5]=o*h,n[9]=g*p-y,n[2]=y*p-g,n[6]=l*h,n[10]=_*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V1,e,G1)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),bi.crossVectors(i,an),bi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),bi.crossVectors(i,an)),bi.normalize(),uo.crossVectors(an,bi),r[0]=bi.x,r[4]=uo.x,r[8]=an.x,r[1]=bi.y,r[5]=uo.y,r[9]=an.y,r[2]=bi.z,r[6]=uo.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],l=i[4],c=i[8],u=i[12],h=i[1],p=i[5],f=i[9],g=i[13],y=i[2],_=i[6],m=i[10],d=i[14],x=i[3],v=i[7],b=i[11],R=i[15],A=r[0],T=r[4],P=r[8],E=r[12],S=r[1],N=r[5],H=r[9],F=r[13],q=r[2],$=r[6],W=r[10],Z=r[14],U=r[3],K=r[7],X=r[11],J=r[15];return s[0]=o*A+l*S+c*q+u*U,s[4]=o*T+l*N+c*$+u*K,s[8]=o*P+l*H+c*W+u*X,s[12]=o*E+l*F+c*Z+u*J,s[1]=h*A+p*S+f*q+g*U,s[5]=h*T+p*N+f*$+g*K,s[9]=h*P+p*H+f*W+g*X,s[13]=h*E+p*F+f*Z+g*J,s[2]=y*A+_*S+m*q+d*U,s[6]=y*T+_*N+m*$+d*K,s[10]=y*P+_*H+m*W+d*X,s[14]=y*E+_*F+m*Z+d*J,s[3]=x*A+v*S+b*q+R*U,s[7]=x*T+v*N+b*$+R*K,s[11]=x*P+v*H+b*W+R*X,s[15]=x*E+v*F+b*Z+R*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],g=e[14],y=e[3],_=e[7],m=e[11],d=e[15];return y*(+s*c*p-r*u*p-s*l*f+i*u*f+r*l*g-i*c*g)+_*(+n*c*g-n*u*f+s*o*f-r*o*g+r*u*h-s*c*h)+m*(+n*u*p-n*l*g-s*o*p+i*o*g+s*l*h-i*u*h)+d*(-r*l*h-n*c*p+n*l*f+r*o*p-i*o*f+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],g=e[11],y=e[12],_=e[13],m=e[14],d=e[15],x=p*m*u-_*f*u+_*c*g-l*m*g-p*c*d+l*f*d,v=y*f*u-h*m*u-y*c*g+o*m*g+h*c*d-o*f*d,b=h*_*u-y*p*u+y*l*g-o*_*g-h*l*d+o*p*d,R=y*p*c-h*_*c-y*l*f+o*_*f+h*l*m-o*p*m,A=n*x+i*v+r*b+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(_*f*s-p*m*s-_*r*g+i*m*g+p*r*d-i*f*d)*T,e[2]=(l*m*s-_*c*s+_*r*u-i*m*u-l*r*d+i*c*d)*T,e[3]=(p*c*s-l*f*s-p*r*u+i*f*u+l*r*g-i*c*g)*T,e[4]=v*T,e[5]=(h*m*s-y*f*s+y*r*g-n*m*g-h*r*d+n*f*d)*T,e[6]=(y*c*s-o*m*s-y*r*u+n*m*u+o*r*d-n*c*d)*T,e[7]=(o*f*s-h*c*s+h*r*u-n*f*u-o*r*g+n*c*g)*T,e[8]=b*T,e[9]=(y*p*s-h*_*s-y*i*g+n*_*g+h*i*d-n*p*d)*T,e[10]=(o*_*s-y*l*s+y*i*u-n*_*u-o*i*d+n*l*d)*T,e[11]=(h*l*s-o*p*s-h*i*u+n*p*u+o*i*g-n*l*g)*T,e[12]=R*T,e[13]=(h*_*r-y*p*r+y*i*f-n*_*f-h*i*m+n*p*m)*T,e[14]=(y*l*r-o*_*r-y*i*c+n*_*c+o*i*m-n*l*m)*T,e[15]=(o*p*r-h*l*r+h*i*c-n*p*c-o*i*f+n*l*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,l=e.y,c=e.z,u=s*o,h=s*l;return this.set(u*o+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*o,0,u*c-r*l,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,l=n._z,c=n._w,u=s+s,h=o+o,p=l+l,f=s*u,g=s*h,y=s*p,_=o*h,m=o*p,d=l*p,x=c*u,v=c*h,b=c*p,R=i.x,A=i.y,T=i.z;return r[0]=(1-(_+d))*R,r[1]=(g+b)*R,r[2]=(y-v)*R,r[3]=0,r[4]=(g-b)*A,r[5]=(1-(f+d))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(y+v)*T,r[9]=(m-x)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const o=Dr.set(r[4],r[5],r[6]).length(),l=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const u=1/s,h=1/o,p=1/l;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=p,Cn.elements[9]*=p,Cn.elements[10]*=p,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,o,l=ui){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let g,y;if(l===ui)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(l===vl)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,l=ui){const c=this.elements,u=1/(n-e),h=1/(i-r),p=1/(o-s),f=(n+e)*u,g=(i+r)*h;let y,_;if(l===ui)y=(o+s)*p,_=-2*p;else if(l===vl)y=s*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new O,Cn=new gt,V1=new O(0,0,0),G1=new O(1,1,1),bi=new O,uo=new O,an=new O,mp=new gt,gp=new Ua;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Wx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W1=0;const xp=new O,Ir=new Ua,ti=new gt,ho=new O,Xs=new O,X1=new O,q1=new Ua,vp=new O(1,0,0),yp=new O(0,1,0),_p=new O(0,0,1),Sp={type:"added"},Y1={type:"removed"},Ur={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Ut extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new O,n=new Zn,i=new Ua,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ve}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(vp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,n){return xp.copy(e).applyQuaternion(this.quaternion),this.position.add(xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ho.copy(e):ho.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Xs,ho,this.up):ti.lookAt(ho,Xs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(ti),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sp),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Y1),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sp),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,X1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,q1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),f=o(e.skeletons),g=o(e.animations),y=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new O(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new O,ni=new O,zc=new O,ii=new O,kr=new O,jr=new O,bp=new O,Bc=new O,Hc=new O,Vc=new O;class Xn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ni.subVectors(i,n),zc.subVectors(e,n);const o=Nn.dot(Nn),l=Nn.dot(ni),c=Nn.dot(zc),u=ni.dot(ni),h=ni.dot(zc),p=o*u-l*l;if(p===0)return s.set(0,0,0),null;const f=1/p,g=(u*c-l*h)*f,y=(o*h-l*c)*f;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,s,o,l,c){return this.getBarycoord(e,n,i,r,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(l,ii.z),c)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ni.subVectors(e,n),Nn.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Nn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,l;kr.subVectors(r,i),jr.subVectors(s,i),Bc.subVectors(e,i);const c=kr.dot(Bc),u=jr.dot(Bc);if(c<=0&&u<=0)return n.copy(i);Hc.subVectors(e,r);const h=kr.dot(Hc),p=jr.dot(Hc);if(h>=0&&p<=h)return n.copy(r);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(kr,o);Vc.subVectors(e,s);const g=kr.dot(Vc),y=jr.dot(Vc);if(y>=0&&g<=y)return n.copy(s);const _=g*u-c*y;if(_<=0&&u>=0&&y<=0)return l=u/(u-y),n.copy(i).addScaledVector(jr,l);const m=h*y-g*p;if(m<=0&&p-h>=0&&g-y>=0)return bp.subVectors(s,r),l=(p-h)/(p-h+(g-y)),n.copy(r).addScaledVector(bp,l);const d=1/(m+_+f);return o=_*d,l=f*d,n.copy(i).addScaledVector(kr,o).addScaledVector(jr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=D1(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Gc(o,s,e+1/3),this.g=Gc(o,s,e),this.b=Gc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=Xx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Zt(zt.r*255,0,255))*65536+Math.round(Zt(zt.g*255,0,255))*256+Math.round(Zt(zt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+o)/2;if(l===o)c=0,u=0;else{const p=o-l;switch(u=h<=.5?p/(o+l):p/(2-o-l),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Hn){Qe.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(fo);const i=Nc(Mi.h,fo.h,n),r=Nc(Mi.s,fo.s,n),s=Nc(Mi.l,fo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Xe;Xe.NAMES=Xx;let $1=0;class Ds extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=us,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zu,this.blendDst=Qu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Qu&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qx extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new O,po=new Ye;class Mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)po.fromBufferAttribute(this,n),po.applyMatrix3(e),this.setXY(n,po.x,po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cp&&(e.usage=this.usage),e}}class Yx extends Mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $x extends Mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends Mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let K1=0;const gn=new gt,Wc=new Ut,Fr=new O,on=new Ls,qs=new Ls,Nt=new O;class jn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zx(e)?$x:Yx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];qs.setFromBufferAttribute(l),this.morphTargetsRelative?(Nt.addVectors(on.min,qs.min),on.expandByPoint(Nt),Nt.addVectors(on.max,qs.max),on.expandByPoint(Nt)):(on.expandByPoint(qs.min),on.expandByPoint(qs.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Nt.fromBufferAttribute(l,u),c&&(Fr.fromBufferAttribute(e,u),Nt.add(Fr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let P=0;P<i.count;P++)l[P]=new O,c[P]=new O;const u=new O,h=new O,p=new O,f=new Ye,g=new Ye,y=new Ye,_=new O,m=new O;function d(P,E,S){u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,S),f.fromBufferAttribute(s,P),g.fromBufferAttribute(s,E),y.fromBufferAttribute(s,S),h.sub(u),p.sub(u),g.sub(f),y.sub(f);const N=1/(g.x*y.y-y.x*g.y);isFinite(N)&&(_.copy(h).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(N),m.copy(p).multiplyScalar(g.x).addScaledVector(h,-y.x).multiplyScalar(N),l[P].add(_),l[E].add(_),l[S].add(_),c[P].add(m),c[E].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,E=x.length;P<E;++P){const S=x[P],N=S.start,H=S.count;for(let F=N,q=N+H;F<q;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new O,b=new O,R=new O,A=new O;function T(P){R.fromBufferAttribute(r,P),A.copy(R);const E=l[P];v.copy(E),v.sub(R.multiplyScalar(R.dot(E))).normalize(),b.crossVectors(A,E);const N=b.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,N)}for(let P=0,E=x.length;P<E;++P){const S=x[P],N=S.start,H=S.count;for(let F=N,q=N+H;F<q;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,l=new O,c=new O,u=new O,h=new O,p=new O;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),l.add(h),c.add(h),u.add(h),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,p=l.normalized,f=new u.constructor(c.length*h);let g=0,y=0;for(let _=0,m=c.length;_<m;_++){l.isInterleavedBufferAttribute?g=c[_]*l.data.stride+l.offset:g=c[_]*h;for(let d=0;d<h;d++)f[y++]=u[g++]}return new Mn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,p=u.length;h<p;h++){const f=u[h],g=e(f,i);c.push(g)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const g=u[p];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,g=p.length;f<g;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mp=new gt,nr=new Gx,mo=new Vl,wp=new O,Or=new O,zr=new O,Br=new O,Xc=new O,go=new O,xo=new Ye,vo=new Ye,yo=new Ye,Ep=new O,Tp=new O,Ap=new O,_o=new O,So=new O;class Yn extends Ut{constructor(e=new jn,n=new qx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){go.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],p=s[c];h!==0&&(Xc.fromBufferAttribute(p,e),o?go.addScaledVector(Xc,h):go.addScaledVector(Xc.sub(n),h))}n.add(go)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(mo.containsPoint(nr.origin)===!1&&(nr.intersectSphere(mo,wp)===null||nr.origin.distanceToSquared(wp)>(e.far-e.near)**2))&&(Mp.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Mp),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){const m=f[y],d=o[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let b=x,R=v;b<R;b+=3){const A=l.getX(b),T=l.getX(b+1),P=l.getX(b+2);r=bo(this,d,e,i,u,h,p,A,T,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=y,d=_;m<d;m+=3){const x=l.getX(m),v=l.getX(m+1),b=l.getX(m+2);r=bo(this,o,e,i,u,h,p,x,v,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){const m=f[y],d=o[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let b=x,R=v;b<R;b+=3){const A=b,T=b+1,P=b+2;r=bo(this,d,e,i,u,h,p,A,T,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let m=y,d=_;m<d;m+=3){const x=m,v=m+1,b=m+2;r=bo(this,o,e,i,u,h,p,x,v,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Z1(t,e,n,i,r,s,o,l){let c;if(e.side===nn?c=i.intersectTriangle(o,s,r,!0,l):c=i.intersectTriangle(r,s,o,e.side===Wi,l),c===null)return null;So.copy(l),So.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(So);return u<n.near||u>n.far?null:{distance:u,point:So.clone(),object:t}}function bo(t,e,n,i,r,s,o,l,c,u){t.getVertexPosition(l,Or),t.getVertexPosition(c,zr),t.getVertexPosition(u,Br);const h=Z1(t,e,n,i,Or,zr,Br,_o);if(h){r&&(xo.fromBufferAttribute(r,l),vo.fromBufferAttribute(r,c),yo.fromBufferAttribute(r,u),h.uv=Xn.getInterpolation(_o,Or,zr,Br,xo,vo,yo,new Ye)),s&&(xo.fromBufferAttribute(s,l),vo.fromBufferAttribute(s,c),yo.fromBufferAttribute(s,u),h.uv1=Xn.getInterpolation(_o,Or,zr,Br,xo,vo,yo,new Ye)),o&&(Ep.fromBufferAttribute(o,l),Tp.fromBufferAttribute(o,c),Ap.fromBufferAttribute(o,u),h.normal=Xn.getInterpolation(_o,Or,zr,Br,Ep,Tp,Ap,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:c,c:u,normal:new O,materialIndex:0};Xn.getNormal(Or,zr,Br,p.normal),h.face=p}return h}class ka extends jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],p=[];let f=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new dn(u,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(p,2));function y(_,m,d,x,v,b,R,A,T,P,E){const S=b/T,N=R/P,H=b/2,F=R/2,q=A/2,$=T+1,W=P+1;let Z=0,U=0;const K=new O;for(let X=0;X<W;X++){const J=X*N-F;for(let _e=0;_e<$;_e++){const Re=_e*S-H;K[_]=Re*x,K[m]=J*v,K[d]=q,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[d]=A>0?1:-1,h.push(K.x,K.y,K.z),p.push(_e/T),p.push(1-X/P),Z+=1}}for(let X=0;X<P;X++)for(let J=0;J<T;J++){const _e=f+J+$*X,Re=f+J+$*(X+1),G=f+(J+1)+$*(X+1),te=f+(J+1)+$*X;c.push(_e,Re,te),c.push(Re,G,te),U+=6}l.addGroup(g,U,E),g+=U,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function Q1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const J1={clone:Ts,merge:Gt};var eS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eS,this.fragmentShader=tS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Zx extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new O,Cp=new Ye,Np=new Ye;class yn extends Zx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,Cp,Np),n.subVectors(Np,Cp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,Vr=1;class nS extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Hr,Vr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Hr,Vr,e,n);s.layers=this.layers,this.add(s);const o=new yn(Hr,Vr,e,n);o.layers=this.layers,this.add(o);const l=new yn(Hr,Vr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Hr,Vr,e,n);c.layers=this.layers,this.add(c);const u=new yn(Hr,Vr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,l,c]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Qx extends rn{constructor(e,n,i,r,s,o,l,c,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,o,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iS extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ka(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Bi});s.uniforms.tEquirect.value=n;const o=new Yn(r,s),l=n.minFilter;return n.minFilter===gr&&(n.minFilter=Dn),new nS(1,10,this).update(e,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const qc=new O,rS=new O,sS=new Ve;class lr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qc.subVectors(i,n).cross(rS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sS.getNormalMatrix(e),r=this.coplanarPoint(qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Vl,Mo=new O;class ah{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],p=r[6],f=r[7],g=r[8],y=r[9],_=r[10],m=r[11],d=r[12],x=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-s,f-u,m-g,b-d).normalize(),i[1].setComponents(c+s,f+u,m+g,b+d).normalize(),i[2].setComponents(c+o,f+h,m+y,b+x).normalize(),i[3].setComponents(c-o,f-h,m-y,b-x).normalize(),i[4].setComponents(c-l,f-p,m-_,b-v).normalize(),n===ui)i[5].setComponents(c+l,f+p,m+_,b+v).normalize();else if(n===vl)i[5].setComponents(l,p,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Mo.x=r.normal.x>0?e.max.x:e.min.x,Mo.y=r.normal.y>0?e.max.y:e.min.y,Mo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function aS(t){const e=new WeakMap;function n(l,c){const u=l.array,h=l.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,u){const h=c.array,p=c._updateRange,f=c.updateRanges;if(t.bindBuffer(u,l),p.count===-1&&f.length===0&&t.bufferSubData(u,0,h),f.length!==0){for(let g=0,y=f.length;g<y;g++){const _=f[g];t.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:o}}class Gl extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,p=e/l,f=n/c,g=[],y=[],_=[],m=[];for(let d=0;d<h;d++){const x=d*f-o;for(let v=0;v<u;v++){const b=v*p-s;y.push(b,-x,0),_.push(0,0,1),m.push(v/l),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<l;x++){const v=x+u*d,b=x+u*(d+1),R=x+1+u*(d+1),A=x+1+u*d;g.push(v,b,A),g.push(b,R,A)}this.setIndex(g),this.setAttribute("position",new dn(y,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var oS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_S=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,RS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,US=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jS="gl_FragColor = linearToOutputTexel( gl_FragColor );",FS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,OS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ab=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:oS,alphahash_pars_fragment:lS,alphamap_fragment:cS,alphamap_pars_fragment:uS,alphatest_fragment:dS,alphatest_pars_fragment:hS,aomap_fragment:fS,aomap_pars_fragment:pS,batching_pars_vertex:mS,batching_vertex:gS,begin_vertex:xS,beginnormal_vertex:vS,bsdfs:yS,iridescence_fragment:_S,bumpmap_pars_fragment:SS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:MS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:ES,color_fragment:TS,color_pars_fragment:AS,color_pars_vertex:CS,color_vertex:NS,common:RS,cube_uv_reflection_fragment:PS,defaultnormal_vertex:LS,displacementmap_pars_vertex:DS,displacementmap_vertex:IS,emissivemap_fragment:US,emissivemap_pars_fragment:kS,colorspace_fragment:jS,colorspace_pars_fragment:FS,envmap_fragment:OS,envmap_common_pars_fragment:zS,envmap_pars_fragment:BS,envmap_pars_vertex:HS,envmap_physical_pars_fragment:JS,envmap_vertex:VS,fog_vertex:GS,fog_pars_vertex:WS,fog_fragment:XS,fog_pars_fragment:qS,gradientmap_pars_fragment:YS,lightmap_pars_fragment:$S,lights_lambert_fragment:KS,lights_lambert_pars_fragment:ZS,lights_pars_begin:QS,lights_toon_fragment:eb,lights_toon_pars_fragment:tb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:rb,lights_physical_pars_fragment:sb,lights_fragment_begin:ab,lights_fragment_maps:ob,lights_fragment_end:lb,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:hb,map_fragment:fb,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:gb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:vb,morphinstance_vertex:yb,morphcolor_vertex:_b,morphnormal_vertex:Sb,morphtarget_pars_vertex:bb,morphtarget_vertex:Mb,normal_fragment_begin:wb,normal_fragment_maps:Eb,normal_pars_fragment:Tb,normal_pars_vertex:Ab,normal_vertex:Cb,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:Pb,clearcoat_pars_fragment:Lb,iridescence_pars_fragment:Db,opaque_fragment:Ib,packing:Ub,premultiplied_alpha_fragment:kb,project_vertex:jb,dithering_fragment:Fb,dithering_pars_fragment:Ob,roughnessmap_fragment:zb,roughnessmap_pars_fragment:Bb,shadowmap_pars_fragment:Hb,shadowmap_pars_vertex:Vb,shadowmap_vertex:Gb,shadowmask_pars_fragment:Wb,skinbase_vertex:Xb,skinning_pars_vertex:qb,skinning_vertex:Yb,skinnormal_vertex:$b,specularmap_fragment:Kb,specularmap_pars_fragment:Zb,tonemapping_fragment:Qb,tonemapping_pars_fragment:Jb,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:rM,worldpos_vertex:sM,background_vert:aM,background_frag:oM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:dM,depth_vert:hM,depth_frag:fM,distanceRGBA_vert:pM,distanceRGBA_frag:mM,equirect_vert:gM,equirect_frag:xM,linedashed_vert:vM,linedashed_frag:yM,meshbasic_vert:_M,meshbasic_frag:SM,meshlambert_vert:bM,meshlambert_frag:MM,meshmatcap_vert:wM,meshmatcap_frag:EM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:CM,meshphong_frag:NM,meshphysical_vert:RM,meshphysical_frag:PM,meshtoon_vert:LM,meshtoon_frag:DM,points_vert:IM,points_frag:UM,shadow_vert:kM,shadow_frag:jM,sprite_vert:FM,sprite_frag:OM},de={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Vn={basic:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Gt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Gt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Gt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Gt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Gt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Gt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Gt([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Gt([de.lights,de.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Vn.physical={uniforms:Gt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const wo={r:0,b:0,g:0},rr=new Zn,zM=new gt;function BM(t,e,n,i,r,s,o){const l=new Xe(0);let c=s===!0?0:1,u,h,p=null,f=0,g=null;function y(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function _(x){let v=!1;const b=y(x);b===null?d(l,c):b&&b.isColor&&(d(b,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const b=y(v);b&&(b.isCubeTexture||b.mapping===zl)?(h===void 0&&(h=new Yn(new ka(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Ts(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),rr.copy(v.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(rr)),h.material.toneMapped=Qe.getTransfer(b.colorSpace)!==ot,(p!==b||f!==b.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,p=b,f=b.version,g=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new Yn(new Gl(2,2),new qi({name:"BackgroundMaterial",uniforms:Ts(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||f!==b.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=b,f=b.version,g=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(wo,Kx(t)),i.buffers.color.setClear(wo.r,wo.g,wo.b,v,o)}return{getClearColor:function(){return l},setClearColor:function(x,v=1){l.set(x),c=v,d(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(l,c)},render:_,addToRenderList:m}}function HM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function l(S,N,H,F,q){let $=!1;const W=p(F,H,N);s!==W&&(s=W,u(s.object)),$=g(S,F,H,q),$&&y(S,F,H,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,b(S,N,H,F),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function p(S,N,H){const F=H.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let $=q[N.id];$===void 0&&($={},q[N.id]=$);let W=$[F];return W===void 0&&(W=f(c()),$[F]=W),W}function f(S){const N=[],H=[],F=[];for(let q=0;q<n;q++)N[q]=0,H[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:F,object:S,attributes:{},index:null}}function g(S,N,H,F){const q=s.attributes,$=N.attributes;let W=0;const Z=H.getAttributes();for(const U in Z)if(Z[U].location>=0){const X=q[U];let J=$[U];if(J===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),X===void 0||X.attribute!==J||J&&X.data!==J.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function y(S,N,H,F){const q={},$=N.attributes;let W=0;const Z=H.getAttributes();for(const U in Z)if(Z[U].location>=0){let X=$[U];X===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const J={};J.attribute=X,X&&X.data&&(J.data=X.data),q[U]=J,W++}s.attributes=q,s.attributesNum=W,s.index=F}function _(){const S=s.newAttributes;for(let N=0,H=S.length;N<H;N++)S[N]=0}function m(S){d(S,0)}function d(S,N){const H=s.newAttributes,F=s.enabledAttributes,q=s.attributeDivisors;H[S]=1,F[S]===0&&(t.enableVertexAttribArray(S),F[S]=1),q[S]!==N&&(t.vertexAttribDivisor(S,N),q[S]=N)}function x(){const S=s.newAttributes,N=s.enabledAttributes;for(let H=0,F=N.length;H<F;H++)N[H]!==S[H]&&(t.disableVertexAttribArray(H),N[H]=0)}function v(S,N,H,F,q,$,W){W===!0?t.vertexAttribIPointer(S,N,H,q,$):t.vertexAttribPointer(S,N,H,F,q,$)}function b(S,N,H,F){_();const q=F.attributes,$=H.getAttributes(),W=N.defaultAttributeValues;for(const Z in $){const U=$[Z];if(U.location>=0){let K=q[Z];if(K===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const X=K.normalized,J=K.itemSize,_e=e.get(K);if(_e===void 0)continue;const Re=_e.buffer,G=_e.type,te=_e.bytesPerElement,pe=G===t.INT||G===t.UNSIGNED_INT||K.gpuType===Lx;if(K.isInterleavedBufferAttribute){const ce=K.data,Oe=ce.stride,Ce=K.offset;if(ce.isInstancedInterleavedBuffer){for(let be=0;be<U.locationSize;be++)d(U.location+be,ce.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let be=0;be<U.locationSize;be++)m(U.location+be);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let be=0;be<U.locationSize;be++)v(U.location+be,J/U.locationSize,G,X,Oe*te,(Ce+J/U.locationSize*be)*te,pe)}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<U.locationSize;ce++)d(U.location+ce,K.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<U.locationSize;ce++)m(U.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let ce=0;ce<U.locationSize;ce++)v(U.location+ce,J/U.locationSize,G,X,J*te,J/U.locationSize*ce*te,pe)}}else if(W!==void 0){const X=W[Z];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(U.location,X);break;case 3:t.vertexAttrib3fv(U.location,X);break;case 4:t.vertexAttrib4fv(U.location,X);break;default:t.vertexAttrib1fv(U.location,X)}}}}x()}function R(){P();for(const S in i){const N=i[S];for(const H in N){const F=N[H];for(const q in F)h(F[q].object),delete F[q];delete N[H]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const H in N){const F=N[H];for(const q in F)h(F[q].object),delete F[q];delete N[H]}delete i[S.id]}function T(S){for(const N in i){const H=i[N];if(H[S.id]===void 0)continue;const F=H[S.id];for(const q in F)h(F[q].object),delete F[q];delete H[S.id]}}function P(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function VM(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function o(u,h,p){p!==0&&(t.drawArraysInstanced(i,u,h,p),n.update(h,i,p))}function l(u,h,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<p;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(i,u,0,h,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y];n.update(g,i,1)}}function c(u,h,p,f){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<u.length;y++)o(u[y],h[y],f[y]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,p);let y=0;for(let _=0;_<p;_++)y+=h[_];for(let _=0;_<f.length;_++)n.update(y,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function GM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==qn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const T=A===Bl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Li&&!T)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:R}}function WM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new lr,l=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const g=p.length!==0||f||i!==0||r;return r=f,i=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,g){const y=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,d=t.get(p);if(!r||y===null||y.length===0||s&&!m)s?h(null):u();else{const x=s?0:i,v=x*4;let b=d.clippingState||null;c.value=b,b=h(y,f,v,g);for(let R=0;R!==v;++R)b[R]=n[R];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,g,y){const _=p!==null?p.length:0;let m=null;if(_!==0){if(m=c.value,y!==!0||m===null){const d=g+_*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,b=g;v!==_;++v,b+=4)o.copy(p[v]).applyMatrix4(x,l),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function XM(t){let e=new WeakMap;function n(o,l){return l===Ju?o.mapping=Ss:l===ed&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===Ju||l===ed)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new iS(c.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class e0 extends Zx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,Rp=[.125,.215,.35,.446,.526,.582],dr=20,Yc=new e0,Pp=new Xe;let $c=null,Kc=0,Zc=0,Qc=!1;const cr=(1+Math.sqrt(5))/2,Gr=1/cr,Lp=[new O(-cr,Gr,0),new O(cr,Gr,0),new O(-Gr,0,cr),new O(Gr,0,cr),new O(0,cr,-Gr),new O(0,cr,Gr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){$c=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Kc,Zc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Bl,format:qn,colorSpace:Zi,depthBuffer:!1},r=Ip(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qM(s)),this._blurMaterial=YM(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,i,r){const l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Pp),h.toneMapping=Hi,h.autoClear=!1;const g=new qx({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),y=new Yn(new ka,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(Pp),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(l.up.set(0,c[d],0),l.lookAt(u[d],0,0)):x===1?(l.up.set(0,0,c[d]),l.lookAt(0,u[d],0)):(l.up.set(0,c[d],0),l.lookAt(0,0,u[d]));const v=this._cubeSize;Eo(r,x*v,d>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Up());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Eo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Lp[(r-s-1)%Lp.length];this._blur(e,s-1,s,o,l)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Yn(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*dr-1),_=s/y,m=isFinite(s)?1+Math.floor(h*_):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const d=[];let x=0;for(let T=0;T<dr;++T){const P=T/_,E=Math.exp(-P*P/2);d.push(E),T===0?x+=E:T<m&&(x+=2*E)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:v}=this;f.dTheta.value=y,f.mipInt.value=v-i;const b=this._sizeLods[r],R=3*b*(r>v-is?r-v+is:0),A=4*(this._cubeSize-b);Eo(n,R,A,3*b,2*b),c.setRenderTarget(n),c.render(p,Yc)}}function qM(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+Rp.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);n.push(l);let c=1/l;o>t-is?c=Rp[o-t+is-1]:o===0&&(c=0),i.push(c);const u=1/(l-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,y=6,_=3,m=2,d=1,x=new Float32Array(_*y*g),v=new Float32Array(m*y*g),b=new Float32Array(d*y*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,P=A>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(E,_*y*A),v.set(f,m*y*A);const S=[A,A,A,A,A,A];b.set(S,d*y*A)}const R=new jn;R.setAttribute("position",new Mn(x,_)),R.setAttribute("uv",new Mn(v,m)),R.setAttribute("faceIndex",new Mn(b,d)),e.push(R),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ip(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YM(t,e,n){const i=new Float32Array(dr),r=new O(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Up(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function kp(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $M(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,u=c===Ju||c===ed,h=c===Ss||c===bs;if(u||h){let p=e.get(l);const f=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return n===null&&(n=new Dp(t)),p=u?n.fromEquirectangular(l,p):n.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const g=l.image;return u&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new Dp(t)),p=u?n.fromEquirectangular(l):n.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",s),p.texture):null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function KM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Bx("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZM(t,e,n,i){const r={},s=new WeakMap;function o(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const _=f.morphAttributes[y];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(p,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const y in f)e.update(f[y],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const _=g[y];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(p){const f=[],g=p.index,y=p.attributes.position;let _=0;if(g!==null){const x=g.array;_=g.version;for(let v=0,b=x.length;v<b;v+=3){const R=x[v+0],A=x[v+1],T=x[v+2];f.push(R,A,A,T,T,R)}}else if(y!==void 0){const x=y.array;_=y.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const R=v+0,A=v+1,T=v+2;f.push(R,A,A,T,T,R)}}else return;const m=new(zx(f)?$x:Yx)(f,1);m.version=_;const d=s.get(p);d&&e.remove(d),s.set(p,m)}function h(p){const f=s.get(p);if(f){const g=p.index;g!==null&&f.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function QM(t,e,n){let i;function r(f){i=f}let s,o;function l(f){s=f.type,o=f.bytesPerElement}function c(f,g){t.drawElements(i,g,s,f*o),n.update(g,i,1)}function u(f,g,y){y!==0&&(t.drawElementsInstanced(i,g,s,f*o,y),n.update(g,i,y))}function h(f,g,y){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<y;m++)this.render(f[m]/o,g[m]);else{_.multiDrawElementsWEBGL(i,g,0,s,f,0,y);let m=0;for(let d=0;d<y;d++)m+=g[d];n.update(m,i,1)}}function p(f,g,y,_){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,g[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,_,0,y);let d=0;for(let x=0;x<y;x++)d+=g[x];for(let x=0;x<_.length;x++)n.update(d,i,_[x])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function JM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ew(t,e,n){const i=new WeakMap,r=new Pt;function s(o,l,c){const u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(l);if(f===void 0||f.count!==p){let S=function(){P.dispose(),i.delete(l),l.removeEventListener("dispose",S)};var g=S;f!==void 0&&f.texture.dispose();const y=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let b=0;y===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let R=l.attributes.position.count*b,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*p),P=new Vx(T,R,A,p);P.type=Li,P.needsUpdate=!0;const E=b*4;for(let N=0;N<p;N++){const H=d[N],F=x[N],q=v[N],$=R*A*4*N;for(let W=0;W<H.count;W++){const Z=W*E;y===!0&&(r.fromBufferAttribute(H,W),T[$+Z+0]=r.x,T[$+Z+1]=r.y,T[$+Z+2]=r.z,T[$+Z+3]=0),_===!0&&(r.fromBufferAttribute(F,W),T[$+Z+4]=r.x,T[$+Z+5]=r.y,T[$+Z+6]=r.z,T[$+Z+7]=0),m===!0&&(r.fromBufferAttribute(q,W),T[$+Z+8]=r.x,T[$+Z+9]=r.y,T[$+Z+10]=r.z,T[$+Z+11]=q.itemSize===4?r.w:1)}}f={count:p,texture:P,size:new Ye(R,A)},i.set(l,f),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let m=0;m<u.length;m++)y+=u[m];const _=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(t,"morphTargetBaseInfluence",_),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function tw(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class t0 extends rn{constructor(e,n,i,r,s,o,l,c,u,h=ds){if(h!==ds&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ds&&(i=Ms),i===void 0&&h===Es&&(i=ws),super(null,r,s,o,l,c,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=l!==void 0?l:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const n0=new rn,i0=new t0(1,1);i0.compareFunction=Ox;const r0=new Vx,s0=new B1,a0=new Qx,jp=[],Fp=[],Op=new Float32Array(16),zp=new Float32Array(9),Bp=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jp[r];if(s===void 0&&(s=new Float32Array(r),jp[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=n,t[o].toArray(s,l)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wl(t,e){let n=Fp[e];n===void 0&&(n=new Int32Array(e),Fp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;Bp.set(i),t.uniformMatrix2fv(this.addr,!1,Bp),Tt(n,i)}}function ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;zp.set(i),t.uniformMatrix3fv(this.addr,!1,zp),Tt(n,i)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;Op.set(i),t.uniformMatrix4fv(this.addr,!1,Op),Tt(n,i)}}function cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?i0:n0;n.setTexture2D(e||s,r)}function vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||s0,r)}function yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||a0,r)}function _w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||r0,r)}function Sw(t){switch(t){case 5126:return nw;case 35664:return iw;case 35665:return rw;case 35666:return sw;case 35674:return aw;case 35675:return ow;case 35676:return lw;case 5124:case 35670:return cw;case 35667:case 35671:return uw;case 35668:case 35672:return dw;case 35669:case 35673:return hw;case 5125:return fw;case 36294:return pw;case 36295:return mw;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return _w}}function bw(t,e){t.uniform1fv(this.addr,e)}function Mw(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function ww(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function Ew(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function Tw(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Aw(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Cw(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Nw(t,e){t.uniform1iv(this.addr,e)}function Rw(t,e){t.uniform2iv(this.addr,e)}function Pw(t,e){t.uniform3iv(this.addr,e)}function Lw(t,e){t.uniform4iv(this.addr,e)}function Dw(t,e){t.uniform1uiv(this.addr,e)}function Iw(t,e){t.uniform2uiv(this.addr,e)}function Uw(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function jw(t,e,n){const i=this.cache,r=e.length,s=Wl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||n0,s[o])}function Fw(t,e,n){const i=this.cache,r=e.length,s=Wl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||s0,s[o])}function Ow(t,e,n){const i=this.cache,r=e.length,s=Wl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a0,s[o])}function zw(t,e,n){const i=this.cache,r=e.length,s=Wl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||r0,s[o])}function Bw(t){switch(t){case 5126:return bw;case 35664:return Mw;case 35665:return ww;case 35666:return Ew;case 35674:return Tw;case 35675:return Aw;case 35676:return Cw;case 5124:case 35670:return Nw;case 35667:case 35671:return Rw;case 35668:case 35672:return Pw;case 35669:case 35673:return Lw;case 5125:return Dw;case 36294:return Iw;case 36295:return Uw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return zw}}class Hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Sw(n.type)}}class Vw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Bw(n.type)}}class Gw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function Hp(t,e){t.seq.push(e),t.map[e.id]=e}function Ww(t,e,n){const i=t.name,r=i.length;for(Jc.lastIndex=0;;){const s=Jc.exec(i),o=Jc.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){Hp(n,u===void 0?new Hw(l,t,e):new Vw(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new Gw(l),Hp(n,p)),n=p}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Ww(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Xw=37297;let qw=0;function Yw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${n[o]}`)}return i.join(`
`)}function $w(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===xl&&n===gl?i="LinearDisplayP3ToLinearSRGB":e===gl&&n===xl&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case Hl:return[i,"LinearTransferOETF"];case Hn:case sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Yw(t.getShaderSource(e),o)}else return r}function Kw(t,e){const n=$w(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Zw(t,e){let n;switch(e){case s1:n="Linear";break;case a1:n="Reinhard";break;case o1:n="OptimizedCineon";break;case l1:n="ACESFilmic";break;case u1:n="AgX";break;case d1:n="Neutral";break;case c1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Qw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Jw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function e2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:l}}return n}function Js(t){return t!==""}function Wp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t2=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(t){return t.replace(t2,i2)}const n2=new Map;function i2(t,e){let n=He[e];if(n===void 0){const i=n2.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const r2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(t){return t.replace(r2,s2)}function s2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===P_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function o2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case bs:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function c2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Rx:e="ENVMAP_BLENDING_MULTIPLY";break;case i1:e="ENVMAP_BLENDING_MIX";break;case r1:e="ENVMAP_BLENDING_ADD";break}return e}function u2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function d2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,l=n.fragmentShader;const c=a2(n),u=o2(n),h=l2(n),p=c2(n),f=u2(n),g=Qw(n),y=Jw(s),_=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Js).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Js).join(`
`),d.length>0&&(d+=`
`)):(m=[Yp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),d=[Yp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?He.tonemapping_pars_fragment:"",n.toneMapping!==Hi?Zw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Kw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),o=rd(o),o=Wp(o,n),o=Xp(o,n),l=rd(l),l=Wp(l,n),l=Xp(l,n),o=qp(o),l=qp(l),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+m+o,b=x+d+l,R=Vp(r,r.VERTEX_SHADER,v),A=Vp(r,r.FRAGMENT_SHADER,b);r.attachShader(_,R),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(N){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(R).trim(),q=r.getShaderInfoLog(A).trim();let $=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,A);else{const Z=Gp(r,R,"vertex"),U=Gp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+Z+`
`+U)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||q==="")&&(W=!1);W&&(N.diagnostics={runnable:$,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(R),r.deleteShader(A),P=new Bo(r,_),E=e2(r,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Xw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let h2=0;class f2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new p2(e),n.set(e,i)),i}}class p2{constructor(e){this.id=h2++,this.code=e,this.usedTimes=0}}function m2(t,e,n,i,r,s,o){const l=new Wx,c=new f2,u=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,N,H,F){const q=H.fog,$=F.geometry,W=E.isMeshStandardMaterial?H.environment:null,Z=(E.isMeshStandardMaterial?n:e).get(E.envMap||W),U=Z&&Z.mapping===zl?Z.image.height:null,K=y[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const X=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,J=X!==void 0?X.length:0;let _e=0;$.morphAttributes.position!==void 0&&(_e=1),$.morphAttributes.normal!==void 0&&(_e=2),$.morphAttributes.color!==void 0&&(_e=3);let Re,G,te,pe;if(K){const tt=Vn[K];Re=tt.vertexShader,G=tt.fragmentShader}else Re=E.vertexShader,G=E.fragmentShader,c.update(E),te=c.getVertexShaderID(E),pe=c.getFragmentShaderID(E);const ce=t.getRenderTarget(),Oe=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,be=!!E.map,L=!!E.matcap,Le=!!Z,je=!!E.aoMap,et=!!E.lightMap,we=!!E.bumpMap,ke=!!E.normalMap,Ie=!!E.displacementMap,Fe=!!E.emissiveMap,st=!!E.metalnessMap,C=!!E.roughnessMap,M=E.anisotropy>0,B=E.clearcoat>0,ee=E.dispersion>0,ne=E.iridescence>0,ie=E.sheen>0,Ee=E.transmission>0,he=M&&!!E.anisotropyMap,fe=B&&!!E.clearcoatMap,ze=B&&!!E.clearcoatNormalMap,oe=B&&!!E.clearcoatRoughnessMap,Se=ne&&!!E.iridescenceMap,Ge=ne&&!!E.iridescenceThicknessMap,D=ie&&!!E.sheenColorMap,se=ie&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,Be=!!E.specularColorMap,it=!!E.specularIntensityMap,I=Ee&&!!E.transmissionMap,me=Ee&&!!E.thicknessMap,Y=!!E.gradientMap,Q=!!E.alphaMap,ue=E.alphaTest>0,De=!!E.alphaHash,$e=!!E.extensions;let xt=Hi;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(xt=t.toneMapping);const At={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:Re,fragmentShader:G,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Zi,alphaToCoverage:!!E.alphaToCoverage,map:be,matcap:L,envMap:Le,envMapMode:Le&&Z.mapping,envMapCubeUVHeight:U,aoMap:je,lightMap:et,bumpMap:we,normalMap:ke,displacementMap:f&&Ie,emissiveMap:Fe,normalMapObjectSpace:ke&&E.normalMapType===E1,normalMapTangentSpace:ke&&E.normalMapType===Fx,metalnessMap:st,roughnessMap:C,anisotropy:M,anisotropyMap:he,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:ze,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ne,iridescenceMap:Se,iridescenceThicknessMap:Ge,sheen:ie,sheenColorMap:D,sheenRoughnessMap:se,specularMap:Ue,specularColorMap:Be,specularIntensityMap:it,transmission:Ee,transmissionMap:I,thicknessMap:me,gradientMap:Y,opaque:E.transparent===!1&&E.blending===us&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:ue,alphaHash:De,combine:E.combine,mapUv:be&&_(E.map.channel),aoMapUv:je&&_(E.aoMap.channel),lightMapUv:et&&_(E.lightMap.channel),bumpMapUv:we&&_(E.bumpMap.channel),normalMapUv:ke&&_(E.normalMap.channel),displacementMapUv:Ie&&_(E.displacementMap.channel),emissiveMapUv:Fe&&_(E.emissiveMap.channel),metalnessMapUv:st&&_(E.metalnessMap.channel),roughnessMapUv:C&&_(E.roughnessMap.channel),anisotropyMapUv:he&&_(E.anisotropyMap.channel),clearcoatMapUv:fe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:D&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:se&&_(E.sheenRoughnessMap.channel),specularMapUv:Ue&&_(E.specularMap.channel),specularColorMapUv:Be&&_(E.specularColorMap.channel),specularIntensityMapUv:it&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:me&&_(E.thicknessMap.channel),alphaMapUv:Q&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ke||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(be||Q),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:be&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===oi,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$e&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return At.vertexUv1s=u.has(1),At.vertexUv2s=u.has(2),At.vertexUv3s=u.has(3),u.clear(),At}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)S.push(N),S.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(x(S,E),v(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function x(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),E.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.skinning&&l.enable(4),S.morphTargets&&l.enable(5),S.morphNormals&&l.enable(6),S.morphColors&&l.enable(7),S.premultipliedAlpha&&l.enable(8),S.shadowMapEnabled&&l.enable(9),S.doubleSided&&l.enable(10),S.flipSided&&l.enable(11),S.useDepthPacking&&l.enable(12),S.dithering&&l.enable(13),S.transmission&&l.enable(14),S.sheen&&l.enable(15),S.opaque&&l.enable(16),S.pointsUvs&&l.enable(17),S.decodeVideoTexture&&l.enable(18),S.alphaToCoverage&&l.enable(19),E.push(l.mask)}function b(E){const S=y[E.type];let N;if(S){const H=Vn[S];N=J1.clone(H.uniforms)}else N=E.uniforms;return N}function R(E,S){let N;for(let H=0,F=h.length;H<F;H++){const q=h[H];if(q.cacheKey===S){N=q,++N.usedTimes;break}}return N===void 0&&(N=new d2(t,S,E,s),h.push(N)),N}function A(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function T(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function g2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function x2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $p(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,f,g,y,_,m){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:g,groupOrder:y,renderOrder:p.renderOrder,z:_,group:m},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=g,d.groupOrder=y,d.renderOrder=p.renderOrder,d.z=_,d.group=m),e++,d}function l(p,f,g,y,_,m){const d=o(p,f,g,y,_,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function c(p,f,g,y,_,m){const d=o(p,f,g,y,_,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,f){n.length>1&&n.sort(p||x2),i.length>1&&i.sort(f||$p),r.length>1&&r.sort(f||$p)}function h(){for(let p=e,f=t.length;p<f;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function v2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Kp,t.set(i,[o])):r>=s.length?(o=new Kp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function y2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Xe};break;case"SpotLight":n={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function _2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let S2=0;function b2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function M2(t){const e=new y2,n=_2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new gt,o=new gt;function l(u){let h=0,p=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,y=0,_=0,m=0,d=0,x=0,v=0,b=0,R=0,A=0,T=0;u.sort(b2);for(let E=0,S=u.length;E<S;E++){const N=u[E],H=N.color,F=N.intensity,q=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=H.r*F,p+=H.g*F,f+=H.b*F;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],F);T++}else if(N.isDirectionalLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Z=N.shadow,U=n.get(N);U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=N.shadow.matrix,x++}i.directional[g]=W,g++}else if(N.isSpotLight){const W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(H).multiplyScalar(F),W.distance=q,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[_]=W;const Z=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,Z.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[_]=Z.matrix,N.castShadow){const U=n.get(N);U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=$,b++}_++}else if(N.isRectAreaLight){const W=e.get(N);W.color.copy(H).multiplyScalar(F),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=W,m++}else if(N.isPointLight){const W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const Z=N.shadow,U=n.get(N);U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,U.shadowCameraNear=Z.camera.near,U.shadowCameraFar=Z.camera.far,i.pointShadow[y]=U,i.pointShadowMap[y]=$,i.pointShadowMatrix[y]=N.shadow.matrix,v++}i.point[y]=W,y++}else if(N.isHemisphereLight){const W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(F),W.groundColor.copy(N.groundColor).multiplyScalar(F),i.hemi[d]=W,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==g||P.pointLength!==y||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==b||P.numSpotMaps!==R||P.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=y,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=g,P.pointLength=y,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=b,P.numSpotMaps=R,P.numLightProbes=T,i.version=S2++)}function c(u,h){let p=0,f=0,g=0,y=0,_=0;const m=h.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const b=i.directional[p];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(v.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const b=i.rectArea[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:l,setupView:c,state:i}}function Zp(t){const e=new M2(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(){e.setup(n)}function c(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function w2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new Zp(t),e.set(r,[l])):s>=o.length?(l=new Zp(t),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class E2 extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T2 extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const A2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N2(t,e,n){let i=new ah;const r=new Ye,s=new Ye,o=new Pt,l=new E2({depthPacking:w1}),c=new T2,u={},h=n.maxTextureSize,p={[Wi]:nn,[nn]:Wi,[oi]:oi},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:A2,fragmentShader:C2}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new jn;y.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yn(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nx;let d=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Bi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=d!==ri&&this.type===ri,q=d===ri&&this.type!==ri;for(let $=0,W=A.length;$<W;$++){const Z=A[$],U=Z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const K=U.getFrameExtents();if(r.multiply(K),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,U.mapSize.y=s.y)),U.map===null||F===!0||q===!0){const J=this.type!==ri?{minFilter:Sn,magFilter:Sn}:{};U.map!==null&&U.map.dispose(),U.map=new wr(r.x,r.y,J),U.map.texture.name=Z.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const X=U.getViewportCount();for(let J=0;J<X;J++){const _e=U.getViewport(J);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),H.viewport(o),U.updateMatrices(Z,J),i=U.getFrustum(),b(T,P,U.camera,Z,this.type)}U.isPointLightShadow!==!0&&this.type===ri&&x(U,P),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,N)};function x(A,T){const P=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,f,_,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,g,_,null)}function v(A,T,P,E){let S=null;const N=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)S=N;else if(S=P.isPointLight===!0?c:l,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=S.uuid,F=T.uuid;let q=u[H];q===void 0&&(q={},u[H]=q);let $=q[F];$===void 0&&($=S.clone(),q[F]=$,T.addEventListener("dispose",R)),S=$}if(S.visible=T.visible,S.wireframe=T.wireframe,E===ri?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:p[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=P}return S}function b(A,T,P,E,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=e.update(A),q=A.material;if(Array.isArray(q)){const $=F.groups;for(let W=0,Z=$.length;W<Z;W++){const U=$[W],K=q[U.materialIndex];if(K&&K.visible){const X=v(A,K,E,S);A.onBeforeShadow(t,A,T,P,F,X,U),t.renderBufferDirect(P,null,F,X,A,U),A.onAfterShadow(t,A,T,P,F,X,U)}}}else if(q.visible){const $=v(A,q,E,S);A.onBeforeShadow(t,A,T,P,F,$,null),t.renderBufferDirect(P,null,F,$,A,null),A.onAfterShadow(t,A,T,P,F,$,null)}}const H=A.children;for(let F=0,q=H.length;F<q;F++)b(H[F],T,P,E,S)}function R(A){A.target.removeEventListener("dispose",R);for(const P in u){const E=u[P],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function R2(t){function e(){let I=!1;const me=new Pt;let Y=null;const Q=new Pt(0,0,0,0);return{setMask:function(ue){Y!==ue&&!I&&(t.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){I=ue},setClear:function(ue,De,$e,xt,At){At===!0&&(ue*=xt,De*=xt,$e*=xt),me.set(ue,De,$e,xt),Q.equals(me)===!1&&(t.clearColor(ue,De,$e,xt),Q.copy(me))},reset:function(){I=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,me=null,Y=null,Q=null;return{setTest:function(ue){ue?pe(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ue){me!==ue&&!I&&(t.depthMask(ue),me=ue)},setFunc:function(ue){if(Y!==ue){switch(ue){case K_:t.depthFunc(t.NEVER);break;case Z_:t.depthFunc(t.ALWAYS);break;case Q_:t.depthFunc(t.LESS);break;case fl:t.depthFunc(t.LEQUAL);break;case J_:t.depthFunc(t.EQUAL);break;case e1:t.depthFunc(t.GEQUAL);break;case t1:t.depthFunc(t.GREATER);break;case n1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=ue}},setLocked:function(ue){I=ue},setClear:function(ue){Q!==ue&&(t.clearDepth(ue),Q=ue)},reset:function(){I=!1,me=null,Y=null,Q=null}}}function i(){let I=!1,me=null,Y=null,Q=null,ue=null,De=null,$e=null,xt=null,At=null;return{setTest:function(tt){I||(tt?pe(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(tt){me!==tt&&!I&&(t.stencilMask(tt),me=tt)},setFunc:function(tt,Fn,On){(Y!==tt||Q!==Fn||ue!==On)&&(t.stencilFunc(tt,Fn,On),Y=tt,Q=Fn,ue=On)},setOp:function(tt,Fn,On){(De!==tt||$e!==Fn||xt!==On)&&(t.stencilOp(tt,Fn,On),De=tt,$e=Fn,xt=On)},setLocked:function(tt){I=tt},setClear:function(tt){At!==tt&&(t.clearStencil(tt),At=tt)},reset:function(){I=!1,me=null,Y=null,Q=null,ue=null,De=null,$e=null,xt=null,At=null}}}const r=new e,s=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,f=[],g=null,y=!1,_=null,m=null,d=null,x=null,v=null,b=null,R=null,A=new Xe(0,0,0),T=0,P=!1,E=null,S=null,N=null,H=null,F=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=W>=2);let U=null,K={};const X=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),_e=new Pt().fromArray(X),Re=new Pt().fromArray(J);function G(I,me,Y,Q){const ue=new Uint8Array(4),De=t.createTexture();t.bindTexture(I,De),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<Y;$e++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(me+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return De}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(fl),we(!1),ke(Lf),pe(t.CULL_FACE),je(Bi);function pe(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function ce(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Oe(I,me){return h[I]!==me?(t.bindFramebuffer(I,me),h[I]=me,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Ce(I,me){let Y=f,Q=!1;if(I){Y=p.get(me),Y===void 0&&(Y=[],p.set(me,Y));const ue=I.textures;if(Y.length!==ue.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let De=0,$e=ue.length;De<$e;De++)Y[De]=t.COLOR_ATTACHMENT0+De;Y.length=ue.length,Q=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,Q=!0);Q&&t.drawBuffers(Y)}function be(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const L={[ur]:t.FUNC_ADD,[D_]:t.FUNC_SUBTRACT,[I_]:t.FUNC_REVERSE_SUBTRACT};L[U_]=t.MIN,L[k_]=t.MAX;const Le={[j_]:t.ZERO,[F_]:t.ONE,[O_]:t.SRC_COLOR,[Zu]:t.SRC_ALPHA,[W_]:t.SRC_ALPHA_SATURATE,[V_]:t.DST_COLOR,[B_]:t.DST_ALPHA,[z_]:t.ONE_MINUS_SRC_COLOR,[Qu]:t.ONE_MINUS_SRC_ALPHA,[G_]:t.ONE_MINUS_DST_COLOR,[H_]:t.ONE_MINUS_DST_ALPHA,[X_]:t.CONSTANT_COLOR,[q_]:t.ONE_MINUS_CONSTANT_COLOR,[Y_]:t.CONSTANT_ALPHA,[$_]:t.ONE_MINUS_CONSTANT_ALPHA};function je(I,me,Y,Q,ue,De,$e,xt,At,tt){if(I===Bi){y===!0&&(ce(t.BLEND),y=!1);return}if(y===!1&&(pe(t.BLEND),y=!0),I!==L_){if(I!==_||tt!==P){if((m!==ur||v!==ur)&&(t.blendEquation(t.FUNC_ADD),m=ur,v=ur),tt)switch(I){case us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Df:t.blendFunc(t.ONE,t.ONE);break;case If:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Uf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Df:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case If:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Uf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,x=null,b=null,R=null,A.set(0,0,0),T=0,_=I,P=tt}return}ue=ue||me,De=De||Y,$e=$e||Q,(me!==m||ue!==v)&&(t.blendEquationSeparate(L[me],L[ue]),m=me,v=ue),(Y!==d||Q!==x||De!==b||$e!==R)&&(t.blendFuncSeparate(Le[Y],Le[Q],Le[De],Le[$e]),d=Y,x=Q,b=De,R=$e),(xt.equals(A)===!1||At!==T)&&(t.blendColor(xt.r,xt.g,xt.b,At),A.copy(xt),T=At),_=I,P=!1}function et(I,me){I.side===oi?ce(t.CULL_FACE):pe(t.CULL_FACE);let Y=I.side===nn;me&&(Y=!Y),we(Y),I.blending===us&&I.transparent===!1?je(Bi):je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Fe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(I){E!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),E=I)}function ke(I){I!==N_?(pe(t.CULL_FACE),I!==S&&(I===Lf?t.cullFace(t.BACK):I===R_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),S=I}function Ie(I){I!==N&&($&&t.lineWidth(I),N=I)}function Fe(I,me,Y){I?(pe(t.POLYGON_OFFSET_FILL),(H!==me||F!==Y)&&(t.polygonOffset(me,Y),H=me,F=Y)):ce(t.POLYGON_OFFSET_FILL)}function st(I){I?pe(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+q-1),U!==I&&(t.activeTexture(I),U=I)}function M(I,me,Y){Y===void 0&&(U===null?Y=t.TEXTURE0+q-1:Y=U);let Q=K[Y];Q===void 0&&(Q={type:void 0,texture:void 0},K[Y]=Q),(Q.type!==I||Q.texture!==me)&&(U!==Y&&(t.activeTexture(Y),U=Y),t.bindTexture(I,me||te[I]),Q.type=I,Q.texture=me)}function B(){const I=K[U];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(I){_e.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),_e.copy(I))}function se(I){Re.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Re.copy(I))}function Ue(I,me){let Y=c.get(me);Y===void 0&&(Y=new WeakMap,c.set(me,Y));let Q=Y.get(I);Q===void 0&&(Q=t.getUniformBlockIndex(me,I.name),Y.set(I,Q))}function Be(I,me){const Q=c.get(me).get(I);l.get(me)!==Q&&(t.uniformBlockBinding(me,Q,I.__bindingPointIndex),l.set(me,Q))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},U=null,K={},h={},p=new WeakMap,f=[],g=null,y=!1,_=null,m=null,d=null,x=null,v=null,b=null,R=null,A=new Xe(0,0,0),T=0,P=!1,E=null,S=null,N=null,H=null,F=null,_e.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:ce,bindFramebuffer:Oe,drawBuffers:Ce,useProgram:be,setBlending:je,setMaterial:et,setFlipSided:we,setCullFace:ke,setLineWidth:Ie,setPolygonOffset:Fe,setScissorTest:st,activeTexture:C,bindTexture:M,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:Se,texImage3D:Ge,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:ze,texStorage3D:oe,texSubImage2D:ie,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:fe,scissor:D,viewport:se,reset:it}}function P2(t,e,n,i,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ye,h=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return g?new OffscreenCanvas(C,M):yl("canvas")}function _(C,M,B){let ee=1;const ne=st(C);if((ne.width>B||ne.height>B)&&(ee=B/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ie=Math.floor(ee*ne.width),Ee=Math.floor(ee*ne.height);p===void 0&&(p=y(ie,Ee));const he=M?y(ie,Ee):p;return he.width=ie,he.height=Ee,he.getContext("2d").drawImage(C,0,0,ie,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ie+"x"+Ee+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Sn&&C.minFilter!==Dn}function d(C){t.generateMipmap(C)}function x(C,M,B,ee,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=M;if(M===t.RED&&(B===t.FLOAT&&(ie=t.R32F),B===t.HALF_FLOAT&&(ie=t.R16F),B===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.R8UI),B===t.UNSIGNED_SHORT&&(ie=t.R16UI),B===t.UNSIGNED_INT&&(ie=t.R32UI),B===t.BYTE&&(ie=t.R8I),B===t.SHORT&&(ie=t.R16I),B===t.INT&&(ie=t.R32I)),M===t.RG&&(B===t.FLOAT&&(ie=t.RG32F),B===t.HALF_FLOAT&&(ie=t.RG16F),B===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.RG8UI),B===t.UNSIGNED_SHORT&&(ie=t.RG16UI),B===t.UNSIGNED_INT&&(ie=t.RG32UI),B===t.BYTE&&(ie=t.RG8I),B===t.SHORT&&(ie=t.RG16I),B===t.INT&&(ie=t.RG32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),M===t.RGBA){const Ee=ne?ml:Qe.getTransfer(ee);B===t.FLOAT&&(ie=t.RGBA32F),B===t.HALF_FLOAT&&(ie=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ie=Ee===ot?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(C,M){let B;return C?M===null||M===Ms||M===ws?B=t.DEPTH24_STENCIL8:M===Li?B=t.DEPTH32F_STENCIL8:M===pl&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ms||M===ws?B=t.DEPTH_COMPONENT24:M===Li?B=t.DEPTH_COMPONENT32F:M===pl&&(B=t.DEPTH_COMPONENT16),B}function b(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==Dn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),E(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const B=C.source,ee=f.get(B);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(C),Object.keys(ee).length===0&&f.delete(B)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const B=C.source,ee=f.get(B);delete ee[M.__cacheKey],o.memory.textures--}function E(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ne=0;ne<M.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=C.textures;for(let ee=0,ne=B.length;ee<ne;ee++){const ie=i.get(B[ee]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(C)}let S=0;function N(){S=0}function H(){const C=S;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),S+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const B=i.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(B,C,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function $(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Re(B,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function W(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Re(B,C,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function Z(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){G(B,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const U={[td]:t.REPEAT,[mr]:t.CLAMP_TO_EDGE,[nd]:t.MIRRORED_REPEAT},K={[Sn]:t.NEAREST,[h1]:t.NEAREST_MIPMAP_NEAREST,[io]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[bc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},X={[T1]:t.NEVER,[L1]:t.ALWAYS,[A1]:t.LESS,[Ox]:t.LEQUAL,[C1]:t.EQUAL,[P1]:t.GEQUAL,[N1]:t.GREATER,[R1]:t.NOTEQUAL};function J(C,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Dn||M.magFilter===bc||M.magFilter===io||M.magFilter===gr||M.minFilter===Dn||M.minFilter===bc||M.minFilter===io||M.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,U[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,U[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,U[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,X[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==io&&M.minFilter!==gr||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function _e(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const ee=M.source;let ne=f.get(ee);ne===void 0&&(ne={},f.set(ee,ne));const ie=F(M);if(ie!==C.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[ie].usedTimes++;const Ee=ne[C.__cacheKey];Ee!==void 0&&(ne[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&P(M)),C.__cacheKey=ie,C.__webglTexture=ne[ie].texture}return B}function Re(C,M,B){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=_e(C,M),ie=M.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+B);const Ee=i.get(ie);if(ie.version!==Ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const he=Qe.getPrimaries(Qe.workingColorSpace),fe=M.colorSpace===Ni?null:Qe.getPrimaries(M.colorSpace),ze=M.colorSpace===Ni||he===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let oe=_(M.image,!1,r.maxTextureSize);oe=Fe(M,oe);const Se=s.convert(M.format,M.colorSpace),Ge=s.convert(M.type);let D=x(M.internalFormat,Se,Ge,M.colorSpace,M.isVideoTexture);J(ee,M);let se;const Ue=M.mipmaps,Be=M.isVideoTexture!==!0,it=Ee.__version===void 0||ne===!0,I=ie.dataReady,me=b(M,oe);if(M.isDepthTexture)D=v(M.format===Es,M.type),it&&(Be?n.texStorage2D(t.TEXTURE_2D,1,D,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,D,oe.width,oe.height,0,Se,Ge,null));else if(M.isDataTexture)if(Ue.length>0){Be&&it&&n.texStorage2D(t.TEXTURE_2D,me,D,Ue[0].width,Ue[0].height);for(let Y=0,Q=Ue.length;Y<Q;Y++)se=Ue[Y],Be?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,se.width,se.height,Se,Ge,se.data):n.texImage2D(t.TEXTURE_2D,Y,D,se.width,se.height,0,Se,Ge,se.data);M.generateMipmaps=!1}else Be?(it&&n.texStorage2D(t.TEXTURE_2D,me,D,oe.width,oe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Se,Ge,oe.data)):n.texImage2D(t.TEXTURE_2D,0,D,oe.width,oe.height,0,Se,Ge,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,D,Ue[0].width,Ue[0].height,oe.depth);for(let Y=0,Q=Ue.length;Y<Q;Y++)if(se=Ue[Y],M.format!==qn)if(Se!==null)if(Be){if(I)if(M.layerUpdates.size>0){for(const ue of M.layerUpdates){const De=se.width*se.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ue,se.width,se.height,1,Se,se.data.slice(De*ue,De*(ue+1)),0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,se.width,se.height,oe.depth,Se,se.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,D,se.width,se.height,oe.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,se.width,se.height,oe.depth,Se,Ge,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,D,se.width,se.height,oe.depth,0,Se,Ge,se.data)}else{Be&&it&&n.texStorage2D(t.TEXTURE_2D,me,D,Ue[0].width,Ue[0].height);for(let Y=0,Q=Ue.length;Y<Q;Y++)se=Ue[Y],M.format!==qn?Se!==null?Be?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,se.width,se.height,Se,se.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,D,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,se.width,se.height,Se,Ge,se.data):n.texImage2D(t.TEXTURE_2D,Y,D,se.width,se.height,0,Se,Ge,se.data)}else if(M.isDataArrayTexture)if(Be){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,D,oe.width,oe.height,oe.depth),I)if(M.layerUpdates.size>0){let Y;switch(Ge){case t.UNSIGNED_BYTE:switch(Se){case t.ALPHA:Y=1;break;case t.LUMINANCE:Y=1;break;case t.LUMINANCE_ALPHA:Y=2;break;case t.RGB:Y=3;break;case t.RGBA:Y=4;break;default:throw new Error(`Unknown texel size for format ${Se}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:Y=1;break;default:throw new Error(`Unknown texel size for type ${Ge}.`)}const Q=oe.width*oe.height*Y;for(const ue of M.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,oe.width,oe.height,1,Se,Ge,oe.data.slice(Q*ue,Q*(ue+1)));M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,Ge,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,D,oe.width,oe.height,oe.depth,0,Se,Ge,oe.data);else if(M.isData3DTexture)Be?(it&&n.texStorage3D(t.TEXTURE_3D,me,D,oe.width,oe.height,oe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,Ge,oe.data)):n.texImage3D(t.TEXTURE_3D,0,D,oe.width,oe.height,oe.depth,0,Se,Ge,oe.data);else if(M.isFramebufferTexture){if(it)if(Be)n.texStorage2D(t.TEXTURE_2D,me,D,oe.width,oe.height);else{let Y=oe.width,Q=oe.height;for(let ue=0;ue<me;ue++)n.texImage2D(t.TEXTURE_2D,ue,D,Y,Q,0,Se,Ge,null),Y>>=1,Q>>=1}}else if(Ue.length>0){if(Be&&it){const Y=st(Ue[0]);n.texStorage2D(t.TEXTURE_2D,me,D,Y.width,Y.height)}for(let Y=0,Q=Ue.length;Y<Q;Y++)se=Ue[Y],Be?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se,Ge,se):n.texImage2D(t.TEXTURE_2D,Y,D,Se,Ge,se);M.generateMipmaps=!1}else if(Be){if(it){const Y=st(oe);n.texStorage2D(t.TEXTURE_2D,me,D,Y.width,Y.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ge,oe)}else n.texImage2D(t.TEXTURE_2D,0,D,Se,Ge,oe);m(M)&&d(ee),Ee.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function G(C,M,B){if(M.image.length!==6)return;const ee=_e(C,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const ie=i.get(ne);if(ne.version!==ie.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const Ee=Qe.getPrimaries(Qe.workingColorSpace),he=M.colorSpace===Ni?null:Qe.getPrimaries(M.colorSpace),fe=M.colorSpace===Ni||Ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ze=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let Q=0;Q<6;Q++)!ze&&!oe?Se[Q]=_(M.image[Q],!0,r.maxCubemapSize):Se[Q]=oe?M.image[Q].image:M.image[Q],Se[Q]=Fe(M,Se[Q]);const Ge=Se[0],D=s.convert(M.format,M.colorSpace),se=s.convert(M.type),Ue=x(M.internalFormat,D,se,M.colorSpace),Be=M.isVideoTexture!==!0,it=ie.__version===void 0||ee===!0,I=ne.dataReady;let me=b(M,Ge);J(t.TEXTURE_CUBE_MAP,M);let Y;if(ze){Be&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ue,Ge.width,Ge.height);for(let Q=0;Q<6;Q++){Y=Se[Q].mipmaps;for(let ue=0;ue<Y.length;ue++){const De=Y[ue];M.format!==qn?D!==null?Be?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,De.width,De.height,D,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,De.width,De.height,D,se,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,Ue,De.width,De.height,0,D,se,De.data)}}}else{if(Y=M.mipmaps,Be&&it){Y.length>0&&me++;const Q=st(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ue,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(oe){Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Se[Q].width,Se[Q].height,D,se,Se[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,Se[Q].width,Se[Q].height,0,D,se,Se[Q].data);for(let ue=0;ue<Y.length;ue++){const $e=Y[ue].image[Q].image;Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,$e.width,$e.height,D,se,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,Ue,$e.width,$e.height,0,D,se,$e.data)}}else{Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,D,se,Se[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,D,se,Se[Q]);for(let ue=0;ue<Y.length;ue++){const De=Y[ue];Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,D,se,De.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,Ue,D,se,De.image[Q])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),ie.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function te(C,M,B,ee,ne,ie){const Ee=s.convert(B.format,B.colorSpace),he=s.convert(B.type),fe=x(B.internalFormat,Ee,he,B.colorSpace);if(!i.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>ie),Se=Math.max(1,M.height>>ie);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ie,fe,oe,Se,M.depth,0,Ee,he,null):n.texImage2D(ne,ie,fe,oe,Se,0,Ee,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ke(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,i.get(B).__webglTexture,0,we(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,i.get(B).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(C,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const ee=M.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,ie=v(M.stencilBuffer,ne),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=we(M);ke(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ie,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,C)}else{const ee=M.textures;for(let ne=0;ne<ee.length;ne++){const ie=ee[ne],Ee=s.convert(ie.format,ie.colorSpace),he=s.convert(ie.type),fe=x(ie.internalFormat,Ee,he,ie.colorSpace),ze=we(M);B&&ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,fe,M.width,M.height):ke(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,ne=we(M);if(M.depthTexture.format===ds)ke(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Es)ke(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Oe(C){const M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=t.createRenderbuffer(),pe(M.__webglDepthbuffer[ee],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),pe(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(C,M,B){const ee=i.get(C);M!==void 0&&te(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Oe(C)}function be(C){const M=C.texture,B=i.get(C),ee=i.get(M);C.addEventListener("dispose",A);const ne=C.textures,ie=C.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),ie){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let fe=0;fe<M.mipmaps.length;fe++)B.__webglFramebuffer[he][fe]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let he=0,fe=ne.length;he<fe;he++){const ze=i.get(ne[he]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&ke(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const fe=ne[he];B.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const ze=s.convert(fe.format,fe.colorSpace),oe=s.convert(fe.type),Se=x(fe.internalFormat,ze,oe,fe.colorSpace,C.isXRRenderTarget===!0),Ge=we(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Se,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,B.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),J(t.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)te(B.__webglFramebuffer[he][fe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else te(B.__webglFramebuffer[he],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let he=0,fe=ne.length;he<fe;he++){const ze=ne[he],oe=i.get(ze);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),J(t.TEXTURE_2D,ze),te(B.__webglFramebuffer,C,ze,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(ze)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ee.__webglTexture),J(he,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)te(B.__webglFramebuffer[fe],C,M,t.COLOR_ATTACHMENT0,he,fe);else te(B.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,he,0);m(M)&&d(he),n.unbindTexture()}C.depthBuffer&&Oe(C)}function L(C){const M=C.textures;for(let B=0,ee=M.length;B<ee;B++){const ne=M[B];if(m(ne)){const ie=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(ne).__webglTexture;n.bindTexture(ie,Ee),d(ie),n.unbindTexture()}}}const Le=[],je=[];function et(C){if(C.samples>0){if(ke(C)===!1){const M=C.textures,B=C.width,ee=C.height;let ne=t.COLOR_BUFFER_BIT;const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(C),he=M.length>1;if(he)for(let fe=0;fe<M.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[fe]);const ze=i.get(M[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,B,ee,0,0,B,ee,ne,t.NEAREST),c===!0&&(Le.length=0,je.length=0,Le.push(t.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Le.push(ie),je.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<M.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[fe]);const ze=i.get(M[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function we(C){return Math.min(r.maxSamples,C.samples)}function ke(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Fe(C,M){const B=C.colorSpace,ee=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Zi&&B!==Ni&&(Qe.getTransfer(B)===ot?(ee!==qn||ne!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Ce,this.setupRenderTarget=be,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ke}function L2(t,e){function n(i,r=Ni){let s;const o=Qe.getTransfer(r);if(i===Xi)return t.UNSIGNED_BYTE;if(i===Dx)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ix)return t.UNSIGNED_SHORT_5_5_5_1;if(i===m1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===f1)return t.BYTE;if(i===p1)return t.SHORT;if(i===pl)return t.UNSIGNED_SHORT;if(i===Lx)return t.INT;if(i===Ms)return t.UNSIGNED_INT;if(i===Li)return t.FLOAT;if(i===Bl)return t.HALF_FLOAT;if(i===g1)return t.ALPHA;if(i===x1)return t.RGB;if(i===qn)return t.RGBA;if(i===v1)return t.LUMINANCE;if(i===y1)return t.LUMINANCE_ALPHA;if(i===ds)return t.DEPTH_COMPONENT;if(i===Es)return t.DEPTH_STENCIL;if(i===_1)return t.RED;if(i===Ux)return t.RED_INTEGER;if(i===S1)return t.RG;if(i===kx)return t.RG_INTEGER;if(i===jx)return t.RGBA_INTEGER;if(i===Mc||i===wc||i===Ec||i===Tc)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kf||i===jf||i===Ff||i===Of)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zf||i===Bf||i===Hf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zf||i===Bf)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vf||i===Gf||i===Wf||i===Xf||i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$f)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ep)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tp)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===np)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ac||i===ip||i===rp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ac)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===b1||i===sp||i===ap||i===op)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ap)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===op)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class D2 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I2={type:"move"};class eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),g=.02,y=.005;u.inputState.pinching&&f>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(I2)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const U2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:U2,fragmentShader:k2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new Gl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class F2 extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,o=null,l="local-floor",c=1,u=null,h=null,p=null,f=null,g=null,y=null;const _=new j2,m=n.getContextAttributes();let d=null,x=null;const v=[],b=[],R=new Ye;let A=null;const T=new yn;T.layers.enable(1),T.viewport=new Pt;const P=new yn;P.layers.enable(2),P.viewport=new Pt;const E=[T,P],S=new D2;S.layers.enable(1),S.layers.enable(2);let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=v[G];return te===void 0&&(te=new eu,v[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=v[G];return te===void 0&&(te=new eu,v[G]=te),te.getGripSpace()},this.getHand=function(G){let te=v[G];return te===void 0&&(te=new eu,v[G]=te),te.getHandSpace()};function F(G){const te=b.indexOf(G.inputSource);if(te===-1)return;const pe=v[te];pe!==void 0&&(pe.update(G.inputSource,G.frame,u||o),pe.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let G=0;G<v.length;G++){const te=b[G];te!==null&&(b[G]=null,v[G].disconnect(te))}N=null,H=null,_.reset(),e.setRenderTarget(d),g=null,f=null,p=null,r=null,x=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new wr(g.framebufferWidth,g.framebufferHeight,{format:qn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,pe=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Es:ds,pe=m.stencil?ws:Ms);const Oe={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new wr(f.textureWidth,f.textureHeight,{format:qn,type:Xi,depthTexture:new t0(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(G){for(let te=0;te<G.removed.length;te++){const pe=G.removed[te],ce=b.indexOf(pe);ce>=0&&(b[ce]=null,v[ce].disconnect(pe))}for(let te=0;te<G.added.length;te++){const pe=G.added[te];let ce=b.indexOf(pe);if(ce===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=b.length){b.push(pe),ce=Ce;break}else if(b[Ce]===null){b[Ce]=pe,ce=Ce;break}if(ce===-1)break}const Oe=v[ce];Oe&&Oe.connect(pe)}}const W=new O,Z=new O;function U(G,te,pe){W.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const ce=W.distanceTo(Z),Oe=te.projectionMatrix.elements,Ce=pe.projectionMatrix.elements,be=Oe[14]/(Oe[10]-1),L=Oe[14]/(Oe[10]+1),Le=(Oe[9]+1)/Oe[5],je=(Oe[9]-1)/Oe[5],et=(Oe[8]-1)/Oe[0],we=(Ce[8]+1)/Ce[0],ke=be*et,Ie=be*we,Fe=ce/(-et+we),st=Fe*-et;te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(st),G.translateZ(Fe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const C=be+Fe,M=L+Fe,B=ke-st,ee=Ie+(ce-st),ne=Le*L/M*C,ie=je*L/M*C;G.projectionMatrix.makePerspective(B,ee,ne,ie,C,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),S.near=P.near=T.near=G.near,S.far=P.far=T.far=G.far,(N!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,H=S.far,T.near=N,T.far=H,P.near=N,P.far=H,T.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());const te=G.parent,pe=S.cameras;K(S,te);for(let ce=0;ce<pe.length;ce++)K(pe[ce],te);pe.length===2?U(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),X(G,S,te)};function X(G,te,pe){pe===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(pe.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=id*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let J=null;function _e(G,te){if(h=te.getViewerPose(u||o),y=te,h!==null){const pe=h.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let ce=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Ce=0;Ce<pe.length;Ce++){const be=pe[Ce];let L=null;if(g!==null)L=g.getViewport(be);else{const je=p.getViewSubImage(f,be);L=je.viewport,Ce===0&&(e.setRenderTargetTextures(x,je.colorTexture,f.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(x))}let Le=E[Ce];Le===void 0&&(Le=new yn,Le.layers.enable(Ce),Le.viewport=new Pt,E[Ce]=Le),Le.matrix.fromArray(be.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(be.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(L.x,L.y,L.width,L.height),Ce===0&&(S.matrix.copy(Le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(Le)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=p.getDepthInformation(pe[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let pe=0;pe<v.length;pe++){const ce=b[pe],Oe=v[pe];ce!==null&&Oe!==void 0&&Oe.update(ce,te,u||o)}J&&J(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),y=null}const Re=new Jx;Re.setAnimationLoop(_e),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}}const sr=new Zn,O2=new gt;function z2(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Kx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&g(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),y(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?c(m,d,x,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,b=x.envMapRotation;v&&(m.envMap.value=v,sr.copy(b),sr.x*=-1,sr.y*=-1,sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),m.envMapRotation.value.setFromMatrix4(O2.makeRotationFromEuler(sr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function B2(t,e,n,i){let r={},s={},o=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const b=v.program;i.uniformBlockBinding(x,b)}function u(x,v){let b=r[x.id];b===void 0&&(y(x),b=h(x),r[x.id]=b,x.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(x,R);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function h(x){const v=p();x.__bindingPointIndex=v;const b=t.createBuffer(),R=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,b),b}function p(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],b=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=b.length;A<T;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let E=0,S=P.length;E<S;E++){const N=P[E];if(g(N,A,E,R)===!0){const H=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let $=0;$<F.length;$++){const W=F[$],Z=_(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,H+q,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,b,R){const A=x.value,T=v+"_"+b;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const P=R[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function y(x){const v=x.uniforms;let b=0;const R=16;for(let T=0,P=v.length;T<P;T++){const E=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,N=E.length;S<N;S++){const H=E[S],F=Array.isArray(H.value)?H.value:[H.value];for(let q=0,$=F.length;q<$;q++){const W=F[q],Z=_(W),U=b%R;U!==0&&R-U<Z.boundary&&(b+=R-U),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=Z.storage}}}const A=b%R;return A>0&&(b+=R-A),x.__size=b,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:u,dispose:d}}class H2{constructor(e={}){const{canvas:n=I1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Hi,this.toneMappingExposure=1;const v=this;let b=!1,R=0,A=0,T=null,P=-1,E=null;const S=new Pt,N=new Pt;let H=null;const F=new Xe(0);let q=0,$=n.width,W=n.height,Z=1,U=null,K=null;const X=new Pt(0,0,$,W),J=new Pt(0,0,$,W);let _e=!1;const Re=new ah;let G=!1,te=!1;const pe=new gt,ce=new O,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function be(){return T===null?Z:1}let L=i;function Le(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rh}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",Y,!1),n.addEventListener("webglcontextcreationerror",Q,!1),L===null){const k="webgl2";if(L=Le(k,w),L===null)throw Le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,et,we,ke,Ie,Fe,st,C,M,B,ee,ne,ie,Ee,he,fe,ze,oe,Se,Ge,D,se,Ue,Be;function it(){je=new KM(L),je.init(),se=new L2(L,je),et=new GM(L,je,e,se),we=new R2(L),ke=new JM(L),Ie=new g2,Fe=new P2(L,je,we,Ie,et,se,ke),st=new XM(v),C=new $M(v),M=new aS(L),Ue=new HM(L,M),B=new ZM(L,M,ke,Ue),ee=new tw(L,B,M,ke),Se=new ew(L,et,Fe),fe=new WM(Ie),ne=new m2(v,st,C,je,et,Ue,fe),ie=new z2(v,Ie),Ee=new v2,he=new w2(je),oe=new BM(v,st,C,we,ee,f,c),ze=new N2(v,ee,et),Be=new B2(L,ke,et,we),Ge=new VM(L,je,ke),D=new QM(L,je,ke),ke.programs=ne.programs,v.capabilities=et,v.extensions=je,v.properties=Ie,v.renderLists=Ee,v.shadowMap=ze,v.state=we,v.info=ke}it();const I=new F2(v,L);this.xr=I,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize($,W,!1))},this.getSize=function(w){return w.set($,W)},this.setSize=function(w,k,z=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,W=k,n.width=Math.floor(w*Z),n.height=Math.floor(k*Z),z===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set($*Z,W*Z).floor()},this.setDrawingBufferSize=function(w,k,z){$=w,W=k,Z=z,n.width=Math.floor(w*z),n.height=Math.floor(k*z),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,k,z,V){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,k,z,V),we.viewport(S.copy(X).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,k,z,V){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,k,z,V),we.scissor(N.copy(J).multiplyScalar(Z).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){we.setScissorTest(_e=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(w=!0,k=!0,z=!0){let V=0;if(w){let j=!1;if(T!==null){const le=T.texture.format;j=le===jx||le===kx||le===Ux}if(j){const le=T.texture.type,ge=le===Xi||le===Ms||le===pl||le===ws||le===Dx||le===Ix,ve=oe.getClearColor(),Me=oe.getClearAlpha(),Ne=ve.r,Pe=ve.g,Ae=ve.b;ge?(g[0]=Ne,g[1]=Pe,g[2]=Ae,g[3]=Me,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Ne,y[1]=Pe,y[2]=Ae,y[3]=Me,L.clearBufferiv(L.COLOR,0,y))}else V|=L.COLOR_BUFFER_BIT}k&&(V|=L.DEPTH_BUFFER_BIT),z&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",Y,!1),n.removeEventListener("webglcontextcreationerror",Q,!1),Ee.dispose(),he.dispose(),Ie.dispose(),st.dispose(),C.dispose(),ee.dispose(),Ue.dispose(),Be.dispose(),ne.dispose(),I.dispose(),I.removeEventListener("sessionstart",Fn),I.removeEventListener("sessionend",On),Qi.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=ke.autoReset,k=ze.enabled,z=ze.autoUpdate,V=ze.needsUpdate,j=ze.type;it(),ke.autoReset=w,ze.enabled=k,ze.autoUpdate=z,ze.needsUpdate=V,ze.type=j}function Q(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const k=w.target;k.removeEventListener("dispose",ue),De(k)}function De(w){$e(w),Ie.remove(w)}function $e(w){const k=Ie.get(w).programs;k!==void 0&&(k.forEach(function(z){ne.releaseProgram(z)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,z,V,j,le){k===null&&(k=Oe);const ge=j.isMesh&&j.matrixWorld.determinant()<0,ve=c0(w,k,z,V,j);we.setMaterial(V,ge);let Me=z.index,Ne=1;if(V.wireframe===!0){if(Me=B.getWireframeAttribute(z),Me===void 0)return;Ne=2}const Pe=z.drawRange,Ae=z.attributes.position;let Ke=Pe.start*Ne,ft=(Pe.start+Pe.count)*Ne;le!==null&&(Ke=Math.max(Ke,le.start*Ne),ft=Math.min(ft,(le.start+le.count)*Ne)),Me!==null?(Ke=Math.max(Ke,0),ft=Math.min(ft,Me.count)):Ae!=null&&(Ke=Math.max(Ke,0),ft=Math.min(ft,Ae.count));const pt=ft-Ke;if(pt<0||pt===1/0)return;Ue.setup(j,V,ve,z,Me);let sn,Ze=Ge;if(Me!==null&&(sn=M.get(Me),Ze=D,Ze.setIndex(sn)),j.isMesh)V.wireframe===!0?(we.setLineWidth(V.wireframeLinewidth*be()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(j.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),we.setLineWidth(Te*be()),j.isLineSegments?Ze.setMode(L.LINES):j.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else j.isPoints?Ze.setMode(L.POINTS):j.isSprite&&Ze.setMode(L.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?Ze.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):Ze.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Ze.renderInstances(Ke,pt,j.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vt=Math.min(z.instanceCount,Te);Ze.renderInstances(Ke,pt,Vt)}else Ze.render(Ke,pt)};function xt(w,k,z){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,Fa(w,k,z),w.side=Wi,w.needsUpdate=!0,Fa(w,k,z),w.side=oi):Fa(w,k,z)}this.compile=function(w,k,z=null){z===null&&(z=w),m=he.get(z),m.init(k),x.push(m),z.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),w!==z&&w.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const V=new Set;return w.traverse(function(j){const le=j.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const ve=le[ge];xt(ve,z,j),V.add(ve)}else xt(le,z,j),V.add(le)}),x.pop(),m=null,V},this.compileAsync=function(w,k,z=null){const V=this.compile(w,k,z);return new Promise(j=>{function le(){if(V.forEach(function(ge){Ie.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){j(w);return}setTimeout(le,10)}je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let At=null;function tt(w){At&&At(w)}function Fn(){Qi.stop()}function On(){Qi.start()}const Qi=new Jx;Qi.setAnimationLoop(tt),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(w){At=w,I.setAnimationLoop(w),w===null?Qi.stop():Qi.start()},I.addEventListener("sessionstart",Fn),I.addEventListener("sessionend",On),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(k),k=I.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,T),m=he.get(w,x.length),m.init(k),x.push(m),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Re.setFromProjectionMatrix(pe),te=this.localClippingEnabled,G=fe.init(this.clippingPlanes,te),_=Ee.get(w,d.length),_.init(),d.push(_),I.enabled===!0&&I.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&Xl(le,k,-1/0,v.sortObjects)}Xl(w,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(U,K),Ce=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,Ce&&oe.addToRenderList(_,w),this.info.render.frame++,G===!0&&fe.beginShadows();const z=m.state.shadowsArray;ze.render(z,w,k),G===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,j=_.transmissive;if(m.setupLights(),k.isArrayCamera){const le=k.cameras;if(j.length>0)for(let ge=0,ve=le.length;ge<ve;ge++){const Me=le[ge];uh(V,j,w,Me)}Ce&&oe.render(w);for(let ge=0,ve=le.length;ge<ve;ge++){const Me=le[ge];ch(_,w,Me,Me.viewport)}}else j.length>0&&uh(V,j,w,k),Ce&&oe.render(w),ch(_,w,k);T!==null&&(Fe.updateMultisampleRenderTarget(T),Fe.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,k),Ue.resetDefaultState(),P=-1,E=null,x.pop(),x.length>0?(m=x[x.length-1],G===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Xl(w,k,z,V){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Re.intersectsSprite(w)){V&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const ge=ee.update(w),ve=w.material;ve.visible&&_.push(w,ge,ve,z,ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Re.intersectsObject(w))){const ge=ee.update(w),ve=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ce.copy(ge.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(ve)){const Me=ge.groups;for(let Ne=0,Pe=Me.length;Ne<Pe;Ne++){const Ae=Me[Ne],Ke=ve[Ae.materialIndex];Ke&&Ke.visible&&_.push(w,ge,Ke,z,ce.z,Ae)}}else ve.visible&&_.push(w,ge,ve,z,ce.z,null)}}const le=w.children;for(let ge=0,ve=le.length;ge<ve;ge++)Xl(le[ge],k,z,V)}function ch(w,k,z,V){const j=w.opaque,le=w.transmissive,ge=w.transparent;m.setupLightsView(z),G===!0&&fe.setGlobalState(v.clippingPlanes,z),V&&we.viewport(S.copy(V)),j.length>0&&ja(j,k,z),le.length>0&&ja(le,k,z),ge.length>0&&ja(ge,k,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function uh(w,k,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new wr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Bl:Xi,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const le=m.state.transmissionRenderTarget[V.id],ge=V.viewport||S;le.setSize(ge.z,ge.w);const ve=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(F),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),Ce?oe.render(z):v.clear();const Me=v.toneMapping;v.toneMapping=Hi;const Ne=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),G===!0&&fe.setGlobalState(v.clippingPlanes,V),ja(w,z,V),Fe.updateMultisampleRenderTarget(le),Fe.updateRenderTargetMipmap(le),je.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Ae=0,Ke=k.length;Ae<Ke;Ae++){const ft=k[Ae],pt=ft.object,sn=ft.geometry,Ze=ft.material,Te=ft.group;if(Ze.side===oi&&pt.layers.test(V.layers)){const Vt=Ze.side;Ze.side=nn,Ze.needsUpdate=!0,dh(pt,z,V,sn,Ze,Te),Ze.side=Vt,Ze.needsUpdate=!0,Pe=!0}}Pe===!0&&(Fe.updateMultisampleRenderTarget(le),Fe.updateRenderTargetMipmap(le))}v.setRenderTarget(ve),v.setClearColor(F,q),Ne!==void 0&&(V.viewport=Ne),v.toneMapping=Me}function ja(w,k,z){const V=k.isScene===!0?k.overrideMaterial:null;for(let j=0,le=w.length;j<le;j++){const ge=w[j],ve=ge.object,Me=ge.geometry,Ne=V===null?ge.material:V,Pe=ge.group;ve.layers.test(z.layers)&&dh(ve,k,z,Me,Ne,Pe)}}function dh(w,k,z,V,j,le){w.onBeforeRender(v,k,z,V,j,le),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(v,k,z,V,w,le),j.transparent===!0&&j.side===oi&&j.forceSinglePass===!1?(j.side=nn,j.needsUpdate=!0,v.renderBufferDirect(z,k,V,j,w,le),j.side=Wi,j.needsUpdate=!0,v.renderBufferDirect(z,k,V,j,w,le),j.side=oi):v.renderBufferDirect(z,k,V,j,w,le),w.onAfterRender(v,k,z,V,j,le)}function Fa(w,k,z){k.isScene!==!0&&(k=Oe);const V=Ie.get(w),j=m.state.lights,le=m.state.shadowsArray,ge=j.state.version,ve=ne.getParameters(w,j.state,le,k,z),Me=ne.getProgramCacheKey(ve);let Ne=V.programs;V.environment=w.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(w.isMeshStandardMaterial?C:st).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",ue),Ne=new Map,V.programs=Ne);let Pe=Ne.get(Me);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===ge)return fh(w,ve),Pe}else ve.uniforms=ne.getUniforms(w),w.onBuild(z,ve,v),w.onBeforeCompile(ve,v),Pe=ne.acquireProgram(ve,Me),Ne.set(Me,Pe),V.uniforms=ve.uniforms;const Ae=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=fe.uniform),fh(w,ve),V.needsLights=d0(w),V.lightsStateVersion=ge,V.needsLights&&(Ae.ambientLightColor.value=j.state.ambient,Ae.lightProbe.value=j.state.probe,Ae.directionalLights.value=j.state.directional,Ae.directionalLightShadows.value=j.state.directionalShadow,Ae.spotLights.value=j.state.spot,Ae.spotLightShadows.value=j.state.spotShadow,Ae.rectAreaLights.value=j.state.rectArea,Ae.ltc_1.value=j.state.rectAreaLTC1,Ae.ltc_2.value=j.state.rectAreaLTC2,Ae.pointLights.value=j.state.point,Ae.pointLightShadows.value=j.state.pointShadow,Ae.hemisphereLights.value=j.state.hemi,Ae.directionalShadowMap.value=j.state.directionalShadowMap,Ae.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ae.spotShadowMap.value=j.state.spotShadowMap,Ae.spotLightMatrix.value=j.state.spotLightMatrix,Ae.spotLightMap.value=j.state.spotLightMap,Ae.pointShadowMap.value=j.state.pointShadowMap,Ae.pointShadowMatrix.value=j.state.pointShadowMatrix),V.currentProgram=Pe,V.uniformsList=null,Pe}function hh(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Bo.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function fh(w,k){const z=Ie.get(w);z.outputColorSpace=k.outputColorSpace,z.batching=k.batching,z.batchingColor=k.batchingColor,z.instancing=k.instancing,z.instancingColor=k.instancingColor,z.instancingMorph=k.instancingMorph,z.skinning=k.skinning,z.morphTargets=k.morphTargets,z.morphNormals=k.morphNormals,z.morphColors=k.morphColors,z.morphTargetsCount=k.morphTargetsCount,z.numClippingPlanes=k.numClippingPlanes,z.numIntersection=k.numClipIntersection,z.vertexAlphas=k.vertexAlphas,z.vertexTangents=k.vertexTangents,z.toneMapping=k.toneMapping}function c0(w,k,z,V,j){k.isScene!==!0&&(k=Oe),Fe.resetTextureUnits();const le=k.fog,ge=V.isMeshStandardMaterial?k.environment:null,ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zi,Me=(V.isMeshStandardMaterial?C:st).get(V.envMap||ge),Ne=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,ft=!!z.morphAttributes.color;let pt=Hi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=v.toneMapping);const sn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=sn!==void 0?sn.length:0,Te=Ie.get(V),Vt=m.state.lights;if(G===!0&&(te===!0||w!==E)){const mn=w===E&&V.id===P;fe.setState(V,w,mn)}let nt=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Vt.state.version||Te.outputColorSpace!==ve||j.isBatchedMesh&&Te.batching===!1||!j.isBatchedMesh&&Te.batching===!0||j.isBatchedMesh&&Te.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Te.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Te.instancing===!1||!j.isInstancedMesh&&Te.instancing===!0||j.isSkinnedMesh&&Te.skinning===!1||!j.isSkinnedMesh&&Te.skinning===!0||j.isInstancedMesh&&Te.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Te.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Te.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Te.instancingMorph===!1&&j.morphTexture!==null||Te.envMap!==Me||V.fog===!0&&Te.fog!==le||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==fe.numPlanes||Te.numIntersection!==fe.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==Pe||Te.morphTargets!==Ae||Te.morphNormals!==Ke||Te.morphColors!==ft||Te.toneMapping!==pt||Te.morphTargetsCount!==Ze)&&(nt=!0):(nt=!0,Te.__version=V.version);let Qn=Te.currentProgram;nt===!0&&(Qn=Fa(V,k,j));let Oa=!1,Ji=!1,ql=!1;const Ct=Qn.getUniforms(),xi=Te.uniforms;if(we.useProgram(Qn.program)&&(Oa=!0,Ji=!0,ql=!0),V.id!==P&&(P=V.id,Ji=!0),Oa||E!==w){Ct.setValue(L,"projectionMatrix",w.projectionMatrix),Ct.setValue(L,"viewMatrix",w.matrixWorldInverse);const mn=Ct.map.cameraPosition;mn!==void 0&&mn.setValue(L,ce.setFromMatrixPosition(w.matrixWorld)),et.logarithmicDepthBuffer&&Ct.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ct.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Ji=!0,ql=!0)}if(j.isSkinnedMesh){Ct.setOptional(L,j,"bindMatrix"),Ct.setOptional(L,j,"bindMatrixInverse");const mn=j.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ct.setValue(L,"boneTexture",mn.boneTexture,Fe))}j.isBatchedMesh&&(Ct.setOptional(L,j,"batchingTexture"),Ct.setValue(L,"batchingTexture",j._matricesTexture,Fe),Ct.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&Ct.setValue(L,"batchingColorTexture",j._colorsTexture,Fe));const Yl=z.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0)&&Se.update(j,z,Qn),(Ji||Te.receiveShadow!==j.receiveShadow)&&(Te.receiveShadow=j.receiveShadow,Ct.setValue(L,"receiveShadow",j.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(xi.envMap.value=Me,xi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(xi.envMapIntensity.value=k.environmentIntensity),Ji&&(Ct.setValue(L,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&u0(xi,ql),le&&V.fog===!0&&ie.refreshFogUniforms(xi,le),ie.refreshMaterialUniforms(xi,V,Z,W,m.state.transmissionRenderTarget[w.id]),Bo.upload(L,hh(Te),xi,Fe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bo.upload(L,hh(Te),xi,Fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ct.setValue(L,"center",j.center),Ct.setValue(L,"modelViewMatrix",j.modelViewMatrix),Ct.setValue(L,"normalMatrix",j.normalMatrix),Ct.setValue(L,"modelMatrix",j.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const mn=V.uniformsGroups;for(let $l=0,h0=mn.length;$l<h0;$l++){const ph=mn[$l];Be.update(ph,Qn),Be.bind(ph,Qn)}}return Qn}function u0(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function d0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,k,z){Ie.get(w.texture).__webglTexture=k,Ie.get(w.depthTexture).__webglTexture=z;const V=Ie.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const z=Ie.get(w);z.__webglFramebuffer=k,z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,z=0){T=w,R=k,A=z;let V=!0,j=null,le=!1,ge=!1;if(w){const Me=Ie.get(w);Me.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):Me.__webglFramebuffer===void 0?Fe.setupRenderTarget(w):Me.__hasExternalTextures&&Fe.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);const Pe=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?j=Pe[k][z]:j=Pe[k],le=!0):w.samples>0&&Fe.useMultisampledRTT(w)===!1?j=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Pe)?j=Pe[z]:j=Pe,S.copy(w.viewport),N.copy(w.scissor),H=w.scissorTest}else S.copy(X).multiplyScalar(Z).floor(),N.copy(J).multiplyScalar(Z).floor(),H=_e;if(we.bindFramebuffer(L.FRAMEBUFFER,j)&&V&&we.drawBuffers(w,j),we.viewport(S),we.scissor(N),we.setScissorTest(H),le){const Me=Ie.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,z)}else if(ge){const Me=Ie.get(w.texture),Ne=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,z||0,Ne)}P=-1},this.readRenderTargetPixels=function(w,k,z,V,j,le,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){we.bindFramebuffer(L.FRAMEBUFFER,ve);try{const Me=w.texture,Ne=Me.format,Pe=Me.type;if(!et.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-V&&z>=0&&z<=w.height-j&&L.readPixels(k,z,V,j,se.convert(Ne),se.convert(Pe),le)}finally{const Me=T!==null?Ie.get(T).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,k,z,V,j,le,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){we.bindFramebuffer(L.FRAMEBUFFER,ve);try{const Me=w.texture,Ne=Me.format,Pe=Me.type;if(!et.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-V&&z>=0&&z<=w.height-j){const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,le.byteLength,L.STREAM_READ),L.readPixels(k,z,V,j,se.convert(Ne),se.convert(Pe),0),L.flush();const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await U1(L,Ke,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,le)}finally{L.deleteBuffer(Ae),L.deleteSync(Ke)}return le}}finally{const Me=T!==null?Ie.get(T).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(w,k=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-z),j=Math.floor(w.image.width*V),le=Math.floor(w.image.height*V),ge=k!==null?k.x:0,ve=k!==null?k.y:0;Fe.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ge,ve,j,le),we.unbindTexture()},this.copyTextureToTexture=function(w,k,z=null,V=null,j=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],k=arguments[2],j=arguments[3]||0,z=null);let le,ge,ve,Me,Ne,Pe;z!==null?(le=z.max.x-z.min.x,ge=z.max.y-z.min.y,ve=z.min.x,Me=z.min.y):(le=w.image.width,ge=w.image.height,ve=0,Me=0),V!==null?(Ne=V.x,Pe=V.y):(Ne=0,Pe=0);const Ae=se.convert(k.format),Ke=se.convert(k.type);Fe.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const ft=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),Vt=w.isCompressedTexture?w.mipmaps[j]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,Me),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,Ne,Pe,le,ge,Ae,Ke,Vt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,Ne,Pe,Vt.width,Vt.height,Ae,Vt.data):L.texSubImage2D(L.TEXTURE_2D,j,Ne,Pe,Ae,Ke,Vt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),j===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,k,z=null,V=null,j=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],k=arguments[3],j=arguments[4]||0);let le,ge,ve,Me,Ne,Pe,Ae,Ke,ft;const pt=w.isCompressedTexture?w.mipmaps[j]:w.image;z!==null?(le=z.max.x-z.min.x,ge=z.max.y-z.min.y,ve=z.max.z-z.min.z,Me=z.min.x,Ne=z.min.y,Pe=z.min.z):(le=pt.width,ge=pt.height,ve=pt.depth,Me=0,Ne=0,Pe=0),V!==null?(Ae=V.x,Ke=V.y,ft=V.z):(Ae=0,Ke=0,ft=0);const sn=se.convert(k.format),Ze=se.convert(k.type);let Te;if(k.isData3DTexture)Fe.setTexture3D(k,0),Te=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Fe.setTexture2DArray(k,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Vt=L.getParameter(L.UNPACK_ROW_LENGTH),nt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=L.getParameter(L.UNPACK_SKIP_PIXELS),Oa=L.getParameter(L.UNPACK_SKIP_ROWS),Ji=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Te,j,Ae,Ke,ft,le,ge,ve,sn,Ze,pt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,j,Ae,Ke,ft,le,ge,ve,sn,pt.data):L.texSubImage3D(Te,j,Ae,Ke,ft,le,ge,ve,sn,Ze,pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Vt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oa),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ji),j===0&&k.generateMipmaps&&L.generateMipmap(Te),we.unbindTexture()},this.initRenderTarget=function(w){Ie.get(w).__webglFramebuffer===void 0&&Fe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Fe.setTextureCube(w,0):w.isData3DTexture?Fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Fe.setTexture2DArray(w,0):Fe.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,we.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sh?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Hl?"display-p3":"srgb"}}class V2 extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class o0 extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _l=new O,Sl=new O,Qp=new gt,Ys=new Gx,Ao=new Vl,tu=new O,Jp=new O;class G2 extends Ut{constructor(e=new jn,n=new o0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_l.fromBufferAttribute(n,r-1),Sl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_l.distanceTo(Sl);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=s,e.ray.intersectsSphere(Ao)===!1)return;Qp.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(Qp);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let _=g,m=y-1;_<m;_+=u){const d=h.getX(_),x=h.getX(_+1),v=Co(this,e,Ys,c,d,x);v&&n.push(v)}if(this.isLineLoop){const _=h.getX(y-1),m=h.getX(g),d=Co(this,e,Ys,c,_,m);d&&n.push(d)}}else{const g=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let _=g,m=y-1;_<m;_+=u){const d=Co(this,e,Ys,c,_,_+1);d&&n.push(d)}if(this.isLineLoop){const _=Co(this,e,Ys,c,y-1,g);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Co(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(_l.fromBufferAttribute(o,r),Sl.fromBufferAttribute(o,s),n.distanceSqToSegment(_l,Sl,tu,Jp)>i)return;tu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(tu);if(!(c<e.near||c>e.far))return{distance:c,point:Jp.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const em=new O,tm=new O;class W2 extends G2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)em.fromBufferAttribute(n,r),tm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+em.distanceTo(tm);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class X2 extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fx,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class l0 extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const nu=new gt,nm=new O,im=new O;class q2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(nm),im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(im),n.updateMatrixWorld(),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Y2 extends q2{constructor(){super(new e0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rm extends l0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Y2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $2 extends l0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class K2 extends W2{constructor(e=10,n=10,i=4473924,r=8947848){i=new Xe(i),r=new Xe(r);const s=n/2,o=e/n,l=e/2,c=[],u=[];for(let f=0,g=0,y=-l;f<=n;f++,y+=o){c.push(-l,0,y,l,0,y),c.push(y,0,-l,y,0,l);const _=f===s?i:r;_.toArray(u,g),g+=3,_.toArray(u,g),g+=3,_.toArray(u,g),g+=3,_.toArray(u,g),g+=3}const h=new jn;h.setAttribute("position",new dn(c,3)),h.setAttribute("color",new dn(u,3));const p=new o0({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);const lh=({isOpen:t,onClose:e,fileUrl:n,file:i,modelName:r})=>{const s=re.useRef(null),[o,l]=re.useState(!0),[c,u]=re.useState(null),[h,p]=re.useState(!1),[f,g]=re.useState("#00e5ff"),[y,_]=re.useState({dimX:0,dimY:0,dimZ:0,volumeCm3:0,weightGrams:0,triangleCount:0}),m=re.useRef({}),d=x=>{if(x.byteLength<84?!1:84+new DataView(x).getUint32(80,!0)*50===x.byteLength){const b=new DataView(x),R=b.getUint32(80,!0),A=84,T=50,P=new Float32Array(R*9),E=new Float32Array(R*9);for(let N=0;N<R;N++){const H=A+N*T,F=b.getFloat32(H,!0),q=b.getFloat32(H+4,!0),$=b.getFloat32(H+8,!0);for(let W=1;W<=3;W++){const Z=H+W*12,U=b.getFloat32(Z,!0),K=b.getFloat32(Z+4,!0),X=b.getFloat32(Z+8,!0),J=N*9+(W-1)*3;P[J]=U,P[J+1]=K,P[J+2]=X,E[J]=F,E[J+1]=q,E[J+2]=$}}const S=new jn;return S.setAttribute("position",new Mn(P,3)),S.setAttribute("normal",new Mn(E,3)),S}else{const R=new TextDecoder("utf-8").decode(x),A=/facet\s+normal\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)/g,T=/vertex\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)/g,P=[],E=[];let S,N;for(;(S=A.exec(R))!==null;){const F=parseFloat(S[1]),q=parseFloat(S[2]),$=parseFloat(S[3]);for(let W=0;W<3;W++)N=T.exec(R),N&&(P.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),E.push(F,q,$))}const H=new jn;return H.setAttribute("position",new dn(P,3)),H.setAttribute("normal",new dn(E,3)),H}};return re.useEffect(()=>{if(!t)return;const x=s.current;if(!x)return;l(!0),u(null);const v=new V2;v.background=new Xe(462372);const b=new yn(45,x.clientWidth/x.clientHeight,.1,2e3);b.position.set(0,50,100);const R=new H2({antialias:!0});R.setSize(x.clientWidth,x.clientHeight),R.setPixelRatio(Math.min(window.devicePixelRatio,2)),R.shadowMap.enabled=!0,x.appendChild(R.domElement);const A=new $2(16777215,1.2);v.add(A);const T=new rm(61695,2.5);T.position.set(100,150,100),v.add(T);const P=new rm(2450411,1.8);P.position.set(-100,50,-100),v.add(P);const E=new K2(200,40,61695,1976635);E.position.y=-.5,v.add(E),m.current={renderer:R,scene:v,camera:b},(async()=>{try{let X;if(i)X=await i.arrayBuffer();else if(n){const Le=await fetch(n);if(!Le.ok)throw new Error("Could not fetch 3D model from server");X=await Le.arrayBuffer()}else throw new Error("No 3D model source provided");const J=d(X);J.computeVertexNormals(),J.center(),J.computeBoundingBox();const _e=J.boundingBox||new Ls,Re=new O;_e.getSize(Re);const G=J.getAttribute("position");let te=0;for(let Le=0;Le<G.count;Le+=3){const je=new O().fromBufferAttribute(G,Le),et=new O().fromBufferAttribute(G,Le+1),we=new O().fromBufferAttribute(G,Le+2);te+=je.dot(et.cross(we))/6}const ce=Math.abs(te)/1e3,Oe=ce*1.24;_({dimX:Math.round(Re.x*10)/10,dimY:Math.round(Re.y*10)/10,dimZ:Math.round(Re.z*10)/10,volumeCm3:Math.max(.1,Math.round(ce*10)/10),weightGrams:Math.max(.5,Math.round(Oe*10)/10),triangleCount:G.count/3});const Ce=new X2({color:new Xe(f),metalness:.35,roughness:.35,wireframe:h}),be=new Yn(J,Ce);be.position.y=Re.y/2,be.castShadow=!0,v.add(be);const L=Math.max(Re.x,Re.y,Re.z,20);b.position.set(L*1.5,L*1.2,L*1.8),b.lookAt(0,Re.y/2,0),m.current.mesh=be,m.current.material=Ce,l(!1)}catch(X){console.error("Error loading STL:",X),u(X.message||"Failed to parse STL file"),l(!1)}})();let N=!1,H=0,F=0;const q=X=>{N=!0,H=X.clientX,F=X.clientY},$=X=>{if(!N||!m.current.mesh)return;const J=X.clientX-H,_e=X.clientY-F;H=X.clientX,F=X.clientY,m.current.mesh.rotation.y+=J*.01,m.current.mesh.rotation.x+=_e*.01},W=()=>{N=!1},Z=X=>{if(X.preventDefault(),!m.current.camera)return;m.current.camera.position.multiplyScalar(X.deltaY>0?1.08:.92)};x.addEventListener("mousedown",q),window.addEventListener("mousemove",$),window.addEventListener("mouseup",W),x.addEventListener("wheel",Z,{passive:!1});let U;const K=()=>{U=requestAnimationFrame(K),!N&&m.current.mesh&&(m.current.mesh.rotation.y+=.003),R.render(v,b)};return K(),()=>{cancelAnimationFrame(U),x.removeEventListener("mousedown",q),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",W),x.removeEventListener("wheel",Z),R.domElement&&x.contains(R.domElement)&&x.removeChild(R.domElement),R.dispose()}},[t,n,i]),re.useEffect(()=>{m.current.material&&(m.current.material.wireframe=h)},[h]),re.useEffect(()=>{m.current.material&&m.current.material.color.set(f)},[f]),t?a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:a.jsxs("div",{className:"relative w-full max-w-4xl bg-[#070e24] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-900/60",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400",children:a.jsx(yx,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[a.jsx("span",{children:"3D Model Inspector"}),a.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"WebGL"})]}),a.jsx("p",{className:"text-xs text-slate-400 font-mono truncate max-w-md",children:r})]})]}),a.jsx("button",{onClick:e,className:"p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition",children:a.jsx(Wn,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"relative flex-1 w-full min-h-[380px] bg-slate-950",children:[a.jsx("div",{ref:s,className:"w-full h-full cursor-grab active:cursor-grabbing"}),o&&a.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 gap-3",children:[a.jsx("div",{className:"w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"}),a.jsx("p",{className:"text-sm font-mono text-cyan-300",children:"Parsing 3D STL Mesh Geometry..."})]}),c&&a.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/90 gap-3",children:[a.jsx(La,{className:"w-10 h-10 text-rose-400"}),a.jsx("p",{className:"text-sm text-rose-300 font-semibold",children:c}),a.jsx("p",{className:"text-xs text-slate-400",children:"Please verify the STL file is valid ASCII or Binary STL."})]}),!o&&!c&&a.jsxs("div",{className:"absolute top-4 left-4 flex flex-col gap-1.5 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-cyan-500/20 text-xs font-mono",children:[a.jsxs("div",{className:"text-cyan-400 font-bold border-b border-cyan-500/20 pb-1 flex items-center gap-1.5",children:[a.jsx(nh,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"ESTIMATED SPECS"})]}),a.jsxs("div",{className:"flex justify-between gap-4 text-slate-300",children:[a.jsx("span",{className:"text-slate-400",children:"Dimensions (X×Y×Z):"}),a.jsxs("span",{className:"text-white font-bold",children:[y.dimX," × ",y.dimY," × ",y.dimZ," mm"]})]}),a.jsxs("div",{className:"flex justify-between gap-4 text-slate-300",children:[a.jsx("span",{className:"text-slate-400",children:"Part Volume:"}),a.jsxs("span",{className:"text-cyan-300",children:[y.volumeCm3," cm³"]})]}),a.jsxs("div",{className:"flex justify-between gap-4 text-slate-300",children:[a.jsx("span",{className:"text-slate-400",children:"Est. PLA Weight:"}),a.jsxs("span",{className:"text-emerald-400 font-semibold",children:["~",y.weightGrams," g"]})]}),a.jsxs("div",{className:"flex justify-between gap-4 text-slate-300",children:[a.jsx("span",{className:"text-slate-400",children:"Triangles:"}),a.jsx("span",{className:"text-slate-200",children:y.triangleCount.toLocaleString()})]})]}),!o&&!c&&a.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between flex-wrap gap-2",children:[a.jsxs("div",{className:"flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800",children:[a.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Color:"}),a.jsx("div",{className:"flex items-center gap-1.5",children:["#00e5ff","#3b82f6","#10b981","#f59e0b","#ec4899","#f8fafc"].map(x=>a.jsx("button",{onClick:()=>g(x),className:`w-5 h-5 rounded-full border transition-transform ${f===x?"scale-125 border-white":"border-transparent hover:scale-110"}`,style:{backgroundColor:x},title:`Select ${x}`},x))})]}),a.jsx("div",{className:"flex items-center gap-2",children:a.jsx("button",{onClick:()=>p(!h),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${h?"bg-cyan-500 text-black border-cyan-400":"bg-black/70 text-slate-300 border-slate-800 hover:border-cyan-500/40"}`,children:h?"Solid View":"Wireframe"})})]})]}),a.jsxs("div",{className:"flex items-center justify-between px-6 py-3 bg-slate-900 border-t border-cyan-500/20 text-xs text-slate-400",children:[a.jsx("span",{children:"Click & drag to rotate • Scroll to zoom"}),n&&a.jsxs("a",{href:n,download:r,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition",children:[a.jsx(wx,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Download File"})]})]})]})}):null},Z2=({onTrackNavigate:t,prefilledService:e,prefilledMaterial:n})=>{const[i,r]=re.useState({student_name:"",usn:"",department:"Mechanical Engineering",year_semester:"4th Year (8th Sem)",email:"",phone:"",project_name:e?`${e} Prototype`:"",technology:"FDM",material:n||"PLA (Polylactic Acid)",quantity:1,dimensions:"",infill_percentage:20,layer_height:.2,additional_instructions:""}),[s,o]=re.useState(null),[l,c]=re.useState(null),[u,h]=re.useState(!1),[p,f]=re.useState(null),[g,y]=re.useState(!1),[_,m]=re.useState(!1),[d,x]=re.useState({}),v=S=>{const{name:N,value:H}=S.target;r(F=>({...F,[N]:H})),d[N]&&x(F=>{const q={...F};return delete q[N],q})},b=S=>{var N;if(c(null),S.target.files&&S.target.files[0]){const H=S.target.files[0],F=[".stl",".obj",".step",".stp",".3mf"],q="."+((N=H.name.split(".").pop())==null?void 0:N.toLowerCase());if(!F.includes(q)){c(`Unsupported format. Please upload STL, OBJ, STEP, or 3MF. (${q})`),o(null);return}if(H.size>50*1024*1024){c("File size exceeds the 50MB laboratory limit."),o(null);return}o(H)}},R=()=>{const S={};return i.student_name.trim()||(S.student_name="Student Name is required"),i.usn.trim()||(S.usn="USN is required (e.g. 4MH21ME001)"),(!i.email.trim()||!i.email.includes("@"))&&(S.email="Valid email is required"),(!i.phone.trim()||i.phone.length<10)&&(S.phone="Valid 10-digit phone number is required"),i.project_name.trim()||(S.project_name="Project Title is required"),x(S),Object.keys(S).length===0},A=async S=>{if(S.preventDefault(),!!R()){h(!0);try{const N=new FormData;Object.entries(i).forEach(([F,q])=>{N.append(F,String(q))}),s&&N.append("file",s);const H=await St.createRequest(N);if(H&&H.request_id)f({requestId:H.request_id,message:H.message||"Request successfully registered!"});else throw new Error("Invalid response")}catch(N){alert(`Submission error: ${N.message||"Server error"}`)}finally{h(!1)}}},T=()=>{p!=null&&p.requestId&&(navigator.clipboard.writeText(p.requestId),m(!0),setTimeout(()=>m(!1),2e3))},P=Math.max(15,Math.round(i.quantity*(i.infill_percentage*.9+20))),E=Math.round(P*(i.technology==="SLA"?6:2.5));return a.jsx("section",{id:"request-printing",className:"py-20 bg-white border-b border-gray-200",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(_s,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Direct Digital Fabrication"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Build Your 3D Printing Quote"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Upload your CAD model (STL, OBJ, STEP, 3MF) to receive instant dimension analysis, filament cost calculation, and production queuing."})]}),p?a.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl text-center max-w-2xl mx-auto",children:[a.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4",children:a.jsx(Rs,{className:"w-8 h-8"})}),a.jsx("h3",{className:"text-2xl font-bold text-gray-900 font-['Rajdhani'] uppercase mb-2",children:"Quote & 3D Print Request Registered!"}),a.jsx("p",{className:"text-gray-600 text-sm mb-6",children:"Your CAD file has been received by the MIT Mysore Additive Manufacturing Laboratory."}),a.jsxs("div",{className:"p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between gap-4 max-w-md mx-auto mb-8",children:[a.jsxs("div",{className:"text-left font-mono",children:[a.jsx("span",{className:"text-[10px] text-gray-500 block uppercase font-medium",children:"Tracking ID:"}),a.jsx("span",{className:"text-lg font-bold text-[#f15a24]",children:p.requestId})]}),a.jsxs("button",{onClick:T,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-orange-200 text-[#f15a24] text-xs font-semibold hover:bg-orange-100 transition",children:[a.jsx(i_,{className:"w-4 h-4"}),a.jsx("span",{children:_?"Copied":"Copy"})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3",children:[a.jsx("button",{onClick:()=>t(p.requestId),className:"px-6 py-2.5 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs uppercase font-mono shadow-md transition",children:"Track Request Status"}),a.jsx("button",{onClick:()=>{f(null),o(null)},className:"px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition",children:"Submit Another Model"})]})]}):a.jsxs("form",{onSubmit:A,className:"bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-lg relative overflow-hidden",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[a.jsxs("div",{className:"md:col-span-2 border-b border-gray-100 pb-3 flex items-center gap-2 text-[#f15a24] font-mono text-xs font-bold uppercase tracking-wider",children:[a.jsx(Ol,{className:"w-4 h-4"}),a.jsx("span",{children:"1. Student & Contact Information"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:["Student Full Name ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",name:"student_name",value:i.student_name,onChange:v,placeholder:"e.g. Abhishek Sharma",className:`w-full bg-gray-50 border ${d.student_name?"border-red-500":"border-gray-200"} focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition`})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:["USN (University Seat Number) ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",name:"usn",value:i.usn,onChange:v,placeholder:"e.g. 4MH21ME005",className:`w-full bg-gray-50 border ${d.usn?"border-red-500":"border-gray-200"} focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 font-mono uppercase focus:outline-none transition`})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:"Department"}),a.jsxs("select",{name:"department",value:i.department,onChange:v,className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition",children:[a.jsx("option",{value:"Mechanical Engineering",children:"Mechanical Engineering"}),a.jsx("option",{value:"Robotics & Automation",children:"Robotics & Automation"}),a.jsx("option",{value:"Civil Engineering",children:"Civil Engineering"}),a.jsx("option",{value:"Electronics & Communication",children:"Electronics & Communication"}),a.jsx("option",{value:"Computer Science",children:"Computer Science"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:"Year / Semester"}),a.jsxs("select",{name:"year_semester",value:i.year_semester,onChange:v,className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition",children:[a.jsx("option",{value:"1st Year (1st/2nd Sem)",children:"1st Year (1st / 2nd Sem)"}),a.jsx("option",{value:"2nd Year (3rd/4th Sem)",children:"2nd Year (3rd / 4th Sem)"}),a.jsx("option",{value:"3rd Year (5th/6th Sem)",children:"3rd Year (5th / 6th Sem)"}),a.jsx("option",{value:"4th Year (7th/8th Sem)",children:"4th Year (7th / 8th Sem - Capstone)"})]})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:["Email Address ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"email",name:"email",value:i.email,onChange:v,placeholder:"student@mitmysore.in",className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:["Mobile / WhatsApp Number ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"tel",name:"phone",value:i.phone,onChange:v,placeholder:"+91 98450 12345",className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"})]}),a.jsxs("div",{className:"md:col-span-2 border-b border-gray-100 pb-3 pt-2 flex items-center gap-2 text-[#f15a24] font-mono text-xs font-bold uppercase tracking-wider",children:[a.jsx(_s,{className:"w-4 h-4"}),a.jsx("span",{children:"2. Component Specifications & Material Selection"})]}),a.jsxs("div",{className:"md:col-span-2",children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:["Project Title / Component Name ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",name:"project_name",value:i.project_name,onChange:v,placeholder:"e.g. Planetary Gear Reducer Carrier",className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:"Printing Technology"}),a.jsxs("select",{name:"technology",value:i.technology,onChange:v,className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 font-mono focus:outline-none transition",children:[a.jsx("option",{value:"FDM",children:"FDM – Fused Deposition Modeling (Thermoplastics)"}),a.jsx("option",{value:"SLA",children:"SLA – Stereolithography (Ultra-Smooth UV Resin)"}),a.jsx("option",{value:"SLS",children:"SLS – Selective Laser Sintering (Nylon PA12)"}),a.jsx("option",{value:"DLP",children:"DLP – Digital Light Processing"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:"Material Selection"}),a.jsxs("select",{name:"material",value:i.material,onChange:v,className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 font-mono focus:outline-none transition",children:[a.jsx("option",{value:"PLA (Polylactic Acid)",children:"PLA (Polylactic Acid) – Standard Prototyping"}),a.jsx("option",{value:"ABS (Acrylonitrile Butadiene Styrene)",children:"ABS – High Impact & Heat (98°C)"}),a.jsx("option",{value:"PETG (Polyethylene Terephthalate Glycol)",children:"PETG – Durable & Chemical Resistant"}),a.jsx("option",{value:"TPU 95A (Thermoplastic Polyurethane)",children:"TPU 95A – Flexible Elastomer"}),a.jsx("option",{value:"Tough Photopolymer Resin",children:"Tough Photopolymer Resin (25-micron SLA)"}),a.jsx("option",{value:"Nylon PA12",children:"Nylon PA12 – High Fatigue Gears"}),a.jsx("option",{value:"Carbon Fiber PLA (CF-PLA)",children:"Carbon Fiber PLA – Structural Rigidity"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium",children:"Quantity Required (Units)"}),a.jsx("input",{type:"number",min:"1",max:"20",name:"quantity",value:i.quantity,onChange:v,className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 font-mono focus:outline-none transition"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1.5 font-medium flex justify-between",children:[a.jsx("span",{children:"Infill Density (%):"}),a.jsxs("span",{className:"text-[#f15a24] font-bold",children:[i.infill_percentage,"%"]})]}),a.jsx("input",{type:"range",min:"10",max:"100",step:"5",name:"infill_percentage",value:i.infill_percentage,onChange:v,className:"w-full accent-[#f15a24] cursor-pointer"})]}),a.jsxs("div",{className:"md:col-span-2 border-b border-gray-100 pb-3 pt-2 flex items-center justify-between text-[#f15a24] font-mono text-xs font-bold uppercase tracking-wider",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Nf,{className:"w-4 h-4"}),a.jsx("span",{children:"3. Upload 3D CAD Model (STL, OBJ, STEP, 3MF)"})]}),a.jsx("span",{className:"text-[10px] text-gray-400",children:"Max 50MB"})]}),a.jsx("div",{className:"md:col-span-2",children:a.jsxs("div",{className:"border-2 border-dashed border-gray-300 hover:border-[#f15a24] rounded-2xl p-6 text-center bg-gray-50 hover:bg-orange-50/20 transition-all flex flex-col items-center justify-center",children:[a.jsx(Nf,{className:"w-10 h-10 text-[#f15a24] mb-2"}),a.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-1",children:s?s.name:"Drag and drop your 3D CAD file here, or click Browse"}),a.jsx("p",{className:"text-xs text-gray-500 font-mono mb-3",children:"Accepts .STL, .OBJ, .STEP, .3MF (Recommended: Binary STL)"}),a.jsx("input",{type:"file",id:"file-upload",accept:".stl,.obj,.step,.stp,.3mf",onChange:b,className:"hidden"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsx("label",{htmlFor:"file-upload",className:"px-4 py-2 rounded-xl bg-gray-800 hover:bg-black text-white text-xs font-mono font-bold cursor-pointer transition",children:s?"Change File":"Browse Files"}),s&&s.name.toLowerCase().endsWith(".stl")&&a.jsxs("button",{type:"button",onClick:()=>y(!0),className:"px-4 py-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-[#ea580c] text-xs font-mono font-bold flex items-center gap-2 transition",children:[a.jsx(eh,{className:"w-4 h-4"}),a.jsx("span",{children:"Interactive 3D WebGL Preview"})]})]}),l&&a.jsxs("div",{className:"mt-3 text-xs font-mono text-red-500 flex items-center gap-1",children:[a.jsx(La,{className:"w-4 h-4"}),a.jsx("span",{children:l})]})]})}),a.jsxs("div",{className:"md:col-span-2 p-4 rounded-xl bg-orange-50 border border-orange-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs",children:[a.jsxs("div",{className:"flex items-center gap-2 text-gray-800 font-bold",children:[a.jsx(Ky,{className:"w-4 h-4 text-[#f15a24]"}),a.jsx("span",{children:"PRELIMINARY ESTIMATION:"})]}),a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block text-[10px]",children:"EST. FILAMENT:"}),a.jsxs("span",{className:"text-gray-900 font-bold",children:["~",P," g"]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block text-[10px]",children:"EST. TIME:"}),a.jsxs("span",{className:"text-gray-900 font-bold",children:["~",Math.max(2,Math.round(P/14))," hrs"]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block text-[10px]",children:"LAB COST:"}),a.jsxs("span",{className:"text-[#f15a24] font-bold text-sm",children:["~₹",E]})]})]})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100",children:[a.jsx("span",{className:"text-xs text-gray-500",children:"A unique tracking reference code will be generated immediately upon submission."}),a.jsx("button",{type:"submit",disabled:u,className:"w-full sm:w-auto px-8 py-3 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition disabled:opacity-50",children:u?a.jsx("span",{children:"Registering..."}):a.jsxs(a.Fragment,{children:[a.jsx(Da,{className:"w-4 h-4"}),a.jsx("span",{children:"Submit Request & Generate Quote"})]})})]})]}),s&&g&&a.jsx(lh,{isOpen:g,onClose:()=>y(!1),file:s,modelName:s.name})]})})},Q2=({initialQuery:t,onRequestNew:e})=>{const[n,i]=re.useState(t||""),[r,s]=re.useState(!1),[o,l]=re.useState(null),[c,u]=re.useState(null),[h,p]=re.useState(!1),[f,g]=re.useState(null);re.useEffect(()=>{t&&y(t)},[t]);const y=async d=>{const x=(d||n).trim();if(!x){u("Please enter a Request ID (e.g. MITM-2026-0101) or USN.");return}s(!0),u(null),l(null);try{const v=await St.trackRequest(x);v&&v.length>0?l(v):u(`No active requests found for "${x}".`)}catch(v){u(v.message||"No requests found matching this ID or USN.")}finally{s(!1)}},_=["Submitted","Under Review","Slicing & Approved","Queued for Printing","Printing in Progress","Post-Processing","Ready for Pickup","Completed"],m=d=>{const x=_.indexOf(d);return x>=0?x:0};return a.jsx("section",{id:"track",className:"py-20 bg-gray-50 border-b border-gray-200",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(Gy,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Manufacturing Tracking"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Track 3D Printing Status"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Check real-time production stages, view slicing notes, and check pickup readiness."})]}),a.jsxs("div",{className:"max-w-2xl mx-auto mb-12",children:[a.jsxs("form",{onSubmit:d=>{d.preventDefault(),y()},className:"flex items-center gap-2 p-2 rounded-2xl bg-white border border-gray-300 shadow-md",children:[a.jsx("div",{className:"pl-3 text-[#f15a24]",children:a.jsx(Fl,{className:"w-5 h-5"})}),a.jsx("input",{type:"text",placeholder:"Enter Request ID (MITM-2026-XXXX) or Student USN (e.g. 4MH21ME005)...",value:n,onChange:d=>i(d.target.value),className:"w-full bg-transparent border-none text-sm text-gray-900 placeholder-gray-400 focus:outline-none px-2 font-mono"}),a.jsx("button",{type:"submit",disabled:r,className:"px-6 py-2.5 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs uppercase font-mono tracking-wider transition shadow-sm disabled:opacity-50",children:r?"Searching...":"Search"})]}),a.jsxs("div",{className:"flex items-center justify-center gap-2 mt-3 text-xs font-mono text-gray-500",children:[a.jsx("span",{children:"Quick sample searches:"}),a.jsx("button",{onClick:()=>{i("MITM-2026-0101"),y("MITM-2026-0101")},className:"text-[#f15a24] hover:underline",children:"MITM-2026-0101"}),a.jsx("span",{children:"•"}),a.jsx("button",{onClick:()=>{i("4MH22ME045"),y("4MH22ME045")},className:"text-[#f15a24] hover:underline",children:"4MH22ME045 (Ready)"})]})]}),c&&a.jsxs("div",{className:"p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-3 max-w-2xl mx-auto mb-8",children:[a.jsx(La,{className:"w-5 h-5 flex-shrink-0 text-red-500"}),a.jsx("span",{children:c})]}),o&&o.length>0&&a.jsx("div",{className:"flex flex-col gap-6",children:o.map(d=>{const x=m(d.status);return a.jsxs("div",{className:"bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-md relative overflow-hidden",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-6",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-orange-100 text-[#f15a24] flex items-center justify-center",children:a.jsx(_s,{className:"w-6 h-6"})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-xl font-bold text-gray-900 font-mono",children:d.id}),a.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-mono",children:d.usn})]}),a.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:d.project_name})]})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("span",{className:`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${d.status==="Ready for Pickup"||d.status==="Completed"?"bg-emerald-50 text-emerald-700 border-emerald-200":d.status==="Printing in Progress"?"bg-orange-50 text-[#ea580c] border-orange-200 animate-pulse":"bg-blue-50 text-blue-700 border-blue-200"}`,children:["● ",d.status.toUpperCase()]}),d.file_name&&d.file_name.toLowerCase().endsWith(".stl")&&a.jsxs("button",{onClick:()=>{g({url:`/uploads/${d.file_path}`,name:d.file_name||"CAD Model"}),p(!0)},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-mono transition",children:[a.jsx(eh,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"3D View"})]})]})]}),a.jsx("div",{className:"mb-8 overflow-x-auto py-2",children:a.jsxs("div",{className:"min-w-[600px] flex items-center justify-between relative",children:[a.jsx("div",{className:"absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 -translate-y-1/2 -z-0"}),a.jsx("div",{className:"absolute top-1/2 left-4 h-0.5 bg-[#f15a24] -translate-y-1/2 -z-0 transition-all duration-500",style:{width:`${x/(_.length-1)*100}%`}}),_.map((v,b)=>{const R=b<=x,A=b===x;return a.jsxs("div",{className:"flex flex-col items-center gap-2 z-10",children:[a.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${A?"bg-[#f15a24] text-white shadow-md scale-110":R?"bg-orange-100 text-[#f15a24] border border-orange-300":"bg-gray-100 text-gray-400 border border-gray-200"}`,children:R&&!A?a.jsx(Rs,{className:"w-4 h-4 text-[#f15a24]"}):b+1}),a.jsx("span",{className:`text-[10px] font-mono text-center max-w-[75px] ${A?"text-[#f15a24] font-bold":R?"text-gray-800":"text-gray-400"}`,children:v})]},v)})]})}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs font-mono mb-4",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block",children:"Student:"}),a.jsx("span",{className:"text-gray-900 font-semibold",children:d.student_name})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block",children:"Tech / Material:"}),a.jsxs("span",{className:"text-gray-900 font-semibold",children:[d.technology," • ",d.material]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block",children:"Quantity:"}),a.jsxs("span",{className:"text-gray-900 font-semibold",children:[d.quantity," unit(s) • ",d.infill_percentage,"%"]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-gray-500 block",children:"Est. Completion:"}),a.jsx("span",{className:"text-emerald-700 font-bold",children:d.estimated_completion||"In Progress"})]})]}),d.admin_notes&&a.jsxs("div",{className:"p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs",children:[a.jsxs("div",{className:"text-[#ea580c] font-mono font-bold uppercase mb-1 flex items-center gap-1.5",children:[a.jsx(s_,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"LABORATORY INCHARGE FEEDBACK:"})]}),a.jsx("p",{className:"text-gray-700 leading-relaxed font-mono",children:d.admin_notes})]})]},d.id)})}),f&&a.jsx(lh,{isOpen:h,onClose:()=>p(!1),fileUrl:f.url,modelName:f.name})]})})},J2=()=>{const[t,e]=re.useState("All"),[n,i]=re.useState(null),[r,s]=re.useState([]),[o,l]=re.useState(!0),c=[{id:"mitm-fac-lab-01",title:"Mechanical Engineering Research & Additive Innovation Laboratory",category:"Laboratory",image_url:"/images/mit/research_lab.jpg",caption:"Department research center for functional additive manufacturing, testing polymer tensile specimens, and prototyping mechanical assemblies.",date:"MIT Mysore Campus"},{id:"mitm-fac-lab-02",title:"CAD/CAM 3D Slicing & Computational Modeling Studio (Lab 1)",category:"Laboratory",image_url:"/images/mit/cad_lab1.jpg",caption:"Workstations configured with SolidWorks, Fusion 360, and Ultimaker Cura slicing for G-code toolpath generation.",date:"CAD/CAM Lab 1"},{id:"mitm-fac-lab-03",title:"Advanced Mechanical Design & Simulation Studio (Lab 2)",category:"Laboratory",image_url:"/images/mit/cad_lab2.jpg",caption:"Finite element analysis (FEA), topological mass reduction, and kinematic simulation terminals for capstone 3D printing preparation.",date:"CAD/CAM Lab 2"},{id:"mitm-fac-lab-04",title:"Mechanical Metrology & Measurements (MMM) QA Testing Lab",category:"Laboratory",image_url:"/images/mit/mmm_lab5.jpg",caption:"Coordinate measuring, optical profile projectors, surface roughness testers, and precision micrometers for post-print dimensional validation.",date:"Metrology Lab"},{id:"mitm-fac-lab-05",title:"Heat Transfer Engineering Laboratory (Thermal Dissipation Rig)",category:"Laboratory",image_url:"/images/mit/ht_lab.jpg",caption:"Thermal verification testing rigs measuring heat conductivity and convection cooling of 3D printed heatsinks and fin arrays.",date:"Thermal Lab"},{id:"mitm-fac-lab-06",title:"Fluid Mechanics & Turbomachinery Testing Facility",category:"Laboratory",image_url:"/images/mit/fm_lab.jpg",caption:"Hydraulic test loops and flow channels validating 3D printed fluid impellers, venturi tubes, and aerofoil blade profiles.",date:"Fluid Systems Lab"},{id:"mitm-fac-print-01",title:"Industrial Dual-Extrusion FDM 3D Printer Station",category:"3D Printers",image_url:"/images/placeholders/placeholder_fdm_printer.svg",caption:"[Pending Department Photo Upload] Dual extrusion high-temperature system supporting PLA, ABS, PETG, TPU, and chopped carbon-fiber filament.",date:"300x300x400 mm Volume"},{id:"mitm-fac-print-02",title:"Precision SLA UV Stereolithography 3D Machine",category:"3D Printers",image_url:"/images/placeholders/placeholder_sla_printer.svg",caption:"[Pending Department Photo Upload] 405nm optical SLA stereolithography unit for 25-micron fine-tolerance micro features and rapid fluidic prototypes.",date:"25-50 Micron Layer"},{id:"mitm-fac-eq-01",title:"Structured Blue Light Optical 3D Scanner & Turntable",category:"Equipment",image_url:"/images/placeholders/placeholder_scanner.svg",caption:"[Pending Department Photo Upload] High-precision optical scanner with 0.02mm resolution for reverse engineering and automated CAD variance analysis.",date:"0.02mm Precision"},{id:"mitm-fac-eq-02",title:"Automated Ultrasonic Wash & UV Post-Curing Chamber",category:"Equipment",image_url:"/images/placeholders/placeholder_curing.svg",caption:"[Pending Department Photo Upload] Isopropyl wash tank and multi-frequency UV curing station ensuring maximum tensile crosslinking for resin components.",date:"Post-Processing Station"},{id:"mitm-fac-mod-01",title:"Planetary Speed Reducer & Compliant Robotic Gripper",category:"Printed Models",image_url:"/images/placeholders/placeholder_printed_model.svg",caption:"[Pending Department Photo Upload] Monolithic print-in-place planetary gearbox with integral compliant bionic finger joints printed without external assembly.",date:"Capstone Prototype"},{id:"mitm-fac-act-01",title:"MECHISMOS State-Level Mechanical Project & 3D Prototype Expo",category:"Student Activities",image_url:"/images/mit/mechismos_tech_expo.jpg",caption:"Annual project exhibition demonstrating student-built 3D printed mechanical prototypes, robotics, and capstone engineering mechanisms.",date:"Annual Expo"},{id:"mitm-fac-act-02",title:"Technical Hands-on Training on PLC, SCADA & NDT Automation",category:"Student Activities",image_url:"/images/mit/training_plc_scada.png",caption:"Skill development intensive workshop training mechanical students on automated industrial control systems, machine logic, and inspection.",date:"Student Training"},{id:"mitm-fac-act-03",title:"Alumni Interactive Lecture on Modern CAD/CAM & Additive Prototyping",category:"Student Activities",image_url:"/images/mit/expert_talk_sanjana.jpg",caption:"Distinguished mechanical alumna Er. Sanjana mentoring students on generative design and 3D prototyping workflows for automotive components.",date:"Alumni Lecture"},{id:"mitm-fac-act-04",title:"Student Slicing & Machine Toolpath Practical Session",category:"Student Activities",image_url:"/images/placeholders/placeholder_student_slice.svg",caption:"[Pending Department Photo Upload] Hands-on laboratory training instructing mechanical engineering students in Ultimaker Cura and PrusaSlicer optimization.",date:"Lab Practical"}];re.useEffect(()=>{(async()=>{try{const d=await St.getGallery();d&&d.length>0?s(d):s(c)}catch(d){console.warn("Using default facility gallery items:",d),s(c)}finally{l(!1)}})()},[]);const u=["All","Laboratory","3D Printers","Equipment","Printed Models","Student Activities"],h=t==="All"?r:r.filter(m=>m.category.toLowerCase()===t.toLowerCase()),p=m=>{i(m)},f=()=>{i(null)},g=m=>{m.stopPropagation(),n!==null&&i(d=>d>0?d-1:h.length-1)},y=m=>{m.stopPropagation(),n!==null&&i(d=>d<h.length-1?d+1:0)};re.useEffect(()=>{const m=d=>{n!==null&&(d.key==="Escape"&&f(),d.key==="ArrowLeft"&&i(x=>x>0?x-1:h.length-1),d.key==="ArrowRight"&&i(x=>x<h.length-1?x+1:0))};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[n,h.length]);const _=n!==null?h[n]:null;return a.jsxs("section",{id:"facility",className:"py-20 bg-white border-b border-gray-200 scroll-mt-20",children:[a.jsx("div",{id:"gallery",className:"absolute -mt-24"}),a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-10",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(Sx,{className:"w-4 h-4"}),a.jsx("span",{children:"Maharaja Institute of Technology Mysore"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Our 3D Printing Facility"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base leading-relaxed",children:"Department of Mechanical Engineering • Additive Manufacturing Laboratory, 3D printing machines, advanced inspection hardware, capstone prototypes & student technical workshops."})]}),a.jsxs("div",{className:"max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-9 h-9 rounded-xl bg-orange-100 text-[#f15a24] flex items-center justify-center shrink-0",children:a.jsx(Rs,{className:"w-5 h-5"})}),a.jsxs("div",{className:"text-xs text-slate-700 leading-relaxed",children:[a.jsx("strong",{className:"text-gray-900 block font-semibold",children:"Authentic Department Verification:"}),"Laboratory photos show real MIT Mysore mechanical engineering facilities (Research Lab, CAD/CAM Studios, Metrology Lab). Specific equipment placeholders are clearly marked pending department photo collection."]})]}),a.jsxs("span",{className:"text-[11px] font-mono font-bold text-[#f15a24] bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-lg shrink-0",children:[h.length," Photographs Available"]})]}),a.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-10",children:u.map(m=>a.jsx("button",{onClick:()=>{e(m),i(null)},className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${t===m?"bg-[#f15a24] text-white shadow-md font-bold scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:m},m))}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map((m,d)=>{var v;const x=m.image_url.includes("placeholder")||((v=m.caption)==null?void 0:v.includes("[Pending"));return a.jsxs("div",{onClick:()=>p(d),className:"group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-200 cursor-pointer transition-all duration-300 h-80 bg-slate-900 flex flex-col justify-end",children:[a.jsx("img",{src:m.image_url,alt:m.title,onError:b=>{b.currentTarget.src="/images/mit/research_lab.jpg"},className:"absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),a.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-5",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("span",{className:"text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#f15a24] text-white font-bold w-max shadow-sm",children:m.category}),x&&a.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/90 text-black font-extrabold",children:"Pending Upload"})]}),a.jsx("h3",{className:"text-base font-bold text-white font-['Rajdhani'] uppercase tracking-wide group-hover:text-orange-300 transition-colors line-clamp-2",children:m.title}),a.jsx("p",{className:"text-xs text-gray-300 line-clamp-2 mt-1.5 font-light leading-relaxed",children:m.caption}),a.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-gray-300 mt-3 pt-2.5 border-t border-white/20",children:[a.jsx("span",{className:"font-semibold text-orange-300",children:m.date||"MIT Mysore Mech"}),a.jsxs("span",{className:"text-white font-semibold flex items-center gap-1 group-hover:text-orange-300",children:[a.jsx("span",{children:"Preview"}),a.jsx(Ex,{className:"w-3 h-3"})]})]})]})]},m.id)})})]}),_&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md",onClick:f,children:a.jsxs("div",{className:"relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]",onClick:m=>m.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800 text-white",children:[a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded bg-[#f15a24] text-white font-bold",children:_.category}),a.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["Photograph ",n+1," of ",h.length]})]}),a.jsx("button",{onClick:f,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition",children:a.jsx(Wn,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[62vh]",children:[a.jsx("img",{src:_.image_url,alt:_.title,onError:m=>{m.currentTarget.src="/images/mit/research_lab.jpg"},className:"w-full h-full max-h-[60vh] object-contain"}),a.jsx("button",{onClick:g,className:"absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[#f15a24] text-white transition shadow-lg border border-white/10",title:"Previous Image (Left Arrow)",children:a.jsx(Jy,{className:"w-5 h-5"})}),a.jsx("button",{onClick:y,className:"absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[#f15a24] text-white transition shadow-lg border border-white/10",title:"Next Image (Right Arrow)",children:a.jsx(e_,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"p-6 bg-slate-900 border-t border-slate-800 text-white overflow-y-auto",children:[a.jsxs("div",{className:"flex items-center justify-between gap-4 mb-2",children:[a.jsx("h3",{className:"text-lg sm:text-xl font-bold font-['Rajdhani'] uppercase tracking-wide text-white",children:_.title}),_.date&&a.jsx("span",{className:"text-xs font-mono text-orange-400 shrink-0",children:_.date})]}),a.jsx("p",{className:"text-sm text-slate-300 leading-relaxed font-light",children:_.caption}),a.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2",children:[a.jsx("span",{children:"Maharaja Institute of Technology Mysore • Mechanical Engineering Facility"}),a.jsx("span",{className:"text-orange-400 font-semibold",children:"Use ← → arrow keys to navigate"})]})]})]})})]})},eE=()=>{const[t,e]=re.useState("All"),[n,i]=re.useState(null),r=[{id:"fac-01",name:"Dr. Mohamed Khaisar",designation:"Professor & Head of Department (HOD)",category:"HOD",qualifications:"BE, M.Tech, Ph.D, MISTE",specialization:"Additive Manufacturing, Material Science & Advanced Composites",labRole:"AM Lab Director & Research Supervisor",photoUrl:"/images/faculty/hod_mohamed_khaisar.jpg",email:"hodmech@mitmysore.in",bio:"Leading the Department of Mechanical Engineering with extensive research leadership in polymer matrix composites, additive manufacturing, and institutional academic excellence."},{id:"fac-02",name:"Dr. B. Harish",designation:"Associate Professor",category:"Associate Professor",qualifications:"BE, M.Tech, Ph.D, MISTE",specialization:"Thermal Engineering, HVAC & Sustainable Energy",labRole:"ISHRAE Student Chapter Faculty Advisor",photoUrl:"/images/faculty/dr_b_harish.jpg",email:"bharish@mitmysore.in",bio:"Coordinates the ISHRAE MIT Mysore Chapter, mentoring student delegations at national symposiums (ACREX India) and innovative thermal prototyping."},{id:"fac-03",name:"Dr. Chethan Y. D.",designation:"Associate Professor",category:"Associate Professor",qualifications:"BE, M.Tech, Ph.D, MISTE",specialization:"CAD/CAM/CAE, Topological Optimization & Machine Design",labRole:"CAD/CAM Slicing Studio Incharge",photoUrl:"/images/faculty/dr_chethan_yd.jpg",email:"chethanyd@mitmysore.in",bio:"Specialist in computational FEA, generative component design, and toolpath optimization for precision rapid prototyping."},{id:"fac-04",name:"Dr. Ravikumar K. S.",designation:"Associate Professor",category:"Associate Professor",qualifications:"BE, M.Tech, Ph.D, MISTE",specialization:"Fluid Mechanics, Turbomachinery & Aerodynamics",labRole:"Fluid Systems & Racing Prototyping Mentor",photoUrl:"/images/faculty/dr_ravikumar_ks.jpg",email:"ravikumarks@mitmysore.in",bio:"Mentors collegiate racing aerodynamics and 3D printed fluid manifold projects, guiding student technical teams in national design challenges."},{id:"fac-05",name:"Dr. Godfrey Devaputra",designation:"Associate Professor",category:"Associate Professor",qualifications:"BE, M.Tech, Ph.D, MISTE",specialization:"Metrology, Coordinate Measurements & Material QA",labRole:"Metrology (MMM) Lab Incharge",photoUrl:"/images/faculty/dr_godfrey_devaputra.jpg",email:"godfrey@mitmysore.in",bio:"Oversees precision dimensional inspection, surface roughness profiling, and post-processing quality assurance of 3D printed components."},{id:"fac-06",name:"Dr. Chethana G. D.",designation:"Associate Professor",category:"Associate Professor",qualifications:"BE, M.Tech, Ph.D, MISTE",specialization:"Manufacturing Science & Advanced Machining",labRole:"Advanced Fabrication Advisor",photoUrl:"/images/faculty/dr_chethana_gd.jpg",email:"chethanagd@mitmysore.in",bio:"Focuses on hybrid manufacturing, combining traditional subtractive machining with additive preforms for functional mechanical tooling."},{id:"fac-07",name:"Prof. Yogesh Kumar K. J.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Kinematics, Mechanism Synthesis & Robotics",labRole:"Student Technical Projects Coordinator",photoUrl:"/images/faculty/prof_yogesh_kumar.jpg",email:"yogeshkumarkj@mitmysore.in",bio:"Guides student capstone prototypes including compliant robotic hands, bionic linkages, and planetary speed reduction assemblies."},{id:"fac-08",name:"Prof. Santhosh K. G.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Industrial Engineering & Operations Research",labRole:"3D Print Queue & Inventory Coordinator",photoUrl:"/images/faculty/prof_santhosh_kg.jpg",email:"santhoshkg@mitmysore.in",bio:"Coordinates laboratory inventory, filament resource planning, and subsidized student material tracking."},{id:"fac-09",name:"Prof. Kishan G. S.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Design Engineering & Vibrations Analysis",labRole:"Finite Element Analysis Mentor",photoUrl:"/images/faculty/prof_kishan_gs.jpg",email:"kishangs@mitmysore.in",bio:"Instructs students in structural dynamic modeling, vibration dampening, and elastomer TPU part simulation."},{id:"fac-10",name:"Prof. Rakesh R.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, AMIE, MISTE",specialization:"Thermal Systems & Energy Engineering",labRole:"Heat Dissipation Testing Guide",photoUrl:"/images/faculty/prof_rakesh_r.jpg",email:"rakeshr@mitmysore.in",bio:"Researches additive heat sink geometries, conformal cooling channels, and heat exchanger prototyping."},{id:"fac-11",name:"Prof. Anil Kumar M. M.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Manufacturing Processes & Tool Design",labRole:"FDM Printer Maintenance Lead",photoUrl:"/images/faculty/prof_anilkumar_mm.jpg",email:"anilkumarmm@mitmysore.in",bio:"Oversees additive hardware calibration, dual-extrusion nozzle maintenance, and print bed leveling accuracy."},{id:"fac-12",name:"Prof. Krishna Prasad S.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Mechatronics & Embedded Automation",labRole:"Robotics Integration Specialist",photoUrl:"/images/faculty/prof_krishna_prasad.jpg",email:"krishnaprasad@mitmysore.in",bio:"Integrates microcontrollers, stepper motors, and sensors into student 3D printed mechanical housings."},{id:"fac-13",name:"Prof. Sathish H.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, MS, MISTE",specialization:"Product Lifecycle Management (PLM) & CAD",labRole:"CAD Modeling & STEP Standards Guide",photoUrl:"/images/faculty/prof_sathish_h.jpg",email:"sathishh@mitmysore.in",bio:"Instructs industry-standard STEP and 3MF parametric modeling standards for flawless 3D slicing."},{id:"fac-14",name:"Prof. Abhilash M.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Design of Machine Elements & Rapid Tooling",labRole:"Machine Elements Prototyping Lead",photoUrl:"/images/faculty/prof_abhilash_m.jpg",email:"abhilashm@mitmysore.in",bio:"Guides structural transmission design, spur/helical gear 3D printing tolerances, and fatigue testing."},{id:"fac-15",name:"Prof. Sachin B.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Polymer Processing & Additive Slicing",labRole:"Ultimaker Cura & Slicing Mentor",photoUrl:"/images/faculty/prof_sachin_b.jpg",email:"sachinb@mitmysore.in",bio:"Conducts hands-on slicing workshops for students, focusing on infill geometry, support generation, and surface finish."},{id:"fac-16",name:"Prof. Abhishek H. R.",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Materials Science & Non-Destructive Testing",labRole:"NDT & Inspection Coordinator",photoUrl:"/images/faculty/prof_abhishek_hr.jpg",email:"abhishekhr@mitmysore.in",bio:"Conducts ultrasonic and radiographic flaw detection on additive metal and composite prototypes."},{id:"fac-17",name:"Prof. Ameena Kausar",designation:"Assistant Professor",category:"Assistant Professor",qualifications:"BE, M.Tech, MISTE",specialization:"Fluid Mechanics & Computational Heat Transfer",labRole:"Thermal Simulation Coordinator",photoUrl:"/images/faculty/prof_ameena_kausar.jpg",email:"ameenakausar@mitmysore.in",bio:"Guides computational flow simulations around 3D printed automotive wings and aerofoil assemblies."},{id:"fac-18",name:"Mr. Ramesh Kumar M",designation:"Foreman",category:"Technical Staff",qualifications:"DME, BE",specialization:"Machine Tool Maintenance & Fabrication",labRole:"Central Workshop & Machine Shop Incharge",photoUrl:"/images/faculty/staff_ramesh_kumar.jpg",email:"rameshkumar@mitmysore.in",bio:"Manages precision mechanical fabrication, machine assembly, and safety compliance across departmental laboratories."},{id:"fac-19",name:"Mr. Somesha",designation:"Laboratory Instructor",category:"Technical Staff",qualifications:"BE (Mechanical)",specialization:"CAD/CAM Lab & Computational Hardware",labRole:"Computing Workstations & 3D Network Lead",photoUrl:"/images/faculty/staff_somesha.jpg",email:"somesha@mitmysore.in",bio:"Manages CAD terminal configurations, slicing license servers, and 3D print network transfer systems."},{id:"fac-20",name:"Mr. M. E. Vishwavasu",designation:"Laboratory Instructor",category:"Technical Staff",qualifications:"DME",specialization:"Precision Metrology & Testing Apparatus",labRole:"Metrology Lab Technical Incharge",photoUrl:"/images/faculty/staff_vishwavasu.jpg",email:"vishwavasu@mitmysore.in",bio:"Provides technical guidance during mechanical calibration, tensile specimen preparation, and dimensional testing."}],s=["All","Professors & HOD","Associate Professors","Assistant Professors","Technical Staff"],o=t==="All"?r:r.filter(l=>t==="Professors & HOD"?l.category==="HOD":t==="Associate Professors"?l.category==="Associate Professor":t==="Assistant Professors"?l.category==="Assistant Professor":t==="Technical Staff"?l.category==="Technical Staff":!0);return a.jsxs("section",{id:"faculty",className:"py-20 bg-gray-50 border-b border-gray-200 scroll-mt-20",children:[a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(hl,{className:"w-4 h-4"}),a.jsx("span",{children:"Academic Leadership & Technical Mentors"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Department Faculty Members"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsxs("p",{className:"text-gray-600 text-sm sm:text-base leading-relaxed",children:["Distinguished professors, researchers, and technical staff of the ",a.jsx("strong",{children:"Department of Mechanical Engineering, MIT Mysore"}),", guiding additive manufacturing innovation and student capstone prototyping."]})]}),a.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-10",children:s.map(l=>a.jsx("button",{onClick:()=>e(l),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${t===l?"bg-[#f15a24] text-white shadow-md font-bold scale-105":"bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"}`,children:l},l))}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:o.map(l=>a.jsxs("div",{onClick:()=>i(l),className:"group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 cursor-pointer transition-all duration-300 flex flex-col justify-between",children:[a.jsxs("div",{className:"relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center",children:[a.jsx("img",{src:l.photoUrl,alt:l.name,onError:c=>{c.currentTarget.src="/images/faculty/hod_mohamed_khaisar.jpg"},className:"w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4",children:a.jsxs("span",{className:"text-xs text-orange-300 font-mono flex items-center gap-1",children:[a.jsx("span",{children:"View Academic Profile"}),a.jsx(r_,{className:"w-3.5 h-3.5"})]})}),l.category==="HOD"&&a.jsx("span",{className:"absolute top-3 left-3 bg-[#f15a24] text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow-md uppercase",children:"Head of Department"})]}),a.jsxs("div",{className:"p-4 flex flex-col flex-1 justify-between",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-base font-bold text-gray-900 font-['Rajdhani'] uppercase tracking-wide group-hover:text-[#f15a24] transition-colors",children:l.name}),a.jsx("div",{className:"text-xs font-semibold text-[#f15a24] mb-1",children:l.designation}),a.jsx("div",{className:"text-[11px] text-gray-500 font-mono mb-2",children:l.qualifications}),a.jsx("p",{className:"text-xs text-gray-600 line-clamp-2 leading-relaxed font-light",children:l.specialization})]}),a.jsxs("div",{className:"mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-500",children:[a.jsx("span",{className:"text-slate-700 font-medium truncate max-w-[180px]",children:l.labRole}),a.jsx("span",{className:"text-[#f15a24] font-bold group-hover:underline",children:"Profile →"})]})]})]},l.id))})]}),n&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm",onClick:()=>i(null),children:a.jsxs("div",{className:"relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",onClick:l=>l.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-gray-800 text-white",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(hl,{className:"w-5 h-5 text-[#f15a24]"}),a.jsx("h4",{className:"text-base font-bold font-['Rajdhani'] uppercase tracking-wide",children:"Department Faculty Profile"})]}),a.jsx("button",{onClick:()=>i(null),className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition",children:a.jsx(Wn,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"p-6 overflow-y-auto",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-6",children:[a.jsx("div",{className:"w-32 h-36 rounded-2xl overflow-hidden shadow-md border-2 border-orange-200 shrink-0 bg-slate-100",children:a.jsx("img",{src:n.photoUrl,alt:n.name,className:"w-full h-full object-cover object-top"})}),a.jsxs("div",{className:"text-center sm:text-left",children:[a.jsx("h3",{className:"text-xl font-bold text-gray-900 font-['Rajdhani'] uppercase",children:n.name}),a.jsx("div",{className:"text-sm font-bold text-[#f15a24] mb-1",children:n.designation}),a.jsx("div",{className:"text-xs text-gray-600 font-mono mb-2",children:n.qualifications}),a.jsx("div",{className:"inline-block px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono text-[#f15a24] font-semibold",children:n.labRole})]})]}),a.jsxs("div",{className:"space-y-4 text-xs",children:[a.jsxs("div",{className:"p-3.5 rounded-xl bg-gray-50 border border-gray-200",children:[a.jsxs("div",{className:"font-bold text-gray-900 mb-1 flex items-center gap-2",children:[a.jsx(Yy,{className:"w-4 h-4 text-[#f15a24]"}),a.jsx("span",{children:"Specialization & Research Focus:"})]}),a.jsx("p",{className:"text-gray-600 leading-relaxed",children:n.specialization})]}),n.bio&&a.jsxs("div",{className:"p-3.5 rounded-xl bg-gray-50 border border-gray-200",children:[a.jsxs("div",{className:"font-bold text-gray-900 mb-1 flex items-center gap-2",children:[a.jsx(vx,{className:"w-4 h-4 text-[#f15a24]"}),a.jsx("span",{children:"Academic Role & 3D Lab Involvement:"})]}),a.jsx("p",{className:"text-gray-600 leading-relaxed",children:n.bio})]}),a.jsxs("div",{className:"p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 flex items-center justify-between font-mono",children:[a.jsxs("div",{className:"flex items-center gap-2 text-gray-700",children:[a.jsx(Ta,{className:"w-4 h-4 text-[#f15a24]"}),a.jsx("span",{children:"Official Email:"})]}),a.jsx("a",{href:`mailto:${n.email}`,className:"text-[#f15a24] font-bold hover:underline",children:n.email})]})]})]})]})})]})},tE=()=>{const t=[{title:"Practical Hands-on Learning",icon:hl,badge:"Experiential",desc:"VTU mechanical students gain direct hands-on training in machine calibration, filament handling, G-code parameter tuning, and post-processing.",metric:"100% Practical Access"},{title:"Continuous Innovation & Research",icon:u_,badge:"Patents & Papers",desc:"Supporting patent filings, interdisciplinary capstones with robotics and electronics departments, and national conference publications.",metric:"12+ Research Papers"},{title:"Dedicated Faculty & Design Support",icon:l_,badge:"Mentorship",desc:"Experienced PhD faculty and lab instructors assist students in FEA stress analysis, DFAM design optimization, and support reduction.",metric:"Expert Mentorship"},{title:"Rapid 24-48h Turnaround",icon:ih,badge:"High Speed",desc:"Dedicated production queues ensure fast prototyping cycles so capstone project teams can validate mechanisms well ahead of deadlines.",metric:"24-48h Average"},{title:"Advanced Optical 3D Scanning",icon:Tx,badge:"State of the Art",desc:"Equipped with structured-light optical scanners (0.02mm accuracy), high-temp FDM units, and Formlabs SLA photopolymer stations.",metric:"0.02mm Precision"},{title:"Holistic Student Development",icon:v_,badge:"Industry Ready",desc:"Graduates leave MIT Mysore with competitive digital fabrication credentials sought after by automotive, aerospace, and robotics employers.",metric:"Industry Aligned"}];return a.jsx("section",{id:"why-us",className:"py-20 bg-white border-b border-gray-200",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(nh,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"The MIT Mysore Advantage"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Why Choose Our Facility?"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Empowering students with industry-grade additive manufacturing infrastructure, expert mechanical mentorship, and subsidized prototyping."})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((e,n)=>{const i=e.icon;return a.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#f15a24] transition-all group",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#f15a24] flex items-center justify-center group-hover:bg-[#f15a24] group-hover:text-white transition-all shadow-sm",children:a.jsx(i,{className:"w-6 h-6"})}),a.jsx("span",{className:"text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-gray-100 text-gray-700",children:e.badge})]}),a.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase tracking-wide group-hover:text-[#f15a24] transition-colors",children:e.title}),a.jsx("p",{className:"text-xs sm:text-sm text-gray-600 leading-relaxed mb-6",children:e.desc})]}),a.jsxs("div",{className:"pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono",children:[a.jsx("span",{className:"text-gray-500",children:"Benchmark:"}),a.jsx("span",{className:"text-[#f15a24] font-bold",children:e.metric})]})]},n)})})]})})},nE=()=>{const[t,e]=re.useState(0),[n,i]=re.useState(""),s=[{q:"What is 3D printing and how does additive manufacturing work?",a:"3D printing (additive manufacturing) is a digital manufacturing process that constructs physical three-dimensional objects directly from computer-aided design (CAD) files by depositing material layer-by-layer. Unlike traditional subtractive manufacturing (such as CNC milling or turning where material is cut away from a raw block), additive manufacturing builds only the required geometry, minimizing raw material waste and enabling complex internal voids, lattice structures, and topological geometries."},{q:"Which 3D CAD file formats are accepted by the MIT Mysore lab?",a:"Our lab slicing engines (UltiMaker Cura, PrusaSlicer, and PreForm) natively accept binary STL (.stl) and 3D Manufacturing Format (.3mf). We also accept Wavefront OBJ (.obj), standard STEP/STP (.step, .stp) solid models, and native SolidWorks part files (.sldprt). For best dimensional accuracy, export your CAD models with fine chord height tolerance (binary STL)."},{q:"How long does a typical 3D print take to complete?",a:"Print time depends on part volume, layer height resolution, infill percentage, and machine technology. Small demo components (under 50mm) take 1 to 3 hours; standard mechanical bracket assemblies take 6 to 14 hours; large aerodynamic manifolds or capstone mechanisms can require 18 to 36 hours. Average student queue turnaround is between 24 and 48 hours."},{q:"Which materials are available for mechanical engineering students?",a:"We keep regular stock of PLA (biodegradable, high dimensional precision), ABS (impact and heat resistant up to 98°C), PETG (chemical resistance and toughness), TPU 95A (flexible elastomer), Tough Photopolymer Resin (405nm SLA/DLP for 25-micron surface smoothness), Nylon PA12 (low friction, high fatigue gears), and Carbon Fiber Reinforced PLA (maximum stiffness for drone arms)."},{q:"How can students submit a 3D model for printing?",a:'Students can submit directly through this portal using the "Build Your Quote / 3D Printing Request" form. Fill in your name, USN, semester, material selection, and upload your STL file. The portal generates a unique Tracking ID (e.g., MITM-2026-XXXX) which you can use in the "Track Status" tab to see real-time slicing and printing progress.'},{q:"What is rapid prototyping and how does it help mechanical engineering projects?",a:"Rapid prototyping is the rapid automated fabrication of a physical prototype using 3D CAD data. In mechanical engineering, it allows students to physically test gear ratios, verify bearing press-fits, test aerodynamic duct airflow, evaluate ergonomics, and iterate through multiple design cycles before committing to costly metal machining or injection mold tooling."},{q:"What are the recommended design guidelines for wall thickness and overhangs?",a:"For FDM printing, maintain a minimum wall thickness of 1.2 mm (at least 3 perimeter passes with a 0.4 mm nozzle). Overhang angles greater than 45° from the vertical axis typically require support structures. For holes and shafts, account for thermal contraction by adding a 0.2 mm to 0.3 mm clearance allowance for slip fits."},{q:"What are the charges and operating hours for MIT Mysore students?",a:"The lab operates Monday through Saturday from 9:00 AM to 5:00 PM in the Mechanical Engineering block. For registered MIT Mysore students, machine usage is subsidized by the college—students only pay a nominal recovery cost for raw material consumption (approx. ₹2.0 to ₹2.5 per gram for standard PLA/ABS)."}].filter(o=>o.q.toLowerCase().includes(n.toLowerCase())||o.a.toLowerCase().includes(n.toLowerCase()));return a.jsx("section",{id:"faq",className:"py-20 bg-gray-50 border-b border-gray-200",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(t_,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Knowledge Base"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Frequently Asked Questions"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Answers to common questions regarding 3D printing technologies, design guidelines, file formats, and lab access."})]}),a.jsxs("div",{className:"relative mb-8",children:[a.jsx(Fl,{className:"w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"text",placeholder:"Search FAQs (e.g. materials, formats, turnaround, cost)...",value:n,onChange:o=>i(o.target.value),className:"w-full bg-white border border-gray-300 focus:border-[#f15a24] pl-11 pr-4 py-3 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition shadow-sm"})]}),a.jsx("div",{className:"flex flex-col gap-3",children:s.map((o,l)=>{const c=t===l;return a.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all",children:[a.jsxs("button",{onClick:()=>e(c?null:l),className:"w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition",children:[a.jsx("span",{className:"text-sm sm:text-base font-bold text-gray-900 font-['Rajdhani']",children:o.q}),a.jsx("div",{className:`p-1.5 rounded-lg bg-gray-100 text-[#f15a24] transition-transform ${c?"rotate-180":""}`,children:a.jsx(Qy,{className:"w-4 h-4"})})]}),c&&a.jsx("div",{className:"px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50",children:o.a})]},l)})})]})})},iE=()=>{const[t,e]=re.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,i]=re.useState(!1),[r,s]=re.useState(!1),[o,l]=re.useState(null),c=h=>{e(p=>({...p,[h.target.name]:h.target.value}))},u=async h=>{if(h.preventDefault(),!t.name||!t.email||!t.message){l("Please fill in your Name, Email, and Message.");return}i(!0),l(null);try{await St.submitContact(t),s(!0),e({name:"",email:"",phone:"",subject:"",message:""})}catch(p){l(p.message||"Failed to submit message.")}finally{i(!1)}};return a.jsx("section",{id:"contact",className:"py-20 bg-white border-b border-gray-200",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3",children:[a.jsx(Ta,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Connect with Us"})]}),a.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide",children:"Contact Laboratory & Department"}),a.jsx("div",{className:"w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4"}),a.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Reach out to our mechanical engineering faculty and laboratory coordinators for technical queries, student consultations, and campus facility visits."})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[a.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-6",children:[a.jsxs("div",{className:"p-6 rounded-2xl bg-white border border-gray-200 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-orange-100 text-[#f15a24] flex items-center justify-center font-bold",children:a.jsx(_x,{className:"w-5 h-5"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-base font-bold text-gray-900 font-['Rajdhani'] uppercase tracking-wide",children:"Maharaja Institute of Technology Mysore"}),a.jsx("p",{className:"text-xs text-gray-500 font-mono",children:"Department of Mechanical Engineering"})]})]}),a.jsxs("div",{className:"flex flex-col gap-4 text-xs text-gray-700",children:[a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(h_,{className:"w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0"}),a.jsxs("div",{children:[a.jsx("strong",{className:"text-gray-900 block font-medium",children:"Campus Address:"}),a.jsx("span",{children:"Belawadi, S.R. Patna Taluk, Mandya District, Mysore – 571477, Karnataka, India"})]})]}),a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(hl,{className:"w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0"}),a.jsxs("div",{children:[a.jsx("strong",{className:"text-gray-900 block font-medium",children:"Head of Department (HOD):"}),a.jsx("span",{children:"Dr. Mohamed Khaisar (Professor & HOD, Mech)"}),a.jsx("span",{className:"block text-gray-500 font-mono text-[11px]",children:"Email: hodmech@mitmysore.in"})]})]}),a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(Ku,{className:"w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0"}),a.jsxs("div",{children:[a.jsx("strong",{className:"text-gray-900 block font-medium",children:"Department Office:"}),a.jsx("span",{className:"font-mono text-[#f15a24] font-bold",children:"+91 98947 33117 / +91 81223 22022"})]})]}),a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(Ta,{className:"w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0"}),a.jsxs("div",{children:[a.jsx("strong",{className:"text-gray-900 block font-medium",children:"Official Email:"}),a.jsx("span",{className:"font-mono text-gray-800",children:"mechanical@mitmysore.in / info@mitmysore.in"})]})]}),a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(bx,{className:"w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0"}),a.jsxs("div",{children:[a.jsx("strong",{className:"text-gray-900 block font-medium",children:"AM Lab Working Hours:"}),a.jsx("span",{children:"Monday to Saturday: 9:00 AM – 5:00 PM"})]})]})]})]}),a.jsx("div",{className:"rounded-2xl overflow-hidden border border-gray-200 h-60 shadow-sm",children:a.jsx("iframe",{title:"MIT Mysore Campus Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.7936166541624!2d76.6787383748281!3d12.395349187870933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf712c9b68516d%3A0xb3a2a472cbb092fe!2sMaharaja%20Institute%20of%20Technology%20Mysore!5e0!3m2!1sen!2sin!4v1715849120000!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowFullScreen:!1,loading:"lazy"})})]}),a.jsx("div",{className:"lg:col-span-7",children:a.jsxs("div",{className:"p-8 rounded-3xl bg-white border border-gray-200 shadow-lg",children:[a.jsxs("h3",{className:"text-xl font-bold text-gray-900 font-['Rajdhani'] uppercase tracking-wide mb-2 flex items-center gap-2",children:[a.jsx(Da,{className:"w-5 h-5 text-[#f15a24]"}),a.jsx("span",{children:"Send Laboratory Inquiry"})]}),a.jsx("p",{className:"text-xs text-gray-500 mb-6",children:"Have a question about CAD modeling, student project queues, or corporate 3D printing services? Contact us below."}),r?a.jsxs("div",{className:"p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center",children:[a.jsx(Rs,{className:"w-12 h-12 text-emerald-600 mx-auto mb-3"}),a.jsx("h4",{className:"text-lg font-bold text-gray-900 font-['Rajdhani'] uppercase mb-1",children:"Message Dispatched Successfully"}),a.jsx("p",{className:"text-xs text-gray-600 mb-4",children:"Thank you for contacting the MIT Mysore Mechanical Department. We will respond promptly."}),a.jsx("button",{onClick:()=>s(!1),className:"px-4 py-2 rounded-xl bg-gray-100 text-xs text-gray-700 hover:bg-gray-200 transition",children:"Send Another Inquiry"})]}):a.jsxs("form",{onSubmit:u,className:"flex flex-col gap-4",children:[o&&a.jsxs("div",{className:"p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-2",children:[a.jsx(La,{className:"w-4 h-4"}),a.jsx("span",{children:o})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1",children:["Your Full Name ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",name:"name",value:t.name,onChange:c,placeholder:"e.g. Rohith Gowda",className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition",required:!0})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1",children:["Email Address ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"email",name:"email",value:t.email,onChange:c,placeholder:"student@mitmysore.in",className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition",required:!0})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-mono text-gray-700 mb-1",children:"Phone Number"}),a.jsx("input",{type:"tel",name:"phone",value:t.phone,onChange:c,placeholder:"+91 98450 12345",className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1",children:["Subject ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",name:"subject",value:t.subject,onChange:c,placeholder:"e.g. Capstone Prototype Slicing",className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition",required:!0})]})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-xs font-mono text-gray-700 mb-1",children:["Message ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("textarea",{rows:4,name:"message",value:t.message,onChange:c,placeholder:"Describe your design questions or 3D printing requirements...",className:"w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition",required:!0})]}),a.jsx("button",{type:"submit",disabled:n,className:"w-full sm:w-auto self-end px-8 py-3 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs uppercase font-mono tracking-wider transition shadow-md disabled:opacity-50",children:n?"Sending...":"Send Message"})]})]})})]})]})})},rE=({onAdminClick:t,onRequestClick:e,onTrackClick:n})=>{const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return a.jsx("footer",{className:"bg-gray-900 text-gray-400 text-xs border-t-4 border-[#f15a24]",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800",children:[a.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-full bg-white p-0.5 border border-orange-400 shadow-md flex items-center justify-center shrink-0",children:a.jsx("img",{src:"/images/mit_logo.png",alt:"MIT Mysore College Logo",className:"w-full h-full object-contain",onError:r=>{r.currentTarget.src="/mit_logo.png"}})}),a.jsxs("div",{children:[a.jsx("span",{className:"text-lg font-black text-white font-['Rajdhani'] uppercase tracking-wider block",children:"RAPID 3D • MIT MYSORE"}),a.jsx("span",{className:"text-[11px] font-mono text-orange-400 uppercase",children:"Additive Manufacturing & Prototyping Center"})]})]}),a.jsx("p",{className:"text-gray-400 text-xs leading-relaxed max-w-sm",children:"Department of Mechanical Engineering, Maharaja Institute of Technology Mysore. Affiliated to VTU Belagavi, approved by AICTE, New Delhi, and accredited with NAAC."}),a.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[a.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),a.jsx("span",{className:"text-[11px] text-gray-300 font-mono",children:"Laboratory Online • Industrial 3D Printing & 3D Scanning"})]})]}),a.jsxs("div",{className:"lg:col-span-2 flex flex-col gap-3 font-mono",children:[a.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wider mb-1",children:"SECTIONS"}),a.jsx("a",{href:"#about",className:"hover:text-[#f15a24] transition",children:"About Lab"}),a.jsx("a",{href:"#technologies",className:"hover:text-[#f15a24] transition",children:"Technologies"}),a.jsx("a",{href:"#industries",className:"hover:text-[#f15a24] transition",children:"Industries"}),a.jsx("a",{href:"#services",className:"hover:text-[#f15a24] transition",children:"Services"}),a.jsx("a",{href:"#materials",className:"hover:text-[#f15a24] transition",children:"Materials Matrix"}),a.jsx("a",{href:"#projects",className:"hover:text-[#f15a24] transition",children:"Student Projects"}),a.jsx("a",{href:"#facility",className:"hover:text-[#f15a24] transition",children:"Our Facility"}),a.jsx("a",{href:"#faculty",className:"hover:text-[#f15a24] transition",children:"Faculty Members"})]}),a.jsxs("div",{className:"lg:col-span-2 flex flex-col gap-3 font-mono",children:[a.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wider mb-1",children:"ACTIONS"}),a.jsx("button",{onClick:e,className:"text-left hover:text-[#f15a24] transition",children:"Build Your Quote"}),a.jsx("button",{onClick:n,className:"text-left hover:text-[#f15a24] transition",children:"Track 3D Print Status"}),a.jsxs("button",{onClick:t,className:"text-left hover:text-[#f15a24] transition flex items-center gap-1 text-orange-400",children:[a.jsx(Ol,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Faculty Admin"})]}),a.jsx("a",{href:"#contact",className:"hover:text-[#f15a24] transition",children:"Campus Location"})]}),a.jsxs("div",{className:"lg:col-span-3 flex flex-col gap-3",children:[a.jsx("h4",{className:"text-xs font-bold text-white uppercase font-mono tracking-wider mb-1",children:"CAMPUS & CONTACT"}),a.jsx("p",{className:"text-gray-400 text-xs",children:"Belawadi, S.R. Patna Taluk, Mandya Dist, Mysore – 571477, Karnataka"}),a.jsxs("p",{className:"text-gray-400 text-xs font-mono",children:["Ph: +91 98947 33117 / +91 81223 22022",a.jsx("br",{}),"Email: mechanical@mitmysore.in"]}),a.jsx("div",{className:"p-2.5 rounded-lg bg-gray-800 text-[11px] font-mono text-orange-400 border border-gray-700",children:"Lab Timings: Mon – Sat (9 AM – 5 PM)"})]})]}),a.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono",children:[a.jsxs("div",{children:["© ",new Date().getFullYear()," MIT Mysore. Department of Mechanical Engineering. All Rights Reserved."]}),a.jsx("div",{children:a.jsxs("button",{onClick:i,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition",children:[a.jsx("span",{children:"Back to Top"}),a.jsx(Xy,{className:"w-3.5 h-3.5"})]})})]})]})})},sE=({isOpen:t,onClose:e})=>{const[n,i]=re.useState(!1),[r,s]=re.useState(null),[o,l]=re.useState("admin@mitmysore.in"),[c,u]=re.useState("mitmech3d"),[h,p]=re.useState(null),[f,g]=re.useState(!1),[y,_]=re.useState("requests"),[m,d]=re.useState(null),[x,v]=re.useState([]),[b,R]=re.useState([]),[A,T]=re.useState([]),[P,E]=re.useState([]),[S,N]=re.useState(!1),[H,F]=re.useState("All"),[q,$]=re.useState(""),[W,Z]=re.useState(!1),[U,K]=re.useState(null),[X,J]=re.useState(null),[_e,Re]=re.useState(""),[G,te]=re.useState(""),[pe,ce]=re.useState(""),[Oe,Ce]=re.useState(!1),[be,L]=re.useState({title:"",category:"Mechanical",students:"",usn_list:"",guide:"Dr. Mohamed Khaisar",academic_year:"2025-2026",technology:"FDM",material:"PLA",print_time_hours:12,dimensions:"120 x 80 x 50 mm",description:"",features:"",image_url:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",featured:0}),[Le,je]=re.useState(!1),[et,we]=re.useState(!1),[ke,Ie]=re.useState({title:"",category:"Laboratory",image_url:"/images/mit/research_lab.jpg",caption:"",featured:1}),[Fe,st]=re.useState(!1),[C,M]=re.useState(null);re.useEffect(()=>{n&&B()},[n,y]);const B=async()=>{N(!0);try{if(y==="stats"||!m){const D=await St.getStats().catch(()=>null);D&&d(D)}if(y==="requests"){const D=await St.getRequests(H,q);v(D)}else if(y==="materials"){const D=await St.getMaterials();R(D)}else if(y==="projects"){const D=await St.getProjects();T(D)}else if(y==="gallery"){const D=await St.getGallery();E(D)}}catch(D){console.error("Failed to load dashboard data:",D)}finally{N(!1)}},ee=async D=>{D.preventDefault(),g(!0),p(null);try{const se=await St.adminLogin(o,c);i(!0),s(se.user)}catch(se){p(se.message||"Invalid credentials")}finally{g(!1)}},ne=async D=>{if(D.preventDefault(),!!X)try{await St.updateRequestStatus(X.id,_e,G,pe),J(null),B()}catch(se){alert(`Update error: ${se.message}`)}},ie=async D=>{const se=D.stock_status==="In Stock"?"Low Stock":D.stock_status==="Low Stock"?"Out of Stock":"In Stock",Ue=se!=="Out of Stock"?1:0;try{await St.updateMaterial(D.id,{stock_status:se,is_available:Ue}),B()}catch(Be){alert(`Update error: ${Be.message}`)}},Ee=async D=>{D.preventDefault();try{await St.createProject(be),Ce(!1),B()}catch(se){alert(`Create project error: ${se.message}`)}},he=async D=>{if(confirm("Are you sure you want to delete this student project?"))try{await St.deleteProject(D),B()}catch(se){alert(`Delete error: ${se.message}`)}},fe=async D=>{D.preventDefault();try{await St.createGalleryItem(ke),je(!1),Ie({title:"",category:"Laboratory",image_url:"/images/mit/research_lab.jpg",caption:"",featured:1}),B()}catch(se){alert(`Create gallery error: ${se.message}`)}},ze=D=>{M({...D}),st(!0)},oe=async D=>{if(D.preventDefault(),!!C)try{await St.updateGalleryItem(C.id,C),st(!1),M(null),B()}catch(se){alert(`Update gallery error: ${se.message}`)}},Se=async(D,se=!1)=>{var Be;const Ue=(Be=D.target.files)==null?void 0:Be[0];if(Ue){we(!0);try{const it=await St.uploadGalleryImage(Ue);se&&C?M({...C,image_url:it.url}):Ie({...ke,image_url:it.url})}catch(it){alert(`Image upload error: ${it.message}`)}finally{we(!1)}}},Ge=async D=>{if(confirm("Are you sure you want to delete this gallery item?"))try{await St.deleteGalleryItem(D),B()}catch(se){alert(`Delete error: ${se.message}`)}};return t?a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md",children:a.jsxs("div",{className:"relative w-full max-w-6xl bg-[#070e24] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[94vh]",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-cyan-500/20",children:[a.jsxs("div",{className:"flex items-center gap-3.5",children:[a.jsx("div",{className:"w-11 h-11 rounded-xl bg-white p-1 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center justify-center shrink-0",children:a.jsx("img",{src:"/images/mit_logo.png",alt:"MIT Mysore College Logo",className:"w-full h-full object-contain",onError:D=>{D.currentTarget.src="/mit_logo.png"}})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("h3",{className:"text-base font-bold text-white font-['Rajdhani'] uppercase tracking-wide",children:"MIT Mysore AM-Lab Administration"}),a.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Faculty Control"})]}),a.jsx("p",{className:"text-xs text-slate-400 font-mono",children:n&&r?`${r.name} (${r.role}) • Dept. of Mechanical Engineering`:"Maharaja Institute of Technology Mysore • Authentication Required"})]})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[n&&a.jsxs("button",{onClick:()=>i(!1),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition",children:[a.jsx(d_,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Logout"})]}),a.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition",children:a.jsx(Wn,{className:"w-5 h-5"})})]})]}),a.jsx("div",{className:"flex-1 overflow-hidden flex flex-col",children:n?a.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[a.jsxs("div",{className:"w-full md:w-60 bg-slate-900/90 border-r border-cyan-500/10 p-3.5 flex flex-row md:flex-col gap-1.5 overflow-x-auto",children:[a.jsxs("div",{className:"hidden md:flex items-center gap-3 p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 mb-3 shadow-inner",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-white p-1 shrink-0 shadow-md flex items-center justify-center",children:a.jsx("img",{src:"/images/mit_logo.png",alt:"MIT Mysore",className:"w-full h-full object-contain",onError:D=>{D.currentTarget.src="/mit_logo.png"}})}),a.jsxs("div",{className:"overflow-hidden",children:[a.jsx("div",{className:"text-[11px] font-bold text-white font-['Rajdhani'] uppercase tracking-wider truncate",children:"MIT MYSORE"}),a.jsx("div",{className:"text-[10px] text-cyan-400 font-mono truncate",children:"Mechanical Engg."})]})]}),a.jsxs("button",{onClick:()=>_("requests"),className:`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${y==="requests"?"bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:[a.jsx(_s,{className:"w-4 h-4"}),a.jsx("span",{children:"Print Requests"})]}),a.jsxs("button",{onClick:()=>_("materials"),className:`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${y==="materials"?"bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:[a.jsx(th,{className:"w-4 h-4"}),a.jsx("span",{children:"Materials Stock"})]}),a.jsxs("button",{onClick:()=>_("projects"),className:`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${y==="projects"?"bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:[a.jsx(o_,{className:"w-4 h-4"}),a.jsx("span",{children:"Student Projects"})]}),a.jsxs("button",{onClick:()=>_("gallery"),className:`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${y==="gallery"?"bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:[a.jsx(Sx,{className:"w-4 h-4"}),a.jsx("span",{children:"Lab Gallery"})]}),a.jsxs("button",{onClick:()=>_("stats"),className:`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${y==="stats"?"bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:[a.jsx(qy,{className:"w-4 h-4"}),a.jsx("span",{children:"Analytics & KPIs"})]})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-6 bg-slate-950",children:[y==="requests"&&a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800/80",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-white p-1 border border-cyan-500/30 shrink-0 hidden sm:flex items-center justify-center shadow-md",children:a.jsx("img",{src:"/images/mit_logo.png",alt:"MIT Mysore Logo",className:"w-full h-full object-contain",onError:D=>{D.currentTarget.src="/mit_logo.png"}})}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide",children:"3D Printing Request Pipeline"}),a.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"MIT Mysore Mechanical Engg. • Review, verify CAD geometry, slice, and update printing stages."})]})]}),a.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[a.jsxs("select",{value:H,onChange:D=>{F(D.target.value),B()},className:"bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white font-mono focus:outline-none",children:[a.jsx("option",{value:"All",children:"All Statuses"}),a.jsx("option",{value:"Submitted",children:"Submitted"}),a.jsx("option",{value:"Under Review",children:"Under Review"}),a.jsx("option",{value:"Printing in Progress",children:"Printing in Progress"}),a.jsx("option",{value:"Ready for Pickup",children:"Ready for Pickup"}),a.jsx("option",{value:"Completed",children:"Completed"}),a.jsx("option",{value:"Rejected",children:"Rejected"})]}),a.jsx("button",{onClick:B,className:"p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition",title:"Refresh Queue",children:a.jsx(m_,{className:"w-4 h-4"})})]})]}),a.jsx("div",{className:"glass-card rounded-2xl border border-slate-800 overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[a.jsx("thead",{className:"bg-slate-900 text-slate-400 border-b border-slate-800 uppercase text-[10px]",children:a.jsxs("tr",{children:[a.jsx("th",{className:"p-3.5",children:"ID / USN"}),a.jsx("th",{className:"p-3.5",children:"Student / Project"}),a.jsx("th",{className:"p-3.5",children:"Tech & Material"}),a.jsx("th",{className:"p-3.5",children:"Quantity"}),a.jsx("th",{className:"p-3.5",children:"Status"}),a.jsx("th",{className:"p-3.5 text-right",children:"Actions"})]})}),a.jsx("tbody",{className:"divide-y divide-slate-800/60",children:x.map(D=>a.jsxs("tr",{className:"hover:bg-slate-900/40 transition",children:[a.jsxs("td",{className:"p-3.5",children:[a.jsx("div",{className:"font-bold text-cyan-300",children:D.id}),a.jsx("div",{className:"text-[11px] text-slate-400",children:D.usn})]}),a.jsxs("td",{className:"p-3.5",children:[a.jsx("div",{className:"font-semibold text-white",children:D.student_name}),a.jsx("div",{className:"text-[11px] text-slate-400 truncate max-w-xs",children:D.project_name})]}),a.jsxs("td",{className:"p-3.5",children:[a.jsx("span",{className:"text-white font-bold",children:D.technology}),a.jsx("span",{className:"text-slate-400 block text-[11px]",children:D.material})]}),a.jsxs("td",{className:"p-3.5",children:[a.jsx("span",{className:"text-white font-bold",children:D.quantity}),a.jsxs("span",{className:"text-slate-500 block text-[10px]",children:[D.infill_percentage,"% infill"]})]}),a.jsx("td",{className:"p-3.5",children:a.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold border ${D.status==="Ready for Pickup"||D.status==="Completed"?"bg-emerald-950 text-emerald-300 border-emerald-800":D.status==="Printing in Progress"?"bg-cyan-950 text-cyan-300 border-cyan-800 animate-pulse":D.status==="Rejected"?"bg-rose-950 text-rose-300 border-rose-800":"bg-blue-950 text-blue-300 border-blue-800"}`,children:D.status})}),a.jsx("td",{className:"p-3.5 text-right",children:a.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[D.file_name&&D.file_name.toLowerCase().endsWith(".stl")&&a.jsx("button",{onClick:()=>{K({url:`/uploads/${D.file_path}`,name:D.file_name||"CAD Model"}),Z(!0)},className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition",title:"3D Inspect STL",children:a.jsx(eh,{className:"w-4 h-4"})}),D.file_path&&a.jsx("a",{href:`/uploads/${D.file_path}`,download:D.file_name,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition",title:"Download 3D File",children:a.jsx(wx,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>{J(D),Re(D.status),te(D.admin_notes||""),ce(D.estimated_completion||"")},className:"p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition",title:"Update Status / Notes",children:a.jsx(Tf,{className:"w-4 h-4"})})]})})]},D.id))})]})})]}),y==="materials"&&a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide",children:"Material Availability & Cost Management"}),a.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Configure live availability, stock alerts, and subsidized recovery pricing for student orders."})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:b.map(D=>a.jsxs("div",{className:"glass-card rounded-2xl border border-slate-800 p-5 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:D.category}),a.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${D.stock_status==="In Stock"?"bg-emerald-950 text-emerald-300":D.stock_status==="Low Stock"?"bg-amber-950 text-amber-300":"bg-rose-950 text-rose-300"}`,children:D.stock_status})]}),a.jsx("h5",{className:"text-base font-bold text-white font-['Rajdhani'] mb-1",children:D.name}),a.jsx("p",{className:"text-xs text-slate-400 line-clamp-2 mb-3",children:D.description}),a.jsxs("div",{className:"text-xs font-mono text-slate-300 mb-4",children:["Recovery Rate: ",a.jsxs("span",{className:"text-cyan-300 font-bold",children:["₹",D.price_per_gram,"/g"]})]})]}),a.jsxs("div",{className:"pt-3 border-t border-slate-800 flex items-center justify-between",children:[a.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"Toggle Stock:"}),a.jsxs("button",{onClick:()=>ie(D),className:"px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 transition",children:["Cycle Status (",D.stock_status,")"]})]})]},D.id))})]}),y==="projects"&&a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide",children:"Student Projects Registry"}),a.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Add or curate published student mechanical engineering capstone projects."})]}),a.jsxs("button",{onClick:()=>Ce(!0),className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase transition shadow-lg shadow-cyan-500/30",children:[a.jsx(Af,{className:"w-4 h-4"}),a.jsx("span",{children:"Add Project"})]})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:A.map(D=>a.jsxs("div",{className:"glass-card rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between",children:[a.jsxs("div",{className:"h-36 relative overflow-hidden bg-slate-900",children:[a.jsx("img",{src:D.image_url,alt:D.title,className:"w-full h-full object-cover"}),a.jsx("span",{className:"absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-cyan-300",children:D.category})]}),a.jsxs("div",{className:"p-4 flex-1 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsx("h5",{className:"text-sm font-bold text-white font-['Rajdhani'] mb-1 line-clamp-1",children:D.title}),a.jsxs("p",{className:"text-xs text-slate-400 font-mono mb-2",children:["Team: ",D.students]}),a.jsxs("p",{className:"text-[11px] text-slate-500 font-mono mb-4",children:[D.technology," • ",D.material]})]}),a.jsxs("div",{className:"pt-3 border-t border-slate-800 flex items-center justify-between",children:[a.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:D.academic_year}),a.jsx("button",{onClick:()=>he(D.id),className:"p-1.5 rounded-lg text-rose-400 hover:bg-rose-950/40 transition",title:"Delete Project",children:a.jsx(Cf,{className:"w-4 h-4"})})]})]})]},D.id))})]}),y==="gallery"&&a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide",children:"Our 3D Printing Facility Gallery Curator"}),a.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Add, replace, and curate photographs of 3D printers, laboratory stations, equipment, printed models, and student activities."})]}),a.jsxs("button",{onClick:()=>je(!0),className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase transition shadow-lg shadow-cyan-500/30",children:[a.jsx(Af,{className:"w-4 h-4"}),a.jsx("span",{children:"Add Facility Photo"})]})]}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",children:P.map(D=>a.jsxs("div",{className:"relative rounded-xl overflow-hidden group glass-card border border-slate-800 h-48 flex flex-col justify-end",children:[a.jsx("img",{src:D.image_url,alt:D.title,className:"absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onError:se=>{se.currentTarget.src="/images/mit/research_lab.jpg"}}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"}),a.jsxs("div",{className:"relative z-10 p-2.5",children:[a.jsx("span",{className:"text-[9px] font-mono font-bold text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800 inline-block mb-1",children:D.category}),a.jsx("span",{className:"text-xs font-bold text-white font-['Rajdhani'] line-clamp-1 block",children:D.title}),D.caption&&a.jsx("span",{className:"text-[10px] text-slate-300 line-clamp-1 font-mono",children:D.caption})]}),a.jsxs("div",{className:"absolute top-2 right-2 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-20",children:[a.jsx("button",{onClick:()=>ze(D),className:"p-1.5 rounded-lg bg-black/80 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 border border-cyan-500/40 transition",title:"Replace Photo / Edit",children:a.jsx(Tf,{className:"w-3.5 h-3.5"})}),a.jsx("button",{onClick:()=>Ge(D.id),className:"p-1.5 rounded-lg bg-black/80 text-rose-400 hover:bg-rose-950 hover:text-rose-300 border border-rose-500/40 transition",title:"Delete Item",children:a.jsx(Cf,{className:"w-3.5 h-3.5"})})]})]},D.id))})]}),y==="stats"&&a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide",children:"Laboratory Analytics & Operational KPIs"}),a.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Overview of request volume, printer utilization, and popular engineering polymers."})]}),m&&a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[a.jsxs("div",{className:"p-5 rounded-2xl glass-card border border-slate-800",children:[a.jsx("span",{className:"text-slate-400 text-xs font-mono",children:"TOTAL REQUESTS"}),a.jsx("div",{className:"text-3xl font-black text-cyan-400 font-mono mt-1",children:m.total_requests})]}),a.jsxs("div",{className:"p-5 rounded-2xl glass-card border border-slate-800",children:[a.jsx("span",{className:"text-slate-400 text-xs font-mono",children:"ACTIVE PRINT JOBS"}),a.jsx("div",{className:"text-3xl font-black text-amber-400 font-mono mt-1",children:m.active_jobs})]}),a.jsxs("div",{className:"p-5 rounded-2xl glass-card border border-slate-800",children:[a.jsx("span",{className:"text-slate-400 text-xs font-mono",children:"COMPLETED PRINTS"}),a.jsx("div",{className:"text-3xl font-black text-emerald-400 font-mono mt-1",children:m.completed_jobs})]}),a.jsxs("div",{className:"p-5 rounded-2xl glass-card border border-slate-800",children:[a.jsx("span",{className:"text-slate-400 text-xs font-mono",children:"MATERIALS STOCKED"}),a.jsx("div",{className:"text-3xl font-black text-white font-mono mt-1",children:m.available_materials})]})]})]})]})]}):a.jsx("div",{className:"flex-1 flex items-center justify-center p-6 bg-slate-950/80",children:a.jsxs("div",{className:"w-full max-w-md p-8 rounded-3xl glass-card border border-cyan-500/30 shadow-2xl text-center",children:[a.jsx("div",{className:"w-24 h-24 rounded-full bg-white p-2 border-2 border-cyan-400/50 shadow-[0_0_25px_rgba(0,240,255,0.35)] mx-auto mb-4 flex items-center justify-center",children:a.jsx("img",{src:"/images/mit_logo.png",alt:"Maharaja Institute of Technology Mysore Logo",className:"w-full h-full object-contain",onError:D=>{D.currentTarget.src="/mit_logo.png"}})}),a.jsx("div",{className:"inline-block px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-[11px] font-mono text-cyan-300 uppercase tracking-wider mb-2",children:"Maharaja Institute of Technology Mysore"}),a.jsx("h4",{className:"text-xl font-bold text-center text-white font-['Rajdhani'] uppercase mb-1",children:"Department of Mechanical Engineering"}),a.jsx("p",{className:"text-xs text-center text-cyan-400 font-mono mb-6",children:"Additive Manufacturing & 3D Printing Control Portal"}),h&&a.jsxs("div",{className:"p-3 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs font-mono mb-4 flex items-center gap-2",children:[a.jsx(La,{className:"w-4 h-4"}),a.jsx("span",{children:h})]}),a.jsxs("form",{onSubmit:ee,className:"flex flex-col gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Email"}),a.jsx("input",{type:"email",value:o,onChange:D=>l(D.target.value),className:"w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 px-4 py-2.5 rounded-xl text-sm text-white focus:outline-none font-mono",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Password"}),a.jsx("input",{type:"password",value:c,onChange:D=>u(D.target.value),className:"w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 px-4 py-2.5 rounded-xl text-sm text-white focus:outline-none font-mono",required:!0})]}),a.jsx("button",{type:"submit",disabled:f,className:"w-full mt-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/30 disabled:opacity-50",children:f?"Authenticating...":"Sign In as Administrator"}),a.jsx("div",{className:"text-center mt-3 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400",children:"Pre-configured credentials loaded for instant access."})]})]})})}),X&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",children:a.jsxs("div",{className:"bg-[#070e24] border border-cyan-500/40 rounded-2xl p-6 max-w-lg w-full shadow-2xl",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/20",children:[a.jsxs("h4",{className:"text-lg font-bold text-white font-['Rajdhani'] uppercase",children:["Update Request: ",X.id]}),a.jsx("button",{onClick:()=>J(null),className:"text-slate-400 hover:text-white",children:a.jsx(Wn,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:ne,className:"flex flex-col gap-4 text-xs font-mono",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Pipeline Status:"}),a.jsxs("select",{value:_e,onChange:D=>Re(D.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",children:[a.jsx("option",{value:"Submitted",children:"Submitted"}),a.jsx("option",{value:"Under Review",children:"Under Review"}),a.jsx("option",{value:"Slicing & Approved",children:"Slicing & Approved"}),a.jsx("option",{value:"Queued for Printing",children:"Queued for Printing"}),a.jsx("option",{value:"Printing in Progress",children:"Printing in Progress"}),a.jsx("option",{value:"Post-Processing",children:"Post-Processing"}),a.jsx("option",{value:"Ready for Pickup",children:"Ready for Pickup"}),a.jsx("option",{value:"Completed",children:"Completed"}),a.jsx("option",{value:"Rejected",children:"Rejected"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Estimated Completion Date / Note:"}),a.jsx("input",{type:"text",value:pe,onChange:D=>ce(D.target.value),placeholder:"e.g. 2026-11-18 16:00 / Ready for Pickup",className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Laboratory Slicing & Engineering Feedback:"}),a.jsx("textarea",{rows:3,value:G,onChange:D=>te(D.target.value),placeholder:"Add notes for student (e.g. Layer 0.16mm sliced in Cura. Bed temp 60C. Ready in Locker A-2).",className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"})]}),a.jsxs("div",{className:"flex items-center justify-end gap-3 pt-4 border-t border-slate-800",children:[a.jsx("button",{type:"button",onClick:()=>J(null),className:"px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase",children:"Save Changes"})]})]})]})}),Oe&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",children:a.jsxs("div",{className:"bg-[#070e24] border border-cyan-500/40 rounded-2xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/20",children:[a.jsx("h4",{className:"text-lg font-bold text-white font-['Rajdhani'] uppercase",children:"Add Student Capstone Project"}),a.jsx("button",{onClick:()=>Ce(!1),className:"text-slate-400 hover:text-white",children:a.jsx(Wn,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:Ee,className:"flex flex-col gap-3 text-xs font-mono",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Project Title:"}),a.jsx("input",{type:"text",value:be.title,onChange:D=>L({...be,title:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",required:!0})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Category:"}),a.jsxs("select",{value:be.category,onChange:D=>L({...be,category:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none",children:[a.jsx("option",{value:"Mechanical",children:"Mechanical"}),a.jsx("option",{value:"Automotive",children:"Automotive"}),a.jsx("option",{value:"Gear Systems",children:"Gear Systems"}),a.jsx("option",{value:"Robotics",children:"Robotics"}),a.jsx("option",{value:"Industrial",children:"Industrial"}),a.jsx("option",{value:"Final-Year Capstone",children:"Final-Year Capstone"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Academic Year:"}),a.jsx("input",{type:"text",value:be.academic_year,onChange:D=>L({...be,academic_year:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Student Names:"}),a.jsx("input",{type:"text",value:be.students,onChange:D=>L({...be,students:D.target.value}),placeholder:"e.g. Arjun Rao, Bhavana K",className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Student USNs:"}),a.jsx("input",{type:"text",value:be.usn_list,onChange:D=>L({...be,usn_list:D.target.value}),placeholder:"e.g. 4MH21ME012, 4MH21ME028",className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white",required:!0})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Technology:"}),a.jsx("input",{type:"text",value:be.technology,onChange:D=>L({...be,technology:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Material:"}),a.jsx("input",{type:"text",value:be.material,onChange:D=>L({...be,material:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Image URL:"}),a.jsx("input",{type:"text",value:be.image_url,onChange:D=>L({...be,image_url:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Description:"}),a.jsx("textarea",{rows:2,value:be.description,onChange:D=>L({...be,description:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white",required:!0})]}),a.jsxs("div",{className:"flex items-center justify-end gap-3 pt-3 border-t border-slate-800",children:[a.jsx("button",{type:"button",onClick:()=>Ce(!1),className:"px-4 py-2 rounded-xl bg-slate-800 text-slate-300",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold uppercase",children:"Save Project"})]})]})]})}),Le&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",children:a.jsxs("div",{className:"bg-[#070e24] border border-cyan-500/40 rounded-2xl p-6 max-w-md w-full shadow-2xl",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/20",children:[a.jsx("h4",{className:"text-lg font-bold text-white font-['Rajdhani'] uppercase",children:"Add Facility Photograph"}),a.jsx("button",{onClick:()=>je(!1),className:"text-slate-400 hover:text-white",children:a.jsx(Wn,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:fe,className:"flex flex-col gap-3 text-xs font-mono",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Photo Title:"}),a.jsx("input",{type:"text",value:ke.title,onChange:D=>Ie({...ke,title:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",placeholder:"e.g. FDM Industrial 3D Printer Station",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Facility Category:"}),a.jsxs("select",{value:ke.category,onChange:D=>Ie({...ke,category:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",children:[a.jsx("option",{value:"Laboratory",children:"Laboratory"}),a.jsx("option",{value:"3D Printers",children:"3D Printers"}),a.jsx("option",{value:"Equipment",children:"Equipment"}),a.jsx("option",{value:"Printed Models",children:"Printed Models"}),a.jsx("option",{value:"Student Activities",children:"Student Activities"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Upload Real Photo File:"}),a.jsx("input",{type:"file",accept:"image/*",onChange:D=>Se(D,!1),className:"w-full text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30"}),et&&a.jsx("div",{className:"text-[11px] text-cyan-400 mt-1",children:"Uploading image..."})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Image URL or Local Path:"}),a.jsx("input",{type:"text",value:ke.image_url,onChange:D=>Ie({...ke,image_url:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",placeholder:"/images/mit/... or upload above",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Technical Caption:"}),a.jsx("input",{type:"text",value:ke.caption,onChange:D=>Ie({...ke,caption:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",placeholder:"Description of machine, specifications, or activity..."})]}),a.jsxs("div",{className:"flex items-center justify-end gap-3 pt-3 border-t border-slate-800",children:[a.jsx("button",{type:"button",onClick:()=>je(!1),className:"px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold uppercase hover:bg-cyan-400 transition",children:"Save Photo"})]})]})]})}),Fe&&C&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",children:a.jsxs("div",{className:"bg-[#070e24] border border-cyan-500/40 rounded-2xl p-6 max-w-md w-full shadow-2xl",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/20",children:[a.jsx("h4",{className:"text-lg font-bold text-white font-['Rajdhani'] uppercase",children:"Replace / Edit Facility Photo"}),a.jsx("button",{onClick:()=>st(!1),className:"text-slate-400 hover:text-white",children:a.jsx(Wn,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:oe,className:"flex flex-col gap-3 text-xs font-mono",children:[a.jsxs("div",{className:"w-full h-36 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center relative",children:[a.jsx("img",{src:C.image_url,alt:C.title,className:"w-full h-full object-cover",onError:D=>{D.currentTarget.src="/images/mit/research_lab.jpg"}}),a.jsx("span",{className:"absolute bottom-1 right-2 text-[10px] bg-black/80 px-2 py-0.5 rounded text-cyan-300",children:"Current Preview"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Replace With Real Photo File:"}),a.jsx("input",{type:"file",accept:"image/*",onChange:D=>Se(D,!0),className:"w-full text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30"}),et&&a.jsx("div",{className:"text-[11px] text-cyan-400 mt-1",children:"Uploading replacement..."})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Photo Title:"}),a.jsx("input",{type:"text",value:C.title,onChange:D=>M({...C,title:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Category:"}),a.jsxs("select",{value:C.category,onChange:D=>M({...C,category:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",children:[a.jsx("option",{value:"Laboratory",children:"Laboratory"}),a.jsx("option",{value:"3D Printers",children:"3D Printers"}),a.jsx("option",{value:"Equipment",children:"Equipment"}),a.jsx("option",{value:"Printed Models",children:"Printed Models"}),a.jsx("option",{value:"Student Activities",children:"Student Activities"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Image URL / Path:"}),a.jsx("input",{type:"text",value:C.image_url,onChange:D=>M({...C,image_url:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-slate-400 block mb-1",children:"Caption:"}),a.jsx("input",{type:"text",value:C.caption||"",onChange:D=>M({...C,caption:D.target.value}),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"})]}),a.jsxs("div",{className:"flex items-center justify-end gap-3 pt-3 border-t border-slate-800",children:[a.jsx("button",{type:"button",onClick:()=>st(!1),className:"px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold uppercase hover:bg-cyan-400 transition",children:"Save Changes"})]})]})]})}),U&&a.jsx(lh,{isOpen:W,onClose:()=>Z(!1),fileUrl:U.url,modelName:U.name})]})}):null};function aE(){const[t,e]=re.useState(!1),[n,i]=re.useState(void 0),[r,s]=re.useState(void 0),[o,l]=re.useState(void 0),c=y=>{const _=document.getElementById(y);_&&_.scrollIntoView({behavior:"smooth"})},u=()=>{c("request-printing")},h=()=>{c("track")},p=y=>{s(y),c("request-printing")},f=y=>{l(y),c("request-printing")},g=y=>{y&&i(y),c("track")};return a.jsxs("div",{className:"min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#f15a24] selection:text-white",children:[a.jsx(__,{onRequestClick:u,onTrackClick:h,onAdminClick:()=>e(!0)}),a.jsxs("main",{className:"flex-1",children:[a.jsx(S_,{onRequestClick:u,onTrackClick:h}),a.jsx(b_,{}),a.jsx(J2,{}),a.jsx(eE,{}),a.jsx(M_,{}),a.jsx(w_,{onRequestService:p}),a.jsx(A_,{onSelectMaterial:f}),a.jsx(C_,{}),a.jsx(Z2,{onTrackNavigate:g,prefilledService:r,prefilledMaterial:o}),a.jsx(Q2,{initialQuery:n,onRequestNew:u}),a.jsx(tE,{}),a.jsx(nE,{}),a.jsx(iE,{})]}),a.jsx(rE,{onAdminClick:()=>e(!0),onRequestClick:u,onTrackClick:h}),a.jsx(sE,{isOpen:t,onClose:()=>e(!1)})]})}iu.createRoot(document.getElementById("root")).render(a.jsx(N0.StrictMode,{children:a.jsx(aE,{})}));
