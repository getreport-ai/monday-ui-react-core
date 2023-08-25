var o={comboboxOption:"comboboxOption",disabled:"disabled",selected:"selected",active:"active",activeOutline:"activeOutline",optionLabel:"optionLabel",optionIcon:"optionIcon",left:"left"};!function(o){if("undefined"==typeof document)return;const n=document.head||document.getElementsByTagName("head")[0],e="s_id-f704ca687c95_2_29_0";if(n.querySelector("#"+e))return;const r=document.createElement("style");r.id=e,n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.appendChild(document.createTextNode(o))}(".comboboxOption {\n  padding: 8px;\n  width: 100%;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.comboboxOption.disabled {\n  cursor: not-allowed;\n  border-color: #e6e9ef;\n  border-color: var(--disabled-background-color);\n  color: #676879;\n  color: var(--disabled-text-color);\n  cursor: not-allowed;\n}\n\n.comboboxOption.disabled:hover {\n  background-color: transparent;\n}\n\n.comboboxOption.selected {\n  background-color: #dff0ff;\n  background-color: var(--primary-selected-color);\n}\n\n.comboboxOption:hover:not(.disabled):not(.selected),\n.comboboxOption.active {\n  color: #323338;\n  color: var(--primary-text-color);\n  background-color: #c5c7d0;\n  background-color: var(--primary-background-hover-color);\n  position: relative;\n}\n\n.comboboxOption.activeOutline {\n  outline: none;\n  z-index: 11;\n  border-radius: 4px;\n  box-shadow: 0 0 0 3px hsla(209, 100%, 50%, 0.5) inset, 0 0 0 1px var(--primary-hover-color) inset;\n  background-color: var(--secondary-background-color);\n}\n\n.comboboxOption .optionLabel {\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.comboboxOption .optionIcon {\n  flex: 0 0 auto;\n}\n\n.comboboxOption .optionIcon.left {\n  margin-right: 4px;\n}");export{o as default};