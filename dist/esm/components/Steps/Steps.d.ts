import React, { ReactElement } from "react";
import { StepsType } from "./StepsConstants";
import { ButtonProps } from "../Button/Button";
import { VibeComponent, VibeComponentProps } from "../../types";
export interface StepsProps extends VibeComponentProps {
    /**
     * The index of the current displayed step
     */
    activeStepIndex?: number;
    /**
     * A callback which called when the active step is changed
     */
    onChangeActiveStep?: (e: React.MouseEvent, stepIndex: number) => void;
    areNavigationButtonsHidden?: boolean;
    steps?: ReactElement[];
    type?: StepsType;
    isOnPrimary?: boolean;
    isContentOnTop?: boolean;
    areButtonsIconsHidden?: boolean;
    backButtonProps?: ButtonProps;
    nextButtonProps?: ButtonProps;
}
declare const _default: ((VibeComponent<StepsProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    types: typeof StepsType;
}>) | (React.FC<StepsProps & React.RefAttributes<HTMLElement>> & Partial<{
    types: typeof StepsType;
}>)) & {
    types: typeof StepsType;
};
export default _default;
