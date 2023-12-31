import React, { ReactElement } from "react";
import { AlertBannerBackgroundColor } from "./AlertBannerConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AlertBannerLinkProps } from "./AlertBannerLink/AlertBannerLink";
import { AlertBannerButtonProps } from "./AlertBannerButton/AlertBannerButton";
import { AlertBannerTextProps } from "./AlertBannerText/AlertBannerText";
import { VibeComponent } from "../../types";
interface AlertBannerProps extends VibeComponentProps {
    /**
     * Set external styling to the progress bar.
     */
    className?: string;
    backgroundColor?: AlertBannerBackgroundColor;
    isCloseHidden?: boolean;
    /** ARIA description for the progress bar */
    ariaLabel?: string;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: ReactElement<AlertBannerButtonProps | AlertBannerLinkProps | AlertBannerTextProps>;
}
declare const _default: ((VibeComponent<AlertBannerProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    backgroundColors: typeof AlertBannerBackgroundColor;
}>) | (React.FC<AlertBannerProps & React.RefAttributes<HTMLElement>> & Partial<{
    backgroundColors: typeof AlertBannerBackgroundColor;
}>)) & {
    backgroundColors: typeof AlertBannerBackgroundColor;
};
export default _default;
