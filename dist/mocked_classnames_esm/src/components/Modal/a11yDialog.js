import{slicedToArray as r}from"../../../_virtual/_rollupPluginBabelHelpers.js";import a from"react";import e from"a11y-dialog";var l=function(l){var i,t,o,n=l.id,d=l.alertDialog,u=(i=a.useState(null),t=r(i,2),o=t[1],[t[0],a.useCallback((function(r){null!==r&&o(new e(r))}),[])]),c=r(u,2),f=c[0],m=c[1],s=d?"alertdialog":"dialog",g=n+"-title";return a.useEffect((function(){return function(){f&&f.destroy()}}),[f]),[f,{container:{id:n,ref:m,role:s,tabIndex:-1,"aria-modal":!0,"aria-hidden":!0,"aria-labelledby":g},dialog:{role:"document"},title:{id:g}}]};export{l as useA11yDialog};