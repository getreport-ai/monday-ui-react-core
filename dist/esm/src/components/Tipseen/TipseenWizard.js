import{__rest as t}from"../../../_virtual/_tslib.js";import{jsx as s}from"react/jsx-runtime";import{useMemo as i}from"react";import e from"classnames";import r from"../Steps/Steps.js";import a from"../Button/Button.js";import n from"./TipseenBasicContent.js";import o from"./TipseenWizard.module.scss.js";var m=function(m){var l=m.id,p=m.title,c=m.titleClassName,d=m.className,u=t(m,["id","title","titleClassName","className"]),f=i((function(){return{kind:a.kinds.PRIMARY,size:a.sizes.SMALL}}),[]),z=i((function(){return{size:a.sizes.SMALL}}),[]);return s(n,Object.assign({title:p,className:e(o.tipseenWizard,d),titleClassName:c,id:l||"wizard"},{children:s(r,Object.assign({className:e(o.tipseenWizardWizard),isOnPrimary:!0,isContentOnTop:!0,areButtonsIconsHidden:!0,backButtonProps:z,nextButtonProps:f},u))}))};export{m as default};