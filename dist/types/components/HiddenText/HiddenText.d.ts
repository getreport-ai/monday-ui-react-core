import React from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
interface HiddenTextProps extends VibeComponentProps {
    text: string;
}
declare const HiddenText: React.ForwardRefExoticComponent<HiddenTextProps & React.RefAttributes<HTMLSpanElement>>;
export default HiddenText;
