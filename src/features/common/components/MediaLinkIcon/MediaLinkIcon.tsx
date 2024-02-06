import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../ExternalLink";
import { MediaLinkIconProps } from "./MediaLinkIconProps";
import {faSpotify, faSoundcloud, faApple, faYoutube} from '@fortawesome/free-brands-svg-icons';

const SPOTIFY_COLOR = "#1DB954";
const APPLE_MUSIC_COLOR = "#FC3C44";
const YOUTUBE_COLOR = "#FF0000";
const SOUNDCLOUD_COLOR = "#FF3300";

export const MediaLinkIcon = (props: MediaLinkIconProps) => {
    const {
        link,
        platform,
        name,
        className,
        ...other
    } = props;

    let color = "";
    switch (platform) {
        case "spotify":
            color = SPOTIFY_COLOR;
            break;
        case "apple":
            color = APPLE_MUSIC_COLOR;
            break;
        case "youtube":
            color = YOUTUBE_COLOR;
            break;
        case "soundcloud":
            color = SOUNDCLOUD_COLOR;
            break;
    }

    let icon = null;
    switch (platform) {
        case "spotify":
            icon = faSpotify;
            break;
        case "apple":
            icon = faApple;
            break;
        case "youtube":
            icon = faYoutube;
            break;
        case "soundcloud":
            icon = faSoundcloud;
            break;
    }

    return (
        <span
            {...other}
        className={`media-link border-r-4 p-2 flex flex-row ${className ?? ""}`}
        style={{backgroundColor: color}}
        >
            {icon && <FontAwesomeIcon icon={icon} color={"white"} className="fa-solid fa-lg mr-4" />}
            <ExternalLink
                href={link}
            >
                {name}
            </ExternalLink>
        </span>
    )
}