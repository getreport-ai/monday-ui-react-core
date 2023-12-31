import React from "react";
import { VibeComponentProps } from "../../types";
export interface CheckBoxProps extends VibeComponentProps {
    /** A classname to be added to the wrapping element */
    className?: string;
    /** deprecated */
    componentClassName?: string;
    /** A classname to be added to the cehckbox element label */
    checkboxClassName?: string;
    /** A classname to be added to the label element */
    labelClassName?: string;
    /** A11y prop to describe the content for screen readers */
    ariaLabel?: string;
    /** The content to be rendered within the option */
    label?: React.ReactNode | Array<React.ReactNode>;
    /** A11y prop - An Id of an element which describes this option  */
    ariaLabelledBy?: string;
    /** callback function when the value changes */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Use this when you want to control the component, this will set the state of the component  */
    checked?: boolean;
    /** An in between state to display a non selected */
    indeterminate?: boolean;
    /** Set the option to be disabled */
    disabled?: boolean;
    /** the default value which the checkbox will start from  */
    defaultChecked?: boolean;
    /** The input control's value. When specified in the HTML, this is the initial value, and from then on it can be altered or retrieved at any time using JavaScript to access the respective HTMLInputElement object's value property. The value attribute is always optional, though should be considered mandatory for checkbox, radio, and hidden.l */
    value?: string;
    /** A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. */
    name?: string;
    /** An id to be added the input element */
    id?: string;
}
declare const Checkbox: React.FC<CheckBoxProps>;
export default Checkbox;
