export function Tip({ className, title, children, emoji, type }: {
    className: any;
    title: any;
    children: any;
    emoji: any;
    type?: import("../../../components/AttentionBox/AttentionBoxConstants").AttentionBoxType;
}): import("react/jsx-runtime").JSX.Element;
export namespace Tip {
    namespace propTypes {
        const title: PropTypes.Requireable<string>;
        const children: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike>>;
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const title_1: string;
        export { title_1 as title };
        const children_1: any;
        export { children_1 as children };
        const className_1: string;
        export { className_1 as className };
    }
}
export default Tip;
import PropTypes from "prop-types";
