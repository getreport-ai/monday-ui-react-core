var t={tooltipAvatarItemTitle:"tooltipAvatarItemTitle",tooltipContainer:"tooltipContainer","focus-visible":"focus-visible",tooltipGridContainer:"tooltipGridContainer",scrollableContainer:"scrollableContainer"};!function(t){if("undefined"==typeof document)return;const n=document.head||document.getElementsByTagName("head")[0],e="s_id-dc26f1a44cce_2_29_0";if(n.querySelector("#"+e))return;const o=document.createElement("style");o.id=e,n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.appendChild(document.createTextNode(t))}(".tooltipAvatarItemTitle {\n  white-space: nowrap;\n}\n\n.tooltipContainer {\n  max-height: 300px;\n  padding-right: var(--spacing-medium);\n  align-items: flex-start !important;\n  overflow-x: visible;\n  overflow-y: auto;\n  margin-top: var(--spacing-small);\n}\n\n.tooltipContainer:focus, .tooltipContainer:focus-visible, .tooltipContainer.focus-visible {\n  outline: none;\n}\n\n.tooltipGridContainer {\n  max-width: 160px;\n  padding-right: 0;\n}\n\n.scrollableContainer::-webkit-scrollbar {\n  width: 4px;\n  height: 6px;\n}\n\n.scrollableContainer::-webkit-scrollbar-thumb {\n  background-color: var(--ui-border-color);\n  border-radius: 4px;\n}");export{t as default};