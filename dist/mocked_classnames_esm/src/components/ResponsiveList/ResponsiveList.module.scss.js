var e={responsiveListRoot:"responsiveListRoot",responsiveList:"responsiveList",listMenuButton:"listMenuButton",dummy:"dummy",menuButtonDialog:"menuButtonDialog",menuWrapperFlex:"menuWrapperFlex"};!function(e){if("undefined"==typeof document)return;const n=document.head||document.getElementsByTagName("head")[0],t="s_id-0ce18c9f180e_2_29_0";if(n.querySelector("#"+t))return;const i=document.createElement("style");i.id=t,n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.appendChild(document.createTextNode(e))}(".responsiveListRoot {\n  position: relative;\n}\n\n.responsiveList {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.responsiveList .listMenuButton {\n  flex-shrink: 0;\n}\n\n.dummy {\n  width: 100%;\n  position: absolute;\n  visibility: hidden;\n}\n\n.menuButtonDialog {\n  display: flex;\n}\n\n.menuWrapperFlex {\n  display: flex;\n}");export{e as default};