import React, { AriaAttributes } from "react";
import { ITableColumn } from "./Table";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
export declare function getTableRowLayoutStyles(columns: ITableColumn[], style?: React.CSSProperties): React.CSSProperties;
export declare function getSortIcon(sortState: ITableHeaderCellProps["sortState"]): React.FC<import("../../Icon/Icons/components/MoveArrowUp").MoveArrowUpProps>;
export declare function getNextSortState(sortState: ITableHeaderCellProps["sortState"]): ITableHeaderCellProps["sortState"];
export declare function getAriaSort(sortState: ITableHeaderCellProps["sortState"]): AriaAttributes["aria-sort"];
