import { ReactElement } from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { CloseMenuOption } from "../Menu/MenuConstants";
interface MenuGridItemProps extends VibeComponentProps {
    children?: ReactElement | ReactElement[];
    /** if true, keyboard navigation will skip on this item. Also, this prop will be passed on to the child **/
    disabled?: boolean;
    /** a callback to close the wrapping menu **/
    closeMenu?: (option: CloseMenuOption) => void;
    /** the currently active index of the wrapping menu **/
    activeItemIndex?: number;
    setActiveItemIndex?: (index: number) => void;
    getNextSelectableIndex?: (activeItemIndex: number) => number;
    getPreviousSelectableIndex?: (activeItemIndex: number) => number;
    /** the index of this item **/
    index?: number;
    /** true if this item is under a submenu, and not a top-level menu **/
    isUnderSubMenu?: boolean;
    setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
    useDocumentEventListeners?: boolean;
}
declare const MenuGridItem: VibeComponent<MenuGridItemProps> & {
    isMenuChild?: boolean;
    isSelectable?: boolean;
};
export default MenuGridItem;
