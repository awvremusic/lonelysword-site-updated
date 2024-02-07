import { MusicType } from "@/features/common/Constants";

export interface MusicTypeBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    musicType: MusicType;
}