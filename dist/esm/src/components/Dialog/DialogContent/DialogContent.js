import{defineProperty as e}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as o}from"react/jsx-runtime";import r,{useRef as t,useCallback as i,useEffect as s,cloneElement as a}from"react";import n from"classnames";import{camelCase as p}from"lodash-es";import{CSSTransition as l}from"react-transition-group";import c from"../../../hooks/useClickOutside/index.js";import{chainFunctions as d,NOOP as m}from"../../../utils/function-utils.js";import u from"../../../hooks/useKeyEvent/index.js";import{HideShowEvent as f}from"../consts/dialog-show-hide-event.js";import{getStyle as v}from"../../../helpers/typesciptCssModulesHelper.js";import h from"./DialogContent.module.scss.js";import C from"../../../hooks/useDisableScroll/index.js";import{AnimationType as j}from"../../../constants/dialog.js";import{keyCodes as y}from"../../../constants/keyCodes.js";var b={},g=[y.ESCAPE],k=r.forwardRef((function(y,k){var x,A=y.onEsc,E=void 0===A?m:A,S=y.children,N=y.position,O=y.wrapperClassName,M=y.isOpen,D=void 0!==M&&M,w=y.startingEdge,L=y.animationType,P=void 0===L?"expand":L,T=y.onMouseEnter,_=void 0===T?m:T,I=y.onMouseLeave,H=void 0===I?m:I,K=y.onClickOutside,R=void 0===K?m:K,B=y.onClick,U=void 0===B?m:B,W=y.onContextMenu,X=void 0===W?m:W,Y=y.showDelay,q=y.styleObject,z=void 0===q?b:q,F=y.isReferenceHidden,G=y.hasTooltip,J=void 0!==G&&G,Q=y.containerSelector,V=y.disableContainerScroll,Z=void 0!==V&&V,$=y["data-testid"],ee=t(null),oe=i((function(e){if(D)return R(e,f.CLICK_OUTSIDE)}),[D,R]),re=i((function(e){D&&X(e)}),[D,X]);u({keys:g,callback:E}),c({callback:oe,ref:ee}),c({eventName:"contextmenu",callback:re,ref:ee});var te=C("string"==typeof Z?Z:Q),ie=te.disableScroll,se=te.enableScroll;s((function(){Z&&(D?ie():se())}),[Z,ie,se,D]);var ae={classNames:void 0};switch(P){case j.EXPAND:ae.classNames={appear:h.expandAppear,appearActive:h.expandAppearActive,exit:h.expandExit};break;case j.OPACITY_AND_SLIDE:ae.classNames={appear:h.opacitySlideAppear,appearActive:h.opacitySlideAppearActive}}return o("span",Object.assign({className:n("monday-style-dialog-content-wrapper",h.contentWrapper,O),ref:k,"data-testid":$,style:z,onClickCapture:U,"data-popper-reference-hidden":F},{children:o(l,Object.assign({},ae,{in:D,appear:!!P,timeout:Y},{children:o("div",Object.assign({className:n(h.contentComponent,v(h,p(N)),(x={},e(x,v(h,p("edge-"+w)),w),e(x,h.hasTooltip,J),x)),ref:ee},{children:r.Children.toArray(S).map((function(e){return a(e,{onMouseEnter:d([e.props.onMouseEnter,_]),onMouseLeave:d([e.props.onMouseLeave,H])})}))}))}))}))}));export{k as DialogContent};