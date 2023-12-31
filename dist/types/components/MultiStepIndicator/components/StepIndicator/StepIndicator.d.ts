import React from "react";
import { Size, MultiStepType, StepStatus } from "../../MultiStepConstants";
import { SubIcon, VibeComponentProps } from "../../../../types";
import { IconType } from "../../../Icon/IconConstants";
export interface StepIndicatorProps extends VibeComponentProps {
    status: StepStatus;
    titleText: string;
    subtitleText?: string;
    stepNumber?: number;
    stepComponentClassName?: string;
    type?: MultiStepType;
    fulfilledStepIcon?: SubIcon;
    fulfilledStepIconType?: IconType.SVG | IconType.ICON_FONT;
    isFulfilledStepDisplayNumber?: boolean;
    onClick?: (stepNumber: number) => void;
    isFollowedByDivider?: boolean;
    stepDividerClassName?: string;
    isVertical?: boolean;
    size?: Size;
}
declare const StepIndicator: React.FC<StepIndicatorProps>;
export default StepIndicator;
