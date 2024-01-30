import { ExternalLinkProps } from "./ExternalLink.types";

export const ExternalLink: React.FC<ExternalLinkProps> = ({
    children,
    href,
    ...props
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </a>
    )
}