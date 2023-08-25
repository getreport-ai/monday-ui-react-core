import{defineProperty as i}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as t}from"react/jsx-runtime";import{getTestId as e,ComponentDefaultTestId as r}from"../../tests/testIds.js";import s from"classnames";import{forwardRef as o,useRef as l,useMemo as n,useLayoutEffect as a}from"react";import p from"../Tooltip/Tooltip.js";import m from"../../hooks/useIsOverflowing/useIsOverflowing.js";import c from"../../hooks/useMergeRefs.js";import d from"./TextWithHighlight.module.scss.js";var f=function(i,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"em",l=arguments.length>4?arguments[4]:void 0,n=o;return r?t(n,Object.assign({className:s(d.highlightText,l)},{children:i}),e):t("span",{children:i},e)},g=o((function(o,g){var h=o.className,u=o.id,v=o.text,T=void 0===v?"":v,j=o.highlightTerm,x=o.limit,H=o.useEllipsis,w=void 0===H||H,E=o.linesToClamp,I=void 0===E?3:E,O=o.ignoreCase,b=void 0===O||O,N=o.allowTermSplit,P=void 0===N||N,W=o.nonEllipsisTooltip,_=o.tooltipPosition,y=o.wrappingTextTag,C=void 0===y?"em":y,k=o.wrappingElementClassName,G=o["data-testid"],R=l(null),B=c({refs:[g,R]}),L=n((function(){if(!T||!j||0===x)return T;var i=j;P&&(i=j.split(" ").join("|"));for(var t=T.split(RegExp("(".concat(i,")"),b?"i":"")),e=[],r=0,s=0,o=0;t.length>o;o++)if(t[o]){var l=o%2==1;e.push(f(t[o],s++,l&&(!x||0>x||x>r),C,k)),l&&r++}return e}),[T,j,x,b,P,C,k]),M=m({ref:w&&R});a((function(){R.current&&R.current.style.setProperty("--heading-clamp-lines",""+I)}),[R,I]);var S=t("div",Object.assign({ref:B,className:s(d.textWithHighlightWrapper,h,i({},d.withEllipsis,w)),id:u,"data-testid":G||e(r.TEXT_WITH_HIGHLIGHT,u)},{children:L}));return M||W?t(p,Object.assign({content:M?T:W,position:_},{children:S})):S}));export{g as default};