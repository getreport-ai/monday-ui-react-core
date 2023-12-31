import React from "react";
import { InfixKind } from "./SliderConstants";
import { VibeComponentProps } from "../../types";
interface SliderInfixProps extends VibeComponentProps {
    /**
     * kind (type/mode) of Infix prefix/postfix
     * Infix - additional inserted by Consumer - component/string/number etc.
     */
    kind?: InfixKind;
}
declare const _default: ((import("../../types/VibeComponent").default<SliderInfixProps, unknown> & Partial<{
    kinds: typeof InfixKind;
}>) | (React.FC<SliderInfixProps> & Partial<{
    kinds: typeof InfixKind;
}>)) & {
    kinds: typeof InfixKind;
};
export default _default;
