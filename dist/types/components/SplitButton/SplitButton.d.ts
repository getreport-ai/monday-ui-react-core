import React, { ReactElement } from "react";
import { SplitButtonSecondaryContentPosition } from "./SplitButtonConstants";
import { DialogPosition } from "../../constants";
import { ButtonProps } from "../Button/Button";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
export interface SplitButtonProps extends ButtonProps {
    secondaryDialogContent?: ReactElement | (() => string | ReactElement);
    onSecondaryDialogDidShow?: () => void;
    onSecondaryDialogDidHide?: () => void;
    zIndex?: number;
    secondaryDialogClassName?: string;
    secondaryDialogPosition?: DialogPosition;
    dialogPaddingSize?: typeof DialogContentContainer.sizes[keyof typeof DialogContentContainer.sizes];
    /**
     * the container selector in which to append the dialog
     * for examples: "body" , ".my-class", "#my-id"
     */
    dialogContainerSelector?: string;
    shouldCloseOnClickInsideDialog?: boolean;
}
declare const _default: ((import("../../types/VibeComponent").default<SplitButtonProps, unknown> & Partial<{
    secondaryPositions: typeof SplitButtonSecondaryContentPosition;
    secondaryDialogPositions: typeof SplitButtonSecondaryContentPosition;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    colors: typeof import("../Button/ButtonConstants").ButtonColor;
    kinds: typeof import("../Button/ButtonConstants").ButtonType;
    inputTags: typeof import("../Button/ButtonConstants").ButtonInputType;
    dialogPaddingSizes: typeof import("../DialogContentContainer/DialogContentContainerConstants").DialogSize;
}>) | (React.FC<SplitButtonProps> & Partial<{
    secondaryPositions: typeof SplitButtonSecondaryContentPosition;
    secondaryDialogPositions: typeof SplitButtonSecondaryContentPosition;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    colors: typeof import("../Button/ButtonConstants").ButtonColor;
    kinds: typeof import("../Button/ButtonConstants").ButtonType;
    inputTags: typeof import("../Button/ButtonConstants").ButtonInputType;
    dialogPaddingSizes: typeof import("../DialogContentContainer/DialogContentContainerConstants").DialogSize;
}>)) & {
    secondaryPositions: typeof SplitButtonSecondaryContentPosition;
    secondaryDialogPositions: typeof SplitButtonSecondaryContentPosition;
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
    colors: typeof import("../Button/ButtonConstants").ButtonColor;
    kinds: typeof import("../Button/ButtonConstants").ButtonType;
    inputTags: typeof import("../Button/ButtonConstants").ButtonInputType;
    dialogPaddingSizes: typeof import("../DialogContentContainer/DialogContentContainerConstants").DialogSize;
};
export default _default;
