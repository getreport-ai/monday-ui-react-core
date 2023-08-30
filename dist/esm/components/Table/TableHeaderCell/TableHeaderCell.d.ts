import { FC } from "react";
import { SubIcon, VibeComponentProps } from "../../../types";
export interface ITableHeaderCellProps extends VibeComponentProps {
    title: string;
    icon?: SubIcon;
    infoContent?: string;
    sortState?: "asc" | "desc" | "none";
    onSortClicked?: (direction: "asc" | "desc" | "none") => void;
}
declare const TableHeaderCell: FC<ITableHeaderCellProps>;
export default TableHeaderCell;
