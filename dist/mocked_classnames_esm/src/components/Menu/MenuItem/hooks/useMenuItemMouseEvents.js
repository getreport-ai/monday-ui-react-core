import{useLayoutEffect as e}from"react";import r from"../../../../hooks/useIsMouseEnter.js";import n from"../../../../hooks/usePrevious/index.js";function o(o){var s=o.resetOpenSubMenuIndex,t=o.setSubMenuIsOpenByIndex,u=o.isActive,i=o.setActiveItemIndex,f=o.index,m=o.hasChildren,d=r({ref:o.ref}),a=n(d);return e((function(){d&&d!==a&&(t&&s?(u||(i(f),m?t(f,!0):s()),u&&m&&t(f,!!d)):console.error("MenuItem must be a first level child of a menu"))}),[s,a,d,t,u,i,f,m]),d}export{o as default};