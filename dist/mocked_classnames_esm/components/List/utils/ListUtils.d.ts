import { MutableRefObject } from "react";
import { ListWrapperComponentStringType, ListWrapperComponentType } from "../ListConstants";
import { ListItemComponentType } from "../../ListItem/ListItemConstants";
export declare const generateListId: () => string;
export declare const useListId: (id: string) => string;
export declare const getListItemIdByIndex: (childrenRefs: MutableRefObject<HTMLElement[]>, index: number) => string;
export declare const getListItemIndexById: (childrenRefs: MutableRefObject<HTMLElement[]>, id: string) => number;
export declare const getListItemComponentType: (listComponent: ListWrapperComponentType | ListWrapperComponentStringType) => ListItemComponentType;
