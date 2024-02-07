'use client'
import { Spinner } from "@awvremusic/awvre-ui-web";
import { useRouter } from "next/navigation";
import { useDiscography } from "./ApiSlice";
import { MusicCard } from "./components/MusicCard";

export const MusicPage = () => {
    const {
        discography,
        isLoading,
        error,
    } = useDiscography();

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