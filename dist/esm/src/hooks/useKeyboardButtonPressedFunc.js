import{useCallback as o}from"react";import{keyCodes as t}from"../constants/keyCodes.js";function r(r){return o((function(o){o.key!==t.SPACE&&o.key!==t.ENTER||r(o)}),[r])}export{r as useKeyboardButtonPressedFunc};