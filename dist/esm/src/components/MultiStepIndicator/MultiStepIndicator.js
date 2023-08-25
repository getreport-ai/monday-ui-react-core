import{defineProperty as e}from"../../../_virtual/_rollupPluginBabelHelpers.js";import t,{forwardRef as s,useRef as i,useCallback as o,createElement as r,useMemo as l}from"react";import{jsxs as n,jsx as p}from"react/jsx-runtime";import m from"classnames";import a from"../../hooks/useMergeRefs.js";import c from"../Icon/Icons/components/Check.js";import d from"../Divider/Divider.js";import{NOOP as f}from"../../utils/function-utils.js";import u from"./components/StepIndicator/StepIndicator.js";import{MultiStepType as C,StepStatus as I,TextPlacement as v,Size as S}from"./MultiStepConstants.js";import{getTestId as j}from"../../tests/test-ids-utils.js";import{ComponentDefaultTestId as y}from"../../tests/constants.js";import N from"./MultiStepIndicator.module.scss.js";import{withStaticProps as T}from"../../types/withStaticProps.js";import{IconType as g}from"../Icon/IconConstants.js";var b=T(s((function(s,I){var T=s.className,b=s.steps,h=void 0===b?[]:b,R=s.type,D=void 0===R?C.PRIMARY:R,P=s.stepComponentClassName,A=s.dividerComponentClassName,O=s.fulfilledStepIcon,k=void 0===O?c:O,x=s.fulfilledStepIconType,M=void 0===x?g.SVG:x,_=s.isFulfilledStepDisplayNumber,F=void 0!==_&&_,L=s.onClick,E=void 0===L?f:L,V=s.textPlacement,w=void 0===V?v.HORIZONTAL:V,z=s.id,B=s.size,G=s["data-testid"],H=i(null),U=a({refs:[I,H]}),Y=w===v.VERTICAL?S.REGULAR:B,Z=o((function(s,i){return n(t.Fragment,{children:[p(u,Object.assign({},s,{stepNumber:i+1,type:D,stepComponentClassName:P,fulfilledStepIcon:k,fulfilledStepIconType:M,onClick:E,isFulfilledStepDisplayNumber:F,size:Y})),i!==h.length-1&&p(d,{classname:m(N.divider,A,e({},N.compact,Y===S.COMPACT))})]},"".concat(s.titleText,"_").concat(i))}),[E,F,D,P,k,M,A,h.length,Y]),q=o((function(e,t){return r(u,Object.assign({},e,{key:"".concat(e.titleText,"_").concat(t),stepNumber:t+1,type:D,stepComponentClassName:P,fulfilledStepIcon:k,fulfilledStepIconType:M,onClick:E,isFollowedByDivider:t!==h.length-1,stepDividerClassName:m(N.divider,A),isVertical:!0,isFulfilledStepDisplayNumber:F}))}),[E,F,D,P,k,M,A,h.length]),J=l((function(){return w===v.VERTICAL?q:Z}),[w,q,Z]);return p("ol",Object.assign({ref:U,id:z,"data-testid":G||j(y.MULTI_STEP_INDICATOR,z),className:m(N.wrapper,T)},{children:h.map(J)}))})),{types:C,stepStatuses:I,textPlacements:v,sizes:S});export{b as default};
