import{jsx as s}from"react/jsx-runtime";import{forwardRef as t,useRef as r}from"react";import a from"classnames";import e from"../../hooks/useMergeRefs.js";import{withStaticProps as m}from"../../types/withStaticProps.js";import o from"../Avatar/Avatar.js";import{ListItemComponentType as i}from"../ListItem/ListItemConstants.js";import n from"./ListItemAvatar.module.scss.js";var c=t((function(t,m){var i=t.className,p=t.id,f=t.src,l=t.avatarClassName,v=t.component,d=void 0===v?c.components.DIV:v,u=r(null),j=e({refs:[m,u]});return s(d,Object.assign({ref:j,className:a(n.listItemAvatar,i),id:p,"aria-hidden":"true"},{children:s(o,{src:f,type:o.types.IMG,size:o.sizes.SMALL,className:a(n.avatar,l)})}))})),p=m(c,{components:i});export{p as default};