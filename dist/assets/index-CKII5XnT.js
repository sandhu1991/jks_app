const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-BryA1KSP.js","assets/LegacyPageShell-1RlV-rJK.js","assets/AboutView-CsNmgNd8.js","assets/ContactView-CitWx6mo.js","assets/ServicesIndexView-BVq7BH1e.js","assets/ServiceTopicView-BPo3v0cy.js","assets/ServiceTopicView-BxHuNDlh.css","assets/LegalPlaceholderView-CAOoRd_I.js","assets/LegalPlaceholderView-C4n2yfpj.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,ie=te(e=>e.replace(re,`-$1`).toLowerCase()),ae=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),oe=te(e=>e?`on${ae(e)}`:``),E=(e,t)=>!Object.is(e,t),se=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},D=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ce=e=>{let t=parseFloat(e);return isNaN(t)?e:t},le,ue=()=>le||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function de(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?he(r):de(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var fe=/;(?![^(]*\))/g,pe=/:([^]+)/,me=/\/\*[^]*?\*\//g;function he(e){let t={};return e.replace(me,``).split(fe).forEach(e=>{if(e){let n=e.split(pe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function O(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=O(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ge=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,_e=e(ge);ge+``;function ve(e){return!!e||e===``}function ye(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=be(e[r],t[r]);return n}function be(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ye(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!be(e[n],t[n]))return!1}}return String(e)===String(t)}var xe=e=>!!(e&&e.__v_isRef===!0),Se=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?xe(e)?Se(e.value):JSON.stringify(e,Ce,2):String(e),Ce=(e,t)=>xe(t)?Ce(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[we(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>we(e))}:_(t)?we(t):v(t)&&!d(t)&&!C(t)?String(t):t,we=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,k,Te=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=k,!e&&k&&(this.index=(k.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=k;try{return k=this,e()}finally{k=t}}}on(){++this._on===1&&(this.prevScope=k,k=this)}off(){if(this._on>0&&--this._on===0){if(k===this)k=this.prevScope;else{let e=k;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ee(){return k}var A,De=new WeakSet,Oe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,k&&k.active&&k.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,De.has(this)&&(De.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Me(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ge(this),Fe(this);let e=A,t=Ve;A=this,Ve=!0;try{return this.fn()}finally{Ie(this),A=e,Ve=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ze(e);this.deps=this.depsTail=void 0,Ge(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?De.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Le(this)&&this.run()}get dirty(){return Le(this)}},ke=0,Ae,je;function Me(e,t=!1){if(e.flags|=8,t){e.next=je,je=e;return}e.next=Ae,Ae=e}function Ne(){ke++}function Pe(){if(--ke>0)return;if(je){let e=je;for(je=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ae;){let t=Ae;for(Ae=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Fe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ie(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),ze(r),Be(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Le(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Re(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Re(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ke)||(e.globalVersion=Ke,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Le(e))))return;e.flags|=2;let t=e.dep,n=A,r=Ve;A=e,Ve=!0;try{Fe(e);let n=e.fn(e._value);(t.version===0||E(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{A=n,Ve=r,Ie(e),e.flags&=-3}}function ze(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)ze(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Be(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ve=!0,He=[];function Ue(){He.push(Ve),Ve=!1}function We(){let e=He.pop();Ve=e===void 0?!0:e}function Ge(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=A;A=void 0;try{t()}finally{A=e}}}var Ke=0,qe=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Je=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!A||!Ve||A===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==A)t=this.activeLink=new qe(A,this),A.deps?(t.prevDep=A.depsTail,A.depsTail.nextDep=t,A.depsTail=t):A.deps=A.depsTail=t,Ye(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=A.depsTail,t.nextDep=void 0,A.depsTail.nextDep=t,A.depsTail=t,A.deps===t&&(A.deps=e)}return t}trigger(e){this.version++,Ke++,this.notify(e)}notify(e){Ne();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Pe()}}};function Ye(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ye(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Xe=new WeakMap,Ze=Symbol(``),Qe=Symbol(``),$e=Symbol(``);function j(e,t,n){if(Ve&&A){let t=Xe.get(e);t||Xe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Je),r.map=t,r.key=n),r.track()}}function et(e,t,n,r,i,a){let o=Xe.get(e);if(!o){Ke++;return}let s=e=>{e&&e.trigger()};if(Ne(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===$e||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get($e)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ze)),f(e)&&s(o.get(Qe)));break;case`delete`:i||(s(o.get(Ze)),f(e)&&s(o.get(Qe)));break;case`set`:f(e)&&s(o.get(Ze));break}}Pe()}function tt(e){let t=M(e);return t===e?t:(j(t,`iterate`,$e),Vt(e)?t:t.map(Wt))}function nt(e){return j(e=M(e),`iterate`,$e),e}function rt(e,t){return Bt(e)?Gt(zt(e)?Wt(t):t):Wt(t)}var it={__proto__:null,[Symbol.iterator](){return at(this,Symbol.iterator,e=>rt(this,e))},concat(...e){return tt(this).concat(...e.map(e=>d(e)?tt(e):e))},entries(){return at(this,`entries`,e=>(e[1]=rt(this,e[1]),e))},every(e,t){return st(this,`every`,e,t,void 0,arguments)},filter(e,t){return st(this,`filter`,e,t,e=>e.map(e=>rt(this,e)),arguments)},find(e,t){return st(this,`find`,e,t,e=>rt(this,e),arguments)},findIndex(e,t){return st(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return st(this,`findLast`,e,t,e=>rt(this,e),arguments)},findLastIndex(e,t){return st(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return st(this,`forEach`,e,t,void 0,arguments)},includes(...e){return lt(this,`includes`,e)},indexOf(...e){return lt(this,`indexOf`,e)},join(e){return tt(this).join(e)},lastIndexOf(...e){return lt(this,`lastIndexOf`,e)},map(e,t){return st(this,`map`,e,t,void 0,arguments)},pop(){return ut(this,`pop`)},push(...e){return ut(this,`push`,e)},reduce(e,...t){return ct(this,`reduce`,e,t)},reduceRight(e,...t){return ct(this,`reduceRight`,e,t)},shift(){return ut(this,`shift`)},some(e,t){return st(this,`some`,e,t,void 0,arguments)},splice(...e){return ut(this,`splice`,e)},toReversed(){return tt(this).toReversed()},toSorted(e){return tt(this).toSorted(e)},toSpliced(...e){return tt(this).toSpliced(...e)},unshift(...e){return ut(this,`unshift`,e)},values(){return at(this,`values`,e=>rt(this,e))}};function at(e,t,n){let r=nt(e),i=r[t]();return r!==e&&!Vt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ot=Array.prototype;function st(e,t,n,r,i,a){let o=nt(e),s=o!==e&&!Vt(e),c=o[t];if(c!==ot[t]){let t=c.apply(e,a);return s?Wt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,rt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ct(e,t,n,r){let i=nt(e),a=i!==e&&!Vt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=rt(e,t)),n.call(this,t,rt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?rt(e,c):c}function lt(e,t,n){let r=M(e);j(r,`iterate`,$e);let i=r[t](...n);return(i===-1||i===!1)&&Ht(n[0])?(n[0]=M(n[0]),r[t](...n)):i}function ut(e,t,n=[]){Ue(),Ne();let r=M(e)[t].apply(e,n);return Pe(),We(),r}var dt=e(`__proto__,__v_isRef,__isVue`),ft=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function pt(e){_(e)||(e=String(e));let t=M(this);return j(t,`has`,e),t.hasOwnProperty(e)}var mt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Mt:jt:i?At:kt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=it[t]))return e;if(t===`hasOwnProperty`)return pt}let o=Reflect.get(e,t,N(e)?e:n);if((_(t)?ft.has(t):dt(t))||(r||j(e,`get`,t),i))return o;if(N(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Lt(e):e}return v(o)?r?Lt(o):Ft(o):o}},ht=class extends mt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Bt(i);if(!Vt(n)&&!Bt(n)&&(i=M(i),n=M(n)),!a&&N(i)&&!N(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,N(e)?e:r);return e===M(r)&&(o?E(n,i)&&et(e,`set`,t,n,i):et(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&et(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!ft.has(t))&&j(e,`has`,t),n}ownKeys(e){return j(e,`iterate`,d(e)?`length`:Ze),Reflect.ownKeys(e)}},gt=class extends mt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},_t=new ht,vt=new gt,yt=new ht(!0),bt=e=>e,xt=e=>Reflect.getPrototypeOf(e);function St(e,t,n){return function(...r){let i=this.__v_raw,a=M(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?bt:t?Gt:Wt;return!t&&j(a,`iterate`,l?Qe:Ze),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Ct(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function wt(e,t){let n={get(n){let r=this.__v_raw,i=M(r),a=M(n);e||(E(n,a)&&j(i,`get`,n),j(i,`get`,a));let{has:o}=xt(i),s=t?bt:e?Gt:Wt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&j(M(t),`iterate`,Ze),t.size},has(t){let n=this.__v_raw,r=M(n),i=M(t);return e||(E(t,i)&&j(r,`has`,t),j(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=M(a),s=t?bt:e?Gt:Wt;return!e&&j(o,`iterate`,Ze),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Ct(`add`),set:Ct(`set`),delete:Ct(`delete`),clear:Ct(`clear`)}:{add(e){let n=M(this),r=xt(n),i=M(e),a=!t&&!Vt(e)&&!Bt(e)?i:e;return r.has.call(n,a)||E(e,a)&&r.has.call(n,e)||E(i,a)&&r.has.call(n,i)||(n.add(a),et(n,`add`,a,a)),this},set(e,n){!t&&!Vt(n)&&!Bt(n)&&(n=M(n));let r=M(this),{has:i,get:a}=xt(r),o=i.call(r,e);o||=(e=M(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?E(n,s)&&et(r,`set`,e,n,s):et(r,`add`,e,n),this},delete(e){let t=M(this),{has:n,get:r}=xt(t),i=n.call(t,e);i||=(e=M(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&et(t,`delete`,e,void 0,a),o},clear(){let e=M(this),t=e.size!==0,n=e.clear();return t&&et(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=St(r,e,t)}),n}function Tt(e,t){let n=wt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Et={get:Tt(!1,!1)},Dt={get:Tt(!1,!0)},Ot={get:Tt(!0,!1)},kt=new WeakMap,At=new WeakMap,jt=new WeakMap,Mt=new WeakMap;function Nt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Pt(e){return e.__v_skip||!Object.isExtensible(e)?0:Nt(S(e))}function Ft(e){return Bt(e)?e:Rt(e,!1,_t,Et,kt)}function It(e){return Rt(e,!1,yt,Dt,At)}function Lt(e){return Rt(e,!0,vt,Ot,jt)}function Rt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Pt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function zt(e){return Bt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Vt(e){return!!(e&&e.__v_isShallow)}function Ht(e){return e?!!e.__v_raw:!1}function M(e){let t=e&&e.__v_raw;return t?M(t):e}function Ut(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&D(e,`__v_skip`,!0),e}var Wt=e=>v(e)?Ft(e):e,Gt=e=>v(e)?Lt(e):e;function N(e){return e?e.__v_isRef===!0:!1}function Kt(e){return Jt(e,!1)}function qt(e){return Jt(e,!0)}function Jt(e,t){return N(e)?e:new Yt(e,t)}var Yt=class{constructor(e,t){this.dep=new Je,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:M(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Vt(e)||Bt(e);e=n?e:M(e),E(e,t)&&(this._rawValue=e,this._value=n?e:Wt(e),this.dep.trigger())}};function Xt(e){return N(e)?e.value:e}var Zt={get:(e,t,n)=>t===`__v_raw`?e:Xt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return N(i)&&!N(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Qt(e){return zt(e)?e:new Proxy(e,Zt)}var $t=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Je(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ke-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&A!==this)return Me(this,!0),!0}get value(){let e=this.dep.track();return Re(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function en(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new $t(r,i,n)}var tn={},nn=new WeakMap,rn=void 0;function an(e,t=!1,n=rn){if(n){let t=nn.get(n);t||nn.set(n,t=[]),t.push(e)}}function on(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Vt(e)||o===!1||o===0?sn(e,1):sn(e),m,g,_,v,y=!1,b=!1;if(N(e)?(g=()=>e.value,y=Vt(e)):zt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>zt(e)||Vt(e)),g=()=>e.map(e=>{if(N(e))return e.value;if(zt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ue();try{_()}finally{We()}}let t=rn;rn=m;try{return f?f(e,3,[v]):e(v)}finally{rn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>sn(e(),t)}let x=Ee(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(tn):tn,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>E(e,C[t])):E(e,C))){_&&_();let t=rn;rn=m;try{let t=[e,C===tn?void 0:b&&C[0]===tn?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{rn=t}}}else m.run()};return u&&u(w),m=new Oe(g),m.scheduler=l?()=>l(w,!1):w,v=e=>an(e,!1,m),_=m.onStop=()=>{let e=nn.get(m);if(e){if(f)f(e,4);else for(let t of e)t();nn.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function sn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,N(e))sn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)sn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{sn(e,t,n)});else if(C(e)){for(let r in e)sn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&sn(e[r],t,n)}return e}function cn(e,t,n,r){try{return r?e(...r):e()}catch(e){un(e,t,n)}}function ln(e,t,n,r){if(h(e)){let i=cn(e,t,n,r);return i&&y(i)&&i.catch(e=>{un(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(ln(e[a],t,n,r));return i}}function un(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ue(),cn(o,null,10,[e,i,a]),We();return}}dn(e,r,a,i,s)}function dn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var P=[],fn=-1,pn=[],mn=null,hn=0,gn=Promise.resolve(),_n=null;function vn(e){let t=_n||gn;return e?t.then(this?e.bind(this):e):t}function yn(e){let t=fn+1,n=P.length;for(;t<n;){let r=t+n>>>1,i=P[r],a=Tn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function bn(e){if(!(e.flags&1)){let t=Tn(e),n=P[P.length-1];!n||!(e.flags&2)&&t>=Tn(n)?P.push(e):P.splice(yn(t),0,e),e.flags|=1,xn()}}function xn(){_n||=gn.then(En)}function Sn(e){d(e)?pn.push(...e):mn&&e.id===-1?mn.splice(hn+1,0,e):e.flags&1||(pn.push(e),e.flags|=1),xn()}function Cn(e,t,n=fn+1){for(;n<P.length;n++){let t=P[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;P.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function wn(e){if(pn.length){let e=[...new Set(pn)].sort((e,t)=>Tn(e)-Tn(t));if(pn.length=0,mn){mn.push(...e);return}for(mn=e,hn=0;hn<mn.length;hn++){let e=mn[hn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}mn=null,hn=0}}var Tn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function En(e){try{for(fn=0;fn<P.length;fn++){let e=P[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<P.length;fn++){let e=P[fn];e&&(e.flags&=-2)}fn=-1,P.length=0,wn(e),_n=null,(P.length||pn.length)&&En(e)}}var F=null,Dn=null;function On(e){let t=F;return F=e,Dn=e&&e.type.__scopeId||null,t}function kn(e,t=F,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&$i(-1);let i=On(t),a;try{a=e(...n)}finally{On(i),r._d&&$i(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function An(e,n){if(F===null)return e;let r=Ia(F),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&sn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function jn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ue(),ln(c,n,8,[e.el,s,e,t]),We())}}function Mn(e,t){if(H){let n=H.provides,r=H.parent&&H.parent.provides;r===n&&(n=H.provides=Object.create(r)),n[e]=t}}function Nn(e,t,n=!1){let r=xa();if(r||ri){let i=ri?ri._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Pn=Symbol.for(`v-scx`),Fn=()=>Nn(Pn);function In(e,t){return Rn(e,null,t)}function Ln(e,t,n){return Rn(e,t,n)}function Rn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Da){if(c===`sync`){let e=Fn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=H;u.call=(e,t,n)=>ln(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{L(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():bn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=on(e,n,u);return Da&&(f?f.push(h):d&&h()),h}function zn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Bn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=wa(this),s=Rn(i,a.bind(r),n);return o(),s}function Bn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Vn=new WeakMap,Hn=Symbol(`_vte`),Un=e=>e.__isTeleport,Wn=e=>e&&(e.disabled||e.disabled===``),Gn=e=>e&&(e.defer||e.defer===``),Kn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,qn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Jn=(e,t)=>{let n=e&&e.to;return g(n)?t?t(n):null:n},Yn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Wn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Wn(e.props),r=e.target=Jn(e.props,m),a=er(r,e,h,p);r&&(o!==`svg`&&Kn(r)?o=`svg`:o!==`mathml`&&qn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),$n(e,!1)))},S=e=>{let t=()=>{Vn.get(e)===t&&(Vn.delete(e),Wn(e.props)&&(b(e,_(e.el)||n,e.anchor),$n(e,!0)),x(e))};Vn.set(e,t),L(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Gn(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),$n(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Vn.get(e);if(u){u.flags|=8,Vn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Wn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Kn(p)?o=`svg`:(o===`mathml`||qn(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),zi(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Xn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=Jn(t.props,m);e&&Xn(t,e,null,l,0)}else g&&Xn(t,p,h,l,1);$n(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=a||!Wn(f),m=Vn.get(e);if(m&&(m.flags|=8,Vn.delete(e),p=!1),d&&(i(l),i(u)),a&&i(c),o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,p,!!i.dynamicChildren)}},move:Xn,hydrate:Zn};function Xn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Vn.has(e)&&(!d||Wn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Zn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=Jn(t.props,c),h=Wn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||er(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||er(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),$n(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var Qn=Yn;function $n(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function er(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Hn]=o,e&&(r(a,e,i),r(o,e,i)),o}var tr=Symbol(`_leaveCb`);function nr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,nr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function rr(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function ir(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function ar(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var or=new WeakMap;function sr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>sr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(lr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&sr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?Ia(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=M(v),b=v===t?i:e=>ar(_,e)?!1:u(y,e),x=(e,t)=>!(t&&ar(_,t));if(m!=null&&m!==p){if(cr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(N(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))cn(p,f,12,[l,_]);else{let t=g(p),n=N(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),or.delete(e)};t.id=-1,or.set(e,t),L(t,r)}else cr(e),i()}}}function cr(e){let t=or.get(e);t&&(t.flags|=8,or.delete(e))}ue().requestIdleCallback,ue().cancelIdleCallback;var lr=e=>!!e.type.__asyncLoader,ur=e=>e.type.__isKeepAlive;function dr(e,t){pr(e,`a`,t)}function fr(e,t){pr(e,`da`,t)}function pr(e,t,n=H){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(hr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ur(e.parent.vnode)&&mr(r,t,n,e),e=e.parent}}function mr(e,t,n,r){let i=hr(t,e,r,!0);Sr(()=>{c(r[t],i)},n)}function hr(e,t,n=H,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ue();let i=wa(n),a=ln(t,n,e,r);return i(),We(),a};return r?i.unshift(a):i.push(a),a}}var gr=e=>(t,n=H)=>{(!Da||e===`sp`)&&hr(e,(...e)=>t(...e),n)},_r=gr(`bm`),vr=gr(`m`),yr=gr(`bu`),br=gr(`u`),xr=gr(`bum`),Sr=gr(`um`),Cr=gr(`sp`),wr=gr(`rtg`),Tr=gr(`rtc`);function Er(e,t=H){hr(`ec`,e,t)}var Dr=`components`;function Or(e,t){return Ar(Dr,e,!0,t)||e}var kr=Symbol.for(`v-ndc`);function Ar(e,t,n=!0,r=!1){let i=F||H;if(i){let n=i.type;if(e===Dr){let e=La(n,!1);if(e&&(e===t||e===T(t)||e===ae(T(t))))return n}let a=jr(i[e]||n[e],t)||jr(i.appContext[e],t);return!a&&r?n:a}}function jr(e,t){return e&&(e[t]||e[T(t)]||e[ae(T(t))])}function Mr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&zt(e),r=!1,s=!1;n&&(r=!Vt(e),s=Bt(e),e=nt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Gt(Wt(e[n])):Wt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function Nr(e,t,n={},r,i){if(F.ce||F.parent&&lr(F.parent)&&F.parent.ce){let e=Object.keys(n).length>0;return t!==`default`&&(n.name=t),z(),na(R,null,[V(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),z();let o=a&&Pr(a(n)),s=n.key||o&&o.key,c=na(R,{key:(s&&!_(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function Pr(e){return e.some(e=>ra(e)?!(e.type===qi||e.type===R&&!Pr(e.children)):!0)?e:null}var Fr=e=>e?Ea(e)?Ia(e):Fr(e.parent):null,Ir=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fr(e.parent),$root:e=>Fr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Gr(e),$forceUpdate:e=>e.f||=()=>{bn(e.update)},$nextTick:e=>e.n||=vn.bind(e.proxy),$watch:e=>zn.bind(e)}),Lr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Rr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Lr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Br&&(s[n]=0)}let d=Ir[n],f,p;if(d)return n===`$attrs`&&j(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Lr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Lr(n,c)||u(o,c)||u(i,c)||u(Ir,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function zr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Br=!0;function Vr(e){let t=Gr(e),n=e.proxy,i=e.ctx;Br=!1,t.beforeCreate&&Ur(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:ie,inheritAttrs:ae,components:oe,directives:E,filters:se}=t;if(u&&Hr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Ft(t))}if(Br=!0,o)for(let e in o){let t=o[e],a=za({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Wr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Mn(t,e[t])})}f&&Ur(f,e,`c`);function D(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(D(_r,p),D(vr,m),D(yr,g),D(br,_),D(dr,y),D(fr,b),D(Er,T),D(Tr,te),D(wr,ne),D(xr,S),D(Sr,w),D(Cr,re),d(ie))if(ie.length){let t=e.exposed||={};ie.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ee&&e.render===r&&(e.render=ee),ae!=null&&(e.inheritAttrs=ae),oe&&(e.components=oe),E&&(e.directives=E),re&&ir(e)}function Hr(e,t,n=r){d(e)&&(e=Xr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Nn(r.from||n,r.default,!0):Nn(r.from||n):Nn(r),N(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Ur(e,t,n){ln(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wr(e,t,n,r){let i=r.includes(`.`)?Bn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Ln(i,n)}else if(h(e))Ln(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Wr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Ln(i,r,e)}}function Gr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Kr(c,e,o,!0)),Kr(c,t,o)),v(t)&&a.set(t,c),c}function Kr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Kr(e,a,n,!0),i&&i.forEach(t=>Kr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=qr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var qr={data:Jr,props:Qr,emits:Qr,methods:Zr,computed:Zr,beforeCreate:I,created:I,beforeMount:I,mounted:I,beforeUpdate:I,updated:I,beforeDestroy:I,beforeUnmount:I,destroyed:I,unmounted:I,activated:I,deactivated:I,errorCaptured:I,serverPrefetch:I,components:Zr,directives:Zr,watch:$r,provide:Jr,inject:Yr};function Jr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Yr(e,t){return Zr(Xr(e),Xr(t))}function Xr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function I(e,t){return e?[...new Set([].concat(e,t))]:t}function Zr(e,t){return e?s(Object.create(null),e,t):t}function Qr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),zr(e),zr(t??{})):t}function $r(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=I(e[r],t[r]);return n}function ei(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var ti=0;function ni(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=ei(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:ti++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Va,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||V(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Ia(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(ln(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=ri;ri=l;try{return e()}finally{ri=t}}};return l}}var ri=null,ii=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${ie(t)}Modifiers`];function ai(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&ii(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(ce)));let c,l=i[c=oe(n)]||i[c=oe(T(n))];!l&&o&&(l=i[c=oe(ie(n))]),l&&ln(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ln(u,e,6,a)}}var oi=new WeakMap;function si(e,t,n=!1){let r=n?oi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=si(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function ci(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,ie(t))||u(e,t))}function li(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=On(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=pa(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=pa(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:ui(c)}}catch(t){Yi.length=0,un(t,e,1),v=V(qi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=di(y,a)),b=la(b,y,!1,!0))}return n.dirs&&(b=la(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&nr(b,n.transition),v=b,On(_),v}var ui=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},di=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function fi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?pi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(mi(o,r,n)&&!ci(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?pi(r,o,l):!0:!!o;return!1}function pi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(mi(t,e,a)&&!ci(n,a))return!0}return!1}function mi(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!be(r,i):r!==i}function hi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var gi={},_i=()=>Object.create(gi),vi=e=>Object.getPrototypeOf(e)===gi;function yi(e,t,n,r=!1){let i={},a=_i();e.propsDefaults=Object.create(null),xi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:It(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function bi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=M(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(ci(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=Si(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{xi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=ie(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Si(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&et(e.attrs,`set`,``)}function xi(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:ci(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=M(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=Si(a,n,s,i[s],e,!u(i,s))}}return s}function Si(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=wa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ie(n))&&(r=!0))}return r}var Ci=new WeakMap;function wi(e,r,i=!1){let a=i?Ci:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=wi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);Ti(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(Ti(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function Ti(e){return e[0]!==`$`&&!ee(e)}var Ei=e=>e===`_`||e===`_ctx`||e===`$stable`,Di=e=>d(e)?e.map(pa):[pa(e)],Oi=(e,t,n)=>{if(t._n)return t;let r=kn((...e)=>Di(t(...e)),n);return r._c=!1,r},ki=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Ei(n))continue;let i=e[n];if(h(i))t[n]=Oi(n,i,r);else if(i!=null){let e=Di(i);t[n]=()=>e}}},Ai=(e,t)=>{let n=Di(t);e.slots.default=()=>n},ji=(e,t,n)=>{for(let r in t)(n||!Ei(r))&&(e[r]=t[r])},Mi=(e,t,n)=>{let r=e.slots=_i();if(e.vnode.shapeFlag&32){let e=t._;e?(ji(r,t,n),n&&D(r,`_`,e,!0)):ki(t,r)}else t&&Ai(e,t)},Ni=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:ji(a,n,r):(o=!n.$stable,ki(n,a)),s=n}else n&&(Ai(e,n),s={default:1});if(o)for(let e in a)!Ei(e)&&s[e]==null&&delete a[e]},L=Gi;function Pi(e){return Fi(e)}function Fi(e,i){let a=ue();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!ia(e,t)&&(r=be(e),O(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ki:y(e,t,n,r);break;case qi:b(e,t,n,r);break;case Ji:e??x(t,n,r,o);break;case R:oe(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?E(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Ce)}u!=null&&i?sr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&sr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,Ii(e,a),s,u),_&&jn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&_a(f,r,e)}_&&jn(e,null,r,`beforeMount`);let v=Ri(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&L(()=>{try{f&&_a(f,r,e),v&&g.enter(d),_&&jn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Wi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?ma(e[l]):pa(e[l]),t,n,r,i,a,o,s)},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Li(r,!1),(g=h.onVnodeBeforeUpdate)&&_a(g,r,n,e),f&&jn(n,e,r,`beforeUpdate`),r&&Li(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?ie(e.dynamicChildren,d,l,r,i,Ii(n,a),o):s||fe(e,n,l,null,r,i,Ii(n,a),o,!1),u>0){if(u&16)ae(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ae(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&L(()=>{g&&_a(g,r,n,e),f&&jn(n,e,r,`updated`)},i)},ie=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===R||!ia(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ae=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},oe=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(ie(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&zi(e,t,!0)):fe(e,t,n,f,i,a,s,c,l)},E=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):D(t,n,r,i,a,o,c):ce(e,t,c)},D=(e,t,n,r,i,a,o)=>{let s=e.component=ba(e,r,i);if(ur(e)&&(s.ctx.renderer=Ce),Oa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,le,o),!e.el){let r=s.subTree=V(qi);b(null,r,t,n),e.placeholder=r.el}}else le(s,e,t,n,i,a,o)},ce=(e,t,n)=>{let r=t.component=e.component;if(fi(e,t,n))if(r.asyncDep&&!r.asyncResolved){de(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},le=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Vi(e);if(n){t&&(t.el=c.el,de(e,t,o)),n.asyncDep.then(()=>{L(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Li(e,!1),t?(t.el=c.el,de(e,t,o)):t=c,n&&se(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&_a(d,s,t,c),Li(e,!0);let f=li(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),be(p),e,i,a),t.el=f.el,u===null&&hi(e,f.el),r&&L(r,i),(d=t.props&&t.props.onVnodeUpdated)&&L(()=>_a(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=lr(t);if(Li(e,!1),l&&se(l),!m&&(o=c&&c.onVnodeBeforeMount)&&_a(o,d,t),Li(e,!0),s&&k){let t=()=>{e.subTree=li(e),k(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=li(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&L(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;L(()=>_a(o,d,e),i)}(t.shapeFlag&256||d&&lr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&L(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Oe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>bn(u),Li(e,!0),l()},de=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,bi(e,t.props,r,n),Ni(e,t.children,n),Ue(),Cn(e),We()},fe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){me(l,d,n,r,i,a,o,s,c);return}else if(f&256){pe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ye(l,i,a),d!==l&&p(n,d)):u&16?m&16?me(l,d,n,r,i,a,o,s,c):ye(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},pe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?ma(t[p]):pa(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ye(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},me=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?ma(t[u]):pa(t[u]);if(ia(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?ma(t[p]):pa(t[p]);if(ia(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?ma(t[u]):pa(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)O(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ma(t[u]):pa(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){O(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&ia(n,t[_])){i=_;break}i===void 0?O(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Bi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Ui(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?he(n,r,p,2):_--)}}},he=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){he(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Ce);return}if(c===R){o(a,t,n);for(let e=0;e<u.length;e++)he(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ji){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),L(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[tr](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},O=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ue(),sr(s,null,n,e,!0),We()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!lr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&_a(_,t,e),u&6)ve(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&jn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ce,r):l&&!l.hasOnce&&(a!==R||d>0&&d&64)?ye(l,t,n,!1,!0):(a===R&&d&384||!i&&u&16)&&ye(c,t,n),r&&ge(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&L(()=>{_&&_a(_,t,e),h&&jn(e,null,t,`unmounted`),v&&(e.el=null)},n)},ge=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===R){_e(n,r);return}if(t===Ji){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},_e=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ve=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Hi(c),Hi(l),r&&se(r),i.stop(),a&&(a.flags|=8,O(o,e,t,n)),s&&L(s,t),L(()=>{e.isUnmounted=!0},t)},ye=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)O(e[o],t,n,r,i)},be=e=>{if(e.shapeFlag&6)return be(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Hn];return n?h(n):t},xe=!1,Se=(e,t,n)=>{let r;e==null?t._vnode&&(O(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,xe||=(xe=!0,Cn(r),wn(),!1)},Ce={p:v,um:O,m:he,r:ge,mt:D,mc:T,pc:fe,pbc:ie,n:be,o:e},we,k;return i&&([we,k]=i(Ce)),{render:Se,hydrate:we,createApp:ni(Se,we)}}function Ii({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Li({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ri(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function zi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=ma(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&zi(t,a)),a.type===Ki&&(a.patchFlag===-1&&(a=i[e]=ma(a)),a.el=t.el),a.type===qi&&!a.el&&(a.el=t.el)}}function Bi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Vi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Vi(t)}function Hi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ui(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ui(t.subTree):null}var Wi=e=>e.__isSuspense;function Gi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):Sn(e)}var R=Symbol.for(`v-fgt`),Ki=Symbol.for(`v-txt`),qi=Symbol.for(`v-cmt`),Ji=Symbol.for(`v-stc`),Yi=[],Xi=null;function z(e=!1){Yi.push(Xi=e?null:[])}function Zi(){Yi.pop(),Xi=Yi[Yi.length-1]||null}var Qi=1;function $i(e,t=!1){Qi+=e,e<0&&Xi&&t&&(Xi.hasOnce=!0)}function ea(e){return e.dynamicChildren=Qi>0?Xi||n:null,Zi(),Qi>0&&Xi&&Xi.push(e),e}function ta(e,t,n,r,i,a){return ea(B(e,t,n,r,i,a,!0))}function na(e,t,n,r,i){return ea(V(e,t,n,r,i,!0))}function ra(e){return e?e.__v_isVNode===!0:!1}function ia(e,t){return e.type===t.type&&e.key===t.key}var aa=({key:e})=>e??null,oa=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||N(e)||h(e)?{i:F,r:e,k:t,f:!!n}:e);function B(e,t=null,n=null,r=0,i=null,a=e===R?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&aa(t),ref:t&&oa(t),scopeId:Dn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:F};return s?(ha(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Qi>0&&!o&&Xi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Xi.push(c),c}var V=sa;function sa(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===kr)&&(e=qi),ra(e)){let r=la(e,t,!0);return n&&ha(r,n),Qi>0&&!a&&Xi&&(r.shapeFlag&6?Xi[Xi.indexOf(e)]=r:Xi.push(r)),r.patchFlag=-2,r}if(Ra(e)&&(e=e.__vccOpts),t){t=ca(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=O(e)),v(n)&&(Ht(n)&&!d(n)&&(n=s({},n)),t.style=de(n))}let o=g(e)?1:Wi(e)?128:Un(e)?64:v(e)?4:h(e)?2:0;return B(e,t,n,r,i,o,a,!0)}function ca(e){return e?Ht(e)||vi(e)?s({},e):e:null}function la(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ga(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&aa(l),ref:t&&t.ref?n&&a?d(a)?a.concat(oa(t)):[a,oa(t)]:oa(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==R?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&la(e.ssContent),ssFallback:e.ssFallback&&la(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&nr(u,c.clone(u)),u}function ua(e=` `,t=0){return V(Ki,null,e,t)}function da(e,t){let n=V(Ji,null,e);return n.staticCount=t,n}function fa(e=``,t=!1){return t?(z(),na(qi,null,e)):V(qi,null,e)}function pa(e){return e==null||typeof e==`boolean`?V(qi):d(e)?V(R,null,e.slice()):ra(e)?ma(e):V(Ki,null,String(e))}function ma(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:la(e)}function ha(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ha(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!vi(t)?t._ctx=F:r===3&&F&&(F.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:F},n=32):(t=String(t),r&64?(n=16,t=[ua(t)]):n=8);e.children=t,e.shapeFlag|=n}function ga(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=O([t.class,r.class]));else if(e===`style`)t.style=de([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function _a(e,t,n,r=null){ln(e,t,7,[n,r])}var va=ei(),ya=0;function ba(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||va,o={uid:ya++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Te(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wi(i,a),emitsOptions:si(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=ai.bind(null,o),e.ce&&e.ce(o),o}var H=null,xa=()=>H||F,Sa,Ca;{let e=ue(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Sa=t(`__VUE_INSTANCE_SETTERS__`,e=>H=e),Ca=t(`__VUE_SSR_SETTERS__`,e=>Da=e)}var wa=e=>{let t=H;return Sa(e),e.scope.on(),()=>{e.scope.off(),Sa(t)}},Ta=()=>{H&&H.scope.off(),Sa(null)};function Ea(e){return e.vnode.shapeFlag&4}var Da=!1;function Oa(e,t=!1,n=!1){t&&Ca(t);let{props:r,children:i}=e.vnode,a=Ea(e);yi(e,r,a,t),Mi(e,i,n||t);let o=a?ka(e,t):void 0;return t&&Ca(!1),o}function ka(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rr);let{setup:r}=n;if(r){Ue();let n=e.setupContext=r.length>1?Fa(e):null,i=wa(e),a=cn(r,e,0,[e.props,n]),o=y(a);if(We(),i(),(o||e.sp)&&!lr(e)&&ir(e),o){if(a.then(Ta,Ta),t)return a.then(n=>{Aa(e,n,t)}).catch(t=>{un(t,e,0)});e.asyncDep=a}else Aa(e,a,t)}else Na(e,t)}function Aa(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Qt(t)),Na(e,n)}var ja,Ma;function Na(e,t,n){let i=e.type;if(!e.render){if(!t&&ja&&!i.render){let t=i.template||Gr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ja(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,Ma&&Ma(e)}{let t=wa(e);Ue();try{Vr(e)}finally{We(),t()}}}var Pa={get(e,t){return j(e,`get`,``),e[t]}};function Fa(e){return{attrs:new Proxy(e.attrs,Pa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Ia(e){return e.exposed?e.exposeProxy||=new Proxy(Qt(Ut(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ir)return Ir[n](e)},has(e,t){return t in e||t in Ir}}):e.proxy}function La(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function Ra(e){return h(e)&&`__vccOpts`in e}var za=(e,t)=>en(e,t,Da);function Ba(e,t,n){try{$i(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?ra(t)?V(e,null,[t]):V(e,t):V(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ra(n)&&(n=[n]),V(e,t,n))}finally{$i(1)}}var Va=`3.5.33`,Ha=void 0,Ua=typeof window<`u`&&window.trustedTypes;if(Ua)try{Ha=Ua.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Wa=Ha?e=>Ha.createHTML(e):e=>e,Ga=`http://www.w3.org/2000/svg`,Ka=`http://www.w3.org/1998/Math/MathML`,qa=typeof document<`u`?document:null,Ja=qa&&qa.createElement(`template`),Ya={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?qa.createElementNS(Ga,e):t===`mathml`?qa.createElementNS(Ka,e):n?qa.createElement(e,{is:n}):qa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>qa.createTextNode(e),createComment:e=>qa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ja.innerHTML=Wa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ja.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Xa=Symbol(`_vtc`);function Za(e,t,n){let r=e[Xa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Qa=Symbol(`_vod`),$a=Symbol(`_vsh`),eo={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Qa]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):to(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),to(e,!0),r.enter(e)):r.leave(e,()=>{to(e,!1)}):to(e,t))},beforeUnmount(e,{value:t}){to(e,t)}};function to(e,t){e.style.display=t?e[Qa]:`none`,e[$a]=!t}var no=Symbol(``),ro=/(?:^|;)\s*display\s*:/;function io(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??oo(r,t,``)}else for(let e in t)n[e]??oo(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?oo(r,i,``):uo(e,i,!g(t)&&t?t[i]:void 0,o)||oo(r,i,o)}}else if(i){if(t!==n){let e=r[no];e&&(n+=`;`+e),r.cssText=n,a=ro.test(n)}}else t&&e.removeAttribute(`style`);Qa in e&&(e[Qa]=a?r.display:``,e[$a]&&(r.display=`none`))}var ao=/\s*!important$/;function oo(e,t,n){if(d(n))n.forEach(n=>oo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=lo(e,t);ao.test(n)?e.setProperty(ie(r),n.replace(ao,``),`important`):e[r]=n}}var so=[`Webkit`,`Moz`,`ms`],co={};function lo(e,t){let n=co[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return co[t]=r;r=ae(r);for(let n=0;n<so.length;n++){let i=so[n]+r;if(i in e)return co[t]=i}return t}function uo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var fo=`http://www.w3.org/1999/xlink`;function po(e,t,n,r,i,a=_e(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(fo,t.slice(6,t.length)):e.setAttributeNS(fo,t,n):n==null||a&&!ve(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function mo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Wa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ve(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function ho(e,t,n,r){e.addEventListener(t,n,r)}function go(e,t,n,r){e.removeEventListener(t,n,r)}var _o=Symbol(`_vei`);function vo(e,t,n,r,i=null){let a=e[_o]||(e[_o]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=bo(t);r?ho(e,n,a[t]=wo(r,i),s):o&&(go(e,n,o,s),a[t]=void 0)}}var yo=/(?:Once|Passive|Capture)$/;function bo(e){let t;if(yo.test(e)){t={};let n;for(;n=e.match(yo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):ie(e.slice(2)),t]}var xo=0,So=Promise.resolve(),Co=()=>xo||=(So.then(()=>xo=0),Date.now());function wo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;ln(To(e,n.value),t,5,[e])};return n.value=e,n.attached=Co(),n}function To(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var Eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Do=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Za(e,r,c):t===`style`?io(e,n,r):a(t)?o(t)||vo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Oo(e,t,r,c))?(mo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&po(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ko(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?mo(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),po(e,t,r,c))};function Oo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Eo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Eo(t)&&g(n)?!1:t in e}function ko(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var Ao=[`ctrl`,`shift`,`alt`,`meta`],jo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Ao.some(n=>e[`${n}Key`]&&!t.includes(n))},Mo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=jo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},No=s({patchProp:Do},Ya),Po;function Fo(){return Po||=Pi(No)}var Io=((...e)=>{let t=Fo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Ro(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Lo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Lo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Ro(e){return g(e)?document.querySelector(e):e}var zo=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Bo={};function Vo(e,t){let n=Or(`router-view`);return z(),na(n)}var Ho=zo(Bo,[[`render`,Vo]]),Uo=typeof document<`u`;function Wo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Go(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Wo(e.default)}var U=Object.assign;function Ko(e,t){let n={};for(let r in t){let i=t[r];n[r]=Jo(i)?i.map(e):e(i)}return n}var qo=()=>{},Jo=Array.isArray;function Yo(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Xo=/#/g,Zo=/&/g,Qo=/\//g,$o=/=/g,es=/\?/g,ts=/\+/g,ns=/%5B/g,rs=/%5D/g,is=/%5E/g,as=/%60/g,os=/%7B/g,ss=/%7C/g,cs=/%7D/g,ls=/%20/g;function us(e){return e==null?``:encodeURI(``+e).replace(ss,`|`).replace(ns,`[`).replace(rs,`]`)}function ds(e){return us(e).replace(os,`{`).replace(cs,`}`).replace(is,`^`)}function fs(e){return us(e).replace(ts,`%2B`).replace(ls,`+`).replace(Xo,`%23`).replace(Zo,`%26`).replace(as,"`").replace(os,`{`).replace(cs,`}`).replace(is,`^`)}function ps(e){return fs(e).replace($o,`%3D`)}function ms(e){return us(e).replace(Xo,`%23`).replace(es,`%3F`)}function hs(e){return ms(e).replace(Qo,`%2F`)}function gs(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var _s=/\/$/,vs=e=>e.replace(_s,``);function ys(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Ds(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:gs(o)}}function bs(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function xs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Ss(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Cs(t.matched[r],n.matched[i])&&ws(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Cs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ws(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Ts(e[n],t[n]))return!1;return!0}function Ts(e,t){return Jo(e)?Es(e,t):Jo(t)?Es(t,e):e?.valueOf()===t?.valueOf()}function Es(e,t){return Jo(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Ds(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Os={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},ks=function(e){return e.pop=`pop`,e.push=`push`,e}({}),As=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function js(e){if(!e)if(Uo){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),vs(e)}var Ms=/^[^#]+#/;function Ns(e,t){return e.replace(Ms,`#`)+t}function Ps(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Fs=()=>({left:window.scrollX,top:window.scrollY});function Is(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ps(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Ls(e,t){return(history.state?history.state.position-t:-1)+e}var Rs=new Map;function zs(e,t){Rs.set(e,t)}function Bs(e){let t=Rs.get(e);return Rs.delete(e),t}function Vs(e){return typeof e==`string`||e&&typeof e==`object`}function Hs(e){return typeof e==`string`||typeof e==`symbol`}var W=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Us=Symbol(``);W.MATCHER_NOT_FOUND,W.NAVIGATION_GUARD_REDIRECT,W.NAVIGATION_ABORTED,W.NAVIGATION_CANCELLED,W.NAVIGATION_DUPLICATED;function Ws(e,t){return U(Error(),{type:e,[Us]:!0},t)}function Gs(e,t){return e instanceof Error&&Us in e&&(t==null||!!(e.type&t))}function Ks(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(ts,` `),i=r.indexOf(`=`),a=gs(i<0?r:r.slice(0,i)),o=i<0?null:gs(r.slice(i+1));if(a in t){let e=t[a];Jo(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function qs(e){let t=``;for(let n in e){let r=e[n];if(n=ps(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Jo(r)?r.map(e=>e&&fs(e)):[r&&fs(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Js(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Jo(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Ys=Symbol(``),Xs=Symbol(``),Zs=Symbol(``),Qs=Symbol(``),$s=Symbol(``);function ec(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function tc(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Ws(W.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Vs(e)?c(Ws(W.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function nc(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Wo(s)){let c=(s.__vccOpts||s)[t];c&&a.push(tc(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Go(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&tc(c,n,r,o,e,i)()}))}}return a}function rc(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Cs(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Cs(e,s))||i.push(s))}return[n,r,i]}var ic=()=>location.protocol+`//`+location.host;function ac(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),xs(n,``)}return xs(n,e)+r+i}function oc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=ac(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:ks.pop,direction:u?u>0?As.forward:As.back:As.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(U({},e.state,{scroll:Fs()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function sc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Fs():null}}function cc(e){let{history:t,location:n}=window,r={value:ac(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:ic()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,U({},t.state,sc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=U({},i.value,t.state,{forward:e,scroll:Fs()});a(o.current,o,!0),a(e,U({},sc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function lc(e){e=js(e);let t=cc(e),n=oc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=U({location:``,base:e,go:r,createHref:Ns.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}var uc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),G=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(G||{}),dc={type:uc.Static,value:``},fc=/[a-zA-Z0-9_]/;function pc(e){if(!e)return[[]];if(e===`/`)return[[dc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=G.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===G.Static?a.push({type:uc.Static,value:l}):n===G.Param||n===G.ParamRegExp||n===G.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:uc.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==G.ParamRegExp){r=n,n=G.EscapeNext;continue}switch(n){case G.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=G.Param):f();break;case G.EscapeNext:f(),n=r;break;case G.Param:c===`(`?n=G.ParamRegExp:fc.test(c)?f():(d(),n=G.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case G.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=G.ParamRegExpEnd:u+=c;break;case G.ParamRegExpEnd:d(),n=G.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===G.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var mc=`[^/]+?`,hc={sensitive:!1,strict:!1,start:!0,end:!0},K=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(K||{}),gc=/[.+*?^${}()[\]/\\]/g;function _c(e,t){let n=U({},hc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[K.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=K.Segment+(n.sensitive?K.BonusCaseSensitive:0);if(o.type===uc.Static)r||(i+=`/`),i+=o.value.replace(gc,`\\$&`),s+=K.Static;else if(o.type===uc.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||mc;if(u!==mc){s+=K.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=K.Dynamic,c&&(s+=K.BonusOptional),n&&(s+=K.BonusRepeatable),u===`.*`&&(s+=K.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=K.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===uc.Static)n+=e.value;else if(e.type===uc.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Jo(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Jo(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function vc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===K.Static+K.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===K.Static+K.Segment?1:-1:0}function yc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=vc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(bc(r))return 1;if(bc(i))return-1}return i.length-r.length}function bc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var xc={strict:!1,end:!0,sensitive:!1};function Sc(e,t,n){let r=U(_c(pc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Cc(e,t){let n=[],r=new Map;t=Yo(xc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Tc(e);s.aliasOf=r&&r.record;let l=Yo(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Tc(U({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Sc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Dc(d)&&o(e.name)),jc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:qo}function o(e){if(Hs(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=kc(e,n);n.splice(t,0,e),e.record.name&&!Dc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Ws(W.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=U(wc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&wc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Ws(W.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=U({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Oc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function wc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Tc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ec(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function Ec(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Dc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oc(e){return e.reduce((e,t)=>U(e,t.meta),{})}function kc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;yc(e,t[i])<0?r=i:n=i+1}let i=Ac(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Ac(e){let t=e;for(;t=t.parent;)if(jc(t)&&yc(e,t)===0)return t}function jc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Mc(e){let t=Nn(Zs),n=Nn(Qs),r=za(()=>{let n=Xt(e.to);return t.resolve(n)}),i=za(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Cs.bind(null,i));if(o>-1)return o;let s=Lc(e[t-2]);return t>1&&Lc(i)===s&&a[a.length-1].path!==s?a.findIndex(Cs.bind(null,e[t-2])):o}),a=za(()=>i.value>-1&&Ic(n.params,r.value.params)),o=za(()=>i.value>-1&&i.value===n.matched.length-1&&ws(n.params,r.value.params));function s(n={}){if(Fc(n)){let n=t[Xt(e.replace)?`replace`:`push`](Xt(e.to)).catch(qo);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:za(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Nc(e){return e.length===1?e[0]:e}var Pc=rr({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Mc,setup(e,{slots:t}){let n=Ft(Mc(e)),{options:r}=Nn(Zs),i=za(()=>({[Rc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Rc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Nc(t.default(n));return e.custom?r:Ba(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Fc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ic(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Jo(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Lc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Rc=(e,t,n)=>e??t??n,zc=rr({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Nn($s),i=za(()=>e.route||r.value),a=Nn(Xs,0),o=za(()=>{let e=Xt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=za(()=>i.value.matched[o.value]);Mn(Xs,za(()=>o.value+1)),Mn(Ys,s),Mn($s,i);let c=Kt();return Ln(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Cs(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Bc(n.default,{Component:l,route:r});let u=o.props[a],d=Ba(l,U({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Bc(n.default,{Component:d,route:r})||d}}});function Bc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Vc=zc;function Hc(e){let t=Cc(e.routes,e),n=e.parseQuery||Ks,r=e.stringifyQuery||qs,i=e.history,a=ec(),o=ec(),s=ec(),c=qt(Os),l=Os;Uo&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Ko.bind(null,e=>``+e),d=Ko.bind(null,hs),f=Ko.bind(null,gs);function p(e,n){let r,i;return Hs(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=U({},a||c.value),typeof e==`string`){let r=ys(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return U(r,o,{params:f(o.params),hash:gs(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=U({},e,{path:ys(n,e.path,a.path).path});else{let t=U({},e.params);for(let e in t)t[e]??delete t[e];o=U({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=bs(r,U({},e,{hash:ds(l),path:s.path})),m=i.createHref(p);return U({fullPath:p,hash:l,query:r===qs?Js(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?ys(n,e,c.value.path):U({},e)}function y(e,t){if(l!==e)return Ws(W.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(U(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),U({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(U(v(u),{state:typeof u==`object`?U({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Ss(r,i,n)&&(f=Ws(W.NAVIGATION_DUPLICATED,{to:d,from:i}),le(i,i,!0,!1)),(f?Promise.resolve(f):te(d,i)).catch(e=>Gs(e)?Gs(e,W.NAVIGATION_GUARD_REDIRECT)?e:ce(e):se(e,d,i)).then(e=>{if(e){if(Gs(e,W.NAVIGATION_GUARD_REDIRECT))return C(U({replace:s},v(e.to),{state:typeof e.to==`object`?U({},a,e.to.state):a,force:o}),t||d)}else e=T(d,i,!0,s,a);return ne(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function ee(e){let t=fe.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function te(e,t){let n,[r,i,s]=rc(e,t);n=nc(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(tc(r,e,t))});let c=w.bind(null,e,t);return n.push(c),me(n).then(()=>{n=[];for(let r of a.list())n.push(tc(r,e,t));return n.push(c),me(n)}).then(()=>{n=nc(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(tc(r,e,t))});return n.push(c),me(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Jo(r.beforeEnter))for(let i of r.beforeEnter)n.push(tc(i,e,t));else n.push(tc(r.beforeEnter,e,t));return n.push(c),me(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=nc(s,`beforeRouteEnter`,e,t,ee),n.push(c),me(n))).then(()=>{n=[];for(let r of o.list())n.push(tc(r,e,t));return n.push(c),me(n)}).catch(e=>Gs(e,W.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function ne(e,t,n){s.list().forEach(r=>ee(()=>r(e,t,n)))}function T(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Os,l=Uo?history.state:{};n&&(r||s?i.replace(e.fullPath,U({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,le(e,t,n,s),ce()}let re;function ie(){re||=i.listen((e,t,n)=>{if(!pe.listening)return;let r=_(e),a=S(r,pe.currentRoute.value);if(a){C(U(a,{replace:!0,force:!0}),r).catch(qo);return}l=r;let o=c.value;Uo&&zs(Ls(o.fullPath,n.delta),Fs()),te(r,o).catch(e=>Gs(e,W.NAVIGATION_ABORTED|W.NAVIGATION_CANCELLED)?e:Gs(e,W.NAVIGATION_GUARD_REDIRECT)?(C(U(v(e.to),{force:!0}),r).then(e=>{Gs(e,W.NAVIGATION_ABORTED|W.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===ks.pop&&i.go(-1,!1)}).catch(qo),Promise.reject()):(n.delta&&i.go(-n.delta,!1),se(e,r,o))).then(e=>{e||=T(r,o,!1),e&&(n.delta&&!Gs(e,W.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===ks.pop&&Gs(e,W.NAVIGATION_ABORTED|W.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ne(r,o,e)}).catch(qo)})}let ae=ec(),oe=ec(),E;function se(e,t,n){ce(e);let r=oe.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function D(){return E&&c.value!==Os?Promise.resolve():new Promise((e,t)=>{ae.add([e,t])})}function ce(e){return E||(E=!e,ie(),ae.list().forEach(([t,n])=>e?n(e):t()),ae.reset()),e}function le(t,n,r,i){let{scrollBehavior:a}=e;if(!Uo||!a)return Promise.resolve();let o=!r&&Bs(Ls(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return vn().then(()=>a(t,n,o)).then(e=>e&&Is(e)).catch(e=>se(e,t,n))}let ue=e=>i.go(e),de,fe=new Set,pe={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:oe.add,isReady:D,install(e){e.component(`RouterLink`,Pc),e.component(`RouterView`,Vc),e.config.globalProperties.$router=pe,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>Xt(c)}),Uo&&!de&&c.value===Os&&(de=!0,b(i.location).catch(e=>{}));let t={};for(let e in Os)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Zs,pe),e.provide(Qs,It(t)),e.provide($s,c);let n=e.unmount;fe.add(e),e.unmount=function(){fe.delete(e),fe.size<1&&(l=Os,re&&re(),re=null,c.value=Os,de=!1,E=!1),n()}}};function me(e){return e.reduce((e,t)=>e.then(()=>ee(t)),Promise.resolve())}return pe}function Uc(){return Nn(Zs)}function Wc(e){return Nn(Qs)}var Gc={class:`nav__item`},Kc=[`aria-expanded`],qc={id:`nav-panel-immigration`,class:`nav__dropdown`,role:`menu`,"aria-labelledby":`nav-trigger-immigration`},Jc=[`aria-expanded`],Yc={id:`nav-panel-visas`,class:`nav__dropdown`,role:`menu`,"aria-labelledby":`nav-trigger-visas`},Xc=[`aria-expanded`],Zc={id:`nav-panel-other`,class:`nav__dropdown`,role:`menu`,"aria-labelledby":`nav-trigger-other`},Qc={class:`nav__item`},$c={class:`nav__item`},el=zo({__name:`Nav`,props:{drawerOpen:{type:Boolean,default:!1}},emits:[`close-drawer`],setup(e,{emit:t}){let n=e,r=t,i=[{to:`/immigration/express-entry`,label:`Express Entry`},{to:`/immigration/business-immigration`,label:`Business Immigration`},{to:`/immigration/family-and-spousal-immigration`,label:`Family & Spousal Sponsorship`},{to:`/immigration/provincial-nomination-programs`,label:`Provincial Nominee Programs`}],a=[{to:`/visas/tourist-visa`,label:`Tourist & Visitor Visa`},{to:`/visas/work-visa`,label:`Work in Canada`},{to:`/visas/study-visa`,label:`Study in Canada`},{to:`/visas/super-visa`,label:`Super Visa`}],o=[{to:`/other/pr-card`,label:`PR Card Renewal`},{to:`/other/canadian-citizenship`,label:`Canadian Citizenship`},{to:`/other/study-work-permit-extension`,label:`Study–Work Permit Extensions`}],s=Kt(null),c=Kt(null),l=null;function u(){return typeof window<`u`&&window.matchMedia(`(max-width: 900px)`).matches}function d(){l!=null&&(clearTimeout(l),l=null)}function f(e){d(),c.value=e}function p(){u()||(d(),l=window.setTimeout(()=>{c.value=null,l=null},160))}function m(){d(),c.value=null}function h(e,t){e.preventDefault(),d(),c.value=c.value===t?null:t}function g(e){if(e.target.closest?.(`.nav__backdrop`)){r(`close-drawer`),m();return}if(!s.value?.contains(e.target)){m(),u()&&r(`close-drawer`);return}e.target.closest?.(`.nav__mega`)||m()}function _(e){if(!u()||!n.drawerOpen)return;let t=e.target.closest?.(`a[href]`);!t||!s.value?.contains(t)||(r(`close-drawer`),v())}function v(){vn(()=>m())}return vr(()=>{document.addEventListener(`pointerdown`,g,!0)}),Sr(()=>{document.removeEventListener(`pointerdown`,g,!0),d()}),(t,n)=>{let l=Or(`router-link`);return z(),ta(`nav`,{id:`jks-main-nav`,ref_key:`navRef`,ref:s,class:O([`nav`,{"nav--drawer-open":e.drawerOpen}]),"aria-label":`Main`},[An(B(`button`,{type:`button`,class:`nav__backdrop`,"aria-label":`Close menu`,tabindex:`-1`,onClick:n[0]||=e=>r(`close-drawer`)},null,512),[[eo,e.drawerOpen]]),B(`ul`,{class:`nav__root`,onClickCapture:_},[B(`li`,Gc,[V(l,{to:`/`,class:`nav__link`},{default:kn(()=>[...n[10]||=[ua(`Home`,-1)]]),_:1})]),B(`li`,{class:`nav__mega`,onMouseenter:n[2]||=e=>!u()&&f(`immigration`),onMouseleave:n[3]||=e=>!u()&&p()},[B(`button`,{id:`nav-trigger-immigration`,type:`button`,class:O([`nav__mega-trigger nav__link`,{"nav__mega-trigger--open":c.value===`immigration`}]),"aria-expanded":c.value===`immigration`,"aria-haspopup":`true`,"aria-controls":`nav-panel-immigration`,onClick:n[1]||=e=>h(e,`immigration`)},[...n[11]||=[B(`span`,{class:`nav__mega-label`},`Immigrate`,-1),B(`span`,{class:`nav__chevron`,"aria-hidden":`true`},null,-1)]],10,Kc),An(B(`div`,qc,[n[12]||=B(`p`,{class:`nav__dropdown-kicker`},`Immigration pathways`,-1),B(`ul`,null,[(z(),ta(R,null,Mr(i,e=>B(`li`,{key:e.to},[V(l,{to:e.to,class:`nav__dropdown-link`,onClick:v},{default:kn(()=>[ua(Se(e.label),1)]),_:2},1032,[`to`])])),64))])],512),[[eo,c.value===`immigration`]])],32),B(`li`,{class:`nav__mega`,onMouseenter:n[5]||=e=>!u()&&f(`visas`),onMouseleave:n[6]||=e=>!u()&&p()},[B(`button`,{id:`nav-trigger-visas`,type:`button`,class:O([`nav__mega-trigger nav__link`,{"nav__mega-trigger--open":c.value===`visas`}]),"aria-expanded":c.value===`visas`,"aria-haspopup":`true`,"aria-controls":`nav-panel-visas`,onClick:n[4]||=e=>h(e,`visas`)},[...n[13]||=[B(`span`,{class:`nav__mega-label`},`Visas`,-1),B(`span`,{class:`nav__chevron`,"aria-hidden":`true`},null,-1)]],10,Jc),An(B(`div`,Yc,[n[14]||=B(`p`,{class:`nav__dropdown-kicker`},`Visa options`,-1),B(`ul`,null,[(z(),ta(R,null,Mr(a,e=>B(`li`,{key:e.to},[V(l,{to:e.to,class:`nav__dropdown-link`,onClick:v},{default:kn(()=>[ua(Se(e.label),1)]),_:2},1032,[`to`])])),64))])],512),[[eo,c.value===`visas`]])],32),B(`li`,{class:`nav__mega`,onMouseenter:n[8]||=e=>!u()&&f(`other`),onMouseleave:n[9]||=e=>!u()&&p()},[B(`button`,{id:`nav-trigger-other`,type:`button`,class:O([`nav__mega-trigger nav__link`,{"nav__mega-trigger--open":c.value===`other`}]),"aria-expanded":c.value===`other`,"aria-haspopup":`true`,"aria-controls":`nav-panel-other`,onClick:n[7]||=e=>h(e,`other`)},[...n[15]||=[B(`span`,{class:`nav__mega-label`},`Other Services`,-1),B(`span`,{class:`nav__chevron`,"aria-hidden":`true`},null,-1)]],10,Xc),An(B(`div`,Zc,[n[16]||=B(`p`,{class:`nav__dropdown-kicker`},`More support`,-1),B(`ul`,null,[(z(),ta(R,null,Mr(o,e=>B(`li`,{key:e.to},[V(l,{to:e.to,class:`nav__dropdown-link`,onClick:v},{default:kn(()=>[ua(Se(e.label),1)]),_:2},1032,[`to`])])),64))])],512),[[eo,c.value===`other`]])],32),B(`li`,Qc,[V(l,{to:`/about`,class:`nav__link`},{default:kn(()=>[...n[17]||=[ua(`About`,-1)]]),_:1})]),B(`li`,$c,[V(l,{to:`/contact`,class:`nav__link`},{default:kn(()=>[...n[18]||=[ua(`Contact Us`,-1)]]),_:1})])],32)],2)}}},[[`__scopeId`,`data-v-7433ba6a`]]),tl={class:`jks-site-topbar elementor elementor-32 elementor-kit-7`,"data-elementor-type":`wp-post`,"data-elementor-id":`32`},nl={class:`elementor-section elementor-top-section elementor-element elementor-element-c69413d elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none`,"data-id":`c69413d`,"data-element_type":`section`,"data-e-type":`section`,"data-settings":`{"stretch_section":"section-stretched","background_background":"classic"}`},rl=[`aria-expanded`],il={class:`elementor-container elementor-column-gap-extended`},al={class:`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d8844c6 pxl-column-none`,"data-id":`d8844c6`,"data-element_type":`column`,"data-e-type":`column`},ol={class:`elementor-widget-wrap elementor-element-populated`},sl={class:`elementor-element elementor-element-3d9edc4 elementor-widget__width-initial elementor-widget-laptop__width-initial elementor-widget elementor-widget-pxl_logo`,"data-id":`3d9edc4`,"data-element_type":`widget`,"data-e-type":`widget`,"data-widget_type":`pxl_logo.default`},cl={class:`elementor-widget-container`},ll={class:`pxl-logo`,"data-wow-delay":`ms`},ul={class:`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7c3bb13 pxl-column-none`,"data-id":`7c3bb13`,"data-element_type":`column`,"data-e-type":`column`},dl={class:`elementor-widget-wrap elementor-element-populated jks-site-topbar__meta`},fl={class:`elementor-element elementor-element-341139e elementor-widget__width-auto elementor-widget elementor-widget-pxl_button`,"data-id":`341139e`,"data-element_type":`widget`,"data-e-type":`widget`,"data-widget_type":`pxl_button.default`},pl={class:`elementor-widget-container`},ml={id:`pxl-pxl_button-341139e-5881`,class:`pxl-button`,"data-wow-delay":`ms`},hl=`/images/wp-content__uploads__2023__11__WhatsApp-Image-2025-06-14-at-6.37.54-PM.jpeg`,gl=zo({__name:`SiteTopBar`,props:{drawerOpen:{type:Boolean,default:!1}},emits:[`toggle-nav`],setup(e){return(t,n)=>(z(),ta(`div`,tl,[B(`section`,nl,[B(`button`,{type:`button`,class:`jks-site-topbar__menu-btn`,"aria-expanded":e.drawerOpen,"aria-controls":`jks-main-nav`,"aria-label":`Menu`,onClick:n[0]||=e=>t.$emit(`toggle-nav`)},[...n[1]||=[B(`span`,{class:`jks-site-topbar__menu-icon`,"aria-hidden":`true`},[B(`span`),B(`span`),B(`span`)],-1)]],8,rl),B(`div`,il,[B(`div`,al,[B(`div`,ol,[B(`div`,sl,[B(`div`,cl,[B(`div`,ll,[V(Xt(Pc),{to:`/`},{default:kn(()=>[B(`img`,{fetchpriority:`high`,width:`500`,height:`500`,src:hl,class:`attachment-full`,alt:`JKS Immigration`})]),_:1})])])])])]),B(`div`,ul,[B(`div`,dl,[n[3]||=da(`<div class="elementor-element elementor-element-3d93caf elementor-widget__width-auto elementor-widget elementor-widget-pxl_icon_box" data-id="3d93caf" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default" data-v-c8273915><div class="elementor-widget-container" data-v-c8273915><div class="pxl-icon-box pxl-icon-box5" data-wow-delay="ms" data-v-c8273915><div class="pxl-item--inner df-row align-center flex-start" data-v-c8273915><div class="pxl-item--icon pxl-mr-11" data-v-c8273915><i aria-hidden="true" class="fa-regular fa-envelope" data-v-c8273915></i></div><div class="pxl-item--holder" data-v-c8273915><h5 class="pxl-item--title el-empty" data-v-c8273915><a class="jks-site-topbar__mailto" href="mailto:jksimmigration@gmail.com" data-v-c8273915>jksimmigration@gmail.com</a></h5><span class="pxl-item--description el-empty" data-v-c8273915>Send us mail</span></div></div></div></div></div><div class="elementor-element elementor-element-22bab2c elementor-widget__width-auto elementor-widget elementor-widget-pxl_icon_box" data-id="22bab2c" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default" data-v-c8273915><div class="elementor-widget-container" data-v-c8273915><div class="pxl-icon-box pxl-icon-box5" data-wow-delay="ms" data-v-c8273915><div class="pxl-item--inner df-row align-center flex-start" data-v-c8273915><div class="pxl-item--icon pxl-mr-11" data-v-c8273915><i aria-hidden="true" class="fa-regular fa-clock" data-v-c8273915></i></div><div class="pxl-item--holder" data-v-c8273915><h5 class="pxl-item--title el-empty" data-v-c8273915>Mon – Fri 10am – 6pm</h5><span class="pxl-item--description el-empty" data-v-c8273915>Opening hours</span></div></div></div></div></div>`,2),B(`div`,fl,[B(`div`,pl,[B(`div`,ml,[V(Xt(Pc),{to:`/contact`,class:`btn pxl-icon-active btn-nanuk pxl-icon--left`,"data-wow-delay":`ms`},{default:kn(()=>[...n[2]||=[B(`span`,{class:`pxl--btn-text`},`Book appointment`,-1)]]),_:1})])])])])])])])]))}},[[`__scopeId`,`data-v-c8273915`]]),_l={class:`header`},vl={class:`header__nav-band`},yl={class:`header__nav-inner`},bl=zo({__name:`Header`,setup(e){let t=Wc(),n=Kt(!1);function r(){n.value=!n.value}function i(){n.value=!1}Ln(()=>t.fullPath,()=>{n.value=!1}),Ln(n,e=>{typeof document>`u`||(document.body.style.overflow=e?`hidden`:``)});function a(e){e.key===`Escape`&&i()}function o(){typeof window>`u`||window.matchMedia(`(max-width: 900px)`).matches||(n.value=!1)}return vr(()=>{document.addEventListener(`keydown`,a),window.addEventListener(`resize`,o)}),Sr(()=>{document.removeEventListener(`keydown`,a),window.removeEventListener(`resize`,o),document.body.style.overflow=``}),(e,t)=>(z(),ta(`header`,_l,[V(gl,{"drawer-open":n.value,onToggleNav:r},null,8,[`drawer-open`]),B(`div`,vl,[B(`div`,yl,[V(el,{"drawer-open":n.value,onCloseDrawer:i},null,8,[`drawer-open`])])])]))}},[[`__scopeId`,`data-v-e1e70c12`]]);function xl(e){return typeof e==`object`&&!!e&&`constructor`in e&&e.constructor===Object}function Sl(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(function(n){e[n]===void 0?e[n]=t[n]:xl(t[n])&&xl(e[n])&&Object.keys(t[n]).length>0&&Sl(e[n],t[n])})}var q=typeof document<`u`?document:{},Cl={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:``},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``}};Sl(q,Cl);var J=typeof window<`u`?window:{};Sl(J,{document:Cl,navigator:{userAgent:``},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return``}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var Y=class{constructor(e){let t=this;for(let n=0;n<e.length;n+=1)t[n]=e[n];return t.length=e.length,this}};function X(e,t){let n=[],r=0;if(e&&!t&&e instanceof Y)return e;if(e){if(typeof e==`string`){let i,a,o=e.trim();if(o.indexOf(`<`)>=0&&o.indexOf(`>`)>=0){let e=`div`;for(o.indexOf(`<li`)===0&&(e=`ul`),o.indexOf(`<tr`)===0&&(e=`tbody`),(o.indexOf(`<td`)===0||o.indexOf(`<th`)===0)&&(e=`tr`),o.indexOf(`<tbody`)===0&&(e=`table`),o.indexOf(`<option`)===0&&(e=`select`),a=q.createElement(e),a.innerHTML=o,r=0;r<a.childNodes.length;r+=1)n.push(a.childNodes[r])}else for(i=!t&&e[0]===`#`&&!e.match(/[ .<>:~]/)?[q.getElementById(e.trim().split(`#`)[1])]:(t||q).querySelectorAll(e.trim()),r=0;r<i.length;r+=1)i[r]&&n.push(i[r])}else if(e.nodeType||e===J||e===q)n.push(e);else if(e.length>0&&e[0].nodeType)for(r=0;r<e.length;r+=1)n.push(e[r])}return new Y(n)}X.fn=Y.prototype,X.Class=Y,X.Dom7=Y;function wl(e){let t=[];for(let n=0;n<e.length;n+=1)t.indexOf(e[n])===-1&&t.push(e[n]);return t}function Tl(e){if(e===void 0)return this;let t=e.split(` `);for(let e=0;e<t.length;e+=1)for(let n=0;n<this.length;n+=1)this[n]!==void 0&&this[n].classList!==void 0&&this[n].classList.add(t[e]);return this}function El(e){let t=e.split(` `);for(let e=0;e<t.length;e+=1)for(let n=0;n<this.length;n+=1)this[n]!==void 0&&this[n].classList!==void 0&&this[n].classList.remove(t[e]);return this}function Dl(e){return this[0]?this[0].classList.contains(e):!1}function Ol(e){let t=e.split(` `);for(let e=0;e<t.length;e+=1)for(let n=0;n<this.length;n+=1)this[n]!==void 0&&this[n].classList!==void 0&&this[n].classList.toggle(t[e]);return this}function kl(e,t){if(arguments.length===1&&typeof e==`string`)return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(e,t);else for(let t in e)this[n][t]=e[t],this[n].setAttribute(t,e[t]);return this}function Al(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function jl(e,t){let n;if(t===void 0)return n=this[0],n?n.dom7ElementDataStorage&&e in n.dom7ElementDataStorage?n.dom7ElementDataStorage[e]:n.getAttribute(`data-${e}`)||void 0:void 0;for(let r=0;r<this.length;r+=1)n=this[r],n.dom7ElementDataStorage||={},n.dom7ElementDataStorage[e]=t;return this}function Ml(e){for(let t=0;t<this.length;t+=1){let n=this[t].style;n.webkitTransform=e,n.transform=e}return this}function Nl(e){typeof e!=`string`&&(e=`${e}ms`);for(let t=0;t<this.length;t+=1){let n=this[t].style;n.webkitTransitionDuration=e,n.transitionDuration=e}return this}function Pl(...e){let[t,n,r,i]=e;typeof e[1]==`function`&&([t,r,i]=e,n=void 0),i||=!1;function a(e){let t=e.target;if(!t)return;let i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),X(t).is(n))r.apply(t,i);else{let e=X(t).parents();for(let t=0;t<e.length;t+=1)X(e[t]).is(n)&&r.apply(e[t],i)}}function o(e){let t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}let s=t.split(` `),c;for(let e=0;e<this.length;e+=1){let t=this[e];if(n)for(c=0;c<s.length;c+=1){let e=s[c];t.dom7LiveListeners||={},t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:a}),t.addEventListener(e,a,i)}else for(c=0;c<s.length;c+=1){let e=s[c];t.dom7Listeners||={},t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,i)}}return this}function Fl(...e){let[t,n,r,i]=e;typeof e[1]==`function`&&([t,r,i]=e,n=void 0),i||=!1;let a=t.split(` `);for(let e=0;e<a.length;e+=1){let t=a[e];for(let e=0;e<this.length;e+=1){let a=this[e],o;if(!n&&a.dom7Listeners?o=a.dom7Listeners[t]:n&&a.dom7LiveListeners&&(o=a.dom7LiveListeners[t]),o&&o.length)for(let e=o.length-1;e>=0;--e){let n=o[e];r&&n.listener===r||r&&n.listener&&n.listener.dom7proxy&&n.listener.dom7proxy===r?(a.removeEventListener(t,n.proxyListener,i),o.splice(e,1)):r||(a.removeEventListener(t,n.proxyListener,i),o.splice(e,1))}}}return this}function Il(...e){let t=e[0].split(` `),n=e[1];for(let r=0;r<t.length;r+=1){let i=t[r];for(let t=0;t<this.length;t+=1){let r=this[t],a;try{a=new J.CustomEvent(i,{detail:n,bubbles:!0,cancelable:!0})}catch{a=q.createEvent(`Event`),a.initEvent(i,!0,!0),a.detail=n}r.dom7EventData=e.filter((e,t)=>t>0),r.dispatchEvent(a),r.dom7EventData=[],delete r.dom7EventData}}return this}function Ll(e){let t=[`webkitTransitionEnd`,`transitionend`],n=this,r;function i(a){if(a.target===this)for(e.call(this,a),r=0;r<t.length;r+=1)n.off(t[r],i)}if(e)for(r=0;r<t.length;r+=1)n.on(t[r],i);return this}function Rl(e){if(this.length>0){if(e){let e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue(`margin-right`))+parseFloat(e.getPropertyValue(`margin-left`))}return this[0].offsetWidth}return null}function zl(e){if(this.length>0){if(e){let e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue(`margin-top`))+parseFloat(e.getPropertyValue(`margin-bottom`))}return this[0].offsetHeight}return null}function Bl(){if(this.length>0){let e=this[0],t=e.getBoundingClientRect(),n=q.body,r=e.clientTop||n.clientTop||0,i=e.clientLeft||n.clientLeft||0,a=e===J?J.scrollY:e.scrollTop,o=e===J?J.scrollX:e.scrollLeft;return{top:t.top+a-r,left:t.left+o-i}}return null}function Vl(){return this[0]?J.getComputedStyle(this[0],null):{}}function Hl(e,t){let n;if(arguments.length===1)if(typeof e==`string`){if(this[0])return J.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(n=0;n<this.length;n+=1)for(let t in e)this[n].style[t]=e[t];return this}if(arguments.length===2&&typeof e==`string`){for(n=0;n<this.length;n+=1)this[n].style[e]=t;return this}return this}function Ul(e){if(!e)return this;for(let t=0;t<this.length;t+=1)if(e.call(this[t],t,this[t])===!1)return this;return this}function Wl(e){let t=[],n=this;for(let r=0;r<n.length;r+=1)e.call(n[r],r,n[r])&&t.push(n[r]);return new Y(t)}function Gl(e){if(e===void 0)return this[0]?this[0].innerHTML:void 0;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function Kl(e){if(e===void 0)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function ql(e){let t=this[0],n,r;if(!t||e===void 0)return!1;if(typeof e==`string`){if(t.matches)return t.matches(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);for(n=X(e),r=0;r<n.length;r+=1)if(n[r]===t)return!0;return!1}else if(e===q)return t===q;else if(e===J)return t===J;if(e.nodeType||e instanceof Y){for(n=e.nodeType?[e]:e,r=0;r<n.length;r+=1)if(n[r]===t)return!0;return!1}return!1}function Jl(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Yl(e){if(e===void 0)return this;let t=this.length,n;return e>t-1?new Y([]):e<0?(n=t+e,n<0?new Y([]):new Y([this[n]])):new Y([this[e]])}function Xl(...e){let t;for(let n=0;n<e.length;n+=1){t=e[n];for(let e=0;e<this.length;e+=1)if(typeof t==`string`){let n=q.createElement(`div`);for(n.innerHTML=t;n.firstChild;)this[e].appendChild(n.firstChild)}else if(t instanceof Y)for(let n=0;n<t.length;n+=1)this[e].appendChild(t[n]);else this[e].appendChild(t)}return this}function Zl(e){let t,n;for(t=0;t<this.length;t+=1)if(typeof e==`string`){let r=q.createElement(`div`);for(r.innerHTML=e,n=r.childNodes.length-1;n>=0;--n)this[t].insertBefore(r.childNodes[n],this[t].childNodes[0])}else if(e instanceof Y)for(n=0;n<e.length;n+=1)this[t].insertBefore(e[n],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this}function Ql(e){return this.length>0?e?this[0].nextElementSibling&&X(this[0].nextElementSibling).is(e)?new Y([this[0].nextElementSibling]):new Y([]):this[0].nextElementSibling?new Y([this[0].nextElementSibling]):new Y([]):new Y([])}function $l(e){let t=[],n=this[0];if(!n)return new Y([]);for(;n.nextElementSibling;){let r=n.nextElementSibling;e?X(r).is(e)&&t.push(r):t.push(r),n=r}return new Y(t)}function eu(e){if(this.length>0){let t=this[0];return e?t.previousElementSibling&&X(t.previousElementSibling).is(e)?new Y([t.previousElementSibling]):new Y([]):t.previousElementSibling?new Y([t.previousElementSibling]):new Y([])}return new Y([])}function tu(e){let t=[],n=this[0];if(!n)return new Y([]);for(;n.previousElementSibling;){let r=n.previousElementSibling;e?X(r).is(e)&&t.push(r):t.push(r),n=r}return new Y(t)}function nu(e){let t=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(e?X(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return X(wl(t))}function ru(e){let t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)e?X(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return X(wl(t))}function iu(e){let t=this;return e===void 0?new Y([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function au(e){let t=[];for(let n=0;n<this.length;n+=1){let r=this[n].querySelectorAll(e);for(let e=0;e<r.length;e+=1)t.push(r[e])}return new Y(t)}function ou(e){let t=[];for(let n=0;n<this.length;n+=1){let r=this[n].childNodes;for(let n=0;n<r.length;n+=1)e?r[n].nodeType===1&&X(r[n]).is(e)&&t.push(r[n]):r[n].nodeType===1&&t.push(r[n])}return new Y(wl(t))}function su(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}function cu(...e){let t=this,n,r;for(n=0;n<e.length;n+=1){let i=X(e[n]);for(r=0;r<i.length;r+=1)t[t.length]=i[r],t.length+=1}return t}`resize scroll`.split(` `);var lu={addClass:Tl,removeClass:El,hasClass:Dl,toggleClass:Ol,attr:kl,removeAttr:Al,data:jl,transform:Ml,transition:Nl,on:Pl,off:Fl,trigger:Il,transitionEnd:Ll,outerWidth:Rl,outerHeight:zl,offset:Bl,css:Hl,each:Ul,html:Gl,text:Kl,is:ql,index:Jl,eq:Yl,append:Xl,prepend:Zl,next:Ql,nextAll:$l,prev:eu,prevAll:tu,parent:nu,parents:ru,closest:iu,find:au,children:ou,filter:Wl,remove:su,add:cu,styles:Vl};Object.keys(lu).forEach(e=>{X.fn[e]=X.fn[e]||lu[e]});var Z={deleteProps(e){let t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})},nextTick(e,t=0){return setTimeout(e,t)},now(){return Date.now()},getTranslate(e,t=`x`){let n,r,i,a=J.getComputedStyle(e,null);return J.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(`,`).length>6&&(r=r.split(`, `).map(e=>e.replace(`,`,`.`)).join(`, `)),i=new J.WebKitCSSMatrix(r===`none`?``:r)):(i=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue(`transform`).replace(`translate(`,`matrix(1, 0, 0, 1,`),n=i.toString().split(`,`)),t===`x`&&(r=J.WebKitCSSMatrix?i.m41:n.length===16?parseFloat(n[12]):parseFloat(n[4])),t===`y`&&(r=J.WebKitCSSMatrix?i.m42:n.length===16?parseFloat(n[13]):parseFloat(n[5])),r||0},parseUrlQuery(e){let t={},n=e||J.location.href,r,i,a,o;if(typeof n==`string`&&n.length)for(n=n.indexOf(`?`)>-1?n.replace(/\S*\?/,``):``,i=n.split(`&`).filter(e=>e!==``),o=i.length,r=0;r<o;r+=1)a=i[r].replace(/#\S+/g,``).split(`=`),t[decodeURIComponent(a[0])]=a[1]===void 0?void 0:decodeURIComponent(a[1])||``;return t},isObject(e){return typeof e==`object`&&!!e&&e.constructor&&e.constructor===Object},extend(...e){let t=Object(e[0]);for(let n=1;n<e.length;n+=1){let r=e[n];if(r!=null){let e=Object.keys(Object(r));for(let n=0,i=e.length;n<i;n+=1){let i=e[n],a=Object.getOwnPropertyDescriptor(r,i);a!==void 0&&a.enumerable&&(Z.isObject(t[i])&&Z.isObject(r[i])?Z.extend(t[i],r[i]):!Z.isObject(t[i])&&Z.isObject(r[i])?(t[i]={},Z.extend(t[i],r[i])):t[i]=r[i])}}}return t}},Q=function(){return{touch:!!(`ontouchstart`in J||J.DocumentTouch&&q instanceof J.DocumentTouch),pointerEvents:!!J.PointerEvent&&`maxTouchPoints`in J.navigator&&J.navigator.maxTouchPoints>=0,observer:function(){return`MutationObserver`in J||`WebkitMutationObserver`in J}(),passiveListener:function(){let e=!1;try{let t=Object.defineProperty({},`passive`,{get(){e=!0}});J.addEventListener(`testPassiveListener`,null,t)}catch{}return e}(),gestures:function(){return`ongesturestart`in J}()}}(),uu=class{constructor(e={}){let t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(e=>{t.on(e,t.params.on[e])})}on(e,t,n){let r=this;if(typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r}once(e,t,n){let r=this;if(typeof t!=`function`)return r;function i(...n){r.off(e,i),i.f7proxy&&delete i.f7proxy,t.apply(r,n)}return i.f7proxy=t,r.on(e,i,n)}off(e,t){let n=this;return n.eventsListeners&&e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].length&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.f7proxy&&r.f7proxy===t)&&n.eventsListeners[e].splice(i,1)})}),n}emit(...e){let t=this;if(!t.eventsListeners)return t;let n,r,i;return typeof e[0]==`string`||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{if(t.eventsListeners&&t.eventsListeners[e]){let n=[];t.eventsListeners[e].forEach(e=>{n.push(e)}),n.forEach(e=>{e.apply(i,r)})}}),t}useModulesParams(e){let t=this;t.modules&&Object.keys(t.modules).forEach(n=>{let r=t.modules[n];r.params&&Z.extend(e,r.params)})}useModules(e={}){let t=this;t.modules&&Object.keys(t.modules).forEach(n=>{let r=t.modules[n],i=e[n]||{};r.instance&&Object.keys(r.instance).forEach(e=>{let n=r.instance[e];typeof n==`function`?t[e]=n.bind(t):t[e]=n}),r.on&&t.on&&Object.keys(r.on).forEach(e=>{t.on(e,r.on[e])}),r.create&&r.create.bind(t)(i)})}static set components(e){let t=this;t.use&&t.use(e)}static installModule(e,...t){let n=this;n.prototype.modules||(n.prototype.modules={});let r=e.name||`${Object.keys(n.prototype.modules).length}_${Z.now()}`;return n.prototype.modules[r]=e,e.proto&&Object.keys(e.proto).forEach(t=>{n.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(t=>{n[t]=e.static[t]}),e.install&&e.install.apply(n,t),n}static use(e,...t){let n=this;return Array.isArray(e)?(e.forEach(e=>n.installModule(e)),n):n.installModule(e,...t)}};function du(){let e=this,t,n,r=e.$el;t=e.params.width===void 0?r[0].clientWidth:e.params.width,n=e.params.height===void 0?r[0].clientHeight:e.params.height,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(r.css(`padding-left`),10)-parseInt(r.css(`padding-right`),10),n=n-parseInt(r.css(`padding-top`),10)-parseInt(r.css(`padding-bottom`),10),Z.extend(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function fu(){let e=this,t=e.params,{$wrapperEl:n,size:r,rtlTranslate:i,wrongRTL:a}=e,o=e.virtual&&t.virtual.enabled,s=o?e.virtual.slides.length:e.slides.length,c=n.children(`.${e.params.slideClass}`),l=o?e.virtual.slides.length:c.length,u=[],d=[],f=[];function p(e){return t.cssMode?e!==c.length-1:!0}let m=t.slidesOffsetBefore;typeof m==`function`&&(m=t.slidesOffsetBefore.call(e));let h=t.slidesOffsetAfter;typeof h==`function`&&(h=t.slidesOffsetAfter.call(e));let g=e.snapGrid.length,_=e.snapGrid.length,v=t.spaceBetween,y=-m,b=0,x=0;if(r===void 0)return;typeof v==`string`&&v.indexOf(`%`)>=0&&(v=parseFloat(v.replace(`%`,``))/100*r),e.virtualSize=-v,i?c.css({marginLeft:``,marginTop:``}):c.css({marginRight:``,marginBottom:``});let S;t.slidesPerColumn>1&&(S=Math.floor(l/t.slidesPerColumn)===l/e.params.slidesPerColumn?l:Math.ceil(l/t.slidesPerColumn)*t.slidesPerColumn,t.slidesPerView!==`auto`&&t.slidesPerColumnFill===`row`&&(S=Math.max(S,t.slidesPerView*t.slidesPerColumn)));let C,w=t.slidesPerColumn,ee=S/w,te=Math.floor(l/t.slidesPerColumn);for(let n=0;n<l;n+=1){C=0;let i=c.eq(n);if(t.slidesPerColumn>1){let r,a,o;if(t.slidesPerColumnFill===`row`&&t.slidesPerGroup>1){let e=Math.floor(n/(t.slidesPerGroup*t.slidesPerColumn)),s=n-t.slidesPerColumn*t.slidesPerGroup*e,c=e===0?t.slidesPerGroup:Math.min(Math.ceil((l-e*w*t.slidesPerGroup)/w),t.slidesPerGroup);o=Math.floor(s/c),a=s-o*c+e*t.slidesPerGroup,r=a+o*S/w,i.css({"-webkit-box-ordinal-group":r,"-moz-box-ordinal-group":r,"-ms-flex-order":r,"-webkit-order":r,order:r})}else t.slidesPerColumnFill===`column`?(a=Math.floor(n/w),o=n-a*w,(a>te||a===te&&o===w-1)&&(o+=1,o>=w&&(o=0,a+=1))):(o=Math.floor(n/ee),a=n-o*ee);i.css(`margin-${e.isHorizontal()?`top`:`left`}`,o!==0&&t.spaceBetween&&`${t.spaceBetween}px`)}if(i.css(`display`)!==`none`){if(t.slidesPerView===`auto`){let n=J.getComputedStyle(i[0],null),r=i[0].style.transform,a=i[0].style.webkitTransform;if(r&&(i[0].style.transform=`none`),a&&(i[0].style.webkitTransform=`none`),t.roundLengths)C=e.isHorizontal()?i.outerWidth(!0):i.outerHeight(!0);else if(e.isHorizontal()){let e=parseFloat(n.getPropertyValue(`width`)),t=parseFloat(n.getPropertyValue(`padding-left`)),r=parseFloat(n.getPropertyValue(`padding-right`)),i=parseFloat(n.getPropertyValue(`margin-left`)),a=parseFloat(n.getPropertyValue(`margin-right`)),o=n.getPropertyValue(`box-sizing`);C=o&&o===`border-box`?e+i+a:e+t+r+i+a}else{let e=parseFloat(n.getPropertyValue(`height`)),t=parseFloat(n.getPropertyValue(`padding-top`)),r=parseFloat(n.getPropertyValue(`padding-bottom`)),i=parseFloat(n.getPropertyValue(`margin-top`)),a=parseFloat(n.getPropertyValue(`margin-bottom`)),o=n.getPropertyValue(`box-sizing`);C=o&&o===`border-box`?e+i+a:e+t+r+i+a}r&&(i[0].style.transform=r),a&&(i[0].style.webkitTransform=a),t.roundLengths&&(C=Math.floor(C))}else C=(r-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),c[n]&&(e.isHorizontal()?c[n].style.width=`${C}px`:c[n].style.height=`${C}px`);c[n]&&(c[n].swiperSlideSize=C),f.push(C),t.centeredSlides?(y=y+C/2+b/2+v,b===0&&n!==0&&(y=y-r/2-v),n===0&&(y=y-r/2-v),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),x%t.slidesPerGroup===0&&u.push(y),d.push(y)):(t.roundLengths&&(y=Math.floor(y)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup===0&&u.push(y),d.push(y),y=y+C+v),e.virtualSize+=C+v,b=C,x+=1}}e.virtualSize=Math.max(e.virtualSize,r)+h;let ne;if(i&&a&&(t.effect===`slide`||t.effect===`coverflow`)&&n.css({width:`${e.virtualSize+t.spaceBetween}px`}),t.setWrapperSize&&(e.isHorizontal()?n.css({width:`${e.virtualSize+t.spaceBetween}px`}):n.css({height:`${e.virtualSize+t.spaceBetween}px`})),t.slidesPerColumn>1&&(e.virtualSize=(C+t.spaceBetween)*S,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?n.css({width:`${e.virtualSize+t.spaceBetween}px`}):n.css({height:`${e.virtualSize+t.spaceBetween}px`}),t.centeredSlides)){ne=[];for(let n=0;n<u.length;n+=1){let r=u[n];t.roundLengths&&(r=Math.floor(r)),u[n]<e.virtualSize+u[0]&&ne.push(r)}u=ne}if(!t.centeredSlides){ne=[];for(let n=0;n<u.length;n+=1){let i=u[n];t.roundLengths&&(i=Math.floor(i)),u[n]<=e.virtualSize-r&&ne.push(i)}u=ne,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(u.length===0&&(u=[0]),t.spaceBetween!==0&&(e.isHorizontal()?i?c.filter(p).css({marginLeft:`${v}px`}):c.filter(p).css({marginRight:`${v}px`}):c.filter(p).css({marginBottom:`${v}px`})),t.centeredSlides&&t.centeredSlidesBounds){let e=0;f.forEach(n=>{e+=n+(t.spaceBetween?t.spaceBetween:0)}),e-=t.spaceBetween;let n=e-r;u=u.map(e=>e<0?-m:e>n?n+h:e)}if(t.centerInsufficientSlides){let e=0;if(f.forEach(n=>{e+=n+(t.spaceBetween?t.spaceBetween:0)}),e-=t.spaceBetween,e<r){let t=(r-e)/2;u.forEach((e,n)=>{u[n]=e-t}),d.forEach((e,n)=>{d[n]=e+t})}}Z.extend(e,{slides:c,snapGrid:u,slidesGrid:d,slidesSizesGrid:f}),l!==s&&e.emit(`slidesLengthChange`),u.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),d.length!==_&&e.emit(`slidesGridLengthChange`),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}function pu(e){let t=this,n=[],r=0,i;if(typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed),t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e,t)=>{n.push(t)});else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){let e=t.activeIndex+i;if(e>t.slides.length)break;n.push(t.slides.eq(e)[0])}else n.push(t.slides.eq(t.activeIndex)[0]);for(i=0;i<n.length;i+=1)if(n[i]!==void 0){let e=n[i].offsetHeight;r=e>r?e:r}r&&t.$wrapperEl.css(`height`,`${r}px`)}function mu(){let e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}function hu(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let a=-e;i&&(a=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<r.length;e+=1){let o=r[e],s=(a+(n.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+n.spaceBetween);if(n.watchSlidesVisibility||n.centeredSlides&&n.autoHeight){let i=-(a-o.swiperSlideOffset),s=i+t.slidesSizesGrid[e];(i>=0&&i<t.size-1||s>1&&s<=t.size||i<=0&&s>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(e),r.eq(e).addClass(n.slideVisibleClass))}o.progress=i?-s:s}t.visibleSlides=X(t.visibleSlides)}function gu(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o}=t,s=a,c=o;r===0?(i=0,a=!0,o=!0):(i=(e-t.minTranslate())/r,a=i<=0,o=i>=1),Z.extend(t,{progress:i,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.watchSlidesVisibility||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!s&&t.emit(`reachBeginning toEdge`),o&&!c&&t.emit(`reachEnd toEdge`),(s&&!a||c&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}function _u(){let e=this,{slides:t,params:n,$wrapperEl:r,activeIndex:i,realIndex:a}=e,o=e.virtual&&n.virtual.enabled;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);let s;s=o?e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),s.addClass(n.slideActiveClass),n.loop&&(s.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(n.slideDuplicateActiveClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(n.slideDuplicateActiveClass));let c=s.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&c.length===0&&(c=t.eq(0),c.addClass(n.slideNextClass));let l=s.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&l.length===0&&(l=t.eq(-1),l.addClass(n.slidePrevClass)),n.loop&&(c.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr(`data-swiper-slide-index`)}"]`).addClass(n.slideDuplicateNextClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr(`data-swiper-slide-index`)}"]`).addClass(n.slideDuplicateNextClass),l.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr(`data-swiper-slide-index`)}"]`).addClass(n.slideDuplicatePrevClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr(`data-swiper-slide-index`)}"]`).addClass(n.slideDuplicatePrevClass))}function vu(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:r,snapGrid:i,params:a,activeIndex:o,realIndex:s,snapIndex:c}=t,l=e,u;if(l===void 0){for(let e=0;e<r.length;e+=1)r[e+1]===void 0?n>=r[e]&&(l=e):n>=r[e]&&n<r[e+1]-(r[e+1]-r[e])/2?l=e:n>=r[e]&&n<r[e+1]&&(l=e+1);a.normalizeSlideIndex&&(l<0||l===void 0)&&(l=0)}if(i.indexOf(n)>=0)u=i.indexOf(n);else{let e=Math.min(a.slidesPerGroupSkip,l);u=e+Math.floor((l-e)/a.slidesPerGroup)}if(u>=i.length&&(u=i.length-1),l===o){u!==c&&(t.snapIndex=u,t.emit(`snapIndexChange`));return}let d=parseInt(t.slides.eq(l).attr(`data-swiper-slide-index`)||l,10);Z.extend(t,{snapIndex:u,realIndex:d,previousIndex:o,activeIndex:l}),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),s!==d&&t.emit(`realIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&t.emit(`slideChange`)}function yu(e){let t=this,n=t.params,r=X(e.target).closest(`.${n.slideClass}`)[0],i=!1;if(r)for(let e=0;e<t.slides.length;e+=1)t.slides[e]===r&&(i=!0);if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(X(r).attr(`data-swiper-slide-index`),10):t.clickedIndex=X(r).index();else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var bu={updateSize:du,updateSlides:fu,updateAutoHeight:pu,updateSlidesOffset:mu,updateSlidesProgress:hu,updateProgress:gu,updateSlidesClasses:_u,updateActiveIndex:vu,updateClickedSlide:yu};function xu(e=this.isHorizontal()?`x`:`y`){let{params:t,rtlTranslate:n,translate:r,$wrapperEl:i}=this;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let a=Z.getTranslate(i[0],e);return n&&(a=-a),a||0}function Su(e,t){let n=this,{rtlTranslate:r,params:i,$wrapperEl:a,wrapperEl:o,progress:s}=n,c=0,l=0;n.isHorizontal()?c=r?-e:e:l=e,i.roundLengths&&(c=Math.floor(c),l=Math.floor(l)),i.cssMode?o[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-c:-l:i.virtualTranslate||a.transform(`translate3d(${c}px, ${l}px, 0px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?c:l;let u,d=n.maxTranslate()-n.minTranslate();u=d===0?0:(e-n.minTranslate())/d,u!==s&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function Cu(){return-this.snapGrid[0]}function wu(){return-this.snapGrid[this.snapGrid.length-1]}function Tu(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();return t===0?s[e?`scrollLeft`:`scrollTop`]=-u:s.scrollTo?s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`}):s[e?`scrollLeft`:`scrollTop`]=-u,!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.$wrapperEl[0].removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.$wrapperEl[0].removeEventListener(`webkitTransitionEnd`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,n&&a.emit(`transitionEnd`))},a.$wrapperEl[0].addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.$wrapperEl[0].addEventListener(`webkitTransitionEnd`,a.onTranslateToWrapperTransitionEnd))),!0}var Eu={getTranslate:xu,setTranslate:Su,minTranslate:Cu,maxTranslate:wu,translateTo:Tu};function Du(e,t){let n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit(`setTransition`,e,t)}function Ou(e=!0,t){let n=this,{activeIndex:r,params:i,previousIndex:a}=n;if(i.cssMode)return;i.autoHeight&&n.updateAutoHeight();let o=t;if(o||=r>a?`next`:r<a?`prev`:`reset`,n.emit(`transitionStart`),e&&r!==a){if(o===`reset`){n.emit(`slideResetTransitionStart`);return}n.emit(`slideChangeTransitionStart`),o===`next`?n.emit(`slideNextTransitionStart`):n.emit(`slidePrevTransitionStart`)}}function ku(e=!0,t){let n=this,{activeIndex:r,previousIndex:i,params:a}=n;if(n.animating=!1,a.cssMode)return;n.setTransition(0);let o=t;if(o||=r>i?`next`:r<i?`prev`:`reset`,n.emit(`transitionEnd`),e&&r!==i){if(o===`reset`){n.emit(`slideResetTransitionEnd`);return}n.emit(`slideChangeTransitionEnd`),o===`next`?n.emit(`slideNextTransitionEnd`):n.emit(`slidePrevTransitionEnd`)}}var Au={setTransition:Du,transitionStart:Ou,transitionEnd:ku};function ju(e=0,t=this.params.speed,n=!0,r){let i=this,a=e;a<0&&(a=0);let{params:o,snapGrid:s,slidesGrid:c,previousIndex:l,activeIndex:u,rtlTranslate:d,wrapperEl:f}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;let p=Math.min(i.params.slidesPerGroupSkip,a),m=p+Math.floor((a-p)/i.params.slidesPerGroup);m>=s.length&&(m=s.length-1),(u||o.initialSlide||0)===(l||0)&&n&&i.emit(`beforeSlideChangeStart`);let h=-s[m];if(i.updateProgress(h),o.normalizeSlideIndex)for(let e=0;e<c.length;e+=1)-Math.floor(h*100)>=Math.floor(c[e]*100)&&(a=e);if(i.initialized&&a!==u&&(!i.allowSlideNext&&h<i.translate&&h<i.minTranslate()||!i.allowSlidePrev&&h>i.translate&&h>i.maxTranslate()&&(u||0)!==a))return!1;let g;if(g=a>u?`next`:a<u?`prev`:`reset`,d&&-h===i.translate||!d&&h===i.translate)return i.updateActiveIndex(a),o.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),o.effect!==`slide`&&i.setTranslate(h),g!==`reset`&&(i.transitionStart(n,g),i.transitionEnd(n,g)),!1;if(o.cssMode){let e=i.isHorizontal(),n=-h;return d&&(n=f.scrollWidth-f.offsetWidth-n),t===0?f[e?`scrollLeft`:`scrollTop`]=n:f.scrollTo?f.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`}):f[e?`scrollLeft`:`scrollTop`]=n,!0}return t===0?(i.setTransition(0),i.setTranslate(h),i.updateActiveIndex(a),i.updateSlidesClasses(),i.emit(`beforeTransitionStart`,t,r),i.transitionStart(n,g),i.transitionEnd(n,g)):(i.setTransition(t),i.setTranslate(h),i.updateActiveIndex(a),i.updateSlidesClasses(),i.emit(`beforeTransitionStart`,t,r),i.transitionStart(n,g),i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||=function(e){!i||i.destroyed||e.target===this&&(i.$wrapperEl[0].removeEventListener(`transitionend`,i.onSlideToWrapperTransitionEnd),i.$wrapperEl[0].removeEventListener(`webkitTransitionEnd`,i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,g))},i.$wrapperEl[0].addEventListener(`transitionend`,i.onSlideToWrapperTransitionEnd),i.$wrapperEl[0].addEventListener(`webkitTransitionEnd`,i.onSlideToWrapperTransitionEnd))),!0}function Mu(e=0,t=this.params.speed,n=!0,r){let i=this,a=e;return i.params.loop&&(a+=i.loopedSlides),i.slideTo(a,t,n,r)}function Nu(e=this.params.speed,t=!0,n){let r=this,{params:i,animating:a}=r,o=r.activeIndex<i.slidesPerGroupSkip?1:i.slidesPerGroup;if(i.loop){if(a)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return r.slideTo(r.activeIndex+o,e,t,n)}function Pu(e=this.params.speed,t=!0,n){let r=this,{params:i,animating:a,snapGrid:o,slidesGrid:s,rtlTranslate:c}=r;if(i.loop){if(a)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}let l=c?r.translate:-r.translate;function u(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let d=u(l),f=o.map(e=>u(e));s.map(e=>u(e)),o[f.indexOf(d)];let p=o[f.indexOf(d)-1];p===void 0&&i.cssMode&&o.forEach(e=>{!p&&d>=e&&(p=e)});let m;return p!==void 0&&(m=s.indexOf(p),m<0&&(m=r.activeIndex-1)),r.slideTo(m,e,t,n)}function Fu(e=this.params.speed,t=!0,n){let r=this;return r.slideTo(r.activeIndex,e,t,n)}function Iu(e=this.params.speed,t=!0,n,r=.5){let i=this,a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function Lu(){let e=this,{params:t,$wrapperEl:n}=e,r=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,i=e.clickedIndex,a;if(t.loop){if(e.animating)return;a=parseInt(X(e.clickedSlide).attr(`data-swiper-slide-index`),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Z.nextTick(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Z.nextTick(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Ru={slideTo:ju,slideToLoop:Mu,slideNext:Nu,slidePrev:Pu,slideReset:Fu,slideToClosest:Iu,slideToClickedSlide:Lu};function zu(){let e=this,{params:t,$wrapperEl:n}=e;n.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();let r=n.children(`.${t.slideClass}`);if(t.loopFillGroupWithBlank){let e=t.slidesPerGroup-r.length%t.slidesPerGroup;if(e!==t.slidesPerGroup){for(let r=0;r<e;r+=1){let e=X(q.createElement(`div`)).addClass(`${t.slideClass} ${t.slideBlankClass}`);n.append(e)}r=n.children(`.${t.slideClass}`)}}t.slidesPerView===`auto`&&!t.loopedSlides&&(t.loopedSlides=r.length),e.loopedSlides=Math.ceil(parseFloat(t.loopedSlides||t.slidesPerView,10)),e.loopedSlides+=t.loopAdditionalSlides,e.loopedSlides>r.length&&(e.loopedSlides=r.length);let i=[],a=[];r.each((t,n)=>{let o=X(n);t<e.loopedSlides&&a.push(n),t<r.length&&t>=r.length-e.loopedSlides&&i.push(n),o.attr(`data-swiper-slide-index`,t)});for(let e=0;e<a.length;e+=1)n.append(X(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass));for(let e=i.length-1;e>=0;--e)n.prepend(X(i[e].cloneNode(!0)).addClass(t.slideDuplicateClass))}function Bu(){let e=this;e.emit(`beforeLoopFix`);let{activeIndex:t,slides:n,loopedSlides:r,allowSlidePrev:i,allowSlideNext:a,snapGrid:o,rtlTranslate:s}=e,c;e.allowSlidePrev=!0,e.allowSlideNext=!0;let l=-o[t]-e.getTranslate();t<r?(c=n.length-r*3+t,c+=r,e.slideTo(c,0,!1,!0)&&l!==0&&e.setTranslate((s?-e.translate:e.translate)-l)):t>=n.length-r&&(c=-n.length+t+r,c+=r,e.slideTo(c,0,!1,!0)&&l!==0&&e.setTranslate((s?-e.translate:e.translate)-l)),e.allowSlidePrev=i,e.allowSlideNext=a,e.emit(`loopFix`)}function Vu(){let{$wrapperEl:e,params:t,slides:n}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),n.removeAttr(`data-swiper-slide-index`)}var Hu={loopCreate:zu,loopFix:Bu,loopDestroy:Vu};function Uu(e){let t=this;if(Q.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.el;n.style.cursor=`move`,n.style.cursor=e?`-webkit-grabbing`:`-webkit-grab`,n.style.cursor=e?`-moz-grabbin`:`-moz-grab`,n.style.cursor=e?`grabbing`:`grab`}function Wu(){let e=this;Q.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.el.style.cursor=``)}var Gu={setGrabCursor:Uu,unsetGrabCursor:Wu};function Ku(e){let t=this,{$wrapperEl:n,params:r}=t;if(r.loop&&t.loopDestroy(),typeof e==`object`&&`length`in e)for(let t=0;t<e.length;t+=1)e[t]&&n.append(e[t]);else n.append(e);r.loop&&t.loopCreate(),r.observer&&Q.observer||t.update()}function qu(e){let t=this,{params:n,$wrapperEl:r,activeIndex:i}=t;n.loop&&t.loopDestroy();let a=i+1;if(typeof e==`object`&&`length`in e){for(let t=0;t<e.length;t+=1)e[t]&&r.prepend(e[t]);a=i+e.length}else r.prepend(e);n.loop&&t.loopCreate(),n.observer&&Q.observer||t.update(),t.slideTo(a,0,!1)}function Ju(e,t){let n=this,{$wrapperEl:r,params:i,activeIndex:a}=n,o=a;i.loop&&(o-=n.loopedSlides,n.loopDestroy(),n.slides=r.children(`.${i.slideClass}`));let s=n.slides.length;if(e<=0){n.prependSlide(t);return}if(e>=s){n.appendSlide(t);return}let c=o>e?o+1:o,l=[];for(let t=s-1;t>=e;--t){let e=n.slides.eq(t);e.remove(),l.unshift(e)}if(typeof t==`object`&&`length`in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);c=o>e?o+t.length:o}else r.append(t);for(let e=0;e<l.length;e+=1)r.append(l[e]);i.loop&&n.loopCreate(),i.observer&&Q.observer||n.update(),i.loop?n.slideTo(c+n.loopedSlides,0,!1):n.slideTo(c,0,!1)}function Yu(e){let t=this,{params:n,$wrapperEl:r,activeIndex:i}=t,a=i;n.loop&&(a-=t.loopedSlides,t.loopDestroy(),t.slides=r.children(`.${n.slideClass}`));let o=a,s;if(typeof e==`object`&&`length`in e){for(let n=0;n<e.length;n+=1)s=e[n],t.slides[s]&&t.slides.eq(s).remove(),s<o&&--o;o=Math.max(o,0)}else s=e,t.slides[s]&&t.slides.eq(s).remove(),s<o&&--o,o=Math.max(o,0);n.loop&&t.loopCreate(),n.observer&&Q.observer||t.update(),n.loop?t.slideTo(o+t.loopedSlides,0,!1):t.slideTo(o,0,!1)}function Xu(){let e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}var Zu={appendSlide:Ku,prependSlide:qu,addSlide:Ju,removeSlide:Yu,removeAllSlides:Xu},$=function(){let e=J.navigator.platform,t=J.navigator.userAgent,n={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!!(J.cordova||J.phonegap),phonegap:!!(J.cordova||J.phonegap),electron:!1},r=J.screen.width,i=J.screen.height,a=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),c=!o&&t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),l=t.indexOf(`MSIE `)>=0||t.indexOf(`Trident/`)>=0,u=t.indexOf(`Edge/`)>=0,d=t.indexOf(`Gecko/`)>=0&&t.indexOf(`Firefox/`)>=0,f=e===`Win32`,p=t.toLowerCase().indexOf(`electron`)>=0,m=e===`MacIntel`;return!o&&m&&Q.touch&&(r===1024&&i===1366||r===834&&i===1194||r===834&&i===1112||r===768&&i===1024)&&(o=t.match(/(Version)\/([\d.]+)/),m=!1),n.ie=l,n.edge=u,n.firefox=d,a&&!f&&(n.os=`android`,n.osVersion=a[2],n.android=!0,n.androidChrome=t.toLowerCase().indexOf(`chrome`)>=0),(o||c||s)&&(n.os=`ios`,n.ios=!0),c&&!s&&(n.osVersion=c[2].replace(/_/g,`.`),n.iphone=!0),o&&(n.osVersion=o[2].replace(/_/g,`.`),n.ipad=!0),s&&(n.osVersion=s[3]?s[3].replace(/_/g,`.`):null,n.ipod=!0),n.ios&&n.osVersion&&t.indexOf(`Version/`)>=0&&n.osVersion.split(`.`)[0]===`10`&&(n.osVersion=t.toLowerCase().split(`version/`)[1].split(` `)[0]),n.webView=!!((c||o||s)&&(t.match(/.*AppleWebKit(?!.*Safari)/i)||J.navigator.standalone))||J.matchMedia&&J.matchMedia(`(display-mode: standalone)`).matches,n.webview=n.webView,n.standalone=n.webView,n.desktop=!(n.ios||n.android)||p,n.desktop&&(n.electron=p,n.macos=m,n.windows=f,n.macos&&(n.os=`macos`),n.windows&&(n.os=`windows`)),n.pixelRatio=J.devicePixelRatio||1,n}();function Qu(e){let t=this,n=t.touchEventsData,{params:r,touches:i}=t;if(t.animating&&r.preventInteractionOnTransition)return;let a=e;a.originalEvent&&(a=a.originalEvent);let o=X(a.target);if(r.touchEventsTarget===`wrapper`&&!o.closest(t.wrapperEl).length||(n.isTouchEvent=a.type===`touchstart`,!n.isTouchEvent&&`which`in a&&a.which===3)||!n.isTouchEvent&&`button`in a&&a.button>0||n.isTouched&&n.isMoved)return;if(r.noSwiping&&o.closest(r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`)[0]){t.allowClick=!0;return}if(r.swipeHandler&&!o.closest(r.swipeHandler)[0])return;i.currentX=a.type===`touchstart`?a.targetTouches[0].pageX:a.pageX,i.currentY=a.type===`touchstart`?a.targetTouches[0].pageY:a.pageY;let s=i.currentX,c=i.currentY,l=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!(l&&(s<=u||s>=J.screen.width-u))){if(Z.extend(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),i.startX=s,i.startY=c,n.touchStartTime=Z.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1),a.type!==`touchstart`){let e=!0;o.is(n.formElements)&&(e=!1),q.activeElement&&X(q.activeElement).is(n.formElements)&&q.activeElement!==o[0]&&q.activeElement.blur();let i=e&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||i)&&a.preventDefault()}t.emit(`touchStart`,a)}}function $u(e){let t=this,n=t.touchEventsData,{params:r,touches:i,rtlTranslate:a}=t,o=e;if(o.originalEvent&&(o=o.originalEvent),!n.isTouched){n.startMoving&&n.isScrolling&&t.emit(`touchMoveOpposite`,o);return}if(n.isTouchEvent&&o.type!==`touchmove`)return;let s=o.type===`touchmove`&&o.targetTouches&&(o.targetTouches[0]||o.changedTouches[0]),c=o.type===`touchmove`?s.pageX:o.pageX,l=o.type===`touchmove`?s.pageY:o.pageY;if(o.preventedByNestedSwiper){i.startX=c,i.startY=l;return}if(!t.allowTouchMove){t.allowClick=!1,n.isTouched&&(Z.extend(i,{startX:c,startY:l,currentX:c,currentY:l}),n.touchStartTime=Z.now());return}if(n.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(l<i.startY&&t.translate<=t.maxTranslate()||l>i.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(c<i.startX&&t.translate<=t.maxTranslate()||c>i.startX&&t.translate>=t.minTranslate())return}if(n.isTouchEvent&&q.activeElement&&o.target===q.activeElement&&X(o.target).is(n.formElements)){n.isMoved=!0,t.allowClick=!1;return}if(n.allowTouchCallbacks&&t.emit(`touchMove`,o),o.targetTouches&&o.targetTouches.length>1)return;i.currentX=c,i.currentY=l;let u=i.currentX-i.startX,d=i.currentY-i.startY;if(t.params.threshold&&Math.sqrt(u**2+d**2)<t.params.threshold)return;if(n.isScrolling===void 0){let e;t.isHorizontal()&&i.currentY===i.startY||t.isVertical()&&i.currentX===i.startX?n.isScrolling=!1:u*u+d*d>=25&&(e=Math.atan2(Math.abs(d),Math.abs(u))*180/Math.PI,n.isScrolling=t.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(n.isScrolling&&t.emit(`touchMoveOpposite`,o),n.startMoving===void 0&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(n.startMoving=!0),n.isScrolling){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&o.cancelable&&o.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&o.stopPropagation(),n.isMoved||(r.loop&&t.loopFix(),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger(`webkitTransitionEnd transitionend`),n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit(`sliderFirstMove`,o)),t.emit(`sliderMove`,o),n.isMoved=!0;let f=t.isHorizontal()?u:d;i.diff=f,f*=r.touchRatio,a&&(f=-f),t.swipeDirection=f>0?`prev`:`next`,n.currentTranslate=f+n.startTranslate;let p=!0,m=r.resistanceRatio;if(r.touchReleaseOnEdges&&(m=0),f>0&&n.currentTranslate>t.minTranslate()?(p=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+f)**m)):f<0&&n.currentTranslate<t.maxTranslate()&&(p=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-f)**m)),p&&(o.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection===`next`&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection===`prev`&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),r.threshold>0)if(Math.abs(f)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,n.currentTranslate=n.startTranslate,i.diff=t.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode||r.watchSlidesProgress||r.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&(n.velocities.length===0&&n.velocities.push({position:i[t.isHorizontal()?`startX`:`startY`],time:n.touchStartTime}),n.velocities.push({position:i[t.isHorizontal()?`currentX`:`currentY`],time:Z.now()})),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function ed(e){let t=this,n=t.touchEventsData,{params:r,touches:i,rtlTranslate:a,$wrapperEl:o,slidesGrid:s,snapGrid:c}=t,l=e;if(l.originalEvent&&(l=l.originalEvent),n.allowTouchCallbacks&&t.emit(`touchEnd`,l),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}r.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let u=Z.now(),d=u-n.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(l),t.emit(`tap click`,l),d<300&&u-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,l)),n.lastClickTime=Z.now(),Z.nextTick(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||i.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(f=r.followFinger?a?t.translate:-t.translate:-n.currentTranslate,r.cssMode)return;if(r.freeMode){if(f<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(f>-t.maxTranslate()){t.slides.length<c.length?t.slideTo(c.length-1):t.slideTo(t.slides.length-1);return}if(r.freeModeMomentum){if(n.velocities.length>1){let e=n.velocities.pop(),i=n.velocities.pop(),a=e.position-i.position,o=e.time-i.time;t.velocity=a/o,t.velocity/=2,Math.abs(t.velocity)<r.freeModeMinimumVelocity&&(t.velocity=0),(o>150||Z.now()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeModeMomentumVelocityRatio,n.velocities.length=0;let e=1e3*r.freeModeMomentumRatio,i=t.velocity*e,s=t.translate+i;a&&(s=-s);let l=!1,u,d=Math.abs(t.velocity)*20*r.freeModeMomentumBounceRatio,f;if(s<t.maxTranslate())r.freeModeMomentumBounce?(s+t.maxTranslate()<-d&&(s=t.maxTranslate()-d),u=t.maxTranslate(),l=!0,n.allowMomentumBounce=!0):s=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(s>t.minTranslate())r.freeModeMomentumBounce?(s-t.minTranslate()>d&&(s=t.minTranslate()+d),u=t.minTranslate(),l=!0,n.allowMomentumBounce=!0):s=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeModeSticky){let e;for(let t=0;t<c.length;t+=1)if(c[t]>-s){e=t;break}s=Math.abs(c[e]-s)<Math.abs(c[e-1]-s)||t.swipeDirection===`next`?c[e]:c[e-1],s=-s}if(f&&t.once(`transitionEnd`,()=>{t.loopFix()}),t.velocity!==0){if(e=Math.abs(a?(-s-t.translate)/t.velocity:(s-t.translate)/t.velocity),r.freeModeSticky){let n=Math.abs((a?-s:s)-t.translate),i=t.slidesSizesGrid[t.activeIndex];e=n<i?r.speed:n<2*i?r.speed*1.5:r.speed*2.5}}else if(r.freeModeSticky){t.slideToClosest();return}r.freeModeMomentumBounce&&l?(t.updateProgress(u),t.setTransition(e),t.setTranslate(s),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd(()=>{!t||t.destroyed||!n.allowMomentumBounce||(t.emit(`momentumBounce`),t.setTransition(r.speed),setTimeout(()=>{t.setTranslate(u),o.transitionEnd(()=>{!t||t.destroyed||t.transitionEnd()})},0))})):t.velocity?(t.updateProgress(s),t.setTransition(e),t.setTranslate(s),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd(()=>{!t||t.destroyed||t.transitionEnd()}))):t.updateProgress(s),t.updateActiveIndex(),t.updateSlidesClasses()}else if(r.freeModeSticky){t.slideToClosest();return}(!r.freeModeMomentum||d>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses());return}let p=0,m=t.slidesSizesGrid[0];for(let e=0;e<s.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){let t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;s[e+t]===void 0?f>=s[e]&&(p=e,m=s[s.length-1]-s[s.length-2]):f>=s[e]&&f<s[e+t]&&(p=e,m=s[e+t]-s[e])}let h=(f-s[p])/m,g=p<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(d>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(h>=r.longSwipesRatio?t.slideTo(p+g):t.slideTo(p)),t.swipeDirection===`prev`&&(h>1-r.longSwipesRatio?t.slideTo(p+g):t.slideTo(p))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(l.target===t.navigation.nextEl||l.target===t.navigation.prevEl)?l.target===t.navigation.nextEl?t.slideTo(p+g):t.slideTo(p):(t.swipeDirection===`next`&&t.slideTo(p+g),t.swipeDirection===`prev`&&t.slideTo(p))}}function td(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function nd(e){let t=this;t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function rd(){let e=this,{wrapperEl:t,rtlTranslate:n}=e;e.previousTranslate=e.translate,e.isHorizontal()?n?e.translate=t.scrollWidth-t.offsetWidth-t.scrollLeft:e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===-0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let r,i=e.maxTranslate()-e.minTranslate();r=i===0?0:(e.translate-e.minTranslate())/i,r!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}var id=!1;function ad(){}function od(){let e=this,{params:t,touchEvents:n,el:r,wrapperEl:i}=e;e.onTouchStart=Qu.bind(e),e.onTouchMove=$u.bind(e),e.onTouchEnd=ed.bind(e),t.cssMode&&(e.onScroll=rd.bind(e)),e.onClick=nd.bind(e);let a=!!t.nested;if(!Q.touch&&Q.pointerEvents)r.addEventListener(n.start,e.onTouchStart,!1),q.addEventListener(n.move,e.onTouchMove,a),q.addEventListener(n.end,e.onTouchEnd,!1);else{if(Q.touch){let i=n.start===`touchstart`&&Q.passiveListener&&t.passiveListeners?{passive:!0,capture:!1}:!1;r.addEventListener(n.start,e.onTouchStart,i),r.addEventListener(n.move,e.onTouchMove,Q.passiveListener?{passive:!1,capture:a}:a),r.addEventListener(n.end,e.onTouchEnd,i),n.cancel&&r.addEventListener(n.cancel,e.onTouchEnd,i),id||=(q.addEventListener(`touchstart`,ad),!0)}(t.simulateTouch&&!$.ios&&!$.android||t.simulateTouch&&!Q.touch&&$.ios)&&(r.addEventListener(`mousedown`,e.onTouchStart,!1),q.addEventListener(`mousemove`,e.onTouchMove,a),q.addEventListener(`mouseup`,e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener(`click`,e.onClick,!0),t.cssMode&&i.addEventListener(`scroll`,e.onScroll),t.updateOnWindowResize?e.on($.ios||$.android?`resize orientationchange observerUpdate`:`resize observerUpdate`,td,!0):e.on(`observerUpdate`,td,!0)}function sd(){let e=this,{params:t,touchEvents:n,el:r,wrapperEl:i}=e,a=!!t.nested;if(!Q.touch&&Q.pointerEvents)r.removeEventListener(n.start,e.onTouchStart,!1),q.removeEventListener(n.move,e.onTouchMove,a),q.removeEventListener(n.end,e.onTouchEnd,!1);else{if(Q.touch){let i=n.start===`onTouchStart`&&Q.passiveListener&&t.passiveListeners?{passive:!0,capture:!1}:!1;r.removeEventListener(n.start,e.onTouchStart,i),r.removeEventListener(n.move,e.onTouchMove,a),r.removeEventListener(n.end,e.onTouchEnd,i),n.cancel&&r.removeEventListener(n.cancel,e.onTouchEnd,i)}(t.simulateTouch&&!$.ios&&!$.android||t.simulateTouch&&!Q.touch&&$.ios)&&(r.removeEventListener(`mousedown`,e.onTouchStart,!1),q.removeEventListener(`mousemove`,e.onTouchMove,a),q.removeEventListener(`mouseup`,e.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener(`click`,e.onClick,!0),t.cssMode&&i.removeEventListener(`scroll`,e.onScroll),e.off($.ios||$.android?`resize orientationchange observerUpdate`:`resize observerUpdate`,td)}var cd={attachEvents:od,detachEvents:sd};function ld(){let e=this,{activeIndex:t,initialized:n,loopedSlides:r=0,params:i,$el:a}=e,o=i.breakpoints;if(!o||o&&Object.keys(o).length===0)return;let s=e.getBreakpoint(o);if(s&&e.currentBreakpoint!==s){let c=s in o?o[s]:void 0;c&&[`slidesPerView`,`spaceBetween`,`slidesPerGroup`,`slidesPerGroupSkip`,`slidesPerColumn`].forEach(e=>{let t=c[e];t!==void 0&&(e===`slidesPerView`&&(t===`AUTO`||t===`auto`)?c[e]=`auto`:e===`slidesPerView`?c[e]=parseFloat(t):c[e]=parseInt(t,10))});let l=c||e.originalParams,u=i.slidesPerColumn>1,d=l.slidesPerColumn>1;u&&!d?a.removeClass(`${i.containerModifierClass}multirow ${i.containerModifierClass}multirow-column`):!u&&d&&(a.addClass(`${i.containerModifierClass}multirow`),l.slidesPerColumnFill===`column`&&a.addClass(`${i.containerModifierClass}multirow-column`));let f=l.direction&&l.direction!==i.direction,p=i.loop&&(l.slidesPerView!==i.slidesPerView||f);f&&n&&e.changeDirection(),Z.extend(e.params,l),Z.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=s,p&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-r+e.loopedSlides,0,!1)),e.emit(`breakpoint`,l)}}function ud(e){if(!e)return;let t=!1,n=Object.keys(e).map(e=>{if(typeof e==`string`&&e.indexOf(`@`)===0){let t=parseFloat(e.substr(1));return{value:J.innerHeight*t,point:e}}return{value:e,point:e}});n.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<n.length;e+=1){let{point:r,value:i}=n[e];i<=J.innerWidth&&(t=r)}return t||`max`}var dd={setBreakpoint:ld,getBreakpoint:ud};function fd(){let{classNames:e,params:t,rtl:n,$el:r}=this,i=[];i.push(`initialized`),i.push(t.direction),t.freeMode&&i.push(`free-mode`),t.autoHeight&&i.push(`autoheight`),n&&i.push(`rtl`),t.slidesPerColumn>1&&(i.push(`multirow`),t.slidesPerColumnFill===`column`&&i.push(`multirow-column`)),$.android&&i.push(`android`),$.ios&&i.push(`ios`),t.cssMode&&i.push(`css-mode`),i.forEach(n=>{e.push(t.containerModifierClass+n)}),r.addClass(e.join(` `))}function pd(){let{$el:e,classNames:t}=this;e.removeClass(t.join(` `))}var md={addClasses:fd,removeClasses:pd};function hd(e,t,n,r,i,a){let o;function s(){a&&a()}!X(e).parent(`picture`)[0]&&(!e.complete||!i)&&t?(o=new J.Image,o.onload=s,o.onerror=s,r&&(o.sizes=r),n&&(o.srcset=n),t&&(o.src=t)):s()}function gd(){let e=this;e.imagesToLoad=e.$el.find(`img`);function t(){e==null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit(`imagesReady`)))}for(let n=0;n<e.imagesToLoad.length;n+=1){let r=e.imagesToLoad[n];e.loadImage(r,r.currentSrc||r.getAttribute(`src`),r.srcset||r.getAttribute(`srcset`),r.sizes||r.getAttribute(`sizes`),!0,t)}}var _d={loadImage:hd,preloadImages:gd};function vd(){let e=this,t=e.params,n=e.isLocked,r=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;t.slidesOffsetBefore&&t.slidesOffsetAfter&&r?e.isLocked=r<=e.size:e.isLocked=e.snapGrid.length===1,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,n!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`),n&&n!==e.isLocked&&(e.isEnd=!1,e.navigation&&e.navigation.update())}var yd={checkOverflow:vd},bd={init:!0,direction:`horizontal`,touchEventsTarget:`container`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:`column`,slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,containerModifierClass:`swiper-container-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-invisible-blank`,slideActiveClass:`swiper-slide-active`,slideDuplicateActiveClass:`swiper-slide-duplicate-active`,slideVisibleClass:`swiper-slide-visible`,slideDuplicateClass:`swiper-slide-duplicate`,slideNextClass:`swiper-slide-next`,slideDuplicateNextClass:`swiper-slide-duplicate-next`,slidePrevClass:`swiper-slide-prev`,slideDuplicatePrevClass:`swiper-slide-duplicate-prev`,wrapperClass:`swiper-wrapper`,runCallbacksOnInit:!0},xd={update:bu,translate:Eu,transition:Au,slide:Ru,loop:Hu,grabCursor:Gu,manipulation:Zu,events:cd,breakpoints:dd,checkOverflow:yd,classes:md,images:_d},Sd={},Cd=class e extends uu{constructor(...t){let n,r;t.length===1&&t[0].constructor&&t[0].constructor===Object?r=t[0]:[n,r]=t,r||={},r=Z.extend({},r),n&&!r.el&&(r.el=n),super(r),Object.keys(xd).forEach(t=>{Object.keys(xd[t]).forEach(n=>{e.prototype[n]||(e.prototype[n]=xd[t][n])})});let i=this;i.modules===void 0&&(i.modules={}),Object.keys(i.modules).forEach(e=>{let t=i.modules[e];if(t.params){let e=Object.keys(t.params)[0],n=t.params[e];if(typeof n!=`object`||!n||!(e in r&&`enabled`in n))return;r[e]===!0&&(r[e]={enabled:!0}),typeof r[e]==`object`&&!(`enabled`in r[e])&&(r[e].enabled=!0),r[e]||(r[e]={enabled:!1})}});let a=Z.extend({},bd);i.useModulesParams(a),i.params=Z.extend({},a,Sd,r),i.originalParams=Z.extend({},i.params),i.passedParams=Z.extend({},r),i.$=X;let o=X(i.params.el);if(n=o[0],!n)return;if(o.length>1){let t=[];return o.each((n,i)=>{let a=Z.extend({},r,{el:i});t.push(new e(a))}),t}n.swiper=i,o.data(`swiper`,i);let s;return n&&n.shadowRoot&&n.shadowRoot.querySelector?(s=X(n.shadowRoot.querySelector(`.${i.params.wrapperClass}`)),s.children=e=>o.children(e)):s=o.children(`.${i.params.wrapperClass}`),Z.extend(i,{$el:o,el:n,$wrapperEl:s,wrapperEl:s[0],classNames:[],slides:X(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction===`horizontal`},isVertical(){return i.params.direction===`vertical`},rtl:n.dir.toLowerCase()===`rtl`||o.css(`direction`)===`rtl`,rtlTranslate:i.params.direction===`horizontal`&&(n.dir.toLowerCase()===`rtl`||o.css(`direction`)===`rtl`),wrongRTL:s.css(`display`)===`-webkit-box`,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEvents:function(){let e=[`touchstart`,`touchmove`,`touchend`,`touchcancel`],t=[`mousedown`,`mousemove`,`mouseup`];return Q.pointerEvents&&(t=[`pointerdown`,`pointermove`,`pointerup`]),i.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},i.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},Q.touch||!i.params.simulateTouch?i.touchEventsTouch:i.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:`input, select, option, textarea, button, video, label`,lastClickTime:Z.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.useModules(),i.params.init&&i.init(),i}slidesPerViewDynamic(){let{params:e,slides:t,slidesGrid:n,size:r,activeIndex:i}=this,a=1;if(e.centeredSlides){let e=t[i].swiperSlideSize,n;for(let o=i+1;o<t.length;o+=1)t[o]&&!n&&(e+=t[o].swiperSlideSize,a+=1,e>r&&(n=!0));for(let o=i-1;o>=0;--o)t[o]&&!n&&(e+=t[o].swiperSlideSize,a+=1,e>r&&(n=!0))}else for(let e=i+1;e<t.length;e+=1)n[e]-n[i]<r&&(a+=1);return a}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;e.params.freeMode?(r(),e.params.autoHeight&&e.updateAutoHeight()):(i=(e.params.slidesPerView===`auto`||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||r()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`),n.params.direction=e,n.slides.each((t,n)=>{e===`vertical`?n.style.width=``:n.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}init(){let e=this;e.initialized||(e.emit(`beforeInit`),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit(`init`))}destroy(e=!0,t=!0){let n=this,{params:r,$el:i,$wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i.removeAttr(`style`),a.removeAttr(`style`),o&&o.length&&o.removeClass([r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass].join(` `)).removeAttr(`style`).removeAttr(`data-swiper-slide-index`)),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.$el[0].swiper=null,n.$el.data(`swiper`,null),Z.deleteProps(n)),n.destroyed=!0,null)}static extendDefaults(e){Z.extend(Sd,e)}static get extendedDefaults(){return Sd}static get defaults(){return bd}static get Class(){return uu}static get $(){return X}},wd={name:`device`,proto:{device:$},static:{device:$}},Td={name:`support`,proto:{support:Q},static:{support:Q}},Ed=function(){function e(){let e=J.navigator.userAgent.toLowerCase();return e.indexOf(`safari`)>=0&&e.indexOf(`chrome`)<0&&e.indexOf(`android`)<0}return{isEdge:!!J.navigator.userAgent.match(/Edge/g),isSafari:e(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)}}(),Dd={name:`browser`,proto:{browser:Ed},static:{browser:Ed}},Od={name:`resize`,create(){let e=this;Z.extend(e,{resize:{resizeHandler(){!e||e.destroyed||!e.initialized||(e.emit(`beforeResize`),e.emit(`resize`))},orientationChangeHandler(){!e||e.destroyed||!e.initialized||e.emit(`orientationchange`)}}})},on:{init(){let e=this;J.addEventListener(`resize`,e.resize.resizeHandler),J.addEventListener(`orientationchange`,e.resize.orientationChangeHandler)},destroy(){let e=this;J.removeEventListener(`resize`,e.resize.resizeHandler),J.removeEventListener(`orientationchange`,e.resize.orientationChangeHandler)}}},kd={func:J.MutationObserver||J.WebkitMutationObserver,attach(e,t={}){let n=this,r=kd.func,i=new r(e=>{if(e.length===1){n.emit(`observerUpdate`,e[0]);return}let t=function(){n.emit(`observerUpdate`,e[0])};J.requestAnimationFrame?J.requestAnimationFrame(t):J.setTimeout(t,0)});i.observe(e,{attributes:t.attributes===void 0?!0:t.attributes,childList:t.childList===void 0?!0:t.childList,characterData:t.characterData===void 0?!0:t.characterData}),n.observer.observers.push(i)},init(){let e=this;if(!(!Q.observer||!e.params.observer)){if(e.params.observeParents){let t=e.$el.parents();for(let n=0;n<t.length;n+=1)e.observer.attach(t[n])}e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy(){let e=this;e.observer.observers.forEach(e=>{e.disconnect()}),e.observer.observers=[]}},Ad={name:`observer`,params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create(){let e=this;Z.extend(e,{observer:{init:kd.init.bind(e),attach:kd.attach.bind(e),destroy:kd.destroy.bind(e),observers:[]}})},on:{init(){this.observer.init()},destroy(){this.observer.destroy()}}},jd={update(e){let t=this,{slidesPerView:n,slidesPerGroup:r,centeredSlides:i}=t.params,{addSlidesBefore:a,addSlidesAfter:o}=t.params.virtual,{from:s,to:c,slides:l,slidesGrid:u,renderSlide:d,offset:f}=t.virtual;t.updateActiveIndex();let p=t.activeIndex||0,m;m=t.rtlTranslate?`right`:t.isHorizontal()?`left`:`top`;let h,g;i?(h=Math.floor(n/2)+r+a,g=Math.floor(n/2)+r+o):(h=n+(r-1)+a,g=r+o);let _=Math.max((p||0)-g,0),v=Math.min((p||0)+h,l.length-1),y=(t.slidesGrid[_]||0)-(t.slidesGrid[0]||0);Z.extend(t.virtual,{from:_,to:v,offset:y,slidesGrid:t.slidesGrid});function b(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(s===_&&c===v&&!e){t.slidesGrid!==u&&y!==f&&t.slides.css(m,`${y}px`),t.updateProgress();return}if(t.params.virtual.renderExternal){t.params.virtual.renderExternal.call(t,{offset:y,from:_,to:v,slides:function(){let e=[];for(let t=_;t<=v;t+=1)e.push(l[t]);return e}()}),b();return}let x=[],S=[];if(e)t.$wrapperEl.find(`.${t.params.slideClass}`).remove();else for(let e=s;e<=c;e+=1)(e<_||e>v)&&t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<l.length;t+=1)t>=_&&t<=v&&(c===void 0||e?S.push(t):(t>c&&S.push(t),t<s&&x.push(t)));S.forEach(e=>{t.$wrapperEl.append(d(l[e],e))}),x.sort((e,t)=>t-e).forEach(e=>{t.$wrapperEl.prepend(d(l[e],e))}),t.$wrapperEl.children(`.swiper-slide`).css(m,`${y}px`),b()},renderSlide(e,t){let n=this,r=n.params.virtual;if(r.cache&&n.virtual.cache[t])return n.virtual.cache[t];let i=r.renderSlide?X(r.renderSlide.call(n,e,t)):X(`<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr(`data-swiper-slide-index`)||i.attr(`data-swiper-slide-index`,t),r.cache&&(n.virtual.cache[t]=i),i},appendSlide(e){let t=this;if(typeof e==`object`&&`length`in e)for(let n=0;n<e.length;n+=1)e[n]&&t.virtual.slides.push(e[n]);else t.virtual.slides.push(e);t.virtual.update(!0)},prependSlide(e){let t=this,n=t.activeIndex,r=n+1,i=1;if(Array.isArray(e)){for(let n=0;n<e.length;n+=1)e[n]&&t.virtual.slides.unshift(e[n]);r=n+e.length,i=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){let e=t.virtual.cache,n={};Object.keys(e).forEach(t=>{let r=e[t],a=r.attr(`data-swiper-slide-index`);a&&r.attr(`data-swiper-slide-index`,parseInt(a,10)+1),n[parseInt(t,10)+i]=r}),t.virtual.cache=n}t.virtual.update(!0),t.slideTo(r,0)},removeSlide(e){let t=this;if(e==null)return;let n=t.activeIndex;if(Array.isArray(e))for(let r=e.length-1;r>=0;--r)t.virtual.slides.splice(e[r],1),t.params.virtual.cache&&delete t.virtual.cache[e[r]],e[r]<n&&--n,n=Math.max(n,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<n&&--n,n=Math.max(n,0);t.virtual.update(!0),t.slideTo(n,0)},removeAllSlides(){let e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},Md={name:`virtual`,params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create(){let e=this;Z.extend(e,{virtual:{update:jd.update.bind(e),appendSlide:jd.appendSlide.bind(e),prependSlide:jd.prependSlide.bind(e),removeSlide:jd.removeSlide.bind(e),removeAllSlides:jd.removeAllSlides.bind(e),renderSlide:jd.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit(){let e=this;if(!e.params.virtual.enabled)return;e.classNames.push(`${e.params.containerModifierClass}virtual`);let t={watchSlidesProgress:!0};Z.extend(e.params,t),Z.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()},setTranslate(){let e=this;e.params.virtual.enabled&&e.virtual.update()}}},Nd={handle(e){let t=this,{rtlTranslate:n}=t,r=e;r.originalEvent&&(r=r.originalEvent);let i=r.keyCode||r.charCode,a=t.params.keyboard.pageUpDown,o=a&&i===33,s=a&&i===34,c=i===37,l=i===39,u=i===38,d=i===40;if(!t.allowSlideNext&&(t.isHorizontal()&&l||t.isVertical()&&d||s)||!t.allowSlidePrev&&(t.isHorizontal()&&c||t.isVertical()&&u||o))return!1;if(!(r.shiftKey||r.altKey||r.ctrlKey||r.metaKey)&&!(q.activeElement&&q.activeElement.nodeName&&(q.activeElement.nodeName.toLowerCase()===`input`||q.activeElement.nodeName.toLowerCase()===`textarea`))){if(t.params.keyboard.onlyInViewport&&(o||s||c||l||u||d)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&t.$el.parents(`.${t.params.slideActiveClass}`).length===0)return;let r=J.innerWidth,i=J.innerHeight,a=t.$el.offset();n&&(a.left-=t.$el[0].scrollLeft);let o=[[a.left,a.top],[a.left+t.width,a.top],[a.left,a.top+t.height],[a.left+t.width,a.top+t.height]];for(let t=0;t<o.length;t+=1){let n=o[t];n[0]>=0&&n[0]<=r&&n[1]>=0&&n[1]<=i&&(e=!0)}if(!e)return}t.isHorizontal()?((o||s||c||l)&&(r.preventDefault?r.preventDefault():r.returnValue=!1),((s||l)&&!n||(o||c)&&n)&&t.slideNext(),((o||c)&&!n||(s||l)&&n)&&t.slidePrev()):((o||s||u||d)&&(r.preventDefault?r.preventDefault():r.returnValue=!1),(s||d)&&t.slideNext(),(o||u)&&t.slidePrev()),t.emit(`keyPress`,i)}},enable(){let e=this;e.keyboard.enabled||(X(q).on(`keydown`,e.keyboard.handle),e.keyboard.enabled=!0)},disable(){let e=this;e.keyboard.enabled&&(X(q).off(`keydown`,e.keyboard.handle),e.keyboard.enabled=!1)}},Pd={name:`keyboard`,params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create(){let e=this;Z.extend(e,{keyboard:{enabled:!1,enable:Nd.enable.bind(e),disable:Nd.disable.bind(e),handle:Nd.handle.bind(e)}})},on:{init(){let e=this;e.params.keyboard.enabled&&e.keyboard.enable()},destroy(){let e=this;e.keyboard.enabled&&e.keyboard.disable()}}};function Fd(){let e=`onwheel`,t=e in q;if(!t){let n=q.createElement(`div`);n.setAttribute(e,`return;`),t=typeof n[e]==`function`}return!t&&q.implementation&&q.implementation.hasFeature&&q.implementation.hasFeature(``,``)!==!0&&(t=q.implementation.hasFeature(`Events.wheel`,`3.0`)),t}var Id={lastScrollTime:Z.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event(){return J.navigator.userAgent.indexOf(`firefox`)>-1?`DOMMouseScroll`:Fd()?`wheel`:`mousewheel`},normalize(e){let t=0,n=0,r=0,i=0;return`detail`in e&&(n=e.detail),`wheelDelta`in e&&(n=-e.wheelDelta/120),`wheelDeltaY`in e&&(n=-e.wheelDeltaY/120),`wheelDeltaX`in e&&(t=-e.wheelDeltaX/120),`axis`in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=t*10,i=n*10,`deltaY`in e&&(i=e.deltaY),`deltaX`in e&&(r=e.deltaX),e.shiftKey&&!r&&(r=i,i=0),(r||i)&&e.deltaMode&&(e.deltaMode===1?(r*=40,i*=40):(r*=800,i*=800)),r&&!t&&(t=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:i}},handleMouseEnter(){let e=this;e.mouseEntered=!0},handleMouseLeave(){let e=this;e.mouseEntered=!1},handle(e){let t=e,n=this,r=n.params.mousewheel;n.params.cssMode&&t.preventDefault();let i=n.$el;if(n.params.mousewheel.eventsTarged!==`container`&&(i=X(n.params.mousewheel.eventsTarged)),!n.mouseEntered&&!i[0].contains(t.target)&&!r.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);let a=0,o=n.rtlTranslate?-1:1,s=Id.normalize(t);if(r.forceToAxis)if(n.isHorizontal())if(Math.abs(s.pixelX)>Math.abs(s.pixelY))a=-s.pixelX*o;else return!0;else if(Math.abs(s.pixelY)>Math.abs(s.pixelX))a=-s.pixelY;else return!0;else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*o:-s.pixelY;if(a===0)return!0;if(r.invert&&(a=-a),n.params.freeMode){let e={time:Z.now(),delta:Math.abs(a),direction:Math.sign(a)},{lastEventBeforeSnap:i}=n.mousewheel,o=i&&e.time<i.time+500&&e.delta<=i.delta&&e.direction===i.direction;if(!o){n.mousewheel.lastEventBeforeSnap=void 0,n.params.loop&&n.loopFix();let i=n.getTranslate()+a*r.sensitivity,s=n.isBeginning,c=n.isEnd;if(i>=n.minTranslate()&&(i=n.minTranslate()),i<=n.maxTranslate()&&(i=n.maxTranslate()),n.setTransition(0),n.setTranslate(i),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses(),(!s&&n.isBeginning||!c&&n.isEnd)&&n.updateSlidesClasses(),n.params.freeModeSticky){clearTimeout(n.mousewheel.timeout),n.mousewheel.timeout=void 0;let t=n.mousewheel.recentWheelEvents;t.length>=15&&t.shift();let r=t.length?t[t.length-1]:void 0,i=t[0];if(t.push(e),r&&(e.delta>r.delta||e.direction!==r.direction))t.splice(0);else if(t.length>=15&&e.time-i.time<500&&i.delta-e.delta>=1&&e.delta<=6){let r=a>0?.8:.2;n.mousewheel.lastEventBeforeSnap=e,t.splice(0),n.mousewheel.timeout=Z.nextTick(()=>{n.slideToClosest(n.params.speed,!0,void 0,r)},0)}n.mousewheel.timeout||(n.mousewheel.timeout=Z.nextTick(()=>{n.mousewheel.lastEventBeforeSnap=e,t.splice(0),n.slideToClosest(n.params.speed,!0,void 0,.5)},500))}if(o||n.emit(`scroll`,t),n.params.autoplay&&n.params.autoplayDisableOnInteraction&&n.autoplay.stop(),i===n.minTranslate()||i===n.maxTranslate())return!0}}else{let t={time:Z.now(),delta:Math.abs(a),direction:Math.sign(a),raw:e},r=n.mousewheel.recentWheelEvents;r.length>=2&&r.shift();let i=r.length?r[r.length-1]:void 0;if(r.push(t),i?(t.direction!==i.direction||t.delta>i.delta||t.time>i.time+150)&&n.mousewheel.animateSlider(t):n.mousewheel.animateSlider(t),n.mousewheel.releaseScroll(t))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider(e){let t=this;return e.delta>=6&&Z.now()-t.mousewheel.lastScrollTime<60?!0:(e.direction<0?(!t.isEnd||t.params.loop)&&!t.animating&&(t.slideNext(),t.emit(`scroll`,e.raw)):(!t.isBeginning||t.params.loop)&&!t.animating&&(t.slidePrev(),t.emit(`scroll`,e.raw)),t.mousewheel.lastScrollTime=new J.Date().getTime(),!1)},releaseScroll(e){let t=this,n=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&n.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&n.releaseOnEdges)return!0;return!1},enable(){let e=this,t=Id.event();if(e.params.cssMode)return e.wrapperEl.removeEventListener(t,e.mousewheel.handle),!0;if(!t||e.mousewheel.enabled)return!1;let n=e.$el;return e.params.mousewheel.eventsTarged!==`container`&&(n=X(e.params.mousewheel.eventsTarged)),n.on(`mouseenter`,e.mousewheel.handleMouseEnter),n.on(`mouseleave`,e.mousewheel.handleMouseLeave),n.on(t,e.mousewheel.handle),e.mousewheel.enabled=!0,!0},disable(){let e=this,t=Id.event();if(e.params.cssMode)return e.wrapperEl.addEventListener(t,e.mousewheel.handle),!0;if(!t||!e.mousewheel.enabled)return!1;let n=e.$el;return e.params.mousewheel.eventsTarged!==`container`&&(n=X(e.params.mousewheel.eventsTarged)),n.off(t,e.mousewheel.handle),e.mousewheel.enabled=!1,!0}},Ld={name:`mousewheel`,params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:`container`}},create(){let e=this;Z.extend(e,{mousewheel:{enabled:!1,enable:Id.enable.bind(e),disable:Id.disable.bind(e),handle:Id.handle.bind(e),handleMouseEnter:Id.handleMouseEnter.bind(e),handleMouseLeave:Id.handleMouseLeave.bind(e),animateSlider:Id.animateSlider.bind(e),releaseScroll:Id.releaseScroll.bind(e),lastScrollTime:Z.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init(){let e=this;!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy(){let e=this;e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}},Rd={update(){let e=this,t=e.params.navigation;if(e.params.loop)return;let{$nextEl:n,$prevEl:r}=e.navigation;r&&r.length>0&&(e.isBeginning?r.addClass(t.disabledClass):r.removeClass(t.disabledClass),r[e.params.watchOverflow&&e.isLocked?`addClass`:`removeClass`](t.lockClass)),n&&n.length>0&&(e.isEnd?n.addClass(t.disabledClass):n.removeClass(t.disabledClass),n[e.params.watchOverflow&&e.isLocked?`addClass`:`removeClass`](t.lockClass))},onPrevClick(e){let t=this;e.preventDefault(),!(t.isBeginning&&!t.params.loop)&&t.slidePrev()},onNextClick(e){let t=this;e.preventDefault(),!(t.isEnd&&!t.params.loop)&&t.slideNext()},init(){let e=this,t=e.params.navigation;if(!(t.nextEl||t.prevEl))return;let n,r;t.nextEl&&(n=X(t.nextEl),e.params.uniqueNavElements&&typeof t.nextEl==`string`&&n.length>1&&e.$el.find(t.nextEl).length===1&&(n=e.$el.find(t.nextEl))),t.prevEl&&(r=X(t.prevEl),e.params.uniqueNavElements&&typeof t.prevEl==`string`&&r.length>1&&e.$el.find(t.prevEl).length===1&&(r=e.$el.find(t.prevEl))),n&&n.length>0&&n.on(`click`,e.navigation.onNextClick),r&&r.length>0&&r.on(`click`,e.navigation.onPrevClick),Z.extend(e.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:r,prevEl:r&&r[0]})},destroy(){let e=this,{$nextEl:t,$prevEl:n}=e.navigation;t&&t.length&&(t.off(`click`,e.navigation.onNextClick),t.removeClass(e.params.navigation.disabledClass)),n&&n.length&&(n.off(`click`,e.navigation.onPrevClick),n.removeClass(e.params.navigation.disabledClass))}},zd={name:`navigation`,params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:`swiper-button-disabled`,hiddenClass:`swiper-button-hidden`,lockClass:`swiper-button-lock`}},create(){let e=this;Z.extend(e,{navigation:{init:Rd.init.bind(e),update:Rd.update.bind(e),destroy:Rd.destroy.bind(e),onNextClick:Rd.onNextClick.bind(e),onPrevClick:Rd.onPrevClick.bind(e)}})},on:{init(){let e=this;e.navigation.init(),e.navigation.update()},toEdge(){this.navigation.update()},fromEdge(){this.navigation.update()},destroy(){this.navigation.destroy()},click(e){let t=this,{$nextEl:n,$prevEl:r}=t.navigation;if(t.params.navigation.hideOnClick&&!X(e.target).is(r)&&!X(e.target).is(n)){let e;n?e=n.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),e===!0?t.emit(`navigationShow`,t):t.emit(`navigationHide`,t),n&&n.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}}},Bd={update(){let e=this,t=e.rtl,n=e.params.pagination;if(!n.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0)return;let r=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,a,o=e.params.loop?Math.ceil((r-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(a=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),a>r-1-e.loopedSlides*2&&(a-=r-e.loopedSlides*2),a>o-1&&(a-=o),a<0&&e.params.paginationType!==`bullets`&&(a=o+a)):a=e.snapIndex===void 0?e.activeIndex||0:e.snapIndex,n.type===`bullets`&&e.pagination.bullets&&e.pagination.bullets.length>0){let r=e.pagination.bullets,o,s,c;if(n.dynamicBullets&&(e.pagination.bulletSize=r.eq(0)[e.isHorizontal()?`outerWidth`:`outerHeight`](!0),i.css(e.isHorizontal()?`width`:`height`,`${e.pagination.bulletSize*(n.dynamicMainBullets+4)}px`),n.dynamicMainBullets>1&&e.previousIndex!==void 0&&(e.pagination.dynamicBulletIndex+=a-e.previousIndex,e.pagination.dynamicBulletIndex>n.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=n.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=a-e.pagination.dynamicBulletIndex,s=o+(Math.min(r.length,n.dynamicMainBullets)-1),c=(s+o)/2),r.removeClass(`${n.bulletActiveClass} ${n.bulletActiveClass}-next ${n.bulletActiveClass}-next-next ${n.bulletActiveClass}-prev ${n.bulletActiveClass}-prev-prev ${n.bulletActiveClass}-main`),i.length>1)r.each((e,t)=>{let r=X(t),i=r.index();i===a&&r.addClass(n.bulletActiveClass),n.dynamicBullets&&(i>=o&&i<=s&&r.addClass(`${n.bulletActiveClass}-main`),i===o&&r.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`),i===s&&r.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`))});else{let t=r.eq(a),i=t.index();if(t.addClass(n.bulletActiveClass),n.dynamicBullets){let t=r.eq(o),a=r.eq(s);for(let e=o;e<=s;e+=1)r.eq(e).addClass(`${n.bulletActiveClass}-main`);if(e.params.loop)if(i>=r.length-n.dynamicMainBullets){for(let e=n.dynamicMainBullets;e>=0;--e)r.eq(r.length-e).addClass(`${n.bulletActiveClass}-main`);r.eq(r.length-n.dynamicMainBullets-1).addClass(`${n.bulletActiveClass}-prev`)}else t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`),a.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`);else t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`),a.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`)}}if(n.dynamicBullets){let i=Math.min(r.length,n.dynamicMainBullets+4),a=(e.pagination.bulletSize*i-e.pagination.bulletSize)/2-c*e.pagination.bulletSize,o=t?`right`:`left`;r.css(e.isHorizontal()?o:`top`,`${a}px`)}}if(n.type===`fraction`&&(i.find(`.${n.currentClass}`).text(n.formatFractionCurrent(a+1)),i.find(`.${n.totalClass}`).text(n.formatFractionTotal(o))),n.type===`progressbar`){let t;t=n.progressbarOpposite?e.isHorizontal()?`vertical`:`horizontal`:e.isHorizontal()?`horizontal`:`vertical`;let r=(a+1)/o,s=1,c=1;t===`horizontal`?s=r:c=r,i.find(`.${n.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${c})`).transition(e.params.speed)}n.type===`custom`&&n.renderCustom?(i.html(n.renderCustom(e,a+1,o)),e.emit(`paginationRender`,e,i[0])):e.emit(`paginationUpdate`,e,i[0]),i[e.params.watchOverflow&&e.isLocked?`addClass`:`removeClass`](n.lockClass)},render(){let e=this,t=e.params.pagination;if(!t.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0)return;let n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,i=``;if(t.type===`bullets`){let a=e.params.loop?Math.ceil((n-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;for(let n=0;n<a;n+=1)t.renderBullet?i+=t.renderBullet.call(e,n,t.bulletClass):i+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;r.html(i),e.pagination.bullets=r.find(`.${t.bulletClass}`)}t.type===`fraction`&&(i=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,r.html(i)),t.type===`progressbar`&&(i=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,r.html(i)),t.type!==`custom`&&e.emit(`paginationRender`,e.pagination.$el[0])},init(){let e=this,t=e.params.pagination;if(!t.el)return;let n=X(t.el);n.length!==0&&(e.params.uniqueNavElements&&typeof t.el==`string`&&n.length>1&&(n=e.$el.find(t.el)),t.type===`bullets`&&t.clickable&&n.addClass(t.clickableClass),n.addClass(t.modifierClass+t.type),t.type===`bullets`&&t.dynamicBullets&&(n.addClass(`${t.modifierClass}${t.type}-dynamic`),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type===`progressbar`&&t.progressbarOpposite&&n.addClass(t.progressbarOppositeClass),t.clickable&&n.on(`click`,`.${t.bulletClass}`,function(t){t.preventDefault();let n=X(this).index()*e.params.slidesPerGroup;e.params.loop&&(n+=e.loopedSlides),e.slideTo(n)}),Z.extend(e.pagination,{$el:n,el:n[0]}))},destroy(){let e=this,t=e.params.pagination;if(!t.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0)return;let n=e.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off(`click`,`.${t.bulletClass}`)}},Vd={name:`pagination`,params:{pagination:{el:null,bulletElement:`span`,clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:`bullets`,dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`swiper-pagination-bullet`,bulletActiveClass:`swiper-pagination-bullet-active`,modifierClass:`swiper-pagination-`,currentClass:`swiper-pagination-current`,totalClass:`swiper-pagination-total`,hiddenClass:`swiper-pagination-hidden`,progressbarFillClass:`swiper-pagination-progressbar-fill`,progressbarOppositeClass:`swiper-pagination-progressbar-opposite`,clickableClass:`swiper-pagination-clickable`,lockClass:`swiper-pagination-lock`}},create(){let e=this;Z.extend(e,{pagination:{init:Bd.init.bind(e),render:Bd.render.bind(e),update:Bd.update.bind(e),destroy:Bd.destroy.bind(e),dynamicBulletIndex:0}})},on:{init(){let e=this;e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange(){let e=this;(e.params.loop||e.snapIndex===void 0)&&e.pagination.update()},snapIndexChange(){let e=this;e.params.loop||e.pagination.update()},slidesLengthChange(){let e=this;e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange(){let e=this;e.params.loop||(e.pagination.render(),e.pagination.update())},destroy(){this.pagination.destroy()},click(e){let t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&t.pagination.$el.length>0&&!X(e.target).hasClass(t.params.pagination.bulletClass)&&(t.pagination.$el.hasClass(t.params.pagination.hiddenClass)===!0?t.emit(`paginationShow`,t):t.emit(`paginationHide`,t),t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))}}},Hd={setTranslate(){let e=this;if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:t,rtlTranslate:n,progress:r}=e,{dragSize:i,trackSize:a,$dragEl:o,$el:s}=t,c=e.params.scrollbar,l=i,u=(a-i)*r;n?(u=-u,u>0?(l=i-u,u=0):-u+i>a&&(l=a+u)):u<0?(l=i+u,u=0):u+i>a&&(l=a-u),e.isHorizontal()?(o.transform(`translate3d(${u}px, 0, 0)`),o[0].style.width=`${l}px`):(o.transform(`translate3d(0px, ${u}px, 0)`),o[0].style.height=`${l}px`),c.hide&&(clearTimeout(e.scrollbar.timeout),s[0].style.opacity=1,e.scrollbar.timeout=setTimeout(()=>{s[0].style.opacity=0,s.transition(400)},1e3))},setTransition(e){let t=this;!t.params.scrollbar.el||!t.scrollbar.el||t.scrollbar.$dragEl.transition(e)},updateSize(){let e=this;if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:t}=e,{$dragEl:n,$el:r}=t;n[0].style.width=``,n[0].style.height=``;let i=e.isHorizontal()?r[0].offsetWidth:r[0].offsetHeight,a=e.size/e.virtualSize,o=a*(i/e.size),s;s=e.params.scrollbar.dragSize===`auto`?i*a:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?n[0].style.width=`${s}px`:n[0].style.height=`${s}px`,a>=1?r[0].style.display=`none`:r[0].style.display=``,e.params.scrollbar.hide&&(r[0].style.opacity=0),Z.extend(t,{trackSize:i,divider:a,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?`addClass`:`removeClass`](e.params.scrollbar.lockClass)},getPointerPosition(e){return this.isHorizontal()?e.type===`touchstart`||e.type===`touchmove`?e.targetTouches[0].clientX:e.clientX:e.type===`touchstart`||e.type===`touchmove`?e.targetTouches[0].clientY:e.clientY},setDragPosition(e){let t=this,{scrollbar:n,rtlTranslate:r}=t,{$el:i,dragSize:a,trackSize:o,dragStartPos:s}=n,c;c=(n.getPointerPosition(e)-i.offset()[t.isHorizontal()?`left`:`top`]-(s===null?a/2:s))/(o-a),c=Math.max(Math.min(c,1),0),r&&(c=1-c);let l=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*c;t.updateProgress(l),t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()},onDragStart(e){let t=this,n=t.params.scrollbar,{scrollbar:r,$wrapperEl:i}=t,{$el:a,$dragEl:o}=r;t.scrollbar.isTouched=!0,t.scrollbar.dragStartPos=e.target===o[0]||e.target===o?r.getPointerPosition(e)-e.target.getBoundingClientRect()[t.isHorizontal()?`left`:`top`]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),r.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),a.transition(0),n.hide&&a.css(`opacity`,1),t.params.cssMode&&t.$wrapperEl.css(`scroll-snap-type`,`none`),t.emit(`scrollbarDragStart`,e)},onDragMove(e){let t=this,{scrollbar:n,$wrapperEl:r}=t,{$el:i,$dragEl:a}=n;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,n.setDragPosition(e),r.transition(0),i.transition(0),a.transition(0),t.emit(`scrollbarDragMove`,e))},onDragEnd(e){let t=this,n=t.params.scrollbar,{scrollbar:r,$wrapperEl:i}=t,{$el:a}=r;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,t.params.cssMode&&(t.$wrapperEl.css(`scroll-snap-type`,``),i.transition(``)),n.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=Z.nextTick(()=>{a.css(`opacity`,0),a.transition(400)},1e3)),t.emit(`scrollbarDragEnd`,e),n.snapOnRelease&&t.slideToClosest())},enableDraggable(){let e=this;if(!e.params.scrollbar.el)return;let{scrollbar:t,touchEventsTouch:n,touchEventsDesktop:r,params:i}=e,a=t.$el[0],o=Q.passiveListener&&i.passiveListeners?{passive:!1,capture:!1}:!1,s=Q.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;Q.touch?(a.addEventListener(n.start,e.scrollbar.onDragStart,o),a.addEventListener(n.move,e.scrollbar.onDragMove,o),a.addEventListener(n.end,e.scrollbar.onDragEnd,s)):(a.addEventListener(r.start,e.scrollbar.onDragStart,o),q.addEventListener(r.move,e.scrollbar.onDragMove,o),q.addEventListener(r.end,e.scrollbar.onDragEnd,s))},disableDraggable(){let e=this;if(!e.params.scrollbar.el)return;let{scrollbar:t,touchEventsTouch:n,touchEventsDesktop:r,params:i}=e,a=t.$el[0],o=Q.passiveListener&&i.passiveListeners?{passive:!1,capture:!1}:!1,s=Q.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;Q.touch?(a.removeEventListener(n.start,e.scrollbar.onDragStart,o),a.removeEventListener(n.move,e.scrollbar.onDragMove,o),a.removeEventListener(n.end,e.scrollbar.onDragEnd,s)):(a.removeEventListener(r.start,e.scrollbar.onDragStart,o),q.removeEventListener(r.move,e.scrollbar.onDragMove,o),q.removeEventListener(r.end,e.scrollbar.onDragEnd,s))},init(){let e=this;if(!e.params.scrollbar.el)return;let{scrollbar:t,$el:n}=e,r=e.params.scrollbar,i=X(r.el);e.params.uniqueNavElements&&typeof r.el==`string`&&i.length>1&&n.find(r.el).length===1&&(i=n.find(r.el));let a=i.find(`.${e.params.scrollbar.dragClass}`);a.length===0&&(a=X(`<div class="${e.params.scrollbar.dragClass}"></div>`),i.append(a)),Z.extend(t,{$el:i,el:i[0],$dragEl:a,dragEl:a[0]}),r.draggable&&t.enableDraggable()},destroy(){this.scrollbar.disableDraggable()}},Ud={name:`scrollbar`,params:{scrollbar:{el:null,dragSize:`auto`,hide:!1,draggable:!1,snapOnRelease:!0,lockClass:`swiper-scrollbar-lock`,dragClass:`swiper-scrollbar-drag`}},create(){let e=this;Z.extend(e,{scrollbar:{init:Hd.init.bind(e),destroy:Hd.destroy.bind(e),updateSize:Hd.updateSize.bind(e),setTranslate:Hd.setTranslate.bind(e),setTransition:Hd.setTransition.bind(e),enableDraggable:Hd.enableDraggable.bind(e),disableDraggable:Hd.disableDraggable.bind(e),setDragPosition:Hd.setDragPosition.bind(e),getPointerPosition:Hd.getPointerPosition.bind(e),onDragStart:Hd.onDragStart.bind(e),onDragMove:Hd.onDragMove.bind(e),onDragEnd:Hd.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init(){let e=this;e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update(){this.scrollbar.updateSize()},resize(){this.scrollbar.updateSize()},observerUpdate(){this.scrollbar.updateSize()},setTranslate(){this.scrollbar.setTranslate()},setTransition(e){this.scrollbar.setTransition(e)},destroy(){this.scrollbar.destroy()}}},Wd={setTransform(e,t){let n=this,{rtl:r}=n,i=X(e),a=r?-1:1,o=i.attr(`data-swiper-parallax`)||`0`,s=i.attr(`data-swiper-parallax-x`),c=i.attr(`data-swiper-parallax-y`),l=i.attr(`data-swiper-parallax-scale`),u=i.attr(`data-swiper-parallax-opacity`);if(s||c?(s||=`0`,c||=`0`):n.isHorizontal()?(s=o,c=`0`):(c=o,s=`0`),s=s.indexOf(`%`)>=0?`${parseInt(s,10)*t*a}%`:`${s*t*a}px`,c=c.indexOf(`%`)>=0?`${parseInt(c,10)*t}%`:`${c*t}px`,u!=null){let e=u-(u-1)*(1-Math.abs(t));i[0].style.opacity=e}if(l==null)i.transform(`translate3d(${s}, ${c}, 0px)`);else{let e=l-(l-1)*(1-Math.abs(t));i.transform(`translate3d(${s}, ${c}, 0px) scale(${e})`)}},setTranslate(){let e=this,{$el:t,slides:n,progress:r,snapGrid:i}=e;t.children(`[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]`).each((t,n)=>{e.parallax.setTransform(n,r)}),n.each((t,n)=>{let a=n.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!==`auto`&&(a+=Math.ceil(t/2)-r*(i.length-1)),a=Math.min(Math.max(a,-1),1),X(n).find(`[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]`).each((t,n)=>{e.parallax.setTransform(n,a)})})},setTransition(e=this.params.speed){let{$el:t}=this;t.find(`[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]`).each((t,n)=>{let r=X(n),i=parseInt(r.attr(`data-swiper-parallax-duration`),10)||e;e===0&&(i=0),r.transition(i)})}},Gd={name:`parallax`,params:{parallax:{enabled:!1}},create(){let e=this;Z.extend(e,{parallax:{setTransform:Wd.setTransform.bind(e),setTranslate:Wd.setTranslate.bind(e),setTransition:Wd.setTransition.bind(e)}})},on:{beforeInit(){let e=this;e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},init(){let e=this;e.params.parallax.enabled&&e.parallax.setTranslate()},setTranslate(){let e=this;e.params.parallax.enabled&&e.parallax.setTranslate()},setTransition(e){let t=this;t.params.parallax.enabled&&t.parallax.setTransition(e)}}},Kd={getDistanceBetweenTouches(e){if(e.targetTouches.length<2)return 1;let t=e.targetTouches[0].pageX,n=e.targetTouches[0].pageY,r=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((r-t)**2+(i-n)**2)},onGestureStart(e){let t=this,n=t.params.zoom,r=t.zoom,{gesture:i}=r;if(r.fakeGestureTouched=!1,r.fakeGestureMoved=!1,!Q.gestures){if(e.type!==`touchstart`||e.type===`touchstart`&&e.targetTouches.length<2)return;r.fakeGestureTouched=!0,i.scaleStart=Kd.getDistanceBetweenTouches(e)}if((!i.$slideEl||!i.$slideEl.length)&&(i.$slideEl=X(e.target).closest(`.${t.params.slideClass}`),i.$slideEl.length===0&&(i.$slideEl=t.slides.eq(t.activeIndex)),i.$imageEl=i.$slideEl.find(`img, svg, canvas, picture, .swiper-zoom-target`),i.$imageWrapEl=i.$imageEl.parent(`.${n.containerClass}`),i.maxRatio=i.$imageWrapEl.attr(`data-swiper-zoom`)||n.maxRatio,i.$imageWrapEl.length===0)){i.$imageEl=void 0;return}i.$imageEl&&i.$imageEl.transition(0),t.zoom.isScaling=!0},onGestureChange(e){let t=this,n=t.params.zoom,r=t.zoom,{gesture:i}=r;if(!Q.gestures){if(e.type!==`touchmove`||e.type===`touchmove`&&e.targetTouches.length<2)return;r.fakeGestureMoved=!0,i.scaleMove=Kd.getDistanceBetweenTouches(e)}!i.$imageEl||i.$imageEl.length===0||(Q.gestures?r.scale=e.scale*r.currentScale:r.scale=i.scaleMove/i.scaleStart*r.currentScale,r.scale>i.maxRatio&&(r.scale=i.maxRatio-1+(r.scale-i.maxRatio+1)**.5),r.scale<n.minRatio&&(r.scale=n.minRatio+1-(n.minRatio-r.scale+1)**.5),i.$imageEl.transform(`translate3d(0,0,0) scale(${r.scale})`))},onGestureEnd(e){let t=this,n=t.params.zoom,r=t.zoom,{gesture:i}=r;if(!Q.gestures){if(!r.fakeGestureTouched||!r.fakeGestureMoved||e.type!==`touchend`||e.type===`touchend`&&e.changedTouches.length<2&&!$.android)return;r.fakeGestureTouched=!1,r.fakeGestureMoved=!1}!i.$imageEl||i.$imageEl.length===0||(r.scale=Math.max(Math.min(r.scale,i.maxRatio),n.minRatio),i.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),r.currentScale=r.scale,r.isScaling=!1,r.scale===1&&(i.$slideEl=void 0))},onTouchStart(e){let{gesture:t,image:n}=this.zoom;!t.$imageEl||t.$imageEl.length===0||n.isTouched||($.android&&e.cancelable&&e.preventDefault(),n.isTouched=!0,n.touchesStart.x=e.type===`touchstart`?e.targetTouches[0].pageX:e.pageX,n.touchesStart.y=e.type===`touchstart`?e.targetTouches[0].pageY:e.pageY)},onTouchMove(e){let t=this,n=t.zoom,{gesture:r,image:i,velocity:a}=n;if(!r.$imageEl||r.$imageEl.length===0||(t.allowClick=!1,!i.isTouched||!r.$slideEl))return;i.isMoved||(i.width=r.$imageEl[0].offsetWidth,i.height=r.$imageEl[0].offsetHeight,i.startX=Z.getTranslate(r.$imageWrapEl[0],`x`)||0,i.startY=Z.getTranslate(r.$imageWrapEl[0],`y`)||0,r.slideWidth=r.$slideEl[0].offsetWidth,r.slideHeight=r.$slideEl[0].offsetHeight,r.$imageWrapEl.transition(0),t.rtl&&(i.startX=-i.startX,i.startY=-i.startY));let o=i.width*n.scale,s=i.height*n.scale;if(!(o<r.slideWidth&&s<r.slideHeight)){if(i.minX=Math.min(r.slideWidth/2-o/2,0),i.maxX=-i.minX,i.minY=Math.min(r.slideHeight/2-s/2,0),i.maxY=-i.minY,i.touchesCurrent.x=e.type===`touchmove`?e.targetTouches[0].pageX:e.pageX,i.touchesCurrent.y=e.type===`touchmove`?e.targetTouches[0].pageY:e.pageY,!i.isMoved&&!n.isScaling){if(t.isHorizontal()&&(Math.floor(i.minX)===Math.floor(i.startX)&&i.touchesCurrent.x<i.touchesStart.x||Math.floor(i.maxX)===Math.floor(i.startX)&&i.touchesCurrent.x>i.touchesStart.x)){i.isTouched=!1;return}if(!t.isHorizontal()&&(Math.floor(i.minY)===Math.floor(i.startY)&&i.touchesCurrent.y<i.touchesStart.y||Math.floor(i.maxY)===Math.floor(i.startY)&&i.touchesCurrent.y>i.touchesStart.y)){i.isTouched=!1;return}}e.cancelable&&e.preventDefault(),e.stopPropagation(),i.isMoved=!0,i.currentX=i.touchesCurrent.x-i.touchesStart.x+i.startX,i.currentY=i.touchesCurrent.y-i.touchesStart.y+i.startY,i.currentX<i.minX&&(i.currentX=i.minX+1-(i.minX-i.currentX+1)**.8),i.currentX>i.maxX&&(i.currentX=i.maxX-1+(i.currentX-i.maxX+1)**.8),i.currentY<i.minY&&(i.currentY=i.minY+1-(i.minY-i.currentY+1)**.8),i.currentY>i.maxY&&(i.currentY=i.maxY-1+(i.currentY-i.maxY+1)**.8),a.prevPositionX||=i.touchesCurrent.x,a.prevPositionY||=i.touchesCurrent.y,a.prevTime||=Date.now(),a.x=(i.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(i.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(i.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(i.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=i.touchesCurrent.x,a.prevPositionY=i.touchesCurrent.y,a.prevTime=Date.now(),r.$imageWrapEl.transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`)}},onTouchEnd(){let e=this.zoom,{gesture:t,image:n,velocity:r}=e;if(!t.$imageEl||t.$imageEl.length===0)return;if(!n.isTouched||!n.isMoved){n.isTouched=!1,n.isMoved=!1;return}n.isTouched=!1,n.isMoved=!1;let i=300,a=300,o=r.x*i,s=n.currentX+o,c=r.y*a,l=n.currentY+c;r.x!==0&&(i=Math.abs((s-n.currentX)/r.x)),r.y!==0&&(a=Math.abs((l-n.currentY)/r.y));let u=Math.max(i,a);n.currentX=s,n.currentY=l;let d=n.width*e.scale,f=n.height*e.scale;n.minX=Math.min(t.slideWidth/2-d/2,0),n.maxX=-n.minX,n.minY=Math.min(t.slideHeight/2-f/2,0),n.maxY=-n.minY,n.currentX=Math.max(Math.min(n.currentX,n.maxX),n.minX),n.currentY=Math.max(Math.min(n.currentY,n.maxY),n.minY),t.$imageWrapEl.transition(u).transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`)},onTransitionEnd(){let e=this,t=e.zoom,{gesture:n}=t;n.$slideEl&&e.previousIndex!==e.activeIndex&&(n.$imageEl&&n.$imageEl.transform(`translate3d(0,0,0) scale(1)`),n.$imageWrapEl&&n.$imageWrapEl.transform(`translate3d(0,0,0)`),t.scale=1,t.currentScale=1,n.$slideEl=void 0,n.$imageEl=void 0,n.$imageWrapEl=void 0)},toggle(e){let t=this.zoom;t.scale&&t.scale!==1?t.out():t.in(e)},in(e){let t=this,n=t.zoom,r=t.params.zoom,{gesture:i,image:a}=n;if(i.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?i.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):i.$slideEl=t.slides.eq(t.activeIndex),i.$imageEl=i.$slideEl.find(`img, svg, canvas, picture, .swiper-zoom-target`),i.$imageWrapEl=i.$imageEl.parent(`.${r.containerClass}`)),!i.$imageEl||i.$imageEl.length===0)return;i.$slideEl.addClass(`${r.zoomedSlideClass}`);let o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;a.touchesStart.x===void 0&&e?(o=e.type===`touchend`?e.changedTouches[0].pageX:e.pageX,s=e.type===`touchend`?e.changedTouches[0].pageY:e.pageY):(o=a.touchesStart.x,s=a.touchesStart.y),n.scale=i.$imageWrapEl.attr(`data-swiper-zoom`)||r.maxRatio,n.currentScale=i.$imageWrapEl.attr(`data-swiper-zoom`)||r.maxRatio,e?(S=i.$slideEl[0].offsetWidth,C=i.$slideEl[0].offsetHeight,c=i.$slideEl.offset().left,l=i.$slideEl.offset().top,u=c+S/2-o,d=l+C/2-s,m=i.$imageEl[0].offsetWidth,h=i.$imageEl[0].offsetHeight,g=m*n.scale,_=h*n.scale,v=Math.min(S/2-g/2,0),y=Math.min(C/2-_/2,0),b=-v,x=-y,f=u*n.scale,p=d*n.scale,f<v&&(f=v),f>b&&(f=b),p<y&&(p=y),p>x&&(p=x)):(f=0,p=0),i.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${p}px,0)`),i.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)},out(){let e=this,t=e.zoom,n=e.params.zoom,{gesture:r}=t;r.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?r.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):r.$slideEl=e.slides.eq(e.activeIndex),r.$imageEl=r.$slideEl.find(`img, svg, canvas, picture, .swiper-zoom-target`),r.$imageWrapEl=r.$imageEl.parent(`.${n.containerClass}`)),!(!r.$imageEl||r.$imageEl.length===0)&&(t.scale=1,t.currentScale=1,r.$imageWrapEl.transition(300).transform(`translate3d(0,0,0)`),r.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(1)`),r.$slideEl.removeClass(`${n.zoomedSlideClass}`),r.$slideEl=void 0)},enable(){let e=this,t=e.zoom;if(t.enabled)return;t.enabled=!0;let n=e.touchEvents.start===`touchstart`&&Q.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,r=Q.passiveListener?{passive:!1,capture:!0}:!0,i=`.${e.params.slideClass}`;Q.gestures?(e.$wrapperEl.on(`gesturestart`,i,t.onGestureStart,n),e.$wrapperEl.on(`gesturechange`,i,t.onGestureChange,n),e.$wrapperEl.on(`gestureend`,i,t.onGestureEnd,n)):e.touchEvents.start===`touchstart`&&(e.$wrapperEl.on(e.touchEvents.start,i,t.onGestureStart,n),e.$wrapperEl.on(e.touchEvents.move,i,t.onGestureChange,r),e.$wrapperEl.on(e.touchEvents.end,i,t.onGestureEnd,n),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,i,t.onGestureEnd,n)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,t.onTouchMove,r)},disable(){let e=this,t=e.zoom;if(!t.enabled)return;e.zoom.enabled=!1;let n=e.touchEvents.start===`touchstart`&&Q.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,r=Q.passiveListener?{passive:!1,capture:!0}:!0,i=`.${e.params.slideClass}`;Q.gestures?(e.$wrapperEl.off(`gesturestart`,i,t.onGestureStart,n),e.$wrapperEl.off(`gesturechange`,i,t.onGestureChange,n),e.$wrapperEl.off(`gestureend`,i,t.onGestureEnd,n)):e.touchEvents.start===`touchstart`&&(e.$wrapperEl.off(e.touchEvents.start,i,t.onGestureStart,n),e.$wrapperEl.off(e.touchEvents.move,i,t.onGestureChange,r),e.$wrapperEl.off(e.touchEvents.end,i,t.onGestureEnd,n),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,i,t.onGestureEnd,n)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,t.onTouchMove,r)}},qd={name:`zoom`,params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:`swiper-zoom-container`,zoomedSlideClass:`swiper-slide-zoomed`}},create(){let e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};`onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out`.split(` `).forEach(n=>{t[n]=Kd[n].bind(e)}),Z.extend(e,{zoom:t});let n=1;Object.defineProperty(e.zoom,`scale`,{get(){return n},set(t){if(n!==t){let n=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,r=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit(`zoomChange`,t,n,r)}n=t}})},on:{init(){let e=this;e.params.zoom.enabled&&e.zoom.enable()},destroy(){this.zoom.disable()},touchStart(e){let t=this;t.zoom.enabled&&t.zoom.onTouchStart(e)},touchEnd(e){let t=this;t.zoom.enabled&&t.zoom.onTouchEnd(e)},doubleTap(e){let t=this;t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&t.zoom.toggle(e)},transitionEnd(){let e=this;e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()},slideChange(){let e=this;e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&e.zoom.onTransitionEnd()}}},Jd={loadInSlide(e,t=!0){let n=this,r=n.params.lazy;if(e===void 0||n.slides.length===0)return;let i=n.virtual&&n.params.virtual.enabled?n.$wrapperEl.children(`.${n.params.slideClass}[data-swiper-slide-index="${e}"]`):n.slides.eq(e),a=i.find(`.${r.elementClass}:not(.${r.loadedClass}):not(.${r.loadingClass})`);i.hasClass(r.elementClass)&&!i.hasClass(r.loadedClass)&&!i.hasClass(r.loadingClass)&&(a=a.add(i[0])),a.length!==0&&a.each((e,a)=>{let o=X(a);o.addClass(r.loadingClass);let s=o.attr(`data-background`),c=o.attr(`data-src`),l=o.attr(`data-srcset`),u=o.attr(`data-sizes`),d=o.parent(`picture`);n.loadImage(o[0],c||s,l,u,!1,()=>{if(!(n==null||!n||n&&!n.params||n.destroyed)){if(s?(o.css(`background-image`,`url("${s}")`),o.removeAttr(`data-background`)):(l&&(o.attr(`srcset`,l),o.removeAttr(`data-srcset`)),u&&(o.attr(`sizes`,u),o.removeAttr(`data-sizes`)),d.length&&d.children(`source`).each((e,t)=>{let n=X(t);n.attr(`data-srcset`)&&(n.attr(`srcset`,n.attr(`data-srcset`)),n.removeAttr(`data-srcset`))}),c&&(o.attr(`src`,c),o.removeAttr(`data-src`))),o.addClass(r.loadedClass).removeClass(r.loadingClass),i.find(`.${r.preloaderClass}`).remove(),n.params.loop&&t){let e=i.attr(`data-swiper-slide-index`);if(i.hasClass(n.params.slideDuplicateClass)){let t=n.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${n.params.slideDuplicateClass})`);n.lazy.loadInSlide(t.index(),!1)}else{let t=n.$wrapperEl.children(`.${n.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);n.lazy.loadInSlide(t.index(),!1)}}n.emit(`lazyImageReady`,i[0],o[0]),n.params.autoHeight&&n.updateAutoHeight()}}),n.emit(`lazyImageLoad`,i[0],o[0])})},load(){let e=this,{$wrapperEl:t,params:n,slides:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=n.lazy,s=n.slidesPerView;s===`auto`&&(s=0);function c(e){if(a){if(t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length)return!0}else if(r[e])return!0;return!1}function l(e){return a?X(e).attr(`data-swiper-slide-index`):X(e).index()}if(e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children(`.${n.slideVisibleClass}`).each((t,n)=>{let r=a?X(n).attr(`data-swiper-slide-index`):X(n).index();e.lazy.loadInSlide(r)});else if(s>1)for(let t=i;t<i+s;t+=1)c(t)&&e.lazy.loadInSlide(t);else e.lazy.loadInSlide(i);if(o.loadPrevNext)if(s>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){let t=o.loadPrevNextAmount,n=s,a=Math.min(i+n+Math.max(t,n),r.length),l=Math.max(i-Math.max(n,t),0);for(let t=i+s;t<a;t+=1)c(t)&&e.lazy.loadInSlide(t);for(let t=l;t<i;t+=1)c(t)&&e.lazy.loadInSlide(t)}else{let r=t.children(`.${n.slideNextClass}`);r.length>0&&e.lazy.loadInSlide(l(r));let i=t.children(`.${n.slidePrevClass}`);i.length>0&&e.lazy.loadInSlide(l(i))}}},Yd={name:`lazy`,params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:`swiper-lazy`,loadingClass:`swiper-lazy-loading`,loadedClass:`swiper-lazy-loaded`,preloaderClass:`swiper-lazy-preloader`}},create(){let e=this;Z.extend(e,{lazy:{initialImageLoaded:!1,load:Jd.load.bind(e),loadInSlide:Jd.loadInSlide.bind(e)}})},on:{beforeInit(){let e=this;e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init(){let e=this;e.params.lazy.enabled&&!e.params.loop&&e.params.initialSlide===0&&e.lazy.load()},scroll(){let e=this;e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},resize(){let e=this;e.params.lazy.enabled&&e.lazy.load()},scrollbarDragMove(){let e=this;e.params.lazy.enabled&&e.lazy.load()},transitionStart(){let e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd(){let e=this;e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()},slideChange(){let e=this;e.params.lazy.enabled&&e.params.cssMode&&e.lazy.load()}}},Xd={LinearSpline:function(e,t){let n=function(){let e,t,n;return(r,i)=>{for(t=-1,e=r.length;e-t>1;)n=e+t>>1,r[n]<=i?t=n:e=n;return e}}();this.x=e,this.y=t,this.lastIndex=e.length-1;let r,i;return this.interpolate=function(e){return e?(i=n(this.x,e),r=i-1,(e-this.x[r])*(this.y[i]-this.y[r])/(this.x[i]-this.x[r])+this.y[r]):0},this},getInterpolateFunction(e){let t=this;t.controller.spline||(t.controller.spline=t.params.loop?new Xd.LinearSpline(t.slidesGrid,e.slidesGrid):new Xd.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate(e,t){let n=this,r=n.controller.control,i,a;function o(e){let t=n.rtlTranslate?-n.translate:n.translate;n.params.controller.by===`slide`&&(n.controller.getInterpolateFunction(e),a=-n.controller.spline.interpolate(-t)),(!a||n.params.controller.by===`container`)&&(i=(e.maxTranslate()-e.minTranslate())/(n.maxTranslate()-n.minTranslate()),a=(t-n.minTranslate())*i+e.minTranslate()),n.params.controller.inverse&&(a=e.maxTranslate()-a),e.updateProgress(a),e.setTranslate(a,n),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(let e=0;e<r.length;e+=1)r[e]!==t&&r[e]instanceof Cd&&o(r[e]);else r instanceof Cd&&t!==r&&o(r)},setTransition(e,t){let n=this,r=n.controller.control,i;function a(t){t.setTransition(e,n),e!==0&&(t.transitionStart(),t.params.autoHeight&&Z.nextTick(()=>{t.updateAutoHeight()}),t.$wrapperEl.transitionEnd(()=>{r&&(t.params.loop&&n.params.controller.by===`slide`&&t.loopFix(),t.transitionEnd())}))}if(Array.isArray(r))for(i=0;i<r.length;i+=1)r[i]!==t&&r[i]instanceof Cd&&a(r[i]);else r instanceof Cd&&t!==r&&a(r)}},Zd={name:`controller`,params:{controller:{control:void 0,inverse:!1,by:`slide`}},create(){let e=this;Z.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:Xd.getInterpolateFunction.bind(e),setTranslate:Xd.setTranslate.bind(e),setTransition:Xd.setTransition.bind(e)}})},on:{update(){let e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize(){let e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate(){let e=this;e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate(e,t){let n=this;n.controller.control&&n.controller.setTranslate(e,t)},setTransition(e,t){let n=this;n.controller.control&&n.controller.setTransition(e,t)}}},Qd={makeElFocusable(e){return e.attr(`tabIndex`,`0`),e},makeElNotFocusable(e){return e.attr(`tabIndex`,`-1`),e},addElRole(e,t){return e.attr(`role`,t),e},addElLabel(e,t){return e.attr(`aria-label`,t),e},disableEl(e){return e.attr(`aria-disabled`,!0),e},enableEl(e){return e.attr(`aria-disabled`,!1),e},onEnterKey(e){let t=this,n=t.params.a11y;if(e.keyCode!==13)return;let r=X(e.target);t.navigation&&t.navigation.$nextEl&&r.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(n.lastSlideMessage):t.a11y.notify(n.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&r.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(n.firstSlideMessage):t.a11y.notify(n.prevSlideMessage)),t.pagination&&r.is(`.${t.params.pagination.bulletClass}`)&&r[0].click()},notify(e){let t=this.a11y.liveRegion;t.length!==0&&(t.html(``),t.html(e))},updateNavigation(){let e=this;if(e.params.loop||!e.navigation)return;let{$nextEl:t,$prevEl:n}=e.navigation;n&&n.length>0&&(e.isBeginning?(e.a11y.disableEl(n),e.a11y.makeElNotFocusable(n)):(e.a11y.enableEl(n),e.a11y.makeElFocusable(n))),t&&t.length>0&&(e.isEnd?(e.a11y.disableEl(t),e.a11y.makeElNotFocusable(t)):(e.a11y.enableEl(t),e.a11y.makeElFocusable(t)))},updatePagination(){let e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((n,r)=>{let i=X(r);e.a11y.makeElFocusable(i),e.a11y.addElRole(i,`button`),e.a11y.addElLabel(i,t.paginationBulletMessage.replace(/\{\{index\}\}/,i.index()+1))})},init(){let e=this;e.$el.append(e.a11y.liveRegion);let t=e.params.a11y,n,r;e.navigation&&e.navigation.$nextEl&&(n=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(r=e.navigation.$prevEl),n&&(e.a11y.makeElFocusable(n),e.a11y.addElRole(n,`button`),e.a11y.addElLabel(n,t.nextSlideMessage),n.on(`keydown`,e.a11y.onEnterKey)),r&&(e.a11y.makeElFocusable(r),e.a11y.addElRole(r,`button`),e.a11y.addElLabel(r,t.prevSlideMessage),r.on(`keydown`,e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on(`keydown`,`.${e.params.pagination.bulletClass}`,e.a11y.onEnterKey)},destroy(){let e=this;e.a11y.liveRegion&&e.a11y.liveRegion.length>0&&e.a11y.liveRegion.remove();let t,n;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(n=e.navigation.$prevEl),t&&t.off(`keydown`,e.a11y.onEnterKey),n&&n.off(`keydown`,e.a11y.onEnterKey),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.off(`keydown`,`.${e.params.pagination.bulletClass}`,e.a11y.onEnterKey)}},$d={name:`a11y`,params:{a11y:{enabled:!0,notificationClass:`swiper-notification`,prevSlideMessage:`Previous slide`,nextSlideMessage:`Next slide`,firstSlideMessage:`This is the first slide`,lastSlideMessage:`This is the last slide`,paginationBulletMessage:`Go to slide {{index}}`}},create(){let e=this;Z.extend(e,{a11y:{liveRegion:X(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)}}),Object.keys(Qd).forEach(t=>{e.a11y[t]=Qd[t].bind(e)})},on:{init(){let e=this;e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge(){let e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge(){let e=this;e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate(){let e=this;e.params.a11y.enabled&&e.a11y.updatePagination()},destroy(){let e=this;e.params.a11y.enabled&&e.a11y.destroy()}}},ef={init(){let e=this;if(!e.params.history)return;if(!J.history||!J.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}let t=e.history;t.initialized=!0,t.paths=ef.getPathValues(),!(!t.paths.key&&!t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||J.addEventListener(`popstate`,e.history.setHistoryPopState))},destroy(){let e=this;e.params.history.replaceState||J.removeEventListener(`popstate`,e.history.setHistoryPopState)},setHistoryPopState(){let e=this;e.history.paths=ef.getPathValues(),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues(){let e=J.location.pathname.slice(1).split(`/`).filter(e=>e!==``),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory(e,t){let n=this;if(!n.history.initialized||!n.params.history.enabled)return;let r=n.slides.eq(t),i=ef.slugify(r.attr(`data-history`));J.location.pathname.includes(e)||(i=`${e}/${i}`);let a=J.history.state;a&&a.value===i||(n.params.history.replaceState?J.history.replaceState({value:i},null,i):J.history.pushState({value:i},null,i))},slugify(e){return e.toString().replace(/\s+/g,`-`).replace(/[^\w-]+/g,``).replace(/--+/g,`-`).replace(/^-+/,``).replace(/-+$/,``)},scrollToSlide(e,t,n){let r=this;if(t)for(let i=0,a=r.slides.length;i<a;i+=1){let a=r.slides.eq(i);if(ef.slugify(a.attr(`data-history`))===t&&!a.hasClass(r.params.slideDuplicateClass)){let t=a.index();r.slideTo(t,e,n)}}else r.slideTo(0,e,n)}},tf={name:`history`,params:{history:{enabled:!1,replaceState:!1,key:`slides`}},create(){let e=this;Z.extend(e,{history:{init:ef.init.bind(e),setHistory:ef.setHistory.bind(e),setHistoryPopState:ef.setHistoryPopState.bind(e),scrollToSlide:ef.scrollToSlide.bind(e),destroy:ef.destroy.bind(e)}})},on:{init(){let e=this;e.params.history.enabled&&e.history.init()},destroy(){let e=this;e.params.history.enabled&&e.history.destroy()},transitionEnd(){let e=this;e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)},slideChange(){let e=this;e.history.initialized&&e.params.cssMode&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},nf={onHashCange(){let e=this;e.emit(`hashChange`);let t=q.location.hash.replace(`#`,``);if(t!==e.slides.eq(e.activeIndex).attr(`data-hash`)){let n=e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();if(n===void 0)return;e.slideTo(n)}},setHash(){let e=this;if(!(!e.hashNavigation.initialized||!e.params.hashNavigation.enabled))if(e.params.hashNavigation.replaceState&&J.history&&J.history.replaceState)J.history.replaceState(null,null,`#${e.slides.eq(e.activeIndex).attr(`data-hash`)}`||``),e.emit(`hashSet`);else{let t=e.slides.eq(e.activeIndex),n=t.attr(`data-hash`)||t.attr(`data-history`);q.location.hash=n||``,e.emit(`hashSet`)}},init(){let e=this;if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;e.hashNavigation.initialized=!0;let t=q.location.hash.replace(`#`,``);if(t)for(let n=0,r=e.slides.length;n<r;n+=1){let r=e.slides.eq(n);if((r.attr(`data-hash`)||r.attr(`data-history`))===t&&!r.hasClass(e.params.slideDuplicateClass)){let t=r.index();e.slideTo(t,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&X(J).on(`hashchange`,e.hashNavigation.onHashCange)},destroy(){let e=this;e.params.hashNavigation.watchState&&X(J).off(`hashchange`,e.hashNavigation.onHashCange)}},rf={name:`hash-navigation`,params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create(){let e=this;Z.extend(e,{hashNavigation:{initialized:!1,init:nf.init.bind(e),destroy:nf.destroy.bind(e),setHash:nf.setHash.bind(e),onHashCange:nf.onHashCange.bind(e)}})},on:{init(){let e=this;e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy(){let e=this;e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd(){let e=this;e.hashNavigation.initialized&&e.hashNavigation.setHash()},slideChange(){let e=this;e.hashNavigation.initialized&&e.params.cssMode&&e.hashNavigation.setHash()}}},af={run(){let e=this,t=e.slides.eq(e.activeIndex),n=e.params.autoplay.delay;t.attr(`data-swiper-autoplay`)&&(n=t.attr(`data-swiper-autoplay`)||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=Z.nextTick(()=>{e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit(`autoplay`)):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit(`autoplay`)):(e.slidePrev(e.params.speed,!0,!0),e.emit(`autoplay`)):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit(`autoplay`)):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit(`autoplay`)):(e.slideNext(e.params.speed,!0,!0),e.emit(`autoplay`)),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()},n)},start(){let e=this;return e.autoplay.timeout!==void 0||e.autoplay.running?!1:(e.autoplay.running=!0,e.emit(`autoplayStart`),e.autoplay.run(),!0)},stop(){let e=this;return!e.autoplay.running||e.autoplay.timeout===void 0?!1:(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit(`autoplayStop`),!0)},pause(e){let t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,e===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,t.autoplay.run()):(t.$wrapperEl[0].addEventListener(`transitionend`,t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener(`webkitTransitionEnd`,t.autoplay.onTransitionEnd))))}},of={name:`autoplay`,params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create(){let e=this;Z.extend(e,{autoplay:{running:!1,paused:!1,run:af.run.bind(e),start:af.start.bind(e),stop:af.stop.bind(e),pause:af.pause.bind(e),onVisibilityChange(){document.visibilityState===`hidden`&&e.autoplay.running&&e.autoplay.pause(),document.visibilityState===`visible`&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd(t){!e||e.destroyed||!e.$wrapperEl||t.target===this&&(e.$wrapperEl[0].removeEventListener(`transitionend`,e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener(`webkitTransitionEnd`,e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init(){let e=this;e.params.autoplay.enabled&&(e.autoplay.start(),document.addEventListener(`visibilitychange`,e.autoplay.onVisibilityChange))},beforeTransitionStart(e,t){let n=this;n.autoplay.running&&(t||!n.params.autoplay.disableOnInteraction?n.autoplay.pause(e):n.autoplay.stop())},sliderFirstMove(){let e=this;e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd(){let e=this;e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy(){let e=this;e.autoplay.running&&e.autoplay.stop(),document.removeEventListener(`visibilitychange`,e.autoplay.onVisibilityChange)}}},sf={setTranslate(){let e=this,{slides:t}=e;for(let n=0;n<t.length;n+=1){let t=e.slides.eq(n),r=-t[0].swiperSlideOffset;e.params.virtualTranslate||(r-=e.translate);let i=0;e.isHorizontal()||(i=r,r=0);let a=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);t.css({opacity:a}).transform(`translate3d(${r}px, ${i}px, 0px)`)}},setTransition(e){let t=this,{slides:n,$wrapperEl:r}=t;if(n.transition(e),t.params.virtualTranslate&&e!==0){let e=!1;n.transitionEnd(()=>{if(e||!t||t.destroyed)return;e=!0,t.animating=!1;let n=[`webkitTransitionEnd`,`transitionend`];for(let e=0;e<n.length;e+=1)r.trigger(n[e])})}}},cf={name:`effect-fade`,params:{fadeEffect:{crossFade:!1}},create(){let e=this;Z.extend(e,{fadeEffect:{setTranslate:sf.setTranslate.bind(e),setTransition:sf.setTransition.bind(e)}})},on:{beforeInit(){let e=this;if(e.params.effect!==`fade`)return;e.classNames.push(`${e.params.containerModifierClass}fade`);let t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};Z.extend(e.params,t),Z.extend(e.originalParams,t)},setTranslate(){let e=this;e.params.effect===`fade`&&e.fadeEffect.setTranslate()},setTransition(e){let t=this;t.params.effect===`fade`&&t.fadeEffect.setTransition(e)}}},lf={setTranslate(){let e=this,{$el:t,$wrapperEl:n,slides:r,width:i,height:a,rtlTranslate:o,size:s}=e,c=e.params.cubeEffect,l=e.isHorizontal(),u=e.virtual&&e.params.virtual.enabled,d=0,f;c.shadow&&(l?(f=n.find(`.swiper-cube-shadow`),f.length===0&&(f=X(`<div class="swiper-cube-shadow"></div>`),n.append(f)),f.css({height:`${i}px`})):(f=t.find(`.swiper-cube-shadow`),f.length===0&&(f=X(`<div class="swiper-cube-shadow"></div>`),t.append(f))));for(let e=0;e<r.length;e+=1){let t=r.eq(e),n=e;u&&(n=parseInt(t.attr(`data-swiper-slide-index`),10));let i=n*90,a=Math.floor(i/360);o&&(i=-i,a=Math.floor(-i/360));let f=Math.max(Math.min(t[0].progress,1),-1),p=0,m=0,h=0;n%4==0?(p=-a*4*s,h=0):(n-1)%4==0?(p=0,h=-a*4*s):(n-2)%4==0?(p=s+a*4*s,h=s):(n-3)%4==0&&(p=-s,h=3*s+s*4*a),o&&(p=-p),l||(m=p,p=0);let g=`rotateX(${l?0:-i}deg) rotateY(${l?i:0}deg) translate3d(${p}px, ${m}px, ${h}px)`;if(f<=1&&f>-1&&(d=n*90+f*90,o&&(d=-n*90-f*90)),t.transform(g),c.slideShadows){let e=l?t.find(`.swiper-slide-shadow-left`):t.find(`.swiper-slide-shadow-top`),n=l?t.find(`.swiper-slide-shadow-right`):t.find(`.swiper-slide-shadow-bottom`);e.length===0&&(e=X(`<div class="swiper-slide-shadow-${l?`left`:`top`}"></div>`),t.append(e)),n.length===0&&(n=X(`<div class="swiper-slide-shadow-${l?`right`:`bottom`}"></div>`),t.append(n)),e.length&&(e[0].style.opacity=Math.max(-f,0)),n.length&&(n[0].style.opacity=Math.max(f,0))}}if(n.css({"-webkit-transform-origin":`50% 50% -${s/2}px`,"-moz-transform-origin":`50% 50% -${s/2}px`,"-ms-transform-origin":`50% 50% -${s/2}px`,"transform-origin":`50% 50% -${s/2}px`}),c.shadow)if(l)f.transform(`translate3d(0px, ${i/2+c.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);else{let e=Math.abs(d)-Math.floor(Math.abs(d)/90)*90,t=1.5-(Math.sin(e*2*Math.PI/360)/2+Math.cos(e*2*Math.PI/360)/2),n=c.shadowScale,r=c.shadowScale/t,i=c.shadowOffset;f.transform(`scale3d(${n}, 1, ${r}) translate3d(0px, ${a/2+i}px, ${-a/2/r}px) rotateX(-90deg)`)}let p=Ed.isSafari||Ed.isWebView?-s/2:0;n.transform(`translate3d(0px,0,${p}px) rotateX(${e.isHorizontal()?0:d}deg) rotateY(${e.isHorizontal()?-d:0}deg)`)},setTransition(e){let t=this,{$el:n,slides:r}=t;r.transition(e).find(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&n.find(`.swiper-cube-shadow`).transition(e)}},uf={name:`effect-cube`,params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create(){let e=this;Z.extend(e,{cubeEffect:{setTranslate:lf.setTranslate.bind(e),setTransition:lf.setTransition.bind(e)}})},on:{beforeInit(){let e=this;if(e.params.effect!==`cube`)return;e.classNames.push(`${e.params.containerModifierClass}cube`),e.classNames.push(`${e.params.containerModifierClass}3d`);let t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};Z.extend(e.params,t),Z.extend(e.originalParams,t)},setTranslate(){let e=this;e.params.effect===`cube`&&e.cubeEffect.setTranslate()},setTransition(e){let t=this;t.params.effect===`cube`&&t.cubeEffect.setTransition(e)}}},df={setTranslate(){let e=this,{slides:t,rtlTranslate:n}=e;for(let r=0;r<t.length;r+=1){let i=t.eq(r),a=i[0].progress;e.params.flipEffect.limitRotation&&(a=Math.max(Math.min(i[0].progress,1),-1));let o=i[0].swiperSlideOffset,s=-180*a,c=0,l=-o,u=0;if(e.isHorizontal()?n&&(s=-s):(u=l,l=0,c=-s,s=0),i[0].style.zIndex=-Math.abs(Math.round(a))+t.length,e.params.flipEffect.slideShadows){let t=e.isHorizontal()?i.find(`.swiper-slide-shadow-left`):i.find(`.swiper-slide-shadow-top`),n=e.isHorizontal()?i.find(`.swiper-slide-shadow-right`):i.find(`.swiper-slide-shadow-bottom`);t.length===0&&(t=X(`<div class="swiper-slide-shadow-${e.isHorizontal()?`left`:`top`}"></div>`),i.append(t)),n.length===0&&(n=X(`<div class="swiper-slide-shadow-${e.isHorizontal()?`right`:`bottom`}"></div>`),i.append(n)),t.length&&(t[0].style.opacity=Math.max(-a,0)),n.length&&(n[0].style.opacity=Math.max(a,0))}i.transform(`translate3d(${l}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${s}deg)`)}},setTransition(e){let t=this,{slides:n,activeIndex:r,$wrapperEl:i}=t;if(n.transition(e).find(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).transition(e),t.params.virtualTranslate&&e!==0){let e=!1;n.eq(r).transitionEnd(function(){if(e||!t||t.destroyed)return;e=!0,t.animating=!1;let n=[`webkitTransitionEnd`,`transitionend`];for(let e=0;e<n.length;e+=1)i.trigger(n[e])})}}},ff={name:`effect-flip`,params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create(){let e=this;Z.extend(e,{flipEffect:{setTranslate:df.setTranslate.bind(e),setTransition:df.setTransition.bind(e)}})},on:{beforeInit(){let e=this;if(e.params.effect!==`flip`)return;e.classNames.push(`${e.params.containerModifierClass}flip`),e.classNames.push(`${e.params.containerModifierClass}3d`);let t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};Z.extend(e.params,t),Z.extend(e.originalParams,t)},setTranslate(){let e=this;e.params.effect===`flip`&&e.flipEffect.setTranslate()},setTransition(e){let t=this;t.params.effect===`flip`&&t.flipEffect.setTransition(e)}}},pf={setTranslate(){let e=this,{width:t,height:n,slides:r,$wrapperEl:i,slidesSizesGrid:a}=e,o=e.params.coverflowEffect,s=e.isHorizontal(),c=e.translate,l=s?-c+t/2:-c+n/2,u=s?o.rotate:-o.rotate,d=o.depth;for(let e=0,t=r.length;e<t;e+=1){let t=r.eq(e),n=a[e],i=(l-t[0].swiperSlideOffset-n/2)/n*o.modifier,c=s?u*i:0,f=s?0:u*i,p=-d*Math.abs(i),m=o.stretch;typeof m==`string`&&m.indexOf(`%`)!==-1&&(m=parseFloat(o.stretch)/100*n);let h=s?0:m*i,g=s?m*i:0,_=1-(1-o.scale)*Math.abs(i);Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(p)<.001&&(p=0),Math.abs(c)<.001&&(c=0),Math.abs(f)<.001&&(f=0),Math.abs(_)<.001&&(_=0);let v=`translate3d(${g}px,${h}px,${p}px)  rotateX(${f}deg) rotateY(${c}deg) scale(${_})`;if(t.transform(v),t[0].style.zIndex=-Math.abs(Math.round(i))+1,o.slideShadows){let e=s?t.find(`.swiper-slide-shadow-left`):t.find(`.swiper-slide-shadow-top`),n=s?t.find(`.swiper-slide-shadow-right`):t.find(`.swiper-slide-shadow-bottom`);e.length===0&&(e=X(`<div class="swiper-slide-shadow-${s?`left`:`top`}"></div>`),t.append(e)),n.length===0&&(n=X(`<div class="swiper-slide-shadow-${s?`right`:`bottom`}"></div>`),t.append(n)),e.length&&(e[0].style.opacity=i>0?i:0),n.length&&(n[0].style.opacity=-i>0?-i:0)}}if(Q.pointerEvents||Q.prefixedPointerEvents){let e=i[0].style;e.perspectiveOrigin=`${l}px 50%`}},setTransition(e){this.slides.transition(e).find(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).transition(e)}},mf={name:`effect-coverflow`,params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}},create(){let e=this;Z.extend(e,{coverflowEffect:{setTranslate:pf.setTranslate.bind(e),setTransition:pf.setTransition.bind(e)}})},on:{beforeInit(){let e=this;e.params.effect===`coverflow`&&(e.classNames.push(`${e.params.containerModifierClass}coverflow`),e.classNames.push(`${e.params.containerModifierClass}3d`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate(){let e=this;e.params.effect===`coverflow`&&e.coverflowEffect.setTranslate()},setTransition(e){let t=this;t.params.effect===`coverflow`&&t.coverflowEffect.setTransition(e)}}},hf={init(){let e=this,{thumbs:t}=e.params,n=e.constructor;t.swiper instanceof n?(e.thumbs.swiper=t.swiper,Z.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Z.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):Z.isObject(t.swiper)&&(e.thumbs.swiper=new n(Z.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on(`tap`,e.thumbs.onThumbClick)},onThumbClick(){let e=this,t=e.thumbs.swiper;if(!t)return;let n=t.clickedIndex,r=t.clickedSlide;if(r&&X(r).hasClass(e.params.thumbs.slideThumbActiveClass)||n==null)return;let i;if(i=t.params.loop?parseInt(X(t.clickedSlide).attr(`data-swiper-slide-index`),10):n,e.params.loop){let t=e.activeIndex;e.slides.eq(t).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,t=e.activeIndex);let n=e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),r=e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=n===void 0?r:r===void 0?n:r-t<t-n?r:n}e.slideTo(i)},update(e){let t=this,n=t.thumbs.swiper;if(!n)return;let r=n.params.slidesPerView===`auto`?n.slidesPerViewDynamic():n.params.slidesPerView,i=t.params.thumbs.autoScrollOffset,a=i&&!n.params.loop;if(t.realIndex!==n.realIndex||a){let o=n.activeIndex,s,c;if(n.params.loop){n.slides.eq(o).hasClass(n.params.slideDuplicateClass)&&(n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft,o=n.activeIndex);let e=n.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),r=n.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();s=e===void 0?r:r===void 0?e:r-o===o-e?o:r-o<o-e?r:e,c=t.activeIndex>t.previousIndex?`next`:`prev`}else s=t.realIndex,c=s>t.previousIndex?`next`:`prev`;a&&(s+=c===`next`?i:-1*i),n.visibleSlidesIndexes&&n.visibleSlidesIndexes.indexOf(s)<0&&(n.params.centeredSlides?s=s>o?s-Math.floor(r/2)+1:s+Math.floor(r/2)-1:s>o&&(s=s-r+1),n.slideTo(s,e?0:void 0))}let o=1,s=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(o=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(o=1),o=Math.floor(o),n.slides.removeClass(s),n.params.loop||n.params.virtual&&n.params.virtual.enabled)for(let e=0;e<o;e+=1)n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(s);else for(let e=0;e<o;e+=1)n.slides.eq(t.realIndex+e).addClass(s)}},gf=[wd,Td,Dd,Od,Ad,Md,Pd,Ld,zd,Vd,Ud,Gd,qd,Yd,Zd,$d,tf,rf,of,cf,uf,ff,mf,{name:`thumbs`,params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:`swiper-slide-thumb-active`,thumbsContainerClass:`swiper-container-thumbs`}},create(){let e=this;Z.extend(e,{thumbs:{swiper:null,init:hf.init.bind(e),update:hf.update.bind(e),onThumbClick:hf.onThumbClick.bind(e)}})},on:{beforeInit(){let e=this,{thumbs:t}=e.params;!t||!t.swiper||(e.thumbs.init(),e.thumbs.update(!0))},slideChange(){let e=this;e.thumbs.swiper&&e.thumbs.update()},update(){let e=this;e.thumbs.swiper&&e.thumbs.update()},resize(){let e=this;e.thumbs.swiper&&e.thumbs.update()},observerUpdate(){let e=this;e.thumbs.swiper&&e.thumbs.update()},setTransition(e){let t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy(){let e=this,t=e.thumbs.swiper;t&&e.thumbs.swiperCreated&&t&&t.destroy()}}}];Cd.use===void 0&&(Cd.use=Cd.Class.use,Cd.installModule=Cd.Class.installModule),Cd.use(gf);function _f(e){return e===!0||e===`true`||e===1||e===`1`}function vf(e,t){return!!(_f(e.autoplay)||e.autoplay===``&&t.classList.contains(`pxl-testimonial-carousel`))}function yf(e){let t=e.getAttribute(`data-settings`);if(!t)return{};try{return JSON.parse(t)}catch{return{}}}function bf(e,t){let n=parseInt(String(e),10);return Number.isFinite(n)?n:t}function xf(e,t){let n=yf(e),r=t.querySelector(`.pxl-swiper-arrow-next`),i=t.querySelector(`.pxl-swiper-arrow-prev`),a=t.querySelector(`.pxl-swiper-dots`),o=_f(n.arrow)&&r&&i?{nextEl:r,prevEl:i}:!1,s=!1;_f(n.pagination)&&a&&n.pagination_type&&(s={el:a,clickable:!0,type:n.pagination_type,modifierClass:`pxl-swiper-pagination-`,bulletClass:`pxl-swiper-pagination-bullet`});let c=bf(n.slides_to_scroll,1),l={0:{slidesPerView:bf(n.slides_to_show_xs,1),slidesPerGroup:c},576:{slidesPerView:bf(n.slides_to_show_sm,2),slidesPerGroup:c},768:{slidesPerView:bf(n.slides_to_show_md,2),slidesPerGroup:c},992:{slidesPerView:bf(n.slides_to_show_lg,3),slidesPerGroup:c},1200:{slidesPerView:bf(n.slides_to_show,1),slidesPerGroup:c},1600:{slidesPerView:bf(n.slides_to_show_xxl,bf(n.slides_to_show,1)),slidesPerGroup:c}},u={direction:n.slide_direction===`vertical`?`vertical`:`horizontal`,effect:n.slide_mode===`fade`?`fade`:`slide`,wrapperClass:`pxl-swiper-wrapper`,slideClass:`pxl-swiper-slide`,slidesPerView:bf(n.slides_to_show,1),slidesPerGroup:c,slidesPerColumn:bf(n.slide_percolumn,1),spaceBetween:bf(n.slides_gutter,0),speed:bf(n.speed,500),watchSlidesProgress:!0,watchSlidesVisibility:!0,breakpoints:l};return o&&(u.navigation=o),s&&(u.pagination=s),n.slide_mode===`fade`&&(u.fadeEffect={crossFade:!0}),_f(n.center)&&(u.centeredSlides=!0),_f(n.loop)&&(u.loop=!0),vf(n,t)?u.autoplay={enabled:!0,delay:Math.max(1500,bf(n.delay,5e3)),disableOnInteraction:_f(n.pause_on_interaction)}:u.autoplay={enabled:!1},{cfg:u,settings:n}}function Sf(e){!e||typeof e.querySelectorAll!=`function`||e.querySelectorAll(`.pxl-swiper-container`).forEach(e=>{let t=e.closest(`.pxl-swiper-sliders`);if(!t)return;let{cfg:n,settings:r}=xf(e,t);if(typeof e._jksSwiperTeardownHover==`function`&&e._jksSwiperTeardownHover(),e._jksSwiper){try{e._jksSwiper.destroy(!0,!0)}catch{}delete e._jksSwiper}let i;try{i=new Cd(e,n)}catch(e){console.warn(`[jks] Swiper init failed`,e);return}if(e._jksSwiper=i,vf(r,t)&&_f(r.pause_on_hover)){let t=()=>i.autoplay?.stop?.(),n=()=>i.autoplay?.start?.();e.addEventListener(`mouseenter`,t),e.addEventListener(`mouseleave`,n),e._jksSwiperTeardownHover=()=>{e.removeEventListener(`mouseenter`,t),e.removeEventListener(`mouseleave`,n),delete e._jksSwiperTeardownHover}}})}function Cf(e){!e||typeof e.querySelectorAll!=`function`||e.querySelectorAll(`.pxl-swiper-container`).forEach(e=>{if(typeof e._jksSwiperTeardownHover==`function`&&e._jksSwiperTeardownHover(),e._jksSwiper){try{e._jksSwiper.destroy(!0,!0)}catch{}delete e._jksSwiper}})}var wf=[`innerHTML`],Tf={key:1,class:`static-page-content static-page-content--empty`,role:`status`},Ef={__name:`StaticPageContent`,props:{html:{type:String,default:``}},setup(e){let t=e,n=Uc(),r=Kt(null),i=/^\/(immigration|visas|other)\/[\w-]+\/?$/,a=/^\/(immigration|visas|other)\/?$/;function o(e){return e===`/`||e===`/about`||e===`/contact`||e===`/faq`||e===`/legal/terms`||e===`/legal/privacy`||e===`/legal/cookies`||a.test(e)?!0:i.test(e)}function s(e){let t=e.target.closest?.(`a[href]`);if(!t||t.target===`_blank`||t.getAttribute(`download`))return;let r=t.getAttribute(`href`);if(!r||r.startsWith(`mailto:`)||r.startsWith(`tel:`)||r.startsWith(`javascript:`)||r===`#`||r.startsWith(`#`)&&!r.includes(`/`))return;let i;try{i=new URL(r,window.location.origin)}catch{return}i.origin===window.location.origin&&o((i.pathname||`/`).replace(/\/+$/,``)||`/`)&&(e.preventDefault(),n.push(i.pathname+i.search+i.hash))}return Ln(()=>t.html,()=>{r.value&&Cf(r.value)},{flush:`sync`}),Ln(()=>t.html,async e=>{await vn(),e&&r.value&&Sf(r.value)},{flush:`post`,immediate:!0}),xr(()=>{r.value&&Cf(r.value)}),(e,n)=>t.html?(z(),ta(`div`,{key:0,ref_key:`swiperRoot`,ref:r,class:`static-page-content`,onClickCapture:s,innerHTML:t.html},null,40,wf)):(z(),ta(`div`,Tf,[...n[0]||=[B(`p`,null,[ua(`This section did not load. Try running `),B(`code`,null,`npm run extract-static`),ua(` from the project root.`)],-1)]]))}},Df=Object.fromEntries(Object.entries(Object.assign({"./pages/about.html":`<article id="pxl-post-222" class="post-222 page type-page status-publish hentry">
                  <div class="pxl-entry-content clearfix">
                    <div data-elementor-type="wp-page" data-elementor-id="222" class="elementor elementor-222">
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-c2672f4 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="c2672f4" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-11abdde pxl-column-none" data-id="11abdde" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-cd73363 elementor-widget elementor-widget-pxl_heading" data-id="cd73363" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-cd73363-6923" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                        <span class="pxl-item--subtext">
                                          <span class="pxl-item--icon pxl-mr-1">
                                            <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                          </span>
                                          ABOUT Our Mission JKS Immigration
                                          <span class="pxl-item--subdivider"></span>
                                        </span>
                                      </div>

                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        We help Making your dream into Reality
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6395f57 pxl-column-none" data-id="6395f57" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-26a8bd1 elementor-widget elementor-widget-pxl_text_editor" data-id="26a8bd1" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-text-editor">
                                    <div class="pxl-item--inner" data-wow-delay="ms">
                                      <p>
                                        <span style="font-weight: 400">Our mission at JKS Immigration is straightforward: to make Canada’s
                                          immigration process accessible, reliable, and as seamless as possible. We are
                                          driven by a client-centered approach, focusing on understanding individual
                                          circumstances and providing personalized advice that aligns with each client’s
                                          goals. Our role is to simplify the journey, providing honest and thorough
                                          information, which empowers our clients to make informed decisions for their
                                          future in Canada.</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-eb4f843 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="eb4f843" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-255790f pxl-column-none" data-id="255790f" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-9d0c8f7 elementor-widget elementor-widget-pxl_image" data-id="9d0c8f7" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_image.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl_image-9d0c8f7-8169" class="pxl-image-single style-default" data-wow-delay="ms">
                                    <div class="pxl-item--inner" data-wow-delay="120ms">
                                      <div class="pxl-item--image" data-parallax-value="">
                                        <img decoding="async" width="651" height="726" src="/images/wp-content__uploads__2023__11__slide-h1-2.png" class="no-lazyload attachment-full" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-fcaec79 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="fcaec79" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ac44dfe pxl-column-none" data-id="ac44dfe" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-2121c2e elementor-widget elementor-widget-pxl_image" data-id="2121c2e" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_image.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl_image-2121c2e-3706" class="pxl-image-single style-default" data-wow-delay="ms">
                                    <div class="pxl-item--inner" data-wow-delay="120ms">
                                      <div class="pxl-item--image" data-parallax-value="">
                                        <img loading="lazy" decoding="async" width="552" height="632" src="/images/wp-content__uploads__2023__10__Girl-and-world.jpg" class="no-lazyload attachment-full" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-923c163 elementor-absolute elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-pxl_client_review" data-id="923c163" data-element_type="widget" data-e-type="widget" data-settings='{"_position":"absolute"}' data-widget_type="pxl_client_review.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-client-review pxl-client-review3" data-wow-delay="ms">
                                    <div class="pxl-item--inner">
                                      <div class="pxl-item--icon">
                                        <i aria-hidden="true" class="fas fa-plane"></i>
                                      </div>

                                      <h5 class="pxl-item--title">Served Client</h5>
                                      <div class="pxl-piechart" data-wow-delay="ms">
                                        <div class="item--value percentage" style="min-height: 155px" data-size="155" data-bar-color="#da291c" data-track-color="#f5e6e4" data-line-width="7" data-percent="-50" data-line-cap="square"></div>
                                        <div class="wrap-meta">
                                          <span class="pxl--rating-label">Successful</span>
                                          <span class="pxl--counter-number">
                                            <span class="pxl--counter-value" data-duration="2000" data-to-value="127865" data-delimiter="">127865</span>
                                          </span>
                                        </div>
                                      </div>

                                      <div class="pxl-item--images el-empty">
                                        <div class="pxl-item--img">
                                          <img loading="lazy" decoding="async" class="" src="/images/wp-content__uploads__2023__10__usa-1-34x34.jpg" width="34" height="34" alt="usa" title="usa" />
                                        </div>
                                        <div class="pxl-item--img">
                                          <img loading="lazy" decoding="async" class="" src="/images/wp-content__uploads__2023__10__canada-34x34.jpg" width="34" height="34" alt="canada" title="canada" />
                                        </div>
                                        <div class="pxl-item--img">
                                          <img loading="lazy" decoding="async" class="" src="/images/wp-content__uploads__2023__10__austraylia-34x34.jpg" width="34" height="34" alt="austraylia" title="austraylia" />
                                        </div>
                                        <div class="pxl-item--img">
                                          <img loading="lazy" decoding="async" class="" src="/images/wp-content__uploads__2023__10__german-34x34.jpg" width="34" height="34" alt="german" title="german" />
                                        </div>
                                        <a class="pxl-item--img pxl-item--link" href="../country-list/index.html"><i class="pxl-icon--plus"></i></a>
                                        <span class="pxl-item--text">10 Countries </span>
                                      </div>
                                      <span class="pxl-item--desc">We are serving for 20 Years</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-25cdad2 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-pxl_contact_info" data-id="25cdad2" data-element_type="widget" data-e-type="widget" data-settings='{"_position":"absolute"}' data-widget_type="pxl_contact_info.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-contact-info pxl-contact-info1" data-wow-delay="ms">
                                    <div class="pxl-item--inner">
                                      <div class="pxl-item--icon pxl-mr-18">
                                        <i aria-hidden="true" class="flaticon flaticon-telephone-call"></i>
                                      </div>
                                      <div class="pxl-item--meta">
                                        <h6 class="pxl-item--subtitle el-empty">Call For Consultation</h6>
                                        <h4 class="pxl-item--title el-empty">+1 (514) 706 0130</h4>
                                      </div>
                                      <a class="pxl-item--link" href="tel:+15147060130"></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8a8803 pxl-column-none" data-id="a8a8803" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-799399e elementor-widget elementor-widget-pxl_heading" data-id="799399e" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-799399e-2684" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                        <span class="pxl-item--subtext">
                                          <span class="pxl-item--icon pxl-mr-1">
                                            <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                          </span>
                                          ABOUT OUR Jks immigration
                                          <span class="pxl-item--subdivider"></span>
                                        </span>
                                      </div>

                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        We help Making your dream into Reality
                                      </h2>

                                      <div class="px-divider--wrap">
                                        <div class="px-title--divider px-title--divider1">
                                          <span></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-2aa8c5f elementor-widget elementor-widget-pxl_text_editor" data-id="2aa8c5f" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-text-editor">
                                    <div class="pxl-item--inner" data-wow-delay="ms">
                                      <p>
                                        <span style="font-weight: 400">Welcome to JKS Immigration, Canada’s premier immigration agency dedicated to
                                          guiding individuals and families through every step of their immigration
                                          journey. Based in Canada, our agency is staffed by an experienced team of
                                          professional consultants and licensed immigration lawyers who prioritize a
                                          transparent, efficient, and successful immigration process. Our commitment is
                                          to provide our clients with the highest quality service while adhering
                                          strictly to Canada’s immigration laws and policies. </span><span style="font-weight: 400">At JKS Immigration, we understand that immigrating to a new country is a
                                          significant step, filled with both challenges and opportunities. Our
                                          consultants are fully accredited and recognized by the College of Immigration
                                          and Citizenship Consultants (CICC) and the Law Society of Ontario (LSO). This
                                          certification assures our clients that they are receiving genuine and
                                          trustworthy guidance in navigating the often-complex procedures of obtaining
                                          Canadian visas and permanent residency.</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-9309498 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="9309498" data-element_type="section" data-e-type="section">
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-583e51c pxl-column-none" data-id="583e51c" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-49c4b90 elementor-widget elementor-widget-pxl_icon_box" data-id="49c4b90" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box2" data-wow-delay="ms">
                                            <div class="pxl-item--inner">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-visa"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Transparent <br />Process</h5>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6bd3b8f pxl-column-none" data-id="6bd3b8f" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-cf4143d elementor-widget elementor-widget-pxl_icon_box" data-id="cf4143d" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box2" data-wow-delay="ms">
                                            <div class="pxl-item--inner">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-passport"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Expert <br />Guidance</h5>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <div class="elementor-element elementor-element-4faf9fd elementor-widget elementor-widget-pxl_list" data-id="4faf9fd" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_list.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-list pxl-list1 style-default">
                                    <div class="pxl--item" data-wow-delay="ms">
                                      <div class="pxl-item--icon pxl-mr-8">
                                        <i aria-hidden="true" class="far fa-check"></i>
                                      </div>
                                      <div class="pxl-item--text el-empty">
                                        Fastest Visa form processing with expert immigration agents
                                      </div>
                                    </div>
                                    <div class="pxl--item" data-wow-delay="ms">
                                      <div class="pxl-item--icon pxl-mr-8">
                                        <i aria-hidden="true" class="far fa-check"></i>
                                      </div>
                                      <div class="pxl-item--text el-empty">
                                        Affiliation with Educational Institutions from over the world
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-9be1503 elementor-widget elementor-widget-pxl_button" data-id="9be1503" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_button.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_button-9be1503-8859" class="pxl-button" data-wow-delay="ms">
                                    <a href="/contact" class="btn pxl-icon-active btn-default pxl-icon--left" data-wow-delay="ms">
                                      <span class="pxl--btn-text" data-text="Get Started"> Get Started </span>

                                      <span class="pxl--text-wrap">
                                        <span class="pxl--btn-text1">Get Started</span>
                                        <span class="pxl--btn-text2">Get Started</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-9fcfa50 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-full-content-with-space-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="9fcfa50" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bad0a81 pxl-column-none" data-id="bad0a81" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-b2c5072 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="b2c5072" data-element_type="section" data-e-type="section">
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-08733c0 pxl-column-none" data-id="08733c0" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-4aba13e elementor-widget elementor-widget-pxl_heading" data-id="4aba13e" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="pxl-pxl_heading-4aba13e-2079" class="pxl-heading px-sub-title-default-style">
                                            <div class="pxl-heading--inner">
                                              <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                                <span class="pxl-item--subtext">
                                                  <span class="pxl-item--icon pxl-mr-1">
                                                    <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                                  </span>
                                                  WHY CHOOSE US
                                                  <span class="pxl-item--subdivider"></span>
                                                </span>
                                              </div>

                                              <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                                Why Choose JKS Immigration?
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="elementor-element elementor-element-aeb80bd elementor-widget elementor-widget-pxl_icon_box" data-id="aeb80bd" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box3 wow PXLfadeInUp" data-wow-delay="ms">
                                            <div class="pxl-item--inner">
                                              <div class="pxl-item--icon">
                                                <i aria-hidden="true" class="flaticon flaticon-bank-card"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Quality Visa Service</h5>
                                                <span class="pxl-item--description el-empty">We take pride in our transparent and ethical approach to immigration
                                                  consulting. Our team is dedicated to working within the regulated
                                                  framework established by the
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="elementor-element elementor-element-70a9df2 elementor-widget elementor-widget-pxl_icon_box" data-id="70a9df2" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box3 wow PXLfadeInUp" data-wow-delay="300ms">
                                            <div class="pxl-item--inner">
                                              <div class="pxl-item--icon">
                                                <i aria-hidden="true" class="flaticon flaticon-personal-branding"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Our Approach to Client Success</h5>
                                                <span class="pxl-item--description el-empty">At JKS Immigration, client success is our primary goal. We believe
                                                  that every case is unique and deserves dedicated attention and
                                                  customized solutions. We begin each client relationship by
                                                  understanding individual aspirations,</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="elementor-element elementor-element-4ced492 elementor-widget elementor-widget-pxl_icon_box" data-id="4ced492" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box3 wow PXLfadeInUp" data-wow-delay="600ms">
                                            <div class="pxl-item--inner">
                                              <div class="pxl-item--icon">
                                                <i aria-hidden="true" class="flaticon flaticon-technical-support"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Commitment to Excellence</h5>
                                                <span class="pxl-item--description el-empty">Our commitment to excellence extends beyond the successful submission
                                                  of applications. We offer continuous support throughout the
                                                  immigration process, from the initial consultation to the final stages
                                                  of application submission and approval.</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f70d699 pxl-column-none" data-id="f70d699" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-fac65c8 elementor-widget elementor-widget-pxl_image" data-id="fac65c8" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_image.default">
                                        <div class="elementor-widget-container">
                                          <div id="pxl_image-fac65c8-4315" class="pxl-image-single style-default wow skewIn" data-wow-delay="ms">
                                            <div class="pxl-item--inner" data-wow-delay="120ms">
                                              <div class="pxl-item--image" data-parallax-value="">
                                                <img loading="lazy" decoding="async" width="638" height="763" src="/images/wp-content__uploads__2023__10__Hue_Saturation.png" class="no-lazyload attachment-full" alt="" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <div class="elementor-element elementor-element-f726cbf elementor-absolute elementor-widget elementor-widget-pxl_image" data-id="f726cbf" data-element_type="widget" data-e-type="widget" data-settings='{"_position":"absolute"}' data-widget_type="pxl_image.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl_image-f726cbf-6759" class="pxl-image-single style-default" data-wow-delay="ms">
                                    <div class="pxl-item--inner" data-wow-delay="120ms">
                                      <div class="pxl-item--image" data-parallax-value="">
                                        <img loading="lazy" decoding="async" width="1265" height="700" src="/images/wp-content__uploads__2023__10__Map.png" class="no-lazyload attachment-full" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-ce163f8 elementor-absolute elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-pxl_image" data-id="ce163f8" data-element_type="widget" data-e-type="widget" data-settings='{"_position":"absolute"}' data-widget_type="pxl_image.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl_image-ce163f8-9055" class="pxl-image-single style-default" data-wow-delay="ms">
                                    <div class="pxl-item--inner" data-wow-delay="120ms">
                                      <div class="pxl-item--image" data-parallax-value="">
                                        <img loading="lazy" decoding="async" width="868" height="393" src="/images/wp-content__uploads__2023__11__canada.png" class="no-lazyload attachment-full" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-ffdba3d elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="ffdba3d" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                        <div class="elementor-background-overlay"></div>

                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ae84fff pxl-column-none" data-id="ae84fff" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-95bec18 elementor-widget elementor-widget-pxl_counter" data-id="95bec18" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_counter.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-counter pxl-counter3" data-wow-delay="ms">
                                    <div class="pxl--item-inner">
                                      <div class="pxl--counter-meta">
                                        <div class="pxl--counter-number">
                                          <span class="pxl--counter-prefix el-empty"></span>
                                          <span class="pxl--counter-value effect-default" data-duration="2000" data-startnumber="1" data-endnumber="20" data-to-value="20" data-delimiter="">20</span>
                                          <span class="pxl--counter-suffix">+</span>
                                        </div>
                                        <div class="pxl--item-title">Visa Category</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-7102c44 pxl-column-none" data-id="7102c44" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-47e1cba elementor-widget elementor-widget-pxl_counter" data-id="47e1cba" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_counter.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-counter pxl-counter3" data-wow-delay="ms">
                                    <div class="pxl--item-inner">
                                      <div class="pxl--counter-meta">
                                        <div class="pxl--counter-number">
                                          <span class="pxl--counter-prefix el-empty"></span>
                                          <span class="pxl--counter-value effect-default" data-duration="2000" data-startnumber="1" data-endnumber="50" data-to-value="50" data-delimiter="">50</span>
                                          <span class="pxl--counter-suffix">+</span>
                                        </div>
                                        <div class="pxl--item-title">Trust Status</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e0c6576 pxl-column-none" data-id="e0c6576" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-6797d51 elementor-widget elementor-widget-pxl_counter" data-id="6797d51" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_counter.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-counter pxl-counter3" data-wow-delay="ms">
                                    <div class="pxl--item-inner">
                                      <div class="pxl--counter-meta">
                                        <div class="pxl--counter-number">
                                          <span class="pxl--counter-prefix el-empty"></span>
                                          <span class="pxl--counter-value effect-default" data-duration="2000" data-startnumber="1" data-endnumber="99" data-to-value="99" data-delimiter="">99</span>
                                          <span class="pxl--counter-suffix">%</span>
                                        </div>
                                        <div class="pxl--item-title">Success Rate</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-b6194ab pxl-column-none" data-id="b6194ab" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-8474665 elementor-widget elementor-widget-pxl_counter" data-id="8474665" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_counter.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-counter pxl-counter3" data-wow-delay="ms">
                                    <div class="pxl--item-inner">
                                      <div class="pxl--counter-meta">
                                        <div class="pxl--counter-number">
                                          <span class="pxl--counter-prefix el-empty"></span>
                                          <span class="pxl--counter-value effect-default" data-duration="2000" data-startnumber="1" data-endnumber="99" data-to-value="99" data-delimiter="">99</span>
                                          <span class="pxl--counter-suffix">%</span>
                                        </div>
                                        <div class="pxl--item-title">Stratification Rate</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-b8f3ae2 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="b8f3ae2" data-element_type="section" data-e-type="section">
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fe650c1 pxl-column-none" data-id="fe650c1" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-a6157de elementor-widget elementor-widget-html" data-id="a6157de" data-element_type="widget" data-e-type="widget" data-widget_type="html.default">
                                <div class="elementor-widget-container">
                                  <style>
                                    /* General Styles */
                                    .our-team {
                                      padding: 60px 20px;
                                      text-align: center;
                                    }

                                    .container {
                                      max-width: 1200px;
                                      margin: 0 auto;
                                    }

                                    h2 {
                                      font-size: 2.5rem;
                                      color: #333;
                                      margin-bottom: 20px;
                                    }

                                    .team-intro {
                                      font-size: 1.1rem;
                                      color: #555;
                                      max-width: 800px;
                                      margin: 0 auto 40px;
                                    }

                                    /* Founder & CEO Section */
                                    .founder-ceo {
                                      display: flex;
                                      gap: 40px;
                                      align-items: center;
                                      justify-content: center;
                                      flex-wrap: wrap;
                                      margin-bottom: 60px;
                                    }

                                    .founder-ceo .team-member {
                                      flex: 1;
                                      max-width: 500px;
                                      background: #fff;
                                      padding: 20px;
                                      border-radius: 10px;
                                      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                                      text-align: center;
                                    }

                                    .founder-ceo .member-image img {
                                      width: 70%;
                                      height: 40vh;
                                      border-radius: 10px;
                                      margin-bottom: 15px;
                                    }

                                    .founder-ceo h3 {
                                      font-size: 2rem;
                                      color: #333;
                                      margin-bottom: 10px;
                                    }

                                    .founder-ceo .designation {
                                      font-size: 1.2rem;
                                      color: #777;
                                      margin-bottom: 15px;
                                    }

                                    .founder-ceo p {
                                      font-size: 1rem;
                                      color: #555;
                                      line-height: 1.6;
                                    }

                                    /* Why Choose Us Section */
                                    .why-choose-us {
                                      text-align: center;
                                    }

                                    .why-choose-us h3 {
                                      font-size: 2rem;
                                      color: #333;
                                      margin-bottom: 30px;
                                    }

                                    .reasons {
                                      display: grid;
                                      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                                      gap: 20px;
                                    }

                                    .reason {
                                      background: #fff;
                                      padding: 20px;
                                      border-radius: 10px;
                                      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                                    }

                                    .reason h4 {
                                      font-size: 1.3rem;
                                      color: #333;
                                      margin-bottom: 10px;
                                    }

                                    .reason p {
                                      font-size: 1rem;
                                      color: #555;
                                      line-height: 1.6;
                                    }

                                    /* Responsive Design */
                                    @media (max-width: 1024px) {
                                      .founder-ceo {
                                        flex-direction: column;
                                        text-align: center;
                                      }
                                    }
                                  </style>

                                  <section class="our-team">
                                    <div class="container">
                                      <h2>Our Team</h2>
                                      <p class="team-intro">
                                        At JKS Immigration, our strength lies in our exceptional team of immigration
                                        professionals who are passionate about helping you achieve your Canadian dreams.
                                        Each member of our team is highly qualified, experienced, and dedicated to
                                        providing you with the highest level of service.
                                      </p>

                                      <!-- Founder & CEO Section -->
                                      <div class="founder-ceo">
                                        <!-- Founder -->
                                        <div class="team-member">
                                          <div class="member-image">
                                            <img decoding="async" src="/images/wp-content__uploads__2023__10__team-6.jpg" alt="Jasmine Kaur - Founder &amp; RCIC" />
                                          </div>
                                          <div class="member-info">
                                            <h3>Jasmine Kaur</h3>
                                            <p class="designation">
                                              Founder &amp; Regulated Canadian Immigration Consultant (RCIC)
                                            </p>
                                            <p>
                                              Jasmine Kaur is the heart and soul of JKS Immigration. As a licensed RCIC
                                              (License No: R731629), she brings expertise, personalized guidance, and
                                              dedication to every case.
                                            </p>
                                          </div>
                                        </div>

                                        <!-- CEO -->
                                        <!--<div class="team-member">-->
                                        <!--  <div class="member-image">-->
                                        <!--    <img decoding="async" src="/images/wp-content__uploads__2023__10__team-2.jpg" alt="Jasmine Kaur - Founder & RCIC">-->
                                        <!--  </div>-->
                                        <!--  <div class="member-info">-->
                                        <!--    <h3>Hardilpreet Singh </h3>-->
                                        <!--    <p class="designation">(Founder)</p>-->
                                        <!--    <p>Hardilpreet Singh  leads JKS Immigration with a vision for innovation and client success. With years of experience in immigration consulting, he ensures that every client receives top-tier service and guidance.</p>-->
                                        <!--  </div>-->
                                        <!--</div>-->
                                      </div>

                                      <!-- Why Choose Us Section -->
                                      <div class="why-choose-us">
                                        <h3>Why Choose Our Team?</h3>
                                        <div class="reasons">
                                          <div class="reason">
                                            <h4>Expertise</h4>
                                            <p>
                                              Our team’s in-depth knowledge of Canadian immigration laws ensures
                                              accurate and reliable guidance.
                                            </p>
                                          </div>
                                          <div class="reason">
                                            <h4>Personalized Service</h4>
                                            <p>
                                              We treat every client as a unique individual, tailoring our services to
                                              meet your specific needs.
                                            </p>
                                          </div>
                                          <div class="reason">
                                            <h4>Transparency &amp; Integrity</h4>
                                            <p>
                                              We believe in honest communication and ethical practices, keeping you
                                              informed at every step.
                                            </p>
                                          </div>
                                          <div class="reason">
                                            <h4>Dedication</h4>
                                            <p>
                                              Your dreams are our priority. We are committed to providing the support
                                              you need to achieve your goals.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-21faeda elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="21faeda" data-element_type="section" data-e-type="section">
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a87a714 pxl-column-none" data-id="a87a714" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-077c29c elementor-widget elementor-widget-heading" data-id="077c29c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">
                                    SAVE YOUR TIME WITH RIGHT IMMIGRATION PATH
                                  </h2>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-4043b61 elementor-widget elementor-widget-heading" data-id="4043b61" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">OUR PROCESS</h2>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-edc66d7 elementor-widget elementor-widget-text-editor" data-id="edc66d7" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                  <p>
                                    Immigration can be a complex, But that’s where we come in – to simplify the process
                                    for you. Our Consultancy helps you avoid common pitfalls and ensures your
                                    application is on the right path\xA0
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-443616a elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="443616a" data-element_type="section" data-e-type="section">
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-996dd13 pxl-column-none" data-id="996dd13" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap"></div>
                          </div>
                          <div class="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-f3cb74a pxl-column-none" data-id="f3cb74a" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-214d558 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="214d558" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">01</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-c5e0cf4 pxl-column-none" data-id="c5e0cf4" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-f1a96c8 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-widget elementor-widget-heading" data-id="f1a96c8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">initial Consultation</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-10fa291 pxl-column-none" data-id="10fa291" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-81cc155 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="81cc155" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">02</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-7374054 pxl-column-none" data-id="7374054" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-c3dab71 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-widget elementor-widget-heading" data-id="c3dab71" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">Comprehensive Analysis</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-9cf87eb pxl-column-none" data-id="9cf87eb" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-02ddebb elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="02ddebb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">03</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-14 elementor-top-column elementor-element elementor-element-1e02592 pxl-column-none" data-id="1e02592" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-05dfcc1 elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-widget elementor-widget-heading" data-id="05dfcc1" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">Application Assistance</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-8ee5eda elementor-hidden-mobile_extra elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="8ee5eda" data-element_type="section" data-e-type="section">
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a853ec7 pxl-column-none" data-id="a853ec7" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-14340a4 elementor-widget elementor-widget-heading" data-id="14340a4" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">initial Consultation</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d56df6b pxl-column-none" data-id="d56df6b" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-cb648f2 elementor-widget elementor-widget-heading" data-id="cb648f2" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">Comprehensive Analysis</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-0513e99 pxl-column-none" data-id="0513e99" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-96d3acf elementor-widget elementor-widget-heading" data-id="96d3acf" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">Application Assistance</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-e2843f7 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="e2843f7" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-50b001c pxl-column-none" data-id="50b001c" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-6c7b17b elementor-widget elementor-widget-pxl_heading" data-id="6c7b17b" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-6c7b17b-7505" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                        <span class="pxl-item--subtext">
                                          <span class="pxl-item--icon pxl-mr-1">
                                            <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                          </span>
                                          WORK PROCESS <span class="pxl-item--subdivider"></span>
                                        </span>
                                      </div>

                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        How we do our visa &amp; Immigration processing
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8f600d6 pxl-column-none" data-id="8f600d6" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-8df0c2d elementor-widget elementor-widget-pxl_text_editor" data-id="8df0c2d" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-text-editor">
                                    <div class="pxl-item--inner" data-wow-delay="ms">
                                      <p>
                                        We assess your eligibility, prepare required documents, and ensure accurate visa
                                        submission. Our team handles follow-ups to streamline your immigration process
                                        smoothly.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-b35bec5 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="b35bec5" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3fbba13 pxl-column-none" data-id="3fbba13" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-3420057 elementor-widget elementor-widget-pxl_process_carousel" data-id="3420057" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_process_carousel.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-swiper-sliders pxl-process-carousel pxl-process-carousel1">
                                    <div class="pxl-carousel-inner">
                                      <div class="pxl-swiper-container" dir="ltr" data-settings='{"slide_direction":"horizontal","slide_percolumn":"1","slide_mode":"slide","slides_to_show":"3","slides_to_show_xxl":"3","slides_to_show_lg":"3","slides_to_show_md":"2","slides_to_show_sm":"2","slides_to_show_xs":"1","slides_to_scroll":"1","arrow":"false","pagination":"false","pagination_type":"bullets","autoplay":"","pause_on_hover":"","pause_on_interaction":"true","delay":5000,"loop":"false","speed":500}'>
                                        <div class="pxl-swiper-wrapper">
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-delay="ms">
                                              <div class="pxl-item--img">
                                                <img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2023__10__process-1-263x263.jpg" width="263" height="263" alt="process-1" title="process-1" />
                                                <div class="pxl-item--dot"></div>
                                              </div>
                                              <h3 class="pxl-item--title el-empty">File Preparation and Submit</h3>
                                              <div class="pxl-item--description el-empty">
                                                Comprehensive support in preparing, organizing, and reviewing all
                                                required documents for IRCC applications. This includes ensuring
                                                accuracy, completeness, and compliance with current immigration
                                                guidelines before timely submission.
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-delay="ms">
                                              <div class="pxl-item--img">
                                                <img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2023__10__process-2-263x263.jpg" width="263" height="263" alt="process-2" title="process-2" />
                                                <div class="pxl-item--dot"></div>
                                              </div>
                                              <h3 class="pxl-item--title el-empty">
                                                Applying For International Universities
                                              </h3>
                                              <div class="pxl-item--description el-empty">
                                                Applying to international universities requires careful planning,
                                                including selecting the right programs, preparing documents, and meeting
                                                admission deadlines. Strong IELTS scores, academic transcripts, and
                                                personal statements are key to a successful application
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-delay="ms">
                                              <div class="pxl-item--img">
                                                <img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2023__10__process-3-263x263.jpg" width="263" height="263" alt="process-3" title="process-3" />
                                                <div class="pxl-item--dot"></div>
                                              </div>
                                              <h3 class="pxl-item--title el-empty">Assessment &amp; Visa Submission</h3>
                                              <div class="pxl-item--description el-empty">
                                                The assessment process evaluates your academic qualifications, language
                                                proficiency, and eligibility for university admission. Once accepted,
                                                visa submission involves preparing documents, financial proof, and
                                                meeting immigration requirements.
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-delay="ms">
                                              <div class="pxl-item--img">
                                                <img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2023__10__process-1-263x263.jpg" width="263" height="263" alt="process-1" title="process-1" />
                                                <div class="pxl-item--dot"></div>
                                              </div>
                                              <h3 class="pxl-item--title el-empty">IELTS Preparation and Scoring</h3>
                                              <div class="pxl-item--description el-empty">
                                                We have years of experience and a team of experts in IT services who are
                                                dedicated to providing you with top-notch service.
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-delay="ms">
                                              <div class="pxl-item--img">
                                                <img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2023__10__process-2-263x263.jpg" width="263" height="263" alt="process-2" title="process-2" />
                                                <div class="pxl-item--dot"></div>
                                              </div>
                                              <h3 class="pxl-item--title el-empty">
                                                Applying For International Universities
                                              </h3>
                                              <div class="pxl-item--description el-empty">
                                                We have years of experience and a team of experts in IT services who are
                                                dedicated to providing you with top-notch service.
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-delay="ms">
                                              <div class="pxl-item--img">
                                                <img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2023__10__process-3-263x263.jpg" width="263" height="263" alt="process-3" title="process-3" />
                                                <div class="pxl-item--dot"></div>
                                              </div>
                                              <h3 class="pxl-item--title el-empty">Assessment &amp; Visa Submission</h3>
                                              <div class="pxl-item--description el-empty">
                                                We have years of experience and a team of experts in IT services who are
                                                dedicated to providing you with top-notch service.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </article>`,"./pages/contact-us.html":`<article id="pxl-post-60" class="post-60 page type-page status-publish hentry">
                  <div class="pxl-entry-content clearfix">
                    <div data-elementor-type="wp-page" data-elementor-id="60" class="elementor elementor-60">
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-73602da elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="73602da" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-09b29f6 pxl-column-none" data-id="09b29f6" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-f042a11 elementor-widget__width-initial elementor-widget elementor-widget-pxl_image_box" data-id="f042a11" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_image_box.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-image-box pxl-image-box1" data-wow-delay="ms">
                                    <div class="pxl-banner-inner">
                                      <div class="pxl-item--image">
                                        <img decoding="async" width="740" height="452" src="/images/wp-content__uploads__2023__10__contact-banner1.jpg" class="attachment-full" alt="" />
                                      </div>
                                      <div class="pxl-item--holder">
                                        <div class="pxl-item--icon">
                                          <i aria-hidden="true" class="flaticon flaticon-mail"></i>
                                        </div>
                                        <h5 class="pxl-item--title">Send Us Mail</h5>
                                        <div class="pxl-item--content">jksimmigration@gmail.com<br /></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f85ae40 pxl-column-none" data-id="f85ae40" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-51ca9cb elementor-widget__width-initial elementor-widget elementor-widget-pxl_image_box" data-id="51ca9cb" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_image_box.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-image-box pxl-image-box1" data-wow-delay="ms">
                                    <div class="pxl-banner-inner">
                                      <div class="pxl-item--image">
                                        <img loading="lazy" decoding="async" width="740" height="452" src="/images/wp-content__uploads__2023__10__contact-banner2.jpg" class="attachment-full" alt="" />
                                      </div>
                                      <div class="pxl-item--holder">
                                        <div class="pxl-item--icon">
                                          <i aria-hidden="true" class="flaticon flaticon-telephone-call"></i>
                                        </div>
                                        <h5 class="pxl-item--title">Call Us Anytime</h5>
                                        <div class="pxl-item--content">tel:+1 (514) 706 0130<br /></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5560dff pxl-column-none" data-id="5560dff" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-38fe767 elementor-widget__width-initial elementor-widget elementor-widget-pxl_image_box" data-id="38fe767" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_image_box.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-image-box pxl-image-box1" data-wow-delay="ms">
                                    <div class="pxl-banner-inner">
                                      <div class="pxl-item--image">
                                        <img loading="lazy" decoding="async" width="740" height="452" src="/images/wp-content__uploads__2023__10__contact-banner3.jpg" class="attachment-full" alt="" />
                                      </div>
                                      <div class="pxl-item--holder">
                                        <div class="pxl-item--icon">
                                          <i aria-hidden="true" class="flaticon flaticon-residential"></i>
                                        </div>
                                        <h5 class="pxl-item--title">Visit Our Office</h5>
                                        <div class="pxl-item--content">
                                          202-2876 Rue Montcalm, Vaudreuil-Dorion, QC J7V 7W8
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-c33b999 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="c33b999" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0f738ac pxl-column-none" data-id="0f738ac" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic"}'>
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-43d9931 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="43d9931" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic"}'>
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-af3cd5c pxl-column-none" data-id="af3cd5c" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-c383065 elementor-widget elementor-widget-pxl_heading" data-id="c383065" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="pxl-pxl_heading-c383065-4179" class="pxl-heading px-sub-title-under-style">
                                            <div class="pxl-heading--inner">
                                              <h3 class="pxl-item--title" data-wow-delay="ms">Drop Us A Line</h3>

                                              <div class="pxl-item--subtitle px-sub-title-under" data-wow-delay="ms">
                                                <span class="pxl-item--subtext">
                                                  JKS Immigration will arrange your first business consultation totally
                                                  free of cost
                                                </span>
                                              </div>

                                              <div class="px-divider--wrap">
                                                <div class="px-title--divider px-title--divider1">
                                                  <span></span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div id="jks-contact-form-mount"></div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-81097b7 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="81097b7" data-element_type="section" data-e-type="section">
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-653212c pxl-column-none" data-id="653212c" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap"></div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </article>`,"./pages/cookie-policy.html":`<article id="pxl-post-4659" class="post-4659 page type-page status-publish hentry">
                  <div class="pxl-entry-content clearfix">
                    <h2 class="wp-block-heading">Cookie Policy</h2>

                    <p>
                      As with most websites and online services, we use cookies and similar technologies, such as
                      pixels, clear gifs, web beacons, tags, browser analysis tools, and web server logs. These
                      technologies collect information about your interactions with our services and store data on your
                      device, whether it’s a PC, tablet, or mobile. The primary goal of these tools is to enhance the
                      usability of our services, which includes logging you into services, saving your preferences,
                      personalizing content, protecting against spam and abuse, and delivering relevant advertisements,
                      alongside gathering statistical and analytical data.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>What Are Cookies and Similar Technologies?</strong>
                    </h3>

                    <p>
                      Cookies are small data files that a web server sends to your browser, which then stores them on
                      your device. These files can store information about your account, preferences, and usage of the
                      website. Some cookies carry serial numbers that allow us to link your activity with other
                      information in your profile, enhancing your interaction with our services.
                    </p>

                    <p>Cookies can be categorized into two main types based on their duration:</p>

                    <ol class="wp-block-list">
                      <li>
                        <strong>Session Cookies</strong>: These are temporary and expire once you close your browser.
                        They are used for various functionalities, such as managing page views during your visit.
                      </li>

                      <li>
                        <strong>Persistent Cookies</strong>: These remain on your device even after you close your
                        browser and can last for a designated period. They help us recognize you on subsequent visits,
                        allowing for a more tailored user experience.
                      </li>
                    </ol>

                    <h3 class="wp-block-heading"><strong>Types of Cookies We Use</strong></h3>

                    <p>Our website employs various types of cookies, which can be classified into three categories:</p>

                    <ol class="wp-block-list">
                      <li>
                        <strong>Essential Cookies</strong>: These are crucial for the website’s basic functionality.
                        They enable essential features such as remembering cookie preferences or login information.
                        Without these cookies, certain website functionalities may not operate effectively.
                      </li>

                      <li>
                        <strong>Analytics Cookies</strong>: These collect aggregated data about how visitors use our
                        site. For instance, they track which pages are visited most frequently and whether users
                        encounter error messages. The information gathered is anonymous and is solely used for providing
                        statistical insights about our website’s overall performance.
                      </li>

                      <li>
                        <strong>Content Cookies</strong>: Used to perform tests on different aspects of our website,
                        these cookies help us ensure a consistent user experience. Like analytics cookies, they do not
                        identify individual users and are used to enhance website performance.
                      </li>

                      <li>
                        <strong>Functional Cookies</strong>: These cookies enable us to count visits and traffic
                        sources, helping us improve our website. They may also facilitate features like videos or live
                        chats. Functional cookies may come from us or third-party providers whose services are
                        integrated into our pages. If you disable these cookies, some features may not work properly.
                      </li>

                      <li>
                        <strong>Advertising Cookies</strong>: Set by our advertising partners, these cookies are used to
                        build profiles of your interests, allowing for relevant ads to be displayed on other sites. They
                        can also facilitate social sharing and comment posting on our website.
                      </li>
                    </ol>

                    <h3 class="wp-block-heading"><strong>Managing Cookies</strong></h3>

                    <p>
                      You can manage your cookie preferences through your browser settings. Most browsers allow you to
                      refuse cookies or alert you when a cookie is being sent. Please note that if you refuse cookies,
                      some features on our website may not function correctly.
                    </p>

                    <p>
                      For more information on cookies, you can visit<a href="http://www.cookiecentral.com/">
                        Cookie Central</a>.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>Server Log Files and Tracking Technologies</strong>
                    </h3>

                    <p>
                      In addition to cookies, we automatically gather information through server log files when you
                      visit our websites. This data includes your IP address, browser type, referring and exit web
                      pages, and operating system information. These logs help us understand and analyze user behavior
                      on our site.
                    </p>

                    <p>
                      Pixel tags and web beacons are additional technologies we utilize. These are tiny graphic images
                      embedded in web pages or emails that allow us to track specific actions, such as whether a user
                      has opened an email or visited a page. By leveraging these tools, we can measure engagement with
                      our communications and refine our promotional strategies.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>Purpose of Using Cookies and Similar Technologies</strong>
                    </h3>

                    <p>Our services utilize cookies and similar technologies for various reasons, including:</p>

                    <ul class="wp-block-list">
                      <li>
                        <strong>Authentication and Security</strong>: To log you into services, protect your security,
                        and assist in detecting spam or abuse.
                      </li>

                      <li>
                        <strong>Personalized Content</strong>: Cookies help remember your preferences, such as your
                        language or location, ensuring that the content you receive is relevant and tailored to you.
                      </li>

                      <li>
                        <strong>Analytics and Research</strong>: We analyze user interactions with our services to
                        optimize and enhance user experience. This data helps us understand how you engage with our
                        site, including how often you visit and which links you click.
                      </li>

                      <li>
                        <strong>Advertising</strong>: Our cookies assist in delivering relevant ads and measuring their
                        performance. By understanding your activity on our website and other platforms, we can show you
                        more pertinent advertisements and evaluate their effectiveness.
                      </li>
                    </ul>

                    <h3 class="wp-block-heading"><strong>Conclusion</strong></h3>

                    <p>
                      In summary, cookies and similar technologies play a vital role in enhancing your experience on our
                      website. By understanding how they work and the benefits they provide, you can make informed
                      choices about your online privacy and how you interact with our services. We encourage you to
                      review your cookie settings and preferences regularly to align with your comfort level regarding
                      privacy and data collection.
                    </p>
                  </div>
                </article>`,"./pages/faq.html":`<article id="pxl-post-251" class="post-251 page type-page status-publish hentry">
                  <div class="pxl-entry-content clearfix">
                    <div data-elementor-type="wp-page" data-elementor-id="251" class="elementor elementor-251">
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-dbc3156 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="dbc3156" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c4a85e3 pxl-column-none" data-id="c4a85e3" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-d64fd1d elementor-widget-mobile__width-inherit elementor-widget elementor-widget-pxl_heading" data-id="d64fd1d" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-d64fd1d-6173" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                        <span class="pxl-item--subtext">
                                          <span class="pxl-item--icon pxl-mr-1">
                                            <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                          </span>
                                          FREQUENTLY ASKED QUESTIONS
                                          <span class="pxl-item--subdivider"></span>
                                        </span>
                                      </div>

                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        Questions &amp; Answer
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-8758114 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="8758114" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a9b886 pxl-column-none" data-id="4a9b886" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-0435250 elementor-widget elementor-widget-pxl_accordion" data-id="0435250" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_accordion.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-accordion-wrap">
                                    <div class="pxl-accordion pxl-accordion1 style2 wow skewIn" data-wow-delay="ms">
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-41783ad">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q1. What is the IELTS score required for Canadian PR?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-41783ad" class="pxl-item--content">
                                          To qualify for Canadian Permanent Residency (PR), a minimum IELTS score of 6.0
                                          is generally required, which aligns with a Canadian Language Benchmark (CLB)
                                          level of 7. This baseline may vary depending on the immigration program and
                                          occupation. For skilled workers, achieving a CLB level of 7 or higher
                                          increases eligibility. The IELTS exam evaluates English proficiency across
                                          speaking, reading, writing, and listening. Each immigration program has
                                          different language requirements, so a higher score may be needed for certain
                                          professions and visa pathways.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-79220ad">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q2.Is there an age limit for applying for Canadian PR?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-79220ad" class="pxl-item--content">
                                          Yes, age is a key factor in Canada’s point-based immigration system.
                                          Applicants aged 18-35 typically receive the highest points, with a gradual
                                          decrease in points after age 35. For applicants aged 47 and older, no points
                                          are awarded for age, but they may still be eligible through alternative
                                          pathways, such as job offers from Canadian employers. Additionally, the
                                          Canadian Experience Class (CEC) program allows applicants with Canadian work
                                          experience to apply, regardless of age.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-4e2356e">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q3. What are the main requirements to immigrate to Canada?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-4e2356e" class="pxl-item--content">
                                          Canadian immigration has several requirements that applicants must meet,
                                          including:<br />
                                          Being 18 years or older<br />
                                          Meeting health and character standards (e.g., no criminal record)<br />
                                          Having sufficient funds to support yourself and your family in Canada<br />
                                          Achieving a minimum education level, such as a high school diploma<br />
                                          Meeting language proficiency requirements, often CLB 7 (IELTS 6.0)<br />
                                          Programs such as Express Entry, Provincial Nominee Program (PNP), and Canadian
                                          Experience Class (CEC) have unique requirements, so eligibility may differ
                                          based on the program you choose.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-470346e">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q4. Which professions are in demand in Canada?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-470346e" class="pxl-item--content">
                                          Canada has high demand for skilled workers, particularly in healthcare,
                                          technology, engineering, trades, and agriculture. Healthcare professionals,
                                          such as registered nurses, physicians, pharmacists, and occupational
                                          therapists, are especially needed due to growing demand across provinces. STEM
                                          (Science, Technology, Engineering, and Mathematics) professionals, including
                                          software engineers, data scientists, and mechanical engineers, are also in
                                          high demand. Additionally, skilled trades like electricians, plumbers, and
                                          welders are actively recruited, along with agriculture and transport roles.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-b8c9136">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q5. How long does it take to immigrate to Canada?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-b8c9136" class="pxl-item--content">
                                          The immigration process varies based on factors like the specific program,
                                          application completeness, and the processing times of Immigration, Refugees
                                          and Citizenship Canada (IRCC). Generally, it can take between six months to a
                                          year from submitting your Express Entry profile to receiving a PR visa. Steps
                                          include setting up a profile, receiving an Invitation to Apply (ITA), and
                                          submitting a complete application. Delays may occur if additional
                                          documentation or verifications are required.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-29f0143">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q6.How can I get a job offer from Canada?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-29f0143" class="pxl-item--content">
                                          To secure a job offer, start by researching Canada’s job market and aligning
                                          your skills with market demands. Building a Canadian-style resume and
                                          establishing an online presence on platforms like LinkedIn can improve your
                                          chances. Consider using Canada’s Job Bank, creating a Job Match account to
                                          connect with employers, and networking through professional groups and social
                                          media. Some job boards and company websites may also list openings
                                          specifically for international applicants. While a job offer is beneficial,
                                          it’s not required for many immigration pathways, such as Express Entry.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-ce5226b">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q7.Which Canadian cities are ideal for immigrants?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-ce5226b" class="pxl-item--content">
                                          Canada has numerous cities that are popular among immigrants, including:<br />
                                          Toronto, Ontario: Known for its multicultural community and economic
                                          opportunities, Toronto is a prime choice for newcomers.<br />
                                          Vancouver, British Columbia: With a strong tech industry, scenic surroundings,
                                          and a mild climate, Vancouver is consistently ranked as one of the world’s
                                          most livable cities.<br />
                                          Calgary, Alberta: Offering job opportunities, a family-friendly environment,
                                          and proximity to nature, Calgary is an attractive option for many
                                          immigrants.<br />
                                          Montreal, Quebec: Known for its culture, affordable living, and vibrant
                                          lifestyle, Montreal appeals to those who enjoy a blend of urban and cultural
                                          experiences.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-ceebe85">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q8.Do I need a job offer to immigrate to Canada?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-ceebe85" class="pxl-item--content">
                                          No, a job offer is not mandatory for many Canadian immigration programs.
                                          Programs such as Express Entry and the Provincial Nominee Program (PNP) allow
                                          applicants to apply without a job offer. However, having a job offer can boost
                                          your Comprehensive Ranking System (CRS) score in Express Entry, increasing
                                          your chances of receiving an Invitation to Apply (ITA). For some specific PNP
                                          streams, a job offer may be required to meet regional labor demands.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-8474530">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q9What documents are required for Canada immigration?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-8474530" class="pxl-item--content">
                                          The documents needed vary by immigration program but generally include:<br />
                                          A valid passport<br />
                                          Language proficiency test results (IELTS for English, TEF for French)<br />
                                          Educational Credential Assessment (ECA) for foreign degrees<br />
                                          Proof of work experience (employment letters, contracts)<br />
                                          Medical examination and police clearance certificate<br />
                                          Proof of funds to show you can financially support yourself and your family<br />
                                          Specific programs may have additional requirements, so it’s important to
                                          verify the documentation required for your chosen pathway.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-84ccad9">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q10 Why does Canada welcome immigrants?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-84ccad9" class="pxl-item--content">
                                          Canada’s immigration policy aims to address population growth and economic
                                          needs. As the Canadian population ages, immigrants play a crucial role in
                                          supporting the labor market and contributing to the economy. By welcoming
                                          immigrants, Canada ensures a steady influx of skilled workers, entrepreneurs,
                                          and professionals who help sustain vital industries, including healthcare,
                                          technology, and trade. This approach promotes Canada’s economic prosperity and
                                          social diversity, benefiting urban centers and rural areas alike.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-b295ff6">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q11 How can I find out which immigration program is right for me?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-b295ff6" class="pxl-item--content">
                                          With multiple immigration programs available, choosing the right one can be
                                          challenging. Each program has its own eligibility criteria, and factors such
                                          as age, education, work experience, and language skills affect eligibility.
                                          Consulting a Regulated Canadian Immigration Consultant (RCIC) or using online
                                          assessment tools can help clarify your options and identify the best pathway
                                          based on your profile. Common options include Express Entry, Provincial
                                          Nominee Program (PNP), Canadian Experience Class (CEC), and the Family
                                          Sponsorship Program
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-31757a0">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q12 Is there a refund policy if I’m ineligible for any immigration
                                            program?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-31757a0" class="pxl-item--content">
                                          Yes, many reputable immigration firms, including ours, offer a refund policy
                                          for the evaluation fee if you are deemed ineligible under all Canadian
                                          immigration programs. This provides peace of mind for applicants, ensuring
                                          that if no viable options are available, you won’t incur unnecessary costs. Be
                                          sure to inquire about refund policies before engaging an immigration
                                          consultant.
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-92f2bc2">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q13 What’s the cost of submitting an immigration application?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-92f2bc2" class="pxl-item--content">
                                          Application costs vary based on the immigration program. For example, the
                                          total cost of an Express Entry application, including biometrics, can range
                                          from CAD 1,325 to CAD 1,825 per person. Provincial Nominee Program (PNP) fees
                                          vary by province and can add an additional CAD 250 to CAD 1,500. These costs
                                          cover application processing, biometric fees, and other administrative
                                          charges.<br />
                                        </div>
                                      </div>
                                      <div class="pxl--item">
                                        <h5 class="pxl-item--title" data-target="#pxl_accordion-0435250-2523-4405b9c">
                                          <span class="pxl-title--icon">
                                            <i aria-hidden="true" class="fas fa-angle-down"></i>
                                          </span>
                                          <span class="pxl-title--text">Q14 Can I bring my family to Canada through the immigration process?</span>
                                        </h5>
                                        <div id="pxl_accordion-0435250-2523-4405b9c" class="pxl-item--content">
                                          Yes, Canada’s immigration programs allow applicants to include family members,
                                          such as spouses and dependent children, in their application. This family
                                          reunification approach enables your loved ones to come with you as permanent
                                          residents, enjoying access to healthcare, education, and employment
                                          opportunities. Family sponsorship programs also allow Canadian citizens or
                                          permanent residents to sponsor certain family members.<br />
                                          <br />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-40f7132 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="40f7132" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a94122a pxl-column-none" data-id="a94122a" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic"}'>
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-background-overlay"></div>

                              <div class="elementor-element elementor-element-776177b elementor-widget elementor-widget-pxl_heading" data-id="776177b" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-776177b-2569" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <h1 class="pxl-item--title" data-wow-delay="ms">Want to ask more Questions?</h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-0887c60 elementor-widget elementor-widget-pxl_contact_form" data-id="0887c60" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_contact_form.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-contact-form pxl-contact-form1 btn-w-auto" data-wow-delay="ms">
                                    <div class="wpcf7 no-js" id="wpcf7-f1068-p251-o1" lang="en-US" dir="ltr" data-wpcf7-id="1068">
                                      <div class="screen-reader-response">
                                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                                        <ul></ul>
                                      </div>
                                      <form action="faq.html?simply_static_page=21427#wpcf7-f1068-p251-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
                                        <fieldset class="hidden-fields-container">
                                          <input type="hidden" name="_wpcf7" value="1068" /><input type="hidden" name="_wpcf7_version" value="6.1.5" /><input type="hidden" name="_wpcf7_locale" value="en_US" /><input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1068-p251-o1" /><input type="hidden" name="_wpcf7_container_post" value="251" /><input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                        </fieldset>
                                        <div class="row">
                                          <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="pxl--item">
                                              <p>
                                                <span class="wpcf7-form-control-wrap" data-name="your-name"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name" value="" type="text" name="your-name" /></span>
                                              </p>
                                            </div>
                                          </div>
                                          <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="pxl--item">
                                              <p>
                                                <span class="wpcf7-form-control-wrap" data-name="your-phone"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Phone Number" value="" type="text" name="your-phone" /></span>
                                              </p>
                                            </div>
                                          </div>
                                          <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="pxl--item">
                                              <p>
                                                <span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="E-mail Address" value="" type="email" name="your-email" /></span>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="pxl--item">
                                          <p>
                                            <span class="wpcf7-form-control-wrap" data-name="your-message">
                                              <textarea cols="40" rows="10" maxlength="2000" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Question Here" name="your-message"></textarea>
                                            </span>
                                          </p>
                                        </div>
                                        <div class="pxl--item">
                                          <p>
                                            <button type="submit" class="wpcf7-submit btn btn-skew">
                                              <span>Submit</span>
                                            </button>
                                          </p>
                                        </div>
                                        <div class="wpcf7-response-output" aria-hidden="true"></div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </article>`,"./pages/footer.html":`<footer id="pxl-footer-elementor">
        <div class="footer-elementor-inner">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div data-elementor-type="wp-post" data-elementor-id="78" class="elementor elementor-78">
                  <section class="elementor-section elementor-top-section elementor-element elementor-element-3eb6055 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="3eb6055" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                    <div class="elementor-container elementor-column-gap-extended">
                      <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b6b62c1 pxl-column-none" data-id="b6b62c1" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic"}'>
                        <div class="elementor-widget-wrap elementor-element-populated">
                          <section class="elementor-section elementor-inner-section elementor-element elementor-element-cabad66 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="cabad66" data-element_type="section" data-e-type="section">
                            <div class="elementor-container elementor-column-gap-extended">
                              <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7f7e5f0 pxl-column-none" data-id="7f7e5f0" data-element_type="column" data-e-type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div class="elementor-element elementor-element-237c172 elementor-widget elementor-widget-pxl_heading" data-id="237c172" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                    <div class="elementor-widget-container">
                                      <div id="pxl-pxl_heading-237c172-6940" class="pxl-heading px-sub-title-default-style">
                                        <div class="pxl-heading--inner">
                                          <h2 class="pxl-item--title" data-wow-delay="ms">
                                            We are shaping your dream future
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-element elementor-element-5e6eb20 elementor-widget elementor-widget-pxl_text_editor" data-id="5e6eb20" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                    <div class="elementor-widget-container">
                                      <div class="pxl-text-editor">
                                        <div class="pxl-item--inner" data-wow-delay="ms">
                                          <p>
                                            Unlock your potential and step into a future designed by you. <br />With
                                            innovative solutions and boundless opportunities, the possibilities are
                                            endless. <br />Together, let’s shape the future you’ve always dreamed of.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-element elementor-element-23a0f0b elementor-widget elementor-widget-pxl_heading" data-id="23a0f0b" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                    <div class="elementor-widget-container">
                                      <div id="pxl-pxl_heading-23a0f0b-7122" class="pxl-heading px-sub-title-default-style">
                                        <div class="pxl-heading--inner">
                                          <h3 class="pxl-item--title" data-wow-delay="ms">
                                            OUR VISA IMMIGRATION SERVICES JKS IMMIGRATION
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-element elementor-element-59e975e elementor-widget elementor-widget-pxl_button" data-id="59e975e" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_button.default">
                                    <div class="elementor-widget-container">
                                      <div id="pxl-pxl_button-59e975e-9609" class="pxl-button" data-wow-delay="ms">
                                        <a href="/contact" class="btn pxl-icon-active btn-gradient pxl-icon--left" data-wow-delay="ms">
                                          <span class="pxl--btn-text" data-text="Get Consultancy">
                                            Get Consultancy
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-65cf6de pxl-column-none" data-id="65cf6de" data-element_type="column" data-e-type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div class="elementor-element elementor-element-197a884 elementor-widget-laptop__width-initial elementor-widget__width-initial elementor-widget elementor-widget-pxl_heading" data-id="197a884" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                    <div class="elementor-widget-container">
                                      <div id="pxl-pxl_heading-197a884-4412" class="pxl-heading px-sub-title-default-style">
                                        <div class="pxl-heading--inner">
                                          <h4 class="pxl-item--title" data-wow-delay="ms">Explore</h4>

                                          <div class="px-divider--wrap">
                                            <div class="px-title--divider px-title--divider4"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-element elementor-element-2a394ea elementor-widget elementor-widget-pxl_link" data-id="2a394ea" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_link.default">
                                    <div class="elementor-widget-container">
                                      <ul id="pxl-link-pxl_link-2a394ea-3574" class="pxl-link pxl-link-l1 style-default type-vertical" data-wow-delay="ms">
                                        <li>
                                          <a href="/" class="">
                                            <i aria-hidden="true" class="far fa-circle"></i>
                                            <span>Home</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/about" class="">
                                            <i aria-hidden="true" class="far fa-circle"></i>
                                            <span>About Us</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/contact" class="">
                                            <i aria-hidden="true" class="far fa-circle"></i>
                                            <span>Contact Us</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6f8d3eb pxl-column-none" data-id="6f8d3eb" data-element_type="column" data-e-type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div class="elementor-element elementor-element-3b8974f elementor-widget elementor-widget-pxl_heading" data-id="3b8974f" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                    <div class="elementor-widget-container">
                                      <div id="pxl-pxl_heading-3b8974f-7566" class="pxl-heading px-sub-title-default-style">
                                        <div class="pxl-heading--inner">
                                          <h4 class="pxl-item--title" data-wow-delay="ms">Services</h4>

                                          <div class="px-divider--wrap">
                                            <div class="px-title--divider px-title--divider4"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-element elementor-element-411034a elementor-widget elementor-widget-pxl_link" data-id="411034a" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_link.default">
                                    <div class="elementor-widget-container">
                                      <ul id="pxl-link-pxl_link-411034a-1033" class="pxl-link pxl-link-l1 style-default type-vertical" data-wow-delay="ms">
                                        <li>
                                          <a href="/immigration" class="">
                                            <i aria-hidden="true" class="far fa-circle"></i>
                                            <span>All Services</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/immigration/express-entry" class="">
                                            <i aria-hidden="true" class="far fa-circle"></i>
                                            <span>Express Entry</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/visas/super-visa" class="">
                                            <i aria-hidden="true" class="far fa-circle"></i>
                                            <span>Super Visa</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/visas/work-visa" class="">
                                            <i aria-hidden="true" class="far fa-circle"></i>
                                            <span>Work in Canada</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/visas/tourist-visa" class="">
                                            <i aria-hidden="true" class="far fa-circle"></i>
                                            <span>Tourist Visa</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-52f4cd3 jks-footer-contact pxl-column-none" data-id="52f4cd3" data-element_type="column" data-e-type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div class="jks-footer-contact-panel" role="region" aria-label="Contact">
                                    <div class="elementor-element elementor-element-jksfc-h elementor-widget elementor-widget-pxl_heading" data-id="jksfc-h" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                      <div class="elementor-widget-container">
                                        <div id="pxl-pxl_heading-jksfc-h" class="pxl-heading px-sub-title-default-style">
                                          <div class="pxl-heading--inner">
                                            <h4 class="pxl-item--title" data-wow-delay="ms">Contact</h4>
                                            <div class="px-divider--wrap">
                                              <div class="px-title--divider px-title--divider4"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="elementor-element elementor-element-7ec2392 elementor-widget elementor-widget-pxl_contact_info" data-id="7ec2392" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_contact_info.default">
                                      <div class="elementor-widget-container">
                                        <div class="pxl-contact-info pxl-contact-info4 wow skewIn" data-wow-delay="ms">
                                          <div class="pxl-item--inner">
                                            <div class="pxl-item--icon pxl-mr-14 field-dflex">
                                              <i aria-hidden="true" class="far fa-envelope"></i>
                                            </div>
                                            <div class="pxl-item--meta field-dflex_col">
                                              <a href="mailto:jksimmigration@gmail.com" class="pxl-item--title el-empty">jksimmigration@gmail.com</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="elementor-element elementor-element-2018fa8 elementor-widget elementor-widget-pxl_contact_info" data-id="2018fa8" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_contact_info.default">
                                      <div class="elementor-widget-container">
                                        <div class="pxl-contact-info pxl-contact-info4 wow skewIn" data-wow-delay="ms">
                                          <div class="pxl-item--inner">
                                            <div class="pxl-item--icon pxl-mr-14 field-dflex">
                                              <i aria-hidden="true" class="flaticon flaticon-call"></i>
                                            </div>
                                            <div class="pxl-item--meta field-dflex_col">
                                              <a href="tel:+15147060130" class="pxl-item--title el-empty">+1 (514) 706 0130</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="elementor-element elementor-element-32486db elementor-widget elementor-widget-pxl_icon" data-id="32486db" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon.default">
                                      <div class="elementor-widget-container">
                                        <div class="pxl-icon-list pxl-icon1 style-box2 wow skewIn" data-wow-delay="ms">
                                          <a class="elementor-repeater-item-5ec30e2 ps-top" href="https://www.facebook.com/" rel="noopener noreferrer">
                                            <i aria-hidden="true" class="fab fa-facebook"></i>
                                          </a>
                                          <a class="elementor-repeater-item-7f71dd3 ps-top" href="https://www.instagram.com/jksimmigration" rel="noopener noreferrer">
                                            <i aria-hidden="true" class="fab fa-instagram"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="elementor-section elementor-top-section elementor-element elementor-element-af19702 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="af19702" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                    <div class="elementor-container elementor-column-gap-extended">
                      <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4b8ebb5 pxl-column-none" data-id="4b8ebb5" data-element_type="column" data-e-type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                          <section class="elementor-section elementor-inner-section elementor-element elementor-element-89bae4d elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="89bae4d" data-element_type="section" data-e-type="section">
                            <div class="elementor-container elementor-column-gap-default">
                              <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8e899e9 pxl-column-none" data-id="8e899e9" data-element_type="column" data-e-type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div class="elementor-element elementor-element-dbe789b elementor-widget__width-initial elementor-widget-mobile_extra__width-auto elementor-widget-tablet_extra__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-pxl_text_editor" data-id="dbe789b" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                    <div class="elementor-widget-container">
                                      <div class="pxl-text-editor">
                                        <div class="pxl-item--inner" data-wow-delay="ms">
                                          <p>@Copyright By JKS Immigration</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0aa4b4b pxl-column-none" data-id="0aa4b4b" data-element_type="column" data-e-type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div class="elementor-element elementor-element-40df132 elementor-icon-list--layout-inline elementor-mobile-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="40df132" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                                    <div class="elementor-widget-container">
                                      <ul class="elementor-icon-list-items elementor-inline-items">
                                        <li class="elementor-icon-list-item elementor-inline-item">
                                          <a href="/legal/terms">
                                            <span class="elementor-icon-list-text">Terms &amp; Condition</span>
                                          </a>
                                        </li>
                                        <li class="elementor-icon-list-item elementor-inline-item">
                                          <a href="/legal/cookies">
                                            <span class="elementor-icon-list-text">Cookie Policy</span>
                                          </a>
                                        </li>
                                        <li class="elementor-icon-list-item elementor-inline-item">
                                          <a href="/legal/privacy">
                                            <span class="elementor-icon-list-text">Privacy Policy</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>`,"./pages/home.html":`<article id="pxl-post-217" class="post-217 page type-page status-publish hentry">
                  <div class="pxl-entry-content clearfix">
                    <div data-elementor-type="wp-page" data-elementor-id="217" class="elementor elementor-217">
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-ce4cca1 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-full-content-with-space-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="ce4cca1" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-255fa6e pxl-column-none" data-id="255fa6e" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-8faa403 elementor-widget elementor-widget-pxl_slider" data-id="8faa403" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_slider.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-swiper-sliders pxl-element-slider pxl-swiper-sliders1 pxl-swiper-nogap pxl-swiper-show-pagination" data-slider-mode="fade">
                                    <div class="pxl-carousel-inner">
                                      <div class="pxl-swiper-container" dir="ltr" data-settings='{"slide_direction":"horizontal","slide_percolumn":"1","slide_mode":"fade","slides_to_show":"1","slides_to_show_xxl":"1","slides_to_show_lg":"1","slides_to_show_md":"1","slides_to_show_sm":"1","slides_to_show_xs":"1","slides_to_scroll":"1","arrow":"false","pagination":"true","pagination_type":"bullets","autoplay":"true","pause_on_hover":"","pause_on_interaction":"true","delay":5000,"loop":"true","speed":500}'>
                                        <div class="pxl-swiper-wrapper">
                                          <div class="pxl-swiper-slide" id="pxl_slider-8faa403-7982-d66d943" data-jks-hero-slide="toronto">
                                            <div class="pxl-slider--inner elementor-repeater-item-d66d943">
                                              <div class="pxl-slider--mainimage jks-hero-slide-toronto wow">
                                                <div class="pxl-slider--image bg-image" style="
                                                    background-image: url(/images/jks-home-hero-toronto-skyline.jpg);
                                                  "></div>
                                              </div>

                                              <div class="pxl-slider--content content-align-flex-start jks-hero-slide1-content">
                                                <div data-elementor-type="wp-post" data-elementor-id="2802" class="elementor elementor-2802 jks-hero-slide1-elementor">
                                                  <section class="elementor-section elementor-top-section elementor-element elementor-element-102bf8a elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none jks-hero-slide1-section" data-id="102bf8a" data-element_type="section" data-e-type="section">
                                                    <div class="elementor-container elementor-column-gap-default">
                                                      <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-76250db pxl-column-none jks-hero-slide1-col" data-id="76250db" data-element_type="column" data-e-type="column">
                                                        <div class="elementor-widget-wrap elementor-element-populated jks-hero-slide1-widgets">
                                                          <div class="elementor-element elementor-element-5ab1ef8 elementor-widget elementor-widget-pxl_heading" data-id="5ab1ef8" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                                            <div class="elementor-widget-container">
                                                              <div id="pxl-pxl_heading-5ab1ef8-8192" class="pxl-heading px-sub-title-box2-style jks-hero-heading--slogan-only">
                                                                <div class="pxl-heading--inner">
                                                                  <h2 class="pxl-item--title wow skewIn jks-hero-slogan jks-hero-slogan--slide1" data-wow-delay="150ms">
                                                                    <span class="jks-hero-slogan__line">Immigrate to Canada</span><br />
                                                                    <span class="jks-hero-slogan__line jks-hero-slogan__line--2">with a team you can trust.</span>
                                                                  </h2>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="elementor-element elementor-element-e8f9a116 elementor-widget elementor-widget-pxl_text_editor jks-hero-slide1-cta-widget" data-id="e8f9a116" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                                            <div class="elementor-widget-container">
                                                              <div class="pxl-text-editor">
                                                                <div class="jks-hero-cta-combo wow skewIn" data-wow-delay="320ms" role="group" aria-label="JKS Immigration and contact">
                                                                  <div class="jks-hero-cta-combo__brand">
                                                                    <img src="/images/wp-content__uploads__2023__11__WhatsApp-Image-2025-06-14-at-6.37.54-PM.jpeg" width="56" height="56" class="jks-hero-cta-combo__logo" alt="" decoding="async" />
                                                                    <span class="jks-hero-cta-combo__name">JKS Immigration</span>
                                                                  </div>
                                                                  <div class="jks-hero-cta-combo__btn">
                                                                    <div id="pxl-pxl_button-e8f9a116-6275" class="pxl-button">
                                                                      <a href="/contact" class="btn pxl-icon-active btn-default wow skewIn pxl-icon--left jks-hero-slide1-contact-btn">
                                                                        <span class="pxl--btn-text" data-text="Contact Us">Contact Us</span>
                                                                        <span class="pxl--text-wrap">
                                                                          <span class="pxl--btn-text1">Contact Us</span>
                                                                          <span class="pxl--btn-text2">Contact Us</span>
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide" id="pxl_slider-8faa403-7982-1aeb238" data-jks-hero-slide="vancouver">
                                            <div class="pxl-slider--inner elementor-repeater-item-1aeb238">
                                              <div class="pxl-slider--mainimage jks-hero-slide-vancouver wow">
                                                <div class="pxl-slider--image bg-image" style="
                                                    background-image: url(/images/jks-home-hero-vancouver-cityscape.jpg);
                                                  "></div>
                                              </div>

                                              <div class="pxl-slider--content content-align-flex-start">
                                                <div data-elementor-type="wp-post" data-elementor-id="3005" class="elementor elementor-3005">
                                                  <section class="elementor-section elementor-top-section elementor-element elementor-element-102bf8a elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="102bf8a" data-element_type="section" data-e-type="section">
                                                    <div class="elementor-container elementor-column-gap-default">
                                                      <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-76250db pxl-column-none" data-id="76250db" data-element_type="column" data-e-type="column">
                                                        <div class="elementor-widget-wrap elementor-element-populated">
                                                          <div class="elementor-element elementor-element-b1a130e elementor-widget elementor-widget-pxl_heading" data-id="b1a130e" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                                            <div class="elementor-widget-container">
                                                              <div id="pxl-pxl_heading-b1a130e-8511" class="pxl-heading px-sub-title-box2-style jks-hero-heading--slogan-only">
                                                                <div class="pxl-heading--inner">
                                                                  <h2 class="pxl-item--title wow skewIn jks-hero-slogan" data-wow-delay="150ms">
                                                                    Build your future in Canada—study, work, and grow.
                                                                  </h2>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="elementor-element elementor-element-45bbb06 elementor-widget elementor-widget-pxl_text_editor" data-id="45bbb06" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                                            <div class="elementor-widget-container">
                                                              <div class="pxl-text-editor">
                                                                <div class="pxl-item--inner wow skewIn jks-hero-subline" data-wow-delay="280ms">
                                                                  <h3 class="jks-hero-slogan-sub">
                                                                    Eengineering, business, health, science, IT, Travel, and more.
                                                                  </h3>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="elementor-element elementor-element-e8f9a117 elementor-widget elementor-widget-pxl_text_editor jks-hero-slide-cta-widget jks-hero-slide-cta-widget--align-start" data-id="e8f9a117" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                                            <div class="elementor-widget-container">
                                                              <div class="pxl-text-editor">
                                                                <div class="jks-hero-cta-combo wow skewIn" data-wow-delay="400ms" role="group" aria-label="JKS Immigration and contact">
                                                                  <div class="jks-hero-cta-combo__brand">
                                                                    <img src="/images/wp-content__uploads__2023__11__WhatsApp-Image-2025-06-14-at-6.37.54-PM.jpeg" width="56" height="56" class="jks-hero-cta-combo__logo" alt="" decoding="async" />
                                                                    <span class="jks-hero-cta-combo__name">JKS Immigration</span>
                                                                  </div>
                                                                  <div class="jks-hero-cta-combo__btn">
                                                                    <div id="pxl-pxl_button-e8f9a117-6275" class="pxl-button">
                                                                      <a href="/contact" class="btn pxl-icon-active btn-default wow skewIn pxl-icon--left">
                                                                        <span class="pxl--btn-text" data-text="Contact Us">Contact Us</span>
                                                                        <span class="pxl--text-wrap">
                                                                          <span class="pxl--btn-text1">Contact Us</span>
                                                                          <span class="pxl--btn-text2">Contact Us</span>
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide" id="pxl_slider-8faa403-7982-ad40138" data-jks-hero-slide="canada">
                                            <div class="pxl-slider--inner elementor-repeater-item-ad40138">
                                              <div class="pxl-slider--mainimage jks-hero-slide-canada wow">
                                                <div class="pxl-slider--image bg-image" style="
                                                    background-image: url(/images/jks-home-hero-slide3-canada.jpg);
                                                  "></div>
                                              </div>

                                              <div class="pxl-slider--content content-align-flex-start">
                                                <div data-elementor-type="wp-post" data-elementor-id="3004" class="elementor elementor-3004">
                                                  <section class="elementor-section elementor-top-section elementor-element elementor-element-fd4f87e elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="fd4f87e" data-element_type="section" data-e-type="section">
                                                    <div class="elementor-container elementor-column-gap-default">
                                                      <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1dadd5e pxl-column-none" data-id="1dadd5e" data-element_type="column" data-e-type="column">
                                                        <div class="elementor-widget-wrap elementor-element-populated">
                                                          <div class="elementor-element elementor-element-ce91fc5 elementor-widget elementor-widget-pxl_heading" data-id="ce91fc5" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                                            <div class="elementor-widget-container">
                                                              <div id="pxl-pxl_heading-ce91fc5-8724" class="pxl-heading px-sub-title-box2-style jks-hero-heading--slogan-only">
                                                                <div class="pxl-heading--inner">
                                                                  <h2 class="pxl-item--title wow skewIn jks-hero-slogan" data-wow-delay="150ms">
                                                                    Reunite with your family in Canada.
                                                                  </h2>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="elementor-element elementor-element-1d43af9 elementor-widget elementor-widget-pxl_text_editor" data-id="1d43af9" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                                            <div class="elementor-widget-container">
                                                              <div class="pxl-text-editor">
                                                                <div class="pxl-item--inner wow skewIn jks-hero-subline" data-wow-delay="280ms">
                                                                  <h3 class="jks-hero-slogan-sub">
                                                                    Sponsorship pathways for parents, grandparents, spouses, and loved ones.
                                                                  </h3>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="elementor-element elementor-element-e8f9a118 elementor-widget elementor-widget-pxl_text_editor jks-hero-slide-cta-widget jks-hero-slide-cta-widget--align-start" data-id="e8f9a118" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                                            <div class="elementor-widget-container">
                                                              <div class="pxl-text-editor">
                                                                <div class="jks-hero-cta-combo wow skewIn" data-wow-delay="400ms" role="group" aria-label="JKS Immigration and contact">
                                                                  <div class="jks-hero-cta-combo__brand">
                                                                    <img src="/images/wp-content__uploads__2023__11__WhatsApp-Image-2025-06-14-at-6.37.54-PM.jpeg" width="56" height="56" class="jks-hero-cta-combo__logo" alt="" decoding="async" />
                                                                    <span class="jks-hero-cta-combo__name">JKS Immigration</span>
                                                                  </div>
                                                                  <div class="jks-hero-cta-combo__btn">
                                                                    <div id="pxl-pxl_button-e8f9a118-6275" class="pxl-button">
                                                                      <a href="/contact" class="btn pxl-icon-active btn-default wow skewIn pxl-icon--left">
                                                                        <span class="pxl--btn-text" data-text="Contact Us">Contact Us</span>
                                                                        <span class="pxl--text-wrap">
                                                                          <span class="pxl--btn-text1">Contact Us</span>
                                                                          <span class="pxl--btn-text2">Contact Us</span>
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="pxl-swiper-pagination style-vertical">
                                      <div class="pxl-swiper-dots pxl-swiper-dots style-6 position-left pxl-style-vertical"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-3d3e578 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="3d3e578" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cae74d5 pxl-column-none" data-id="cae74d5" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-b9c1552 elementor-widget elementor-widget-pxl_heading" data-id="b9c1552" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-b9c1552-8736" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                        <span class="pxl-item--subtext">
                                          <span class="pxl-item--icon pxl-mr-1">
                                            <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                          </span>
                                          ABOUT OUR JKS IMMIGRATION
                                          <span class="pxl-item--subdivider"></span>
                                        </span>
                                      </div>

                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        We help Making your dream into Reality
                                      </h2>

                                      <div class="px-divider--wrap">
                                        <div class="px-title--divider px-title--divider1">
                                          <span></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-d451680 elementor-widget elementor-widget-pxl_text_editor" data-id="d451680" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-text-editor">
                                    <div class="pxl-item--inner wow skewIn" data-wow-delay="300ms">
                                      <p>
                                        At JKS IMMIGRATION, we are dedicated to turning your dreams into reality.Through
                                        personalized strategies, expert guidance, and innovative solutions, we empower
                                        you to achieve your goals.<br />Your vision is within reach – let us help you
                                        bring it to life, step by step.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-12ed465 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="12ed465" data-element_type="section" data-e-type="section">
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3dc7478 pxl-column-none" data-id="3dc7478" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-2a99a00 elementor-widget__width-auto elementor-widget elementor-widget-pxl_icon_box" data-id="2a99a00" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box2 wow skewIn" data-wow-delay="500ms">
                                            <div class="pxl-item--inner">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-visa"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Transparent Process</h5>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="elementor-element elementor-element-85dca0b elementor-widget__width-auto elementor-widget elementor-widget-pxl_icon_box" data-id="85dca0b" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box2 wow skewIn" data-wow-delay="500ms">
                                            <div class="pxl-item--inner">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-passport"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Expert Guidance</h5>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <div class="elementor-element elementor-element-2fa12d7 elementor-widget elementor-widget-pxl_list" data-id="2fa12d7" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_list.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-list pxl-list1 style-default">
                                    <div class="pxl--item wow skewIn" data-wow-delay="700ms">
                                      <div class="pxl-item--icon pxl-mr-8">
                                        <i aria-hidden="true" class="flaticon flaticon-check-mark"></i>
                                      </div>
                                      <div class="pxl-item--text el-empty">
                                        Fastest Visa form processing with expert immigration agents
                                      </div>
                                    </div>
                                    <div class="pxl--item wow skewIn" data-wow-delay="700ms">
                                      <div class="pxl-item--icon pxl-mr-8">
                                        <i aria-hidden="true" class="flaticon flaticon-check-mark"></i>
                                      </div>
                                      <div class="pxl-item--text el-empty">
                                        Affiliation with Educational Institutions from over the world
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-330a45b elementor-widget elementor-widget-pxl_button" data-id="330a45b" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_button.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_button-330a45b-9321" class="pxl-button wow skewIn" data-wow-delay="900ms">
                                    <a href="/contact" class="btn pxl-icon-active btn-gradient wow skewIn pxl-icon--left" data-wow-delay="900ms">
                                      <span class="pxl--btn-text" data-text="Get Started"> Get Started </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7461b2c pxl-column-none" data-id="7461b2c" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-0f99502 elementor-widget elementor-widget-pxl_banner_box" data-id="0f99502" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_banner_box.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-banner pxl-banner3 wow skewIn" data-wow-delay="ms">
                                    <div class="pxl-banner-inner">
                                      <div class="pxl-item--image">
                                        <div class="pxl-item--imgprimary" data-wow-delay="ms">
                                          <img decoding="async" width="476" height="525" src="/images/wp-content__uploads__2023__11__banner_primary_img.jpg" class="attachment-full" alt="" />
                                        </div>

                                        <div class="pxl-item--imgsecondary">
                                          <img decoding="async" width="310" height="415" src="/images/wp-content__uploads__2023__11__banner_secondary_img.jpg" class="attachment-full" alt="" />
                                        </div>
                                        <div class="wrap-svg">
                                          <i aria-hidden="true" class="flaticon flaticon-plane"></i>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="297" height="175" viewbox="0 0 297 175" fill="none">
                                            <path d="M1.28664 174.069C0.743831 174.069 0.255301 173.689 0.173879 173.12C0.0653162 172.497 0.472426 171.901 1.09666 171.792C3.10507 171.413 5.41202 171.007 7.90896 170.519C8.53319 170.411 9.13028 170.817 9.23885 171.413C9.34741 172.036 8.96744 172.633 8.34321 172.741C5.81913 173.229 3.53931 173.635 1.50377 174.014C1.42235 174.069 1.36807 174.069 1.28664 174.069ZM14.9112 171.44C14.3956 171.44 13.907 171.061 13.7985 170.546C13.6628 169.923 14.0699 169.327 14.667 169.191C16.8111 168.731 19.0637 168.243 21.425 167.674C22.0492 167.538 22.6463 167.918 22.8092 168.514C22.9449 169.137 22.5649 169.733 21.9678 169.896C19.6066 170.438 17.3267 170.953 15.1826 171.413C15.0741 171.44 14.9927 171.44 14.9112 171.44ZM28.4001 168.27C27.8844 168.27 27.4231 167.918 27.2874 167.43C27.1245 166.807 27.5045 166.211 28.1016 166.048C30.2728 165.479 32.4984 164.883 34.751 164.233C35.3481 164.07 35.9995 164.422 36.1623 165.018C36.3252 165.615 35.9995 166.265 35.3753 166.427C33.0954 167.078 30.8428 167.701 28.6715 168.27C28.5901 168.27 28.5087 168.27 28.4001 168.27ZM41.7262 164.449C41.2376 164.449 40.8034 164.151 40.6405 163.664C40.4506 163.068 40.7762 162.417 41.3733 162.228C43.5174 161.55 45.7158 160.819 47.9142 160.06C48.5113 159.843 49.1627 160.168 49.3798 160.764C49.5969 161.36 49.2713 162.011 48.6742 162.228C46.4486 163.013 44.2502 163.745 42.079 164.422C41.9433 164.422 41.8347 164.449 41.7262 164.449ZM54.7808 159.87C54.3194 159.87 53.8852 159.599 53.7223 159.139C53.5052 158.542 53.7766 157.892 54.3737 157.675C56.4907 156.862 58.6076 155.995 60.7517 155.101C61.3217 154.857 62.0002 155.128 62.2445 155.697C62.4887 156.266 62.2173 156.944 61.6474 157.188C59.4761 158.109 57.332 158.976 55.1879 159.789C55.0522 159.843 54.9165 159.87 54.7808 159.87ZM67.5098 154.478C67.0755 154.478 66.6684 154.234 66.4784 153.828C66.207 153.259 66.4513 152.581 67.0212 152.31C69.0839 151.362 71.1466 150.332 73.1821 149.276C73.7521 148.977 74.4306 149.221 74.7292 149.763C75.0277 150.332 74.8106 151.01 74.2406 151.308C72.1508 152.365 70.0881 153.394 67.9983 154.37C67.8354 154.424 67.6726 154.478 67.5098 154.478ZM79.8044 148.137C79.3973 148.137 79.0174 147.921 78.8002 147.568C78.5017 147.027 78.6917 146.322 79.2345 146.024C81.2158 144.913 83.1699 143.721 85.124 142.501C85.6668 142.176 86.3725 142.339 86.6982 142.854C87.0238 143.396 86.861 144.1 86.3453 144.425C84.3641 145.672 82.3828 146.837 80.3473 147.975C80.1844 148.083 79.9944 148.137 79.8044 148.137ZM91.5292 140.822C91.1764 140.822 90.8235 140.659 90.5793 140.334C90.2264 139.819 90.3621 139.114 90.8778 138.735C92.7505 137.434 94.5961 136.107 96.4145 134.698C96.903 134.318 97.6358 134.4 98.0158 134.915C98.3958 135.402 98.3143 136.134 97.7987 136.513C95.9531 137.922 94.0533 139.304 92.1534 140.605C91.9906 140.74 91.7463 140.822 91.5292 140.822ZM102.494 132.422C102.168 132.422 101.843 132.286 101.626 132.015C101.218 131.527 101.273 130.823 101.761 130.417C103.498 128.926 105.208 127.409 106.864 125.837C107.325 125.404 108.031 125.431 108.465 125.891C108.899 126.352 108.872 127.057 108.411 127.49C106.728 129.062 104.991 130.633 103.227 132.151C103.037 132.313 102.765 132.422 102.494 132.422ZM112.509 122.911C112.237 122.911 111.939 122.802 111.722 122.613C111.26 122.179 111.233 121.448 111.668 121.014C113.242 119.361 114.762 117.627 116.2 115.893C116.607 115.405 117.313 115.351 117.801 115.757C118.29 116.164 118.344 116.868 117.937 117.356C116.444 119.117 114.897 120.879 113.296 122.559C113.133 122.802 112.835 122.911 112.509 122.911ZM121.357 112.316C121.112 112.316 120.895 112.235 120.678 112.099C120.163 111.72 120.054 111.016 120.434 110.501C121.791 108.685 123.094 106.789 124.315 104.892C124.668 104.377 125.374 104.214 125.889 104.567C126.432 104.919 126.568 105.623 126.215 106.138C124.966 108.089 123.609 110.013 122.252 111.856C122.062 112.154 121.71 112.316 121.357 112.316ZM183.916 102.86H182.532C181.907 102.86 181.392 102.345 181.392 101.722C181.392 101.098 181.907 100.584 182.532 100.584H183.889C185.707 100.584 187.553 100.529 189.344 100.421C189.941 100.367 190.511 100.855 190.538 101.505C190.565 102.128 190.104 102.67 189.453 102.697C187.661 102.805 185.816 102.86 183.916 102.86ZM175.638 102.67C175.611 102.67 175.611 102.67 175.584 102.67C173.25 102.562 170.915 102.399 168.636 102.209C168.011 102.155 167.55 101.613 167.604 100.963C167.659 100.34 168.229 99.8791 168.853 99.9333C171.105 100.123 173.385 100.285 175.692 100.394C176.316 100.421 176.805 100.963 176.778 101.586C176.751 102.182 176.235 102.67 175.638 102.67ZM196.346 102.047C195.776 102.047 195.288 101.64 195.206 101.044C195.125 100.421 195.559 99.852 196.183 99.7707C198.409 99.4726 200.662 99.0933 202.914 98.6597C203.539 98.5513 204.136 98.9307 204.271 99.5539C204.407 100.177 204 100.773 203.376 100.909C201.069 101.369 198.762 101.749 196.482 102.047C196.428 102.047 196.401 102.047 196.346 102.047ZM161.878 101.451C161.823 101.451 161.769 101.451 161.742 101.451C159.408 101.153 157.101 100.8 154.848 100.394C154.224 100.285 153.817 99.6894 153.925 99.0662C154.034 98.443 154.631 98.0365 155.255 98.1449C157.481 98.5242 159.734 98.8765 162.041 99.1746C162.665 99.2558 163.099 99.8249 163.018 100.448C162.936 101.044 162.42 101.451 161.878 101.451ZM128.875 100.746C128.685 100.746 128.495 100.692 128.305 100.611C127.762 100.313 127.572 99.6081 127.87 99.0662C128.82 97.3862 129.743 95.652 130.612 93.9179C129.743 93.5927 128.875 93.2676 128.033 92.9153C127.436 92.6715 127.165 92.0211 127.409 91.425C127.653 90.8289 128.305 90.558 128.902 90.8018C130.992 91.6418 133.163 92.4276 135.334 93.1592C135.931 93.3489 136.257 93.9992 136.067 94.5953C135.877 95.1914 135.226 95.5166 134.628 95.3269C134.031 95.1372 133.434 94.9204 132.81 94.7037C131.887 96.5462 130.91 98.4159 129.906 100.204C129.662 100.556 129.255 100.746 128.875 100.746ZM209.889 99.3371C209.374 99.3371 208.912 99.012 208.777 98.4972C208.614 97.901 208.967 97.2507 209.591 97.0881C211.762 96.492 213.961 95.8417 216.132 95.1101C216.729 94.9204 217.38 95.2456 217.57 95.8417C217.76 96.4378 217.462 97.0881 216.837 97.2778C214.612 98.0094 212.386 98.6868 210.161 99.2829C210.079 99.31 209.998 99.3371 209.889 99.3371ZM148.253 99.0662C148.172 99.0662 148.09 99.0662 148.009 99.0391C145.702 98.5242 143.449 97.9552 141.251 97.332C140.654 97.1694 140.301 96.5462 140.464 95.923C140.627 95.3269 141.251 94.9746 141.875 95.1372C144.046 95.7333 146.272 96.3024 148.524 96.7901C149.149 96.9256 149.529 97.5488 149.393 98.1449C149.257 98.7139 148.769 99.0662 148.253 99.0662ZM222.998 94.9746C222.537 94.9746 222.103 94.7037 221.94 94.243C221.696 93.6469 221.994 92.9966 222.564 92.7527C224.681 91.9128 226.771 91.0186 228.861 90.0431C229.431 89.7721 230.109 90.0431 230.381 90.6121C230.652 91.1812 230.381 91.8586 229.811 92.1295C227.694 93.105 225.55 94.0263 223.405 94.8663C223.27 94.9475 223.134 94.9746 222.998 94.9746ZM122.09 90.2328C121.927 90.2328 121.764 90.2057 121.601 90.1244C119.457 89.1218 117.367 88.038 115.386 86.927C114.843 86.629 114.626 85.9245 114.952 85.3826C115.25 84.8406 115.956 84.6239 116.499 84.949C118.453 86.0329 120.488 87.0896 122.578 88.0651C123.148 88.3361 123.392 89.0135 123.121 89.5825C122.931 89.9889 122.524 90.2328 122.09 90.2328ZM235.537 89.2031C235.13 89.2031 234.723 88.9864 234.533 88.5799C234.235 88.0109 234.452 87.3335 235.022 87.0354C237.057 85.9787 239.066 84.8948 241.047 83.7568C241.59 83.4316 242.295 83.6213 242.594 84.1903C242.92 84.7322 242.73 85.4368 242.16 85.7348C240.151 86.8999 238.116 88.0109 236.053 89.0677C235.917 89.176 235.727 89.2031 235.537 89.2031ZM134.873 88.3632C134.737 88.3632 134.574 88.3361 134.439 88.2819C133.869 88.038 133.57 87.3877 133.814 86.7916C134.683 84.7052 135.47 82.5646 136.23 80.3969C136.447 79.8007 137.098 79.4756 137.668 79.6923C138.265 79.9091 138.591 80.5323 138.374 81.1285C137.614 83.3232 136.8 85.518 135.931 87.6315C135.741 88.0922 135.334 88.3632 134.873 88.3632ZM110.039 83.5129C109.822 83.5129 109.605 83.4587 109.415 83.3232C107.434 82.0226 105.534 80.6678 103.715 79.2588C103.227 78.8795 103.118 78.1479 103.525 77.6601C103.905 77.1724 104.638 77.064 105.127 77.4705C106.891 78.8524 108.763 80.1801 110.663 81.4265C111.179 81.7788 111.342 82.4833 110.989 82.9981C110.772 83.3232 110.419 83.5129 110.039 83.5129ZM247.533 82.3478C247.153 82.3478 246.774 82.1581 246.556 81.8059C246.231 81.2639 246.394 80.5594 246.909 80.2343C248.836 79.0149 250.763 77.7685 252.663 76.495C253.179 76.1427 253.884 76.2782 254.237 76.793C254.59 77.3079 254.454 78.0124 253.939 78.3646C252.012 79.6653 250.085 80.9388 248.103 82.1581C247.968 82.2936 247.751 82.3478 247.533 82.3478ZM139.351 75.3298C139.242 75.3298 139.134 75.3028 139.052 75.2757C138.455 75.1131 138.102 74.4899 138.265 73.8667C138.862 71.699 139.432 69.4771 139.921 67.2552C140.057 66.632 140.681 66.2526 141.278 66.3881C141.902 66.5236 142.282 67.1197 142.146 67.7429C141.631 70.019 141.088 72.2951 140.464 74.4899C140.301 75.0047 139.867 75.3298 139.351 75.3298ZM99.1557 75.0318C98.8843 75.0318 98.5857 74.9234 98.3686 74.7337C96.6316 73.108 94.9761 71.428 93.4833 69.7209C93.0762 69.2603 93.1033 68.5287 93.5919 68.1222C94.0533 67.7158 94.7861 67.7429 95.1932 68.2306C96.6588 69.8835 98.2601 71.5364 99.9428 73.108C100.404 73.5415 100.431 74.246 99.9971 74.7066C99.7528 74.8963 99.4543 75.0318 99.1557 75.0318ZM259.014 74.6254C258.661 74.6254 258.308 74.4628 258.091 74.1647C257.711 73.6499 257.847 72.9454 258.335 72.566C260.181 71.2383 262.027 69.8564 263.845 68.4474C264.333 68.0681 265.066 68.1493 265.446 68.6642C265.826 69.1519 265.745 69.8835 265.229 70.2628C263.384 71.6719 261.538 73.0538 259.665 74.4086C259.475 74.5712 259.231 74.6254 259.014 74.6254ZM269.979 66.2255C269.653 66.2255 269.327 66.09 269.083 65.792C268.676 65.3042 268.757 64.5726 269.246 64.1933C271.037 62.7572 272.801 61.294 274.566 59.8037C275.054 59.3973 275.76 59.4514 276.167 59.9392C276.574 60.4269 276.52 61.1314 276.031 61.5379C274.267 63.0282 272.476 64.5184 270.684 65.9545C270.494 66.1442 270.223 66.2255 269.979 66.2255ZM90.0636 64.6539C89.7108 64.6539 89.3579 64.4913 89.1137 64.1662C87.7566 62.2153 86.5082 60.2101 85.4226 58.1779C85.124 57.6089 85.3411 56.9315 85.8839 56.6334C86.4539 56.3354 87.1324 56.5522 87.431 57.0941C88.4623 59.045 89.6565 60.9959 90.9592 62.8656C91.3121 63.3804 91.2035 64.0849 90.6878 64.4643C90.525 64.5997 90.2807 64.6539 90.0636 64.6539ZM142.336 61.863C142.282 61.863 142.201 61.863 142.146 61.8359C141.522 61.7275 141.115 61.1585 141.197 60.5353C141.549 58.3134 141.875 56.0644 142.146 53.7612C142.228 53.138 142.771 52.7045 143.422 52.7587C144.046 52.84 144.508 53.3819 144.426 54.0322C144.155 56.3625 143.829 58.6657 143.476 60.9146C143.368 61.4566 142.879 61.863 142.336 61.863ZM280.536 57.3108C280.211 57.3108 279.912 57.1754 279.668 56.9315C279.261 56.4709 279.288 55.7393 279.777 55.3328C281.514 53.8154 283.223 52.2709 284.906 50.7265C285.367 50.2929 286.1 50.3471 286.507 50.8077C286.942 51.2684 286.914 52 286.426 52.4064C284.716 53.9509 283.006 55.4954 281.269 57.0399C281.079 57.2296 280.808 57.3108 280.536 57.3108ZM83.6313 52.4877C83.1699 52.4877 82.7356 52.1897 82.5728 51.7561C81.7586 49.5342 81.0801 47.2581 80.5915 44.982C80.4558 44.3588 80.8629 43.7627 81.46 43.6272C82.0571 43.4918 82.6814 43.8711 82.8171 44.4943C83.2785 46.662 83.9298 48.8297 84.7169 50.9432C84.934 51.5393 84.6355 52.1897 84.0384 52.4064C83.9027 52.4606 83.767 52.4877 83.6313 52.4877ZM143.883 48.1794C143.856 48.1794 143.829 48.1794 143.802 48.1794C143.178 48.1252 142.689 47.5833 142.744 46.9601C142.906 44.7111 142.988 42.435 143.042 40.1047C143.069 39.4815 143.531 38.9667 144.209 38.9938C144.833 38.9938 145.349 39.5357 145.322 40.1589C145.268 42.5163 145.159 44.8195 145.023 47.0956C144.996 47.7188 144.481 48.1794 143.883 48.1794ZM290.768 47.9897C290.47 47.9897 290.171 47.8814 289.927 47.6375C289.493 47.1768 289.52 46.4452 289.981 46.0388C291.664 44.4672 293.32 42.8685 294.975 41.2699C295.437 40.8363 296.142 40.8363 296.577 41.297C297.011 41.7576 297.011 42.4621 296.549 42.8956C294.894 44.4943 293.238 46.093 291.528 47.6917C291.311 47.8813 291.04 47.9897 290.768 47.9897ZM80.7272 39.048C80.1301 39.048 79.6416 38.5873 79.5873 37.9912C79.5059 36.8803 79.4788 35.7693 79.4788 34.6584C79.4788 33.3849 79.533 32.1384 79.6416 30.9191C79.6959 30.2959 80.2658 29.8352 80.8901 29.8894C81.5143 29.9436 81.9757 30.5127 81.9214 31.1359C81.8129 32.301 81.7586 33.4661 81.7586 34.6855C81.7586 35.7422 81.7857 36.799 81.8671 37.8557C81.9214 38.479 81.4329 39.0209 80.8087 39.0751C80.7815 39.048 80.7544 39.048 80.7272 39.048ZM144.101 34.3874C143.503 34.3874 143.015 33.9268 142.961 33.3307C142.771 31.0546 142.418 28.8598 141.848 26.7463C141.685 26.1502 142.038 25.4998 142.662 25.3644C143.259 25.2018 143.883 25.554 144.046 26.1773C144.643 28.4262 145.05 30.7836 145.24 33.1681C145.295 33.7913 144.833 34.3332 144.182 34.3874C144.182 34.3874 144.128 34.3874 144.101 34.3874ZM82.03 25.3915C81.9214 25.3915 81.8129 25.3644 81.7043 25.3373C81.1072 25.1747 80.7544 24.5244 80.9172 23.9283C81.5957 21.6251 82.4914 19.3761 83.577 17.3168C83.8755 16.7749 84.5541 16.5581 85.124 16.8561C85.694 17.1542 85.8839 17.8316 85.5854 18.4006C84.5541 20.3245 83.7127 22.4109 83.0885 24.5786C82.9799 25.0663 82.5457 25.3915 82.03 25.3915ZM140.545 21.1373C140.111 21.1373 139.731 20.8935 139.514 20.5141C138.537 18.509 137.343 16.6123 135.958 14.8781C135.578 14.3904 135.66 13.6588 136.148 13.2794C136.637 12.9001 137.37 12.9814 137.75 13.4691C139.215 15.3387 140.491 17.371 141.549 19.5116C141.821 20.0806 141.604 20.758 141.034 21.029C140.898 21.0832 140.708 21.1373 140.545 21.1373ZM88.5166 13.3065C88.2452 13.3065 87.9738 13.2252 87.7566 13.0356C87.2681 12.6291 87.241 11.8975 87.6481 11.4369C89.2222 9.62144 90.9864 7.99567 92.9134 6.61376C93.429 6.23441 94.1347 6.36989 94.5147 6.85762C94.8946 7.37245 94.7589 8.07695 94.2704 8.4563C92.4791 9.75692 90.8235 11.2743 89.3851 12.9272C89.1408 13.1981 88.8423 13.3065 88.5166 13.3065ZM132.077 10.353C131.806 10.353 131.562 10.2718 131.344 10.0821C129.635 8.64598 127.762 7.39955 125.808 6.36989C125.238 6.07183 125.048 5.39442 125.319 4.8254C125.618 4.25638 126.296 4.03961 126.866 4.33767C128.983 5.44862 130.965 6.77633 132.81 8.29373C133.299 8.70017 133.353 9.40467 132.946 9.8924C132.729 10.2176 132.403 10.353 132.077 10.353ZM99.59 5.28604C99.1557 5.28604 98.7215 5.01508 98.5315 4.58154C98.2872 4.01252 98.5586 3.33511 99.1286 3.09124C101.327 2.16997 103.634 1.49257 105.995 1.08612C106.619 0.950641 107.216 1.38418 107.325 2.00739C107.434 2.63061 107.026 3.22673 106.402 3.33511C104.204 3.71446 102.06 4.36477 100.024 5.20475C99.8885 5.25894 99.7528 5.28604 99.59 5.28604ZM119.918 3.98542C119.81 3.98542 119.728 3.98542 119.62 3.93123C117.448 3.33511 115.25 2.98286 113.052 2.87447C112.427 2.84738 111.939 2.30545 111.966 1.68224C111.993 1.05902 112.536 0.598389 113.16 0.598389C115.521 0.706774 117.91 1.08612 120.217 1.73643C120.814 1.89901 121.167 2.52222 121.004 3.14544C120.868 3.66026 120.407 3.98542 119.918 3.98542Z"></path>
                                          </svg>

                                          <i aria-hidden="true" class="flaticon flaticon-pin"></i>
                                        </div>
                                      </div>

                                      <div class="pxl-item--meta">
                                        <span class="pxl--counter-number">
                                          <span class="pxl--counter-value" data-duration="2000" data-to-value="3" data-delimiter="">3</span>
                                          + Years of Experience
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-9744ac3 elementor-section-stretched elementor-reverse-laptop elementor-reverse-tablet_extra elementor-reverse-tablet elementor-reverse-mobile_extra elementor-reverse-mobile elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="9744ac3" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8a605f2 pxl-column-none" data-id="8a605f2" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-0972f22 elementor-widget elementor-widget-pxl_heading" data-id="0972f22" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-0972f22-5513" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                        <span class="pxl-item--subtext">
                                          <span class="pxl-item--icon pxl-mr-1">
                                            <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                          </span>
                                          OUR SERVICES <span class="pxl-item--subdivider"></span>
                                        </span>
                                      </div>

                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        Choose Your Required Setup Package
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-dbb0bcb post-layout-service-4 elementor-invisible elementor-widget elementor-widget-pxl_post_carousel" data-id="dbb0bcb" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="pxl_post_carousel.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-swiper-sliders pxl-service-carousel pxl-service-carousel4 pxl-service-style5">
                                    <div class="pxl-carousel-inner">
                                      <div class="pxl-swiper-container" dir="ltr" data-settings='{"slide_direction":"horizontal","slide_percolumn":"1","slide_percolumnfill":"1","slide_mode":"slide","slides_to_show":"3","slides_to_show_xxl":"3","slides_to_show_lg":"3","slides_to_show_md":"2","slides_to_show_sm":"2","slides_to_show_xs":"1","slides_to_scroll":"2","slides_gutter":30,"arrow":"false","pagination":"true","pagination_type":"bullets","autoplay":"false","pause_on_hover":"true","pause_on_interaction":"true","delay":5000,"loop":"true","speed":500,"center":"false"}'>
                                        <div class="pxl-swiper-wrapper">
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--featured item-image">
                                                <a class="pxl-wrap-link" href="/"><img loading="lazy" decoding="async" class="" src="/images/wp-content__uploads__2023__10__service-img-1.jpg" width="413" height="276" alt="Immigration profile evaluation consultation" title="Immigration profile evaluation" /></a>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewbox="0 0 9 9" fill="none">
                                                    <path d="M0 9C6 9 8.5 3 9 0V9H0Z"></path>
                                                  </svg>
                                                  <i class="flaticon flaticon-credit-card"></i>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewbox="0 0 9 9" fill="none">
                                                    <path d="M9 9C3 9 0.5 3 0 0V9H9Z"></path>
                                                  </svg>
                                                </div>
                                                <h3 class="pxl-item--title">
                                                  <a href="/">Immigration Profile Evaluation</a>
                                                </h3>
                                                <div class="pxl-line-paper"></div>
                                                <div class="pxl-item--content pxl-excerpt-line" style="-webkit-line-clamp: 3">
                                                  Our first step involves a thorough assessment of your immigration
                                                  profile, carried out by our certified RCIC. This initial evaluation is
                                                  crucial in determining your…
                                                </div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/">
                                                    <span class="btn-readmore--text"> View More </span>
                                                    <span class="btn-readmore--icon pxl-ml-10">
                                                      <i class="flaticon-right-arrow-2 rtl-reverse"></i>
                                                    </span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--featured item-image">
                                                <a class="pxl-wrap-link" href="/"><img loading="lazy" decoding="async" class="" src="/images/wp-content__uploads__2023__10__service-img-2.jpg" width="413" height="276" alt="Credentials optimization and immigration eligibility" title="Credentials optimization" /></a>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewbox="0 0 9 9" fill="none">
                                                    <path d="M0 9C6 9 8.5 3 9 0V9H0Z"></path>
                                                  </svg>
                                                  <i class="flaticon flaticon-approved"></i>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewbox="0 0 9 9" fill="none">
                                                    <path d="M9 9C3 9 0.5 3 0 0V9H9Z"></path>
                                                  </svg>
                                                </div>
                                                <h3 class="pxl-item--title">
                                                  <a href="/">Credentials Optimization</a>
                                                </h3>
                                                <div class="pxl-line-paper"></div>
                                                <div class="pxl-item--content pxl-excerpt-line" style="-webkit-line-clamp: 3">
                                                  Once the evaluation is complete, our RCIC may offer strategic guidance
                                                  on ways to enhance your profile, maximizing your eligibility under the
                                                  most suitable programs.…
                                                </div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/">
                                                    <span class="btn-readmore--text"> View More </span>
                                                    <span class="btn-readmore--icon pxl-ml-10">
                                                      <i class="flaticon-right-arrow-2 rtl-reverse"></i>
                                                    </span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--featured item-image">
                                                <a class="pxl-wrap-link" href="/"><img loading="lazy" decoding="async" class="" src="/images/wp-content__uploads__2025__02__canadian-express-entry-600x375.jpg" width="600" height="375" alt="Canadian immigration strategy and Express Entry pathways" title="Immigration strategy" /></a>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewbox="0 0 9 9" fill="none">
                                                    <path d="M0 9C6 9 8.5 3 9 0V9H0Z"></path>
                                                  </svg>
                                                  <i class="flaticon flaticon-online-learning"></i>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewbox="0 0 9 9" fill="none">
                                                    <path d="M9 9C3 9 0.5 3 0 0V9H9Z"></path>
                                                  </svg>
                                                </div>
                                                <h3 class="pxl-item--title">
                                                  <a href="/">Determining the Best Immigration Strategy</a>
                                                </h3>
                                                <div class="pxl-line-paper"></div>
                                                <div class="pxl-item--content pxl-excerpt-line" style="-webkit-line-clamp: 3">
                                                  With your profile fully assessed and optimized, our team discusses the
                                                  ideal immigration strategy based on your qualifications, preferences,
                                                  and future goals. Our RCIC collaborates…
                                                </div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/">
                                                    <span class="btn-readmore--text"> View More </span>
                                                    <span class="btn-readmore--icon pxl-ml-10">
                                                      <i class="flaticon-right-arrow-2 rtl-reverse"></i>
                                                    </span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="pxl-swiper-dots style-6"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-2019d2f elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="2019d2f" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1daa369 pxl-column-none" data-id="1daa369" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-ca8131c elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none elementor-invisible" data-id="ca8131c" data-element_type="section" data-e-type="section" data-settings='{"background_background":"gradient","animation":"fadeInUp"}'>
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-68d3734 pxl-column-none" data-id="68d3734" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-139d076 elementor-widget elementor-widget-pxl_counter" data-id="139d076" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_counter.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-counter pxl-counter3" data-wow-delay="ms">
                                            <div class="pxl--item-inner">
                                              <div class="pxl--counter-meta">
                                                <div class="pxl--counter-number">
                                                  <span class="pxl--counter-prefix el-empty"></span>
                                                  <span class="pxl--counter-value effect-default" data-duration="2000" data-startnumber="1" data-endnumber="10" data-to-value="10" data-delimiter="">10</span>
                                                  <span class="pxl--counter-suffix">+</span>
                                                </div>
                                                <div class="pxl--item-title">Visa Category</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f3eeed1 pxl-column-none" data-id="f3eeed1" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-d39fea6 elementor-widget elementor-widget-pxl_counter" data-id="d39fea6" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_counter.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-counter pxl-counter3" data-wow-delay="ms">
                                            <div class="pxl--item-inner">
                                              <div class="pxl--counter-meta">
                                                <div class="pxl--counter-number">
                                                  <span class="pxl--counter-prefix el-empty"></span>
                                                  <span class="pxl--counter-value effect-default" data-duration="2000" data-startnumber="1" data-endnumber="50" data-to-value="50" data-delimiter="">50</span>
                                                  <span class="pxl--counter-suffix">+</span>
                                                </div>
                                                <div class="pxl--item-title">Trust status</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2646a00 pxl-column-none" data-id="2646a00" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-d6d9004 elementor-widget elementor-widget-pxl_counter" data-id="d6d9004" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_counter.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-counter pxl-counter3" data-wow-delay="ms">
                                            <div class="pxl--item-inner">
                                              <div class="pxl--counter-meta">
                                                <div class="pxl--counter-number">
                                                  <span class="pxl--counter-prefix el-empty"></span>
                                                  <span class="pxl--counter-value effect-default" data-duration="2000" data-startnumber="1" data-endnumber="99" data-to-value="99" data-delimiter="">99</span>
                                                  <span class="pxl--counter-suffix">%</span>
                                                </div>
                                                <div class="pxl--item-title">Success Rate</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-355df38 pxl-column-none" data-id="355df38" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-31bb27a elementor-widget elementor-widget-pxl_counter" data-id="31bb27a" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_counter.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-counter pxl-counter3" data-wow-delay="ms">
                                            <div class="pxl--item-inner">
                                              <div class="pxl--counter-meta">
                                                <div class="pxl--counter-number">
                                                  <span class="pxl--counter-prefix el-empty"></span>
                                                  <span class="pxl--counter-value effect-default" data-duration="2000" data-startnumber="1" data-endnumber="99" data-to-value="99" data-delimiter="">99</span>
                                                  <span class="pxl--counter-suffix">%</span>
                                                </div>
                                                <div class="pxl--item-title">Satisfaction Rate</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-6425016 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="6425016" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-aebf879 pxl-column-none" data-id="aebf879" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-526beb3 elementor-widget elementor-widget-pxl_heading" data-id="526beb3" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-526beb3-1258" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        Visa &amp; Immigration Services
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-e9f838d elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="e9f838d" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-454a9b2 pxl-column-none" data-id="454a9b2" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-7d5b09a elementor-widget elementor-widget-html" data-id="7d5b09a" data-element_type="widget" data-e-type="widget" data-widget_type="html.default">
                                <div class="elementor-widget-container">
                                  <meta charset="UTF-8" />
                                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                  <title>Immigration Services Cards</title>
                                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
                                  <style>
                                    /* Added link styling */
                                    .card-link {
                                      text-decoration: none;
                                      color: inherit;
                                      display: block;
                                      height: 100%;
                                    }

                                    .container {
                                      max-width: 1200px;
                                      margin: 0 auto;
                                    }

                                    .cards-container {
                                      display: grid;
                                      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                                      gap: 2rem;
                                      padding: 20px;
                                    }

                                    .card {
                                      background: white;
                                      border-radius: 10px;
                                      padding: 2rem;
                                      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                      transition:
                                        transform 0.3s ease,
                                        box-shadow 0.3s ease;
                                      cursor: pointer;
                                      position: relative;
                                      overflow: hidden;
                                    }

                                    .card:hover {
                                      transform: translateY(-5px);
                                      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
                                    }

                                    .card:hover::before {
                                      width: 100%;
                                    }

                                    .card::before {
                                      content: "";
                                      position: absolute;
                                      top: 0;
                                      left: 0;
                                      width: 0;
                                      height: 4px;
                                      background: #2c83e3;
                                      transition: width 0.3s ease;
                                    }

                                    .card-icon {
                                      font-size: 2.5rem;
                                      color: #2c83e3;
                                      margin-bottom: 1rem;
                                    }

                                    .card-title {
                                      font-size: 1.25rem;
                                      color: #2d3748;
                                      margin-bottom: 0.75rem;
                                      font-weight: 600;
                                    }

                                    .card-content {
                                      color: #718096;
                                      font-size: 0.9rem;
                                      line-height: 1.5;
                                    }

                                    @media (max-width: 768px) {
                                      .cards-container {
                                        grid-template-columns: repeat(2, 1fr);
                                      }
                                    }

                                    @media (max-width: 480px) {
                                      .cards-container {
                                        grid-template-columns: 1fr;
                                      }
                                    }
                                  </style>

                                  <div class="container">
                                    <div class="cards-container">
                                      <!-- Study Visa Card -->
                                      <div class="card">
                                        <a href="/visas/study-visa" class="card-link">
                                          <i class="fas fa-graduation-cap card-icon"></i>
                                          <h3 class="card-title">Study Visa</h3>
                                          <p class="card-content">
                                            Pursue your education in Canada at designated learning institutions.
                                          </p>
                                        </a>
                                      </div>

                                      <!-- Work Visa Card -->
                                      <div class="card">
                                        <a href="/visas/work-visa" class="card-link">
                                          <i class="fas fa-briefcase card-icon"></i>
                                          <h3 class="card-title">Work Visa</h3>
                                          <p class="card-content">
                                            Gain valuable work experience in Canada through temporary employment.
                                          </p>
                                        </a>
                                      </div>

                                      <!-- Express Entry Card -->
                                      <div class="card">
                                        <a href="/immigration/express-entry" class="card-link">
                                          <i class="fas fa-rocket card-icon"></i>
                                          <h3 class="card-title">Express Entry</h3>
                                          <p class="card-content">
                                            Fast-track immigration system for skilled workers to obtain permanent
                                            residence.
                                          </p>
                                        </a>
                                      </div>

                                      <!-- Provincial Nominee Program Card -->
                                      <div class="card">
                                        <a href="/immigration/provincial-nomination-programs" class="card-link">
                                          <i class="fas fa-map-marker-alt card-icon"></i>
                                          <h3 class="card-title">Provincial Nominee Program</h3>
                                          <p class="card-content">
                                            Immigrate to a specific Canadian province based on their economic needs.
                                          </p>
                                        </a>
                                      </div>

                                      <!-- Caregivers Card -->
                                      <div class="card">
                                        <a href="#" class="card-link">
                                          <i class="fas fa-hands-helping card-icon"></i>
                                          <h3 class="card-title">Caregivers</h3>
                                          <p class="card-content">
                                            Programs for caregivers to work and eventually immigrate to Canada.
                                          </p>
                                        </a>
                                      </div>

                                      <!-- Canada Citizenship Card -->
                                      <div class="card">
                                        <a href="/immigration/family-and-spousal-immigration" class="card-link">
                                          <i class="fas fa-passport card-icon"></i>
                                          <h3 class="card-title">Family &amp; Spousal Sponsorship</h3>
                                          <p class="card-content">
                                            We simplify family and spousal sponsorship for a smooth and successful
                                            reunification.
                                          </p>
                                        </a>
                                      </div>

                                      <!-- PR Card & Renewal Card -->
                                      <div class="card">
                                        <a href="/other/pr-card" class="card-link">
                                          <i class="fas fa-address-card card-icon"></i>
                                          <h3 class="card-title">PR Card &amp; Renewal</h3>
                                          <p class="card-content">
                                            Manage your permanent resident status and card renewal process.
                                          </p>
                                        </a>
                                      </div>

                                      <!-- Post Graduation Work Permit Card -->
                                      <div class="card">
                                        <a href="#" class="card-link">
                                          <i class="fas fa-file-contract card-icon"></i>
                                          <h3 class="card-title">Post Graduation Work Permit</h3>
                                          <p class="card-content">
                                            Work in Canada after graduating from a Canadian institution.
                                          </p>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-26da23b elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="26da23b" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3222737 pxl-column-none" data-id="3222737" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-9d7a0dd elementor-widget elementor-widget-pxl_heading" data-id="9d7a0dd" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-9d7a0dd-2617" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                        <span class="pxl-item--subtext">
                                          <span class="pxl-item--icon pxl-mr-1">
                                            <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                          </span>
                                          Why Choose Us <span class="pxl-item--subdivider"></span>
                                        </span>
                                      </div>

                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        We ensure prompt services for visa &amp; Immigration
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-d852953 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none elementor-invisible" data-id="d852953" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp"}'>
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a679bf4 pxl-column-none" data-id="a679bf4" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-69aba02 elementor-widget elementor-widget-pxl_icon_box" data-id="69aba02" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box1" data-wow-delay="ms">
                                            <div class="pxl-item--inner t-left">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-global-economy"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Global Connection</h5>
                                                <span class="pxl-item--description el-empty">Global connections by attracting skilled workers, international
                                                  students, and entrepreneurs, supporting family reunification, and
                                                  fostering innovation, cultural exchange, and humanitarian efforts
                                                  worldwide</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0272ed9 pxl-column-none" data-id="0272ed9" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-a055139 elementor-widget elementor-widget-pxl_icon_box" data-id="a055139" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box1" data-wow-delay="ms">
                                            <div class="pxl-item--inner t-left">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-shining"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Efficiency and Expertise</h5>
                                                <span class="pxl-item--description el-empty">At JKS Immigration, we provide expert guidance on Canada visa &amp;
                                                  immigration, ensuring a smooth, efficient process for skilled workers,
                                                  students, and businesses. Trust our experienced team for seamless
                                                  immigration solutions tailored to your needs.</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-94d87e6 pxl-column-none" data-id="94d87e6" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic"}'>
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-c98d044 elementor-widget elementor-widget-pxl_icon_box" data-id="c98d044" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box1" data-wow-delay="ms">
                                            <div class="pxl-item--inner t-left">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-profit"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Tailored Solutions</h5>
                                                <span class="pxl-item--description el-empty">we offer personalized immigration solutions for skilled workers,
                                                  students, and businesses. Navigate the Canada visa &amp; immigration
                                                  process with expert guidance and a strategy tailored to your success.
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-efd3487 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none elementor-invisible" data-id="efd3487" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp"}'>
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-66ccb29 pxl-column-none" data-id="66ccb29" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-ed472ec elementor-widget elementor-widget-pxl_icon_box" data-id="ed472ec" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box1" data-wow-delay="ms">
                                            <div class="pxl-item--inner t-left">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-approved"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Fastest Working Process</h5>
                                                <span class="pxl-item--description el-empty">We ensure a smooth and fast Canada visa &amp; immigration process.
                                                  Our expert team streamlines applications for skilled workers,
                                                  students, and businesses, delivering quick and hassle-free results.
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ac79644 pxl-column-none" data-id="ac79644" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-dbcba73 elementor-widget elementor-widget-pxl_icon_box" data-id="dbcba73" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box1" data-wow-delay="ms">
                                            <div class="pxl-item--inner t-left">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-personal-branding"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Trusted Excellence</h5>
                                                <span class="pxl-item--description el-empty">We provide expert guidance and reliable solutions for Canada visa
                                                  &amp; immigration. Trust our experienced team for a seamless and
                                                  successful immigration journey.</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8bc8d9f pxl-column-none" data-id="8bc8d9f" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic"}'>
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-458c1a2 elementor-widget elementor-widget-pxl_icon_box" data-id="458c1a2" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_icon_box.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-icon-box pxl-icon-box1" data-wow-delay="ms">
                                            <div class="pxl-item--inner t-left">
                                              <div class="pxl-item--icon pxl-mr-28">
                                                <i aria-hidden="true" class="flaticon flaticon-support"></i>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <h5 class="pxl-item--title el-empty">Expert Support Panel</h5>
                                                <span class="pxl-item--description el-empty">Our dedicated experts provide professional guidance for Canada visa
                                                  &amp; immigration. Get personalized support for a smooth immigration
                                                  journey</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-eb9ef73 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-full-content-with-space-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="eb9ef73" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6a5c4a1 pxl-column-none" data-id="6a5c4a1" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-bb7c4b7 elementor-widget elementor-widget-html" data-id="bb7c4b7" data-element_type="widget" data-e-type="widget" data-widget_type="html.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-swiper-sliders pxl-element-slider pxl-swiper-sliders1 pxl-swiper-nogap pxl-swiper-show-pagination jks-home-video-carousel" data-slider-mode="fade">
                                    <div class="pxl-carousel-inner">
                                      <div class="pxl-swiper-container" dir="ltr" data-settings='{"slide_direction":"horizontal","slide_percolumn":"1","slide_mode":"fade","slides_to_show":"1","slides_to_show_xxl":"1","slides_to_show_lg":"1","slides_to_show_md":"1","slides_to_show_sm":"1","slides_to_show_xs":"1","slides_to_scroll":"1","arrow":"false","pagination":"true","pagination_type":"bullets","autoplay":"false","pause_on_hover":"true","pause_on_interaction":"true","delay":6000,"loop":"true","speed":500}'>
                                        <div class="pxl-swiper-wrapper">
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-video-player pxl-video-player1 pxl-video-style7 wow skewIn" data-wow-delay="ms">
                                              <div class="pxl-video--inner">
                                                <div class="pxl-video--holder">
                                                  <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="1280"
                                                    height="720"
                                                    src="https://i.ytimg.com/vi/6Wc2ljGJcPo/maxresdefault.jpg"
                                                    class="attachment-full"
                                                    alt="JKS Immigration — video 2"
                                                  />
                                                </div>
                                                <div class="btn-video-wrap p-center">
                                                  <a class="btn-video style7" href="https://www.youtube.com/watch?v=6Wc2ljGJcPo">
                                                    <i class="caseicon-play1"></i>
                                                    <span class="line-video-animation line-video-1"></span>
                                                    <span class="line-video-animation line-video-2"></span>
                                                    <span class="line-video-animation line-video-3"></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-video-player pxl-video-player1 pxl-video-style7 wow skewIn" data-wow-delay="ms">
                                              <div class="pxl-video--inner">
                                                <div class="pxl-video--holder">
                                                  <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="1280"
                                                    height="720"
                                                    src="https://i.ytimg.com/vi/tEFfxOLjJmg/maxresdefault.jpg"
                                                    class="attachment-full"
                                                    alt="JKS Immigration — video 1"
                                                  />
                                                </div>
                                                <div class="btn-video-wrap p-center">
                                                  <a class="btn-video style7" href="https://www.youtube.com/watch?v=tEFfxOLjJmg">
                                                    <i class="caseicon-play1"></i>
                                                    <span class="line-video-animation line-video-1"></span>
                                                    <span class="line-video-animation line-video-2"></span>
                                                    <span class="line-video-animation line-video-3"></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="pxl-swiper-pagination style-vertical">
                                      <div class="pxl-swiper-dots pxl-swiper-dots style-6 position-left pxl-style-vertical"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-83df3c9 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="83df3c9" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-393fb9e pxl-column-none" data-id="393fb9e" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-c5ddc0e elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="c5ddc0e" data-element_type="section" data-e-type="section">
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-56b63b2 pxl-column-none" data-id="56b63b2" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-aa6c327 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-pxl_heading" data-id="aa6c327" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="pxl-pxl_heading-aa6c327-4889" class="pxl-heading px-sub-title-default-style">
                                            <div class="pxl-heading--inner">
                                              <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                                <span class="pxl-item--subtext">
                                                  <span class="pxl-item--icon pxl-mr-1">
                                                    <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                                  </span>
                                                  FREQUENTLY ASKED QUESTIONS
                                                  <span class="pxl-item--subdivider"></span>
                                                </span>
                                              </div>

                                              <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                                Questions &amp; Answer
                                              </h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="elementor-element elementor-element-4301017 elementor-widget elementor-widget-pxl_accordion" data-id="4301017" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_accordion.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-accordion-wrap">
                                            <div class="pxl-accordion pxl-accordion1 style2 wow skewIn" data-wow-delay="ms">
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-41783ad">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q1. What is the IELTS score required for Canadian PR?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-41783ad" class="pxl-item--content">
                                                  To qualify for Canadian Permanent Residency (PR), a minimum IELTS
                                                  score of 6.0 is generally required, which aligns with a Canadian
                                                  Language Benchmark (CLB) level of 7. This baseline may vary depending
                                                  on the immigration program and occupation. For skilled workers,
                                                  achieving a CLB level of 7 or higher increases eligibility. The IELTS
                                                  exam evaluates English proficiency across speaking, reading, writing,
                                                  and listening. Each immigration program has different language
                                                  requirements, so a higher score may be needed for certain professions
                                                  and visa pathways.<br />
                                                </div>
                                              </div>
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-79220ad">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q2.Is there an age limit for applying for Canadian PR?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-79220ad" class="pxl-item--content">
                                                  Yes, age is a key factor in Canada’s point-based immigration system.
                                                  Applicants aged 18-35 typically receive the highest points, with a
                                                  gradual decrease in points after age 35. For applicants aged 47 and
                                                  older, no points are awarded for age, but they may still be eligible
                                                  through alternative pathways, such as job offers from Canadian
                                                  employers. Additionally, the Canadian Experience Class (CEC) program
                                                  allows applicants with Canadian work experience to apply, regardless
                                                  of age.<br />
                                                </div>
                                              </div>
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-4e2356e">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q3. What are the main requirements to immigrate to Canada?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-4e2356e" class="pxl-item--content">
                                                  Canadian immigration has several requirements that applicants must
                                                  meet, including:<br />
                                                  Being 18 years or older<br />
                                                  Meeting health and character standards (e.g., no criminal record)<br />
                                                  Having sufficient funds to support yourself and your family in
                                                  Canada<br />
                                                  Achieving a minimum education level, such as a high school diploma<br />
                                                  Meeting language proficiency requirements, often CLB 7 (IELTS 6.0)<br />
                                                  Programs such as Express Entry, Provincial Nominee Program (PNP), and
                                                  Canadian Experience Class (CEC) have unique requirements, so
                                                  eligibility may differ based on the program you choose.<br />
                                                </div>
                                              </div>
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-470346e">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q4. Which professions are in demand in Canada?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-470346e" class="pxl-item--content">
                                                  Canada has high demand for skilled workers, particularly in
                                                  healthcare, technology, engineering, trades, and agriculture.
                                                  Healthcare professionals, such as registered nurses, physicians,
                                                  pharmacists, and occupational therapists, are especially needed due to
                                                  growing demand across provinces. STEM (Science, Technology,
                                                  Engineering, and Mathematics) professionals, including software
                                                  engineers, data scientists, and mechanical engineers, are also in high
                                                  demand. Additionally, skilled trades like electricians, plumbers, and
                                                  welders are actively recruited, along with agriculture and transport
                                                  roles.<br />
                                                </div>
                                              </div>
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-b8c9136">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q5. How long does it take to immigrate to Canada?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-b8c9136" class="pxl-item--content">
                                                  The immigration process varies based on factors like the specific
                                                  program, application completeness, and the processing times of
                                                  Immigration, Refugees and Citizenship Canada (IRCC). Generally, it can
                                                  take between six months to a year from submitting your Express Entry
                                                  profile to receiving a PR visa. Steps include setting up a profile,
                                                  receiving an Invitation to Apply (ITA), and submitting a complete
                                                  application. Delays may occur if additional documentation or
                                                  verifications are required.<br />
                                                </div>
                                              </div>
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-29f0143">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q6.How can I get a job offer from Canada?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-29f0143" class="pxl-item--content">
                                                  To secure a job offer, start by researching Canada’s job market and
                                                  aligning your skills with market demands. Building a Canadian-style
                                                  resume and establishing an online presence on platforms like LinkedIn
                                                  can improve your chances. Consider using Canada’s Job Bank, creating a
                                                  Job Match account to connect with employers, and networking through
                                                  professional groups and social media. Some job boards and company
                                                  websites may also list openings specifically for international
                                                  applicants. While a job offer is beneficial, it’s not required for
                                                  many immigration pathways, such as Express Entry.<br />
                                                </div>
                                              </div>
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-ce5226b">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q7.Which Canadian cities are ideal for immigrants?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-ce5226b" class="pxl-item--content">
                                                  Canada has numerous cities that are popular among immigrants,
                                                  including:<br />
                                                  Toronto, Ontario: Known for its multicultural community and economic
                                                  opportunities, Toronto is a prime choice for newcomers.<br />
                                                  Vancouver, British Columbia: With a strong tech industry, scenic
                                                  surroundings, and a mild climate, Vancouver is consistently ranked as
                                                  one of the world’s most livable cities.<br />
                                                  Calgary, Alberta: Offering job opportunities, a family-friendly
                                                  environment, and proximity to nature, Calgary is an attractive option
                                                  for many immigrants.<br />
                                                  Montreal, Quebec: Known for its culture, affordable living, and
                                                  vibrant lifestyle, Montreal appeals to those who enjoy a blend of
                                                  urban and cultural experiences.<br />
                                                </div>
                                              </div>
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-ceebe85">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q8.Do I need a job offer to immigrate to Canada?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-ceebe85" class="pxl-item--content">
                                                  No, a job offer is not mandatory for many Canadian immigration
                                                  programs. Programs such as Express Entry and the Provincial Nominee
                                                  Program (PNP) allow applicants to apply without a job offer. However,
                                                  having a job offer can boost your Comprehensive Ranking System (CRS)
                                                  score in Express Entry, increasing your chances of receiving an
                                                  Invitation to Apply (ITA). For some specific PNP streams, a job offer
                                                  may be required to meet regional labor demands.<br />
                                                </div>
                                              </div>
                                              <div class="pxl--item">
                                                <h5 class="pxl-item--title" data-target="#pxl_accordion-4301017-7923-8474530">
                                                  <span class="pxl-title--icon">
                                                    <i aria-hidden="true" class="fas fa-angle-down"></i>
                                                  </span>
                                                  <span class="pxl-title--text">Q9What documents are required for Canada immigration?</span>
                                                </h5>
                                                <div id="pxl_accordion-4301017-7923-8474530" class="pxl-item--content">
                                                  The documents needed vary by immigration program but generally
                                                  include:<br />
                                                  A valid passport<br />
                                                  Language proficiency test results (IELTS for English, TEF for
                                                  French)<br />
                                                  Educational Credential Assessment (ECA) for foreign degrees<br />
                                                  Proof of work experience (employment letters, contracts)<br />
                                                  Medical examination and police clearance certificate<br />
                                                  Proof of funds to show you can financially support yourself and your
                                                  family<br />
                                                  Specific programs may have additional requirements, so it’s important
                                                  to verify the documentation required for your chosen pathway.<br />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="elementor-element elementor-element-6b8afb0 elementor-widget elementor-widget-pxl_button" data-id="6b8afb0" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_button.default">
                                        <div class="elementor-widget-container">
                                          <div id="pxl-pxl_button-6b8afb0-3583" class="pxl-button wow RotatingY" data-wow-delay="ms">
                                            <a href="/faq" class="btn pxl-icon-active btn-default wow RotatingY pxl-icon--right" data-wow-delay="ms">
                                              <i aria-hidden="true" class="far fa-chevron-double-right"></i>
                                              <span class="pxl--btn-text text-gradient" data-text="View More Faq’s">
                                                View More Faq’s
                                              </span>

                                              <span class="pxl--text-wrap">
                                                <span class="pxl--btn-text1 text-gradient">View More Faq’s</span>
                                                <span class="pxl--btn-text2 text-gradient">View More Faq’s</span>
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-464b32d pxl-column-none" data-id="464b32d" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-998f536 elementor-widget elementor-widget-pxl_text_editor" data-id="998f536" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-text-editor">
                                            <div class="pxl-item--inner wow skewIn" data-wow-delay="ms">
                                              <p>
                                                JKS Immigration Consultancy was founded to offer uniquely crafted
                                                premium services in the realms of education and migration.As more people
                                                pursue their dreams of a better future, we are here to guide and support
                                                every step of the way.With our expert knowledge and tailored solutions,
                                                we turn your immigration goals into achievable realities.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <section class="elementor-section elementor-inner-section elementor-element elementor-element-a259e8f elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none elementor-invisible" data-id="a259e8f" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic","animation":"fadeInUp"}'>
                                        <div class="elementor-container elementor-column-gap-default">
                                          <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f5d2a59 pxl-column-none" data-id="f5d2a59" data-element_type="column" data-e-type="column" data-settings='{"background_background":"gradient"}'>
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                              <div class="elementor-element elementor-element-1c20709 elementor-widget elementor-widget-pxl_heading" data-id="1c20709" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                                <div class="elementor-widget-container">
                                                  <div id="pxl-pxl_heading-1c20709-7535" class="pxl-heading px-sub-title-default-style">
                                                    <div class="pxl-heading--inner">
                                                      <h3 class="pxl-item--title" data-wow-delay="ms">
                                                        Book An Appointment
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="elementor-element elementor-element-58b9c76 elementor-widget elementor-widget-pxl_contact_form" data-id="58b9c76" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_contact_form.default">
                                                <div class="elementor-widget-container">
                                                  <div class="pxl-contact-form pxl-contact-form1 btn-w-auto" data-wow-delay="ms">
                                                    <div class="wpcf7 no-js" id="wpcf7-f1788-p217-o1" lang="en-US" dir="ltr" data-wpcf7-id="1788">
                                                      <div class="screen-reader-response">
                                                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                        <ul></ul>
                                                      </div>
                                                      <form action="?simply_static_page=15550#wpcf7-f1788-p217-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
                                                        <fieldset class="hidden-fields-container">
                                                          <input type="hidden" name="_wpcf7" value="1788" /><input type="hidden" name="_wpcf7_version" value="6.1.5" /><input type="hidden" name="_wpcf7_locale" value="en_US" /><input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1788-p217-o1" /><input type="hidden" name="_wpcf7_container_post" value="217" /><input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                                        </fieldset>
                                                        <div class="row">
                                                          <div class="col-lg-6 col-md-6 col-sm-12 select-country">
                                                            <div class="pxl--item">
                                                              <p>
                                                                <span class="wpcf7-form-control-wrap" data-name="your-select-country"><select class="wpcf7-form-control wpcf7-select select-style1" aria-invalid="false" name="your-select-country">
                                                                    <option value="Select Country">
                                                                      Select Country
                                                                    </option>
                                                                    <option value="United States">United States</option>
                                                                    <option value="United Kingdom">
                                                                      United Kingdom
                                                                    </option>
                                                                    <option value="Korea">Korea</option>
                                                                    <option value="Japan">Japan</option>
                                                                    <option value="Germany">Germany</option>
                                                                    <option value="Finland">Finland</option>
                                                                    <option value="Korea">Korea</option>
                                                                    <option value="Canada">Canada</option>
                                                                    <option value="Australia">Australia</option>
                                                                  </select></span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                          <div class="col-lg-6 col-md-6 col-sm-12 select-service">
                                                            <div class="pxl--item">
                                                              <p>
                                                                <span class="wpcf7-form-control-wrap" data-name="your-select-service"><select class="wpcf7-form-control wpcf7-select select-style1" aria-invalid="false" name="your-select-service">
                                                                    <option value="Select Service">
                                                                      Select Service
                                                                    </option>
                                                                    <option value="PTE Exam Preparation">
                                                                      PTE Exam Preparation
                                                                    </option>
                                                                    <option value="TOEFL Exam Preparation">
                                                                      TOEFL Exam Preparation
                                                                    </option>
                                                                    <option value="IELTS Exam Preparation">
                                                                      IELTS Exam Preparation
                                                                    </option>
                                                                    <option value="Tourist Visa Processing">
                                                                      Tourist Visa Processing
                                                                    </option>
                                                                    <option value="Student Visa Processing">
                                                                      Student Visa Processing
                                                                    </option>
                                                                    <option value="Family Visa Processing">
                                                                      Family Visa Processing
                                                                    </option>
                                                                  </select></span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="row">
                                                          <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="pxl--item">
                                                              <p>
                                                                <span class="wpcf7-form-control-wrap" data-name="your-name"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Full Name" value="" type="text" name="your-name" /></span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                          <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="pxl--item">
                                                              <p>
                                                                <span class="wpcf7-form-control-wrap" data-name="your-phone"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Phone" value="" type="text" name="your-phone" /></span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="row">
                                                          <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="pxl--item pxl-date">
                                                              <p>
                                                                <span class="wpcf7-form-control-wrap" data-name="your-date"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Select Date" value="" type="text" name="your-date" /></span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                          <div class="col-lg-6 col-md-6 col-sm-12 select-time">
                                                            <div class="pxl--item pxl-time">
                                                              <p>
                                                                <span class="wpcf7-form-control-wrap" data-name="your-time"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Select Time" value="" type="text" name="your-time" /></span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="pxl--item pxl-text-center">
                                                          <p>
                                                            <button type="submit" class="wpcf7-submit btn btn-white">
                                                              <span>CONTACT US</span>
                                                            </button>
                                                          </p>
                                                        </div>
                                                        <div class="wpcf7-response-output" aria-hidden="true"></div>
                                                      </form>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="elementor-element elementor-element-4e33361 elementor-widget elementor-widget-pxl_heading" data-id="4e33361" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                                <div class="elementor-widget-container">
                                                  <div id="pxl-pxl_heading-4e33361-3867" class="pxl-heading px-sub-title-default-style">
                                                    <div class="pxl-heading--inner">
                                                      <h3 class="pxl-item--title" data-wow-delay="ms">
                                                        Or just Give us a call
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="elementor-element elementor-element-d7fcd18 elementor-widget elementor-widget-pxl_text_editor" data-id="d7fcd18" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                                <div class="elementor-widget-container">
                                                  <div class="pxl-text-editor">
                                                    <div class="pxl-item--inner" data-wow-delay="ms">
                                                      <p><a href="#">+1 (514) 706 0130</a></p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-2c4f206 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="2c4f206" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e36306f pxl-column-none" data-id="e36306f" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <section class="elementor-section elementor-inner-section elementor-element elementor-element-fce6ee6 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="fce6ee6" data-element_type="section" data-e-type="section">
                                <div class="elementor-container elementor-column-gap-extended">
                                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8c1b372 pxl-column-none" data-id="8c1b372" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-a8d9ffb elementor-widget elementor-widget-pxl_heading" data-id="a8d9ffb" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="pxl-pxl_heading-a8d9ffb-6892" class="pxl-heading px-sub-title-default-style">
                                            <div class="pxl-heading--inner">
                                              <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                                <span class="pxl-item--subtext">
                                                  <span class="pxl-item--icon pxl-mr-1">
                                                    <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                                  </span>
                                                  Our Client Have Trusted Us for our work
                                                  <span class="pxl-item--subdivider"></span>
                                                </span>
                                              </div>

                                              <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms"></h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-41dedcc pxl-column-none" data-id="41dedcc" data-element_type="column" data-e-type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div class="elementor-element elementor-element-b97caea elementor-widget elementor-widget-pxl_text_editor" data-id="b97caea" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_text_editor.default">
                                        <div class="elementor-widget-container">
                                          <div class="pxl-text-editor">
                                            <div class="pxl-item--inner wow skewIn" data-wow-delay="ms"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <div class="elementor-element elementor-element-053be1f elementor-widget elementor-widget-pxl_testimonial_carousel" data-id="053be1f" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_testimonial_carousel.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-swiper-sliders pxl-testimonial-carousel pxl-testimonial-carousel6 pxl-swiper-boxshadow style-2">
                                    <div class="pxl-carousel-inner">
                                      <div class="pxl-swiper-container" dir="ltr" data-settings='{"slide_direction":"horizontal","slide_percolumn":"1","slide_mode":"slide","slides_to_show":"2","slides_to_show_xxl":"2","slides_to_show_lg":"2","slides_to_show_md":"2","slides_to_show_sm":"1","slides_to_show_xs":"1","slides_to_scroll":"1","arrow":"false","pagination":"true","pagination_type":"bullets","pagination_number":"true","autoplay":"","pause_on_hover":"","pause_on_interaction":"true","delay":5000,"loop":"false","speed":500}'>
                                        <div class="pxl-swiper-wrapper">
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner wow skewIn" data-wow-delay="ms">
                                              <div class="pxl-item--desc el-empty">
                                                "I am extremely satisfied with the outstanding services provided by JKS
                                                Immigration. The entire team, especially the managing director, was
                                                incredibly professional, helpful, and approachable. They offered
                                                excellent guidance at every step of my immigration process, ensuring
                                                that my application was handled smoothly and effectively. Based on my
                                                experience, JKS Immigration always keeps your best interests in mind and
                                                delivers top-notch support ."
                                              </div>
                                              <div class="pxl-item--meta">
                                                <div class="wrap-meta-left">
                                                  <h5 class="pxl-item--title el-empty">Rajan</h5>
                                                  <div class="pxl-item--position el-empty"></div>
                                                </div>
                                                <div class="wrap-meta-right">
                                                  <i class="caseicon-star"></i>
                                                  4.8
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner wow skewIn" data-wow-delay="ms">
                                              <div class="pxl-item--desc el-empty">
                                                "I highly recommend JKS Immigration for handling your immigration
                                                process! 🌍 They always find the most efficient and stress-free way to
                                                guide you through the complexities of Canadian immigration. From start
                                                to finish, their professionalism and expertise made everything smooth
                                                and manageable. Thanks to their support, I’m now closer to reuniting
                                                with my wife and kids and fulfilling our dream of becoming Permanent
                                                Residents in Canada. 🇨🇦 "
                                              </div>
                                              <div class="pxl-item--meta">
                                                <div class="wrap-meta-left">
                                                  <h5 class="pxl-item--title el-empty">Parineeti</h5>
                                                  <div class="pxl-item--position el-empty"></div>
                                                </div>
                                                <div class="wrap-meta-right">
                                                  <i class="caseicon-star"></i>
                                                  4.8
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner wow skewIn" data-wow-delay="ms">
                                              <div class="pxl-item--desc el-empty">
                                                "When we first met Jasmine at JKS Immigration, we knew we were in the
                                                right hands. She listened to our situation, shared her expert advice,
                                                and answered our questions within minutes—saving us hours of searching
                                                on the CIC website! 🕒 If you're looking for clear guidance, expert
                                                consulting, and fast, reliable answers on Canadian immigration, look no
                                                further. JKS Immigration is here to make your journey easier, every step
                                                of the way"
                                              </div>
                                              <div class="pxl-item--meta">
                                                <div class="wrap-meta-left">
                                                  <h5 class="pxl-item--title el-empty">Jagbir Kaur</h5>
                                                  <div class="pxl-item--position el-empty"></div>
                                                </div>
                                                <div class="wrap-meta-right">
                                                  <i class="caseicon-star"></i>
                                                  4.8
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner wow skewIn" data-wow-delay="ms">
                                              <div class="pxl-item--desc el-empty">
                                                "When it comes to immigration services, JKS Immigration stands above the
                                                rest! 🌟 Our team is highly responsive, professional, and a pleasure to
                                                work with from start to finish. We address your questions quickly,
                                                ensure timely preparation of all documents, and keep you updated at
                                                every stage of the process. With our dedication to excellence, we make
                                                your immigration journey seamless and stress-free. If you're seeking
                                                reliable, top-tier immigration guidance, JKS Immigration is the name you
                                                can trust!"
                                              </div>
                                              <div class="pxl-item--meta">
                                                <div class="wrap-meta-left">
                                                  <h5 class="pxl-item--title el-empty">Rajdev</h5>
                                                  <div class="pxl-item--position el-empty"></div>
                                                </div>
                                                <div class="wrap-meta-right">
                                                  <i class="caseicon-star"></i>
                                                  4.8
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="pxl-swiper-dots style-6"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-2e5df0c elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="2e5df0c" data-element_type="section" data-e-type="section" data-settings='{"stretch_section":"section-stretched"}'>
                        <div class="elementor-container elementor-column-gap-extended">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67093d5 pxl-column-none" data-id="67093d5" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-b0ba5ff elementor-widget elementor-widget-pxl_heading" data-id="b0ba5ff" data-element_type="widget" data-e-type="widget" data-widget_type="pxl_heading.default">
                                <div class="elementor-widget-container">
                                  <div id="pxl-pxl_heading-b0ba5ff-8706" class="pxl-heading px-sub-title-default-style">
                                    <div class="pxl-heading--inner">
                                      <div class="pxl-item--subtitle px-sub-title-default pxl-split-text split-in-left" data-wow-delay="ms">
                                        <span class="pxl-item--subtext">
                                          <span class="pxl-item--icon pxl-mr-1">
                                            <i aria-hidden="true" class="fas fa-paper-plane"></i>
                                          </span>
                                          Latest News <span class="pxl-item--subdivider"></span>
                                        </span>
                                      </div>

                                      <h2 class="pxl-item--title pxl-split-text split-in-left" data-wow-delay="ms">
                                        Our Latest News Gives great glimpse of International Education
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="elementor-element elementor-element-9e37182 post-layout-post-2 elementor-invisible elementor-widget elementor-widget-pxl_post_carousel" data-id="9e37182" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="pxl_post_carousel.default">
                                <div class="elementor-widget-container">
                                  <div class="pxl-swiper-sliders pxl-post-carousel pxl-post-carousel2 pxl-swiper-boxshadow pxl-swiperarrow--middle pxl-blog-style2 style-2">
                                    <div class="pxl-carousel-inner">
                                      <div class="pxl-swiper-container" dir="ltr" data-settings='{"slide_direction":"horizontal","slide_percolumn":"1","slide_percolumnfill":"1","slide_mode":"slide","slides_to_show":"3","slides_to_show_xxl":"3","slides_to_show_lg":"3","slides_to_show_md":"2","slides_to_show_sm":"2","slides_to_show_xs":"1","slides_to_scroll":"1","slides_gutter":30,"arrow":"false","pagination":"false","pagination_type":"bullets","autoplay":"false","pause_on_hover":"true","pause_on_interaction":"true","delay":5000,"loop":"true","speed":500}'>
                                        <div class="pxl-swiper-wrapper">
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--featured">
                                                <a href="/other/study-work-permit-extension" style="
                                                    background-image: url(/images/wp-content__uploads__2025__02__Canada-Open-Work-Permit-extension.jpg);
                                                  "><img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2025__02__Canada-Open-Work-Permit-extension-600x259.jpg" width="600" height="259" alt="Canada open work permit extension" title="Study and work permit extensions" /></a>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--meta">
                                                  <div class="pxl-item--date pxl-date--box pxl-r-0">
                                                    February 10, 2025
                                                  </div>
                                                  <div class="pxl-item-comment">
                                                    <a href="/other/study-work-permit-extension#comments">0</a>
                                                  </div>
                                                </div>
                                                <h5 class="pxl-item--title">
                                                  <a href="/other/study-work-permit-extension">Study-Work Permit Extensions</a>
                                                </h5>
                                                <div class="pxl-item--content pxl-sz-content pxl-excerpt-line" style="-webkit-line-clamp: 2"></div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/other/study-work-permit-extension">
                                                    <span class="btn-readmore--text">View More</span>
                                                    <span class="btn-readmore--icon pxl-ml-10"><i class="flaticon-right-arrow-2 rtl-reverse"></i></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--featured">
                                                <a href="/other/canadian-citizenship" style="
                                                    background-image: url(/images/wp-content__uploads__2025__02__citizenship.png);
                                                  "><img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2025__02__citizenship-600x338.png" width="600" height="338" alt="Canadian citizenship" title="Canadian citizenship" /></a>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--meta">
                                                  <div class="pxl-item--date pxl-date--box pxl-r-0">
                                                    February 10, 2025
                                                  </div>
                                                  <div class="pxl-item-comment">
                                                    <a href="/other/canadian-citizenship#comments">0</a>
                                                  </div>
                                                </div>
                                                <h5 class="pxl-item--title">
                                                  <a href="/other/canadian-citizenship">Canadian Citizenship</a>
                                                </h5>
                                                <div class="pxl-item--content pxl-sz-content pxl-excerpt-line" style="-webkit-line-clamp: 2"></div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/other/canadian-citizenship">
                                                    <span class="btn-readmore--text">View More</span>
                                                    <span class="btn-readmore--icon pxl-ml-10"><i class="flaticon-right-arrow-2 rtl-reverse"></i></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--featured">
                                                <a href="/other/pr-card" style="
                                                    background-image: url(/images/wp-content__uploads__2025__02__PR-Card-Renewal-Img.jpg);
                                                  "><img loading="lazy" decoding="async" class="no-lazyload" src="/images/wp-content__uploads__2025__02__PR-Card-Renewal-Img-600x397.jpg" width="600" height="397" alt="PR card renewal Canada" title="PR card and renewal" /></a>
                                              </div>
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--meta">
                                                  <div class="pxl-item--date pxl-date--box pxl-r-0">
                                                    February 10, 2025
                                                  </div>
                                                  <div class="pxl-item-comment">
                                                    <a href="/other/pr-card#comments">0</a>
                                                  </div>
                                                </div>
                                                <h5 class="pxl-item--title">
                                                  <a href="/other/pr-card">PR Card &amp; Renewal</a>
                                                </h5>
                                                <div class="pxl-item--content pxl-sz-content pxl-excerpt-line" style="-webkit-line-clamp: 2"></div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/other/pr-card">
                                                    <span class="btn-readmore--text">View More</span>
                                                    <span class="btn-readmore--icon pxl-ml-10"><i class="flaticon-right-arrow-2 rtl-reverse"></i></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--meta">
                                                  <div class="pxl-item--date pxl-date--box pxl-r-0">
                                                    February 10, 2025
                                                  </div>
                                                  <div class="pxl-item-comment">
                                                    <a href="/visas/super-visa#comments">0</a>
                                                  </div>
                                                </div>
                                                <h5 class="pxl-item--title">
                                                  <a href="/visas/super-visa">\xA0Canada Super Visa\xA0</a>
                                                </h5>
                                                <div class="pxl-item--content pxl-sz-content pxl-excerpt-line" style="-webkit-line-clamp: 2"></div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/visas/super-visa">
                                                    <span class="btn-readmore--text">View More</span>
                                                    <span class="btn-readmore--icon pxl-ml-10"><i class="flaticon-right-arrow-2 rtl-reverse"></i></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--meta">
                                                  <div class="pxl-item--date pxl-date--box pxl-r-0">
                                                    February 10, 2025
                                                  </div>
                                                  <div class="pxl-item-comment">
                                                    <a href="/visas/study-visa#comments">0</a>
                                                  </div>
                                                </div>
                                                <h5 class="pxl-item--title">
                                                  <a href="/visas/study-visa">Study in Canada</a>
                                                </h5>
                                                <div class="pxl-item--content pxl-sz-content pxl-excerpt-line" style="-webkit-line-clamp: 2"></div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/visas/study-visa">
                                                    <span class="btn-readmore--text">View More</span>
                                                    <span class="btn-readmore--icon pxl-ml-10"><i class="flaticon-right-arrow-2 rtl-reverse"></i></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="pxl-swiper-slide">
                                            <div class="pxl-item--inner" data-wow-duration="1.2s">
                                              <div class="pxl-item--holder">
                                                <div class="pxl-item--meta">
                                                  <div class="pxl-item--date pxl-date--box pxl-r-0">
                                                    February 10, 2025
                                                  </div>
                                                  <div class="pxl-item-comment">
                                                    <a href="/visas/work-visa#comments">0</a>
                                                  </div>
                                                </div>
                                                <h5 class="pxl-item--title">
                                                  <a href="/visas/work-visa">Canada Work Visa</a>
                                                </h5>
                                                <div class="pxl-item--content pxl-sz-content pxl-excerpt-line" style="-webkit-line-clamp: 2"></div>
                                                <div class="pxl-item--button">
                                                  <a class="btn--readmore" href="/visas/work-visa">
                                                    <span class="btn-readmore--text">View More</span>
                                                    <span class="btn-readmore--icon pxl-ml-10"><i class="flaticon-right-arrow-2 rtl-reverse"></i></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="elementor-section elementor-top-section elementor-element elementor-element-2784205 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-section-overflow-visible pxl-bg-color-none pxl-section-overlay-none" data-id="2784205" data-element_type="section" data-e-type="section">
                        <div class="elementor-container elementor-column-gap-default">
                          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c82f679 pxl-column-none" data-id="c82f679" data-element_type="column" data-e-type="column">
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div class="elementor-element elementor-element-9eccb24 elementor-widget elementor-widget-html" data-id="9eccb24" data-element_type="widget" data-e-type="widget" data-widget_type="html.default">
                                <div class="elementor-widget-container">
                                  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"><\/script>
                                  <script>
                                    document.addEventListener("DOMContentLoaded", function () {
                                      particlesJS("falling-balls", {
                                        particles: {
                                          number: { value: 40 }, // Kitni balls hon
                                          shape: { type: "circle" }, // Shape of particles
                                          size: { value: 5, random: true },
                                          move: { direction: "bottom", speed: 2 }, // Falling effect
                                          color: { value: "#ff4500" }, // Color of balls (Change as needed)
                                          opacity: { value: 0.8, random: true },
                                          line_linked: { enable: false },
                                        },
                                      });
                                    });
                                  <\/script>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </article>`,"./pages/immigration-business-immigration.html":`<article id="pxl-post-4469" class="pxl---post post-4469 post type-post status-publish format-standard hentry category-immigrate">
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">Business Immigration</h2>
                    <div class="pxl-item--content clearfix">
                      <p>
                        Business immigrants are people who can invest in, or start businesses in Canada and are expected
                        to support the development of a strong and prosperous Canadian economy.
                      </p>

                      <p>
                        Individuals with business/managerial experience and relatively high net-worth may apply for a
                        Canadian permanent residence under the Canada Business Immigration Program in one of the
                        following four sub-categories:
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Self-Employed Program</h2>

                      <p>
                        This program is for people who are capable of creating their own employment, by contributing
                        athletically, culturally or artistically to Canada’s employment market. People with sufficient
                        funds and relevant work experience can apply for the Self-employed Program.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Start-up Visa</h2>

                      <p>
                        Start-up Visa candidates may apply if they have a qualifying innovative business that will help
                        grow the Canadian economy as well as create jobs in Canada. Successful applicants will get
                        permanent residence for both them and their families.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Business Visitor Visa</h2>

                      <p>
                        This visa is for business individuals who intend to stay temporarily in Canada in order to
                        engage in international business markets by growing, investing or creating business connections.
                        The Business Visitor Visa is for potential candidates who, among other requirements, do not
                        intend to impact directly on the Canadian job market.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">PNP Entrepreneur Visa</h2>

                      <p>
                        Entrepreneur programs like the New Brunswick Entrepreneurial Stream give immigrants the
                        opportunity to take advantage of Canada’s growing economic power, and possibly gain permanent
                        residence in Canada, along with their family.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Investor Visa</h2>

                      <p>
                        Depending on which Investor Visa candidates apply for they may stand the chance to gain
                        permanent residence for both themselves and their families by investing in Canada’s economy.
                      </p>

                      <h5 class="wp-block-heading">
                        Contact us if have want to apply for Super Visa / Visitor Visa / EE and so on. Email Us on\xA0<br />jksimmigration@gmail.com<br />
                      </h5>

                      <p></p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/immigration/business-immigration"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/immigration/business-immigration&amp;text=Business%20Immigration%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/immigration/business-immigration&amp;media=&amp;description=Business%20Immigration%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/immigration/business-immigration&amp;title=Business%20Immigration%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/immigration-express-entry.html":`<article id="pxl-post-4466" class="pxl---post post-4466 post type-post status-publish format-standard hentry category-immigrate">
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">Express Entry</h2>
                    <div class="pxl-item--content clearfix">
                      <p>
                        Express Entry is the fastest and most popular pathway for newcomers seeking a new life in
                        Canada. First introduced in 2015, Express Entry has become the main driver of skilled worker
                        immigration to Canada and one of the most popular immigration systems globally. Express Entry is
                        an application management system used by Immigration, Refugees and Citizenship Canada (IRCC) to
                        manage and process applications received through three of Canada’s federal economic immigration
                        programs for skilled workers.
                      </p>

                      <ul class="wp-block-list">
                        <li>Federal Skilled Worker (FSW)</li>

                        <li>Federal Skilled Trades (FST)</li>

                        <li>Canadian Experience Class (CEC)</li>
                      </ul>

                      <figure class="wp-block-image size-full">
                        <img decoding="async" width="801" height="501" src="/images/wp-content__uploads__2025__02__canadian-express-entry.jpg" alt="" class="wp-image-4467" sizes="(max-width: 801px) 100vw, 801px" />
                      </figure>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Applying to Express Entry is a two-step process.
                      </h2>

                      <p>The first step is to submit your profile which requires the following documents:</p>

                      <ul class="wp-block-list">
                        <li>Language test results</li>

                        <li>Educational credential assessment report</li>

                        <li>A passport or travel document</li>
                      </ul>

                      <p>
                        After you submit your profile and you receive an invitation to apply (ITA) for Canadian
                        permanent residence, you will need to provide a more substantial application that includes
                        reference letters, additional identity documents, police clearance certificates, and results of
                        a medical examination.<br />Contact us if have want to apply for Super Visa / Visitor Visa / EE
                        and so on. Email Us on<br />jksimmigration@gmail.com<br />
                      </p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/immigration/express-entry"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/immigration/express-entry&amp;text=Express%20Entry%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/immigration/express-entry&amp;media=&amp;description=Express%20Entry%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/immigration/express-entry&amp;title=Express%20Entry%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/immigration-family-and-spousal-immigration.html":`<article id="pxl-post-4471" class="pxl---post post-4471 post type-post status-publish format-standard hentry category-immigrate">
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">Family &amp; Spousal Sponsorship</h2>
                    <div class="pxl-item--content clearfix">
                      <h2 class="wp-block-heading" style="font-size: 40px">What is Canadian family sponsorship?</h2>

                      <p>
                        There are two main aspects to sponsorship:1) It allows your family member to immigrate to Canada
                        and get permanent residence (PR)2) It requires you, as an individual, to make a commitment to
                        provide for basic needs and to support that person financially.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Can you be a sponsor?</h2>

                      <p>
                        <strong>3.</strong>\xA0To sponsor a family member, you are required to meet several requirements
                        such as being:a Canadian citizen or permanent resident of Canada18 years of age or olderable to
                        support the sponsored person for several years
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Who can you sponsor?</h2>

                      <p>
                        Spouses and common-law partnersDependent childrenParents and grandparentsThere are exceptions to
                        this rule, however, and it may be possible to sponsor a non-immediate family member (for
                        example, a sister, niece, or uncle) if:you do not have any other immediate family members you
                        could sponsor, orYou have legally adopted them, and they meet the definition of a dependent
                        child
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">There are other requirements like:</h2>

                      <p>Income requirements to sponsorSponsorship undertaking’</p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Sponsor your Wife, Husband, or Common-law Partner
                      </h2>

                      <p>
                        <strong>If you are a Canadian citizen or permanent resident of Canada you may sponsor:</strong>Your spouse (you are legally married)Common-law partner (you are not legally married but have
                        been living together for at least 12 months in a conjugal relationship).Conjugal partner (you
                        are not legally married or in a common-law relationship and they are living outside
                        Canada)<strong>To be eligible for spousal or common-law partner sponsorship, you must:</strong>be 18 year of age, a Canadian permanent resident living in Canada or Canadian
                        citizen,demonstrate that you can provide for the basic needs for yourself and your spouse or
                        partner,Prove your relationship with the sponsored person is genuine by providing supporting
                        documentation.<strong>To be eligible for spousal or common-law partner sponsorship, the sponsored person
                          must:</strong>Be at least 18 years of age and not too closely related to you.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Sponsor your Dependent Children</h2>

                      <p>
                        You can sponsor your dependent children, whether natural or adopted, to live with you as
                        permanent residents in Canada.
                      </p>

                      <p>
                        <strong>Children must meet the following definition of a dependent child to be eligible for
                          sponsorship:</strong>A child is considered a dependent if he or she is not married or in a common-law relationship
                        and is under 22 years of age.If a child is over 22 years of age, they may be considered a
                        dependent if they have a physical or mental condition that prevents them from being able to
                        support themselves.<strong>To be eligible under this program, you:</strong>and your child abroad
                        must be approved by Immigration, Refugees and Citizenship Canada (IRCC) to receive a visa,must
                        prove your relationship with the child you are sponsoring, either by a birth or adoption
                        certificate.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Sponsor your Parents or Grandparents</h2>

                      <p>
                        The Parent and Grandparent Sponsorship Program (PGP) and the Super Visa Program are two programs
                        that offer Canadian citizens and permanent residents the opportunity to bring their parents and
                        grandparents to Canada.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        To be eligible under the Parents and Grandparents Program, you must:
                      </h2>

                      <p>
                        be a Canadian citizen or permanent resident living in Canada,be at least 18 years of age,be the
                        child or grandchild of the person(s) you are sponsoring,meet the Minimum Necessary Income (MNI)
                        required for the size of their familysign a sponsorship agreement that acknowledges your promise
                        to provide for the basic needs of family member(s) for a period of 20 years<br />Contact us if
                        have want to apply for Super Visa / Visitor Visa / EE and so on. Email Us on
                        jksimmigration@gmail.com<br />
                      </p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/immigration/family-and-spousal-immigration"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/immigration/family-and-spousal-immigration&amp;text=Family%20&amp;%20Spousal%20Sponsorship%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/immigration/family-and-spousal-immigration&amp;media=&amp;description=Family%20&amp;%20Spousal%20Sponsorship%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/immigration/family-and-spousal-immigration&amp;title=Family%20&amp;%20Spousal%20Sponsorship%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/immigration-provincial-nomination-programs.html":`<article id="pxl-post-4473" class="pxl---post post-4473 post type-post status-publish format-standard hentry category-immigrate">
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">PNPs(Provincial Nominee Programs)</h2>
                    <div class="pxl-item--content clearfix">
                      <p>
                        Canada’s provincial nominee programs (PNPs) offer a pathway to Canadian permanent residence for
                        individuals who are interested in immigrating to a specific Canadian province or territory.
                      </p>

                      <p>
                        Each Canadian province and territory operates its own PNP designed to meet its specific economic
                        and demographic needs. Program requirements and application procedures vary greatly between
                        provinces, so interested applicants should consult each of the provinces in order to determine
                        their eligibility.
                      </p>

                      <ul class="wp-block-list">
                        <li>Alberta</li>

                        <li>British Columbia</li>

                        <li>Manitoba</li>

                        <li>New Brunswick</li>

                        <li>Newfoundland and Labrador</li>

                        <li>Northwest Territories</li>

                        <li>Nova Scotia</li>

                        <li>Ontario</li>

                        <li>Prince Edward Island</li>

                        <li>Quebec</li>

                        <li>Saskatchewan</li>

                        <li>Yukon</li>
                      </ul>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Step-by-Step guide to applying to a Canadian PNP:
                      </h2>

                      <p>
                        <strong>1. Find the PNP that is right for you:</strong>\xA0Consult the list of provinces and
                        territories at the top of this page to determine where you would like to immigrate. Make sure to
                        check the requirements for each PNP to determine your eligibility.
                      </p>

                      <p>
                        <strong>2. Apply to your chosen PNP:</strong>\xA0Submit an application directly to your chosen
                        province or territory.
                      </p>

                      <p>
                        <strong>3. Obtain a Provincial Nomination certificate:\xA0</strong>If your application is
                        successful, the province or territory will nominate you to apply for Canadian permanent
                        residence.
                      </p>

                      <p>
                        <strong>4. Submit your application for permanent residence:</strong>\xA0Apply to the Canadian
                        federal government for permanent residence. If your chosen PNP is aligned with Express Entry,
                        you can do this online. If not, you must submit a paper-based application.
                      </p>

                      <h4 class="wp-block-heading">
                        Contact us if have want to apply for Super Visa / Visitor Visa / EE and so on. Email Us on
                        jksimmigration@gmail.com<br />
                      </h4>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/immigration/provincial-nomination-programs"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/immigration/provincial-nomination-programs&amp;text=PNPs(Provincial%20Nominee%20Programs)%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/immigration/provincial-nomination-programs&amp;media=&amp;description=PNPs(Provincial%20Nominee%20Programs)%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/immigration/provincial-nomination-programs&amp;title=PNPs(Provincial%20Nominee%20Programs)%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/other-canadian-citizenship.html":`<article id="pxl-post-4489" class="pxl---post post-4489 post type-post status-publish format-standard has-post-thumbnail hentry category-other">
                  <div class="pxl-item--image">
                    <img width="924" height="709" src="/images/wp-content__uploads__2023__11__slide-2-home-4.png" class="attachment-immigway-large size-immigway-large wp-post-image" alt="" decoding="async" sizes="(max-width: 924px) 100vw, 924px" />
                  </div>
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">Canadian Citizenship</h2>
                    <div class="pxl-item--content clearfix">
                      <p>
                        Permanent residents of Canada can become Canadian citizens if they have been permanent residents
                        of Canada and physically been in Canada for at least 3 of the last 5 years.
                      </p>

                      <figure class="wp-block-image size-large">
                        <img loading="lazy" decoding="async" width="1024" height="576" src="/images/wp-content__uploads__2025__02__citizenship-1024x576.png" alt="" class="wp-image-4490" sizes="(max-width: 1024px) 100vw, 1024px" />
                      </figure>

                      <p>To become a Canadian citizen, most applicants must:<br />be a permanent resident.</p>

                      <p>be in good health.</p>

                      <p>have lived in Canada for at least 3 out of the last 5 years (1,095 days).</p>

                      <p>have filed your taxes, if you need to pass a citizenship test.</p>

                      <p>
                        prove your language skills in English or French<br />Contact us if have want to apply for Super
                        Visa / Visitor Visa / EE and so on. Email Us on jksimmigration@gmail.com<br />
                      </p>

                      <p></p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/other/canadian-citizenship"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/other/canadian-citizenship&amp;text=Canadian%20Citizenship%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/other/canadian-citizenship&amp;media=/media/wp-content__uploads__2023__11__slide-2-home-4.png&amp;description=Canadian%20Citizenship%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/other/canadian-citizenship&amp;title=Canadian%20Citizenship%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/other-pr-card.html":`<article id="pxl-post-4486" class="pxl---post post-4486 post type-post status-publish format-standard has-post-thumbnail hentry category-other">
                  <div class="pxl-item--image">
                    <img width="1060" height="610" src="/images/wp-content__uploads__2025__02__bisnessman-hold-business-card-hand_151013-9150.jpg" class="attachment-immigway-large size-immigway-large wp-post-image" alt="" decoding="async" sizes="(max-width: 1060px) 100vw, 1060px" />
                  </div>
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">PR Card &amp; Renewal</h2>
                    <div class="pxl-item--content clearfix">
                      <h2 class="wp-block-heading">
                        The eligibility criteria for a person to become a permanent resident of Canada are as follows:
                      </h2>

                      <ul class="wp-block-list">
                        <li>Prove your identity.</li>

                        <li>Confirm that you have the permanent resident status.</li>

                        <li>Meet all the residency obligations.</li>
                      </ul>

                      <figure class="wp-block-image size-full">
                        <img loading="lazy" decoding="async" width="680" height="450" src="/images/wp-content__uploads__2025__02__PR-Card-Renewal-Img.jpg" alt="" class="wp-image-4487" sizes="(max-width: 680px) 100vw, 680px" />
                      </figure>

                      <h2 class="wp-block-heading" style="font-size: 42px">Eligibility for PR Card Renewal:</h2>

                      <ul class="wp-block-list">
                        <li>A permanent resident of Canada.</li>

                        <li>Be physically present in Canada.</li>

                        <li>Not under an effective removal order.</li>

                        <li>Free of conviction for any type of offense.</li>

                        <li>Not a Canadian citizen or registered Indian under the Indian Act.</li>

                        <li>Having proof of a lost or stolen PR card (if applicable).</li>
                      </ul>

                      <p>
                        Contact us if have want to apply for Super Visa / Visitor Visa / EE and so on. Email Us on
                        jksimmigration@gmail.com<br />
                      </p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/other/pr-card"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/other/pr-card&amp;text=PR%20Card%20&amp;%20Renewal%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/other/pr-card&amp;media=/media/wp-content__uploads__2025__02__bisnessman-hold-business-card-hand_151013-9150.jpg&amp;description=PR%20Card%20&amp;%20Renewal%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/other/pr-card&amp;title=PR%20Card%20&amp;%20Renewal%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/other-study-work-permit-extension.html":`<article id="pxl-post-4492" class="pxl---post post-4492 post type-post status-publish format-standard has-post-thumbnail hentry category-other">
                  <div class="pxl-item--image">
                    <img width="636" height="660" src="/images/wp-content__uploads__2023__11__boiz-testimonial-video-3.png" class="attachment-immigway-large size-immigway-large wp-post-image" alt="" decoding="async" sizes="(max-width: 636px) 100vw, 636px" />
                  </div>
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">Study-Work Permit Extensions</h2>
                    <div class="pxl-item--content clearfix">
                      <h2 class="wp-block-heading" style="font-size: 40px">Study permit extensions</h2>

                      <p>
                        The expiry date on your study permit tells you when you have to stop studying and leave Canada.
                      </p>

                      <p>
                        You can find the expiry date in the top right corner of your permit. This date is usually the
                        length of your study program, plus 90 days. The extra 90 days gives you time to prepare to leave
                        Canada or to extend your stay in Canada.
                      </p>

                      <p>
                        As an international student, if you want to renew your study permit, you should apply\xA0<strong>at least 30 days</strong>\xA0before the expiry date of your current status. Applying early allows you to remain in Canada
                        under the same conditions of your current study permit until you receive a decision.
                      </p>

                      <figure class="wp-block-image size-large">
                        <img loading="lazy" decoding="async" width="1024" height="334" src="/images/wp-content__uploads__2025__02__How-Do-I-Apply-for-a-Study-Permit-Extension-1024x334.jpg" alt="" class="wp-image-4493" sizes="(max-width: 1024px) 100vw, 1024px" />
                      </figure>

                      <h2 class="wp-block-heading" style="font-size: 40px">Work Permit Extensions</h2>

                      <p>
                        <strong>PGWP-Post-graduation work permits (PGWP)\xA0</strong>are a one-time opportunity for
                        international students. Those students must have graduated from a PGWP-eligible program at a
                        designated learning institution. A post-graduation work permit may be issued based on the length
                        of the study program for a minimum of 8 months up to a maximum of 3 years.
                      </p>

                      <figure class="wp-block-image size-full">
                        <img loading="lazy" decoding="async" width="856" height="370" src="/images/wp-content__uploads__2025__02__Canada-Open-Work-Permit-extension.jpg" alt="" class="wp-image-4494" sizes="(max-width: 856px) 100vw, 856px" />
                      </figure>

                      <h2 class="wp-block-heading" style="font-size: 40px">Open/Closed Work Permits</h2>

                      <p>
                        A\xA0<strong>closed work permit</strong>\xA0is issued to a foreign worker to work in the specific
                        position and for the specific employer that are listed on the LMIA. An\xA0<strong>open work permit</strong>, on the other hand, lets foreign workers work in any position, for any employer, anywhere in
                        Canada.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Bridging open work permit</h2>

                      <p>
                        Bridging Open Work Permits (BOWP) are for individuals who currently have a valid Canadian work
                        permit, which expires within 4 months and have applied for Permanent Residence under the
                        Economic Class such as through Express Entry. It is also mandatory for the work permit holder to
                        be in Canada for the application to be submitted.
                      </p>

                      <p>
                        The BOWP is an extension to an existing work permit, meant to allow them to keep working until
                        the applicant received PR. The applicant must also satisfy the eligibility criteria to receive a
                        BOWP.
                      </p>

                      <p>
                        If an applicant’s current work permit expires before they receive a decision regarding their
                        BOWP application, they may continue to work in Canada under implied status, until a final
                        decision has been issued regarding the BOWP application. However, if the application is denied,
                        the foreign national must cease working in Canada immediately. Continuing to work without a
                        valid work permit can risk any future permanent residency applications.
                      </p>

                      <h4 class="wp-block-heading">
                        Contact us if have want to apply for Super Visa / Visitor Visa / EE and so on. Email Us on
                        jksimmigration@gmail.com<br />
                      </h4>

                      <p></p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/other/study-work-permit-extension"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/other/study-work-permit-extension&amp;text=Study-Work%20Permit%20Extensions%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/other/study-work-permit-extension&amp;media=/media/wp-content__uploads__2023__11__boiz-testimonial-video-3.png&amp;description=Study-Work%20Permit%20Extensions%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/other/study-work-permit-extension&amp;title=Study-Work%20Permit%20Extensions%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/privacy-policy.html":`<article id="pxl-post-3" class="post-3 page type-page status-publish hentry">
                  <div class="pxl-entry-content clearfix">
                    <h2 class="wp-block-heading">Privacy Policy</h2>

                    <p>
                      This Privacy Policy outlines the types of personal information that we collect, how we use it, and
                      the circumstances under which we may share it. When you interact with our website and services, we
                      may gather data that details the pages you have accessed, how you found our site, and the
                      frequency of your visits. This information helps us enhance our website’s content and
                      functionality, enabling us to contact you as needed to provide relevant information.
                    </p>

                    <p>
                      When you engage with our services, we collect personal information to fulfill our business
                      purposes, such as evaluating your needs, processing your requests and transactions, informing you
                      about products and services that may interest you, and delivering customer service. This
                      information may include details such as your name, email address, phone number, mailing address,
                      birth date, and identification numbers necessary for identity verification. We may also obtain
                      background information from public records or other third parties not affiliated with us.
                    </p>

                    <p>
                      The personal information we collect is used for various purposes, including service provision,
                      customer support, marketing communications, and improving our website’s performance. We may share
                      your personal information with our affiliates for legitimate business purposes, ensuring they
                      maintain the same level of privacy protection as we do. Our affiliates may include other companies
                      within our group and partners without ownership interest in our company.
                    </p>

                    <p>
                      We do not sell or rent your personal information to third parties. However, we may disclose your
                      information to non-affiliated companies that assist in processing your transactions or provide
                      services on our behalf. These third parties are required to keep your information confidential and
                      use it only for the purposes we specify.
                    </p>

                    <p>
                      To enhance our services, we utilize cookies on our website. Cookies are small data files that help
                      us collect information about your preferences and usage patterns. This allows us to display
                      relevant content and advertisements based on your interests. The data gathered through cookies may
                      be linked with other information we obtain from legal sources.
                    </p>

                    <p>
                      In certain situations, we may be compelled to disclose your personal information to comply with
                      applicable laws, regulations, or legal requests. This could include cooperating with law
                      enforcement agencies or regulatory authorities in response to official inquiries or subpoenas.
                    </p>

                    <p>
                      You are not obligated to provide personal information; however, choosing not to do so may restrict
                      our ability to deliver certain services to you. We strive to maintain the accuracy of your
                      information and encourage you to notify us promptly of any changes.
                    </p>

                    <p>
                      We take the security of your personal information seriously and implement reasonable measures to
                      protect it from unauthorized access, use, or disclosure. While we aim to utilize commercially
                      acceptable means to safeguard your data, we acknowledge that no method of transmission over the
                      Internet or electronic storage is entirely secure.
                    </p>
                  </div>
                </article>`,"./pages/services-index.html":`<article id="pxl-post-hub" class="post page type-page status-publish hentry">
                  <div class="pxl-entry-content clearfix">
                    <div class="elementor elementor-hub" style="max-width: 900px; margin: 0 auto; padding: 40px 15px">
                      <h1 style="margin-bottom: 1em">Services</h1>
                      <p style="opacity: 0.85; margin-bottom: 2em">Choose a pathway below.</p>

                      <h2 id="immigration">Immigration</h2>
                      <ul style="margin-bottom: 2em; line-height: 1.8">
                        <li><a href="/immigration/express-entry">Express Entry</a></li>
                        <li>
                          <a href="/immigration/business-immigration">Business Immigration</a>
                        </li>
                        <li>
                          <a href="/immigration/family-and-spousal-immigration">Family &amp; Spousal Immigration</a>
                        </li>
                        <li>
                          <a href="/immigration/provincial-nomination-programs">Provincial Nominee Programs</a>
                        </li>
                      </ul>

                      <h2 id="visas">Visas</h2>
                      <ul style="margin-bottom: 2em; line-height: 1.8">
                        <li><a href="/visas/work-visa">Work Visa</a></li>
                        <li><a href="/visas/study-visa">Study Visa</a></li>
                        <li><a href="/visas/tourist-visa">Tourist / Visitor Visa</a></li>
                        <li><a href="/visas/super-visa">Super Visa</a></li>
                      </ul>

                      <h2 id="other-services">Other services</h2>
                      <ul style="line-height: 1.8">
                        <li><a href="/other/pr-card">PR Card Renewal</a></li>
                        <li>
                          <a href="/other/canadian-citizenship">Canadian Citizenship</a>
                        </li>
                        <li>
                          <a href="/other/study-work-permit-extension">Study &amp; Work Permit Extension</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>`,"./pages/terms-condition.html":`<article id="pxl-post-4655" class="post-4655 page type-page status-publish hentry">
                  <div class="pxl-entry-content clearfix">
                    <h2 class="wp-block-heading">TERMS &amp; CONDITION</h2>

                    <h3 class="wp-block-heading"><strong>1. Introduction</strong></h3>

                    <p>
                      At JKS Immigration Inc., we are committed to providing high-quality immigration consulting
                      services to our clients. Our expertise helps individuals navigate the complexities of immigration
                      processes. These Terms &amp; Conditions outline the rules and guidelines that govern your use of
                      our services. They are essential to protect both our clients and our company. We encourage you to
                      read these terms carefully.
                    </p>

                    <h3 class="wp-block-heading"><strong>2. Definitions</strong></h3>

                    <p>In these Terms &amp; Conditions, the following terms shall have the meanings set forth below:</p>

                    <ul class="wp-block-list">
                      <li><strong>“Client”</strong>: Any individual or entity that uses our services.</li>

                      <li>
                        <strong>“Services”</strong>: Immigration consulting services provided by JKS Immigration Inc.
                      </li>

                      <li>
                        <strong>“Website”</strong>: The online platform operated by JKS Immigration Inc., accessible at
                        [insert website URL].
                      </li>

                      <li>
                        <strong>“Agreement”</strong>: The collective terms and conditions set forth in this document and
                        any supplementary agreements.
                      </li>
                    </ul>

                    <h3 class="wp-block-heading"><strong>3. Entry and Permits</strong></h3>

                    <p>
                      Clients seeking immigration services must understand that all applications for immigration to
                      Canada are subject to the requirements of Canadian immigration authorities. While we strive to
                      provide accurate and timely information, we cannot guarantee the approval of any applications or
                      visas. The decision ultimately lies with the immigration authorities. Clients are encouraged to
                      consult the official Canadian government immigration website for the most current information
                      regarding immigration policies and procedures.
                    </p>

                    <h3 class="wp-block-heading"><strong>4. Intellectual Property</strong></h3>

                    <p>
                      All content on our website, including but not limited to text, graphics, logos, images, and
                      software, is the property of JKS Immigration Inc. and is protected by applicable intellectual
                      property laws. Unauthorized use of any content may violate copyright, trademark, and other laws.
                      Clients are granted a limited, non-exclusive, and revocable license to access and use the content
                      for personal, non-commercial purposes. Any other use, including commercial exploitation, is
                      strictly prohibited without prior written consent from JKS Immigration Inc.
                    </p>

                    <h3 class="wp-block-heading"><strong>5. Updates and Modifications</strong></h3>

                    <p>
                      JKS Immigration Inc. reserves the right to modify these Terms &amp; Conditions at any time. Any
                      changes will be effective immediately upon posting on the website. Continued use of our services
                      after changes are posted constitutes acceptance of the revised terms. Clients are encouraged to
                      review these Terms &amp; Conditions regularly to stay informed of any updates.
                    </p>

                    <h3 class="wp-block-heading"><strong>6. Paid Services</strong></h3>

                    <p>
                      Our services may require payment of fees, which will be clearly communicated at the time of
                      engagement. Clients agree to pay all applicable fees as outlined in their service agreement. Fees
                      are non-refundable unless explicitly stated otherwise in the agreement. JKS Immigration Inc.
                      reserves the right to adjust fees based on the nature of the services and will provide notice of
                      any changes.
                    </p>

                    <h3 class="wp-block-heading"><strong>7. Eligibility Assessment</strong></h3>

                    <p>
                      JKS Immigration Inc. offers eligibility assessments for immigration programs. These assessments
                      are based on the information provided by the client and are intended for informational purposes
                      only. Clients acknowledge that an assessment does not guarantee eligibility for any immigration
                      program and that eligibility is ultimately determined by immigration authorities based on their
                      specific criteria.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>8. Transactions and Collections</strong>
                    </h3>

                    <p>
                      Clients agree to provide accurate and complete information when engaging our services. JKS
                      Immigration Inc. may collect personal information necessary to provide services, process payments,
                      and fulfill legal obligations. By providing this information, clients consent to its use in
                      accordance with our Privacy Policy. It is the client’s responsibility to keep their personal
                      information up to date, and we will not be liable for any issues arising from outdated or
                      incorrect information.
                    </p>

                    <h3 class="wp-block-heading"><strong>9. Payment Fraud</strong></h3>

                    <p>
                      JKS Immigration Inc. takes payment fraud seriously. Any fraudulent payment activity will be
                      reported to the appropriate authorities, and the client may be liable for any costs incurred as a
                      result of such fraud. We employ secure payment processing systems to protect client information.
                      Clients are encouraged to report any suspicious activity related to their accounts immediately.
                    </p>

                    <h3 class="wp-block-heading"><strong>10. Privacy Policy</strong></h3>

                    <p>
                      Our commitment to your privacy is outlined in our Privacy Policy, which explains how we collect,
                      use, and protect your personal information. By using our services, you consent to the collection
                      and use of your information as described in our Privacy Policy. We are committed to safeguarding
                      your personal information and ensuring that it is used responsibly.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>11. No Guarantee of Acceptance</strong>
                    </h3>

                    <p>
                      While we strive to provide the best possible service, we cannot guarantee acceptance into any
                      immigration program. All applications are subject to the discretion of immigration authorities,
                      and we cannot predict the outcome of individual cases. Clients are encouraged to submit complete
                      and accurate applications to enhance their chances of success.
                    </p>

                    <h3 class="wp-block-heading"><strong>12. No Warranties</strong></h3>

                    <p>
                      JKS Immigration Inc. provides services on an “as is” and “as available” basis. We make no
                      representations or warranties of any kind, express or implied, regarding the accuracy,
                      reliability, or completeness of the information provided. Clients are responsible for verifying
                      the information and for making their own decisions based on the services rendered.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>13. Cancellation &amp; Refund Policy</strong>
                    </h3>

                    <p>
                      Clients may cancel services at any time; however, certain fees may apply based on the stage of the
                      application process. Refunds will only be issued in accordance with the terms outlined in the
                      client’s service agreement. Requests for refunds must be submitted in writing and will be
                      processed according to our internal policies. Refunds for services rendered up to the point of
                      cancellation may not be issued.
                    </p>

                    <h3 class="wp-block-heading"><strong>14. Limitation of Liability</strong></h3>

                    <p>
                      To the fullest extent permitted by law, JKS Immigration Inc. shall not be liable for any indirect,
                      incidental, consequential, or punitive damages arising from or related to the use of our services.
                      Our total liability, in any case, shall not exceed the fees paid by the client for the services in
                      question. This limitation applies to any claims arising from the use of our services or any
                      related services.
                    </p>

                    <h3 class="wp-block-heading"><strong>15. Governing Law</strong></h3>

                    <p>
                      These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of
                      [insert jurisdiction]. Any disputes arising from these terms shall be resolved in the courts
                      located in [insert jurisdiction], and clients agree to submit to the jurisdiction of these courts.
                    </p>

                    <h3 class="wp-block-heading"><strong>16. Confidentiality</strong></h3>

                    <p>
                      Clients acknowledge that in the course of using our services, they may provide confidential
                      information. JKS Immigration Inc. agrees to maintain the confidentiality of such information in
                      accordance with applicable laws and regulations. We will not disclose confidential information to
                      third parties without the client’s consent unless required by law.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>17. Non-Confidential Information</strong>
                    </h3>

                    <p>
                      Clients should be aware that any information shared with JKS Immigration Inc. may not be treated
                      as confidential if it is already public knowledge or independently developed by JKS Immigration
                      Inc. without reference to the client’s information. Clients are encouraged to refrain from
                      disclosing sensitive information that they do not wish to share.
                    </p>

                    <h3 class="wp-block-heading"><strong>18. Use of Information</strong></h3>

                    <p>
                      By providing information to JKS Immigration Inc., clients grant us the right to use that
                      information for the purposes of providing services, improving our offerings, and complying with
                      legal obligations. We may use aggregated, non-identifiable data for research and analysis
                      purposes.
                    </p>

                    <h3 class="wp-block-heading"><strong>19. Security of Information</strong></h3>

                    <p>
                      JKS Immigration Inc. employs reasonable security measures to protect client information. However,
                      no method of transmission over the internet or electronic storage is completely secure. Therefore,
                      we cannot guarantee absolute security. Clients are encouraged to use secure passwords and keep
                      their account information confidential.
                    </p>

                    <h3 class="wp-block-heading"><strong>20. Breach and/or Termination</strong></h3>

                    <p>
                      JKS Immigration Inc. reserves the right to terminate services immediately if a client breaches any
                      of these Terms &amp; Conditions. In the event of termination, the client will remain responsible
                      for any fees incurred prior to termination. Clients may terminate their agreement with us by
                      providing written notice.
                    </p>

                    <h3 class="wp-block-heading"><strong>21. Disclaimer of Warranties</strong></h3>

                    <p>
                      Except as explicitly provided in these Terms &amp; Conditions, JKS Immigration Inc. disclaims all
                      warranties, express or implied, regarding the services and the website. Clients use our services
                      at their own risk, and we do not guarantee that our services will be uninterrupted or error-free.
                    </p>

                    <h3 class="wp-block-heading"><strong>22. Indemnification</strong></h3>

                    <p>
                      Clients agree to indemnify and hold JKS Immigration Inc. harmless from any claims, damages,
                      losses, liabilities, and expenses arising from their use of our services or violation of these
                      Terms &amp; Conditions. This indemnification extends to our affiliates, partners, and employees.
                    </p>

                    <h3 class="wp-block-heading"><strong>23. Limitation of Liability</strong></h3>

                    <p>
                      The liability of JKS Immigration Inc. shall be limited to the maximum extent permitted by law. In
                      no event shall we be liable for any indirect, incidental, special, or consequential damages
                      arising out of or in connection with the use of our services. Clients acknowledge that they assume
                      all risks associated with using our services.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>24. Amendments and Novation to the Terms of Use</strong>
                    </h3>

                    <p>
                      JKS Immigration Inc. may amend these Terms &amp; Conditions at any time. Continued use of the
                      services after any amendments signifies acceptance of the new terms. Clients are encouraged to
                      review these terms regularly. Significant changes will be communicated to clients directly via
                      email or through notices on our website.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>25. Governing Law &amp; Jurisdiction</strong>
                    </h3>

                    <p>
                      These Terms &amp; Conditions shall be governed by the laws of [insert jurisdiction]. Any disputes
                      arising from these terms shall be resolved in accordance with the laws of [insert jurisdiction].
                      Clients agree to submit to the exclusive jurisdiction of the courts located in [insert
                      jurisdiction].
                    </p>

                    <h3 class="wp-block-heading"><strong>26. Miscellaneous</strong></h3>

                    <p>
                      These Terms &amp; Conditions constitute the entire agreement between the client and JKS
                      Immigration Inc. regarding the subject matter herein. If any provision of these terms is deemed
                      invalid or unenforceable, the remaining provisions shall remain in full force and effect. The
                      failure of JKS Immigration Inc. to enforce any right or provision of these terms shall not be
                      deemed a waiver of such right or provision.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>27. Amendments and Novation to the Terms of Use</strong>
                    </h3>

                    <p>
                      JKS Immigration Inc. reserves the right to amend or modify these Terms &amp; Conditions at any
                      time without prior notice. Any changes will be effective immediately upon posting on our website.
                      It is the client’s responsibility to review these terms periodically for updates. Continued use of
                      our services following the posting of changes constitutes acceptance of those changes. If you do
                      not agree to the modified terms, you must discontinue your use of our services.
                    </p>

                    <h3 class="wp-block-heading">
                      <strong>28. Governing Law &amp; Jurisdiction</strong>
                    </h3>

                    <p>
                      These Terms &amp; Conditions are governed by the laws of [Insert Jurisdiction], without regard to
                      its conflict of law principles. Any disputes arising out of or related to these terms shall be
                      resolved in the courts located within [Insert Jurisdiction]. Both parties agree to submit to the
                      exclusive jurisdiction of these courts.
                    </p>

                    <h3 class="wp-block-heading"><strong>29. Miscellaneous</strong></h3>

                    <h4 class="wp-block-heading"><strong>29.1 Severability</strong></h4>

                    <p>
                      If any provision of these Terms &amp; Conditions is found to be invalid or unenforceable, the
                      remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by
                      law.
                    </p>

                    <h4 class="wp-block-heading"><strong>29.2 Entire Agreement</strong></h4>

                    <p>
                      These Terms &amp; Conditions constitute the entire agreement between the client and JKS
                      Immigration Inc. regarding the subject matter hereof and supersede all prior agreements and
                      understandings, whether written or oral, relating to such subject matter.
                    </p>

                    <h4 class="wp-block-heading"><strong>29.3 Waiver</strong></h4>

                    <p>
                      No waiver of any term or condition of these Terms &amp; Conditions shall be deemed a further or
                      continuing waiver of such term or any other term, and any failure of JKS Immigration Inc. to
                      assert a right or provision under these Terms shall not constitute a waiver of such right or
                      provision.
                    </p>

                    <h4 class="wp-block-heading"><strong>29.4 Force Majeure</strong></h4>

                    <p>
                      JKS Immigration Inc. shall not be liable for any delay or failure to perform its obligations under
                      these Terms &amp; Conditions if such delay or failure is due to causes beyond its reasonable
                      control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil
                      or military authorities, fire, floods, accidents, or labor disputes.
                    </p>

                    <h3 class="wp-block-heading"><strong>30. Contact Information</strong></h3>

                    <p>If you have any questions about these Terms &amp; Conditions, please contact us at:</p>

                    <p>
                      <strong>JKS Immigration Inc.</strong><strong><br /></strong><strong>Address: </strong>2876 Rue
                      montcalm montreal Canada<br /><strong>Email: </strong><a href="mailto:boparaijasmine9@gmail.com">boparaijasmine9@gmail.com<br /></a><strong>Phone number: </strong>5148391313<br />5147060130
                    </p>
                  </div>
                </article>`,"./pages/visas-study-visa.html":`<article id="pxl-post-4481" class="pxl---post post-4481 post type-post status-publish format-standard hentry category-visa">
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">Study in Canada</h2>
                    <div class="pxl-item--content clearfix">
                      <p>
                        Canada has become one of the most sought-after destinations for international students, thanks
                        to its top-notch education system, affordable tuition fees, and multicultural environment. In
                        recent years, Canada has attracted thousands of students from across the globe who are eager to
                        pursue their academic dreams. This blog will walk you through the essentials of obtaining a
                        Canada student study visa and provide insight into why studying in Canada is an excellent choice
                        for students worldwide.<br /><strong>What is a Canada Student Study Visa?</strong>
                      </p>

                      <p>
                        A Canada student study visa is a document that allows international students to study at
                        designated learning institutions (DLIs) in Canada. This visa is essential for any international
                        student who wishes to study for more than six months in Canada. The process of obtaining this
                        visa may seem complex, but with the right guidance and preparation, it can be quite manageable.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Canada Study Permit vs. Canada Student Visa
                      </h2>

                      <p>
                        While the terms “study permit” and “student visa” are often used interchangeably, they serve
                        different purposes. A Canada student visa grants you permission to enter the country, whereas a
                        Canada study permit allows you to reside and study there. The study permit is essential for
                        enrolling in a program, and it must be kept valid throughout your time in Canada. Without a
                        valid study permit, international students cannot legally study in Canada.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Requirements for a Canada Student Study Visa
                      </h2>

                      <p>
                        To apply for a Canada student study visa, you must fulfill certain requirements. These include:
                      </p>

                      <ol class="wp-block-list">
                        <li>
                          <strong>Letter of Acceptance</strong>: You must have an acceptance letter from a recognized
                          Canadian educational institution, commonly known as a Designated Learning Institution (DLI).
                          Ensure that the DLI has a government approval number.
                        </li>

                        <li>
                          <strong>Proof of Financial Support</strong>: You need to provide evidence that you have
                          sufficient funds to cover your tuition fees, living expenses, and return transportation. The
                          minimum amount required varies depending on the province or territory you plan to study in.
                        </li>

                        <li>
                          <strong>Genuine Intent to Study</strong>: You must demonstrate that your primary reason for
                          entering Canada is to study and that you will leave the country once your permit expires.
                        </li>

                        <li>
                          <strong>Medical Examination</strong>: Some students may need to undergo a medical examination,
                          especially if they come from countries with high health risks or plan to stay for an extended
                          period.
                        </li>

                        <li>
                          <strong>Biometrics and Interview</strong>: You may be required to provide biometric data
                          (fingerprints and a photo) and attend an interview at your local visa office.
                        </li>

                        <li>
                          <strong>Clear Criminal Record</strong>: You need to prove that you do not have a criminal
                          record by providing a police clearance certificate.
                        </li>
                      </ol>

                      <h2 class="wp-block-heading" style="font-size: 40px">Cost of Education in Canada</h2>

                      <p>
                        The cost of studying in Canada is relatively affordable compared to other popular study
                        destinations like the United States, Australia, and the United Kingdom. The tuition fees vary
                        depending on the program and institution you choose. On average, international students can
                        expect to pay between CAD $13,000 and CAD $35,000 per year for undergraduate programs. Fields
                        such as humanities and arts are typically less expensive, while programs in medicine,
                        engineering, and business tend to be on the higher end.
                      </p>

                      <p>
                        For postgraduate courses, especially MBA programs, the tuition can range from CAD $30,000 to CAD
                        $42,000 per year. However, students have the opportunity to apply for scholarships to offset
                        these costs. Some common scholarships available for international students include the Vanier
                        Canada Graduate Scholarships and the Ontario Graduate Scholarship Program.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Post-Graduation Opportunities in Canada</h2>

                      <p>
                        One of the biggest advantages of studying in Canada is the wealth of post-graduation
                        opportunities available to international students. After completing their studies, many students
                        are eligible for a Post-Graduation Work Permit (PGWP), which allows them to work in Canada for
                        up to three years. This experience can be instrumental in gaining valuable work experience and
                        eventually applying for permanent residency.
                      </p>

                      <p>
                        Moreover, Canada has a high demand for skilled professionals in various fields such as
                        engineering, healthcare, information technology, and business. The job market is robust, and
                        students who have studied in Canada are often given preference by employers due to their
                        familiarity with the Canadian work environment.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Living Costs in Canada</h2>

                      <p>
                        In addition to tuition fees, international students must also consider the cost of living in
                        Canada. The living costs vary depending on the city or province, with cities like Toronto and
                        Vancouver being more expensive. On average, students should budget around CAD $10,000 to CAD
                        $15,000 per year for living expenses, including accommodation, food, transportation, and other
                        personal costs.
                      </p>

                      <p>
                        It is important to note that students studying in Canada with a valid study permit can work
                        part-time (up to 20 hours per week) during their academic sessions and full-time during
                        scheduled breaks, which can help cover some living expenses.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        How to Apply for a Canada Student Study Visa
                      </h2>

                      <p>The process of applying for a Canada student study visa involves several steps:</p>

                      <ol class="wp-block-list">
                        <li>
                          <strong>Apply to a DLI</strong>: The first step is to apply to a Canadian educational
                          institution and receive an acceptance letter.
                        </li>

                        <li>
                          <strong>Gather Required Documents</strong>: Collect all necessary documents, such as proof of
                          financial support, medical exams, and police clearance certificates.
                        </li>

                        <li>
                          <strong>Submit Your Application</strong>: Apply online or through a paper application at your
                          local Canadian visa office.
                        </li>

                        <li>
                          <strong>Wait for Approval</strong>: After submitting your application, you may need to attend
                          an interview or provide biometric data. Once your application is approved, you will receive
                          your student visa.
                        </li>

                        <li>
                          <strong>Arrival in Canada</strong>: Upon arriving in Canada, an immigration officer will issue
                          your study permit at the port of entry. Make sure to have all your documents handy.
                        </li>
                      </ol>

                      <h2 class="wp-block-heading" style="font-size: 40px">Conclusion</h2>

                      <p>
                        Canada is a land of opportunity for international students, offering high-quality education,
                        affordable tuition, and a wide range of post-graduation prospects. With the right preparation,
                        obtaining a Canada student study visa is a straightforward process that can open the door to an
                        enriching academic and professional journey in Canada. Whether you are looking to pursue
                        undergraduate or postgraduate studies, Canada provides a welcoming environment and a pathway to
                        success.
                      </p>

                      <p></p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/visas/study-visa"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/visas/study-visa&amp;text=Study%20in%20Canada%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/visas/study-visa&amp;media=&amp;description=Study%20in%20Canada%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/visas/study-visa&amp;title=Study%20in%20Canada%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/visas-super-visa.html":`<article id="pxl-post-4483" class="pxl---post post-4483 post type-post status-publish format-standard hentry category-visa">
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">\xA0Canada Super Visa\xA0</h2>
                    <div class="pxl-item--content clearfix">
                      <p>
                        The Canada Super Visa is a unique visitor visa designed specifically for parents and
                        grandparents of Canadian citizens and permanent residents. This visa allows extended family
                        members to visit and stay in Canada for extended periods, making it easier for families to spend
                        time together without the frequent need to renew their status. With a Canada Super Visa, parents
                        and grandparents can stay in the country for up to two years at a time without reapplying, a
                        significant extension over the traditional visitor visa’s six-month limit.<br />
                      </p>

                      <figure class="wp-block-image size-full">
                        <img decoding="async" width="600" height="315" src="/images/wp-content__uploads__2025__02__super-visa-for-canada-facts.jpg" alt="" class="wp-image-4484" sizes="(max-width: 600px) 100vw, 600px" />
                      </figure>

                      <h2 class="wp-block-heading" style="font-size: 40px">What is the Canada Super Visa?</h2>

                      <p>
                        The Canada Super Visa is a special type of multiple-entry visa that allows eligible parents and
                        grandparents of Canadian citizens or permanent residents to visit Canada for up to two years per
                        entry. Unlike a regular visitor visa, which permits a stay of up to six months, the Canada Super
                        Visa provides a longer duration, making it ideal for families looking to spend quality time
                        together. It’s a fantastic option for parents and grandparents who may not yet qualify for
                        permanent residency but wish to have extended visits in Canada.
                      </p>

                      <p>
                        The Super Visa is valid for up to 10 years, which means holders can come and go from Canada as
                        many times as they wish within that period, provided each stay does not exceed two years at a
                        time. However, for those who want to reside in Canada permanently, it’s important to consider
                        options like the Parent and Grandparent Sponsorship program.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Differences Between the Super Visa and the Visitor Visa
                      </h2>

                      <p>
                        The main difference between the Canada Super Visa and the standard visitor visa lies in the
                        length of stay permitted. While a visitor visa typically allows a stay of up to six months per
                        visit, the Super Visa enables parents and grandparents to remain in Canada for up to two years
                        without renewing their visa status. This extended period makes the Super Visa particularly
                        appealing for families who wish to have their loved ones stay longer.
                      </p>

                      <p>
                        For instance, with a visitor visa, your stay is limited to six months, after which you must
                        either leave Canada or apply for an extension. The Super Visa removes this limitation, allowing
                        parents and grandparents the comfort of a longer stay, which is particularly helpful for family
                        reunification.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Applying for the Canada Super Visa</h2>

                      <p>
                        Applying for the Canada Super Visa is straightforward, though it requires several important
                        documents and proofs. Here’s what you’ll need to include in your application:
                      </p>

                      <ol class="wp-block-list">
                        <li>
                          <strong>Proof of Relationship</strong>: Applicants must show that they are indeed the parents
                          or grandparents of a Canadian citizen or permanent resident. This can be demonstrated through
                          birth certificates or other official documents.
                        </li>

                        <li>
                          <strong>Letter of Invitation</strong>: The Canadian citizen or permanent resident child or
                          grandchild must provide a letter inviting the applicant to visit. This letter should include a
                          commitment to financial support for the duration of the stay and details about the household
                          size.
                        </li>

                        <li>
                          <strong>Financial Support Proof</strong>: The inviting child or grandchild must meet a minimum
                          income threshold known as the Low-Income Cut-Off (LICO). They need to provide documents such
                          as recent tax assessments, pay stubs, or Employment Insurance statements to show they can
                          financially support the applicant.
                        </li>

                        <li>
                          <strong>Medical Insurance</strong>: Applicants must have private health insurance from a
                          Canadian insurance company covering health care, hospitalization, and repatriation with a
                          minimum coverage of $100,000. This insurance should be valid for at least one year from the
                          date of entry to Canada.
                        </li>

                        <li>
                          <strong>Medical Examination</strong>: To be eligible, applicants must undergo a medical
                          examination to ensure they are medically admissible to Canada.
                        </li>
                      </ol>

                      <p>
                        These requirements ensure that the visiting family members have adequate support and healthcare
                        coverage, safeguarding both their well-being and Canada’s public resources.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Eligibility Criteria for the Canada Super Visa
                      </h2>

                      <p>
                        To qualify for the Canada Super Visa, applicants must meet several specific requirements. This
                        includes proving their relationship to a Canadian citizen or permanent resident, having
                        sufficient private health insurance, and showing that the hosting family meets the income
                        requirements. Meeting these conditions is crucial as it ensures the applicant has a support
                        system in Canada and does not burden the Canadian healthcare system.
                      </p>

                      <p>
                        Additionally, a processing fee of $100 per applicant is required, and applications should be
                        submitted from outside Canada. The visa is only open to parents and grandparents, meaning
                        siblings, cousins, or other extended family members are not eligible under this program.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Super Visa for Visa-Exempt Visitors</h2>

                      <p>
                        Some countries are exempt from needing a visa to visit Canada; however, this does not
                        automatically extend to the Canada Super Visa. Visa-exempt parents and grandparents can still
                        benefit from the Canada Super Visa program by following the same application process. Instead of
                        a visa stamp, successful applicants from visa-exempt countries receive a letter they can show at
                        the Canadian border, allowing them to stay for up to two years. Additionally, visa-exempt
                        visitors traveling by air will need an Electronic Travel Authorization (eTA).
                      </p>

                      <p>
                        This option is particularly helpful for parents and grandparents from visa-exempt countries who
                        still wish to enjoy the benefits of the Super Visa, as they can enter Canada and stay with
                        family for an extended period without renewing their visitor status every six months.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Extending the Canada Super Visa</h2>

                      <p>
                        If parents or grandparents holding a Canada Super Visa wish to stay beyond the two-year limit,
                        they can apply for an extension. This application should ideally be submitted 30 days before the
                        current stay expires. If the visa holder’s status expires while awaiting the extension decision,
                        they may remain in Canada under “implied status” until a decision is reached.
                      </p>

                      <p>
                        The option to extend adds flexibility, making the Super Visa a more accommodating choice for
                        families who may need more time together or face unforeseen circumstances that require a longer
                        stay.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Permanent Immigration: Parent and Grandparent Sponsorship
                      </h2>

                      <p>
                        While the Canada Super Visa provides an excellent temporary solution, families looking for a
                        more permanent arrangement can consider the Parent and Grandparent Sponsorship program. This
                        program allows Canadian citizens and permanent residents to sponsor their parents and
                        grandparents for permanent residency, offering a pathway to settling in Canada. The sponsorship
                        program has specific requirements and annual quotas, so it’s worth exploring early if long-term
                        residency is the goal.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Conclusion</h2>

                      <p>
                        The Canada Super Visa is a remarkable option for parents and grandparents looking to spend
                        extended periods with their family in Canada. With up to two years of continuous stay,
                        straightforward application requirements, and the possibility of extending or re-entering as
                        needed, it’s a perfect fit for those seeking family reunification without a permanent residency
                        commitment. For families eager to bridge distances and enjoy more time together, the Canada
                        Super Visa offers an accessible and practical solution.
                      </p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/visas/super-visa"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/visas/super-visa&amp;text=%C2%A0Canada%20Super%20Visa%C2%A0%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/visas/super-visa&amp;media=&amp;description=%C2%A0Canada%20Super%20Visa%C2%A0%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/visas/super-visa&amp;title=%C2%A0Canada%20Super%20Visa%C2%A0%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/visas-tourist-visa.html":`<article id="pxl-post-4475" class="pxl---post post-4475 post type-post status-publish format-standard hentry category-visa">
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">Canada Tourist Visa</h2>
                    <div class="pxl-item--content clearfix">
                      <p>
                        Canada, with its stunning natural landscapes, multicultural cities, and friendly people, is a
                        dream destination for many travelers worldwide. But to visit Canada, most international visitors
                        need a
                        <strong>Canadian Tourist Visa</strong>, also known as a Temporary Resident Visa (TRV). This
                        guide provides an overview of what the Canadian Tourist Visa is, who needs it, and how you can
                        apply for it.
                      </p>

                      <figure class="wp-block-gallery has-nested-images columns-default is-cropped wp-block-gallery-1 is-layout-flex wp-block-gallery-is-layout-flex">
                        <figure class="wp-block-image size-large">
                          <img decoding="async" width="1024" height="448" data-id="4476" src="/images/wp-content__uploads__2025__02__visitor-visa.jpg" alt="" class="wp-image-4476" sizes="(max-width: 1024px) 100vw, 1024px" />
                        </figure>
                      </figure>

                      <h2 class="wp-block-heading" style="font-size: 40px">What is a Canadian Tourist Visa?</h2>

                      <p>
                        A <strong>Canadian Tourist Visa</strong> allows foreign nationals to visit Canada for a limited
                        period for leisure, tourism, or visiting family. With a tourist visa, you can enjoy all the
                        wonders of Canada for up to six months at a time. The visa can be either single-entry or
                        multiple-entry, depending on the applicant’s circumstances and the visa officer’s discretion.
                      </p>

                      <p>
                        In most cases, applicants receive a multiple-entry visa, which allows them to enter and exit
                        Canada multiple times, as long as their visa is valid. A single-entry visa, however, only allows
                        one visit to Canada. Multiple-entry visas offer more flexibility, especially for visitors
                        planning more frequent trips to Canada.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Key Features of the Canadian Tourist Visa
                      </h2>

                      <p>
                        When planning your visit to Canada, keep the following points about the
                        <strong>Canadian Tourist Visa</strong> in mind:
                      </p>

                      <ol class="wp-block-list">
                        <li>
                          <strong>Purpose of Visit</strong>: This visa is intended for leisure, tourism, or visiting
                          family and friends. It does not permit holders to work in Canada or seek employment.
                        </li>

                        <li>
                          <strong>Duration of Stay</strong>: You can stay in Canada for up to six months at a time. If
                          you want to extend your stay, you will need to apply for an extension before your visa
                          expires.
                        </li>

                        <li>
                          <strong>Dependents Allowed</strong>: Your spouse and children can accompany you if they apply
                          for their own tourist visas.
                        </li>

                        <li>
                          <strong>Processing Time</strong>: Generally, processing times for a Canadian Tourist Visa
                          range from a few days to several weeks, depending on the country you’re applying from.
                        </li>
                      </ol>

                      <h2 class="wp-block-heading" style="font-size: 40px">Who Needs a Canadian Tourist Visa?</h2>

                      <p>
                        Citizens from many countries are required to obtain a
                        <strong>Canadian Tourist Visa</strong> to enter Canada. If you’re from a visa-exempt country,
                        you may need an Electronic Travel Authorization (eTA) instead. You can check on Canada’s
                        official immigration website to see if your country requires a visa or an eTA for short visits
                        to Canada.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Eligibility Requirements for a Canadian Tourist Visa
                      </h2>

                      <p>
                        To qualify for a Canadian Tourist Visa, applicants must meet specific criteria to ensure they
                        will respect Canadian laws and fulfill the purpose of their visit. Some key eligibility
                        requirements include:
                      </p>

                      <ol class="wp-block-list">
                        <li>
                          <strong>Proof of Sufficient Funds</strong>: You need to demonstrate that you have enough money
                          to support yourself and any family members accompanying you during your stay in Canada.
                        </li>

                        <li>
                          <strong>Purpose of Visit</strong>: You must clearly state the purpose of your visit and
                          provide a convincing reason to return to your home country, like family ties, job
                          responsibilities, or property ownership.
                        </li>

                        <li>
                          <strong>Good Health</strong>: Some applicants may need to undergo a medical exam, depending on
                          their country of residence.
                        </li>

                        <li>
                          <strong>No Criminal Record</strong>: Applicants with a criminal background may be denied entry
                          unless they can prove rehabilitation.
                        </li>

                        <li>
                          <strong>Letter of Invitation</strong>: If you’re staying with relatives or friends, a letter
                          of invitation from your host in Canada can support your application.
                        </li>
                      </ol>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Documents Required for the Canadian Tourist Visa
                      </h2>

                      <p>
                        When applying for a <strong>Canadian Tourist Visa</strong>, ensure that you gather all required
                        documents to avoid processing delays. Essential documents generally include:
                      </p>

                      <ol class="wp-block-list">
                        <li>
                          <strong>Valid Passport</strong>: Your passport must be valid for the entire duration of your
                          intended stay in Canada.
                        </li>

                        <li>
                          <strong>Proof of Financial Means</strong>: Recent bank statements, pay stubs, or sponsorship
                          letters (if someone else is funding your trip).
                        </li>

                        <li>
                          <strong>Travel Itinerary</strong>: Include your flight and accommodation bookings to show the
                          dates and locations of your travel in Canada.
                        </li>

                        <li>
                          <strong>Letter of Invitation (if applicable)</strong>: If you’re visiting family or friends in
                          Canada, a letter from them can help support your application.
                        </li>

                        <li>
                          <strong>Proof of Ties to Home Country</strong>: This may include proof of employment, property
                          ownership, or enrollment in a university to show you intend to return home.
                        </li>
                      </ol>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Steps to Apply for a Canadian Tourist Visa
                      </h2>

                      <p>
                        The application process for a Canadian Tourist Visa is straightforward but requires careful
                        attention to detail:
                      </p>

                      <ol class="wp-block-list">
                        <li>
                          <strong>Fill Out the Application Form</strong>: Visit the official Government of Canada
                          website, download the Tourist Visa application form, and complete it accurately. Double-check
                          all information before submitting.
                        </li>

                        <li>
                          <strong>Gather Supporting Documents</strong>: Collect all required documents, including your
                          passport, financial statements, and any additional documents specific to your case.
                        </li>

                        <li>
                          <strong>Pay the Visa Fee</strong>: You will need to pay a non-refundable visa processing fee.
                          Fees vary by country, so check the latest fees on the official website.
                        </li>

                        <li>
                          <strong>Submit the Application</strong>: Applications can typically be submitted online or at
                          a local Visa Application Centre (VAC) if online submission is not an option.
                        </li>

                        <li>
                          <strong>Biometrics Appointment</strong>: Depending on your nationality, you may need to visit
                          a VAC for biometrics, including fingerprints and a photograph.
                        </li>
                      </ol>

                      <h2 class="wp-block-heading" style="font-size: 40px">What to Expect After Applying</h2>

                      <p>
                        After you’ve submitted your application, you can monitor its progress online. Processing times
                        vary, but most applications are completed within a few weeks. If additional documents or an
                        interview are required, you’ll be notified.
                      </p>

                      <p>
                        Once approved, you’ll receive a visa sticker in your passport, allowing you to enter Canada for
                        tourism purposes. Make sure to adhere to the dates on your visa and respect Canadian immigration
                        rules to avoid issues on future trips.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">FAQs About the Canadian Tourist Visa</h2>

                      <p>
                        <strong>1. Can I extend my Canadian Tourist Visa?</strong><strong><br /></strong>Yes, if you’re
                        already in Canada and want to stay longer, you can apply to extend your stay by applying for a
                        Visitor Record. Be sure to apply before your current status expires.
                      </p>

                      <p>
                        <strong>2. Can I work on a Canadian Tourist Visa?</strong><strong><br /></strong>No, a
                        <strong>Canadian Tourist Visa</strong> does not permit you to work in Canada. You will need to
                        apply for a separate work permit if you intend to work during your stay.
                      </p>

                      <p>
                        <strong>3. How long can I stay on a Canadian Tourist Visa?</strong><strong><br /></strong>Most
                        tourist visas allow you to stay for up to six months at a time. However, the border officer will
                        decide your length of stay at the time of entry.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">Conclusion</h2>

                      <p>
                        Obtaining a <strong>Canadian Tourist Visa</strong> can open doors to an unforgettable experience
                        in Canada. Whether you plan to explore its vast landscapes, visit family, or enjoy Canada’s
                        diverse cities, the tourist visa allows you to experience Canada’s wonders while adhering to its
                        rules. Make sure to gather all required documents, understand eligibility requirements, and be
                        prepared to demonstrate that you meet all criteria for a smooth visa application process. With
                        proper planning, you can look forward to a seamless and enjoyable visit to Canada!
                      </p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/visas/tourist-visa"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/visas/tourist-visa&amp;text=Canada%20Tourist%20Visa%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/visas/tourist-visa&amp;media=&amp;description=Canada%20Tourist%20Visa%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/visas/tourist-visa&amp;title=Canada%20Tourist%20Visa%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`,"./pages/visas-work-visa.html":`<article id="pxl-post-4478" class="pxl---post post-4478 post type-post status-publish format-standard hentry category-visa">
                  <div class="pxl-item--holder">
                    <span class="pxl-item--date">February 10, 2025</span>

                    <h2 class="pxl-item-title">Canada Work Visa</h2>
                    <div class="pxl-item--content clearfix">
                      <p>
                        Canada has become one of the top destinations for people seeking new career opportunities, and
                        obtaining a Canada work permit is the gateway to making that possible. With an increasingly
                        diverse job market and a welcoming approach toward skilled workers, Canada is an ideal place to
                        gain valuable work experience or even build a new life. This guide will walk you through the
                        process of applying for a Canada work permit, covering eligibility criteria, permit types, the
                        application process, and key insights to help make the journey smoother.<br />
                      </p>

                      <figure class="wp-block-image size-large">
                        <img decoding="async" width="1024" height="476" src="/images/wp-content__uploads__2025__02__Work-in-Canada-1024x476.jpg" alt="" class="wp-image-4479" sizes="(max-width: 1024px) 100vw, 1024px" />
                      </figure>

                      <p><strong>Understanding the Canada Work Permit</strong></p>

                      <p>
                        A Canada work permit is an official authorization that allows foreign nationals to work in
                        Canada for a specific period. Each year, thousands of permits are issued to professionals from
                        around the world, offering them the opportunity to contribute to and benefit from Canada’s
                        workforce. For some individuals, a Canada work permit can also serve as a path toward permanent
                        residency, allowing them to transition from temporary workers to long-term residents.
                        Understanding what a Canada work permit entails can help you determine the best route to take if
                        you’re planning to work in Canada.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Who is Eligible for a Canada Work Permit?
                      </h2>

                      <p>
                        To be eligible for a Canada work permit, applicants generally need a job offer from a Canadian
                        employer, accompanied by a Labour Market Impact Assessment (LMIA) in most cases. An LMIA acts as
                        evidence that the Canadian labor market has no available citizens or permanent residents
                        qualified to fill the position, thereby justifying the need to hire a foreign worker. However,
                        there are cases where an LMIA or job offer is not required, such as for graduates of Canadian
                        universities or spouses of international students.
                      </p>

                      <p>
                        Meeting basic eligibility criteria is essential to apply for a Canada work permit successfully.
                        Here are some fundamental requirements:
                      </p>

                      <ul class="wp-block-list">
                        <li>
                          Applicants must prove they intend to leave Canada upon the expiration of their work permit.
                        </li>

                        <li>
                          They should demonstrate sufficient funds to support themselves and their family during their
                          stay.
                        </li>

                        <li>A clean criminal record is required, often supported by a police clearance certificate.</li>

                        <li>
                          In some cases, a medical exam is necessary to ensure the applicant’s health status aligns with
                          Canadian health regulations.
                        </li>

                        <li>
                          The employer hiring the foreign worker must be on the list of eligible Canadian employers.
                        </li>
                      </ul>

                      <p>
                        Being aware of these eligibility requirements and ensuring that you meet them can increase the
                        likelihood of a successful Canada work permit application.
                      </p>

                      <h2 class="wp-block-heading font-size: 50px;" style="font-size: 40px">
                        Types of Canada Work Permits
                      </h2>

                      <p>
                        Canada offers different types of work permits to suit various professional needs and
                        circumstances. Choosing the appropriate work permit depends on factors like the applicant’s
                        qualifications, type of job, and work experience.
                      </p>

                      <h4 class="wp-block-heading">
                        <strong>1. Employer-Specific (Closed) Work Permit</strong>
                      </h4>

                      <p>
                        An employer-specific, or closed, work permit ties the worker to one specific employer. This type
                        of Canada work permit is common when the worker has a job offer and requires an LMIA to support
                        their application. The closed permit is designed to ensure that foreign nationals contribute to
                        the Canadian economy in specific roles that benefit the country and that no Canadian citizen or
                        permanent resident is available to perform the job.
                      </p>

                      <h4 class="wp-block-heading"><strong>2. Open Work Permit</strong></h4>

                      <p>
                        An open work permit, on the other hand, allows foreign workers to work for any employer in
                        Canada. This flexibility makes it an attractive choice for individuals who might want to change
                        jobs or explore various employment opportunities. Open work permits are often granted to
                        international students after they graduate, spouses of skilled workers, or family-sponsored
                        applicants.
                      </p>

                      <h4 class="wp-block-heading">
                        <strong>3. Special Programs and International Agreements</strong>
                      </h4>

                      <p>
                        Certain special programs and agreements, such as the North American Free Trade Agreement (NAFTA)
                        and the Comprehensive Economic and Trade Agreement (CETA), allow foreign nationals to obtain
                        work permits in Canada without an LMIA. These permits are typically for professionals from
                        specific countries or industries and have simpler application procedures.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        The Canada Work Permit Application Process
                      </h2>

                      <p>
                        Applying for a Canada work permit may feel complex, but understanding each step can make it much
                        easier. Here’s a step-by-step breakdown of the application process:
                      </p>

                      <p>
                        <strong>Step 1: Determine Eligibility</strong><strong><br /></strong>Before beginning your
                        application, ensure that you meet all requirements for the Canada work permit, including
                        securing a job offer and LMIA if needed.
                      </p>

                      <p>
                        <strong>Step 2: Gather Required Documents</strong><strong><br /></strong>Necessary documents
                        include a passport, job offer letter, LMIA (if applicable), proof of funds, and sometimes a
                        police clearance certificate. For some applicants, medical examination results or biometrics may
                        also be required.
                      </p>

                      <p>
                        <strong>Step 3: Submit Your Application</strong><strong><br /></strong>Applications can be
                        submitted online through the Government of Canada’s official website. Processing times for a
                        Canada work permit vary depending on the applicant’s country of residence and the type of work
                        permit being applied for.
                      </p>

                      <p>
                        <strong>Step 4: Wait for Processing</strong><strong><br /></strong>Processing times can range
                        from several weeks to months, depending on the specifics of the application. During this time,
                        it is advisable to check for updates regularly and provide additional information if requested
                        by immigration authorities.
                      </p>

                      <p>
                        <strong>Step 5: Receive Your Work Permit</strong><strong><br /></strong>Once approved, the
                        Canada work permit will specify the conditions of employment, including the job role, location,
                        and duration of stay. It is crucial to adhere to these conditions to avoid complications during
                        your time in Canada.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Bringing Family Members on a Canada Work Permit
                      </h2>

                      <p>
                        If you’re planning to move to Canada on a work permit, it’s possible for your family to
                        accompany you. Spouses and dependent children of Canada work permit holders can often apply to
                        join them. In many cases, spouses are eligible for an open work permit, which allows them to
                        work for any employer in Canada. Children of school age may attend Canadian schools without
                        needing a separate study permit, making it easier for families to transition smoothly into
                        Canadian life.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Costs Associated with a Canada Work Permit
                      </h2>

                      <p>
                        A Canada work permit application typically involves certain costs. Fees vary based on the type
                        of permit being applied for. An employer-specific (closed) work permit generally costs around
                        $155 CAD, while an open work permit is approximately $255 CAD. Additional expenses may include
                        medical exams, police clearances, and biometrics. Though these costs can add up, they represent
                        an investment in a career opportunity that could ultimately lead to permanent residence in
                        Canada.
                      </p>

                      <h2 class="wp-block-heading" style="font-size: 40px">
                        Tips for a Successful Canada Work Permit Application
                      </h2>

                      <p>To improve the chances of securing a Canada work permit, consider these practical tips:</p>

                      <ul class="wp-block-list">
                        <li>
                          <strong>Organize Your Documents</strong>: Ensuring you have all required documentation before
                          submission is essential. Missing paperwork can delay your application.
                        </li>

                        <li>
                          <strong>Follow LMIA Guidelines</strong>: If your application requires an LMIA, make sure your
                          job offer meets the LMIA criteria.
                        </li>

                        <li>
                          <strong>Provide Accurate Information</strong>: Transparency with Canadian authorities can
                          prevent potential issues in the future.
                        </li>

                        <li>
                          <strong>Check Application Status Regularly</strong>: Staying informed about your application
                          status and complying with any follow-up requests can also make a difference.
                        </li>
                      </ul>

                      <h2 class="wp-block-heading" style="font-size: 40px">Frequently Asked Questions (FAQs)</h2>

                      <p>
                        <strong>1. Can I apply for a Canada work permit without a job offer?</strong><strong><br /></strong>Yes, certain applicants, such as international graduates from Canadian
                        institutions or spouses of skilled workers, may qualify for an open work permit without a job
                        offer.
                      </p>

                      <p>
                        <strong>2. How long does it take to process a Canada work permit application?</strong><strong><br /></strong>Processing times vary depending on the applicant’s country of residence
                        and the type of permit. Generally, it can take anywhere from a few weeks to several months.
                      </p>

                      <p>
                        <strong>3. Is an LMIA always required to obtain a Canada work permit?</strong><strong><br /></strong>No, not all work permits require an LMIA. Open work permits and some
                        employer-specific permits under international agreements may not need an LMIA.
                      </p>

                      <p>
                        <strong>4. Can my family join me in Canada if I hold a work permit?</strong><strong><br /></strong>Yes, family members such as spouses and dependent children can usually
                        accompany you to Canada. In some cases, your spouse may be eligible for an open work permit.
                      </p>

                      <p>
                        <strong>5. Can a Canada work permit lead to permanent residency?</strong><strong><br /></strong>Yes, a Canada work permit can be a pathway to permanent residency.
                        Working in Canada can earn you points under Canada’s Express Entry system, improving your
                        chances of securing permanent resident status.<br />
                      </p>

                      <p></p>
                    </div>
                  </div>

                  <div class="pxl--post-footer">
                    <div class="pxl--social">
                      <label class="pxl-mr-19">Share:</label>
                      <a class="fb-social" title="Facebook" target="_blank" href="http://www.facebook.com/sharer/sharer.php?u=/visas/work-visa"><i class="caseicon-facebook"></i>Facebook</a>
                      <a class="tw-social" title="Twitter" target="_blank" href="https://twitter.com/intent/tweet?url=/visas/work-visa&amp;text=Canada%20Work%20Visa%20"><i class="caseicon-twitter"></i>Twitter</a>
                      <a class="pin-social" title="Pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=/visas/work-visa&amp;media=&amp;description=Canada%20Work%20Visa%20"><i class="caseicon-pinterest"></i>Pinterest</a>
                      <a class="lin-social" title="LinkedIn" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=/visas/work-visa&amp;title=Canada%20Work%20Visa%20"><i class="caseicon-linkedin"></i>Linkedin</a>
                    </div>
                  </div>

                  <div class="pxl-post--author-info pxl-item--flexnw">
                    <div class="pxl-post--author-image pxl-mr-28">
                      <img alt="" src="https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=160&amp;d=mm&amp;r=g" srcset="
                          https://secure.gravatar.com/avatar/d6c34337617e4adf73de277141c2e4a7c2bb200981db3253813b00e2d43de71b?s=320&amp;d=mm&amp;r=g 2x
                        " class="avatar avatar-160 photo" height="160" width="160" decoding="async" />
                    </div>
                    <div class="pxl-post--author-meta">
                      <h5 class="pxl-post--author-title">
                        <a href="/" title="Posts by admin" rel="author">admin</a>
                      </h5>
                      <div class="pxl-post--author-description"></div>
                      <div class="pxl-post--author-social"></div>
                    </div>
                  </div>
                </article>`})).map(([e,t])=>[e.replace(/\\/g,`/`).split(`/`).pop(),t]));function Of(e){return Df[e]??``}var kf={class:`footer-layout`},Af={key:1,class:`footer-fallback`},jf=zo({__name:`Footer`,setup(e){let t=Of(`footer.html`);return(e,n)=>(z(),ta(`div`,kf,[Xt(t)?(z(),na(Ef,{key:0,html:Xt(t)},null,8,[`html`])):(z(),ta(`footer`,Af,[...n[0]||=[B(`p`,null,[B(`a`,{href:`mailto:jksimmigration@gmail.com`},`jksimmigration@gmail.com`),ua(` · `),B(`a`,{href:`tel:+15147060130`},`+1 (514) 706 0130`)],-1)]]))]))}},[[`__scopeId`,`data-v-9b30d9d5`]]),Mf={id:`pxl-wapper`,class:`jks-app jks-wapper pxl-wapper`},Nf={id:`main`,class:`jks-main`},Pf=zo({__name:`MainLayout`,setup(e){return(e,t)=>{let n=Or(`router-view`);return z(),ta(`div`,Mf,[V(bl),B(`main`,Nf,[V(n)]),V(jf)])}}},[[`__scopeId`,`data-v-f9644918`]]),Ff=`modulepreload`,If=function(e){return`/`+e},Lf={},Rf=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=If(t,n),t in Lf)return;Lf[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Ff,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},zf=[{path:`/`,component:Pf,children:[{path:``,name:`home`,component:()=>Rf(()=>import(`./HomeView-BryA1KSP.js`),__vite__mapDeps([0,1])),meta:{title:`JKS Immigration`}},{path:`about`,name:`about`,component:()=>Rf(()=>import(`./AboutView-CsNmgNd8.js`),__vite__mapDeps([2,1])),meta:{title:`About — JKS Immigration`}},{path:`contact`,name:`contact`,component:()=>Rf(()=>import(`./ContactView-CitWx6mo.js`),__vite__mapDeps([3,1])),meta:{title:`Contact Us — JKS Immigration`}},{path:`services/immigration/:slug`,redirect:e=>({path:`/immigration/${e.params.slug}`,query:e.query,hash:e.hash})},{path:`services/visas/:slug`,redirect:e=>({path:`/visas/${e.params.slug}`,query:e.query,hash:e.hash})},{path:`services/other/:slug`,redirect:e=>({path:`/other/${e.params.slug}`,query:e.query,hash:e.hash})},{path:`services`,redirect:e=>{let t=e.hash||``;return t===`#visas`?{path:`/visas`}:t===`#other-services`?{path:`/other`}:{path:`/immigration`}}},{path:`immigration`,name:`immigration-hub`,component:()=>Rf(()=>import(`./ServicesIndexView-BVq7BH1e.js`),__vite__mapDeps([4,1])),meta:{title:`Immigrate — JKS Immigration`,servicesHub:`immigration`}},{path:`immigration/:slug`,name:`immigration-topic`,component:()=>Rf(()=>import(`./ServiceTopicView-BPo3v0cy.js`),__vite__mapDeps([5,1,6])),meta:{category:`immigration`}},{path:`visas`,name:`visas-hub`,component:()=>Rf(()=>import(`./ServicesIndexView-BVq7BH1e.js`),__vite__mapDeps([4,1])),meta:{title:`Canada Visas — JKS Immigration`,servicesHub:`visas`}},{path:`visas/:slug`,name:`visas-topic`,component:()=>Rf(()=>import(`./ServiceTopicView-BPo3v0cy.js`),__vite__mapDeps([5,1,6])),meta:{category:`visas`}},{path:`other`,name:`other-hub`,component:()=>Rf(()=>import(`./ServicesIndexView-BVq7BH1e.js`),__vite__mapDeps([4,1])),meta:{title:`Other Services — JKS Immigration`,servicesHub:`other-services`}},{path:`other/:slug`,name:`other-topic`,component:()=>Rf(()=>import(`./ServiceTopicView-BPo3v0cy.js`),__vite__mapDeps([5,1,6])),meta:{category:`other-services`}},{path:`legal/terms`,name:`terms`,component:()=>Rf(()=>import(`./LegalPlaceholderView-CAOoRd_I.js`),__vite__mapDeps([7,1,8])),meta:{title:`Terms & Conditions — JKS Immigration`,heading:`Terms & Conditions`}},{path:`legal/privacy`,name:`privacy`,component:()=>Rf(()=>import(`./LegalPlaceholderView-CAOoRd_I.js`),__vite__mapDeps([7,1,8])),meta:{title:`Privacy Policy — JKS Immigration`,heading:`Privacy Policy`}},{path:`legal/cookies`,name:`cookies`,component:()=>Rf(()=>import(`./LegalPlaceholderView-CAOoRd_I.js`),__vite__mapDeps([7,1,8])),meta:{title:`Cookie Policy — JKS Immigration`,heading:`Cookie Policy`}},{path:`faq`,name:`faq`,component:()=>Rf(()=>import(`./LegalPlaceholderView-CAOoRd_I.js`),__vite__mapDeps([7,1,8])),meta:{title:`FAQ — JKS Immigration`,heading:`FAQ`}}]}],Bf=Hc({history:lc(`/`),routes:zf,scrollBehavior(){return{top:0}}});Bf.afterEach(e=>{e.meta.title&&(document.title=e.meta.title),document.body.classList.add(`jks-theme-ircc-home`)}),document.body.classList.add(`jks-legacy-site`,`elementor-default`,`elementor-kit-7`,`theme-immigway`,`wp-theme-immigway`,`bd-px-header--default`),document.body.classList.add(`jks-theme-ircc-home`),Io(Ho).use(Bf).mount(`#app`);export{In as C,O as D,Xt as E,Se as O,Ln as S,Kt as T,vr as _,Mo as a,Nr as b,za as c,fa as d,ta as f,vn as g,V as h,zo as i,B as l,ua as m,Ef as n,R as o,da as p,Wc as r,Qn as s,Of as t,na as u,Sr as v,kn as w,Or as x,z as y};