var n={radioButton:"radioButton_82539d0e39",inputContainer:"inputContainer_ef834a4a3e",input:"input_8a2a9d02f5",control:"control_ae28d8c2ee",labelAnimation:"labelAnimation_f76130a42e",radioCheckedAnimation:"radioCheckedAnimation_04892b9fa5",disabled:"disabled_bee864760e",label:"label_ac06d26dfc"};!function(n){if("undefined"==typeof document)return;const e=document.head||document.getElementsByTagName("head")[0],o="s_id-03dd821ce69e_2_31_2";if(e.querySelector("#"+o))return;const r=document.createElement("style");r.id=o,e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.appendChild(document.createTextNode(n))}(".radioButton_82539d0e39 {\n  display: grid;\n  grid-template-columns: 1.5em auto;\n  grid-gap: 0.5em;\n  cursor: pointer;\n}\n\n.inputContainer_ef834a4a3e {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.input_8a2a9d02f5 {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  margin: 0;\n}\n\n.control_ae28d8c2ee {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1em;\n  height: 1em;\n  border: 0.1em solid;\n  box-sizing: border-box;\n  border-color: var(--ui-border-color);\n  border-radius: 50%;\n  transition: border-width var(--motion-productive-medium) var(--motion-timing-enter);\n}\n\ninput:checked + .control_ae28d8c2ee {\n  border-color: var(--primary-color);\n  border-width: 0.3em;\n}\n\ninput:checked + .labelAnimation_f76130a42e {\n  animation-name: radioCheckedAnimation_04892b9fa5;\n  animation-duration: var(--motion-productive-medium);\n  animation-timing-function: var(--motion-timing-enter);\n  animation-fill-mode: forwards;\n}\n\ninput:disabled + .control_ae28d8c2ee {\n  border: 0.5em solid;\n  border-color: var(--disabled-background-color);\n  border-radius: 50%;\n}\n\ninput:checked:disabled + .control_ae28d8c2ee {\n  border: 0.3em solid;\n  border-color: var(--disabled-background-color);\n  background-color: var(--secondary-text-color);\n}\n\n.radioButton_82539d0e39.disabled_bee864760e {\n  cursor: not-allowed;\n}\n\n.radioButton_82539d0e39.disabled_bee864760e .label_ac06d26dfc {\n  color: var(--disabled-text-color);\n}\n\n.inputContainer_ef834a4a3e input:focus-visible + .control_ae28d8c2ee {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px hsla(209, 100%, 50%, 0.5);\n  border-radius: 50%;\n}\n\n.radioButton_82539d0e39:hover .inputContainer_ef834a4a3e input:enabled:checked + .control_ae28d8c2ee {\n  border-color: var(--primary-hover-color);\n}\n\n.radioButton_82539d0e39:hover .inputContainer_ef834a4a3e input:enabled:not(:checked) + .control_ae28d8c2ee,\n.radioButton_82539d0e39:focus-within .inputContainer_ef834a4a3e input:enabled:not(:checked) + .control_ae28d8c2ee {\n  border-color: var(--primary-text-color);\n}\n\n@keyframes radioCheckedAnimation_04892b9fa5 {\n  0% {\n    height: 1em;\n    width: 1em;\n  }\n  50% {\n    height: 0.8em;\n    width: 0.8em;\n  }\n  100% {\n    height: 1em;\n    width: 1em;\n  }\n}");export{n as default};
