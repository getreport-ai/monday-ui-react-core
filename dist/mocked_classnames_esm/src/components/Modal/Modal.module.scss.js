var n={container:"container",overlay:"overlay","overlay-fade-out":"overlay-fade-out","overlay-fade-in":"overlay-fade-in",dialog:"dialog",default:"default",full:"full",spacing:"spacing"};!function(n){if("undefined"==typeof document)return;const e=document.head||document.getElementsByTagName("head")[0],a="s_id-e49357986d51_2_29_0";if(e.querySelector("#"+a))return;const o=document.createElement("style");o.id=a,e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o),o.appendChild(document.createTextNode(n))}(".container,\n.overlay {\n  position: fixed;\n  inset: 0;\n}\n\n.container {\n  --monday-modal-z-index: 10000;\n  z-index: var(--monday-modal-z-index);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container[aria-hidden=true] {\n  display: none;\n}\n\n.container[aria-hidden=true] .overlay {\n  background-color: transparent;\n  animation: overlay-fade-out 70ms var(--motion-timing-enter);\n}\n\n.overlay {\n  background-color: rgba(41, 47, 76, 0.7);\n  animation: overlay-fade-in 70ms var(--motion-timing-enter);\n}\n\n.dialog {\n  z-index: 2;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  padding-block: var(--spacing-large);\n  padding-inline: var(--spacing-xl);\n  border-radius: var(--border-radius-big);\n  box-shadow: var(--box-shadow-large);\n  background-color: var(--secondary-background-color);\n  max-height: 90vh;\n  max-width: 90vw;\n}\n\n.dialog.default {\n  width: 520px;\n}\n\n.dialog.full {\n  width: 100vw;\n}\n\n.dialog.spacing {\n  gap: var(--spacing-medium);\n}\n\n@keyframes overlay-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes overlay-fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}");export{n as default};