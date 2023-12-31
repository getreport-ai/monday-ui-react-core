import React from "react";
import { ButtonColor, ButtonInputType, ButtonType, Size } from "./ButtonConstants";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../types";
export interface ButtonProps extends VibeComponentProps {
    children?: React.ReactNode;
    /** Custom class names to pass to the component */
    className?: string;
    activeButtonClassName?: string;
    /** The button's kind */
    kind?: ButtonType;
    /** Callback function to run when the button is clicked */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Blur on button click */
    blurOnMouseUp?: boolean;
    /** Name of the button - for form submit usages  */
    name?: string;
    /** The button's size */
    size?: Size;
    /** The button's color */
    color?: ButtonColor;
    /** The button's type */
    type?: ButtonInputType;
    /** Whether the button should be disabled or not */
    disabled?: boolean;
    /** Icon to place on the right */
    rightIcon?: SubIcon;
    /** Icon to place on the left */
    leftIcon?: SubIcon;
    /** the success props are used when you have async action and wants to display a success message */
    success?: boolean;
    /** Success icon name */
    successIcon?: SubIcon;
    /** Success text */
    successText?: string;
    /** loading boolean which switches the text to a loader */
    loading?: boolean;
    style?: React.CSSProperties;
    /** displays the active state */
    active?: boolean;
    /** id to pass to the button */
    id?: string;
    /** adds 8px margin to the right */
    marginRight?: boolean;
    /** adds 8px margin to the left */
    marginLeft?: boolean;
    /** element id to describe the button accordingly */
    ariaLabeledBy?: string;
    /** aria label to provide important when providing only Icon */
    ariaLabel?: string;
    /** aria for a button popup */
    ariaHasPopup?: React.HTMLProps<HTMLButtonElement>["aria-haspopup"];
    /** aria to be set if the popup is open */
    ariaExpanded?: boolean;
    /** aria controls - receives id for the controlled region */
    ariaControls?: string;
    /** On Button Focus callback */
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    /** On Button Blur callback */
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    rightFlat?: boolean;
    leftFlat?: boolean;
    preventClickAnimation?: boolean;
    noSidePadding?: boolean;
    /** default color for text color in ON_PRIMARY_COLOR kind (should be any type of css color (rbg, var, hex...) */
    defaultTextColorOnPrimaryColor?: string;
    dataTestId?: string;
    "data-testid"?: string;
    /** Change the focus indicator from around the button to within it */
    insetFocus?: boolean;
    /** Specifies the tab order of an element */
    tabIndex?: number;
}
declare const _default: ((VibeComponent<ButtonProps & React.RefAttributes<unknown>, unknown> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    colors: typeof ButtonColor;
    kinds: typeof ButtonType;
    types: typeof ButtonInputType;
    inputTags: typeof ButtonInputType;
}>) | (React.FC<ButtonProps & React.RefAttributes<unknown>> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    colors: typeof ButtonColor;
    kinds: typeof ButtonType;
    types: typeof ButtonInputType;
    inputTags: typeof ButtonInputType;
}>)) & {
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    colors: typeof ButtonColor;
    kinds: typeof ButtonType;
    types: typeof ButtonInputType;
    inputTags: typeof ButtonInputType;
};
export default _default;
