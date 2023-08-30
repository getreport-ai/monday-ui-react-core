import React, { ReactNode } from "react";
import VibeComponent from "../../types/VibeComponent";
import { HeadingType, HeadingWeight } from "./TitleConstants";
import { TypographyProps } from "../Typography/Typography";
import { TypographyAlign, TypographyColor } from "../Typography/TypographyConstants";
export interface TitleProps extends TypographyProps {
    type?: HeadingType;
    weight?: HeadingWeight;
    align?: TypographyAlign;
    color?: TypographyColor;
    children: ReactNode;
}
declare const _default: ((VibeComponent<TitleProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    types: typeof HeadingType;
    weights: typeof HeadingWeight;
    align: typeof TypographyAlign;
    colors: typeof TypographyColor;
}>) | (React.FC<TitleProps & React.RefAttributes<HTMLElement>> & Partial<{
    types: typeof HeadingType;
    weights: typeof HeadingWeight;
    align: typeof TypographyAlign;
    colors: typeof TypographyColor;
}>)) & {
    types: typeof HeadingType;
    weights: typeof HeadingWeight;
    align: typeof TypographyAlign;
    colors: typeof TypographyColor;
};
export default _default;
