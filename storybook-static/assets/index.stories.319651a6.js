var N=Object.defineProperty;var f=(e,o)=>N(e,"name",{value:o,configurable:!0});import{r as n}from"./index.d7b398fd.js";import{a as T}from"./index.module.38330294.js";import{$ as j,a as B,b as L,c as D,d as E}from"./index.module.b20da9c6.js";import{$ as K}from"./index.module.7ffccb9a.js";import{$ as M}from"./index.module.c2dad91f.js";import"./index.1251d158.js";import{$ as q}from"./index.module.7c10189a.js";import{c as H}from"./clsx.m.256e9345.js";import{f as Y}from"./index.esm.f4f2c8c8.js";import{j as m,a as F}from"./jsx-runtime.e4f4d4f9.js";import{T as V}from"./index.b0f02290.js";import"./iframe.ce4adc09.js";import"./iconBase.aa9bd085.js";function h(){return h=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}f(h,"_extends$1");function W(e){const[o,t]=n.exports.useState(void 0);return j(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let i,d;if("borderBoxSize"in c){const a=c.borderBoxSize,l=Array.isArray(a)?a[0]:a;i=l.inlineSize,d=l.blockSize}else i=e.offsetWidth,d=e.offsetHeight;t({width:i,height:d})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else t(void 0)},[e]),o}f(W,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function v(){return v=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}f(v,"_extends");const X=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],S=X.reduce((e,o)=>{const t=n.exports.forwardRef((r,s)=>{const{asChild:c,...i}=r,d=c?q:o;return n.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),n.exports.createElement(d,v({},i,{ref:s}))});return t.displayName=`Primitive.${o}`,{...e,[o]:t}},{}),G="Label",[ye,J]=B(G,{id:void 0,controlRef:{current:null}}),Q=f(e=>{const o=J("LabelConsumer"),{controlRef:t}=o;return n.exports.useEffect(()=>{e&&(t.current=e)},[e,t]),o.id},"$b73a6c6685e72184$export$feddbbf47baabdb9"),O="Checkbox",[U,ge]=L(O),[Z,ee]=U(O),te=n.exports.forwardRef((e,o)=>{const{__scopeCheckbox:t,"aria-labelledby":r,name:s,checked:c,defaultChecked:i,required:d,disabled:a,value:l="on",onCheckedChange:y,...$}=e,[u,R]=n.exports.useState(null),A=T(o,p=>R(p)),P=Q(u),z=r||P,k=n.exports.useRef(!1),g=u?Boolean(u.closest("form")):!0,[x=!1,I]=D({prop:c,defaultProp:i,onChange:y});return n.exports.createElement(Z,{scope:t,state:x,disabled:a},n.exports.createElement(S.button,h({type:"button",role:"checkbox","aria-checked":b(x)?"mixed":x,"aria-labelledby":z,"aria-required":d,"data-state":w(x),"data-disabled":a?"":void 0,disabled:a,value:l},$,{ref:A,onKeyDown:E(e.onKeyDown,p=>{p.key==="Enter"&&p.preventDefault()}),onClick:E(e.onClick,p=>{I(_=>b(_)?!0:!_),g&&(k.current=p.isPropagationStopped(),k.current||p.stopPropagation())})})),g&&n.exports.createElement(ne,{control:u,bubbles:!k.current,name:s,value:l,checked:x,required:d,disabled:a,style:{transform:"translateX(-100%)"}}))}),oe="CheckboxIndicator",re=n.exports.forwardRef((e,o)=>{const{__scopeCheckbox:t,forceMount:r,...s}=e,c=ee(oe,t);return n.exports.createElement(M,{present:r||b(c.state)||c.state===!0},n.exports.createElement(S.span,h({"data-state":w(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:o,style:{pointerEvents:"none",...e.style}})))}),ne=f(e=>{const{control:o,checked:t,bubbles:r=!0,...s}=e,c=n.exports.useRef(null),i=K(t),d=W(o);return n.exports.useEffect(()=>{const a=c.current,l=window.HTMLInputElement.prototype,$=Object.getOwnPropertyDescriptor(l,"checked").set;if(i!==t&&$){const u=new Event("click",{bubbles:r});a.indeterminate=b(t),$.call(a,b(t)?!1:t),a.dispatchEvent(u)}},[i,t,r]),n.exports.createElement("input",h({type:"checkbox","aria-hidden":!0,defaultChecked:b(t)?!1:t},s,{tabIndex:-1,ref:c,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function b(e){return e==="indeterminate"}f(b,"$e698a72e93240346$var$isIndeterminate");function w(e){return b(e)?"indeterminate":e?"checked":"unchecked"}f(w,"$e698a72e93240346$var$getState");const ce=te,ae=re,C=f(({size:e})=>m(ce,{className:H("rounded p-[2px] bg-default-800 flex justify-center items-center",{"w-[15px] h-[15px]":e==="sm","w-[18px] h-[18px]":e==="md","w-6 h-6":e==="lg"}),children:m(ae,{asChild:!0,children:m(Y,{className:"h-4 w-4 text-primary-900"})})}),"Checkbox$1"),se=C;try{C.displayName="Checkbox",C.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:C.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch{}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch{}const _e={title:"Components/Checkbox",component:se,args:{size:"sm"},argTypes:{size:{options:["sm","md","lg"],description:"Define o tamanho do botao",control:{type:"inline-radio"}}}},Ee={},Se={decorators:[e=>F("div",{className:"flex items-center gap-2",children:[e(),m(V,{children:"My checkbox text"})]})]},Oe=["Default","Checkwithlabel"];export{Se as Checkwithlabel,Ee as Default,Oe as __namedExportsOrder,_e as default};
//# sourceMappingURL=index.stories.319651a6.js.map