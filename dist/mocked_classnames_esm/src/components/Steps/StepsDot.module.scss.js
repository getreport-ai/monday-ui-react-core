var n={dot:"dot","focus-visible":"focus-visible",isActive:"isActive",onPrimary:"onPrimary"};!function(n){if("undefined"==typeof document)return;const o=document.head||document.getElementsByTagName("head")[0],r="s_id-b2d4facc0bec_2_29_0";if(o.querySelector("#"+r))return;const i=document.createElement("style");i.id=r,o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.appendChild(document.createTextNode(n))}(".dot {\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n          appearance: none;\n  width: 6px;\n  height: 6px;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #e6e9ef;\n  background: var(--ui-border-color);\n  transform-origin: center;\n  transform: scale(1);\n  transition: transform var(--motion-productive-long) var(--motion-timing-transition), background var(--motion-productive-long) var(--motion-timing-transition);\n}\n.dot:focus-visible, .dot.focus-visible {\n  outline: none;\n  z-index: 11;\n  border-radius: 4px;\n  box-shadow: 0 0 0 3px hsla(209, 100%, 50%, 0.5), 0 0 0 1px var(--primary-hover-color) inset;\n}\n.dot:focus:not(.focus-visible) {\n  outline: none;\n}\n.dot:focus-visible, .dot.focus-visible {\n  outline: none;\n  z-index: 11;\n  border-radius: 4px;\n  box-shadow: 0 0 0 3px hsla(209, 100%, 50%, 0.5), 0 0 0 1px var(--primary-hover-color) inset;\n}\n.dot:focus:not(.focus-visible) {\n  outline: none;\n}\n.dot:hover {\n  transform: scale(1.3);\n}\n.isActive {\n  background: #0085ff;\n  background: var(--primary-color);\n  transform: scale(1.3);\n}\n.onPrimary.dot {\n  background: #0071d9;\n  background: var(--primary-hover-color);\n}\n.onPrimary.dot:focus-visible, .onPrimary.dot.focus-visible {\n  outline: none;\n  z-index: 11;\n  border-radius: 4px;\n  box-shadow: 0 0 0 3px var(--text-color-on-primary-with-opacity), 0 0 0 1px var(--text-color-on-primary) inset;\n}\n.onPrimary.dot:focus:not(.focus-visible) {\n  outline: none;\n}\n.onPrimary.isActive {\n  background: #fff;\n  background: var(--text-color-on-primary);\n}");export{n as default};
