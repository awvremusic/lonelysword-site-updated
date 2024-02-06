import { LinkLabelProps } from "./LinkLabelProps";

export const LinkLabel = (props: LinkLabelProps) => {
    const {
        label,
        ...other
    } = props;

    return (
        <span
            {...other}
        >
            {label}
        </span>
    );
}