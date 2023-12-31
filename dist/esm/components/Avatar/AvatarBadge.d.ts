import React from "react";
import { AvatarSize } from "./AvatarConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
export interface AvatarBadgeProps extends VibeComponentProps {
    src?: string;
    ariaLabel?: string;
    tabIndex?: string | number;
    className?: string;
    size?: string;
}
export declare const AvatarBadge: React.FC<AvatarBadgeProps> & {
    sizes?: typeof AvatarSize;
};
