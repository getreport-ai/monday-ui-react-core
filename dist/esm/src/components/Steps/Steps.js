import{defineProperty as t}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsxs as o,jsx as e}from"react/jsx-runtime";import{forwardRef as s,useRef as i}from"react";import r from"classnames";import{NOOP as n}from"../../utils/function-utils.js";import a from"../../hooks/useMergeRefs.js";import{StepsHeader as p}from"./StepsHeader.js";import{StepsType as d}from"./StepsConstants.js";import{getTestId as m,ComponentDefaultTestId as u}from"../../tests/test-ids-utils.js";import{withStaticProps as c}from"../../types/withStaticProps.js";import v from"./Steps.module.scss.js";var l=c(s((function(s,c){var l,f=s.className,j=s.id,B=s["data-testid"],P=s.steps,S=void 0===P?[]:P,g=s.activeStepIndex,y=void 0===g?0:g,h=s.type,x=void 0===h?d.GALLERY:h,H=s.onChangeActiveStep,O=void 0===H?n:H,C=s.isOnPrimary,N=void 0!==C&&C,b=s.areNavigationButtonsHidden,I=void 0!==b&&b,k=s.isContentOnTop,A=void 0!==k&&k,T=s.backButtonProps,E=void 0===T?{}:T,L=s.nextButtonProps,R=void 0===L?{}:L,_=s.areButtonsIconsHidden,w=void 0!==_&&_,G=i(null),M=a({refs:[c,G]});return o("div",Object.assign({ref:M,className:r(v.steps,f),id:j,"data-testid":B||m(u.STEPS,j)},{children:[A&&S[y],e(p,{onChangeActiveStep:O,type:x,activeStepIndex:y,stepsCount:S.length,areNavigationButtonsHidden:I,isOnPrimary:N,backButtonProps:E,nextButtonProps:R,areButtonsIconsHidden:w,className:r((l={},t(l,v.contentOnTop,A),t(l,v.contentOnBottom,!A),l))}),!A&&S[y]]}))})),{types:d});export{l as default};
