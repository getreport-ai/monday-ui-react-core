/*! For license information please see BreadcrumbsBar.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{var t={94184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)o.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},58102:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const o={breadcrumbsBar:"components-BreadcrumbsBar-BreadcrumbsBar-module__breadcrumbsBar--YrByD",separatorIcon:"components-BreadcrumbsBar-BreadcrumbsBar-module__separatorIcon--Taas4"}},91510:(e,t,r)=>{"use strict";r.r(t)},75251:(e,t,r)=>{"use strict";var o=r(8156),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,a={},c=null,u=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:u,props:a,_owner:i.current}}t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{"use strict";e.exports=r(75251)},34727:function(e,t,r){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(85893),a=r(333),i=o(r(94184)),s=o(r(8156)),l=o(r(30300)),c=r(57636),u=r(96678),d=o(r(58102));t.default=(0,u.withStaticProps)((({className:e,children:t,type:r=c.BreadcrumbsBarType.INDICATION,id:o,"data-testid":u})=>(0,n.jsx)("nav",Object.assign({"aria-label":"Breadcrumb",className:(0,i.default)(d.default.breadcrumbsBar,e),id:o,"data-testid":u||(0,a.getTestId)(a.ComponentDefaultTestId.BREADCRUMBS_BAR,o)},{children:(0,n.jsx)("ol",{children:t&&s.default.Children.map(t,((e,t)=>s.default.isValidElement(e)?[t>0&&(0,n.jsx)(l.default,{className:d.default.separatorIcon,size:"14","aria-hidden":"true"}),s.default.cloneElement(e,Object.assign(Object.assign({},null==e?void 0:e.props),{isClickable:r!==c.BreadcrumbsBarType.INDICATION}))]:null))})}))),{types:c.BreadcrumbsBarType})},57636:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbsBarType=void 0,function(e){e.NAVIGATION="navigation",e.INDICATION="indication"}(t.BreadcrumbsBarType||(t.BreadcrumbsBarType={}))},30300:function(e,t,r){"use strict";var o=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0});const n=r(85893),a=e=>{var{size:t}=e,r=o(e,["size"]);return(0,n.jsx)("svg",Object.assign({viewBox:"0 0 20 20",fill:"currentColor",width:t||"20",height:t||"20"},r,{children:(0,n.jsx)("path",{d:"M13.5303 9.46967L13 10L13.5303 10.5303C13.8232 10.2374 13.8232 9.76256 13.5303 9.46967ZM11.9393 10L5.46967 16.4697C5.17678 16.7626 5.17678 17.2374 5.46967 17.5303C5.76256 17.8232 6.23744 17.8232 6.53033 17.5303L13.5303 10.5303L13 10L13.5303 9.46967L6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967C5.17678 2.76256 5.17678 3.23744 5.46967 3.53033L11.9393 10Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};a.displayName="NavigationChevronRight",t.default=a},41921:(e,t,r)=>{"use strict";r(91510)},77347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationCommand=t.ComponentDefaultTestId=void 0,function(e){e.INDICATOR="indicator",e.BADGE="badge",e.TITLE="title",e.TEXT="text",e.COMBOBOX="combobox",e.COMBOBOX_CATEGORY="combobox-category",e.COMBOBOX_OPTION="combobox-option",e.COLOR_PICKER="color-picker",e.CHECKBOX="checkbox",e.CHECKBOX_LABEL="checkbox-label",e.CHECKBOX_CHECKBOX="checkbox-checkbox",e.DROPDOWN="dropdown",e.DROPDOWN_OPTION_CONTENT="dropdown-option-content",e.BUTTON="button",e.BUTTON_GROUP="button-group",e.CLICKABLE="clickable",e.VIRTUALIZED_LIST="virtualized-list",e.VIRTUALIZED_GRID="virtualized-grid",e.TEXT_FIELD="text-field",e.TEXT_FIELD_SECONDARY_BUTTON="text-field-secondary-button",e.SEARCH="search",e.CLEAN_SEARCH_BUTTON="clean-search-button",e.COLOR_PICKER_ITEM="color-picker-item",e.ICON_BUTTON="icon-button",e.SVG_ICON="svg-icon",e.CHIP="chip",e.RADIO_BUTTON="radio-button",e.RADIO_BUTTON_LABEL="radio-button-label",e.RADIO_BUTTON_CONTROL="radio-button-control",e.TAB="tab",e.TAB_PANEL="tab-panel",e.TAB_PANELS="tab-panels",e.TAB_LIST="tab-list",e.TABS_CONTEXT="tabs-context",e.ALERT_BANNER="alert-banner",e.ALERT_BANNER_BUTTON="alert-banner-button",e.ALERT_BANNER_LINK="alert-banner-link",e.ALERT_BANNER_TEXT="alert-banner-text",e.ATTENTION_BOX="attention-box",e.AVATAR="avatar",e.AVATAR_BADGE="avatar-badge",e.AVATAR_CONTENT="avatar-content",e.BREADCRUMB_ITEM="breadcrumb-item",e.BREADCRUMBS_BAR="breadcrumbs-bar",e.LINEAR_PROGRESS_BAR="linear-progress-bar",e.BAR="bar",e.BAR_PRIMARY="bar-primary",e.BAR_SECONDARY="bar-secondary",e.COLOR_PICKER_ITEM_COMPONENT="color-picker-item-component",e.COUNTER="counter",e.MENU="menu",e.OPTION="option",e.EXPAND_COLLAPSE="expand-collapse",e.EDITABLE_INPUT="editable-input",e.EDITABLE_HEADING="editable-heading",e.HEADING="heading",e.LABEL="label",e.LINK="link",e.MENU_DIVIDER="menu-divider",e.MENU_ITEM="menu-item",e.MENU_ITEM_BUTTON="menu-item-button",e.MENU_TITLE="menu-title",e.MENU_TITLE_CAPTION="menu-title-caption",e.MENU_GRID_ITEM="menu-grid-item",e.MENU_BUTTON="menu-button",e.STEP_INDICATOR="step-indicator",e.STEPS="steps",e.STEPS_FORWARD_COMMAND="steps-forward-command",e.STEPS_BACKWARD_COMMAND="steps-backward-command",e.MULTI_STEP_INDICATOR="multi-step-indicator",e.SKELETON="skeleton",e.SPLIT_BUTTON="split-button",e.SPLIT_BUTTON_PRIMARY_BUTTON="split-button-primary-button",e.SPLIT_BUTTON_SECONDARY_BUTTON="split-button-secondary-button",e.TEXT_WITH_HIGHLIGHT="text-with-highlight",e.TOAST="toast",e.TOAST_CONTENT="toast-content",e.TOAST_LINK="toast-link",e.TOAST_BUTTON="toast-button",e.TOGGLE="toggle",e.TIPSEEN="tipseen",e.TIPSEEN_CONTENT="tipseen-content",e.TIPSEEN_CONTENT_SUBMIT="tipseen-content-submit",e.TIPSEEN_CONTENT_DISMISS="tipseen-content-dismiss",e.TIPSEEN_TITLE="tipseen-title",e.DIVIDER="divider",e.DATEPICKER="date-picker",e.DATEPICKER_HEADER="date-picker-header",e.DATEPICKER_YEAR_SELECTION="date-picker-year-selection",e.LOADER="loader",e.ICON="icon",e.RESPONSIVE_LIST="responsive-list",e.LIST="list",e.MODAL="monday-dialog-container",e.MODAL_OVERLAY="monday-modal-overlay",e.MODAL_CONTENT="modal-content",e.MODAL_HEADER="modal-header",e.MODAL_FOOTER_BUTTONS="modal-footer-buttons",e.FORMATTED_NUMBER="formatted-number",e.HIDDEN_TEXT="hidden-text",e.DIALOG_CONTENT_CONTAINER="dialog-content-container",e.FLEX="flex",e.TOOLTIP="tooltip",e.DIALOG="dialog"}(t.ComponentDefaultTestId||(t.ComponentDefaultTestId={})),function(e){e.RIGHT_ARROW="{arrowright}",e.LEFT_ARROW="{arrowleft}",e.UP_ARROW="{arrowup}",e.DOWN_ARROW="{arrowdown}",e.TAB="#TAB#",e.ENTER="{enter}",e.PAGE_UP="{pageup}",e.PAGE_DOWN="{pagedown}"}(t.NavigationCommand||(t.NavigationCommand={}))},333:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTestId=t.ComponentDefaultTestId=void 0;const o=r(77347);t.ComponentDefaultTestId=o.ComponentDefaultTestId;t.getTestId=(e,t)=>{const r=(null!=t?t:"").toString();return`${e}${r&&`_${r}`}`}},645:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},86537:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},23672:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},64459:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},44457:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},46809:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},96678:function(e,t,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(46809),t),n(r(64459),t),n(r(92983),t),n(r(645),t),n(r(23672),t),n(r(86537),t),n(r(44457),t)},92983:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withStaticProps=void 0;t.withStaticProps=(e,t)=>Object.assign(e,t)},8156:t=>{"use strict";t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}return o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(41921),o(34727)})()));
//# sourceMappingURL=BreadcrumbsBar.js.map