import { FC } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { SliderColor } from "../SliderConstants";
interface SliderFilledTrackProps extends VibeComponentProps {
    /**
     * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
     */
    className?: string;
    /**
     * Size of filled track, according to selected value of component (Slider)
     */
    dimension?: number;
    /**
     * Offset from start of track
     */
    offset?: number;
    /**
     * Start Filled Track from the end of the track
     * (`right` for LTR and `left` for RTL, `bottom` for vertical)
     */
    reverse?: boolean;
    color: SliderColor;
}
declare const SliderFilledTrack: FC<SliderFilledTrackProps>;
export default SliderFilledTrack;
