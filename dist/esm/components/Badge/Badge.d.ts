import React from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { BadgeAlignments, BadgeAnchor, BadgeType } from "./BadgeConstants";
import { IndicatorProps } from "./Indicator/Indicator";
import { CounterProps } from "../Counter/Counter";
export interface BadgeBaseProps extends VibeComponentProps {
    anchor?: BadgeAnchor;
    alignment?: BadgeAlignments;
    children: React.ReactNode;
}
interface CounterBadgeProps extends CounterProps {
    type: BadgeType.COUNTER;
}
interface IndicatorBadgeProps extends IndicatorProps {
    type?: BadgeType.INDICATOR;
}
declare type BadgeProps = BadgeBaseProps & (CounterBadgeProps | IndicatorBadgeProps);
declare const Badge: VibeComponent<BadgeProps> & {
    types?: typeof BadgeType;
    alignments?: typeof BadgeAlignments;
    anchors?: typeof BadgeAnchor;
};
export default Badge;
