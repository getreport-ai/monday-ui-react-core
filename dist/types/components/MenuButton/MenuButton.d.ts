import React from "react";
import { ElementContent, VibeComponent, VibeComponentProps } from "../../types";
import { MenuButtonComponentPosition, MenuButtonSize } from "./MenuButtonConstants";
import { DialogOffset, DialogPosition } from "../../constants";
import { HideShowEvent } from "../Dialog/consts/dialog-show-hide-event";
import { DialogSize } from "../DialogContentContainer/DialogContentContainerConstants";
interface MenuButtonProps extends VibeComponentProps {
    /**
     * Backward compatibility for props naming
     */
    componentClassName?: string;
    /**
     * Control the button's selected state
     */
    active?: boolean;
    /**
     *Class name to add to the button when the dialog is open
     */
    openDialogComponentClassName?: string;
    /**
     * Receives React Component
     */
    component?: () => JSX.Element;
    size?: MenuButtonSize;
    open?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    zIndex?: number;
    ariaLabel?: string;
    closeDialogOnContentClick?: boolean;
    dialogClassName?: string;
    /**
     * main - `dialogOffset.main` - main axis offset; `dialogOffset.secondary` secondary axis offset
     */
    dialogOffset?: DialogOffset;
    dialogPaddingSize?: DialogSize;
    dialogPosition?: DialogPosition;
    dialogShowTriggerIgnoreClass?: string;
    dialogHideTriggerIgnoreClass?: string;
    /**
     * the container selector in which to append the dialog
     * for examples: "body" , ".my-class", "#my-id"
     */
    dialogContainerSelector?: string;
    /**
     * Dialog Alignment
     */
    startingEdge?: string;
    onMenuShow?: () => void;
    onMenuHide?: () => void;
    /**
     * Text to be displayed after the icon
     */
    text?: string;
    disabled?: boolean;
    tooltipContent?: string;
    /**
     Remove "Tab" key from the hide trigger
     */
    removeTabCloseTrigger?: boolean;
    /**
     is an array with the content of types:
     CLICK, CLICK_OUTSIDE, ESCAPE_KEY, TAB_KEY, MOUSE_ENTER, MOUSE_LEAVE,
     ENTER, MOUSE_DOWN, FOCUS, BLUR, CONTENT_CLICK
     */
    tooltipTriggers?: HideShowEvent | HideShowEvent[];
    /**
     * the disabled/tooltip position of the menu button - one of the MenuButton.dialogPositions
     */
    tooltipPosition?: DialogPosition;
    /**
     * Tooltip Element Wrapper ClassName
     */
    tooltipReferenceClassName?: string;
    /**
     * When the MenuButton is hidden hide the dialog and tooltip as well
     */
    hideWhenReferenceHidden?: boolean;
    /**
     * Backward compatibility for props naming
     */
    disabledReason?: boolean;
    children?: ElementContent;
    /**
     * Specifies whether to render the component before or after the text
     */
    componentPosition?: typeof MenuButtonComponentPosition[keyof typeof MenuButtonComponentPosition];
}
declare const _default: ((VibeComponent<MenuButtonProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    sizes: typeof MenuButtonSize;
    paddingSizes: typeof DialogSize;
    dialogPositions: typeof DialogPosition;
    hideTriggers: typeof import("../../constants").HideShowEvent;
    componentPositions: typeof MenuButtonComponentPosition;
}>) | (React.FC<MenuButtonProps & React.RefAttributes<HTMLElement>> & Partial<{
    sizes: typeof MenuButtonSize;
    paddingSizes: typeof DialogSize;
    dialogPositions: typeof DialogPosition;
    hideTriggers: typeof import("../../constants").HideShowEvent;
    componentPositions: typeof MenuButtonComponentPosition;
}>)) & {
    sizes: typeof MenuButtonSize;
    paddingSizes: typeof DialogSize;
    dialogPositions: typeof DialogPosition;
    hideTriggers: typeof import("../../constants").HideShowEvent;
    componentPositions: typeof MenuButtonComponentPosition;
};
export default _default;
