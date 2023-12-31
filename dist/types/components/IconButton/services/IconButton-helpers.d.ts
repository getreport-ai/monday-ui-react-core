import { SIZES } from "./../../../constants/sizes";
export type Size = typeof SIZES[keyof typeof SIZES];
export declare function getWidthHeight(size: Size): {
    width: string;
    height: string;
};
