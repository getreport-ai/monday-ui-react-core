import React, { FC } from "react";
import { VibeComponentProps } from "../../../types";
import { ITableCellProps } from "../TableCell/TableCell";
export interface ITableRowProps extends VibeComponentProps {
    children?: React.ReactElement<ITableCellProps> | React.ReactElement<ITableCellProps>[];
    style?: React.CSSProperties;
}
declare const TableRow: FC<ITableRowProps>;
export default TableRow;
