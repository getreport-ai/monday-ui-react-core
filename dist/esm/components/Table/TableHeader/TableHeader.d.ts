import React, { FC } from "react";
import { VibeComponentProps } from "../../../types";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
export interface ITableHeaderProps extends VibeComponentProps {
    children?: React.ReactElement<ITableHeaderCellProps> | React.ReactElement<ITableHeaderCellProps>[];
}
declare const TableHeader: FC<ITableHeaderProps>;
export default TableHeader;
