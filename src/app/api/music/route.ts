import axios from "axios";

const DISCOGRAPHY_QUERY = `
{
    liveMusics {
        id
        slug
      musicTitle
      musicType
      spotifyUri
      appleMusicUri
      soundCloudUri
      releaseDate
      albumArtwork {
        url
      }
    }
  }
`

export async function GET() {
    const hygraphContentUrl = process.env.HYGRAPH_CONTENT_URL;
    const hygraphApiKey = process.env.HYGRAPH_API_KEY;

    const response = await axios.post(hygraphContentUrl, JSON.stringify({
        query: DISCOGRAPHY_QUERY,
}), {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "Authorization": `Bearer ${hygraphApiKey}`,
        }
        }).then((response) => response.data.data.liveMusics)
        .catch((error) => {
            console.error(error.response.data);
            return null;
        });

    if (!response) {
        return new Response(JSON.stringify({ error: "Error fetching discography", data: [], success: false }), {
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