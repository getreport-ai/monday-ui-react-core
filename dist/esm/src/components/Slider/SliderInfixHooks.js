import{typeof as i}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{__rest as t}from"../../../_virtual/_tslib.js";import{jsx as o,Fragment as r}from"react/jsx-runtime";import e from"../Icon/Icon.js";import{InfixKind as n}from"./SliderConstants.js";import{useSliderInfix as c,useSliderSelection as l}from"./SliderContext.js";import s from"./SelectionIndicator.js";var a={clickable:!1,iconSize:18,ignoreFocusStyle:!0};function f(f){var m=f===n.POSTFIX,p=c(),u=p.prefix,d=p.postfix,j=p.indicateSelection,v=p.selectionIndicatorWidth,x=l(),b=x.value,g=x.valueText,S=m?d:u;if(j&&(m||x.ranged))return[!0,[],o(s,{kind:f},f),{width:v}];if("object"===i(S)&&S.icon){var I=S.icon,h=t(S,["icon"]),y=Object.assign(Object.assign({},a),h);return[!0,[],o(e,Object.assign({icon:I},y),"infix-icon"),{}]}return"function"==typeof S?[!0,[],S(b,g),{}]:"string"==typeof S?[!0,["txt"],o(r,{children:S}),{}]:void 0===S?[!1,[],null,{}]:[!0,[],o(r,{children:S}),{}]}export{f as useSliderInfixComponent};