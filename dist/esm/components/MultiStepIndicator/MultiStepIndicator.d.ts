import React from "react";
import { Size, MultiStepType, StepStatus, TextPlacement } from "./MultiStepConstants";
import { VibeComponentProps, VibeComponent, SubIcon } from "../../types";
import { IconType } from "../Icon/IconConstants";
export declare type Step = {
    titleText: string;
    subtitleText: string;
    status: StepStatus;
};
interface MultiStepIndicatorProps extends VibeComponentProps {
    steps?: Step[];
    type?: MultiStepType;
    stepComponentClassName?: string;
    dividerComponentClassName?: string;
    fulfilledStepIcon?: SubIcon;
    fulfilledStepIconType?: IconType.SVG | IconType.ICON_FONT;
    isFulfilledStepDisplayNumber?: boolean;
    onClick?: (stepNumber: number) => void;
    textPlacement?: TextPlacement;
    size?: Size;
}
declare const _default: ((VibeComponent<MultiStepIndicatorProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    types: typeof MultiStepType;
    stepStatuses: typeof StepStatus;
    textPlacements: typeof TextPlacement;
    sizes: typeof Size;
}>) | (React.FC<MultiStepIndicatorProps & React.RefAttributes<HTMLElement>> & Partial<{
    types: typeof MultiStepType;
    stepStatuses: typeof StepStatus;
    textPlacements: typeof TextPlacement;
    sizes: typeof Size;
}>)) & {
    types: typeof MultiStepType;
    stepStatuses: typeof StepStatus;
    textPlacements: typeof TextPlacement;
    sizes: typeof Size;
};
export default _default;
