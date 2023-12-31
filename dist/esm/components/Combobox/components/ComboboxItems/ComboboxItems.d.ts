import React from "react";
import { IComboboxCategoryMap, IComboboxItem, IComboboxOption, IComboboxOptionEvents } from "../ComboboxConstants";
interface ComboboxItemsProps extends IComboboxOptionEvents {
    className?: string;
    optionClassName?: string;
    categories?: IComboboxCategoryMap;
    options?: IComboboxItem[];
    optionRenderer?: (option: IComboboxOption) => JSX.Element;
    activeItemIndex?: number;
    visualFocusItemIndex?: number;
    optionLineHeight?: number;
    shouldScrollToSelectedItem?: boolean;
    renderOnlyVisibleOptions?: boolean;
    onActiveCategoryChanged?: (category: IComboboxItem) => void;
    maxOptionsWithoutScroll?: number;
    itemsMap?: Map<string, IComboboxItem>;
}
export declare const ComboboxItems: React.FC<ComboboxItemsProps>;
export {};
