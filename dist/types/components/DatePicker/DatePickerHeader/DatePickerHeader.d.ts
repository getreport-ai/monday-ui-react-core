import { Moment } from "../types";
interface DatePickerHeaderProps {
    currentDate: Moment;
    isMonthYearSelection: boolean;
    onToggleMonthYearPicker: () => void;
    hideNavigationKeys: boolean;
    "data-testid"?: string;
}
declare const DatePickerHeader: (props: DatePickerHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default DatePickerHeader;
