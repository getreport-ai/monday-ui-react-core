import React from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { ClickableProps } from "../Clickable/Clickable";
interface ClickableWrapperProps extends VibeComponentProps {
    children: React.ReactNode;
    isClickable: boolean;
    clickableProps: ClickableProps;
}
declare const ClickableWrapper: VibeComponent<ClickableWrapperProps, HTMLElement>;
export default ClickableWrapper;
