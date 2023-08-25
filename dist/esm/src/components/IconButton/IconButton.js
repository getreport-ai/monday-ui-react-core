import{jsx as s}from"react/jsx-runtime";import{forwardRef as e,useRef as o,useMemo as t,Fragment as i}from"react";import n from"classnames";import{noop as r}from"lodash-es";import a from"../../hooks/useMergeRefs.js";import c from"../Tooltip/Tooltip.js";import d from"../Icon/Icon.js";import l from"../Icon/Icons/components/AddSmall.js";import{getWidthHeight as m}from"./services/IconButton-helpers.js";import{withStaticProps as p}from"../../types/withStaticProps.js";import{getTestId as u}from"../../tests/test-ids-utils.js";import{ComponentDefaultTestId as f}from"../../tests/constants.js";import j from"../Button/Button.js";import{BUTTON_ICON_SIZE as v}from"../Button/ButtonConstants.js";import I from"./IconButton.module.scss.js";var b=e((function(e,p){var g=e.className,z=e.wrapperClassName,T=e.iconClassName,h=e.id,k=e.icon,C=void 0===k?l:k,N=e.size,S=void 0===N?b.sizes.MEDIUM:N,y=e.tooltipProps,B=void 0===y?{}:y,O=e.tooltipContent,x=e.ariaLabel,E=e.ariaExpanded,M=e.hideTooltip,L=void 0!==M&&M,R=e.kind,w=void 0===R?b.kinds.TERTIARY:R,A=e.active,F=e.disabled,P=void 0!==F&&F,U=e.disabledReason,X=e.onClick,D=void 0===X?r:X,G=e.color,W=e.dataTestId,V=e.insetFocus,Y=void 0!==V&&V,_=e.tabIndex,q=o(null),H=a({refs:[p,q]}),J=t((function(){return(null==B?void 0:B.content)||O}),[null==B?void 0:B.content,O]),K=t((function(){return x||("string"==typeof J?J:void 0)}),[x,J]),Q=t((function(){switch(S){case b.sizes.XXS:case b.sizes.XS:return 16;case b.sizes.SMALL:case b.sizes.MEDIUM:case b.sizes.LARGE:return v;default:return 24}}),[S]),Z=t((function(){var s={justifyContent:"center",alignItems:"center",padding:0};return S&&(s=Object.assign(Object.assign({},s),m(S))),s}),[S]),$=t((function(){return L?null:P&&U?U:J||x}),[L,P,U,J,x]),ss=z?"div":i,es=t((function(){return z?{className:n(z,I.wrapper)}:{}}),[z]);return s(ss,Object.assign({},es,{children:s(c,Object.assign({},B,{content:$,referenceWrapperClassName:I.referenceWrapper},{children:s(j,Object.assign({onClick:D,disabled:P,color:G,kind:w,ariaLabel:K,ariaExpanded:E,ref:H,id:h,dataTestId:W||u(f.ICON_BUTTON,h),noSidePadding:!0,active:A,className:g,style:Z,insetFocus:Y,tabIndex:_},{children:s(d,{icon:C,iconType:d.type.SVG,iconSize:Q,ignoreFocusStyle:!0,className:T,clickable:!1})}))}))}))})),g=p(b,{sizes:j.sizes,kinds:j.kinds,colors:j.colors});export{g as default};