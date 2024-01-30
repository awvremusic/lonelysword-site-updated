import { LinkLabelProps } from "./LinkLabelProps";

export const LinkLabel = (props: LinkLabelProps) => {
    const {
        label,
        icon,
        ...other
    } = props;

    return (
        <span
            {...other}
        >
            {icon} {label}
        </span>
    );
}