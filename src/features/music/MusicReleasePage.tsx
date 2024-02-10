'use client'
import { Spinner } from "@awvremusic/awvre-ui-web";
import { MediaLinksView } from "../common/components/MediaLinksView";
import { RichTextView } from "../common/components/RichTextView";
import { Typography } from "../common/components/Typography";
import { useMusicRelease } from "./ApiSlice";
import { MusicTypeBadge } from "./components/MusicTypeBadge";
import Image from "next/image";
import { Page } from "../common/components/Page";

export const MusicReleasePage = ({slug}: {slug: string}) => {

    const { musicRelease, isLoading, error } = useMusicRelease(slug);

    if (isLoading) return (
        <Spinner />
    )

    if (!musicRelease) return (
        <Typography
            variant='body1'
        >Music release not found</Typography>
    )

    const {
        title,
        releaseDate,
        coverArt,
        type,
        description,
        learningPoints,
        keywords,
        links,
        article
    } = musicRelease;

    return (
        <Page transitionDuration={1000}>
        <article className="flex flex-col items-center mb-32" style={{maxWidth: 1600}}>
            <div>
            <div className="flex flex-row justify-between items-center w-full mb-4">
                <Typography variant="subtitle1">{releaseDate}</Typography>
                <MusicTypeBadge musicType={type} />
            </div>
            <Image src={coverArt} alt={title} width={200} height={200} priority className="rounded-md mb-12" style={{width: "80vw", height: "auto", maxWidth: 400}}/>
            </div>
            <Typography variant="h1" className="mb-4">{title}</Typography>
            <Typography variant="body1" className="mb-4 text-center" style={{width: "80%"}}>{description}</Typography>
            <MediaLinksView links={links} className="mb-4 self-center" />
            {learningPoints.length > 0 && (
                <ul className=" list-disc" style={{width: "80%"}}>
                    {learningPoints.map((point, index) => (
                        <li key={index}>
                            <Typography variant="body1">{point}</Typography>
                        </li>
                    ))}
                </ul>
                )}
            {article && (
                <>
                    <RichTextView innerHtml={article} className="mb-4" style={{width: "80%"}} />
                </>
            )}
            {keywords.length > 0 && (
            <div className="flex flex-row flex-wrap w-full mt-8 mb-4 gap-3">
                {keywords.map((keyword, index) => (
                    <Typography key={index} variant="body2" className=" bg-blue-200 text-blue-600 font-semibold rounded-md p-1">{keyword}</Typography>
                ))}
            </div>
            )}
        </article>
        </Page>
    );
}