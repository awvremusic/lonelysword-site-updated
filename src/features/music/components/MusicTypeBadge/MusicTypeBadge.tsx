import { MusicType } from "@/features/common/Constants";
import { MusicTypeBadgeProps } from "./MusicTypeBadgeProps";

const MusicTypeBadgeColors = {
    SINGLE: "bg-green-500",
    ALBUM: "bg-blue-500",
    EP: "bg-yellow-500",
    EXPERIMENT: "bg-purple-500",
}

export const MusicTypeBadge = (props: MusicTypeBadgeProps) => {
    const {
        musicType: type,
        className,
        ...other
    } = props;

    let color = "";
    switch (type) {
        case MusicType.SINGLE:
            color = MusicTypeBadgeColors.SINGLE;
            break;
        case MusicType.ALBUM:
            color = MusicTypeBadgeColors.ALBUM;
            break;
        case MusicType.EP:
            color = MusicTypeBadgeColors.EP;
            break;
        case MusicType.EXPERIMENT:
            color = MusicTypeBadgeColors.EXPERIMENT;
            break;
    }

    return (
        <div {...other} className={`music-type-badge font-semibold text-sm rounded-full px-2 m-1 ${color} text-white ${className ?? ""}`} >{type}</div>
    )
}
