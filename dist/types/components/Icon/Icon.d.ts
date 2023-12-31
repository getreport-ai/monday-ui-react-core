import React, { CSSProperties, Ref } from "react";
import { IconType } from "./IconConstants";
import { VibeComponentProps, VibeComponent, MouseEventCallBack, SubIcon } from "../../types";
export interface IconSubComponentProps {
    ref?: Ref<HTMLElement>;
    id?: string;
    size?: string | number;
    onClick?: MouseEventCallBack;
    className?: string;
    style?: CSSProperties;
    "data-testid"?: string;
}
interface IconProps extends VibeComponentProps {
    onClick?: (event: React.MouseEvent) => void;
    /**
     * We support three types of icons - SVG, FONT and SRC (classname) so this prop is either the name of the icon or the component
     */
    icon: SubIcon;
    /**
     * Is icon is a button
     */
    clickable?: boolean;
    /**
  mo   * Icon aria label [aria label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
     */
    iconLabel?: string;
    /**
     *  The type of the component - svg, font or custom svg (using [`react-inlinesvg`](https://github.com/gilbarbara/react-inlinesvg#readme))
     */
    iconType?: IconType;
    /**
     * Size for font icon
     */
    iconSize?: number | string;
    /**
     * Remove focus style
     */
    ignoreFocusStyle?: boolean;
    tabindex?: number | string;
    /**
     * Hide icon asset from screen reader. No need to set value for this prop when `clickable` is false
     */
    ariaHidden?: boolean;
    style?: React.CSSProperties;
    /**
     * When using svg from src (Icon.type.SRC) this boolean will transform the "fill" property to "currentColor"
     */
    useCurrentColor?: boolean;
    /**
     * Override the default color with a custom one
     */
    customColor?: string;
}
declare const _default: ((VibeComponent<IconProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    type: typeof IconType;
}>) | (React.FC<IconProps & React.RefAttributes<HTMLElement>> & Partial<{
    type: typeof IconType;
}>)) & {
    type: typeof IconType;
};
export default _default;
