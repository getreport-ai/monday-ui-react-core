import React from "react";
import { SubIcon, VibeComponentProps } from "../../../types";
export interface BreadcrumbItemProps extends VibeComponentProps {
    /** The display text. */
    text?: string;
    /** Should item be disabled. */
    disabled?: boolean;
    /** Backward compatibility for props naming */
    isDisabled?: boolean;
    /** Should item be clickable - this should be recieved from the breadcrumbsBar ( Navigation/Indication bar ). */
    isClickable?: boolean;
    /** If the item is clickable and the type of navigation is a link, this is the link */
    link?: string;
    /** If the item is clickable and the type of navigation is a function, this is the function */
    onClick?: () => void;
    /** Should be the current Item - mainly effects the item`s style. */
    isCurrent?: boolean;
    /** An Icon - If no icon needed then should be left empty. */
    icon?: SubIcon;
}
declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
export default BreadcrumbItem;
