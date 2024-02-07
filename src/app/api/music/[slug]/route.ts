import axios from "axios";

function getMusicReleaseQuery(slug: string) {
  return `{
    liveMusic(where: {slug: "${slug}"}) {
      slug
      musicTitle
      musicType
      spotifyUri
      appleMusicUri
      soundCloudUri
        albumArtwork {
            url
        }
      article {
        html
      }
      description
      tagline
      releaseDate
      keywords
      learningPoints
    }
  }
  `
}

export async function GET(request: Request) {
    const hygraphContentUrl = process.env.HYGRAPH_CONTENT_URL;
    const hygraphApiKey = process.env.HYGRAPH_API_KEY;

    const slug = request.url.split("/").pop();

    if (!slug) {
        return new Response(JSON.stringify({ error: "No slug provided", data: null, success: false }), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 500,
        });
    }

    const musicQuery = getMusicReleaseQuery(slug);

    const response = await axios.post(hygraphContentUrl, JSON.stringify({
        query: musicQuery,
}), {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "Authorization": `Bearer ${hygraphApiKey}`,
        }
        }).then((response) => response.data.data.liveMusic)
        .catch((error) => {
            console.error(error.response.data);
            return null;
        });

    if (!response) {
        return new Response(JSON.stringify({ error: "Error fetching discography", data: null, success: false }), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 400,
        });
    }

    return new Response(JSON.stringify({
        success: true,
        data: response,
        error: "",
    }), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 200,
    });
}