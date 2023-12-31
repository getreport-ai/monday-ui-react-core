import { StepsDotAriaCurrent } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import React, { FC } from "react";
export interface StepsDotProps extends VibeComponentProps {
    onClick?: (e: React.MouseEvent) => void;
    ariaCurrent?: StepsDotAriaCurrent | boolean;
    isActive?: boolean;
    ariaLabel?: string;
    isOnPrimary?: boolean;
}
export declare const StepsDot: FC<StepsDotProps>;
