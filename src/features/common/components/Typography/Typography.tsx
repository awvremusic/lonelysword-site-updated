import { TypographyProps } from "./TypographyProps";

export const Typography = (props: TypographyProps) => {
    const {
        children,
        variant,
        ...other
    } = props;

    switch (variant) {
        case "h1":
            return (
                <h1
                {...other}
                    className={`typography text-4xl font-bold ${other.className ?? ""}`}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                {...other}
                className={`typography text-3xl font-bold ${other.className ?? ""}`}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                {...other}
                className={`typography text-2xl font-bold ${other.className ?? ""}`}
                >
                    {children}
                </h3>
            );

        case "h4":
            return (
                <h4
                {...other}
                className={`typography text-xl font-bold ${other.className ?? ""}`}
                >
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h5
                {...other}
                className={`typography text-lg font-bold ${other.className ?? ""}`}
                >
                    {children}
                </h5>
            );
        case "h6":
            return (
                <h6
                {...other}
                className={`typography text-base font-bold ${other.className ?? ""}`}
                >
                    {children}
                </h6>
            );
            default:
                return (
                    <p
                    {...other}
                    className={`typography text-base ${other.className ?? ""}`}
                    >
                        {children}
                    </p>
                )
    }
    }