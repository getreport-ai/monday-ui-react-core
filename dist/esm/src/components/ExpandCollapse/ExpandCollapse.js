import{slicedToArray as e,defineProperty as o}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as n,jsxs as t}from"react/jsx-runtime";import a from"classnames";import{forwardRef as s,useRef as r,useState as i,useCallback as c}from"react";import l from"../../hooks/useMergeRefs.js";import d from"../Icon/Icon.js";import m from"../LegacyHeading/LegacyHeading.js";import p from"../Icon/Icons/components/DropdownChevronDown.js";import{getTestId as f,ComponentDefaultTestId as u}from"../../tests/test-ids-utils.js";import h from"./ExpandCollapse.module.scss.js";var v=s((function(s,v){var C,g,j,y=s.children,N=s.headerComponentRenderer,b=void 0===N?null:N,O=s.title,x=void 0===O?"":O,B=s.className,I=s.defaultOpenState,S=void 0!==I&&I,k=s.iconSize,E=void 0===k?24:k,L=s.id,P=void 0===L?"":L,w=s.open,A=s.onClick,D=void 0===A?null:A,H=s.hideBorder,_=void 0!==H&&H,z=s.headerClassName,R=s.contentClassName,T=s.componentClassName,G=s["data-testid"],M=r(null),V=l({refs:[v,M]}),X=i(S),q=e(X,2),F=q[0],J=q[1],K=void 0===w?F:w,Q=c((function(){return"string"==typeof x?n(m,{type:m.types.h5,value:x,className:a(h.headerContent)}):x}),[x]);return n("div",Object.assign({ref:V,className:B,id:P,"data-testid":G||f(u.EXPAND_COLLAPSE,P)},{children:t("div",Object.assign({className:a(h.expandCollapse,(C={},o(C,h.hideBorder,_),o(C,h.showBorder,!_),C),T)},{children:[t("button",Object.assign({type:"button",className:a(h.header,h.section,z,(g={},o(g,h.headerOpen,K),o(g,h.hideBorderBottom,_),g)),onClickCapture:D||function(){J(!F)},"aria-expanded":K,"aria-controls":"".concat(P,"-controls")},{children:["string"!=typeof x||0!==x.length?Q():b&&b(),n(d,{className:a(h.iconComponent,(j={},o(j,h.animateIconOpen,K),o(j,h.animateIconClose,!K),j)),iconType:d.type.SVG,icon:p,iconSize:E,clickable:!1})]})),K&&n("div",Object.assign({className:a(h.content,h.section,R,o({},h.animateExpandCollapseContent,K)),id:"".concat(P,"-controls"),role:"region"},{children:y}))]}))}))}));export{v as default};
