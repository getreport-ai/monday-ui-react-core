import{convertToArray as t}from"../utils/function-utils.js";var o=0,r=20,n="en-US";var i=Object.freeze({MIN_PRECISION:o,MAX_PRECISION:r,DEFAULT_LOCAL:n});function e(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.local,c=void 0===a?n:a,u=e.isCompact,l=void 0===u||u,m=e.precision,s=void 0===m?2:m;if(null!=i){var f=function(o){var r;try{r=!!Intl.NumberFormat.supportedLocalesOf(t(o),{localeMatcher:"lookup"}).length}catch(t){r=!1}return r}(c),v=function(t){return o>t?o:t>r?r:t}(s);return new Intl.NumberFormat(f?c:n,Object.assign(Object.assign({},l&&{notation:"compact"}),{maximumFractionDigits:v})).format(i)}}export{e as formatNumber,i as formatNumberConsts};