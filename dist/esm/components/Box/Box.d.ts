import React, { ReactElement } from "react";
import { BackgroundColor, Border, BorderColor, Color, Margin, MarginBottom, MarginEnd, MarginStart, MarginTop, MarginX, MarginY, Padding, PaddingBottom, PaddingEnd, PaddingStart, PaddingTop, PaddingX, PaddingY, Rounded, Shadow } from "./BoxConstants";
import { ValueOf, VibeComponent, VibeComponentProps } from "../../types";
interface BoxProps extends VibeComponentProps {
    elementType?: keyof JSX.IntrinsicElements | string;
    children?: ReactElement | ReactElement[];
    disabled?: boolean;
    border?: ValueOf<Border>;
    borderColor?: ValueOf<BorderColor>;
    rounded?: ValueOf<Rounded>;
    shadow?: ValueOf<Shadow>;
    margin?: ValueOf<Margin>;
    marginX?: ValueOf<MarginX>;
    marginY?: ValueOf<MarginY>;
    marginTop?: ValueOf<MarginTop>;
    marginEnd?: ValueOf<MarginEnd>;
    marginBottom?: ValueOf<MarginBottom>;
    marginStart?: ValueOf<MarginStart>;
    padding?: ValueOf<Padding>;
    paddingX?: ValueOf<PaddingX>;
    paddingY?: ValueOf<PaddingY>;
    paddingTop?: ValueOf<PaddingTop>;
    paddingEnd?: ValueOf<PaddingEnd>;
    paddingBottom?: ValueOf<PaddingBottom>;
    paddingStart?: ValueOf<PaddingStart>;
    backgroundColor?: ValueOf<BackgroundColor>;
    textColor?: ValueOf<Color>;
}
declare const _default: ((VibeComponent<BoxProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    borders: Readonly<{
        DEFAULT: string;
    }>;
    borderColors: Readonly<{
        UI_BORDER_COLOR: string;
        LAYOUT_BORDER_COLOR: string;
    }>;
    roundeds: Readonly<{
        SMALL: string;
        MEDIUM: string;
        BIG: string;
    }>;
    shadows: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
    }>;
    margins: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginXs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginYs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginTops: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginEnds: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginBottoms: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginStarts: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddings: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingXs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingYs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingTops: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingEnds: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingBottoms: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingStarts: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    backgroundColors: Readonly<{
        PRIMARY_BACKGROUND_COLOR: string;
        SECONDARY_BACKGROUND_COLOR: string;
        GREY_BACKGROUND_COLOR: string;
        ALL_GREY_BACKGROUND_COLOR: string;
        INVERTED_COLOR_BACKGROUND: string;
    }>;
    textColors: Readonly<{
        PRIMARY_TEXT_COLOR: string;
        TEXT_COLOR_ON_INVERTED: string;
        SECONDARY_TEXT_COLOR: string;
    }>;
}>) | (React.FC<BoxProps & React.RefAttributes<HTMLElement>> & Partial<{
    borders: Readonly<{
        DEFAULT: string;
    }>;
    borderColors: Readonly<{
        UI_BORDER_COLOR: string;
        LAYOUT_BORDER_COLOR: string;
    }>;
    roundeds: Readonly<{
        SMALL: string;
        MEDIUM: string;
        BIG: string;
    }>;
    shadows: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
    }>;
    margins: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginXs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginYs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginTops: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginEnds: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginBottoms: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginStarts: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddings: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingXs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingYs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingTops: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingEnds: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingBottoms: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingStarts: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    backgroundColors: Readonly<{
        PRIMARY_BACKGROUND_COLOR: string;
        SECONDARY_BACKGROUND_COLOR: string;
        GREY_BACKGROUND_COLOR: string;
        ALL_GREY_BACKGROUND_COLOR: string;
        INVERTED_COLOR_BACKGROUND: string;
    }>;
    textColors: Readonly<{
        PRIMARY_TEXT_COLOR: string;
        TEXT_COLOR_ON_INVERTED: string;
        SECONDARY_TEXT_COLOR: string;
    }>;
}>)) & {
    borders: Readonly<{
        DEFAULT: string;
    }>;
    borderColors: Readonly<{
        UI_BORDER_COLOR: string;
        LAYOUT_BORDER_COLOR: string;
    }>;
    roundeds: Readonly<{
        SMALL: string;
        MEDIUM: string;
        BIG: string;
    }>;
    shadows: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
    }>;
    margins: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginXs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginYs: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginTops: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginEnds: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginBottoms: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    marginStarts: Readonly<{
        AUTO: string;
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddings: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingXs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingYs: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingTops: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingEnds: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingBottoms: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    paddingStarts: Readonly<{
        XS: string;
        SMALL: string;
        MEDIUM: string;
        LARGE: string;
        XL: string;
        XXL: string;
        XXXL: string;
    }>;
    backgroundColors: Readonly<{
        PRIMARY_BACKGROUND_COLOR: string;
        SECONDARY_BACKGROUND_COLOR: string;
        GREY_BACKGROUND_COLOR: string;
        ALL_GREY_BACKGROUND_COLOR: string;
        INVERTED_COLOR_BACKGROUND: string;
    }>;
    textColors: Readonly<{
        PRIMARY_TEXT_COLOR: string;
        TEXT_COLOR_ON_INVERTED: string;
        SECONDARY_TEXT_COLOR: string;
    }>;
};
export default _default;
