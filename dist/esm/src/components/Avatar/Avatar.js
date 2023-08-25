import{defineProperty as e}from"../../../_virtual/_rollupPluginBabelHelpers.js";import{jsx as t,jsxs as s}from"react/jsx-runtime";import{isNil as i,camelCase as r}from"lodash-es";import{getStyle as o}from"../../helpers/typesciptCssModulesHelper.js";import{getTestId as a,ComponentDefaultTestId as l}from"../../tests/test-ids-utils.js";import d from"classnames";import{useMemo as c,useCallback as n}from"react";import{backwardCompatibilityForProperties as p}from"../../helpers/backwardCompatibilityForProperties.js";import{ElementAllowedColor as g,getElementColor as m}from"../../utils/colors-vars-map.js";import{AvatarType as b,AvatarSize as h}from"./AvatarConstants.js";import{AvatarBadge as u}from"./AvatarBadge.js";import{AvatarContent as f}from"./AvatarContent.js";import v from"../Tooltip/Tooltip.js";import j from"../Clickable/ClickableWrapper.js";import{withStaticProps as C}from"../../types/withStaticProps.js";import O from"./Avatar.module.scss.js";var T=C((function g(C){var T,k=C.id,B=C.type,N=void 0===B?b.TEXT:B,w=C.className,L=C.avatarContentWrapperClassName,P=C.textClassName,S=void 0===P?"":P,x=C.size,y=void 0===x?h.LARGE:x,A=C.src,E=C.icon,z=C.text,R=C.tooltipProps,I=C.ariaLabel,U=C.withoutTooltip,_=void 0!==U&&U,H=C.role,q=C.backgroundColor,M=void 0===q?g.colors.CHILI_BLUE:q,W=C.disabled,D=C.isDisabled,F=C.tabIndex,V=void 0===F?0:F,G=C.ariaHidden,X=void 0!==G&&G,J=C.topLeftBadgeProps,K=C.topRightBadgeProps,Q=C.bottomLeftBadgeProps,Y=C.bottomRightBadgeProps,Z=C.withoutBorder,$=void 0!==Z&&Z,ee=C.customSize,te=void 0===ee?null:ee,se=C.customBackgroundColor,ie=void 0===se?null:se,re=C.onClick,oe=C["data-testid"],ae=p([C.square,C.isSquare]),le=p([W,D],!1),de=c((function(){return ie?{backgroundColor:ie}:A?{}:{backgroundColor:m(M)}}),[A,M,ie]),ce=c((function(){return te?{height:te,width:te}:{}}),[te]),ne=c((function(){if(!_)return R?Object.assign({content:I},R):{content:I}}),[I,R,_]),pe=c((function(){var e=[];return i(J)||e.push(t("div",Object.assign({className:d(O.badge,O.badgeTopLeft)},{children:t(u,Object.assign({size:y},J))}),"top-left-badge")),i(K)||e.push(t("div",Object.assign({className:d(O.badge,O.badgeTopRight)},{children:t(u,Object.assign({size:y},K))}),"top-right-badge")),i(Q)||e.push(t("div",Object.assign({className:d(O.badge,O.badgeBottomLeft)},{children:t(u,Object.assign({size:y},Q))}),"bottom-left-badge")),i(Y)||e.push(t("div",Object.assign({className:d(O.badge,O.badgeBottomRight)},{children:t(u,Object.assign({size:y},Y))}),"bottom-right-bade")),e.length>0?t("div",Object.assign({className:d(O.badges)},{children:e})):null}),[y,J,K,Q,Y]),ge=n((function(e){e.preventDefault(),re&&re(e,k)}),[re,k]);return t("div",Object.assign({id:k,"data-testid":oe||a(l.AVATAR,k),className:d(O.avatar,O[y],w),style:ce},{children:t(j,Object.assign({isClickable:!!re,clickableProps:{onClick:ge,tabIndex:"-1",className:O.clickableWrapper}},{children:s(v,Object.assign({showTrigger:[v.hideShowTriggers.FOCUS,v.hideShowTriggers.MOUSE_ENTER],hideTrigger:[v.hideShowTriggers.BLUR,v.hideShowTriggers.MOUSE_LEAVE]},ne,{children:[t("div",Object.assign({className:d(O.circle,o(O,r("circle--"+N)),(T={},e(T,O.disabled,le),e(T,O.square,ae),e(T,O.withoutBorder,$),T),L),"aria-hidden":X,tabIndex:V,style:Object.assign({},de)},{children:t(f,{type:N,size:y,src:A,icon:E,text:z,ariaLabel:I,role:H,textClassName:S})})),pe]}))}))}))}),{types:b,sizes:h,colors:g,backgroundColors:g});export{T as default};