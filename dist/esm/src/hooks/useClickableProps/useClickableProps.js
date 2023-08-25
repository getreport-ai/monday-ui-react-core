import{useKeyboardButtonPressedFunc as o}from"../useKeyboardButtonPressedFunc.js";import{useRef as e}from"react";import a from"../useMergeRefs.js";import{getTestId as i}from"../../tests/testIds.js";import{ComponentDefaultTestId as r}from"../../tests/constants.js";import{NOOP as t}from"../../utils/function-utils.js";function d(d,s){var n=d.onClick,u=void 0===n?t:n,p=d.onMouseDown,v=void 0===p?t:p,l=d.onMouseEnter,m=void 0===l?t:l,f=d.onMouseLeave,b=void 0===f?t:f,c=d.disabled,M=void 0!==c&&c,j=d.id,x=d.dataTestId,I=d.role,L=void 0===I?"button":I,C=d.tabIndex,E=void 0===C?0:C,w=d.ariaLabel,D=d.ariaHidden,K=d.ariaHasPopup,h=d.ariaExpanded,k=o(u),y=e(null),B=void 0===K?void 0:!!K;return{ref:a({refs:[s,y]}),id:j,"data-testid":x||i(r.CLICKABLE,j),onClick:M?void 0:u,onKeyDown:M?void 0:k,onMouseDown:v,onMouseEnter:m,onMouseLeave:b,tabIndex:M?-1:Number(E),role:L,"aria-label":w,"aria-hidden":D,"aria-haspopup":B,"aria-expanded":h}}export{d as default};
