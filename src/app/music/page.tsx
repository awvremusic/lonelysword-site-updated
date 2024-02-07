'use client'

import { useDiscography } from "@/features/music/ApiSlice";
import { MusicCard } from "@/features/music/components/MusicCard";
import { Spinner, useIsMobile } from "@awvremusic/awvre-ui-web";
import { useRouter } from "next/navigation";

export default function Music() {
    const {
        discography,
        isLoading,
        error,
    } = useDiscography();

    const isMobile = useIsMobile();

    const router = useRouter();

    const goToMusicRelease = (slug: string) => {
        router.push(`/music/${slug}`);
    }

    if (isLoading) return (
        <Spinner />
    )

    return (
        <article
            className={`flex flex-row flex-wrap justify-center items-center gap-4 my-8 mx-auto self-center`}
            style={{maxWidth: 1600}}
        >
            {discography.map((album, index) => (
                <MusicCard
                    key={index}
                    discography={album}
                    onClick={() => goToMusicRelease(album.slug)}
                    className="my-8"
                />
            ))}
        </article>
    );
}