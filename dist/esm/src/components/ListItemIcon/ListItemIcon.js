import{jsx as o}from"react/jsx-runtime";import s from"classnames";import{forwardRef as t,useRef as r}from"react";import e from"../../hooks/useMergeRefs.js";import i from"../Icon/Icon.js";import{ListItemIconMargin as m,LIST_ITEM_ICON_SIZE as n}from"./ListItemIconConstants.js";import{ListItemComponentType as c}from"../ListItem/ListItemConstants.js";import{withStaticProps as a}from"../../types/withStaticProps.js";import{getStyle as p}from"../../helpers/typesciptCssModulesHelper.js";import f from"./ListItemIcon.module.scss.js";var l=t((function(t,m){var c=t.className,a=t.id,I=t.icon,d=t.margin,u=void 0===d?l.margin.START:d,j=t.component,g=void 0===j?l.components.DIV:j,h=r(null),v=e({refs:[m,h]});return o(g,Object.assign({ref:v,className:s(f.listItemIcon,p(f,u),c),id:a,"aria-hidden":"true"},{children:o(i,{icon:I,clickable:!1,ignoreFocusStyle:!0,iconSize:n})}))})),I=a(l,{margin:m,components:c});export{I as default};
