!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{"use strict";var t={91510:(e,t,r)=>{r.r(t)},61501:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(8156),c=o(r(51496));t.default=function({ref:e,callback:t,eventName:r="click"}){const o=(0,n.useCallback)((r=>{e&&e.current&&!e.current.contains(r.target)&&t(r)}),[e,t]),u=(0,n.useRef)(document.body);(0,c.default)({eventName:r,ref:u,callback:o,capture:!0}),(0,c.default)({eventName:"touchend",ref:u,callback:o,capture:!0})}},51496:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(8156);t.default=function({eventName:e,callback:t,ref:r,capture:n=!1}){(0,o.useEffect)((()=>{const o=r&&r.current;if(!o)return;const c={capture:n};return o.addEventListener(e,t,c),()=>{o.removeEventListener(e,t,c)}}),[e,r,t,n])}},41921:(e,t,r)=>{r(91510)},8156:t=>{t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return t[e].call(c.exports,c,c.exports,o),c.exports}return o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(41921),o(61501)})()));
//# sourceMappingURL=useClickOutside.js.map