import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
export interface StepsGalleryHeaderProps extends VibeComponentProps {
    activeStepIndex: number;
    stepsCount: number;
    onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
    stepDescriptionFunc: (stepIndex: number) => string;
    isOnPrimary?: boolean;
}
export declare const StepsGalleryHeader: FC<StepsGalleryHeaderProps>;
