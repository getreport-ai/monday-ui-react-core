import React from "react";
import { AvatarSize, AvatarType } from "./AvatarConstants";
import { SubIcon, VibeComponentProps } from "../../types";
interface AvatarContentProps extends VibeComponentProps {
    src?: string;
    type?: AvatarType;
    size?: AvatarSize;
    role?: string;
    ariaLabel?: string;
    /** we support two types of icons - SVG and FONT (classname) so this prop is either the name of the icon or the component */
    icon?: SubIcon;
    textClassName?: string;
    text?: string;
}
export declare const AvatarContent: React.FC<AvatarContentProps> & {
    sizes?: typeof AvatarSize;
    types?: typeof AvatarType;
};
export {};
