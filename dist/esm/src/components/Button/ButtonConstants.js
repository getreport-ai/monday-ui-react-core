import{SIZES as r}from"../../constants/sizes.js";var n,t;!function(r){r.PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary"}(n||(n={})),function(r){r.PRIMARY="primary",r.POSITIVE="positive",r.NEGATIVE="negative",r.ON_PRIMARY_COLOR="on-primary-color",r.ON_INVERTED_BACKGROUND="on-inverted-background",r.BRAND="brand"}(t||(t={}));var i,o={sm:r.SMALL,md:r.MEDIUM,lg:r.LARGE},R=function(r){return r&&r in o?o[r]:r},e=20;!function(r){r.BUTTON="button",r.SUBMIT="submit",r.RESET="reset"}(i||(i={}));export{e as BUTTON_ICON_SIZE,t as ButtonColor,i as ButtonInputType,n as ButtonType,o as OLD_BUTTON_SIZES,R as getActualSize};
