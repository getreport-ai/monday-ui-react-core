import{useEffect as t}from"react";import{isMenuChildSelectable as e}from"../utils/utils.js";var n=function(n){var i=n.focusItemIndexOnMount,o=n.focusChildOnMount,u=n.getNextSelectableIndex,r=n.updateActiveItemIndex,a=n.setIsInitialFocusSet;t((function(){if(-1!==i){var t=e(o)?i:u(i);null!==t&&requestAnimationFrame((function(){r(t),a(!0)}))}}),[o,i,u,a,r])};export{n as useFocusOnMount};
