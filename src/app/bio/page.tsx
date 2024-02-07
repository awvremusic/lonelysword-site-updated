import { BioPage } from '@/features/bio/BioPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: ".lonelysword - Bio",
    description: ".lonelysword - Bio",
    alternates: {
        canonical: "/bio",
        languages: {
          en: "/bio",
        }
      },
    openGraph: {
        type: "website",
        url: "https://lonelysword.com/bio",
        title: ".lonelysword - Bio",
        description: ".lonelysword - Bio",
        images: [
            "/images/lonelysword_bio_cropped.jpg",
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://lonelysword.com/bio",
        images: [
            "/images/lonelysword_bio_cropped.jpg",
        ],
        title: ".lonelysword - Bio",
        description: ".lonelysword - Bio",
    },
}    

export default function Bio() {
    return <BioPage />
}