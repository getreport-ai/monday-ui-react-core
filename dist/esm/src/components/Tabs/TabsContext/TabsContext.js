import{slicedToArray as e}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as t}from"react/jsx-runtime";import i,{forwardRef as r,useRef as a,useState as s,useEffect as o,useCallback as n}from"react";import l from"../../../hooks/useMergeRefs.js";import m from"../../../hooks/usePrevious/index.js";import{getTestId as c,ComponentDefaultTestId as d}from"../../../tests/test-ids-utils.js";var u=r((function(r,u){var f=r.className,p=r.id,v=r.activeTabId,T=void 0===v?0:v,b=r.children,h=r["data-testid"],j=a(null),g=l({refs:[u,j]}),x=s(T),y=e(x,2),C=y[0],E=y[1],I=s(T),N=e(I,2),P=N[0],_=N[1],k=m(T);o((function(){T!==k&&T!==P&&(E(P),_(T))}),[T,k,P,E,_]);var A=n((function(e){E(P),_(e)}),[E,P,_]);return t("div",Object.assign({ref:g,className:f,id:p,"data-testid":h||c(d.TABS_CONTEXT,p)},{children:i.Children.map(b,(function(e){return e.type.isTabList?i.cloneElement(e,{activeTabId:P,onTabChange:A}):e.type.isTabPanels?i.cloneElement(e,{activeTabId:P,animationDirection:P>C?"ltr":"rtl"}):e}))}))}));export{u as default};