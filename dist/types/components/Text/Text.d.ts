import React, { ReactNode } from "react";
import VibeComponent from "../../types/VibeComponent";
import { TextType, TextWeight } from "./TextConstants";
import { TypographyProps } from "../Typography/Typography";
import { TypographyAlign, TypographyColor } from "../Typography/TypographyConstants";
export interface TextProps extends TypographyProps {
    type: TextType;
    weight?: TextWeight;
    paragraph?: boolean;
    children: ReactNode;
}
declare const _default: ((VibeComponent<TextProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    types: typeof TextType;
    weights: typeof TextWeight;
    colors: typeof TypographyColor;
    align: typeof TypographyAlign;
}>) | (React.FC<TextProps & React.RefAttributes<HTMLElement>> & Partial<{
    types: typeof TextType;
    weights: typeof TextWeight;
    colors: typeof TypographyColor;
    align: typeof TypographyAlign;
}>)) & {
    types: typeof TextType;
    weights: typeof TextWeight;
    colors: typeof TypographyColor;
    align: typeof TypographyAlign;
};
export default _default;
