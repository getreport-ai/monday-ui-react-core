import{slicedToArray as e}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{useState as o,useCallback as i,useEffect as n}from"react";var r;function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.isChecked,a=r.onChange,l=r.isDisabled,c=o(null!=t?t:!!r.defaultChecked),u=e(c,2),d=u[0],s=u[1],f=i((function(){if(!l){var e=!d;void 0===t&&s(e),a&&a(e)}}),[t,l,a,d]);return n((function(){void 0!==t&&s(t)}),[t]),{isChecked:d,onChange:f}}!function(e){e.CHECKBOX="checkbox",e.BUTTON="button"}(r||(r={})),t.switchRole=r;export{t as default};