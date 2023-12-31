import { VibeComponent, VibeComponentProps } from "../../types";
interface ToggleProps extends VibeComponentProps {
    componentClassName?: string;
    /**
     * ClassName to override styles of selected toggle
     */
    toggleSelectedClassName?: string;
    isDefaultSelected?: boolean;
    isSelected?: boolean;
    onChange?: (value: boolean) => void;
    value?: string;
    name?: string;
    isDisabled?: boolean;
    disabled?: boolean;
    areLabelsHidden?: boolean;
    onOverrideText?: string;
    offOverrideText?: string;
    ariaLabel?: string;
    ariaControls?: string;
}
declare const Toggle: VibeComponent<ToggleProps, HTMLInputElement>;
export default Toggle;
