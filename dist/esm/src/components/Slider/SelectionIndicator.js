import{slicedToArray as r}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as e}from"react/jsx-runtime";import{useMemo as o}from"react";import{debounce as t}from"lodash-es";import n from"../TextField/TextField.js";import{useSliderSelection as i,useSliderActions as a}from"./SliderContext.js";import{InfixKind as l}from"./SliderConstants.js";import m from"./SelectionIndicator.module.scss.js";var s=function(s){var u=s.kind,c=(void 0===u?l.PREFIX:u)===l.POSTFIX,f=i(),d=function(r,e,o,t){return e?r?[o[1],t[1]]:[o[0],t[0]]:[o,t]}(c,f.ranged,f.value,f.valueText),p=r(d,2)[1],v=a().changeThumbValue,j=o((function(){return t((function(r){var e=function(r){return r.replace(/\D/g,"")}(r);v(e,c?1:0,!0)}),300)}),[v,c]);return e(n,{onChange:j,value:p+"",className:m.selectionIndicator})};export{s as default};
