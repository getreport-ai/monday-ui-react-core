var e=function(e,r,n){var t=e.reduce((function(e,t){var o,u=t.categoryId;return u?((null===(o=r[u])||void 0===o?void 0:o.onlyShowOnSearch)&&!n||(e[u]?e[u].push(t):e[u]=[t]),e):e}),{});return Object.keys(r).reduce((function(e,r){return t[r]&&(e[r]=t[r]),e}),{})},r=function(e,r){return r.filter((function(r){return!e||r.label.toLowerCase().includes(e.toLowerCase())}))};export{r as defaultFilter,e as getOptionsByCategories};