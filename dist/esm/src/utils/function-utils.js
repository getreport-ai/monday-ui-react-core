import{isArray as r,isFunction as n}from"lodash-es";function t(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(o){for(var e=0;r.length>e;e++){var i=r[e];try{var u=void 0;if(n(i)?u=i(o):i&&(i.current=o),!1===u&&t)return}catch(r){return void console.error(r)}}}}function o(r){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(t){for(var o=0;r.length>o;o++){var e=r[o];try{if(!1===(e&&e(t))&&n)return}catch(r){return void console.error(r)}}}}function e(n){return r(n)?n:[n]}function i(){}export{i as NOOP,o as chainFunctions,t as chainRefFunctions,e as convertToArray};