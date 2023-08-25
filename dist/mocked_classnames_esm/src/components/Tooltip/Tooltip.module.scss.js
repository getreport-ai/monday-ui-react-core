var r={tooltip:"tooltip",paddingSizeMd:"paddingSizeMd",tooltipWhiteLink:"tooltipWhiteLink",dark:"dark",arrow:"arrow",white:"white",primary:"primary",success:"success",surface:"surface",private:"private",share:"share",error:"error"};!function(r){if("undefined"==typeof document)return;const o=document.head||document.getElementsByTagName("head")[0],n="s_id-a2de8be1ad53_2_29_0";if(o.querySelector("#"+n))return;const a=document.createElement("style");a.id=n,o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.appendChild(document.createTextNode(r))}(".tooltip {\n  position: relative;\n  display: inline-block;\n  border-radius: var(--tooltip-border-radius, var(--border-radius-small));\n  padding: var(--tooltip-padding, var(--spacing-small) var(--spacing-medium));\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n  box-shadow: var(--box-shadow-medium);\n  font: var(--font-text2-normal);\n  max-width: var(--tooltip-max-width, 50vw);\n  word-break: break-word;\n}\n\n.tooltip.paddingSizeMd {\n  border-radius: var(--border-radius-medium);\n  padding: var(--spacing-medium);\n  font: var(--font-text2-normal);\n}\n\n.tooltip a.tooltipWhiteLink {\n  color: #fff;\n}\n\n.dark,\n.arrow.dark {\n  background-color: #323338;\n  background-color: var(--inverted-color-background);\n  color: #fff;\n  color: var(--text-color-on-inverted);\n}\n\n.white,\n.arrow.white {\n  background-color: var(--color-snow_white);\n  color: var(--color-blackish);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n  box-shadow: var(--box-shadow-medium);\n}\n\n.primary,\n.arrow.primary {\n  background-color: #0085ff;\n  background-color: var(--primary-color);\n  color: #fff;\n  color: var(--text-color-on-primary);\n}\n\n.success,\n.arrow.success {\n  background-color: #00ca72;\n  background-color: var(--positive-color);\n  color: #fff;\n  color: var(--text-color-on-primary);\n}\n\n.surface,\n.arrow.surface {\n  background-color: #5b607a;\n  color: var(--color-snow_white);\n}\n\n.private,\n.arrow.private {\n  background-color: #f65f7c;\n  background-color: var(--private-color);\n  color: #fff;\n  color: var(--text-color-on-primary);\n}\n\n.share,\n.arrow.share {\n  background-color: #a358df;\n  background-color: var(--color-purple);\n  color: #fff;\n  color: var(--text-color-on-primary);\n}\n\n.error,\n.arrow.error {\n  background-color: #e44258;\n  background-color: var(--negative-color);\n  color: #fff;\n  color: var(--text-color-on-primary);\n}");export{r as default};