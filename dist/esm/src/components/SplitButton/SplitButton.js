import{slicedToArray as o,defineProperty as i,toConsumableArray as n}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{__rest as e}from"../../../_virtual/_tslib.js";import{jsx as t,jsxs as a}from"react/jsx-runtime";import{camelCase as s}from"lodash-es";import{getStyle as r}from"../../helpers/typesciptCssModulesHelper.js";import{getTestId as l,ComponentDefaultTestId as d}from"../../tests/testIds.js";import c from"classnames";import{useState as m,useRef as u,useCallback as g,useMemo as p}from"react";import{SplitButtonSecondaryContentPosition as f,ENTER_KEYS as D,EMPTY_ARR as v,DEFAULT_DIALOG_SHOW_TRIGGER as T,DEFAULT_DIALOG_HIDE_TRIGGER as h,DIALOG_MOVE_BY as y,SECONDARY_BUTTON_ARIA_LABEL as C,SECONDARY_BUTTON_WRAPPER_CLASSNAME as O}from"./SplitButtonConstants.js";import{withStaticProps as S}from"../../types/withStaticProps.js";import{HideShowEvent as j}from"../Dialog/consts/dialog-show-hide-event.js";import{NOOP as b}from"../../utils/function-utils.js";import{isInsideClass as N}from"../../utils/dom-utils.js";import I from"../../hooks/useKeyEvent/index.js";import P from"../../hooks/useEventListener/index.js";import k from"../Button/Button.js";import B from"../Dialog/Dialog.js";import _ from"../Icon/Icons/components/DropdownChevronDown.js";import z from"../DialogContentContainer/DialogContentContainer.js";import E from"./SplitButton.module.scss.js";import{DialogPosition as A}from"../../constants/positions.js";import{AnimationType as w}from"../../constants/dialog.js";var M=function(S){var A=S.secondaryDialogContent,M=S.onSecondaryDialogDidShow,L=void 0===M?b:M,R=S.onSecondaryDialogDidHide,x=void 0===R?b:R,H=S.shouldCloseOnClickInsideDialog,U=S.zIndex,F=void 0===U?null:U,K=S.secondaryDialogClassName,Y=S.secondaryDialogPosition,W=void 0===Y?f.BOTTOM_START:Y,V=S.dialogContainerSelector,X=S.dialogPaddingSize,q=void 0===X?z.sizes.MEDIUM:X,G=S.disabled,J=S.loading,Q=S.kind,Z=S.color,$=S.className,oo=S.leftIcon,io=S.rightIcon,no=S.onClick,eo=S.children,to=S.marginLeft,ao=S.marginRight,so=S.active,ro=S.id,lo=S["data-testid"],co=e(S,["secondaryDialogContent","onSecondaryDialogDidShow","onSecondaryDialogDidHide","shouldCloseOnClickInsideDialog","zIndex","secondaryDialogClassName","secondaryDialogPosition","dialogContainerSelector","dialogPaddingSize","disabled","success","loading","kind","color","className","leftIcon","rightIcon","onClick","children","marginLeft","marginRight","active","id","data-testid"]),mo=m(!1),uo=o(mo,2),go=uo[0],po=uo[1],fo=m(!1),Do=o(fo,2),vo=Do[0],To=Do[1],ho=m(!1),yo=o(ho,2),Co=yo[0],Oo=yo[1],So=u(null),jo=u(null),bo=g((function(){return To(!0)}),[To]),No=g((function(){return To(!1)}),[To]),Io=g((function(o){return!G&&!N(o.target,O)}),[G]),Po=g((function(o){Io(o)&&Oo(!0)}),[Oo,Io]),ko=g((function(){return Oo(!1)}),[Oo]),Bo=g((function(o){Io(o)&&Oo(!0)}),[Oo,Io]),_o=g((function(){po(!0),L()}),[po,L]),zo=g((function(o,i){po(!1),x(),i===j.ESCAPE_KEY&&jo.current.focus()}),[po,x]);P({eventName:"mouseenter",callback:bo,ref:So}),P({eventName:"mouseleave",callback:No,ref:So}),P({eventName:"mousedown",callback:Po,ref:So}),P({eventName:"mouseup",callback:ko,ref:So}),P({eventName:"transitionend",callback:ko,ref:So}),I({keys:D,ref:So,callback:Bo});var Eo=p((function(){var o;return c(E.button,r(E,s("kind-"+Q)),r(E,s("color-"+Z)),(i(o={},E.mainActive,so),i(o,E.active,Co),i(o,E.splitContentOpen,go),i(o,E.hovered,vo),i(o,E.disabled,G),o),$)}),[$,Q,Z,so,Co,go,vo,G]),Ao=p((function(){return G?v:T}),[G]),wo=p((function(){return H?[].concat(n(h),[j.CONTENT_CLICK]):h}),[H]),Mo=g((function(){var o="function"==typeof A?A():A;return t(z,Object.assign({type:z.types.POPOVER,size:q},{children:o}))}),[A,q]),Lo=p((function(){return W===f.BOTTOM_MIDDLE?"":W===f.BOTTOM_START?"bottom":"top"}),[W]);return a("div",Object.assign({className:Eo,ref:So,id:ro,"data-testid":lo||l(d.SPLIT_BUTTON,ro)},{children:[t(k,Object.assign({},co,{preventClickAnimation:!0,leftIcon:oo,rightIcon:io,rightFlat:!0,color:Z,kind:Q,active:so,onClick:no,className:E.mainButton,marginLeft:to,onFocus:bo,onBlur:No,disabled:G,loading:J,"data-testid":lo||l(d.SPLIT_BUTTON_PRIMARY_BUTTON,ro)},{children:eo})),t("div",Object.assign({className:E.secondaryButtonWrapper},{children:t(B,Object.assign({wrapperClassName:K,zIndex:F,content:Mo,position:W,containerSelector:V,startingEdge:Lo,animationType:w.EXPAND,moveBy:y,onDialogDidShow:_o,onDialogDidHide:zo,showTrigger:Ao,hideTrigger:wo},{children:t(k,Object.assign({},co,{ref:jo,preventClickAnimation:!0,leftFlat:!0,noSidePadding:!0,color:Z,kind:Q,className:E.secondaryButton,active:go,marginRight:ao,onFocus:bo,onBlur:No,disabled:G,ariaLabel:C,ariaHasPopup:!0,ariaExpanded:go,"data-testid":lo||l(d.SPLIT_BUTTON_SECONDARY_BUTTON,ro)},{children:t("div",Object.assign({className:E.secondaryButtonIconWrapper},{children:t(_,{"aria-hidden":"true"})}))}))}))}))]}))};M.defaultProps=Object.assign(Object.assign({},k.defaultProps),{onSecondaryDialogDidShow:b,onSecondaryDialogDidHide:b,zIndex:null,secondaryDialogClassName:"",secondaryDialogPosition:A.BOTTOM_START,dialogPaddingSize:z.sizes.MEDIUM});var L=S(M,{secondaryPositions:f,secondaryDialogPositions:f,sizes:k.sizes,colors:k.colors,kinds:k.kinds,inputTags:k.inputTags,dialogPaddingSizes:z.sizes});export{L as default};