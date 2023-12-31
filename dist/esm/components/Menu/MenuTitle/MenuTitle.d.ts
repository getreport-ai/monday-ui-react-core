import React from "react";
import { MenuTitleCaptionPosition } from "./MenuTitleConstants";
import { VibeComponentProps } from "../../../types";
interface MenuTitleProps extends VibeComponentProps {
    /** Backward compatibility for props naming **/
    classname?: string;
    caption?: string;
    captionPosition?: MenuTitleCaptionPosition;
}
declare const _default: ((import("../../../types/VibeComponent").default<MenuTitleProps, unknown> & Partial<{
    positions: typeof MenuTitleCaptionPosition;
    captionPositions: typeof MenuTitleCaptionPosition;
}>) | (React.FC<MenuTitleProps> & Partial<{
    positions: typeof MenuTitleCaptionPosition;
    captionPositions: typeof MenuTitleCaptionPosition;
}>)) & {
    positions: typeof MenuTitleCaptionPosition;
    captionPositions: typeof MenuTitleCaptionPosition;
};
export default _default;
