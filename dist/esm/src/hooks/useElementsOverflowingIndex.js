import{slicedToArray as e}from"../../_virtual/_rollupPluginBabelHelpers.js";import{useState as n,useCallback as r,useEffect as t}from"react";import{last as i}from"lodash-es";import o from"./useResizeObserver.js";function l(l){var u=l.ref,c=l.children,a=l.paddingSize,f=l.resizeDebounceTime,d=l.ignoreLast,s=n(null),h=e(s,2),g=h[0],m=h[1],p=r((function(e){m(e.borderBoxSize.inlineSize)}),[m]);o({ref:u,callback:p,debounceTime:f});var v=n([]),L=e(v,2),b=L[0],z=L[1],x=n(null),S=e(x,2),T=S[0],j=S[1];return t((function(){if(d)if(!b.slice(0,-1).find((function(e){return e.totalLength>g-a})))j(-1);else{var e=b.length>0?i(b).childLength:0;j(b.findIndex((function(n){return n.totalLength>g-a-e})))}else j(b.findIndex((function(e){return e.totalLength>g-a})))}),[b,g,j,a,d]),t((function(){if(u.current){var e=[],n=0;u.current.childNodes.forEach((function(r){var t=r.clientWidth;e.push({childLength:t,totalLength:n+=t})})),z(e)}}),[c,u,z]),T}export{l as default};
