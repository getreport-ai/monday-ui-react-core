import { ComponentProps, FC } from "react";
import { VibeComponentProps } from "../../../types";
import VirtualizedList, { VirtualizedListItem } from "../../VirtualizedList/VirtualizedList";
export interface ITableVirtualizedBodyProps extends VibeComponentProps {
    items: ComponentProps<typeof VirtualizedList>["items"];
    rowRenderer: (item: VirtualizedListItem["value"]) => JSX.Element;
}
declare const TableVirtualizedBody: FC<ITableVirtualizedBodyProps>;
export default TableVirtualizedBody;
