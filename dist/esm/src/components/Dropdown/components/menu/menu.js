import{objectWithoutProperties as e,objectSpread2 as r,extends as o,defineProperty as n}from"../../../../../_virtual/_rollupPluginBabelHelpers.js";import s from"classnames";import l from"react";import{components as t}from"react-select";import a from"./menu.module.scss.js";var i=["children","Renderer","selectProps","dropdownMenuWrapperClassName"],p=function(p){var d,m,u=p.children,c=p.Renderer,f=p.selectProps,v=p.dropdownMenuWrapperClassName,P=e(p,i),w=r({children:u},P),W=(null==f||null===(d=f.selectProps)||void 0===d?void 0:d.insideOverflowContainer)||(null==f||null===(m=f.selectProps)||void 0===m?void 0:m.insideOverflowWithTransformContainer);return l.createElement(t.Menu,o({},P,{className:s(a.dropdownMenuWrapper,n({},a.dropdownMenuWrapperFixedPosition,W),v)}),c&&c(w),!c&&u)};export{p as default};