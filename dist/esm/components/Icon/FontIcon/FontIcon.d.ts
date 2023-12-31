import React, { AriaRole } from "react";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
interface FontIconProps extends VibeComponentProps {
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    "aria-label"?: string;
    tabIndex?: number;
    icon?: SubIcon;
    role?: AriaRole;
    "aria-hidden"?: boolean;
}
declare const FontIcon: VibeComponent<FontIconProps, HTMLElement>;
export default FontIcon;
