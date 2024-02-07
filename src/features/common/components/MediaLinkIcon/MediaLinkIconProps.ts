import { MusicPlatform } from "../../Constants";

export interface MediaLinkIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    platform: MusicPlatform;
    link: string;
    name: string;
}