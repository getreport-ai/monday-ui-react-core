import React from "react";
import { TypographyColor } from "../Typography/TypographyConstants";
declare type AlertBannerContextType = {
    textColor: TypographyColor.ON_PRIMARY | TypographyColor.ON_INVERTED;
};
export declare const AlertBannerContext: React.Context<AlertBannerContextType>;
export {};
