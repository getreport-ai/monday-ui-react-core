import{jsx as e}from"react/jsx-runtime";import{camelCase as s}from"lodash-es";import{getStyle as t}from"../../helpers/typesciptCssModulesHelper.js";import o from"classnames";import{forwardRef as r,useRef as i}from"react";import a from"../../hooks/useMergeRefs.js";import{DialogType as d,DialogSize as l}from"./DialogContentContainerConstants.js";import{withStaticProps as m}from"../../types/withStaticProps.js";import n from"./DialogContentContainer.module.scss.js";import{getTestId as p,ComponentDefaultTestId as f}from"../../tests/testIds.js";var c=m(r((function(r,m){var c=r.className,y=void 0===c?"":c,C=r.ariaLabelledby,b=void 0===C?"":C,v=r.ariaDescribedby,j=void 0===v?"":v,u=r.type,g=void 0===u?d.POPOVER:u,h=r.size,N=void 0===h?l.MEDIUM:h,O=r.children,D=r.style,E=r["data-testid"],I=void 0===E?p(f.DIALOG_CONTENT_CONTAINER,r.id):E,M=i(null),z=a({refs:[m,M]});return e("div",Object.assign({role:"dialog","data-testid":I,"aria-labelledby":b,"aria-describedby":j,ref:z,style:D,className:o(n.dialogContentContainer,y,t(n,s("type--"+g)),t(n,s("size--"+N)))},{children:O}))})),{types:d,sizes:l});export{c as default};
