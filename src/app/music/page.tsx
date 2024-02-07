import { MusicPage } from "@/features/music/MusicPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: ".lonelysword - Music",
    description: "Music discography for .lonelysword",
}

export default function Music() {
    return <MusicPage />    
}