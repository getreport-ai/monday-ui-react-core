import{useCallback as e,useEffect as r}from"react";import{debounce as n}from"lodash-es";function i(i){var o=i.ref,t=i.callback,c=i.debounceTime,l=void 0===c?200:c,a=e(n(t,l),[t,l]);r((function(){if(window.ResizeObserver&&(null==o?void 0:o.current)){var e=null,r=new ResizeObserver((function(r){var i,o=r[0];if(o&&o.borderBoxSize){if(Array.isArray(o.borderBoxSize))e=n(o.borderBoxSize[0]);else e=n(o.borderBoxSize)}else{if(!o.contentRect)return;var t={blockSize:o.contentRect.height,inlineSize:(null===(i=null==o?void 0:o.contentRect)||void 0===i?void 0:i.width)||0};e=n(t)}}));return r.observe(null==o?void 0:o.current),function(){0!==l&&a.cancel(),e&&window.cancelAnimationFrame(e),r.disconnect()}}function n(e){var r=Array.isArray(e)?e[0]:e;return window.requestAnimationFrame((function(){a({borderBoxSize:r})}))}}),[null==o?void 0:o.current,t,l,a])}export{i as default};
