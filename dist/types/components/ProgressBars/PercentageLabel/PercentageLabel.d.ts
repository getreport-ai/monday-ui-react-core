import { FC } from "react";
interface PercentageLabelProps {
    /**
     * Replacement to `htmlFor` | `for` attribute.
     */
    forElement: string;
    /**
     * Determine the displayed percentage.
     */
    value: number;
}
declare const PercentageLabel: FC<PercentageLabelProps>;
export default PercentageLabel;
