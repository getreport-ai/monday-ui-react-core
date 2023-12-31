import React, { RefObject } from "react";
import { ComboboxOptionIconType, IComboboxOption, IComboboxOptionEvents } from "../ComboboxConstants";
interface ComboboxOptionProps extends IComboboxOptionEvents {
    index?: number;
    option?: IComboboxOption;
    className?: string;
    isActive?: boolean;
    visualFocus?: boolean;
    scrollRef?: RefObject<HTMLElement>;
    scrollOffset?: number;
    optionLineHeight?: number;
    shouldScrollWhenActive?: boolean;
    optionRenderer?: (option: IComboboxOption) => JSX.Element;
}
declare const _default: ((import("../../../../types/VibeComponent").default<ComboboxOptionProps, unknown> & Partial<{
    iconTypes: typeof ComboboxOptionIconType;
}>) | (React.FC<ComboboxOptionProps> & Partial<{
    iconTypes: typeof ComboboxOptionIconType;
}>)) & {
    iconTypes: typeof ComboboxOptionIconType;
};
export default _default;
