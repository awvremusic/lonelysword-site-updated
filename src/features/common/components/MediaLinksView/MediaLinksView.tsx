import { MediaLinkIcon } from "../MediaLinkIcon"
import { MediaLinksViewProps } from "./MediaLinksViewProps"

export const MediaLinksView = (props: MediaLinksViewProps) => {
    const {
        links,
        className,
        ...other
    } = props

    return (
            <section {...other} className={`my-4 flex flex-col justify-center ${className ?? ""}`}>
                { links.map((outlet, index) => (
                    <MediaLinkIcon
                    key={index}
                    name={outlet.name}
                    link={outlet.url}
                    platform={outlet.platform}
                    />
    ))}
            </section>
    )
}