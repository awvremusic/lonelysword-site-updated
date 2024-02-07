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

    const response = await axios.post(hygraphContentUrl, JSON.stringify({
        query: getMusicReleaseQuery(slug),
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${hygraphApiKey}`,
        },
    }).then((response) => response.data.data.liveMusic).catch((error) => null);

    if (response.status === 200) {
        const musicRelease = response.data;
        const {
            title,
            keywords,
            coverArt,
            description,
        } = musicRelease;

        return {
            title: `.lonelysword - ${title}`,
            description: description,
            openGraph: {
                title: `.lonelysword - ${title}`,
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
        title: ".lonelysword - Music Release",
        description: ".lonelysword - Music Release",
    }
  }

export default function MusicReleaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="music-release">
            {children}
        </div>
    )
}