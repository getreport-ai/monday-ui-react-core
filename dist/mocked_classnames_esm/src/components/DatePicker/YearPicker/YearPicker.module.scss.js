var n={monthYearPicker:"monthYearPicker",navigationWrapper:"navigationWrapper",navigationLeft:"navigationLeft",navigationRight:"navigationRight",pickerOptions:"pickerOptions"};!function(n){if("undefined"==typeof document)return;const e=document.head||document.getElementsByTagName("head")[0],t="s_id-514d3fb03a8d_2_29_0";if(e.querySelector("#"+t))return;const i=document.createElement("style");i.id=t,e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i.appendChild(document.createTextNode(n))}(".monthYearPicker {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  right: 0;\n  height: 100%;\n  z-index: 10;\n  pointer-events: none;\n}\n.monthYearPicker .slide-down-appear {\n  opacity: 0;\n}\n.monthYearPicker .slide-down-appear-active {\n  transition: opacity 0.4s ease;\n  opacity: 1;\n}\n.monthYearPicker .navigationWrapper {\n  position: absolute;\n  top: 21px;\n  pointer-events: all;\n  cursor: pointer;\n}\n.monthYearPicker .navigationWrapper.navigationLeft {\n  left: 21px;\n}\n.monthYearPicker .navigationWrapper.navigationRight {\n  right: 21px;\n}\n.monthYearPicker .pickerOptions {\n  text-align: center;\n  background-color: #fff;\n  background-color: var(--secondary-background-color);\n  position: absolute;\n  top: 55px;\n  pointer-events: all;\n}\n.monthYearPicker .CalendarYear--blocked {\n  color: var(--disabled-text-color);\n  cursor: default;\n}");export{n as default};