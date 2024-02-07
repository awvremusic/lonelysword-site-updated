type HygraphAsset = {
    id: string;
    fileName: string;
    url: string;
}

type ArtistAstrologyData = {
    id: string;
    sunSign: ZodianSigns;
    moonSign: ZodianSigns;
    risingSign: ZodianSigns;
}

type ArtistLocationData = {
    id: string;
    city: string;
    state: string;
}

type ExtraArtistInfoData = {
    id: string;
    artistLocation: ArtistLocationData;
    artistAstrology: ArtistAstrologyData;
}

type BriefMusicData = {
    slug: string;
    musicTitle: string;
    musicType: MusicType;
    releaseDate: string;
    spotifyUri: string;
    appleMusicUri: string;
    soundCloudUri: string;
    albumArtwork: HygraphAsset;
}

type LiveMusicData = {
    article: {
        html: string;
    }
    keywords: string[];
    learningPoints: string[];
    description: string;
    tagline: string;
} & BriefMusicData

type SocialOutletData = {
    id: string;
    destinationName: string;
    instagramUrl: string;
    facebookUrl: string;
    twitterUrl: string;
    youtubeUrl: string;
    twitchUrl: string;
}

type MusicOutletData = {
    id: string;
    destinationName: string
    spotifyUri: string
    appleMusicUri: string
    soundCloudUri: string
}
    
type ExternalLinkData = {
    id: string;
    name: string
    url: string
    platform: MusicPlatform
}

type BioData = {
    id: string;
    artistName: string;
    shortDescription: string;
    profilePicture: HygraphAsset;
    fullStory: {
        text: string
        html: string
    }
    pictures: HygraphAsset[];
    musicLinks: ExternalLinkData[];
    funFacts: ExtraArtistInfoData;
}

type HomePageData = {
    recentRelease: LiveMusicData;
}
