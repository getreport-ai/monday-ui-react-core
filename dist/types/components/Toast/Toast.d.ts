import React, { ReactElement } from "react";
import { IconSubComponentProps } from "../../components/Icon/Icon";
import { ToastAction, ToastActionType, ToastType } from "./ToastConstants";
import { VibeComponentProps } from "../../types";
interface ToastProps extends VibeComponentProps {
    actions?: ToastAction[];
    /** If true, Toast is open (visible) */
    open?: boolean;
    type?: ToastType;
    /** Possible to override the default icon */
    icon?: string | React.FC<IconSubComponentProps> | null;
    /** If true, won't show the icon */
    hideIcon?: boolean;
    /** The action to display */
    action?: JSX.Element;
    /** If false, won't show the close button */
    closeable?: boolean;
    onClose?: () => void;
    /** The number of milliseconds to wait before
     * automatically closing the Toast
     * (0 or null cancels this behaviour) */
    autoHideDuration?: number;
    children?: ReactElement | ReactElement[] | string;
}
declare const _default: ((import("../../types/VibeComponent").default<ToastProps, unknown> & Partial<{
    types: typeof ToastType;
    actionTypes: typeof ToastActionType;
}>) | (React.FC<ToastProps> & Partial<{
    types: typeof ToastType;
    actionTypes: typeof ToastActionType;
}>)) & {
    types: typeof ToastType;
    actionTypes: typeof ToastActionType;
};
export default _default;
