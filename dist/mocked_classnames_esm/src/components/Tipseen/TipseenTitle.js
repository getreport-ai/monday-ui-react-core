import{jsx as t}from"react/jsx-runtime";import{getTestId as e}from"../../tests/testIds.js";import{ComponentDefaultTestId as s}from"../../tests/constants.js";import r from"../Text/Text.js";var a=function(a){var i=a.text,o=a.id;return i?t(r,Object.assign({type:r.types.TEXT2,weight:r.weights.MEDIUM,role:"heading",color:r.colors.ON_PRIMARY,"aria-level":3,maxLines:2,className:a.className,id:o,"data-testid":a["data-testid"]||e(s.TIPSEEN_TITLE,o)},{children:i})):null};export{a as default};
