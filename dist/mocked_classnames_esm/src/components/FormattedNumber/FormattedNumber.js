import{jsx as r,jsxs as e}from"react/jsx-runtime";import a from"classnames";import{forwardRef as s,useMemo as t}from"react";import{formatNumber as i,formatNumberConsts as o}from"../../helpers/textManipulations.js";import{validateValue as l}from"./FormattedNumberHelpers.js";import{getTestId as c,ComponentDefaultTestId as n}from"../../tests/testIds.js";import m from"./FormattedNumber.module.scss.js";var d=s((function(s,o){var p=s.value,u=s.className,f=s.local,N=void 0===f?d.localFallBack:f,j=s.prefix,v=s.suffix,b=s.emptyPlaceHolder,x=void 0===b?"N/A":b,h=s.decimalPrecision,F=void 0===h?2:h,O=s.compact,g=void 0===O||O,A=s.rtl,B=s.id,E=s["data-testid"],L=t((function(){return v?r("span",Object.assign({className:a(m.suffix)},{children:v})):null}),[v]),M=t((function(){return j?r("span",Object.assign({className:a(m.prefix)},{children:j})):null}),[j]),T=t((function(){return i(Number(p),{local:N,precision:F,isCompact:g})}),[p,F,N,g]);return l(p)?r("span",{children:x}):e("div",Object.assign({ref:o,className:u,id:B,"data-testid":E||c(n.FORMATTED_NUMBER,B)},{children:[A?L:M,r("span",{children:T}),A?M:L]}))}));Object.assign(d,{formatNumber:i,localFallBack:o.DEFAULT_LOCAL});var p=d;export{p as default};