'use client'
import { MediaLinksView } from "@/features/common/components/MediaLinksView";
import { RichTextView } from "@/features/common/components/RichTextView";
import { Typography } from "@/features/common/components/Typography";
import { useMusicRelease } from "@/features/music/ApiSlice";
import { MusicTypeBadge } from "@/features/music/components/MusicTypeBadge";
import { Spinner } from "@awvremusic/awvre-ui-web";
import axios from "axios";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
}

export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    const { slug } = params;

    const response = await axios.get(`/api/music/${slug}`);

    if (response.status === 200) {
        const musicRelease = response.data;
        const {
            title,
            keywords,
            coverArt,
            description,
        } = musicRelease;

        return {
            title: `AWVRE Music - ${title}`,
            description: description,
            openGraph: {
                title: `AWVRE Music - ${title}`,
                description: description,
                url: `https://lonelysword.com/music/${slug}`,
                tags: keywords,
                images: [
                    {
                        url: coverArt,
                        width: 200,
                        height: 200,
                        alt: title,
                    },
                ],
            },
        };
    }

    return {
        title: "AWVRE Music - Music Release",
        description: "AWVRE Music - Music Release",
    }
  }

export default function MusicReleasePage({ params }: Props) {
    const { slug } = params;

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
        <article className="flex flex-col items-center">
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
            <div className="flex flex-row flex-wrap w-full mb-4 gap-3">
                {keywords.map((keyword, index) => (
                    <Typography key={index} variant="body1" className=" bg-blue-400 text-blue-600 font-bold rounded-md p-2">{keyword}</Typography>
                ))}
            </div>
            )}
        </article>
    );
}