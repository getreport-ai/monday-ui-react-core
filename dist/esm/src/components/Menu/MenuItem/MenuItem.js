import{slicedToArray as e,defineProperty as o}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import i,{forwardRef as n,useRef as t,useEffect as s,useLayoutEffect as r,useCallback as l,useMemo as a,createElement as c}from"react";import{jsx as u}from"react/jsx-runtime";import d from"classnames";import{getTestId as m,ComponentDefaultTestId as p}from"../../../tests/testIds.js";import{DialogPosition as v}from"../../../constants/positions.js";import{isFunction as f}from"lodash-es";import b from"../../Text/Text.js";import h from"../../Tooltip/Tooltip.js";import I from"../../Icon/Icon.js";import y from"../../Icon/Icons/components/DropdownChevronRight.js";import j from"../../DialogContentContainer/DialogContentContainer.js";import M from"../../../hooks/useMergeRefs.js";import g from"../../../hooks/useIsOverflowing/useIsOverflowing.js";import O from"../../../hooks/usePopover.js";import{backwardCompatibilityForProperties as C}from"../../../helpers/backwardCompatibilityForProperties.js";import S from"./hooks/useMenuItemMouseEvents.js";import x from"./hooks/useMenuItemKeyboardEvents.js";import{withStaticProps as k}from"../../../types/withStaticProps.js";import{TAB_INDEX_FOCUS_WITH_JS_ONLY as N}from"./MenuItemConstants.js";import T from"./MenuItem.module.scss.js";var w=n((function(n,v){var k,E,P=n.iconWrapperClassName,D=n.title,A=void 0===D?"":D,L=n.label,R=void 0===L?"":L,V=n.icon,B=void 0===V?"":V,F=n.menuRef,_=n.iconType,W=n.iconBackgroundColor,z=n.disabled,G=void 0!==z&&z,H=n.disableReason,q=n.selected,K=void 0!==q&&q,U=n.onClick,X=n.activeItemIndex,J=void 0===X?-1:X,Q=n.setActiveItemIndex,Y=n.index,Z=n.key,$=n.id,ee=n.children,oe=n.isParentMenuVisible,ie=void 0!==oe&&oe,ne=n.resetOpenSubMenuIndex,te=n.hasOpenSubMenu,se=void 0!==te&&te,re=n.setSubMenuIsOpenByIndex,le=n.closeMenu,ae=n.useDocumentEventListeners,ce=void 0!==ae&&ae,ue=n.tooltipContent,de=n.tooltipPosition,me=void 0===de?w.tooltipPositions.RIGHT:de,pe=n.tooltipShowDelay,ve=void 0===pe?300:pe,fe=n.isInitialSelectedState,be=n.onMouseEnter,he=n.onMouseLeave,Ie=n.shouldScrollMenu,ye=n["data-testid"],je=C([n.className,n.classname]),Me=J===Y,ge=!!ee&&Me&&se,Oe=!!ee,Ce=Oe&&ie&&ge,Se=ee&&i.Children.only(ee);Se&&Se.type&&Se.type.isMenu?E=Se:Se&&console.error("menu item can accept only menu element as first level child, this element is not valid: ",Se);var xe=t(),ke=t(),Ne=t(null),Te=t(null),we=Te.current,Ee=Ne.current,Pe=ke.current,De=g({ref:xe}),Ae=O(Ee,we,{isOpen:ge}),Le=Ae.styles,Re=Ae.attributes;s((function(){var e;Me&&Ie&&Ee&&(Ee.scrollIntoViewIfNeeded?Ee.scrollIntoViewIfNeeded({behaviour:"smooth"}):null===(e=Ee.scrollIntoView)||void 0===e||e.call(Ee,{behavior:"smooth",block:"center"}))}),[Me,Ee,Ie]);var Ve=S({ref:Ne,resetOpenSubMenuIndex:ne,setSubMenuIsOpenByIndex:re,isActive:Me,setActiveItemIndex:Q,index:Y,hasChildren:Oe}),Be=x({onClick:U,disabled:G,isActive:Me,index:Y,setActiveItemIndex:Q,hasChildren:Oe,shouldShowSubMenu:Ce,setSubMenuIsOpenByIndex:re,menuRef:F,isMouseEnter:Ve,closeMenu:le,useDocumentEventListeners:ce}).onClickCallback;r((function(){ce||Ce&&Pe&&requestAnimationFrame((function(){Pe.focus()}))}),[Ce,Pe,ce]),s((function(){ce||Me&&(null==Ee||Ee.focus())}),[Me,Ee,ce]);var Fe=l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};re(Y,!1),e.propagate&&le(e)}),[re,Y,le]),_e=M({refs:[v,Ne]}),We=a((function(){return W?[{backgroundColor:W,borderRadius:"4px",width:20,height:20,opacity:G?.4:1},{color:"var(--text-color-on-primary)"}]:[void 0,void 0]}),[W,G]),ze=e(We,2),Ge=ze[0],He=ze[1],qe=a((function(){return ee?{"aria-haspopup":!0,"aria-expanded":se}:{}}),[ee,se]),Ke=De||G||ue,Ue=a((function(){return G?H:ue||A}),[H,G,A,ue]);return c(b,Object.assign({element:"li",type:b.types.TEXT2},qe,{key:Z,id:$,"data-testid":ye||m(p.MENU_ITEM,Y),className:d(T.item,je,(k={},o(k,T.disabled,G),o(k,T.focused,Me),o(k,T.selected,K),o(k,T.initialSelected,fe),k)),ref:_e,onClick:Be,role:"menuitem","aria-current":Me,onMouseLeave:he,onMouseEnter:be,tabIndex:N}),function(){if(!B)return null;var e=_;return e||(e=f(B)?I.type.SVG:I.type.ICON_FONT),u("div",Object.assign({className:d(T.iconWrapper,P),style:Ge},{children:u(I,{iconType:e,clickable:!1,icon:B,iconLabel:A,className:T.icon,ignoreFocusStyle:!0,style:He,iconSize:20})}))}(),u(h,Object.assign({content:Ke?Ue:null,position:me,showDelay:ve},{children:u("div",Object.assign({ref:xe,className:T.title},{children:A}))})),R&&u("div",Object.assign({ref:xe,className:T.label},{children:R})),Oe?u("div",Object.assign({className:T.subMenuIconWrapper},{children:u(I,{clickable:!1,icon:y,iconLabel:A,className:T.subMenuIcon,ignoreFocusStyle:!0,iconSize:20})})):null,u("div",Object.assign({style:Object.assign(Object.assign({},Le.popper),{visibility:Ce?"visible":"hidden"})},Re.popper,{ref:Te},{children:E&&Ce&&u(j,{children:i.cloneElement(E,Object.assign(Object.assign({},null==E?void 0:E.props),{isVisible:Ce,isSubMenu:!0,onClose:Fe,ref:ke,useDocumentEventListeners:ce}))})})))}));Object.assign(w,{isSelectable:!0,isMenuChild:!0});var E=k(w,{iconType:I.type,tooltipPositions:v});export{E as default};
