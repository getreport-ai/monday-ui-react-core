import { VibeComponentProps } from "../../../types";
import { FC } from "react";
interface MenuDividerProps extends VibeComponentProps {
    /** Backward compatibility for props naming **/
    classname?: string;
}
declare const MenuDivider: FC<MenuDividerProps> & {
    isMenuChild?: boolean;
};
export default MenuDivider;
