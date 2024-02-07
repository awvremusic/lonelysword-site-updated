import Image from "next/image";
import { MusicCardProps } from "."
import { Typography } from "@/features/common/components/Typography";
import { Divider } from "@/features/common/components/Divider";
import { MusicTypeBadge } from "../MusicTypeBadge";

export const MusicCard = (props: MusicCardProps) => {
    const {
        discography,
        className,
        ...other
    } = props;

    return (
        <div
        {...other}
            className={`music-card flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-md m-4 relative ${className ?? ""}`}
        >
            <MusicTypeBadge musicType={discography.type} className="absolute top-0 left-0" />
            <Image
                src={discography.coverArt}
                alt={discography.title}
                width={200}
                height={200}
                priority
            />
            <div  className="flex flex-col items-start px-4 text-left w-full">
                <div className="flex flex-col items-start justify-start w-full">
                    <Typography variant="subtitle1" className="mt-4">{discography.releaseDate}</Typography>
                    <Typography variant="h6" className="mt-1 mb-2">{discography.title}</Typography>
                    <Divider />
                </div>
            </div>
        </div>
    )
}