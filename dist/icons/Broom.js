/*! For license information please see Broom.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports["monday-style"]=r(require("react")):e["monday-style"]=r(e.react)}(this,(e=>(()=>{"use strict";var r={75251:(e,r,t)=>{var o=t(8156),n=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;n=l("react.element"),r.Fragment=l("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var o,l={},a=null,p=null;for(o in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(p=r.ref),r)f.call(r,o)&&!s.hasOwnProperty(o)&&(l[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===l[o]&&(l[o]=r[o]);return{$$typeof:n,type:e,key:a,ref:p,props:l,_owner:i.current}}r.jsx=a,r.jsxs=a},85893:(e,r,t)=>{e.exports=t(75251)},78013:function(e,r,t){var o=this&&this.__rest||function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t};Object.defineProperty(r,"__esModule",{value:!0});const n=t(85893),l=e=>{var{size:r}=e,t=o(e,["size"]);return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 20 20",fill:"currentColor",width:r||"20",height:r||"20"},t,{children:(0,n.jsx)("path",{d:"M3.28033 2.21967C2.98744 1.92678 2.51256 1.92678 2.21967 2.21967 1.92678 2.51256 1.92678 2.98744 2.21967 3.28033L7.63274 8.6934C7.54586 8.91276 7.5 9.14855 7.5 9.38906 7.5 9.89004 7.69898 10.3705 8.05318 10.7248L8.05313 10.7249 8.06059 10.7321 8.57806 11.2355C8.53993 11.4121 8.51546 11.5924 8.50533 11.7748 8.45874 12.6139 8.71862 13.4409 9.23579 14.1022L11.3521 17.3536C11.3651 17.3736 11.3791 17.3929 11.3939 17.4116 11.6302 17.7085 11.9667 17.909 12.3402 17.9757 12.7014 18.0402 13.0733 17.9753 13.3908 17.7932L16.1108 16.4505C16.2585 16.3776 16.3782 16.258 16.4512 16.1102L17.7949 13.3905C17.9759 13.0734 18.0401 12.7024 17.9755 12.3423 17.9088 11.9702 17.7092 11.6351 17.414 11.3992 17.3952 11.3842 17.3757 11.3701 17.3556 11.357L14.1044 9.23571C13.4429 8.7187 12.6158 8.45889 11.7767 8.50529 11.5922 8.51549 11.41 8.54033 11.2315 8.57911L10.7347 8.06331 10.7248 8.05318C10.3705 7.69898 9.89004 7.5 9.38906 7.5 9.14855 7.5 8.91277 7.54586 8.6934 7.63274L3.28033 2.21967zM9 9.38906C9 9.2859 9.04095 9.18696 9.11384 9.11398L9.11398 9.11384C9.18696 9.04095 9.2859 9 9.38906 9 9.49053 9 9.58792 9.03962 9.66054 9.11029L9.80322 9.25844C9.70337 9.33819 9.60757 9.42375 9.51638 9.51488L9.51636 9.51489C9.42441 9.60677 9.33811 9.70333 9.25771 9.80401L9.11127 9.66154C9.03998 9.58881 9 9.491 9 9.38906zM10.5766 10.576C10.772 10.3808 11.0045 10.2305 11.2581 10.1325 11.2671 10.1293 11.2761 10.1259 11.285 10.1223 11.468 10.0546 11.6615 10.014 11.8595 10.003 12.3431 9.97626 12.8196 10.1287 13.1978 10.4311 13.2166 10.4461 13.2361 10.4602 13.2563 10.4734L16.4883 12.5821C16.4937 12.5895 16.4974 12.598 16.4991 12.607 16.5016 12.6212 16.4989 12.6358 16.4915 12.6482 16.4808 12.666 16.4708 12.6842 16.4616 12.7027L16.2163 13.1993 14.1501 11.65C13.8187 11.4015 13.3487 11.4687 13.1002 11.8001 12.8517 12.1314 12.9189 12.6015 13.2503 12.85L15.4631 14.5093C15.489 14.5287 15.5157 14.5462 15.5431 14.5618L15.2189 15.218 14.5854 15.5307 12.8469 13.2456C12.5961 12.9159 12.1256 12.852 11.7959 13.1028 11.4662 13.3536 11.4023 13.8242 11.6531 14.1538L13.2152 16.2071 12.7025 16.4601C12.6832 16.4697 12.6643 16.4801 12.6458 16.4913 12.6333 16.4989 12.6184 16.5016 12.6039 16.4991 12.5946 16.4974 12.5859 16.4936 12.5785 16.488L10.4741 13.2551C10.4608 13.2345 10.4464 13.2147 10.4311 13.1956 10.1286 12.8175 9.97619 12.3413 10.003 11.858 10.0299 11.3747 10.234 10.9183 10.5766 10.576zM16.091 4.96953C16.3839 4.67664 16.3839 4.20176 16.091 3.90887 15.7981 3.61598 15.3232 3.61598 15.0303 3.90887L14.5 4.43921 13.9697 3.90887C13.6768 3.61598 13.2019 3.61598 12.909 3.90887 12.6161 4.20176 12.6161 4.67664 12.909 4.96953L13.4393 5.49987 12.909 6.03019C12.6161 6.32308 12.6161 6.79796 12.909 7.09085 13.2019 7.38374 13.6768 7.38374 13.9697 7.09085L14.5 6.56053 15.0303 7.09085C15.3232 7.38374 15.7981 7.38374 16.091 7.09085 16.3839 6.79796 16.3839 6.32308 16.091 6.03019L15.5607 5.49987 16.091 4.96953zM6.71209 14.5911C7.00499 14.2982 7.00499 13.8233 6.71209 13.5305 6.4192 13.2376 5.94433 13.2376 5.65143 13.5305L5.12109 14.0608 4.59075 13.5305C4.29786 13.2376 3.82299 13.2376 3.53009 13.5305 3.2372 13.8233 3.2372 14.2982 3.53009 14.5911L4.06043 15.1215 3.53011 15.6518C3.23722 15.9447 3.23722 16.4195 3.53011 16.7124 3.82301 17.0053 4.29788 17.0053 4.59077 16.7124L5.12109 16.1821 5.65142 16.7124C5.94431 17.0053 6.41918 17.0053 6.71208 16.7124 7.00497 16.4195 7.00497 15.9447 6.71208 15.6518L6.18175 15.1215 6.71209 14.5911z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};l.displayName="Broom",r.default=l},8156:r=>{r.exports=e}},t={};var o=function e(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return r[o].call(l.exports,l,l.exports,e),l.exports}(78013);return o})()));
//# sourceMappingURL=Broom.js.map