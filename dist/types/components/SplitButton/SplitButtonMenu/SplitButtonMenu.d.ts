import React from "react";
import VibeComponent from "../../../types/VibeComponent";
import { MenuProps } from "../../Menu/Menu/Menu";
type SplitButtonMenuProps = Omit<MenuProps, "focusItemIndexOnMount"> & {
    children: React.ReactNode;
};
declare const SplitButtonMenu: VibeComponent<SplitButtonMenuProps>;
export default SplitButtonMenu;
