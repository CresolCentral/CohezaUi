var y=Object.defineProperty;var o=(t,e)=>y(t,"name",{value:e,configurable:!0});import{R as c}from"./index.4c36b033.js";import{j as s,a as v}from"./jsx-runtime.116ac947.js";var d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=c.createContext&&c.createContext(d),l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},l.apply(this,arguments)},b=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]]);return r};function h(t){return t&&t.map(function(e,r){return c.createElement(e.tag,l({key:r},e.attr),h(e.child))})}o(h,"Tree2Element");function w(t){return function(e){return s(O,{...l({attr:l({},t.attr)},e),children:h(t.child)})}}o(w,"GenIcon");function O(t){var e=o(function(r){var n=t.attr,a=t.size,u=t.title,g=b(t,["attr","size","title"]),f=a||r.size||"1em",i;return r.className&&(i=r.className),t.className&&(i=(i?i+" ":"")+t.className),v("svg",{...l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,g,{className:i,style:l(l({color:t.color||r.color},r.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),children:[u&&s("title",{children:u}),t.children]})},"elem");return m!==void 0?s(m.Consumer,{children:function(r){return e(r)}}):e(d)}o(O,"IconBase");export{w as G};
//# sourceMappingURL=iconBase.67ee17e6.js.map
