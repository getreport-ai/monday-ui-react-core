import{useCallback as e}from"react";import{isMenuChildSelectable as r}from"../utils/utils.js";var t=function(t){var n=t.children;return{getNextSelectableIndex:e((function(e){for(var t,l=1;n.length>=l;l++)if(r(n[t=(e+l)%n.length]))return t;return null}),[n]),getPreviousSelectableIndex:e((function(e){for(var t,l=n.length-1;l>0;l--)if(r(n[t=(e+l)%n.length]))return t;return null}),[n])}};export{t as useAdjacentSelectableMenuIndex};