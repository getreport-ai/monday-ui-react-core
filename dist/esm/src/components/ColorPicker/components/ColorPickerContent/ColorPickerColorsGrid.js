import{jsx as o}from"react/jsx-runtime";import r,{useCallback as e}from"react";import t from"../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation.js";import n from"../ColorPickerItemComponent/ColorPickerItemComponent.js";import i from"./ColorPickerColorsGrid.module.scss.js";var c=function(o,r){return r&&r[o]?r[o]:function(o){return o.replace(/-|_/g," ").replace(/(?:^|\s)\S/g,(function(o){return o.toUpperCase()}))}(o)},l=r.forwardRef((function(r,l){var d=r.onColorClicked,a=r.colorsToRender,u=r.numberOfColorsInLine,s=r.focusOnMount,m=r.value,f=r.colorStyle,C=r.ColorIndicatorIcon,I=r.shouldRenderIndicatorWithoutBackground,p=r.SelectedIndicatorIcon,S=r.colorSize,h=r.tooltipContentByColor,g=r.colorShape,k=r.showColorNameTooltip,v=r.id,y=r["data-testid"],b=e((function(o){return a[o]}),[a]),j=t({focusOnMount:s,ref:l,onItemClicked:d,itemsCount:a.length,numberOfItemsInLine:u,getItemByIndex:b}),x=j.activeIndex,O=j.onSelectionAction;return o("ul",Object.assign({className:i.colorsGrid,ref:l,tabIndex:-1,id:v,"data-testid":y},{children:a.map((function(r,e){return o(n,{color:r,onColorClicked:function(){return O(e)},shouldRenderIndicatorWithoutBackground:C&&I,colorStyle:f,ColorIndicatorIcon:C,SelectedIndicatorIcon:p,isSelected:Array.isArray(m)?m.includes(r):m===r,isActive:e===x,colorSize:S,tooltipContent:k?c(r,h):void 0,colorShape:g},r)}))}))}));export{l as ColorPickerColorsGrid};