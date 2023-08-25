import{useKeyboardButtonPressedFunc as o}from"../useKeyboardButtonPressedFunc.js";import{useRef as e}from"react";import i from"../useMergeRefs.js";import{getTestId as a}from"../../tests/test-ids-utils.js";import{ComponentDefaultTestId as t}from"../../tests/constants.js";import{NOOP as r}from"../../utils/function-utils.js";function s(s,d){var n=s.onClick,u=void 0===n?r:n,l=s.onMouseDown,p=void 0===l?r:l,v=s.onMouseEnter,m=void 0===v?r:v,f=s.onMouseLeave,b=void 0===f?r:f,c=s.disabled,M=void 0!==c&&c,j=s.id,x=s.dataTestId,L=s.role,C=void 0===L?"button":L,E=s.tabIndex,I=void 0===E?0:E,w=s.ariaLabel,D=s.ariaHidden,K=s.ariaHasPopup,h=s.ariaExpanded,k=o(u),y=e(null),B=void 0===K?void 0:!!K;return{ref:i({refs:[d,y]}),id:j,"data-testid":x||a(t.CLICKABLE,j),onClick:M?void 0:u,onKeyDown:M?void 0:k,onMouseDown:p,onMouseEnter:m,onMouseLeave:b,tabIndex:M?-1:Number(I),role:C,"aria-label":w,"aria-hidden":D,"aria-haspopup":B,"aria-expanded":h}}export{s as default};
