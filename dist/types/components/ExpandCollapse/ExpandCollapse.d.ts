import React, { FC, ReactElement } from "react";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
interface ExpandCollapseProps extends VibeComponentProps {
    /**
     * Component as parameter to be rendered as header
     */
    headerComponentRenderer?: () => ReactElement;
    /**
     * Class name to add to the header of the expandable
     */
    headerClassName?: string;
    /**
     * Class name to add to the content of the expandable
     */
    contentClassName?: string;
    /**
     * Class name to add to the component
     */
    componentClassName?: string;
    /**
     * Header title
     */
    title?: ElementContent;
    /**
     * The value of the expandable section
     */
    children?: ElementContent;
    /**
     * The expand icon font size
     */
    iconSize?: number | string;
    /**
     * Should be open or closed by default (when rendered)
     */
    defaultOpenState?: boolean;
    open?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    hideBorder?: boolean;
}
declare const ExpandCollapse: FC<ExpandCollapseProps>;
export default ExpandCollapse;
