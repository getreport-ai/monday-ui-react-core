var e={wrapper:"wrapper",fullWidth:"fullWidth",container:"container",progressBar:"progressBar",completed:"completed",label:"label",large:"large",medium:"medium",small:"small"};!function(e){if("undefined"==typeof document)return;const r=document.head||document.getElementsByTagName("head")[0],n="s_id-34a4d1963971_2_29_0";if(r.querySelector("#"+n))return;const a=document.createElement("style");a.id=n,r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.appendChild(document.createTextNode(e))}(".wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  font: var(--font-text2-normal);\n  line-height: 8px !important;\n}\n.wrapper.fullWidth {\n  width: 100%;\n}\n.wrapper.fullWidth .container {\n  border-radius: 0;\n}\n.wrapper.fullWidth .container .progressBar {\n  border-radius: 0 var(--border-radius-small) var(--border-radius-small) 0;\n}\n.wrapper.fullWidth .container .progressBar.completed {\n  border-radius: 0;\n}\n.label {\n  padding-left: var(--spacing-xs);\n}\n.large {\n  height: 8px;\n  line-height: 8px;\n}\n.medium {\n  height: 6px;\n  line-height: 6px;\n}\n.small {\n  height: 4px;\n  line-height: 4px;\n}\n.container {\n  position: relative;\n  width: 100%;\n  background-color: #c5c7d0;\n  background-color: var(--primary-background-hover-color);\n  border-radius: var(--border-radius-small);\n}");export{e as default};
