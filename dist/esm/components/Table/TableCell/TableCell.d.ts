import React, { FC } from "react";
import { VibeComponentProps } from "../../../types";
export interface ITableCellProps extends VibeComponentProps {
    children?: React.ReactNode;
}
declare const TableCell: FC<ITableCellProps>;
export default TableCell;
