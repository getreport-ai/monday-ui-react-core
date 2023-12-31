import { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
interface ToggleTextProps extends VibeComponentProps {
    children: string;
    disabled: boolean;
}
declare const ToggleText: FC<ToggleTextProps>;
export default ToggleText;
