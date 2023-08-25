import{defineProperty as e}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsxs as s,Fragment as r,jsx as t}from"react/jsx-runtime";import l from"./ToggleText.js";import i from"classnames";import a from"./MockToggle.module.scss.js";import{getTestId as d}from"../../tests/testIds.js";import{ComponentDefaultTestId as o}from"../../tests/constants.js";var m=function(m){var n,c=m.areLabelsHidden,f=m.checked,p=m.onOverrideText,u=m.className,g=m.selectedClassName,b=m.disabled;return s(r,{children:[c?null:t(l,Object.assign({disabled:b},{children:m.offOverrideText})),t("div",{className:i(a.toggle,u,(n={},e(n,i(a.selected,g),f),e(n,a.notSelected,!f),e(n,a.disabled,b),n)),"aria-hidden":"true","data-testid":d(o.TOGGLE)}),c?null:t(l,Object.assign({disabled:b},{children:p}))]})};export{m as MockToggle};
