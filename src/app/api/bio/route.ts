import axios from "axios";

const BIOGRAPHY_QUERY = `
{
    bios {
        id
      artistName
      shortDescription
      fullStory {
        text
        html
      }
      pictures {
        id
        url
      }
      musicLinks {
        id
        name
        platform
        url
      }
      socialLinks {
        id
        name
        platform
        url
      }
      funFacts {
        id
        artistLocation {
          id
          city
          state
        }
        artistAstrology {
          id
          sunSign
          moonSign
          risingSign
        }
      }
    }
  }
  `;

export async function GET(request: Request) {
    const hygraphContentUrl = process.env.HYGRAPH_CONTENT_URL;
    const hygraphApiKey = process.env.HYGRAPH_API_KEY;

    const response = await axios.post(hygraphContentUrl, JSON.stringify({
        query: `
        {
            bios {
                id
              artistName
              shortDescription
              fullStory {
                text
                html
              }
              profilePicture {
                id
                url
                fileName
              }
              pictures {
                id
                url
                fileName
              }
              musicLinks {
                id
                name
                platform
                url
              }
              socialLinks {
                id
                name
                platform
                url
              }
              funFacts {
                id
                artistLocation {
                  id
                  city
                  state
                }
                artistAstrology {
                  id
                  sunSign
                  moonSign
                  risingSign
                }
              }
            }
          }
          `,
}), {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "Authorization": `Bearer ${hygraphApiKey}`,
        }
        }).then((response) => response.data.data.bios[0])
        .catch((error) => {
            console.error(error.response.data);
            return null;
        });

    if (!response) {
        return new Response(JSON.stringify({ error: "Error fetching biography" }), {
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