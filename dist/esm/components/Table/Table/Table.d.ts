import React, { FC, ReactElement } from "react";
import { VibeComponentProps } from "../../../types";
import { ITableHeaderProps } from "../TableHeader/TableHeader";
import { ITableBodyProps } from "../TableBody/TableBody";
export interface ITableColumn {
    id: string;
    title: string;
    infoContent?: string;
    width?: number | {
        min: number;
        max: number;
    };
}
interface ITableProps extends VibeComponentProps {
    columns: ITableColumn[];
    dataState?: {
        isLoading?: boolean;
        isError?: boolean;
    };
    errorState: ReactElement;
    emptyState: ReactElement;
    children?: ReactElement<ITableHeaderProps> | ReactElement<ITableBodyProps> | Array<ReactElement<ITableHeaderProps> | ReactElement<ITableBodyProps>>;
}
interface ITableContext {
    columns: ITableProps["columns"];
    dataState?: ITableProps["dataState"];
    emptyState: ITableProps["emptyState"];
    errorState: ITableProps["errorState"];
}
export declare const TableContext: React.Context<ITableContext>;
declare const Table: FC<ITableProps>;
export default Table;
