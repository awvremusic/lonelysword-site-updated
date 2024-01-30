export type ExternalLinkProps = {
    href: string;
    children: React.ReactNode;
} extends React.AnchorHTMLAttributes<HTMLAnchorElement> ? React.AnchorHTMLAttributes<HTMLAnchorElement> : never;