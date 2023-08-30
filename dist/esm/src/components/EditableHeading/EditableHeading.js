import{slicedToArray as e,defineProperty as o}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as i}from"react/jsx-runtime";import{camelCase as t}from"lodash-es";import{getStyle as n}from"../../helpers/typesciptCssModulesHelper.js";import{getTestId as s,ComponentDefaultTestId as a}from"../../tests/test-ids-utils.js";import l from"classnames";import{useState as r,useRef as u,useCallback as d,useEffect as c,useLayoutEffect as p}from"react";import m from"../LegacyHeading/LegacyHeading.js";import g from"../Clickable/Clickable.js";import f from"../EditableInput/EditableInput.js";import h from"../../hooks/usePrevious/index.js";import{InputType as v}from"../EditableInput/EditableInputConstants.js";import{HeadingTypes as y,HeadingSizes as E}from"../LegacyHeading/LegacyHeadingConstants.js";import{withStaticProps as b}from"../../types/withStaticProps.js";import C from"../LegacyHeading/LegacyHeading.module.scss.js";import j from"./EditableHeading.module.scss.js";var T=b((function(y){var b=y.id,T=void 0===b?"":b,H=y.className,L=y.inputClassName,O=void 0===L?"":L,x=y.dataTestId,I=void 0===x?"":x,A=y["data-testid"],M=void 0===A?"":A,P=y.value,B=y.editing,F=y.disabled,w=y.onFinishEditing,N=y.onCancelEditing,S=y.onIgnoreBlurEvent,k=y.errorClassTimeout,z=void 0===k?2e3:k,D=y.style,K=y.customColor,V=y.onStartEditing,_=y.contentRenderer,R=y.tooltip,G=y.autoSize,W=void 0===G||G,X=y.highlightTerm,q=void 0===X?null:X,J=y.insetFocus,Q=void 0!==J&&J,U=y.size,Y=void 0===U?E.LARGE:U,Z=y.displayPlaceholderInTextMode,$=void 0===Z||Z,ee=y.suggestEditOnHover,oe=void 0===ee||ee,ie=y.type,te=void 0===ie?m.types.h1:ie,ne=r(B&&!F),se=e(ne,2),ae=se[0],le=se[1],re=r(!1),ue=e(re,2),de=ue[0],ce=ue[1],pe=r(P||""),me=e(pe,2),ge=me[0],fe=me[1],he=h(P),ve=u(null),ye=d((function(e){F||ae||(le(!0),V&&V(e))}),[ae,F,le,V]),Ee=d((function(e,o){le(!1),fe(e),null==w||w(e,o)}),[w,le,fe]),be=d((function(e){le(!1),null==N||N(e)}),[N,le]),Ce=d((function(e){null==S||S(e)}),[S]),je=d((function(){ce(!1)}),[ce]),Te=d((function(){ce(!0)}),[ce]),He=d((function(){je()}),[je]);c((function(){B||P===he||P===ge||fe(P)}),[B,P,he,ge,fe]),c((function(){le(B)}),[B]),p((function(){B||ge||!P||fe(P)}),[B,P,he,ge,fe]),c((function(){var e;return de&&(e=setTimeout(je,z)),function(){return e&&clearTimeout(e)}}),[de,ce,je,z]);var Le,Oe,xe,Ie=!F&&ae;return i("div",Object.assign({ref:ve,style:D,className:l(j.editableHeadingWrapper,H,o({},j.insetFocus,Q)),"aria-label":"".concat(P," ").concat(R||""),id:T,"data-testid":M||I||s(a.EDITABLE_HEADING,T)},{children:i(g,Object.assign({role:Ie?"button":"input",onClick:ye,disabled:F},{children:Ie?(Oe=y.inputType||(y.ellipsisMaxLines>1?v.TEXT_AREA:void 0),xe={value:ge,className:l(n(C,t("element-type-"+te)),n(C,t("size-"+Y)),O),isValidValue:y.isValidValue,onChange:y.onChange,onKeyDown:y.onKeyDown,onKeyPress:y.onKeyPress,onClick:y.onClick,customColor:K,onTabHandler:y.onTabHandler,onArrowKeyDown:y.onArrowKeyDown,autoComplete:y.autoComplete,maxLength:y.maxLength,placeholder:y.placeholder,shouldFocusOnMount:y.shouldFocusOnMount,selectOnMount:y.selectOnMount,onBlur:y.onBlur,onFocus:y.onFocus,inputType:Oe,ignoreBlurClass:y.ignoreBlurClass,autoSize:W,textareaSubmitOnEnter:y.textareaSubmitOnEnter,onFinishEditing:Ee,onCancelEditing:be,onIgnoreBlurEvent:Ce,onError:Te,onSuccess:He,ariaLabel:y.inputAriaLabel},i(f,Object.assign({},xe))):(Le={value:$?ge||y.placeholder||"":ge,type:te,customColor:K,suggestEditOnHover:oe&&!F,tooltipPosition:y.tooltipPosition,ellipsisMaxLines:y.ellipsisMaxLines,nonEllipsisTooltip:y.tooltip,size:Y,highlightTerm:q,className:l(j.headingComponent,y.headingClassName)},_?_(Le):i(m,Object.assign({},Le)))}))}))}),{types:y,sizes:E});export{T as default};
