import{slicedToArray as t}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as e}from"react/jsx-runtime";import r from"classnames";import i,{forwardRef as s,useRef as o,useState as n,useCallback as a,useMemo as l}from"react";import c from"../../hooks/useMergeRefs.js";import m from"../../hooks/useKeyEvent/index.js";import{VirtualizedListItems as d}from"./VirtualizedListItems/VirtualizedListItems.js";import{keyCodes as u,UP_DOWN_ARROWS as f}from"../../constants/keyCodes.js";import{withStaticProps as p}from"../../types/withStaticProps.js";import{ListWrapperComponentType as v}from"./ListConstants.js";import{getTestId as b,ComponentDefaultTestId as j}from"../../tests/test-ids-utils.js";import{ListContext as y}from"./utils/ListContext.js";import{useListId as h,getListItemIndexById as L,getNextListItemIndex as k,getPrevListItemIndex as x,getListItemIdByIndex as I,getListItemComponentType as g}from"./utils/ListUtils.js";import A from"./List.module.scss.js";var O=s((function(s,p){var v=s.className,R=s.id,C=s.component,P=void 0===C?O.components.UL:C,V=s.children,_=s.ariaLabel,D=s.ariaDescribedBy,E=s.renderOnlyVisibleItems,N=void 0!==E&&E,U=s.style,W=s["data-testid"],z=h(R),B=o(null),S=n(0),T=t(S,2),w=T[0],F=T[1],H=c({refs:[p,B]}),K=P,M=o([]),q=a((function(t){var e;F(L(M,t)),null===(e=null==B?void 0:B.current)||void 0===e||e.setAttribute("aria-activedescendant",t)}),[]),G=a((function(t){if(!N){t.preventDefault();var e=t.key===u.UP_ARROW,r=void 0;t.key===u.DOWN_ARROW&&M.current.length>w+1?r=k(w,M):e&&w>0&&(r=x(w,M)),void 0!==r&&(q(I(M,r)),M.current[r].focus())}}),[w,N,q]);m({keys:f,callback:G,ref:B});var J=l((function(){var t=Array.isArray(V)?V:[V];return N?t=e(d,{children:t}):(M.current=M.current.slice(0,t.length),t=i.Children.map(t,(function(t,e){if(!i.isValidElement(t))return t;var r=t.props.id||"".concat(z,"-item-").concat(e);return i.cloneElement(t,{ref:function(t){return M.current[e]=t},tabIndex:w===e?0:-1,id:r,component:g(P)})}))),t}),[V,P,w,z,N]);return e(y.Provider,Object.assign({value:{updateFocusedItem:q}},{children:e(K,Object.assign({"data-testid":W||b(j.LIST,R),ref:H,style:U,className:r(A.list,v),id:z,"aria-label":_,"aria-describedby":D,tabIndex:-1,role:"listbox"},{children:J}))}))})),R=p(O,{components:v});export{R as default};
