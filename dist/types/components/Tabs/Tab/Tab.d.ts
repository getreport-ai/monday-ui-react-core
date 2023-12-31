import React, { FC, ReactElement } from "react";
import { IconSubComponentProps } from "../../Icon/Icon";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { IconType } from "../../Icon/IconConstants";
export interface TabProps extends VibeComponentProps {
    /**
     * Class name for tab link-name
     */
    tabInnerClassName?: string;
    /**
     * Tab index
     */
    value?: number;
    disabled?: boolean;
    active?: boolean;
    focus?: boolean;
    icon?: string | React.FunctionComponent<IconSubComponentProps> | null;
    iconType?: IconType;
    iconSide?: string;
    onClick?: (value: number) => void;
    /**
     * Tab link-name
     */
    children?: string | ReactElement[];
}
declare const Tab: FC<TabProps>;
export default Tab;
