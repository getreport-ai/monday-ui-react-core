import React from "react";
import { SkeletonSizeType, SkeletonType, TextSkeletonSize } from "./SkeletonConstants";
import { VibeComponentProps } from "../../types";
interface SkeletonProps extends VibeComponentProps {
    type?: SkeletonType;
    size?: SkeletonSizeType;
    width?: number;
    height?: number;
    wrapperClassName?: string;
    /**
     * Is the skeleton wrapper width equal to its container
     */
    fullWidth?: boolean;
}
declare const _default: ((import("../../types/VibeComponent").default<SkeletonProps, unknown> & Partial<{
    types: typeof SkeletonType;
    sizes: {
        CUSTOM: string;
        CIRCLE: {};
        RECTANGLE: {};
        TEXT: typeof TextSkeletonSize;
    };
}>) | (React.FC<SkeletonProps> & Partial<{
    types: typeof SkeletonType;
    sizes: {
        CUSTOM: string;
        CIRCLE: {};
        RECTANGLE: {};
        TEXT: typeof TextSkeletonSize;
    };
}>)) & {
    types: typeof SkeletonType;
    sizes: {
        CUSTOM: string;
        CIRCLE: {};
        RECTANGLE: {};
        TEXT: typeof TextSkeletonSize;
    };
};
export default _default;
