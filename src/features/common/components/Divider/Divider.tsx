import { DividerProps } from "./DividerProps";

export const Divider = (props: DividerProps) => {
    const {
        className,
        style,
        ...other
    } = props;

    return (
        <hr
            className={`divider border-t border-gray-300 ${className}`}
            style={style}
            {...other}
        />
    );
}