/// <reference types="react" />
export default function useMouseLeave({ resetOpenSubMenuIndex, hasOpenSubMenu, ref, setActiveItemIndex }: {
    resetOpenSubMenuIndex: () => void;
    hasOpenSubMenu: boolean;
    ref: React.RefObject<HTMLElement>;
    setActiveItemIndex: (index: number) => void;
}): boolean;
