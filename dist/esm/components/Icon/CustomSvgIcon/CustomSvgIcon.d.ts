import React, { FunctionComponent, AriaRole, Ref } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
interface CustomSvgIconProps extends VibeComponentProps {
    onClick?: (event: React.MouseEvent) => void;
    src: string | object;
    ariaLabel?: string;
    tabIndex?: number;
    role?: AriaRole;
    ariaHidden?: boolean;
    clickable?: boolean;
    replaceToCurrentColor?: boolean;
    customColor?: string;
    ref?: Ref<SVGElement>;
}
declare const CustomSvgIcon: FunctionComponent<CustomSvgIconProps>;
export default CustomSvgIcon;
