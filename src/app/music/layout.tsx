import { Metadata } from "next"

export const metaData: Metadata = {
    title: ".lonelysword - Music",
    description: "Music discography for .lonelysword",
}

export default function MusicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="music-wrapper">
            {children}
        </div>
    )
}