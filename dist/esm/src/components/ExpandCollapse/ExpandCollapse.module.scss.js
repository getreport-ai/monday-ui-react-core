var n={expandCollapse:"expandCollapse_7f36fcf840",header:"header_819ba159af","focus-visible":"focus-visible_d4916420bb",headerContent:"headerContent_53580cb978",iconComponent:"iconComponent_afde0025ce",content:"content_15c3672b79",section:"section_b0b103bb1f",hideBorder:"hideBorder_586f578b07",hideBorderBottom:"hideBorderBottom_156c0a5977",showBorder:"showBorder_ea15586c67",headerOpen:"headerOpen_5a94a2162a",animateIconOpen:"animateIconOpen_1be29bacb6",animateIconClose:"animateIconClose_413cf0364b"};!function(n){if("undefined"==typeof document)return;const e=document.head||document.getElementsByTagName("head")[0],o="s_id-8c24fbcb12f2_2_31_2";if(e.querySelector("#"+o))return;const r=document.createElement("style");r.id=o,e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.appendChild(document.createTextNode(n))}(".expandCollapse_7f36fcf840 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--primary-text-color);\n  background-color: transparent;\n  box-sizing: border-box;\n  border-radius: var(--border-radius-small);\n}\n\n.header_819ba159af {\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n          appearance: none;\n  padding: var(--spacing-medium);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n\n.header_819ba159af:focus-visible, .header_819ba159af.focus-visible_d4916420bb {\n  outline: none;\n  z-index: 11;\n  border-radius: 4px;\n  box-shadow: 0 0 0 3px hsla(209, 100%, 50%, 0.5), 0 0 0 1px var(--primary-hover-color) inset;\n}\n\n.header_819ba159af:focus:not(.focus-visible_d4916420bb) {\n  outline: none;\n}\n\n.header_819ba159af:hover {\n  background-color: var(--primary-background-hover-color);\n}\n\n.header_819ba159af .headerContent_53580cb978 {\n  margin: 0;\n}\n\n.header_819ba159af .iconComponent_afde0025ce {\n  color: var(--icon-color);\n}\n\n.content_15c3672b79 {\n  padding: var(--spacing-medium);\n}\n\n.section_b0b103bb1f {\n  width: 100%;\n}\n\n.hideBorder_586f578b07 {\n  border: none;\n}\n\n.hideBorderBottom_156c0a5977 {\n  border-bottom: none;\n}\n\n.showBorder_ea15586c67 {\n  border: 1px solid var(--ui-border-color);\n}\n\n.showBorder_ea15586c67 .headerOpen_5a94a2162a {\n  border-bottom: 1px solid;\n  border-color: var(--ui-border-color);\n}\n\n.animateIconOpen_1be29bacb6 {\n  transform: rotate(-180deg);\n  transition: transform var(--motion-expressive-short) var(--motion-timing-transition);\n}\n\n.animateIconClose_413cf0364b {\n  transform: rotate(-360deg);\n  transition: transform var(--motion-expressive-short) var(--motion-timing-transition);\n}");export{n as default};
