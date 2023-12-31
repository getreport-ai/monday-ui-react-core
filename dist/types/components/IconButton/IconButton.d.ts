import React from "react";
import { TooltipProps } from "../Tooltip/Tooltip";
import { Size } from "./services/IconButton-helpers";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../types";
import { ButtonColor, ButtonType } from "../Button/ButtonConstants";
export interface IconButtonProps extends VibeComponentProps {
    /**
     * id to be added to the element
     */
    id?: string;
    /**
     * callback function when clicking the icon button
     */
    onClick?: (event: React.MouseEvent) => void;
    /**
     * the class name of the button wrapper
     */
    wrapperClassName?: string;
    /**
     * the class name of the button icon
     */
    iconClassName?: string;
    /**
     * Icon to be rendered
     */
    icon?: SubIcon;
    /**
     * a11y property to be added, used for screen reader to know what kind of button it is
     */
    ariaLabel?: string;
    /**
     * a11y property to be added, used for screen reader to know if the button is expanded
     */
    ariaExpanded?: boolean;
    /**
     * Size of the icon
     */
    size?: Size;
    /**
     * Whether the tooltip should be displayed or not
     */
    hideTooltip?: boolean;
    /**
     * Props for Tooltip component
     */
    tooltipProps?: Partial<TooltipProps>;
    /**
     * Tooltip wraps the button icon, it will display in the tooltip, if not present the aria label will be shown
     */
    tooltipContent?: string;
    /**
     * Kind of button - like <Button />
     */
    kind?: ButtonType;
    active?: boolean;
    /** The button's color  */
    color?: ButtonColor;
    /**
     * disabled state
     */
    disabled?: boolean;
    /**
     * if disabled - this will be shown in the tooltip
     */
    disabledReason?: string;
    dataTestId?: string;
    /** Change the focus indicator from around the button to within it */
    insetFocus?: boolean;
    /** Specifies the tab order of an element */
    tabIndex?: number;
}
declare const _default: ((VibeComponent<IconButtonProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    kinds: typeof ButtonType;
    colors: typeof ButtonColor;
}>) | (React.FC<IconButtonProps & React.RefAttributes<HTMLElement>> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    kinds: typeof ButtonType;
    colors: typeof ButtonColor;
}>)) & {
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    kinds: typeof ButtonType;
    colors: typeof ButtonColor;
};
export default _default;
