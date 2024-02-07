import axios from 'axios'
import { MetadataRoute } from 'next'
const MUSIC_RELEASES_QUERY = `
{
    liveMusics {
      slug
    }
  }
  `
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const hygraphContentUrl = process.env.HYGRAPH_CONTENT_URL;
    const hygraphApiKey = process.env.HYGRAPH_API_KEY;

    const response = await axios.post(hygraphContentUrl, JSON.stringify({
        query: MUSIC_RELEASES_QUERY,
        }), {
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                Authorization: `Bearer ${hygraphApiKey}`,
            }
        }).then((response) => response.data.data.liveMusics)
        .catch((error) => {
            console.error(error.response.data);
            return null;
        });
    
    let musicReleases = [];
    if (response) {
        musicReleases = response.map((release: { slug: string }) => {
            return {
                url: `https://lonelysword.com/music/${release.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.5,
            }
        });
    }

  return [
    {
      url: 'https://lonelysword.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://lonelysword.com/bio',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://lonelysword.com/music',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...musicReleases,
  ]
}