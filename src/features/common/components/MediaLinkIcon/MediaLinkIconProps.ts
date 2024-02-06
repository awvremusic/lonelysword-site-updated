export interface MediaLinkIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    platform: MusicPlatform;
    link: string;
    name: string;
}