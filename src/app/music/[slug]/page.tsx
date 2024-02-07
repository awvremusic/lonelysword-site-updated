import { MusicReleasePage } from "@/features/music/MusicReleasePage";

import axios from "axios";
import { Metadata } from "next";

function getMusicReleaseQuery(slug: string) {
    return `{
      liveMusic(where: {slug: "${slug}"}) {
        slug
        musicTitle
          albumArtwork {
              url
          }
        description
        keywords
      }
    }
    `
  }

type Props = {
    params: {
        slug: string;
    };
}

export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    const { slug } = params;
    const hygraphContentUrl = process.env.HYGRAPH_CONTENT_URL;
    const hygraphApiKey = process.env.HYGRAPH_API_KEY;

    const musicQuery = getMusicReleaseQuery(slug);

    const response = await axios.post(hygraphContentUrl, JSON.stringify({
        query: musicQuery,
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${hygraphApiKey}`,
        },
    }).then((response) => {
        return response.data.data.liveMusic
    }).catch((error) => null);

    if (response) {
        const musicRelease = response;
        const {
            musicTitle: title,
            keywords,
            albumArtwork: { url: coverArt },
            description,
        } = musicRelease;
        
        const musicUrl = `https://lonelysword.com/music/${slug}`
        const metaTitle = `.lonelysword - ${title}`;

        return {
            title: metaTitle,
            description: description,
            openGraph: {
                title: metaTitle,
                description: description,
                url: musicUrl,
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
            twitter: {
                card: "summary_large_image",
                site: musicUrl,
                title: metaTitle,
                description: description,
                images: [
                    coverArt
                ]
            }
        };
    }

    return {
        title: ".lonelysword - Music Release",
        description: ".lonelysword - Music Release",
    }
  }

export default function MusicRelease({ params }: Props) {
    return <MusicReleasePage slug={params.slug} />
}