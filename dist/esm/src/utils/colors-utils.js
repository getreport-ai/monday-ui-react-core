import{ColorStyle as o,contentColors as t}from"./colors-vars-map.js";var c=Object.freeze({modes:o,contentColors:t,getMondayColorAsStyle:function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.REGULAR,r=2>=arguments.length||void 0===arguments[2]||arguments[2];return"".concat(r?"var(":"","--color-").concat(t).concat(c!==o.REGULAR?"-".concat(c):"").concat(r?")":"")}});export{c as default};