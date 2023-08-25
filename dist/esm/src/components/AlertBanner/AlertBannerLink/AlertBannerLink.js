import{defineProperty as r}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import{__rest as t}from"../../../../_virtual/_tslib.js";import{jsx as e}from"react/jsx-runtime";import i from"classnames";import{getTestId as a,ComponentDefaultTestId as n}from"../../../tests/testIds.js";import{useContext as s}from"react";import o from"../../Link/Link.js";import m from"./AlertBannerLink.module.scss.js";import{TypographyColor as l}from"../../Typography/TypographyConstants.js";import{AlertBannerContext as p}from"../AlertBannerContext.js";var d=function(d){var f,j=d.marginLeft,L=void 0!==j&&j,c=d.id,g=d["data-testid"],u=t(d,["marginLeft","id","data-testid"]),b=s(p).textColor,v=i(r({},m.marginLeft,L));return e("div",Object.assign({className:v,"data-testid":g||a(n.ALERT_BANNER_LINK,c),id:c},{children:e(o,Object.assign({},u,{textClassName:i(m.bannerLink,(f={},r(f,m.bannerLinkTextColorOnPrimary,b===l.ON_PRIMARY),r(f,m.bannerLinkTextColorOnInverted,b===l.ON_INVERTED),f))}))}))};Object.assign(d,{isAlertBannerItem:!0});var f=d;export{f as default};