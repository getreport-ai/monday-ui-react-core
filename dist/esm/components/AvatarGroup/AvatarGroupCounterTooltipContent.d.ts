import React, { ReactElement, Ref } from "react";
import { AvatarProps } from "../Avatar/Avatar";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarType } from "../Avatar/AvatarConstants";
interface AvatarGroupCounterTooltipContentProps extends VibeComponentProps {
    className?: string;
    type?: AvatarType;
    /**
     * Array of Avatar components
     */
    avatars?: ReactElement<AvatarProps>[];
    isVirtualizedList?: boolean;
    tooltipContentContainerRef?: Ref<HTMLDivElement>;
}
declare const AvatarGroupCounterTooltipContent: React.FC<AvatarGroupCounterTooltipContentProps>;
export default AvatarGroupCounterTooltipContent;
