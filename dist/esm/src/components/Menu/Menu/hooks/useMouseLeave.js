import{useLayoutEffect as e}from"react";import r from"../../../../hooks/useIsMouseEnter.js";import o from"../../../../hooks/usePrevious/index.js";function t(t){var n=t.resetOpenSubMenuIndex,s=t.hasOpenSubMenu,u=t.ref,f=t.setActiveItemIndex,i=r({ref:u}),m=o(i);return e((function(){i||i!==m&&(s||(n(),f(-1)))}),[n,u,m,i,s,f]),i}export{t as default};