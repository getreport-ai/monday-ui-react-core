import React from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
interface RadioButtonProps extends VibeComponentProps {
    /**  class to be added to wrapping component */
    className?: string;
    /** deprecated */
    componentClassName?: string;
    /** class to add to the  text/label */
    labelClassName?: string;
    /** class to be added to the radiobutton */
    radioButtonClassName?: string;
    /** text value */
    text?: string;
    /** The input control's value. When specified in the HTML, this is the initial value, and from then on it can be altered or retrieved at any time using JavaScript to access the respective HTMLInputElement object's value property. The value attribute is always optional, though should be considered mandatory for checkbox, radio, and hidden.l */
    value?: string;
    /** A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. */
    name?: string;
    /** is disabled */
    disabled?: boolean;
    /** why the input is disabled */
    disabledReason?: string;
    /** default checked value*/
    defaultChecked?: boolean;
    children?: React.ReactNode;
    /** callback function when value changed */
    onSelect?: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
    /** controlled the radio button state */
    checked?: boolean;
    /** react to click on children */
    retainChildClick?: boolean;
    /** add tab index to the children */
    childrenTabIndex?: string;
    /** disabled animation */
    noLabelAnimation?: boolean;
}
declare const RadioButton: VibeComponent<RadioButtonProps, HTMLElement> & object;
export default RadioButton;
