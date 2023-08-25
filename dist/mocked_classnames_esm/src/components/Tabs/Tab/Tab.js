import{defineProperty as e,toConsumableArray as r}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as i}from"react/jsx-runtime";import s from"classnames";import{forwardRef as o,useRef as a}from"react";import{noop as t}from"lodash-es";import n from"../../../hooks/useMergeRefs.js";import{getStyle as c}from"../../../helpers/typesciptCssModulesHelper.js";import l from"../../Icon/Icon.js";import{getTestId as d,ComponentDefaultTestId as m}from"../../../tests/testIds.js";import f from"./Tab.module.scss.js";var p=o((function(o,p){var u,b=o.className,v=o.tabInnerClassName,j=o.id,I=o.value,h=void 0===I?0:I,y=o.disabled,g=void 0!==y&&y,C=o.active,N=void 0!==C&&C,k=o.focus,T=void 0!==k&&k,H=o.onClick,S=void 0===H?t:H,x=o.icon,A=o.iconType,B=o.iconSide,F=void 0===B?"left":B,M=o.children,O=o["data-testid"],P=a(null),_=n({refs:[p,P]});return i("li",Object.assign({ref:_,className:s(f.tabWrapper,b,(u={},e(u,f.active,N),e(u,f.disabled,g),e(u,f.tabFocusVisibleInset,T),u)),id:j,role:"tab","aria-selected":N,"aria-disabled":g,"data-testid":O||d(m.TAB,j)},{children:i("a",Object.assign({className:s(f.tabInner,v),onClick:function(){return!g&&S(h)}},{children:function(){if(!x)return M;var e=i(l,{clickable:!1,ariaHidden:!0,iconType:A,icon:x,className:s(f.tabIcon,c(f,F)),iconSize:18,ignoreFocusStyle:!0});return"left"===F?[e].concat(r(M)):[].concat(r(M),[e])}()}))}),j)}));export{p as default};
