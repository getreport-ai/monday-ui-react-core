var n={toast:"toast_548f563dfe",icon:"icon_81ae59dc4b",content:"content_bdf15d24ac",contentNoIcon:"contentNoIcon_998e203eff",action:"action_3b4b3dd5cc",actionButton:"actionButton_2e37a254c6",actionLink:"actionLink_d418c6a7d7",typeNormal:"typeNormal_31ebf1efa7",typePositive:"typePositive_7e019523c7",typeNegative:"typeNegative_e3bba1cfd5",enterActive:"enterActive_a96710813f","toast-slide-in-elastic":"toast-slide-in-elastic_d936c55285",exitActive:"exitActive_5075737b6e","toast-slide-out":"toast-slide-out_133ae1944d",closeButton:"closeButton_d418c6a7d7"};!function(n){if("undefined"==typeof document)return;const t=document.head||document.getElementsByTagName("head")[0],a="s_id-baec21337442_2_29_0";if(t.querySelector("#"+a))return;const e=document.createElement("style");e.id=a,t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.appendChild(document.createTextNode(n))}(".toast_548f563dfe {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n  box-shadow: var(--box-shadow-medium);\n  -webkit-font-smoothing: var(--font-smoothing-webkit);\n  -moz-osx-font-smoothing: var(--font-smoothing-moz);\n  margin: var(--spacing-medium);\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  margin-right: auto;\n  margin-left: auto;\n  padding: var(--spacing-small);\n  align-items: center;\n  display: flex;\n  min-width: 200px;\n  border-radius: var(--border-radius-small);\n}\n\n.icon_81ae59dc4b {\n  display: flex;\n  padding-left: var(--spacing-small);\n  padding-right: var(--spacing-small);\n}\n\n.content_bdf15d24ac {\n  display: inline-flex;\n  flex-grow: 1;\n}\n\n.contentNoIcon_998e203eff {\n  padding-left: var(--spacing-small);\n}\n\n.action_3b4b3dd5cc {\n  margin-left: var(--spacing-medium);\n  display: flex;\n}\n\n.actionButton_2e37a254c6,\n.actionLink_d418c6a7d7 {\n  margin-left: var(--spacing-small);\n}\n\n.typeNormal_31ebf1efa7 {\n  background-color: #0085ff;\n  background-color: var(--primary-color);\n}\n\n.typePositive_7e019523c7 {\n  background-color: #00ca72;\n  background-color: var(--positive-color);\n}\n\n.typeNegative_e3bba1cfd5 {\n  background-color: #e44258;\n  background-color: var(--negative-color);\n}\n\n.enterActive_a96710813f {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-duration: var(--motion-expressive-long);\n  animation-name: toast-slide-in-elastic_d936c55285;\n}\n\n.exitActive_5075737b6e {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-duration: var(--motion-productive-long);\n  animation-name: toast-slide-out_133ae1944d;\n}\n\n.closeButton_d418c6a7d7 {\n  margin-left: var(--spacing-small);\n}\n\n@keyframes toast-slide-in-elastic_d936c55285 {\n  0% {\n    transform: translateY(-115px);\n  }\n  33% {\n    transform: translateY(15px);\n  }\n  66% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes toast-slide-out_133ae1944d {\n  0% {\n    transform: translateY(0);\n  }\n  70% {\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(-65px);\n    opacity: 0;\n  }\n}");export{n as default};
