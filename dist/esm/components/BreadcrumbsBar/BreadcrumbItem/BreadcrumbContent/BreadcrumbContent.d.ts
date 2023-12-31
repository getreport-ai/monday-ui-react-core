import React from "react";
import { SubIcon, VibeComponentProps } from "../../../../types";
interface BreadcrumbContentProps extends VibeComponentProps {
    isClickable?: boolean;
    link?: string;
    onClick?: () => void;
    text?: string;
    icon?: SubIcon;
    isCurrent?: boolean;
    disabled?: boolean;
}
export declare const BreadcrumbContent: React.ForwardRefExoticComponent<BreadcrumbContentProps & React.RefAttributes<unknown>>;
export {};
