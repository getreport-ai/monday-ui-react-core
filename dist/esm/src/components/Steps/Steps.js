import{defineProperty as t}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsxs as o,jsx as e}from"react/jsx-runtime";import{forwardRef as s,useRef as i}from"react";import r from"classnames";import{NOOP as n}from"../../utils/function-utils.js";import a from"../../hooks/useMergeRefs.js";import{StepsHeader as p}from"./StepsHeader.js";import{StepsType as d}from"./StepsConstants.js";import{getTestId as m,ComponentDefaultTestId as c}from"../../tests/testIds.js";import{withStaticProps as u}from"../../types/withStaticProps.js";import v from"./Steps.module.scss.js";var f=u(s((function(s,u){var f,l=s.className,j=s.id,B=s["data-testid"],P=s.steps,S=void 0===P?[]:P,g=s.activeStepIndex,y=void 0===g?0:g,h=s.type,x=void 0===h?d.GALLERY:h,H=s.onChangeActiveStep,O=void 0===H?n:H,C=s.isOnPrimary,I=void 0!==C&&C,N=s.areNavigationButtonsHidden,b=void 0!==N&&N,k=s.isContentOnTop,A=void 0!==k&&k,T=s.backButtonProps,E=void 0===T?{}:T,L=s.nextButtonProps,R=void 0===L?{}:L,_=s.areButtonsIconsHidden,w=void 0!==_&&_,G=i(null),M=a({refs:[u,G]});return o("div",Object.assign({ref:M,className:r(v.steps,l),id:j,"data-testid":B||m(c.STEPS,j)},{children:[A&&S[y],e(p,{onChangeActiveStep:O,type:x,activeStepIndex:y,stepsCount:S.length,areNavigationButtonsHidden:b,isOnPrimary:I,backButtonProps:E,nextButtonProps:R,areButtonsIconsHidden:w,className:r((f={},t(f,v.contentOnTop,A),t(f,v.contentOnBottom,!A),f))}),!A&&S[y]]}))})),{types:d});export{f as default};
