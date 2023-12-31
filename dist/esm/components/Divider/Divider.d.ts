import React from "react";
import { DirectionType } from "./DividerConstants";
import { VibeComponentProps } from "../../types";
interface DividerProps extends VibeComponentProps {
    direction?: DirectionType;
    classname?: string;
    withoutMargin?: boolean;
}
declare const _default: ((import("../../types/VibeComponent").default<DividerProps, unknown> & Partial<{
    directions: typeof DirectionType;
}>) | (React.FC<DividerProps> & Partial<{
    directions: typeof DirectionType;
}>)) & {
    directions: typeof DirectionType;
};
export default _default;
