import React, { ReactElement } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { VibeComponent } from "../../../types";
import { SliderSize } from "../SliderConstants";
interface SliderRailProps extends VibeComponentProps {
    /**
     * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
     */
    className?: string;
    /**
     * onClick callback function
     */
    onClick?: (event: React.MouseEvent) => void;
    children?: ReactElement | ReactElement[];
    size: SliderSize;
}
declare const SliderRail: VibeComponent<SliderRailProps, unknown>;
export default SliderRail;
