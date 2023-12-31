import VibeComponentProps from "../../../../types/VibeComponentProps";
import VibeComponent from "../../../../types/VibeComponent";
export interface ModalFooterButtonsProps extends VibeComponentProps {
    primaryButtonText: string;
    secondaryButtonText: string;
    onPrimaryButtonClick?: () => void;
    onSecondaryButtonClick?: () => void;
}
declare const ModalFooterButtons: VibeComponent<ModalFooterButtonsProps>;
export default ModalFooterButtons;
