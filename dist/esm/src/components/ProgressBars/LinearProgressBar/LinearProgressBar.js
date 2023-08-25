import{defineProperty as e,toConsumableArray as r}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as a,Fragment as t,jsxs as s}from"react/jsx-runtime";import{forwardRef as i,useMemo as o}from"react";import l from"classnames";import{getStyle as n}from"../../../helpers/typesciptCssModulesHelper.js";import m from"../PercentageLabel/PercentageLabel.js";import{ProgressBarStyle as d,ProgressBarType as c}from"./LinearProgressBarConstants.js";import{calculatePercentage as u,getProgressBarClassNames as p}from"./LinearProgressBarHelpers.js";import v from"./Bar/Bar.js";import{withStaticProps as f}from"../../../types/withStaticProps.js";import{ComponentDefaultTestId as b}from"../../../tests/constants.js";import{getTestId as y}from"../../../tests/test-ids-utils.js";import R from"./LinearProgressBar.module.scss.js";import{SIZES as j}from"../../../constants/sizes.js";var P=f(i((function(i,f){var P=i.min,A=void 0===P?0:P,N=i.max,S=void 0===N?100:N,g=i.value,L=void 0===g?0:g,_=i.valueSecondary,h=void 0===_?0:_,B=i.animated,x=void 0===B||B,E=i.barStyle,M=void 0===E?d.PRIMARY:E,O=i.className,Y=i.size,C=void 0===Y?j.SMALL:Y,I=i.indicateProgress,z=void 0!==I&&I,H=i.multi,w=void 0!==H&&H,D=i.multiValues,W=void 0===D?[]:D,G=i.ariaLabel,T=void 0===G?"":G,V=i.id,k=i.fullWidth,q=void 0!==k&&k,F=i["data-testid"],J=o((function(){var r;return l(R.wrapper,(e(r={},n(R,""+C),C),e(r,R.fullWidth,q),r),O)}),[C,q,O]),K=o((function(){if(w){var e=W&&W.length&&W[0].value;return null==e?0:u(e,A,S)}return null==L?0:u(L,A,S)}),[L,A,S,w,W]),Q=o((function(){return w?a(t,{children:r(W).reverse().map((function(e,r){var t=e.value,s=e.color;return a(v,{className:p(t),barStyle:d.NONE,value:t,animated:x,type:c.PRIMARY,color:s,min:A,max:S,id:"bar_".concat(s,"_").concat(r)},"bar_".concat(s,"_").concat(r))}))}):null}),[A,S,x,W,w]),U=z?a(m,{forElement:"linear-progress-bar",value:K}):null,X=w?null:s(t,{children:[a(v,{className:p(L),barLabelName:T,barStyle:M,value:h,animated:x,type:c.SECONDARY,min:A,max:S,"data-testid":b.BAR_SECONDARY}),a(v,{className:p(L),barStyle:M,value:L,animated:x,type:c.PRIMARY,min:A,max:S,"data-testid":b.BAR_PRIMARY})]});return s("div",Object.assign({className:J,ref:f,id:V,"data-testsid":F||y(b.LINEAR_PROGRESS_BAR,V)},{children:[s("div",Object.assign({className:R.container},{children:[X,Q]})),U]}))})),{styles:d,barStyles:d,types:c,barTypes:c,sizes:j});export{P as default};
