interface YearsListProps {
    yearsItems: number[];
    isYearBlocked?: (year: number) => boolean;
    onSelect: (year: number) => void;
    selectedYear: string;
}
declare const YearsList: ({ yearsItems, isYearBlocked, onSelect, selectedYear }: YearsListProps) => import("react/jsx-runtime").JSX.Element;
export default YearsList;
