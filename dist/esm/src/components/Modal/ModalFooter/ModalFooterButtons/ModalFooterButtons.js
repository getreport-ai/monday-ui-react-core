import{jsx as t,jsxs as s}from"react/jsx-runtime";import{forwardRef as r}from"react";import{getTestId as o}from"../../../../tests/testIds.js";import{ComponentDefaultTestId as i}from"../../../../tests/constants.js";import e from"../../../Flex/Flex.js";import n from"../../../Button/Button.js";import a from"../ModalFooter.js";var c=r((function(r,c){var m=r.primaryButtonText,d=r.secondaryButtonText,l=r.onPrimaryButtonClick,j=r.onSecondaryButtonClick,u=r.id;return t(a,Object.assign({id:u,className:r.className,"data-testid":r["data-testid"]||o(i.MODAL_FOOTER_BUTTONS,u)},{children:s(e,Object.assign({justify:e.justify.END,gap:e.gaps.SMALL},{children:[t(n,Object.assign({onClick:j,kind:n.kinds.TERTIARY},{children:d})),t(n,Object.assign({onClick:l},{children:m}))]}))}))}));export{c as default};