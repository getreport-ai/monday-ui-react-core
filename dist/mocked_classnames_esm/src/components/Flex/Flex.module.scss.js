var n={container:"container",justifyStart:"justifyStart",justifyEnd:"justifyEnd",justifyCenter:"justifyCenter",justifySpaceBetween:"justifySpaceBetween",justifySpaceAround:"justifySpaceAround",alignStart:"alignStart",alignEnd:"alignEnd",alignCenter:"alignCenter",alignStretch:"alignStretch",directionColumn:"directionColumn",wrap:"wrap"};!function(n){if("undefined"==typeof document)return;const e=document.head||document.getElementsByTagName("head")[0],t="s_id-0008b82e6d0f_2_29_0";if(e.querySelector("#"+t))return;const i=document.createElement("style");i.id=t,e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i.appendChild(document.createTextNode(n))}(".container {\n  display: flex;\n  flex-direction: row;\n}\n.container.justifyStart {\n  justify-content: flex-start;\n}\n.container.justifyEnd {\n  justify-content: flex-end;\n}\n.container.justifyCenter {\n  justify-content: center;\n}\n.container.justifySpaceBetween {\n  justify-content: space-between;\n}\n.container.justifySpaceAround {\n  justify-content: space-around;\n}\n.container.alignStart {\n  align-items: flex-start;\n}\n.container.alignEnd {\n  align-items: flex-end;\n}\n.container.alignCenter {\n  align-items: center;\n}\n.container.alignStretch {\n  align-items: stretch;\n}\n.container.directionColumn {\n  flex-direction: column;\n}\n.container.wrap {\n  flex-wrap: wrap;\n}");export{n as default};