import React from "react";
import { IconType } from "../Icon/IconConstants";
import { AttentionBoxType } from "./AttentionBoxConstants";
import { SubIcon, VibeComponentProps, ElementContent } from "../../types";
interface AttentionBoxProps extends VibeComponentProps {
    className?: string;
    componentClassName?: string;
    withIconWithoutHeader?: boolean;
    /** we support 5 types of attention boxes */
    type?: AttentionBoxType;
    /** Icon classname for icon font or SVG Icon Component for SVG Type */
    icon?: SubIcon;
    iconType?: IconType.SVG | IconType.ICON_FONT;
    title?: string;
    text?: string;
    children?: ElementContent;
    withoutIcon?: boolean;
    onClose?: (event: React.MouseEvent) => void;
    compact?: boolean;
}
declare const _default: ((import("../../types/VibeComponent").default<AttentionBoxProps, unknown> & Partial<{
    types: typeof AttentionBoxType;
    iconTypes: typeof IconType;
}>) | (React.FC<AttentionBoxProps> & Partial<{
    types: typeof AttentionBoxType;
    iconTypes: typeof IconType;
}>)) & {
    types: typeof AttentionBoxType;
    iconTypes: typeof IconType;
};
export default _default;
