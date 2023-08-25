/*! For license information please see Divider.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{var t={94184:(e,t)=>{var o;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var a=i.apply(null,o);a&&e.push(a)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var s in o)r.call(o,s)&&o[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},51906:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});const r={divider:"components-Divider-Divider-module__divider--ifKDT",withoutMargin:"components-Divider-Divider-module__withoutMargin--i3y5O",horizontal:"components-Divider-Divider-module__horizontal--ZiLdy",vertical:"components-Divider-Divider-module__vertical--BULwz"}},91510:(e,t,o)=>{"use strict";o.r(t)},75251:(e,t,o)=>{"use strict";var r=o(8156),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;i=n("react.element"),t.Fragment=n("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,n={},d=null,c=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!T.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:c,props:n,_owner:a.current}}t.jsx=d,t.jsxs=d},85893:(e,t,o)=>{"use strict";e.exports=o(75251)},15034:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(85893),n=o(333),a=r(o(94184)),s=o(86762),T=o(66889),d=o(95777),c=o(96678),u=r(o(51906));t.default=(0,c.withStaticProps)((({classname:e,className:t,withoutMargin:o=!1,direction:r=T.DirectionType.HORIZONTAL,id:c,"data-testid":l})=>{const _=(0,s.backwardCompatibilityForProperties)([t,e]);return(0,i.jsx)("div",{id:c,"data-testid":l||(0,n.getTestId)(n.ComponentDefaultTestId.DIVIDER,c),className:(0,a.default)(u.default.divider,_,(0,d.getStyle)(u.default,r),{[u.default.withoutMargin]:o})})}),{directions:T.DirectionType})},66889:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DirectionType=void 0,function(e){e.VERTICAL="vertical",e.HORIZONTAL="horizontal"}(t.DirectionType||(t.DirectionType={}))},86762:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.backwardCompatibilityForProperties=void 0,t.backwardCompatibilityForProperties=function(e=[],t){const o=e.find((e=>void 0!==e));return void 0===o?t:o}},95777:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStyle=void 0,t.getStyle=function(e,t){return t&&e[t]?e[t]:""}},41921:(e,t,o)=>{"use strict";o(91510)},77347:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationCommand=t.ComponentDefaultTestId=void 0,function(e){e.INDICATOR="indicator",e.BADGE="badge",e.TITLE="title",e.TEXT="text",e.COMBOBOX="combobox",e.COMBOBOX_CATEGORY="combobox-category",e.COMBOBOX_OPTION="combobox-option",e.COLOR_PICKER="color-picker",e.CHECKBOX="checkbox",e.CHECKBOX_LABEL="checkbox-label",e.CHECKBOX_CHECKBOX="checkbox-checkbox",e.DROPDOWN="dropdown",e.DROPDOWN_OPTION_CONTENT="dropdown-option-content",e.BUTTON="button",e.BUTTON_GROUP="button-group",e.CLICKABLE="clickable",e.VIRTUALIZED_LIST="virtualized-list",e.VIRTUALIZED_GRID="virtualized-grid",e.TEXT_FIELD="text-field",e.TEXT_FIELD_SECONDARY_BUTTON="text-field-secondary-button",e.SEARCH="search",e.CLEAN_SEARCH_BUTTON="clean-search-button",e.COLOR_PICKER_ITEM="color-picker-item",e.ICON_BUTTON="icon-button",e.SVG_ICON="svg-icon",e.CHIP="chip",e.RADIO_BUTTON="radio-button",e.RADIO_BUTTON_LABEL="radio-button-label",e.RADIO_BUTTON_CONTROL="radio-button-control",e.TAB="tab",e.TAB_PANEL="tab-panel",e.TAB_PANELS="tab-panels",e.TAB_LIST="tab-list",e.TABS_CONTEXT="tabs-context",e.ALERT_BANNER="alert-banner",e.ALERT_BANNER_BUTTON="alert-banner-button",e.ALERT_BANNER_LINK="alert-banner-link",e.ALERT_BANNER_TEXT="alert-banner-text",e.ATTENTION_BOX="attention-box",e.AVATAR="avatar",e.AVATAR_BADGE="avatar-badge",e.AVATAR_CONTENT="avatar-content",e.BREADCRUMB_ITEM="breadcrumb-item",e.BREADCRUMBS_BAR="breadcrumbs-bar",e.LINEAR_PROGRESS_BAR="linear-progress-bar",e.BAR="bar",e.BAR_PRIMARY="bar-primary",e.BAR_SECONDARY="bar-secondary",e.COLOR_PICKER_ITEM_COMPONENT="color-picker-item-component",e.COUNTER="counter",e.MENU="menu",e.OPTION="option",e.EXPAND_COLLAPSE="expand-collapse",e.EDITABLE_INPUT="editable-input",e.EDITABLE_HEADING="editable-heading",e.HEADING="heading",e.LABEL="label",e.LINK="link",e.MENU_DIVIDER="menu-divider",e.MENU_ITEM="menu-item",e.MENU_ITEM_BUTTON="menu-item-button",e.MENU_TITLE="menu-title",e.MENU_TITLE_CAPTION="menu-title-caption",e.MENU_GRID_ITEM="menu-grid-item",e.MENU_BUTTON="menu-button",e.STEP_INDICATOR="step-indicator",e.STEPS="steps",e.STEPS_FORWARD_COMMAND="steps-forward-command",e.STEPS_BACKWARD_COMMAND="steps-backward-command",e.MULTI_STEP_INDICATOR="multi-step-indicator",e.SKELETON="skeleton",e.SPLIT_BUTTON="split-button",e.SPLIT_BUTTON_PRIMARY_BUTTON="split-button-primary-button",e.SPLIT_BUTTON_SECONDARY_BUTTON="split-button-secondary-button",e.TEXT_WITH_HIGHLIGHT="text-with-highlight",e.TOAST="toast",e.TOAST_CONTENT="toast-content",e.TOAST_LINK="toast-link",e.TOAST_BUTTON="toast-button",e.TOGGLE="toggle",e.TIPSEEN="tipseen",e.TIPSEEN_CONTENT="tipseen-content",e.TIPSEEN_CONTENT_SUBMIT="tipseen-content-submit",e.TIPSEEN_CONTENT_DISMISS="tipseen-content-dismiss",e.TIPSEEN_TITLE="tipseen-title",e.DIVIDER="divider",e.DATEPICKER="date-picker",e.DATEPICKER_HEADER="date-picker-header",e.DATEPICKER_YEAR_SELECTION="date-picker-year-selection",e.LOADER="loader",e.ICON="icon",e.RESPONSIVE_LIST="responsive-list",e.LIST="list",e.MODAL="monday-dialog-container",e.MODAL_OVERLAY="monday-modal-overlay",e.MODAL_CONTENT="modal-content",e.MODAL_HEADER="modal-header",e.MODAL_FOOTER_BUTTONS="modal-footer-buttons",e.FORMATTED_NUMBER="formatted-number",e.HIDDEN_TEXT="hidden-text",e.DIALOG_CONTENT_CONTAINER="dialog-content-container",e.FLEX="flex",e.TOOLTIP="tooltip",e.DIALOG="dialog"}(t.ComponentDefaultTestId||(t.ComponentDefaultTestId={})),function(e){e.RIGHT_ARROW="{arrowright}",e.LEFT_ARROW="{arrowleft}",e.UP_ARROW="{arrowup}",e.DOWN_ARROW="{arrowdown}",e.TAB="#TAB#",e.ENTER="{enter}",e.PAGE_UP="{pageup}",e.PAGE_DOWN="{pagedown}"}(t.NavigationCommand||(t.NavigationCommand={}))},333:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTestId=t.ComponentDefaultTestId=void 0;const r=o(77347);t.ComponentDefaultTestId=r.ComponentDefaultTestId;t.getTestId=(e,t)=>{const o=(null!=t?t:"").toString();return`${e}${o&&`_${o}`}`}},645:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},86537:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},23672:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},64459:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},44457:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},46809:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},96678:function(e,t,o){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o);var i=Object.getOwnPropertyDescriptor(t,o);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,r,i)}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),i=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),i(o(46809),t),i(o(64459),t),i(o(92983),t),i(o(645),t),i(o(23672),t),i(o(86537),t),i(o(44457),t)},92983:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withStaticProps=void 0;t.withStaticProps=(e,t)=>Object.assign(e,t)},8156:t=>{"use strict";t.exports=e}},o={};function r(e){var i=o[e];if(void 0!==i)return i.exports;var n=o[e]={exports:{}};return t[e].call(n.exports,n,n.exports,r),n.exports}return r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(41921),r(15034)})()));
//# sourceMappingURL=Divider.js.map