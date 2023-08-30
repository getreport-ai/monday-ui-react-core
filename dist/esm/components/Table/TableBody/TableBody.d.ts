import { FC, ReactElement, ComponentProps } from "react";
import { VibeComponentProps } from "../../../types";
import { ITableRowProps } from "../TableRow/TableRow";
import VirtualizedList from "../../VirtualizedList/VirtualizedList";
export interface ITableBodyProps extends VibeComponentProps {
    children?: ReactElement<ITableRowProps> | ReactElement<ITableRowProps>[] | ReactElement<ComponentProps<typeof VirtualizedList>>;
}
declare const TableBody: FC<ITableBodyProps>;
export default TableBody;
