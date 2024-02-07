import { MusicPage } from "@/features/music/MusicPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: ".lonelysword - Music",
    description: "Music discography for .lonelysword",
    alternates: {
        canonical: "/music",
        languages: {
          en: "/music",
        }
      },
    openGraph: {
        type: "website",
        url: "https://lonelysword.com/music",
        title: ".lonelysword - Music",
        description: "Music discography for .lonelysword",
        images: [
            "/images/burymeinamethyst.jpg",
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://lonelysword.com/music",
        images: [
            "/images/burymeinamethyst.jpg",
        ],
        title: ".lonelysword - Music",
        description: "Music discography for .lonelysword",
    },
}

export default function Music() {
    return <MusicPage />    
}