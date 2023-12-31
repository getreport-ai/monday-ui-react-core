import React from "react";
import { DialogSize, DialogType } from "./DialogContentContainerConstants";
import { VibeComponentProps, VibeComponent } from "../../types";
interface DialogContentContainerProps extends VibeComponentProps {
    children?: React.ReactNode;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    type?: DialogType;
    size?: DialogSize;
    style?: React.CSSProperties;
}
declare const _default: ((VibeComponent<DialogContentContainerProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    types: typeof DialogType;
    sizes: typeof DialogSize;
}>) | (React.FC<DialogContentContainerProps & React.RefAttributes<HTMLElement>> & Partial<{
    types: typeof DialogType;
    sizes: typeof DialogSize;
}>)) & {
    types: typeof DialogType;
    sizes: typeof DialogSize;
};
export default _default;
