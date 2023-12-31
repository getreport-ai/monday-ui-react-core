import { FC } from "react";
import VibeComponentProps from "src/types/VibeComponentProps";
import { ProgressBarStyle, ProgressBarType } from "../LinearProgressBarConstants";
interface BarProps extends VibeComponentProps {
    /**
     * Determine the progress bar style (Supported options exposed through `LinearProgressBar.styles`).
     */
    barStyle?: ProgressBarStyle;
    /**
     * The progress bar starting value.
     */
    min?: number;
    /**
     * The progress bar ending value.
     */
    max?: number;
    /**
     * The progress bar current value.
     */
    value?: number;
    /**
     * If set to *true*, animations are used.
     */
    animated?: boolean;
    baseClass?: string;
    barLabelName?: string;
    color?: string;
    type?: ProgressBarType;
    className?: string;
}
declare const Bar: FC<BarProps>;
export default Bar;
