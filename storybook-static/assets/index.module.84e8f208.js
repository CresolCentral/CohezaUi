var A=Object.defineProperty;var u=(e,t)=>A(e,"name",{value:t,configurable:!0});import{r as c}from"./index.4c36b033.js";import{r as S}from"./index.3cafdfce.js";import{a as C}from"./index.module.636646b7.js";function I(e,t){const o=c.exports.createContext(t);function n(i){const{children:a,...f}=i,d=c.exports.useMemo(()=>f,Object.values(f));return c.exports.createElement(o.Provider,{value:d},a)}u(n,"Provider");function r(i){const a=c.exports.useContext(o);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return u(r,"useContext"),n.displayName=e+"Provider",[n,r]}u(I,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function w(e,t=[]){let o=[];function n(i,a){const f=c.exports.createContext(a),d=o.length;o=[...o,a];function s(l){const{scope:p,children:x,...$}=l,b=(p==null?void 0:p[e][d])||f,P=c.exports.useMemo(()=>$,Object.values($));return c.exports.createElement(b.Provider,{value:P},x)}u(s,"Provider");function m(l,p){const x=(p==null?void 0:p[e][d])||f,$=c.exports.useContext(x);if($)return $;if(a!==void 0)return a;throw new Error(`\`${l}\` must be used within \`${i}\``)}return u(m,"useContext"),s.displayName=i+"Provider",[s,m]}u(n,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const r=u(()=>{const i=o.map(a=>c.exports.createContext(a));return u(function(f){const d=(f==null?void 0:f[e])||i;return c.exports.useMemo(()=>({[`__scope${e}`]:{...f,[e]:d}}),[f,d])},"useScope")},"createScope");return r.scopeName=e,[n,M(r,...t)]}u(w,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function M(...e){const t=e[0];if(e.length===1)return t;const o=u(()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return u(function(i){const a=n.reduce((f,{useScope:d,scopeName:s})=>{const l=d(i)[`__scope${s}`];return{...f,...l}},{});return c.exports.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])},"useComposedScopes")},"createScope1");return o.scopeName=t.scopeName,o}u(M,"$c512c27ab02ef895$var$composeContextScopes");function L(e,t,{checkForDefaultPrevented:o=!0}={}){return u(function(r){if(e==null||e(r),o===!1||!r.defaultPrevented)return t==null?void 0:t(r)},"handleEvent")}u(L,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function h(e){const t=c.exports.useRef(e);return c.exports.useEffect(()=>{t.current=e}),c.exports.useMemo(()=>(...o)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...o)},[])}u(h,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function k({prop:e,defaultProp:t,onChange:o=u(()=>{},"onChange")}){const[n,r]=E({defaultProp:t,onChange:o}),i=e!==void 0,a=i?e:n,f=h(o),d=c.exports.useCallback(s=>{if(i){const l=typeof s=="function"?s(e):s;l!==e&&f(l)}else r(s)},[i,e,r,f]);return[a,d]}u(k,"$71cd76cc60e0454e$export$6f32135080cb4c3");function E({defaultProp:e,onChange:t}){const o=c.exports.useState(e),[n]=o,r=c.exports.useRef(n),i=h(t);return c.exports.useEffect(()=>{r.current!==n&&(i(n),r.current=n)},[n,r,i]),o}u(E,"$71cd76cc60e0454e$var$useUncontrolledState");const N=Boolean(globalThis==null?void 0:globalThis.document)?c.exports.useLayoutEffect:()=>{};function T(e,t){return c.exports.useReducer((o,n)=>{const r=t[o][n];return r!=null?r:o},e)}u(T,"$fe963b355347cc68$export$3e6543de14f8614f");const g=u(e=>{const{present:t,children:o}=e,n=O(t),r=typeof o=="function"?o({present:n.isPresent}):c.exports.Children.only(o),i=C(n.ref,r.ref);return typeof o=="function"||n.isPresent?c.exports.cloneElement(r,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");g.displayName="Presence";function O(e){const[t,o]=c.exports.useState(),n=c.exports.useRef({}),r=c.exports.useRef(e),i=c.exports.useRef("none"),a=e?"mounted":"unmounted",[f,d]=T(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.exports.useEffect(()=>{const s=v(n.current);i.current=f==="mounted"?s:"none"},[f]),N(()=>{const s=n.current,m=r.current;if(m!==e){const p=i.current,x=v(s);e?d("MOUNT"):x==="none"||(s==null?void 0:s.display)==="none"?d("UNMOUNT"):d(m&&p!==x?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,d]),N(()=>{if(t){const s=u(l=>{const x=v(n.current).includes(l.animationName);l.target===t&&x&&S.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),m=u(l=>{l.target===t&&(i.current=v(n.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",s),t.addEventListener("animationend",s),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",s),t.removeEventListener("animationend",s)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:c.exports.useCallback(s=>{s&&(n.current=getComputedStyle(s)),o(s)},[])}}u(O,"$921a889cee6df7e8$var$usePresence");function v(e){return(e==null?void 0:e.animationName)||"none"}u(v,"$921a889cee6df7e8$var$getAnimationName");export{N as $,I as a,w as b,k as c,L as d,g as e,h as f};
//# sourceMappingURL=index.module.84e8f208.js.map
