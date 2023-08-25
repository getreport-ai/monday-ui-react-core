var n={toast:"toast",icon:"icon",content:"content",contentNoIcon:"contentNoIcon",action:"action",actionButton:"actionButton",actionLink:"actionLink",typeNormal:"typeNormal",typePositive:"typePositive",typeNegative:"typeNegative",enterActive:"enterActive","toast-slide-in-elastic":"toast-slide-in-elastic",exitActive:"exitActive","toast-slide-out":"toast-slide-out",closeButton:"closeButton"};!function(n){if("undefined"==typeof document)return;const t=document.head||document.getElementsByTagName("head")[0],o="s_id-baec21337442_2_29_0";if(t.querySelector("#"+o))return;const a=document.createElement("style");a.id=o,t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.appendChild(document.createTextNode(n))}(".toast {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n  box-shadow: var(--box-shadow-medium);\n  -webkit-font-smoothing: var(--font-smoothing-webkit);\n  -moz-osx-font-smoothing: var(--font-smoothing-moz);\n  margin: var(--spacing-medium);\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  margin-right: auto;\n  margin-left: auto;\n  padding: var(--spacing-small);\n  align-items: center;\n  display: flex;\n  min-width: 200px;\n  border-radius: var(--border-radius-small);\n}\n\n.icon {\n  display: flex;\n  padding-left: var(--spacing-small);\n  padding-right: var(--spacing-small);\n}\n\n.content {\n  display: inline-flex;\n  flex-grow: 1;\n}\n\n.contentNoIcon {\n  padding-left: var(--spacing-small);\n}\n\n.action {\n  margin-left: var(--spacing-medium);\n  display: flex;\n}\n\n.actionButton,\n.actionLink {\n  margin-left: var(--spacing-small);\n}\n\n.typeNormal {\n  background-color: #0085ff;\n  background-color: var(--primary-color);\n}\n\n.typePositive {\n  background-color: #00ca72;\n  background-color: var(--positive-color);\n}\n\n.typeNegative {\n  background-color: #e44258;\n  background-color: var(--negative-color);\n}\n\n.enterActive {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-duration: var(--motion-expressive-long);\n  animation-name: toast-slide-in-elastic;\n}\n\n.exitActive {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-duration: var(--motion-productive-long);\n  animation-name: toast-slide-out;\n}\n\n.closeButton {\n  margin-left: var(--spacing-small);\n}\n\n@keyframes toast-slide-in-elastic {\n  0% {\n    transform: translateY(-115px);\n  }\n  33% {\n    transform: translateY(15px);\n  }\n  66% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes toast-slide-out {\n  0% {\n    transform: translateY(0);\n  }\n  70% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-65px);\n    opacity: 0;\n  }\n}");export{n as default};