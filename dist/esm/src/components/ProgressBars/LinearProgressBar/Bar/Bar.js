import{defineProperty as r}from"../../../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as a}from"react/jsx-runtime";import{camelCase as e}from"lodash-es";import{getStyle as t}from"../../../../helpers/typesciptCssModulesHelper.js";import{getTestId as s,ComponentDefaultTestId as o}from"../../../../tests/test-ids-utils.js";import i from"classnames";import{useMemo as l}from"react";import{calculatePercentage as m}from"../LinearProgressBarHelpers.js";import n from"./Bar.module.scss.js";var p=function(p){var u=p.value,d=p.type,c=p.barStyle,f=p.animated,b=p.min,v=p.max,j=p.color,y=p.barLabelName,g=p.id,x=p["data-testid"],B=p.className,_=l((function(){return i(n.bar,t(n,e("type__"+d+"--"+c)),B,r({},n.animate,f))}),[d,c,f]),h=l((function(){return null==u?0:m(u,b,v)}),[u,b,v]);return u?a("div",{role:"progressbar","aria-label":y,"aria-valuenow":h,"aria-valuemin":0,"aria-valuemax":100,className:_,style:Object.assign({width:"".concat(h,"%")},j&&{backgroundColor:j}),id:g,"data-testid":x||s(o.BAR,g)}):null};export{p as default};
