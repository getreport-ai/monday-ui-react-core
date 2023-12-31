import React from "react";
import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from "./FlexConstants";
import { ElementContent, VibeComponent, VibeComponentProps } from "../../types";
interface FlexProps extends VibeComponentProps {
    style?: object;
    direction?: FlexDirection;
    elementType?: React.ElementType;
    wrap?: boolean;
    children?: ElementContent | ElementContent[];
    justify?: FlexJustify;
    align?: FlexAlign;
    gap?: FlexGap | number;
    ariaLabel?: string;
    tabIndex?: number;
    /** onClick function - MouseEvent */
    onClick?: (event: React.MouseEvent) => void;
    /** element id to describe the counter accordingly */
    ariaLabelledby?: string;
}
declare const _default: ((VibeComponent<FlexProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    justify: typeof FlexJustify;
    align: typeof FlexAlign;
    gaps: typeof FlexGap;
    directions: typeof FlexDirection;
}>) | (React.FC<FlexProps & React.RefAttributes<HTMLElement>> & Partial<{
    justify: typeof FlexJustify;
    align: typeof FlexAlign;
    gaps: typeof FlexGap;
    directions: typeof FlexDirection;
}>)) & {
    justify: typeof FlexJustify;
    align: typeof FlexAlign;
    gaps: typeof FlexGap;
    directions: typeof FlexDirection;
};
export default _default;
