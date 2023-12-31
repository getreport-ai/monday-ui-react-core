import { A11yDialogType } from "./ModalHelper";
export default function useShowHideModal({ instance, show, triggerElement, onClose, alertDialog }: {
    instance: A11yDialogType;
    show: boolean;
    triggerElement: Element;
    onClose: () => void;
    alertDialog: boolean;
}): void;
