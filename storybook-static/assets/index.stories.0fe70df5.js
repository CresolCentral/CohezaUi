var Ze=Object.defineProperty;var i=(e,n)=>Ze(e,"name",{value:n,configurable:!0});import{a as Qe,r as o}from"./index.a028179d.js";import{$ as Je,f as W,d as A,b as et,c as tt,e as ve,a as nt}from"./index.module.8e3a9604.js";import{b as Z,a as H}from"./index.module.0044d856.js";import{r as rt,R as ot}from"./index.33776c09.js";import{j as C,a as j,F as me}from"./jsx-runtime.a267a26c.js";import{c as at}from"./clsx.m.256e9345.js";import{B as _e}from"./Button.0c870a2f.js";import{H as ct}from"./index.3185549b.js";import"./index.ce7d7bfb.js";import{G as st}from"./iconBase.a24ff1d1.js";import{T as it}from"./Text.c40e36a5.js";import{W as lt}from"./iframe.856eaddd.js";const ut=Qe["useId".toString()]||(()=>{});let dt=0;function ee(e){const[n,t]=o.exports.useState(ut());return Je(()=>{e||t(r=>r!=null?r:String(dt++))},[e]),e||(n?`radix-${n}`:"")}i(ee,"$1746a345f3d73bb7$export$f680877a34711e37");function D(){return D=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},D.apply(this,arguments)}i(D,"_extends$3");function L(){return L=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},L.apply(this,arguments)}i(L,"_extends$2");const Te=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e,a=o.exports.Children.toArray(t),c=a.find(pt);if(c){const l=c.props.children,s=a.map(f=>f===c?o.exports.Children.count(l)>1?o.exports.Children.only(null):o.exports.isValidElement(l)?l.props.children:null:f);return o.exports.createElement(se,L({},r,{ref:n}),o.exports.isValidElement(l)?o.exports.cloneElement(l,void 0,s):null)}return o.exports.createElement(se,L({},r,{ref:n}),t)});Te.displayName="Slot";const se=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e;return o.exports.isValidElement(t)?o.exports.cloneElement(t,{...vt(r,t.props),ref:Z(n,t.ref)}):o.exports.Children.count(t)>1?o.exports.Children.only(null):null});se.displayName="SlotClone";const ft=i(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45$3");function pt(e){return o.exports.isValidElement(e)&&e.type===ft}i(pt,"$5e63c961fc1ce211$var$isSlottable$3");function vt(e,n){const t={...n};for(const r in n){const a=e[r],c=n[r];/^on[A-Z]/.test(r)?a&&c?t[r]=(...s)=>{c(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...c}:r==="className"&&(t[r]=[a,c].filter(Boolean).join(" "))}return{...e,...t}}i(vt,"$5e63c961fc1ce211$var$mergeProps$3");const mt=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],ht=mt.reduce((e,n)=>{const t=o.exports.forwardRef((r,a)=>{const{asChild:c,...l}=r,s=c?Te:n;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(s,L({},l,{ref:a}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function $t(e,n){e&&rt.exports.flushSync(()=>e.dispatchEvent(n))}i($t,"$8927f6f2acc4f386$export$6d1a0317bde7de7f");function gt(e,n=globalThis==null?void 0:globalThis.document){const t=W(e);o.exports.useEffect(()=>{const r=i(a=>{a.key==="Escape"&&t(a)},"handleKeyDown");return n.addEventListener("keydown",r),()=>n.removeEventListener("keydown",r)},[t,n])}i(gt,"$addc16e1bbe58fd0$export$3a72a57244d6e765");const ie="dismissableLayer.update",bt="dismissableLayer.pointerDownOutside",xt="dismissableLayer.focusOutside";let xe;const yt=o.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Et=o.exports.forwardRef((e,n)=>{var t;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:s,onDismiss:f,...$}=e,p=o.exports.useContext(yt),[d,g]=o.exports.useState(null),m=(t=d==null?void 0:d.ownerDocument)!==null&&t!==void 0?t:globalThis==null?void 0:globalThis.document,[,w]=o.exports.useState({}),u=H(n,b=>g(b)),v=Array.from(p.layers),[h]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),x=v.indexOf(h),y=d?v.indexOf(d):-1,S=p.layersWithOutsidePointerEventsDisabled.size>0,E=y>=x,V=Ct(b=>{const _=b.target,be=[...p.branches].some(J=>J.contains(_));!E||be||(c==null||c(b),s==null||s(b),b.defaultPrevented||f==null||f())},m),R=St(b=>{const _=b.target;[...p.branches].some(J=>J.contains(_))||(l==null||l(b),s==null||s(b),b.defaultPrevented||f==null||f())},m);return gt(b=>{y===p.layers.size-1&&(a==null||a(b),!b.defaultPrevented&&f&&(b.preventDefault(),f()))},m),o.exports.useEffect(()=>{if(!!d)return r&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(xe=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(d)),p.layers.add(d),ye(),()=>{r&&p.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=xe)}},[d,m,r,p]),o.exports.useEffect(()=>()=>{!d||(p.layers.delete(d),p.layersWithOutsidePointerEventsDisabled.delete(d),ye())},[d,p]),o.exports.useEffect(()=>{const b=i(()=>w({}),"handleUpdate");return document.addEventListener(ie,b),()=>document.removeEventListener(ie,b)},[]),o.exports.createElement(ht.div,L({},$,{ref:u,style:{pointerEvents:S?E?"auto":"none":void 0,...e.style},onFocusCapture:A(e.onFocusCapture,R.onFocusCapture),onBlurCapture:A(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:A(e.onPointerDownCapture,V.onPointerDownCapture)}))});function Ct(e,n=globalThis==null?void 0:globalThis.document){const t=W(e),r=o.exports.useRef(!1),a=o.exports.useRef(()=>{});return o.exports.useEffect(()=>{const c=i(s=>{if(s.target&&!r.current){let $=function(){Ae(bt,t,f,{discrete:!0})};i($,"handleAndDispatchPointerDownOutsideEvent");const f={originalEvent:s};s.pointerType==="touch"?(n.removeEventListener("click",a.current),a.current=$,n.addEventListener("click",a.current,{once:!0})):$()}r.current=!1},"handlePointerDown"),l=window.setTimeout(()=>{n.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(l),n.removeEventListener("pointerdown",c),n.removeEventListener("click",a.current)}},[n,t]),{onPointerDownCapture:()=>r.current=!0}}i(Ct,"$5cb92bef7577960e$var$usePointerDownOutside");function St(e,n=globalThis==null?void 0:globalThis.document){const t=W(e),r=o.exports.useRef(!1);return o.exports.useEffect(()=>{const a=i(c=>{c.target&&!r.current&&Ae(xt,t,{originalEvent:c},{discrete:!1})},"handleFocus");return n.addEventListener("focusin",a),()=>n.removeEventListener("focusin",a)},[n,t]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}i(St,"$5cb92bef7577960e$var$useFocusOutside");function ye(){const e=new CustomEvent(ie);document.dispatchEvent(e)}i(ye,"$5cb92bef7577960e$var$dispatchUpdate");function Ae(e,n,t,{discrete:r}){const a=t.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&a.addEventListener(e,n,{once:!0}),r?$t(a,c):a.dispatchEvent(c)}i(Ae,"$5cb92bef7577960e$var$handleAndDispatchCustomEvent");function M(){return M=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},M.apply(this,arguments)}i(M,"_extends$1");const Ne=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e,a=o.exports.Children.toArray(t),c=a.find(Dt);if(c){const l=c.props.children,s=a.map(f=>f===c?o.exports.Children.count(l)>1?o.exports.Children.only(null):o.exports.isValidElement(l)?l.props.children:null:f);return o.exports.createElement(le,M({},r,{ref:n}),o.exports.isValidElement(l)?o.exports.cloneElement(l,void 0,s):null)}return o.exports.createElement(le,M({},r,{ref:n}),t)});Ne.displayName="Slot";const le=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e;return o.exports.isValidElement(t)?o.exports.cloneElement(t,{...Ot(r,t.props),ref:Z(n,t.ref)}):o.exports.Children.count(t)>1?o.exports.Children.only(null):null});le.displayName="SlotClone";const wt=i(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45$2");function Dt(e){return o.exports.isValidElement(e)&&e.type===wt}i(Dt,"$5e63c961fc1ce211$var$isSlottable$2");function Ot(e,n){const t={...n};for(const r in n){const a=e[r],c=n[r];/^on[A-Z]/.test(r)?a&&c?t[r]=(...s)=>{c(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...c}:r==="className"&&(t[r]=[a,c].filter(Boolean).join(" "))}return{...e,...t}}i(Ot,"$5e63c961fc1ce211$var$mergeProps$2");const Pt=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],Rt=Pt.reduce((e,n)=>{const t=o.exports.forwardRef((r,a)=>{const{asChild:c,...l}=r,s=c?Ne:n;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(s,M({},l,{ref:a}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{}),te="focusScope.autoFocusOnMount",ne="focusScope.autoFocusOnUnmount",Ee={bubbles:!1,cancelable:!0},_t=o.exports.forwardRef((e,n)=>{const{loop:t=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:c,...l}=e,[s,f]=o.exports.useState(null),$=W(a),p=W(c),d=o.exports.useRef(null),g=H(n,u=>f(u)),m=o.exports.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.exports.useEffect(()=>{if(r){let u=function(h){if(m.paused||!s)return;const x=h.target;s.contains(x)?d.current=x:T(d.current,{select:!0})},v=function(h){m.paused||!s||s.contains(h.relatedTarget)||T(d.current,{select:!0})};return i(u,"handleFocusIn"),i(v,"handleFocusOut"),document.addEventListener("focusin",u),document.addEventListener("focusout",v),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",v)}}},[r,s,m.paused]),o.exports.useEffect(()=>{if(s){Se.add(m);const u=document.activeElement;if(!s.contains(u)){const h=new CustomEvent(te,Ee);s.addEventListener(te,$),s.dispatchEvent(h),h.defaultPrevented||(Tt(Lt(Ie(s)),{select:!0}),document.activeElement===u&&T(s))}return()=>{s.removeEventListener(te,$),setTimeout(()=>{const h=new CustomEvent(ne,Ee);s.addEventListener(ne,p),s.dispatchEvent(h),h.defaultPrevented||T(u!=null?u:document.body,{select:!0}),s.removeEventListener(ne,p),Se.remove(m)},0)}}},[s,$,p,m]);const w=o.exports.useCallback(u=>{if(!t&&!r||m.paused)return;const v=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,h=document.activeElement;if(v&&h){const x=u.currentTarget,[y,S]=At(x);y&&S?!u.shiftKey&&h===S?(u.preventDefault(),t&&T(y,{select:!0})):u.shiftKey&&h===y&&(u.preventDefault(),t&&T(S,{select:!0})):h===x&&u.preventDefault()}},[t,r,m.paused]);return o.exports.createElement(Rt.div,M({tabIndex:-1},l,{ref:g,onKeyDown:w}))});function Tt(e,{select:n=!1}={}){const t=document.activeElement;for(const r of e)if(T(r,{select:n}),document.activeElement!==t)return}i(Tt,"$d3863c46a17e8a28$var$focusFirst");function At(e){const n=Ie(e),t=Ce(n,e),r=Ce(n.reverse(),e);return[t,r]}i(At,"$d3863c46a17e8a28$var$getTabbableEdges");function Ie(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}i(Ie,"$d3863c46a17e8a28$var$getTabbableCandidates");function Ce(e,n){for(const t of e)if(!Nt(t,{upTo:n}))return t}i(Ce,"$d3863c46a17e8a28$var$findVisible");function Nt(e,{upTo:n}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n!==void 0&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}i(Nt,"$d3863c46a17e8a28$var$isHidden");function It(e){return e instanceof HTMLInputElement&&"select"in e}i(It,"$d3863c46a17e8a28$var$isSelectableInput");function T(e,{select:n=!1}={}){if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),e!==t&&It(e)&&n&&e.select()}}i(T,"$d3863c46a17e8a28$var$focus");const Se=Ft();function Ft(){let e=[];return{add(n){const t=e[0];n!==t&&(t==null||t.pause()),e=we(e,n),e.unshift(n)},remove(n){var t;e=we(e,n),(t=e[0])===null||t===void 0||t.resume()}}}i(Ft,"$d3863c46a17e8a28$var$createFocusScopesStack");function we(e,n){const t=[...e],r=t.indexOf(n);return r!==-1&&t.splice(r,1),t}i(we,"$d3863c46a17e8a28$var$arrayRemove");function Lt(e){return e.filter(n=>n.tagName!=="A")}i(Lt,"$d3863c46a17e8a28$var$removeLinks");function k(){return k=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k.apply(this,arguments)}i(k,"_extends");const Fe=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e,a=o.exports.Children.toArray(t),c=a.find(kt);if(c){const l=c.props.children,s=a.map(f=>f===c?o.exports.Children.count(l)>1?o.exports.Children.only(null):o.exports.isValidElement(l)?l.props.children:null:f);return o.exports.createElement(ue,k({},r,{ref:n}),o.exports.isValidElement(l)?o.exports.cloneElement(l,void 0,s):null)}return o.exports.createElement(ue,k({},r,{ref:n}),t)});Fe.displayName="Slot";const ue=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e;return o.exports.isValidElement(t)?o.exports.cloneElement(t,{...Bt(r,t.props),ref:Z(n,t.ref)}):o.exports.Children.count(t)>1?o.exports.Children.only(null):null});ue.displayName="SlotClone";const Mt=i(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45$1");function kt(e){return o.exports.isValidElement(e)&&e.type===Mt}i(kt,"$5e63c961fc1ce211$var$isSlottable$1");function Bt(e,n){const t={...n};for(const r in n){const a=e[r],c=n[r];/^on[A-Z]/.test(r)?a&&c?t[r]=(...s)=>{c(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...c}:r==="className"&&(t[r]=[a,c].filter(Boolean).join(" "))}return{...e,...t}}i(Bt,"$5e63c961fc1ce211$var$mergeProps$1");const Vt=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],Wt=Vt.reduce((e,n)=>{const t=o.exports.forwardRef((r,a)=>{const{asChild:c,...l}=r,s=c?Fe:n;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(s,k({},l,{ref:a}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{}),jt=o.exports.forwardRef((e,n)=>{var t;const{container:r=globalThis==null||(t=globalThis.document)===null||t===void 0?void 0:t.body,...a}=e;return r?ot.createPortal(o.exports.createElement(Wt.div,k({},a,{ref:n})),r):null}),he=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e,a=o.exports.Children.toArray(t),c=a.find(Kt);if(c){const l=c.props.children,s=a.map(f=>f===c?o.exports.Children.count(l)>1?o.exports.Children.only(null):o.exports.isValidElement(l)?l.props.children:null:f);return o.exports.createElement(de,D({},r,{ref:n}),o.exports.isValidElement(l)?o.exports.cloneElement(l,void 0,s):null)}return o.exports.createElement(de,D({},r,{ref:n}),t)});he.displayName="Slot";const de=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e;return o.exports.isValidElement(t)?o.exports.cloneElement(t,{...Ut(r,t.props),ref:Z(n,t.ref)}):o.exports.Children.count(t)>1?o.exports.Children.only(null):null});de.displayName="SlotClone";const Ht=i(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function Kt(e){return o.exports.isValidElement(e)&&e.type===Ht}i(Kt,"$5e63c961fc1ce211$var$isSlottable");function Ut(e,n){const t={...n};for(const r in n){const a=e[r],c=n[r];/^on[A-Z]/.test(r)?a&&c?t[r]=(...s)=>{c(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...c}:r==="className"&&(t[r]=[a,c].filter(Boolean).join(" "))}return{...e,...t}}i(Ut,"$5e63c961fc1ce211$var$mergeProps");const zt=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],$e=zt.reduce((e,n)=>{const t=o.exports.forwardRef((r,a)=>{const{asChild:c,...l}=r,s=c?he:n;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(s,D({},l,{ref:a}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});let re=0;function qt(){o.exports.useEffect(()=>{var e,n;const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=t[0])!==null&&e!==void 0?e:De()),document.body.insertAdjacentElement("beforeend",(n=t[1])!==null&&n!==void 0?n:De()),re++,()=>{re===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),re--}},[])}i(qt,"$3db38b7d1fb3fe6a$export$b7ece24a22aeda8c");function De(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}i(De,"$3db38b7d1fb3fe6a$var$createFocusGuard");var O=i(function(){return O=Object.assign||i(function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(n[c]=t[c])}return n},"__assign"),O.apply(this,arguments)},"__assign");function Le(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}i(Le,"__rest");function Yt(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,c;r<a;r++)(c||!(r in n))&&(c||(c=Array.prototype.slice.call(n,0,r)),c[r]=n[r]);return e.concat(c||Array.prototype.slice.call(n))}i(Yt,"__spreadArray");var Y="right-scroll-bar-position",G="width-before-scroll-bar",Gt="with-scroll-bars-hidden",Xt="--removed-body-scroll-bar-size";function Zt(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}i(Zt,"assignRef");function Qt(e,n){var t=o.exports.useState(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(r){var a=t.value;a!==r&&(t.value=r,t.callback(r,a))}}}})[0];return t.callback=n,t.facade}i(Qt,"useCallbackRef");function Jt(e,n){return Qt(n||null,function(t){return e.forEach(function(r){return Zt(r,t)})})}i(Jt,"useMergeRefs");function en(e){return e}i(en,"ItoI");function tn(e,n){n===void 0&&(n=en);var t=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(c){var l=n(c,r);return t.push(l),function(){t=t.filter(function(s){return s!==l})}},assignSyncMedium:function(c){for(r=!0;t.length;){var l=t;t=[],l.forEach(c)}t={push:function(s){return c(s)},filter:function(){return t}}},assignMedium:function(c){r=!0;var l=[];if(t.length){var s=t;t=[],s.forEach(c),l=t}var f=i(function(){var p=l;l=[],p.forEach(c)},"executeQueue"),$=i(function(){return Promise.resolve().then(f)},"cycle");$(),t={push:function(p){l.push(p),$()},filter:function(p){return l=l.filter(p),t}}}};return a}i(tn,"innerCreateMedium");function nn(e){e===void 0&&(e={});var n=tn(null);return n.options=O({async:!0,ssr:!1},e),n}i(nn,"createSidecarMedium");var Me=i(function(e){var n=e.sideCar,t=Le(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return C(r,{...O({},t)})},"SideCar$1");Me.isSideCarExport=!0;function rn(e,n){return e.useMedium(n),Me}i(rn,"exportSidecar");var ke=nn(),oe=i(function(){},"nothing"),Q=o.exports.forwardRef(function(e,n){var t=o.exports.useRef(null),r=o.exports.useState({onScrollCapture:oe,onWheelCapture:oe,onTouchMoveCapture:oe}),a=r[0],c=r[1],l=e.forwardProps,s=e.children,f=e.className,$=e.removeScrollBar,p=e.enabled,d=e.shards,g=e.sideCar,m=e.noIsolation,w=e.inert,u=e.allowPinchZoom,v=e.as,h=v===void 0?"div":v,x=Le(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=g,S=Jt([t,n]),E=O(O({},x),a);return j(me,{children:[p&&C(y,{sideCar:ke,removeScrollBar:$,shards:d,noIsolation:m,inert:w,setCallbacks:c,allowPinchZoom:!!u,lockRef:t}),l?o.exports.cloneElement(o.exports.Children.only(s),O(O({},E),{ref:S})):C(h,{...O({},E,{className:f,ref:S}),children:s})]})});Q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Q.classNames={fullWidth:G,zeroRight:Y};var on=i(function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__},"getNonce");function an(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=on();return n&&e.setAttribute("nonce",n),e}i(an,"makeStyleTag");function cn(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}i(cn,"injectStyles");function sn(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}i(sn,"insertStyleTag");var ln=i(function(){var e=0,n=null;return{add:function(t){e==0&&(n=an())&&(cn(n,t),sn(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},"stylesheetSingleton"),un=i(function(){var e=ln();return function(n,t){o.exports.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},"styleHookSingleton"),Be=i(function(){var e=un(),n=i(function(t){var r=t.styles,a=t.dynamic;return e(r,a),null},"Sheet");return n},"styleSingleton"),dn={left:0,top:0,right:0,gap:0},ae=i(function(e){return parseInt(e||"",10)||0},"parse"),fn=i(function(e){var n=window.getComputedStyle(document.body),t=n[e==="padding"?"paddingLeft":"marginLeft"],r=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[ae(t),ae(r),ae(a)]},"getOffset"),pn=i(function(e){if(e===void 0&&(e="margin"),typeof window>"u")return dn;var n=fn(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},"getGapWidth"),vn=Be(),mn=i(function(e,n,t,r){var a=e.left,c=e.top,l=e.right,s=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(Gt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Y,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(G,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Y," .").concat(Y,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(Xt,": ").concat(s,`px;
  }
`)},"getStyles"),hn=i(function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,c=o.exports.useMemo(function(){return pn(a)},[a]);return C(vn,{styles:mn(c,!n,a,t?"":"!important")})},"RemoveScrollBar"),fe=!1;if(typeof window<"u")try{var K=Object.defineProperty({},"passive",{get:function(){return fe=!0,!0}});window.addEventListener("test",K,K),window.removeEventListener("test",K,K)}catch{fe=!1}var N=fe?{passive:!1}:!1,$n=i(function(e){return e.tagName==="TEXTAREA"},"alwaysContainsScroll"),Ve=i(function(e,n){var t=window.getComputedStyle(e);return t[n]!=="hidden"&&!(t.overflowY===t.overflowX&&!$n(e)&&t[n]==="visible")},"elementCanBeScrolled"),gn=i(function(e){return Ve(e,"overflowY")},"elementCouldBeVScrolled"),bn=i(function(e){return Ve(e,"overflowX")},"elementCouldBeHScrolled"),Oe=i(function(e,n){var t=n;do{typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&(t=t.host);var r=We(e,t);if(r){var a=je(e,t),c=a[1],l=a[2];if(c>l)return!0}t=t.parentNode}while(t&&t!==document.body);return!1},"locationCouldBeScrolled"),xn=i(function(e){var n=e.scrollTop,t=e.scrollHeight,r=e.clientHeight;return[n,t,r]},"getVScrollVariables"),yn=i(function(e){var n=e.scrollLeft,t=e.scrollWidth,r=e.clientWidth;return[n,t,r]},"getHScrollVariables"),We=i(function(e,n){return e==="v"?gn(n):bn(n)},"elementCouldBeScrolled"),je=i(function(e,n){return e==="v"?xn(n):yn(n)},"getScrollVariables"),En=i(function(e,n){return e==="h"&&n==="rtl"?-1:1},"getDirectionFactor"),Cn=i(function(e,n,t,r,a){var c=En(e,window.getComputedStyle(n).direction),l=c*r,s=t.target,f=n.contains(s),$=!1,p=l>0,d=0,g=0;do{var m=je(e,s),w=m[0],u=m[1],v=m[2],h=u-v-c*w;(w||h)&&We(e,s)&&(d+=h,g+=w),s=s.parentNode}while(!f&&s!==document.body||f&&(n.contains(s)||n===s));return(p&&(a&&d===0||!a&&l>d)||!p&&(a&&g===0||!a&&-l>g))&&($=!0),$},"handleScroll"),U=i(function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},"getTouchXY"),Pe=i(function(e){return[e.deltaX,e.deltaY]},"getDeltaXY"),Re=i(function(e){return e&&"current"in e?e.current:e},"extractRef"),Sn=i(function(e,n){return e[0]===n[0]&&e[1]===n[1]},"deltaCompare"),wn=i(function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},"generateStyle"),Dn=0,I=[];function On(e){var n=o.exports.useRef([]),t=o.exports.useRef([0,0]),r=o.exports.useRef(),a=o.exports.useState(Dn++)[0],c=o.exports.useState(function(){return Be()})[0],l=o.exports.useRef(e);o.exports.useEffect(function(){l.current=e},[e]),o.exports.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var u=Yt([e.lockRef.current],(e.shards||[]).map(Re),!0).filter(Boolean);return u.forEach(function(v){return v.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),u.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var s=o.exports.useCallback(function(u,v){if("touches"in u&&u.touches.length===2)return!l.current.allowPinchZoom;var h=U(u),x=t.current,y="deltaX"in u?u.deltaX:x[0]-h[0],S="deltaY"in u?u.deltaY:x[1]-h[1],E,V=u.target,R=Math.abs(y)>Math.abs(S)?"h":"v";if("touches"in u&&R==="h"&&V.type==="range")return!1;var b=Oe(R,V);if(!b)return!0;if(b?E=R:(E=R==="v"?"h":"v",b=Oe(R,V)),!b)return!1;if(!r.current&&"changedTouches"in u&&(y||S)&&(r.current=E),!E)return!0;var _=r.current||E;return Cn(_,v,u,_==="h"?y:S,!0)},[]),f=o.exports.useCallback(function(u){var v=u;if(!(!I.length||I[I.length-1]!==c)){var h="deltaY"in v?Pe(v):U(v),x=n.current.filter(function(E){return E.name===v.type&&E.target===v.target&&Sn(E.delta,h)})[0];if(x&&x.should){v.cancelable&&v.preventDefault();return}if(!x){var y=(l.current.shards||[]).map(Re).filter(Boolean).filter(function(E){return E.contains(v.target)}),S=y.length>0?s(v,y[0]):!l.current.noIsolation;S&&v.cancelable&&v.preventDefault()}}},[]),$=o.exports.useCallback(function(u,v,h,x){var y={name:u,delta:v,target:h,should:x};n.current.push(y),setTimeout(function(){n.current=n.current.filter(function(S){return S!==y})},1)},[]),p=o.exports.useCallback(function(u){t.current=U(u),r.current=void 0},[]),d=o.exports.useCallback(function(u){$(u.type,Pe(u),u.target,s(u,e.lockRef.current))},[]),g=o.exports.useCallback(function(u){$(u.type,U(u),u.target,s(u,e.lockRef.current))},[]);o.exports.useEffect(function(){return I.push(c),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:g}),document.addEventListener("wheel",f,N),document.addEventListener("touchmove",f,N),document.addEventListener("touchstart",p,N),function(){I=I.filter(function(u){return u!==c}),document.removeEventListener("wheel",f,N),document.removeEventListener("touchmove",f,N),document.removeEventListener("touchstart",p,N)}},[]);var m=e.removeScrollBar,w=e.inert;return j(me,{children:[w?C(c,{styles:wn(a)}):null,m?C(hn,{gapMode:"margin"}):null]})}i(On,"RemoveScrollSideCar");const Pn=rn(ke,On);var He=o.exports.forwardRef(function(e,n){return C(Q,{...O({},e,{ref:n,sideCar:Pn})})});He.classNames=Q.classNames;const Rn=He;var _n=i(function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},"getDefaultParent"),F=new WeakMap,z=new WeakMap,q={},ce=0,Tn=i(function(e,n,t,r){var a=Array.isArray(e)?e:[e];q[t]||(q[t]=new WeakMap);var c=q[t],l=[],s=new Set,f=new Set(a),$=i(function(d){!d||s.has(d)||(s.add(d),$(d.parentNode))},"keep");a.forEach($);var p=i(function(d){!d||f.has(d)||Array.prototype.forEach.call(d.children,function(g){if(s.has(g))p(g);else{var m=g.getAttribute(r),w=m!==null&&m!=="false",u=(F.get(g)||0)+1,v=(c.get(g)||0)+1;F.set(g,u),c.set(g,v),l.push(g),u===1&&w&&z.set(g,!0),v===1&&g.setAttribute(t,"true"),w||g.setAttribute(r,"true")}})},"deep");return p(n),s.clear(),ce++,function(){l.forEach(function(d){var g=F.get(d)-1,m=c.get(d)-1;F.set(d,g),c.set(d,m),g||(z.has(d)||d.removeAttribute(r),z.delete(d)),m||d.removeAttribute(t)}),ce--,ce||(F=new WeakMap,F=new WeakMap,z=new WeakMap,q={})}},"applyAttributeToOthers"),An=i(function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=n||_n(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Tn(r,a,t,"aria-hidden")):function(){return null}},"hideOthers");const Ke="Dialog",[Ue,fr]=et(Ke),[Nn,P]=Ue(Ke),In=i(e=>{const{__scopeDialog:n,children:t,open:r,defaultOpen:a,onOpenChange:c,modal:l=!0}=e,s=o.exports.useRef(null),f=o.exports.useRef(null),[$=!1,p]=tt({prop:r,defaultProp:a,onChange:c});return o.exports.createElement(Nn,{scope:n,triggerRef:s,contentRef:f,contentId:ee(),titleId:ee(),descriptionId:ee(),open:$,onOpenChange:p,onOpenToggle:o.exports.useCallback(()=>p(d=>!d),[p]),modal:l},t)},"$5d3850c4d0b4e6c7$export$3ddf2d174ce01153"),Fn="DialogTrigger",Ln=o.exports.forwardRef((e,n)=>{const{__scopeDialog:t,...r}=e,a=P(Fn,t),c=H(n,a.triggerRef);return o.exports.createElement($e.button,D({type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":ge(a.open)},r,{ref:c,onClick:A(e.onClick,a.onOpenToggle)}))}),ze="DialogPortal",[Mn,qe]=Ue(ze,{forceMount:void 0}),kn=i(e=>{const{__scopeDialog:n,forceMount:t,children:r,container:a}=e,c=P(ze,n);return o.exports.createElement(Mn,{scope:n,forceMount:t},o.exports.Children.map(r,l=>o.exports.createElement(ve,{present:t||c.open},o.exports.createElement(jt,{asChild:!0,container:a},l))))},"$5d3850c4d0b4e6c7$export$dad7c95542bacce0"),pe="DialogOverlay",Bn=o.exports.forwardRef((e,n)=>{const t=qe(pe,e.__scopeDialog),{forceMount:r=t.forceMount,...a}=e,c=P(pe,e.__scopeDialog);return c.modal?o.exports.createElement(ve,{present:r||c.open},o.exports.createElement(Vn,D({},a,{ref:n}))):null}),Vn=o.exports.forwardRef((e,n)=>{const{__scopeDialog:t,...r}=e,a=P(pe,t);return o.exports.createElement(Rn,{as:he,allowPinchZoom:!0,shards:[a.contentRef]},o.exports.createElement($e.div,D({"data-state":ge(a.open)},r,{ref:n,style:{pointerEvents:"auto",...r.style}})))}),B="DialogContent",Wn=o.exports.forwardRef((e,n)=>{const t=qe(B,e.__scopeDialog),{forceMount:r=t.forceMount,...a}=e,c=P(B,e.__scopeDialog);return o.exports.createElement(ve,{present:r||c.open},c.modal?o.exports.createElement(jn,D({},a,{ref:n})):o.exports.createElement(Hn,D({},a,{ref:n})))}),jn=o.exports.forwardRef((e,n)=>{const t=P(B,e.__scopeDialog),r=o.exports.useRef(null),a=H(n,t.contentRef,r);return o.exports.useEffect(()=>{const c=r.current;if(c)return An(c)},[]),o.exports.createElement(Ye,D({},e,{ref:a,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:A(e.onCloseAutoFocus,c=>{var l;c.preventDefault(),(l=t.triggerRef.current)===null||l===void 0||l.focus()}),onPointerDownOutside:A(e.onPointerDownOutside,c=>{const l=c.detail.originalEvent,s=l.button===0&&l.ctrlKey===!0;(l.button===2||s)&&c.preventDefault()}),onFocusOutside:A(e.onFocusOutside,c=>c.preventDefault())}))}),Hn=o.exports.forwardRef((e,n)=>{const t=P(B,e.__scopeDialog),r=o.exports.useRef(!1);return o.exports.createElement(Ye,D({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var c;if((c=e.onCloseAutoFocus)===null||c===void 0||c.call(e,a),!a.defaultPrevented){var l;r.current||(l=t.triggerRef.current)===null||l===void 0||l.focus(),a.preventDefault()}r.current=!1},onInteractOutside:a=>{var c,l;(c=e.onInteractOutside)===null||c===void 0||c.call(e,a),a.defaultPrevented||(r.current=!0);const s=a.target;((l=t.triggerRef.current)===null||l===void 0?void 0:l.contains(s))&&a.preventDefault()}}))}),Ye=o.exports.forwardRef((e,n)=>{const{__scopeDialog:t,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:c,...l}=e,s=P(B,t),f=o.exports.useRef(null),$=H(n,f);return qt(),o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(_t,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:c},o.exports.createElement(Et,D({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":ge(s.open)},l,{ref:$,onDismiss:()=>s.onOpenChange(!1)}))),!1)}),Ge="DialogTitle",Kn=o.exports.forwardRef((e,n)=>{const{__scopeDialog:t,...r}=e,a=P(Ge,t);return o.exports.createElement($e.h2,D({id:a.titleId},r,{ref:n}))});function ge(e){return e?"open":"closed"}i(ge,"$5d3850c4d0b4e6c7$var$getState");const Un="DialogTitleWarning";nt(Un,{contentName:B,titleName:Ge,docsSlug:"dialog"});const zn=In,qn=Ln,Yn=kn,Gn=Bn,Xn=Wn,Zn=Kn;function Qn(e){return st({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}i(Qn,"IoClose");const X=i(({open:e,handleClose:n,size:t="sm",title:r,description:a,btnClose:c=!0})=>j(zn,{open:e,onOpenChange:n,children:[C(qn,{}),C(Yn,{children:C(Gn,{className:"bg-black/90 inset-0 fixed z-10",children:C(Xn,{className:at("fixed bg-default-800 py-6 px-8 w-full rounded-md shadow-lg shadow-black/25  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",{"max-w-sm":t==="xs","max-w-lg":t==="sm","max-w-2xl":t==="md","max-w-4xl":t==="lg","max-w-6xl":t==="xl"}),children:j(Zn,{className:"text-default-100 flex flex-col",children:[C(ct,{size:"sm",children:r}),C(it,{size:"sm",children:a}),C("footer",{className:"flex justify-end",children:c&&C(_e,{onClick:n,size:"sm",leftIcon:C(Qn,{}),children:"Sair"})})]})})})})]}),"Dialog$1"),Xe=X;try{X.displayName="Dialog",X.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},btnClose:{defaultValue:{value:"true"},description:"",name:"btnClose",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.tsx#Dialog"]={docgenInfo:X.__docgenInfo,name:"Dialog",path:"src/components/Dialog/Dialog.tsx#Dialog"})}catch{}try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},btnClose:{defaultValue:{value:"true"},description:"",name:"btnClose",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/index.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/components/Dialog/index.tsx#Dialog"})}catch{}const pr={parameters:{storySource:{source:`import React from 'react'
import { useArgs } from "@storybook/client-api";
import { Meta, StoryObj, Story } from "@storybook/react";
import  Dialog from ".";
import Button from "../Button";
import { DialogProps } from './Dialog';

export default {
  title: "Overlay/Dialog",
  component: Dialog,
  args: {
    open: false,
    title: "Dialog",
    description: "Dialog description",
    handleClose: (): void => {},
    size: 'md'
  },
  argTypes: {
    open: { control: "boolean" },
  },
} as Meta<DialogProps>;

export const Default: Story<DialogProps> = (args) => {
  const [, updateArgs] = useArgs();


  return (
    <>
      <Button onClick={() => updateArgs({ open: true })}>Open Modal</Button>
      <Dialog {...args}  handleClose={() => updateArgs({ open: false})} />
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:43,line:23},endLoc:{col:1,line:33},startBody:{col:43,line:23},endBody:{col:1,line:33}}}}},title:"Overlay/Dialog",component:Xe,args:{open:!1,title:"Dialog",description:"Dialog description",handleClose:()=>{},size:"md"},argTypes:{open:{control:"boolean"}}},vr=i(e=>{const[,n]=lt();return j(me,{children:[C(_e,{onClick:()=>n({open:!0}),children:"Open Modal"}),C(Xe,{...e,handleClose:()=>n({open:!1})})]})},"Default"),mr=["Default"];export{vr as Default,mr as __namedExportsOrder,pr as default};
//# sourceMappingURL=index.stories.0fe70df5.js.map