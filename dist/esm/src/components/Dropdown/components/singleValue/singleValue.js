import{objectWithoutProperties as e,objectSpread2 as r,extends as a}from"../../../../../_virtual/_rollupPluginBabelHelpers.js";import l from"react";import t from"classnames";import{components as n}from"react-select";import{ChildrenContent as s}from"../ChildrenContent/ChildrenContent.js";import o from"./singleValue.module.scss.js";var i=["Renderer","data","children","readOnly","singleValueWrapperClassName"],d=function(d){var m=d.Renderer,p=d.data,c=d.children,u=d.readOnly,f=d.singleValueWrapperClassName,g=e(d,i),h=r({children:c,readOnly:u,data:p},g),C=m?l.createElement(m,a({},h,p)):l.createElement(s,{data:p,readOnly:u},c);return l.createElement(n.SingleValue,a({},g,{className:t(o.singleValue,"dropdown-wrapper__single-value--reset",f)}),C)};export{d as default};
