import{useRef as i,useCallback as n,useMemo as o}from"react";function t(t){var r=t.onFocusWithin,s=t.onFocusWithinChange,u=t.isDisabled,c=t.onBlurWithin,e=i({isFocusWithin:!1}).current,h=n((function(i){e.isFocusWithin||(r&&r(i),s&&s(!0),e.isFocusWithin=!0)}),[r,s,e]),W=n((function(i){e.isFocusWithin&&!i.currentTarget.contains(i.relatedTarget)&&(c&&c(i),s&&s(!1),e.isFocusWithin=!1)}),[c,s,e]),a=o((function(){return u?{focusWithinProps:{}}:{}}),[u]);return u?a:{focusWithinProps:{onFocus:h,onBlur:W}}}export{t as useFocusWithin};
