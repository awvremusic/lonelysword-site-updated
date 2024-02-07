import { ExternalLink } from "@/features/common/businessObject/ExternalLink";

export interface MediaLinksViewProps extends React.HTMLAttributes<HTMLDivElement> {
    links: ExternalLink[];
}