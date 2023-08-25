import { Screen } from "@testing-library/react";
export declare function testHoverTooltipTrigger(canvas: Screen, getHoverableElement: () => Promise<HTMLElement>, tooltipData?: {
    id?: string;
    content?: string;
    showDelay?: number;
}): Promise<void>;
