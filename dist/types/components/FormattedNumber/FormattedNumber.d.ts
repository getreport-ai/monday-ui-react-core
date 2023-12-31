import { formatNumber } from "../../helpers/textManipulations";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
interface FormattedNumberProps extends VibeComponentProps {
    /**
     * A numeric value to format.
     */
    value?: number | string;
    /**
     * If included, will be added as a prefix to the number.
     */
    prefix?: string;
    /**
     * If included, will be added as a suffix to the number.
     */
    suffix?: string;
    /**
     * The text that will be shown if no value is provided.
     */
    emptyPlaceHolder?: string;
    /**
     * Determines the number of decimal numbers (0 ~ 20).
     */
    decimalPrecision?: number;
    /**
     * Format number into compact number and initial (if required).
     */
    compact?: boolean;
    /**
     * Determines the number's local (Unicode BCP 47 locale identifier).
     */
    local?: string;
    /**
     * Determines suffix and prefix location
     */
    rtl?: boolean;
}
declare const FormattedNumber: VibeComponent<FormattedNumberProps, HTMLDivElement> & {
    formatNumber?: typeof formatNumber;
    localFallBack?: string;
};
export default FormattedNumber;
