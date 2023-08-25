import{defineProperty as e}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as s}from"react/jsx-runtime";import t from"classnames";import{forwardRef as o,useContext as i,useRef as r,useEffect as m,useCallback as n}from"react";import{camelCase as a}from"lodash-es";import{getStyle as l}from"../../helpers/typesciptCssModulesHelper.js";import d from"../Text/Text.js";import{NOOP as p}from"../../utils/function-utils.js";import{withStaticProps as c}from"../../types/withStaticProps.js";import{ListContext as f}from"../List/utils/ListContext.js";import{ListItemComponentType as u}from"./ListItemConstants.js";import j from"./ListItem.module.scss.js";import v from"../../hooks/useMergeRefs.js";import b from"../../hooks/useKeyEvent/index.js";import{SELECTION_KEYS as y}from"../../constants/keyCodes.js";import{SIZES as x}from"../../constants/sizes.js";var I=o((function(o,c){var u,h=o.className,k=o.id,L=o.component,C=void 0===L?I.components.DIV:L,g=o.onClick,M=void 0===g?p:g,T=o.onHover,z=void 0===T?p:T,E=o.selected,H=o.disabled,N=void 0!==H&&H,P=o.size,F=void 0===P?x.SMALL:P,O=o.tabIndex,S=void 0===O?0:O,_=o.children,w=o["data-testid"],A=i(f).updateFocusedItem,B=r(null),D=v({refs:[c,B]});m((function(){E&&(null==A||A(k))}),[E,k,A]);var K=n((function(e){N||M(e,k)}),[N,M,k]);b({keys:y,ref:B,callback:K});var R=n((function(e){N||z(e,k)}),[N,z,k]);return s(d,Object.assign({element:C,"data-testid":w||k,ref:D,className:t(j.listItem,h,l(j,a(F)),(u={},e(u,j.selected,E&&!N),e(u,j.disabled,N),u)),id:k,type:d.types.TEXT2,"aria-disabled":N,"aria-selected":E,onClick:K,onMouseEnter:R,onFocus:R,role:"option",tabIndex:S},{children:_}))}));Object.assign(I,{displayName:"ListItem"});var h=c(I,{sizes:x,components:u});export{h as default};