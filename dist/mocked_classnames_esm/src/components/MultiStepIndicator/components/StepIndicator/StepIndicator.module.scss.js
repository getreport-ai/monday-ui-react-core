var n={indicator:"indicator",textContainer:"textContainer",sizeCompactTextContainer:"sizeCompactTextContainer",textContainerTitle:"textContainerTitle",visuallyHidden:"visuallyHidden",textContainerTitleText:"textContainerTitleText",textContainerSubtitleText:"textContainerSubtitleText",sizeCompactTextContainerTitle:"sizeCompactTextContainerTitle",textPlacementVertical:"textPlacementVertical",numberDividerContainer:"numberDividerContainer",sizeCompactTextContainerTitleText:"sizeCompactTextContainerTitleText",divider:"divider",sizeCompactNumberDividerContainer:"sizeCompactNumberDividerContainer",statusActiveNumberDividerContainer:"statusActiveNumberDividerContainer",clickable:"clickable",withAnimation:"withAnimation",stepIndicatiorCirclePopElastic:"stepIndicatiorCirclePopElastic",swapEnter:"swapEnter",swapEnterActive:"swapEnterActive",swapExit:"swapExit",swapExitActive:"swapExitActive",numberContainer:"numberContainer",numberContainerText:"numberContainerText",numberContainerTextCheckIcon:"numberContainerTextCheckIcon",typePrimaryNumberContainer:"typePrimaryNumberContainer",typeDangerNumberContainer:"typeDangerNumberContainer",typeSuccessNumberContainer:"typeSuccessNumberContainer",typeDarkNumberContainer:"typeDarkNumberContainer",statusActiveNumberContainer:"statusActiveNumberContainer",sizeCompactNumberContainer:"sizeCompactNumberContainer",statusPendingNumberContainer:"statusPendingNumberContainer","step-indicatior-circle-pop-elastic":"step-indicatior-circle-pop-elastic"};!function(n){if("undefined"==typeof document)return;const e=document.head||document.getElementsByTagName("head")[0],r="s_id-b3adbbc178fa_2_29_0";if(e.querySelector("#"+r))return;const t=document.createElement("style");t.id=r,e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.appendChild(document.createTextNode(n))}(".indicator {\n  font: var(--font-text2-normal);\n  color: var(--text-color-on-primary);\n  display: flex;\n  margin: 0;\n  padding: 0;\n  text-indent: 0;\n  list-style-type: none;\n}\n\n.textContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 16px;\n}\n\n.sizeCompactTextContainer {\n  margin-left: var(--spacing-small);\n  justify-content: center;\n  align-content: center;\n}\n\n.textContainerTitle {\n  width: 100%;\n  margin-bottom: var(--spacing-xs);\n}\n\n.textContainerTitle .visuallyHidden {\n  display: none;\n}\n\n.textContainerTitleText {\n  font: var(--font-text2-medium);\n  color: #323338;\n  color: var(--primary-text-color);\n  margin-bottom: 2px;\n}\n\n.textContainerSubtitleText {\n  width: 100%;\n  font: var(--font-text2-normal);\n  color: var(--primary-text-color);\n}\n\n.sizeCompactTextContainerTitle {\n  margin-bottom: 0px;\n}\n\n.textPlacementVertical {\n  margin: 8px;\n  flex-direction: column;\n  flex: 1 1 0px;\n}\n\n.textPlacementVertical .textContainer {\n  margin-left: 0;\n  margin-top: var(--spacing-medium);\n}\n\n.textPlacementVertical .numberDividerContainer {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n}\n\n.sizeCompactTextContainerTitleText {\n  display: block;\n  font: var(--font-text2-normal);\n  max-width: 150px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: 0px;\n}\n\n.textPlacementVertical .numberDividerContainer .divider {\n  background-color: #e6e9ef;\n  background-color: var(--ui-border-color);\n  margin: 16px 0 16px 16px;\n  height: 1px;\n  flex: 1 1 0;\n}\n\n.sizeCompactNumberDividerContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sizeCompactNumberDividerContainer.statusActiveNumberDividerContainer {\n  width: 40px;\n}\n\n.indicator.clickable {\n  cursor: pointer;\n}\n\n.withAnimation {\n  animation: stepIndicatiorCirclePopElastic var(--motion-expressive-short);\n}\n\n/* New state enters */\n\n.swapEnter {\n  opacity: 0;\n  transform: translateY(15px);\n}\n\n.swapEnterActive {\n  position: relative;\n  opacity: 1;\n  transition: transform var(--motion-productive-long) var(--motion-timing-enter), opacity var(--motion-productive-short);\n  transform: translateY(0);\n}\n\n/* Old state leaves */\n\n.swapExit {\n  position: relative;\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.swapExitActive {\n  position: relative;\n  opacity: 0;\n  transform: translateY(-15px);\n  transition: transform var(--motion-productive-long) var(--motion-timing-enter), opacity var(--motion-productive-short);\n}\n\n.numberContainer {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n}\n\n.numberContainerText {\n  margin: auto;\n  display: flex;\n  align-items: center;\n}\n\n.numberContainerTextCheckIcon {\n  width: 20px;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.typePrimaryNumberContainer {\n  background-color: #0085ff;\n  background-color: var(--primary-color);\n}\n\n.typePrimaryNumberContainer:hover {\n  background-color: #0071d9;\n  background-color: var(--primary-hover-color);\n}\n\n.typeDangerNumberContainer {\n  background-color: #e44258;\n  background-color: var(--negative-color);\n}\n\n.typeDangerNumberContainer:hover {\n  background-color: #b63546;\n  background-color: var(--negative-color-hover);\n}\n\n.typeSuccessNumberContainer {\n  background-color: #00ca72;\n  background-color: var(--positive-color);\n}\n\n.typeSuccessNumberContainer:hover {\n  background-color: #00a25b;\n  background-color: var(--positive-color-hover);\n}\n\n.typeDarkNumberContainer {\n  background-color: #323338;\n  background-color: var(--inverted-color-background);\n  color: #fff;\n  color: var(--text-color-on-inverted);\n}\n\n.typeDarkNumberContainer:hover {\n  background-color: #323338;\n  background-color: var(--secondary-text-color);\n}\n\n.statusActiveNumberContainer {\n  box-shadow: 0 0 0 4px var(--primary-background-color), 0 0 0 6px var(--primary-color);\n}\n\n.statusActiveNumberContainer.typeDangerNumberContainer {\n  box-shadow: 0 0 0 4px var(--primary-background-color), 0 0 0 6px var(--negative-color);\n}\n\n.statusActiveNumberContainer.typeSuccessNumberContainer {\n  box-shadow: 0 0 0 4px var(--primary-background-color), 0 0 0 6px var(--positive-color);\n}\n\n.statusActiveNumberContainer.typeDarkNumberContainer {\n  box-shadow: 0 0 0 4px var(--primary-background-color), 0 0 0 6px var(--primary-text-color);\n}\n\n.sizeCompactNumberContainer {\n  width: 28px;\n  height: 28px;\n}\n\n.statusPendingNumberContainer {\n  background-color: #fff;\n  background-color: var(--primary-background-color);\n  color: #323338;\n  color: var(--primary-text-color);\n  border-color: #e6e9ef !important;\n  border-color: var(--ui-border-color) !important;\n  border: 1px solid;\n}\n\n.statusPendingNumberContainer:hover {\n  background-color: #0085ff;\n  background-color: var(--primary-color);\n  color: #fff;\n  color: var(--text-color-on-primary);\n  border: none;\n}\n\n.statusPendingNumberContainer.typeDangerNumberContainer:hover {\n  background-color: #e44258;\n  background-color: var(--negative-color);\n}\n\n.statusPendingNumberContainer.typeSuccessNumberContainer:hover {\n  background-color: #00ca72;\n  background-color: var(--positive-color);\n}\n\n.statusPendingNumberContainer.typeDarkNumberContainer:hover {\n  background-color: #323338;\n  background-color: var(--primary-text-color);\n  color: #fff;\n  color: var(--text-color-on-inverted);\n}\n\n@keyframes step-indicatior-circle-pop-elastic {\n  0% {\n    transform: scale(1);\n  }\n  33% {\n    transform: scale(1.2);\n  }\n  66% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}");export{n as default};