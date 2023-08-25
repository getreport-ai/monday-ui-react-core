import{slicedToArray as e,defineProperty as i}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as t}from"react/jsx-runtime";import{camelCase as o}from"lodash-es";import{getStyle as r}from"../../helpers/typesciptCssModulesHelper.js";import{getTestId as s,ComponentDefaultTestId as n}from"../../tests/testIds.js";import a from"classnames";import{useState as d,useRef as c,useCallback as l,useEffect as m,useMemo as p}from"react";import{SwitchTransition as u,CSSTransition as f}from"react-transition-group";import v from"../../hooks/useEventListener/index.js";import b from"../../hooks/useAfterFirstRender/index.js";import{NOOP as j}from"../../utils/function-utils.js";import{backwardCompatibilityForProperties as h}from"../../helpers/backwardCompatibilityForProperties.js";import{CounterSize as g,CounterColor as x,CounterType as A,getActualSize as E}from"./CounterConstants.js";import{withStaticProps as C}from"../../types/withStaticProps.js";import N from"./Counter.module.scss.js";var k=C((function g(x){var A=x.counterClassName,C=x.count,k=void 0===C?0:C,L=x.size,O=void 0===L?g.sizes.LARGE:L,w=x.kind,y=void 0===w?g.kinds.FILL:w,M=x.color,R=void 0===M?g.colors.PRIMARY:M,P=x.maxDigits,z=void 0===P?3:P,D=x.ariaLabeledBy,F=void 0===D?"":D,I=x.ariaLabel,T=void 0===I?"":I,B=x.id,H=void 0===B?"":B,U=x.prefix,_=void 0===U?"":U,G=x.onMouseDown,S=void 0===G?j:G,Y=x.noAnimation,q=void 0!==Y&&Y,J=x["data-testid"],K=h([x.className,x.wrapperClassName],void 0),Q=d(!1),V=e(Q,2),W=V[0],X=V[1],Z=c(null),$=l((function(){X(!0)}),[X]),ee=l((function(){X(!1)}),[X]);v({eventName:"animationend",callback:ee,ref:Z});var ie=b();m((function(){ie.current||$()}),[k,ie,$]),m((function(){z>0||console.error("Max digits must be a positive number")}),[z]);var te=p((function(){return a(N.counter,r(N,o("size-"+E(O))),r(N,o("kind-"+y)),r(N,o("color-"+R)),i({},N.withAnimation,W),A)}),[O,y,R,W,A]),oe="counter"+(H?"-".concat(H):""),re=(null==k?void 0:(""+k).length)>z?"".concat(Math.pow(10,z)-1,"+"):k+"",se=t("span",Object.assign({id:oe,"data-testid":J||s(n.COUNTER,H)},{children:_+re}));return t("span",Object.assign({className:K,"aria-label":"".concat(T," ").concat(re),"aria-labelledby":F,onMouseDown:S},{children:t("div",Object.assign({className:te,"aria-label":re,ref:Z},{children:q?se:t(u,Object.assign({mode:"out-in"},{children:t(f,Object.assign({classNames:{enter:N.fadeEnter,enterActive:N.fadeEnterActive,exit:N.fadeExit,exitActive:N.fadeExitActive},addEndListener:function(e,i){e.addEventListener("transitionend",i,!1)}},{children:t("span",Object.assign({id:oe,"data-testid":J||s(n.COUNTER,H)},{children:_+re}))}),re)}))}))}))}),{sizes:g,colors:x,kinds:A});export{k as default};
