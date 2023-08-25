var e={clickable:"clickable","focus-visible":"focus-visible",disabled:"disabled",disableTextSelection:"disableTextSelection",chips:"chips","chips-pop-in-emphasized":"chips-pop-in-emphasized",border:"border",withUserSelect:"withUserSelect",label:"label",noAnimation:"noAnimation",withClose:"withClose",icon:"icon",avatar:"avatar",customRenderer:"customRenderer",left:"left",right:"right",close:"close",defaultCursor:"defaultCursor"};!function(e){if("undefined"==typeof document)return;const n=document.head||document.getElementsByTagName("head")[0],i="s_id-cbae23bc3211_2_29_0";if(n.querySelector("#"+i))return;const o=document.createElement("style");o.id=i,n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.appendChild(document.createTextNode(e))}(".clickable {\n  cursor: pointer;\n}\n.clickable:focus-visible, .clickable.focus-visible {\n  outline: none;\n  z-index: 11;\n  border-radius: 4px;\n  box-shadow: 0 0 0 3px hsla(209, 100%, 50%, 0.5), 0 0 0 1px var(--primary-hover-color) inset;\n}\n.clickable:focus:not(.focus-visible) {\n  outline: none;\n}\n.clickable.disabled {\n  cursor: default;\n}\n.disableTextSelection {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */ /* Konqueror HTML */ /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\n}\n.chips {\n  display: inline-flex;\n  overflow: hidden;\n  height: 24px;\n  border-radius: 4px;\n  padding: 0 8px;\n  align-items: center;\n  justify-content: center;\n  margin: var(--chips-margin, 0 var(--spacing-xs));\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-font-smoothing: var(--font-smoothing-webkit);\n  -moz-osx-font-smoothing: var(--font-smoothing-moz);\n  animation: chips-pop-in-emphasized var(--motion-productive-medium) var(--motion-timing-emphasize);\n}\n.chips.border {\n  border: 1px solid var(--primary-background-color);\n}\n.chips.withUserSelect {\n  -webkit-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  cursor: text;\n}\n.chips .label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chips.noAnimation {\n  animation: none;\n}\n.chips.withClose {\n  padding-right: var(--spacing-xs);\n}\n.chips .icon,\n.chips .avatar,\n.chips .customRenderer {\n  min-width: 18px;\n}\n.chips .icon.left,\n.chips .avatar.left,\n.chips .customRenderer.left {\n  margin-right: var(--spacing-xs);\n}\n.chips .icon.right,\n.chips .avatar.right,\n.chips .customRenderer.right {\n  margin-left: var(--spacing-xs);\n}\n.chips .icon.close,\n.chips .avatar.close,\n.chips .customRenderer.close {\n  margin-left: var(--spacing-xs);\n  color: var(--primary-text-color);\n}\n.chips.disabled .icon {\n  color: #676879;\n  color: var(--disabled-text-color);\n}\n.chips.disabled .label {\n  color: #676879;\n  color: var(--disabled-text-color);\n}\n.chips.defaultCursor {\n  cursor: default;\n}\n.chips.clickable {\n  cursor: pointer;\n}\n.chips.clickable:focus-visible, .chips.clickable.focus-visible {\n  outline: none;\n  z-index: 11;\n  border-radius: 4px;\n  box-shadow: 0 0 0 3px hsla(209, 100%, 50%, 0.5), 0 0 0 1px var(--primary-hover-color) inset;\n}\n.chips.clickable:focus:not(.focus-visible) {\n  outline: none;\n}\n.chips.clickable.disabled {\n  cursor: default;\n}\n.chips.clickable.disableTextSelection {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */ /* Konqueror HTML */ /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\n}\n@keyframes chips-pop-in-emphasized {\n  0% {\n    transform: scale(0.3);\n    opacity: 0;\n  }\n  70% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n  }\n}");export{e as default};
