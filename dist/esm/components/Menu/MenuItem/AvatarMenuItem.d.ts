import React from "react";
import { MenuItemProps } from "./MenuItem";
import { AvatarProps } from "../../Avatar/Avatar";
import VibeComponentProps from "../../../types/VibeComponentProps";
interface AvatarMenuItemProps extends VibeComponentProps {
    avatarProps?: AvatarProps;
    menuItemProps?: MenuItemProps;
}
/**
 * MenuItem with Avatar instead of Icon
 */
declare const AvatarMenuItem: React.FC<AvatarMenuItemProps & {
    isMenuChild?: boolean;
    isSelectable?: boolean;
}>;
export default AvatarMenuItem;
