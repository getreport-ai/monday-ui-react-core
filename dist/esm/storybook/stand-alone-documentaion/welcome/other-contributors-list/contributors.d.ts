import { FC } from "react";
type Contributor = {
    name: string;
    href: string;
    key?: string;
};
interface contributorsDataProps {
    contributorsData: Array<Contributor>;
}
export declare const Contributors: FC<contributorsDataProps>;
export {};
